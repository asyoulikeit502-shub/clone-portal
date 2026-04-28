'use strict';
/**
 * WebCloner Engine — fixed, optimised & deep-cleaned
 *
 * Original fixes (v1):
 *  ① JS execution order preserved — defer/async/module scripts handled correctly
 *  ② ES module scripts kept as type="module" in a separate bundle file
 *  ③ Scripts that rely on DOMContentLoaded fire correctly (loaded in <head> with defer)
 *  ④ seen Set no longer blocks retries — only marked after confirmed write
 *  ⑤ cssSlots promises no longer double-pushed to allTasks
 *  ⑥ Scroll runs truly in parallel with first-wave asset fetches
 *  ⑦ Deep data-* attribute cleanup (non-lazy ones stripped after asset resolution)
 *  ⑧ Noscript tags, HTML comments, social/SEO meta, hidden elements removed
 *  ⑨ CSS level-2 cleanup enabled fully — removes duplicate selectors, dead rules
 *  ⑩ Tracker removal covers inline script bodies + tracker <link rel="preconnect">
 *  ⑪ <link rel="preload"> / <link rel="prefetch"> for removed assets cleaned up
 *  ⑫ Unused inline event attr cleanup pass (onclick="gtag(...)" etc.) for trackers
 *
 * Cleanup improvements (v2):
 *  ⑬ TRACKER_PATTERNS expanded — covers Meta, Bing, Clarity, Mixpanel, Amplitude,
 *     Heap, FullStory, LogRocket, CrazyEgg, Mouseflow, ad networks (AdRoll, Criteo,
 *     Outbrain, Taboola, LinkedIn Ads, Twitter Ads, Yandex Metrika, etc.)
 *  ⑭ THIRD_PARTY_USELESS_PATTERNS — removes chat widgets (Intercom, Zendesk, Drift,
 *     Tawk, LiveChat, Freshchat, Olark), A/B testing (Optimizely), session replay,
 *     cookie-consent banners (CookieBot, OneTrust), accessibility overlays, etc.
 *  ⑮ REMOVABLE_DATA_ATTRS expanded — covers AOS, WOW.js, Elementor, WPBakery,
 *     Webflow CMS, Vue scoped hashes, Angular internals, extra tracking attrs
 *  ⑯ cleanupDataAttrs uses regex prefix matching — removes entire namespaces
 *     (data-gtm-*, data-track*, data-analytics*, data-react-*, data-v-*, etc.)
 *  ⑰ cleanupHtml removes admin bars, broken/empty resource tags (src="", src="#"),
 *     blank <img> tags, duplicate <link rel="stylesheet"> pointing to same href,
 *     chat/widget iframes, and duplicate favicon definitions
 *  ⑱ cleanupCssImports strips tracker/ad @import rules from bundled CSS
 *  ⑲ deduplicateCssSelectors removes exact duplicate CSS blocks in non-minify mode
 *  ⑳ removeEmptyJsFiles post-pass deletes JS files that are empty or comment-only
 *     after download/minification (e.g. tracker stubs that returned empty bodies)
 *  ㉑ removeOrphanedScriptTags removes <script src="js/..."> tags in final HTML
 *     whose local .js file was deleted or never successfully written
 *  ㉒ Tracker @import URL cleanup always runs (not gated on removeTrackers flag)
 *     since those assets are never downloaded anyway
 *
 * Platform-aware cleanup (v3):
 *  ㉓ detectPlatform() — fingerprints HTML to identify Shopify, WordPress, or generic
 *     site before any script decisions are made
 *  ㉔ SHOPIFY_USELESS_URL_PATTERNS — URL-based removal of Shopify-specific scripts
 *     that have zero function in a static clone: storefront API pollers, cart AJAX,
 *     live-chat apps (Gorgias, Re:amaze, Tidio), Klaviyo, Yotpo, Recart, Privy,
 *     Smile.io loyalty, Shogun/PageFly builder scripts, Shopify analytics SDK, etc.
 *  ㉕ WP_USELESS_URL_PATTERNS — URL-based removal of WordPress-only scripts useless
 *     statically: wp-embed, admin-bar, heartbeat, comment-reply (when no form),
 *     WooCommerce cart/checkout AJAX, Akismet, WP-cron triggers, Block Editor
 *     (Gutenberg) front-end scripts, WP Statistics, MonsterInsights, etc.
 *  ㉖ classifyScriptContent() — content-based classifier that reads downloaded JS and
 *     labels it SAFE_KEEP, SAFE_REMOVE, or NEEDS_REVIEW using pattern matching
 *     against both "must keep" signals (slider init, accordion, menu toggle, form
 *     validation, animation, cart UI) and "safe to remove" signals (API polling,
 *     checkout mutation, server-side session management, push notification SDKs,
 *     loyalty/referral SDK, A/B test framework, CMS live-preview bridge, etc.)
 *  ㉗ Content-based inline script classifier applied to every inline <script> body —
 *     removes pure Shopify Liquid config dumps, WP REST nonces, and platform SDK
 *     init blocks that have no UI effect in a static clone
 *  ㉘ Platform-specific data-* attribute cleanup: Shopify section/block IDs,
 *     data-shopify-*, data-wc-*, data-block-* (Gutenberg), data-product-* (catalog)
 */

const puppeteer    = require('puppeteer');
const cheerio      = require('cheerio');
const axios        = require('axios');
const http         = require('http');
const https        = require('https');
const fs           = require('fs-extra');
const path         = require('path');
const crypto       = require('crypto');
const { execSync } = require('child_process');
const mime         = require('mime-types');
const CleanCSS     = require('clean-css');
const { minify: terserMinify } = require('terser');
const jsBeautify   = require('js-beautify');
const pLimit       = require('p-limit');

// ─── Shared axios instance with connection pooling ────────────────────────
const httpAgent  = new http.Agent({ keepAlive: true, maxSockets: 32 });
const httpsAgent = new https.Agent({ keepAlive: true, maxSockets: 32 });
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

const http_client = axios.create({
  timeout: 12000,
  headers: { 'User-Agent': UA },
  httpAgent,
  httpsAgent,
  maxRedirects: 5,
});

// ─── Constants ───────────────────────────────────────────────────────────
const FONT_EXTS = new Set(['.woff', '.woff2', '.ttf', '.eot', '.otf']);

const TRACKER_PATTERNS = [
  // Google
  /google-analytics\.com/,
  /googletagmanager\.com/,
  /\bgtag\/js\b/,
  /doubleclick\.net/,
  /adsbygoogle/,
  /googlesyndication\.com/,
  /googleadservices\.com/,
  /google\.com\/ads/,
  // Meta / Facebook
  /facebook\.net\/en_US\/fbevents/,
  /connect\.facebook\.net/,
  // Microsoft
  /bat\.bing\.com/,
  /clarity\.ms/,
  // Analytics / UX tools
  /hotjar\.com/,
  /intercom\.io/,
  /segment\.com\/analytics/,
  /mixpanel\.com/,
  /amplitude\.com\/libs/,
  /heap\.io/,
  /fullstory\.com/,
  /logrocket\.com/,
  /crazyegg\.com/,
  /mouseflow\.com/,
  /luckyorange\.com/,
  /smartlook\.com/,
  // Ad / affiliate networks
  /shareasale\.com/,
  /clickbank\.net/,
  /amazonaws\.com\/.*\/ads\//,
  /adroll\.com/,
  /criteo\.com/,
  /outbrain\.com/,
  /taboola\.com/,
  /twitter\.com\/i\/adsct/,
  /analytics\.twitter\.com/,
  /snap\.licdn\.com/,
  /linkedin\.com\/px/,
  /ads\.linkedin\.com/,
  // Other tracking pixels
  /t\.co\/i\/adsct/,
  /mc\.yandex\.ru/,
  /pixel\.quantserve\.com/,
  /sb\.scorecardresearch\.com/,
  /beacon\.tapfiliate\.com/,
  /r\.nexac\.com/,
];

