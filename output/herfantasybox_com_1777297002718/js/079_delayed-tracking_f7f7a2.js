(function() {
  var loaded = !1;

  function scheduleIdle(fn) {
    "requestIdleCallback" in window ? requestIdleCallback(fn, {
      timeout: 2e3
    }) : setTimeout(fn, 50)
  }

  function loadTrackingScripts() {
    loaded || (loaded = !0, removeListeners(), scheduleIdle(function() {
      loadTriplePixel(), scheduleIdle(function() {
        loadRequestMetrics(), scheduleIdle(function() {
          loadNorthbeam(), scheduleIdle(function() {
            loadTwitter(), scheduleIdle(loadHotjar)
          })
        })
      })
    }))
  }

  function loadTwitter() {
    (function(e, t, n, s, u, a) {
      e.twq || (s = e.twq = function() {
        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
      }, s.version = "1.1", s.queue = [], u = t.createElement(n), u.async = !0, u.src = "https://static.ads-twitter.com/uwt.js", a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
    })(window, document, "script"), typeof twq != "undefined" && twq("config", "oi0zk")
  }

  function loadHotjar() {
    (function(h, o, t, j, a, r) {
      h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments)
      }, h._hjSettings = {
        hjid: 3322086,
        hjsv: 6
      }, a = o.getElementsByTagName("head")[0], r = o.createElement("script"), r.async = 1, r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv, a.appendChild(r)
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
  }

  function loadTriplePixel() {
    window.TriplePixelData = {
      TripleName: "her-fantasy-box.myshopify.com",
      ver: "2.12",
      plat: "SHOPIFY",
      isHeadless: !1
    }, (function(W, H, A, L, E, _, B, N) {
      function O(U, T, P, H, R) {
        R === void 0 && (R = !1), H = new XMLHttpRequest, P ? (H.open("POST", U, !0), H.setRequestHeader("Content-Type", "text/plain")) : H.open("GET", U, !0), H.send(JSON.stringify(P || {})), H.onreadystatechange = function() {
          H.readyState === 4 && H.status === 200 ? (R = H.responseText, U.includes(".txt") ? eval(R) : P || (N[B] = R)) : (299 < H.status || H.status < 200) && T && !R && (R = !0, O(U, T - 1, P))
        }
      }
      if (N = window, !N[H + "sn"]) {
        N[H + "sn"] = 1, L = function() {
          return Date.now().toString(36) + "_" + Math.random().toString(36)
        };
        try {
          A.setItem(H, 1 + (0 | A.getItem(H) || 0)), (E = JSON.parse(A.getItem(H + "U") || "[]")).push({
            u: location.href,
            r: document.referrer,
            t: Date.now(),
            id: L()
          }), A.setItem(H + "U", JSON.stringify(E))
        } catch (e) {}
        var i, m, p;
        A.getItem('"!nC`') || (_ = A, A = N, A[H] || (E = A[H] = function(t, e, a) {
          return a === void 0 && (a = []), t == "State" ? E.s : (W = L(), (E._q = E._q || []).push([W, t, e].concat(a)), W)
        }, E.s = "Installed", E._q = [], E.ch = W, B = "configSecurityConfModel", N[B] = 1, O("https://conf.config-security.com/model", 5), i = L(), m = A[atob("c2NyZWVu")], _.setItem("di_pmt_wt", i), p = {
          id: i,
          action: "profile",
          avatar: _.getItem("auth-security_rand_salt_"),
          time: m[atob("d2lkdGg=")] + ":" + m[atob("aGVpZ2h0")],
          host: A.TriplePixelData.TripleName,
          plat: A.TriplePixelData.plat,
          url: window.location.href,
          ref: document.referrer,
          ver: A.TriplePixelData.ver
        }, O("https://api.config-security.com/event", 5, p), O("https://whale.camera/live/dot.txt", 5)))
      }
    })("", "TriplePixel", localStorage)
  }

  function loadRequestMetrics() {
    (function(t, e, n, r) {
      function a() {
        return e && e.now ? e.now() : null
      }
      n.version || (n._events = [], n._errors = [], n._metadata = {}, n._urlGroup = null, window.RM = n, n.install = function(e2) {
        n._options = e2;
        var a2 = t.createElement("script");
        a2.async = !0, a2.crossOrigin = "anonymous", a2.src = r;
        var o = t.getElementsByTagName("script")[0];
        o.parentNode.insertBefore(a2, o)
      }, n.identify = function(t2, e2) {
        n._userId = t2, n._identifyOptions = e2
      }, n.sendEvent = function(t2, e2) {
        n._events.push({
          eventName: t2,
          metadata: e2,
          time: a()
        })
      }, n.setUrlGroup = function(t2) {
        n._urlGroup = t2
      }, n.track = function(t2, e2) {
        n._errors.push({
          error: t2,
          metadata: e2,
          time: a()
        })
      }, n.addMetadata = function(t2) {
        n._metadata = Object.assign(n._metadata, t2)
      })
    })(document, window.performance, window.RM || {}, "https://cdn.requestmetrics.com/agent/current/rm.js"), window.RM && window.RM.install && window.RM.install({
      token: "k3gg9vg:x7rp7da"
    })
  }

  function loadNorthbeam() {
    (function() {
      var t;
      (n = t = t || {}).A = "identify", n.B = "trackPageView", n.C = "fireEmailCaptureEvent", n.D = "fireCustomGoal", n.E = "firePurchaseEvent", n.F = "trackPageViewInitial", n.G = "fireSlimPurchaseEvent", n.H = "identifyCustomerId";
      var n = "//j.northbeam.io/ota-sp/e7faaa86-395a-4c0d-841f-2824e3e29fb6.js";

      function r(n2) {
        for (var e2 = [], t2 = 1; t2 < arguments.length; t2++) e2[t2 - 1] = arguments[t2];
        a.push({
          fnName: n2,
          args: e2
        })
      }
      var e, a = [],
        i2 = ((e = {})[t.F] = function(n2) {
          r(t.F, n2)
        }, (i2 = {
          _q: a
        })[t.A] = function(n2, e2) {
          return r(t.A, n2, e2)
        }, i2[t.B] = function() {
          return r(t.B)
        }, i2[t.C] = function(n2, e2) {
          return r(t.C, n2, e2)
        }, i2[t.D] = function(n2, e2) {
          return r(t.D, n2, e2)
        }, i2[t.E] = function(n2) {
          return r(t.E, n2)
        }, i2[t.G] = function(n2) {
          return r(t.G, n2)
        }, i2[t.H] = function(n2, e2) {
          return r(t.H, n2, e2)
        }, Object.assign(function(n2) {
          for (var e2 = [], t2 = 1; t2 < arguments.length; t2++) e2.push(arguments[t2]);
          return r.apply(null, [n2].concat(e2))
        }, i2));
      window.Northbeam = i2, (i2 = document.createElement("script")).async = !0, i2.src = n, document.head.appendChild(i2), e.trackPageViewInitial(window.location.href)
    })(), window.nbRegionCode && localStorage.setItem("nb__region_code", window.nbRegionCode), window.nbCurrencyCode && localStorage.setItem("nb__currency_code", window.nbCurrencyCode)
  }

  function removeListeners() {
    document.removeEventListener("scroll", loadTrackingScripts), document.removeEventListener("click", loadTrackingScripts), document.removeEventListener("touchstart", loadTrackingScripts), document.removeEventListener("mousemove", loadTrackingScripts)
  }
  document.addEventListener("scroll", loadTrackingScripts, {
    once: !0,
    passive: !0
  }), document.addEventListener("click", loadTrackingScripts, {
    once: !0
  }), document.addEventListener("touchstart", loadTrackingScripts, {
    once: !0,
    passive: !0
  }), document.addEventListener("mousemove", loadTrackingScripts, {
    once: !0,
    passive: !0
  }), setTimeout(loadTrackingScripts, 5e3)
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/delayed-tracking.js.map?v=140868447156425356251772808300