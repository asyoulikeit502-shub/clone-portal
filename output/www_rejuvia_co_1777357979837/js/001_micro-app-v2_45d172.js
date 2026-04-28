(() => {
  var e, t, n, r, i = {
      8926: e => {
        function t(e, t, n, r, i, o, a) {
          try {
            var s = e[o](a),
              l = s.value
          } catch (e) {
            return void n(e)
          }
          s.done ? t(l) : Promise.resolve(l).then(r, i)
        }
        e.exports = function(e) {
          return function() {
            var n = this,
              r = arguments;
            return new Promise((function(i, o) {
              var a = e.apply(n, r);

              function s(e) {
                t(a, i, o, s, l, "next", e)
              }

              function l(e) {
                t(a, i, o, s, l, "throw", e)
              }
              s(void 0)
            }))
          }
        }
      },
      9713: e => {
        e.exports = function(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }
      },
      8743: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()((function(e) {
            return e[1]
          }));
        i.push([e.id, ".rp-micro-app-dummy-icon{height:60px;width:60px;background:#004e96;border-radius:60px;cursor:pointer;max-width:300px;-webkit-box-shadow:rgba(0,0,0,.16) 0px 5px 40px;box-shadow:rgba(0,0,0,.16) 0px 5px 40px;-webkit-transition:width .6s;transition:width .6s;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.rp-micro-app-dummy-icon.miansai-logo{background-image:url(//cdn.shopify.com/s/files/1/1994/2941/files/chat_icon_thicker_300x.png?v=3240152291644892867);background-size:98% 98%;background-position:1px 1px;background-repeat:no-repeat;box-shadow:none !important;background-color:transparent !important}.rp-micro-app-dummy-icon.miansai-logo .rp-micro-app-icon{display:none}.rp-micro-app-dummy-icon.rp-badge-logo{align-items:center !important}.rp-micro-app-dummy-icon.rp-badge-logo .rp-micro-app-icon{display:none}.rp-micro-app-dummy-icon .rp-micro-app-cross-icon{display:none;width:17px;height:17px}.rp-micro-app-dummy-icon .rp-micro-app-cross-icon path{stroke:#fff}.rp-micro-app-dummy-icon .rp-micro-app-cross-icon.dark path{stroke:#000}.rp-micro-app-icon{height:44px;width:42.181px;position:absolute}.rp-micro-app-icon svg{height:44px;width:44.181px;fill:#fff;filter:drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.3))}.rp-micro-app-icon svg path,.rp-micro-app-icon svg rect{fill:#fff !important;stroke:#fff !important}.rp-micro-app-icon.dark svg path,.rp-micro-app-icon.dark svg rect{fill:#424242 !important;stroke:#424242 !important}.rp-micro-app-label-icon{height:100%;width:100%;display:flex;justify-content:center;align-items:center}.rp-micro-app-label-icon svg{height:100%;width:100%;fill:#fff}.rp-micro-app-label-icon svg path{fill:none !important}.rp-micro-app-label-icon svg rect{fill:none}.rp-micro-app-label-icon.dark svg path{fill:#424242 !important}.rp-micro-app-label-icon.rp-icon-light svg path{fill:#fff !important}", ""]);
        const o = i
      },
      7916: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()((function(e) {
            return e[1]
          }));
        i.push([e.id, ".rp-micro-app-dummy-icon-container{border:none;position:fixed;max-width:421px;z-index:2147483646;user-select:none;box-sizing:border-box;padding:20px}.rp-micro-app-dummy-icon-container.rp-micro-app-opened .rp-micro-app-dummy-icon .rp-micro-app-icon,.rp-micro-app-dummy-icon-container.rp-micro-app-opened .rp-micro-app-dummy-icon .rp-micro-app-label-icon{display:none}.rp-micro-app-dummy-icon-container.rp-micro-app-opened .rp-micro-app-dummy-icon .rp-micro-app-cross-icon{display:flex;justify-content:center;align-items:center}@media only screen and (min-device-width: 320px)and (max-device-width: 480px){.rp-micro-app-dummy-icon-container.rp-micro-app-opened .rp-micro-app-dummy-icon{display:none}}.rp-micro-app-label-icon-container{display:flex;align-items:center}", ""]);
        const o = i
      },
      1611: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()((function(e) {
            return e[1]
          }));
        i.push([e.id, ".rp-micro-app-loading-spinner{align-self:center;display:flex;flex:1;align-items:center}.rp-micro-app-loading-spinner .rp-micro-app-circular{height:100px;width:100px;will-change:transform;animation:loading-rotate 1.7s linear infinite}.rp-micro-app-loading-spinner .rp-micro-app-loader{text-align:center}.rp-micro-app-loading-spinner .rp-micro-app-loader .richpanel-logo{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.rp-micro-app-loading-spinner .rp-micro-app-loader .richpanel-blend{mix-blend-mode:multiply}.rp-micro-app-loading-spinner .rp-micro-app-path{animation:loading-dash 1.5s ease-in-out infinite;stroke-dasharray:90,150;stroke-dashoffset:0;stroke-width:1;stroke:#409eff;stroke-linecap:round;will-change:stroke-dasharray,stroke-dashoffset;box-shadow:0px 0px 8px #000}@keyframes loading-rotate{to{transform:rotate(1turn)}}@keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}to{stroke-dasharray:90,150;stroke-dashoffset:-120px}}", ""]);
        const o = i
      },
      214: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()((function(e) {
            return e[1]
          }));
        i.push([e.id, ".rp-micro-app-messenger{position:fixed;width:375px;max-width:100%;max-height:777px;border-radius:10px;overflow:auto;font-weight:400;box-shadow:rgba(0,0,0,.16) 0px 5px 40px;display:flex;flex-direction:column;background-color:#fafafa;z-index:2236374112}@media only screen and (min-device-width: 320px)and (max-device-width: 480px){.rp-micro-app-messenger{top:0 !important;bottom:0 !important;left:0 !important;right:0 !important;height:unset !important;width:auto;border-radius:0;max-height:unset !important}}.rp-micro-app-messenger-header__start{border-top-right-radius:10px;border-top-left-radius:10px;height:250px;font-family:system-ui}@media only screen and (min-device-width: 320px)and (max-device-width: 480px){.rp-micro-app-messenger-header__start{border-top-right-radius:0px;border-top-left-radius:0px}}.rp-micro-app-fade-enter-active{animation:rpMicroAppfadeIn .4s cubic-bezier(0.1, -0.6, 0.2, 0)}@keyframes rpMicroAppfadeIn{from{transform:translate3d(0, 20px, 0);opacity:0}to{transform:translate3d(0, 0, 0);opacity:1}}.rp-micro-app-fade-leave-active{animation:rpMicroAppfadeOut .4s cubic-bezier(0.1, -0.6, 0.2, 0)}@keyframes rpMicroAppfadeOut{from{opacity:1}to{transform:translate3d(0, 20px, 0);opacity:0}}.rp-micro-app-messenger-header__start-title{font-weight:500;font-size:40px;margin:0;-webkit-animation-duration:.5s;animation-duration:.5s;white-space:nowrap;overflow:hidden;max-width:300px;text-overflow:ellipsis;color:#fff}.rp-micro-app-messenger-header__start-message{max-width:300px;max-height:65px;overflow:hidden;margin:.3rem auto;font-weight:200;font-size:16px;line-height:1.4;-webkit-animation-duration:.75s;animation-duration:.75s;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;opacity:1;text-align:left;margin-left:0;color:rgba(255,255,255,.9);font-weight:400}.rp-micro-app-messenger-mobile-close-trigger{position:absolute;right:7px;top:12px;width:48px;height:48px;align-items:center;justify-content:center;display:none}.rp-micro-app-messenger-mobile-close-trigger .rp-micro-app-cross-icon{width:15px;height:15px}.rp-micro-app-messenger-mobile-close-trigger .rp-micro-app-cross-icon path{stroke:#fff}.rp-micro-app-messenger-mobile-close-trigger .rp-micro-app-cross-icon.dark path{stroke:#000}@media only screen and (min-device-width: 320px)and (max-device-width: 480px){.rp-micro-app-messenger-mobile-close-trigger{display:flex}}", ""]);
        const o = i
      },
      3491: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()((function(e) {
            return e[1]
          }));
        i.push([e.id, ".richpanel-app-modal-container{width:100%;height:100%;top:0px;left:0px;position:fixed;z-index:2147483647}.richpanel-app-modal-container.hide{display:none}.richpanel-app-modal-container__bg{position:absolute;background-color:rgba(0,0,0,.5);width:100%;height:100%;cursor:pointer;display:block !important}.richpanel-app-modal-container__cross{width:19px;height:19px;position:absolute;top:30px;right:30px;cursor:pointer}.richpanel-app-modal-container__cross svg{fill:#fff}.richpanel-app-modal-container__content{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:90%;height:90%;display:flex;justify-content:center;align-items:center}", ""]);
        const o = i
      },
      3974: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => o
        });
        var r = n(3645),
          i = n.n(r)()((function(e) {
            return e[1]
          }));
        i.push([e.id, ".rp-micro-app-hide{display:none !important;opacity:0;visibility:hidden}", ""]);
        const o = i
      },
      3645: e => {
        "use strict";
        e.exports = function(e) {
          var t = [];
          return t.toString = function() {
            return this.map((function(t) {
              var n = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
            })).join("")
          }, t.i = function(e, n, r) {
            "string" == typeof e && (e = [
              [null, e, ""]
            ]);
            var i = {};
            if (r)
              for (var o = 0; o < this.length; o++) {
                var a = this[o][0];
                null != a && (i[a] = !0)
              }
            for (var s = 0; s < e.length; s++) {
              var l = [].concat(e[s]);
              r && i[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l))
            }
          }, t
        }
      },
      3379: (e, t, n) => {
        "use strict";
        var r, i = function() {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
          },
          o = function() {
            var e = {};
            return function(t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                  n = n.contentDocument.head
                } catch (e) {
                  n = null
                }
                e[t] = n
              }
              return e[t]
            }
          }(),
          a = [];

        function s(e) {
          for (var t = -1, n = 0; n < a.length; n++)
            if (a[n].identifier === e) {
              t = n;
              break
            } return t
        }

        function l(e, t) {
          for (var n = {}, r = [], i = 0; i < e.length; i++) {
            var o = e[i],
              l = t.base ? o[0] + t.base : o[0],
              c = n[l] || 0,
              d = "".concat(l, " ").concat(c);
            n[l] = c + 1;
            var p = s(d),
              u = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
              }; - 1 !== p ? (a[p].references++, a[p].updater(u)) : a.push({
              identifier: d,
              updater: f(u, t),
              references: 1
            }), r.push(d)
          }
          return r
        }

        function c(e) {
          var t = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var i = n.nc;
            i && (r.nonce = i)
          }
          if (Object.keys(r).forEach((function(e) {
              t.setAttribute(e, r[e])
            })), "function" == typeof e.insert) e.insert(t);
          else {
            var a = o(e.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(t)
          }
          return t
        }
        var d, p = (d = [], function(e, t) {
          return d[e] = t, d.filter(Boolean).join("\n")
        });

        function u(e, t, n, r) {
          var i = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
          if (e.styleSheet) e.styleSheet.cssText = p(t, i);
          else {
            var o = document.createTextNode(i),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
          }
        }

        function h(e, t, n) {
          var r = n.css,
            i = n.media,
            o = n.sourceMap;
          if (i ? e.setAttribute("media", i) : e.removeAttribute("media"), o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
          else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r))
          }
        }
        var m = null,
          g = 0;

        function f(e, t) {
          var n, r, i;
          if (t.singleton) {
            var o = g++;
            n = m || (m = c(t)), r = u.bind(null, n, o, !1), i = u.bind(null, n, o, !0)
          } else n = c(t), r = h.bind(null, n, t), i = function() {
            ! function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e)
            }(n)
          };
          return r(e),
            function(t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t)
              } else i()
            }
        }
        e.exports = function(e, t) {
          (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = i());
          var n = l(e = e || [], t);
          return function(e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
              for (var r = 0; r < n.length; r++) {
                var i = s(n[r]);
                a[i].references--
              }
              for (var o = l(e, t), c = 0; c < n.length; c++) {
                var d = s(n[c]);
                0 === a[d].references && (a[d].updater(), a.splice(d, 1))
              }
              n = o
            }
          }
        }
      }
    },
    o = {};

  function a(e) {
    if (o[e]) return o[e].exports;
    var t = o[e] = {
      id: e,
      exports: {}
    };
    return i[e](t, t.exports, a), t.exports
  }
  a.m = i, a.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return a.d(t, {
      a: t
    }), t
  }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, a.t = function(n, r) {
    if (1 & r && (n = this(n)), 8 & r) return n;
    if ("object" == typeof n && n) {
      if (4 & r && n.__esModule) return n;
      if (16 & r && "function" == typeof n.then) return n
    }
    var i = Object.create(null);
    a.r(i);
    var o = {};
    e = e || [null, t({}), t([]), t(t)];
    for (var s = 2 & r && n;
      "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((e => o[e] = () => n[e]));
    return o.default = () => n, a.d(i, o), i
  }, a.d = (e, t) => {
    for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    })
  }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce(((t, n) => (a.f[n](e, t), t)), [])), a.u = e => ({
    271: "socketio-vendor",
    728: "socket.io"
  } [e] + ".js"), a.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, r = "micro-messenger-app:", a.l = (e, t, i, o) => {
    if (n[e]) n[e].push(t);
    else {
      var s, l;
      if (void 0 !== i)
        for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
          var p = c[d];
          if (p.getAttribute("src") == e || p.getAttribute("data-webpack") == r + i) {
            s = p;
            break
          }
        }
      s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", r + i), s.src = e), n[e] = [t];
      var u = (t, r) => {
          s.onerror = s.onload = null, clearTimeout(h);
          var i = n[e];
          if (delete n[e], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((e => e(r))), t) return t(r)
        },
        h = setTimeout(u.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = u.bind(null, s.onerror), s.onload = u.bind(null, s.onload), l && document.head.appendChild(s)
    }
  }, a.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, (() => {
    var e;
    a.g.importScripts && (e = a.g.location + "");
    var t = a.g.document;
    if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
      var n = t.getElementsByTagName("script");
      n.length && (e = n[n.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e
  })(), (() => {
    var e = {
      179: 0
    };
    a.f.j = (t, n) => {
      var r = a.o(e, t) ? e[t] : void 0;
      if (0 !== r)
        if (r) n.push(r[2]);
        else {
          var i = new Promise(((n, i) => {
            r = e[t] = [n, i]
          }));
          n.push(r[2] = i);
          var o = a.p + a.u(t),
            s = new Error;
          a.l(o, (n => {
            if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
              var i = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src;
              s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", s.name = "ChunkLoadError", s.type = i, s.request = o, r[1](s)
            }
          }), "chunk-" + t, t)
        }
    };
    var t = (t, n) => {
        for (var r, i, [o, s, l] = n, c = 0, d = []; c < o.length; c++) i = o[c], a.o(e, i) && e[i] && d.push(e[i][0]), e[i] = 0;
        for (r in s) a.o(s, r) && (a.m[r] = s[r]);
        for (l && l(a), t && t(n); d.length;) d.shift()()
      },
      n = self.webpackChunkmicro_messenger_app = self.webpackChunkmicro_messenger_app || [];
    n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
  })(), (() => {
    "use strict";
    var e = a(9713),
      t = a.n(e),
      n = a(8926),
      r = a.n(n);

    function i(e) {
      var {
        name: t,
        attrs: n,
        tpl: r,
        children: i,
        mounted: a
      } = e;
      return e => {
        var s = document.createElement(t);
        for (var l in n)
          if (Object.hasOwnProperty.call(n, l)) {
            var c = n[l];
            s.setAttribute(l, c)
          } for (var d in e)
          if (Object.hasOwnProperty.call(e, d)) {
            var p = e[d];
            if ("class" === d) {
              if (p) {
                var u = p.split(" ");
                for (var h of u) s.classList.add(h)
              }
            } else if ("style" === d)
              for (var m in p)
                if (Object.hasOwnProperty.call(p, m)) {
                  var g = p[m];
                  s.style[m] = g
                }
          } return r && (s.innerHTML = r), i && o(s, i instanceof Function ? i({
          props: e,
          $element: s
        }) : i), a && a.call(null, {
          props: e,
          $element: s
        }), s
      }
    }

    function o(e, t) {
      if (t) {
        var n = document.createDocumentFragment();
        t instanceof Array ? t.forEach((e => {
          n.appendChild(e)
        })) : n.appendChild(t), e.appendChild(n)
      }
    }

    function s(e, t) {
      return e.addEventListener("click", t), () => {
        e.removeEventListener("click", t)
      }
    }
    var l = a(3379),
      c = a.n(l),
      d = a(3491),
      p = {
        insert: "head",
        singleton: !1
      };
    c()(d.Z, p);
    d.Z.locals;
    var u = i({
        name: "div",
        attrs: {
          class: "richpanel-app-modal-container__bg"
        }
      }),
      h = i({
        name: "div",
        attrs: {
          class: "richpanel-app-modal-container__cross"
        },
        tpl: '\n        <svg\n            x="0px"\n            y="0px"\n            viewBox="0 0 512.001 512.001"\n            style="enable-background:new 0 0 512.001 512.001;"\n            xml:space="preserve"\n        >\n            <g>\n                <g>\n                    <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717\n                        L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859\n                        c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287\n                        l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285\n                        L284.286,256.002z"/>\n                </g>\n            </g>\n        </svg>\n    '
      }),
      m = i({
        name: "div",
        attrs: {
          class: "richpanel-app-modal-container__content"
        }
      });
    class g {
      constructor() {
        this.handleCloseClick = this.handleCloseClick.bind(this), this.$content = m();
        var e = u();
        s(e, this.handleCloseClick);
        var t = h();
        s(t, this.handleCloseClick);
        var n = i({
          name: "div",
          attrs: {
            class: "richpanel-app-modal-container hide"
          },
          children: [e, t, this.$content]
        });
        this.$el = n(), o(document.body, this.$el)
      }
      setContent(e) {
        e instanceof HTMLElement ? this.$content.appendChild(e) : "string" == typeof e && (this.$content.innerHTML = e)
      }
      open(e) {
        this.$el.classList.remove("hide"), e && this.setContent(e)
      }
      close() {
        this.setContent(""), this.$el.classList.add("hide")
      }
      handleCloseClick() {
        this.close()
      }
    }

    function f(e, t) {
      t = t.replace(/[\[\]]/g, "\\$&");
      var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
      return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }

    function v(e) {
      for (var t = document.getElementsByTagName("script"), n = function(n) {
          var r = t[n].getAttribute("src");
          if (e.every((e => null == r ? void 0 : r.includes(e)))) return {
            v: r
          }
        }, r = 0; r < t.length; r++) {
        var i = n(r);
        if ("object" == typeof i) return i.v
      }
    }

    function y(e) {
      return ("; " + document.cookie).split("; " + e + "=").pop().split(";").shift()
    }
    var w = "https://ws-prod.richpanel.com",
      C = "https://widgetconfig.richpanel.com",
      b = "/tenant-messenger/messenger",
      S = "#004e96",
      M = 2147483647;

    function x() {
      try {
        var e = document.getElementById("richpanel_messenger_iframe");
        return e ? (e.remove(), "Removed the old messenger") : "Nothing to remove"
      } catch (e) {
        return console.error(e), e.message
      }
    }

    function O(e) {
      var t = document.getElementById("richpanel-helpcenter-loader-text");
      t && (t.innerText = e)
    }
    var _ = () => "undefined" != typeof window && window.__next_f;

    function E(e, t) {
      var n = document.createElement("meta");
      return n.setAttribute("name", "viewport"), n.setAttribute("content", e), t && (n.id = t), n
    }

    function I() {
      return window.initialViewPort || (window.initialViewPort = function() {
        try {
          var e = window.document.head.querySelector('meta[name="viewport"]');
          return e || E("initial-scale=1, width=device-width")
        } catch (e) {
          return E("initial-scale=1, width=device-width")
        }
      }()), window.initialViewPort
    }
    var T = "richpanel-meta-viewport";

    function k() {
      try {
        var e = window.document.head.querySelector("#".concat(T));
        return e || E("width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no", T)
      } catch (e) {
        return E("width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no", T)
      }
    }

    function A() {
      try {
        _() || (window.document.head.removeChild(I()), window.document.head.appendChild(k()))
      } catch (e) {}
    }

    function L() {
      try {
        _() || (window.document.head.removeChild(k()), window.document.head.appendChild(I()))
      } catch (e) {}
    }
    var N = [];

    function D() {
      var e = window.document.createElement("style");
      e.innerHTML = "\n        @media only screen and (max-width: 480px) {\n            .rp-messenger-active-html-full {\n                height: 100vh !important;\n            }\n            .rp-messenger-active {\n                overflow: hidden !important;\n            }\n            .rp-messenger-active #richpanel_messenger_iframe {\n                bottom: 0px !important;\n                left: 0px !important;\n                right: 0px !important;\n                bottom: 0px !important;\n                max-width: 100% !important;\n            }\n        }\n\n        .rp-messenger-active #richpanel_messenger_iframe {\n            transition: max-width 0.2s ease-out;\n        }\n        .rp-notifications-active #richpanel_messenger_iframe {\n            width: 100% !important;\n            height: 100% !important;\n        }\n        .has-popup-notifications #richpanel_messenger_iframe {\n            max-width: unset !important;\n            width: 100% !important;\n            height: 100% !important;\n            top: 0px !important;\n            bottom: 0px !important;\n            left: 0px !important;\n            right: 0px !important;\n        }\n\n        .richpanel-messenger-closed {\n            top: auto !important;\n        }\n\n        .richpanel-messenger-opened {\n            top: auto !important;\n        }\n    ", window.document.head.appendChild(e);
      var t = window.document.createElement("style");
      t.setAttribute("id", "rp-dynamic-styles"), window.document.head.appendChild(t)
    }
    var P = "LAUNCH_MESSENGER",
      H = "RESYNC_USER_DATA",
      j = "LOGOUT",
      U = "UPDATE_LANG",
      R = "KEYBOARD_STATE_CHANGE",
      W = "MESSENGER_ENTER_ANIMATION_COMPLETED",
      Z = "MESSENGER_EXIT_ANIMATION_COMPLETED",
      B = "TRACK_EVENT",
      F = "NEW_MESSAGE_NOTIFICATION";

    function V(e) {
      var {
        payload: t,
        actionName: n
      } = e, r = function() {
        var e = document.getElementById("richpanel_messenger_iframe");
        return e ? e.contentWindow : null
      }();
      if (!r) return console.warn("Richpanel Messenger not available here. Please initialize messenger"), "Messenger Not available here";
      var i = {
        actionName: n,
        payload: t
      };
      r.postMessage(JSON.stringify(i), "*")
    }

    function z(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "messenger";
      V({
        payload: {
          richpanelSettings: e || window.richpanelSettings,
          cookieId: window.richpanel.did,
          eventSource: t
        },
        actionName: H
      })
    }

    function G() {
      V({
        payload: {},
        actionName: j
      })
    }

    function $(e) {
      V({
        payload: {
          richpanelSettings: e || window.richpanelSettings,
          cookieId: window.richpanel.did,
          eventSource: "website",
          isLogin: !0
        },
        actionName: H
      })
    }

    function Y(e) {
      e ? V({
        payload: {
          langCode: e
        },
        actionName: U
      }) : console.error("langCode must be provided to update the language")
    }

    function J(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function q(e, n) {
      window.addEventListener("message", (function(r) {
        var i, o;
        if (r.source === e.contentWindow) {
          var a = r.data;
          if (a) {
            var s, l = a.richpanel_messenger_value,
              c = a.hasNotifications,
              d = a.hasPopupNotifications,
              p = a.heightOfNotifications,
              u = a.widthOfNotifications,
              h = a.isMessengerVisible,
              {
                actionName: m,
                payload: g
              } = a;
            if ("string" == typeof a && a === W && window.innerWidth <= 480 ? (N.push(window.pageYOffset), window.document.body.style.top = "-".concat(N[0], "px")) : "string" == typeof a && a === Z && window.innerWidth <= 480 && (window.document.body.style.removeProperty("top"), window.scrollTo(0, N[0]), N = []), void 0 !== l && (I(), l ? ((s = document.querySelector("#richpanel_messenger_iframe")) && (s.classList.add("richpanel-messenger-opened"), s.classList.remove("richpanel-messenger-closed"), s.style.width = "100%", s.style.height = "100%"), window.document.getElementsByTagName("html")[0].classList.add("rp-messenger-active-html-full"), window.document.body.classList.add("rp-messenger-active"), window.document.body.classList.remove("rp-notification-height"), window.document.body.classList.remove("rp-notifications-active"), A()) : function() {
                var e = document.querySelector("#richpanel_messenger_iframe");
                e && (e.classList.add("richpanel-messenger-closed"), e.classList.remove("richpanel-messenger-opened")), window.document.getElementsByTagName("html")[0].classList.remove("rp-messenger-active-html-full"), window.document.body.classList.remove("rp-messenger-active"), L()
              }()), l || void 0 === c || (I(), function(e) {
                var {
                  heightOfNotifications: t,
                  widthOfNotifications: n,
                  hasPopupNotifications: r
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e) {
                  var i = window.document.getElementById("rp-dynamic-styles");
                  try {
                    i.innerHTML = "\n            .rp-notification-height #richpanel_messenger_iframe {\n                height: ".concat(t + 80 + 140, "px !important;\n                ").concat(n ? "width : ".concat(n + 60, "px !important;") : "", "\n                max-height: 90vh;\n            }")
                  } catch (e) {}
                  window.document.body.classList.add("rp-notifications-active"), window.document.body.classList.add("rp-notification-height"), r && window.document.body.classList.add("has-popup-notifications"), A()
                } else window.document.body.classList.remove("rp-notification-height"), window.document.body.classList.remove("rp-notifications-active"), window.document.body.classList.remove("has-popup-notifications"), L()
              }(c, {
                heightOfNotifications: p,
                widthOfNotifications: u,
                hasPopupNotifications: d
              })), void 0 !== d && function(e) {
                e ? (window.document.body.classList.add("has-popup-notifications"), window.document.body.classList.remove("rp-notification-height"), window.document.body.classList.remove("rp-notifications-active")) : window.document.body.classList.remove("has-popup-notifications")
              }(d), m === B) {
              var {
                properties: f,
                userProperties: v,
                eventName: y = "",
                eventId: w = ""
              } = g;
              if ("logout" === y) window.richpanel.logout(), RichpanelMessenger.update(null, "website");
              else if ("setrpcuid" === y && f.rpcuid) localStorage.setItem("rpcuid", f.rpcuid);
              else {
                var C = v ? JSON.parse(v) : null;
                window.richpanel.track(y, function(e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? J(Object(r), !0).forEach((function(n) {
                      t()(e, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                  }
                  return e
                }({}, f), C, Date.now(), w), "identify" === y && z("", "messenger")
              }
            }
            m === F && (g.show ? pageTitleNotification.on(g.title, 1e3) : pageTitleNotification.off()), "boolean" == typeof l && "boolean" == typeof h && !1 === l && !1 === h && function() {
              window.document.getElementsByTagName("html")[0].classList.remove("rp-messenger-active-html-full"), window.document.body.classList.remove("rp-messenger-active");
              var e = document.getElementById("richpanel_messenger_iframe");
              e.style.width = "1px", e.style.height = "1px", L()
            }();
            var b = (null == n || null === (i = n.brandData) || void 0 === i ? void 0 : i.isSPA) || (null == n || null === (o = n.control) || void 0 === o ? void 0 : o.isSPA) || !1;
            "boolean" == typeof l && "boolean" == typeof h && !1 === l && !0 === h && b && function(e) {
              var t, n = document.getElementById("richpanel_messenger_iframe");
              "1px" === n.style.width && (n.style.width = "fullscreen" === window.richpanel.helpcenterMode ? "100%" : "label" == (null == e || null === (t = e.control) || void 0 === t ? void 0 : t.badgeType) ? "170px" : "120px", n.style.height = "fullscreen" === window.richpanel.helpcenterMode ? "100%" : "120px")
            }(n)
          }
        }
      }), !1)
    }

    function Q(e) {
      if (window.visualViewport && /iPhone|iPad|iPod/.test(navigator.userAgent)) {
        var t = 0,
          n = () => {
            var n = Math.max(0, Math.round(window.innerHeight - window.visualViewport.height));
            if (n !== t) {
              t = n;
              try {
                e.contentWindow.postMessage(JSON.stringify({
                  actionName: R,
                  payload: {
                    keyboardHeight: n,
                    viewportHeight: Math.round(window.visualViewport.height)
                  }
                }), "*")
              } catch (e) {}
            }
          };
        window.visualViewport.addEventListener("resize", n), window.visualViewport.addEventListener("scroll", n)
      }
    }

    function X(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function K(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2 ? X(Object(r), !0).forEach((function(n) {
          t()(e, n, r[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    function ee(e) {
      return new Promise(((t, n) => {
        window.richpanel = window.richpanel || K(K({}, window.richpanel), {}, {
            track: function() {}
          }),
          function(e) {
            var n = function(n) {
              "fullscreen" === n.richpanel.helpcenterMode && function() {
                try {
                  var e = document.getElementsByClassName("rp-helpcenter-wrapper");
                  e[0] && e[0].remove()
                } catch (e) {}
                var t = document.createElement("div");
                t.innerHTML = '<div><div class="lds-ellipsis">\n                            <div></div>\n                            <div></div>\n                            <div></div>\n                            <div></div>\n                        </div>\n                        <div id="richpanel-helpcenter-loader-text">Loading your help center</div></div>\n                        ', t.style.position = "absolute", t.style.top = "45%", t.style.textAlign = "center", t.style.width = "100%", t.style.fontFamily = "IBM Plex Sans", t.style.color = "#000000", t.style.color = "500", t.style.fontSize = "25px", t.setAttribute("id", "richpanel-helpcenter-loader"), document.body.appendChild(t)
              }();
              var r = e;
              JSON.parse(JSON.stringify(r.control)).hostData = n.location;
              var i, o = "fullscreen" === n.richpanel.helpcenterMode || r.messengerStatus;
              "snow991" == r.tenantId && (o = !0), o ? (r.helpcenterMode = n.richpanel.helpcenterMode, n.richpanel.orderQueryParams && (r.orderId = n.richpanel.orderQueryParams.orderId || "", r.pincode = n.richpanel.orderQueryParams.pincode || "", r.emailFromURL = n.richpanel.orderQueryParams.email || ""), "fullscreen" === r.helpcenterMode && r.helpcenterStyles && r.helpcenterStyles.color && r.style && (r.style.backgroundColor = r.helpcenterStyles.color), n.messengerConf = r, O("Almost Done..."), (i = n, new Promise(((e, t) => {
                var n, r, o;
                try {
                  x()
                } catch (e) {}
                var a = "https://messenger.richpanel.com",
                  s = document.createElement("iframe"),
                  l = i.messengerConf;
                if (s.setAttribute("allowfullscreen", !0), s.setAttribute("allowtransparency", !0), s.setAttribute("webkitallowfullscreen", !0), s.setAttribute("mozallowfullscreen", !0), s.id = "richpanel_messenger_iframe", s.style.border = "none", s.style.position = "fixed", s.style.bottom = "0", s.style.right = "0", s.setAttribute("tabindex", "0"), s.setAttribute("aria-label", "Richpanel Messenger Widget"), s.setAttribute("role", "dialog"), l) {
                  var c = l.control;
                  if (c) {
                    var d = c.messengerIconPosition,
                      p = "fullscreen" === i.richpanel.helpcenterMode ? 20 : c.sideSpacing,
                      u = "fullscreen" === i.richpanel.helpcenterMode ? 20 : c.bottomSpacing;
                    d && ("left" === d ? s.style.left = p - 20 + "px" : s.style.right = p - 20 + "px"), s.style.bottom = u - 20 + "px"
                  }
                } else s.style.right = "0";
                s.style.width = "fullscreen" === i.richpanel.helpcenterMode ? "100%" : "label" == (null == l || null === (n = l.control) || void 0 === n ? void 0 : n.badgeType) ? "170px" : "120px", s.style.height = "fullscreen" === i.richpanel.helpcenterMode ? "100%" : "120px", s.style.maxWidth = "fullscreen" === i.richpanel.helpcenterMode ? "unset" : "450px", s.style.maxHeight = "fullscreen" === i.richpanel.helpcenterMode ? "unset" : "1080px", s.style.zIndex = (null == l || null === (r = l.control) || void 0 === r ? void 0 : r.zIndex) || (null == l || null === (o = l.style) || void 0 === o ? void 0 : o.zIndex) || M, s.style.backgroundColor = "transparent", s.style.userSelect = "none", s.style.webkitUserSelect = "none", s.style.msUserSelect = "none", i.document.body.appendChild(s);
                var h = document.createElement("meta");
                h.setAttribute("http-equiv", "X-Content-Security-Policy"), h.setAttribute("content", "default-src 'none';");
                var m = document.createElement("meta");
                m.setAttribute("http-equiv", "X-UA-Compatible"), m.setAttribute("content", "IE=edge");
                var g = a.includes("localhost") || a.includes("192.168.") || a.includes("10.") || a.includes("172."),
                  f = document.createElement("link");
                f.rel = "stylesheet", f.href = a + (g ? "/app.css" : "/css/app.css");
                var v = document.createElement("link");
                v.rel = "stylesheet", v.href = a + (g ? "/chunk-vendors.css" : "/css/chunk-vendors.css");
                var y = document.createElement("script"),
                  w = document.createElement("script");
                y.src = a + (g ? "/chunk-vendors.js" : "/js/chunk-vendors.js"), y.type = "text/javascript", w.src = a + (g ? "/app.js" : "/js/app.js"), w.type = "text/javascript", w.addEventListener("load", (() => {
                  e(s)
                }));
                var C = document.createElement("div");

                function b() {
                  var e = s.contentDocument;
                  e.body.style.margin = 0;
                  var t = document.createElement("head"),
                    n = e.createDocumentFragment();
                  if (n.appendChild(m), n.appendChild(h), n.appendChild(f), n.appendChild(v), n.appendChild(y), n.appendChild(w), g) {
                    var r = document.createElement("link");
                    r.rel = "stylesheet", r.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap", n.appendChild(r);
                    var o = document.createElement("link");
                    o.rel = "stylesheet", o.href = "https://use.fontawesome.com/releases/v5.7.2/css/all.css", n.appendChild(o)
                  }
                  try {
                    var a = i.document.documentElement,
                      l = getComputedStyle(a).getPropertyValue("color-scheme").trim() || "",
                      c = i.navigator.vendor.match(/apple/i) || [];
                    if (l && c.length > 0) {
                      var d = document.createElement("style");
                      "light" === l && (d.innerHTML = "html { color-scheme: light; }"), "dark" === l && (d.innerHTML = "html { color-scheme: dark; }"), n.appendChild(d)
                    }
                  } catch (e) {
                    console.error("Error appending style", e.message)
                  }
                  t.appendChild(n), e.head.parentNode.replaceChild(t, e.head), e.body.appendChild(C)
                }
                if (C.id = "rp_messenger", s.contentDocument && "complete" === s.contentDocument.readyState) b();
                else if (s.onload) {
                  var S = !1;
                  s.onload = function(e) {
                    S || (S = !0, b())
                  }, setTimeout((() => {
                    !S && s.contentDocument && "complete" === s.contentDocument.readyState && (S = !0, b())
                  }), 200)
                } else {
                  var O, _ = 0;
                  O = setInterval((function() {
                    "complete" === s.contentDocument.readyState ? (clearInterval(O), b()) : ++_ >= 500 && (clearInterval(O), console.error('Richpanel: iframe readyState never reached "complete" after 5s'))
                  }), 10)
                }
              }))).then((n => {
                D(), q(n, e), Q(n), t(n)
              }))) : O("Helpcenter is disabled")
            };
            window.RichpanelMessenger = {
                initialize: n,
                destroy: x,
                update: z,
                updateWidgetLanguage: Y,
                logout: G,
                login: $
              },
              function() {
                function e() {
                  var e = JSON.parse(window.localStorage.getItem("mage-cache-storage")),
                    t = localStorage.getItem("rplogin");
                  if (e && e.customsection)
                    if (e.customsection.data) {
                      var n = e.customsection.data,
                        r = e.customsection.normalData,
                        i = localStorage.getItem("rpuid");
                      window.richpanelSettings != n && (window.richpanelSettings = n, RichpanelMessenger && (r && r.uid && r.uid !== i && richpanel.track("identify", !1, r), RichpanelMessenger.update(n, "website"))), t || localStorage.setItem("rplogin", !0)
                    } else t && "true" === t.toString() && (localStorage.removeItem("rplogin"), window.richpanel.logout(), RichpanelMessenger.update(null, "website"))
                }
                try {
                  var t = Storage.prototype.setItem;
                  Storage.prototype.setItem = function(n, r) {
                    t.apply(this, arguments), this === window.localStorage && "mage-cache-storage" === n && e()
                  }
                } catch (e) {}
                try {
                  e()
                } catch (e) {}
              }();
            try {
              n(window)
            } catch (e) {}
          }(e)
      }))
    }
    var te = "new_conversation_started",
      ne = "conversation_new_message_added",
      re = {
        SHOW_MESSENGER: "SHOW_MESSENGER",
        HIDE_MESSENGER: "HIDE_MESSENGER",
        LAUNCH_MESSENGER: P
      },
      ie = "MESSENGER_LOADED",
      oe = W,
      ae = Z,
      se = {
        messengerSelectors: P,
        helpCenterSelectors: "LAUNCH_HELP_CENTER",
        sendMessageSelectors: "CREATE_NEW_CONVERSATION",
        prechatSurveySelectors: "LAUNCH_PRECHAT_SURVEY"
      },
      le = {
        SHOW_CAMPAIGN: "SHOW_CAMPAIGN",
        REMOVE_CAMPAIGN: "REMOVE_CAMPAIGN"
      },
      ce = {
        microAppUI: null,
        isMessengerLoaded: !1,
        isMessengerLoading: !1,
        cookieId: null,
        tenantId: null,
        messengerConfiguration: null,
        messengerFrame: null,
        messageQueue: [],
        __customTriggerHandlers: [],
        socket: null,
        init() {
          this.setCookieId(), this.setSId(), this.setAppClientId(), this.startListenToWindowMessageEvents()
        },
        setMicroAppUI(e) {
          var t, n;
          this.microAppUI = e, null !== (t = ce.messengerConfiguration) && void 0 !== t && t.isMessengerVisible && null !== (n = ce.messengerConfiguration) && void 0 !== n && n.messengerStatus || this.microAppUI.hide()
        },
        setSId() {
          this.sid = {}.SESSION_ID || y("rpsid")
        },
        setCookieId() {
          this.cookieId = {}.COOKIE_ID || y("rpdid")
        },
        setAppClientId() {
          this.appClientId = this.computeAppClientId()
        },
        computeAppClientId() {
          var e, t = {}.APP_CLIENT_ID;
          if ((t = t || window.appClientId || (null === (e = window.richpanel) || void 0 === e ? void 0 : e.appClientId)) && "" !== t) return t;
          var n = v(["richpanel_shopify_script", "appClientId"]) || v(["cdn.richpanel.com", "tracking"]) || v(["cdn.richpanel.com", "richpanel-root"]) || v(["cdn.richpanel.com", "richpanel-light"]);
          t = n ? f(n, "appClientId") : y("rptkn");
          try {
            t = t || api_token
          } catch (e) {
            console.log("Failed to get api token", e)
          }
          if (t && "" !== t || "localhost" != window.location.hostname) {
            if (!t || "" === t) throw new Error("App id not found.")
          } else(t = localStorage.getItem("dev:appClientId")) || (t = prompt("Enter your app id"), localStorage.setItem("dev:appClientId", t));
          return t
        },
        setMessengerConfiguration(e) {
          this.messengerConfiguration = e, this.tenantId = e.tenantId
        },
        setSocket(e) {
          this.socket = e
        },
        loadMessenger() {
          var e = this;
          return r()((function*() {
            e.isMessengerLoaded || e.isMessengerLoading || (e.isMessengerLoading = !0, e.messengerFrame = yield ee(e.messengerConfiguration), e.hideTheMessengerFrame())
          }))()
        },
        showCampaign(e) {
          this.loadMessenger(), this.isMessengerLoaded ? this.sendMessageToMessenger(le.SHOW_CAMPAIGN, e) : this.messageQueue.push({
            actionName: le.SHOW_CAMPAIGN,
            payload: e
          })
        },
        removeCampaign() {
          this.loadMessenger(), this.isMessengerLoaded ? this.sendMessageToMessenger(le.REMOVE_CAMPAIGN) : this.messageQueue.push({
            actionName: le.REMOVE_CAMPAIGN
          })
        },
        showMessenger() {
          this.loadMessenger(), this.isMessengerLoaded ? this.sendMessageToMessenger(re.LAUNCH_MESSENGER) : this.messageQueue.push({
            actionName: re.LAUNCH_MESSENGER
          })
        },
        hideMessenger() {
          this.isMessengerLoaded ? this.sendMessageToMessenger(re.HIDE_MESSENGER) : this.messageQueue.push({
            actionName: re.HIDE_MESSENGER
          })
        },
        startListeningToSocketEvents() {
          this.socket && (this.socket.on(te, (e => {
            this.loadMessenger()
          })), this.socket.on(ne, (e => {
            this.loadMessenger()
          })))
        },
        handleWindowEvents(e) {
          if (!ce.messengerFrame || e.source === ce.messengerFrame.contentWindow) {
            var t = e.data;
            try {
              t = JSON.parse(t)
            } catch (e) {}
            if (t === ie) ce.isMessengerLoaded = !0, ce.isMessengerLoading = !1, ce.relayAllCustomMessagesToMessenger(), setTimeout((() => {
              ce.digest()
            }), 1e3);
            else if (t === oe) {
              var n;
              ce.showTheMessengerFrame(), ce.removeMicroApp(), null === (n = ce.socket) || void 0 === n || n.close()
            } else t === ae && (ce.removeRichpanelWidgetHash(), ce.messengerConfiguration.messengerStatus || ce.hideTheMessengerFrame())
          }
        },
        removeRichpanelWidgetHash() {
          var e = "".concat(window.location.hash || "");
          e && e.startsWith("#rp-customer-widget-") && window.history.pushState("", "", window.location.pathname)
        },
        digest() {
          var e;
          try {
            ce.showTheMessengerFrame()
          } catch (e) {
            console.log("showTheMessengerFrame", e)
          }
          setTimeout((() => {
            ce.removeMicroApp()
          }), 500), null === (e = ce.socket) || void 0 === e || e.close()
        },
        startListenToWindowMessageEvents() {
          window.addEventListener("message", ce.handleWindowEvents)
        },
        stopListeningToWindowEvents() {
          window.removeEventListener("message", ce.handleWindowEvents)
        },
        sendMessageToMessenger(e, t) {
          var n, r;
          null === (n = this.messengerFrame) || void 0 === n || null === (r = n.contentWindow) || void 0 === r || r.postMessage(JSON.stringify({
            actionName: e,
            payload: t
          }), "*")
        },
        removeMicroApp() {
          this.microAppUI.remove()
        },
        showTheMessengerFrame() {
          this.messengerFrame && (this.messengerFrame.style.opacity = "1", this.messengerFrame.style.visibility = "visible")
        },
        hideTheMessengerFrame() {
          this.messengerFrame && (this.messengerFrame.style.opacity = "0", this.messengerFrame.style.visibility = "hidden")
        },
        customTriggerHandler: (e, t) => function() {
          ce.isMessengerLoaded ? ce.sendMessageToMessenger(se[e], {
            initalMessage: t
          }) : ce.messageQueue.push({
            actionName: se[e],
            payload: {
              initalMessage: t
            }
          }), ce.microAppUI.show(), ce.microAppUI.toggleMessenger(), ce.loadMessenger()
        },
        forCustomTriggers(e) {
          try {
            var t = this.messengerConfiguration.customLauncherSettings;
            Object.keys(t).map((function(n) {
              var r = t[n];
              return "sendMessageSelectors" === n ? r.forEach((function(t) {
                var {
                  selectors: r,
                  intialMessage: i
                } = t;
                r.forEach((function(t) {
                  e.call(null, {
                    triggerType: n,
                    selector: t,
                    initialMessage: i
                  })
                }))
              })) : r.forEach((function(t) {
                e.call(null, {
                  triggerType: n,
                  selector: t
                })
              })), r
            }))
          } catch (e) {}
        },
        startListeningToCustomTriggers() {
          this.forCustomTriggers((function(e) {
            var {
              triggerType: t,
              selector: n,
              initialMessage: r
            } = e;
            [].slice.call(document.querySelectorAll(n)).forEach((function(e) {
              var n = ce.customTriggerHandler(t, r);
              ce.__customTriggerHandlers.push({
                element: e,
                handler: n
              }), e.addEventListener("click", n)
            }))
          }))
        },
        removeListeningToCustomTriggers() {
          ce.__customTriggerHandlers.forEach((function(e) {
            var {
              element: t,
              handler: n
            } = e;
            t.removeEventListener("click", n)
          })), ce.__customTriggerHandlers = null, ce.messageQueue = null
        },
        relayAllCustomMessagesToMessenger() {
          ce.messageQueue.forEach((function(e) {
            var {
              actionName: t,
              payload: n
            } = e;
            ce.sendMessageToMessenger(t, n)
          }))
        },
        modal: () => (ce.__modal || (ce.__modal = new g), ce.__modal)
      };
    ce.init();
    const de = ce;
    var pe = a(214),
      ue = {
        insert: "head",
        singleton: !1
      };
    c()(pe.Z, ue);
    pe.Z.locals;
    var he = i({
        name: "div",
        attrs: {
          class: "rp-micro-app-messenger-header__start-title"
        },
        tpl: "Hi There,"
      }),
      me = i({
        name: "div",
        attrs: {
          class: "rp-micro-app-messenger-header__start-message"
        }
      }),
      ge = i({
        name: "div",
        attrs: {
          class: "rp-micro-app-messenger-header__start rp-messenger-header"
        },
        children: e => {
          var {
            props: t
          } = e;
          he();
          me().innerText = t.intro || ""
        }
      });
    var fe = e => {
        var t;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)) return 3 === (t = e.substring(1).split("")).length && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]), "rgba(" + [(t = "0x" + t.join("")) >> 16 & 255, t >> 8 & 255, 255 & t].join(", ") + ", 1)";
        throw new Error("Bad Hex")
      },
      ve = e => {
        var t = e.replace("rgba(", "").replace(")", "").split(", ");
        return {
          red: parseInt(t[0]),
          green: parseInt(t[1]),
          blue: parseInt(t[2]),
          alpha: parseFloat(t[3])
        }
      },
      ye = a(1611),
      we = {
        insert: "head",
        singleton: !1
      };
    c()(ye.Z, we);
    ye.Z.locals;
    var Ce = i({
        name: "div",
        attrs: {
          class: "rp-micro-app-loading-spinner"
        },
        tpl: '\n        <div class="rp-micro-app-loader">\n            <div class="richpanel-logo richpanel-blend">\n                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Richpanel Logo">\n                    <g clip-path="url(#clip0_482_8)">\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6254 11.7686C30.6187 12.6301 29.9237 13.3165 29.0684 13.3098C28.4135 13.303 27.8321 12.8858 27.6183 12.2599C26.9032 10.8668 25.1992 10.3217 23.8226 11.0485C22.4393 11.7686 21.898 13.4847 22.6197 14.8711C23.1075 15.8133 24.0765 16.4055 25.1323 16.4055C25.6603 16.4055 26.1748 16.2575 26.6226 15.9748C26.7094 15.9008 26.803 15.8335 26.9032 15.7729C26.9366 15.746 26.9701 15.7191 27.0035 15.6854L27.0168 15.7123C27.7853 15.3557 28.7008 15.6922 29.055 16.4661C29.4092 17.24 29.0751 18.162 28.3066 18.5187C28.2932 18.5254 28.2798 18.5322 28.2665 18.5389L28.2798 18.5725C25.4999 20.3223 21.8445 19.4743 20.107 16.6747C20.087 16.6411 20.067 16.6074 20.0469 16.567C16.5185 18.2899 14.1061 21.7087 13.6517 25.6322C13.6517 25.6322 13.3777 27.1733 11.7806 27.1733C10.7915 27.1801 9.98964 26.3725 9.98296 25.3765C9.98296 25.0871 10.0565 23.9968 10.1768 23.7546C10.992 18.5052 14.5071 14.7971 19.265 12.9531C19.646 9.68236 22.5863 7.34709 25.834 7.73069C27.8722 7.97297 29.6364 9.25838 30.5051 11.1293L30.4984 11.136C30.5786 11.3245 30.6254 11.5465 30.6254 11.7686ZM35.2163 39.0314C34.4813 38.594 34.234 37.6383 34.6751 36.8913C35.0092 36.326 35.6574 36.0299 36.2989 36.151C37.856 36.2318 39.1791 35.0204 39.2593 33.4523C39.3395 31.8843 38.1366 30.5517 36.5796 30.471C35.0225 30.3902 33.6994 31.6016 33.6192 33.1697C33.6125 33.2504 33.6125 33.3312 33.6192 33.4119C33.6459 33.5264 33.6526 33.6408 33.6526 33.7552C33.6593 33.7956 33.666 33.8427 33.6727 33.883H33.6393C33.6192 34.1051 33.5457 34.3138 33.4388 34.5089C33.0245 35.2492 32.0956 35.5117 31.3605 35.0944C30.8192 34.7848 30.5185 34.1792 30.592 33.56L30.5586 33.5533C30.445 30.2489 33.0111 27.4762 36.2922 27.355C36.3257 27.355 36.3591 27.355 36.3925 27.355C36.6865 23.4113 34.9557 19.5955 31.8082 17.2333C31.8082 17.2333 30.6254 16.2238 31.4273 14.824C31.9152 13.9626 33.0044 13.6597 33.8598 14.1443C33.8598 14.1443 33.8598 14.1443 33.8665 14.1443C34.1137 14.2856 35.0159 14.898 35.1629 15.1268C39.2593 18.4649 40.6827 23.3911 39.8875 28.4722C42.507 30.4508 43.0416 34.1993 41.077 36.8442C39.854 38.4863 37.8693 39.3881 35.8378 39.2131V39.2064C35.6173 39.2064 35.4101 39.1391 35.2163 39.0314ZM9.28129 29.5019C10.0297 29.0779 10.972 29.3471 11.3863 30.1008C11.7071 30.6729 11.6336 31.393 11.2059 31.8843C10.6579 32.7793 10.6445 33.9032 11.1658 34.8118C11.941 36.1577 13.6517 36.6154 14.9882 35.8347C16.3247 35.054 16.7791 33.3312 16.004 31.9852C15.7433 31.5276 15.3557 31.1574 14.8946 30.9084C14.7877 30.8748 14.6808 30.8209 14.5806 30.7671C14.5405 30.7536 14.5004 30.7335 14.4603 30.72L14.4803 30.6931C13.7853 30.1883 13.6316 29.2125 14.1328 28.5126C14.2598 28.3376 14.4135 28.1896 14.6006 28.0819C15.1285 27.7723 15.7968 27.8127 16.2846 28.1896L16.3047 28.1626C19.2049 29.724 20.3008 33.3581 18.7505 36.2856C18.7371 36.3125 18.7238 36.3394 18.7037 36.3664C21.9381 38.594 26.0813 38.991 29.6765 37.423C29.6765 37.423 31.1333 36.8913 31.9352 38.2911C32.4364 39.1525 32.149 40.2562 31.2937 40.761C31.0464 40.9023 30.0708 41.3869 29.8035 41.4003C24.8918 43.3116 19.9534 42.0935 15.9906 38.8564C12.9767 40.1486 9.49513 38.7353 8.21208 35.7001C7.41017 33.809 7.63737 31.6353 8.80682 29.9461H8.81351C8.92711 29.7644 9.08749 29.6163 9.28129 29.5019Z" fill="black"/>\n                    </g>\n                    <defs>\n                        <clipPath id="clip0_482_8">\n                            <rect width="50" height="50" fill="none"/>\n                        </clipPath>\n                    </defs>\n                </svg>\n            </div>\n            <div class="rp-micro-app-circular">\n                <svg viewBox="25 25 50 50">\n                    <circle cx="50" cy="50" r="20" fill="none" class="rp-micro-app-path"></circle>\n                </svg>\n            </div>\n        </div>\n    ',
        mounted: e => {
          var {
            props: t,
            $element: n
          } = e;
          n.querySelector(".rp-micro-app-path").style.stroke = (e => {
            var t = e;
            try {
              /^#([0-9a-f]{6}|[0-9a-f]{3})$/i.test(e) && (t = fe(e));
              var {
                red: n,
                green: r,
                blue: i,
                alpha: o
              } = ve(t);
              return o < .25 || .299 * n + .587 * r + .114 * i > 186 ? "#000000" : e
            } catch (e) {
              console.log(e)
            }
            return e
          })("#004e96")
        }
      }),
      be = a(8743),
      Se = {
        insert: "head",
        singleton: !1
      };
    c()(be.Z, Se);
    be.Z.locals;
    var Me = i({
        name: "div",
        attrs: {
          class: "rp-micro-app-cross-icon"
        },
        tpl: '\n        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14" fill="none">\n          <path d="M13 13L1 1" stroke-width="1.5" stroke-linecap="round"/>\n          <path d="M13 0.999999L1 13" stroke-width="1.5" stroke-linecap="round"/>\n        </svg>\n    '
      }),
      xe = i({
        name: "div",
        attrs: {
          class: "rp-micro-app-icon"
        },
        tpl: '\n        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44" height="44.181" viewBox="0 0 44 44.181" fill="white">\n            <defs>\n                <filter id="a" x="0" y="0" width="44" height="44.181" filterUnits="userSpaceOnUse">\n                    <feOffset dx="1" dy="1" input="SourceAlpha"></feOffset>\n                    <feGaussianBlur stdDeviation="1.5" result="b"></feGaussianBlur>\n                    <feFlood flood-opacity="0.4"></feFlood>\n                    <feComposite operator="in" in2="b"></feComposite>\n                    <feComposite in="SourceGraphic"></feComposite>\n                </filter>\n            </defs>\n            <g transform="translate(-1020.5 -579.5)">\n                <g transform="translate(1024 583)">\n                    <g transform="matrix(1, 0, 0, 1, -3.5, -3.5)">\n                        <path class="a" d="M45.261,36.182a17.433,17.433,0,1,1,1.714,29.6l-9.276,2.4,2.443-8.944c.05-.108-.025-.2-.083-.282A17.392,17.392,0,0,1,37.99,48.19a17.64,17.64,0,0,1,7.247-12.009m4.116,1.044a14.543,14.543,0,0,0-6.642,6.021,14.306,14.306,0,0,0-1.9,6.816,14.469,14.469,0,0,0,2.344,8.282c.083.149.232.306.166.5l-1.408,5.168c1.764-.447,3.528-.928,5.3-1.375.224-.083.414.1.6.2a14.493,14.493,0,0,0,10.187,1.83,14.328,14.328,0,0,0,5.681-2.443,14.449,14.449,0,0,0,.936-22.8,14.419,14.419,0,0,0-15.247-2.162Z" transform="translate(-34.2 -29.5)"></path>\n                    </g>\n                </g>\n                <path class="a" d="M11950.11-4981.888H11947a13.91,13.91,0,0,1-9.9-4.1,13.914,13.914,0,0,1-4.1-9.9V-4999a13.914,13.914,0,0,1,4.1-9.9,13.91,13.91,0,0,1,9.9-4.1h3.11a13.911,13.911,0,0,1,9.9,4.1,13.907,13.907,0,0,1,4.1,9.9v3.111a13.907,13.907,0,0,1-4.1,9.9A13.911,13.911,0,0,1,11950.11-4981.888ZM11942.5-4996a1.5,1.5,0,0,0-1.5,1.5,1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5,1.5,1.5,0,0,0-1.5-1.5Zm0-5a1.5,1.5,0,0,0-1.5,1.5,1.5,1.5,0,0,0,1.5,1.5h8a1.5,1.5,0,0,0,1.5-1.5,1.5,1.5,0,0,0-1.5-1.5Z" transform="translate(-10907 5598)"></path>\n                <rect class="a" width="6" height="6" transform="translate(1028 609)"></rect>\n            </g>\n        </svg>\n    '
      }),
      Oe = i({
        name: "div",
        attrs: {
          class: "rp-micro-app-label-icon"
        },
        tpl: '<svg width="124" height="48" viewBox="0 0 124 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="124" height="48" rx="24" fill="#458FFF"/>\n            <path d="M29.589 22.1293H28.0378C27.9782 21.7978 27.8671 21.5062 27.7047 21.2543C27.5423 21.0024 27.3435 20.7886 27.1081 20.6129C26.8728 20.4373 26.6093 20.3047 26.3176 20.2152C26.0293 20.1257 25.7227 20.081 25.3979 20.081C24.8113 20.081 24.2859 20.2285 23.8219 20.5234C23.3612 20.8184 22.9966 21.2509 22.7282 21.821C22.463 22.3911 22.3304 23.0871 22.3304 23.9091C22.3304 24.7377 22.463 25.437 22.7282 26.0071C22.9966 26.5772 23.3629 27.008 23.8269 27.2997C24.2909 27.5914 24.8129 27.7372 25.3929 27.7372C25.7144 27.7372 26.0194 27.6941 26.3077 27.608C26.5994 27.5185 26.8629 27.3875 27.0982 27.2152C27.3335 27.0429 27.5324 26.8324 27.6948 26.5838C27.8605 26.3319 27.9748 26.0436 28.0378 25.7188L29.589 25.7237C29.5061 26.2242 29.3453 26.6849 29.1067 27.1058C28.8714 27.5234 28.5681 27.8847 28.1969 28.1896C27.829 28.4912 27.4081 28.7249 26.9341 28.8906C26.4602 29.0563 25.9431 29.1392 25.383 29.1392C24.5014 29.1392 23.7158 28.9304 23.0265 28.5128C22.3371 28.0919 21.7935 27.4903 21.3958 26.7081C21.0014 25.9259 20.8042 24.9929 20.8042 23.9091C20.8042 22.822 21.003 21.889 21.4007 21.1101C21.7985 20.3279 22.342 19.728 23.0314 19.3104C23.7208 18.8894 24.5047 18.679 25.383 18.679C25.9232 18.679 26.427 18.7569 26.8944 18.9126C27.365 19.0651 27.7876 19.2905 28.1621 19.5888C28.5366 19.8838 28.8465 20.245 29.0918 20.6726C29.3371 21.0968 29.5028 21.5824 29.589 22.1293ZM32.7944 24.4659V29H31.3079V18.8182H32.7745V22.6065H32.869C33.0479 22.1955 33.3214 21.8691 33.6893 21.6271C34.0572 21.3852 34.5378 21.2642 35.131 21.2642C35.6547 21.2642 36.1121 21.3719 36.5032 21.5874C36.8976 21.8028 37.2025 22.1243 37.418 22.5518C37.6367 22.9761 37.7461 23.5064 37.7461 24.1428V29H36.2596V24.3217C36.2596 23.7616 36.1154 23.3274 35.8271 23.0192C35.5387 22.7076 35.1377 22.5518 34.6239 22.5518C34.2726 22.5518 33.9577 22.6264 33.6793 22.7756C33.4042 22.9247 33.1871 23.1435 33.0281 23.4318C32.8723 23.7169 32.7944 24.0616 32.7944 24.4659ZM41.9521 29.169C41.4682 29.169 41.0307 29.0795 40.6396 28.9006C40.2485 28.7183 39.9386 28.4548 39.7099 28.1101C39.4845 27.7654 39.3718 27.3428 39.3718 26.8423C39.3718 26.4115 39.4547 26.0568 39.6204 25.7784C39.7861 25.5 40.0098 25.2796 40.2915 25.1172C40.5733 24.9548 40.8881 24.8321 41.2362 24.7493C41.5842 24.6664 41.9388 24.6035 42.3001 24.5604C42.7575 24.5073 43.1287 24.4643 43.4137 24.4311C43.6987 24.3946 43.9059 24.3366 44.0352 24.2571C44.1644 24.1776 44.229 24.0483 44.229 23.8693V23.8345C44.229 23.4003 44.1064 23.0639 43.8612 22.8253C43.6192 22.5866 43.2579 22.4673 42.7773 22.4673C42.2769 22.4673 41.8825 22.5784 41.5941 22.8004C41.3091 23.0192 41.1119 23.2628 41.0025 23.5312L39.6055 23.2131C39.7712 22.7491 40.0131 22.3745 40.3313 22.0895C40.6528 21.8011 41.0224 21.5923 41.44 21.4631C41.8576 21.3305 42.2968 21.2642 42.7575 21.2642C43.0624 21.2642 43.3855 21.3007 43.7269 21.3736C44.0716 21.4432 44.3931 21.5724 44.6914 21.7614C44.993 21.9503 45.2399 22.2204 45.4322 22.5717C45.6244 22.9197 45.7205 23.3722 45.7205 23.929V29H44.2688V27.956H44.2092C44.113 28.1482 43.9689 28.3371 43.7766 28.5227C43.5844 28.7083 43.3375 28.8625 43.0359 28.9851C42.7343 29.1077 42.373 29.169 41.9521 29.169ZM42.2752 27.9759C42.6862 27.9759 43.0375 27.8946 43.3292 27.7322C43.6242 27.5698 43.8479 27.3577 44.0004 27.0959C44.1561 26.8307 44.234 26.5473 44.234 26.2457V25.2614C44.181 25.3144 44.0782 25.3641 43.9258 25.4105C43.7766 25.4536 43.6059 25.4917 43.4137 25.5249C43.2215 25.5547 43.0342 25.5829 42.8519 25.6094C42.6696 25.6326 42.5172 25.6525 42.3945 25.669C42.1062 25.7055 41.8427 25.7668 41.604 25.853C41.3687 25.9392 41.1798 26.0634 41.0373 26.2259C40.8981 26.3849 40.8285 26.5971 40.8285 26.8622C40.8285 27.2301 40.9644 27.5085 41.2362 27.6974C41.5079 27.883 41.8543 27.9759 42.2752 27.9759ZM51.2651 21.3636V22.5568H47.0939V21.3636H51.2651ZM48.2125 19.5341H49.699V26.7578C49.699 27.0462 49.7421 27.2633 49.8283 27.4091C49.9145 27.5516 50.0255 27.6494 50.1614 27.7024C50.3006 27.7521 50.4514 27.777 50.6138 27.777C50.7331 27.777 50.8375 27.7687 50.927 27.7521C51.0165 27.7356 51.0861 27.7223 51.1358 27.7124L51.4043 28.9403C51.3181 28.9735 51.1955 29.0066 51.0364 29.0398C50.8773 29.0762 50.6784 29.0961 50.4398 29.0994C50.0487 29.1061 49.6841 29.0365 49.3461 28.8906C49.008 28.7448 48.7346 28.5194 48.5257 28.2145C48.3169 27.9096 48.2125 27.5268 48.2125 27.0661V19.5341ZM58.2701 29L56.0229 21.3636H57.5591L59.0556 26.9716H59.1301L60.6316 21.3636H62.1678L63.6593 26.9467H63.7338L65.2203 21.3636H66.7566L64.5144 29H62.998L61.4469 23.4865H61.3326L59.7814 29H58.2701ZM68.1673 29V21.3636H69.6538V29H68.1673ZM68.918 20.1854C68.6594 20.1854 68.4374 20.0992 68.2518 19.9268C68.0695 19.7512 67.9783 19.5424 67.9783 19.3004C67.9783 19.0552 68.0695 18.8464 68.2518 18.674C68.4374 18.4983 68.6594 18.4105 68.918 18.4105C69.1765 18.4105 69.3969 18.4983 69.5792 18.674C69.7648 18.8464 69.8576 19.0552 69.8576 19.3004C69.8576 19.5424 69.7648 19.7512 69.5792 19.9268C69.3969 20.0992 69.1765 20.1854 68.918 20.1854ZM75.2182 21.3636V22.5568H71.0471V21.3636H75.2182ZM72.1657 19.5341H73.6522V26.7578C73.6522 27.0462 73.6953 27.2633 73.7814 27.4091C73.8676 27.5516 73.9786 27.6494 74.1145 27.7024C74.2537 27.7521 74.4045 27.777 74.5669 27.777C74.6863 27.777 74.7907 27.7687 74.8801 27.7521C74.9696 27.7356 75.0392 27.7223 75.089 27.7124L75.3574 28.9403C75.2712 28.9735 75.1486 29.0066 74.9895 29.0398C74.8304 29.0762 74.6316 29.0961 74.3929 29.0994C74.0018 29.1061 73.6373 29.0365 73.2992 28.8906C72.9611 28.7448 72.6877 28.5194 72.4789 28.2145C72.2701 27.9096 72.1657 27.5268 72.1657 27.0661V19.5341ZM78.5131 24.4659V29H77.0266V18.8182H78.4933V22.6065H78.5877C78.7667 22.1955 79.0401 21.8691 79.408 21.6271C79.7759 21.3852 80.2565 21.2642 80.8498 21.2642C81.3735 21.2642 81.8308 21.3719 82.2219 21.5874C82.6164 21.8028 82.9213 22.1243 83.1367 22.5518C83.3555 22.9761 83.4648 23.5064 83.4648 24.1428V29H81.9783V24.3217C81.9783 23.7616 81.8342 23.3274 81.5458 23.0192C81.2575 22.7076 80.8564 22.5518 80.3427 22.5518C79.9914 22.5518 79.6765 22.6264 79.3981 22.7756C79.123 22.9247 78.9059 23.1435 78.7468 23.4318C78.591 23.7169 78.5131 24.0616 78.5131 24.4659ZM93.9909 25.8331V21.3636H95.4824V29H94.0208V27.6776H93.9412C93.7656 28.0852 93.4838 28.425 93.0961 28.6967C92.7116 28.9652 92.2327 29.0994 91.6593 29.0994C91.1687 29.0994 90.7346 28.9917 90.3567 28.7763C89.9822 28.5575 89.6872 28.2344 89.4718 27.8068C89.2596 27.3793 89.1536 26.8506 89.1536 26.2209V21.3636H90.6401V26.0419C90.6401 26.5623 90.7843 26.9766 91.0726 27.2848C91.361 27.593 91.7355 27.7472 92.1962 27.7472C92.4746 27.7472 92.7514 27.6776 93.0265 27.5384C93.3049 27.3991 93.5352 27.1887 93.7175 26.907C93.9031 26.6252 93.9943 26.2673 93.9909 25.8331ZM103.202 23.228L101.855 23.4666C101.798 23.2943 101.709 23.1302 101.586 22.9744C101.467 22.8187 101.305 22.6911 101.099 22.5916C100.894 22.4922 100.637 22.4425 100.328 22.4425C99.9076 22.4425 99.5562 22.5369 99.2745 22.7259C98.9928 22.9115 98.8519 23.1518 98.8519 23.4467C98.8519 23.7019 98.9464 23.9074 99.1353 24.0632C99.3242 24.219 99.6291 24.3466 100.05 24.446L101.263 24.7244C101.966 24.8868 102.489 25.1371 102.834 25.4751C103.179 25.8132 103.351 26.2524 103.351 26.7926C103.351 27.25 103.219 27.6577 102.953 28.0156C102.692 28.3703 102.325 28.6487 101.855 28.8509C101.387 29.053 100.846 29.1541 100.229 29.1541C99.3739 29.1541 98.6763 28.9718 98.136 28.6072C97.5958 28.2393 97.2643 27.7173 97.1417 27.0412L98.5785 26.8224C98.668 27.197 98.8519 27.4804 99.1303 27.6726C99.4087 27.8615 99.7717 27.956 100.219 27.956C100.706 27.956 101.096 27.8549 101.387 27.6527C101.679 27.4472 101.825 27.197 101.825 26.902C101.825 26.6634 101.735 26.4628 101.556 26.3004C101.381 26.138 101.111 26.0154 100.746 25.9325L99.4535 25.6491C98.7409 25.4867 98.2139 25.2282 97.8725 24.8736C97.5344 24.5189 97.3654 24.0698 97.3654 23.5263C97.3654 23.0755 97.4914 22.6811 97.7433 22.343C97.9951 22.005 98.3432 21.7415 98.7873 21.5526C99.2314 21.3603 99.7402 21.2642 100.314 21.2642C101.139 21.2642 101.788 21.4432 102.262 21.8011C102.736 22.1558 103.05 22.6314 103.202 23.228Z" fill="white"/>\n        </svg>\n    '
      }),
      _e = i({
        name: "div",
        attrs: {
          class: "rp-micro-app-dummy-icon",
          role: "button",
          tabindex: "0",
          "aria-label": "Messenger Dummy Widget"
        },
        children: e => {
          var t, {
            props: n
          } = e;
          return t = "label" === n.badgeType ? Oe({
            style: {
              color: n.contrastColor
            },
            class: "#000000" === n.contrastColor ? "dark" : "rp-icon-light"
          }) : xe({
            style: {
              color: n.contrastColor
            },
            class: "#000000" === n.contrastColor ? "dark" : "rp-icon-light"
          }), [Me({
            class: "#000000" === n.contrastColor ? "dark" : "rp-icon-light"
          }), t]
        }
      }),
      Ee = i({
        name: "div",
        attrs: {
          class: "rp-micro-app-messenger",
          tabindex: "0",
          "aria-label": "Richpanel Messenger Widget",
          role: "dialog"
        },
        children: e => {
          var t, n, r, {
              props: o
            } = e,
            a = (null == o || null === (t = o.messengerStyle) || void 0 === t ? void 0 : t.backgroundColor) || S,
            l = !(o && o.messengerStyle && o.messengerStyle.hasOwnProperty("isGradientApplied")) || o.messengerStyle.isGradientApplied,
            c = null == o || null === (n = o.messengerStyle) || void 0 === n ? void 0 : n.contrastColor,
            d = (ge({
              intro: null == o || null === (r = o.welcome) || void 0 === r ? void 0 : r.intro,
              style: {
                backgroundColor: a,
                backgroundImage: l ? "linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.32))" : "unset"
              }
            }), Ce({
              backgroundColor: a
            })),
            p = i({
              name: "div",
              attrs: {
                class: "rp-micro-app-messenger-mobile-close-trigger"
              },
              children: e => {
                var {
                  props: t
                } = e;
                return Me({
                  class: "#000000" === (null == t ? void 0 : t.contrastColor) ? "dark" : "light"
                })
              }
            })({
              contrastColor: c
            });
          return s(p, (() => {
            var e;
            null === (e = o.onClickCrossButton) || void 0 === e || e.call(o)
          })), [d, p]
        }
      }),
      Ie = a(7916),
      Te = {
        insert: "head",
        singleton: !1
      };
    c()(Ie.Z, Te);
    Ie.Z.locals;

    function ke(e, t, n) {
      e.classList.add(t);
      var r = () => {
        e.classList.remove(t), null == n || n(), e.removeEventListener("animationend", r)
      };
      e.addEventListener("animationend", r)
    }
    var Ae = a(3974),
      Le = {
        insert: "head",
        singleton: !1
      };
    c()(Ae.Z, Le);
    Ae.Z.locals;
    var Ne = "rp-micro-app-hide",
      De = "rp-micro-app-opened",
      Pe = "rp-micro-app-fade-enter-active",
      He = "rp-micro-app-fade-leave-active";

    function je(e) {
      var {
        advancedMessengerVisibility: t = !0,
        visibilityCode: n = "SHOW-CONTAINS",
        hideMobileMessenger: r = !1,
        visibilityUrls: i = ""
      } = e, o = window.location;
      if (o = JSON.parse(JSON.stringify(o)), r && window && window.navigator && window.navigator.userAgent && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)) return {
        status: !1,
        reason: "Hide widget on mobile"
      };
      if (!t || !i) return {
        status: !0,
        reason: "Advanced messenger visibility is not set."
      };
      var a = n.split("-")[0],
        s = n.split("-")[1];
      if (!a) return {
        status: !0,
        reason: "Show hide condition is not set"
      };
      if (!s) return {
        status: !0,
        reason: "Show hide condition is not set"
      };
      return "SHOW" === a ? {
        status: (() => {
          for (var e of i.split(",")) {
            var t = e.trim();
            if (t) {
              if ("STARTS" === s) {
                var n = t.replace(o.origin, "");
                if (0 === o.pathname.indexOf(n)) return !0
              } else if ("CONTAINS" === s) {
                if (o.pathname.indexOf(t) >= 0) return !0
              } else if ("EXACT" === s) {
                var r = o.origin + o.pathname;
                if (o.pathname === t || o.pathname === t + "/" || (r === e || r === t + "/")) return !0
              }
            }
          }
          return !1
        })(),
        reason: "SHOW condtion"
      } : "HIDE" === a ? {
        status: (() => {
          for (var e of i.split(",")) {
            var t = e.trim();
            if (t) {
              if ("STARTS" === s) {
                var n = t.replace(o.origin, "");
                if (0 === o.pathname.indexOf(n)) return !1
              } else if ("CONTAINS" === s) {
                if (o.pathname.indexOf(t) >= 0) return !1
              } else if ("EXACT" === s) {
                var r = o.origin + o.pathname;
                if (o.pathname === t || o.pathname === t + "/" || (r === e || r === t + "/")) return !1
              }
            }
          }
          return !0
        })(),
        reason: "HIDE condition "
      } : {
        status: !0,
        reason: "Not Show/Hide"
      }
    }

    function Ue(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function Re(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2 ? Ue(Object(r), !0).forEach((function(n) {
          t()(e, n, r[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ue(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }
    var We = {
        configuration: null,
        isMessengerOpen: !1,
        init(e) {
          var t, n, r, a, l, c;
          this.configuration = e;
          var {
            bubbleStyle: d,
            messengerStyle: p
          } = function(e) {
            var t = {},
              n = {},
              r = 20,
              i = 20,
              o = "right";
            try {
              ({
                sideSpacing: r,
                bottomSpacing: i,
                messengerIconPosition: o
              } = null == e ? void 0 : e.control)
            } catch (e) {}
            return "right" === o ? (t.right = r - 20 + "px", n.right = r + "px") : (t.left = r - 20 + "px", n.left = r + "px"), t.bottom = i - 20 + "px", n.bottom = i + "px", n.top = i <= 20 ? 20 : i, n.height = "calc( 100% - ".concat(i + 20, "px )"), {
              bubbleStyle: t,
              messengerStyle: n
            }
          }(e), u = (e => {
            var t = e;
            try {
              /^#([0-9a-f]{6}|[0-9a-f]{3})$/i.test(e) && (t = fe(e));
              var {
                red: n,
                green: r,
                blue: i,
                alpha: o
              } = ve(t);
              return o < .25 || .299 * n + .587 * r + .114 * i > 186 ? "#000000" : "#ffffff"
            } catch (e) {
              console.log(e)
            }
            return "#ffffff"
          })((null == e || null === (t = e.style) || void 0 === t ? void 0 : t.bubbleColor) || (null == e || null === (n = e.style) || void 0 === n ? void 0 : n.backgroundColor)) || "#ffffff", h = (e => {
            var {
              contrastColor: t,
              chatBubbleStyle: n,
              badgeType: r,
              tenantData: o
            } = e, a = "label" === r, l = a ? "rp-micro-app-dummy-icon-container rp-micro-app-label-icon-container" : "rp-micro-app-dummy-icon-container", c = "miansai931" === (null == o ? void 0 : o.tenantId) ? "rp-micro-app-dummy-icon miansai-logo" : "rp-micro-app-dummy-icon", d = a ? (null == n ? void 0 : n.width) || 113 : 60, p = a ? (null == n ? void 0 : n.height) || 44 : 60, u = {
              backgroundColor: (null == n ? void 0 : n.bubbleColor) || (null == n ? void 0 : n.backgroundColor) || S,
              width: "".concat(d, "px"),
              height: "".concat(p, "px")
            }, h = () => {
              var t;
              null === (t = e.onClick) || void 0 === t || t.call(e)
            }, m = _e({
              contrastColor: t,
              style: u,
              class: a ? "rp-badge-logo ".concat(c) : c,
              badgeType: a ? r : "icon"
            });
            return s(m, h), m.addEventListener("keydown", h), i({
              name: "div",
              attrs: {
                class: l
              },
              children: m
            })
          })({
            chatBubbleStyle: null == e ? void 0 : e.style,
            badgeType: (null == e || null === (r = e.control) || void 0 === r ? void 0 : r.badgeType) || "icon",
            tenantData: {
              tenantId: null == e ? void 0 : e.tenantId
            },
            contrastColor: u,
            onClick: () => {
              this.isMessengerOpen ? de.hideMessenger() : de.showMessenger(), this.toggleMessenger()
            }
          })({
            style: Re(Re({}, d), {}, {
              zIndex: (null == e || null === (a = e.style) || void 0 === a ? void 0 : a.zIndex) || (null == e || null === (l = e.control) || void 0 === l ? void 0 : l.zIndex) || M,
              backgroundColor: "transparent"
            })
          }), m = Ee({
            welcome: null == e ? void 0 : e.welcome,
            messengerStyle: Re(Re({}, null == e ? void 0 : e.style), {}, {
              contrastColor: u
            }),
            style: p,
            class: Ne,
            onClickCrossButton: () => {
              de.hideMessenger(), this.toggleMessenger()
            }
          }), g = i({
            name: "div",
            attrs: {
              class: "richpanel-micro",
              style: null !== (c = window.richpanel) && void 0 !== c && c.widget_open_by_default ? "display: none;" : ""
            },
            children: [h, m]
          })();
          o(document.body, g), this.$chatBubbleContainer = h, this.$messenger = m, this.$container = g, this.hashChangeEventHandler(), this.removeHashChangeEvent(), this.addHashChangeEvent(), this.watchSPAPageNavigation()
        },
        watchSPAPageNavigation() {
          var e, t, n, r, i, o, a = this;
          ((null === (e = this.configuration) || void 0 === e || null === (t = e.brandData) || void 0 === t ? void 0 : t.isSPA) || (null === (n = this.configuration) || void 0 === n || null === (r = n.control) || void 0 === r ? void 0 : r.isSPA) || !1) && (i = window.history, o = i.pushState, i.pushState = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            "function" == typeof i.onpushstate && i.onpushstate({
              state: t[0]
            });
            var r = o.apply(i, t),
              s = je(Re({}, a.configuration.control));
            return s.status ? a.show() : a.hide(), r
          })
        },
        hashChangeEventHandler(e) {
          window.location.hash.includes("rp-customer-widget") && !window.hashChangedDueToSync && (this.isMessengerOpen || (this.$messenger && this.$messenger.classList.remove(Ne), this.$container && this.$container.classList.remove(Ne), de.showMessenger(), this.toggleMessenger(), this.removeHashChangeEvent())), window.hashChangedDueToSync && (window.hashChangedDueToSync = !1)
        },
        _boundHashChangeHandler: null,
        addHashChangeEvent() {
          this._boundHashChangeHandler = () => this.hashChangeEventHandler(), window.addEventListener("hashchange", this._boundHashChangeHandler)
        },
        removeHashChangeEvent() {
          this._boundHashChangeHandler && (window.removeEventListener("hashchange", this._boundHashChangeHandler), this._boundHashChangeHandler = null)
        },
        toggleMessenger() {
          var e, t, {
            $messenger: n,
            $chatBubbleContainer: r
          } = this;
          if (!1 === (null === (e = this.configuration) || void 0 === e || null === (t = e.style) || void 0 === t ? void 0 : t.slideInAnimation)) this.isMessengerOpen ? (n.classList.add(Ne), this.isMessengerOpen = !1) : (r.classList.add(De), n.classList.remove(Ne), this.isMessengerOpen = !0);
          else {
            if (n.classList.contains(Pe) || n.classList.contains(He)) return;
            this.isMessengerOpen ? (r.classList.remove(De), ke(n, He, (() => {
              n.classList.add(Ne), this.isMessengerOpen = !1
            }))) : (r.classList.add(De), n.classList.remove(Ne), ke(n, Pe, (() => {
              this.isMessengerOpen = !0
            })))
          }
        },
        remove() {
          var e;
          null === (e = this.$container) || void 0 === e || e.remove()
        },
        hide() {
          var e;
          null === (e = this.$container) || void 0 === e || e.classList.add(Ne), de.hideTheMessengerFrame()
        },
        show() {
          var e;
          null === (e = this.$container) || void 0 === e || e.classList.remove(Ne), de.showTheMessengerFrame()
        }
      },
      Ze = {
        get: "GET",
        post: "POST"
      };

    function Be(e) {
      var {
        url: t,
        method: n = Ze.get,
        data: r = {},
        headers: i = {}
      } = e;
      return new Promise(((e, o) => {
        var a = new XMLHttpRequest;
        for (var s in a.open(n, t, !0), i)
          if (Object.hasOwnProperty.call(i, s)) {
            var l = i[s];
            a.setRequestHeader(s, l)
          } n === Ze.post ? (a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), a.send(JSON.stringify(r))) : a.send(), a.addEventListener("readystatechange", (t => {
          4 === a.readyState && e(JSON.parse(a.response))
        }))
      }))
    }
    Be.METHODS = Ze;
    class Fe {
      constructor(e, t, n) {
        this._date = new Date(e.getTime()), this._zone = t || "local", this._locale = n || "en"
      }
      static local() {
        return new Fe(new Date, "local", "en")
      }
      static _parseFixedOffset(e) {
        if (!e || "string" != typeof e) return null;
        var t = e.match(/^UTC([+-])(\d{1,2}):(\d{2})$/);
        return t ? ("+" === t[1] ? 1 : -1) * (60 * parseInt(t[2]) + parseInt(t[3])) : null
      }
      static _isFixedOffset(e) {
        return null !== Fe._parseFixedOffset(e)
      }
      static fromObject(e) {
        var t = e.zone || "local",
          n = new Date,
          r = Fe._getPartsInZone(n, t),
          i = void 0 !== e.year ? e.year : r.year,
          o = void 0 !== e.month ? e.month : r.month,
          a = void 0 !== e.day ? e.day : r.day,
          s = void 0 !== e.hour ? e.hour : r.hour,
          l = void 0 !== e.minute ? e.minute : r.minute,
          c = void 0 !== e.second ? e.second : r.second,
          d = void 0 !== e.millisecond ? e.millisecond : r.millisecond,
          p = Fe._buildDateInZone(i, o, a, s, l, c, d, t);
        return new Fe(p, t, "en")
      }
      static _getPartsInZone(e, t) {
        if ("local" === t) return {
          year: e.getFullYear(),
          month: e.getMonth() + 1,
          day: e.getDate(),
          hour: e.getHours(),
          minute: e.getMinutes(),
          second: e.getSeconds(),
          millisecond: e.getMilliseconds()
        };
        var n = Fe._parseFixedOffset(t);
        if (null !== n) {
          var r = new Date(e.getTime() + 6e4 * n);
          return {
            year: r.getUTCFullYear(),
            month: r.getUTCMonth() + 1,
            day: r.getUTCDate(),
            hour: r.getUTCHours(),
            minute: r.getUTCMinutes(),
            second: r.getUTCSeconds(),
            millisecond: r.getUTCMilliseconds()
          }
        }
        for (var i = {}, o = new Intl.DateTimeFormat("en-US", {
            timeZone: t,
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: !1
          }).formatToParts(e), a = 0; a < o.length; a++) {
          var s = o[a];
          "year" === s.type ? i.year = parseInt(s.value) : "month" === s.type ? i.month = parseInt(s.value) : "day" === s.type ? i.day = parseInt(s.value) : "hour" === s.type ? i.hour = parseInt(s.value) % 24 : "minute" === s.type ? i.minute = parseInt(s.value) : "second" === s.type && (i.second = parseInt(s.value))
        }
        return i.millisecond = 0, i
      }
      static _buildDateInZone(e, t, n, r, i, o, a, s) {
        if ("local" === s) return new Date(e, t - 1, n, r, i, o, a);
        var l = Fe._parseFixedOffset(s);
        if (null !== l) {
          var c = Date.UTC(e, t - 1, n, r, i, o, a);
          return new Date(c - 6e4 * l)
        }
        var d = Date.UTC(e, t - 1, n, r, i, o, a),
          p = Fe._getOffsetMs(new Date(d), s),
          u = d - p,
          h = Fe._getOffsetMs(new Date(u), s);
        if (p !== h) {
          var m = new Date(d - p),
            g = new Date(d - h),
            f = Fe._getPartsInZone(m, s),
            v = Fe._getPartsInZone(g, s);
          return f.hour === r && f.day === n ? m : v.hour === r && v.day === n || p > h ? g : m
        }
        return new Date(u)
      }
      static _getOffsetMs(e, t) {
        var n = Fe._getPartsInZone(e, t);
        return Date.UTC(n.year, n.month - 1, n.day, n.hour, n.minute, n.second) - e.getTime()
      }
      get ts() {
        return this._date.getTime()
      }
      _parts() {
        return this._cachedParts && this._cachedPartsZone === this._zone || (this._cachedParts = Fe._getPartsInZone(this._date, this._zone), this._cachedPartsZone = this._zone), this._cachedParts
      }
      get year() {
        return this._parts().year
      }
      get month() {
        return this._parts().month
      }
      get day() {
        return this._parts().day
      }
      get weekday() {
        var e = this._zonedJSDay();
        return 0 === e ? 7 : e
      }
      get weekdayLong() {
        return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][this.weekday - 1]
      }
      _zonedJSDay() {
        if ("local" === this._zone) return this._date.getDay();
        var e = Fe._parseFixedOffset(this._zone);
        if (null !== e) return new Date(this._date.getTime() + 6e4 * e).getUTCDay();
        return {
          Sun: 0,
          Mon: 1,
          Tue: 2,
          Wed: 3,
          Thu: 4,
          Fri: 5,
          Sat: 6
        } [new Intl.DateTimeFormat("en-US", {
          timeZone: this._zone,
          weekday: "short"
        }).format(this._date)]
      }
      setZone(e) {
        return new Fe(this._date, e, this._locale)
      }
      setLocale(e) {
        return new Fe(this._date, this._zone, e)
      }
      plus(e) {
        var t = new Date(this._date.getTime());
        return e.day && t.setUTCDate(t.getUTCDate() + e.day), e.year && t.setUTCFullYear(t.getUTCFullYear() + e.year), new Fe(t, this._zone, this._locale)
      }
      set(e) {
        var t = this._parts(),
          n = void 0 !== e.year ? e.year : t.year,
          r = void 0 !== e.month ? e.month : t.month,
          i = void 0 !== e.day ? e.day : t.day,
          o = void 0 !== e.hour ? e.hour : t.hour,
          a = void 0 !== e.minute ? e.minute : t.minute,
          s = void 0 !== e.second ? e.second : t.second,
          l = void 0 !== e.millisecond ? e.millisecond : t.millisecond,
          c = Fe._buildDateInZone(n, r, i, o, a, s, l, this._zone);
        return new Fe(c, this._zone, this._locale)
      }
      diff(e, t) {
        var n = this.ts - e.ts,
          r = {};
        return t && -1 !== t.indexOf("hours") && (r.hours = n / 36e5), {
          values: r
        }
      }
    }

    function Ve(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function ze(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2 ? Ve(Object(r), !0).forEach((function(n) {
          t()(e, n, r[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ve(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }
    var Ge = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"],
      $e = ["SATURDAY", "SUNDAY"],
      Ye = Ge.concat($e),
      Je = e => {
        var {
          configuration: t,
          properties: n,
          pageURL: r,
          originURL: i,
          userAgent: o
        } = e, a = {
          MONDAY: [{
            from: "",
            to: ""
          }],
          TUESDAY: [{
            from: "",
            to: ""
          }],
          WEDNESDAY: [{
            from: "",
            to: ""
          }],
          THURSDAY: [{
            from: "",
            to: ""
          }],
          FRIDAY: [{
            from: "",
            to: ""
          }],
          SATURDAY: [{
            from: "",
            to: ""
          }],
          SUNDAY: [{
            from: "",
            to: ""
          }]
        };

        function s(e) {
          var {
            startTime: t,
            endTime: n,
            selectedDay: r
          } = e, i = r.toUpperCase();
          if ("WEEKDAYS" !== i)
            if ("WEEKENDS" !== i)
              if ("EVERYDAY" !== i && "EVERY DAY" !== i) a[i] && (a[i][0].from ? a[i].push({
                from: t,
                to: n
              }) : a[i][0] = {
                from: t,
                to: n
              });
              else
                for (var o of Ye) a[o][0].from ? a[o].push({
                  from: t,
                  to: n
                }) : a[o][0] = {
                  from: t,
                  to: n
                };
          else
            for (var s of $e) a[s][0].from ? a[s].push({
              from: t,
              to: n
            }) : a[s][0] = {
              from: t,
              to: n
            };
          else
            for (var l of Ge) a[l][0].from ? a[l].push({
              from: t,
              to: n
            }) : a[l][0] = {
              from: t,
              to: n
            }
        }

        function l(e) {
          var {
            startTime: t,
            endTime: n,
            selectedDay: r,
            extraBusinessHours: i = []
          } = e;
          if (s({
              startTime: t,
              endTime: n,
              selectedDay: r
            }), i && i.length > 0)
            for (var o of i) s(o)
        }

        function c(e) {
          return a[e] || [{
            from: "",
            to: ""
          }]
        }

        function d(e, t, n) {
          return e && e.length && e.find((e => {
            var [r, i] = function(e, t) {
              var [n, r, i] = e.startDate.split("/").map((e => parseInt(e)));
              try {
                "Invalid Date" === e.endDate && (e.endDate = e.startDate, console.log("Holiday end date is incorrect. Setting to same as startdate to avoid the error", e.endDate))
              } catch (e) {
                console.log("Error while setting the correct end date for holiday", e)
              }
              var [o, a, s] = e.endDate.split("/").map((e => parseInt(e))), l = Fe.fromObject({
                year: i,
                month: n,
                day: r,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
                zone: t
              }), c = Fe.fromObject({
                year: s,
                month: o,
                day: a,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
                zone: t
              });
              e.isRange || (c = l.plus({
                day: 1
              }));
              return [l, c]
            }(e.date, t);
            return r.ts <= n.ts && i.ts >= n.ts
          })) || null
        }

        function p(e, t) {
          var n = c(e.weekdayLong.toUpperCase());
          for (var r of n)
            if (r && r.from && r.to) {
              var i = r.from.split(":"),
                o = r.to.split(":"),
                a = {
                  hour: parseInt(i[0]),
                  minute: parseInt(i[1]),
                  zone: t
                },
                s = Fe.fromObject(a);
              a = {
                hour: parseInt(o[0]),
                minute: parseInt(o[1]),
                zone: t
              };
              var l = Fe.fromObject(a);
              if (e.ts >= s.ts && e.ts <= l.ts) return !0
            } return !1
        }
        var u, {
          control: h
        } = t;
        u = h;
        var {
          mobileControl: m
        } = t;
        (e => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e))(o) && m && (u = m), u = ze(ze({}, u), {}, {
          hideMobileMessenger: h.hideMobileMessenger
        });
        var {
          displayTimeType: g
        } = u, f = (e => {
          if (e && e.brandData) return {
            timeZoneName: e.brandData.timeZoneName,
            timezone: e.brandData.timezone,
            id: e.brandData.tenantId
          }
        })(t);
        if (g && "during-business-hours" === g && ! function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en",
              r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
            l(t);
            var i = Fe.local().setZone(e),
              o = p(Fe.local().setZone(e).setLocale("en"), e),
              a = Fe.fromObject({
                zone: e
              }).setLocale("en"),
              s = d(t.holidays, e, a);
            if (o && !s && r) return {
              success: !0,
              isItWorkingHour: !0,
              agentWillBeBackAt: i.setLocale(n),
              agentWillBeBackIn: null
            };
            if (s && s.specialWorkHour && s.specialWorkHour.isAvailable) {
              var [u, h] = s.specialWorkHour.startTime.split(":").map((e => parseInt(e))), [m, g] = s.specialWorkHour.endTime.split(":").map((e => parseInt(e))), f = Fe.fromObject({
                zone: e,
                hour: u,
                minute: h,
                second: 0,
                millisecond: 0
              }), v = Fe.fromObject({
                zone: e,
                hour: m,
                minute: g,
                second: 0,
                millisecond: 0
              });
              if (a.ts < f.ts) {
                var y = f.diff(a, ["hours"]);
                return {
                  success: !0,
                  isItWorkingHour: !1,
                  agentWillBeBackAt: f.setZone("local").setLocale(n),
                  agentWillBeBackIn: y,
                  holidayMessageForCustomers: s.messageForCustomers
                }
              }
              if (o && r && a.ts >= f.ts && a.ts <= v.ts) return {
                success: !0,
                isItWorkingHour: !0,
                agentWillBeBackAt: i.setLocale(n),
                agentWillBeBackIn: null
              }
            }
            for (var w = a.plus({
                year: 1
              }); w.ts !== a.ts;) {
              var C = d(t.holidays, e, a);
              if (C) {
                if (!C.specialWorkHour || !C.specialWorkHour.isAvailable) {
                  a = a.plus({
                    day: 1
                  });
                  continue
                }
                var [b, S] = C.specialWorkHour.startTime.split(":").map((e => parseInt(e))), M = Fe.fromObject({
                  zone: e,
                  hour: b,
                  minute: S,
                  second: 0,
                  millisecond: 0,
                  day: a.day,
                  month: a.month,
                  year: a.year
                });
                if (a.ts < M.ts) {
                  var x = M.diff(i, ["hours"]);
                  return {
                    success: !0,
                    isItWorkingHour: !1,
                    agentWillBeBackAt: M.setZone("local").setLocale(n),
                    agentWillBeBackIn: x
                  }
                }
                a = a.plus({
                  day: 1
                })
              } else {
                var O = c(a.weekdayLong.toUpperCase());
                for (var _ of O)
                  if (_ && _.from) {
                    var E = _.from.split(":"),
                      I = {
                        year: a.year,
                        month: a.month,
                        day: a.day,
                        hour: parseInt(E[0]),
                        minute: parseInt(E[1]),
                        zone: e
                      },
                      T = Fe.fromObject(I),
                      k = T.diff(i, ["hours"]);
                    if (parseFloat(k.values.hours).toFixed(2) > 0) return {
                      agentWillBeBackAt: T.setZone("local").setLocale(n),
                      success: !0,
                      agentWillBeBackIn: k,
                      isItWorkingHour: !1
                    }
                  } a = a.plus({
                  day: 1
                })
              }
            }
            return {
              success: !1
            }
          }(function(e) {
            if (e.timeZoneName) {
              var t = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "America/New_York";
                try {
                  var t = new Date,
                    n = new Intl.DateTimeFormat("en-US", {
                      timeZone: e,
                      timeZoneName: "longOffset"
                    }).formatToParts(t).find((e => "timeZoneName" === e.type));
                  if (n) {
                    var r = n.value.replace("GMT", "");
                    return "" === r ? "+00:00" : r
                  }
                  return ""
                } catch (e) {
                  return console.log("Error getOffsetFromTimeZoneName", e), ""
                }
              }(e.timeZoneName);
              if (t) return "UTC" + t
            }
            return e.timezone ? "UTC" + e.timezone.split(" ").pop() : "UTC-04:00"
          }(f), function(e) {
            var t = {
              replyTime: "The team typically replies in a few hours.",
              startTime: "09:00",
              endTime: "17:00",
              selectedDay: "Weekdays"
            };
            try {
              return e.availability || t
            } catch (e) {
              return t
            }
          }(t), function(e) {
            try {
              return e && e.brandData ? e.brandData.language || "en" : e.welcome.defaultLanguage || "en"
            } catch (e) {
              return "en"
            }
          }(t)).isItWorkingHour) return !1;
        return !! function(e) {
          var {
            advancedMessengerVisibility: t = !0,
            visibilityCode: n = "SHOW-CONTAINS",
            visibilityUrls: r = "",
            pageURL: i = "",
            originURL: o = "",
            hideMobileMessenger: a = !1,
            userAgent: s = ""
          } = e;
          if (a && s && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s)) return {
            status: !1,
            reason: "Hide widget on mobile"
          };
          if (!t || !r) return {
            status: !0,
            reason: "Advanced messenger visibility is not set."
          };
          if ("/test-widget" === i) return {
            status: !0,
            reason: "Preview Widget test."
          };
          var l = n.split("-")[0],
            c = n.split("-")[1];
          return l && c ? "SHOW" === l ? {
            status: (() => {
              for (var e of r.split(",")) {
                var t = e.trim();
                if (t = t.replace(o, "")) {
                  if ("STARTS" === c) {
                    if (0 === i.indexOf(t)) return !0
                  } else if ("CONTAINS" === c) {
                    if (i.indexOf(t) >= 0) return !0
                  } else if ("EXACT" === c && (i === t || i === t + "/")) return !0
                }
              }
              return !1
            })(),
            reason: "SHOW condtion"
          } : "HIDE" === l ? {
            status: (() => {
              for (var e of r.split(",")) {
                var t = e.trim();
                if (t = t.replace(o, "")) {
                  if ("STARTS" === c) {
                    if (0 === i.indexOf(t)) return !1
                  } else if ("CONTAINS" === c) {
                    if (i.indexOf(t) >= 0) return !1
                  } else if ("EXACT" === c && (i === t || i === t + "/")) return !1
                }
              }
              return !0
            })(),
            reason: "HIDE condition "
          } : {
            status: !0,
            reason: "Not Show/Hide"
          } : {
            status: !0,
            reason: "Show hide condition is not set"
          }
        }(ze(ze({}, u), {}, {
          pageURL: r,
          originURL: i,
          userAgent: o
        })).status
      };

    function qe() {
      try {
        if (window.localStorage && window.localStorage.getItem("mage-cache-storage")) {
          var e = JSON.parse(window.localStorage.getItem("mage-cache-storage"));
          if (e && e.customsection && e.customsection.data) return e.customsection.data
        }
      } catch (e) {
        console.log(e, "error while finding the login token")
      }
      return null
    }

    function Qe(e) {
      return Xe.apply(this, arguments)
    }

    function Xe() {
      return (Xe = r()((function*(e) {
        var {
          appClientId: t,
          tenantId: n,
          brandId: r,
          cookieId: i,
          sid: o,
          pageURL: a,
          originURL: s
        } = e;
        try {
          var l = yield Be({
            method: Be.METHODS.post,
            url: w + b + "/campaigns/" + t,
            data: {
              appClientId: t,
              tenantId: n,
              brandId: r,
              cookieId: i,
              sid: o,
              pageURL: a,
              originURL: s,
              user_properties: qe()
            }
          });
          return (null == l ? void 0 : l.data) || {}
        } catch (e) {
          return console.log("[Config] Failed to fetch campaigns:", e.message), {}
        }
      }))).apply(this, arguments)
    }

    function Ke(e) {
      return et.apply(this, arguments)
    }

    function et() {
      return (et = r()((function*(e) {
        var {
          appClientId: t,
          cookieId: n,
          sid: i,
          pageURL: o,
          originURL: a
        } = e;

        function s(e) {
          try {
            return JSON.parse(decodeURIComponent(atob(e)))
          } catch (t) {
            return console.log(t), JSON.parse(decodeURIComponent(escape(atob(e))))
          }
        }

        function l() {
          return (l = r()((function*() {
            var {
              data: e
            } = yield Be({
              method: Be.METHODS.post,
              url: w + b + "/new-config?initiator=messenger",
              data: {
                appClientId: t,
                canUpdateData: !1,
                cookieId: n,
                previous_user_properties: null,
                sid: i,
                user_properties: qe(),
                pageURL: o,
                originURL: a
              }
            });
            return s(e)
          }))).apply(this, arguments)
        }

        function c() {
          return (c = r()((function*() {
            var e = "".concat(C, "/").concat(t, ".json"),
              n = yield fetch(e, {
                method: "GET",
                cache: "no-cache"
              });
            if (!n.ok) throw new Error("CDN fetch failed with status: " + n.status);
            var r = s((yield n.json()).data),
              i = n.headers.get("Date");
            return r.timestamp = i ? new Date(i).getTime() : Date.now(), r
          }))).apply(this, arguments)
        }
        var d = {};
        try {
          d = yield function() {
            return c.apply(this, arguments)
          }();
          try {
            var p;
            d.isMessengerVisible = Je({
              configuration: d,
              properties: {},
              pageURL: o,
              originURL: a,
              userAgent: (null === (p = window.navigator) || void 0 === p ? void 0 : p.userAgent) || ""
            })
          } catch (e) {
            console.error("[Config] Error computing visibility:", e), d.isMessengerVisible = !0
          }
          d.campaigns = {}, d.userProperties = {}
        } catch (e) {
          console.log("[Config] CDN fetch failed, falling back to API:", e.message), d = yield function() {
            return l.apply(this, arguments)
          }()
        }
        try {
          d.isMessengerVisible && window.Shopify && window.Shopify.designMode && (d.isMessengerVisible = !1);
          var {
            control: u
          } = d;
          if (!d.messengerStatus && d.campaigns && d.campaigns.liveChatCampaigns && d.campaigns.liveChatCampaigns.length > 0 && (d.campaigns.liveChatCampaigns = []), u) {
            var h = !0;
            u && (u.displayUserType && "only-visitors" === u.displayUserType && window.richpanelSettings || u.displayUserType && "only-customers" === u.displayUserType && !window.richpanelSettings) && (h = !1), d.isMessengerVisible = d.isMessengerVisible && h;
            var m, g = sessionStorage ? sessionStorage.getItem("messengerDealyed") : null;
            window.richpanel && (m = window.richpanel.helpcenterMode), !g && u.delayTimeForMessenger && "fullscreen" !== m && (yield new Promise((e => setTimeout(e, 1e3 * u.delayTimeForMessenger))))
          }
        } catch (e) {
          console.log(e)
        }
        return d
      }))).apply(this, arguments)
    }
    var tt = () => sessionStorage.getItem("CAMPAIGN_CONVERSATIONS") ? JSON.parse(sessionStorage.getItem("CAMPAIGN_CONVERSATIONS")) : [],
      nt = e => rt(e),
      rt = e => {
        var t = e,
          n = function(e) {
            var t = !!e.frequency && "EVERYTIME" == e.frequency,
              n = tt().find((t => t.campaignId == e.campaignId));
            if (it(e.path, e.urlOperator) && (t || !n) && (!n || !n.isConversationCreated) && (!n || !n.intracted)) return {
              v: e
            }
          };
        for (var r of t) {
          var i = n(r);
          if ("object" == typeof i) return i.v
        }
        return null
      },
      it = (e, t) => {
        var n = parent.window.location.pathname + parent.window.location.hash;
        return "is" === t ? e === n : "is_not" === t ? e != n : "contains" === t ? n.includes(e) : "starts_with" === t ? n.startsWith(e) : "ends_with" === t ? n.endsWith(e) : "is-any" === t || void 0
      },
      ot = "rp_last_user_message_time";

    function at() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
      try {
        var t = localStorage.getItem(ot);
        if (!t) return !1;
        var n = Date.now(),
          r = 60 * e * 1e3,
          i = n - parseInt(t, 10);
        return i <= r
      } catch (e) {
        return !1
      }
    }

    function st(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function lt(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2 ? st(Object(r), !0).forEach((function(n) {
          t()(e, n, r[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : st(Object(r)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    function ct() {
      return (ct = r()((function*() {
        var e, t = yield Ke({
          appClientId: de.appClientId,
          cookieId: de.cookieId,
          sid: de.sid,
          pageURL: window.location.pathname + window.location.hash,
          originURL: window.location.origin
        });
        ["http://localhost:8080", "https://app.richpanel.com", "https://app-v1.richpanel.com", "https://app-dev.richpanel.com", "https://beta.richpanel.com"].includes(location.origin) && "/test-widget" === location.pathname && (t.messengerStatus = !0), t.openByDefault = f(window.location.href, "open_rp_home") || !1, t.openByDefault = !(!window.richpanel || !window.richpanel.widget_open_by_default) || t.openByDefault, "ajmadison4541" === de.appClientId && sessionStorage && sessionStorage.getItem("richpanel_widget_open_state") && (t.openByDefault = !0), de.setMessengerConfiguration(t), de.startListeningToCustomTriggers(), We.init(t), de.setMicroAppUI(We);
        try {
          setTimeout(r()((function*() {
            if (at()) {
              var e = null;
              try {
                e = (yield Promise.all([a.e(271), a.e(728)]).then(a.t.bind(a, 6809, 23))).default
              } catch (e) {
                return
              }
              if (e && "function" == typeof e) {
                var t = e("".concat(w, "/customer"), {
                  path: "/websocket/socket.io",
                  query: {
                    cookieId: de.cookieId,
                    tenantId: de.tenantId,
                    getPersonIdFromNeo: "no",
                    source: "micro-messenger"
                  },
                  transports: ["websocket"]
                });
                de.setSocket(t), de.startListeningToSocketEvents()
              }
            }
          })), 2e3)
        } catch (e) {
          console.log(e, "lazy socket init")
        }
        window.Richpanel = lt(lt({}, window.Richpanel), de), window.RichpanelAppProxy = de, "fullscreen" == (null === (e = window.richpanel) || void 0 === e ? void 0 : e.helpcenterMode) && (de.microAppUI.hide(), yield de.loadMessenger(), de.digest()), t.openByDefault && window.RichpanelAppProxy.showMessenger();
        var n, i, o = [],
          s = e => {
            setTimeout((() => {
              it(e.path, e.urlOperator) && de.showCampaign(e)
            }), parseInt(parseInt(e.duration)))
          },
          l = () => {
            de.removeCampaign()
          };
        t.isCampaignEnabled && t.isMessengerVisible && Qe({
          appClientId: de.appClientId,
          tenantId: t.tenantId,
          brandId: t.brandId,
          cookieId: de.cookieId,
          sid: de.sid,
          pageURL: window.location.pathname + window.location.hash,
          originURL: window.location.origin
        }).then((e => {
          !t.messengerStatus && e.liveChatCampaigns && (e.liveChatCampaigns = []), (e => {
            if (e && t.isMessengerVisible) {
              for (var n of ["liveChatCampaigns", "popUpCampaigns"]) e[n] && (o = o.concat(e[n]));
              var r = nt(o);
              r && r != {} && s(r)
            }
          })(e)
        })), window.onhashchange = () => {
          l();
          var e = nt(o);
          e && e != {} && s(e)
        }, n = window.history, i = n.pushState, n.pushState = function(e) {
          var t = i.apply(n, arguments);
          try {
            l();
            var r = nt(o);
            r && r != {} && s(r)
          } catch (e) {
            console.log(e)
          }
          return t
        }, window.onpopstate = () => {
          l();
          var e = nt(o);
          e && e != {} && s(e)
        }, window.Shopify && window.Shopify.Checkout && window.Shopify.Checkout.isOrderStatusPage && t.autoOpenStatusPage && window.RichpanelAppProxy.showMessenger(), window.location.href.includes("mrmarvis.nl") && "/" == window.location.pathname || window.location.href.includes("richpanel-new-demo.myshopify.com") && window.location.pathname
      }))).apply(this, arguments)
    }! function() {
      ct.apply(this, arguments)
    }()
  })()
})();