// Inline JS patterns that indicate tracker-only code blocks
const TRACKER_INLINE_PATTERNS = [
  /gtag\s*\(/,
  /ga\s*\(\s*['"]send['"]/,
  /fbq\s*\(/,
  /hj\s*\(/,
  /analytics\.track\s*\(/,
  /window\._mfq/,
  /window\.dataLayer\s*=/,
  /GoogleTagManager/,
  /mixpanel\.track\s*\(/,
  /_hsq\.push/,                   // HubSpot
  /intercomSettings\s*=/,         // Intercom
  /heap\.track\s*\(/,
  /FS\.identify\s*\(/,            // FullStory
  /LogRocket\s*\./,
  /clarity\s*\(\s*['"]set['"]/,   // MS Clarity
  /window\.optimizely/,           // Optimizely
  /Sentry\.init\s*\(/,            // Error trackers (not needed in static clone)
  /datadog-rum/,
  /DD_RUM\s*\./,
];

// Third-party script hostnames that serve no purpose in a static clone
// (chat widgets, A/B testing, session replay, ad SDKs, etc.)
const THIRD_PARTY_USELESS_PATTERNS = [
  /cdn\.optimizely\.com/,
  /cdn\.heapanalytics\.com/,
  /widget\.intercom\.io/,
  /js\.hubspot\.com/,
  /js\.hs-scripts\.com/,
  /js\.hs-analytics\.com/,
  /static\.zdassets\.com/,        // Zendesk chat
  /widget\.freshworks\.com/,      // Freshchat
  /cdn\.livechatinc\.com/,
  /cdn\.tawk\.to/,
  /cdn\.olark\.com/,
  /chat\.purecloud\.com/,
  /js\.driftt\.com/,              // Drift chat
  /cdn\.reamaze\.com/,
  /sdk\.51\.la/,
  /webfonts\.radixui\.com/,
  /js\.cookie-script\.com/,       // Cookie consent banners
  /cdn\.cookielaw\.org/,
  /cookiebot\.com/,
  /cdn\.userway\.org/,            // Accessibility overlays
  /fast\.fonts\.net(?!.*css)/,    // Typekit JS (CSS is fine, JS SDK not needed)
  /use\.typekit\.net(?!.*css)/,
  /cdn\.sift\.com/,               // Fraud detection
  /widget\.trustpilot\.com/,      // Review widgets (keep iframe but not tracking JS)
  /sdk\.amazon-adsystem\.com/,
  /z-na\.amazon-adsystem\.com/,
];

// ─── Platform detection ────────────────────────────────────────────────────
/**
 * Fingerprint the HTML to identify the platform. Called once per page.
 * Returns 'shopify' | 'wordpress' | 'generic'.
 */
function detectPlatform(htmlContent) {
  // Shopify signals
  if (
    /cdn\.shopify\.com/i.test(htmlContent) ||
    /Shopify\.theme/i.test(htmlContent) ||
    /shopify-section/i.test(htmlContent) ||
    /window\.Shopify\s*=/i.test(htmlContent) ||
    /myshopify\.com/i.test(htmlContent)
  ) return 'shopify';

  // WordPress signals
  if (
    /wp-content\//i.test(htmlContent) ||
    /wp-includes\//i.test(htmlContent) ||
    /wp-json\//i.test(htmlContent) ||
    /\/wp-login\.php/i.test(htmlContent) ||
    /"woocommerce"/i.test(htmlContent) ||
    /wpEmojiSettings/i.test(htmlContent)
  ) return 'wordpress';

  return 'generic';
}

// ─── Shopify-specific useless script URL patterns ─────────────────────────
// Scripts that only work with live Shopify storefront APIs, sessions, or
// paid app subscriptions. They do nothing (or break) in a static clone.
const SHOPIFY_USELESS_URL_PATTERNS = [
  // Shopify core dynamic/API scripts
  /cdn\.shopify\.com\/s\/files\/.*\/checkout/i,
  /cdn\.shopify\.com\/shopifycloud\/shopify\/assets\/storefront/i,
  /cdn\.shopify\.com\/shopifycloud\/shopify-autofill/i,
  /cdn\.shopify\.com\/shopifycloud\/consent-tracking-api/i,
  /cdn\.shopify\.com\/shopifycloud\/privacy-banner/i,
  /cdn\.shopify\.com\/shopifycloud\/customer-accounts-ui-extensions/i,
  /cdn\.shopify\.com\/shopifycloud\/web-pixels-manager/i,
  /cdn\.shopify\.com\/shopifycloud\/monorail/i,          // Shopify analytics
  /cdn\.shopify\.com\/shopifycloud\/shopify-marketing/i,
  // Shopify apps — marketing & loyalty (require live storefronts)
  /static\.klaviyo\.com/,
  /a\.klaviyo\.com/,
  /static\.yotpo\.com/,
  /staticw2\.yotpo\.com/,
  /app\.stamped\.io/,
  /cdn\.judge\.me/,
  /loox\.io\/widget/,
  /cdn\.okendo\.io/,
  /d3hw6dc1ow8pp2\.cloudfront\.net/,                    // Okendo CDN
  /app\.gorgias\.io/,
  /config\.gorgias\.chat/,
  /tidio\.com\/code/,
  /code\.tidio\.co/,
  /widget\.recart\.com/,
  /app\.privy\.com/,
  /widget\.privy\.com/,
  /cdn\.privy\.com/,
  /app\.smile\.io/,
  /cdn\.sweettooth\.io/,
  /static\.attentivemobile\.com/,
  /cdn\.pushowl\.com/,
  /sdk\.postscript\.io/,
  /reconvert\.com\/upsell/,
  /cdn\.carthook\.com/,
  // Shopify page builders
  /d2ad\.com\/shogun/i,
  /shogun-frontend\.s3/i,
  /static\.gempages\.net/,
  /cdn\.pagefly\.io/,
  /bundles\.replo\.app/,
  // Shopify search/filter apps
  /cdn\.searchanise\.io/,
  /appstatic\.searchpie\.io/,
  /cdn\.klevu\.com/,
  /cdn\.constructor\.io/,
  /bundles\.searchspring\.net/,
];

// ─── WordPress-specific useless script URL patterns ───────────────────────
// Scripts that depend on WP's PHP backend, login sessions, REST API nonces,
// WooCommerce AJAX, or plugin admin infrastructure.
const WP_USELESS_URL_PATTERNS = [
  // WordPress core — non-UI scripts
  /\/wp-includes\/js\/wp-embed(\.min)?\.js/i,
  /\/wp-includes\/js\/admin-bar(\.min)?\.js/i,
  /\/wp-includes\/js\/heartbeat(\.min)?\.js/i,
  /\/wp-includes\/js\/wp-api(\.min)?\.js/i,
  /\/wp-includes\/js\/wp-api-fetch(\.min)?\.js/i,
  /\/wp-includes\/js\/dist\/api-fetch(\.min)?\.js/i,
  /\/wp-includes\/js\/comment-reply(\.min)?\.js/i,
  /\/wp-includes\/js\/wp-util(\.min)?\.js/i,
  /\/wp-includes\/js\/wp-backbone(\.min)?\.js/i,
  // Gutenberg / Block editor front-end scripts (build scripts for editor, not viewer)
  /\/wp-includes\/js\/dist\/blocks\./i,
  /\/wp-includes\/js\/dist\/edit-/i,
  /\/wp-includes\/js\/dist\/block-editor/i,
  /\/wp-includes\/js\/dist\/block-library/i,
  // WooCommerce dynamic scripts
  /\/wp-content\/plugins\/woocommerce\/assets\/js\/frontend\/cart(\.min)?\.js/i,
  /\/wp-content\/plugins\/woocommerce\/assets\/js\/frontend\/checkout(\.min)?\.js/i,
  /\/wp-content\/plugins\/woocommerce\/assets\/js\/frontend\/add-to-cart(\.min)?\.js/i,
  /\/wp-content\/plugins\/woocommerce\/assets\/js\/frontend\/add-to-cart-variation(\.min)?\.js/i,
  /\/wp-content\/plugins\/woocommerce\/assets\/js\/frontend\/woocommerce(\.min)?\.js/i,
  /\/wp-content\/plugins\/woocommerce\/assets\/js\/admin\//i,
  // WordPress analytics / stats plugins
  /\/wp-content\/plugins\/google-analytics-for-wordpress\//i,
  /\/wp-content\/plugins\/google-site-kit\//i,
  /\/wp-content\/plugins\/wp-statistics\//i,
  /\/wp-content\/plugins\/monsterinsights\//i,
  /\/wp-content\/plugins\/independent-analytics\//i,
  /\/wp-content\/plugins\/rankmath\/assets\/admin\//i,
  /\/wp-content\/plugins\/wordpress-seo\/assets\/js\/dist\//i, // Yoast SEO JS
  // WP security / spam
  /\/wp-content\/plugins\/akismet\//i,
  /\/wp-content\/plugins\/wordfence\//i,
  /\/wp-content\/plugins\/really-simple-ssl\//i,
  // WP caching / optimisation (server-side, useless statically)
  /\/wp-content\/plugins\/wp-rocket\//i,
  /\/wp-content\/plugins\/autoptimize\//i,
  /\/wp-content\/plugins\/w3-total-cache\//i,
  // WP cookie consent banners
  /\/wp-content\/plugins\/cookie-law-info\//i,
  /\/wp-content\/plugins\/gdpr-cookie-consent\//i,
  /\/wp-content\/plugins\/cookieyes\//i,
  /\/wp-content\/plugins\/complianz\//i,
  // WP push notifications
  /\/wp-content\/plugins\/onesignal-free-web-push-notifications\//i,
  /\/wp-content\/plugins\/push-notifications-for-wp\//i,
  // WP membership / login gating (pointless in static clone)
  /\/wp-content\/plugins\/memberpress\//i,
  /\/wp-content\/plugins\/paid-memberships-pro\//i,
  // WP admin-side scripts leaked to front-end
  /\/wp-admin\/js\//i,
];

// ─── Content-based script classifier ─────────────────────────────────────
/**
 * Patterns that, if found in JS source, mean the script MUST be kept.
 * These cover real UI interactions needed in a static clone.
 */
const CONTENT_KEEP_PATTERNS = [
  // Slider / carousel libraries
  /\.slick\s*\(/, /Swiper\s*\(/, /owl\.carousel/, /\.flickity\s*\(/,
  /glide\s*\.mount/, /splide\s*\.mount/, /tns\s*\(/, /new\s+Glider\s*\(/,
  // Accordion / tabs / collapse
  /accordion/i, /\.collapse\s*\(/, /tab\s*\(\s*['"]show['"]/, /toggle.*class/i,
  // Mobile menu / nav
  /classList\.(toggle|add|remove).*menu/i, /hamburger/i, /navbar.toggler/i,
  /\.slideToggle/, /\.slideUp/, /\.slideDown/,
  // Modal / lightbox / popup (visual only — not CRO popups)
  /\.modal\s*\(/, /lightbox/i, /fancybox/i, /magnificPopup/i, /colorbox/i,
  // Form validation / UX
  /\.validate\s*\(/, /parsley\s*\.validate/, /formvalidat/i, /checkValidity/,
  /invalid.*input/i,
  // Animation / scroll effects
  /AOS\.init/, /wow\.init/, /ScrollReveal/, /gsap\.(to|from|timeline)/,
  /anime\s*\(/, /parallax/i, /\.animate\s*\(/, /IntersectionObserver/,
  /lottie\.loadAnimation/,
  // Counter / typed / other visual effects
  /countUp/i, /\.typed\s*\(/, /isotope/i, /masonry/i, /\.imagesLoaded/,
  // Lazy loading (needed so images appear)
  /lazyload/i, /LazyLoad/, /lazysizes/,
  // Video players (embedded, not tracker pixels)
  /videojs/i, /plyr\s*\(/,
  // Maps (static display)
  /google\.maps/, /mapboxgl\s*\./,
  // jQuery UI widgets
  /\.datepicker\s*\(/, /\.autocomplete\s*\(/, /\.sortable\s*\(/,
  // Bootstrap JS
  /bootstrap.*bundle/, /Popper\s*\./,
  // General DOM-manipulation jQuery patterns that drive UI
  /\$\s*\(\s*document\s*\)\.ready/, /DOMContentLoaded/,
  /addEventListener\s*\(\s*['"](?:click|submit|keyup|scroll|resize)/,
];

/**
 * Patterns that, if found in JS source AND no KEEP pattern matches,
 * mean the script is safe to remove.
 */
const CONTENT_REMOVE_PATTERNS = [
  // Shopify storefront API / session
  /Shopify\.onReady/, /Shopify\.PaymentButton/, /Shopify\.OptionSelectors/,
  /Shopify\.Cart\.init/, /ShopifyBuy\.buildClient/, /ShopifyBuy\.UI\.onReady/,
  /shopify-buy\b/, /storefront-api/i,
  /fetch\s*\(\s*['"`]\/cart\//,          // AJAX cart polling
  /fetch\s*\(\s*['"`]\/checkouts?\//,
  /XMLHttpRequest.*\/cart\//,
  // Shopify analytics
  /ShopifyAnalytics\.lib/, /window\.ShopifyAnalytics/,
  /trekkie\.ready/, /Shopify\.cdnHost/,
  // Klaviyo / Yotpo / review app init with no DOM effect
  /klaviyo\.identify\s*\(/, /klaviyo\.track\s*\(/,
  /window\._learnq\s*=/, /window\.yotpo\s*=/,
  // WP REST / nonce / AJAX
  /wp\.apiFetch/, /wpApiSettings/, /ajaxurl\s*=/, /admin-ajax\.php/,
  /wc_cart_params/, /wc_checkout_params/, /woocommerce_params/,
  // WP emoji (always useless in clone)
  /wpEmojiSettings/, /addAction.*emoji/, /emoji\.min\.js/,
  // Push notification SDKs
  /OneSignal\.init/, /PushNotification\.init/, /ServiceWorkerRegistration/,
  /navigator\.serviceWorker\.register/,
  // Server-driven A/B / personalisation (no effect without live backend)
  /Optimizely\.push/, /window\.optimizely\s*=/, /VWO\s*=/, /_vwo_code/,
  /ABTest\s*=/, /Monetate\s*\./,
  // CMS live-preview / builder bridges
  /shopify-section-rendering/, /Shopify\.designMode/,
  /wp\.customize\b/, /wp\.blocks\b/, /wp\.data\b/, /wp\.hooks\b/,
  // Loyalty / referral SDK inits
  /smile\.init/, /SweetToothLoyalty/, /ReferralCandy\.init/,
  // Affiliate / conversion tracking pixel inits
  /Impact\.init\s*\(/, /ShareASale\.init/, /CJ\.trackConversion/,
  // Cookie consent framework inits (no UI value without live consent API)
  /CookieConsent\.run/, /Cookiebot\.init/, /klaro\.setup/,
  /OneTrust\.Init/, /__cmp\s*\(/,
];

/**
 * Classify downloaded JS content.
 * Returns: 'keep' | 'remove' | 'review'
 *
 * Strategy:
 *  1. If ANY keep-pattern matches → always keep (safety first)
 *  2. Else if ANY remove-pattern matches → remove
 *  3. Otherwise → keep (unknown = safe default)
 */
function classifyScriptContent(code) {
  if (!code || code.trim().length < 10) return 'remove'; // trivially empty
  for (const p of CONTENT_KEEP_PATTERNS) {
    if (p.test(code)) return 'keep';
  }
  for (const p of CONTENT_REMOVE_PATTERNS) {
    if (p.test(code)) return 'remove';
  }
  return 'keep'; // unknown → keep (don't break things)
}

/**
 * Classify an inline <script> body.
 * Inline scripts are more likely to be config/init dumps, so we apply
 * additional Shopify/WP specific checks.
 * Returns: 'keep' | 'remove'
 */
function classifyInlineScript(code, platform) {
  if (!code || code.trim().length < 5) return 'remove';

  // Always keep if a UI keep-pattern matches
  for (const p of CONTENT_KEEP_PATTERNS) {
    if (p.test(code)) return 'keep';
  }

  // ── Shopify-specific inline removals ──────────────────────────────────
  if (platform === 'shopify') {
    if (
      /window\.Shopify\s*=\s*\{/.test(code) ||        // Shopify global config dump
      /Shopify\.shop\s*=/.test(code) ||
      /Shopify\.locale\s*=/.test(code) ||
      /Shopify\.currency\s*=/.test(code) ||
      /ShopifyAnalytics\.meta/.test(code) ||
      /ShopifyAnalytics\.lib/.test(code) ||
      /window\.ShopifyAnalytics\s*=/.test(code) ||
      /window\.__st\s*=/.test(code) ||                 // Shopify tracking object
      /window\.meta\s*=\s*\{.*shop/.test(code) ||
      /trekkie\.config\s*=/.test(code) ||
      /monorail-edge\.shopifysvc\.com/.test(code) ||
      // Shopify consent API init (useless statically)
      /Shopify\.loadFeatures/.test(code) ||
      /Shopify\.customerPrivacy/.test(code) ||
      /__st\s*=\s*\{/.test(code)
    ) return 'remove';
  }

  // ── WordPress-specific inline removals ────────────────────────────────
  if (platform === 'wordpress') {
    if (
      /wpEmojiSettings\s*=/.test(code) ||
      /var\s+ajaxurl\s*=/.test(code) ||
      /var\s+wc_\w+_params\s*=/.test(code) ||          // WooCommerce param objects
      /var\s+woocommerce_params\s*=/.test(code) ||
      /var\s+wpApiSettings\s*=/.test(code) ||
      /var\s+wp\s*=\s*\{["']apiRoot/.test(code) ||
      // WP REST nonce injection (only useful with live PHP backend)
      /"nonce"\s*:\s*"[a-f0-9]+"/.test(code) ||
      // WP admin bar colour/position overrides
      /#wpadminbar/.test(code) ||
      // WP block editor data stores (useless in static)
      /wp\.data\.dispatch\s*\(/.test(code) ||
      /wp\.blocks\.registerBlockType/.test(code) ||
      // WP cron trigger (pings wp-cron.php)
      /wp-cron\.php/.test(code) ||
      // WP heartbeat config
      /heartbeatSettings\s*=/.test(code)
    ) return 'remove';
  }

  // ── Generic remove patterns (platform-agnostic) ───────────────────────
  for (const p of CONTENT_REMOVE_PATTERNS) {
    if (p.test(code)) return 'remove';
  }

  return 'keep';
}

// Data attributes that are safe to strip after asset resolution
const REMOVABLE_DATA_ATTRS = [
  // Lazy-load sources (already resolved into src/srcset)
  'data-src', 'data-lazy-src', 'data-original', 'data-bg',
  'data-lazy', 'data-pagespeed-lazy-src', 'data-echo',
  'data-srcset', 'data-lazy-srcset', 'data-orig-src',
  'data-img-src', 'data-background', 'data-background-image',
  // Analytics / tracking attrs
  'data-gtm-yt-inspect', 'data-gtm-vis-first-on-screen',
  'data-gtm-vis-has-fired', 'data-gtm-vis-recent-on-screen',
  'data-gtag', 'data-ga', 'data-fbq', 'data-segment',
  'data-track', 'data-tracking', 'data-track-event',
  'data-track-action', 'data-track-category', 'data-track-label',
  'data-analytics', 'data-analytics-event', 'data-analytics-label',
  'data-pixel', 'data-ga-event', 'data-ga-category', 'data-ga-label',
  'data-heap', 'data-amplitude',
  // React / framework internals
  'data-reactid', 'data-react-helmet', 'data-react-checksum',
  'data-react-root', 'data-reactroot',
  // Vue internals
  'data-v-app', 'data-server-rendered',
  // Angular internals unlikely to be needed statically
  // (ng- and _ng- prefixes handled below via regex in cleanupDataAttrs)
  // Misc CMS / builder noise
  'data-elementor-type', 'data-elementor-id', 'data-elementor-settings',
  'data-vc-full-width', 'data-vc-full-width-init',
  'data-wow-duration', 'data-wow-delay', 'data-wow-offset',
  'data-aos-duration', 'data-aos-delay', 'data-aos-once',
  'data-scroll-reveal', 'data-parallax',
  'data-pgc', 'data-pgc-field',               // Webflow CMS
  // Shopify-specific
  'data-shopify-editor-section', 'data-shopify-section-id',
  'data-shopify-section-type', 'data-shopify-section-data',
  'data-shopify-payment-button', 'data-shopify-buy-ui',
  'data-product-id', 'data-variant-id', 'data-collection-id',
  'data-section-id', 'data-section-type', 'data-section-data',
  'data-ajax-cart', 'data-cart-drawer',
  // WordPress / WooCommerce specific
  'data-block-name', 'data-block', 'data-wp-bind', 'data-wp-class',
  'data-wp-context', 'data-wp-interactive', 'data-wp-on',
  'data-wp-run', 'data-wp-style', 'data-wp-text',
  'data-wc-bind', 'data-wc-context', 'data-wc-key',
  'data-product_id', 'data-product_sku', 'data-quantity',
  'data-nonce', 'data-security',                        // WP nonce attrs
];

// ─── Chrome detection ─────────────────────────────────────────────────────
function findChrome() {
  if (process.env.CHROME_PATH) {
    try { if (fs.pathExistsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH; } catch (_) {}
  }
  try {
    const ep = puppeteer.executablePath?.();
    if (ep && fs.pathExistsSync(ep)) return ep;
  } catch (_) {}
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
    '/opt/google/chrome/chrome', '/opt/google/chrome/google-chrome',
    '/usr/local/bin/chromium',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  ];
  for (const p of candidates) {
    try { if (fs.pathExistsSync(p)) return p; } catch (_) {}
  }
  if (process.platform !== 'win32') {
    for (const cmd of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']) {
      try { const r = execSync(`which ${cmd} 2>/dev/null`).toString().trim(); if (r) return r; } catch (_) {}
    }
  }
  return null;
}

// ─── URL helpers ──────────────────────────────────────────────────────────
function resolveUrl(raw, baseOrigin, currentPageUrl) {
  if (!raw) return null;
  const t = raw.trim();
  if (!t || t.startsWith('data:') || t.startsWith('javascript:') || t.startsWith('#') || t.startsWith('blob:')) return null;
  try {
    const base     = currentPageUrl || baseOrigin;
    const resolved = new URL(t, base.startsWith('//') ? 'https:' + base : base);
    return ['http:', 'https:'].includes(resolved.protocol) ? resolved.href : null;
  } catch (_) { return null; }
}

function normaliseForDedup(url) {
  try {
    const u = new URL(url);
    u.pathname = u.pathname.replace(/\/+$/, '') || '/';
    u.searchParams.sort();
    u.hash = '';
    return u.href;
  } catch (_) { return url; }
}

/** Collision-safe: readable stem + 6-char URL hash + extension. */
function safeFilename(url) {
  try {
    const u    = new URL(url);
    const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 6);
    const raw  = u.pathname.split('/').pop() || 'asset';
    const base = raw.split('?')[0].split('#')[0];
    const ext  = path.extname(base);
    const stem = path.basename(base, ext).replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 50);
    const finalExt = ext || (() => {
      const m = mime.lookup(u.pathname);
      if (!m) return '';
      const e = mime.extension(m);
      return e && e !== 'false' ? '.' + e : '';
    })();
    return `${stem || 'asset'}_${hash}${finalExt}`;
  } catch (_) {
    return 'asset_' + crypto.createHash('md5').update(String(url)).digest('hex').slice(0, 8);
  }
}

// ─── Network helpers ──────────────────────────────────────────────────────
async function fetchText(url, extraHeaders = {}) {
  if (!url) return null;
  try {
    const { data } = await http_client.get(url, {
      headers: { Accept: 'text/css,application/javascript,text/html,*/*', ...extraHeaders },
    });
    return typeof data === 'string' ? data : null;
  } catch (_) { return null; }
}

/**
 * FIX ④: seen Set is only marked after a confirmed write.
 * Previously, URLs were added to `seen` before the download succeeded,
 * so a failed attempt permanently blocked retries on subsequent pages.
 */
async function fetchBinary(url, targetDir, seen, onProgress, retries = 1) {
  const filename   = safeFilename(url);
  const targetPath = path.join(targetDir, filename);

  // If already successfully written, skip
  if (seen.has(url)) return targetPath;
  if (await fs.pathExists(targetPath)) {
    seen.add(url);
    return targetPath;
  }

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const { data } = await http_client.get(url, { responseType: 'arraybuffer' });
      await fs.ensureDir(targetDir);
      await fs.writeFile(targetPath, Buffer.from(data));
      seen.add(url); // Mark ONLY after confirmed success
      return targetPath;
    } catch (_) {
      if (attempt < retries) await sleep(300);
    }
  }
  onProgress?.({ type: 'log', message: `⚠ Skip: ${url.split('?')[0].slice(-60)}`, level: 'warn' });
  return null;
}

// ─── CSS asset extraction ─────────────────────────────────────────────────
/**
 * Scan CSS for url() references, queue downloads, return a replacement map.
 * All downloads run via the shared limit pool — NOT awaited here individually.
 * Returns { processedCss: Promise<string>, tasks: Promise[] }
 *
 * FIX ⑤: tasks returned here are NOT also pushed to allTasks by caller —
 * caller should push EITHER the slot promise OR the sub-tasks, not both.
 * We return tasks so the caller can push them independently if needed.
 */
function queueCssAssets(css, cssUrl, outputDir, seen, onProgress, pool) {
  const urlRe   = /url\(\s*(['"]?)([^'")\s]+)\1\s*\)/g;
  const pending = new Map(); // fullMatch → Promise<replacement | null>
  let m;

  while ((m = urlRe.exec(css)) !== null) {
    const [fullMatch, , rawVal] = m;
    if (pending.has(fullMatch)) continue;
    if (rawVal.startsWith('data:') || rawVal.startsWith('#')) continue;

    const resolved = resolveUrl(rawVal, new URL(cssUrl).origin, cssUrl);
    if (!resolved) continue;

    const ext    = path.extname(resolved.split('?')[0]).toLowerCase();
    const subDir = FONT_EXTS.has(ext) ? 'fonts' : 'images';
    const tDir   = path.join(outputDir, subDir);
    const rel    = `../${subDir}/`;

    const capturedMatch = fullMatch;
    const capturedUrl   = resolved;

    pending.set(fullMatch, pool(async () => {
      const lp = await fetchBinary(capturedUrl, tDir, seen, onProgress);
      return lp ? `url('${rel}${path.basename(lp)}')` : null;
    }));
  }

  const processedCss = (async () => {
    const entries = await Promise.all([...pending.entries()].map(async ([orig, p]) => [orig, await p]));
    let result = css;
    for (const [orig, rep] of entries) {
      if (rep) result = result.split(orig).join(rep);
    }
    return result;
  })();

  return { processedCss, tasks: [...pending.values()] };
}

// ─── HTML cleanup helpers ─────────────────────────────────────────────────

/** Comprehensive HTML cleanup — structure, meta noise, trackers, unused attrs. */
function cleanupHtml($, removeTrackers, platform) {
  // ── 1. HTML comments ──────────────────────────────────────────────────────
  // Blank non-IE-conditional comments (cheerio lacks a direct removeComment)
  $('*').contents().each((_, node) => {
    if (node.type === 'comment') {
      const data = node.data || '';
      if (!data.startsWith('[if ') && !data.startsWith('<![endif')) {
        node.data = '';
        const el = $(node);
        if (el.remove) el.remove();
      }
    }
  });

  // ── 2. Structural noise ───────────────────────────────────────────────────
  // <noscript> fallbacks are irrelevant — cloned site runs JS
  $('noscript').remove();

  // Hidden elements that are purely server-side artefacts
  // (invisible overlays, clone-time admin bars, debug panels)
  $('[id*="wpadminbar"], [id*="wp-toolbar"], .wp-admin-bar').remove();
  $('[id*="debug"], [class*="debug-panel"], [class*="dev-tools"]').filter((_, el) => {
    const style = $(el).attr('style') || '';
    return style.includes('display:none') || style.includes('display: none') || style.includes('visibility:hidden');
  }).remove();

  // ── 2b. Platform-specific structural cleanup ───────────────────────────────
  if (platform === 'shopify') {
    // Shopify section JSON scripts — served to theme editor, useless statically
    $('script[type="application/json"][data-section-type]').remove();
    $('script[type="application/json"][data-section-id]').remove();
    // Shopify predictive search drawer (requires live Storefront API)
    $('[data-predictive-search]').remove();
    $('[id*="predictive-search"]').remove();
    // Shopify password page / gating overlay (show content in clone)
    $('[class*="password-page"]').remove();
  }

  if (platform === 'wordpress') {
    // WP skip-links for screen readers — benign, but often duplicated
    // Keep: they're accessibility features and tiny
    // WP admin bar inline styles injected by PHP
    $('style#admin-bar-inline-css').remove();
    $('style#wp-admin-bar-inline-css').remove();
    // WP block editor inline style that references the live /wp-json API
    $('style[id$="-inline-css"]').each((_, el) => {
      const content = $(el).html() || '';
      if (/wp-json/.test(content) || /admin-ajax/.test(content)) $(el).remove();
    });
  }

  // ── 3. SEO / social / CMS meta that has no value in a static clone ────────
  const DEAD_META = [
    'meta[property^="og:"]',
    'meta[property^="twitter:"]',
    'meta[name^="twitter:"]',
    'meta[name="robots"]',
    'meta[name="googlebot"]',
    'meta[name="bingbot"]',
    'meta[name="generator"]',
    'meta[name="rating"]',
    'meta[name="revisit-after"]',
    'meta[name^="msapplication-"]',
    'meta[http-equiv="X-UA-Compatible"]',     // IE compat — pointless today
    'link[rel="canonical"]',
    'link[rel="alternate"]',
    'link[rel="dns-prefetch"]',
    'link[rel="preconnect"]',                 // All external — no longer needed
    'link[rel="pingback"]',
    'link[rel="EditURI"]',
    'link[rel="wlwmanifest"]',
    'link[rel="shortlink"]',
  ];
  $(DEAD_META.join(',')).remove();

  // ── 4. Favicon & manifest — keep only the first (or none if missing) ──────
  // Multiple duplicate favicon definitions from CMSs are common
  const faviconSeen = new Set();
  $('link[rel*="icon"], link[rel="manifest"]').each((_, el) => {
    const rel = ($(el).attr('rel') || '').toLowerCase();
    if (faviconSeen.has(rel)) {
      $(el).remove();
    } else {
      faviconSeen.add(rel);
    }
  });

  // ── 5. Tracker / analytics preloads + script tags ─────────────────────────
  // Always remove tracker preload/prefetch regardless of removeTrackers flag —
  // since we're not including those scripts, the hints are broken anyway.
  $('link[rel="preload"], link[rel="prefetch"]').each((_, el) => {
    const href = $(el).attr('href') || '';
    if (
      TRACKER_PATTERNS.some(p => p.test(href)) ||
      THIRD_PARTY_USELESS_PATTERNS.some(p => p.test(href))
    ) $(el).remove();
  });

  if (removeTrackers) {
    // Remove third-party useless script tags (chat widgets, session replay, etc.)
    $('script[src]').each((_, el) => {
      const src = $(el).attr('src') || '';
      if (THIRD_PARTY_USELESS_PATTERNS.some(p => p.test(src))) {
        $(el).remove();
      }
    });

    // Remove inline tracker event attributes on elements
    const INLINE_EVENT_ATTRS = ['onclick', 'onload', 'onmouseenter', 'onmouseleave',
      'onmouseover', 'onfocus', 'onblur', 'onsubmit', 'onchange'];
    $('[onclick],[onload],[onmouseenter],[onmouseover],[onfocus],[onblur],[onsubmit]').each((_, el) => {
      for (const attr of INLINE_EVENT_ATTRS) {
        const val = $(el).attr(attr) || '';
        if (val && TRACKER_INLINE_PATTERNS.some(p => p.test(val))) {
          $(el).removeAttr(attr);
        }
      }
    });

    // Remove chat/widget iframes (Intercom, Zendesk, Drift, etc.)
    $('iframe').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src') || '';
      if (TRACKER_PATTERNS.some(p => p.test(src)) || THIRD_PARTY_USELESS_PATTERNS.some(p => p.test(src))) {
        $(el).remove();
      }
    });
  }

  // ── 6. Broken / empty resource tags ──────────────────────────────────────
  // <link> tags that point nowhere
  $('link[href=""], link:not([href])').filter((_, el) => {
    const rel = $(el).attr('rel') || '';
    return rel === 'stylesheet' || rel === 'preload' || rel === 'prefetch';
  }).remove();

  // <script> tags with empty or placeholder src
  $('script[src=""], script[src="#"]').remove();

  // <img> tags with explicitly broken src
  $('img[src=""], img[src="#"], img:not([src]):not([data-src]):not([data-lazy-src])').each((_, el) => {
    const hasSrcset = $(el).attr('srcset');
    if (!hasSrcset) $(el).remove();
  });

  // ── 7. Duplicate asset references ────────────────────────────────────────
  // Remove duplicate <link rel="stylesheet"> pointing to the same href
  const cssHrefSeen = new Set();
  $('link[rel="stylesheet"]').each((_, el) => {
    const href = $(el).attr('href') || '';
    if (!href) return;
    if (cssHrefSeen.has(href)) {
      $(el).remove();
    } else {
      cssHrefSeen.add(href);
    }
  });
}

/** Strip residual data-* attributes after asset resolution is done. */
function cleanupDataAttrs($) {
  // Patterns for data-* attribute names that are always safe to remove
  const REMOVABLE_DATA_PREFIXES = [
    /^data-gtm-/,         // Google Tag Manager
    /^data-ga-/,          // Google Analytics
    /^data-fb-/,          // Facebook
    /^data-mixpanel-/,
    /^data-heap-/,
    /^data-amplitude-/,
    /^data-segment-/,
    /^data-track/,        // data-track, data-tracking, data-trackable, etc.
    /^data-analytics/,
    /^data-pixel-/,
    /^data-ng-/,          // Angular internal directives
    /^data-_ng/,
    /^data-reactid/,
    /^data-react-/,
    /^data-v-/,           // Vue scoped attribute hashes
    /^data-elementor-/,   // Elementor builder
    /^data-vc-/,          // WPBakery
    /^data-pgc-/,         // Webflow CMS
    /^data-shopify-/,     // Shopify section/editor system
    /^data-wc-/,          // WooCommerce interactivity API
    /^data-wp-/,          // WordPress interactivity API
  ];

  $('*').each((_, el) => {
    const attribs = el.attribs || {};
    for (const attr of Object.keys(attribs)) {
      if (
        REMOVABLE_DATA_ATTRS.includes(attr) ||
        REMOVABLE_DATA_PREFIXES.some(re => re.test(attr))
      ) {
        $(el).removeAttr(attr);
      }
    }
  });
}

/**
 * Post-write cleanup: remove JS files that were written but contain only
 * tracker/analytics code (empty after stripping) or are genuinely empty.
 * Called after all jsWriteTasks have settled.
 */
async function removeEmptyJsFiles(outputDir, onProgress) {
  const jsDir = path.join(outputDir, 'js');
  let removed = 0;
  try {
    const files = await fs.readdir(jsDir);
    await Promise.all(files.map(async (file) => {
      if (!file.endsWith('.js')) return;
      // Never remove our own interaction-fix script
      if (file === 'clone-interactions-fix.js') return;
      const filePath = path.join(jsDir, file);
      try {
        const content = await fs.readFile(filePath, 'utf8');
        const stripped = content
          .replace(/\/\*[\s\S]*?\*\//g, '')   // block comments
          .replace(/\/\/[^\n]*/g, '')          // line comments
          .replace(/\s+/g, '');               // whitespace
        if (!stripped || stripped.length < 10) {
          await fs.remove(filePath);
          removed++;
          onProgress?.({ type: 'log', message: `🗑 Removed empty JS: ${file}`, level: 'warn' });
        }
      } catch (_) {}
    }));
    if (removed > 0) {
      onProgress?.({ type: 'log', message: `🧹 Removed ${removed} empty/trivial JS files`, level: 'info' });
    }
  } catch (_) {}
}

/**
 * Post-write cleanup: remove <script> tags in final HTML that reference
 * JS files which no longer exist on disk (were removed or never written).
 */
async function removeOrphanedScriptTags($, outputDir) {
  const jsDir = path.join(outputDir, 'js');
  let existingFiles;
  try {
    existingFiles = new Set(await fs.readdir(jsDir));
  } catch (_) {
    existingFiles = new Set();
  }

  $('script[src]').each((_, el) => {
    const src = $(el).attr('src') || '';
    if (!src.startsWith('js/')) return;
    const basename = path.basename(src);
    if (!existingFiles.has(basename)) {
      $(el).remove();
    }
  });
}

/**
 * Remove unused CSS @import rules for external resources that were not
 * downloaded (404s, trackers, etc.) by checking if their url() targets exist.
 */
function cleanupCssImports(css) {
  // Remove @import rules that reference tracker or ad domains
  return css.replace(/@import\s+(?:url\(['"]?|['"])([^'")\s]+)['"]?\)?[^;]*;/g, (match, importUrl) => {
    if (
      TRACKER_PATTERNS.some(p => p.test(importUrl)) ||
      THIRD_PARTY_USELESS_PATTERNS.some(p => p.test(importUrl))
    ) {
      return '/* @import removed (tracker/ad) */';
    }
    return match;
  });
}

/**
 * Remove duplicate CSS rules (same selector appearing more than once with
 * identical declarations) that CleanCSS level-2 may miss in non-minify mode.
 */
function deduplicateCssSelectors(css) {
  // Only do this on non-minified output to avoid mangling whitespace-sensitive rules
  // Strategy: track the last occurrence of each selector block and remove earlier ones
  const seenBlocks = new Map();
  // Simple dedup: find exact duplicate blocks "selector { ... }" and keep last
  return css.replace(/([^{}]+)\{([^{}]*)\}/g, (match, selector, body) => {
    const key = selector.trim().replace(/\s+/g, ' ');
    const normalBody = body.trim().replace(/\s+/g, ' ');
    if (!key || key.startsWith('@')) return match; // skip at-rules
    const prev = seenBlocks.get(key);
    if (prev === normalBody) {
      return '/* duplicate removed */';
    }
    seenBlocks.set(key, normalBody);
    return match;
  });
}

// ─── Main page processor ──────────────────────────────────────────────────
async function processPage({
  htmlContent, currentUrl, baseOrigin, outputDir, outputFile,
  stats, minify, doBeautify, removeTrackers, seen, onProgress, pool,
}) {
  const $ = cheerio.load(htmlContent);

  // Detect platform once — used by script classifiers throughout
  const platform = detectPlatform(htmlContent);
  if (platform !== 'generic') {
    onProgress({ type: 'log', message: `🔍 Platform detected: ${platform}`, level: 'info' });
  }

  // Run structural HTML cleanup early
  cleanupHtml($, removeTrackers, platform);

  // Ordered slots so bundle preserves document specificity order
  const cssSlots = [];   // { promise: Promise<string|null> }
  const jsSlots  = [];   // { promise: Promise<string|null>, isModule: bool }
  const allTasks = [];   // every async task — awaited once at the end

  // ── CSS ─────────────────────────────────────────────────────────────
  // 1. Google Fonts links
  $('link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) {
      const slotIdx = cssSlots.length;
      cssSlots.push({ promise: null });
      // FIX ⑤: p is pushed to cssSlots only — NOT also to allTasks
      const p = pool(async () => {
        const css = await fetchText(href, { 'User-Agent': UA });
        if (!css) return null;
        const { processedCss, tasks } = queueCssAssets(css, href, outputDir, seen, onProgress, pool);
        allTasks.push(...tasks); // push sub-tasks (url() downloads) but not p itself again
        const result = await processedCss;
        const fontMatches = (result.match(/url\('\.\.\/fonts\//g) || []).length;
        stats.fonts += fontMatches;
        return result;
      });
      cssSlots[slotIdx].promise = p;
      // allTasks.push(p) — REMOVED: slot promises resolve allTasks implicitly via Promise.all
    }
    $(el).remove();
  });

  // 2. External stylesheets
  $('link[rel="stylesheet"], link[rel="preload"][as="style"]').each((_, el) => {
    const href = resolveUrl($(el).attr('href'), baseOrigin, currentUrl);
    if (href) {
      const slotIdx = cssSlots.length;
      cssSlots.push({ promise: null });
      const p = pool(async () => {
        const raw = await fetchText(href);
        if (!raw) return null;
        const { processedCss, tasks } = queueCssAssets(raw, href, outputDir, seen, onProgress, pool);
        allTasks.push(...tasks);
        const result = await processedCss;
        stats.css++;
        return result;
      });
      cssSlots[slotIdx].promise = p;
      // NOT pushed to allTasks — sub-tasks already are
    }
    $(el).remove();
  });

  // 3. Inline <style>
  $('style').each((_, el) => {
    const src = $(el).html() || '';
    if (src.trim()) {
      const slotIdx = cssSlots.length;
      cssSlots.push({ promise: null });
      const { processedCss, tasks } = queueCssAssets(src, currentUrl, outputDir, seen, onProgress, pool);
      allTasks.push(...tasks);
      cssSlots[slotIdx].promise = processedCss;
    }
    $(el).remove();
  });

  // ── JS ──────────────────────────────────────────────────────────────
  /**
   * Interaction-safe JS handling:
   * - DO NOT merge all scripts into one bundle. Many sites need the exact script
   *   tag order because jQuery/plugins/theme init files depend on each other.
   * - Save every external/inline executable script as its own local file.
   * - Preserve type="module", nomodule, defer, async, and script order.
   * - Keep JSON-LD/templates untouched.
   */
  const jsWriteTasks = [];
  let scriptIndex = 0;

  function cloneScriptAttributes($el, keepSrc = false) {
    const attrs = { ...($el[0]?.attribs || {}) };
    if (!keepSrc) delete attrs.src;
    return attrs;
  }

  function buildScriptTag(attrs, src) {
    const parts = [];
    for (const [key, value] of Object.entries(attrs)) {
      if (key === 'src') continue;
      if (value === '' || value === key) parts.push(key);
      else parts.push(`${key}="${String(value).replace(/"/g, '&quot;')}"`);
    }
    parts.push(`src="${src}"`);
    return `<script ${parts.join(' ')}></script>`;
  }

  $('script').each((_, el) => {
    const $el = $(el);
    const rawType = (($el.attr('type') || '').toLowerCase()).trim();
    const isExecutable = !rawType || rawType === 'text/javascript' || rawType === 'application/javascript' || rawType === 'module';

    // Keep JSON-LD, templates, import maps, etc. exactly as they are.
    if (!isExecutable) return;

    const src = $el.attr('src');
    const index = String(++scriptIndex).padStart(3, '0');

    if (src) {
      const resolved = resolveUrl(src, baseOrigin, currentUrl);

      // ── URL-based removal ──────────────────────────────────────────────
      // 1. Trackers / useless third-party (always applied when removeTrackers)
      if (removeTrackers && (
        TRACKER_PATTERNS.some(p => p.test(src)) ||
        THIRD_PARTY_USELESS_PATTERNS.some(p => p.test(src)) ||
        (resolved && (
          TRACKER_PATTERNS.some(p => p.test(resolved)) ||
          THIRD_PARTY_USELESS_PATTERNS.some(p => p.test(resolved))
        ))
      )) {
        onProgress({ type: 'log', message: `🚫 Tracker: ${src.split('/').pop()}`, level: 'warn' });
        $el.remove();
        return;
      }

      // 2. Platform-specific URL patterns (always applied — these scripts
      //    are functionally broken without a live backend regardless of tracker flag)
      if (platform === 'shopify' && SHOPIFY_USELESS_URL_PATTERNS.some(p => p.test(src || resolved || ''))) {
        onProgress({ type: 'log', message: `🚫 Shopify app script: ${(src || '').split('/').pop()}`, level: 'warn' });
        $el.remove();
        return;
      }
      if (platform === 'wordpress' && WP_USELESS_URL_PATTERNS.some(p => p.test(src || resolved || ''))) {
        onProgress({ type: 'log', message: `🚫 WP script: ${(src || '').split('/').pop()}`, level: 'warn' });
        $el.remove();
        return;
      }

      // If the URL cannot be resolved, keep it instead of deleting it.
      // A required CDN dependency is better left remote than broken.
      if (!resolved) return;

      const ext = rawType === 'module' ? '.module.js' : '.js';
      const filename = `${index}_${safeFilename(resolved).replace(/\.[^.]*$/, '')}${ext}`;
      const relPath = `js/${filename}`;
      const absPath = path.join(outputDir, 'js', filename);
      const attrs = cloneScriptAttributes($el);

      jsWriteTasks.push(pool(async () => {
        const code = await fetchText(resolved);
        if (!code) return;

        // ── Content-based classification ───────────────────────────────
        const verdict = classifyScriptContent(code);
        if (verdict === 'remove') {
          onProgress({ type: 'log', message: `🚫 Content-classified remove: ${filename}`, level: 'warn' });
          return; // don't write the file; removeOrphanedScriptTags will clean the tag
        }

        let finalCode = code;
        if (minify) {
          try {
            const r = await terserMinify(code, {
              module: rawType === 'module',
              compress: false,
              mangle: false,
              output: { comments: false },
            });
            if (r.code) finalCode = r.code;
          } catch (_) {}
        } else if (doBeautify) {
          try { finalCode = jsBeautify.js(code, { indent_size: 2 }); } catch (_) {}
        }
        await fs.writeFile(absPath, finalCode, 'utf8');
        stats.js++;
      }));

      $el.replaceWith(buildScriptTag(attrs, relPath));
      return;
    }

    const code = ($el.html() || '').trim();
    if (!code) { $el.remove(); return; }

    // ── Inline script classification ────────────────────────────────────
    // First: tracker pattern check (existing behaviour)
    if (removeTrackers && TRACKER_INLINE_PATTERNS.some(p => p.test(code))) {
      onProgress({ type: 'log', message: `🚫 Inline tracker removed`, level: 'warn' });
      $el.remove();
      return;
    }

    // Second: platform-aware content classification
    const inlineVerdict = classifyInlineScript(code, platform);
    if (inlineVerdict === 'remove') {
      onProgress({ type: 'log', message: `🚫 Inline script classified remove (${platform})`, level: 'warn' });
      $el.remove();
      return;
    }

    const ext = rawType === 'module' ? '.module.js' : '.js';
    const filename = `${index}_inline${ext}`;
    const relPath = `js/${filename}`;
    const absPath = path.join(outputDir, 'js', filename);
    const attrs = cloneScriptAttributes($el);

    jsWriteTasks.push(pool(async () => {
      let finalCode = code;
      if (minify) {
        try {
          const r = await terserMinify(code, {
            module: rawType === 'module',
            compress: false,
            mangle: false,
            output: { comments: false },
          });
          if (r.code) finalCode = r.code;
        } catch (_) {}
      } else if (doBeautify) {
        try { finalCode = jsBeautify.js(code, { indent_size: 2 }); } catch (_) {}
      }
      await fs.writeFile(absPath, finalCode, 'utf8');
    }));

    $el.replaceWith(buildScriptTag(attrs, relPath));
  });

  // ── Images ──────────────────────────────────────────────────────────
  const imgDir = path.join(outputDir, 'images');

  const queueImg = (url, capturedEl, attr) => {
    const resolved = resolveUrl(url, baseOrigin, currentUrl);
    if (!resolved) return;
    const p = pool(async () => {
      const lp = await fetchBinary(resolved, imgDir, seen, onProgress);
      if (!lp) return;
      $(capturedEl).attr(attr, `images/${path.basename(lp)}`);
      stats.images++;
    });
    allTasks.push(p);
  };

  $('img').each((_, el) => {
    const src = $(el).attr('src');
    if (src && !src.startsWith('data:')) queueImg(src, el, 'src');

    // Lazy-load attrs — queue and then remove (cleanup happens in cleanupDataAttrs later)
    for (const a of ['data-src', 'data-lazy-src', 'data-original']) {
      const v = $(el).attr(a);
      if (v && !v.startsWith('data:')) {
        queueImg(v, el, 'src');
        break;
      }
    }

    // srcset
    const srcset = $(el).attr('srcset');
    if (srcset) {
      const newParts = [];
      for (const part of srcset.split(',')) {
        const tokens   = part.trim().split(/\s+/);
        const rawUrl   = tokens[0];
        const desc     = tokens.slice(1).join(' ');
        const resolved = resolveUrl(rawUrl, baseOrigin, currentUrl);
        if (resolved) {
          const fn = safeFilename(resolved);
          newParts.push(`images/${fn}${desc ? ' ' + desc : ''}`);
          const p = pool(() => fetchBinary(resolved, imgDir, seen, onProgress));
          allTasks.push(p);
        } else { newParts.push(part.trim()); }
      }
      $(el).attr('srcset', newParts.join(', '));
    }
  });

  $('picture source[srcset]').each((_, el) => {
    const srcset = $(el).attr('srcset') || '';
    const newParts = [];
    for (const part of srcset.split(',')) {
      const tokens   = part.trim().split(/\s+/);
      const rawUrl   = tokens[0];
      const desc     = tokens.slice(1).join(' ');
      const resolved = resolveUrl(rawUrl, baseOrigin, currentUrl);
      if (resolved) {
        newParts.push(`images/${safeFilename(resolved)}${desc ? ' ' + desc : ''}`);
        allTasks.push(pool(() => fetchBinary(resolved, imgDir, seen, onProgress)));
      } else { newParts.push(part.trim()); }
    }
    $(el).attr('srcset', newParts.join(', '));
  });

  // Inline style background-image
  $('[style]').each((_, el) => {
    let style   = $(el).attr('style') || '';
    let changed = false;
    const capturedEl = el;
    style = style.replace(/url\(\s*(['"]?)([^'")\s]+)\1\s*\)/g, (full, _q, rawVal) => {
      const resolved = resolveUrl(rawVal, baseOrigin, currentUrl);
      if (!resolved) return full;
      const fn = safeFilename(resolved);
      allTasks.push(pool(async () => {
        const lp = await fetchBinary(resolved, imgDir, seen, onProgress);
        if (lp) stats.images++;
      }));
      changed = true;
      return `url('images/${fn}')`;
    });
    if (changed) $(capturedEl).attr('style', style);
  });

  // video poster
  $('video[poster]').each((_, el) => {
    const poster = resolveUrl($(el).attr('poster'), baseOrigin, currentUrl);
    if (poster) {
      const capturedEl = el;
      allTasks.push(pool(async () => {
        const lp = await fetchBinary(poster, imgDir, seen, onProgress);
        if (lp) { $(capturedEl).attr('poster', `images/${path.basename(lp)}`); stats.images++; }
      }));
    }
  });

  // Fix absolute hrefs pointing to the same origin
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href') || '';
    if (href.startsWith(baseOrigin)) $(el).attr('href', href.slice(baseOrigin.length) || '/');
  });

  // ── Await ALL tasks simultaneously ──────────────────────────────────
  onProgress({ type: 'progress', value: 40, message: 'Downloading assets in parallel...' });

  const slotPromises = [
    ...cssSlots.map(s => s.promise),
    ...jsWriteTasks,
  ].filter(Boolean);

  await Promise.allSettled([...allTasks, ...slotPromises]);
  onProgress({ type: 'progress', value: 75, message: 'Bundling CSS and preserving JS order...' });

  // Keep framework data attributes for Bootstrap/Webflow/Owl/Slick/Swiper/etc.
  // Only remove lazy image attributes after we already copied their values into src/srcset.
  cleanupDataAttrs($);

  // ── Bundle CSS only ──────────────────────────────────────────────────
  const cssChunks = (await Promise.all(cssSlots.map(s => s.promise))).filter(Boolean);
  let bundledCss = cssChunks.join('\n\n/* ─ section ─ */\n\n');

  // Remove tracker/ad @import rules before any further processing
  bundledCss = cleanupCssImports(bundledCss);

  if (minify && bundledCss.trim()) {
    const r = new CleanCSS({
      level: {
        1: { all: true },
        2: { all: true, removeDuplicateRules: true, removeUnusedAtRules: true },
      },
    }).minify(bundledCss);
    if (r.styles) bundledCss = r.styles;
  } else if (doBeautify) {
    bundledCss = jsBeautify.css(bundledCss, { indent_size: 2 });
    bundledCss = deduplicateCssSelectors(bundledCss);
  } else {
    // Even without minify/beautify, run the selector dedup pass
    bundledCss = deduplicateCssSelectors(bundledCss);
  }

  const cloneSafetyCss = `
/* Clone safety: prevent stuck loading overlays and accidental scroll locks */
html, body { min-height: 100%; }
body { overflow-y: auto; }
.preloader, .preloader-wrapper, .page-loader, .loading-screen, #preloader, #loader {
  pointer-events: none;
}
`;
  bundledCss = `${bundledCss || '/* no styles */'}\n\n${cloneSafetyCss}`;
  await fs.writeFile(path.join(outputDir, 'css', 'style.css'), bundledCss, 'utf8');

  // ── Post-write JS cleanup ─────────────────────────────────────────────────
  // Remove JS files that ended up empty or trivially small (e.g. only comments)
  await removeEmptyJsFiles(outputDir, onProgress);

  // Remove <script> tags whose local file was deleted or never written
  await removeOrphanedScriptTags($, outputDir);

  // ── Add a small fallback layer for common cloned-site interactions ─────
  // This does not replace original scripts. It only helps when a plugin fails
  // because the source site used delegated click handlers or CDN-only init code.
  const fallbackJs = `
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function closest(el, selector) {
    return el && el.closest ? el.closest(selector) : null;
  }

  function unlockPageScroll() {
    var html = document.documentElement;
    var body = document.body;
    if (!body) return;

    ['no-scroll','noscroll','overflow-hidden','modal-open','menu-open','loading','is-loading','preload','preloader-active'].forEach(function (cls) {
      html.classList.remove(cls);
      body.classList.remove(cls);
    });

    [html, body].forEach(function (el) {
      var overflow = (el.style.overflow || '').toLowerCase();
      var overflowY = (el.style.overflowY || '').toLowerCase();
      if (overflow === 'hidden') el.style.overflow = 'auto';
      if (overflowY === 'hidden') el.style.overflowY = 'auto';
      if (el.style.position === 'fixed' && (el === body || el === html)) el.style.position = '';
      if (el.style.height === '100vh') el.style.height = '';
    });

    document.querySelectorAll('.preloader, .preloader-wrapper, .page-loader, .loader, .loading-screen, #preloader, #loader').forEach(function (el) {
      el.style.display = 'none';
      el.style.opacity = '0';
      el.style.visibility = 'hidden';
      el.style.pointerEvents = 'none';
    });
  }

  ready(function () {
    unlockPageScroll();
    setTimeout(unlockPageScroll, 300);
    setTimeout(unlockPageScroll, 1200);

    document.addEventListener('click', function (e) {
      var toggle = closest(e.target, '[data-bs-toggle="collapse"], [data-toggle="collapse"], [data-target], [href^="#"]');
      if (toggle) {
        var selector = toggle.getAttribute('data-bs-target') || toggle.getAttribute('data-target') || toggle.getAttribute('href');
        if (selector && selector.length > 1 && selector.charAt(0) === '#') {
          var panel = document.querySelector(selector);
          if (panel && (panel.classList.contains('collapse') || panel.classList.contains('accordion-collapse'))) {
            e.preventDefault();
            panel.classList.toggle('show');
            toggle.classList.toggle('collapsed');
            toggle.setAttribute('aria-expanded', panel.classList.contains('show') ? 'true' : 'false');
          }
        }
      }

      var accBtn = closest(e.target, '.accordion-button, .accordion-title, .faq-question, .faq-title');
      if (accBtn && !toggle) {
        var item = closest(accBtn, '.accordion-item, .faq-item, .accordion') || accBtn.parentElement;
        var body = item && (item.querySelector('.accordion-body, .accordion-content, .faq-answer, .collapse') || item.nextElementSibling);
        if (body) {
          e.preventDefault();
          accBtn.classList.toggle('active');
          body.classList.toggle('show');
          body.style.display = (body.classList.contains('show') || accBtn.classList.contains('active')) ? 'block' : '';
        }
      }

      var menuBtn = closest(e.target, '.navbar-toggler, .menu-toggle, .hamburger, .mobile-menu-toggle, [data-menu-toggle]');
      if (menuBtn) {
        var targetSelector = menuBtn.getAttribute('data-bs-target') || menuBtn.getAttribute('data-target') || menuBtn.getAttribute('data-menu-toggle');
        var menu = targetSelector ? document.querySelector(targetSelector) : null;
        if (!menu) menu = document.querySelector('.navbar-collapse, .mobile-menu, .nav-menu, .menu');
        if (menu) {
          e.preventDefault();
          menu.classList.toggle('show');
          menu.classList.toggle('active');
          document.body.classList.toggle('menu-open');
        }
      }

      var next = closest(e.target, '.slick-next, .swiper-button-next, .owl-next, [data-slider-next]');
      var prev = closest(e.target, '.slick-prev, .swiper-button-prev, .owl-prev, [data-slider-prev]');
      if (next || prev) {
        var slider = closest(e.target, '.slick-slider, .swiper, .swiper-container, .owl-carousel, .slider, .carousel');
        if (slider) {
          var track = slider.querySelector('.slick-track, .swiper-wrapper, .owl-stage, .slider-track, .carousel-inner') || slider;
          var slides = track.children;
          if (slides.length) {
            e.preventDefault();
            var current = parseInt(slider.getAttribute('data-clone-slide') || '0', 10);
            current = next ? Math.min(current + 1, slides.length - 1) : Math.max(current - 1, 0);
            slider.setAttribute('data-clone-slide', current);
            track.style.transition = 'transform .45s ease';
            track.style.transform = 'translateX(' + (-current * 100) + '%)';
            Array.prototype.forEach.call(slides, function (slide) { slide.style.flex = '0 0 100%'; });
            track.style.display = 'flex';
          }
        }
      }
    }, true);
  });
})();
`;
  await fs.writeFile(path.join(outputDir, 'js', 'clone-interactions-fix.js'), fallbackJs.trim() + '\n', 'utf8');

  // ── Stitch HTML ───────────────────────────────────────────────────────
  $('head').append('\n  <link rel="stylesheet" href="css/style.css">');
  $('body').append('\n  <script src="js/clone-interactions-fix.js" defer></script>');

  // Remove stale preload/prefetch tags for scripts/styles that may no longer exist.
  $('link[rel="preload"][as="script"], link[rel="prefetch"][as="script"]').remove();
  $('link[rel="preload"][as="style"]').remove();

  let finalHtml = $.html();
  if (doBeautify) {
    finalHtml = jsBeautify.html(finalHtml, {
      indent_size: 2,
      max_preserve_newlines: 1,
      preserve_newlines: false,
      // Don't re-indent <script> content — it may break template literals
      templating: ['django', 'erb', 'handlebars', 'php'],
    });
  }

  await fs.writeFile(outputFile, finalHtml, 'utf8');
}

// ─── Public entry point ───────────────────────────────────────────────────
async function clone({ url, outputDir, projectName, multiPage, minify, beautify: doBeautify, removeTrackers, onProgress }) {
  const seen  = new Set();
  const stats = { css: 0, js: 0, images: 0, fonts: 0, pages: 0 };
  const pool  = pLimit(16); // one shared pool — 16 concurrent network ops

  onProgress({ type: 'log', message: '🚀 Starting clone...', level: 'info' });

  await fs.ensureDir(path.join(outputDir, 'css'));
  await fs.ensureDir(path.join(outputDir, 'js'));
  await fs.ensureDir(path.join(outputDir, 'images'));
  await fs.ensureDir(path.join(outputDir, 'fonts'));

  const chromePath = findChrome();
  onProgress({ type: 'log', message: chromePath ? `🌐 Chrome: ${chromePath}` : '⚠ Using Puppeteer bundled browser', level: 'info' });

  const launchOptions = {
    headless: 'new',
    args: [
      '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage',
      '--disable-gpu', '--ignore-certificate-errors', '--disable-web-security',
      '--window-size=1440,900',
    ],
  };
  if (chromePath) launchOptions.executablePath = chromePath;

  const browser = await puppeteer.launch(launchOptions);

  try {
    const baseUrl = new URL(url);
    const visited = new Set();
    const queue   = [url];

    onProgress({ type: 'progress', value: 8, message: 'Browser ready...' });

    while (queue.length > 0) {
      const currentUrl = queue.shift();
      const normKey    = normaliseForDedup(currentUrl);
      if (visited.has(normKey)) continue;
      visited.add(normKey);

      onProgress({ type: 'log', message: `📄 Loading: ${currentUrl}`, level: 'info' });

      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      await page.setUserAgent(UA);

      // Keep images/fonts/media enabled while rendering.
      // Some sites calculate height, lazy-load sections, or unlock scrolling only after
      // images/media fire load events. Blocking them can produce a clone that looks
      // stuck, does not scroll, or misses lazy sections.

      // Smart page load: domcontentloaded + short settle for JS frameworks
      try {
        await page.goto(currentUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
        await Promise.race([
          page.waitForNetworkIdle({ idleTime: 800, timeout: 4000 }).catch(() => {}),
          sleep(1500),
        ]);
      } catch (err) {
        onProgress({ type: 'log', message: `⚠ Load: ${String(err.message).slice(0, 60)}`, level: 'warn' });
      }

      // Scroll before capturing HTML so lazy sections/images and scroll-triggered
      // animations get a chance to write their final DOM/classes.
      await page.evaluate(() => new Promise(resolve => {
        let total = 0;
        const step = Math.max(500, Math.floor(window.innerHeight * 0.75));
        const id  = setInterval(() => {
          window.scrollBy(0, step);
          total += step;
          const maxScroll = Math.max(
            document.body ? document.body.scrollHeight : 0,
            document.documentElement ? document.documentElement.scrollHeight : 0,
            2000
          );
          if (total >= maxScroll) {
            clearInterval(id);
            window.scrollTo(0, 0);
            setTimeout(resolve, 300);
          }
        }, 90);
        setTimeout(() => {
          clearInterval(id);
          window.scrollTo(0, 0);
          resolve();
        }, 6000);
      })).catch(() => {});

      const htmlContent = await page.content();

      // Multi-page link discovery
      if (multiPage && visited.size < 10) {
        const links = await page.evaluate(() =>
          Array.from(document.querySelectorAll('a[href]')).map(a => a.href)
        ).catch(() => []);
        for (const link of links) {
          try {
            const lu = new URL(link);
            if (
              lu.hostname === baseUrl.hostname &&
              !lu.pathname.match(/\.(pdf|zip|jpg|png|gif|svg|mp4|mp3|webp|ico)$/i) &&
              !lu.hash &&
              !visited.has(normaliseForDedup(link))
            ) queue.push(lu.origin + lu.pathname + lu.search);
          } catch (_) {}
        }
      }

      await page.close();
      stats.pages++;
      onProgress({ type: 'progress', value: 20, message: 'Page loaded — downloading assets...' });

      const isHome = visited.size === 1;
      const htmlFileName = isHome ? 'index.html'
        : (currentUrl.replace(baseUrl.origin, '').replace(/^\//, '').replace(/\/+$/, '').replace(/\//g, '_') || 'page') + '.html';

      await processPage({
        htmlContent, currentUrl, baseOrigin: baseUrl.origin,
        outputDir, outputFile: path.join(outputDir, htmlFileName),
        stats, minify, doBeautify, removeTrackers, seen, onProgress, pool,
      });

      onProgress({ type: 'stats', stats: { ...stats } });
      onProgress({ type: 'progress', value: 90, message: 'Almost done...' });
    }

    // Remove empty asset dirs
    for (const dir of ['images', 'fonts']) {
      const d = path.join(outputDir, dir);
      try { const f = await fs.readdir(d); if (f.length === 0) await fs.remove(d); } catch (_) {}
    }

    await fs.writeJson(
      path.join(outputDir, 'stats.json'),
      { ...stats, url, clonedAt: new Date().toISOString() },
      { spaces: 2 }
    );

    onProgress({ type: 'progress', value: 100, message: '✅ Done!' });
    onProgress({
      type: 'log',
      message: `🎉 ${stats.pages} page · ${stats.css} CSS · ${stats.js} JS · ${stats.images} images · ${stats.fonts} fonts`,
      level: 'success',
    });

  } finally {
    await browser.close();
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

module.exports = { clone };
