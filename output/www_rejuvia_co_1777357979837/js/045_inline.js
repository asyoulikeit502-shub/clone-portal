(function() {
  try {
    window.EG_INFO = window.EG_INFO || {};
    var shopInfo = {
      "isInstalled": true,
      "installedOn": "2025-07-08T16:23:26.202Z",
      "appVersion": "3.0",
      "subscriptionName": "Unlimited",
      "cartAnalytics": true,
      "freeTrialEndsOn": null,
      "settings": {
        "reminderBannerStyle": {
          "position": {
            "horizontal": "right",
            "vertical": "bottom"
          },
          "backgroundColor": "#FFFFFF",
          "borderRadius": null,
          "padding": null,
          "headerFontSize": null,
          "subHeaderFontSize": null,
          "fontFamily": null,
          "closingMode": "doNotAutoClose",
          "cssStyles": "",
          "displayAfter": 5,
          "headerText": "",
          "imageUrl": null,
          "primaryColor": "#000000",
          "reshowBannerAfter": "everyNewSession",
          "selfcloseAfter": 5,
          "showImage": false,
          "subHeaderText": ""
        },
        "addedItemIdentifier": "_Gifted",
        "ignoreOtherAppLineItems": null,
        "customVariantsInfoLifetimeMins": 1440,
        "redirectPath": null,
        "ignoreNonStandardCartRequests": false,
        "bannerStyle": {
          "position": {
            "horizontal": "right",
            "vertical": "bottom"
          },
          "backgroundColor": "#FFFFFF",
          "borderRadius": null,
          "padding": null,
          "headerFontSize": null,
          "subHeaderFontSize": null,
          "fontFamily": null,
          "cssStyles": null,
          "primaryColor": "#000000"
        },
        "themePresetId": null,
        "notificationStyle": {
          "position": {
            "horizontal": null,
            "vertical": null
          },
          "backgroundColor": "#FFFFFF",
          "borderRadius": null,
          "headerFontSize": null,
          "subHeaderFontSize": null,
          "padding": null,
          "fontFamily": null,
          "cssStyles": null,
          "duration": null,
          "hasCustomizations": false,
          "primaryColor": null
        },
        "fetchCartData": false,
        "useLocalStorage": {
          "enabled": false,
          "expiryMinutes": null
        },
        "popupStyle": {
          "backgroundColor": "#FFFFFF",
          "borderRadius": null,
          "padding": null,
          "headerFontSize": null,
          "subHeaderFontSize": null,
          "bodyColor": null,
          "bodyFontSize": null,
          "closeModalOutsideClick": true,
          "priceShowZeroDecimals": true,
          "headerFontFamily": null,
          "bodyFontFamily": null,
          "addButtonText": null,
          "cssStyles": null,
          "dismissButtonText": null,
          "hasCustomizations": false,
          "imageUrl": null,
          "outOfStockButtonText": null,
          "primaryColor": null,
          "secondaryColor": null,
          "showProductLink": false,
          "subscriptionLabel": null
        },
        "refreshAfterBannerClick": false,
        "disableReapplyRules": false,
        "disableReloadOnFailedAddition": false,
        "autoReloadCartPage": false,
        "ajaxRedirectPath": null,
        "allowSimultaneousRequests": false,
        "applyRulesOnCheckout": false,
        "enableCartCtrlOverrides": true,
        "customRedirectFromCart": null,
        "scriptSettings": {
          "branding": {
            "removalRequestSent": null,
            "show": false
          },
          "productPageRedirection": {
            "enabled": false,
            "products": [],
            "redirectionURL": "\/"
          },
          "debugging": {
            "enabled": false,
            "enabledOn": null,
            "stringifyObj": false
          },
          "enableBuyNowInterceptions": false,
          "removeProductsAddedFromExpiredRules": false,
          "useFinalPrice": false,
          "useFinalPriceGetEntireCart": false,
          "hideGiftedPropertyText": false,
          "fetchCartDataBeforeRequest": false,
          "disableRedirectAfterFormSubmit": false,
          "customCSS": null,
          "decodePayload": false,
          "delayUpdates": 2000,
          "fetchProductInfoFromSavedDomain": false,
          "hideAlertsOnFrontend": false,
          "removeEGPropertyFromSplitActionLineItems": false
        },
        "promoCodeMessageStyle": {
          "message": "Free gift added!"
        },
        "accessToEnterprise": false
      },
      "translations": null,
      "defaultLocale": "en",
      "shopDomain": "www.rejuvia.co"
    };
    var productRedirectionEnabled = shopInfo.settings.scriptSettings.productPageRedirection.enabled;
    if (["Unlimited", "Enterprise"].includes(shopInfo.subscriptionName) && productRedirectionEnabled) {
      var products = shopInfo.settings.scriptSettings.productPageRedirection.products;
      if (products.length > 0) {
        var productIds = products.map(function(prod) {
          var productGid = prod.id;
          var productIdNumber = parseInt(productGid.split('/').pop());
          return productIdNumber;
        });
        var productInfo = null;
        var isProductInList = productIds.includes(productInfo.id);
        if (isProductInList) {
          var redirectionURL = shopInfo.settings.scriptSettings.productPageRedirection.redirectionURL;
          if (redirectionURL) {
            window.location = redirectionURL;
          }
        }
      }
    }


  } catch (err) {
    return
  }
})()