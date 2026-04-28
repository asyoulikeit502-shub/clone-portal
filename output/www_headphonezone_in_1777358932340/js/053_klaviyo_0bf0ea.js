var KLAVIYO_JS_REGEX = /(\/onsite\/js\/([a-zA-Z]{6})\/klaviyo\.js\?company_id=([a-zA-Z0-9]{6}).*|\/onsite\/js\/klaviyo\.js\?company_id=([a-zA-Z0-9]{6}).*)/;

function logFailedKlaviyoJsLoad(e, t, o) {
  var n = {
    metric_group: "onsite",
    events: [{
      metric: "klaviyoJsCompanyIdMisMatch",
      log_to_statsd: !0,
      log_to_s3: !0,
      log_to_metrics_service: !1,
      event_details: {
        script: e,
        templated_company_id: t,
        fastly_forwarded: o,
        hostname: window.location.hostname
      }
    }]
  };
  fetch("https://a.klaviyo.com/onsite/track-analytics?company_id=".concat(t), {
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(n),
    method: "POST",
    mode: "cors",
    credentials: "omit"
  })
}! function(e, t) {
  var o = "SrfdvZ",
    n = JSON.parse("[]"),
    a = "true" === "True".toLowerCase(),
    s = JSON.parse("[\u0022onsite_visitor_tracking\u0022, \u0022onsite_customer_hub_identified_state_enabled\u0022, \u0022is_kservice_billing_enabled\u0022]"),
    r = new Set(null != s ? s : []),
    c = JSON.parse("[\u0022onsite_datadome_enabled\u0022, \u0022onsite_triggering_version_two\u0022]"),
    i = new Set(null != c ? c : []),
    d = null !== (e = JSON.parse("null")) && void 0 !== e ? e : void 0,
    l = "true" === "False".toLowerCase();
  if (!(document.currentScript && document.currentScript instanceof HTMLScriptElement && document.currentScript.src && document.currentScript.src.match(KLAVIYO_JS_REGEX)) || null !== (t = document.currentScript.src) && void 0 !== t && t.includes(o) || l) {
    var p = window.klaviyoModulesObject;
    if (window._learnq = window._learnq || [], window.__klKey = window.__klKey || o, p || (window._learnq.push(["account", o]), p = {
        companyId: o,
        loadTime: new Date,
        loadedModules: {},
        loadedCss: {},
        serverSideRendered: !0,
        assetSource: "build-preview/commit-a4a9f26a54f4068a33eef086b569f1e3531e5c31/",
        v2Route: a,
        extendedIdIdentifiers: n,
        env: "web",
        featureFlags: r,
        hotsettings: i,
        serverSideCookies: d
      }, Object.defineProperty(window, "klaviyoModulesObject", {
        value: p,
        enumerable: !1
      })), o === p.companyId && p.serverSideRendered) {
      var u, m, y, _ = {},
        f = document,
        v = f.head,
        w = JSON.parse("noModule" in f.createElement("script") || function() {
          try {
            return new Function('import("")'), !0
          } catch (e) {
            return !1
          }
        }() ? "{\u0022static\u0022: {\u0022js\u0022: [\u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/fender_analytics.bcbed15c6b02c0d81b3a.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/static.d34531a9ee28a48e4d20.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/vendors~static~in_app_forms~signup_forms~post_identification_sync~web_personalization~client_identity~reviews~telemetry~customerHubRoot~favorites~faq~.9d51596d6a05c41a21db.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/runtime.b69cb71a50c83e40ef30.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/sharedUtils.2a5c0eb94e80b43abfd2.js?cb\u003D2\u0022]}, \u0022post_identification_sync\u0022: {\u0022js\u0022: [\u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/runtime.b69cb71a50c83e40ef30.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/sharedUtils.2a5c0eb94e80b43abfd2.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/vendors~static~in_app_forms~signup_forms~post_identification_sync~web_personalization~client_identity~reviews~telemetry~customerHubRoot~favorites~faq~.9d51596d6a05c41a21db.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/post_identification_sync.7ab744259835bf66561d.js?cb\u003D2\u0022]}, \u0022event_adapter\u0022: {\u0022js\u0022: [\u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/runtime.b69cb71a50c83e40ef30.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/sharedUtils.2a5c0eb94e80b43abfd2.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/event_adapter.b8cd6e2a0811110b50f7.js?cb\u003D2\u0022]}}" : "{\u0022static\u0022: {\u0022js\u0022: [\u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/fender_analytics.b8c821fee4eee035709e.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/static.2be424f956d6bbab0c51.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/vendors~static~in_app_forms~signup_forms~post_identification_sync~web_personalization~client_identity~reviews~atlas~telemetry~.000c44c2ea35b1cbdf5d.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/vendors~static~in_app_forms~signup_forms~post_identification_sync~web_personalization~client_identity~reviews~telemetry~customerHubRoot~favorites~faq~.9d51596d6a05c41a21db.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/runtime.faa6fd148e6853382c14.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/sharedUtils.d4e7f72bb628b84c0abe.js?cb\u003D2\u0022]}, \u0022post_identification_sync\u0022: {\u0022js\u0022: [\u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/runtime.faa6fd148e6853382c14.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/sharedUtils.d4e7f72bb628b84c0abe.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/vendors~static~in_app_forms~signup_forms~post_identification_sync~web_personalization~client_identity~reviews~telemetry~customerHubRoot~favorites~faq~.9d51596d6a05c41a21db.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/vendors~static~in_app_forms~signup_forms~post_identification_sync~web_personalization~client_identity~reviews~atlas~telemetry~.000c44c2ea35b1cbdf5d.js?cb\u003D2\u0022, \u0022https://static\u002Dtracking.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/post_identification_sync.02a96cbb041954a16b21.js?cb\u003D2\u0022]}, \u0022event_adapter\u0022: {\u0022js\u0022: [\u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/runtime.faa6fd148e6853382c14.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/sharedUtils.d4e7f72bb628b84c0abe.js?cb\u003D2\u0022, \u0022https://static.klaviyo.com/onsite/js/build\u002Dpreview/commit\u002Da4a9f26a54f4068a33eef086b569f1e3531e5c31/event_adapter.71ba5bb9032ed2d9c00e.js?cb\u003D2\u0022]}}"),
        S = p,
        h = S.loadedCss,
        g = S.loadedModules;
      for (u in w)
        if (w.hasOwnProperty(u)) {
          var j = w[u];
          j.js.forEach((function(e) {
            var t = e.split("?")[0];
            t && !g[t] && (k(e), g[t] = (new Date).toISOString())
          }));
          var O = j.css;
          O && !h[O] && (m = O, y = void 0, (y = f.createElement("link")).rel = "stylesheet", y.href = m, v.appendChild(y), h[O] = (new Date).toISOString())
        }
    } else console.warn("Already loaded for account ".concat(p.companyId, ". Skipping account ").concat(o, "."))
  } else {
    console.warn("Not loading ".concat(document.currentScript.src, " for ").concat(o));
    try {
      logFailedKlaviyoJsLoad(document.currentScript.src, o, a)
    } catch (e) {
      console.warn("Error logging klaviyo.js company mismatch")
    }
  }

  function k(e) {
    if (!_[e]) {
      var t = f.createElement("script");
      t.type = "text/javascript", t.async = !0, t.src = e, t.crossOrigin = "anonymous", v.appendChild(t), _[e] = !0
    }
  }
}();