
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CdebKbCD.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-vendor.ltnWoGUL.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.bonpWqGD.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-FullScreenBackground.CsEJZKy9.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-unactionable-errors.CTtb6GFr.js","/cdn/shopifycloud/checkout-web/assets/c1/actions-shop-discount-offer.0kURy2_C.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency.CoCuhuqi.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shared.9F27gHlm.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-BusinessCustomerShippingAddressManager.m7P2IKia.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-shared.D_M8Wwgv.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-Page.DBa3k29d.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.D2Fpq5Mq.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.Dj4eghQz.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.oBIvTzgH.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-MarketsProDisclaimer.CTNaeInw.js","/cdn/shopifycloud/checkout-web/assets/c1/Menu-CrossBorderConsolidation.Dc8YCzLb.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger.DD4Dkuh3.js","/cdn/shopifycloud/checkout-web/assets/c1/types-useHasOrdersFromMultipleShops.CpWp2MMV.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-PaymentButtons.BruKgH8J.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-OffsitePaymentFailed.PRJI7a_j.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.BsSTD--B.js","/cdn/shopifycloud/checkout-web/assets/c1/BuyWithPrimeChangeLink-VaultedPayment.BECg-iBW.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMacros-ShippingGroupsSummaryLine.BKTPHa74.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandisePreviewThumbnail-StackedMerchandisePreview.DqrjC6OT.js","/cdn/shopifycloud/checkout-web/assets/c1/Map-PickupPointCarrierLogo.D77KyzY4.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.BbKDifiI.js","/cdn/shopifycloud/checkout-web/assets/c1/PostPurchaseShouldRender-LocalizationExtensionField.BKokBbDK.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayOptInDisclaimer.DoDKhhLB.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-RememberMeDescriptionText.BF7_FcO9.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MobileOrderSummary.CADKvqjI.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-OrderEditVaultedDelivery.ChDYVciF.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-SeparatePaymentsNotice.DvgMsGRD.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.COkQamJc.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-useShopCashCheckoutEligibility.C15tZHph.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-ShipmentBreakdown.j94Peo2W.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-MerchandiseModal.Fs2rZEiV.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shipping-options.bgjBSkik.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-DutyOptions.DgRh9ucO.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryInstructionsFooter-ShippingMethodSelector.qPfFbik_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-SubscriptionPriceBreakdown.DjXbo7Zb.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.D6frwrz6.js","/cdn/shopifycloud/checkout-web/assets/c1/DatePicker-AnnouncementRuntimeExtensions.D42HCNik.js","/cdn/shopifycloud/checkout-web/assets/c1/standard-rendering-extension-targets.sppamyVN.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.BtIx1FSF.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.Ct4r0T82.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.CfHxiIwO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.Dv9ke6cP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BB2ha-x7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CrossBorderConsolidation.CvXXnYCy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.CFFbuBu-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.Cko1fUoG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OrderEditVaultedDelivery.CSQKPDv7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useSubscribeMessenger.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.cbVP6Hp_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0314/7084/5996/files/Brand_Logo_x320.svg?v=1676477834"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  