(function() {
  // Get CompanyLocation Metadata for B2B customer scenerios (SFS)


  // Put metafields in window variable
  const commonCustomizationSettings = '{"global-settings":{"icon":"heart","primaryColor":"#444444","secondaryColor":"#fff","storefrontLayoutType":"as-section","buttonType":{"displayIcon":true,"displayText":false,"style":"outline"},"collectionsButtonPosition":{"position":"bottom-left","verticalOffset":0,"horizontalOffset":0},"pdpButtonPosition":{"position":"add_to_cart_button_right","verticalOffset":0,"horizontalOffset":0},"enableStorefrontLayoutNotification":true,"storefrontLayoutDrawerWidth":400,"launchType":"header","showItemsCount":true,"launchPointPosition":"bottom-right"}}';
  try {
    const parsedSettings = JSON.parse(commonCustomizationSettings);
    if (parsedSettings) {
      window.SwymWishlistCommonCustomizationSettings = parsedSettings[window.Shopify.theme.schema_name] || parsedSettings['global-settings'];
    } else {
      window.SwymWishlistCommonCustomizationSettings = {};
    }
  } catch (e) {
    window.SwymWishlistCommonCustomizationSettings = {};
  }

  let enabledCommonFeatures = '{"add-to-wishlist-collections-button":false,"add-to-wishlist-pdp-button":true,"auto-add-to-wishlist-from-pdp":{"pdpViewCount":"3","notificationTimeoutDuration":"5","selectedPosition":"TopLeft","enabled":false},"sfl-popup-v2":true,"control-centre":true,"multiple-wishlist":false,"social-count":{"enabledOnCollections":false}}';
  try {
    enabledCommonFeatures = JSON.parse(enabledCommonFeatures) || {};
  } catch (e) {
    enabledCommonFeatures = {};
  }
  // Storing COMMON FEATURES data in the window object for potential use in the storefront JS code.
  window.SwymEnabledCommonFeatures = enabledCommonFeatures;

  // Ghost-Intent Configuration
  // Defaults to disabled (false). Only enabled when metafields explicitly set to "true".
  try {
    let ghostIntentConfig = {
      isExplicitConsentNeeded: false,
      isExplicitConsentNeededEvenForLocalStorage: false,
      askForPermissionOnFirstClick: true
    };



    window.SwymGhostIntentConfig = ghostIntentConfig;
  } catch (e) {
    window.SwymGhostIntentConfig = {
      isExplicitConsentNeeded: false,
      isExplicitConsentNeededEvenForLocalStorage: false,
      askForPermissionOnFirstClick: true
    };
  }

  // Education Layer Configuration
  // Defaults to enabled (true). Only disabled when metafield explicitly set to "false".
  window.SwymEducationLayerEnabled = true;


  // Login Nudge Configuration
  // Defaults to enabled (true). Only disabled when metafield explicitly set to "false".
  window.SwymLoginNudgeEnabled = true;


  // Initialize or ensure SwymViewProducts exists
  if (!window.SwymViewProducts) {
    window.SwymViewProducts = {};
  }

})();