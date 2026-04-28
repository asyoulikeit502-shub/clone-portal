(function() {
  const themeSchemaName = window.Shopify.theme.schema_name;

  if (!window.SwymCallbacks) {
    window.SwymCallbacks = [];
  }
  window.SwymCallbacks.push(swat => {
    if (!swat) {
      return;
    }

    // Ghost-Intent: Sync local wishlist items to cloud when SDK loads after consent
    if (window.SwymLocalWishlist && window.SwymLocalWishlist.getSyncableItems().length > 0) {
      window.SwymLocalWishlist.syncToCloud(swat);
    }

    if (window._SwymSDKOnlyMode) {
      return;
    }

    // ENABLE COMMON FEATURES
    let swymEnabledCommonFeatures = window.SwymEnabledCommonFeatures;
    Object.keys(swymEnabledCommonFeatures).forEach(key => {
      if (!swymEnabledCommonFeatures[key]) return;

      switch (key) {
        case 'add-to-wishlist-collections-button':
          // Check if app block is already handling the collections button
          if (window.SwymCollectionsConfig) {
            return;
          }

          // Check if v2 default collections is handling it
          if (window.SwymAdvancedCollectionsWishlistConfig) {
            return;
          }

          // Fallback to old v1 behavior if v2 config is not present
          swat?.collectionsApi?.setDefaultCustomizationOptions();
          swat?.collectionsApi?.initializeCollections(swat, false, themeSchemaName);

          break;
        case 'add-to-wishlist-pdp-button':
          // Check if app block is already handling the PDP button
          if (window.swymATWButtonConfig?.shopifyExtensionType === 'appblock') {
            return;
          }

          if (!(window.SwymPageData && window.SwymPageData.et === 1)) {
            // Not initiating pdp button as it is not a product page
            return;
          }

          // Inject addtowishlist.css into the document's <head>
          var head = document.head;
          var pdpButtonStylesheet = "https://cdn.shopify.com/extensions/019dcf05-bc70-7a8c-84ba-b81a16059a23/swym-relay-733/assets/addtowishlistbutton.css";
          var pdpButtonStylesheetTag = document.createElement('link');
          pdpButtonStylesheetTag.id = `swym-pdp-button-stylesheet`;
          pdpButtonStylesheetTag.rel = 'stylesheet';
          pdpButtonStylesheetTag.href = pdpButtonStylesheet;

          if (!document.getElementById('swym-pdp-button-stylesheet')) {
            head.appendChild(pdpButtonStylesheetTag);
          }

          var x = document.getElementsByTagName('script')[0];

          function createAndInsertScript(id, src, onLoadCallback) {
            var scriptTag = document.createElement('script');
            scriptTag.id = id;
            scriptTag.type = 'text/javascript';
            scriptTag.src = src;
            scriptTag.onload = onLoadCallback;
            x.parentNode.insertBefore(scriptTag, x);
          }

          var pdpButtonScript = "https://cdn.shopify.com/extensions/019dcf05-bc70-7a8c-84ba-b81a16059a23/swym-relay-733/assets/addtowishlistbutton.js";
          createAndInsertScript(`swym-pdp-button-script`, pdpButtonScript, function() {
            const pdpBtnApi = window.WishlistPlusPDPButtonAPI;
            if (pdpBtnApi) {
              pdpBtnApi.setDefaultCustomizationOptions(swat);
              pdpBtnApi.initializePDPButton(swat, true);
            }
          });
          break;
        default:
          return;
      }
    });
  });
})(); // IIFE to prevent polluting global scope