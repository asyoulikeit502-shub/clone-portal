(() => {
  var e = {
      8015: (e, t, r) => {
        var n = r(4155),
          o = "https://easy-redirects.shopcircle.co",
          i = n.env.MIX_APP_PROXY_PATH_LOCAL || "/apps/lila-easyredirects";
        ((o = "https://easy-redirects.shopcircle.co"),
          (i = n.env.MIX_APP_PROXY_PATH_PRODUCTION || "/apps/easyredirects"),
          (e.exports = {
            api_base_url: o,
            app_proxy_path: i
          }));
      },
      4155: (e) => {
        var t,
          r,
          n = (e.exports = {});

        function o() {
          throw new Error("setTimeout has not been defined");
        }

        function i() {
          throw new Error("clearTimeout has not been defined");
        }

        function c(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === o || !t) && setTimeout)
            return ((t = setTimeout), setTimeout(e, 0));
          try {
            return t(e, 0);
          } catch (r) {
            try {
              return t.call(null, e, 0);
            } catch (r) {
              return t.call(this, e, 0);
            }
          }
        }!(function() {
          try {
            t = "function" == typeof setTimeout ? setTimeout : o;
          } catch (e) {
            t = o;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : i;
          } catch (e) {
            r = i;
          }
        })();
        var s,
          a = [],
          u = !1,
          l = -1;

        function p() {
          u &&
            s &&
            ((u = !1),
              s.length ? (a = s.concat(a)) : (l = -1),
              a.length && h());
        }

        function h() {
          if (!u) {
            var e = c(p);
            u = !0;
            for (var t = a.length; t;) {
              for (s = a, a = []; ++l < t;) s && s[l].run();
              ((l = -1), (t = a.length));
            }
            ((s = null),
              (u = !1),
              (function(e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === i || !r) && clearTimeout)
                  return ((r = clearTimeout), clearTimeout(e));
                try {
                  return r(e);
                } catch (t) {
                  try {
                    return r.call(null, e);
                  } catch (t) {
                    return r.call(this, e);
                  }
                }
              })(e));
          }
        }

        function f(e, t) {
          ((this.fun = e), (this.array = t));
        }

        function d() {}
        ((n.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            (a.push(new f(e, t)), 1 !== a.length || u || c(h));
          }),
          (f.prototype.run = function() {
            this.fun.apply(null, this.array);
          }),
          (n.title = "browser"),
          (n.browser = !0),
          (n.env = {}),
          (n.argv = []),
          (n.version = ""),
          (n.versions = {}),
          (n.on = d),
          (n.addListener = d),
          (n.once = d),
          (n.off = d),
          (n.removeListener = d),
          (n.removeAllListeners = d),
          (n.emit = d),
          (n.prependListener = d),
          (n.prependOnceListener = d),
          (n.listeners = function(e) {
            return [];
          }),
          (n.binding = function(e) {
            throw new Error("process.binding is not supported");
          }),
          (n.cwd = function() {
            return "/";
          }),
          (n.chdir = function(e) {
            throw new Error("process.chdir is not supported");
          }),
          (n.umask = function() {
            return 0;
          }));
      },
    },
    t = {};

  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = {
      exports: {}
    });
    return (e[n](i, i.exports, r), i.exports);
  }
  ((r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (r.d(t, {
        a: t
      }), t);
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
        !r.o(e, n) &&
        Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n]
        });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = r(8015),
        t = window.location.hash;
      if ((console.log(t), -1 !== t.indexOf("#erid"))) {
        "pushState" in history
          ?
          history.pushState(
            "",
            document.title,
            window.location.pathname + window.location.search,
          ) :
          (window.location.hash = "");
        var n = new XMLHttpRequest();
        (n.open(
            "GET",
            e.app_proxy_path +
            "/redirect-hit?shop=" +
            Shopify.shop +
            "&id=" +
            t.replace("#erid", ""),
          ),
          n.send());
      }
    })());
})();