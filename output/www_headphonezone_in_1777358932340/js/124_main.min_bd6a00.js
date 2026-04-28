/*! For license information please see main.min.js.LICENSE.txt */ ! function(t) {
  var e = {};

  function n(o) {
    if (e[o]) return e[o].exports;
    var r = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = t, n.c = e, n.d = function(t, e, o) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: o
    })
  }, n.r = function(t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function(t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var r in t) n.d(o, r, function(e) {
        return t[e]
      }.bind(null, r));
    return o
  }, n.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "/", n(n.s = 44)
}([function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "Children", (function() {
    return p
  })), n.d(e, "PureComponent", (function() {
    return s
  })), n.d(e, "StrictMode", (function() {
    return Q
  })), n.d(e, "Suspense", (function() {
    return b
  })), n.d(e, "SuspenseList", (function() {
    return O
  })), n.d(e, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", (function() {
    return G
  })), n.d(e, "cloneElement", (function() {
    return Y
  })), n.d(e, "createFactory", (function() {
    return V
  })), n.d(e, "createPortal", (function() {
    return T
  })), n.d(e, "default", (function() {
    return it
  })), n.d(e, "findDOMNode", (function() {
    return X
  })), n.d(e, "flushSync", (function() {
    return J
  })), n.d(e, "forwardRef", (function() {
    return d
  })), n.d(e, "hydrate", (function() {
    return L
  })), n.d(e, "isValidElement", (function() {
    return $
  })), n.d(e, "lazy", (function() {
    return w
  })), n.d(e, "memo", (function() {
    return l
  })), n.d(e, "render", (function() {
    return I
  })), n.d(e, "startTransition", (function() {
    return tt
  })), n.d(e, "unmountComponentAtNode", (function() {
    return Z
  })), n.d(e, "unstable_batchedUpdates", (function() {
    return q
  })), n.d(e, "useDeferredValue", (function() {
    return et
  })), n.d(e, "useInsertionEffect", (function() {
    return ot
  })), n.d(e, "useSyncExternalStore", (function() {
    return rt
  })), n.d(e, "useTransition", (function() {
    return nt
  })), n.d(e, "version", (function() {
    return z
  }));
  var o = n(2);
  n.d(e, "Component", (function() {
    return o.Component
  })), n.d(e, "Fragment", (function() {
    return o.Fragment
  })), n.d(e, "createContext", (function() {
    return o.createContext
  })), n.d(e, "createElement", (function() {
    return o.createElement
  })), n.d(e, "createRef", (function() {
    return o.createRef
  }));
  var r = n(3);

  function i(t, e) {
    for (var n in e) t[n] = e[n];
    return t
  }

  function a(t, e) {
    for (var n in t)
      if ("__source" !== n && !(n in e)) return !0;
    for (var o in e)
      if ("__source" !== o && t[o] !== e[o]) return !0;
    return !1
  }

  function c(t, e) {
    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
  }

  function s(t) {
    this.props = t
  }

  function l(t, e) {
    function n(t) {
      var n = this.props.ref,
        o = n == t.ref;
      return !o && n && (n.call ? n(null) : n.current = null), e ? !e(this.props, t) || !o : a(this.props, t)
    }

    function r(e) {
      return this.shouldComponentUpdate = n, Object(o.createElement)(t, e)
    }
    return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
  }
  n.d(e, "useCallback", (function() {
    return r.useCallback
  })), n.d(e, "useContext", (function() {
    return r.useContext
  })), n.d(e, "useDebugValue", (function() {
    return r.useDebugValue
  })), n.d(e, "useEffect", (function() {
    return r.useEffect
  })), n.d(e, "useErrorBoundary", (function() {
    return r.useErrorBoundary
  })), n.d(e, "useId", (function() {
    return r.useId
  })), n.d(e, "useImperativeHandle", (function() {
    return r.useImperativeHandle
  })), n.d(e, "useLayoutEffect", (function() {
    return r.useLayoutEffect
  })), n.d(e, "useMemo", (function() {
    return r.useMemo
  })), n.d(e, "useReducer", (function() {
    return r.useReducer
  })), n.d(e, "useRef", (function() {
    return r.useRef
  })), n.d(e, "useState", (function() {
    return r.useState
  })), (s.prototype = new o.Component).isPureReactComponent = !0, s.prototype.shouldComponentUpdate = function(t, e) {
    return a(this.props, t) || a(this.state, e)
  };
  var u = o.options.__b;
  o.options.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), u && u(t)
  };
  var _ = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

  function d(t) {
    function e(e) {
      var n = i({}, e);
      return delete n.ref, t(n, e.ref || null)
    }
    return e.$$typeof = _, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e
  }
  var f = function(t, e) {
      return null == t ? null : Object(o.toChildArray)(Object(o.toChildArray)(t).map(e))
    },
    p = {
      map: f,
      forEach: f,
      count: function(t) {
        return t ? Object(o.toChildArray)(t).length : 0
      },
      only: function(t) {
        var e = Object(o.toChildArray)(t);
        if (1 !== e.length) throw "Children.only";
        return e[0]
      },
      toArray: o.toChildArray
    },
    v = o.options.__e;
  o.options.__e = function(t, e, n, o) {
    if (t.then)
      for (var r, i = e; i = i.__;)
        if ((r = i.__c) && r.__c) return null == e.__e && (e.__e = n.__e, e.__k = n.__k), r.__c(t, e);
    v(t, e, n, o)
  };
  var h = o.options.unmount;

  function m(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(t) {
      "function" == typeof t.__c && t.__c()
    })), t.__c.__H = null), null != (t = i({}, t)).__c && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
      return m(t, e, n)
    }))), t
  }

  function g(t, e, n) {
    return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
      return g(t, e, n)
    })), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t
  }

  function b() {
    this.__u = 0, this.t = null, this.__b = null
  }

  function y(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t)
  }

  function w(t) {
    var e, n, r;

    function i(i) {
      if (e || (e = t()).then((function(t) {
          n = t.default || t
        }), (function(t) {
          r = t
        })), r) throw r;
      if (!n) throw e;
      return Object(o.createElement)(n, i)
    }
    return i.displayName = "Lazy", i.__f = !0, i
  }

  function O() {
    this.u = null, this.o = null
  }
  o.options.unmount = function(t) {
    var e = t.__c;
    e && e.__R && e.__R(), e && !0 === t.__h && (t.type = null), h && h(t)
  }, (b.prototype = new o.Component).__c = function(t, e) {
    var n = e.__c,
      o = this;
    null == o.t && (o.t = []), o.t.push(n);
    var r = y(o.__v),
      i = !1,
      a = function() {
        i || (i = !0, n.__R = null, r ? r(c) : c())
      };
    n.__R = a;
    var c = function() {
        if (!--o.__u) {
          if (o.state.__a) {
            var t = o.state.__a;
            o.__v.__k[0] = g(t, t.__c.__P, t.__c.__O)
          }
          var e;
          for (o.setState({
              __a: o.__b = null
            }); e = o.t.pop();) e.forceUpdate()
        }
      },
      s = !0 === e.__h;
    o.__u++ || s || o.setState({
      __a: o.__b = o.__v.__k[0]
    }), t.then(a, a)
  }, b.prototype.componentWillUnmount = function() {
    this.t = []
  }, b.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = m(this.__b, n, r.__O = r.__P)
      }
      this.__b = null
    }
    var i = e.__a && Object(o.createElement)(o.Fragment, null, t.fallback);
    return i && (i.__h = null), [Object(o.createElement)(o.Fragment, null, e.__a ? null : t.children), i]
  };
  var E = function(t, e, n) {
    if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.o.size))
      for (n = t.u; n;) {
        for (; n.length > 3;) n.pop()();
        if (n[1] < n[0]) break;
        t.u = n = n[2]
      }
  };

  function C(t) {
    return this.getChildContext = function() {
      return t.context
    }, t.children
  }

  function x(t) {
    var e = this,
      n = t.i;
    e.componentWillUnmount = function() {
      Object(o.render)(null, e.l), e.l = null, e.i = null
    }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = {
      nodeType: 1,
      parentNode: n,
      childNodes: [],
      appendChild: function(t) {
        this.childNodes.push(t), e.i.appendChild(t)
      },
      insertBefore: function(t, n) {
        this.childNodes.push(t), e.i.appendChild(t)
      },
      removeChild: function(t) {
        this.childNodes.splice(this.childNodes.indexOf(t) >>> 1, 1), e.i.removeChild(t)
      }
    }), Object(o.render)(Object(o.createElement)(C, {
      context: e.context
    }, t.__v), e.l)) : e.l && e.componentWillUnmount()
  }

  function T(t, e) {
    var n = Object(o.createElement)(x, {
      __v: t,
      i: e
    });
    return n.containerInfo = e, n
  }(O.prototype = new o.Component).__a = function(t) {
    var e = this,
      n = y(e.__v),
      o = e.o.get(t);
    return o[0]++,
      function(r) {
        var i = function() {
          e.props.revealOrder ? (o.push(r), E(e, t, o)) : r()
        };
        n ? n(i) : i()
      }
  }, O.prototype.render = function(t) {
    this.u = null, this.o = new Map;
    var e = Object(o.toChildArray)(t.children);
    t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
    for (var n = e.length; n--;) this.o.set(e[n], this.u = [1, 0, this.u]);
    return t.children
  }, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function() {
    var t = this;
    this.o.forEach((function(e, n) {
      E(t, n, e)
    }))
  };
  var S = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    k = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    N = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    j = /[A-Z0-9]/g,
    R = "undefined" != typeof document,
    A = function(t) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(t)
    };

  function I(t, e, n) {
    return null == e.__k && (e.textContent = ""), Object(o.render)(t, e), "function" == typeof n && n(), t ? t.__c : null
  }

  function L(t, e, n) {
    return Object(o.hydrate)(t, e), "function" == typeof n && n(), t ? t.__c : null
  }
  o.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(t) {
    Object.defineProperty(o.Component.prototype, t, {
      configurable: !0,
      get: function() {
        return this["UNSAFE_" + t]
      },
      set: function(e) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          value: e
        })
      }
    })
  }));
  var P = o.options.event;

  function U() {}

  function D() {
    return this.cancelBubble
  }

  function K() {
    return this.defaultPrevented
  }
  o.options.event = function(t) {
    return P && (t = P(t)), t.persist = U, t.isPropagationStopped = D, t.isDefaultPrevented = K, t.nativeEvent = t
  };
  var M, F = {
      configurable: !0,
      get: function() {
        return this.class
      }
    },
    H = o.options.vnode;
  o.options.vnode = function(t) {
    var e = t.type,
      n = t.props,
      r = n;
    if ("string" == typeof e) {
      for (var i in r = {}, n) {
        var a = n[i];
        if (!("value" === i && "defaultValue" in n && null == a || R && "children" === i && "noscript" === e)) {
          var c = i.toLowerCase();
          "defaultValue" === i && "value" in n && null == n.value ? i = "value" : "download" === i && !0 === a ? a = "" : "ondoubleclick" === c ? i = "ondblclick" : "onchange" !== c || "input" !== e && "textarea" !== e || A(n.type) ? "onfocus" === c ? i = "onfocusin" : "onblur" === c ? i = "onfocusout" : N.test(i) ? i = c : -1 === e.indexOf("-") && k.test(i) ? i = i.replace(j, "-$&").toLowerCase() : null === a && (a = void 0) : c = i = "oninput", "oninput" === c && r[i = c] && (i = "oninputCapture"), r[i] = a
        }
      }
      "select" == e && r.multiple && Array.isArray(r.value) && (r.value = Object(o.toChildArray)(n.children).forEach((function(t) {
        t.props.selected = -1 != r.value.indexOf(t.props.value)
      }))), "select" == e && null != r.defaultValue && (r.value = Object(o.toChildArray)(n.children).forEach((function(t) {
        t.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(t.props.value) : r.defaultValue == t.props.value
      }))), t.props = r, n.class != n.className && (F.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", F))
    }
    t.$$typeof = S, H && H(t)
  };
  var W = o.options.__r;
  o.options.__r = function(t) {
    W && W(t), M = t.__c
  };
  var B = o.options.diffed;
  o.options.diffed = function(t) {
    B && B(t);
    var e = t.props,
      n = t.__e;
    null != n && "textarea" === t.type && "value" in e && e.value !== n.value && (n.value = null == e.value ? "" : e.value), M = null
  };
  var G = {
      ReactCurrentDispatcher: {
        current: {
          readContext: function(t) {
            return M.__n[t.__c].props.value
          }
        }
      }
    },
    z = "17.0.2";

  function V(t) {
    return o.createElement.bind(null, t)
  }

  function $(t) {
    return !!t && t.$$typeof === S
  }

  function Y(t) {
    return $(t) ? o.cloneElement.apply(null, arguments) : t
  }

  function Z(t) {
    return !!t.__k && (Object(o.render)(null, t), !0)
  }

  function X(t) {
    return t && (t.base || 1 === t.nodeType && t) || null
  }
  var q = function(t, e) {
      return t(e)
    },
    J = function(t, e) {
      return t(e)
    },
    Q = o.Fragment;

  function tt(t) {
    t()
  }

  function et(t) {
    return t
  }

  function nt() {
    return [!1, tt]
  }
  var ot = r.useLayoutEffect;

  function rt(t, e) {
    var n = e(),
      o = Object(r.useState)({
        h: {
          __: n,
          v: e
        }
      }),
      i = o[0].h,
      a = o[1];
    return Object(r.useLayoutEffect)((function() {
      i.__ = n, i.v = e, c(i.__, e()) || a({
        h: i
      })
    }), [t, n, e]), Object(r.useEffect)((function() {
      return c(i.__, i.v()) || a({
        h: i
      }), t((function() {
        c(i.__, i.v()) || a({
          h: i
        })
      }))
    }), [t]), n
  }
  var it = {
    useState: r.useState,
    useId: r.useId,
    useReducer: r.useReducer,
    useEffect: r.useEffect,
    useLayoutEffect: r.useLayoutEffect,
    useInsertionEffect: ot,
    useTransition: nt,
    useDeferredValue: et,
    useSyncExternalStore: rt,
    startTransition: tt,
    useRef: r.useRef,
    useImperativeHandle: r.useImperativeHandle,
    useMemo: r.useMemo,
    useCallback: r.useCallback,
    useContext: r.useContext,
    useDebugValue: r.useDebugValue,
    version: "17.0.2",
    Children: p,
    render: I,
    hydrate: L,
    unmountComponentAtNode: Z,
    createPortal: T,
    createElement: o.createElement,
    createContext: o.createContext,
    createFactory: V,
    cloneElement: Y,
    createRef: o.createRef,
    Fragment: o.Fragment,
    isValidElement: $,
    findDOMNode: X,
    Component: o.Component,
    PureComponent: s,
    memo: l,
    forwardRef: d,
    flushSync: J,
    unstable_batchedUpdates: q,
    StrictMode: Q,
    Suspense: b,
    SuspenseList: O,
    lazy: w,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: G
  }
}, function(t, e, n) {
  "use strict";
  n(20);
  var o = n(8);
  n.o(o, "Fragment") && n.d(e, "Fragment", (function() {
    return o.Fragment
  })), n.o(o, "jsx") && n.d(e, "jsx", (function() {
    return o.jsx
  })), n.o(o, "jsxs") && n.d(e, "jsxs", (function() {
    return o.jsxs
  }))
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "Component", (function() {
    return w
  })), n.d(e, "Fragment", (function() {
    return y
  })), n.d(e, "cloneElement", (function() {
    return B
  })), n.d(e, "createContext", (function() {
    return G
  })), n.d(e, "createElement", (function() {
    return m
  })), n.d(e, "createRef", (function() {
    return b
  })), n.d(e, "h", (function() {
    return m
  })), n.d(e, "hydrate", (function() {
    return W
  })), n.d(e, "isValidElement", (function() {
    return a
  })), n.d(e, "options", (function() {
    return r
  })), n.d(e, "render", (function() {
    return H
  })), n.d(e, "toChildArray", (function() {
    return k
  }));
  var o, r, i, a, c, s, l, u, _, d = {},
    f = [],
    p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

  function v(t, e) {
    for (var n in e) t[n] = e[n];
    return t
  }

  function h(t) {
    var e = t.parentNode;
    e && e.removeChild(t)
  }

  function m(t, e, n) {
    var r, i, a, c = {};
    for (a in e) "key" == a ? r = e[a] : "ref" == a ? i = e[a] : c[a] = e[a];
    if (arguments.length > 2 && (c.children = arguments.length > 3 ? o.call(arguments, 2) : n), "function" == typeof t && null != t.defaultProps)
      for (a in t.defaultProps) void 0 === c[a] && (c[a] = t.defaultProps[a]);
    return g(t, c, r, i, null)
  }

  function g(t, e, n, o, a) {
    var c = {
      type: t,
      props: e,
      key: n,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == a ? ++i : a
    };
    return null == a && null != r.vnode && r.vnode(c), c
  }

  function b() {
    return {
      current: null
    }
  }

  function y(t) {
    return t.children
  }

  function w(t, e) {
    this.props = t, this.context = e
  }

  function O(t, e) {
    if (null == e) return t.__ ? O(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var n; e < t.__k.length; e++)
      if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
    return "function" == typeof t.type ? O(t) : null
  }

  function E(t) {
    var e, n;
    if (null != (t = t.__) && null != t.__c) {
      for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
        if (null != (n = t.__k[e]) && null != n.__e) {
          t.__e = t.__c.base = n.__e;
          break
        } return E(t)
    }
  }

  function C(t) {
    (!t.__d && (t.__d = !0) && c.push(t) && !x.__r++ || s !== r.debounceRendering) && ((s = r.debounceRendering) || l)(x)
  }

  function x() {
    var t, e, n, o, r, i, a, s;
    for (c.sort(u); t = c.shift();) t.__d && (e = c.length, o = void 0, r = void 0, a = (i = (n = t).__v).__e, (s = n.__P) && (o = [], (r = v({}, i)).__v = i.__v + 1, P(s, i, r, n.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [a] : null, o, null == a ? O(i) : a, i.__h), U(o, i), i.__e != a && E(i)), c.length > e && c.sort(u));
    x.__r = 0
  }

  function T(t, e, n, o, r, i, a, c, s, l) {
    var u, _, p, v, h, m, b, w = o && o.__k || f,
      E = w.length;
    for (n.__k = [], u = 0; u < e.length; u++)
      if (null != (v = n.__k[u] = null == (v = e[u]) || "boolean" == typeof v || "function" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? g(null, v, null, null, v) : Array.isArray(v) ? g(y, {
          children: v
        }, null, null, null) : v.__b > 0 ? g(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v) : v)) {
        if (v.__ = n, v.__b = n.__b + 1, null === (p = w[u]) || p && v.key == p.key && v.type === p.type) w[u] = void 0;
        else
          for (_ = 0; _ < E; _++) {
            if ((p = w[_]) && v.key == p.key && v.type === p.type) {
              w[_] = void 0;
              break
            }
            p = null
          }
        P(t, v, p = p || d, r, i, a, c, s, l), h = v.__e, (_ = v.ref) && p.ref != _ && (b || (b = []), p.ref && b.push(p.ref, null, v), b.push(_, v.__c || h, v)), null != h ? (null == m && (m = h), "function" == typeof v.type && v.__k === p.__k ? v.__d = s = S(v, s, t) : s = N(t, v, p, w, h, s), "function" == typeof n.type && (n.__d = s)) : s && p.__e == s && s.parentNode != t && (s = O(p))
      } for (n.__e = m, u = E; u--;) null != w[u] && ("function" == typeof n.type && null != w[u].__e && w[u].__e == n.__d && (n.__d = j(o).nextSibling), M(w[u], w[u]));
    if (b)
      for (u = 0; u < b.length; u++) K(b[u], b[++u], b[++u])
  }

  function S(t, e, n) {
    for (var o, r = t.__k, i = 0; r && i < r.length; i++)(o = r[i]) && (o.__ = t, e = "function" == typeof o.type ? S(o, e, n) : N(n, o, o, r, o.__e, e));
    return e
  }

  function k(t, e) {
    return e = e || [], null == t || "boolean" == typeof t || (Array.isArray(t) ? t.some((function(t) {
      k(t, e)
    })) : e.push(t)), e
  }

  function N(t, e, n, o, r, i) {
    var a, c, s;
    if (void 0 !== e.__d) a = e.__d, e.__d = void 0;
    else if (null == n || r != i || null == r.parentNode) t: if (null == i || i.parentNode !== t) t.appendChild(r), a = null;
      else {
        for (c = i, s = 0;
          (c = c.nextSibling) && s < o.length; s += 1)
          if (c == r) break t;
        t.insertBefore(r, i), a = i
      } return void 0 !== a ? a : r.nextSibling
  }

  function j(t) {
    var e, n, o;
    if (null == t.type || "string" == typeof t.type) return t.__e;
    if (t.__k)
      for (e = t.__k.length - 1; e >= 0; e--)
        if ((n = t.__k[e]) && (o = j(n))) return o;
    return null
  }

  function R(t, e, n) {
    "-" === e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || p.test(e) ? n : n + "px"
  }

  function A(t, e, n, o, r) {
    var i;
    t: if ("style" === e)
      if ("string" == typeof n) t.style.cssText = n;
      else {
        if ("string" == typeof o && (t.style.cssText = o = ""), o)
          for (e in o) n && e in n || R(t.style, e, "");
        if (n)
          for (e in n) o && n[e] === o[e] || R(t.style, e, n[e])
      }
    else if ("o" === e[0] && "n" === e[1]) i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? o || t.addEventListener(e, i ? L : I, i) : t.removeEventListener(e, i ? L : I, i);
    else if ("dangerouslySetInnerHTML" !== e) {
      if (r) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== e && "height" !== e && "href" !== e && "list" !== e && "form" !== e && "tabIndex" !== e && "download" !== e && e in t) try {
        t[e] = null == n ? "" : n;
        break t
      } catch (t) {}
      "function" == typeof n || (null == n || !1 === n && -1 == e.indexOf("-") ? t.removeAttribute(e) : t.setAttribute(e, n))
    }
  }

  function I(t) {
    return this.l[t.type + !1](r.event ? r.event(t) : t)
  }

  function L(t) {
    return this.l[t.type + !0](r.event ? r.event(t) : t)
  }

  function P(t, e, n, o, i, a, c, s, l) {
    var u, _, d, f, p, h, m, g, b, O, E, C, x, S, k, N = e.type;
    if (void 0 !== e.constructor) return null;
    null != n.__h && (l = n.__h, s = e.__e = n.__e, e.__h = null, a = [s]), (u = r.__b) && u(e);
    try {
      t: if ("function" == typeof N) {
        if (g = e.props, b = (u = N.contextType) && o[u.__c], O = u ? b ? b.props.value : u.__ : o, n.__c ? m = (_ = e.__c = n.__c).__ = _.__E : ("prototype" in N && N.prototype.render ? e.__c = _ = new N(g, O) : (e.__c = _ = new w(g, O), _.constructor = N, _.render = F), b && b.sub(_), _.props = g, _.state || (_.state = {}), _.context = O, _.__n = o, d = _.__d = !0, _.__h = [], _._sb = []), null == _.__s && (_.__s = _.state), null != N.getDerivedStateFromProps && (_.__s == _.state && (_.__s = v({}, _.__s)), v(_.__s, N.getDerivedStateFromProps(g, _.__s))), f = _.props, p = _.state, _.__v = e, d) null == N.getDerivedStateFromProps && null != _.componentWillMount && _.componentWillMount(), null != _.componentDidMount && _.__h.push(_.componentDidMount);
        else {
          if (null == N.getDerivedStateFromProps && g !== f && null != _.componentWillReceiveProps && _.componentWillReceiveProps(g, O), !_.__e && null != _.shouldComponentUpdate && !1 === _.shouldComponentUpdate(g, _.__s, O) || e.__v === n.__v) {
            for (e.__v !== n.__v && (_.props = g, _.state = _.__s, _.__d = !1), _.__e = !1, e.__e = n.__e, e.__k = n.__k, e.__k.forEach((function(t) {
                t && (t.__ = e)
              })), E = 0; E < _._sb.length; E++) _.__h.push(_._sb[E]);
            _._sb = [], _.__h.length && c.push(_);
            break t
          }
          null != _.componentWillUpdate && _.componentWillUpdate(g, _.__s, O), null != _.componentDidUpdate && _.__h.push((function() {
            _.componentDidUpdate(f, p, h)
          }))
        }
        if (_.context = O, _.props = g, _.__P = t, C = r.__r, x = 0, "prototype" in N && N.prototype.render) {
          for (_.state = _.__s, _.__d = !1, C && C(e), u = _.render(_.props, _.state, _.context), S = 0; S < _._sb.length; S++) _.__h.push(_._sb[S]);
          _._sb = []
        } else
          do {
            _.__d = !1, C && C(e), u = _.render(_.props, _.state, _.context), _.state = _.__s
          } while (_.__d && ++x < 25);
        _.state = _.__s, null != _.getChildContext && (o = v(v({}, o), _.getChildContext())), d || null == _.getSnapshotBeforeUpdate || (h = _.getSnapshotBeforeUpdate(f, p)), k = null != u && u.type === y && null == u.key ? u.props.children : u, T(t, Array.isArray(k) ? k : [k], e, n, o, i, a, c, s, l), _.base = e.__e, e.__h = null, _.__h.length && c.push(_), m && (_.__E = _.__ = null), _.__e = !1
      } else null == a && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = D(n.__e, e, n, o, i, a, c, l);
      (u = r.diffed) && u(e)
    }
    catch (t) {
      e.__v = null, (l || null != a) && (e.__e = s, e.__h = !!l, a[a.indexOf(s)] = null), r.__e(t, e, n)
    }
  }

  function U(t, e) {
    r.__c && r.__c(e, t), t.some((function(e) {
      try {
        t = e.__h, e.__h = [], t.some((function(t) {
          t.call(e)
        }))
      } catch (t) {
        r.__e(t, e.__v)
      }
    }))
  }

  function D(t, e, n, r, i, a, c, s) {
    var l, u, _, f = n.props,
      p = e.props,
      v = e.type,
      m = 0;
    if ("svg" === v && (i = !0), null != a)
      for (; m < a.length; m++)
        if ((l = a[m]) && "setAttribute" in l == !!v && (v ? l.localName === v : 3 === l.nodeType)) {
          t = l, a[m] = null;
          break
        } if (null == t) {
      if (null === v) return document.createTextNode(p);
      t = i ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, p.is && p), a = null, s = !1
    }
    if (null === v) f === p || s && t.data === p || (t.data = p);
    else {
      if (a = a && o.call(t.childNodes), u = (f = n.props || d).dangerouslySetInnerHTML, _ = p.dangerouslySetInnerHTML, !s) {
        if (null != a)
          for (f = {}, m = 0; m < t.attributes.length; m++) f[t.attributes[m].name] = t.attributes[m].value;
        (_ || u) && (_ && (u && _.__html == u.__html || _.__html === t.innerHTML) || (t.innerHTML = _ && _.__html || ""))
      }
      if (function(t, e, n, o, r) {
          var i;
          for (i in n) "children" === i || "key" === i || i in e || A(t, i, null, n[i], o);
          for (i in e) r && "function" != typeof e[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === e[i] || A(t, i, e[i], n[i], o)
        }(t, p, f, i, s), _) e.__k = [];
      else if (m = e.props.children, T(t, Array.isArray(m) ? m : [m], e, n, r, i && "foreignObject" !== v, a, c, a ? a[0] : n.__k && O(n, 0), s), null != a)
        for (m = a.length; m--;) null != a[m] && h(a[m]);
      s || ("value" in p && void 0 !== (m = p.value) && (m !== t.value || "progress" === v && !m || "option" === v && m !== f.value) && A(t, "value", m, f.value, !1), "checked" in p && void 0 !== (m = p.checked) && m !== t.checked && A(t, "checked", m, f.checked, !1))
    }
    return t
  }

  function K(t, e, n) {
    try {
      "function" == typeof t ? t(e) : t.current = e
    } catch (t) {
      r.__e(t, n)
    }
  }

  function M(t, e, n) {
    var o, i;
    if (r.unmount && r.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || K(o, null, e)), null != (o = t.__c)) {
      if (o.componentWillUnmount) try {
        o.componentWillUnmount()
      } catch (t) {
        r.__e(t, e)
      }
      o.base = o.__P = null, t.__c = void 0
    }
    if (o = t.__k)
      for (i = 0; i < o.length; i++) o[i] && M(o[i], e, n || "function" != typeof t.type);
    n || null == t.__e || h(t.__e), t.__ = t.__e = t.__d = void 0
  }

  function F(t, e, n) {
    return this.constructor(t, n)
  }

  function H(t, e, n) {
    var i, a, c;
    r.__ && r.__(t, e), a = (i = "function" == typeof n) ? null : n && n.__k || e.__k, c = [], P(e, t = (!i && n || e).__k = m(y, null, [t]), a || d, d, void 0 !== e.ownerSVGElement, !i && n ? [n] : a ? null : e.firstChild ? o.call(e.childNodes) : null, c, !i && n ? n : a ? a.__e : e.firstChild, i), U(c, t)
  }

  function W(t, e) {
    H(t, e, W)
  }

  function B(t, e, n) {
    var r, i, a, c = v({}, t.props);
    for (a in e) "key" == a ? r = e[a] : "ref" == a ? i = e[a] : c[a] = e[a];
    return arguments.length > 2 && (c.children = arguments.length > 3 ? o.call(arguments, 2) : n), g(t.type, c, r || t.key, i || t.ref, null)
  }

  function G(t, e) {
    var n = {
      __c: e = "__cC" + _++,
      __: t,
      Consumer: function(t, e) {
        return t.children(e)
      },
      Provider: function(t) {
        var n, o;
        return this.getChildContext || (n = [], (o = {})[e] = this, this.getChildContext = function() {
          return o
        }, this.shouldComponentUpdate = function(t) {
          this.props.value !== t.value && n.some((function(t) {
            t.__e = !0, C(t)
          }))
        }, this.sub = function(t) {
          n.push(t);
          var e = t.componentWillUnmount;
          t.componentWillUnmount = function() {
            n.splice(n.indexOf(t), 1), e && e.call(t)
          }
        }), t.children
      }
    };
    return n.Provider.__ = n.Consumer.contextType = n
  }
  o = f.slice, r = {
    __e: function(t, e, n, o) {
      for (var r, i, a; e = e.__;)
        if ((r = e.__c) && !r.__) try {
          if ((i = r.constructor) && null != i.getDerivedStateFromError && (r.setState(i.getDerivedStateFromError(t)), a = r.__d), null != r.componentDidCatch && (r.componentDidCatch(t, o || {}), a = r.__d), a) return r.__E = r
        } catch (e) {
          t = e
        }
      throw t
    }
  }, i = 0, a = function(t) {
    return null != t && void 0 === t.constructor
  }, w.prototype.setState = function(t, e) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof t && (t = t(v({}, n), this.props)), t && v(n, t), null != t && this.__v && (e && this._sb.push(e), C(this))
  }, w.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), C(this))
  }, w.prototype.render = y, c = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(t, e) {
    return t.__v.__b - e.__v.__b
  }, x.__r = 0, _ = 0
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "useCallback", (function() {
    return C
  })), n.d(e, "useContext", (function() {
    return x
  })), n.d(e, "useDebugValue", (function() {
    return T
  })), n.d(e, "useEffect", (function() {
    return b
  })), n.d(e, "useErrorBoundary", (function() {
    return S
  })), n.d(e, "useId", (function() {
    return k
  })), n.d(e, "useImperativeHandle", (function() {
    return O
  })), n.d(e, "useLayoutEffect", (function() {
    return y
  })), n.d(e, "useMemo", (function() {
    return E
  })), n.d(e, "useReducer", (function() {
    return g
  })), n.d(e, "useRef", (function() {
    return w
  })), n.d(e, "useState", (function() {
    return m
  }));
  var o, r, i, a, c = n(2),
    s = 0,
    l = [],
    u = [],
    _ = c.options.__b,
    d = c.options.__r,
    f = c.options.diffed,
    p = c.options.__c,
    v = c.options.unmount;

  function h(t, e) {
    c.options.__h && c.options.__h(r, t, s || e), s = 0;
    var n = r.__H || (r.__H = {
      __: [],
      __h: []
    });
    return t >= n.__.length && n.__.push({
      __V: u
    }), n.__[t]
  }

  function m(t) {
    return s = 1, g(P, t)
  }

  function g(t, e, n) {
    var i = h(o++, 2);
    if (i.t = t, !i.__c && (i.__ = [n ? n(e) : P(void 0, e), function(t) {
        var e = i.__N ? i.__N[0] : i.__[0],
          n = i.t(e, t);
        e !== n && (i.__N = [n, i.__[1]], i.__c.setState({}))
      }], i.__c = r, !r.u)) {
      var a = function(t, e, n) {
        if (!i.__c.__H) return !0;
        var o = i.__c.__H.__.filter((function(t) {
          return t.__c
        }));
        if (o.every((function(t) {
            return !t.__N
          }))) return !c || c.call(this, t, e, n);
        var r = !1;
        return o.forEach((function(t) {
          if (t.__N) {
            var e = t.__[0];
            t.__ = t.__N, t.__N = void 0, e !== t.__[0] && (r = !0)
          }
        })), !(!r && i.__c.props === t) && (!c || c.call(this, t, e, n))
      };
      r.u = !0;
      var c = r.shouldComponentUpdate,
        s = r.componentWillUpdate;
      r.componentWillUpdate = function(t, e, n) {
        if (this.__e) {
          var o = c;
          c = void 0, a(t, e, n), c = o
        }
        s && s.call(this, t, e, n)
      }, r.shouldComponentUpdate = a
    }
    return i.__N || i.__
  }

  function b(t, e) {
    var n = h(o++, 3);
    !c.options.__s && L(n.__H, e) && (n.__ = t, n.i = e, r.__H.__h.push(n))
  }

  function y(t, e) {
    var n = h(o++, 4);
    !c.options.__s && L(n.__H, e) && (n.__ = t, n.i = e, r.__h.push(n))
  }

  function w(t) {
    return s = 5, E((function() {
      return {
        current: t
      }
    }), [])
  }

  function O(t, e, n) {
    s = 6, y((function() {
      return "function" == typeof t ? (t(e()), function() {
        return t(null)
      }) : t ? (t.current = e(), function() {
        return t.current = null
      }) : void 0
    }), null == n ? n : n.concat(t))
  }

  function E(t, e) {
    var n = h(o++, 7);
    return L(n.__H, e) ? (n.__V = t(), n.i = e, n.__h = t, n.__V) : n.__
  }

  function C(t, e) {
    return s = 8, E((function() {
      return t
    }), e)
  }

  function x(t) {
    var e = r.context[t.__c],
      n = h(o++, 9);
    return n.c = t, e ? (null == n.__ && (n.__ = !0, e.sub(r)), e.props.value) : t.__
  }

  function T(t, e) {
    c.options.useDebugValue && c.options.useDebugValue(e ? e(t) : t)
  }

  function S(t) {
    var e = h(o++, 10),
      n = m();
    return e.__ = t, r.componentDidCatch || (r.componentDidCatch = function(t, o) {
      e.__ && e.__(t, o), n[1](t)
    }), [n[0], function() {
      n[1](void 0)
    }]
  }

  function k() {
    var t = h(o++, 11);
    if (!t.__) {
      for (var e = r.__v; null !== e && !e.__m && null !== e.__;) e = e.__;
      var n = e.__m || (e.__m = [0, 0]);
      t.__ = "P" + n[0] + "-" + n[1]++
    }
    return t.__
  }

  function N() {
    for (var t; t = l.shift();)
      if (t.__P && t.__H) try {
        t.__H.__h.forEach(A), t.__H.__h.forEach(I), t.__H.__h = []
      } catch (r) {
        t.__H.__h = [], c.options.__e(r, t.__v)
      }
  }
  c.options.__b = function(t) {
    r = null, _ && _(t)
  }, c.options.__r = function(t) {
    d && d(t), o = 0;
    var e = (r = t.__c).__H;
    e && (i === r ? (e.__h = [], r.__h = [], e.__.forEach((function(t) {
      t.__N && (t.__ = t.__N), t.__V = u, t.__N = t.i = void 0
    }))) : (e.__h.forEach(A), e.__h.forEach(I), e.__h = [])), i = r
  }, c.options.diffed = function(t) {
    f && f(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (1 !== l.push(e) && a === c.options.requestAnimationFrame || ((a = c.options.requestAnimationFrame) || R)(N)), e.__H.__.forEach((function(t) {
      t.i && (t.__H = t.i), t.__V !== u && (t.__ = t.__V), t.i = void 0, t.__V = u
    }))), i = r = null
  }, c.options.__c = function(t, e) {
    e.some((function(t) {
      try {
        t.__h.forEach(A), t.__h = t.__h.filter((function(t) {
          return !t.__ || I(t)
        }))
      } catch (i) {
        e.some((function(t) {
          t.__h && (t.__h = [])
        })), e = [], c.options.__e(i, t.__v)
      }
    })), p && p(t, e)
  }, c.options.unmount = function(t) {
    v && v(t);
    var e, n = t.__c;
    n && n.__H && (n.__H.__.forEach((function(t) {
      try {
        A(t)
      } catch (t) {
        e = t
      }
    })), n.__H = void 0, e && c.options.__e(e, n.__v))
  };
  var j = "function" == typeof requestAnimationFrame;

  function R(t) {
    var e, n = function() {
        clearTimeout(o), j && cancelAnimationFrame(e), setTimeout(t)
      },
      o = setTimeout(n, 100);
    j && (e = requestAnimationFrame(n))
  }

  function A(t) {
    var e = r,
      n = t.__c;
    "function" == typeof n && (t.__c = void 0, n()), r = e
  }

  function I(t) {
    var e = r;
    t.__c = t.__(), r = e
  }

  function L(t, e) {
    return !t || t.length !== e.length || e.some((function(e, n) {
      return e !== t[n]
    }))
  }

  function P(t, e) {
    return "function" == typeof e ? e(t) : e
  }
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = n(0),
    r = n(9),
    i = function(t) {
      var e = window.history,
        n = e[t];
      e[t] = function(e) {
        var o = n.apply(this, arguments),
          r = new Event(t.toLowerCase());
        return r.state = e, window.dispatchEvent(r), o
      }
    };
  r.isBrowser && (i("pushState"), i("replaceState"));
  var a = function(t) {
      var e = window.history,
        n = e.state,
        o = e.length,
        r = window.location;
      return {
        trigger: t,
        state: n,
        length: o,
        hash: r.hash,
        host: r.host,
        hostname: r.hostname,
        href: r.href,
        origin: r.origin,
        pathname: r.pathname,
        port: r.port,
        protocol: r.protocol,
        search: r.search
      }
    },
    c = "function" === typeof Event;
  e.default = r.isBrowser && c ? function() {
    var t = o.useState(a("load")),
      e = t[0],
      n = t[1];
    return o.useEffect((function() {
      var t = function() {
          return n(a("popstate"))
        },
        e = function() {
          return n(a("pushstate"))
        },
        o = function() {
          return n(a("replacestate"))
        };
      return r.on(window, "popstate", t), r.on(window, "pushstate", e), r.on(window, "replacestate", o),
        function() {
          r.off(window, "popstate", t), r.off(window, "pushstate", e), r.off(window, "replacestate", o)
        }
    }), []), e
  } : function() {
    return {
      trigger: "load",
      length: 1
    }
  }
}, function(t, e) {
  t.exports = function(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e)
  }
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.useHash = void 0;
  var o = n(21),
    r = n(0),
    i = o.__importDefault(n(22)),
    a = n(9);
  e.useHash = function() {
    var t = r.useState((function() {
        return window.location.hash
      })),
      e = t[0],
      n = t[1],
      o = r.useCallback((function() {
        n(window.location.hash)
      }), []);
    i.default((function() {
      a.on(window, "hashchange", o)
    }), (function() {
      a.off(window, "hashchange", o)
    }));
    var c = r.useCallback((function(t) {
      t !== e && (window.location.hash = t)
    }), [e]);
    return [e, c]
  }
}, function(t, e, n) {
  "use strict";
  t.exports = function(t) {
    var e = [];
    return e.toString = function() {
      return this.map((function(e) {
        var n = function(t, e) {
          var n = t[1] || "",
            o = t[3];
          if (!o) return n;
          if (e && "function" === typeof btoa) {
            var r = function(t) {
                var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                  n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
                return "/*# ".concat(n, " */")
              }(o),
              i = o.sources.map((function(t) {
                return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */")
              }));
            return [n].concat(i).concat([r]).join("\n")
          }
          return [n].join("\n")
        }(e, t);
        return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
      })).join("")
    }, e.i = function(t, n, o) {
      "string" === typeof t && (t = [
        [null, t, ""]
      ]);
      var r = {};
      if (o)
        for (var i = 0; i < this.length; i++) {
          var a = this[i][0];
          null != a && (r[a] = !0)
        }
      for (var c = 0; c < t.length; c++) {
        var s = [].concat(t[c]);
        o && r[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), e.push(s))
      }
    }, e
  }
}, function(t, e, n) {
  var o = n(2),
    r = 0;

  function i(t, e, n, i, a, c) {
    var s, l, u = {};
    for (l in e) "ref" == l ? s = e[l] : u[l] = e[l];
    var _ = {
      type: t,
      props: u,
      key: n,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --r,
      __source: a,
      __self: c
    };
    if ("function" == typeof t && (s = t.defaultProps))
      for (l in s) void 0 === u[l] && (u[l] = s[l]);
    return o.options.vnode && o.options.vnode(_), _
  }
  Object.defineProperty(e, "Fragment", {
    enumerable: !0,
    get: function() {
      return o.Fragment
    }
  }), e.jsx = i, e.jsxDEV = i, e.jsxs = i
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isNavigator = e.isBrowser = e.off = e.on = e.noop = void 0;
  e.noop = function() {}, e.on = function(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    t && t.addEventListener && t.addEventListener.apply(t, e)
  }, e.off = function(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    t && t.removeEventListener && t.removeEventListener.apply(t, e)
  }, e.isBrowser = "undefined" !== typeof window, e.isNavigator = "undefined" !== typeof navigator
}, function(t, e, n) {
  var o = n(24),
    r = "object" == typeof self && self && self.Object === Object && self,
    i = o || r || Function("return this")();
  t.exports = i
}, function(t, e, n) {
  var o = n(26),
    r = n(5),
    i = n(28),
    a = /^[-+]0x[0-9a-f]+$/i,
    c = /^0b[01]+$/i,
    s = /^0o[0-7]+$/i,
    l = parseInt;
  t.exports = function(t) {
    if ("number" == typeof t) return t;
    if (i(t)) return NaN;
    if (r(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = r(e) ? e + "" : e
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = o(t);
    var n = c.test(t);
    return n || s.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
  }
}, function(t, e, n) {
  var o = n(13),
    r = n(29),
    i = n(30),
    a = o ? o.toStringTag : void 0;
  t.exports = function(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? r(t) : i(t)
  }
}, function(t, e, n) {
  var o = n(10).Symbol;
  t.exports = o
}, function(t, e, n) {
  "use strict";
  var o = function() {
      var t;
      return function() {
        return "undefined" === typeof t && (t = Boolean(window && document && document.all && !window.atob)), t
      }
    }(),
    r = function() {
      var t = {};
      return function(e) {
        if ("undefined" === typeof t[e]) {
          var n = document.querySelector(e);
          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head
          } catch (o) {
            n = null
          }
          t[e] = n
        }
        return t[e]
      }
    }(),
    i = [];

  function a(t) {
    for (var e = -1, n = 0; n < i.length; n++)
      if (i[n].identifier === t) {
        e = n;
        break
      } return e
  }

  function c(t, e) {
    for (var n = {}, o = [], r = 0; r < t.length; r++) {
      var c = t[r],
        s = e.base ? c[0] + e.base : c[0],
        l = n[s] || 0,
        u = "".concat(s, " ").concat(l);
      n[s] = l + 1;
      var _ = a(u),
        d = {
          css: c[1],
          media: c[2],
          sourceMap: c[3]
        }; - 1 !== _ ? (i[_].references++, i[_].updater(d)) : i.push({
        identifier: u,
        updater: p(d, e),
        references: 1
      }), o.push(u)
    }
    return o
  }

  function s(t) {
    var e = document.createElement("style"),
      o = t.attributes || {};
    if ("undefined" === typeof o.nonce) {
      var i = n.nc;
      i && (o.nonce = i)
    }
    if (Object.keys(o).forEach((function(t) {
        e.setAttribute(t, o[t])
      })), "function" === typeof t.insert) t.insert(e);
    else {
      var a = r(t.insert || "head");
      if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      a.appendChild(e)
    }
    return e
  }
  var l = function() {
    var t = [];
    return function(e, n) {
      return t[e] = n, t.filter(Boolean).join("\n")
    }
  }();

  function u(t, e, n, o) {
    var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
    if (t.styleSheet) t.styleSheet.cssText = l(e, r);
    else {
      var i = document.createTextNode(r),
        a = t.childNodes;
      a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
    }
  }

  function _(t, e, n) {
    var o = n.css,
      r = n.media,
      i = n.sourceMap;
    if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), i && "undefined" !== typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = o;
    else {
      for (; t.firstChild;) t.removeChild(t.firstChild);
      t.appendChild(document.createTextNode(o))
    }
  }
  var d = null,
    f = 0;

  function p(t, e) {
    var n, o, r;
    if (e.singleton) {
      var i = f++;
      n = d || (d = s(e)), o = u.bind(null, n, i, !1), r = u.bind(null, n, i, !0)
    } else n = s(e), o = _.bind(null, n, e), r = function() {
      ! function(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t)
      }(n)
    };
    return o(t),
      function(e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          o(t = e)
        } else r()
      }
  }
  t.exports = function(t, e) {
    (e = e || {}).singleton || "boolean" === typeof e.singleton || (e.singleton = o());
    var n = c(t = t || [], e);
    return function(t) {
      if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
        for (var o = 0; o < n.length; o++) {
          var r = a(n[o]);
          i[r].references--
        }
        for (var s = c(t, e), l = 0; l < n.length; l++) {
          var u = a(n[l]);
          0 === i[u].references && (i[u].updater(), i.splice(u, 1))
        }
        n = s
      }
    }
  }
}, function(t, e) {
  var n = /\{([0-9a-zA-Z_]+)\}/g;
  t.exports = function(t) {
    var e;
    if (2 === arguments.length && "object" === typeof arguments[1]) e = arguments[1];
    else {
      e = new Array(arguments.length - 1);
      for (var o = 1; o < arguments.length; ++o) e[o - 1] = arguments[o]
    }
    e && e.hasOwnProperty || (e = {});
    return t.replace(n, (function(n, o, r) {
      var i;
      return "{" === t[r - 1] && "}" === t[r + n.length] ? o : null === (i = e.hasOwnProperty(o) ? e[o] : null) || void 0 === i ? "" : i
    }))
  }
}, function(t, e, n) {
  var o = n(5),
    r = n(23),
    i = n(11),
    a = Math.max,
    c = Math.min;
  t.exports = function(t, e, n) {
    var s, l, u, _, d, f, p = 0,
      v = !1,
      h = !1,
      m = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");

    function g(e) {
      var n = s,
        o = l;
      return s = l = void 0, p = e, _ = t.apply(o, n)
    }

    function b(t) {
      return p = t, d = setTimeout(w, e), v ? g(t) : _
    }

    function y(t) {
      var n = t - f;
      return void 0 === f || n >= e || n < 0 || h && t - p >= u
    }

    function w() {
      var t = r();
      if (y(t)) return O(t);
      d = setTimeout(w, function(t) {
        var n = e - (t - f);
        return h ? c(n, u - (t - p)) : n
      }(t))
    }

    function O(t) {
      return d = void 0, m && s ? g(t) : (s = l = void 0, _)
    }

    function E() {
      var t = r(),
        n = y(t);
      if (s = arguments, l = this, f = t, n) {
        if (void 0 === d) return b(f);
        if (h) return clearTimeout(d), d = setTimeout(w, e), g(f)
      }
      return void 0 === d && (d = setTimeout(w, e)), _
    }
    return e = i(e) || 0, o(n) && (v = !!n.leading, u = (h = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : u, m = "trailing" in n ? !!n.trailing : m), E.cancel = function() {
      void 0 !== d && clearTimeout(d), p = 0, s = f = l = d = void 0
    }, E.flush = function() {
      return void 0 === d ? _ : O(r())
    }, E
  }
}, function(t, e, n) {
  var o = n(32),
    r = n(33),
    i = n(39),
    a = parseFloat,
    c = Math.min,
    s = Math.random;
  t.exports = function(t, e, n) {
    if (n && "boolean" != typeof n && r(t, e, n) && (e = n = void 0), void 0 === n && ("boolean" == typeof e ? (n = e, e = void 0) : "boolean" == typeof t && (n = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = i(t), void 0 === e ? (e = t, t = 0) : e = i(e)), t > e) {
      var l = t;
      t = e, e = l
    }
    if (n || t % 1 || e % 1) {
      var u = s();
      return c(t + u * (e - t + a("1e-" + ((u + "").length - 1))), e)
    }
    return o(t, e)
  }
}, , function(t, e) {
  window.nector_data = {}, nector.websdk_url = nector.websdk_url || "https://websdk.nector.io", nector.platform_url = nector.platform_url || "https://platform.nector.io"
}, function(t, e, n) {
  var o = n(2),
    r = n(3);

  function i(t, e) {
    for (var n in e) t[n] = e[n];
    return t
  }

  function a(t, e) {
    for (var n in t)
      if ("__source" !== n && !(n in e)) return !0;
    for (var o in e)
      if ("__source" !== o && t[o] !== e[o]) return !0;
    return !1
  }

  function c(t, e) {
    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
  }

  function s(t) {
    this.props = t
  }

  function l(t, e) {
    function n(t) {
      var n = this.props.ref,
        o = n == t.ref;
      return !o && n && (n.call ? n(null) : n.current = null), e ? !e(this.props, t) || !o : a(this.props, t)
    }

    function r(e) {
      return this.shouldComponentUpdate = n, o.createElement(t, e)
    }
    return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
  }(s.prototype = new o.Component).isPureReactComponent = !0, s.prototype.shouldComponentUpdate = function(t, e) {
    return a(this.props, t) || a(this.state, e)
  };
  var u = o.options.__b;
  o.options.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), u && u(t)
  };
  var _ = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

  function d(t) {
    function e(e) {
      var n = i({}, e);
      return delete n.ref, t(n, e.ref || null)
    }
    return e.$$typeof = _, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e
  }
  var f = function(t, e) {
      return null == t ? null : o.toChildArray(o.toChildArray(t).map(e))
    },
    p = {
      map: f,
      forEach: f,
      count: function(t) {
        return t ? o.toChildArray(t).length : 0
      },
      only: function(t) {
        var e = o.toChildArray(t);
        if (1 !== e.length) throw "Children.only";
        return e[0]
      },
      toArray: o.toChildArray
    },
    v = o.options.__e;
  o.options.__e = function(t, e, n, o) {
    if (t.then)
      for (var r, i = e; i = i.__;)
        if ((r = i.__c) && r.__c) return null == e.__e && (e.__e = n.__e, e.__k = n.__k), r.__c(t, e);
    v(t, e, n, o)
  };
  var h = o.options.unmount;

  function m(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(t) {
      "function" == typeof t.__c && t.__c()
    })), t.__c.__H = null), null != (t = i({}, t)).__c && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
      return m(t, e, n)
    }))), t
  }

  function g(t, e, n) {
    return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
      return g(t, e, n)
    })), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t
  }

  function b() {
    this.__u = 0, this.t = null, this.__b = null
  }

  function y(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t)
  }

  function w(t) {
    var e, n, r;

    function i(i) {
      if (e || (e = t()).then((function(t) {
          n = t.default || t
        }), (function(t) {
          r = t
        })), r) throw r;
      if (!n) throw e;
      return o.createElement(n, i)
    }
    return i.displayName = "Lazy", i.__f = !0, i
  }

  function O() {
    this.u = null, this.o = null
  }
  o.options.unmount = function(t) {
    var e = t.__c;
    e && e.__R && e.__R(), e && !0 === t.__h && (t.type = null), h && h(t)
  }, (b.prototype = new o.Component).__c = function(t, e) {
    var n = e.__c,
      o = this;
    null == o.t && (o.t = []), o.t.push(n);
    var r = y(o.__v),
      i = !1,
      a = function() {
        i || (i = !0, n.__R = null, r ? r(c) : c())
      };
    n.__R = a;
    var c = function() {
        if (!--o.__u) {
          if (o.state.__a) {
            var t = o.state.__a;
            o.__v.__k[0] = g(t, t.__c.__P, t.__c.__O)
          }
          var e;
          for (o.setState({
              __a: o.__b = null
            }); e = o.t.pop();) e.forceUpdate()
        }
      },
      s = !0 === e.__h;
    o.__u++ || s || o.setState({
      __a: o.__b = o.__v.__k[0]
    }), t.then(a, a)
  }, b.prototype.componentWillUnmount = function() {
    this.t = []
  }, b.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = m(this.__b, n, r.__O = r.__P)
      }
      this.__b = null
    }
    var i = e.__a && o.createElement(o.Fragment, null, t.fallback);
    return i && (i.__h = null), [o.createElement(o.Fragment, null, e.__a ? null : t.children), i]
  };
  var E = function(t, e, n) {
    if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.o.size))
      for (n = t.u; n;) {
        for (; n.length > 3;) n.pop()();
        if (n[1] < n[0]) break;
        t.u = n = n[2]
      }
  };

  function C(t) {
    return this.getChildContext = function() {
      return t.context
    }, t.children
  }

  function x(t) {
    var e = this,
      n = t.i;
    e.componentWillUnmount = function() {
      o.render(null, e.l), e.l = null, e.i = null
    }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = {
      nodeType: 1,
      parentNode: n,
      childNodes: [],
      appendChild: function(t) {
        this.childNodes.push(t), e.i.appendChild(t)
      },
      insertBefore: function(t, n) {
        this.childNodes.push(t), e.i.appendChild(t)
      },
      removeChild: function(t) {
        this.childNodes.splice(this.childNodes.indexOf(t) >>> 1, 1), e.i.removeChild(t)
      }
    }), o.render(o.createElement(C, {
      context: e.context
    }, t.__v), e.l)) : e.l && e.componentWillUnmount()
  }

  function T(t, e) {
    var n = o.createElement(x, {
      __v: t,
      i: e
    });
    return n.containerInfo = e, n
  }(O.prototype = new o.Component).__a = function(t) {
    var e = this,
      n = y(e.__v),
      o = e.o.get(t);
    return o[0]++,
      function(r) {
        var i = function() {
          e.props.revealOrder ? (o.push(r), E(e, t, o)) : r()
        };
        n ? n(i) : i()
      }
  }, O.prototype.render = function(t) {
    this.u = null, this.o = new Map;
    var e = o.toChildArray(t.children);
    t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
    for (var n = e.length; n--;) this.o.set(e[n], this.u = [1, 0, this.u]);
    return t.children
  }, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function() {
    var t = this;
    this.o.forEach((function(e, n) {
      E(t, n, e)
    }))
  };
  var S = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    k = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    N = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    j = /[A-Z0-9]/g,
    R = "undefined" != typeof document,
    A = function(t) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(t)
    };

  function I(t, e, n) {
    return null == e.__k && (e.textContent = ""), o.render(t, e), "function" == typeof n && n(), t ? t.__c : null
  }

  function L(t, e, n) {
    return o.hydrate(t, e), "function" == typeof n && n(), t ? t.__c : null
  }
  o.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(t) {
    Object.defineProperty(o.Component.prototype, t, {
      configurable: !0,
      get: function() {
        return this["UNSAFE_" + t]
      },
      set: function(e) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          value: e
        })
      }
    })
  }));
  var P = o.options.event;

  function U() {}

  function D() {
    return this.cancelBubble
  }

  function K() {
    return this.defaultPrevented
  }
  o.options.event = function(t) {
    return P && (t = P(t)), t.persist = U, t.isPropagationStopped = D, t.isDefaultPrevented = K, t.nativeEvent = t
  };
  var M, F = {
      configurable: !0,
      get: function() {
        return this.class
      }
    },
    H = o.options.vnode;
  o.options.vnode = function(t) {
    var e = t.type,
      n = t.props,
      r = n;
    if ("string" == typeof e) {
      for (var i in r = {}, n) {
        var a = n[i];
        if (!("value" === i && "defaultValue" in n && null == a || R && "children" === i && "noscript" === e)) {
          var c = i.toLowerCase();
          "defaultValue" === i && "value" in n && null == n.value ? i = "value" : "download" === i && !0 === a ? a = "" : "ondoubleclick" === c ? i = "ondblclick" : "onchange" !== c || "input" !== e && "textarea" !== e || A(n.type) ? "onfocus" === c ? i = "onfocusin" : "onblur" === c ? i = "onfocusout" : N.test(i) ? i = c : -1 === e.indexOf("-") && k.test(i) ? i = i.replace(j, "-$&").toLowerCase() : null === a && (a = void 0) : c = i = "oninput", "oninput" === c && r[i = c] && (i = "oninputCapture"), r[i] = a
        }
      }
      "select" == e && r.multiple && Array.isArray(r.value) && (r.value = o.toChildArray(n.children).forEach((function(t) {
        t.props.selected = -1 != r.value.indexOf(t.props.value)
      }))), "select" == e && null != r.defaultValue && (r.value = o.toChildArray(n.children).forEach((function(t) {
        t.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(t.props.value) : r.defaultValue == t.props.value
      }))), t.props = r, n.class != n.className && (F.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", F))
    }
    t.$$typeof = S, H && H(t)
  };
  var W = o.options.__r;
  o.options.__r = function(t) {
    W && W(t), M = t.__c
  };
  var B = o.options.diffed;
  o.options.diffed = function(t) {
    B && B(t);
    var e = t.props,
      n = t.__e;
    null != n && "textarea" === t.type && "value" in e && e.value !== n.value && (n.value = null == e.value ? "" : e.value), M = null
  };
  var G = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function(t) {
          return M.__n[t.__c].props.value
        }
      }
    }
  };

  function z(t) {
    return o.createElement.bind(null, t)
  }

  function V(t) {
    return !!t && t.$$typeof === S
  }

  function $(t) {
    return V(t) ? o.cloneElement.apply(null, arguments) : t
  }

  function Y(t) {
    return !!t.__k && (o.render(null, t), !0)
  }

  function Z(t) {
    return t && (t.base || 1 === t.nodeType && t) || null
  }
  var X = function(t, e) {
      return t(e)
    },
    q = function(t, e) {
      return t(e)
    },
    J = o.Fragment;

  function Q(t) {
    t()
  }

  function tt(t) {
    return t
  }

  function et() {
    return [!1, Q]
  }
  var nt = r.useLayoutEffect;

  function ot(t, e) {
    var n = e(),
      o = r.useState({
        p: {
          __: n,
          h: e
        }
      }),
      i = o[0].p,
      a = o[1];
    return r.useLayoutEffect((function() {
      i.__ = n, i.h = e, c(i.__, e()) || a({
        p: i
      })
    }), [t, n, e]), r.useEffect((function() {
      return c(i.__, i.h()) || a({
        p: i
      }), t((function() {
        c(i.__, i.h()) || a({
          p: i
        })
      }))
    }), [t]), n
  }
  var rt = {
    useState: r.useState,
    useId: r.useId,
    useReducer: r.useReducer,
    useEffect: r.useEffect,
    useLayoutEffect: r.useLayoutEffect,
    useInsertionEffect: nt,
    useTransition: et,
    useDeferredValue: tt,
    useSyncExternalStore: ot,
    startTransition: Q,
    useRef: r.useRef,
    useImperativeHandle: r.useImperativeHandle,
    useMemo: r.useMemo,
    useCallback: r.useCallback,
    useContext: r.useContext,
    useDebugValue: r.useDebugValue,
    version: "17.0.2",
    Children: p,
    render: I,
    hydrate: L,
    unmountComponentAtNode: Y,
    createPortal: T,
    createElement: o.createElement,
    createContext: o.createContext,
    createFactory: z,
    cloneElement: $,
    createRef: o.createRef,
    Fragment: o.Fragment,
    isValidElement: V,
    findDOMNode: Z,
    Component: o.Component,
    PureComponent: s,
    memo: l,
    forwardRef: d,
    flushSync: q,
    unstable_batchedUpdates: X,
    StrictMode: J,
    Suspense: b,
    SuspenseList: O,
    lazy: w,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: G
  };
  Object.defineProperty(e, "Component", {
    enumerable: !0,
    get: function() {
      return o.Component
    }
  }), Object.defineProperty(e, "Fragment", {
    enumerable: !0,
    get: function() {
      return o.Fragment
    }
  }), Object.defineProperty(e, "createContext", {
    enumerable: !0,
    get: function() {
      return o.createContext
    }
  }), Object.defineProperty(e, "createElement", {
    enumerable: !0,
    get: function() {
      return o.createElement
    }
  }), Object.defineProperty(e, "createRef", {
    enumerable: !0,
    get: function() {
      return o.createRef
    }
  }), e.Children = p, e.PureComponent = s, e.StrictMode = J, e.Suspense = b, e.SuspenseList = O, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, e.cloneElement = $, e.createFactory = z, e.createPortal = T, e.default = rt, e.findDOMNode = Z, e.flushSync = q, e.forwardRef = d, e.hydrate = L, e.isValidElement = V, e.lazy = w, e.memo = l, e.render = I, e.startTransition = Q, e.unmountComponentAtNode = Y, e.unstable_batchedUpdates = X, e.useDeferredValue = tt, e.useInsertionEffect = nt, e.useSyncExternalStore = ot, e.useTransition = et, e.version = "17.0.2", Object.keys(r).forEach((function(t) {
    "default" === t || e.hasOwnProperty(t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function() {
        return r[t]
      }
    })
  }))
}, function(t, e, n) {
  "use strict";
  n.r(e), n.d(e, "__extends", (function() {
    return r
  })), n.d(e, "__assign", (function() {
    return i
  })), n.d(e, "__rest", (function() {
    return a
  })), n.d(e, "__decorate", (function() {
    return c
  })), n.d(e, "__param", (function() {
    return s
  })), n.d(e, "__esDecorate", (function() {
    return l
  })), n.d(e, "__runInitializers", (function() {
    return u
  })), n.d(e, "__propKey", (function() {
    return _
  })), n.d(e, "__setFunctionName", (function() {
    return d
  })), n.d(e, "__metadata", (function() {
    return f
  })), n.d(e, "__awaiter", (function() {
    return p
  })), n.d(e, "__generator", (function() {
    return v
  })), n.d(e, "__createBinding", (function() {
    return h
  })), n.d(e, "__exportStar", (function() {
    return m
  })), n.d(e, "__values", (function() {
    return g
  })), n.d(e, "__read", (function() {
    return b
  })), n.d(e, "__spread", (function() {
    return y
  })), n.d(e, "__spreadArrays", (function() {
    return w
  })), n.d(e, "__spreadArray", (function() {
    return O
  })), n.d(e, "__await", (function() {
    return E
  })), n.d(e, "__asyncGenerator", (function() {
    return C
  })), n.d(e, "__asyncDelegator", (function() {
    return x
  })), n.d(e, "__asyncValues", (function() {
    return T
  })), n.d(e, "__makeTemplateObject", (function() {
    return S
  })), n.d(e, "__importStar", (function() {
    return j
  })), n.d(e, "__importDefault", (function() {
    return R
  })), n.d(e, "__classPrivateFieldGet", (function() {
    return A
  })), n.d(e, "__classPrivateFieldSet", (function() {
    return I
  })), n.d(e, "__classPrivateFieldIn", (function() {
    return L
  })), n.d(e, "__addDisposableResource", (function() {
    return P
  })), n.d(e, "__disposeResources", (function() {
    return D
  })), n.d(e, "__rewriteRelativeImportExtension", (function() {
    return K
  }));
  var o = function(t, e) {
    return o = Object.setPrototypeOf || {
      __proto__: []
    }
    instanceof Array && function(t, e) {
      t.__proto__ = e
    } || function(t, e) {
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
    }, o(t, e)
  };

  function r(t, e) {
    if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function n() {
      this.constructor = t
    }
    o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  }
  var i = function() {
    return i = Object.assign || function(t) {
      for (var e, n = 1, o = arguments.length; n < o; n++)
        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t
    }, i.apply(this, arguments)
  };

  function a(t, e) {
    var n = {};
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (o = Object.getOwnPropertySymbols(t); r < o.length; r++) e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]])
    }
    return n
  }

  function c(t, e, n, o) {
    var r, i = arguments.length,
      a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
    if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
    else
      for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
    return i > 3 && a && Object.defineProperty(e, n, a), a
  }

  function s(t, e) {
    return function(n, o) {
      e(n, o, t)
    }
  }

  function l(t, e, n, o, r, i) {
    function a(t) {
      if (void 0 !== t && "function" !== typeof t) throw new TypeError("Function expected");
      return t
    }
    for (var c, s = o.kind, l = "getter" === s ? "get" : "setter" === s ? "set" : "value", u = !e && t ? o.static ? t : t.prototype : null, _ = e || (u ? Object.getOwnPropertyDescriptor(u, o.name) : {}), d = !1, f = n.length - 1; f >= 0; f--) {
      var p = {};
      for (var v in o) p[v] = "access" === v ? {} : o[v];
      for (var v in o.access) p.access[v] = o.access[v];
      p.addInitializer = function(t) {
        if (d) throw new TypeError("Cannot add initializers after decoration has completed");
        i.push(a(t || null))
      };
      var h = (0, n[f])("accessor" === s ? {
        get: _.get,
        set: _.set
      } : _[l], p);
      if ("accessor" === s) {
        if (void 0 === h) continue;
        if (null === h || "object" !== typeof h) throw new TypeError("Object expected");
        (c = a(h.get)) && (_.get = c), (c = a(h.set)) && (_.set = c), (c = a(h.init)) && r.unshift(c)
      } else(c = a(h)) && ("field" === s ? r.unshift(c) : _[l] = c)
    }
    u && Object.defineProperty(u, o.name, _), d = !0
  }

  function u(t, e, n) {
    for (var o = arguments.length > 2, r = 0; r < e.length; r++) n = o ? e[r].call(t, n) : e[r].call(t);
    return o ? n : void 0
  }

  function _(t) {
    return "symbol" === typeof t ? t : "".concat(t)
  }

  function d(t, e, n) {
    return "symbol" === typeof e && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", {
      configurable: !0,
      value: n ? "".concat(n, " ", e) : e
    })
  }

  function f(t, e) {
    if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(t, e)
  }

  function p(t, e, n, o) {
    return new(n || (n = Promise))((function(r, i) {
      function a(t) {
        try {
          s(o.next(t))
        } catch (e) {
          i(e)
        }
      }

      function c(t) {
        try {
          s(o.throw(t))
        } catch (e) {
          i(e)
        }
      }

      function s(t) {
        var e;
        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
          t(e)
        }))).then(a, c)
      }
      s((o = o.apply(t, e || [])).next())
    }))
  }

  function v(t, e) {
    var n, o, r, i = {
        label: 0,
        sent: function() {
          if (1 & r[0]) throw r[1];
          return r[1]
        },
        trys: [],
        ops: []
      },
      a = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
    return a.next = c(0), a.throw = c(1), a.return = c(2), "function" === typeof Symbol && (a[Symbol.iterator] = function() {
      return this
    }), a;

    function c(c) {
      return function(s) {
        return function(c) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; a && (a = 0, c[0] && (i = 0)), i;) try {
            if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
            switch (o = 0, r && (c = [2 & c[0], r.value]), c[0]) {
              case 0:
              case 1:
                r = c;
                break;
              case 4:
                return i.label++, {
                  value: c[1],
                  done: !1
                };
              case 5:
                i.label++, o = c[1], c = [0];
                continue;
              case 7:
                c = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                  i = 0;
                  continue
                }
                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                  i.label = c[1];
                  break
                }
                if (6 === c[0] && i.label < r[1]) {
                  i.label = r[1], r = c;
                  break
                }
                if (r && i.label < r[2]) {
                  i.label = r[2], i.ops.push(c);
                  break
                }
                r[2] && i.ops.pop(), i.trys.pop();
                continue
            }
            c = e.call(t, i)
          } catch (s) {
            c = [6, s], o = 0
          } finally {
            n = r = 0
          }
          if (5 & c[0]) throw c[1];
          return {
            value: c[0] ? c[1] : void 0,
            done: !0
          }
        }([c, s])
      }
    }
  }
  var h = Object.create ? function(t, e, n, o) {
    void 0 === o && (o = n);
    var r = Object.getOwnPropertyDescriptor(e, n);
    r && !("get" in r ? !e.__esModule : r.writable || r.configurable) || (r = {
      enumerable: !0,
      get: function() {
        return e[n]
      }
    }), Object.defineProperty(t, o, r)
  } : function(t, e, n, o) {
    void 0 === o && (o = n), t[o] = e[n]
  };

  function m(t, e) {
    for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || h(e, t, n)
  }

  function g(t) {
    var e = "function" === typeof Symbol && Symbol.iterator,
      n = e && t[e],
      o = 0;
    if (n) return n.call(t);
    if (t && "number" === typeof t.length) return {
      next: function() {
        return t && o >= t.length && (t = void 0), {
          value: t && t[o++],
          done: !t
        }
      }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }

  function b(t, e) {
    var n = "function" === typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var o, r, i = n.call(t),
      a = [];
    try {
      for (;
        (void 0 === e || e-- > 0) && !(o = i.next()).done;) a.push(o.value)
    } catch (c) {
      r = {
        error: c
      }
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i)
      } finally {
        if (r) throw r.error
      }
    }
    return a
  }

  function y() {
    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(b(arguments[e]));
    return t
  }

  function w() {
    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
    var o = Array(t),
      r = 0;
    for (e = 0; e < n; e++)
      for (var i = arguments[e], a = 0, c = i.length; a < c; a++, r++) o[r] = i[a];
    return o
  }

  function O(t, e, n) {
    if (n || 2 === arguments.length)
      for (var o, r = 0, i = e.length; r < i; r++) !o && r in e || (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return t.concat(o || Array.prototype.slice.call(e))
  }

  function E(t) {
    return this instanceof E ? (this.v = t, this) : new E(t)
  }

  function C(t, e, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var o, r = n.apply(t, e || []),
      i = [];
    return o = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", (function(t) {
      return function(e) {
        return Promise.resolve(e).then(t, l)
      }
    })), o[Symbol.asyncIterator] = function() {
      return this
    }, o;

    function a(t, e) {
      r[t] && (o[t] = function(e) {
        return new Promise((function(n, o) {
          i.push([t, e, n, o]) > 1 || c(t, e)
        }))
      }, e && (o[t] = e(o[t])))
    }

    function c(t, e) {
      try {
        (n = r[t](e)).value instanceof E ? Promise.resolve(n.value.v).then(s, l) : u(i[0][2], n)
      } catch (o) {
        u(i[0][3], o)
      }
      var n
    }

    function s(t) {
      c("next", t)
    }

    function l(t) {
      c("throw", t)
    }

    function u(t, e) {
      t(e), i.shift(), i.length && c(i[0][0], i[0][1])
    }
  }

  function x(t) {
    var e, n;
    return e = {}, o("next"), o("throw", (function(t) {
      throw t
    })), o("return"), e[Symbol.iterator] = function() {
      return this
    }, e;

    function o(o, r) {
      e[o] = t[o] ? function(e) {
        return (n = !n) ? {
          value: E(t[o](e)),
          done: !1
        } : r ? r(e) : e
      } : r
    }
  }

  function T(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e, n = t[Symbol.asyncIterator];
    return n ? n.call(t) : (t = g(t), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function() {
      return this
    }, e);

    function o(n) {
      e[n] = t[n] && function(e) {
        return new Promise((function(o, r) {
          (function(t, e, n, o) {
            Promise.resolve(o).then((function(e) {
              t({
                value: e,
                done: n
              })
            }), e)
          })(o, r, (e = t[n](e)).done, e.value)
        }))
      }
    }
  }

  function S(t, e) {
    return Object.defineProperty ? Object.defineProperty(t, "raw", {
      value: e
    }) : t.raw = e, t
  }
  var k = Object.create ? function(t, e) {
      Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
      })
    } : function(t, e) {
      t.default = e
    },
    N = function(t) {
      return N = Object.getOwnPropertyNames || function(t) {
        var e = [];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[e.length] = n);
        return e
      }, N(t)
    };

  function j(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var n = N(t), o = 0; o < n.length; o++) "default" !== n[o] && h(e, t, n[o]);
    return k(e, t), e
  }

  function R(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function A(t, e, n, o) {
    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
    if ("function" === typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === n ? o : "a" === n ? o.call(t) : o ? o.value : e.get(t)
  }

  function I(t, e, n, o, r) {
    if ("m" === o) throw new TypeError("Private method is not writable");
    if ("a" === o && !r) throw new TypeError("Private accessor was defined without a setter");
    if ("function" === typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === o ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
  }

  function L(t, e) {
    if (null === e || "object" !== typeof e && "function" !== typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
    return "function" === typeof t ? e === t : t.has(e)
  }

  function P(t, e, n) {
    if (null !== e && void 0 !== e) {
      if ("object" !== typeof e && "function" !== typeof e) throw new TypeError("Object expected.");
      var o, r;
      if (n) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        o = e[Symbol.asyncDispose]
      }
      if (void 0 === o) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        o = e[Symbol.dispose], n && (r = o)
      }
      if ("function" !== typeof o) throw new TypeError("Object not disposable.");
      r && (o = function() {
        try {
          r.call(this)
        } catch (t) {
          return Promise.reject(t)
        }
      }), t.stack.push({
        value: e,
        dispose: o,
        async: n
      })
    } else n && t.stack.push({
      async: !0
    });
    return e
  }
  var U = "function" === typeof SuppressedError ? SuppressedError : function(t, e, n) {
    var o = new Error(n);
    return o.name = "SuppressedError", o.error = t, o.suppressed = e, o
  };

  function D(t) {
    function e(e) {
      t.error = t.hasError ? new U(e, t.error, "An error was suppressed during disposal.") : e, t.hasError = !0
    }
    var n, o = 0;
    return function r() {
      for (; n = t.stack.pop();) try {
        if (!n.async && 1 === o) return o = 0, t.stack.push(n), Promise.resolve().then(r);
        if (n.dispose) {
          var i = n.dispose.call(n.value);
          if (n.async) return o |= 2, Promise.resolve(i).then(r, (function(t) {
            return e(t), r()
          }))
        } else o |= 1
      } catch (a) {
        e(a)
      }
      if (1 === o) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
      if (t.hasError) throw t.error
    }()
  }

  function K(t, e) {
    return "string" === typeof t && /^\.\.?\//.test(t) ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(t, n, o, r, i) {
      return n ? e ? ".jsx" : ".js" : !o || r && i ? o + r + "." + i.toLowerCase() + "js" : t
    })) : t
  }
  e.default = {
    __extends: r,
    __assign: i,
    __rest: a,
    __decorate: c,
    __param: s,
    __esDecorate: l,
    __runInitializers: u,
    __propKey: _,
    __setFunctionName: d,
    __metadata: f,
    __awaiter: p,
    __generator: v,
    __createBinding: h,
    __exportStar: m,
    __values: g,
    __read: b,
    __spread: y,
    __spreadArrays: w,
    __spreadArray: O,
    __await: E,
    __asyncGenerator: C,
    __asyncDelegator: x,
    __asyncValues: T,
    __makeTemplateObject: S,
    __importStar: j,
    __importDefault: R,
    __classPrivateFieldGet: A,
    __classPrivateFieldSet: I,
    __classPrivateFieldIn: L,
    __addDisposableResource: P,
    __disposeResources: D,
    __rewriteRelativeImportExtension: K
  }
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = n(0);
  e.default = function(t, e) {
    o.useEffect((function() {
      return t && t(),
        function() {
          e && e()
        }
    }), [])
  }
}, function(t, e, n) {
  var o = n(10);
  t.exports = function() {
    return o.Date.now()
  }
}, function(t, e, n) {
  (function(e) {
    var n = "object" == typeof e && e && e.Object === Object && e;
    t.exports = n
  }).call(this, n(25))
}, function(t, e) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (o) {
    "object" === typeof window && (n = window)
  }
  t.exports = n
}, function(t, e, n) {
  var o = n(27),
    r = /^\s+/;
  t.exports = function(t) {
    return t ? t.slice(0, o(t) + 1).replace(r, "") : t
  }
}, function(t, e) {
  var n = /\s/;
  t.exports = function(t) {
    for (var e = t.length; e-- && n.test(t.charAt(e)););
    return e
  }
}, function(t, e, n) {
  var o = n(12),
    r = n(31);
  t.exports = function(t) {
    return "symbol" == typeof t || r(t) && "[object Symbol]" == o(t)
  }
}, function(t, e, n) {
  var o = n(13),
    r = Object.prototype,
    i = r.hasOwnProperty,
    a = r.toString,
    c = o ? o.toStringTag : void 0;
  t.exports = function(t) {
    var e = i.call(t, c),
      n = t[c];
    try {
      t[c] = void 0;
      var o = !0
    } catch (s) {}
    var r = a.call(t);
    return o && (e ? t[c] = n : delete t[c]), r
  }
}, function(t, e) {
  var n = Object.prototype.toString;
  t.exports = function(t) {
    return n.call(t)
  }
}, function(t, e) {
  t.exports = function(t) {
    return null != t && "object" == typeof t
  }
}, function(t, e) {
  var n = Math.floor,
    o = Math.random;
  t.exports = function(t, e) {
    return t + n(o() * (e - t + 1))
  }
}, function(t, e, n) {
  var o = n(34),
    r = n(35),
    i = n(38),
    a = n(5);
  t.exports = function(t, e, n) {
    if (!a(n)) return !1;
    var c = typeof e;
    return !!("number" == c ? r(n) && i(e, n.length) : "string" == c && e in n) && o(n[e], t)
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return t === e || t !== t && e !== e
  }
}, function(t, e, n) {
  var o = n(36),
    r = n(37);
  t.exports = function(t) {
    return null != t && r(t.length) && !o(t)
  }
}, function(t, e, n) {
  var o = n(12),
    r = n(5);
  t.exports = function(t) {
    if (!r(t)) return !1;
    var e = o(t);
    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
  }
}, function(t, e) {
  t.exports = function(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
  }
}, function(t, e) {
  var n = /^(?:0|[1-9]\d*)$/;
  t.exports = function(t, e) {
    var o = typeof t;
    return !!(e = null == e ? 9007199254740991 : e) && ("number" == o || "symbol" != o && n.test(t)) && t > -1 && t % 1 == 0 && t < e
  }
}, function(t, e, n) {
  var o = n(11),
    r = 1 / 0;
  t.exports = function(t) {
    return t ? (t = o(t)) === r || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t === t ? t : 0 : 0 === t ? t : 0
  }
}, function(t, e, n) {
  var o = n(14),
    r = n(41);
  "string" === typeof(r = r.__esModule ? r.default : r) && (r = [
    [t.i, r, ""]
  ]);
  var i = {
    insert: "head",
    singleton: !1
  };
  o(r, i);
  t.exports = r.locals || {}
}, function(t, e, n) {
  "use strict";
  n.r(e);
  var o = n(7),
    r = n.n(o)()(!1);
  r.push([t.i, "/* Resets */\n.nector-websdk-widget button {\n\tall: unset;\n\tcursor: pointer;\n\tbox-sizing: border-box;\n}\n\n.nector-websdk-widget *,\n.nector-reset * {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n.nector-websdk-widget * {\n\tfont-family: 'Poppins', sans-serif !important;\n}\n\n.nector-websdk-widget {\n\tfont-family: 'Poppins', sans-serif !important;\n\tfont-size: 16px;\n\tfont-weight: normal;\n}\n\n.nector-websdk-widget p {\n\tfont-family: 'Poppins', sans-serif !important;\n\n\tmargin: 0;\n\tpadding: 0;\n\tline-height: normal;\n\tfont-size: 16px;\n\tfont-weight: normal;\n\tcolor: black;\n\tfont-style: normal;\n\tbackground-color: transparent;\n\tdisplay: block;\n\tletter-spacing: normal;\n\tposition: static;\n\tvisibility: visible;\n\tword-wrap: break-word;\n}\n\n.nector-websdk-widget div {\n\tfont-family: 'Poppins', sans-serif !important;\n\n\tborder: none;\n\tbox-shadow: none;\n\tdisplay: block;\n\tpadding: 0px;\n\tmargin: 0px;\n\tborder-radius: 0px;\n\tbackground: none;\n\tline-height: normal;\n\tfont-size: 16px;\n\tfont-weight: normal;\n\tcolor: black;\n\tfont-style: normal;\n\tposition: static;\n\tvisibility: visible;\n}\n\n/* CSS Properties */\n:root {\n\t--nector-primary-color: #000000;\n\n\t--nector-desktop-btn-container-bottom: 70px;\n\t--nector-desktop-btn-container-right: unset;\n\t--nector-desktop-btn-container-left: 0px;\n\n\t--nector-mobile-btn-container-bottom: 70px;\n\t--nector-mobile-btn-container-right: unset;\n\t--nector-mobile-btn-container-left: 0px;\n}\n\n/* Utilities */\n.nector-websdk-widget .nector-center,\n.nector-container .nector-center {\n\tdisplay: flex !important;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.nector-websdk-widget .nector-title,\n.nector-container .nector-title {\n\tfont-weight: 700;\n\tfont-size: 24px !important;\n}\n\n.nector-websdk-widget .nector-subtitle,\n.nector-container .nector-subtitle {\n\tfont-weight: 700;\n\tfont-size: 20px !important;\n\tcolor: rgba(0, 0, 0, 0.90);\n}\n\n.nector-websdk-widget .nector-sm-subtitle,\n.nector-container .nector-sm-subtitle {\n\tfont-weight: 600;\n\tfont-size: 18px !important;\n\tcolor: rgba(0, 0, 0, 0.90);\n}\n\n.nector-websdk-widget .nector-text,\n.nector-container .nector-text {\n\tfont-weight: 400;\n\tfont-size: 16px !important;\n\tcolor: rgba(0, 0, 0, 0.80);\n}\n\n.nector-websdk-widget .nector-pretext,\n.nector-container .nector-pretext {\n\tfont-weight: 400;\n\tfont-size: 13.5px !important;\n\tcolor: rgba(0, 0, 0, 0.70);\n}\n\n.nector-websdk-widget .nector-subtext,\n.nector-container .nector-subtext {\n\tfont-weight: 400;\n\tfont-size: 12px !important;\n\tcolor: rgba(0, 0, 0, 0.55);\n}\n\n.nector-websdk-widget .nector-lighttext,\n.nector-container .nector-lighttext {\n\tfont-weight: 400;\n\tfont-size: 9.5px !important;\n\tcolor: rgba(0, 0, 0, 0.40);\n}\n\n.nector-websdk-widget .text-muted,\n.nector-container .text-muted {\n\tcolor: #6c757d;\n}\n\n.nector-websdk-widget .nector-defaulttext,\n.nector-container .nector-defaulttext {}\n\n.nector-websdk-widget .nector-inline-svg {\n\tdisplay: inline !important;\n}\n\n.nector-websdk-widget .nector-rewards-widget-container {\n\tposition: fixed;\n\tz-index: 2147483640;\n\tbottom: var(--nector-desktop-btn-container-bottom);\n\tleft: var(--nector-desktop-btn-container-left);\n\tright: var(--nector-desktop-btn-container-right);\n}\n\n.nector-websdk-widget .nector-btn-container {\n\tdisplay: inline-flex;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tbox-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;\n}\n\n.nector-websdk-widget .nector-btn {\n\tcursor: pointer;\n\ttransition: all 0.5s;\n\toverflow: hidden;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tpadding: 5px;\n}\n\n.nector-shimmer-animation {\n\tdisplay: inline-block;\n\t-webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;\n\t        mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;\n\tbackground-repeat: no-repeat;\n\tanimation: nector-shimmer-keyframe 2.5s 5;\n\tmax-width: -moz-fit-content;\n\tmax-width: fit-content;\n}\n\n.nector-waggle-animation {\n\tanimation: nector-waggle-keyframe 1s 3s forwards ease-out;\n}\n\n.nector-mobile-minimized {\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n}\n\n.nector-mobile-minimized>.nector-btn-container>.nector-btn {\n\tpadding: 0;\n}\n\n.nector-websdk-widget .nector-generic-button {\n\tpadding: 12px 16px;\n\ttext-align: center;\n\tfont-size: 14px;\n}\n\n.nector-websdk-widget .nector-btn-icon {\n\tmin-width: 30px;\n\theight: 25px;\n\tcolor: var(--nector-primary-color);\n\tfill: none !important;\n}\n\n.nector-websdk-widget .nector-mobile-minimized .nector-btn-icon {\n\tmin-width: 25px;\n\theight: 20px;\n\tfill: none !important;\n}\n\n.nector-websdk-widget .nector-iframe-container {\n\tz-index: 2147483645;\n\tposition: fixed;\n\twidth: 375px;\n\theight: 75vh;\n\tmax-height: 600px;\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\n\tborder-radius: 10px;\n\toverflow: hidden;\n\tanimation-name: nector-fadein-keyframe;\n\tanimation-duration: 0.1s;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tbox-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);\n\t-webkit-box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);\n\t-moz-box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);\n}\n\n.nector-websdk-widget .nector-iframe-container .nector-close-btn-container {\n\tpadding: 8px 12px;\n\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n\n.nector-websdk-widget .nector-iframe-container .nector-close-btn-container>.nector-btn-icon {\n\tmin-width: 22px;\n\theight: 22px;\n\tcolor: #000;\n\tcursor: pointer;\n\ttransition: all 0.3s;\n\tborder-radius: 3px;\n\tfill: none !important;\n}\n\n.nector-websdk-widget .nector-iframe-container .nector-iframe-loader-container {\n\tbackground-color: white;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tleft: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.nector-websdk-widget .nector-iframe-container .nector-powered-by-text {\n\tposition: sticky;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tpadding: 5px 10px;\n\ttext-align: center;\n\tborder-top: 1px solid #e2e2e2;\n\tbackground-color: white;\n}\n\n.nector-websdk-widget .nector-iframe-container .nector-powered-by-text p,\n.nector-websdk-widget .nector-iframe-container .nector-powered-by-text a {\n\tcolor: black !important;\n}\n\n.nector-websdk-widget .nector-message-container {\n\tposition: fixed;\n\tborder: 1px solid #ddd;\n\tbox-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.05);\n\tborder-radius: 5px;\n\tfont-size: 12px;\n\tletter-spacing: 0.3px;\n\tline-height: 1.4;\n\n\tmax-width: 175px;\n\twidth: max-content;\n\tbackground-color: white;\n}\n\n.nector-lead-profile-container {\n\tpadding: 10px 0px;\n}\n\n.nector-lead-profile-container .available-coins-text {\n\tmargin-top: 20px;\n}\n\n.nector-lead-profile-container .nector-action-btns-container {\n\tdisplay: flex;\n\tgrid-gap: 15px;\n\tgap: 15px;\n\tmargin-top: 15px;\n}\n\n.nector-lead-profile-container .nector-action-btn {\n\tcursor: pointer;\n\ttext-decoration: underline;\n}\n\n/* Button animation */\n.nector-websdk-widget .nector-shockwave-animation {\n\tanimation: NectorshockwaveJump 1s ease-out 5;\n}\n\n.nector-lead-header-coin-name {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttransition: all .2s ease-out;\n}\n\n.nector-lead-header-coin-name:hover {\n\ttransform: scale(1.15);\n}\n\n@keyframes NectorshockwaveJump {\n\t0% {\n\t\ttransform: scale(1);\n\t}\n\n\t40% {\n\t\ttransform: scale(1.04);\n\t}\n\n\t50% {\n\t\ttransform: scale(0.98);\n\t}\n\n\t55% {\n\t\ttransform: scale(1);\n\t}\n\n\t60% {\n\t\ttransform: scale(0.98);\n\t}\n\n\t100% {\n\t\ttransform: scale(1);\n\t}\n}\n\n/* Mobile Styles */\n@media (max-width: 575px) {\n\t.nector-websdk-widget .nector-rewards-widget-container {\n\t\tbottom: var(--nector-mobile-btn-container-bottom);\n\t\tleft: var(--nector-mobile-btn-container-left);\n\t\tright: var(--nector-mobile-btn-container-right);\n\t}\n\n\t.nector-websdk-widget .nector-iframe-container {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tmax-height: unset;\n\t\tborder: 0px solid rgba(0, 0, 0, 0.1);\n\t\tborder-radius: 0px;\n\t\toverflow: hidden;\n\t\tanimation-name: nector-fadein-keyframe;\n\t\tanimation-duration: 0.1s;\n\n\t\tbox-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);\n\t\t-webkit-box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);\n\t\t-moz-box-shadow: 10px 10px 35px -19px rgba(0, 0, 0, 0.54);\n\t}\n\n\t.nector-websdk-widget .nector-iframe-overlay {\n\t\tdisplay: none;\n\t}\n\n\t/* Messages Container. Relative to the btn-container */\n\t.nector-websdk-widget .nector-message-container {\n\t\tmax-width: 175px;\n\t}\n}\n\n@keyframes nector-fadein-keyframe {\n\tfrom {\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes nector-shimmer-keyframe {\n\t100% {\n\t\t-webkit-mask-position: left;\n\t}\n}\n\n@keyframes nector-waggle-keyframe {\n\t0% {\n\t\ttransform: none;\n\t}\n\n\t50% {\n\t\ttransform: rotateZ(-20deg) scale(1.2);\n\t}\n\n\t60% {\n\t\ttransform: rotateZ(25deg) scale(1.2);\n\t}\n\n\t67.5% {\n\t\ttransform: rotateZ(-15deg) scale(1.2);\n\t}\n\n\t75% {\n\t\ttransform: rotateZ(15deg) scale(1.2);\n\t}\n\n\t82.5% {\n\t\ttransform: rotateZ(-12deg) scale(1.2);\n\t}\n\n\t85% {\n\t\ttransform: rotateZ(0) scale(1.2);\n\t}\n\n\t100% {\n\t\ttransform: none;\n\t}\n}\n\n.nector-animate {\n\tanimation: nector-horizontal-shaking 4s ease infinite;\n\tanimation-delay: 5s;\n\ttransform-origin: 50% 50%;\n}\n\n@keyframes nector-horizontal-shaking {\n\n\t0%,\n\t18%,\n\t100% {\n\t\ttransform: translateZ(0);\n\t}\n\n\t1%,\n\t6%,\n\t10%,\n\t14% {\n\t\ttransform: translate3d(-5px, 0, 0);\n\t}\n\n\t4%,\n\t8%,\n\t12%,\n\t16% {\n\t\ttransform: translate3d(5px, 0, 0);\n\t}\n}\n\n.nector-widget-scroll-hidden-right {\n\tanimation: nector-slide-out-right 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;\n}\n\n.nector-widget-scroll-hidden-left {\n\tanimation: nector-slide-out-left 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;\n}\n\n.nector-websdk-widget .nector-rewards-widget-container.nector-widget-slide-in-right {\n\tanimation: nector-slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.nector-websdk-widget .nector-rewards-widget-container.nector-widget-slide-in-left {\n\tanimation: nector-slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n@keyframes nector-slide-out-right {\n\t0% {\n\t\ttransform: translateX(0);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\ttransform: translateX(100%);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes nector-slide-out-left {\n\t0% {\n\t\ttransform: translateX(0);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\ttransform: translateX(-100%);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes nector-slide-in-right {\n\t0% {\n\t\ttransform: translateX(100%);\n\t\topacity: 0;\n\t}\n\n\t100% {\n\t\ttransform: translateX(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes nector-slide-in-left {\n\t0% {\n\t\ttransform: translateX(-100%);\n\t\topacity: 0;\n\t}\n\n\t100% {\n\t\ttransform: translateX(0);\n\t\topacity: 1;\n\t}\n}", ""]), e.default = r
}, function(t, e, n) {
  var o = n(14),
    r = n(43);
  "string" === typeof(r = r.__esModule ? r.default : r) && (r = [
    [t.i, r, ""]
  ]);
  var i = {
    insert: "head",
    singleton: !1
  };
  o(r, i);
  t.exports = r.locals || {}
}, function(t, e, n) {
  "use strict";
  n.r(e);
  var o = n(7),
    r = n.n(o)()(!1);
  r.push([t.i, ".nector-websdk-widget .nector-popup-container {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\twidth: 100%;\n\tz-index: 2147483646;\n\tbackground: #000000e1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 10px;\n}\n\n.nector-popup-content {\n\theight: 550px;\n\twidth: 600px;\n\n\tiframe {\n\t\twidth: 100% !important;\n\t\theight: 100% !important;\n\t}\n}\n\n.nector-websdk-widget .nector-popup-content {\n\tposition: relative;\n\tbackground-color: #fff;\n}\n\n.nector-websdk-widget .nector-popup-content .nector-popup-iframe-loader {\n\tbackground-color: white;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tleft: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.nector-websdk-widget .nector-popup-close-icon {\n\tcolor: #000;\n\tposition: absolute;\n\ttop: 15px;\n\tright: 15px;\n\ttransform: scale(1.5);\n\tcursor: pointer;\n}\n\n.nector-websdk-widget .nector-popup-close-icon-referral {\n\tcolor: #000;\n\tposition: absolute;\n\ttop: 10px;\n\tright: 10px;\n\tcursor: pointer;\n\tz-index: 11;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 32px;\n\theight: 32px;\n\tborder-radius: 50%;\n\tbackground: rgba(0, 0, 0, 0.06);\n}\n\n.nector-websdk-widget .nector-popup-close-icon-referral svg {\n\ttransform: scale(1.5);\n}\n\n.nector-websdk-widget .nector-popup-content {\n\toverflow: visible;\n\twidth: 450px;\n\theight: 440px;\n\tmax-width: calc(100vw - 40px);\n\tborder-radius: 8px;\n}\n\n.nector-websdk-widget .nector-popup-content iframe {\n\tmargin-top: 35px;\n\theight: calc(100% - 35px) !important;\n\tborder-radius: 0 0 8px 8px;\n}\n\n.nector-websdk-widget .nector-popup-content .nector-popup-iframe-loader {\n\tborder-radius: 8px;\n}\n\n@media (max-width: 640px) {\n\t.nector-websdk-widget .nector-popup-content {\n\t\twidth: 92vw;\n\t\tmax-width: 520px;\n\t\theight: 450px;\n\t}\n}\n\n@media (max-width: 480px) {\n\t.nector-websdk-widget .nector-popup-content {\n\t\twidth: 92vw;\n\t\tmax-width: 440px;\n\t\theight: 460px;\n\t}\n\n}\n\n@media (max-width: 360px) {\n\t.nector-websdk-widget .nector-popup-content {\n\t\twidth: 95vw;\n\t\theight: 460px;\n\t}\n}", ""]), e.default = r
}, function(t, e, n) {
  "use strict";
  n.r(e);
  var o = {};
  n.r(o), n.d(o, "CSS_PROPERTIES", (function() {
    return _
  })), n.d(o, "WIDGET_CONFIG_LOCALSTORAGE_KEY", (function() {
    return d
  })), n.d(o, "ENTITY_ID_LOCALSTORAGE_KEY", (function() {
    return f
  })), n.d(o, "NECTOR_FONT_NAME_LOCALSTORAGE_KEY", (function() {
    return p
  })), n.d(o, "NECTOR_FONT_URL_LOCALSTORAGE_KEY", (function() {
    return v
  })), n.d(o, "NECTOR_KWIKPASS_AUTOLOGIN_BLOCKED_UNTIL", (function() {
    return h
  })), n.d(o, "NECTOR_SHIPROCKET_AUTOLOGIN_BLOCKED_UNTIL", (function() {
    return m
  })), n.d(o, "NECTOR_SHOPFLO_AUTOLOGIN_BLOCKED_UNTIL", (function() {
    return g
  })), n.d(o, "NECTOR_NITRO_AUTOLOGIN_BLOCKED_UNTIL", (function() {
    return b
  })), n.d(o, "NECTOR_SWIFTCHECKOUT_CUSTOMER_ID_CACHE", (function() {
    return y
  })), n.d(o, "SWIFTCHECKOUT_CUSTOMER_ID", (function() {
    return w
  })), n.d(o, "NECTOR_KWIKPASS_CUSTOMER_ID_CACHE", (function() {
    return O
  })), n.d(o, "NECTOR_EVENT_PREFIX", (function() {
    return E
  })), n.d(o, "NECTOR_EVENT_LOCK_SESSIONSTORAGE_KEY", (function() {
    return C
  })), n.d(o, "NECTOR_SHOW_REWARDS_HASH_KEY", (function() {
    return x
  })), n.d(o, "NECTOR_HIDE_REWARDS_HASH_KEY", (function() {
    return T
  })), n.d(o, "WINDOW_MESSAGE_EVENTS", (function() {
    return S
  })), n.d(o, "CUSTOM_DOM_EVENTS", (function() {
    return k
  })), n.d(o, "DEFAULT_APPCONFIG", (function() {
    return N
  })), n.d(o, "SUPPORTED_APPS", (function() {
    return j
  })), n.d(o, "SWIFTCHECKOUT_CLIENT_ID", (function() {
    return R
  })), n.d(o, "SUPPORTED_SWIFTCHECKOUT_CUSTOM_LOGIN_ENTITIES", (function() {
    return A
  })), n.d(o, "SWIFTCHECKOUT_STOREID_MAP", (function() {
    return I
  })), n.d(o, "CUSTOM_LOGIC_EXECUTION_MAP", (function() {
    return L
  })), n.d(o, "COLLECTFRONT_EVENTS", (function() {
    return P
  })), n.d(o, "SRC_CLASSIFICATION_MAP", (function() {
    return U
  })), n.d(o, "LANGUAGE_TRANSLATION_MAP", (function() {
    return D
  }));
  var r = {};
  n.r(r), n.d(r, "DEFAULT_WIDGET_POSITION", (function() {
    return K
  })), n.d(r, "DEFAULT_WIDGET_HEIGHT", (function() {
    return M
  })), n.d(r, "DEFAULT_Z_INDEX", (function() {
    return F
  })), n.d(r, "API_HEADER", (function() {
    return H
  }));
  n(19);
  var i = n(0),
    a = n(6);
  const c = new Map,
    s = (t, e) => {
      if (!Array.isArray(t)) switch (typeof t) {
        case "string":
          t = [t];
          break;
        case "undefined":
          t = [];
          break;
        default:
          throw new TypeError(`Expected '${e}' to be a string or an array, but got a type of '${typeof t}'`)
      }
      return t.filter((t => {
        if ("string" !== typeof t) {
          if ("undefined" === typeof t) return !1;
          throw new TypeError(`Expected '${e}' to be an array of strings, but found a type of '${typeof t}' in the array`)
        }
        return !0
      }))
    },
    l = (t, e) => {
      e = {
        caseSensitive: !1,
        ...e
      };
      const n = t + JSON.stringify(e);
      if (c.has(n)) return c.get(n);
      const o = "!" === t[0];
      o && (t = t.slice(1)), t = function(t) {
        if ("string" !== typeof t) throw new TypeError("Expected a string");
        return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
      }(t).replace(/\\\*/g, "[\\s\\S]*");
      const r = new RegExp(`^${t}$`, e.caseSensitive ? "" : "i");
      return r.negated = o, c.set(n, r), r
    },
    u = (t, e, n, o) => {
      if (t = s(t, "inputs"), 0 === (e = s(e, "patterns")).length) return [];
      e = e.map((t => l(t, n)));
      const {
        allPatterns: r
      } = n || {}, i = [];
      for (const a of t) {
        let t;
        const n = [...e].fill(!1);
        for (const [o, r] of e.entries())
          if (r.test(a) && (n[o] = !0, t = !r.negated, !t)) break;
        if (!(!1 === t || void 0 === t && e.some((t => !t.negated)) || r && n.some(((t, n) => !t && !e[n].negated))) && (i.push(a), o)) break
      }
      return i
    };
  const _ = {
      DESKTOP_BTN_CONTAINER_TOP: "--nector-desktop-btn-container-top",
      DESKTOP_BTN_CONTAINER_BOTTOM: "--nector-desktop-btn-container-bottom",
      DESKTOP_BTN_CONTAINER_RIGHT: "--nector-desktop-btn-container-right",
      DESKTOP_BTN_CONTAINER_LEFT: "--nector-desktop-btn-container-left",
      MOBILE_BTN_CONTAINER_TOP: "--nector-mobile-btn-container-top",
      MOBILE_BTN_CONTAINER_BOTTOM: "--nector-mobile-btn-container-bottom",
      MOBILE_BTN_CONTAINER_RIGHT: "--nector-mobile-btn-container-right",
      MOBILE_BTN_CONTAINER_LEFT: "--nector-mobile-btn-container-left",
      DESKTOP_IFRAME_CONTAINER_TOP: "--nector-desktop-iframe-container-top",
      DESKTOP_IFRAME_CONTAINER_BOTTOM: "--nector-desktop-iframe-container-bottom",
      DESKTOP_IFRAME_CONTAINER_RIGHT: "--nector-desktop-iframe-container-right",
      DESKTOP_IFRAME_CONTAINER_LEFT: "--nector-desktop-iframe-container-left"
    },
    d = "nector_widget_config",
    f = "nector_entity",
    p = "nector_font_name",
    v = "nector_font_url",
    h = "nector_kwikpass_autologin_blocked_until",
    m = "nector_shiprocket_autologin_blocked_until",
    g = "nector_shopflo_autologin_blocked_until",
    b = "nector_nitro_autologin_blocked_until",
    y = "nector_goswift_customer_id_cache",
    w = "swcCxId",
    O = "nector_kwikpass_customer_id_cache",
    E = "_n_event",
    C = "_n_lock_event",
    x = "#show-nector-rewards",
    T = "#hide-nector-rewards",
    S = {
      REFRESH_WALLET: "refresh_wallet",
      PARENT_URL: "parent_url",
      DISABLE_BODY_SCROLL: "disable_body_scroll",
      ENABLE_BODY_SCROLL: "enable_body_scroll",
      LOGIN_VIA_THIRDPARTYACCOUNTS: "login_via_thirdpartyaccounts",
      APPLYCOUPON: "APPLYCOUPON",
      APPLYCOUPON_ACK: "APPLYCOUPON_ACK",
      APPLYCOUPON_RESULT: "APPLYCOUPON_RESULT",
      CLOSE_REFERRAL_POPUP: "CLOSE_REFERRAL_POPUP"
    },
    k = {
      WIDGET_INITIALIZED: "nector_widget_initialized",
      LEAD_UPDATED: "nector_lead_updated",
      CLOSE_REFERRAL_POPUP: "nector_close_referral_popup"
    },
    N = {
      background_color: "#000",
      text_color: "#FFF",
      program_name: "Rewards Program",
      coin_name: "Coins",
      currency_code: null
    },
    j = ["appmaker", "vajro", "amala_earth_app"],
    R = "64f06d1460d0f993c4571ac9",
    A = ["shopify-f5a2ba-86"],
    I = {
      "shopify-f5a2ba-86": "f5a2ba-86.myshopify.com"
    },
    L = {},
    P = {
      NECTOR_TRACK: "nector_track",
      MSCLARITY_TRACK: "msclarity_track",
      GOKWIKCART_TRACK: "gokwikcart_track",
      QUINNVIDEOS_TRACK: "quinnvideos_track",
      GOAFFPRO_TRACK: "goaffpro_track",
      SMILE_TRACK: "smile_track",
      BOOSTCOMMERCE_TRACK: "boostcommerce_track",
      SNAPMINT_TRACK: "snapmint_track",
      GOKWIKCHECKOUT_TRACK: "gokwikcheckout_track",
      SHIPROCKETCHECKOUT_TRACK: "shiprocketcheckout_track",
      RAZORPAYCHECKOUT_TRACK: "razorpaycheckout_track",
      SHOPFLOCHECKOUT_TRACK: "shopflocheckout_track",
      PRAGMACHECKOUT_TRACK: "pragmacheckout_track",
      KWIKPASSLOGIN_TRACK: "kwikpasslogin_track",
      NITROCOMMERCE_TRACK: "nitrocommerce_track",
      OTPLESS_TRACK: "otpless_track",
      OXIAPPS_TRACK: "oxiapps_track",
      LIMECHAT_TRACK: "limechat_track",
      BIK_TRACK: "bik_track",
      WEBENGAGE_TRACK: "webengage_track",
      MOENGAGE_TRACK: "moengage_track",
      WIGZO_TRACK: "wigzo_track",
      CONTLO_TRACK: "contlo_track",
      PUSHOWL_TRACK: "pushowl_track",
      QUICKREPLY_TRACK: "quickreply_track",
      POSTSCRIPT_TRACK: "postscript_track",
      KLAVIYO_TRACK: "klaviyo_track",
      NETCORE_TRACK: "netcore_track",
      FERA_TRACK: "fera_track",
      LOOX_TRACK: "loox_track",
      JUDGEME_TRACK: "judgeme_track",
      STAMPED_TRACK: "stamped_track"
    },
    U = [{
      substr: "cdn.nector.io",
      event: P.NECTOR_TRACK
    }, {
      substr: "clarity.ms",
      event: P.MSCLARITY_TRACK
    }, {
      substr: "kwikcart.gokwik.co",
      event: P.GOKWIKCART_TRACK
    }, {
      substr: "quinn-shoppable-videos",
      event: P.QUINNVIDEOS_TRACK
    }, {
      substr: "goaffpro",
      event: P.GOAFFPRO_TRACK
    }, {
      substr: "js.smile.io",
      event: P.SMILE_TRACK
    }, {
      substr: "cdn.boostcommerce.io",
      event: P.BOOSTCOMMERCE_TRACK
    }, {
      substr: "snapmint.com",
      event: P.SNAPMINT_TRACK
    }, {
      substr: "pdp.gokwik.co",
      event: P.GOKWIKCHECKOUT_TRACK
    }, {
      substr: "shiprocket.in",
      event: P.SHIPROCKETCHECKOUT_TRACK
    }, {
      substr: "checkout.razorpay.com",
      event: P.RAZORPAYCHECKOUT_TRACK
    }, {
      substr: "shopflo.com",
      event: P.SHOPFLOCHECKOUT_TRACK
    }, {
      substr: "logisy.s3.amazonaws.com",
      event: P.PRAGMACHECKOUT_TRACK
    }, {
      substr: "kwikpass",
      event: P.KWIKPASSLOGIN_TRACK
    }, {
      substr: "nitrocommerce.ai",
      event: P.NITROCOMMERCE_TRACK
    }, {
      substr: "otpless.com",
      event: P.OTPLESS_TRACK
    }, {
      substr: "social-login.oxiapps.com",
      event: P.OXIAPPS_TRACK
    }, {
      substr: "cdn.limechat.ai",
      event: P.LIMECHAT_TRACK
    }, {
      substr: "bikapi.bikayi.app",
      event: P.BIK_TRACK
    }, {
      substr: "webengage.com",
      event: P.WEBENGAGE_TRACK
    }, {
      substr: "cdn.moengage.com",
      event: P.MOENGAGE_TRACK
    }, {
      substr: "wigzopush.com",
      event: P.WIGZO_TRACK
    }, {
      substr: "marketing.contlo.com",
      event: P.CONTLO_TRACK
    }, {
      substr: "cdn.pushowl.com",
      event: P.PUSHOWL_TRACK
    }, {
      substr: "quickreply.ai",
      event: P.QUICKREPLY_TRACK
    }, {
      substr: "sdk.postscript.io",
      event: P.POSTSCRIPT_TRACK
    }, {
      substr: "static.klaviyo.com",
      event: P.KLAVIYO_TRACK
    }, {
      substr: "cdnt.netcoresmartech.com",
      event: P.NETCORE_TRACK
    }, {
      substr: "cdn.fera.ai",
      event: P.FERA_TRACK
    }, {
      substr: "loox.io",
      event: P.LOOX_TRACK
    }, {
      substr: "judge.me",
      event: P.JUDGEME_TRACK
    }, {
      substr: "stamped.io",
      event: P.STAMPED_TRACK
    }],
    D = {
      en: {
        powered_by_text: "Powered By",
        sticky_widget_component_widget_text: "Use your {balance} {coin_name} to get discounts!",
        coins: "Coins",
        points: "Points",
        rewards: "Rewards"
      },
      de: {
        powered_by_text: "Bereitgestellt von",
        sticky_widget_component_widget_text: "Nutze deine {balance} {coin_name} f\xfcr Rabatte!",
        coins: "M\xfcnzen",
        points: "Punkte",
        rewards: "Belohnungen"
      },
      fr: {
        powered_by_text: "Aliment\xe9 par",
        sticky_widget_component_widget_text: "Utilisez vos {balance} {coin_name} pour obtenir des r\xe9ductions !",
        coins: "Pi\xe8ces",
        points: "Points",
        rewards: "R\xe9compenses"
      },
      it: {
        powered_by_text: "Offerto da",
        sticky_widget_component_widget_text: "Usa i tuoi {balance} {coin_name} per ottenere sconti!",
        coins: "Mone",
        points: "Punti",
        rewards: "Incentivi"
      },
      es: {
        powered_by_text: "Desarrollado por",
        sticky_widget_component_widget_text: "\xa1Usa tus {balance} {coin_name} para obtener descuentos!",
        coins: "Monedas",
        points: "Puntos",
        rewards: "Recompensas"
      },
      ja: {
        powered_by_text: "\u63d0\u4f9b",
        sticky_widget_component_widget_text: "{balance} {coin_name}\u3092\u4f7f\u3063\u3066\u5272\u5f15\u3092\u30b2\u30c3\u30c8\u3057\u3088\u3046\uff01",
        coins: "\u30b3\u30a4\u30f3",
        points: "\u30dd\u30a4\u30f3\u30c8",
        rewards: "\u30ea\u30ef\u30fc\u30c9"
      }
    },
    K = "left:75",
    M = 67,
    F = 2147483645,
    H = {
      accept: "application/json",
      "content-type": "application/json",
      "x-source": "web"
    };
  var W = {
      app_constant: o,
      settings_constant: r
    },
    B = n(15),
    G = n.n(B);
  class z {
    static validate_is_null_or_undefined(t) {
      return null === t || void 0 === t
    }
    static validate_not_null_or_undefined(t) {
      return !z.validate_is_null_or_undefined(t)
    }
    static validate_is_string(t) {
      return "[object String]" === Object.prototype.toString.call(t)
    }
    static validate_is_number(t) {
      return !0 !== z.validate_is_null_or_undefined(t) && !isNaN(Number(t))
    }
    static setCSSProperties(t, e) {
      e && document.documentElement.style.setProperty(t, e)
    }
    static get_css_property(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const n = getComputedStyle(document.documentElement).getPropertyValue(t);
      return z.validate_is_null_or_undefined(n) ? e : n
    }
    static safe_parse_json(t) {
      if (z.validate_is_null_or_undefined(t)) return null;
      try {
        return JSON.parse(t)
      } catch (e) {
        return null
      }
    }
    static convert_cssvalue_to_number(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "int";
      if (z.validate_is_null_or_undefined(t)) return null;
      const n = "int" === e ? parseInt(t, 10) : parseFloat(t);
      return isNaN(n) ? null : n
    }
    static get_string_templater() {
      return G.a
    }
    static get_saved_widget_config() {
      const t = localStorage.getItem(W.app_constant.WIDGET_CONFIG_LOCALSTORAGE_KEY);
      return z.safe_parse_json(t) || {}
    }
    static get_saved_widget_config_value(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = z.get_saved_widget_config();
      return n && n[t] ? n[t] : e
    }
    static parse_widget_position_string(t) {
      if (!1 === z.validate_is_string(t)) return {};
      const e = t.split(":");
      if (!e || e.length < 2) return {};
      const [n, o] = e;
      return {
        edge: n.trim(),
        from_bottom: Number(o.trim())
      }
    }
    static standardize_websdk_widget_position(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!t || !t.position || null === t.offset || void 0 === t.offset) return {};
      const n = t.position,
        o = t.offset,
        r = n && n.includes("right") ? "right" : "left";
      let i = 0;
      if (n.includes("top")) {
        const t = e || W.settings_constant.DEFAULT_WIDGET_HEIGHT;
        i = window.innerHeight - (Number(o) + t)
      } else i = Number(o);
      return {
        edge: r,
        from_bottom: i
      }
    }
    static window_post_message_to_iframe(t, e, n) {
      var o;
      let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      if (!t) return;
      const i = {
        event: e,
        payload: n || null
      };
      null === (o = t.contentWindow) || void 0 === o || o.postMessage(i, r || "*")
    }
    static repeat_action(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
      return {
        timer_id: null,
        counter: 0,
        start: function() {
          t(), this.counter++, this.timer_id = setInterval((() => {
            this.timer_id && this.counter >= n && (clearInterval(this.timer_id), this.timer_id = null), t(), this.counter++
          }), e)
        },
        cancel: function() {
          this.timer_id && this.counter >= n && (clearInterval(this.timer_id), this.timer_id = null)
        }
      }
    }
    static adjust_color(t, e) {
      3 === (t = t.replace(/^#/, "")).length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
      let [n, o, r] = t.match(/.{2}/g);
      [n, o, r] = [parseInt(n, 16) + e, parseInt(o, 16) + e, parseInt(r, 16) + e], n = Math.max(Math.min(255, n), 0).toString(16), o = Math.max(Math.min(255, o), 0).toString(16), r = Math.max(Math.min(255, r), 0).toString(16);
      return `#${(n.length<2?"0":"")+n}${(o.length<2?"0":"")+o}${(r.length<2?"0":"")+r}`
    }
    static process_add_item(t, e) {
      return !1 === z.is_session_storage_supported() || !0 === z.validate_is_null_or_undefined(t) || !0 === z.validate_is_null_or_undefined(e) ? null : void window.sessionStorage.setItem(t, e)
    }
    static process_get_item(t) {
      return !1 === z.is_session_storage_supported() || !0 === z.validate_is_null_or_undefined(t) ? null : window.sessionStorage.getItem(t)
    }
    static process_remove_item(t) {
      return !1 === z.is_session_storage_supported() || !0 === z.validate_is_null_or_undefined(t) ? null : window.sessionStorage.removeItem(t)
    }
    static process_add_localitem(t, e) {
      return !1 === z.is_local_storage_supported() || !0 === z.validate_is_null_or_undefined(t) || !0 === z.validate_is_null_or_undefined(e) ? null : void window.localStorage.setItem(t, e)
    }
    static process_get_localitem(t) {
      return !1 === z.is_local_storage_supported() || !0 === z.validate_is_null_or_undefined(t) ? null : window.localStorage.getItem(t)
    }
    static process_remove_localitem(t) {
      return !1 === z.is_local_storage_supported() || !0 === z.validate_is_null_or_undefined(t) ? null : window.localStorage.removeItem(t)
    }
    static process_get_cookie(t) {
      const e = `; ${document.cookie}`.split(`; ${t}=`);
      if (2 === e.length) return e.pop().split(";").shift()
    }
    static process_key_join(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_";
      return t.join(e)
    }
    static process_format_number_as_money(t, e) {
      if (z.validate_is_null_or_undefined(t)) return null;
      if (z.validate_is_null_or_undefined(e)) return t;
      return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: e
      }).format(t)
    }
    static process_convert_money_to_number(t) {
      if (z.validate_is_null_or_undefined(t)) return null;
      const e = Number(t.replace(/[^0-9.]+/g, ""));
      return !1 === z.validate_is_number(e) ? null : e
    }
    static convert_snake_to_camel_case(t) {
      return "" === t ? "" : !0 === z.validate_is_null_or_undefined(t) ? null : t.replace(/^[-_]*(.)/, ((t, e) => e.toUpperCase())).replace(/[-_]+(.)/g, ((t, e) => " " + e.toUpperCase()))
    }
    static is_session_storage_supported() {
      try {
        return !!window.sessionStorage
      } catch (t) {
        return !1
      }
    }
    static is_local_storage_supported() {
      try {
        return !!window.localStorage
      } catch (t) {
        return !1
      }
    }
    static get_nector_prefix_from_hash(t) {
      if (!t) return null;
      return t.split("---")[0]
    }
    static get_nector_path_from_hash(t) {
      if (!t) return null;
      const e = t.split("---");
      return ((null === e || void 0 === e ? void 0 : e.length) > 1 ? e.slice(1).join("") : "") || ""
    }
    static get_limited_text(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "...";
      return !0 === z.validate_is_null_or_undefined(t) ? n : t.length <= e ? t : String(t).slice(0, e) + o
    }
    static load_font() {
      let t = "Poppins",
        e = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";
      const n = z.process_get_localitem(W.app_constant.NECTOR_FONT_NAME_LOCALSTORAGE_KEY) || null,
        o = z.process_get_localitem(W.app_constant.NECTOR_FONT_URL_LOCALSTORAGE_KEY) || null;
      n && o ? (t = n, e = o) : nector.font_url && nector.font_name && (e = nector.font_url, t = nector.font_name);
      const r = "nector-custom-font-styles",
        i = document.getElementById(r);
      i && i.parentNode.removeChild(i);
      let a = `'${t}', sans-serif !important`,
        c = `@import url("${e}");.nector-websdk-widget * {font-family: ${a}}.nector-websdk-widget {font-family: ${a}}.nector-websdk-widget p {font-family: ${a}}.nector-websdk-widget div {font-family: ${a}}`,
        s = document.head || document.getElementsByTagName("head")[0],
        l = document.createElement("style");
      l.id = r, s.appendChild(l), l.styleSheet ? l.styleSheet.cssText = c : l.appendChild(document.createTextNode(c))
    }
    static get_identifier() {
      var t;
      return null === (t = nector) || void 0 === t ? void 0 : t.identifier
    }
    static is_couponcode_appliable() {
      return "shopify" === z.get_identifier()
    }
    static get_currency_symbol_from_code(t) {
      try {
        var e;
        if (!t) return "\xa4";
        return (null === (e = new Intl.NumberFormat("en-US", {
          style: "currency",
          currencyDisplay: "narrowSymbol",
          currency: t
        }).formatToParts(1).find((t => "currency" === t.type))) || void 0 === e ? void 0 : e.value) || "\xa4"
      } catch (n) {
        return "\xa4"
      }
    }
    static format_text_with_entityconfig(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return z.validate_is_null_or_undefined(t) ? "" : z.get_string_templater()(t, {
        currency_symbol: z.get_currency_symbol_from_code(z.get_safe_appconfigvalue(e, "currency_code")),
        business_name: z.get_safe_appconfigvalue(e, "name"),
        business_url: z.get_safe_appconfigvalue(e, "business_uri"),
        coin_name: z.get_safe_appconfigvalue(e, "coin_name"),
        program_name: z.get_safe_appconfigvalue(e, "program_name"),
        ...n || {}
      })
    }
    static get_safe_appconfigvalue(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      return e ? t && t[e] ? t[e] : W.app_constant.DEFAULT_APPCONFIG[e] || n : n
    }
    static process_omit_keys_from_object(t, e) {
      return !t || !e || (null === e || void 0 === e ? void 0 : e.length) < 1 ? t : Object.fromEntries(Object.entries(t).filter((t => {
        let [n] = t;
        return !e.includes(n)
      })))
    }
    static does_route_match(t, e) {
      if (!t || !e) return !1;
      "/" !== t && t.endsWith("/") && (t = t.slice(0, -1));
      for (const n of e)
        if (u(t, n, void 0, !0).length > 0) return !0
    }
    static process_parse_shopifycartlink(t) {
      if (!1 === z.validate_is_string(t)) return null;
      try {
        const e = new URL(t);
        if (!1 === e.pathname.startsWith("/cart/")) return null;
        const n = e.pathname.replace("/cart/", "").split(",").map((t => t.split(":"))).map((t => 2 === t.length && Number(t[0]) && Number(t[1]) ? {
            id: Number(t[0]),
            quantity: Number(t[1])
          } : null)).filter((t => t)),
          o = new URLSearchParams(e.search);
        return {
          variants: n,
          discount_code: o.get("discount")
        }
      } catch (e) {
        return console.error(e), null
      }
    }
    static process_safe_url(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      try {
        const n = new URL(t);
        for (const t of Object.keys(e)) z.validate_not_null_or_undefined(e[t]) && z.validate_is_string(e[t]) && e[t].length > 0 && n.searchParams.append(t, e[t]);
        return n.toString()
      } catch (n) {
        return ""
      }
    }
    static get_powered_by_link(t, e) {
      if (z.validate_is_null_or_undefined(t) || z.validate_is_null_or_undefined(e)) return "https://nector.io";
      const n = t.workspace_id;
      if (z.validate_is_null_or_undefined(n)) return "https://nector.io";
      const o = {
        utm_source: n,
        utm_medium: e
      };
      return this.process_safe_url("https://nector.io", o)
    }
    static get_translated_text(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      let o = W.app_constant.LANGUAGE_TRANSLATION_MAP[t][e];
      return z.validate_not_null_or_undefined(n) ? z.get_string_templater()(o, n) : o
    }
    static dispatch_custom_event(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      z.validate_not_null_or_undefined(n) && Object.keys(n).length > 0 && (window.nector_data = {
        ...window.nector_data || {},
        ...n
      });
      const o = new CustomEvent(t, {
        detail: e
      });
      window.dispatchEvent(o)
    }
    static normalize_tool_name(t) {
      return t ? String(t).trim().toLowerCase() : null
    }
    static get_script_src_hostname(t) {
      if (!t) return null;
      return new URL(t, window.location.href).hostname
    }
  }
  var V = z;
  const $ = function() {
      let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const e = nector.platform_url || "https://platform.nector.io",
        n = new URL(e);
      let o = null;
      return o = n.host && "platform.nector.io" === n.host ? "https://cachefront.nector.io" : n.host && "stageplatform.nector.io" === n.host ? "https://stagecachefront.nector.io" : e, t && (o = `${o}/${t}`), o
    },
    Y = function() {
      let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        e = nector.platform_url || "https://platform.nector.io";
      return t && (e = `${e}/${t}`), e
    },
    Z = async function(t, e, n) {
      let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        use_auth: !1,
        use_cache: !1,
        fetch_opts: {},
        parse_json: !1
      };
      try {
        let i = null !== t && void 0 !== t && t.startsWith("http://") || null !== t && void 0 !== t && t.startsWith("https://") ? t : o.use_cache ? $(t) : Y(t);
        const a = {
          ...W.settings_constant.API_HEADER,
          ...n || {}
        };
        if (o.use_auth) {
          if (!nector.api_key) return void console.error("NECTOR API KEY NOT FOUND");
          a["x-apikey"] = nector.api_key
        }
        if (e && Object.keys(e).length > 0) {
          i += `?${new URLSearchParams(e).toString()}`
        }
        let c = {
          method: "GET",
          headers: a
        };
        V.validate_not_null_or_undefined(null === o || void 0 === o ? void 0 : o.fetch_opts) && Object.keys(null === o || void 0 === o ? void 0 : o.fetch_opts).length > 0 && (c = {
          ...c,
          ...o.fetch_opts
        });
        const s = await fetch(i, c);
        let l = null;
        try {
          l = s.headers.get("Content-Type") && s.headers.get("Content-Type").includes("application/json") || !0 === o.parse_json ? await s.json() : await s.text()
        } catch (r) {
          console.error(r)
        }
        return {
          status: !0 === s.ok,
          statusCode: s.status,
          response: l
        }
      } catch (r) {
        return r.response && r.response.data ? {
          status: !1,
          statusCode: r.response.status,
          response: r.response.data
        } : {
          status: !1,
          response: null
        }
      }
    }, X = async function(t, e, n, o, r) {
      let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
        use_auth: !1,
        fetch_opts: {},
        parse_json: !1
      };
      try {
        let c = null !== e && void 0 !== e && e.startsWith("http://") || null !== e && void 0 !== e && e.startsWith("https://") ? e : Y(e);
        const s = {
          ...W.settings_constant.API_HEADER,
          ...r || {}
        };
        if (i.use_auth) {
          if (!nector.api_key) return void console.error("NECTOR API KEY NOT FOUND");
          s["x-apikey"] = nector.api_key
        }
        if (o && Object.keys(o).length > 0) {
          c += `?${new URLSearchParams(o).toString()}`
        }
        let l = {
          method: t,
          headers: s
        };
        V.validate_not_null_or_undefined(null === i || void 0 === i ? void 0 : i.fetch_opts) && Object.keys(null === i || void 0 === i ? void 0 : i.fetch_opts).length > 0 && (l = {
          ...l,
          ...i.fetch_opts
        }), n && "application/json" === s["content-type"] && (l.body = JSON.stringify(n));
        const u = await fetch(c, l);
        let _ = null;
        try {
          _ = u.headers.get("Content-Type") && u.headers.get("Content-Type").includes("application/json") || !0 === i.parse_json ? await u.json() : await u.text()
        } catch (a) {
          console.error(a)
        }
        return {
          status: !0 === u.ok,
          statusCode: u.status,
          response: _
        }
      } catch (a) {
        return a.response && a.response.data ? {
          status: !1,
          statusCode: a.response.status,
          response: a.response.data
        } : {
          status: !1,
          response: null
        }
      }
    };
  var q = class {
    static async get_shopify_cart() {
      const t = `${window.location.origin}/cart.js?nector-request=1`,
        e = await Z(t, null, null, {
          parse_json: !0
        });
      return !0 === e.status ? e.response : null
    }
    static async add_to_shopify_cart(t) {
      const e = `${window.location.origin}/cart/add.js`,
        n = await async function(t, e, n, o) {
          let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
            use_auth: !1,
            fetch_opts: {}
          };
          return await X("POST", t, e, n, o, r)
        }(e, t, null, null, {
          parse_json: !0
        });
      return !0 === n.status ? n.response : null
    }
  };
  var J = function(t, e, n) {
    const o = Object(i.useRef)(e),
      r = Object(i.useCallback)((() => o.current), []);
    return [...Object(i.useReducer)(((e, n) => o.current = t(e, n)), e, n), r]
  };

  function Q() {
    return "handleKpAndShopifyLogin" in window && "function" === typeof window.handleKpAndShopifyLogin
  }

  function tt() {
    const t = Date.now() + 36e5;
    V.process_add_localitem(W.app_constant.NECTOR_KWIKPASS_AUTOLOGIN_BLOCKED_UNTIL, t)
  }
  var et = function() {
    var t;
    const [e, n] = Object(i.useState)(Q()), o = V.process_get_localitem("KWIKSESSIONTOKEN"), r = V.process_get_cookie("KWIKSESSIONTOKEN"), a = V.validate_is_string(nector.business_customer_id) && (null === (t = nector.business_customer_id) || void 0 === t ? void 0 : t.length) > 0;
    let c = (V.validate_not_null_or_undefined(o) || V.validate_not_null_or_undefined(r)) && !a;
    const s = V.process_get_localitem(W.app_constant.NECTOR_KWIKPASS_AUTOLOGIN_BLOCKED_UNTIL);
    return V.validate_not_null_or_undefined(s) && (Number(s) && Number(s) > Date.now() ? c = !1 : V.process_remove_localitem(W.app_constant.NECTOR_KWIKPASS_AUTOLOGIN_BLOCKED_UNTIL)), Object(i.useEffect)((() => {
      if (!1 === e) {
        let t = 0,
          e = setInterval((() => {
            t++;
            const o = Q();
            !0 === o && (n(o), clearInterval(e)), t >= 40 && clearInterval(e)
          }), 500);
        return () => {
          clearInterval(e)
        }
      }
    }), []), {
      is_kwikpass_enabled: e,
      should_try_autologin: c
    }
  };

  function nt() {
    return "shipRocketMarketingLogin" in window && "function" === typeof window.shipRocketMarketingLogin
  }

  function ot() {
    const t = Date.now() + 36e5;
    V.process_add_localitem(W.app_constant.NECTOR_SHIPROCKET_AUTOLOGIN_BLOCKED_UNTIL, t)
  }
  var rt = function() {
    var t;
    const [e, n] = Object(i.useState)(nt()), o = V.process_get_localitem("sc_user_id"), r = V.process_get_cookie("fastrr_user_id"), a = V.validate_is_string(nector.business_customer_id) && (null === (t = nector.business_customer_id) || void 0 === t ? void 0 : t.length) > 0;
    let c = (V.validate_not_null_or_undefined(o) || V.validate_not_null_or_undefined(r)) && !a;
    const s = V.process_get_localitem(W.app_constant.NECTOR_SHIPROCKET_AUTOLOGIN_BLOCKED_UNTIL);
    return V.validate_not_null_or_undefined(s) && (Number(s) && Number(s) > Date.now() ? c = !1 : V.process_remove_localitem(W.app_constant.NECTOR_SHIPROCKET_AUTOLOGIN_BLOCKED_UNTIL)), Object(i.useEffect)((() => {
      if (!1 === e) {
        let t = 0,
          e = setInterval((() => {
            t++;
            const o = nt();
            !0 === o && (n(o), clearInterval(e)), t >= 40 && clearInterval(e)
          }), 500);
        return () => {
          clearInterval(e)
        }
      }
    }), []), {
      is_shiprocketlogin_enabled: e,
      should_try_autologin: c
    }
  };

  function it() {
    return "handleFloLogin" in window && "function" === typeof window.handleFloLogin
  }

  function at() {
    const t = Date.now() + 36e5;
    V.process_add_localitem(W.app_constant.NECTOR_SHOPFLO_AUTOLOGIN_BLOCKED_UNTIL, t)
  }
  var ct = function() {
    var t;
    const [e, n] = Object(i.useState)(it()), o = V.process_get_localitem("flo-user-details"), r = V.validate_is_string(nector.business_customer_id) && (null === (t = nector.business_customer_id) || void 0 === t ? void 0 : t.length) > 0;
    let a = V.validate_not_null_or_undefined(o) && !r;
    const c = V.process_get_localitem(W.app_constant.NECTOR_SHOPFLO_AUTOLOGIN_BLOCKED_UNTIL);
    return V.validate_not_null_or_undefined(c) && (Number(c) && Number(c) > Date.now() ? a = !1 : V.process_remove_localitem(W.app_constant.NECTOR_SHOPFLO_AUTOLOGIN_BLOCKED_UNTIL)), Object(i.useEffect)((() => {
      if (!1 === e) {
        let t = 0,
          e = setInterval((() => {
            t++;
            const o = it();
            !0 === o && (n(o), clearInterval(e)), t >= 40 && clearInterval(e)
          }), 500);
        return () => {
          clearInterval(e)
        }
      }
    }), []), {
      is_shopflo_enabled: e,
      should_try_autologin: a
    }
  };
  let st = !1,
    lt = null,
    ut = !1;
  const _t = {};

  function dt() {
    return null !== lt || st ? lt : ("nitro" in window && "ready" in window.nitro && "function" === typeof window.nitro.ready && (!st && "checkLoginEligibility" in window.nitro && "function" === typeof window.nitro.checkLoginEligibility && "initiateShopifyLogin" in window.nitro && "function" === typeof window.nitro.initiateShopifyLogin ? (window.nitro.checkLoginEligibility((t => {
      lt = !0 === t.isSSOActive, ut = !0 === t.isEligible, _t.on_update_callback && _t.on_update_callback(lt)
    })), st = !0) : st || (window.nitro.ready((() => {
      "checkLoginEligibility" in window.nitro && "function" === typeof window.nitro.checkLoginEligibility && "initiateShopifyLogin" in window.nitro && "function" === typeof window.nitro.initiateShopifyLogin && window.nitro.checkLoginEligibility((t => {
        lt = !0 === t.isSSOActive, ut = !0 === t.isEligible, _t.on_update_callback && _t.on_update_callback(lt)
      }))
    })), st = !0)), lt || !1)
  }

  function ft() {
    const t = Date.now() + 36e5;
    V.process_add_localitem(W.app_constant.NECTOR_NITRO_AUTOLOGIN_BLOCKED_UNTIL, t)
  }! function() {
    if (!1 === dt()) {
      let t = 0,
        e = setInterval((() => {
          t >= 60 && clearInterval(e), t++;
          !0 !== dt() || clearInterval(e)
        }), 500)
    }
  }();
  var pt = function() {
      var t;
      const [, e] = Object(i.useState)(0), n = dt(), o = () => {
        e((t => t + 1))
      };
      Object(i.useEffect)((() => (_t.on_update_callback = o, () => {
        _t.on_update_callback = null
      })), [o]);
      const r = V.validate_is_string(nector.business_customer_id) && (null === (t = nector.business_customer_id) || void 0 === t ? void 0 : t.length) > 0;
      let a = ut && !r;
      const c = V.process_get_localitem(W.app_constant.NECTOR_NITRO_AUTOLOGIN_BLOCKED_UNTIL);
      return V.validate_not_null_or_undefined(c) && (Number(c) && Number(c) > Date.now() ? a = !1 : V.process_remove_localitem(W.app_constant.NECTOR_NITRO_AUTOLOGIN_BLOCKED_UNTIL)), {
        is_nitro_enabled: n && !r,
        should_try_autologin: a
      }
    },
    vt = n(1);
  const ht = i.default.createContext({}),
    mt = "SET_ENTITY_ID",
    gt = "SET_LEAD",
    bt = "SET_SYSTEM_INFO",
    yt = "SET_SHOW_REWARDS",
    wt = "SET_REWARDS_PATH",
    Ot = {
      entity_id: window.localStorage.getItem(W.app_constant.ENTITY_ID_LOCALSTORAGE_KEY) || null,
      lead: {
        pending: !0,
        item: null
      },
      entity: {},
      systeminfo: null,
      show_rewards: !1,
      rewards_path: ""
    },
    Et = (t, e) => {
      var n;
      const {
        type: o,
        payload: r
      } = e;
      switch (o) {
        case mt:
          return window.localStorage.setItem(W.app_constant.ENTITY_ID_LOCALSTORAGE_KEY, r), {
            ...t,
            entity_id: r
          };
        case gt:
          return V.dispatch_custom_event(W.app_constant.CUSTOM_DOM_EVENTS.LEAD_UPDATED, r, {
            lead: r,
            wallet: (null === r || void 0 === r ? void 0 : r.wallet) || null,
            creditwallet: (null === r || void 0 === r ? void 0 : r.creditwallet) || null
          }), {
            ...t,
            lead: {
              pending: !1,
              item: r
            }
          };
        case bt:
          return {
            ...t, systeminfo: r, entity: (null === r || void 0 === r || null === (n = r.businessinfos) || void 0 === n ? void 0 : n.entity) || {}
          };
        case yt:
          return {
            ...t, show_rewards: r
          };
        case wt:
          return {
            ...t, rewards_path: r
          }
      }
    };

  function Ct(t) {
    let {
      children: e
    } = t;
    const [n, o, r] = J(Et, Ot), [i, c] = Object(a.useHash)(), s = {
      get_lead: async function() {
        var t, e, n, i;
        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const c = r();
        let l = V.validate_not_null_or_undefined(null === c || void 0 === c || null === (t = c.lead) || void 0 === t || null === (e = t.item) || void 0 === e ? void 0 : e.customer_id) ? null === c || void 0 === c || null === (n = c.lead) || void 0 === n || null === (i = n.item) || void 0 === i ? void 0 : i.customer_id.replace("shopify-", "").replace("woocommerce-", "").replace("custom_website-", "") : null,
          u = (null === a || void 0 === a ? void 0 : a.lead_id) || nector.lead_id || null,
          _ = (null === a || void 0 === a ? void 0 : a.customer_id) || nector.business_customer_id || l || null,
          d = nector.identifier || null;
        !0 === V.validate_not_null_or_undefined(d) && !0 === V.validate_not_null_or_undefined(_) && ("external" === d || (_ = V.process_key_join([d, _], "-")));
        const f = null !== _ ? {
          customer_id: _
        } : {};
        if (V.validate_not_null_or_undefined(_)) u = u || "05c6a67c-8257-482a-b186-edb256c00a71";
        else if (V.validate_is_null_or_undefined(_) && V.validate_is_null_or_undefined(u)) return o({
          type: gt,
          payload: null
        }), void s.get_aggreegateddetails();
        const p = await Z(`api/v2/merchant/leads/${u}`, f, {}, {
          use_auth: !0
        });
        if (!0 === p.status) {
          var v;
          let t = (null === (v = p.response.data) || void 0 === v ? void 0 : v.item) || null;
          return s.get_aggreegateddetails((null === t || void 0 === t ? void 0 : t.tier) || null), o({
            type: gt,
            payload: t
          }), t
        }
        return s.get_aggreegateddetails(), void o({
          type: gt,
          payload: null
        })
      },
      get_aggreegateddetails: async function() {
        var t, e, n, r, i, a, c, l;
        let u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const _ = await Z("api/v2/merchant/aggreegateddetails", {
          tier: u
        }, {}, {
          use_auth: !0,
          use_cache: !0
        });
        !0 === _.status && o({
          type: bt,
          payload: _.response.data
        }), !0 === _.status && "success" === (null === (t = _.response) || void 0 === t || null === (e = t.meta) || void 0 === e ? void 0 : e.status) && null !== (n = _.response) && void 0 !== n && null !== (r = n.data) && void 0 !== r && null !== (i = r.businessinfos) && void 0 !== i && null !== (a = i.entity) && void 0 !== a && a._id ? o({
          type: mt,
          payload: _.response.data.businessinfos.entity._id
        }) : "success" === (null === (c = _.response) || void 0 === c || null === (l = c.meta) || void 0 === l ? void 0 : l.status) && s.get_entity_id()
      },
      get_entity_id: async () => {
        if (n.entity_id) return;
        const t = await Z("api/v2/merchant/entities/6d488927-f266-40b4-bc2c-807c5338a544", {}, {}, {
          use_auth: !0,
          use_cache: !0
        });
        var e, r, i;
        !0 === t.status && (null !== (e = t.response) && void 0 !== e && null !== (r = e.data) && void 0 !== r && null !== (i = r.item) && void 0 !== i && i._id && o({
          type: mt,
          payload: t.response.data.item._id
        }))
      },
      get_swiftcheckout_shopify_customer_id: async function() {
        var t, e;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (V.validate_is_null_or_undefined(null === n || void 0 === n ? void 0 : n.swiftcheckout_client_id) || V.validate_is_null_or_undefined(null === n || void 0 === n ? void 0 : n.swiftcheckout_customer_id) || V.validate_is_null_or_undefined(null === n || void 0 === n ? void 0 : n.swiftcheckout_store_id)) return;
        const o = {
            swiftcheckout_client_id: n.swiftcheckout_client_id,
            swiftcheckout_customer_id: n.swiftcheckout_customer_id,
            swiftcheckout_store_id: n.swiftcheckout_store_id
          },
          r = await Z("api/v2/merchant/swiftcheckoutcustomerid", o, {}, {
            use_auth: !0,
            use_cache: !0
          });
        return !0 === r.status && "success" === (null === (t = r.response) || void 0 === t || null === (e = t.meta) || void 0 === e ? void 0 : e.status) ? r.response.data : null
      },
      get_kwikpass_shopify_customer_id: async function() {
        var t, e;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (V.validate_is_null_or_undefined(null === n || void 0 === n ? void 0 : n.kp_customer_id)) return;
        const o = {
            kwikpass_customer_id: n.kp_customer_id
          },
          r = await Z("api/v2/merchant/leads-kwikpasssession/eb854c8f-080a-44ab-9d8a-89e13768b3d4", o, {}, {
            use_auth: !0
          });
        return !0 === r.status && "success" === (null === (t = r.response) || void 0 === t || null === (e = t.meta) || void 0 === e ? void 0 : e.status) ? r.response.data : null
      },
      handleWindowMessage: async t => {
        try {
          const n = t.data;
          if ("object" === typeof n) {
            const t = n.event,
              o = n.payload;
            if (!t) return;
            if (t && t === W.app_constant.WINDOW_MESSAGE_EVENTS.REFRESH_WALLET) s.get_lead();
            else if (t === W.app_constant.WINDOW_MESSAGE_EVENTS.APPLYCOUPON) {
              const t = document.getElementById("nectorRewardsSdkIFrame"),
                {
                  platform: n,
                  redirect_link: r,
                  should_add_product_to_cart: i,
                  should_reload: a = !0
                } = o;
              if ("shopify" === n) {
                V.window_post_message_to_iframe(t, W.app_constant.WINDOW_MESSAGE_EVENTS.APPLYCOUPON_ACK);
                let n = !1;
                if (i) {
                  var e;
                  const t = V.process_parse_shopifycartlink(r);
                  if ((null === t || void 0 === t || null === (e = t.variants) || void 0 === e ? void 0 : e.length) > 0 && await q.add_to_shopify_cart({
                      items: t.variants
                    }), null !== t && void 0 !== t && t.discount_code) {
                    const e = `${window.location.origin}/discount/${t.discount_code}`;
                    await s.apply_coupon_code_shopify(e)
                  }
                  a && window.location.reload()
                } else n = await s.apply_coupon_code_shopify(r);
                V.window_post_message_to_iframe(t, W.app_constant.WINDOW_MESSAGE_EVENTS.APPLYCOUPON_RESULT, n)
              }
            } else if (t === W.app_constant.WINDOW_MESSAGE_EVENTS.ENABLE_BODY_SCROLL) document.body.style.removeProperty("overflow");
            else if (t === W.app_constant.WINDOW_MESSAGE_EVENTS.DISABLE_BODY_SCROLL) document.body.style.setProperty("overflow", "hidden");
            else if (t === W.app_constant.WINDOW_MESSAGE_EVENTS.LOGIN_VIA_THIRDPARTYACCOUNTS) {
              const t = o.identifier || null,
                e = o.fallback_url || null,
                n = o.is_autologin || !1,
                r = o.autologin_cancelled || !1;
              if ("kwikpass" === t) {
                if (r) return tt();
                ! function(t, e) {
                  const n = Q();
                  let o = !0;
                  const r = V.process_get_localitem(W.app_constant.NECTOR_KWIKPASS_AUTOLOGIN_BLOCKED_UNTIL);
                  if (V.validate_not_null_or_undefined(r) && (Number(r) && Number(r) > Date.now() ? o = !1 : V.process_remove_localitem(W.app_constant.NECTOR_KWIKPASS_AUTOLOGIN_BLOCKED_UNTIL)), !n || e && !o) t && (window.location = t);
                  else {
                    try {
                      let t = new URL(window.location.href);
                      t.searchParams.set("shownector", "true");
                      const e = t.pathname + t.search + t.hash;
                      window.handleKpAndShopifyLogin(e, !1)
                    } catch (i) {
                      t && (window.location = t)
                    }
                    e && tt()
                  }
                }(e, n)
              } else if ("shiprocket" === t) {
                if (r) return ot();
                ! function(t, e) {
                  const n = nt();
                  let o = !0;
                  const r = V.process_get_localitem(W.app_constant.NECTOR_SHIPROCKET_AUTOLOGIN_BLOCKED_UNTIL);
                  if (V.validate_not_null_or_undefined(r) && (Number(r) && Number(r) > Date.now() ? o = !1 : V.process_remove_localitem(W.app_constant.NECTOR_SHIPROCKET_AUTOLOGIN_BLOCKED_UNTIL)), !n || e && !o) t && (window.location = t);
                  else {
                    try {
                      window.shipRocketMarketingLogin()
                    } catch (i) {
                      t && (window.location = t)
                    }
                    e && ot()
                  }
                }(e, n)
              } else if ("shopflo" === t) {
                if (r) return at();
                ! function(t, e) {
                  const n = it();
                  let o = !0;
                  const r = V.process_get_localitem(W.app_constant.NECTOR_SHOPFLO_AUTOLOGIN_BLOCKED_UNTIL);
                  if (V.validate_not_null_or_undefined(r) && (Number(r) && Number(r) > Date.now() ? o = !1 : V.process_remove_localitem(W.app_constant.NECTOR_SHOPFLO_AUTOLOGIN_BLOCKED_UNTIL)), !n || e && !o) t && (window.location = t);
                  else {
                    try {
                      window.handleFloLogin()
                    } catch (i) {
                      t && (window.location = t)
                    }
                    e && at()
                  }
                }(e, n)
              } else if ("nitro" === t) {
                if (r) return ft();
                ! function(t, e) {
                  const n = dt();
                  let o = !0;
                  const r = V.process_get_localitem(W.app_constant.NECTOR_NITRO_AUTOLOGIN_BLOCKED_UNTIL);
                  if (V.validate_not_null_or_undefined(r) && (Number(r) && Number(r) > Date.now() ? o = !1 : V.process_remove_localitem(W.app_constant.NECTOR_NITRO_AUTOLOGIN_BLOCKED_UNTIL)), !n || e && !o) t && (window.location = t);
                  else {
                    try {
                      window.nitro.initiateShopifyLogin((() => {
                        let t = new URL(window.location.href);
                        t.searchParams.set("shownector", "true");
                        const e = t.pathname + t.search + t.hash;
                        window.location.href = e
                      }))
                    } catch (i) {
                      t && (window.location = t)
                    }
                    e && ft()
                  }
                }(e, n)
              }
            } else t === W.app_constant.WINDOW_MESSAGE_EVENTS.CLOSE_REFERRAL_POPUP && V.dispatch_custom_event(W.app_constant.CUSTOM_DOM_EVENTS.CLOSE_REFERRAL_POPUP)
          }
        } catch (n) {}
      },
      get_appconfig: (t, e) => {
        var o, r, i, a, c, s;
        if (V.validate_is_null_or_undefined(t) || V.validate_is_null_or_undefined(null === n || void 0 === n || null === (o = n.systeminfo) || void 0 === o || null === (r = o.websdkinfos) || void 0 === r ? void 0 : r.items)) return e || null;
        const l = null === n || void 0 === n || null === (i = n.systeminfo) || void 0 === i || null === (a = i.websdkinfos) || void 0 === a || null === (c = a.items) || void 0 === c || null === (s = c.find((e => e.name === t))) || void 0 === s ? void 0 : s.value;
        return !1 === V.validate_is_null_or_undefined(l) ? l : null
      },
      apply_coupon_code: async function(t, e) {
        var n;
        let o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (V.validate_is_null_or_undefined(null === t || void 0 === t ? void 0 : t.value)) return;
        const r = null === t || void 0 === t ? void 0 : t.value;
        let i = (null === t || void 0 === t ? void 0 : t.redirect_link) || (null === t || void 0 === t || null === (n = t.offer) || void 0 === n ? void 0 : n.redirect_link) || "";
        return V.validate_not_null_or_undefined(i) && (i = V.get_string_templater()(i, {
          nector_discount_code: r
        })), "shopify" === e ? (V.validate_is_null_or_undefined(i) && (i = `${window.location.origin}/discount/${r}`), await s.apply_coupon_code_shopify(i)) : !V.validate_is_null_or_undefined(i) && (!0 === o && (window.open(i, "_parent"), "redirect"))
      },
      apply_coupon_code_shopify: async t => {
        const e = await Z(t, {}, {}, {
          fetch_opts: {
            credentials: "same-origin"
          }
        });
        return !0 === (null === e || void 0 === e ? void 0 : e.status) || 302 === (null === e || void 0 === e ? void 0 : e.statusCode)
      },
      set_show_rewards: t => {
        if (o({
            type: yt,
            payload: t
          }), !1 === t) {
          if (i) {
            V.get_nector_prefix_from_hash(i) === W.app_constant.NECTOR_SHOW_REWARDS_HASH_KEY && c("")
          }
          const t = new URL(window.location.href);
          (t.searchParams.has("shownector") || t.searchParams.has("shownectorpath")) && (t.searchParams.delete("shownector"), t.searchParams.delete("shownectorpath"), window.history.replaceState({}, document.title, t.toString())), s.set_rewards_path("")
        }
      },
      set_rewards_path: function() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = t;
        if (e && Object.keys(e).length > 0) {
          n += `?${new URLSearchParams(e).toString()}`
        }
        o({
          type: wt,
          payload: n
        })
      },
      set_lead: t => {
        o({
          type: gt,
          payload: t
        })
      }
    };
    return Object(vt.jsx)(ht.Provider, {
      value: {
        ...n || {},
        actions: s,
        getState: r
      },
      children: e
    })
  }
  var xt = function() {
    var t, e;
    const n = (null === (t = Object(i.useContext)(ht).systeminfo) || void 0 === t || null === (e = t.businessinfos) || void 0 === e ? void 0 : e.entity) || null,
      o = !0 === (null === n || void 0 === n ? void 0 : n.is_freezed),
      r = !0 === (null === n || void 0 === n ? void 0 : n.is_running);
    return !(n && !o && r)
  };
  var Tt = function() {
      const [t, e] = Object(i.useState)(0);
      return () => e((t => t + 1))
    },
    St = n(4),
    kt = n.n(St);
  var Nt = function() {
    const t = Object(i.useContext)(ht),
      e = kt()(),
      {
        actions: {
          set_show_rewards: n,
          set_rewards_path: o
        }
      } = t,
      r = new URLSearchParams(e.search),
      a = r.get("shownector"),
      c = r.get("shownectorpath") || "",
      s = Object(i.useRef)(null);
    Object(i.useEffect)((() => {
      a && a !== s.current && ("true" === a ? (o(c), n(!0)) : "false" === a && n(!1), s.current = a)
    }), [a])
  };
  var jt = function() {
    const t = Object(i.useContext)(ht),
      [e] = Object(a.useHash)(),
      {
        actions: {
          set_show_rewards: n,
          set_rewards_path: o
        }
      } = t;
    Object(i.useEffect)((() => {
      if (e) {
        const t = V.get_nector_prefix_from_hash(e),
          r = V.get_nector_path_from_hash(e);
        t === W.app_constant.NECTOR_SHOW_REWARDS_HASH_KEY ? (o(r || ""), n(!0)) : t === W.app_constant.NECTOR_HIDE_REWARDS_HASH_KEY && n(!1)
      }
    }), [e])
  };
  var Rt = function() {
    var t;
    const e = Object(i.useContext)(ht);
    Object(i.useEffect)((() => {
      var t, n, o, r;
      const i = (null === (t = e.systeminfo) || void 0 === t || null === (n = t.websdkinfos) || void 0 === n || null === (o = n.items) || void 0 === o || null === (r = o.find((t => "common_config" === t.name))) || void 0 === r ? void 0 : r.value) || null;
      if (i) {
        const t = i.font_name || null,
          e = i.font_url || null,
          n = V.process_get_localitem(W.app_constant.NECTOR_FONT_NAME_LOCALSTORAGE_KEY) || null,
          o = V.process_get_localitem(W.app_constant.NECTOR_FONT_URL_LOCALSTORAGE_KEY) || null;
        t === n && e === o || (t ? V.process_add_localitem(W.app_constant.NECTOR_FONT_NAME_LOCALSTORAGE_KEY, t) : V.process_remove_localitem(W.app_constant.NECTOR_FONT_NAME_LOCALSTORAGE_KEY), e ? V.process_add_localitem(W.app_constant.NECTOR_FONT_URL_LOCALSTORAGE_KEY, e) : V.process_remove_localitem(W.app_constant.NECTOR_FONT_URL_LOCALSTORAGE_KEY), V.load_font())
      }
    }), [null === e || void 0 === e || null === (t = e.systeminfo) || void 0 === t ? void 0 : t.websdkinfos])
  };
  var At = function() {
    var t;
    const e = Object(i.useContext)(ht),
      n = xt();
    Object(i.useEffect)((() => {
      var t, o, r;
      const i = null === (t = e.entity) || void 0 === t ? void 0 : t.workspace_id;
      if (n || V.validate_is_null_or_undefined(i) || V.validate_not_null_or_undefined(null === (o = e.lead) || void 0 === o || null === (r = o.item) || void 0 === r ? void 0 : r._id) || nector.business_customer_id || !1 === W.app_constant.SUPPORTED_SWIFTCHECKOUT_CUSTOM_LOGIN_ENTITIES.includes(i)) return;
      let a = !1,
        c = null,
        s = 0;
      const l = () => {
          c && (clearInterval(c), c = null)
        },
        u = () => {
          s >= 60 && l()
        };
      return c = setInterval((async () => {
        if (s++, !a) {
          a = !0;
          try {
            var t, n;
            let o = null;
            const r = V.process_get_localitem(W.app_constant.SWIFTCHECKOUT_CUSTOMER_ID);
            if (V.validate_is_null_or_undefined(r) || (null === r || void 0 === r || null === (t = r.trim) || void 0 === t ? void 0 : t.call(r).length) > 0 === !1 || "null" === (null === r || void 0 === r || null === (n = r.trim) || void 0 === n ? void 0 : n.call(r))) return a = !1, void u();
            const c = V.process_get_localitem(W.app_constant.NECTOR_SWIFTCHECKOUT_CUSTOMER_ID_CACHE);
            if (c) {
              const t = V.safe_parse_json(c);
              t && t.swiftcheckout_customer_id === r && t.shopify_customer_id && (o = t.shopify_customer_id)
            }
            if (V.validate_is_null_or_undefined(o)) {
              const t = await e.actions.get_swiftcheckout_shopify_customer_id({
                swiftcheckout_client_id: W.app_constant.SWIFTCHECKOUT_CLIENT_ID,
                swiftcheckout_customer_id: r,
                swiftcheckout_store_id: W.app_constant.SWIFTCHECKOUT_STOREID_MAP[i]
              });
              if (V.validate_not_null_or_undefined(null === t || void 0 === t ? void 0 : t.customer_id)) {
                o = t.customer_id;
                const e = JSON.stringify({
                  swiftcheckout_customer_id: r,
                  shopify_customer_id: o
                });
                V.process_add_localitem(W.app_constant.NECTOR_SWIFTCHECKOUT_CUSTOMER_ID_CACHE, e)
              }
              l()
            }
            V.validate_not_null_or_undefined(o) && (e.actions.get_lead({
              customer_id: o.replace("shopify-", "")
            }), l()), u()
          } catch (o) {
            console.error(o), l()
          }
          a = !1
        }
      }), 1e3), () => {
        l()
      }
    }), [n, e.entity, null === (t = e.lead) || void 0 === t ? void 0 : t.pending])
  };
  var It = function() {
    const [t, e] = Object(i.useState)(!1), n = Object(i.useRef)({}), o = Object(i.useContext)(ht);
    n.current.login_customer = async t => {
      try {
        var e, n;
        const r = V.process_get_localitem(W.app_constant.NECTOR_KWIKPASS_CUSTOMER_ID_CACHE);
        if (r) {
          const e = V.safe_parse_json(r);
          if (e && e.kp_customer_id === t && e.lead_id) return void await o.actions.get_lead({
            lead_id: e.lead_id
          })
        }
        const i = await o.actions.get_kwikpass_shopify_customer_id({
          kp_customer_id: t
        });
        if (V.validate_is_null_or_undefined(null === i || void 0 === i || null === (e = i.item) || void 0 === e ? void 0 : e._id)) return;
        const a = null === i || void 0 === i || null === (n = i.item) || void 0 === n ? void 0 : n._id,
          c = JSON.stringify({
            kp_customer_id: t,
            lead_id: a
          });
        V.process_add_localitem(W.app_constant.NECTOR_KWIKPASS_CUSTOMER_ID_CACHE, c), await o.actions.get_lead({
          lead_id: a
        })
      } catch (r) {
        console.error(r)
      }
    }, n.current.logout_customer = () => {
      var t, e;
      V.process_remove_localitem(W.app_constant.NECTOR_KWIKPASS_CUSTOMER_ID_CACHE), null !== (t = o.lead) && void 0 !== t && null !== (e = t.item) && void 0 !== e && e._id && (o.actions.set_lead(null), o.actions.get_aggreegateddetails())
    }, Object(i.useEffect)((() => {
      var t, n;
      const r = (null === (t = o.systeminfo) || void 0 === t || null === (n = t.integrationinfos) || void 0 === n ? void 0 : n.kwikpass) || null;
      r && e(!0 === r.is_active)
    }), [o]), Object(i.useEffect)((() => {
      if (!t) return;
      window.kp_customer_id && n.current.login_customer(window.kp_customer_id);
      let e = () => {
          window.kp_customer_id && n.current.login_customer(window.kp_customer_id)
        },
        o = () => {
          n.current.logout_customer()
        };
      return window.addEventListener("kp_customer_id", e), window.addEventListener("kp_user_logged_out", o), () => {
        window.removeEventListener("kp_customer_id", e), window.removeEventListener("kp_user_logged_out", o)
      }
    }), [t])
  };
  const Lt = async t => {
    if (!t) return;
    if (!1 === Array.isArray(t)) {
      if (!t.event || !t.entity_id || !t.id_type || !t.id || !t.incr_by) return;
      t = [t]
    }
    const e = t;
    try {
      const t = function() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const e = nector.platform_url || "https://platform.nector.io",
          n = new URL(e);
        let o = null;
        if (n.host && "platform.nector.io" === n.host) o = "https://collectfront.nector.io";
        else {
          if (!n.host || "stageplatform.nector.io" !== n.host) return null;
          o = "https://stagecollectfront.nector.io"
        }
        return t && (o = `${o}/${t}`), o
      }("bulkcounters");
      if (!t) return;
      await fetch(t, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(e)
      })
    } catch (n) {
      console.error(n)
    }
  }, Pt = function(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return !(!t || !V.validate_is_string(t)) && (!1 === t.toLowerCase().endsWith("_track") || (!1 === Array.isArray(e) || e.length < 1 || !e.find((e => e && e.toLowerCase() === t.toLowerCase()))))
  }, Ut = (t, e, n, o) => {
    if (!1 !== V.is_session_storage_supported() && t && e && n && o) try {
      const r = [W.app_constant.NECTOR_EVENT_PREFIX, t, e, n, o].join("::"),
        i = window.sessionStorage.getItem(r),
        a = (Number(i || 0) || 0) + 1;
      window.sessionStorage.setItem(r, a)
    } catch (r) {}
  };

  function Dt(t) {
    if (!t) return null;
    const e = t.toLowerCase();
    for (let n = 0; n < W.app_constant.SRC_CLASSIFICATION_MAP.length; n++)
      if (e.includes(W.app_constant.SRC_CLASSIFICATION_MAP[n].substr)) return W.app_constant.SRC_CLASSIFICATION_MAP[n].event;
    return null
  }
  var Kt = function() {
      const t = Object(i.useContext)(ht),
        e = Object(i.useRef)(!1),
        n = Object(i.useRef)(new Set),
        o = t.entity_id,
        r = t.systeminfo;
      Object(i.useEffect)((() => {
        if (e.current || V.validate_is_null_or_undefined(o) || V.validate_is_null_or_undefined(r)) return;
        e.current = !0;
        const t = Object.keys((null === r || void 0 === r ? void 0 : r.tooltrackinfos) || {}).filter((t => (null === r || void 0 === r ? void 0 : r.tooltrackinfos[t]) && Number(null === r || void 0 === r ? void 0 : r.tooltrackinfos[t]) > 0)),
          i = () => {
            const e = new Set,
              r = Array.from(document.getElementsByTagName("script"));
            for (const t of r) {
              const n = t.getAttribute("src") || "";
              if (n) {
                const t = Dt(n);
                t && e.add(V.normalize_tool_name(t))
              }
            }
            const i = Array.from(e).filter(Boolean);
            if (i.length < 1) return;
            const a = i.filter((t => !1 === n.current.has(t)));
            if (!(a.length < 1))
              for (const c of a) !1 !== Pt(c, t || []) && (Ut(c, o, "entities", o), n.current.add(c))
          };
        i();
        const a = new MutationObserver((t => {
          for (const e of t)
            if ("childList" === e.type) {
              Array.from(e.addedNodes || []).some((t => t.tagName && "script" === t.tagName.toLowerCase())) && i()
            }
        }));
        try {
          a.observe(document.documentElement || document.body, {
            childList: !0,
            subtree: !0
          })
        } catch (s) {
          return
        }
        const c = setInterval((() => {
          i()
        }), 5e3);
        return () => {
          try {
            a.disconnect()
          } catch (s) {
            return
          }
          clearInterval(c)
        }
      }), [o, V.validate_is_null_or_undefined(r)])
    },
    Mt = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0
    },
    Ft = i.default.createContext && i.default.createContext(Mt),
    Ht = function() {
      return Ht = Object.assign || function(t) {
        for (var e, n = 1, o = arguments.length; n < o; n++)
          for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t
      }, Ht.apply(this, arguments)
    },
    Wt = function(t, e) {
      var n = {};
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
      if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (o = Object.getOwnPropertySymbols(t); r < o.length; r++) e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]])
      }
      return n
    };

  function Bt(t) {
    return t && t.map((function(t, e) {
      return i.default.createElement(t.tag, Ht({
        key: e
      }, t.attr), Bt(t.child))
    }))
  }

  function Gt(t) {
    return function(e) {
      return i.default.createElement(zt, Ht({
        attr: Ht({}, t.attr)
      }, e), Bt(t.child))
    }
  }

  function zt(t) {
    var e = function(e) {
      var n, o = t.attr,
        r = t.size,
        a = t.title,
        c = Wt(t, ["attr", "size", "title"]),
        s = r || e.size || "1em";
      return e.className && (n = e.className), t.className && (n = (n ? n + " " : "") + t.className), i.default.createElement("svg", Ht({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, e.attr, o, c, {
        className: n,
        style: Ht(Ht({
          color: t.color || e.color
        }, e.style), t.style),
        height: s,
        width: s,
        xmlns: "http://www.w3.org/2000/svg"
      }), a && i.default.createElement("title", null, a), t.children)
    };
    return void 0 !== Ft ? i.default.createElement(Ft.Consumer, null, (function(t) {
      return e(t)
    })) : e(Mt)
  }

  function Vt(t) {
    return Gt({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [{
        tag: "polyline",
        attr: {
          points: "20 12 20 22 4 22 4 12"
        }
      }, {
        tag: "rect",
        attr: {
          x: "2",
          y: "7",
          width: "20",
          height: "5"
        }
      }, {
        tag: "line",
        attr: {
          x1: "12",
          y1: "22",
          x2: "12",
          y2: "7"
        }
      }, {
        tag: "path",
        attr: {
          d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
        }
      }]
    })(t)
  }

  function $t(t) {
    return Gt({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [{
        tag: "line",
        attr: {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }
      }, {
        tag: "line",
        attr: {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }
      }]
    })(t)
  }
  var Yt = n(16),
    Zt = n.n(Yt);
  var Xt = function() {
    const [t, e] = Object(i.useState)(window.innerWidth <= 575), n = Object(i.useRef)(!1), o = "ontouchstart" in document.documentElement && /mobi/i.test(navigator.userAgent), r = Object(i.useCallback)(Zt()((function() {
      e(window.innerWidth <= 575)
    }), 50), []);
    return !1 === n.current && (window.addEventListener("resize", r), n.current = !0), Object(i.useEffect)((() => () => {
      window.removeEventListener("resize", r)
    }), []), t || o
  };

  function qt(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    t && t.addEventListener && t.addEventListener.apply(t, e)
  }

  function Jt(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    t && t.removeEventListener && t.removeEventListener.apply(t, e)
  }
  var Qt = "undefined" !== typeof window,
    te = function(t) {
      var e = window.history,
        n = e[t];
      e[t] = function(e) {
        var o = n.apply(this, arguments),
          r = new Event(t.toLowerCase());
        return r.state = e, window.dispatchEvent(r), o
      }
    };
  Qt && (te("pushState"), te("replaceState"));
  var ee = function(t) {
      var e = window.history,
        n = e.state,
        o = e.length,
        r = window.location;
      return {
        trigger: t,
        state: n,
        length: o,
        hash: r.hash,
        host: r.host,
        hostname: r.hostname,
        href: r.href,
        origin: r.origin,
        pathname: r.pathname,
        port: r.port,
        protocol: r.protocol,
        search: r.search
      }
    },
    ne = "function" === typeof Event,
    oe = Qt && ne ? function() {
      var t = Object(i.useState)(ee("load")),
        e = t[0],
        n = t[1];
      return Object(i.useEffect)((function() {
        var t = function() {
            return n(ee("popstate"))
          },
          e = function() {
            return n(ee("pushstate"))
          },
          o = function() {
            return n(ee("replacestate"))
          };
        return qt(window, "popstate", t), qt(window, "pushstate", e), qt(window, "replacestate", o),
          function() {
            Jt(window, "popstate", t), Jt(window, "pushstate", e), Jt(window, "replacestate", o)
          }
      }), []), e
    } : function() {
      return {
        trigger: "load",
        length: 1
      }
    };
  var re = function() {
    var t, e, n, o;
    const r = Object(i.useContext)(ht),
      a = Xt(),
      c = oe(),
      s = (null === (t = r.systeminfo) || void 0 === t || null === (e = t.websdkinfos) || void 0 === e || null === (n = e.items) || void 0 === n || null === (o = n.find((t => "widget_config" === t.name))) || void 0 === o ? void 0 : o.value) || null;
    let l = !1;
    const u = (null === s || void 0 === s ? void 0 : s.hide_on_routes_desktop) || [],
      _ = (null === s || void 0 === s ? void 0 : s.hide_on_routes_mobile) || [],
      d = (null === s || void 0 === s ? void 0 : s.show_on_routes_desktop) || [],
      f = (null === s || void 0 === s ? void 0 : s.show_on_routes_mobile) || [],
      p = a ? _ : u,
      v = a ? f : d;
    v.length > 0 ? V.does_route_match(c.pathname, v) && (l = !0) : 0 === v.length && p.length > 0 ? (l = !0, V.does_route_match(c.pathname, p) && (l = !1)) : 0 === v.length && 0 === p.length && (l = !0);
    const h = !0 === (null === s || void 0 === s ? void 0 : s.hide_widget_desktop) && !1 === a,
      m = !0 === (null === s || void 0 === s ? void 0 : s.hide_widget_mobile) && !0 === a;
    return !r.systeminfo || !0 === h || !0 === m || !1 === l
  };
  var ie = function() {
    var t, e, n, o;
    const r = Object(i.useContext)(ht),
      a = (null === (t = r.systeminfo) || void 0 === t || null === (e = t.businessinfos) || void 0 === e ? void 0 : e.entity) || null,
      c = (null === (n = r.systeminfo) || void 0 === n || null === (o = n.actioninfos) || void 0 === o ? void 0 : o.loyalty_action) || null,
      s = !0 === (null === c || void 0 === c ? void 0 : c.is_active);
    return !a || !s
  };

  function ae(t, e) {
    const [n] = Object(i.useState)((() => ({
      value: t,
      callback: e,
      facade: {
        get current() {
          return n.value
        },
        set current(t) {
          const e = n.value;
          e !== t && (n.value = t, n.callback(t, e))
        }
      }
    })));
    return n.callback = e, n.facade
  }
  class ce {
    static set_widget_position() {
      var t, e, n, o;
      let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "0px";
      const s = W.settings_constant.DEFAULT_WIDGET_POSITION,
        l = V.parse_widget_position_string((null === (t = nector) || void 0 === t || null === (e = t.style) || void 0 === e ? void 0 : e.desktop) || s),
        u = V.parse_widget_position_string((null === (n = nector) || void 0 === n || null === (o = n.style) || void 0 === o ? void 0 : o.mobile) || s),
        _ = V.standardize_websdk_widget_position(r),
        d = V.standardize_websdk_widget_position(i);
      let f = null,
        p = null,
        v = null,
        h = null;
      f = _.edge ? _.edge : l.edge, p = d.edge ? d.edge : u.edge, v = Number(_.from_bottom) >= 0 ? Number(_.from_bottom) : Number(l.from_bottom), h = Number(d.from_bottom) >= 0 ? Number(d.from_bottom) : Number(u.from_bottom);
      const m = "left" === f ? c : "unset",
        g = "left" === f ? "unset" : c,
        b = a || !1,
        y = "left" === p ? b ? "-30px" : c : "unset",
        w = "right" === p ? b ? "-30px" : c : "unset";
      V.setCSSProperties(W.app_constant.CSS_PROPERTIES.DESKTOP_BTN_CONTAINER_BOTTOM, `${v}px`), V.setCSSProperties(W.app_constant.CSS_PROPERTIES.DESKTOP_BTN_CONTAINER_LEFT, m), V.setCSSProperties(W.app_constant.CSS_PROPERTIES.DESKTOP_BTN_CONTAINER_RIGHT, g), V.setCSSProperties(W.app_constant.CSS_PROPERTIES.MOBILE_BTN_CONTAINER_BOTTOM, `${h}px`), V.setCSSProperties(W.app_constant.CSS_PROPERTIES.MOBILE_BTN_CONTAINER_LEFT, y), V.setCSSProperties(W.app_constant.CSS_PROPERTIES.MOBILE_BTN_CONTAINER_RIGHT, w)
    }
    static get_render_position(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "top::bottom::left::right";
      if (V.validate_is_null_or_undefined(t) || V.validate_is_null_or_undefined(e)) return null;
      if (o.split("::").length < 4 && o.split("::").every((t => ["top", "bottom", "left", "right"].includes(t)))) return null;
      const {
        width: r,
        height: i
      } = e;
      if (V.validate_is_null_or_undefined(r) || V.validate_is_null_or_undefined(i)) return null;
      const a = t.getBoundingClientRect();
      let c = null;
      for (let s of o.split("::")) {
        let t = ce[`check_space_on_${s}`](a, e, n);
        if (t) {
          c = t;
          break
        }
      }
      return c
    }
    static check_space_on_top(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
      const {
        width: o,
        height: r
      } = e, i = window.innerHeight, a = window.innerWidth;
      return r <= t.top - n ? t.left + o < a ? {
        bottom: i - t.top + n,
        left: t.left,
        position: "top"
      } : o <= t.right ? {
        bottom: i - t.top + n,
        right: a - t.right,
        position: "top"
      } : null : null
    }
    static check_space_on_bottom(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
      const {
        width: o,
        height: r
      } = e, i = window.innerHeight, a = window.innerWidth;
      return r <= i - t.bottom + n ? t.right + o < a ? {
        top: t.bottom + n,
        left: t.left,
        position: "bottom"
      } : o <= t.left ? {
        top: t.bottom + n,
        right: a - t.right,
        position: "bottom"
      } : null : null
    }
    static check_space_on_right(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
      const {
        width: o,
        height: r
      } = e, i = window.innerHeight;
      if (o <= window.innerWidth - t.right + n) {
        if (r < i) {
          let e = i - (t.top + Math.floor(t.height / 2)) - Math.floor(r / 2);
          return e < 0 && (e = 10), e + r > i + 10 && (e = i - r - 10), {
            left: t.right + n,
            bottom: e,
            position: "right"
          }
        }
        return null
      }
      return null
    }
    static check_space_on_left(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15;
      const {
        width: o,
        height: r
      } = e, i = window.innerHeight;
      window.innerWidth;
      if (o <= t.left - n) {
        if (r < i) {
          let e = i - (t.top + Math.floor(t.height / 2)) - Math.floor(r / 2);
          return e < 0 && (e = 10), e + r > i + 10 && (e = i - r - 10), {
            left: t.left - o - n,
            bottom: e,
            position: "left"
          }
        }
        return null
      }
      return null
    }
  }
  var se = ce;
  var le = t => {
    var e, n;
    const {
      appContext: o,
      is_mobile: r,
      widget_config: a,
      brand_color: c,
      text_color: s,
      widget_side: l,
      icon: u
    } = t, _ = Object(i.useRef)(!1), d = Tt(), [f, p] = Object(i.useState)(!1), v = "left" === l ? f ? "0px 24px 24px 0px" : "0px 8px 8px 0px" : f ? "24px 0px 0px 24px" : "8px 0px 0px 8px", h = null === o || void 0 === o || null === (e = o.lead) || void 0 === e ? void 0 : e.item, m = (null === (n = o.entity) || void 0 === n ? void 0 : n.language) || "en";
    Object(i.useEffect)((() => {
      r && !0 === (null === a || void 0 === a ? void 0 : a.minimize_widget_mobile) ? p(!0) : p(!1)
    }), [a, r]);
    let g = V.get_translated_text(m, "coins"),
      b = V.get_safe_appconfigvalue(null === o || void 0 === o ? void 0 : o.entity, "coin_name");
    var y, w;
    b && (b.length <= 5 ? g = b : b.toLowerCase().includes("coin") ? g = V.get_translated_text(m, "coins") : b.toLowerCase().includes("point") || "ind" !== (null === o || void 0 === o || null === (y = o.entity) || void 0 === y ? void 0 : y.country) ? g = V.get_translated_text(m, "points") : "ind" === (null === o || void 0 === o || null === (w = o.entity) || void 0 === w ? void 0 : w.country) && (g = V.get_translated_text(m, "coins")));
    const O = ae(null, ((t, e) => {
      t && !e && d()
    }));
    return a && !1 === _.current ? (se.set_widget_position((null === a || void 0 === a ? void 0 : a.widget_position_desktop) || null, (null === a || void 0 === a ? void 0 : a.widget_position_mobile) || null, a.minimize_widget_mobile || null), _.current = !0) : o.systeminfo && !1 === _.current && (se.set_widget_position(), _.current = !0), Object(vt.jsx)("div", {
      title: "Rewards",
      className: "nector-rewards-widget-container " + (f ? "nector-mobile-minimized" : ""),
      id: "nector-rewards-widget-container",
      style: {
        borderRadius: f && h ? "24px" : ""
      },
      children: Object(vt.jsxs)("div", {
        className: "nector-btn-container",
        style: {
          background: c,
          borderRadius: v
        },
        children: [!h && Object(vt.jsx)("div", {
          className: "nector-btn",
          onClick: t.on_toggle_iframe,
          style: {
            height: f ? 40 : 50,
            width: f ? 75 : 50,
            paddingLeft: f && "left" === l ? "24px" : "",
            paddingRight: f && "right" === l ? "24px" : ""
          },
          children: t.show_rewards ? Object(vt.jsx)(vt.Fragment, {
            children: Object(vt.jsx)($t, {
              className: "nector-btn-icon",
              style: {
                color: s
              }
            })
          }) : Object(vt.jsx)(vt.Fragment, {
            children: u
          })
        }), h && Object(vt.jsx)("div", {
          ref: O,
          className: "nector-btn",
          onClick: t.on_toggle_iframe,
          style: {
            height: f ? 40 : 50,
            minWidth: f ? 75 : 50,
            paddingLeft: f && "left" === l ? "24px" : "",
            paddingRight: f && "right" === l ? "24px" : ""
          },
          children: t.show_rewards ? Object(vt.jsx)(vt.Fragment, {
            children: Object(vt.jsx)($t, {
              className: "nector-btn-icon",
              style: {
                color: s
              }
            })
          }) : Object(vt.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center"
            },
            children: [f && Object(vt.jsx)(vt.Fragment, {
              children: u
            }), !f && Object(vt.jsx)("div", {
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: Object(vt.jsxs)("div", {
                style: {
                  margin: "5px 10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                },
                children: [Object(vt.jsx)("p", {
                  className: "nector-defaulttext",
                  style: {
                    fontSize: 14,
                    color: s
                  },
                  children: Number(h.available || 0)
                }), Object(vt.jsx)("p", {
                  className: "nector-defaulttext",
                  style: {
                    fontSize: 9,
                    color: s
                  },
                  children: g
                })]
              })
            })]
          })
        })]
      })
    })
  };
  const ue = "20px";
  var _e = t => {
    var e, n;
    const {
      appContext: o,
      is_mobile: r,
      widget_config: a,
      brand_color: c,
      text_color: s,
      icon: l,
      widget_side: u
    } = t, _ = Object(i.useRef)(!1), d = Tt(), f = (null === (e = o.entity) || void 0 === e ? void 0 : e.language) || "en", p = (null === a || void 0 === a ? void 0 : a.widget_text) || V.get_translated_text(f, "rewards"), v = null === o || void 0 === o || null === (n = o.lead) || void 0 === n ? void 0 : n.item, [h, m] = Object(i.useState)(!1), [g, b] = Object(i.useState)(!1), y = Object(i.useRef)(null), w = Object(i.useRef)(0), O = Object(i.useRef)(0), E = ae(null, ((t, e) => {
      t && !e && d()
    })), C = (null === a || void 0 === a ? void 0 : a.hide_on_scroll_desktop) || !1, x = (null === a || void 0 === a ? void 0 : a.hide_on_scroll_mobile) || !1, T = (r ? x : C) && !t.show_rewards || !1;
    Object(i.useEffect)((() => {
      if (!T) return;
      const t = () => {
        !y.current && h && (y.current = setTimeout((() => {
          b(!0), m(!1), O.current = 0, y.current = null, setTimeout((() => {
            b(!1)
          }), 500)
        }), 1e3))
      };
      let e, n = !1;
      const o = () => {
        n || (requestAnimationFrame((() => {
          (() => {
            const t = window.pageYOffset || document.documentElement.scrollTop,
              e = Math.abs(t - w.current);
            e > 0 && (w.current = t, y.current && (clearTimeout(y.current), y.current = null), g && b(!1), h || (O.current += e, O.current >= 10 && m(!0)))
          })(), n = !1
        })), n = !0), clearTimeout(e), e = setTimeout(t, 100)
      };
      return window.addEventListener("scroll", o, {
        passive: !0
      }), () => {
        window.removeEventListener("scroll", o), clearTimeout(e), y.current && clearTimeout(y.current)
      }
    }), [T, h, g]), a && !1 === _.current ? (se.set_widget_position((null === a || void 0 === a ? void 0 : a.widget_position_desktop) || null, (null === a || void 0 === a ? void 0 : a.widget_position_mobile) || null, !1, ue), _.current = !0) : o.systeminfo && !1 === _.current && (se.set_widget_position(null, null, !1, ue), _.current = !0);
    let S = V.get_safe_appconfigvalue(null === o || void 0 === o ? void 0 : o.entity, "coin_name") || V.get_translated_text(f, "coins");
    const k = (null === a || void 0 === a ? void 0 : a.animate_widget_desktop) || !1,
      N = (null === a || void 0 === a ? void 0 : a.animate_widget_mobile) || !1,
      j = (r ? N : k) && !t.show_rewards || !1,
      R = h ? `nector-widget-scroll-hidden-${u}` : "",
      A = g ? `nector-widget-slide-in-${u}` : "";
    return Object(vt.jsx)("div", {
      title: "Rewards",
      className: "nector-rewards-widget-container " + (j ? "nector-animate" : "") + " " + R + " " + A,
      id: "nector-rewards-widget-container",
      children: Object(vt.jsxs)("div", {
        className: "nector-btn-container",
        style: {
          background: c,
          borderRadius: 32
        },
        children: [!v && Object(vt.jsx)("div", {
          className: "nector-btn",
          onClick: t.on_toggle_iframe,
          style: {
            height: 50,
            width: t.show_rewards || r ? "50px" : "auto"
          },
          children: t.show_rewards ? Object(vt.jsx)(vt.Fragment, {
            children: Object(vt.jsx)($t, {
              className: "nector-btn-icon",
              style: {
                color: s
              }
            })
          }) : Object(vt.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              gap: 10,
              width: "auto"
            },
            children: [l, r ? Object(vt.jsx)(vt.Fragment, {}) : Object(vt.jsx)("div", {
              style: {
                fontSize: 14,
                flexGrow: 1,
                color: s,
                textAlign: "center"
              },
              children: p
            })]
          })
        }), v && Object(vt.jsx)("div", {
          ref: E,
          className: "nector-btn",
          onClick: t.on_toggle_iframe,
          style: {
            height: 50,
            width: t.show_rewards || r ? "50px" : "auto"
          },
          children: t.show_rewards ? Object(vt.jsx)(vt.Fragment, {
            children: Object(vt.jsx)($t, {
              className: "nector-btn-icon",
              style: {
                color: s
              }
            })
          }) : Object(vt.jsxs)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 10px",
              gap: 5
            },
            children: [l, r ? Object(vt.jsx)(vt.Fragment, {}) : Object(vt.jsxs)("div", {
              style: {
                color: s,
                fontSize: 14
              },
              children: [Number(v.available || 0), "\xa0", S]
            })]
          })
        })]
      })
    })
  };

  function de(t) {
    return Gt({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none"
      },
      child: [{
        tag: "path",
        attr: {
          d: "M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z",
          fill: "currentColor"
        }
      }]
    })(t)
  }
  var fe = t => {
    var e, n, o, r;
    const {
      appContext: a,
      is_mobile: c,
      widget_config: s,
      brand_color: l,
      text_color: u
    } = t, _ = Object(i.useRef)(!1), d = Tt(), f = (null === (e = a.entity) || void 0 === e ? void 0 : e.language) || "en", p = (null === s || void 0 === s ? void 0 : s.widget_text) || V.get_translated_text(f, "rewards"), v = (null === (n = t.appContext) || void 0 === n || null === (o = n.entity) || void 0 === o ? void 0 : o.program_name) || V.get_translated_text(f, "rewards"), h = null === a || void 0 === a || null === (r = a.lead) || void 0 === r ? void 0 : r.item, m = ae(null, ((t, e) => {
      t && !e && d()
    }));
    s && !1 === _.current ? (se.set_widget_position((null === s || void 0 === s ? void 0 : s.widget_position_desktop) || null, (null === s || void 0 === s ? void 0 : s.widget_position_mobile) || null, !1, null), _.current = !0) : a.systeminfo && !1 === _.current && (se.set_widget_position(null, null, !1, null), _.current = !0);
    let g = V.get_safe_appconfigvalue(null === a || void 0 === a ? void 0 : a.entity, "coin_name") || V.get_translated_text(f, "coins");
    const b = () => {
        !0 !== t.show_rewards && t.on_toggle_iframe()
      },
      y = Number(null === h || void 0 === h ? void 0 : h.available) > 0 ? Number(null === h || void 0 === h ? void 0 : h.available) : "";
    return Object(vt.jsx)("div", {
      title: "Rewards",
      style: {
        zIndex: t.show_rewards ? W.settings_constant.DEFAULT_Z_INDEX - 5 : ""
      },
      className: "nector-rewards-widget-container",
      id: "nector-rewards-widget-container",
      children: Object(vt.jsxs)("div", {
        className: "nector-btn-container",
        style: {
          background: l
        },
        children: [!h && Object(vt.jsx)("div", {
          className: "nector-btn",
          onClick: b,
          style: {
            height: 48,
            width: "100vw",
            transition: "inherit",
            cursor: t.show_rewards ? "inherit" : "pointer"
          },
          children: Object(vt.jsxs)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              padding: "0 10px",
              width: "100vw"
            },
            children: [!1 === c && Object(vt.jsxs)("div", {
              style: {
                fontSize: 18,
                color: u
              },
              children: [Object(vt.jsx)("span", {
                children: v
              }), Object(vt.jsx)("span", {
                style: {
                  borderRight: `1px solid ${u}`,
                  marginLeft: 8
                }
              })]
            }), Object(vt.jsx)("div", {
              style: {
                color: u,
                fontSize: c ? 12 : 16,
                textAlign: "center"
              },
              children: p
            }), Object(vt.jsx)(de, {
              style: {
                color: u,
                transform: "scale(2)",
                marginLeft: c ? 8 : 16
              }
            })]
          })
        }), h && Object(vt.jsx)("div", {
          ref: m,
          className: "nector-btn",
          onClick: b,
          style: {
            height: 48,
            width: "100vw",
            transition: "inherit",
            cursor: t.show_rewards ? "inherit" : "pointer"
          },
          children: Object(vt.jsxs)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              padding: "0 10px",
              width: "100vw"
            },
            children: [!1 === c && Object(vt.jsxs)("div", {
              style: {
                fontSize: 18,
                color: u
              },
              children: [Object(vt.jsx)("span", {
                children: v
              }), Object(vt.jsx)("span", {
                style: {
                  borderRight: `1px solid ${u}`,
                  marginLeft: 8
                }
              })]
            }), Object(vt.jsx)("div", {
              style: {
                color: u,
                fontSize: c ? 12 : 16,
                textAlign: "center"
              },
              children: V.get_translated_text(f, "sticky_widget_component_widget_text", {
                balance: y,
                coin_name: g
              })
            }), Object(vt.jsx)(de, {
              style: {
                color: u,
                transform: "scale(2)",
                marginLeft: c ? 8 : 16
              }
            })]
          })
        })]
      })
    })
  };
  var pe = function(t) {
      var e, n, o, r;
      const a = Object(i.useContext)(ht),
        c = Xt(),
        s = re(),
        l = ie(),
        u = a.actions.get_appconfig("widget_config"),
        _ = a.actions.get_appconfig("common_config");
      Object(i.useEffect)((() => {
        t.set_is_widget_reloaded((t => t + 1))
      }), [s]);
      const d = V.parse_widget_position_string(W.settings_constant.DEFAULT_WIDGET_POSITION),
        f = V.parse_widget_position_string(c ? null === (e = nector) || void 0 === e || null === (n = e.style) || void 0 === n ? void 0 : n.mobile : null === (o = nector) || void 0 === o || null === (r = o.style) || void 0 === r ? void 0 : r.desktop),
        p = V.standardize_websdk_widget_position(c ? null === u || void 0 === u ? void 0 : u.widget_position_mobile : null === u || void 0 === u ? void 0 : u.widget_position_desktop).edge || f.edge || d.edge,
        v = V.get_safe_appconfigvalue(_, "background_color"),
        h = V.get_safe_appconfigvalue(_, "text_color");
      let m = Object(vt.jsx)(Vt, {
        className: "nector-btn-icon",
        style: {
          color: h
        }
      }, "gift");
      const g = (null === u || void 0 === u ? void 0 : u.custom_icon) || null;
      V.validate_not_null_or_undefined(g) && (m = Object(vt.jsx)("img", {
        src: g,
        className: "nector-btn-icon"
      }));
      const b = {
          ...t,
          appContext: a,
          is_mobile: c,
          widget_config: u,
          brand_color: v,
          text_color: h,
          widget_side: p,
          icon: m
        },
        y = c ? (null === u || void 0 === u ? void 0 : u.widget_type_mobile) || (null === u || void 0 === u ? void 0 : u.widget_type_desktop) || "edge" : (null === u || void 0 === u ? void 0 : u.widget_type_desktop) || "edge";
      if (!0 === s || !0 === l) return null;
      switch (y) {
        case "edge":
          return Object(vt.jsx)(le, {
            ...b
          });
        case "floating":
          return Object(vt.jsx)(_e, {
            ...b
          });
        case "sticky":
          return Object(vt.jsx)(fe, {
            ...b
          })
      }
    },
    ve = function() {
      return ve = Object.assign || function(t) {
        for (var e, n = 1, o = arguments.length; n < o; n++)
          for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t
      }, ve.apply(this, arguments)
    };

  function he(t, e) {
    var n = {};
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (o = Object.getOwnPropertySymbols(t); r < o.length; r++) e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]])
    }
    return n
  }
  var me = {
      color: "#38ad48",
      enabled: !0,
      size: 50,
      style: {}
    },
    ge = function(t) {
      return parseFloat(t.toString()).toString() === t.toString() ? t + "px" : t.toString()
    },
    be = ve(ve({}, {
      speed: 100,
      still: !1,
      thickness: 100
    }), {
      secondaryColor: "rgba(0,0,0,0.44)"
    });
  ! function(t, e) {
    void 0 === e && (e = {});
    var n = e.insertAt;
    if (t && "undefined" !== typeof document) {
      var o = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
      r.type = "text/css", "top" === n && o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
    }
  }("@keyframes spinners-react-circular-fixed{0%{stroke-dashoffset:325}to{stroke-dashoffset:151}}");
  var ye = function(t) {
    var e = t.secondaryColor,
      n = t.speed,
      o = t.still,
      r = t.thickness,
      a = he(t, ["secondaryColor", "speed", "still", "thickness"]),
      c = r / 100 * 4,
      s = o ? {} : {
        animation: "spinners-react-circular-fixed " + 140 / n + "s linear infinite"
      };
    return i.default.createElement("svg", ve({
      fill: "none"
    }, a, {
      viewBox: "0 0 66 66"
    }), i.default.createElement("circle", {
      cx: "33",
      cy: "33",
      fill: "none",
      r: "28",
      stroke: e,
      strokeWidth: c
    }), i.default.createElement("circle", {
      cx: "33",
      cy: "33",
      fill: "none",
      r: "28",
      stroke: "currentColor",
      strokeDasharray: "40, 134",
      strokeDashoffset: "325",
      strokeLinecap: "round",
      strokeWidth: c,
      style: s
    }))
  };
  ye.defaultProps = be;
  var we = function(t) {
    var e = function(e) {
      var n = e.color,
        o = e.enabled,
        r = e.size,
        a = e.style,
        c = he(e, ["color", "enabled", "size", "style"]),
        s = ve(ve({}, c), {
          style: ve({
            color: n,
            overflow: "visible",
            width: ge(r)
          }, a)
        });
      return o ? i.default.createElement(t, ve({}, s)) : null
    };
    return e.defaultProps = me, e
  }(ye);
  var Oe = function(t) {
    const e = Object(i.useRef)(!0);
    e.current && t && t(), e.current = !1
  };
  var Ee = function(t) {
    var e, n, o, r, a, c;
    const s = Object(i.useContext)(ht),
      [l, u] = Object(i.useState)(!1),
      [_, d] = Object(i.useState)(!1),
      f = Object(i.useRef)(),
      p = Xt(),
      v = re(),
      h = ie(),
      m = et(),
      g = rt(),
      b = ct(),
      y = pt(),
      w = (null === (e = s.systeminfo) || void 0 === e || null === (n = e.websdkinfos) || void 0 === n || null === (o = n.items) || void 0 === o || null === (r = o.find((t => "common_config" === t.name))) || void 0 === r ? void 0 : r.value) || null,
      O = s.actions.get_appconfig("widget_config"),
      E = "sticky" === (p ? (null === O || void 0 === O ? void 0 : O.widget_type_mobile) || (null === O || void 0 === O ? void 0 : O.widget_type_desktop) || "edge" : (null === O || void 0 === O ? void 0 : O.widget_type_desktop) || "edge"),
      C = v || p || E,
      x = () => {
        d(!1);
        const t = document.getElementById("nector-rewards-widget-container"),
          e = Math.min(.75 * window.innerHeight, 600);
        let n = se.get_render_position(t, {
          width: 375,
          height: e
        });
        n && !E || (n = {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }, d(!0)), Math.round(n.left) <= 0 && (n.left += 10), Math.round(n.right) <= 0 && (n.right += 10), f.current = V.process_omit_keys_from_object(n, ["position"]), !0 === nector.hide_widget && nector.override_iframe_position && Object.keys(nector.override_iframe_position).length > 1 && (f.current = nector.override_iframe_position)
      };
    Oe((() => {
      x()
    })), Object(i.useMemo)((() => {
      0 !== t.is_widget_reloaded && x()
    }), [String(t.is_widget_reloaded)]);
    let T = s.rewards_path || "",
      S = `${nector.websdk_url}/nector${T}`;
    const k = new URL(S).search;
    [...new URLSearchParams(k).keys()].length < 1 ? S += "?" : S += "&";
    const N = {
      murl: nector.platform_url,
      mkey: nector.api_key,
      p_url: window.location.href
    };
    if (nector.identifier && (N.mi = nector.identifier), nector.business_customer_id ? N.customer_id = nector.business_customer_id : null !== (a = s.lead) && void 0 !== a && null !== (c = a.item) && void 0 !== c && c.customer_id && (N.customer_id = s.lead.item.customer_id.replace("shopify-", "").replace("woocommerce-", "").replace("custom_website-", "")), nector.target_currency && (N.t_curr = nector.target_currency), s.entity_id) {
      var j;
      nector.font_url && nector.font_name && (N.font_url = nector.font_url, N.font_name = nector.font_name), nector.app && W.app_constant.SUPPORTED_APPS.includes(nector.app) && (N.app = nector.app), m.is_kwikpass_enabled ? (N.tpa_identifier = "kwikpass", N.tpa_autologin = m.should_try_autologin ? "true" : "false") : g.is_shiprocketlogin_enabled ? (N.tpa_identifier = "shiprocket", N.tpa_autologin = g.should_try_autologin ? "true" : "false") : b.is_shopflo_enabled ? (N.tpa_identifier = "shopflo", N.tpa_autologin = b.should_try_autologin ? "true" : "false") : y.is_nitro_enabled && (N.tpa_identifier = "nitro", N.tpa_autologin = y.should_try_autologin ? "true" : "false");
      const e = (null === (j = s.entity) || void 0 === j ? void 0 : j.language) || "en";
      N.lng = e;
      S += `${new URLSearchParams(N).toString()}`;
      const n = V.get_safe_appconfigvalue(w, "background_color"),
        o = n ? `linear-gradient(to right, ${V.adjust_color(n,15)}, ${n})` : "white";
      return 0 === t.is_widget_reloaded || !0 === h ? null : Object(vt.jsxs)("div", {
        children: [_ && Object(vt.jsx)("div", {
          className: "nector-iframe-overlay",
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: m.is_kwikpass_enabled ? 99999990 : W.settings_constant.DEFAULT_Z_INDEX - 2,
            backgroundColor: "rgba(0,0,0,0.75)"
          },
          onClick: t.on_close || void 0
        }), Object(vt.jsxs)("div", {
          className: "nector-iframe-container",
          style: {
            ...p ? {} : f.current,
            ...m.is_kwikpass_enabled ? {
              zIndex: "99999999"
            } : {}
          },
          children: [C && Object(vt.jsx)("div", {
            className: "nector-close-btn-container",
            style: {
              backgroundColor: (null === w || void 0 === w ? void 0 : w.background_color) || "white",
              background: o
            },
            children: Object(vt.jsx)($t, {
              className: "nector-btn-icon",
              onClick: t.on_close || void 0,
              style: {
                color: V.get_safe_appconfigvalue(w, "text_color")
              }
            })
          }), Object(vt.jsx)("iframe", {
            onLoad: () => u(!0),
            id: "nectorRewardsSdkIFrame",
            title: "Rewards",
            src: S,
            width: "100%",
            height: "100%",
            style: {
              border: "none",
              background: "#FFF"
            }
          }), !l && Object(vt.jsx)("div", {
            className: "nector-iframe-loader-container",
            style: {
              background: "#FFF"
            },
            children: Object(vt.jsx)(we, {
              size: 40,
              color: "#444",
              secondaryColor: "#ccc"
            })
          }), Object(vt.jsx)("div", {
            style: {
              display: !1 === (null === w || void 0 === w ? void 0 : w.show_branding) ? "none" : "block"
            },
            className: "nector-powered-by-text",
            children: Object(vt.jsxs)("p", {
              className: "nector-lighttext",
              children: [V.get_translated_text(e, "powered_by_text"), " ", Object(vt.jsx)("a", {
                className: "nector-lighttext",
                href: V.get_powered_by_link(s.entity, "widget"),
                target: "_blank",
                style: {
                  textDecoration: "underline",
                  color: "inherit"
                },
                rel: "noreferrer",
                children: "Nector"
              })]
            })
          })]
        })]
      })
    }
  };
  var Ce = function() {
    var t;
    const e = Object(i.useContext)(ht),
      n = ie(),
      o = document.getElementById("nector-lead-profile-info"),
      r = (null === e || void 0 === e || null === (t = e.lead) || void 0 === t ? void 0 : t.item) || null,
      a = e.actions.get_appconfig("common_config"),
      c = e.actions.get_appconfig("accountembed_config"),
      s = V.get_safe_appconfigvalue(a, "background_color");
    if (V.get_safe_appconfigvalue(a, "text_color"), !r || !o || !c || !0 === n) return null;
    const l = V.format_text_with_entityconfig(null === c || void 0 === c ? void 0 : c.title, e.entity),
      u = V.format_text_with_entityconfig((null === c || void 0 === c ? void 0 : c.description) || "", e.entity, {
        user_available_balance: Number((null === r || void 0 === r ? void 0 : r.available) || 0),
        user_balance: Number((null === r || void 0 === r ? void 0 : r.available) || 0)
      }),
      _ = V.format_text_with_entityconfig((null === c || void 0 === c ? void 0 : c.cta_text) || "", e.entity, {
        user_available_balance: Number((null === r || void 0 === r ? void 0 : r.available) || 0),
        user_balance: Number((null === r || void 0 === r ? void 0 : r.available) || 0)
      }),
      d = Object(vt.jsxs)("div", {
        className: "nector-container nector-lead-profile-container nector-reset",
        children: [Object(vt.jsx)("h2", {
          className: "nector-subtitle",
          style: {
            fontWeight: "normal"
          },
          children: l
        }), V.validate_not_null_or_undefined(null === c || void 0 === c ? void 0 : c.description) && Object(vt.jsx)("div", {
          className: "nector-text available-coins-text",
          children: u
        }), Object(vt.jsx)("div", {
          className: "nector-action-btns-container",
          children: Object(vt.jsx)("div", {
            className: "nector-pretext nector-action-btn",
            style: {
              color: s
            },
            onClick: () => {
              window.showNectorRewards()
            },
            children: _
          })
        })]
      });
    return i.default.createPortal(d, o)
  };

  function xe(t) {
    return Gt({
      tag: "svg",
      attr: {
        viewBox: "0 0 1024 1024"
      },
      child: [{
        tag: "path",
        attr: {
          d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
        }
      }]
    })(t)
  }
  var Te = function() {
    var t, e;
    const n = Object(i.useContext)(ht),
      o = ie(),
      r = (null === n || void 0 === n || null === (t = n.entity) || void 0 === t ? void 0 : t.coin_name) || "Coins",
      a = (null === n || void 0 === n || null === (e = n.lead) || void 0 === e ? void 0 : e.item) || null,
      c = n.actions.get_appconfig("accountembed_config");
    if (V.validate_is_null_or_undefined(c)) return null;
    const s = c.header_embed;
    if (V.validate_is_null_or_undefined(s)) return null;
    if (!1 === (null === s || void 0 === s ? void 0 : s.is_visible)) return null;
    const l = document.getElementById("nector-lead-header-info");
    if (!l || !0 === o) return null;
    l.style.cursor = "pointer", l.style.display = "flex", l.style.alignItems = "center";
    const u = () => {
      var t, e;
      return null === (t = (e = window).showNectorRewards) || void 0 === t ? void 0 : t.call(e)
    };
    let _;
    if (a) {
      const t = V.format_text_with_entityconfig((null === s || void 0 === s ? void 0 : s.description) || "", n.entity, {
        user_available_balance: Number((null === a || void 0 === a ? void 0 : a.available) || 0),
        user_balance: Number((null === a || void 0 === a ? void 0 : a.available) || 0)
      });
      _ = Object(vt.jsx)("span", {
        onClick: u,
        children: t
      })
    } else _ = Object(vt.jsxs)("span", {
      onClick: u,
      className: "nector-lead-header-coin-name",
      children: [r, " ", Object(vt.jsx)(xe, {
        className: "nector-title"
      })]
    });
    return i.default.createPortal(_, l)
  };
  var Se = function() {
    var t;
    const e = Object(i.useContext)(ht),
      n = ie(),
      o = document.getElementById("nector-customer-available-coins"),
      r = (null === e || void 0 === e || null === (t = e.lead) || void 0 === t ? void 0 : t.item) || null;
    let a = Number((null === r || void 0 === r ? void 0 : r.available) || 0) || 0;
    if (!r || !o || 1 == n) return null;
    const c = Object(vt.jsx)("span", {
      className: "nector-reset",
      children: a
    });
    return i.default.createPortal(c, o)
  };
  var ke = function() {
    var t;
    const e = Object(i.useContext)(ht),
      n = ie(),
      o = document.getElementById("nector-embed-customer-name"),
      r = (null === e || void 0 === e || null === (t = e.lead) || void 0 === t ? void 0 : t.item) || null;
    let a = (null === r || void 0 === r ? void 0 : r.name) || "";
    if (!r || !o || 1 == n) return null;
    const c = Object(vt.jsx)("span", {
      className: "nector-reset",
      children: a
    });
    return i.default.createPortal(c, o)
  };
  var Ne = function() {
    var t;
    const e = Object(i.useContext)(ht),
      n = ie(),
      o = document.getElementById("nector-embed-customer-tier"),
      r = (null === e || void 0 === e || null === (t = e.lead) || void 0 === t ? void 0 : t.item) || null;
    let a = null !== r && void 0 !== r && r.tier ? V.convert_snake_to_camel_case(r.tier) : "";
    if (!r || !o || 1 == n) return null;
    const c = Object(vt.jsx)("span", {
      className: "nector-reset",
      children: a
    });
    return i.default.createPortal(c, o)
  };
  var je = function() {
    var t, e;
    const n = (null === (t = Object(i.useContext)(ht).systeminfo) || void 0 === t || null === (e = t.actioninfos) || void 0 === e ? void 0 : e.referral_action) || null,
      o = !0 === (null === n || void 0 === n ? void 0 : n.is_active);
    return !n || !o
  };
  var Re = function(t) {
    const {
      use_iframe: e = !1,
      type: n = ""
    } = t, [o, r] = Object(i.useState)(!1);
    return Object(vt.jsx)("div", {
      className: "nector-popup-container",
      children: Object(vt.jsxs)("div", {
        className: "nector-popup-content",
        onClick: t => t.stopPropagation(),
        style: {
          height: t.height,
          width: t.width
        },
        children: [!o && e && Object(vt.jsx)("div", {
          className: "nector-popup-iframe-loader",
          children: Object(vt.jsx)(we, {
            size: 40,
            color: "#444",
            secondaryColor: "#ccc"
          })
        }), Object(vt.jsx)("div", {
          onClick: () => {
            t.on_close && t.on_close()
          },
          className: "nector-popup-close-icon" + ("referral" === n ? "-referral" : ""),
          children: Object(vt.jsx)($t, {})
        }), e && Object(vt.jsx)("iframe", {
          onLoad: () => r(!0),
          id: t.iframe_id || void 0,
          title: "Rewards",
          src: t.iframe_url,
          style: {
            border: "none",
            background: "#fff"
          }
        }), !e && t.children]
      })
    })
  };
  var Ae = () => {
    var t;
    const e = Object(i.useContext)(ht),
      [n, o] = Object(i.useState)(!0),
      r = kt()(),
      a = Object(i.useCallback)((() => {
        o(!1), "undefined" !== typeof window.appmaker && "function" === typeof window.appmaker.appmakerAction && appmaker.appmakerAction("GO_BACK")
      }), []);
    Object(i.useEffect)((() => {
      const t = () => a();
      return window.addEventListener(W.app_constant.CUSTOM_DOM_EVENTS.CLOSE_REFERRAL_POPUP, t), () => window.removeEventListener(W.app_constant.CUSTOM_DOM_EVENTS.CLOSE_REFERRAL_POPUP, t)
    }), [a]);
    let c = `${nector.websdk_url}/nector/referral-popup`;
    const s = new URL(c).search;
    [...new URLSearchParams(s).keys()].length < 1 ? c += "?" : c += "&";
    const l = {
      murl: nector.platform_url,
      mkey: nector.api_key
    };
    nector.identifier && (l.mi = nector.identifier), nector.business_customer_id && (l.customer_id = nector.business_customer_id), nector.font_url && nector.font_name && (l.font_url = nector.font_url, l.font_name = nector.font_name);
    const u = (null === (t = e.entity) || void 0 === t ? void 0 : t.language) || "en";
    l.lng = u;
    const _ = new URLSearchParams(r.search),
      d = _.get("nector_referral_code") || _.get("referral_code"),
      f = _.get("app");
    d && (l.nector_referral_code = d), f && (l.app = f);
    return c += `${new URLSearchParams(l).toString()}`, n && Object(vt.jsx)(Re, {
      use_iframe: !0,
      iframe_url: c,
      type: "referral",
      on_close: a
    })
  };
  var Ie = function() {
      const [t, e] = Object(i.useState)(!1), n = kt()(), o = je();
      return Object(i.useEffect)((() => {
        if (!t && n) {
          const t = n.search,
            o = new URLSearchParams(t);
          (o.get("nector_referral_code") || o.get("referral_code")) && e(!0)
        }
      }), [n]), o || !t ? null : Object(vt.jsx)(Ae, {})
    },
    Le = n(17),
    Pe = n.n(Le);
  var Ue = function() {
    const t = Object(i.useContext)(ht),
      [e, n] = Object(i.useState)(0),
      o = xt(),
      r = Tt();
    Rt(), Nt(), jt(), Kt(), At(), It();
    const {
      show_rewards: a,
      actions: {
        set_show_rewards: c,
        set_rewards_path: s
      }
    } = t;
    Object(i.useEffect)((() => {
      const t = setInterval((() => {
        (() => {
          if (!1 === V.is_session_storage_supported()) return;
          const t = window.sessionStorage.getItem(W.app_constant.NECTOR_EVENT_LOCK_SESSIONSTORAGE_KEY);
          if (t) {
            if (!(Date.now() - Number(t) > 4e3)) return;
            window.sessionStorage.removeItem(W.app_constant.NECTOR_EVENT_LOCK_SESSIONSTORAGE_KEY)
          }
          window.sessionStorage.setItem(W.app_constant.NECTOR_EVENT_LOCK_SESSIONSTORAGE_KEY, Date.now());
          const e = Object.keys(window.sessionStorage).filter((t => t.startsWith(W.app_constant.NECTOR_EVENT_PREFIX))),
            n = [];
          for (const o of e) {
            const t = window.sessionStorage.getItem(o);
            if (window.sessionStorage.removeItem(o), !t || !0 === isNaN(Number(t))) continue;
            const e = o.split("::");
            e.length < 5 || n.push({
              event: e[1],
              entity_id: e[2],
              id_type: e[3],
              id: e[4],
              incr_by: Number(t)
            })
          }
          for (window.sessionStorage.removeItem(W.app_constant.NECTOR_EVENT_LOCK_SESSIONSTORAGE_KEY); n.length > 0;) {
            const t = n.splice(0, 50);
            Lt(t)
          }
        })()
      }), Pe()(4e3, 6e3));
      return () => {
        clearInterval(t)
      }
    }), []), Object(i.useEffect)((() => {
      window.showNectorRewards = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (t || e && Object.keys(e).length > 0) && s(t || "", e), c(!0), r()
      }, window.hideNectorRewards = function() {
        c(!1)
      }, V.dispatch_custom_event(W.app_constant.CUSTOM_DOM_EVENTS.WIDGET_INITIALIZED, !0, {
        is_widget_initialized: !0
      })
    }), []), Object(i.useEffect)((() => {
      let e = 5;
      !async function n() {
        const o = await t.actions.get_lead();
        if (V.validate_is_null_or_undefined(null === o || void 0 === o ? void 0 : o._id) && V.validate_not_null_or_undefined(nector.business_customer_id || nector.lead_id)) {
          if (e > 60) return;
          setTimeout((async () => {
            n()
          }), 1e3 * e), e *= 2
        }
      }()
    }), []), Object(i.useEffect)((() => {
      const e = e => {
        t.actions.handleWindowMessage(e)
      };
      return window.addEventListener("message", e), () => {
        window.removeEventListener("message", e)
      }
    }), [t.actions.handleWindowMessage]), Object(i.useEffect)((() => {
      const t = V.repeat_action((() => {
        const t = ["nector-reviews", "nector-featured-reviews", "nector-rewards", "nector-referrals"];
        for (const e of t) {
          const t = document.getElementById(e);
          t && "iframe" === t.tagName.toLowerCase() && V.window_post_message_to_iframe(t, W.app_constant.WINDOW_MESSAGE_EVENTS.PARENT_URL, {
            value: window.location.href
          })
        }
      }), 2e3, 10);
      return t.start(), () => {
        t.cancel()
      }
    }), []);
    const l = () => {
      c(!a)
    };
    return !0 === o ? null : Object(vt.jsxs)("div", {
      className: "nector-websdk-widget",
      children: [Object(vt.jsx)(pe, {
        show_rewards: a,
        set_is_widget_reloaded: n,
        on_toggle_iframe: l
      }), a && Object(vt.jsx)(Ee, {
        is_widget_reloaded: e,
        on_close: l
      }), Object(vt.jsx)(Te, {}), Object(vt.jsx)(Ce, {}), Object(vt.jsx)(Se, {}), Object(vt.jsx)(ke, {}), Object(vt.jsx)(Ne, {}), Object(vt.jsx)(Ie, {})]
    })
  };
  n(40), n(42);
  ! function() {
    const t = document.getElementById(elementId);
    t && nector.api_key && (V.load_font(), i.default.unmountComponentAtNode(t), i.default.render(Object(vt.jsx)(Ct, {
      children: Object(vt.jsx)(Ue, {})
    }), t))
  }()
}]);