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
  shopId: 55987929227,
  storefrontBaseUrl: "https://herfantasybox.com",
  extensionsBaseUrl: "https://extensions.shopifycdn.com/cdn/shopifycloud/web-pixels-manager",
  monorailEndpoint: "https://monorail-edge.shopifysvc.com/unstable/produce_batch",
  surface: "storefront-renderer",
  enabledBetaFlags: ["72028870", "2dca8a86", "d5bdd5d0", "5476ea20"],
  webPixelsConfigList: [{
    "id": "1985773707",
    "configuration": "{\"appProxyPath\":\"\/apps\/pagefly\",\"analyticsEndpoint\":\"undefined\/analytics-v2\/events\",\"focusDuration\":\"3\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "cc510d1a3167776ef03f2a6c403db7ae",
    "type": "APP",
    "apiClientId": 1743893,
    "privacyPurposes": ["ANALYTICS", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_personal_data"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized"
  }, {
    "id": "1831665803",
    "configuration": "{\"pixelId\":\"1339f297-95d9-4466-95fb-4969b3f7b15a\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "c119f01612c13b62ab52809eb08154bb",
    "type": "APP",
    "apiClientId": 2556259,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized"
  }, {
    "id": "1803026571",
    "configuration": "{\"companyID\":\"gid:\/\/shopify\/Shop\/55987929227\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "53a564b8574378237642302dbd2cb842",
    "type": "APP",
    "apiClientId": 91426783233,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_email", "read_customer_name", "read_customer_personal_data"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "1796669579",
    "configuration": "{\"siteID\":\"62bc52bdbafea8619b06b4a9\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "022e2d3d38c42b2f6986f90d20803831",
    "type": "APP",
    "apiClientId": 1098570,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized"
  }, {
    "id": "1498808459",
    "configuration": "{\"accountID\":\"Tx9aVk\",\"webPixelConfig\":\"eyJlbmFibGVBZGRlZFRvQ2FydEV2ZW50cyI6IHRydWV9\"}",
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
    "dataSharingState": "unrestricted",
    "enabledFlags": ["9a3ed68a"]
  }, {
    "id": "1498710155",
    "configuration": "{\"accountID\":\"omega-tiktok-web-pixel\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "1b4dc72fdefe9adcc74adca4f37f39d0",
    "type": "APP",
    "apiClientId": 4949673,
    "privacyPurposes": [],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "1474986123",
    "configuration": "{\"vibePixelId\":\"2lBqiw\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "72859894ec8aa8d5e0246c40aaed9466",
    "type": "APP",
    "apiClientId": 132266098689,
    "privacyPurposes": ["ANALYTICS", "MARKETING"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": [],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized"
  }, {
    "id": "1378254987",
    "configuration": "{\"eventKey\":\"9e835395-98d4-4a5b-a0a4-dd991a15b869\",\"name\":\"her-fantasy-box - Axon Pixel\",\"storefrontToken\":\"3fa9ad8420024b60e39340a4ac1c4679\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "52ab378323058414ba06404bb0fa1bca",
    "type": "APP",
    "apiClientId": 256560922625,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "1153499275",
    "configuration": "{\"apiKey\":\"0R8x3I0f5j\",\"host\":\"searchserverapi1.com\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "5559ea45e47b67d15b30b79e7c6719da",
    "type": "APP",
    "apiClientId": 578825,
    "privacyPurposes": ["ANALYTICS"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_personal_data"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "1095958667",
    "configuration": "{}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "ef9b37cee6fb2f93ffcc681cf1cfdc4e",
    "type": "APP",
    "apiClientId": 3624803,
    "privacyPurposes": ["ANALYTICS"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "1080885387",
    "configuration": "{\"pixelCode\":\"CE2CG1JC77UEFEV7QFBG\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "22e92c2ad45662f435e4801458fb78cc",
    "type": "APP",
    "apiClientId": 4383523,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "899383435",
    "configuration": "{\"accountId\":\"10007840\",\"projectId\":\"10007811\",\"currency\":\"USD\",\"environment\":\"null\",\"cartViewedGoalId\":\"null\",\"checkoutAddressInfoSubmittedGoalId\":\"null\",\"checkoutCompletedGoalId\":\"100035979\",\"checkoutContactInfoSubmittedGoalId\":\"null\",\"checkoutShippingInfoSubmittedGoalId\":\"null\",\"checkoutStartedGoalId\":\"100035977\",\"collectionViewedGoalId\":\"null\",\"paymentInfoSubmittedGoalId\":\"null\",\"productAddedToCartGoalId\":\"100035978\",\"productRemovedFromCartGoalId\":\"null\",\"pageViewedGoalId\":\"null\",\"productViewedGoalId\":\"null\",\"searchSubmittedGoalId\":\"null\",\"subscriptionGoalId\":\"null\",\"nonSubscriptionGoalId\":\"null\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "841ff2a2bc7aebc985912449e5223cdf",
    "type": "APP",
    "apiClientId": 125487710209,
    "privacyPurposes": ["ANALYTICS"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_personal_data"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "832962699",
    "configuration": "{\"shopId\":\"her-fantasy-box.myshopify.com\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "9735d291f34c37bb980cad11123d15e3",
    "type": "APP",
    "apiClientId": 2753413,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "830046347",
    "configuration": "{\"shop_hash\":\"og797uw8om9b59rs\",\"pixel\":\"https:\/\/cdn.gosupersonic.ai\/gss-pixel.js\",\"external_link\":\"https:\/\/api.gosupersonic.ai\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "9bf77b8af6fe32d58695ef07a4e4d444",
    "type": "APP",
    "apiClientId": 73411264513,
    "privacyPurposes": ["ANALYTICS", "MARKETING"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized"
  }, {
    "id": "712212619",
    "configuration": "{\"accountID\":\"3778a4e1-e651-4f03-94a0-bd83aeed1715\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "626ff5871483985a7e78ab574fd60266",
    "type": "APP",
    "apiClientId": 2415836,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "711131275",
    "configuration": "{\"store_id\":\"202249\",\"environment\":\"prod\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "c8753c9f7c80c1a1c22d49b41efcf0a4",
    "type": "APP",
    "apiClientId": 294517,
    "privacyPurposes": [],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "609157259",
    "configuration": "{\"tagID\":\"2613129494175\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "18031546ee651571ed29edbe71a3550b",
    "type": "APP",
    "apiClientId": 3009811,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "595656843",
    "configuration": "{\"accountID\":\"web_pixel_twitter_app\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "38b3c183f076d587eea1ce6c86d6de04",
    "type": "APP",
    "apiClientId": 5000143,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "570949771",
    "configuration": "{\"config_url\": \"\/a\/elevar\/static\/configs\/00e760226e03ddc3d3135fa43eba6af7d2da99d9\/config.js\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "ab86028887ec2044af7d02b854e52653",
    "type": "APP",
    "apiClientId": 2509311,
    "privacyPurposes": [],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "492109963",
    "configuration": "{\"mntnAID\":\"37505\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "b8ecc2eedc793aefdb0d20e94c7addf0",
    "type": "APP",
    "apiClientId": 27490025473,
    "privacyPurposes": ["ANALYTICS", "MARKETING"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted"
  }, {
    "id": "367296651",
    "configuration": "{\"config\":\"{\\\"google_tag_ids\\\":[\\\"G-RKDSVCC78C\\\",\\\"AW-722807137\\\",\\\"GT-M3K466MW\\\"],\\\"target_country\\\":\\\"US\\\",\\\"gtag_events\\\":[{\\\"type\\\":\\\"begin_checkout\\\",\\\"action_label\\\":[\\\"G-RKDSVCC78C\\\",\\\"AW-722807137\\\/l8c2CMLLpqYBEOHS1NgC\\\"]},{\\\"type\\\":\\\"search\\\",\\\"action_label\\\":[\\\"G-RKDSVCC78C\\\",\\\"AW-722807137\\\/SHkeCMXLpqYBEOHS1NgC\\\"]},{\\\"type\\\":\\\"view_item\\\",\\\"action_label\\\":[\\\"G-RKDSVCC78C\\\",\\\"AW-722807137\\\/gxIwCLzLpqYBEOHS1NgC\\\",\\\"MC-54X2WNBR4B\\\"]},{\\\"type\\\":\\\"purchase\\\",\\\"action_label\\\":[\\\"G-RKDSVCC78C\\\",\\\"AW-722807137\\\/GpN6CICuzvEDEOHS1NgC\\\",\\\"MC-54X2WNBR4B\\\",\\\"AW-722807137\\\/iQvICNrx3YUYEOHS1NgC\\\"]},{\\\"type\\\":\\\"page_view\\\",\\\"action_label\\\":[\\\"G-RKDSVCC78C\\\",\\\"AW-722807137\\\/kkKJCKDKpqYBEOHS1NgC\\\",\\\"MC-54X2WNBR4B\\\"]},{\\\"type\\\":\\\"add_payment_info\\\",\\\"action_label\\\":[\\\"G-RKDSVCC78C\\\",\\\"AW-722807137\\\/gqlICIHMpqYBEOHS1NgC\\\"]},{\\\"type\\\":\\\"add_to_cart\\\",\\\"action_label\\\":[\\\"G-RKDSVCC78C\\\",\\\"AW-722807137\\\/oGZACL_LpqYBEOHS1NgC\\\"]}],\\\"enable_monitoring_mode\\\":false}\"}",
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
    "dataSharingState": "unrestricted",
    "enabledFlags": ["9a3ed68a"]
  }, {
    "id": "215482507",
    "configuration": "{\"storeHandle\":\"her-fantasy-box.myshopify.com\", \"publisherId\": \"9B311923\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "STRICT",
    "scriptVersion": "22f3ce3c5b1294dd875fc4618000b1f7",
    "type": "APP",
    "apiClientId": 140232458241,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_phone", "read_customer_personal_data"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "optimized"
  }, {
    "id": "144212107",
    "configuration": "{\"pixel_id\":\"354275256753271\",\"pixel_type\":\"facebook_pixel\",\"metaapp_system_user_token\":\"-\"}",
    "eventPayloadVersion": "v1",
    "runtimeContext": "OPEN",
    "scriptVersion": "d72ab942028ee4f6bccc581083be605e",
    "type": "APP",
    "apiClientId": 2329312,
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "dataSharingAdjustments": {
      "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"],
      "dataSharingControls": ["share_all_events"]
    },
    "dataSharingState": "unrestricted",
    "enabledFlags": ["9a3ed68a"]
  }, {
    "id": "48431243",
    "eventPayloadVersion": "1",
    "runtimeContext": "LAX",
    "scriptVersion": "9",
    "type": "CUSTOM",
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "name": "Convert"
  }, {
    "id": "49414283",
    "eventPayloadVersion": "1",
    "runtimeContext": "LAX",
    "scriptVersion": "1",
    "type": "CUSTOM",
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "name": "Elevar - Checkout Tracking"
  }, {
    "id": "84672651",
    "eventPayloadVersion": "1",
    "runtimeContext": "LAX",
    "scriptVersion": "2",
    "type": "CUSTOM",
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "name": "Hyros"
  }, {
    "id": "89686155",
    "eventPayloadVersion": "1",
    "runtimeContext": "LAX",
    "scriptVersion": "1",
    "type": "CUSTOM",
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "name": "Choozle"
  }, {
    "id": "109609099",
    "eventPayloadVersion": "1",
    "runtimeContext": "LAX",
    "scriptVersion": "1",
    "type": "CUSTOM",
    "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"],
    "name": "Reddit"
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
      "name": "Her Fantasy Box",
      "paymentSettings": {
        "currencyCode": "USD"
      },
      "myshopifyDomain": "her-fantasy-box.myshopify.com",
      "countryCode": "US",
      "storefrontUrl": "https:\/\/herfantasybox.com"
    },
    "customer": null,
    "cart": null,
    "checkout": null,
    "productVariants": [{
      "price": {
        "amount": 15.98,
        "currencyCode": "USD"
      },
      "product": {
        "title": "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin",
        "vendor": "Body Odor \u0026 Clear Skin",
        "id": "7048466202763",
        "untranslatedTitle": "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin",
        "url": "\/products\/body-magic-remove-full-body-odor-naturally",
        "type": "supplements \/ suppositories"
      },
      "id": "41096878948491",
      "image": {
        "src": "\/\/herfantasybox.com\/cdn\/shop\/files\/Body_Magic_Main.jpg?v=1764326138"
      },
      "sku": "MagicBody100",
      "title": "100 mg",
      "untranslatedTitle": "100 mg"
    }, {
      "price": {
        "amount": 19.98,
        "currencyCode": "USD"
      },
      "product": {
        "title": "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin",
        "vendor": "Body Odor \u0026 Clear Skin",
        "id": "7048466202763",
        "untranslatedTitle": "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin",
        "url": "\/products\/body-magic-remove-full-body-odor-naturally",
        "type": "supplements \/ suppositories"
      },
      "id": "45025188708491",
      "image": {
        "src": "\/\/herfantasybox.com\/cdn\/shop\/files\/Body_Magic_Main.jpg?v=1764326138"
      },
      "sku": "BODYMG-30CT",
      "title": "200 mg",
      "untranslatedTitle": "200 mg"
    }],
    "purchasingCompany": null
  },
}, "https://herfantasybox.com/cdn", "1b8942c4w45c4d9d5pb7622108m7815b9e1", {
  "modern": "",
  "legacy": ""
}, {
  "trekkieShim": true,
  "shopId": "55987929227",
  "storefrontBaseUrl": "https:\/\/herfantasybox.com",
  "extensionBaseUrl": "https:\/\/extensions.shopifycdn.com\/cdn\/shopifycloud\/web-pixels-manager",
  "surface": "storefront-renderer",
  "enabledBetaFlags": "[\"72028870\", \"2dca8a86\", \"d5bdd5d0\", \"5476ea20\"]",
  "isMerchantRequest": "false",
  "hashVersion": "1b8942c4w45c4d9d5pb7622108m7815b9e1",
  "publish": "custom",
  "events": "[[\"page_viewed\",{}],[\"product_viewed\",{\"productVariant\":{\"price\":{\"amount\":15.98,\"currencyCode\":\"USD\"},\"product\":{\"title\":\"Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin\",\"vendor\":\"Body Odor \u0026 Clear Skin\",\"id\":\"7048466202763\",\"untranslatedTitle\":\"Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin\",\"url\":\"\/products\/body-magic-remove-full-body-odor-naturally\",\"type\":\"supplements \/ suppositories\"},\"id\":\"41096878948491\",\"image\":{\"src\":\"\/\/herfantasybox.com\/cdn\/shop\/files\/Body_Magic_Main.jpg?v=1764326138\"},\"sku\":\"MagicBody100\",\"title\":\"100 mg\",\"untranslatedTitle\":\"100 mg\"}}]]"
});