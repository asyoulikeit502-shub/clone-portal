(function(e) {
  var t = {};

  function _(n) {
    if (t[n]) return t[n].exports;
    var r = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, _), r.l = !0, r.exports
  }
  _.m = e, _.c = t, _.d = function(e, t, n) {
    _.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, _.r = function(e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, _.t = function(e, t) {
    if (1 & t && (e = _(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (_.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) _.d(n, r, function(t) {
        return e[t]
      }.bind(null, r));
    return n
  }, _.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e["default"]
    } : function() {
      return e
    };
    return _.d(t, "a", t), t
  }, _.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, _.p = "https://surveys.okendo.io/", _(_.s = 3)
})({
  3: function(e, t, _) {
    e.exports = _("d5ca")
  },
  "7d07": function(e, t, _) {
    "use strict";

    function n(e) {
      return e.replace(/.js$/, "-0.0.1.2191.js")
    }

    function r() {
      if ("undefined" !== typeof navigator && navigator.userAgent) {
        const e = navigator.userAgent.toLowerCase(),
          t = /(bot|crawler|spider|googleother|googlebot|bingbot|yandex|baiduspider|facebookexternalhit|linkedinbot|embedly|preview|uptime|pingdom|musical_ly|bytedance|bytelocale)/i.test(e);
        return t && console.info(`[Okendo Connect] Bot or crawler detected (UA: ${navigator.userAgent}). Skipping initialisation.`), t
      }
      return !1
    }
    _.d(t, "a", (function() {
      return n
    })), _.d(t, "b", (function() {
      return r
    }))
  },
  d5ca: function(e, t, _) {
    "use strict";
    _.r(t);
    var n = _("7d07");
    (async function() {
      const {
        VUE_APP_OKENDO_SURVEYS_BASE_URL: e,
        VUE_APP_OKENDO_QUIZZES_CAPTURE_SCRIPT_PATH: t
      } = Object({
        NODE_ENV: "production",
        VUE_APP_ADMIN_APP_URL: "https://reviews.okendo.io",
        VUE_APP_API_BASE_URL: "https://api.okendo.io/v1",
        VUE_APP_ENVIRONMENT: "production",
        VUE_APP_OKENDO_QUIZZES_CAPTURE_SCRIPT_PATH: "/js/okendo-connect.quizzes.js",
        VUE_APP_OKENDO_QUIZZES_CAPTURE_STYLESHEET_PATH: "/css/okendo-connect.quizzes.css",
        VUE_APP_OKENDO_SURVEYS_BASE_URL: "https://surveys.okendo.io",
        VUE_APP_OKENDO_SURVEYS_CAPTURE_SCRIPT_PATH: "/js/okendo-surveys.onsite.js",
        VUE_APP_OKENDO_SURVEYS_CAPTURE_STYLESHEET_PATH: "/css/okendo-surveys.onsite.css",
        VUE_APP_PLATFORM_ADMIN_APP_URL: "#{OKENDO_PLATFORM_APP_BASE_URL}",
        VUE_APP_RAYGUN_API_KEY: "1nsg1dcXgsEk2kiAZYaiQ",
        VUE_APP_TRANSCODED_MEDIA_DYNAMIC_BASE_URL: "https://media-dynamic.okendo.io",
        VUE_APP_VERSION: "0.0.1.2191"
      });
      if (!e || !t || Object(n["b"])()) return;
      const _ = document.querySelector("[data-oke-quiz-capture]") || document.querySelector("[oke-quiz]"),
        r = document.querySelector(".okeQuizModalButton a.button");
      if (!_ && !r) return;
      const o = document.createElement("script");
      o.setAttribute("src", String(new URL(Object(n["a"])(t), e))), document.body.appendChild(o)
    })()
  }
});