(function() {
  // Get the settings from Shopify's Liquid variables and create the styles
  const isControlCentreEnabledFromMetafield = window?.SwymEnabledCommonFeatures?.["control-centre"];
  const isCommonCustomizationEnabledFromMetafield = window?.SwymWishlistCommonCustomizationSettings &&
    Object.keys(window.SwymWishlistCommonCustomizationSettings).length > 0;
  const isControlCentreEnabledFromBlockSettings = false;

  if (!(isControlCentreEnabledFromMetafield && isCommonCustomizationEnabledFromMetafield) && !isControlCentreEnabledFromBlockSettings) {
    // Don't enable control centre if this is disabled and block settings are not enabled
    return;
  }

  let borderRadius = 6;
  let drawerWidth = window?.SwymWishlistCommonCustomizationSettings?.storefrontLayoutDrawerWidth || 400;

  // Check if block settings exist, use them, otherwise fall back to common settings
  let primaryBgColor = isControlCentreEnabledFromBlockSettings ?
    "#000000" :
    window.SwymWishlistCommonCustomizationSettings.primaryColor;

  let primaryTextColor = isControlCentreEnabledFromBlockSettings ?
    "#ffffff" :
    window.SwymWishlistCommonCustomizationSettings.secondaryColor;

  let secondaryBgColor = isControlCentreEnabledFromBlockSettings ?
    "#F4F8FE" : null;
  let secondaryTextColor = isControlCentreEnabledFromBlockSettings ?
    "#333333" : null;

  // Only use color adjustment functions if we're using common settings
  if (!secondaryBgColor || !secondaryTextColor) {
    function adjustOpacity(color, opacity) {
      if (color[0] === '#') {
        color = color.slice(1);
      }

      if (color.length === 3) {
        color = color.split('').map(char => char + char).join('');
      }

      const r = parseInt(color.slice(0, 2), 16);
      const g = parseInt(color.slice(2, 4), 16);
      const b = parseInt(color.slice(4, 6), 16);

      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    function hexToRgb(color) {
      if (color[0] === '#') {
        color = color.slice(1);
      }
      if (color.length === 3) {
        color = color.split('').map(c => c + c).join('');
      }

      return {
        r: parseInt(color.slice(0, 2), 16),
        g: parseInt(color.slice(2, 4), 16),
        b: parseInt(color.slice(4, 6), 16)
      };
    }

    function getLuminance({
      r,
      g,
      b
    }) {
      return 0.299 * r + 0.587 * g + 0.114 * b;
    }

    function generateSecondaryColors(primaryBgColor, primaryTextColor) {
      const secondaryBgOpacity = 0.2;
      const secondaryTextOpacity = 0.8;

      const secondaryBgColor = adjustOpacity(primaryBgColor, secondaryBgOpacity);

      const bgRgb = hexToRgb(primaryBgColor);
      const bgLuminance = getLuminance(bgRgb);

      // Determine whether to use dark or light text for contrast
      const lightText = adjustOpacity(primaryTextColor, secondaryTextOpacity);
      const darkText = adjustOpacity(primaryBgColor, secondaryTextOpacity);

      const secondaryTextColor = bgLuminance > 186 ? darkText : lightText;

      return {
        secondaryBgColor,
        secondaryTextColor
      };
    }

    const generatedColors = generateSecondaryColors(primaryBgColor, primaryTextColor);
    secondaryBgColor = secondaryBgColor || generatedColors.secondaryBgColor;
    secondaryTextColor = secondaryTextColor || generatedColors.secondaryTextColor;
  }

  // Create the CSS rule
  let styles = `
      .swym-storefront-layout-root-component {
        --swym-storefront-layout-ui-border-radius: ${borderRadius}px;
        --swym-storefront-layout-button-border-radius: ${borderRadius}px;
        --swym-storefront-layout-side-drawer-width: ${drawerWidth}px;
        --swym-storefront-layout-button-color-bg-primary: ${primaryBgColor};
        --swym-storefront-layout-button-color-text-primary: ${primaryTextColor};
        --swym-storefront-layout-button-color-bg-secondary: ${secondaryBgColor};
        --swym-storefront-layout-button-color-text-secondary: ${secondaryTextColor};
      }
    `;

  // Create a <style> element and append the styles
  let styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  if (typeof window.SwymStorefrontLayoutContext === 'undefined') {
    window.SwymStorefrontLayoutContext = {};
  }
  if (typeof window.SwymStorefrontLayoutExtensions === 'undefined') {
    window.SwymStorefrontLayoutExtensions = {};
  }

  // Expose block settings toggle state so ThemeCSSMapping can respect it.
  // When true, theme editor color pickers take priority over inherited theme CSS variables.
  SwymStorefrontLayoutContext.BlockSettingsEnabled = isControlCentreEnabledFromBlockSettings;

  if (isControlCentreEnabledFromBlockSettings) {
    // If block settings are enabled, use them
    SwymStorefrontLayoutContext.Settings = {
      EnableStorefrontLayoutOnLauncher: true,
      EnableStorefrontLayoutNotification: window?.SwymWishlistCommonCustomizationSettings?.enableStorefrontLayoutNotification ?? true,
      StorefrontLayoutType: window?.SwymWishlistCommonCustomizationSettings?.storefrontLayoutType || "as-drawer",
      StorefrontLayoutDrawerPosition: "left",
      StorefrontLayoutAsSectionContainerId: "swym-wishlist-render-container",
      StorefrontLayoutAsSectionPageURL: "/pages/swym-wishlist",
      EnableStorefrontLayoutVariantSelector: true,
      StorefrontLayoutNotificationPosition: "left",
      StorefrontLayoutActionPopupPosition: "left",
      StorefrontLayoutNotificationDuration: 5000
    };
  } else {
    // If only metafield is enabled but no block settings, use common settings
    SwymStorefrontLayoutContext.Settings = {
      EnableStorefrontLayoutOnLauncher: true,
      EnableStorefrontLayoutNotification: window?.SwymWishlistCommonCustomizationSettings?.enableStorefrontLayoutNotification ?? true,
      StorefrontLayoutType: window?.SwymWishlistCommonCustomizationSettings?.storefrontLayoutType || "as-drawer",
      StorefrontLayoutDrawerPosition: "left",
      StorefrontLayoutAsSectionContainerId: "swym-wishlist-render-container",
      StorefrontLayoutAsSectionPageURL: "/pages/swym-wishlist",
      EnableStorefrontLayoutVariantSelector: true,
      StorefrontLayoutNotificationPosition: "left",
      StorefrontLayoutActionPopupPosition: "left",
      StorefrontLayoutNotificationDuration: 5000
    };
  }
  const storefrontLayoutCallback = (swat) => {
    SwymStorefrontLayoutContext.swat = swat;
    let isStoreOnPaidPlan = swat.getApp('Wishlist')?.['is-paid'];
    let isWishlistEnabled = swat.getApp('Wishlist')?.['enabled'];
    SwymStorefrontLayoutContext.Settings = {
      ...SwymStorefrontLayoutContext?.Settings,
      EnableStorefrontLayoutCollection: window?.SwymEnabledCommonFeatures?.["multiple-wishlist"] ?? false,
      EnableStorefrontLayout: isWishlistEnabled && (isControlCentreEnabledFromBlockSettings || isControlCentreEnabledFromMetafield),
    }

    if (SwymStorefrontLayoutContext?.Settings?.EnableStorefrontLayout) {
      if (SwymStorefrontLayoutContext?.CustomEvents?.LayoutInitialized) {
        var event = new CustomEvent(SwymStorefrontLayoutContext.CustomEvents.LayoutInitialized, {
          detail: {
            settings: SwymStorefrontLayoutContext?.Settings
          }
        });
        document.dispatchEvent(event);
      } else {
        swat.utils.warn(`LayoutInitialized event is not defined.`);
      }
    } else {
      swat.utils.warn(`Storefront Layout is disabled.`);
      document.getElementById("swym-storefront-layout-container")?.remove();
      document.getElementById("swym-storefront-extention-render-container")?.remove();
    }
  }

  if (!window.SwymCallbacks) {
    window.SwymCallbacks = [];
  }
  window.SwymCallbacks.push(storefrontLayoutCallback);

  SwymStorefrontLayoutContext.SwymCustomerData = {

    name: null,
    email: null

  };
  SwymStorefrontLayoutContext.isShopperLoggedIn = !!SwymStorefrontLayoutContext?.SwymCustomerData?.email;
})();