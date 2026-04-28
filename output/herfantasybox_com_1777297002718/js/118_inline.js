(function() {
  var customDocumentWrite = function(content) {
    var jquery = null;

    if (window.jQuery) {
      jquery = window.jQuery;
    } else if (window.Checkout && window.Checkout.$) {
      jquery = window.Checkout.$;
    }

    if (jquery) {
      jquery('body').append(content);
    }
  };

  var hasLoggedConversion = function(token) {
    if (token) {
      return document.cookie.indexOf('loggedConversion=' + token) !== -1;
    }
    return false;
  }

  var setCookieIfConversion = function(token) {
    if (token) {
      var twoMonthsFromNow = new Date(Date.now());
      twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

      document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
    }
  }

  var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
  window.ShopifyAnalytics.lib.trekkie = window.trekkie;
  if (trekkie.integrations) {
    return;
  }
  trekkie.methods = [
    'identify',
    'page',
    'ready',
    'track',
    'trackForm',
    'trackLink'
  ];
  trekkie.factory = function(method) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      trekkie.push(args);
      if (window.__TREKKIE_SHIM_QUEUE && (method == 'track' || method == 'page')) {
        try {
          window.__TREKKIE_SHIM_QUEUE.push({
            from: 'trekkie-stub',
            method: method,
            args: args.slice(1)
          });
        } catch (e) {
          // no-op
        }
      }
      return trekkie;
    };
  };
  for (var i = 0; i < trekkie.methods.length; i++) {
    var key = trekkie.methods[i];
    trekkie[key] = trekkie.factory(key);
  }
  trekkie.load = function(config) {
    trekkie.config = config || {};
    trekkie.config.initialDocumentCookie = document.cookie;
    var first = document.getElementsByTagName('script')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onerror = function(e) {
      var scriptFallback = document.createElement('script');
      scriptFallback.type = 'text/javascript';
      scriptFallback.onerror = function(error) {
        var Monorail = {
          produce: function produce(monorailDomain, schemaId, payload) {
            var currentMs = new Date().getTime();
            var event = {
              schema_id: schemaId,
              payload: payload,
              metadata: {
                event_created_at_ms: currentMs,
                event_sent_at_ms: currentMs
              }
            };
            return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
          },
          sendRequest: function sendRequest(endpointUrl, payload) {
            // Try the sendBeacon API
            if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
              var blobData = new window.Blob([payload], {
                type: 'text/plain'
              });

              if (window.navigator.sendBeacon(endpointUrl, blobData)) {
                return true;
              } // sendBeacon was not successful

            } // XHR beacon

            var xhr = new XMLHttpRequest();

            try {
              xhr.open('POST', endpointUrl);
              xhr.setRequestHeader('Content-Type', 'text/plain');
              xhr.send(payload);
            } catch (e) {
              console.log(e);
            }

            return false;
          },
          isIos12: function isIos12() {
            return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
          }
        };
        Monorail.produce('monorail-edge.shopifysvc.com',
          'trekkie_storefront_load_errors/1.1', {
            shop_id: 55987929227,
            theme_id: 141412040843,
            app_name: "storefront",
            context_url: window.location.href,
            source_url: "//herfantasybox.com/cdn/s/trekkie.storefront.40cf76d5f324d17d3a4347e25c36a3e219ef9f79.min.js"
          });

      };
      scriptFallback.async = true;
      scriptFallback.src = '//herfantasybox.com/cdn/s/trekkie.storefront.40cf76d5f324d17d3a4347e25c36a3e219ef9f79.min.js';
      first.parentNode.insertBefore(scriptFallback, first);
    };
    script.async = true;
    script.src = '//herfantasybox.com/cdn/s/trekkie.storefront.40cf76d5f324d17d3a4347e25c36a3e219ef9f79.min.js';
    first.parentNode.insertBefore(script, first);

  };
  trekkie.load({
    "Trekkie": {
      "appName": "storefront",
      "development": false,
      "defaultAttributes": {
        "shopId": 55987929227,
        "isMerchantRequest": null,
        "themeId": 141412040843,
        "themeCityHash": "6120620522165695297",
        "contentLanguage": "en",
        "currency": "USD",
        "eventMetadataId": "b269b373-c41f-474e-8912-2cd1a75f0cec"
      },
      "isServerSideCookieWritingEnabled": true,
      "monorailRegion": "shop_domain",
      "enabledBetaFlags": ["b5387b81", "d5bdd5d0"]
    },
    "Session Attribution": {},
    "S2S": {
      "facebookCapiEnabled": true,
      "source": "trekkie-storefront-renderer",
      "apiClientId": 580111
    }
  });

  var loaded = false;
  trekkie.ready(function() {
    if (loaded) return;
    loaded = true;

    window.ShopifyAnalytics.lib = window.trekkie;

    var originalDocumentWrite = document.write;
    document.write = customDocumentWrite;
    try {
      window.ShopifyAnalytics.merchantGoogleAnalytics.call(this);
    } catch (error) {};
    document.write = originalDocumentWrite;

    window.ShopifyAnalytics.lib.page(null, {
      "pageType": "product",
      "resourceType": "product",
      "resourceId": 7048466202763,
      "requestId": "83dfc603-b58d-4da2-8afc-97b4ddaffa42-1777297003",
      "shopifyEmitted": true
    });

    var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
    var token = match ? match[1] : undefined;
    if (!hasLoggedConversion(token)) {
      setCookieIfConversion(token);
      window.ShopifyAnalytics.lib.track("Viewed Product", {
        "currency": "USD",
        "variantId": 41096878948491,
        "productId": 7048466202763,
        "productGid": "gid:\/\/shopify\/Product\/7048466202763",
        "name": "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin - 100 mg",
        "price": "15.98",
        "sku": "MagicBody100",
        "brand": "Body Odor \u0026 Clear Skin",
        "variant": "100 mg",
        "category": "supplements \/ suppositories",
        "nonInteraction": true,
        "remote": false
      }, undefined, undefined, {
        "shopifyEmitted": true
      });
      window.ShopifyAnalytics.lib.track("monorail:\/\/trekkie_storefront_viewed_product\/1.1", {
        "currency": "USD",
        "variantId": 41096878948491,
        "productId": 7048466202763,
        "productGid": "gid:\/\/shopify\/Product\/7048466202763",
        "name": "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin - 100 mg",
        "price": "15.98",
        "sku": "MagicBody100",
        "brand": "Body Odor \u0026 Clear Skin",
        "variant": "100 mg",
        "category": "supplements \/ suppositories",
        "nonInteraction": true,
        "remote": false,
        "referer": "https:\/\/herfantasybox.com\/products\/body-magic-remove-full-body-odor-naturally?variant=41096878948491"
      });
    }
  });

  var eventsListenerScript = document.createElement('script');
  eventsListenerScript.async = true;
  eventsListenerScript.src = "//herfantasybox.com/cdn/shopifycloud/storefront/assets/shop_events_listener-3da45d37.js";
  document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
})();