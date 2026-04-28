(function() {
  window.swymWishlistEmbedLoaded = true;
  var fullAssetUrl = "https://cdn.shopify.com/extensions/019dcf05-bc70-7a8c-84ba-b81a16059a23/swym-relay-733/assets/apps.bundle.js";
  var assetBaseUrl = fullAssetUrl?.substring(0, fullAssetUrl.lastIndexOf('/') + 1);
  var swymJsPath = '//procdn.swymrelay.com/code/swym-shopify.js';
  var baseJsPath = swymJsPath?.substring(0, swymJsPath.lastIndexOf('/') + 1);
  window.SwymCurrentJSPath = baseJsPath;
  window.SwymAssetBaseUrl = assetBaseUrl;

  window.SwymCurrentStorePath = "//swymstore-v3pro-01.swymrelay.com";

  function loadSwymShopifyScript() {
    var element = "";
    var scriptSrc = "";


    element = "swym-ext-shopify-script";
    window.SwymShopifyCdnInUse = true;
    scriptSrc = "https://cdn.shopify.com/extensions/019dcf05-bc70-7a8c-84ba-b81a16059a23/swym-relay-733/assets/swym-ext-shopify.js";


    if (document.getElementById(element)) {
      return;
    }

    var s = document.createElement("script");
    s.id = element;
    s.type = "text/javascript";
    s.async = true;
    s.defer = true;
    s.src = scriptSrc;

    s.onerror = function() {
      console.warn("Failed to load Swym Shopify script: ", scriptSrc, " Continuing with default");
      // Fallback logic here
      element = `swym-ext-shopify-script-${__SWYM__VERSION__}`;
      var fallbackJsPathVal = "\/\/procdn.swymrelay.com\/code\/swym-shopify.js";
      var fallbackJsPathWithExt = fallbackJsPathVal.replace("swym-shopify", "swym-ext-shopify");
      scriptSrc = fallbackJsPathWithExt + '?shop=' + encodeURIComponent(window.Shopify.shop) + '&v=' + __SWYM__VERSION__;

      var fallbackScript = document.createElement("script");
      fallbackScript.id = element;
      fallbackScript.type = "text/javascript";
      fallbackScript.async = true;
      fallbackScript.defer = true;
      fallbackScript.src = scriptSrc;
      var y = document.getElementsByTagName("script")[0];
      y.parentNode.insertBefore(fallbackScript, y);
    };

    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  }

  var consentAPICallbackInvoked = false;

  function checkConsentAndLoad() {
    // Allow app to load in design mode (theme editor) regardless of consent
    if (window.Shopify?.designMode) {
      loadSwymShopifyScript();
      return;
    }

    // Ghost-Intent: If merchant enabled explicit consent, block SDK until
    // consent is given through our Ghost-Intent flow (sync nudge accept).
    // This works on any store regardless of region (EU or non-EU).
    var ghostConfig = window.SwymGhostIntentConfig || {};
    if (ghostConfig.isExplicitConsentNeeded || ghostConfig.isExplicitConsentNeededEvenForLocalStorage) {
      try {
        var consentKey = 'swym-ghost-consent-' + (window.Shopify && window.Shopify.shop || '');
        if (localStorage.getItem(consentKey) === 'true') {
          // Consent was given through our flow — load SDK
          loadSwymShopifyScript();
          return;
        }
      } catch (e) {}

      // Check if Shopify native cookie consent was given via the cookie banner.
      // If user accepted cookies through Shopify's banner, load SDK normally
      // (Ghost-Intent is only needed when NO consent mechanism has been used).
      var shopifyConsentGiven = window.Shopify?.customerPrivacy?.preferencesProcessingAllowed?.();
      if (shopifyConsentGiven) {
        loadSwymShopifyScript();
        return;
      }

      console.warn("[Swym Ghost-Intent] SDK blocked until explicit consent is given");
      return;
    }

    var isCookieBannerVisible = window.Shopify?.customerPrivacy?.shouldShowBanner?.();
    if (!isCookieBannerVisible) {
      loadSwymShopifyScript();
      return;
    }
    var shouldLoadSwymScript = window.Shopify?.customerPrivacy?.preferencesProcessingAllowed?.();
    if (shouldLoadSwymScript) {
      loadSwymShopifyScript();
    } else {
      console.warn("No customer consent to load Swym Wishlist Plus");
    }
  }

  function initialiseConsentCheck() {
    document.addEventListener("visitorConsentCollected", (event) => {
      checkConsentAndLoad();
    });
    window.Shopify?.loadFeatures?.(
      [{
        name: 'consent-tracking-api',
        version: '0.1'
      }],
      error => {
        consentAPICallbackInvoked = true;
        if (error) {
          if (!window.Shopify?.customerPrivacy) {
            loadSwymShopifyScript();
            return;
          }
        }
        checkConsentAndLoad();
      }
    );
  }

  function consentCheckFallback(retryCount) {
    if (!consentAPICallbackInvoked) {
      if (window.Shopify?.customerPrivacy) {
        checkConsentAndLoad();
      } else if (retryCount >= 1) {
        console.warn("Shopify.loadFeatures unsuccessful on site, refer - https://shopify.dev/docs/api/customer-privacy#loading-the-customer-privacy-api. Proceeding with normal Swym Wishlist Plus load");
        // Ghost-Intent: route through checkConsentAndLoad so SDK block is respected
        checkConsentAndLoad();
      } else {
        setTimeout(() => consentCheckFallback(retryCount + 1), 1000);
      }
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseConsentCheck);
    window.addEventListener("load", () => consentCheckFallback(0));
  } else {
    initialiseConsentCheck();
  }

})();