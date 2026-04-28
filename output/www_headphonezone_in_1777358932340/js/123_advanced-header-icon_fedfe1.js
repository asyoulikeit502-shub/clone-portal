(function() {
  "use strict";

  window.SwymAdvancedHeaderIconAPI = window.SwymAdvancedHeaderIconAPI || {};

  // Check if a config value is the "not_found" sentinel
  // This happens when theme preset values are unavailable
  const isNotFound = (value) => {
    return typeof value === "string" && value.trim().toLowerCase() === "not_found";
  };

  // Check if any critical config values (iconHtml, countBubbleHtml) are "not_found"
  // If so, the header icon should not be injected
  // Note: CSS is handled separately in the Liquid template (rendered as a <style> tag)
  const hasNotFoundValues = (config) => {
    return isNotFound(config.iconHtml) || isNotFound(config.countBubbleHtml);
  };

  // Get configuration from liquid, merged with defaults so missing properties get fallbacks
  const getConfig = () => {
    const defaults = {
      iconHtml: "",
      countBubbleHtml: "",
      attachSelectorDesktop: "",
      attachSelectorMobile: "",
      hasCustomIconHtml: false,
      hasCustomCountBubbleHtml: false,
      ariaLabel: "Wishlist",
      countAriaLabel: "{{count}} items in wishlist",
      showWishlistCount: true
    };
    return Object.assign({}, defaults, window.swymAdvancedHeaderIconConfig || {});
  };

  // Simple state - no caching
  const HeaderIconState = {
    wishlistCount: 0,
    swat: null,
    initialized: false,
    sdkLoaded: false,
    initialInjectionDone: false,

    setWishlistCount(count) {
      this.wishlistCount = count;
      this.updateAllCountDisplays();
    },

    updateAllCountDisplays() {
      const config = getConfig();

      // Only update count displays if showWishlistCount is enabled
      if (config.showWishlistCount !== false) {
        const countElements = document.querySelectorAll(".swym-header-icon-count, [data-swym-count]");
        countElements.forEach((el) => {
          el.textContent = this.wishlistCount;
          el.setAttribute("data-count", this.wishlistCount);

          const bubble = el.closest(".swym-header-icon-count-bubble");
          if (bubble) {
            bubble.style.display = this.wishlistCount > 0 ? "" : "none";
          }
        });
      }

      // Update aria-label with count for screen readers (WCAG 4.1.2)
      // Use translated strings from config
      const ariaLabel = this.wishlistCount > 0 ?
        config.countAriaLabel.replace("{{count}}", this.wishlistCount.toString()) :
        config.ariaLabel;

      // Update both desktop and mobile elements
      const desktopWrapper = document.getElementById("swym-advanced-header-icon");
      const mobileWrapper = document.getElementById("swym-advanced-header-icon-mobile");

      if (desktopWrapper) {
        desktopWrapper.setAttribute("aria-label", ariaLabel);
      }
      if (mobileWrapper) {
        mobileWrapper.setAttribute("aria-label", ariaLabel);
      }
    }
  };

  // Update aria-expanded on all header icon elements (WCAG 4.1.2)
  const setWishlistExpandedState = (isExpanded) => {
    const value = isExpanded ? "true" : "false";
    const desktopWrapper = document.getElementById("swym-advanced-header-icon");
    const mobileWrapper = document.getElementById("swym-advanced-header-icon-mobile");
    if (desktopWrapper) desktopWrapper.setAttribute("aria-expanded", value);
    if (mobileWrapper) mobileWrapper.setAttribute("aria-expanded", value);
  };

  // Ensure aria-haspopup="dialog" and aria-expanded="false" are present on a header icon
  // element, regardless of how it was rendered (Liquid server-side or JS injection).
  const applyAriaToIconElement = (el) => {
    if (!el.hasAttribute("aria-haspopup")) {
      el.setAttribute("aria-haspopup", "dialog");
    }
    if (!el.hasAttribute("aria-expanded")) {
      el.setAttribute("aria-expanded", "false");
    }
  };

  // Watch the document body for the header icon element(s) and stamp ARIA attributes as
  // soon as they appear.  This handles the App-Proxy / deferred-script race condition where
  // the icon is injected into the DOM after advanced-header-icon.js has already executed.
  const observeHeaderIconAria = () => {
    const ICON_IDS = ["swym-advanced-header-icon", "swym-advanced-header-icon-mobile"];

    // Apply immediately to any elements already present in the DOM
    ICON_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) applyAriaToIconElement(el);
    });

    // Observe body for dynamically-added icon elements
    const pendingIds = new Set(
      ICON_IDS.filter((id) => !document.getElementById(id))
    );
    if (pendingIds.size === 0) return;

    const observer = new MutationObserver((mutations) => {
      if (pendingIds.size === 0) {
        observer.disconnect();
        return;
      }
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue;
          for (const id of pendingIds) {
            const target = node.id === id ? node : node.querySelector?.("#" + id);
            if (target) {
              applyAriaToIconElement(target);
              pendingIds.delete(id);
            }
          }
          if (pendingIds.size === 0) {
            observer.disconnect();
            return;
          }
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    // Safety timeout — stop observing after 30 s (same pattern as observeWishlistPanel)
    setTimeout(() => observer.disconnect(), 30000);
  };

  // Watch the wishlist panel for open/close to keep aria-expanded in sync (WCAG 4.1.2)
  const observeWishlistPanel = () => {
    const PANEL_ID = "swym-storefront-layout-container";
    const HIDE_CLASS = "swym-storefront-layout-hide-view";

    const connectPanelObserver = (panel) => {
      let lastOpenState = !panel.classList.contains(HIDE_CLASS);
      const observer = new MutationObserver(() => {
        const isOpen = !panel.classList.contains(HIDE_CLASS);
        if (isOpen !== lastOpenState) {
          lastOpenState = isOpen;
          setWishlistExpandedState(isOpen);
        }
      });
      observer.observe(panel, {
        attributes: true,
        attributeFilter: ["class"]
      });
      // Disconnect on page unload to prevent memory leaks
      window.addEventListener("pagehide", () => observer.disconnect(), {
        once: true
      });
    };

    const panel = document.getElementById(PANEL_ID);
    if (panel) {
      connectPanelObserver(panel);
      return;
    }

    // Panel not yet in DOM — observe body until it appears, with a 30s timeout
    const bodyObserver = new MutationObserver((mutations, obs) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue;
          const target = node.id === PANEL_ID ? node : node.querySelector?.("#" + PANEL_ID);
          if (target) {
            obs.disconnect();
            connectPanelObserver(target);
            return;
          }
        }
      }
    });
    bodyObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
    setTimeout(() => bodyObserver.disconnect(), 30000);
  };

  // Parse comma-separated selectors string into array
  const parseSelectors = (selectorString) => {
    if (!selectorString || typeof selectorString !== "string") {
      return [];
    }
    return selectorString
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  };

  // Find the best selector to attach the icon to
  // Supports comma-separated selectors from theme settings
  const findAttachSelector = (selectorString) => {
    // Parse comma-separated selectors
    const selectors = parseSelectors(selectorString);

    // Try each selector in order until one matches
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) return {
        selector,
        element
      };
    }

    return null;
  };

  // Process {{WISHLIST_COUNT}} placeholder in count bubble HTML
  const processCountBubbleHtml = (html, count) => {
    if (!html) return html;
    return html.replace(/\{\{WISHLIST_COUNT\}\}/g, count.toString());
  };

  // Attach click and keyboard handlers to open Swym UI (WCAG 2.1.1)
  // Includes consent flow - if no consent, show popup
  const attachClickHandler = (element) => {
    if (!element || element.hasAttribute("data-swym-click-attached")) return;

    const openWishlist = (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Ghost Wishlist Drawer: If Ghost-Intent is active and SDK is not loaded,
      // open the lightweight Ghost Wishlist drawer instead of the full storefront layout
      if (window.SwymGhostWishlistDrawer && window.SwymGhostWishlistDrawer.isActive()) {
        setWishlistExpandedState(true);
        window.SwymGhostWishlistDrawer.open();
        return;
      }

      // Check consent first (if SwymConsentManager is available)
      if (window.SwymConsentManager && !window.SwymConsentManager.checkConsent()) {
        // No consent - show popup with pending action
        if (window.SwymConsentPopupManager) {
          window.SwymConsentPopupManager.show({
            source: "advanced-header-icon",
            pendingAction: () => {
              // Wait for SDK to load after consent, then open wishlist
              // Max 100 attempts (10 seconds) to prevent infinite loop
              let attempts = 0;
              const maxAttempts = 100;
              const waitForSdk = () => {
                if (window._swat && window._swat.ui) {
                  setWishlistExpandedState(true);
                  window._swat.ui.open();
                } else if (attempts < maxAttempts) {
                  attempts++;
                  setTimeout(waitForSdk, 100);
                } else {
                  console.warn("[SWYM Header Icon] SDK failed to load after consent (timeout)");
                }
              };
              waitForSdk();
            }
          });
        }
        return;
      }

      // Consent given (or consent manager not available) - open wishlist if SDK is loaded
      if (HeaderIconState.sdkLoaded && window._swat && window._swat.ui) {
        setWishlistExpandedState(true);
        window._swat.ui.open();
      }
    };

    element.addEventListener("click", openWishlist);
    element.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        openWishlist(e);
      }
    });

    element.setAttribute("data-swym-click-attached", "true");
  };

  // Create the header icon DOM element
  // hideCountBubble: if true, hide count bubble (used for pre-SDK injection)
  // Note: Count bubble is INSIDE icon container for proper CSS positioning across themes
  const createHeaderIconElement = (count, isMobile = false, hideCountBubble = false) => {
    const config = getConfig();

    // Anchor tag is the parent wrapper with both classes
    const wrapper = document.createElement("a");
    wrapper.id = isMobile ? "swym-advanced-header-icon-mobile" : "swym-advanced-header-icon";
    wrapper.className = "swym-advanced-header-icon swym-header-icon-wrapper";
    wrapper.href = "#";
    wrapper.setAttribute("aria-label", "Wishlist");
    wrapper.setAttribute("aria-haspopup", "dialog");
    wrapper.setAttribute("aria-expanded", "false");

    // Attach click handler to open Swym UI
    attachClickHandler(wrapper);

    // Use span elements for children (semantic HTML inside anchor)
    // Count bubble is INSIDE icon container for proper positioning relative to the icon
    const iconContainer = document.createElement("span");
    iconContainer.className = "swym-header-icon-html";

    // Create a temporary container to hold the icon SVG
    const iconWrapper = document.createElement("span");
    iconWrapper.innerHTML = config.iconHtml;

    // Append icon HTML content to icon container
    while (iconWrapper.firstChild) {
      iconContainer.appendChild(iconWrapper.firstChild);
    }

    // Only create count bubble if showWishlistCount is enabled
    if (config.showWishlistCount !== false) {
      const countBubbleContainer = document.createElement("span");
      countBubbleContainer.className = "swym-header-icon-count-bubble";
      countBubbleContainer.setAttribute("aria-live", "polite");
      countBubbleContainer.setAttribute("aria-atomic", "true");
      countBubbleContainer.innerHTML = processCountBubbleHtml(config.countBubbleHtml, count);
      // Hide count bubble if SDK not loaded yet, or if count is 0
      countBubbleContainer.style.display = (hideCountBubble || count <= 0) ? "none" : "";

      // Append bubble inside icon container
      iconContainer.appendChild(countBubbleContainer);
    }

    wrapper.appendChild(iconContainer);

    return wrapper;
  };

  // Inject a single header icon (desktop or mobile)
  // hideCountBubble: if true, hide count bubble (used for pre-SDK injection)
  const injectSingleHeaderIcon = (count, selectorString, isMobile = false, hideCountBubble = false) => {
    const elementId = isMobile ? "swym-advanced-header-icon-mobile" : "swym-advanced-header-icon";
    let headerIcon = document.getElementById(elementId);

    // Find where we want to inject the icon
    const result = findAttachSelector(selectorString);

    if (headerIcon) {
      // Ensure ARIA attributes are present regardless of how the element was rendered.
      // Liquid-rendered elements already carry these attrs from the snippet, but App-Proxy
      // or stale cached pages may have missed them.
      applyAriaToIconElement(headerIcon);

      // Element exists - check if it's already in the right location
      const targetParent = result?.element?.parentNode;
      const currentParent = headerIcon.parentNode;
      const isAlreadyInCorrectLocation = targetParent && currentParent === targetParent;

      // Also check if it's in the header (some themes have header element)
      const header = document.querySelector("header");
      const isInHeader = header && header.contains(headerIcon);

      // If already in correct location OR in header, just update content
      if (isAlreadyInCorrectLocation || isInHeader) {
        const config = getConfig();
        if (config.hasCustomIconHtml) {
          updateHeaderIconContent(count, hideCountBubble);
        } else {
          updateCountBubbleDisplay(count, hideCountBubble);
        }
        attachClickHandler(headerIcon);
        return true;
      }

      // Element exists but not in header - need to move it
      // First update the content, then move
      const config = getConfig();
      if (config.hasCustomIconHtml) {
        updateHeaderIconContent(count, hideCountBubble);
      } else {
        updateCountBubbleDisplay(count, hideCountBubble);
      }
      attachClickHandler(headerIcon);

      if (result) {
        // Move to header location
        result.element.parentNode.insertBefore(headerIcon, result.element);
      }
      return true;
    }

    // Element doesn't exist - find a place to inject it
    if (!result) {
      console.warn(`[SWYM Header Icon] No suitable selector found for ${isMobile ? "mobile" : "desktop"} injection`);
      return false;
    }

    // Create and inject new element
    headerIcon = createHeaderIconElement(count, isMobile, hideCountBubble);
    result.element.parentNode.insertBefore(headerIcon, result.element);
    return true;
  };

  // Inject both desktop and mobile header icons
  // hideCountBubble: if true, hide count bubble (used for pre-SDK injection)
  const injectHeaderIcon = (count, hideCountBubble = false) => {
    const config = getConfig();

    // Do not inject if any critical value (iconHtml, countBubbleHtml) is "not_found"
    if (hasNotFoundValues(config)) {
      console.warn("[SWYM Header Icon] Skipping injection: config contains 'not_found' values");
      return false;
    }

    // Inject desktop header icon
    const desktopResult = injectSingleHeaderIcon(count, config.attachSelectorDesktop, false, hideCountBubble);

    // Inject mobile header icon (only if selector is different or finds different element)
    const desktopElement = findAttachSelector(config.attachSelectorDesktop)?.element;
    const mobileElement = findAttachSelector(config.attachSelectorMobile)?.element;

    // Only inject mobile if it targets a different element than desktop
    if (mobileElement && mobileElement !== desktopElement) {
      injectSingleHeaderIcon(count, config.attachSelectorMobile, true, hideCountBubble);
    }

    return desktopResult;
  };

  // Update only the count bubble display (without clearing the icon HTML)
  // Used when icon is already correctly rendered by liquid
  const updateCountBubbleDisplay = (count, hideCountBubble = false) => {
    const config = getConfig();

    // Only update if showWishlistCount is enabled
    if (config.showWishlistCount !== false) {
      document.querySelectorAll(".swym-header-icon-count-bubble").forEach((container) => {
        container.innerHTML = processCountBubbleHtml(config.countBubbleHtml, count);
        container.style.display = (hideCountBubble || count <= 0) ? "none" : "";
      });
    }
  };

  // Update existing header icon content
  // hideCountBubble: if true, hide count bubble (used for pre-SDK injection)
  // Note: Preserves the bubble span inside icon container (for CSS positioning)
  const updateHeaderIconContent = (count, hideCountBubble = false) => {
    const config = getConfig();

    document.querySelectorAll(".swym-header-icon-html").forEach((container) => {
      // Find existing bubble inside this container (if any)
      const existingBubble = container.querySelector(".swym-header-icon-count-bubble");

      // Create a temporary container to hold the new icon HTML
      const tempContainer = document.createElement("span");
      tempContainer.innerHTML = config.iconHtml;

      // Clear container but preserve structure
      container.innerHTML = "";

      // Append new icon HTML content
      while (tempContainer.firstChild) {
        container.appendChild(tempContainer.firstChild);
      }

      // Re-append the bubble inside the container (or create new one if it didn't exist)
      // Only create bubble if showWishlistCount is enabled
      if (config.showWishlistCount !== false) {
        if (existingBubble) {
          container.appendChild(existingBubble);
        } else {
          // Create bubble if it doesn't exist
          const countBubbleContainer = document.createElement("span");
          countBubbleContainer.className = "swym-header-icon-count-bubble";
          countBubbleContainer.setAttribute("aria-live", "polite");
          countBubbleContainer.setAttribute("aria-atomic", "true");
          countBubbleContainer.innerHTML = processCountBubbleHtml(config.countBubbleHtml, count);
          countBubbleContainer.style.display = (hideCountBubble || count <= 0) ? "none" : "";
          container.appendChild(countBubbleContainer);
        }
      }
    });

    // Update all count bubbles (both existing and newly created)
    // Only update if showWishlistCount is enabled
    if (config.showWishlistCount !== false) {
      document.querySelectorAll(".swym-header-icon-count-bubble").forEach((container) => {
        container.innerHTML = processCountBubbleHtml(config.countBubbleHtml, count);
        // Hide count bubble if SDK not loaded yet, or if count is 0
        container.style.display = (hideCountBubble || count <= 0) ? "none" : "";
      });
    }
  };

  // Always fetch count from API - no caching, no optimistic updates
  const refreshCount = (swat) => {
    if (swat && typeof swat.fetchWishlistCount === "function") {
      swat.fetchWishlistCount((count) => {
        HeaderIconState.setWishlistCount(count?.data?.count || 0);
      });
    } else if (swat && typeof swat.fetch === "function") {
      // Fallback: fetch full wishlist and count items
      swat.api.fetch((wishlist) => {
        const count = wishlist?.length || 0;
        HeaderIconState.setWishlistCount(count);
      });
    }
  };

  // Setup event listeners for wishlist changes
  const setupWishlistEventListeners = (swat) => {
    if (!swat?.evtLayer?.addEventListener) return;

    // On any wishlist change, re-fetch count from API
    swat.evtLayer.addEventListener(swat.JSEvents.addedToWishlist, () => refreshCount(swat));
    swat.evtLayer.addEventListener(swat.JSEvents.removedFromWishlist, () => refreshCount(swat));
    swat.evtLayer.addEventListener(swat.JSEvents.removeWishlistCollection, () => refreshCount(swat));
    swat.evtLayer.addEventListener(swat.JSEvents.customerInfoRefreshed, () => refreshCount(swat));
  };

  // Setup AJAX cart listener for re-rendering after cart updates
  const setupAjaxCartListener = (swat) => {
    if (!swat?.fetchThemePreset || !window.SwymUtils?.debounce) return;

    const currentThemeId = window.Shopify?.theme?.theme_store_id;
    const currentSchemaName = window.Shopify?.theme?.schema_name;

    swat.fetchThemePreset({
        themeStoreId: currentThemeId || 0,
        schemaName: currentSchemaName
      },
      (themeData) => {
        const supportedEvent = themeData?.AJAXCartEvent?.[0]?.eventName;
        if (supportedEvent) {
          const debouncedRerender = window.SwymUtils.debounce(() => {
            // Re-inject if either desktop or mobile icon is missing
            const desktopExists = document.getElementById("swym-advanced-header-icon");
            const mobileExists = document.getElementById("swym-advanced-header-icon-mobile");
            if (!desktopExists || !mobileExists) {
              injectHeaderIcon(HeaderIconState.wishlistCount);
            }
          }, 150);
          document.addEventListener(supportedEvent, debouncedRerender);
        }
      }
    );
  };

  // Expose refreshCount for external use
  SwymAdvancedHeaderIconAPI.refreshCount = refreshCount;

  // Expose setWishlistExpandedState so external modules (e.g. Ghost Wishlist Drawer) can
  // reset aria-expanded when they close independently of the SDK panel observer.
  SwymAdvancedHeaderIconAPI.setWishlistExpandedState = setWishlistExpandedState;

  // Main initialization function (called when SDK loads)
  SwymAdvancedHeaderIconAPI.initialize = (swat) => {
    if (HeaderIconState.initialized) return;

    HeaderIconState.swat = swat;
    HeaderIconState.initialized = true;
    HeaderIconState.sdkLoaded = true;

    // Fetch count from API and update the icon (show count bubble now that SDK is loaded)
    if (swat && typeof swat.fetchWishlistCount === "function") {
      swat.fetchWishlistCount((count) => {
        const wishlistCount = count?.data?.count || 0;
        HeaderIconState.setWishlistCount(wishlistCount);
        // Re-inject or update with count bubble visible (hideCountBubble = false)
        injectHeaderIcon(wishlistCount, false);
      });
    } else if (swat && typeof swat.fetch === "function") {
      swat.api.fetch((wishlist) => {
        const count = wishlist?.length || 0;
        HeaderIconState.setWishlistCount(count);
        injectHeaderIcon(count, false);
      });
    } else {
      // Fallback: inject with 0 count
      injectHeaderIcon(0, false);
    }

    setupWishlistEventListeners(swat);
    setupAjaxCartListener(swat);
    observeWishlistPanel();
  };

  // Check if consent is given or not required
  // Returns null if privacy API is not yet available
  const checkConsentState = () => {
    const shopify = window.Shopify;
    const privacy = shopify?.customerPrivacy;

    // In design mode, always treat as consented
    if (shopify?.designMode) {
      return {
        hasConsent: true,
        isRequired: false,
        apiReady: true
      };
    }

    // If privacy API not available, we can't determine consent state yet
    if (!privacy || typeof privacy.shouldShowBanner !== 'function') {
      return {
        hasConsent: null,
        isRequired: null,
        apiReady: false
      };
    }

    // Check if consent banner should be shown (indicates consent is required)
    const shouldShowBanner = privacy.shouldShowBanner();

    // If banner shouldn't be shown, consent is not required for this region
    if (shouldShowBanner === false) {
      return {
        hasConsent: true,
        isRequired: false,
        apiReady: true
      };
    }

    // Check actual consent state
    const consent = privacy.preferencesProcessingAllowed?.();

    if (consent === true) {
      return {
        hasConsent: true,
        isRequired: true,
        apiReady: true
      };
    } else if (consent === false) {
      return {
        hasConsent: false,
        isRequired: true,
        apiReady: true
      };
    }

    // Consent state not yet determined (banner should show)
    return {
      hasConsent: null,
      isRequired: shouldShowBanner === true,
      apiReady: true
    };
  };

  // Wait for consent banner to appear (or timeout), then inject after theme settles
  const waitForBannerThenInject = () => {
    const bannerSelector = '.shopify-pc__banner, [data-shopify-consent-banner]';

    const doInject = () => {
      injectHeaderIcon(0, true);
    };

    // Check if banner already exists
    if (document.querySelector(bannerSelector)) {
      // Banner already there, theme has re-rendered, inject after small delay
      setTimeout(() => doInject(), 200);
      return;
    }

    // Wait for banner to appear
    let handled = false;

    const observer = new MutationObserver(() => {
      if (handled) return;
      if (document.querySelector(bannerSelector)) {
        handled = true;
        observer.disconnect();
        // Banner just appeared, wait for theme to finish re-rendering
        setTimeout(() => doInject(), 300);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Timeout: if banner doesn't appear in 2 seconds, inject anyway
    setTimeout(() => {
      if (handled) return;
      handled = true;
      observer.disconnect();
      doInject();
    }, 2000);
  };

  // Wait for Shopify privacy API to be available, then decide injection strategy
  const waitForPrivacyApiAndDecide = () => {
    const consentState = checkConsentState();

    // If API is ready, make decision now
    if (consentState.apiReady) {
      if (consentState.hasConsent === true || consentState.isRequired === false) {
        // Consent given or not required → inject immediately, no observer needed
        injectHeaderIcon(0, true);
      } else {
        // Consent required but not yet given → wait for banner, then inject
        waitForBannerThenInject();
      }
      return;
    }

    // API not ready yet - try to load it via Shopify.loadFeatures
    if (window.Shopify?.loadFeatures) {
      window.Shopify.loadFeatures(
        [{
          name: 'consent-tracking-api',
          version: '0.1'
        }],
        (error) => {
          // API should be ready now, re-check and decide
          const newState = checkConsentState();

          if (newState.apiReady && (newState.hasConsent === true || newState.isRequired === false)) {
            // Consent given or not required → inject immediately
            injectHeaderIcon(0, true);
          } else {
            // Consent required → wait for banner, then inject
            waitForBannerThenInject();
          }
        }
      );
    } else {
      // loadFeatures not available - wait for banner as fallback
      waitForBannerThenInject();
    }
  };

  // Inject icon immediately before SDK loads (count bubble hidden)
  const injectInitialHeaderIcon = () => {
    // Skip injection on live storefront when no plan is selected
    // Allow injection in Shopify theme editor (design mode) regardless of plan
    if (!window.SwymCurrentStorePath && !window.Shopify?.designMode) {
      console.warn("[SWYM Header Icon] No plan selected — skipping icon injection on live storefront");
      return;
    }

    if (HeaderIconState.initialInjectionDone) return;
    HeaderIconState.initialInjectionDone = true;

    // Wait for privacy API to be available, then decide injection strategy
    waitForPrivacyApiAndDecide();
  };

  // Register with Swym SDK
  if (!window.SwymCallbacks) {
    window.SwymCallbacks = [];
  }

  window.SwymCallbacks.push((swat) => {
    SwymAdvancedHeaderIconAPI.initialize(swat);
  });

  // Start the ARIA observer immediately so it catches elements injected by the App Proxy
  // or any other async mechanism, regardless of when the SDK or injection runs.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      observeHeaderIconAria();
      injectInitialHeaderIcon();
    });
  } else {
    // DOM already loaded — run both synchronously
    observeHeaderIconAria();
    injectInitialHeaderIcon();
  }
})();