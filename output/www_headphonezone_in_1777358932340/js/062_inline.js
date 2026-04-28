(function e(e, d, r, n, o) {
  if (void 0 === o && (o = {}), !Boolean(null === (a = null === (i = window.Shopify) || void 0 === i ? void 0 : i.analytics) || void 0 === a ? void 0 : a.replayQueue)) {
    var i, a;
    window.Shopify = window.Shopify || {};
    var t = window.Shopify;
    t.analytics = t.analytics || {};
    var s = t.analytics;
    s.replayQueue = [], s.publish = function(e, d, r) {
      return s.replayQueue.push([e, d, r]), !0
    };
    try {
      self.performance.mark("wpm:start")
    } catch (e) {}
    var l = function() {
        var e = {
            modern: /Edge?\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(9{2}|\d{3,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(15\.\d+|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9{2}|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]\d+|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Android.+Firefox\/(13[5-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+/,
            legacy: /Edge?\/(1[6-9]|[2-9]\d|\d{3,})\.\d+(\.\d+|)|Firefox\/(5[4-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)|Chrom(ium|e)\/(5[1-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))|(Maci|X1{2}).+ Version\/(10\.\d+|(1[1-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(3[89]|[4-9]\d|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(10[._]\d+|(1[1-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[5-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(5\.\d+|([6-9]|\d{2,})\.\d+)|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(3\.\d+|([4-9]|\d{2,})\.\d+)(\.\d+|)/
          },
          d = e.modern,
          r = e.legacy,
          n = navigator.userAgent;
        return n.match(d) ? "modern" : n.match(r) ? "legacy" : "unknown"
      }(),
      u = "modern" === l ? "modern" : "legacy",
      c = (null != n ? n : {
        modern: "",
        legacy: ""
      })[u],
      f = function(e) {
        return [e.baseUrl, "/wpm", "/b", e.hashVersion, "modern" === e.buildTarget ? "m" : "l", ".js"].join("")
      }({
        baseUrl: d,
        hashVersion: r,
        buildTarget: u
      }),
      m = function(e) {
        var d = e.version,
          r = e.bundleTarget,
          n = e.surface,
          o = e.pageUrl,
          i = e.monorailEndpoint;
        return {
          emit: function(e) {
            var a = e.status,
              t = e.errorMsg,
              s = (new Date).getTime(),
              l = JSON.stringify({
                metadata: {
                  event_sent_at_ms: s
                },
                events: [{
                  schema_id: "web_pixels_manager_load/3.1",
                  payload: {
                    version: d,
                    bundle_target: r,
                    page_url: o,
                    status: a,
                    surface: n,
                    error_msg: t
                  },
                  metadata: {
                    event_created_at_ms: s
                  }
                }]
              });
            if (!i) return console && console.warn && console.warn("[Web Pixels Manager] No Monorail endpoint provided, skipping logging."), !1;
            try {
              return self.navigator.sendBeacon.bind(self.navigator)(i, l)
            } catch (e) {}
            var u = new XMLHttpRequest;
            try {
              return u.open("POST", i, !0), u.setRequestHeader("Content-Type", "text/plain"), u.send(l), !0
            } catch (e) {
              return console && console.warn && console.warn("[Web Pixels Manager] Got an unhandled error while logging to Monorail."), !1
            }
          }
        }
      }({
        version: r,
        bundleTarget: l,
        surface: e.surface,
        pageUrl: self.location.href,
        monorailEndpoint: e.monorailEndpoint
      });
    try {
      o.browserTarget = l,
        function(e) {
          var d = e.src,
            r = e.async,
            n = void 0 === r || r,
            o = e.onload,
            i = e.onerror,
            a = e.sri,
            t = e.scriptDataAttributes,
            s = void 0 === t ? {} : t,
            l = document.createElement("script"),
            u = document.querySelector("head"),
            c = document.querySelector("body");
          if (l.async = n, l.src = d, a && (l.integrity = a, l.crossOrigin = "anonymous"), s)
            for (var f in s)
              if (Object.prototype.hasOwnProperty.call(s, f)) try {
                l.dataset[f] = s[f]
              } catch (e) {}
          if (o && l.addEventListener("load", o), i && l.addEventListener("error", i), u) u.appendChild(l);
          else {
            if (!c) throw new Error("Did not find a head or body element to append the script");
            c.appendChild(l)
          }
        }({
          src: f,
          async: !0,
          onload: function() {
            if (! function() {
                var e, d;
                return Boolean(null === (d = null === (e = window.Shopify) || void 0 === e ? void 0 : e.analytics) || void 0 === d ? void 0 : d.initialized)
              }()) {
              var d = window.webPixelsManager.init(e) || void 0;
              if (d) {
                var r = window.Shopify.analytics;
                r.replayQueue.forEach((function(e) {
                  var r = e[0],
                    n = e[1],
                    o = e[2];
                  d.publishCustomEvent(r, n, o)
                })), r.replayQueue = [], r.publish = d.publishCustomEvent, r.visitor = d.visitor, r.initialized = !0
              }
            }
          },
          onerror: function() {
            return m.emit({
              status: "failed",
              errorMsg: "".concat(f, " has failed to load")
            })
          },
          sri: function(e) {
            var d = /^sha384-[A-Za-z0-9+/=]+$/;
            return "string" == typeof e && d.test(e)
          }(c) ? c : "",
          scriptDataAttributes: o
        }), m.emit({
          status: "loading"
        })
    } catch (e) {
      m.emit({
        status: "failed",
        errorMsg: (null == e ? void 0 : e.message) || "Unknown error"
      })
    }
  }
})({
  shopId: 1538863,
  storefrontBaseUrl: "https://www.headphonezone.in",
  extensionsBaseUrl: "https://extensions.shopifycdn.com/cdn/shopifycloud/web-pixels-manager",
  monorailEndpoint: "https://monorail-edge.shopifysvc.com/unstable/produce_batch",
  surface: "storefront-renderer",
  enabledBetaFlags: ["72028870", "2dca8a86", "d5bdd5d0", "5476ea20", "5acaffe6"],
  webPixelsConfigList: [{
    "id": "2858910064",
    "configuration": "{\"swymApiEndpoint\":\"https:\/\/swymstore-v3pro-01.swymrelay.com\",\"swymTier\":\"v3pro-01\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "5b6f6917e306bc7f24523662663331c0",
    "type": "APP",
    "apiClientId": 1350849,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "PREFERENCES"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized"
  }, {
    "id": "2363982192",
    "configuration": "{\"config\":\"{\\\"google_tag_ids\\\":[\\\"AW-976333748\\\",\\\"GT-MR24SWRD\\\"],\\\"target_country\\\":\\\"ZZ\\\",\\\"gtag_events\\\":[{\\\"type\\\":\\\"begin_checkout\\\",\\\"action_label\\\":\\\"AW-976333748\\\/n8Z6CMPB66MbELTXxtED\\\"},{\\\"type\\\":\\\"search\\\",\\\"action_label\\\":\\\"AW-976333748\\\/TOcdCM_B66MbELTXxtED\\\"},{\\\"type\\\":\\\"view_item\\\",\\\"action_label\\\":[\\\"AW-976333748\\\/pzVgCMzB66MbELTXxtED\\\",\\\"MC-YV5RCN4NSK\\\"]},{\\\"type\\\":\\\"purchase\\\",\\\"action_label\\\":[\\\"AW-976333748\\\/LsKBCMDB66MbELTXxtED\\\",\\\"MC-YV5RCN4NSK\\\"]},{\\\"type\\\":\\\"page_view\\\",\\\"action_label\\\":[\\\"AW-976333748\\\/PYV3CMnB66MbELTXxtED\\\",\\\"MC-YV5RCN4NSK\\\"]},{\\\"type\\\":\\\"add_payment_info\\\",\\\"action_label\\\":\\\"AW-976333748\\\/NkqaCMrC66MbELTXxtED\\\"},{\\\"type\\\":\\\"add_to_cart\\\",\\\"action_label\\\":\\\"AW-976333748\\\/-S3RCMbB66MbELTXxtED\\\"}],\\\"enable_monitoring_mode\\\":false}\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "OPEN",
    "scriptVersion": "5a723296a9ab7d2cddda5d574ded9c79",
    "type": "APP",
    "apiClientId": 1780363,
    "privacyPurposes": [],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized",
    "enabledFlags": ["9a3ed68a"]
  }, {
    "id": "2351759728",
    "configuration": "{\"accountID\":\"SrfdvZ\",\"webPixelConfig\":\"eyJlbmFibGVBZGRlZFRvQ2FydEV2ZW50cyI6IHRydWV9\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "524f6c1ee37bacdca7657a665bdca589",
    "type": "APP",
    "apiClientId": 123074,
    "privacyPurposes": ["ANALYTICS", "MARKETING"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized",
    "enabledFlags": ["9a3ed68a"]
  }, {
    "id": "2234024304",
    "configuration": "{\"account_ID\":\"354388\",\"google_analytics_tracking_tag\":\"1\",\"measurement_id\":\"2\",\"api_secret\":\"3\",\"shop_settings\":\"{\\\"custom_pixel_script\\\":\\\"https:\\\\\\\/\\\\\\\/storage.googleapis.com\\\\\\\/gsf-scripts\\\\\\\/custom-pixels\\\\\\\/headphone-zone.js\\\"}\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "LAX",
    "scriptVersion": "a90a2386b8d48cfc1abdd2eff8b04392",
    "type": "APP",
    "apiClientId": 1558137,
    "privacyPurposes": [],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "1982628208",
    "configuration": "{\"webPixelName\":\"Judge.me\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "34ad157958823915625854214640f0bf",
    "type": "APP",
    "apiClientId": 683015,
    "privacyPurposes": ["ANALYTICS"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "846692720",
    "configuration": "{\"accountID\":\"headphone-zone.myshopify.com\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "38afed2d2efdbd19caf2208d571fc103",
    "type": "APP",
    "apiClientId": 3128379,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized"
  }, {
    "id": "244515004",
    "configuration": "{\"subdomain\":\"headphone-zone\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "c35482b6b2cc46ff1af7ffc6ed1ed137",
    "type": "APP",
    "apiClientId": 1615517,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized",
    "enabledFlags": ["9a3ed68a"]
  }, {
    "id": "121700720",
    "eventPayloadVersion": "1",
    "runtimeContext": "LAX",
    "scriptVersion": "1",
    "type": "CUSTOM",
    "privacyPurposes": [],
    "name": "Simprosys Custom Pixel"
  }, {
    "id": "136053104",
    "eventPayloadVersion": "1",
    "runtimeContext": "LAX",
    "scriptVersion": "19",
    "type": "CUSTOM",
    "privacyPurposes": [],
    "name": "Google Tag Manager"
  }, {
    "id": "136085872",
    "eventPayloadVersion": "1",
    "runtimeContext": "LAX",
    "scriptVersion": "2",
    "type": "CUSTOM",
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "name": "Bing Conversion Tracking"
  }, {
    "id": "136118640",
    "eventPayloadVersion": "1",
    "runtimeContext": "LAX",
    "scriptVersion": "1",
    "type": "CUSTOM",
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "name": "Google Customer Reviews"
  }, {
    "id": "shopify-app-pixel",
    "configuration": "{}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "0450",
    "apiClientId": "shopify-pixel",
    "type": "APP",
    "privacyPurposes": ["ANALYTICS", "MARKETING"]
  }, {
    "id": "shopify-custom-pixel",
    "eventPayloadVersion": "v1",
    "runtimeContext": "LAX",
    "scriptVersion": "0450",
    "apiClientId": "shopify-pixel",
    "type": "CUSTOM",
    "privacyPurposes": ["ANALYTICS", "MARKETING"]
  }],
  isMerchantRequest: false,
  initData: {
    "shop": {
      "name": "Headphone Zone",
      "paymentSettings": {
        "currencyCode": "INR"
      },
      "myshopifyDomain": "headphone-zone.myshopify.com",
      "countryCode": "IN",
      "storefrontUrl": "https:\/\/www.headphonezone.in"
    },
    "customer": null,
    "cart": null,
    "checkout": null,
    "productVariants": [],
    "purchasingCompany": null
  },
}, "https://www.headphonezone.in/cdn", "1b8942c4w45c4d9d5pb7622108m7815b9e1", {
  "modern": "",
  "legacy": ""
}, {
  "trekkieShim": true,
  "shopId": "1538863",
  "storefrontBaseUrl": "https:\/\/www.headphonezone.in",
  "extensionBaseUrl": "https:\/\/extensions.shopifycdn.com\/cdn\/shopifycloud\/web-pixels-manager",
  "surface": "storefront-renderer",
  "enabledBetaFlags": "[\"72028870\", \"2dca8a86\", \"d5bdd5d0\", \"5476ea20\", \"5acaffe6\"]",
  "isMerchantRequest": "false",
  "hashVersion": "1b8942c4w45c4d9d5pb7622108m7815b9e1",
  "publish": "custom",
  "events": "[[\"page_viewed\",{}]]"
});