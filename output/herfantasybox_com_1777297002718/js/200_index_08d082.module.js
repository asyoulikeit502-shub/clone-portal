var Vl = Object.defineProperty;
var Gl = (e, t, r) => t in e ? Vl(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[t] = r;
var tt = (e, t, r) => Gl(e, typeof t != "symbol" ? t + "" : t, r);
import {
  g as jl
} from "./currency-symbol-map.js";
const Wl = function() {
    const t = typeof document < "u" && document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload") ? "modulepreload" : "preload"
  }(),
  Yl = function(e) {
    return "/" + e
  },
  ns = {},
  de = function(t, r, n) {
    let o = Promise.resolve();
    if (r && r.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      o = Promise.allSettled(r.map(a => {
        if (a = Yl(a), a in ns) return;
        ns[a] = !0;
        const c = a.endsWith(".css"),
          u = c ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${a}"]${u}`)) return;
        const d = document.createElement("link");
        if (d.rel = c ? "stylesheet" : Wl, c || (d.as = "script"), d.crossOrigin = "", d.href = a, l && d.setAttribute("nonce", l), document.head.appendChild(d), c) return new Promise((p, b) => {
          d.addEventListener("load", p), d.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${a}`)))
        })
      }))
    }

    function s(i) {
      const l = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (l.payload = i, window.dispatchEvent(l), !l.defaultPrevented) throw i
    }
    return o.then(i => {
      for (const l of i || []) l.status === "rejected" && s(l.reason);
      return t().catch(s)
    })
  };

function _() {}
const zr = e => e;

function Ql(e, t) {
  for (const r in t) e[r] = t[r];
  return e
}

function Zl(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function"
}

function Qi(e) {
  return e()
}

function rs() {
  return Object.create(null)
}

function De(e) {
  e.forEach(Qi)
}

function $e(e) {
  return typeof e == "function"
}

function ye(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let Xn;

function Tr(e, t) {
  return e === t ? !0 : (Xn || (Xn = document.createElement("a")), Xn.href = t, e === Xn.href)
}

function Xl(e) {
  return Object.keys(e).length === 0
}

function Ro(e, ...t) {
  if (e == null) {
    for (const n of t) n(void 0);
    return _
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r
}

function Ne(e) {
  let t;
  return Ro(e, r => t = r)(), t
}

function U(e, t, r) {
  e.$$.on_destroy.push(Ro(t, r))
}

function xl(e, t, r, n) {
  if (e) {
    const o = Zi(e, t, r, n);
    return e[0](o)
  }
}

function Zi(e, t, r, n) {
  return e[1] && n ? Ql(r.ctx.slice(), e[1](n(t))) : r.ctx
}

function $l(e, t, r, n) {
  if (e[2] && n) {
    const o = e[2](n(r));
    if (t.dirty === void 0) return o;
    if (typeof o == "object") {
      const s = [],
        i = Math.max(t.dirty.length, o.length);
      for (let l = 0; l < i; l += 1) s[l] = t.dirty[l] | o[l];
      return s
    }
    return t.dirty | o
  }
  return t.dirty
}

function ec(e, t, r, n, o, s) {
  if (o) {
    const i = Zi(t, r, n, s);
    e.p(i, o)
  }
}

function tc(e) {
  if (e.ctx.length > 32) {
    const t = [],
      r = e.ctx.length / 32;
    for (let n = 0; n < r; n++) t[n] = -1;
    return t
  }
  return -1
}

function A1(e) {
  const t = {};
  for (const r in e) r[0] !== "$" && (t[r] = e[r]);
  return t
}

function P1(e, t) {
  const r = {};
  t = new Set(t);
  for (const n in e) !t.has(n) && n[0] !== "$" && (r[n] = e[n]);
  return r
}

function un(e) {
  return e ?? ""
}

function Jn(e) {
  return e && $e(e.destroy) ? e.destroy : _
}

function os(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
}
const Xi = typeof window < "u";
let Lo = Xi ? () => window.performance.now() : () => Date.now(),
  Mo = Xi ? e => requestAnimationFrame(e) : _;
const rn = new Set;

function xi(e) {
  rn.forEach(t => {
    t.c(e) || (rn.delete(t), t.f())
  }), rn.size !== 0 && Mo(xi)
}

function Uo(e) {
  let t;
  return rn.size === 0 && Mo(xi), {
    promise: new Promise(r => {
      rn.add(t = {
        c: e,
        f: r
      })
    }),
    abort() {
      rn.delete(t)
    }
  }
}

function F(e, t) {
  e.appendChild(t)
}

function $i(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && t.host ? t : e.ownerDocument
}

function nc(e) {
  const t = q("style");
  return t.textContent = "/* empty */", rc($i(e), t), t.sheet
}

function rc(e, t) {
  return F(e.head || e, t), t.sheet
}

function N(e, t, r) {
  e.insertBefore(t, r || null)
}

function P(e) {
  e.parentNode && e.parentNode.removeChild(e)
}

function oc(e, t) {
  for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t)
}

function q(e) {
  return document.createElement(e)
}

function he(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function We(e) {
  return document.createTextNode(e)
}

function Z() {
  return We(" ")
}

function se() {
  return We("")
}

function Je(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n)
}

function sc(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t)
  }
}

function ic(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t)
  }
}

function g(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r)
}
const lc = ["width", "height"];

function N1(e, t) {
  const r = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in t) t[n] == null ? e.removeAttribute(n) : n === "style" ? e.style.cssText = t[n] : n === "__value" ? e.value = e[n] = t[n] : r[n] && r[n].set && lc.indexOf(n) === -1 ? e[n] = t[n] : g(e, n, t[n])
}

function cc(e) {
  return Array.from(e.childNodes)
}

function at(e, t) {
  t = "" + t, e.data !== t && (e.data = t)
}

function R1(e, t) {
  e.value = t ?? ""
}

function Te(e, t, r, n) {
  r == null ? e.style.removeProperty(t) : e.style.setProperty(t, r, n ? "important" : "")
}

function H(e, t, r) {
  e.classList.toggle(t, !!r)
}

function el(e, t, {
  bubbles: r = !1,
  cancelable: n = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: r,
    cancelable: n
  })
}
const Or = new Map;
let Sr = 0;

function ac(e) {
  let t = 5381,
    r = e.length;
  for (; r--;) t = (t << 5) - t ^ e.charCodeAt(r);
  return t >>> 0
}

function uc(e, t) {
  const r = {
    stylesheet: nc(t),
    rules: {}
  };
  return Or.set(e, r), r
}

function Ir(e, t, r, n, o, s, i, l = 0) {
  const a = 16.666 / n;
  let c = `{
`;
  for (let k = 0; k <= 1; k += a) {
    const C = t + (r - t) * s(k);
    c += k * 100 + `%{${i(C,1-C)}}
`
  }
  const u = c + `100% {${i(r,1-r)}}
}`,
    d = `__svelte_${ac(u)}_${l}`,
    p = $i(e),
    {
      stylesheet: b,
      rules: m
    } = Or.get(p) || uc(p, e);
  m[d] || (m[d] = !0, b.insertRule(`@keyframes ${d} ${u}`, b.cssRules.length));
  const f = e.style.animation || "";
  return e.style.animation = `${f?`${f}, `:""}${d} ${n}ms linear ${o}ms 1 both`, Sr += 1, d
}

function Ar(e, t) {
  const r = (e.style.animation || "").split(", "),
    n = r.filter(t ? s => s.indexOf(t) < 0 : s => s.indexOf("__svelte") === -1),
    o = r.length - n.length;
  o && (e.style.animation = n.join(", "), Sr -= o, Sr || fc())
}

function fc() {
  Mo(() => {
    Sr || (Or.forEach(e => {
      const {
        ownerNode: t
      } = e.stylesheet;
      t && P(t)
    }), Or.clear())
  })
}
let qn;

function ft(e) {
  qn = e
}

function Dt() {
  if (!qn) throw new Error("Function called outside component initialization");
  return qn
}

function Jr(e) {
  Dt().$$.on_mount.push(e)
}

function L1(e) {
  Dt().$$.after_update.push(e)
}

function hn(e) {
  Dt().$$.on_destroy.push(e)
}

function dc() {
  const e = Dt();
  return (t, r, {
    cancelable: n = !1
  } = {}) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const s = el(t, r, {
        cancelable: n
      });
      return o.slice().forEach(i => {
        i.call(e, s)
      }), !s.defaultPrevented
    }
    return !0
  }
}

function $t(e, t) {
  return Dt().$$.context.set(e, t), t
}

function Ho(e) {
  return Dt().$$.context.get(e)
}

function pc(e, t) {
  const r = e.$$.callbacks[t.type];
  r && r.slice().forEach(n => n.call(this, t))
}
const Xt = [],
  vt = [];
let on = [];
const no = [],
  tl = Promise.resolve();
let ro = !1;

function nl() {
  ro || (ro = !0, tl.then(Fo))
}

function M1() {
  return nl(), tl
}

function qe(e) {
  on.push(e)
}

function mc(e) {
  no.push(e)
}
const jr = new Set;
let Wt = 0;

function Fo() {
  if (Wt !== 0) return;
  const e = qn;
  do {
    try {
      for (; Wt < Xt.length;) {
        const t = Xt[Wt];
        Wt++, ft(t), hc(t.$$)
      }
    } catch (t) {
      throw Xt.length = 0, Wt = 0, t
    }
    for (ft(null), Xt.length = 0, Wt = 0; vt.length;) vt.pop()();
    for (let t = 0; t < on.length; t += 1) {
      const r = on[t];
      jr.has(r) || (jr.add(r), r())
    }
    on.length = 0
  } while (Xt.length);
  for (; no.length;) no.pop()();
  ro = !1, jr.clear(), ft(e)
}

function hc(e) {
  if (e.fragment !== null) {
    e.update(), De(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(qe)
  }
}

function _c(e) {
  const t = [],
    r = [];
  on.forEach(n => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach(n => n()), on = t
}
let Sn;

function Do() {
  return Sn || (Sn = Promise.resolve(), Sn.then(() => {
    Sn = null
  })), Sn
}

function Nt(e, t, r) {
  e.dispatchEvent(el(`${t?"intro":"outro"}${r}`))
}
const hr = new Set;
let it;

function X() {
  it = {
    r: 0,
    c: [],
    p: it
  }
}

function x() {
  it.r || De(it.c), it = it.p
}

function E(e, t) {
  e && e.i && (hr.delete(e), e.i(t))
}

function T(e, t, r, n) {
  if (e && e.o) {
    if (hr.has(e)) return;
    hr.add(e), it.c.push(() => {
      hr.delete(e), n && (r && e.d(1), n())
    }), e.o(t)
  } else n && n()
}
const Bo = {
  duration: 0
};

function Gn(e, t, r) {
  const n = {
    direction: "in"
  };
  let o = t(e, r, n),
    s = !1,
    i, l, a = 0;

  function c() {
    i && Ar(e, i)
  }

  function u() {
    const {
      delay: p = 0,
      duration: b = 300,
      easing: m = zr,
      tick: f = _,
      css: k
    } = o || Bo;
    k && (i = Ir(e, 0, 1, b, p, m, k, a++)), f(0, 1);
    const C = Lo() + p,
      I = C + b;
    l && l.abort(), s = !0, qe(() => Nt(e, !0, "start")), l = Uo(w => {
      if (s) {
        if (w >= I) return f(1, 0), Nt(e, !0, "end"), c(), s = !1;
        if (w >= C) {
          const h = m((w - C) / b);
          f(h, 1 - h)
        }
      }
      return s
    })
  }
  let d = !1;
  return {
    start() {
      d || (d = !0, Ar(e), $e(o) ? (o = o(n), Do().then(u)) : u())
    },
    invalidate() {
      d = !1
    },
    end() {
      s && (c(), s = !1)
    }
  }
}

function zo(e, t, r) {
  const n = {
    direction: "out"
  };
  let o = t(e, r, n),
    s = !0,
    i;
  const l = it;
  l.r += 1;
  let a;

  function c() {
    const {
      delay: u = 0,
      duration: d = 300,
      easing: p = zr,
      tick: b = _,
      css: m
    } = o || Bo;
    m && (i = Ir(e, 1, 0, d, u, p, m));
    const f = Lo() + u,
      k = f + d;
    qe(() => Nt(e, !1, "start")), "inert" in e && (a = e.inert, e.inert = !0), Uo(C => {
      if (s) {
        if (C >= k) return b(0, 1), Nt(e, !1, "end"), --l.r || De(l.c), !1;
        if (C >= f) {
          const I = p((C - f) / d);
          b(1 - I, I)
        }
      }
      return s
    })
  }
  return $e(o) ? Do().then(() => {
    o = o(n), c()
  }) : c(), {
    end(u) {
      u && "inert" in e && (e.inert = a), u && o.tick && o.tick(1, 0), s && (i && Ar(e, i), s = !1)
    }
  }
}

function xn(e, t, r, n) {
  let s = t(e, r, {
      direction: "both"
    }),
    i = n ? 0 : 1,
    l = null,
    a = null,
    c = null,
    u;

  function d() {
    c && Ar(e, c)
  }

  function p(m, f) {
    const k = m.b - i;
    return f *= Math.abs(k), {
      a: i,
      b: m.b,
      d: k,
      duration: f,
      start: m.start,
      end: m.start + f,
      group: m.group
    }
  }

  function b(m) {
    const {
      delay: f = 0,
      duration: k = 300,
      easing: C = zr,
      tick: I = _,
      css: w
    } = s || Bo, h = {
      start: Lo() + f,
      b: m
    };
    m || (h.group = it, it.r += 1), "inert" in e && (m ? u !== void 0 && (e.inert = u) : (u = e.inert, e.inert = !0)), l || a ? a = h : (w && (d(), c = Ir(e, i, m, k, f, C, w)), m && I(0, 1), l = p(h, k), qe(() => Nt(e, m, "start")), Uo(v => {
      if (a && v > a.start && (l = p(a, k), a = null, Nt(e, l.b, "start"), w && (d(), c = Ir(e, i, l.b, l.duration, 0, C, s.css))), l) {
        if (v >= l.end) I(i = l.b, 1 - i), Nt(e, l.b, "end"), a || (l.b ? d() : --l.group.r || De(l.group.c)), l = null;
        else if (v >= l.start) {
          const y = v - l.start;
          i = l.a + l.d * C(y / l.duration), I(i, 1 - i)
        }
      }
      return !!(l || a)
    }))
  }
  return {
    run(m) {
      $e(s) ? Do().then(() => {
        s = s({
          direction: m ? "in" : "out"
        }), b(m)
      }) : b(m)
    },
    end() {
      d(), l = a = null
    }
  }
}

function te(e, t) {
  const r = t.token = {};

  function n(o, s, i, l) {
    if (t.token !== r) return;
    t.resolved = l;
    let a = t.ctx;
    i !== void 0 && (a = a.slice(), a[i] = l);
    const c = o && (t.current = o)(a);
    let u = !1;
    t.block && (t.blocks ? t.blocks.forEach((d, p) => {
      p !== s && d && (X(), T(d, 1, 1, () => {
        t.blocks[p] === d && (t.blocks[p] = null)
      }), x())
    }) : t.block.d(1), c.c(), E(c, 1), c.m(t.mount(), t.anchor), u = !0), t.block = c, t.blocks && (t.blocks[s] = c), u && Fo()
  }
  if (Zl(e)) {
    const o = Dt();
    if (e.then(s => {
        ft(o), n(t.then, 1, t.value, s), ft(null)
      }, s => {
        if (ft(o), n(t.catch, 2, t.error, s), ft(null), !t.hasCatch) throw s
      }), t.current !== t.pending) return n(t.pending, 0), !0
  } else {
    if (t.current !== t.then) return n(t.then, 1, t.value, e), !0;
    t.resolved = e
  }
}

function Bt(e, t, r) {
  const n = t.slice(),
    {
      resolved: o
    } = e;
  e.current === e.then && (n[e.value] = o), e.current === e.catch && (n[e.error] = o), e.block.p(n, r)
}

function Mt(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e)
}

function U1(e, t) {
  e.d(1), t.delete(e.key)
}

function Jo(e, t) {
  T(e, 1, 1, () => {
    t.delete(e.key)
  })
}

function qo(e, t, r, n, o, s, i, l, a, c, u, d) {
  let p = e.length,
    b = s.length,
    m = p;
  const f = {};
  for (; m--;) f[e[m].key] = m;
  const k = [],
    C = new Map,
    I = new Map,
    w = [];
  for (m = b; m--;) {
    const O = d(o, s, m),
      A = r(O);
    let R = i.get(A);
    R ? w.push(() => R.p(O, t)) : (R = c(A, O), R.c()), C.set(A, k[m] = R), A in f && I.set(A, Math.abs(m - f[A]))
  }
  const h = new Set,
    v = new Set;

  function y(O) {
    E(O, 1), O.m(l, u), i.set(O.key, O), u = O.first, b--
  }
  for (; p && b;) {
    const O = k[b - 1],
      A = e[p - 1],
      R = O.key,
      V = A.key;
    O === A ? (u = O.first, p--, b--) : C.has(V) ? !i.has(R) || h.has(R) ? y(O) : v.has(V) ? p-- : I.get(R) > I.get(V) ? (v.add(R), y(O)) : (h.add(V), p--) : (a(A, i), p--)
  }
  for (; p--;) {
    const O = e[p];
    C.has(O.key) || a(O, i)
  }
  for (; b;) y(k[b - 1]);
  return De(w), k
}

function bc(e, t, r) {
  const n = e.$$.props[t];
  n !== void 0 && (e.$$.bound[n] = r, r(e.$$.ctx[n]))
}

function Q(e) {
  e && e.c()
}

function W(e, t, r) {
  const {
    fragment: n,
    after_update: o
  } = e.$$;
  n && n.m(t, r), qe(() => {
    const s = e.$$.on_mount.map(Qi).filter($e);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : De(s), e.$$.on_mount = []
  }), o.forEach(qe)
}

function Y(e, t) {
  const r = e.$$;
  r.fragment !== null && (_c(r.after_update), De(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = [])
}

function gc(e, t) {
  e.$$.dirty[0] === -1 && (Xt.push(e), nl(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function Oe(e, t, r, n, o, s, i = null, l = [-1]) {
  const a = qn;
  ft(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: _,
    not_equal: o,
    bound: rs(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    callbacks: rs(),
    dirty: l,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  i && i(c.root);
  let u = !1;
  if (c.ctx = r ? r(e, t.props || {}, (d, p, ...b) => {
      const m = b.length ? b[0] : p;
      return c.ctx && o(c.ctx[d], c.ctx[d] = m) && (!c.skip_bound && c.bound[d] && c.bound[d](m), u && gc(e, d)), p
    }) : [], c.update(), u = !0, De(c.before_update), c.fragment = n ? n(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const d = cc(t.target);
      c.fragment && c.fragment.l(d), d.forEach(P)
    } else c.fragment && c.fragment.c();
    t.intro && E(e.$$.fragment), W(e, t.target, t.anchor), Fo()
  }
  ft(a)
}
class Se {
  constructor() {
    tt(this, "$$");
    tt(this, "$$set")
  }
  $destroy() {
    Y(this, 1), this.$destroy = _
  }
  $on(t, r) {
    if (!$e(r)) return _;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const o = n.indexOf(r);
      o !== -1 && n.splice(o, 1)
    }
  }
  $set(t) {
    this.$$set && !Xl(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
  }
}
const wc = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
  v: new Set
})).v.add(wc);
const Yt = [];

function kc(e, t) {
  return {
    subscribe: K(e, t).subscribe
  }
}

function K(e, t = _) {
  let r;
  const n = new Set;

  function o(l) {
    if (ye(e, l) && (e = l, r)) {
      const a = !Yt.length;
      for (const c of n) c[1](), Yt.push(c, e);
      if (a) {
        for (let c = 0; c < Yt.length; c += 2) Yt[c][0](Yt[c + 1]);
        Yt.length = 0
      }
    }
  }

  function s(l) {
    o(l(e))
  }

  function i(l, a = _) {
    const c = [l, a];
    return n.add(c), n.size === 1 && (r = t(o, s) || _), l(e), () => {
      n.delete(c), n.size === 0 && r && (r(), r = null)
    }
  }
  return {
    set: o,
    update: s,
    subscribe: i
  }
}

function H1(e, t, r) {
  const n = !Array.isArray(e),
    o = n ? [e] : e;
  if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return kc(r, (i, l) => {
    let a = !1;
    const c = [];
    let u = 0,
      d = _;
    const p = () => {
        if (u) return;
        d();
        const m = t(n ? c[0] : c, i, l);
        s ? i(m) : d = $e(m) ? m : _
      },
      b = o.map((m, f) => Ro(m, k => {
        c[f] = k, u &= ~(1 << f), a && p()
      }, () => {
        u |= 1 << f
      }));
    return a = !0, p(),
      function() {
        De(b), d(), a = !1
      }
  })
}
let $n;
const vc = new Uint8Array(16);

function yc() {
  if (!$n && ($n = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !$n)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return $n(vc)
}
const Ue = [];
for (let e = 0; e < 256; ++e) Ue.push((e + 256).toString(16).slice(1));

function Ec(e, t = 0) {
  return Ue[e[t + 0]] + Ue[e[t + 1]] + Ue[e[t + 2]] + Ue[e[t + 3]] + "-" + Ue[e[t + 4]] + Ue[e[t + 5]] + "-" + Ue[e[t + 6]] + Ue[e[t + 7]] + "-" + Ue[e[t + 8]] + Ue[e[t + 9]] + "-" + Ue[e[t + 10]] + Ue[e[t + 11]] + Ue[e[t + 12]] + Ue[e[t + 13]] + Ue[e[t + 14]] + Ue[e[t + 15]]
}
const Cc = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  ss = {
    randomUUID: Cc
  };

function sn(e, t, r) {
  if (ss.randomUUID && !e) return ss.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || yc)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Ec(n)
}
const je = e => e.replace(/./g, t => String.fromCodePoint(127397 + t.charCodeAt(0))),
  jn = 5e3,
  F1 = jn,
  D1 = jn,
  B1 = jn,
  z1 = jn,
  J1 = jn,
  st = {
    TOP_LEFT: "left: 25px; top: 25px;",
    TOP_RIGHT: "right: 25px; top: 25px;",
    BOTTOM_LEFT: "left: 25px; bottom: 25px;",
    BOTTOM_RIGHT: "right: 25px; bottom: 25px;",
    TOP_CENTER: "left: 50%; transform: translateX(-50%); top: 25px;",
    BOTTOM_CENTER: "left: 50%; transform: translateX(-50%); bottom: 25px;",
    CENTER_LEFT: "left: 25px; top: 50%; transform: translateY(-50%); ",
    CENTER_RIGHT: "right: 25px; top: 50%; transform: translateY(-50%); "
  },
  Tc = {
    TOP_LEFT: "top left",
    TOP_RIGHT: "top right",
    BOTTOM_LEFT: "bottom left",
    BOTTOM_RIGHT: "bottom right",
    TOP_CENTER: "top center",
    BOTTOM_CENTER: "bottom center",
    CENTER_LEFT: "center left",
    CENTER_RIGHT: "center right",
    CUSTOM: "bottom right"
  },
  Oc = e => Tc[e || "BOTTOM_RIGHT"] || "bottom right",
  is = {
    TOP_LEFT: "top: 0; left: 0;",
    TOP_RIGHT: "top: 0; right: 0;",
    BOTTOM_LEFT: "bottom: 0; left: 0;",
    BOTTOM_RIGHT: "bottom: 0; right: 0;",
    TOP_CENTER: "left: 50%; transform: translateX(-50%); top: 0;",
    BOTTOM_CENTER: "left: 50%; transform: translateX(-50%); bottom: 0;",
    CENTER_LEFT: "top: 50%; transform: translateY(-50%); left: 0;",
    CENTER_RIGHT: "top: 50%; transform: translateY(-50%); right: 0;",
    CUSTOM: "bottom: 0; right: 0;"
  },
  Sc = e => is[e || "BOTTOM_RIGHT"] || is.BOTTOM_RIGHT,
  q1 = /<img.*?src="(.*?)"[^\>]+>/gi,
  K1 = /<iframe\b[^>]*>(.*?)<\/iframe>/gi,
  _r = {
    id: "loading",
    responseType: "platform",
    type: "loading",
    body: [],
    animate: !0
  },
  Ic = {
    id: "loadingHumanHandof",
    responseType: "platform",
    type: "loadingHumanHandof",
    body: [],
    animate: !0
  },
  Ac = {
    type: "devider",
    responseType: "devider",
    body: [],
    animate: !1,
    showRate: !1,
    id: "",
    name: ""
  },
  V1 = "repFullScreenOpen",
  Xe = "repSid",
  G1 = {
    PHONE_FORM: {
      label: "Enter your phone:",
      id: "PHONE_FORM",
      name: "phone",
      placeholder: "(999) 999-9999",
      value: "",
      errorMessage: "This number doesn`t seem valid. Please try again.",
      errorMessageLang: "THIS_NUMBER_IS_NOT_VALID",
      labelLang: "YOUR_PHONE"
    },
    NAME_FORM: {
      label: "Enter your name:",
      id: "NAME_FORM",
      name: "name",
      placeholder: "",
      value: "",
      errorMessage: "",
      labelLang: "YOUR_NAME"
    },
    ORDER_ID_FORM: {
      label: "Order id:",
      labelLang: "ORDER_ID",
      id: "ORDER_ID_FORM",
      name: "order",
      placeholder: "",
      value: "",
      errorMessage: ""
    },
    EMAIL_FORM: {
      label: "Enter your email address:",
      id: "EMAIL_FORM",
      name: "email",
      placeholder: "john@example.com",
      value: "",
      errorMessage: "This email doesn`t seem valid. Please try again.",
      errorMessageLang: "THIS_EMAIL_IS_NOT_VALID",
      labelLang: "YOUR_EMAIL"
    },
    PHOTO_FORM: {
      label: "",
      id: "PHOTO_FORM",
      name: "photo",
      placeholder: "",
      value: "",
      errorMessage: "Wrong file format. Please use PNG or JPG",
      errorMessageLang: "WRONG_FILE_FORMAT"
    }
  },
  Pc = '<body><script>window.parent.scrollTo = window.scrollTo;window.parent.scrollTo.bind(window.parent);window.parent.postMessage({rep: true},"*");<\/script></body>',
  Nc = {
    US: {
      id: "US",
      label: "United States +1",
      name: "United States",
      iso2: "US",
      dialCode: "1",
      priority: 0,
      areaCodes: null,
      flag: je("US"),
      mask: "(000) 000-0000",
      placeholder: "(999) 999-9999"
    },
    CA: {
      id: "CA",
      label: "Canada +1",
      name: "Canada",
      iso2: "CA",
      dialCode: "1",
      priority: 1,
      areaCodes: ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"],
      flag: je("CA"),
      mask: "(000) 000-0000",
      placeholder: "(999) 999-9999"
    },
    AU: {
      id: "AU",
      label: "Australia +61",
      name: "Australia",
      iso2: "AU",
      dialCode: "61",
      priority: 0,
      areaCodes: null,
      mask: "(00) 000-0000",
      placeholder: "(99) 999-9999",
      flag: je("AU")
    },
    KR: {
      id: "KR",
      label: "Korea (South) +82",
      name: "Korea (South)",
      iso2: "KR",
      dialCode: "82",
      priority: 0,
      areaCodes: null,
      mask: "(00) 0000-0000",
      placeholder: "(99) 9999-9999",
      flag: je("KR")
    },
    SE: {
      id: "SE",
      label: "Sweden +46",
      name: "Sweden",
      iso2: "SE",
      dialCode: "46",
      priority: 0,
      areaCodes: null,
      mask: "(00) 000-0000",
      placeholder: "(99) 999-9999",
      flag: je("SE")
    },
    DE: {
      id: "DE",
      label: "Germany +49",
      name: "Germany",
      iso2: "DE",
      dialCode: "49",
      priority: 0,
      areaCodes: null,
      mask: "(000) 000-0000",
      placeholder: "(999) 999-9999",
      flag: je("DE")
    },
    IE: {
      id: "IE",
      label: "Ireland (Republic of) +353",
      name: "Ireland (Republic of)",
      iso2: "IE",
      dialCode: "353",
      priority: 0,
      areaCodes: null,
      mask: "(00) 000-0000",
      placeholder: "(99) 999-9999",
      flag: je("IE")
    },
    AE: {
      id: "AE",
      label: "United Arab Emirates +971",
      name: "United Arab Emirates",
      iso2: "AE",
      dialCode: "971",
      priority: 0,
      areaCodes: null,
      mask: "(00) 000-0000",
      placeholder: "(99) 999-9999",
      flag: je("AE")
    },
    FR: {
      id: "FR",
      label: "France +33",
      name: "France",
      iso2: "FR",
      dialCode: "33",
      priority: 0,
      areaCodes: null,
      mask: "(0) 00-00-00-00",
      placeholder: "(9) 99-99-99-99",
      flag: je("FR")
    },
    CH: {
      id: "CH",
      label: "Switzerland +41",
      name: "Switzerland",
      iso2: "CH",
      dialCode: "41",
      priority: 0,
      areaCodes: null,
      mask: "(00) 000-0000",
      placeholder: "(99) 999-9999",
      flag: je("CH")
    },
    GB: {
      id: "GB",
      label: "United Kingdom +44",
      name: "United Kingdom",
      iso2: "GB",
      dialCode: "44",
      priority: 0,
      areaCodes: null,
      mask: "(000) 000-0000",
      placeholder: "(999) 999-9999",
      flag: je("GB")
    },
    IL: {
      id: "IL",
      label: "Israel +972",
      name: "Israel",
      iso2: "IL",
      dialCode: "972",
      priority: 0,
      areaCodes: null,
      mask: "000-000-0000",
      placeholder: "999-999-9999",
      flag: je("IL")
    }
  },
  j1 = Object.values(Nc),
  rl = "repShouldInvokeProactiveFlowS",
  Rc = () => {
    const e = {
        activeControllers: new Set
      },
      {
        subscribe: t,
        update: r
      } = K(e);
    return {
      subscribe: t,
      createController: () => {
        const n = new AbortController;
        return r(o => (o.activeControllers.add(n), o)), n
      },
      removeController: n => {
        r(o => (o.activeControllers.delete(n), o))
      },
      cancelAllRequests: () => {
        r(n => (n.activeControllers.forEach(o => {
          try {
            o.abort()
          } catch (s) {
            console.warn("Failed to abort request:", s)
          }
        }), n.activeControllers.clear(), n))
      },
      getActiveCount: () => {
        let n = 0;
        return t(s => {
          n = s.activeControllers.size
        })(), n
      }
    }
  },
  Wr = Rc(),
  {
    subscribe: ls,
    set: cs,
    update: Lc
  } = K({
    service: null
  }),
  as = {
    subscribe: ls,
    setService: e => {
      cs({
        service: e
      })
    },
    getService: () => {
      let e = null;
      return ls(r => {
        e = r.service
      })(), e
    },
    disconnect: () => {
      Lc(e => {
        var t;
        return (t = e.service) != null && t.isConnected() && e.service.disconnect(), e
      })
    },
    reset: () => {
      cs({
        service: null
      })
    }
  },
  Mc = () => {
    const e = {
        activeRequests: new Map,
        currentPath: typeof window < "u" ? window.location.pathname : "",
        previousPath: null
      },
      {
        subscribe: t,
        update: r,
        set: n
      } = K(e),
      o = () => {
        if (typeof window > "u") return null;
        const l = history.pushState,
          a = history.replaceState;
        history.pushState = function(...u) {
          l.apply(history, u), s()
        }, history.replaceState = function(...u) {
          a.apply(history, u), s()
        }, window.addEventListener("popstate", s), window.addEventListener("hashchange", s);
        const c = new MutationObserver(() => {
          const u = window.location.pathname,
            d = Ne({
              subscribe: t
            });
          u !== d.currentPath && setTimeout(() => {
            window.location.pathname === u && s()
          }, 50)
        });
        return c.observe(document, {
          subtree: !0,
          childList: !0
        }), () => {
          window.removeEventListener("popstate", s), window.removeEventListener("hashchange", s), c.disconnect()
        }
      },
      s = () => {
        const l = window.location.pathname;
        r(a => a.currentPath !== l ? (Array.from(a.activeRequests.entries()).forEach(([d, p]) => {
          try {
            p.controller.abort(), a.activeRequests.delete(d)
          } catch (b) {
            console.warn(`[NavigationRequestManager] Failed to cancel request ${d}:`, b)
          }
        }), as.disconnect(), {
          ...a,
          previousPath: a.currentPath,
          currentPath: l,
          activeRequests: new Map
        }) : a)
      };
    let i = null;
    return typeof window < "u" && (i = o()), {
      subscribe: t,
      trackRequest: l => {
        if (!l.includes("/web/events") && !l.includes("/web/human") && !l.includes("/web/product-details")) return null;
        const a = new AbortController,
          c = `req_${Date.now()}_${Math.random().toString(36).substring(7)}`,
          u = window.location.pathname;
        return r(d => {
          const p = {
            controller: a,
            path: u,
            timestamp: Date.now(),
            url: l
          };
          return d.activeRequests.set(c, p), d
        }), {
          controller: a,
          requestId: c
        }
      },
      removeRequest: l => {
        l && r(a => (a.activeRequests.get(l) && a.activeRequests.delete(l), a))
      },
      cancelAllRequests: () => {
        r(l => (l.activeRequests.forEach((a, c) => {
          try {
            a.controller.abort()
          } catch (u) {
            console.warn(`[NavigationRequestManager] Failed to cancel request ${c}:`, u)
          }
        }), l.activeRequests.clear(), as.disconnect(), l))
      },
      getStats: () => {
        const l = Ne({
          subscribe: t
        });
        return {
          total: l.activeRequests.size,
          currentPath: l.currentPath,
          previousPath: l.previousPath,
          requests: Array.from(l.activeRequests.entries()).map(([a, c]) => ({
            id: a,
            url: c.url,
            path: c.path,
            age: Date.now() - c.timestamp
          }))
        }
      },
      cleanup: () => {
        i && i(), Ne({
          subscribe: t
        }).activeRequests.forEach(a => {
          try {
            a.controller.abort()
          } catch (c) {
            console.warn("[NavigationRequestManager] Error during cleanup:", c)
          }
        })
      }
    }
  },
  br = Mc();
async function lt(e, t) {
  const r = typeof e == "string" ? e : e instanceof URL ? e.href : e.url,
    n = br.trackRequest(r);
  if (n) {
    const {
      controller: o,
      requestId: s
    } = n;
    try {
      const i = {
          ...t,
          signal: o.signal
        },
        l = await fetch(e, i);
      return br.removeRequest(s), l
    } catch (i) {
      throw br.removeRequest(s), i.name === "AbortError" ? console.warn("Request was aborted (navigation):", e) : console.error("Fetch error:", i), i
    }
  } else {
    const o = Wr.createController();
    try {
      const s = {
          ...t,
          signal: o.signal
        },
        i = await fetch(e, s);
      return Wr.removeController(o), i
    } catch (s) {
      throw Wr.removeController(o), s.name === "AbortError" ? console.warn("Request was aborted:", e) : console.error("Fetch error:", s), s
    }
  }
}

function ct(e) {
  return (e == null ? void 0 : e.name) === "AbortError"
}

function Uc() {
  const e = new Map;
  return {
    get length() {
      return e.size
    },
    clear() {
      e.clear()
    },
    getItem(t) {
      return e.get(t) ?? null
    },
    setItem(t, r) {
      e.set(t, r)
    },
    removeItem(t) {
      e.delete(t)
    },
    key(t) {
      return [...e.keys()][t] ?? null
    }
  }
}

function ol(e) {
  let t;
  try {
    t = window[e];
    const r = "__vf_storage_test__";
    t.setItem(r, "1"), t.removeItem(r)
  } catch {
    return console.warn(`[VF] ${e} unavailable, using in-memory fallback`), Uc()
  }
  return {
    get length() {
      try {
        return t.length
      } catch {
        return 0
      }
    },
    clear() {
      try {
        t.clear()
      } catch {}
    },
    getItem(r) {
      try {
        return t.getItem(r)
      } catch {
        return null
      }
    },
    setItem(r, n) {
      try {
        t.setItem(r, n)
      } catch {}
    },
    removeItem(r) {
      try {
        t.removeItem(r)
      } catch {}
    },
    key(r) {
      try {
        return t.key(r)
      } catch {
        return null
      }
    }
  }
}
const L = ol("localStorage"),
  ne = ol("sessionStorage"),
  Hc = () => {
    var e, t, r, n, o, s, i, l;
    return (t = (e = window == null ? void 0 : window.Shopify) == null ? void 0 : e.customerPrivacy) != null && t.analyticsProcessingAllowed ? ((n = (r = window == null ? void 0 : window.Shopify) == null ? void 0 : r.customerPrivacy) == null ? void 0 : n.analyticsProcessingAllowed) && !((s = (o = window.Shopify) == null ? void 0 : o.customerPrivacy) != null && s.analyticsProcessingAllowed()) || !((l = (i = window == null ? void 0 : window.Shopify) == null ? void 0 : i.customerPrivacy) != null && l.firstPartyMarketingAllowed()) : !1
  },
  us = () => {
    var e;
    return (e = window == null ? void 0 : window.Shopify) == null ? void 0 : e.customerPrivacy
  },
  W1 = () => {
    var e, t;
    (t = (e = window == null ? void 0 : window.Shopify) == null ? void 0 : e.customerPrivacy) != null && t.setTrackingConsent && window.Shopify.customerPrivacy.setTrackingConsent(!0)
  },
  sl = () => {
    const e = window.location.href;
    return e.indexOf("app-qa.voicefront") > -1 || typeof ne.getItem("vfplatform") == "string" && ne.getItem("vfplatform") !== "undefined" || e.indexOf("app-qa.hellorep") > -1
  },
  Ko = () => {
    var e, t;
    if (window.location.search && window.location.search.toLowerCase().indexOf("rgroup") > -1) {
      const r = window.location.search.replace("?", "").split("&").find(n => n.toLowerCase().indexOf("rgroup") > -1);
      if (r && r.indexOf("=") > -1 && ((e = r.split("=")) != null && e[1])) return (t = r.split("=")) == null ? void 0 : t[1]
    }
    return null
  },
  Fc = new RegExp("@", "gi"),
  Ee = (e, t) => {
    const n = (t === "localStorage" ? L : ne).getItem(e);
    return !!n && typeof n == "string" && n !== "undefined"
  },
  Me = () => {
    var e, t;
    return _n() ? !0 : typeof((e = window == null ? void 0 : window.repConfig) == null ? void 0 : e.analyticsProcessingAllowed) == "boolean" ? !((t = window == null ? void 0 : window.repConfig) != null && t.analyticsProcessingAllowed) : Hc()
  },
  gr = e => ({
    type: "ERROR",
    responseType: "platform",
    generatedByAi: !1,
    responseBasedOn: null,
    isBot: !0,
    body: [{
      mc: null,
      mt: "ERROR",
      pp: null,
      sn: "System",
      t: e
    }],
    animate: !1,
    showRate: !1,
    id: Date.now(),
    name: "System",
    pills: null,
    slider: null
  });
let en = null;

function Vo(e, t) {
  en = {
    sessionId: e,
    messages: t
  }
}

function il() {
  en = null
}
async function Fe(e, t = !1) {
  var h, v, y, O, A, R, V, ee, Ie, Ae, Pe, ie, re, D;
  const r = !!((h = window == null ? void 0 : window.shopify) != null && h.extension);
  if (en && t) {
    const {
      sessionId: B,
      messages: G
    } = en;
    try {
      const {
        deviceKeyManager: le
      } = await de(async () => {
        const {
          deviceKeyManager: ve
        } = await Promise.resolve().then(() => qu);
        return {
          deviceKeyManager: ve
        }
      }, void 0), me = le.getDeviceKey(), j = await fn({
        partnerKey: e == null ? void 0 : e.pk,
        cid: e == null ? void 0 : e.cid,
        psid: B,
        skipSid: !0,
        reset: !1,
        deviceKey: me
      }), {
        default: oe
      } = await de(async () => {
        const {
          default: ve
        } = await Promise.resolve().then(() => sa);
        return {
          default: ve
        }
      }, void 0);
      if (oe.set(j), j != null && j.ht) {
        const {
          default: ve
        } = await de(async () => {
          const {
            default: Ke
          } = await Promise.resolve().then(() => Ju);
          return {
            default: Ke
          }
        }, void 0);
        ve.setToken(j.ht)
      }
      j != null && j.dk && le.setDeviceKey(j.dk);
      const {
        default: Ce
      } = await de(async () => {
        const {
          default: ve
        } = await Promise.resolve().then(() => _u);
        return {
          default: ve
        }
      }, void 0);
      Ce.set(G);
      const {
        default: ae
      } = await de(async () => {
        const {
          default: ve
        } = await Promise.resolve().then(() => wu);
        return {
          default: ve
        }
      }, void 0);
      ae.clear();
      const {
        default: we
      } = await de(async () => {
        const {
          default: ve
        } = await import("./pendingHistoryRefresh.js");
        return {
          default: ve
        }
      }, []);
      we.set(!0), en = null, e = j
    } catch {
      en = null
    }
  }
  try {
    const B = ne.getItem("vfPollingControl");
    if (B && JSON.parse(B).isPollingEnabled === !1) return null
  } catch (B) {
    console.warn("Failed to check polling state in generateBP:", B)
  }
  const n = Me(),
    o = L.getItem(rl),
    s = o ? (v = JSON.parse(o)) == null ? void 0 : v.pfi : !1,
    i = ((O = (y = Intl == null ? void 0 : Intl.DateTimeFormat()) == null ? void 0 : y.resolvedOptions()) == null ? void 0 : O.timeZone) ?? "";
  let l = window.location.href;
  const a = navigator.language,
    c = L.getItem("repCT") ?? (window == null ? void 0 : window.repCT) ?? null;
  let u = e != null && e.cid && (e != null && e.pk) ? e : null;
  const d = L.getItem("rep");
  if (!u) {
    if (d && d !== "undefined" && ((A = JSON.parse(d)) != null && A.cid)) u = JSON.parse(d);
    else if ((R = window == null ? void 0 : window.repSettings) != null && R.cid) u = window == null ? void 0 : window.repSettings;
    else if (!n) {
      const B = await fn();
      B && (u = B)
    }
    if (!(u != null && u.pk)) {
      const B = document.getElementById("vfChat");
      (V = B == null ? void 0 : B.dataset) != null && V.pk && (u = {
        ...u ?? {},
        pk: (ee = B == null ? void 0 : B.dataset) == null ? void 0 : ee.pk
      })
    }
  }(!d || !((Ie = JSON.parse(d)) != null && Ie.cid) && (u != null && u.cid)) && L.setItem("rep", JSON.stringify({
    ...u ?? {},
    createdAt: Date.now()
  }));
  const p = Ko() ?? (u == null ? void 0 : u.g) ?? "",
    b = xe() ? pn(u == null ? void 0 : u.pk) : Ut(Xe);
  let m = !1;
  if ((typeof window.location.search == "string" && window.location.search.toLocaleLowerCase().indexOf("draft") > -1 || L.getItem("repDraft")) && (m = !0), !(u != null && u.pk)) return null;
  const k = ((Ae = window == null ? void 0 : window.repConfig) == null ? void 0 : Ae.currencySymbol) ?? ((ie = (Pe = window == null ? void 0 : window.Shopify) == null ? void 0 : Pe.currency) == null ? void 0 : ie.active) ?? "USD",
    I = ((re = window == null ? void 0 : window.repConfig) == null ? void 0 : re.localization) ?? ((D = window == null ? void 0 : window.Shopify) == null ? void 0 : D.country) ?? null;
  if (r && (window != null && window.shopify)) {
    const B = await window.shopify.idToken();
    if (B) {
      const G = JSON.parse(atob(B.split(".")[1]));
      G != null && G.iss && (l = G.iss)
    }
  }
  const w = {
    pk: (u == null ? void 0 : u.pk) ?? "",
    cid: (u == null ? void 0 : u.cid) ?? "",
    sid: b ?? (u == null ? void 0 : u.sid) ?? "",
    g: p,
    ged: (u == null ? void 0 : u.ged) ?? "",
    url: l,
    tz: i,
    dnt: n,
    l: a,
    ct: c,
    curr: k,
    cl: I
  };
  return m && (w.d = !0), n && (w.pfi = s), sl() && (w.p = "SIMULATOR"), n ? {
    ...w,
    cid: null,
    sid: null,
    tz: null,
    l: null,
    ct: null,
    au: !1
  } : w
}
const ll = () => {
    const {
      search: e
    } = window.location, t = (e ?? "").replace("?", "").split("&").map(r => r.split("="));
    return new Map(t)
  },
  cl = e => {
    let t;
    window.scrollTo || (t = document.createElement("iframe"), document.body.appendChild(t), t.contentWindow.document.open(), t.contentWindow.document.write(Pc), t.contentWindow.document.close(), typeof e == "function" && window.addEventListener("message", e))
  },
  al = () => {
    window.location.search && window.location.search.toLowerCase().indexOf("vfsim") > -1 && typeof ne.getItem("vfplatform") != "string" && ne.setItem("vfplatform", "SIMULATOR")
  };

function Dc() {
  const e = Me();
  let t = null,
    r = null,
    n = null;
  return window.location.search.replace("?", "").split("&").forEach(s => {
    if (s.indexOf("vfv") > -1) {
      const i = s.split("=");
      (i.length = 2) && (t = i[1])
    }
    if (s.indexOf("repv") > -1) {
      const i = s.split("=");
      (i.length = 2) && (t = i[1])
    }
    if (s.indexOf("rCid") > -1) {
      const i = s.split("=");
      (i.length = 2) && (r = i[1])
    }
    if (s.indexOf("rSid") > -1) {
      const i = s.split("=");
      (i.length = 2) && (n = i[1])
    }
  }), e ? {
    v: t,
    cid: null,
    sid: null
  } : {
    v: t,
    cid: r,
    sid: n
  }
}
const ut = {
    qa: "https://server-qa.myrepai.com",
    prod: "https://server.myrepai.com"
  },
  Go = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };
let Ct = null,
  Yr = null,
  fs = 0;
const Bc = 300;

function zc(e) {
  return !!(e != null && e.psid || e != null && e.reset || e != null && e.cid || e != null && e.env)
}
async function fn(e) {
  if (zc(e)) return er(e);
  if (e != null && e.deviceKey) {
    if (Ct) {
      const t = await Ct;
      return er({
        ...e,
        sid: t == null ? void 0 : t.sid
      })
    }
    return er(e)
  }
  return Yr && Date.now() - fs < Bc ? Yr : Ct || (Ct = er(e).then(t => (Yr = t, fs = Date.now(), t)).finally(() => {
    Ct = null
  }), Ct)
}
async function er(e) {
  var a, c, u, d, p;
  const t = Me(),
    r = document.querySelector("script[src*='vfLoader']");
  let n = (e == null ? void 0 : e.env) === "qa";
  !(e != null && e.env) && (r != null && r.src) && (n = (r == null ? void 0 : r.src.indexOf("vfLoader-qa")) > -1);
  const o = ((a = window == null ? void 0 : window.location) == null ? void 0 : a.href) ?? "";
  (o.indexOf("localhost") > -1 || o.indexOf("app-qa.hellorep") > -1) && (n = !0);
  let s, i = "",
    l = ut[n ? "qa" : "prod"];
  if (r || e) {
    const b = Ko() ?? "";
    let m = null,
      f = "",
      k = "",
      C = null;
    window.location.search && window.location.search.toLowerCase().indexOf("vfsim") > -1 ? (C = "SIMULATOR", ne.setItem("vfplatform", "SIMULATOR")) : typeof ne.getItem("vfplatform") == "string" && (C = "SIMULATOR");
    const I = encodeURIComponent(((u = (c = Intl == null ? void 0 : Intl.DateTimeFormat()) == null ? void 0 : c.resolvedOptions()) == null ? void 0 : u.timeZone) ?? "");
    r != null && r.src && !(e != null && e.partnerKey) && r.src.split("?").pop().split("&").forEach(V => {
      if (V.indexOf("pk=") > -1 && (i = V.replace("pk=", "")), V.indexOf("e=") > -1) {
        let ee = V.replace("e=", "");
        l = (ut == null ? void 0 : ut[ee]) ?? ut.prod
      }
    }), e != null && e.partnerKey && !(e != null && e.env) && (i = e.partnerKey), e != null && e.cid && (f = e.cid);
    const w = e != null && e.partnerKey && (e != null && e.env) ? null : xe() ? pn(i) : Ut(Xe);
    let h = (e == null ? void 0 : e.psid) ?? null;
    if (window.location.search) {
      const R = Dc();
      m = (R == null ? void 0 : R.v) ?? m, e != null && e.cid || (f = (R == null ? void 0 : R.cid) ?? f), R != null && R.sid && !h && (h = R.sid)
    }
    if (e != null && e.sid ? k = e.sid : w && (k = w), e != null && e.partnerKey && (e != null && e.env) && (i = e == null ? void 0 : e.partnerKey, l = (ut == null ? void 0 : ut[e == null ? void 0 : e.env]) ?? ut.prod, f = null, k = null, h = null), Me() && (f = null, k = null, h = null), (d = r == null ? void 0 : r.dataset) != null && d.pk && !i && (i = (p = r == null ? void 0 : r.dataset) == null ? void 0 : p.pk), !i) return console.error("[getLoad] No partner key found. loaderScript:", !!r, "payload:", e), null;
    const y = new URLSearchParams,
      O = ge() ? window.location.origin + window.location.pathname : window.location.href;
    if (y.set("url", O), y.set("pk", i), m && y.set("v", m), f && y.set("cid", f), k && !(e != null && e.skipSid) && y.set("sid", k), h && y.set("psid", h), (e == null ? void 0 : e.reset) === !0 && y.set("reset", "true"), e != null && e.deviceKey && y.set("dk", e.deviceKey), b && y.set("g", b), C && y.set("p", C), I && !t && y.set("tz", I), document != null && document.referrer && !t) {
      let R = document.referrer;
      if (ge()) try {
        const V = new URL(R);
        R = V.origin + V.pathname
      } catch (V) {
        console.warn("Failed to parse referrer URL:", V)
      }
      y.set("r", R)
    }
    t && y.set("dnt", "true");
    const A = `${l}/web/load?${y.toString()}`;
    try {
      const R = await lt(A, Go);
      if (!R.ok && R.status === 401) console.error("getWebAppSettings: unauthorized");
      else if (!R.ok && R.status === 400) {
        const V = await R.json()
      } else R.ok ? s = await R.json() : console.error(`getWebAppSettings: could not get data, received ${R.status}`)
    } catch (R) {
      ct(R) ? console.warn("Load settings request was cancelled") : console.error("Failed to load settings:", R)
    }
  }
  return {
    ...s,
    createdAt: Date.now(),
    pk: i,
    sUrl: l
  }
}
async function ul() {
  const e = L.getItem("rep");
  let t = null;
  const r = Me();
  if (_n()) {
    const o = await fn();
    o && (t = o)
  } else if (e && e !== "undefined" && JSON.parse(e)) t = JSON.parse(e);
  else if (window != null && window.repSettings) t = window == null ? void 0 : window.repSettings;
  else if (!r) {
    const o = await fn();
    o && (t = o)
  }
  if (!r) {
    const o = xe() ? pn(t == null ? void 0 : t.pk) : Ut(Xe);
    o && t && (t.sid = o)
  }
  if (typeof window.location.search == "string" && window.location.search.indexOf("repNewSid") > -1) {
    const o = sn(),
      s = sn();
    t && (t.sid = o, t.cid = s)
  }
  return {
    settings: t
  }
}
const Jc = e => e.includes("cart/add") ? "add" : e.includes("cart/change") ? "change" : e.includes("cart/update") ? "update" : e.includes("cart/clear") ? "clear" : null;

function oo(e) {
  try {
    document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  } catch {}
}

function so(e) {
  try {
    const t = window.location.hostname,
      r = window.location.host;
    if (document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${t}; path=/`, r !== t && (document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${r}; path=/`), t.includes(".") && !t.includes("myshopify.com")) {
      const n = t.split(".");
      if (n.length > 2) {
        const o = n.slice(-2).join(".");
        document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${o}; path=/`
      }
    }
    document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
  } catch {}
}

function dt(e) {
  const t = Wn(e);
  so(t), xe() && e && t !== "repSid" && so("repSid")
}

function fl(e) {
  return /^(iw-|he-|ar-)/.test((e == null ? void 0 : e.l) ?? "") ? "rtl" : "ltr"
}

function dn(e) {
  try {
    let t = window.location.hostname;
    if (t.includes(".") && !t.includes("myshopify.com")) {
      const i = t.split(".");
      i.length > 2 && (t = i.slice(-2).join("."))
    }
    const {
      days: r,
      name: n,
      value: o
    } = e, s = new Date;
    s.setTime(s.getTime() + r * 24 * 60 * 60 * 1e3), document.cookie = `${n}=${o}; expires=${s.toUTCString()}; domain=${t}; path=/`
  } catch {}
}

function Ut(e) {
  try {
    let t = {};
    return document.cookie.split(";").forEach(function(r) {
      let [n, o] = r.split("=");
      t[n.trim()] = o
    }), t[e] && t[e] !== "null" && t[e] !== "undefined" ? t[e] : null
  } catch {
    return null
  }
}

function xe() {
  return ge()
}

function Wn(e) {
  return xe() && e ? `repSid_${e}` : Xe
}

function Kn(e) {
  const {
    days: t,
    value: r,
    partnerKey: n
  } = e, o = Wn(n);
  dn({
    days: t,
    value: r,
    name: o
  })
}

function pn(e) {
  const t = Wn(e);
  return Ut(t)
}
const dl = async (e, t = 2, r = 500) => {
  for (let n = 0; n <= t; n++) try {
    const o = document.querySelector(e);
    if (o) return o;
    n < t && await new Promise(s => setTimeout(s, r))
  } catch {
    n < t && await new Promise(s => setTimeout(s, r))
  }
  return null
}, qc = () => {
  var n, o, s, i, l, a;
  const e = L.getItem("rep");
  let t, r;
  if (e && e !== "undefined" && ((n = JSON.parse(e)) != null && n.cid) ? t = JSON.parse(e) : (o = window == null ? void 0 : window.repSettings) != null && o.cid && (t = window == null ? void 0 : window.repSettings), t != null && t.sUrl) t != null && t.sUrl ? r = t == null ? void 0 : t.sUrl : r = "https://server-qa.myrepai.com";
  else {
    const c = document.getElementById("vfChat");
    ((s = c == null ? void 0 : c.dataset) != null && s.sUrl || (i = c == null ? void 0 : c.dataset) != null && i.surl) && (r = ((l = c == null ? void 0 : c.dataset) == null ? void 0 : l.sUrl) || ((a = c == null ? void 0 : c.dataset) == null ? void 0 : a.surl))
  }
  return {
    serverUrl: r,
    vf: t
  }
}, Kc = e => {
  var a, c, u, d, p, b, m, f, k, C, I, w, h;
  const t = [...((a = e == null ? void 0 : e.product) == null ? void 0 : a.variants) ?? []].find(v => `${v.id}` == `${e==null?void 0:e.selectedVariantId}`),
    r = ((c = document.head.querySelector("[property='og:title']")) == null ? void 0 : c.content) ?? "",
    n = (t == null ? void 0 : t[0]) ?? null;
  let o = t != null && t.name ? t == null ? void 0 : t.name : r || (n != null && n.name ? n.name : (p = (d = ((u = e == null ? void 0 : e.product) == null ? void 0 : u.variants) ?? []) == null ? void 0 : d[0]) != null && p.name ? (m = ((b = e == null ? void 0 : e.product) == null ? void 0 : b.variants) ?? []) == null ? void 0 : m[0].name : "");
  if (t != null && t.public_title) {
    const v = `- ${(t==null?void 0:t.public_title)??""}`,
      y = `-${(t==null?void 0:t.public_title)??""}`,
      O = `${(t==null?void 0:t.public_title)??""}`;
    o.indexOf(v) > -1 ? o = o.replace(v, "").trim() : o.indexOf(y) > -1 ? o = o.replace(y, "").trim() : o.indexOf(O) > -1 && (o = o.replace(O, "").trim())
  }
  let s = 0;
  const i = t != null && t.price ? t == null ? void 0 : t.price : (((f = document.head.querySelector("[property*='price']")) == null ? void 0 : f.content) ?? "").replace(".", "") ?? "";
  return !Number.isNaN(+i) && +i > 0 && (s = i / 100), {
    product_id: ((k = e == null ? void 0 : e.product) == null ? void 0 : k.id) ?? ((C = e == null ? void 0 : e.product) == null ? void 0 : C.productId) ?? "",
    product_group: ((I = e == null ? void 0 : e.product) == null ? void 0 : I.type) ?? "",
    brand: ((w = e == null ? void 0 : e.product) == null ? void 0 : w.vendor) ?? "",
    url: window.location.href,
    name: o,
    sku: (t == null ? void 0 : t.sku) ?? "",
    variant: (t == null ? void 0 : t.public_title) ?? "",
    price: s,
    image_url: ((h = document.head.querySelector("[property='og:image']")) == null ? void 0 : h.content) ?? ""
  }
}, Vc = async () => {
  var t, r, n, o, s, i, l, a, c, u, d, p, b, m, f, k;
  const e = `${window.location.origin}${window.location.pathname}.json`;
  try {
    const I = await (await lt(e, Go)).json();
    if ((t = I == null ? void 0 : I.product) != null && t.id) {
      const w = (n = (r = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : r.meta) == null ? void 0 : n.selectedVariantId,
        h = ((o = document.head.querySelector("[property='og:title']")) == null ? void 0 : o.content) ?? "",
        v = ((s = I == null ? void 0 : I.product) == null ? void 0 : s.id) ?? "",
        y = [...((i = I == null ? void 0 : I.product) == null ? void 0 : i.variants) ?? []].find(A => `${A.id}` == `${w}`);
      let O = y != null && y.price ? y == null ? void 0 : y.price : 0;
      if (h === ((l = I == null ? void 0 : I.product) == null ? void 0 : l.title) && !O) {
        const A = (((a = document.head.querySelector("[property*='price']")) == null ? void 0 : a.content) ?? "").replace(".", "") ?? "";
        !Number.isNaN(+A) && +A > 0 && (O = A / 100)
      }
      return !O && ((u = (c = I == null ? void 0 : I.product) == null ? void 0 : c.variants) != null && u.length) && (O = (d = I == null ? void 0 : I.product) == null ? void 0 : d.variants[0].price), {
        product_id: v,
        product_group: ((p = I == null ? void 0 : I.product) == null ? void 0 : p.product_type) ?? "",
        brand: ((b = I == null ? void 0 : I.product) == null ? void 0 : b.vendor) ?? "",
        url: window.location.href,
        name: ((m = I == null ? void 0 : I.product) == null ? void 0 : m.title) ?? "",
        sku: (y == null ? void 0 : y.sku) ?? "",
        variant: (y == null ? void 0 : y.public_title) ?? "",
        price: O,
        image_url: ((k = (f = I == null ? void 0 : I.product) == null ? void 0 : f.image) == null ? void 0 : k.src) ?? ""
      }
    }
    return null
  } catch (C) {
    return ct(C) ? console.warn("Shopify product details request was cancelled") : console.error("Failed to fetch product details:", C), null
  }
}, _n = () => {
  var e;
  return (e = window == null ? void 0 : window.location) != null && e.ancestorOrigins ? window.location.ancestorOrigins.contains("https://admin.shopify.com") : navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? window.self !== window.top : !0
}, Gc = async () => {
  var t, r;
  const e = `${window.location.origin}${window.location.pathname}.json`;
  try {
    const o = await (await lt(e, Go)).json();
    if ((t = o == null ? void 0 : o.collection) != null && t.id) {
      const s = window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1).trim();
      return {
        list_id: ((r = o == null ? void 0 : o.collection) == null ? void 0 : r.id) ?? "",
        product_group: s,
        query: window.location.search.replace("?", ""),
        url: window.location.href
      }
    }
    return null
  } catch (n) {
    return ct(n) ? console.warn("Shopify collection details request was cancelled") : console.error("Failed to fetch collection details:", n), null
  }
}, jc = () => {
  var r, n, o, s, i;
  if ((n = (r = window == null ? void 0 : window.shopify) == null ? void 0 : r.config) != null && n.shop) return {
    page: "checkout",
    checkJson: !1
  };
  let e = !1,
    t = ((i = (s = (o = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : o.meta) == null ? void 0 : s.page) == null ? void 0 : i.pageType) ?? (window.location.href.indexOf("/cart") > -1 ? "cart" : "");
  if (window.location.pathname === "/" && (t = "home"), !t) {
    const l = window.location.pathname.indexOf("products/") > -1,
      a = window.location.pathname.indexOf("collections/") > -1;
    t = l ? "product" : a ? "collection" : "", e = !!t
  }
  return {
    page: t,
    checkJson: e
  }
};

function Wc() {
  const e = window.location.search.substring(1);
  return e ? e.split("&").reduce((t, r) => {
    const [n, o] = r.split("=");
    return t[decodeURIComponent(n)] = decodeURIComponent(o || ""), t
  }, {}) : {}
}
const Yc = (e, t) => {
    const r = n => Number.isInteger(n) ? Number(n).toLocaleString("en-US", {
      style: "decimal",
      minimumFractionDigits: 0
    }) : Number(n).toLocaleString("en-US", {
      style: "decimal",
      minimumFractionDigits: 0
    });
    if (typeof e == "number") return r(e);
    if (typeof e == "string") {
      const n = e.match(/-?[\d]+([.,][\d]+)?/),
        o = n ? parseFloat(n[0].replace(",", ".")) : NaN,
        s = n ? e.replace(n[0], "").trim() : e.trim(),
        i = r(o);
      return s ? `${s}${i}` : i
    }
    return e
  },
  Ht = () => {
    try {
      return window.self !== window.top
    } catch {
      return !0
    }
  };

function ge() {
  if (typeof window > "u") return !1;
  const e = window.location.href.toLowerCase();
  return e.includes("hellorep.ai") || e.includes("localhost")
}

function Qc(e) {
  return !!(!(e != null && e.sdk) || ge())
}

function Zc(e, t) {
  const {
    sid: r,
    cid: n
  } = t;
  if (!r && !n) return e;
  try {
    const o = new URL(e);
    return r && o.searchParams.set("rSid", r), n && o.searchParams.set("rCid", n), o.toString()
  } catch (o) {
    return console.error("[addTrackingParamsToUrl] Failed to parse URL:", e, o), e
  }
}
const Xc = Object.freeze(Object.defineProperty({
    __proto__: null,
    addTrackingParamsToUrl: Zc,
    checkIfCustomerPrivacyNotProved: Me,
    checkIsShopifyEditor: _n,
    checkIsSimulator: al,
    checkStorageRecord: Ee,
    clearDuplicateCookies: so,
    clearDuplicateRepSidCookies: dt,
    clearPendingTranscriptRestore: il,
    createChatErrorMessage: gr,
    deleteCookie: oo,
    emailRegex: Fc,
    fetchShopifyCollectionDetails: Gc,
    fetchShopifyProductDetails: Vc,
    findElementWithRetry: dl,
    formatNumberWithCommas: Yc,
    generateBP: Fe,
    getCookie: Ut,
    getLoad: fn,
    getMapQueryParams: ll,
    getPartnerSpecificCookie: pn,
    getPartnerSpecificCookieName: Wn,
    getProductInfoFromShopifyAnalytics: Kc,
    getQueryParams: Wc,
    getRgroup: Ko,
    getServerUrl: qc,
    getShopifyPageType: jc,
    getTextDirection: fl,
    getTypeOfShopifyRequest: Jc,
    getWebAppSettings: ul,
    isRepDomain: ge,
    isRunningInIframe: Ht,
    isSimulator: sl,
    setCookie: dn,
    setPartnerSpecificCookie: Kn,
    setPendingTranscriptRestore: Vo,
    shouldActAsNonSdk: Qc,
    shouldUsePartnerSpecificCookie: xe,
    updateMissingScrollTo: cl
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Pr = "repCartAttributesUpdateSdk",
  Qr = K(Ee(Pr, "sessionStorage") ? JSON.parse(ne.getItem(Pr) ?? "null") : null),
  pl = {
    subscribe: Qr.subscribe,
    set: e => {
      Qr.set(e), ne.setItem(Pr, JSON.stringify(e))
    },
    reset: () => {
      Qr.set(null), ne.removeItem(Pr)
    }
  },
  io = "vfEnabledIntegrations",
  ds = K(Ee(io, "localStorage") ? JSON.parse(L.getItem(io) ?? "[]") : []),
  Nr = {
    subscribe: ds.subscribe,
    set: e => {
      e && L.setItem(io, JSON.stringify(e)), ds.set(e)
    }
  },
  xc = /\/$/;
var Vi, Gi;
const $c = (((Gi = (Vi = window == null ? void 0 : window.Shopify) == null ? void 0 : Vi.routes) == null ? void 0 : Gi.root) ?? "").replace(xc, ""),
  jo = `${window.location.origin}${$c}/cart/update.js`,
  Wo = {
    "Content-Type": "application/json"
  },
  ea = async e => {
    if (ge() || Ht()) return;
    const r = {
      attributes: {
        rep_assisted: !0
      }
    };
    e != null && e.toabr && (r.note = "This order was assisted by Rep");
    const n = {
      body: JSON.stringify(r),
      headers: Wo,
      method: "POST"
    };
    try {
      const o = await lt(jo, n);
      if (o.ok) {
        const s = await o.json();
        typeof(s == null ? void 0 : s.token) == "string" && (L.setItem("repCT", s == null ? void 0 : s.token), window.repCT = s == null ? void 0 : s.token)
      } else e.onError()
    } catch (o) {
      if (ct(o)) {
        console.warn("User reply request was cancelled");
        return
      }
      e.onError()
    }
  }, ta = () => {
    if (ge() || Ht()) return;
    const r = {
      body: JSON.stringify({
        attributes: {
          rep_assisted: !1
        },
        note: ""
      }),
      headers: Wo,
      method: "POST"
    };
    lt(jo, r).then(n => n.json()).then(n => {
      typeof(n == null ? void 0 : n.token) == "string" && (L.setItem("repCT", n == null ? void 0 : n.token), window.repCT = n == null ? void 0 : n.token)
    }).catch(n => {
      ct(n) && console.warn("Reset rep assisted request was cancelled")
    })
  }, na = async e => {
    var n, o;
    if (ge() || Ht()) return;
    const r = {
      body: JSON.stringify({
        attributes: {
          rep_session_id: e.sid,
          rep_assisted: e.repAssisted
        },
        note: ""
      }),
      headers: Wo,
      method: "POST"
    };
    try {
      const s = await lt(jo, r);
      if (s.ok) {
        const i = await s.json();
        typeof(i == null ? void 0 : i.token) == "string" && (L.setItem("repCT", i == null ? void 0 : i.token), window.repCT = i == null ? void 0 : i.token)
      } else(n = e == null ? void 0 : e.onError) == null || n.call(e)
    } catch (s) {
      if (ct(s)) {
        console.warn("Update Shopify SID request was cancelled");
        return
      }(o = e == null ? void 0 : e.onError) == null || o.call(e)
    }
  }, Yo = {
    onUserReply: ea,
    updateShopifySidAttr: na,
    resetRepAsisted: ta
  }, ra = K(window != null && window.rep ? window.rep : Yo);
window != null && window.rep || (window.rep = Yo);
const ml = {
    subscribe: ra.subscribe,
    ...Yo
  },
  lo = "rateConversation",
  ps = K(Ee(lo, "localStorage") ? JSON.parse(L.getItem(lo)) : !1),
  oa = {
    subscribe: ps.subscribe,
    set: e => {
      L.setItem(lo, JSON.stringify(e)), ps.set(e)
    }
  },
  Qo = K(!1),
  At = "rep";
var ji, Wi;
const Qt = K(Ee(At, "localStorage") && ((ji = JSON.parse(L.getItem(At) ?? "{}")) != null && ji.cid) ? JSON.parse(L.getItem(At) ?? "{}") : (Wi = window == null ? void 0 : window.repSettings) != null && Wi.cid ? window == null ? void 0 : window.repSettings : null),
  be = {
    settings: Qt,
    subscribe: Qt.subscribe,
    set: e => {
      const t = Me();
      if (e != null && e.sid && !t)
        if (L.setItem(At, JSON.stringify(e)), xe()) {
          const r = pn(e == null ? void 0 : e.pk);
          (e == null ? void 0 : e.sid) !== r && (dt(e == null ? void 0 : e.pk), Kn({
            days: 1,
            value: e == null ? void 0 : e.sid,
            partnerKey: e == null ? void 0 : e.pk
          }))
        } else {
          const r = Ut(Xe);
          (e == null ? void 0 : e.sid) !== r && (dt(), dn({
            days: 1,
            name: Xe,
            value: e == null ? void 0 : e.sid
          }))
        } window.repSettings = e, Qt.set(e)
    },
    update: (e, t) => {
      Qt.update(r => {
        const n = {
            ...r
          },
          o = Me();
        if (n[e] = t, L.setItem(At, JSON.stringify(n)), e === "sid" && !o) {
          if (xe()) {
            const s = pn(n == null ? void 0 : n.pk);
            (n == null ? void 0 : n.sid) !== s && (dt(n == null ? void 0 : n.pk), Kn({
              days: 1,
              value: n == null ? void 0 : n.sid,
              partnerKey: n == null ? void 0 : n.pk
            }))
          } else {
            const s = Ut(Xe);
            (n == null ? void 0 : n.sid) !== s && (dt(), dn({
              days: 1,
              name: Xe,
              value: n == null ? void 0 : n.sid
            }))
          }
          window.repSettings = n
        }
        return n
      })
    },
    reset: () => {
      Qt.set(null), L.removeItem(At)
    },
    resetSid: () => {
      Qt.update(e => {
        const t = {
          ...e
        };
        if (t.cid = null, t.sid = null, L.setItem(At, JSON.stringify(t)), xe()) {
          const r = Wn(t == null ? void 0 : t.pk);
          oo(r)
        } else oo(Xe);
        return t
      })
    }
  },
  sa = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: be
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Zo = "vfPollingControl",
  co = {
    isPollingEnabled: !0,
    shouldStopAllPolling: !1
  },
  tr = e => {
    try {
      ne.setItem(Zo, JSON.stringify(e))
    } catch (t) {
      console.warn("Failed to save polling control state to session storage:", t)
    }
  },
  ia = () => {
    try {
      const e = ne.getItem(Zo);
      if (e) return {
        ...JSON.parse(e),
        isPollingEnabled: !0,
        shouldStopAllPolling: !1
      }
    } catch (e) {
      console.warn("Failed to load polling control state from session storage:", e)
    }
    return co
  },
  la = () => {
    const e = ia(),
      {
        subscribe: t,
        set: r,
        update: n
      } = K(e);
    return tr(e), {
      subscribe: t,
      stopAllPolling: () => {
        n(o => {
          const s = {
            ...o,
            isPollingEnabled: !1,
            shouldStopAllPolling: !0
          };
          return tr(s), s
        })
      },
      resumeAllPolling: () => {
        n(o => {
          const s = {
            ...o,
            isPollingEnabled: !0,
            shouldStopAllPolling: !1
          };
          return tr(s), s
        })
      },
      reset: () => {
        tr(co), r(co)
      },
      isPollingEnabledFromStorage: () => {
        try {
          const o = ne.getItem(Zo);
          if (o) return JSON.parse(o).isPollingEnabled !== !1
        } catch (o) {
          console.warn("Failed to check polling state from session storage:", o)
        }
        return !0
      }
    }
  },
  Hn = la(),
  Fn = "repEventsEnabled",
  ca = () => Ee(Fn, "localStorage") ? L.getItem(Fn) !== "false" : !0,
  nr = K(ca()),
  hl = {
    subscribe: nr.subscribe,
    set: e => {
      nr.set(e), L.setItem(Fn, String(e))
    },
    enable: () => {
      nr.set(!0), L.setItem(Fn, "true")
    },
    disable: () => {
      nr.set(!1), L.setItem(Fn, "false")
    }
  },
  ln = "temporarryQueue";
let _l = !0;
const aa = hl.subscribe(e => {
    _l = e
  }),
  ua = e => Array.isArray(e) ? e.filter(t => (t == null ? void 0 : t.et) !== "TAB_FOCUSED" && (t == null ? void 0 : t.et) !== "TAB_UNFOCUSED") : [],
  fa = () => {
    if (!Ee(ln, "localStorage")) return [];
    const e = JSON.parse(L.getItem(ln) ?? "[]"),
      t = ua(e);
    return t.length !== e.length && L.setItem(ln, JSON.stringify(t)), t
  },
  rr = K(fa()),
  ao = {
    subscribe: rr.subscribe,
    unsubscribeEventsEnabled: aa,
    set: e => {
      if (!_l) return;
      const t = Array.isArray(e) ? e.filter(r => {
        const n = kr(r, e);
        return n && console.warn("Filtering out event from temporarryEvQueue to prevent BACKEND_ERROR loop:", r), !n
      }) : e;
      L.setItem(ln, JSON.stringify(t)), rr.set(t)
    },
    reset: () => {
      rr.update(() => (L.setItem(ln, JSON.stringify([])), []))
    },
    updateSid: (e, t) => {
      rr.update(r => {
        const n = r.map(o => {
          var s;
          if ((s = o == null ? void 0 : o.bp) != null && s.sid && o.bp.sid !== e) {
            const i = {
              ...o.bp,
              sid: e
            };
            return t && o.bp.cid !== t && (i.cid = t), {
              ...o,
              bp: i
            }
          }
          return o
        });
        return L.setItem(ln, JSON.stringify(n)), n
      })
    }
  },
  uo = "vfIsOpen",
  ms = K(Ee(uo, "sessionStorage") ? JSON.parse(ne.getItem(uo)) : !1),
  He = {
    subscribe: ms.subscribe,
    set: e => {
      ms.set(e), ne.setItem(uo, JSON.stringify(e))
    }
  },
  bl = {
    isEnabled: !0,
    isConnected: !1,
    isConnecting: !1,
    reconnectAttempts: 0,
    lastError: null,
    shouldUseWebSocket: !1
  },
  nt = K(bl),
  da = {
    subscribe: nt.subscribe,
    setEnabled: e => {
      nt.update(t => ({
        ...t,
        isEnabled: e
      }))
    },
    setConnected: e => {
      nt.update(t => ({
        ...t,
        isConnected: e,
        isConnecting: !1,
        lastError: e ? null : t.lastError
      }))
    },
    setConnecting: e => {
      nt.update(t => ({
        ...t,
        isConnecting: e
      }))
    },
    setError: e => {
      nt.update(t => ({
        ...t,
        lastError: e,
        isConnecting: !1,
        isConnected: !1
      }))
    },
    incrementReconnectAttempts: () => {
      nt.update(e => ({
        ...e,
        reconnectAttempts: e.reconnectAttempts + 1
      }))
    },
    resetReconnectAttempts: () => {
      nt.update(e => ({
        ...e,
        reconnectAttempts: 0
      }))
    },
    setShouldUseWebSocket: e => {
      nt.update(t => ({
        ...t,
        shouldUseWebSocket: e
      }))
    },
    clearError: () => {
      nt.update(e => ({
        ...e,
        lastError: null,
        reconnectAttempts: 0
      }))
    },
    reset: () => {
      nt.set(bl)
    },
    isWebSocketAllowed: () => {
      var t;
      return !(((t = window == null ? void 0 : window.location) == null ? void 0 : t.href) ?? "").includes("hellorep.ai")
    }
  };
let gl = [],
  fo = !1,
  wl = "",
  kl = !1,
  vl = !1,
  yl = !1,
  wr = !0,
  El = [],
  po = !0,
  Cl = !1,
  Tl = !1;
const pa = Nr.subscribe(e => {
    gl = e
  }),
  ma = be.subscribe(e => {
    fo = !!(e != null && e.toabr), wl = (e == null ? void 0 : e.sid) ?? "", kl = !!(e != null && e.sdk), vl = !!(e != null && e.doca)
  }),
  ha = Qo.subscribe(e => {
    yl = e
  }),
  _a = Hn.subscribe(e => {
    wr = e.isPollingEnabled
  }),
  ba = ao.subscribe(e => {
    El = e ?? []
  }),
  ga = hl.subscribe(e => {
    po = e
  }),
  wa = He.subscribe(e => {
    Cl = e
  }),
  ka = da.subscribe(e => {
    Tl = e.isConnected
  });
let mo = 0;
const Pt = "evQueue",
  va = e => Array.isArray(e) ? e.filter(t => (t == null ? void 0 : t.et) !== "TAB_FOCUSED" && (t == null ? void 0 : t.et) !== "TAB_UNFOCUSED") : [],
  ya = () => {
    if (!Ee(Pt, "localStorage")) return [];
    const e = JSON.parse(L.getItem(Pt) ?? "[]"),
      t = va(e);
    return t.length !== e.length && L.setItem(Pt, JSON.stringify(t)), t
  },
  Tt = K(ya());

function Ea() {
  mo++
}
const kr = (e, t = []) => {
    try {
      const n = (JSON.stringify(e).match(/BACKEND_ERROR/g) || []).length;
      return n > 1 ? !0 : (JSON.stringify(t).match(/BACKEND_ERROR/g) || []).length + n > 1
    } catch (r) {
      return console.warn("Error in shouldBlockBackendErrorLoop:", r), !1
    }
  },
  ke = {
    subscribe: Tt.subscribe,
    unsubscribeIntegration: pa,
    storeSettingsSubscribed: ma,
    unsubscribeRefreshSession: ha,
    unsubscribePollingControl: _a,
    unsubscribeTemporaryQueue: ba,
    unsubscribeEventsEnabled: ga,
    unsubscribeIsOpen: wa,
    unsubscribeWebSocketStore: ka,
    updatePfi: e => {
      Tt.update(t => {
        const r = (t ?? []).map(n => ({
          ...n,
          bp: {
            ...(n == null ? void 0 : n.bp) ?? {},
            pfi: e
          }
        }));
        return ne.setItem(Pt, JSON.stringify(r)), r
      })
    },
    update: e => {
      var s, i;
      if (!po) return;
      const t = (e == null ? void 0 : e.et) === "TAB_FOCUSED" || (e == null ? void 0 : e.et) === "TAB_UNFOCUSED";
      if (!t && yl && (e == null ? void 0 : e.rt) !== "LAUNCH" && (e == null ? void 0 : e.rt) !== "AUTO_LAUNCH" || !t && !wr || ((e == null ? void 0 : e.et) === "USER_IDLED" || (e == null ? void 0 : e.et) === "USER_ENGAGED") && Cl && Tl) return;
      let n = [];
      if (Tt.subscribe(l => {
          n = l || []
        })(), kr(e, n)) {
        console.warn("Blocking event to prevent BACKEND_ERROR loop:", e);
        return
      }(e == null ? void 0 : e.rt) === "USER_REQUEST" && typeof((s = e == null ? void 0 : e.bp) == null ? void 0 : s.q) == "string" && (oa.set(!0), gl.find(({
        m: a
      }) => a === "SHOPIFY") && mo < 5 && !vl && (++mo, Ht() || (kl ? pl.set({
        attributes: {
          rep_session_id: wl,
          rep_assisted: !0
        },
        note: fo ? "This order was assisted by Rep" : ""
      }) : ml.onUserReply({
        text: (i = e == null ? void 0 : e.bp) == null ? void 0 : i.q,
        toabr: !!fo,
        onError: Ea
      })))), Tt.update(l => {
        const a = (l ?? []).some(p => (p == null ? void 0 : p.rt) === "LAUNCH"),
          c = El.some(p => (p == null ? void 0 : p.rt) === "LAUNCH");
        if ((e == null ? void 0 : e.rt) === "LAUNCH" && (a || c)) return l;
        let u = !1,
          d = [...l ?? [], e].slice(-100).filter(p => (p == null ? void 0 : p.rt) === "LAUNCH" ? u ? !1 : (u = !0, !0) : ((p == null ? void 0 : p.rt) === "AUTO_LAUNCH", !0));
        return L.setItem(Pt, JSON.stringify(d)), d
      })
    },
    reset: () => {
      Tt.update(() => (L.setItem(Pt, JSON.stringify([])), []))
    },
    set: e => {
      if (!po || !wr) return;
      const t = e.filter(r => {
        const n = kr(r, e);
        return n && console.warn("Filtering out event from batch to prevent BACKEND_ERROR loop:", r), !n
      });
      Tt.set(t)
    },
    isBlocked: () => !wr,
    shouldBlockBackendErrorLoop: kr,
    updateSid: (e, t) => {
      Tt.update(r => {
        const n = r.map(o => {
          var s;
          if ((s = o == null ? void 0 : o.bp) != null && s.sid && o.bp.sid !== e) {
            const i = {
              ...o.bp,
              sid: e
            };
            return t && o.bp.cid !== t && (i.cid = t), {
              ...o,
              bp: i
            }
          }
          return o
        });
        return L.setItem(Pt, JSON.stringify(n)), n
      })
    }
  },
  hs = K(!1),
  ze = {
    subscribe: hs.subscribe,
    set: e => {
      var t;
      if (hs.set(e), (t = window == null ? void 0 : window.repConfig) != null && t.partnerKey) {
        const r = {
          ...(window == null ? void 0 : window.repConfig) ?? {},
          analyticsProcessingAllowed: e
        };
        window.repConfig = r
      }
    }
  },
  Rr = K(null);

function Ca(e, t, r) {
  let n, o, s, i;
  U(e, be, p => r(6, n = p)), U(e, Rr, p => r(2, o = p)), U(e, ke, p => r(3, s = p)), U(e, ze, p => r(4, i = p));
  let {
    resetSid: l
  } = t, a = !1, c = null;
  const u = () => {
      Fe(n).then(p => {
        var b, m;
        p && ke.update({
          rt: "EVENT",
          et: "COOKIE_CONSENT_APPROVED",
          bp: {
            ...p,
            au: !!((m = (b = window == null ? void 0 : window.meta) == null ? void 0 : b.page) != null && m.customerId)
          }
        })
      })
    },
    d = () => {
      c || (c = setTimeout(() => {
        Me() && (s.some(k => k.et === "COOKIE_CONSENT_NOT_APPROVED") || o || (l(), Fe(n).then(k => {
          var C, I;
          k && Rr.set({
            rt: "EVENT",
            et: "COOKIE_CONSENT_NOT_APPROVED",
            bp: {
              ...k,
              au: !!((I = (C = window == null ? void 0 : window.meta) == null ? void 0 : C.page) != null && I.customerId)
            }
          })
        }))), c = null
      }, 3e4))
    };
  return Jr(() => {
    var b, m;
    if (!_n()) {
      const f = typeof((b = window == null ? void 0 : window.repConfig) == null ? void 0 : b.analyticsProcessingAllowed) == "boolean" ? (m = window == null ? void 0 : window.repConfig) == null ? void 0 : m.analyticsProcessingAllowed : !0;
      ze.set(f)
    }
    d()
  }), hn(() => {
    c && (clearTimeout(c), c = null)
  }), e.$$set = p => {
    "resetSid" in p && r(0, l = p.resetSid)
  }, e.$$.update = () => {
    e.$$.dirty & 30 && (s || o) && i && !a && (s.some(f => f.et === "COOKIE_CONSENT_NOT_APPROVED") || o) && (r(1, a = !0), u())
  }, [l, a, o, s, i]
}
class Ta extends Se {
  constructor(t) {
    super(), Oe(this, t, Ca, null, ye, {
      resetSid: 0
    })
  }
}

function Oa(e, t, r) {
  let n, o, s, i, l, a;
  U(e, Hn, h => r(4, n = h)), U(e, Rr, h => r(5, o = h)), U(e, ke, h => r(6, s = h)), U(e, be, h => r(10, i = h)), U(e, He, h => r(11, l = h)), U(e, ze, h => r(7, a = h));
  let {
    resetSid: c
  } = t, u = !1, d = null, p = null, b = null, m = !1;
  const f = () => {
      Fe(i).then(h => {
        var v, y;
        h && ke.update({
          rt: "EVENT",
          et: "COOKIE_CONSENT_APPROVED",
          bp: {
            ...h,
            au: !!((y = (v = window == null ? void 0 : window.meta) == null ? void 0 : v.page) != null && y.customerId)
          }
        })
      })
    },
    k = () => {
      b || (b = setTimeout(() => {
        Me() && (s.some(A => A.et === "COOKIE_CONSENT_NOT_APPROVED") || o || (c(), Fe(i).then(A => {
          var R, V;
          A && Rr.set({
            rt: "EVENT",
            et: "COOKIE_CONSENT_NOT_APPROVED",
            bp: {
              ...A,
              au: !!((V = (R = window == null ? void 0 : window.meta) == null ? void 0 : R.page) != null && V.customerId)
            }
          })
        }))), b = null
      }, 3e4))
    },
    C = () => {
      var h, v;
      m || (m = !0, i != null && i.cid ? l && !(i != null && i.sid) && ((v = (h = window == null ? void 0 : window.rep) == null ? void 0 : h.refreshSession) == null || v.call(h)) : fn().then(y => {
        var O, A;
        xe() ? (dt(y == null ? void 0 : y.pk), Kn({
          days: 1,
          value: y == null ? void 0 : y.sid,
          partnerKey: y == null ? void 0 : y.pk
        })) : (dt(), dn({
          days: 1,
          name: Xe,
          value: y == null ? void 0 : y.sid
        })), be.set(y), l && ((A = (O = window == null ? void 0 : window.rep) == null ? void 0 : O.refreshSession) == null || A.call(O))
      }))
    },
    I = h => {
      if (us())
        if (Me()) ze.set(!1);
        else return ze.set(!0), h != null && h.skipOnCookieProved || C(), h != null && h.sendCookeProved && f(), {
          stopPolling: !0
        };
      else return ze.set(!0), h != null && h.skipOnCookieProved || C(), h != null && h.sendCookeProved && f(), {
        stopPolling: !0
      };
      return {
        stopPolling: !0
      }
    },
    w = () => {
      !_n() && n.isPollingEnabled && !d && !p && (I({
        skipOnCookieProved: !0
      }), r(2, d = setInterval(() => {
        if (us()) {
          const h = I();
          h != null && h.stopPolling && d && (clearInterval(d), r(2, d = null))
        }
      }, 300)), r(3, p = setTimeout(() => {
        d && (clearInterval(d), r(2, d = null)), p && (clearTimeout(p), r(3, p = null))
      }, 12e4)), document.addEventListener("visitorConsentCollected", () => {
        const y = s.some(O => O.et === "COOKIE_CONSENT_NOT_APPROVED") || !!o;
        I(y ? void 0 : {
          sendCookeProved: !0
        }), d && (clearInterval(d), r(2, d = null))
      }))
    };
  return Jr(() => {
    w(), k()
  }), hn(() => {
    d && (clearInterval(d), r(2, d = null)), p && (clearTimeout(p), r(3, p = null)), b && (clearTimeout(b), b = null), m = !1
  }), e.$$set = h => {
    "resetSid" in h && r(0, c = h.resetSid)
  }, e.$$.update = () => {
    e.$$.dirty & 226 && (s || o) && a && !u && (s.some(O => O.et === "COOKIE_CONSENT_NOT_APPROVED") || o) && (r(1, u = !0), f()), e.$$.dirty & 28 && n.shouldStopAllPolling && (d && (clearInterval(d), r(2, d = null)), p && (clearTimeout(p), r(3, p = null))), e.$$.dirty & 28 && n.isPollingEnabled && !d && !p && w()
  }, [c, u, d, p, n, o, s, a]
}
class Sa extends Se {
  constructor(t) {
    super(), Oe(this, t, Oa, null, ye, {
      resetSid: 0
    })
  }
}
const In = K(null),
  or = {
    subscribe: In.subscribe,
    set: e => {
      In.set(e)
    },
    flush: () => {
      const e = Ne(In);
      return e && In.set(null), e
    },
    reset: () => {
      In.set(null)
    }
  },
  ho = "vfIsMiniChatIdle",
  _s = K(Ee(ho, "sessionStorage") ? JSON.parse(ne.getItem(ho)) : !0),
  Ia = {
    subscribe: _s.subscribe,
    set: e => {
      _s.set(e), ne.setItem(ho, JSON.stringify(e))
    }
  },
  Lr = "usedSids",
  sr = K(Ee(Lr, "localStorage") ? JSON.parse(L.getItem(Lr) ?? "[]") : []),
  ir = {
    subscribe: sr.subscribe,
    add: e => {
      e && sr.update(t => {
        const n = [...new Set([...t, e])].slice(-20);
        return L.setItem(Lr, JSON.stringify(n)), n
      })
    },
    hasBeenUsed: e => {
      if (!e) return !1;
      let t = [];
      return sr.subscribe(n => {
        t = n || []
      })(), t.includes(e)
    },
    reset: () => {
      sr.set([]), L.setItem(Lr, JSON.stringify([]))
    }
  },
  Ol = (e, t) => {
    typeof document < "u" && document.dispatchEvent(new CustomEvent(`rep:${e}`, {
      detail: t,
      bubbles: !0,
      cancelable: !0
    }))
  };

function Xo(e) {
  const t = e - 1;
  return t * t * t + 1
}

function Y1(e) {
  return --e * e * e * e * e + 1
}

function Ft(e, {
  delay: t = 0,
  duration: r = 400,
  easing: n = zr
} = {}) {
  const o = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: n,
    css: s => `opacity: ${s*o}`
  }
}

function bs(e, {
  delay: t = 0,
  duration: r = 400,
  easing: n = Xo,
  x: o = 0,
  y: s = 0,
  opacity: i = 0
} = {}) {
  const l = getComputedStyle(e),
    a = +l.opacity,
    c = l.transform === "none" ? "" : l.transform,
    u = a * (1 - i),
    [d, p] = os(o),
    [b, m] = os(s);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (f, k) => `
			transform: ${c} translate(${(1-f)*d}${p}, ${(1-f)*b}${m});
			opacity: ${a-u*k}`
  }
}

function Aa(e, {
  delay: t = 0,
  duration: r = 400,
  easing: n = Xo,
  axis: o = "y"
} = {}) {
  const s = getComputedStyle(e),
    i = +s.opacity,
    l = o === "y" ? "height" : "width",
    a = parseFloat(s[l]),
    c = o === "y" ? ["top", "bottom"] : ["left", "right"],
    u = c.map(C => `${C[0].toUpperCase()}${C.slice(1)}`),
    d = parseFloat(s[`padding${u[0]}`]),
    p = parseFloat(s[`padding${u[1]}`]),
    b = parseFloat(s[`margin${u[0]}`]),
    m = parseFloat(s[`margin${u[1]}`]),
    f = parseFloat(s[`border${u[0]}Width`]),
    k = parseFloat(s[`border${u[1]}Width`]);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: C => `overflow: hidden;opacity: ${Math.min(C*20,1)*i};${l}: ${C*a}px;padding-${c[0]}: ${C*d}px;padding-${c[1]}: ${C*p}px;margin-${c[0]}: ${C*b}px;margin-${c[1]}: ${C*m}px;border-${c[0]}-width: ${C*f}px;border-${c[1]}-width: ${C*k}px;`
  }
}

function Sl(e, {
  delay: t = 0,
  duration: r = 400,
  easing: n = Xo,
  start: o = 0,
  opacity: s = 0
} = {}) {
  const i = getComputedStyle(e),
    l = +i.opacity,
    a = i.transform === "none" ? "" : i.transform,
    c = 1 - o,
    u = l * (1 - s);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (d, p) => `
			transform: ${a} scale(${1-c*p});
			opacity: ${l-u*p}
		`
  }
}
var Il = (e => (e.mainColor = "mc", e.background = "bgc", e.secondaryColor = "sc", e.accentColor = "ac", e.support = "csd", e.displayedIconUrl = "i", e.widgetTitle = "wt", e.buttonStyle = "bs", e.buttonLabel = "bl", e.buttonSize = "bsz", e.widgetPosition = "crd", e.paChipColor = "pacc", e.paChipMessageColor = "pacmc", e.paMessageColor = "pamc", e.paXColor = "paxc", e.chipMessageColor = "cmc", e.zIndexRoot = "zIndexRoot", e.showBranding = "sb", e.Tapcart = "Tapcart", e))(Il || {});
const An = K({}),
  Vn = {
    settings: An,
    subscribe: An.subscribe,
    set: e => {
      An.set(e)
    },
    update: e => {
      An.update(t => {
        const r = {
            ...t ?? {}
          },
          n = typeof e == "string" ? JSON.parse(e) : e && typeof e == "object" ? e : "";
        return n && typeof n == "object" && Object.keys(n).forEach(s => {
          var l, a;
          const i = Il[s];
          if (i === "csd") {
            const c = {
              c: ((l = n == null ? void 0 : n[s]) == null ? void 0 : l.color) ?? "",
              v: ((a = n == null ? void 0 : n[s]) == null ? void 0 : a.display) ?? ""
            };
            r[i] = c
          } else r[i] = n[s]
        }), r
      })
    },
    reset: () => {
      An.set({})
    }
  },
  Pa = {
    isHuman: !1,
    humanPic: "",
    humanName: "",
    mainColor: ""
  },
  _o = "vfHumanHandoff",
  gs = K(Ee(_o, "sessionStorage") ? JSON.parse(ne.getItem(_o) ?? "{}") : Pa),
  zt = {
    subscribe: gs.subscribe,
    set: e => {
      gs.set(e), ne.setItem(_o, JSON.stringify(e))
    }
  };

function ws(e) {
  let t, r;

  function n(i, l) {
    if (i[1]) return Ra;
    if (i[3] && i[3].i) return Na
  }
  let o = n(e),
    s = o && o(e);
  return {
    c() {
      var i, l, a;
      t = q("div"), s && s.c(), g(t, "class", r = un(`${e[2]}`) + " svelte-1n3fhn1"), H(t, "border", !((i = e[4]) != null && i.i) && !((l = e[3]) != null && l.i)), H(t, "background", !e[5].humanPic && !((a = e[4]) != null && a.i) && !e[3].i), H(t, "human", e[1]), H(t, "vf-logo__color", e[1] && e[5].mainColor === "#E5FBE5"), H(t, "head", e[0])
    },
    m(i, l) {
      N(i, t, l), s && s.m(t, null)
    },
    p(i, l) {
      var a, c, u;
      o === (o = n(i)) && s ? s.p(i, l) : (s && s.d(1), s = o && o(i), s && (s.c(), s.m(t, null))), l & 4 && r !== (r = un(`${i[2]}`) + " svelte-1n3fhn1") && g(t, "class", r), l & 28 && H(t, "border", !((a = i[4]) != null && a.i) && !((c = i[3]) != null && c.i)), l & 60 && H(t, "background", !i[5].humanPic && !((u = i[4]) != null && u.i) && !i[3].i), l & 6 && H(t, "human", i[1]), l & 38 && H(t, "vf-logo__color", i[1] && i[5].mainColor === "#E5FBE5"), l & 5 && H(t, "head", i[0])
    },
    d(i) {
      i && P(t), s && s.d()
    }
  }
}

function Na(e) {
  let t, r, n;
  return {
    c() {
      var o, s;
      t = q("img"), Tr(t.src, r = ((o = e[4]) == null ? void 0 : o.i) ?? e[3].i) || g(t, "src", r), g(t, "alt", n = ((s = e[4]) == null ? void 0 : s.wt) ?? e[3].wt ?? ""), g(t, "class", "svelte-1n3fhn1")
    },
    m(o, s) {
      N(o, t, s)
    },
    p(o, s) {
      var i, l;
      s & 24 && !Tr(t.src, r = ((i = o[4]) == null ? void 0 : i.i) ?? o[3].i) && g(t, "src", r), s & 24 && n !== (n = ((l = o[4]) == null ? void 0 : l.wt) ?? o[3].wt ?? "") && g(t, "alt", n)
    },
    d(o) {
      o && P(t)
    }
  }
}

function Ra(e) {
  let t;

  function r(s, i) {
    return s[5] && s[5].humanPic ? Ma : La
  }
  let n = r(e),
    o = n(e);
  return {
    c() {
      o.c(), t = se()
    },
    m(s, i) {
      o.m(s, i), N(s, t, i)
    },
    p(s, i) {
      n === (n = r(s)) && o ? o.p(s, i) : (o.d(1), o = n(s), o && (o.c(), o.m(t.parentNode, t)))
    },
    d(s) {
      s && P(t), o.d(s)
    }
  }
}

function La(e) {
  let t, r, n;
  return {
    c() {
      t = he("svg"), r = he("path"), n = he("path"), g(r, "d", "M15.186 0.342c-4.887 0-8.867 3.98-8.867 8.867s3.98 8.867 8.867 8.867 8.867-3.98 8.867-8.867-3.98-8.867-8.867-8.867z"), g(n, "d", "M26.213 21.898c-2.43-2.463-5.649-3.823-9.064-3.823h-3.941c-3.415 0-6.634 1.36-9.064 3.823-2.634 2.68-3.98 6.305-3.704 10.089 0 0.007 0.007 0.013 0.013 0.013h29.458c0.007 0 0.013-0.007 0.013-0.013 0.276-3.783-1.064-7.409-3.711-10.089z"), g(t, "class", "vf-svg-icon svelte-1n3fhn1"), g(t, "version", "1.1"), g(t, "xmlns", "http://www.w3.org/2000/svg"), g(t, "width", "30"), g(t, "height", "32"), g(t, "viewBox", "0 0 30 32"), g(t, "aria-hidden", "true")
    },
    m(o, s) {
      N(o, t, s), F(t, r), F(t, n)
    },
    p: _,
    d(o) {
      o && P(t)
    }
  }
}

function Ma(e) {
  let t, r, n;
  return {
    c() {
      var o;
      t = q("img"), Tr(t.src, r = e[5].humanPic) || g(t, "src", r), g(t, "alt", n = ((o = e[5]) == null ? void 0 : o.humanName) ?? ""), g(t, "class", "svelte-1n3fhn1")
    },
    m(o, s) {
      N(o, t, s)
    },
    p(o, s) {
      var i;
      s & 32 && !Tr(t.src, r = o[5].humanPic) && g(t, "src", r), s & 32 && n !== (n = ((i = o[5]) == null ? void 0 : i.humanName) ?? "") && g(t, "alt", n)
    },
    d(o) {
      o && P(t)
    }
  }
}

function Ua(e) {
  let t, r = e[3] && ws(e);
  return {
    c() {
      r && r.c(), t = se()
    },
    m(n, o) {
      r && r.m(n, o), N(n, t, o)
    },
    p(n, [o]) {
      n[3] ? r ? r.p(n, o) : (r = ws(n), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null)
    },
    i: _,
    o: _,
    d(n) {
      n && P(t), r && r.d(n)
    }
  }
}

function Ha(e, t, r) {
  let n, o, s;
  U(e, be, c => r(3, n = c)), U(e, Vn, c => r(4, o = c)), U(e, zt, c => r(5, s = c));
  let {
    isHead: i = !1
  } = t, {
    isHuman: l
  } = t, {
    size: a
  } = t;
  return e.$$set = c => {
    "isHead" in c && r(0, i = c.isHead), "isHuman" in c && r(1, l = c.isHuman), "size" in c && r(2, a = c.size)
  }, [i, l, a, n, o, s]
}
class Al extends Se {
  constructor(t) {
    super(), Oe(this, t, Ha, Ua, ye, {
      isHead: 0,
      isHuman: 1,
      size: 2
    })
  }
}

function Fa(e) {
  let t, r;
  return {
    c() {
      t = he("svg"), r = he("path"), g(r, "d", "M8.5 17C8.28535 17 8.05997 16.9356 7.82386 16.8068C7.58775 16.678 7.42677 16.4848 7.34091 16.2273L5.2803 11.7197L0.772725 9.65909C0.51515 9.57323 0.321969 9.41225 0.193181 9.17614C0.0643935 8.94003 0 8.71465 0 8.5C0 8.28535 0.0643935 8.05997 0.193181 7.82386C0.321969 7.58775 0.51515 7.42677 0.772725 7.34091L5.2803 5.2803L7.34091 0.772727C7.42677 0.515152 7.58775 0.32197 7.82386 0.193182C8.05997 0.0643939 8.28535 0 8.5 0C8.71465 0 8.94002 0.0643939 9.17613 0.193182C9.41225 0.32197 9.57323 0.515152 9.65909 0.772727L11.7197 5.2803L16.2273 7.34091C16.4848 7.42677 16.678 7.58775 16.8068 7.82386C16.9356 8.05997 17 8.28535 17 8.5C17 8.71465 16.9356 8.94003 16.8068 9.17614C16.678 9.41225 16.4848 9.57323 16.2273 9.65909L11.7197 11.7197L9.65909 16.2273C9.57323 16.4848 9.41225 16.678 9.17613 16.8068C8.94002 16.9356 8.71465 17 8.5 17Z"), g(r, "fill", "white"), g(t, "width", "17"), g(t, "height", "17"), g(t, "viewBox", "0 0 17 17"), g(t, "fill", "none"), g(t, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(n, o) {
      N(n, t, o), F(t, r)
    },
    p: _,
    i: _,
    o: _,
    d(n) {
      n && P(t)
    }
  }
}
class Da extends Se {
  constructor(t) {
    super(), Oe(this, t, null, Fa, ye, {})
  }
}
const Mr = "vfUnread",
  Zr = K(Ee(Mr, "sessionStorage") ? JSON.parse(ne.getItem(Mr) ?? "0") : 0),
  bo = {
    subscribe: Zr.subscribe,
    set: e => {
      Zr.set(e), ne.setItem(Mr, JSON.stringify(e))
    },
    update: e => {
      let t = 0;
      Zr.update(r => (t = r, t ? t = t + e : t = e, t)), t && ne.setItem(Mr, JSON.stringify(t))
    }
  },
  Mn = {
    HUMAN_HANDOFF_MAIN: "#e5fbe5",
    HUMAN_HANDOFF_SECONDARY: "#00b58f",
    NOTIFICATION_BACKGROUND: "#42423c"
  };

function ks(e) {
  let t, r, n;
  return {
    c() {
      t = q("div"), r = We(e[1]), g(t, "class", "bounce svelte-vd7mzh"), Te(t, "background-color", "var(--vf-ac, " + e[0] + ")")
    },
    m(o, s) {
      N(o, t, s), F(t, r)
    },
    p(o, s) {
      s & 2 && at(r, o[1]), s & 1 && Te(t, "background-color", "var(--vf-ac, " + o[0] + ")")
    },
    i(o) {
      o && (n || qe(() => {
        n = Gn(t, Aa, {}), n.start()
      }))
    },
    o: _,
    d(o) {
      o && P(t)
    }
  }
}

function Ba(e) {
  let t, r = e[1] > 0 && ks(e);
  return {
    c() {
      r && r.c(), t = se()
    },
    m(n, o) {
      r && r.m(n, o), N(n, t, o)
    },
    p(n, [o]) {
      n[1] > 0 ? r ? (r.p(n, o), o & 2 && E(r, 1)) : (r = ks(n), r.c(), E(r, 1), r.m(t.parentNode, t)) : r && (r.d(1), r = null)
    },
    i(n) {
      E(r)
    },
    o: _,
    d(n) {
      n && P(t), r && r.d(n)
    }
  }
}

function za(e, t, r) {
  let n;
  U(e, bo, s => r(1, n = s));
  let {
    backgroundColor: o = Mn.NOTIFICATION_BACKGROUND
  } = t;
  return e.$$set = s => {
    "backgroundColor" in s && r(0, o = s.backgroundColor)
  }, [o, n]
}
class Ja extends Se {
  constructor(t) {
    super(), Oe(this, t, za, Ba, ye, {
      backgroundColor: 0
    })
  }
}

function qa(e) {
  let t, r, n, o, s, i, l, a, c, u, d, p, b, m;
  return {
    c() {
      t = he("svg"), r = he("path"), n = he("path"), o = he("path"), s = he("path"), i = he("path"), l = he("path"), a = he("path"), c = he("path"), u = he("path"), d = he("path"), p = he("path"), b = he("path"), m = he("path"), g(r, "class", "star1 svelte-cmicf2"), g(r, "d", "M60.9058 24.5044C60.7955 24.5488 60.6781 24.5612 60.5536 24.5414C60.4291 24.5217 60.3195 24.4668 60.2249 24.3767L58.4137 22.6593L55.9203 22.5456C55.7898 22.54 55.6743 22.4991 55.5737 22.4231C55.4731 22.3471 55.4006 22.254 55.3561 22.1437C55.3117 22.0334 55.2993 21.916 55.3191 21.7915C55.3388 21.667 55.3937 21.5574 55.4838 21.4629L57.2012 19.6516L57.3149 17.1582C57.3205 17.0277 57.3614 16.9122 57.4374 16.8116C57.5134 16.711 57.6065 16.6385 57.7168 16.5941C57.8271 16.5496 57.9445 16.5372 58.069 16.557C58.1935 16.5767 58.303 16.6316 58.3976 16.7217L60.2089 18.4391L62.7023 18.5528C62.8328 18.5584 62.9483 18.5993 63.0489 18.6753C63.1495 18.7513 63.222 18.8444 63.2664 18.9547C63.3109 19.065 63.3233 19.1824 63.3035 19.3069C63.2838 19.4314 63.2289 19.541 63.1388 19.6356L61.4214 21.4468L61.3077 23.9402C61.3021 24.0707 61.2612 24.1862 61.1852 24.2868C61.1092 24.3874 61.0161 24.4599 60.9058 24.5044Z"), g(r, "fill", "#8D72F6"), g(r, "fill-opacity", "0.5"), g(n, "class", "star2 svelte-cmicf2"), g(n, "d", "M40.7617 16.0011C40.6501 16.0011 40.5437 15.9707 40.4423 15.9098C40.3409 15.849 40.2648 15.7628 40.2141 15.6513L39.2407 13.522L37.1115 12.5486C36.9999 12.4979 36.9137 12.4219 36.8529 12.3205C36.7921 12.2191 36.7617 12.1126 36.7617 12.0011C36.7617 11.8895 36.7921 11.7831 36.8529 11.6817C36.9137 11.5803 36.9999 11.5042 37.1115 11.4535L39.2407 10.4802L40.2141 8.35088C40.2648 8.23934 40.3409 8.15316 40.4423 8.09232C40.5437 8.03149 40.6501 8.00107 40.7617 8.00107C40.8732 8.00107 40.9797 8.03149 41.081 8.09232C41.1824 8.15316 41.2585 8.23934 41.3092 8.35088L42.2826 10.4802L44.4118 11.4535C44.5234 11.5042 44.6096 11.5803 44.6704 11.6817C44.7312 11.7831 44.7617 11.8895 44.7617 12.0011C44.7617 12.1126 44.7312 12.2191 44.6704 12.3205C44.6096 12.4219 44.5234 12.4979 44.4118 12.5486L42.2826 13.522L41.3092 15.6513C41.2585 15.7628 41.1824 15.849 41.081 15.9098C40.9797 15.9707 40.8732 16.0011 40.7617 16.0011Z"), g(n, "fill", "#6C85F6"), g(n, "fill-opacity", "0.6"), g(o, "class", "star3 svelte-cmicf2"), g(o, "d", "M24.5051 25.5899C24.4377 25.578 24.3766 25.5482 24.3218 25.5006C24.267 25.4529 24.2302 25.3927 24.2114 25.3198L23.8504 23.9282L22.6669 23.112C22.6049 23.0695 22.5609 23.0143 22.5349 22.9464C22.509 22.8786 22.502 22.811 22.5139 22.7436C22.5258 22.6761 22.5556 22.615 22.6032 22.5602C22.6508 22.5054 22.7111 22.4686 22.7839 22.4499L24.1756 22.0888L24.9917 20.9053C25.0343 20.8433 25.0895 20.7993 25.1573 20.7734C25.2252 20.7474 25.2928 20.7404 25.3602 20.7523C25.4277 20.7642 25.4888 20.794 25.5436 20.8416C25.5984 20.8893 25.6352 20.9495 25.6539 21.0224L26.0149 22.414L27.1985 23.2302C27.2605 23.2727 27.3045 23.3279 27.3304 23.3958C27.3564 23.4636 27.3634 23.5312 27.3515 23.5986C27.3396 23.6661 27.3098 23.7272 27.2622 23.782C27.2145 23.8368 27.1543 23.8736 27.0814 23.8923L25.6898 24.2534L24.8736 25.4369C24.831 25.4989 24.7758 25.5429 24.708 25.5689C24.6402 25.5948 24.5726 25.6018 24.5051 25.5899Z"), g(o, "fill", "#8D72F6"), g(o, "fill-opacity", "0.15"), g(s, "class", "star4 svelte-cmicf2"), g(s, "d", "M2.52606 20.1866C2.45563 20.1616 2.3952 20.1186 2.34478 20.0575C2.29437 19.9964 2.26563 19.9249 2.25858 19.8432L2.12039 18.2807L0.993552 17.1894C0.934463 17.1325 0.897054 17.0651 0.881326 16.9875C0.865598 16.9099 0.870214 16.8358 0.895175 16.7654C0.920135 16.6949 0.96317 16.6345 1.02428 16.5841C1.08539 16.5337 1.15684 16.5049 1.23862 16.4979L2.80112 16.3597L3.89234 15.2329C3.94932 15.1738 4.01663 15.1364 4.09428 15.1206C4.17193 15.1049 4.24597 15.1095 4.3164 15.1345C4.38684 15.1594 4.44726 15.2025 4.49768 15.2636C4.5481 15.3247 4.57683 15.3962 4.58389 15.4779L4.72208 17.0404L5.84891 18.1317C5.908 18.1886 5.94541 18.2559 5.96114 18.3336C5.97687 18.4112 5.97225 18.4853 5.94729 18.5557C5.92233 18.6261 5.87929 18.6866 5.81818 18.737C5.75707 18.7874 5.68563 18.8161 5.60385 18.8232L4.04134 18.9614L2.95012 20.0882C2.89314 20.1473 2.82583 20.1847 2.74818 20.2005C2.67054 20.2162 2.5965 20.2116 2.52606 20.1866Z"), g(s, "fill", "#668AF5"), g(s, "fill-opacity", "0.44"), g(i, "class", "star5 svelte-cmicf2"), g(i, "d", "M13.6833 42.775C13.566 42.8129 13.4437 42.817 13.3164 42.7874C13.1891 42.7578 13.0798 42.6929 12.9887 42.5927L11.2424 40.6829L8.67223 40.3812C8.5377 40.3657 8.42123 40.3149 8.32284 40.2289C8.22445 40.1429 8.15633 40.0412 8.1185 39.9239C8.08067 39.8065 8.07655 39.6842 8.10616 39.5569C8.13576 39.4296 8.20064 39.3204 8.30077 39.2292L10.2106 37.4829L10.5123 34.9128C10.5278 34.7782 10.5786 34.6618 10.6646 34.5634C10.7506 34.465 10.8523 34.3969 10.9696 34.359C11.087 34.3212 11.2093 34.3171 11.3366 34.3467C11.4639 34.3763 11.5731 34.4412 11.6643 34.5413L13.4106 36.4511L15.9808 36.7528C16.1153 36.7683 16.2317 36.8191 16.3301 36.9051C16.4285 36.9912 16.4966 37.0929 16.5345 37.2102C16.5723 37.3275 16.5764 37.4498 16.5468 37.5771C16.5172 37.7044 16.4523 37.8137 16.3522 37.9048L14.4424 39.6511L14.1407 42.2213C14.1252 42.3558 14.0744 42.4723 13.9884 42.5707C13.9023 42.6691 13.8007 42.7372 13.6833 42.775Z"), g(i, "fill", "#628BF5"), g(i, "fill-opacity", "0.15"), g(l, "class", "star6 svelte-cmicf2"), g(l, "d", "M11.6156 59.9998C11.5379 60.0455 11.4513 60.0679 11.3557 60.0671C11.2601 60.0663 11.1718 60.0374 11.0908 59.9805L9.53973 58.8962L7.65732 59.091C7.55884 59.1014 7.46762 59.0838 7.38367 59.0381C7.29972 58.9924 7.23489 58.9307 7.18916 58.853C7.14344 58.7753 7.12098 58.6887 7.1218 58.5931C7.12261 58.4975 7.15148 58.4092 7.20839 58.3282L8.2927 56.7771L8.09788 54.8947C8.08748 54.7962 8.10512 54.705 8.15082 54.6211C8.19651 54.5371 8.25821 54.4723 8.33591 54.4266C8.41361 54.3808 8.50025 54.3584 8.59583 54.3592C8.6914 54.36 8.77971 54.3889 8.86075 54.4458L10.4118 55.5301L12.2942 55.3353C12.3927 55.3249 12.4839 55.3425 12.5678 55.3882C12.6518 55.4339 12.7166 55.4956 12.7624 55.5733C12.8081 55.651 12.8305 55.7376 12.8297 55.8332C12.8289 55.9288 12.8 56.0171 12.7431 56.0982L11.6588 57.6492L11.8536 59.5316C11.864 59.6301 11.8464 59.7213 11.8007 59.8052C11.755 59.8892 11.6933 59.954 11.6156 59.9998Z"), g(l, "fill", "#8D72F6"), g(l, "fill-opacity", "0.33"), g(a, "class", "star7 svelte-cmicf2"), g(a, "d", "M13.2844 74.0791C13.1862 74.0503 13.1003 73.996 13.0267 73.9163C12.9531 73.8365 12.9084 73.741 12.8925 73.6297L12.585 71.5032L10.961 70.0962C10.8759 70.0228 10.8196 69.9336 10.7922 69.8286C10.7648 69.7236 10.7655 69.622 10.7943 69.5237C10.8231 69.4255 10.8774 69.3396 10.9571 69.266C11.0369 69.1924 11.1324 69.1477 11.2437 69.1319L13.3702 68.8243L14.7772 67.2004C14.8506 67.1153 14.9398 67.059 15.0448 67.0316C15.1498 67.0042 15.2514 67.0049 15.3497 67.0337C15.4479 67.0625 15.5338 67.1167 15.6074 67.1965C15.681 67.2762 15.7257 67.3718 15.7416 67.4831L16.0491 69.6096L17.673 71.0165C17.7581 71.09 17.8144 71.1792 17.8418 71.2842C17.8692 71.3892 17.8685 71.4908 17.8397 71.589C17.8109 71.6872 17.7567 71.7731 17.6769 71.8467C17.5972 71.9203 17.5016 71.965 17.3903 71.9809L15.2638 72.2884L13.8569 73.9124C13.7834 73.9975 13.6942 74.0538 13.5892 74.0812C13.4842 74.1086 13.3826 74.1079 13.2844 74.0791Z"), g(a, "fill", "#3B9EF8"), g(a, "fill-opacity", "0.1"), g(c, "class", "star8 svelte-cmicf2"), g(c, "d", "M81.8161 74.3042C81.724 74.3336 81.6281 74.3365 81.5284 74.313C81.4287 74.2895 81.3432 74.2384 81.2719 74.1597L79.9071 72.6587L77.8928 72.4166C77.7874 72.4041 77.6962 72.3641 77.6193 72.2964C77.5423 72.2287 77.4891 72.1489 77.4597 72.0568C77.4303 71.9647 77.4274 71.8688 77.4509 71.7691C77.4743 71.6694 77.5254 71.5839 77.6041 71.5126L79.1052 70.1478L79.3473 68.1335C79.3598 68.0281 79.3998 67.9369 79.4675 67.86C79.5351 67.783 79.615 67.7298 79.7071 67.7004C79.7991 67.671 79.895 67.6681 79.9948 67.6916C80.0945 67.715 80.18 67.7661 80.2513 67.8448L81.6161 69.3459L83.6304 69.588C83.7358 69.6005 83.827 69.6405 83.9039 69.7082C83.9809 69.7758 84.0341 69.8557 84.0635 69.9478C84.0929 70.0398 84.0958 70.1357 84.0723 70.2355C84.0488 70.3352 83.9977 70.4207 83.919 70.492L82.418 71.8568L82.1759 73.8711C82.1634 73.9765 82.1234 74.0677 82.0557 74.1446C81.988 74.2216 81.9082 74.2748 81.8161 74.3042Z"), g(c, "fill", "#8D72F6"), g(c, "fill-opacity", "0.39"), g(u, "class", "star9 svelte-cmicf2"), g(u, "d", "M90.3785 46.9358C90.3055 46.9162 90.2412 46.8777 90.1855 46.8201C90.1298 46.7625 90.0952 46.6928 90.0816 46.611L89.818 45.0474L88.5957 44.0373C88.5316 43.9846 88.4886 43.9198 88.4665 43.8428C88.4445 43.7658 88.4433 43.6908 88.4628 43.6178C88.4824 43.5449 88.5209 43.4805 88.5785 43.4249C88.6361 43.3692 88.7058 43.3346 88.7877 43.321L90.3513 43.0574L91.3613 41.8351C91.414 41.771 91.4789 41.7279 91.5559 41.7059C91.6328 41.6839 91.7078 41.6827 91.7808 41.7022C91.8538 41.7218 91.9181 41.7603 91.9737 41.8179C92.0294 41.8755 92.0641 41.9452 92.0777 42.027L92.3412 43.5906L93.5636 44.6007C93.6276 44.6534 93.6707 44.7182 93.6927 44.7952C93.7147 44.8722 93.716 44.9472 93.6964 45.0202C93.6769 45.0931 93.6383 45.1574 93.5807 45.2131C93.5232 45.2688 93.4534 45.3034 93.3716 45.317L91.808 45.5806L90.798 46.8029C90.7453 46.867 90.6804 46.9101 90.6034 46.9321C90.5264 46.9541 90.4514 46.9553 90.3785 46.9358Z"), g(u, "fill", "#8D72F6"), g(u, "fill-opacity", "0.12"), g(d, "class", "star10 svelte-cmicf2"), g(d, "d", "M76.7617 37.001C76.6222 37.001 76.4892 36.963 76.3624 36.887C76.2357 36.8109 76.1406 36.7032 76.0772 36.5638L74.8605 33.9022L72.1989 32.6854C72.0595 32.6221 71.9518 32.527 71.8757 32.4003C71.7997 32.2735 71.7617 32.1405 71.7617 32.001C71.7617 31.8616 71.7997 31.7285 71.8757 31.6018C71.9518 31.4751 72.0595 31.38 72.1989 31.3166L74.8605 30.0999L76.0772 27.4383C76.1406 27.2989 76.2357 27.1912 76.3624 27.1151C76.4892 27.0391 76.6222 27.001 76.7617 27.001C76.9011 27.001 77.0342 27.0391 77.1609 27.1151C77.2876 27.1912 77.3827 27.2989 77.4461 27.4383L78.6628 30.0999L81.3244 31.3166C81.4638 31.38 81.5715 31.4751 81.6476 31.6018C81.7236 31.7285 81.7617 31.8616 81.7617 32.001C81.7617 32.1405 81.7236 32.2735 81.6476 32.4003C81.5715 32.527 81.4638 32.6221 81.3244 32.6854L78.6628 33.9022L77.4461 36.5638C77.3827 36.7032 77.2876 36.8109 77.1609 36.887C77.0342 36.963 76.9011 37.001 76.7617 37.001Z"), g(d, "fill", "#429CF8"), g(d, "fill-opacity", "0.34"), g(p, "class", "star11 svelte-cmicf2"), g(p, "d", "M70.7275 9.45023C70.6313 9.47716 70.5321 9.47663 70.43 9.44864C70.3279 9.42066 70.2415 9.36469 70.1708 9.28075L68.8172 7.67944L66.7459 7.35409C66.6375 7.33729 66.5448 7.29252 66.4678 7.21976C66.3909 7.14701 66.339 7.06254 66.312 6.96635C66.2851 6.87016 66.2856 6.771 66.3136 6.66887C66.3416 6.56674 66.3976 6.48034 66.4815 6.40969L68.0828 5.05613L68.4082 2.98479C68.425 2.87637 68.4697 2.78368 68.5425 2.70673C68.6152 2.62978 68.6997 2.57784 68.7959 2.55092C68.8921 2.52399 68.9913 2.52451 69.0934 2.5525C69.1955 2.58048 69.2819 2.63645 69.3526 2.7204L70.7061 4.3217L72.7775 4.64706C72.8859 4.66385 72.9786 4.70862 73.0555 4.78138C73.1325 4.85413 73.1844 4.93861 73.2113 5.03479C73.2383 5.13098 73.2377 5.23014 73.2098 5.33227C73.1818 5.43441 73.1258 5.5208 73.0419 5.59145L71.4406 6.94501L71.1152 9.01635C71.0984 9.12478 71.0536 9.21747 70.9809 9.29441C70.9081 9.37136 70.8237 9.4233 70.7275 9.45023Z"), g(p, "fill", "#5991F6"), g(p, "fill-opacity", "0.3"), g(b, "class", "star12 svelte-cmicf2"), g(b, "d", "M49.785 5.74571C49.7363 5.71848 49.6973 5.67921 49.6679 5.62791C49.6385 5.57661 49.6264 5.52043 49.6315 5.45939L49.7267 4.29266L49.0353 3.34805C48.999 3.29869 48.9799 3.24447 48.9782 3.18537C48.9764 3.12628 48.9891 3.0724 49.0163 3.02373C49.0436 2.97507 49.0828 2.93604 49.1341 2.90665C49.1854 2.87727 49.2416 2.86513 49.3026 2.87024L50.4694 2.96542L51.414 2.27401C51.4633 2.23772 51.5176 2.21869 51.5767 2.2169C51.6358 2.21511 51.6896 2.22783 51.7383 2.25507C51.787 2.2823 51.826 2.32157 51.8554 2.37287C51.8848 2.42417 51.8969 2.48034 51.8918 2.54138L51.7966 3.70812L52.488 4.65273C52.5243 4.70208 52.5433 4.7563 52.5451 4.8154C52.5469 4.8745 52.5342 4.92838 52.507 4.97704C52.4797 5.02571 52.4405 5.06473 52.3892 5.09412C52.3379 5.12351 52.2817 5.13565 52.2207 5.13053L51.0539 5.03536L50.1093 5.72676C50.06 5.76305 50.0057 5.78209 49.9466 5.78388C49.8875 5.78566 49.8337 5.77294 49.785 5.74571Z"), g(b, "fill", "#8D72F6"), g(b, "fill-opacity", "0.1"), g(m, "class", "star13 svelte-cmicf2"), g(m, "d", "M24.5217 6.48346C24.4454 6.51169 24.3649 6.51783 24.2802 6.50188C24.1954 6.48593 24.1216 6.44624 24.0587 6.38279L22.8542 5.1729L21.1516 5.04604C21.0625 5.03959 20.9843 5.00939 20.9171 4.95545C20.8498 4.9015 20.8021 4.83638 20.7738 4.76011C20.7456 4.68383 20.7395 4.60332 20.7554 4.51858C20.7714 4.43384 20.8111 4.36003 20.8745 4.29713L22.0844 3.09259L22.2113 1.39005C22.2177 1.30095 22.2479 1.22276 22.3019 1.15549C22.3558 1.08823 22.4209 1.04048 22.4972 1.01226C22.5735 0.984035 22.654 0.977896 22.7387 0.993844C22.8235 1.00979 22.8973 1.04949 22.9602 1.11294L24.1647 2.32282L25.8673 2.44968C25.9564 2.45613 26.0345 2.48633 26.1018 2.54028C26.1691 2.59423 26.2168 2.65934 26.245 2.73562C26.2733 2.81189 26.2794 2.8924 26.2635 2.97714C26.2475 3.06188 26.2078 3.1357 26.1444 3.19859L24.9345 4.40313L24.8076 6.10567C24.8012 6.19478 24.771 6.27296 24.717 6.34023C24.6631 6.40749 24.598 6.45524 24.5217 6.48346Z"), g(m, "fill", "#BBD3FC"), g(t, "width", "95"), g(t, "height", "76"), g(t, "viewBox", "0 0 95 76"), g(t, "fill", "none"), g(t, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(f, k) {
      N(f, t, k), F(t, r), F(t, n), F(t, o), F(t, s), F(t, i), F(t, l), F(t, a), F(t, c), F(t, u), F(t, d), F(t, p), F(t, b), F(t, m)
    },
    p: _,
    i: _,
    o: _,
    d(f) {
      f && P(t)
    }
  }
}
class Ka extends Se {
  constructor(t) {
    super(), Oe(this, t, null, qa, ye, {})
  }
}

function Va(e) {
  let t, r, n, o, s, i;
  return {
    c() {
      t = he("svg"), r = he("circle"), n = he("defs"), o = he("linearGradient"), s = he("stop"), i = he("stop"), g(r, "cx", "27"), g(r, "cy", "27"), g(r, "r", "26"), g(r, "stroke", "url(#paint0_linear_1_28)"), g(r, "stroke-opacity", "0.8"), g(r, "stroke-width", "2"), g(s, "stop-color", "white"), g(s, "stop-opacity", "0"), g(i, "offset", "1"), g(i, "stop-color", "white"), g(o, "id", "paint0_linear_1_28"), g(o, "x1", "27"), g(o, "y1", "6"), g(o, "x2", "27"), g(o, "y2", "0"), g(o, "gradientUnits", "userSpaceOnUse"), g(t, "width", "54"), g(t, "height", "54"), g(t, "viewBox", "0 0 54 54"), g(t, "fill", "none"), g(t, "xmlns", "http://www.w3.org/2000/svg")
    },
    m(l, a) {
      N(l, t, a), F(t, r), F(t, n), F(n, o), F(o, s), F(o, i)
    },
    p: _,
    i: _,
    o: _,
    d(l) {
      l && P(t)
    }
  }
}
class Ga extends Se {
  constructor(t) {
    super(), Oe(this, t, null, Va, ye, {})
  }
}

function ja(e) {
  let t, r, n, o, s;
  return {
    c() {
      t = he("svg"), r = he("path"), n = he("path"), g(r, "d", "M28.797 27.448c4.718-5.442 4.139-13.649-1.184-18.411 2.734 9.581-4.496 19.151-14.456 19.151-0.192 0 0.966 0.007-3.593-0.021 2.493 2.481 5.814 3.834 9.28 3.834 0.009 0 12.215-0.062 12.223-0.062 0.833-0.004 1.249-1.018 0.654-1.605l-2.923-2.885z"), g(n, "d", "M13.156 26.313c7.254 0 13.156-5.902 13.156-13.156s-5.901-13.156-13.156-13.156-13.155 5.902-13.155 13.156c0 3.194 1.131 6.214 3.202 8.604l-2.923 2.885c-0.593 0.585-0.182 1.601 0.654 1.605 0.006 0 12.216 0.063 12.223 0.063z"), g(t, "class", "vf-svg-icon"), g(t, "version", "1.1"), g(t, "xmlns", "http://www.w3.org/2000/svg"), g(t, "width", "32"), g(t, "height", "32"), g(t, "viewBox", "0 0 32 32"), g(t, "aria-hidden", o = e[0] ? "true" : void 0), g(t, "aria-label", s = e[1] || void 0)
    },
    m(i, l) {
      N(i, t, l), F(t, r), F(t, n)
    },
    p(i, [l]) {
      l & 1 && o !== (o = i[0] ? "true" : void 0) && g(t, "aria-hidden", o), l & 2 && s !== (s = i[1] || void 0) && g(t, "aria-label", s)
    },
    i: _,
    o: _,
    d(i) {
      i && P(t)
    }
  }
}

function Wa(e, t, r) {
  let {
    ariaHidden: n = !1
  } = t, {
    ariaLabel: o = ""
  } = t;
  return e.$$set = s => {
    "ariaHidden" in s && r(0, n = s.ariaHidden), "ariaLabel" in s && r(1, o = s.ariaLabel)
  }, [n, o]
}
class Ya extends Se {
  constructor(t) {
    super(), Oe(this, t, Wa, ja, ye, {
      ariaHidden: 0,
      ariaLabel: 1
    })
  }
}

function Qa(e) {
  let t, r;
  return {
    c() {
      t = he("svg"), r = he("path"), g(r, "aria-hidden", "true"), g(r, "d", "M25 12.333c-0.678 0.678-1.017 1.017-1.425 1.092-0.16 0.029-0.324 0.029-0.484 0-0.408-0.075-0.747-0.414-1.425-1.092l-2-2c-0.678-0.678-1.017-1.017-1.092-1.425-0.029-0.16-0.029-0.324 0-0.484 0.075-0.408 0.414-0.747 1.092-1.425s1.017-1.017 1.425-1.092c0.16-0.029 0.324-0.029 0.484 0 0.408 0.075 0.747 0.414 1.425 1.092l2 2c0.678 0.678 1.017 1.017 1.092 1.425 0.029 0.16 0.029 0.324 0 0.484-0.075 0.408-0.414 0.747-1.092 1.425zM8 26.667c-1.257 0-1.886 0-2.276-0.391s-0.391-1.019-0.391-2.276v-1.562c0-0.545 0-0.817 0.101-1.063s0.294-0.438 0.68-0.823l8.667-8.667c0.889-0.889 1.333-1.333 1.886-1.333s0.997 0.444 1.886 1.333l1.562 1.562c0.889 0.889 1.333 1.333 1.333 1.886s-0.444 0.997-1.333 1.886l-8.667 8.667c-0.385 0.385-0.578 0.578-0.823 0.68s-0.518 0.101-1.063 0.101h-1.562z"), g(t, "class", "vf-svg-icon rep-pen-icon svelte-8exqrg"), g(t, "version", "1.1"), g(t, "xmlns", "http://www.w3.org/2000/svg"), g(t, "width", "32"), g(t, "height", "32"), g(t, "viewBox", "0 0 32 32")
    },
    m(n, o) {
      N(n, t, o), F(t, r)
    },
    p: _,
    i: _,
    o: _,
    d(n) {
      n && P(t)
    }
  }
}
class Za extends Se {
  constructor(t) {
    super(), Oe(this, t, null, Qa, ye, {})
  }
}

function Xa(e, t = {}) {
  function r(o) {
    o instanceof KeyboardEvent && o.key === "Escape" && t.isOpen && typeof t.onClose == "function" && (o.preventDefault(), o.stopPropagation(), t.onClose())
  }
  const n = t.global ? document : e;
  return n.addEventListener("keydown", r), {
    update(o) {
      t = {
        ...t,
        ...o
      }
    },
    destroy() {
      n.removeEventListener("keydown", r)
    }
  }
}

function xa(e, t) {
  function r(n) {
    !(n instanceof KeyboardEvent) || n.target !== e || (n.key === "Enter" || n.key === " ") && (n.preventDefault(), n.stopPropagation(), typeof t == "function" && t(n))
  }
  return e.addEventListener("keydown", r), {
    update(n) {
      t = n
    },
    destroy() {
      e.removeEventListener("keydown", r)
    }
  }
}
const Rt = K({
    previousFocus: null,
    isOpen: !1,
    focusTrapped: !1,
    lastAnnouncedMessage: ""
  }),
  vs = {
    storePreviousFocus: e => {
      Rt.update(t => ({
        ...t,
        previousFocus: e
      }))
    },
    returnFocus: () => {
      Rt.update(e => (e.previousFocus && "focus" in e.previousFocus && typeof e.previousFocus.focus == "function" && e.previousFocus.focus(), {
        ...e,
        previousFocus: null,
        isOpen: !1
      }))
    },
    setChatOpen: e => {
      Rt.update(t => ({
        ...t,
        isOpen: e
      }))
    }
  },
  Ot = {
    announce: (e, t = "polite") => new Promise(r => {
      Rt.update(n => ({
        ...n,
        lastAnnouncedMessage: e,
        announcePriority: t
      })), setTimeout(() => {
        Rt.update(n => ({
          ...n,
          lastAnnouncedMessage: ""
        })), r()
      }, 1e3)
    })
  };

function $a(e) {
  const t = ["button:not([disabled])", "input:not([disabled])", "textarea:not([disabled])", "select:not([disabled])", "a[href]", '[tabindex]:not([tabindex="-1"])'].join(", ");
  return Array.from(e.querySelectorAll(t)).filter(r => {
    if (!(r instanceof HTMLElement)) return !1;
    const n = window.getComputedStyle(r);
    return n.display !== "none" && n.visibility !== "hidden" && !r.hasAttribute("aria-hidden") && r.offsetWidth > 0 && r.offsetHeight > 0
  })
}

function Pl(e, t = {}) {
  let r = !1,
    n = null,
    o = null;

  function s() {
    const c = $a(e);
    n = c[0] || null, o = c[c.length - 1] || null
  }

  function i(c) {
    if (!(!r || !(c instanceof KeyboardEvent) || c.key !== "Tab") && (s(), !!n)) {
      if (n === o) {
        c.preventDefault();
        return
      }
      c.shiftKey ? document.activeElement === n && (c.preventDefault(), o == null || o.focus()) : document.activeElement === o && (c.preventDefault(), n.focus())
    }
  }

  function l() {
    if (r = !0, s(), t.initialFocus) {
      const c = e.querySelector(t.initialFocus);
      c ? c.focus() : n && n.focus()
    } else n && n.focus()
  }

  function a() {
    r = !1
  }
  return document.addEventListener("keydown", i), {
    update(c) {
      t = {
        ...t,
        ...c
      }, t.active !== void 0 && (t.active ? l() : a())
    },
    destroy() {
      document.removeEventListener("keydown", i)
    }
  }
}

function Q1(e, t = !1) {
  function r() {
    t && e && typeof e.focus == "function" && setTimeout(() => {
      e.focus()
    }, 100)
  }
  return t && r(), {
    update(n) {
      n && !t && r(), t = n
    }
  }
}

function eu(e, t = !1) {
  let r = t;

  function n() {
    t && !r ? vs.storePreviousFocus(e) : !t && r && vs.returnFocus(), r = t
  }
  return n(), {
    update(o) {
      t = o, n()
    }
  }
}

function tu(e, t, r) {
  const n = e.slice();
  return n[17] = t[r], n
}

function ys(e) {
  let t, r, n, o, s, i, l, a, c, u, d, p = e[1] && Es(),
    b = e[4] && Cs(e),
    m = !e[4] && Ts(e);
  return {
    c() {
      var f, k, C, I, w, h, v, y;
      t = q("button"), p && p.c(), r = Z(), b && b.c(), n = Z(), m && m.c(), g(t, "class", o = un(`
      chat-button vf-chat-trigger notranslate
      chat-button--${((k=(f=e[6])==null?void 0:f.bsz)==null?void 0:k.toLowerCase())??((I=(C=e[5])==null?void 0:C.bsz)==null?void 0:I.toLowerCase())??"normal"}
    `) + " svelte-6plbo3"), g(t, "data-gp-notranslate", ""), g(t, "data-gp-notranslate-frontend", ""), g(t, "data-gp-noloc", "subtree"), g(t, "translate", "no"), g(t, "style", s = `${e[3]} --background-color: ${((h=(w=e[6])==null?void 0:w.csd)==null?void 0:h.c)??((y=(v=e[5])==null?void 0:v.csd)==null?void 0:y.c)??"#1c1d48"}; --color: ${e[2]}`), g(t, "aria-label", i = e[9] ? "Close chat" : "Open chat"), g(t, "aria-expanded", l = e[9] ? "true" : "false"), g(t, "aria-haspopup", "dialog"), H(t, "chat-button--fixed", e[0]), H(t, "chat-button--animated", e[4]), H(t, "chat-button--store-icon", e[7] === "STORE_ICON"), H(t, "chat-button--chat-icon", e[7] === "CHAT_ICON"), H(t, "chat-button--chat-with-us", e[7] === "CHAT_WITH_US")
    },
    m(f, k) {
      N(f, t, k), p && p.m(t, null), F(t, r), b && b.m(t, null), F(t, n), m && m.m(t, null), c = !0, u || (d = [Je(t, "click", ic(sc(e[11]))), Jn(xa.call(null, t, e[11])), Jn(a = eu.call(null, t, e[9]))], u = !0)
    },
    p(f, k) {
      var C, I, w, h, v, y, O, A;
      f[1] ? p ? k & 2 && E(p, 1) : (p = Es(), p.c(), E(p, 1), p.m(t, r)) : p && (X(), T(p, 1, 1, () => {
        p = null
      }), x()), f[4] ? b ? k & 16 && E(b, 1) : (b = Cs(f), b.c(), E(b, 1), b.m(t, n)) : b && (X(), T(b, 1, 1, () => {
        b = null
      }), x()), f[4] ? m && (X(), T(m, 1, 1, () => {
        m = null
      }), x()) : m ? (m.p(f, k), k & 16 && E(m, 1)) : (m = Ts(f), m.c(), E(m, 1), m.m(t, null)), (!c || k & 96 && o !== (o = un(`
      chat-button vf-chat-trigger notranslate
      chat-button--${((I=(C=f[6])==null?void 0:C.bsz)==null?void 0:I.toLowerCase())??((h=(w=f[5])==null?void 0:w.bsz)==null?void 0:h.toLowerCase())??"normal"}
    `) + " svelte-6plbo3")) && g(t, "class", o), (!c || k & 108 && s !== (s = `${f[3]} --background-color: ${((y=(v=f[6])==null?void 0:v.csd)==null?void 0:y.c)??((A=(O=f[5])==null?void 0:O.csd)==null?void 0:A.c)??"#1c1d48"}; --color: ${f[2]}`)) && g(t, "style", s), (!c || k & 512 && i !== (i = f[9] ? "Close chat" : "Open chat")) && g(t, "aria-label", i), (!c || k & 512 && l !== (l = f[9] ? "true" : "false")) && g(t, "aria-expanded", l), a && $e(a.update) && k & 512 && a.update.call(null, f[9]), (!c || k & 97) && H(t, "chat-button--fixed", f[0]), (!c || k & 112) && H(t, "chat-button--animated", f[4]), (!c || k & 224) && H(t, "chat-button--store-icon", f[7] === "STORE_ICON"), (!c || k & 224) && H(t, "chat-button--chat-icon", f[7] === "CHAT_ICON"), (!c || k & 224) && H(t, "chat-button--chat-with-us", f[7] === "CHAT_WITH_US")
    },
    i(f) {
      c || (E(p), E(b), E(m), c = !0)
    },
    o(f) {
      T(p), T(b), T(m), c = !1
    },
    d(f) {
      f && P(t), p && p.d(), b && b.d(), m && m.d(), u = !1, De(d)
    }
  }
}

function Es(e) {
  let t, r;
  return t = new Ja({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function Cs(e) {
  let t, r, n, o, s, i, l, a, c, u, d, p;
  n = new Ka({}), a = new Ga({});
  let b = Mt({
      length: 3
    }),
    m = [];
  for (let f = 0; f < b.length; f += 1) m[f] = nu(tu(e, b, f));
  return {
    c() {
      t = q("div"), r = q("div"), Q(n.$$.fragment), o = Z(), s = q("div"), i = Z(), l = q("div"), Q(a.$$.fragment), c = Z(), u = q("div");
      for (let f = 0; f < m.length; f += 1) m[f].c();
      g(r, "class", "chat-button__animation-outside svelte-6plbo3"), g(s, "class", "gradient-circle svelte-6plbo3"), g(s, "aria-hidden", "true"), g(l, "class", "chat-button__animation-border svelte-6plbo3"), g(u, "class", "chat-button__animation-inner svelte-6plbo3"), g(t, "class", "chat-button__animation-wrapper svelte-6plbo3")
    },
    m(f, k) {
      N(f, t, k), F(t, r), W(n, r, null), F(t, o), F(t, s), F(t, i), F(t, l), W(a, l, null), F(t, c), F(t, u);
      for (let C = 0; C < m.length; C += 1) m[C] && m[C].m(u, null);
      p = !0
    },
    i(f) {
      if (!p) {
        E(n.$$.fragment, f), E(a.$$.fragment, f);
        for (let k = 0; k < b.length; k += 1) E(m[k]);
        f && (d || qe(() => {
          d = Gn(t, Ft, {
            duration: 250
          }), d.start()
        })), p = !0
      }
    },
    o(f) {
      T(n.$$.fragment, f), T(a.$$.fragment, f), m = m.filter(Boolean);
      for (let k = 0; k < m.length; k += 1) T(m[k]);
      p = !1
    },
    d(f) {
      f && P(t), Y(n), Y(a), oc(m, f)
    }
  }
}

function nu(e) {
  let t, r, n, o;
  return r = new Da({}), {
    c() {
      t = q("div"), Q(r.$$.fragment), n = Z(), g(t, "class", "chat-button__animation-inner-icon svelte-6plbo3")
    },
    m(s, i) {
      N(s, t, i), W(r, t, null), F(t, n), o = !0
    },
    p: _,
    i(s) {
      o || (E(r.$$.fragment, s), o = !0)
    },
    o(s) {
      T(r.$$.fragment, s), o = !1
    },
    d(s) {
      s && P(t), Y(r)
    }
  }
}

function Ts(e) {
  let t, r, n, o, s;
  const i = [ou, ru],
    l = [];

  function a(c, u) {
    return c[7] ? 0 : 1
  }
  return r = a(e), n = l[r] = i[r](e), {
    c() {
      t = q("div"), n.c(), g(t, "class", "chat-button__icon-wrapper svelte-6plbo3"), H(t, "chat-button__icon-wrapper--simple", !e[7])
    },
    m(c, u) {
      N(c, t, u), l[r].m(t, null), s = !0
    },
    p(c, u) {
      let d = r;
      r = a(c), r === d ? l[r].p(c, u) : (X(), T(l[d], 1, 1, () => {
        l[d] = null
      }), x(), n = l[r], n ? n.p(c, u) : (n = l[r] = i[r](c), n.c()), E(n, 1), n.m(t, null)), (!s || u & 128) && H(t, "chat-button__icon-wrapper--simple", !c[7])
    },
    i(c) {
      s || (E(n), o && o.end(1), s = !0)
    },
    o(c) {
      T(n), c && (o = zo(t, e[12], {})), s = !1
    },
    d(c) {
      c && P(t), l[r].d(), c && o && o.end()
    }
  }
}

function ru(e) {
  var o, s;
  let t, r, n;
  return r = new Al({
    props: {
      size: ((o = e[5]) == null ? void 0 : o.bsz) === "LARGE" ? "extra-large" : ((s = e[5]) == null ? void 0 : s.bsz) === "EXTRA_LARGE" ? "vf-extra-large" : "vf-large",
      isHuman: e[10].isHuman
    }
  }), {
    c() {
      t = q("div"), Q(r.$$.fragment), g(t, "class", "chat-button__icon svelte-6plbo3")
    },
    m(i, l) {
      N(i, t, l), W(r, t, null), n = !0
    },
    p(i, l) {
      var c, u;
      const a = {};
      l & 32 && (a.size = ((c = i[5]) == null ? void 0 : c.bsz) === "LARGE" ? "extra-large" : ((u = i[5]) == null ? void 0 : u.bsz) === "EXTRA_LARGE" ? "vf-extra-large" : "vf-large"), l & 1024 && (a.isHuman = i[10].isHuman), r.$set(a)
    },
    i(i) {
      n || (E(r.$$.fragment, i), n = !0)
    },
    o(i) {
      T(r.$$.fragment, i), n = !1
    },
    d(i) {
      i && P(t), Y(r)
    }
  }
}

function ou(e) {
  let t, r, n, o, s, i, l, a, c;
  const u = [iu, su],
    d = [];

  function p(m, f) {
    return m[7] === "CHAT_ICON" || m[7] === "CHAT_WITH_US" ? 0 : 1
  }
  r = p(e), n = d[r] = u[r](e), i = new Za({});
  let b = e[7] === "CHAT_WITH_US" && Os(e);
  return {
    c() {
      t = q("div"), n.c(), o = Z(), s = q("div"), Q(i.$$.fragment), l = Z(), b && b.c(), a = se(), g(t, "class", "chat-button__icon svelte-6plbo3"), g(s, "class", "chat-button__icon chat-button__icon--hover svelte-6plbo3")
    },
    m(m, f) {
      N(m, t, f), d[r].m(t, null), N(m, o, f), N(m, s, f), W(i, s, null), N(m, l, f), b && b.m(m, f), N(m, a, f), c = !0
    },
    p(m, f) {
      let k = r;
      r = p(m), r === k ? d[r].p(m, f) : (X(), T(d[k], 1, 1, () => {
        d[k] = null
      }), x(), n = d[r], n ? n.p(m, f) : (n = d[r] = u[r](m), n.c()), E(n, 1), n.m(t, null)), m[7] === "CHAT_WITH_US" ? b ? b.p(m, f) : (b = Os(m), b.c(), b.m(a.parentNode, a)) : b && (b.d(1), b = null)
    },
    i(m) {
      c || (E(n), E(i.$$.fragment, m), c = !0)
    },
    o(m) {
      T(n), T(i.$$.fragment, m), c = !1
    },
    d(m) {
      m && (P(t), P(o), P(s), P(l), P(a)), d[r].d(), Y(i), b && b.d(m)
    }
  }
}

function su(e) {
  var n, o;
  let t, r;
  return t = new Al({
    props: {
      size: ((n = e[5]) == null ? void 0 : n.bsz) === "LARGE" ? "extra-large" : ((o = e[5]) == null ? void 0 : o.bsz) === "EXTRA_LARGE" ? "vf-extra-large" : "vf-large",
      isHuman: e[10].isHuman
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(s, i) {
      W(t, s, i), r = !0
    },
    p(s, i) {
      var a, c;
      const l = {};
      i & 32 && (l.size = ((a = s[5]) == null ? void 0 : a.bsz) === "LARGE" ? "extra-large" : ((c = s[5]) == null ? void 0 : c.bsz) === "EXTRA_LARGE" ? "vf-extra-large" : "vf-large"), i & 1024 && (l.isHuman = s[10].isHuman), t.$set(l)
    },
    i(s) {
      r || (E(t.$$.fragment, s), r = !0)
    },
    o(s) {
      T(t.$$.fragment, s), r = !1
    },
    d(s) {
      Y(t, s)
    }
  }
}

function iu(e) {
  let t, r;
  return t = new Ya({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    p: _,
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function Os(e) {
  let t;

  function r(s, i) {
    return typeof s[8] == "string" && s[8].length ? cu : lu
  }
  let n = r(e),
    o = n(e);
  return {
    c() {
      o.c(), t = se()
    },
    m(s, i) {
      o.m(s, i), N(s, t, i)
    },
    p(s, i) {
      n === (n = r(s)) && o ? o.p(s, i) : (o.d(1), o = n(s), o && (o.c(), o.m(t.parentNode, t)))
    },
    d(s) {
      s && P(t), o.d(s)
    }
  }
}

function lu(e) {
  var o, s;
  let t, r = (((s = (o = e[5]) == null ? void 0 : o.sm) == null ? void 0 : s.CHAT_WITH_US) ?? "Chat with us") + "",
    n;
  return {
    c() {
      t = q("span"), n = We(r), g(t, "class", "chat-button__text svelte-6plbo3")
    },
    m(i, l) {
      N(i, t, l), F(t, n)
    },
    p(i, l) {
      var a, c;
      l & 32 && r !== (r = (((c = (a = i[5]) == null ? void 0 : a.sm) == null ? void 0 : c.CHAT_WITH_US) ?? "Chat with us") + "") && at(n, r)
    },
    d(i) {
      i && P(t)
    }
  }
}

function cu(e) {
  let t, r;
  return {
    c() {
      t = q("span"), r = We(e[8]), g(t, "class", "chat-button__text svelte-6plbo3")
    },
    m(n, o) {
      N(n, t, o), F(t, r)
    },
    p(n, o) {
      o & 256 && at(r, n[8])
    },
    d(n) {
      n && P(t)
    }
  }
}

function au(e) {
  let t, r, n = e[7] !== "HIDDEN" && ys(e);
  return {
    c() {
      n && n.c(), t = se()
    },
    m(o, s) {
      n && n.m(o, s), N(o, t, s), r = !0
    },
    p(o, [s]) {
      o[7] !== "HIDDEN" ? n ? (n.p(o, s), s & 128 && E(n, 1)) : (n = ys(o), n.c(), E(n, 1), n.m(t.parentNode, t)) : n && (X(), T(n, 1, 1, () => {
        n = null
      }), x())
    },
    i(o) {
      r || (E(n), r = !0)
    },
    o(o) {
      T(n), r = !1
    },
    d(o) {
      o && P(t), n && n.d(o)
    }
  }
}

function uu(e, t, r) {
  let n, o, s, i;
  U(e, be, h => r(5, n = h)), U(e, Vn, h => r(6, o = h)), U(e, He, h => r(9, s = h)), U(e, zt, h => r(10, i = h));
  let {
    isFixed: l = !0
  } = t, {
    isCounter: a = !1
  } = t, {
    color: c = ""
  } = t, {
    style: u = ""
  } = t, {
    animate: d = !1
  } = t, {
    animateDelay: p = 0
  } = t, b, m = !1, f = n == null ? void 0 : n.bs, k = n == null ? void 0 : n.bl;
  const C = Ho("toggleFunction"),
    I = () => {
      C ? C() : console.warn("[ChatButton] toggleFunction not found in context")
    },
    w = h => {
      if (f !== "CHAT_WITH_US") return Ft(h, {
        duration: 250
      });
      const v = parseFloat(getComputedStyle(h).width);
      return {
        duration: 250,
        css: y => `
        width: ${y*v}px;
        opacity: ${y};
      `
      }
    };
  return hn(() => {
    clearTimeout(b)
  }), e.$$set = h => {
    "isFixed" in h && r(0, l = h.isFixed), "isCounter" in h && r(1, a = h.isCounter), "color" in h && r(2, c = h.color), "style" in h && r(3, u = h.style), "animate" in h && r(13, d = h.animate), "animateDelay" in h && r(14, p = h.animateDelay)
  }, e.$$.update = () => {
    e.$$.dirty & 24624 && d && !m && !(n != null && n.ds) && (b = window.setTimeout(() => r(4, m = !0), p)), e.$$.dirty & 64 && o != null && o.bs && r(7, f = o == null ? void 0 : o.bs), e.$$.dirty & 96 && (o != null && o.bs || r(7, f = n == null ? void 0 : n.bs)), e.$$.dirty & 64 && o != null && o.bl && r(8, k = o == null ? void 0 : o.bl), e.$$.dirty & 96 && (o != null && o.bl || r(8, k = n == null ? void 0 : n.bl))
  }, [l, a, c, u, m, n, o, f, k, s, i, I, w, d, p]
}
class fu extends Se {
  constructor(t) {
    super(), Oe(this, t, uu, au, ye, {
      isFixed: 0,
      isCounter: 1,
      color: 2,
      style: 3,
      animate: 13,
      animateDelay: 14
    })
  }
}
const Ss = "mainElement",
  go = "vfHide",
  Is = K(Ee(go, "sessionStorage") ? JSON.parse(ne.getItem(go) ?? "false") : !1),
  du = {
    subscribe: Is.subscribe,
    update: e => {
      Is.update(() => (ne.setItem(go, JSON.stringify(e)), e))
    }
  },
  wo = "vfAutotrack",
  As = K(Ee(wo, "sessionStorage") ? JSON.parse(ne.getItem(wo)) : !1),
  Nl = {
    subscribe: As.subscribe,
    set: e => {
      As.set(e), ne.setItem(wo, JSON.stringify(e))
    }
  },
  vr = "vf-isExpanded",
  pu = () => {
    try {
      const e = L.getItem(vr);
      return e ? JSON.parse(e) : !1
    } catch {
      return !1
    }
  },
  lr = K(pu()),
  Lt = {
    subscribe: lr.subscribe,
    set: e => {
      lr.set(e);
      try {
        L.setItem(vr, JSON.stringify(e))
      } catch (t) {
        console.error("Failed to save expand state:", t)
      }
    },
    toggle: () => {
      lr.update(e => {
        const t = !e;
        try {
          L.setItem(vr, JSON.stringify(t))
        } catch (r) {
          console.error("Failed to save expand state:", r)
        }
        return t
      })
    },
    reset: () => {
      lr.set(!1);
      try {
        L.setItem(vr, JSON.stringify(!1))
      } catch (e) {
        console.error("Failed to save expand state:", e)
      }
    }
  },
  cr = K(!1);
let St = null;
const ko = {
    subscribe: cr.subscribe,
    trigger: (e = 500) => {
      cr.set(!0), St && clearTimeout(St), St = setTimeout(() => {
        cr.set(!1), St = null
      }, e)
    },
    reset: () => {
      St && (clearTimeout(St), St = null), cr.set(!1)
    }
  },
  Ps = K(!1),
  Ze = {
    subscribe: Ps.subscribe,
    set: e => {
      Ps.set(e), L.setItem("isMinimized", JSON.stringify(e))
    }
  },
  vo = {
    t: [],
    b: []
  },
  ar = K(vo),
  yo = {
    subscribe: ar.subscribe,
    set: e => ar.set(e),
    setFromSettings: e => {
      ar.set(e ?? vo)
    },
    reset: () => ar.set(vo)
  },
  Ns = K(!1);
let qr = null,
  Be = "vfChat";
const xo = e => ge() && e ? `vfChat${e}` : "vfChat",
  mu = () => {
    let e = null;
    if (ge()) {
      let r = null;
      be.subscribe(s => {
        r = s
      })();
      const o = (r == null ? void 0 : r.pk) || null;
      qr = o, e = o, Be = xo(o)
    }
    if (!Ee(Be, "localStorage")) return [];
    const t = JSON.parse(L.getItem(Be) ?? "[]");
    if (ge() && e) {
      const r = t.filter(n => !n.requestMetadata || n.requestMetadata.pk === e);
      return r.length !== t.length && L.setItem(Be, JSON.stringify(r)), r
    }
    return t
  },
  rt = K(mu()),
  hu = e => {
    if (!ge()) return;
    const t = xo(e);
    if (t !== Be) {
      qr = e, Be = t;
      const r = Ee(Be, "localStorage") ? JSON.parse(L.getItem(Be) ?? "[]") : [];
      rt.set(r)
    }
  };
ge() && be.subscribe(e => {
  const t = (e == null ? void 0 : e.pk) || null;
  t !== qr && hu(t)
});
const Le = {
    chat: rt,
    subscribe: rt.subscribe,
    set: e => {
      rt.set(e), L.setItem(Be, JSON.stringify(e))
    },
    update: (e, t) => {
      if (Array.isArray(e)) {
        const r = e.some(n => n.type === "loading" || n.type === "loadingHumanHandof");
        Ns.set(r)
      }
      if (ge() && t !== void 0) {
        const r = xo(t);
        if (t !== qr) {
          L.setItem(r, JSON.stringify(e));
          return
        }
      }
      if (Array.isArray(e) && (e != null && e.length)) {
        let r = !1,
          n = -1,
          o = -1,
          s = -1;
        e.forEach((a, c) => {
          const {
            type: u,
            responseType: d
          } = a;
          r || (u === "loading" ? r = !0 : d !== "user" && (u === "BOT" || u === "ERROR" || u === "HUMAN") && (o = c))
        }), r || (n = e[e.length - 1].type === "devider" ? e.length - 1 : -1);
        let i = [],
          l = e.filter((a, c) => c !== o && c !== n);
        rt.update(a => {
          if (a != null && a.length) {
            const c = [];
            (r ? [...a.filter(d => d.type !== "loading")] : [...a]).forEach((d, p) => {
              var b, m, f;
              if (d.type !== "loadingHumanHandof") {
                let k = null;
                if (d.responseType === "platform" && Array.isArray(d.body) && (k = d.body.filter(C => !C.ds)), d.type === "loading" && o > -1) {
                  s = p;
                  const C = {
                    ...d,
                    type: e[o].type,
                    id: `${new Date().getTime()+5}`,
                    body: [...e[o].body],
                    showRate: !!e[o].showRate,
                    responseBasedOn: e[o].responseBasedOn,
                    generatedByAi: ((b = e[o]) == null ? void 0 : b.generatedByAi) ?? !1,
                    slider: (m = e[o]) == null ? void 0 : m.slider,
                    pills: (f = e[o]) == null ? void 0 : f.pills
                  };
                  c.push(C), n > -1 && e[n] && c.push({
                    ...e[n]
                  })
                } else {
                  const C = {
                    ...d,
                    body: [...k ?? (d == null ? void 0 : d.body) ?? []],
                    showRate: !1,
                    animate: !1,
                    pills: null,
                    slider: null
                  };
                  c.push(C)
                }
              }
            }), s > -1 ? i = [...l, ...c] : i = [...e, ...c]
          } else i = [...e];
          return i
        }), i && L.setItem(Be, JSON.stringify(i))
      }
    },
    updateSliderItems: (e, t) => {
      Array.isArray(e) && e.length > 0 && rt.update(r => {
        var o;
        const n = r ?? [];
        return Array.isArray((o = n == null ? void 0 : n[t]) == null ? void 0 : o.body) && (n[t].body = [...n[t].body, ...e]), L.setItem(Be, JSON.stringify(n)), n
      })
    },
    resetAnimate: e => {
      const t = [];
      rt.update(r => (r && r.forEach((n, o) => {
        typeof e == "number" && o === e ? t.push({
          ...n,
          animate: !1
        }) : typeof e > "u" ? t.push({
          ...n,
          animate: !1
        }) : t.push({
          ...n
        })
      }), t)), t && L.setItem(Be, JSON.stringify(t))
    },
    reset: () => {
      rt.set([]), L.setItem(Be, JSON.stringify([])), Ns.set(!1)
    },
    hasPendingRequest: () => {
      let e = !1;
      return rt.subscribe(r => {
        Array.isArray(r) && (e = r.some(n => n.type === "loading" || n.type === "loadingHumanHandof"))
      })(), e
    },
    hasLaunchForContext: () => {
      if (!ge()) return !1;
      let e = !1,
        t = null;
      be.subscribe(s => {
        t = (s == null ? void 0 : s.pk) || null
      })();
      const n = window.location.pathname.replace(/\/$/, "") || "/";
      return rt.subscribe(s => {
        Array.isArray(s) && t && (e = s.some(i => {
          var l, a, c;
          return ((l = i.requestMetadata) == null ? void 0 : l.rt) === "LAUNCH" && ((a = i.requestMetadata) == null ? void 0 : a.pk) === t && ((c = i.requestMetadata) == null ? void 0 : c.urlPath) === n
        }))
      })(), e
    }
  },
  _u = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Le
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  xt = "vf_chat_history",
  bu = () => (L.removeItem(xt), {
    messages: [],
    isViewing: !1,
    currentSessionId: null
  }),
  Pn = K(bu()),
  gu = () => ({
    subscribe: Pn.subscribe,
    setTranscript: (e, t) => {
      const r = {
        messages: e,
        isViewing: !0,
        currentSessionId: t
      };
      Pn.set(r), L.setItem(xt, JSON.stringify(r))
    },
    clear: () => {
      il();
      const e = {
        messages: [],
        isViewing: !1,
        currentSessionId: null
      };
      Pn.set(e), L.setItem(xt, JSON.stringify(e))
    },
    update: e => {
      if (!Array.isArray(e) || !e.length) return;
      let t = !1,
        r = -1;
      e.forEach((o, s) => {
        const {
          type: i,
          responseType: l
        } = o;
        t || (i === "loading" ? t = !0 : l !== "user" && (i === "BOT" || i === "ERROR" || i === "HUMAN") && (r = s))
      });
      const n = e.filter((o, s) => s !== r);
      Pn.update(o => {
        var s;
        if ((s = o.messages) != null && s.length) {
          const i = [];
          (t ? [...o.messages.filter(u => u.type !== "loading")] : [...o.messages]).forEach(u => {
            var d, p, b;
            if (u.type !== "loadingHumanHandof") {
              let m = null;
              if (u.responseType === "platform" && Array.isArray(u.body) && (m = u.body.filter(f => !f.ds)), u.type === "loading" && r > -1) {
                const f = {
                  ...u,
                  type: e[r].type,
                  id: `${new Date().getTime()+5}`,
                  body: [...e[r].body],
                  showRate: !!e[r].showRate,
                  responseBasedOn: e[r].responseBasedOn,
                  generatedByAi: ((d = e[r]) == null ? void 0 : d.generatedByAi) ?? !1,
                  slider: (p = e[r]) == null ? void 0 : p.slider,
                  pills: (b = e[r]) == null ? void 0 : b.pills
                };
                i.push(f)
              } else {
                const f = {
                  ...u,
                  body: [...m ?? (u == null ? void 0 : u.body) ?? []],
                  showRate: !1,
                  animate: !1,
                  pills: null,
                  slider: null
                };
                i.push(f)
              }
            }
          });
          const a = [...n, ...i];
          o.currentSessionId && Vo(o.currentSessionId, a);
          const c = {
            messages: a,
            isViewing: o.isViewing,
            currentSessionId: o.currentSessionId
          };
          return L.setItem(xt, JSON.stringify(c)), c
        } else {
          const i = {
            messages: [...e],
            isViewing: o.isViewing,
            currentSessionId: o.currentSessionId
          };
          return L.setItem(xt, JSON.stringify(i)), i
        }
      })
    },
    reset: () => {
      const e = {
        messages: [],
        isViewing: !1,
        currentSessionId: null
      };
      Pn.set(e), L.setItem(xt, JSON.stringify(e))
    }
  }),
  mt = gu(),
  wu = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mt
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Eo = K(!1),
  Rs = K(!0),
  gt = {
    subscribe: Rs.subscribe,
    set: e => {
      Rs.set(e)
    }
  },
  Ls = K(!0),
  ku = {
    subscribe: Ls.subscribe,
    set: e => {
      Ls.set(e)
    }
  },
  Ur = "vfMiniChat";
var Yi;
const Xr = K(Ee(Ur, "sessionStorage") && !((Yi = window == null ? void 0 : window.shopify) != null && Yi.extension) ? JSON.parse(ne.getItem(Ur) ?? "[]") : []),
  ot = {
    subscribe: Xr.subscribe,
    set: e => {
      var t;
      (t = window == null ? void 0 : window.shopify) != null && t.extension || (Xr.set(e), ne.setItem(Ur, JSON.stringify(e)))
    },
    reset: () => {
      Xr.set([]), ne.setItem(Ur, JSON.stringify([]))
    }
  };

function vu(e) {
  let t, r, n;
  return {
    c() {
      t = q("div"), r = Z(), n = q("div"), g(t, "aria-live", "polite"), g(t, "aria-atomic", "true"), g(t, "aria-relevant", "additions text"), g(t, "aria-busy", "false"), g(t, "class", "vf-live-region vf-sr-only"), Te(t, "position", "absolute", 1), Te(t, "left", "-10000px", 1), Te(t, "width", "1px", 1), Te(t, "height", "1px", 1), Te(t, "overflow", "hidden", 1), g(n, "aria-live", "assertive"), g(n, "aria-atomic", "true"), g(n, "aria-relevant", "additions text"), g(n, "aria-busy", "false"), g(n, "class", "vf-live-region vf-sr-only"), Te(n, "position", "absolute", 1), Te(n, "left", "-10000px", 1), Te(n, "width", "1px", 1), Te(n, "height", "1px", 1), Te(n, "overflow", "hidden", 1)
    },
    m(o, s) {
      N(o, t, s), e[15](t), N(o, r, s), N(o, n, s), e[16](n)
    },
    p: _,
    i: _,
    o: _,
    d(o) {
      o && (P(t), P(r), P(n)), e[15](null), e[16](null)
    }
  }
}

function yu(e, t, r) {
  let n, o, s, i, l, a, c, u, d;
  U(e, Rt, h => r(7, o = h)), U(e, He, h => r(8, s = h)), U(e, zt, h => r(9, i = h)), U(e, ku, h => r(10, l = h)), U(e, gt, h => r(11, a = h)), U(e, Ze, h => r(12, c = h)), U(e, ot, h => r(13, u = h)), U(e, Le, h => r(14, d = h));
  let p, b, m = 0,
    f = !0,
    k = !0,
    C = 0;

  function I(h) {
    vt[h ? "unshift" : "push"](() => {
      p = h, r(0, p), r(7, o), r(1, b)
    })
  }

  function w(h) {
    vt[h ? "unshift" : "push"](() => {
      b = h, r(1, b), r(7, o), r(0, p)
    })
  }
  return e.$$.update = () => {
    if (e.$$.dirty & 16384 && r(6, n = d.filter(h => h.type !== "loading" && h.type !== "loadingHumanHandof").length), e.$$.dirty & 16708 && d && n > m && s) {
      let h = null;
      for (let v = 0; v < d.length; v++) {
        const y = d[v];
        if (y && y.responseType === "platform" && y.body && y.type !== "loading" && y.type !== "loadingHumanHandof") {
          h = y;
          break
        }
      }
      if (h) {
        let v = "";
        Array.isArray(h.body) ? v = h.body.filter(O => O && typeof O == "object" && O.t).map(O => O.t).reverse().join(" ") : typeof h.body == "string" && (v = h.body), v.trim() && Ot.announce(`New message: ${v}`, "polite")
      }
      r(2, m = n)
    }
    if (e.$$.dirty & 12576 && u && u.length > C && !s && c) {
      const h = u[0];
      if (h && h.responseType === "platform" && h.body) {
        let v = "";
        Array.isArray(h.body) ? v = h.body.filter(O => O && typeof O == "object" && O.t).map(O => O.t).reverse().join(" ") : typeof h.body == "string" && (v = h.body), v.trim() && Ot.announce(`New notification: ${v}`, "polite")
      }
      r(5, C = u.length)
    }
    if (e.$$.dirty & 4352 && c && !s && Ot.announce("New message notification available. Press Tab to interact.", "polite"), e.$$.dirty & 3336 && (!a && l && f && s ? (Ot.announce("Bot is typing...", "polite"), r(3, f = a)) : a !== f && r(3, f = a)), e.$$.dirty & 2312 && a && !f && s && Ot.announce("Message sent", "polite"), e.$$.dirty & 1296 && (!l && k && s ? (Ot.announce("Unable to type. Please wait or check connection.", "assertive"), r(4, k = l)) : l !== k && r(4, k = l)), e.$$.dirty & 768 && i.isHuman && s) {
      const h = i.humanName || "human agent";
      Ot.announce(`Connected to ${h}`, "assertive")
    }
    if (e.$$.dirty & 384 && s !== o.isOpen && Rt.update(h => ({
        ...h,
        isOpen: s
      })), e.$$.dirty & 131 && o.lastAnnouncedMessage && p && b) {
      const h = o.lastAnnouncedMessage;
      (o.announcePriority || "polite") === "assertive" && b ? r(1, b.textContent = h, b) : p && r(0, p.textContent = h, p)
    }
  }, [p, b, m, f, k, C, n, o, s, i, l, a, c, u, d, I, w]
}
class Eu extends Se {
  constructor(t) {
    super(), Oe(this, t, yu, vu, ye, {})
  }
}

function Cu(e) {
  let t, r;
  return {
    c() {
      t = q("div"), t.innerHTML = '<div class="skeleton-message skeleton-message--bot svelte-12j6wi9"><div class="skeleton-avatar svelte-12j6wi9"></div> <div class="skeleton-content svelte-12j6wi9"><div class="skeleton-line skeleton-line--long svelte-12j6wi9"></div> <div class="skeleton-line skeleton-line--medium svelte-12j6wi9"></div> <div class="skeleton-line skeleton-line--short svelte-12j6wi9"></div></div></div>', g(t, "class", "messages-skeleton svelte-12j6wi9")
    },
    m(n, o) {
      N(n, t, o)
    },
    p: _,
    i(n) {
      n && (r || qe(() => {
        r = Gn(t, Ft, {
          duration: 150
        }), r.start()
      }))
    },
    o: _,
    d(n) {
      n && P(t)
    }
  }
}
class Rl extends Se {
  constructor(t) {
    super(), Oe(this, t, null, Cu, ye, {})
  }
}
const Dn = "vf-sidebar-collapsed",
  Tu = () => {
    try {
      if (Ee(Dn, "localStorage")) return JSON.parse(L.getItem(Dn) ?? "false")
    } catch {}
    return !1
  },
  ur = K(Tu()),
  xr = {
    subscribe: ur.subscribe,
    set: e => {
      ur.set(e), L.setItem(Dn, JSON.stringify(e))
    },
    toggle: () => {
      ur.update(e => {
        const t = !e;
        return L.setItem(Dn, JSON.stringify(t)), t
      })
    },
    reset: () => {
      ur.set(!1), L.removeItem(Dn)
    }
  },
  Nn = K(!1),
  kt = {
    subscribe: Nn.subscribe,
    open: () => Nn.set(!0),
    close: () => Nn.set(!1),
    toggle: () => Nn.update(e => !e),
    reset: () => Nn.set(!1)
  },
  Ms = {
    update: e => {
      Ne(mt).isViewing ? mt.update(e) : Le.update(e)
    }
  },
  Ll = () => window.innerWidth <= 540 ? "mobile" : "desktop",
  Ml = async ({
    settings: e,
    isPrivacyPolicyProved: t,
    eventType: r,
    trigger: n
  }) => {
    var s, i;
    const o = await Fe(e);
    !o || !t || ke.update({
      rt: "EVENT",
      et: r,
      bp: {
        ...o,
        au: !!((i = (s = window == null ? void 0 : window.meta) == null ? void 0 : s.page) != null && i.customerId)
      },
      d: {
        platform: Ll(),
        trigger: n
      }
    })
  }, Ou = (e, t) => Ml({
    settings: e,
    isPrivacyPolicyProved: t,
    eventType: "MENU_OPENED",
    trigger: "burger_click"
  }), Hr = (e, t, r) => Ml({
    settings: e,
    isPrivacyPolicyProved: t,
    eventType: "MENU_CLOSED",
    trigger: r
  }), Su = async ({
    settings: e,
    isPrivacyPolicyProved: t,
    shortcutId: r,
    category: n,
    shortcutLabel: o
  }) => {
    var i, l;
    const s = await Fe(e);
    !s || !t || ke.update({
      rt: "EVENT",
      et: "SHORTCUT_CLICKED",
      bp: {
        ...s,
        au: !!((l = (i = window == null ? void 0 : window.meta) == null ? void 0 : i.page) != null && l.customerId)
      },
      d: {
        shortcutId: r,
        category: n,
        shortcutLabel: o,
        platform: Ll()
      }
    })
  };

function Us(e) {
  let t, r;
  return {
    c() {
      t = q("span"), r = We(e[1]), g(t, "class", "vf-shortcut__icon material-symbols-rounded notranslate svelte-lv8igr"), g(t, "data-gp-notranslate", ""), g(t, "data-gp-notranslate-frontend", ""), g(t, "data-gp-noloc", "node"), g(t, "translate", "no")
    },
    m(n, o) {
      N(n, t, o), F(t, r)
    },
    p(n, o) {
      o & 2 && at(r, n[1])
    },
    d(n) {
      n && P(t)
    }
  }
}

function Iu(e) {
  let t, r, n, o, s, i, l, a, c = e[1] && Us(e);
  return {
    c() {
      t = q("button"), c && c.c(), r = Z(), n = q("span"), o = We(e[0]), g(n, "class", "vf-shortcut__text svelte-lv8igr"), H(n, "vf-shortcut__text--hidden", e[2]), g(t, "class", "vf-shortcut svelte-lv8igr"), g(t, "title", s = e[2] ? e[0] : void 0), g(t, "aria-label", e[0]), g(t, "tabindex", i = e[3] ? -1 : 0), t.disabled = e[3], H(t, "vf-shortcut--collapsed", e[2]), H(t, "vf-shortcut--disabled", e[3])
    },
    m(u, d) {
      N(u, t, d), c && c.m(t, null), F(t, r), F(t, n), F(n, o), l || (a = [Je(t, "click", e[4]), Je(t, "keydown", e[5])], l = !0)
    },
    p(u, [d]) {
      u[1] ? c ? c.p(u, d) : (c = Us(u), c.c(), c.m(t, r)) : c && (c.d(1), c = null), d & 1 && at(o, u[0]), d & 4 && H(n, "vf-shortcut__text--hidden", u[2]), d & 5 && s !== (s = u[2] ? u[0] : void 0) && g(t, "title", s), d & 1 && g(t, "aria-label", u[0]), d & 8 && i !== (i = u[3] ? -1 : 0) && g(t, "tabindex", i), d & 8 && (t.disabled = u[3]), d & 4 && H(t, "vf-shortcut--collapsed", u[2]), d & 8 && H(t, "vf-shortcut--disabled", u[3])
    },
    i: _,
    o: _,
    d(u) {
      u && P(t), c && c.d(), l = !1, De(a)
    }
  }
}

function Au(e, t, r) {
  let n, o, s;
  U(e, ze, f => r(8, n = f)), U(e, be, f => r(9, o = f)), U(e, zt, f => r(10, s = f));
  let {
    label: i
  } = t, {
    userInput: l
  } = t, {
    icon: a = ""
  } = t, {
    isCollapsed: c = !1
  } = t, {
    disabled: u = !1
  } = t, {
    category: d = "TOP"
  } = t;
  const p = dc(),
    b = () => {
      u || (s.isHuman ? Ms.update([Ic, {
        type: "text",
        responseType: "user",
        body: [l],
        id: `${new Date().getTime()+2}`,
        animate: !1
      }]) : (gt.set(!1), Ms.update([_r, {
        type: "text",
        responseType: "user",
        body: [l],
        id: `${new Date().getTime()+2}`,
        animate: !1
      }])), p("select"), Su({
        settings: o,
        isPrivacyPolicyProved: n,
        shortcutId: a,
        category: d,
        shortcutLabel: i
      }), Fe(o, !0).then(f => {
        var k, C;
        f && n && ke.update({
          rt: "USER_REQUEST",
          bp: {
            ...f,
            q: l,
            src: "menu_shortcut",
            au: !!((C = (k = window == null ? void 0 : window.meta) == null ? void 0 : k.page) != null && C.customerId),
            cc: !0
          }
        })
      }))
    },
    m = f => {
      u || (f.key === "Enter" || f.key === " ") && (f.preventDefault(), b())
    };
  return e.$$set = f => {
    "label" in f && r(0, i = f.label), "userInput" in f && r(6, l = f.userInput), "icon" in f && r(1, a = f.icon), "isCollapsed" in f && r(2, c = f.isCollapsed), "disabled" in f && r(3, u = f.disabled), "category" in f && r(7, d = f.category)
  }, [i, a, c, u, b, m, l, d]
}
class Ul extends Se {
  constructor(t) {
    super(), Oe(this, t, Au, Iu, ye, {
      label: 0,
      userInput: 6,
      icon: 1,
      isCollapsed: 2,
      disabled: 3,
      category: 7
    })
  }
}

function Hs(e) {
  let t, r;
  return {
    c() {
      t = q("div"), r = We(e[2]), g(t, "class", "vf-new-conversation__error svelte-68zfs0")
    },
    m(n, o) {
      N(n, t, o), F(t, r)
    },
    p(n, o) {
      o & 4 && at(r, n[2])
    },
    d(n) {
      n && P(t)
    }
  }
}

function Pu(e) {
  let t, r, n = e[1] ? "sync" : "edit_square",
    o, s, i, l, a, c, u, d, p, b = e[2] && !e[0] && Hs(e);
  return {
    c() {
      t = q("button"), r = q("span"), o = We(n), s = Z(), i = q("span"), i.textContent = "New Conversation", c = Z(), b && b.c(), u = se(), g(r, "class", "vf-new-conversation__icon material-symbols-rounded notranslate svelte-68zfs0"), g(r, "data-gp-notranslate", ""), g(r, "data-gp-notranslate-frontend", ""), g(r, "data-gp-noloc", "node"), g(r, "translate", "no"), g(i, "class", "vf-new-conversation__text svelte-68zfs0"), H(i, "vf-new-conversation__text--hidden", e[0]), g(t, "class", "vf-new-conversation svelte-68zfs0"), g(t, "title", l = e[0] ? e[4] || "New Conversation" : e[4]), g(t, "aria-label", "Start new conversation"), g(t, "aria-disabled", e[3]), t.disabled = e[3], g(t, "tabindex", a = e[3] ? -1 : 0), H(t, "vf-new-conversation--collapsed", e[0]), H(t, "vf-new-conversation--disabled", e[3])
    },
    m(m, f) {
      N(m, t, f), F(t, r), F(r, o), F(t, s), F(t, i), N(m, c, f), b && b.m(m, f), N(m, u, f), d || (p = [Je(t, "click", e[5]), Je(t, "keydown", e[6])], d = !0)
    },
    p(m, [f]) {
      f & 2 && n !== (n = m[1] ? "sync" : "edit_square") && at(o, n), f & 1 && H(i, "vf-new-conversation__text--hidden", m[0]), f & 17 && l !== (l = m[0] ? m[4] || "New Conversation" : m[4]) && g(t, "title", l), f & 8 && g(t, "aria-disabled", m[3]), f & 8 && (t.disabled = m[3]), f & 8 && a !== (a = m[3] ? -1 : 0) && g(t, "tabindex", a), f & 1 && H(t, "vf-new-conversation--collapsed", m[0]), f & 8 && H(t, "vf-new-conversation--disabled", m[3]), m[2] && !m[0] ? b ? b.p(m, f) : (b = Hs(m), b.c(), b.m(u.parentNode, u)) : b && (b.d(1), b = null)
    },
    i: _,
    o: _,
    d(m) {
      m && (P(t), P(c), P(u)), b && b.d(m), d = !1, De(p)
    }
  }
}

function Nu(e, t, r) {
  let n, o, s, i;
  U(e, zt, p => r(7, s = p)), U(e, Qo, p => r(8, i = p));
  let {
    isCollapsed: l = !1
  } = t, a = !1, c = "";
  const u = async () => {
    var p;
    if (!n) {
      r(2, c = ""), r(1, a = !0);
      try {
        (p = window == null ? void 0 : window.rep) != null && p.resetConversation ? (await window.rep.resetConversation()).success || (r(2, c = "Failed to start new conversation. Please try again."), setTimeout(() => {
          r(2, c = "")
        }, 5e3)) : r(2, c = "Reset function not available. Please refresh the page.")
      } catch (b) {
        console.error("Failed to start new conversation:", b), r(2, c = "Failed to start new conversation. Please try again."), setTimeout(() => {
          r(2, c = "")
        }, 5e3)
      } finally {
        r(1, a = !1)
      }
    }
  }, d = p => {
    n || (p.key === "Enter" || p.key === " ") && (p.preventDefault(), u())
  };
  return e.$$set = p => {
    "isCollapsed" in p && r(0, l = p.isCollapsed)
  }, e.$$.update = () => {
    e.$$.dirty & 386 && r(3, n = s.isHuman || i || a), e.$$.dirty & 130 && r(4, o = s.isHuman ? "Unavailable while connected to a human agent" : a ? "Resetting conversation..." : "")
  }, [l, a, c, n, o, u, d, s, i]
}
class Ru extends Se {
  constructor(t) {
    super(), Oe(this, t, Nu, Pu, ye, {
      isCollapsed: 0
    })
  }
}
const Lu = () => {
    const {
      subscribe: e,
      set: t,
      update: r
    } = K({
      conversations: [],
      isLoading: !1,
      error: null,
      hasMore: !1,
      offset: 0,
      isVisible: !0
    });
    return {
      subscribe: e,
      setConversations: (n, o) => {
        r(s => ({
          ...s,
          conversations: n,
          hasMore: o,
          isLoading: !1
        }))
      },
      appendConversations: (n, o) => {
        r(s => ({
          ...s,
          conversations: [...s.conversations, ...n],
          hasMore: o,
          isLoading: !1,
          offset: s.offset + n.length
        }))
      },
      addConversationToFront: n => {
        r(o => ({
          ...o,
          conversations: [n, ...o.conversations]
        }))
      },
      moveToFront: n => {
        r(o => {
          const s = o.conversations.findIndex(a => a.sid === n);
          if (s <= 0) return o;
          const i = o.conversations[s],
            l = [...o.conversations.slice(0, s), ...o.conversations.slice(s + 1)];
          return {
            ...o,
            conversations: [i, ...l]
          }
        })
      },
      setLoading: n => {
        r(o => ({
          ...o,
          isLoading: n
        }))
      },
      setError: n => {
        r(o => ({
          ...o,
          error: n,
          isLoading: !1
        }))
      },
      hideHistory: () => {
        r(n => ({
          ...n,
          isVisible: !1
        }))
      },
      reset: () => {
        t({
          conversations: [],
          isLoading: !1,
          error: null,
          hasMore: !1,
          offset: 0,
          isVisible: !0
        })
      }
    }
  },
  pt = Lu(),
  Mu = K({}),
  Fr = K(null);

function Uu(e) {
  let t, r = e[0].preview.charAt(0).toUpperCase() + "",
    n;
  return {
    c() {
      t = q("span"), n = We(r), g(t, "class", "vf-conversation__initial svelte-zq17ml")
    },
    m(o, s) {
      N(o, t, s), F(t, n)
    },
    p(o, s) {
      s & 1 && r !== (r = o[0].preview.charAt(0).toUpperCase() + "") && at(n, r)
    },
    d(o) {
      o && P(t)
    }
  }
}

function Hu(e) {
  let t, r, n;
  return {
    c() {
      t = q("div"), r = q("span"), n = We(e[3]), g(r, "class", "vf-conversation__preview svelte-zq17ml"), g(t, "class", "vf-conversation__content svelte-zq17ml")
    },
    m(o, s) {
      N(o, t, s), F(t, r), F(r, n)
    },
    p(o, s) {
      s & 8 && at(n, o[3])
    },
    d(o) {
      o && P(t)
    }
  }
}

function Fu(e) {
  let t, r, n, o, s;

  function i(c, u) {
    return c[1] ? Uu : Hu
  }
  let l = i(e),
    a = l(e);
  return {
    c() {
      t = q("button"), a.c(), g(t, "class", "vf-conversation svelte-zq17ml"), g(t, "title", r = e[1] ? e[3] : void 0), g(t, "aria-label", n = e[2] ? `${e[3]} (viewing)` : e[3]), g(t, "tabindex", "0"), H(t, "vf-conversation--collapsed", e[1]), H(t, "vf-conversation--active", e[2])
    },
    m(c, u) {
      N(c, t, u), a.m(t, null), o || (s = [Je(t, "click", e[5]), Je(t, "keydown", e[4])], o = !0)
    },
    p(c, [u]) {
      l === (l = i(c)) && a ? a.p(c, u) : (a.d(1), a = l(c), a && (a.c(), a.m(t, null))), u & 10 && r !== (r = c[1] ? c[3] : void 0) && g(t, "title", r), u & 12 && n !== (n = c[2] ? `${c[3]} (viewing)` : c[3]) && g(t, "aria-label", n), u & 2 && H(t, "vf-conversation--collapsed", c[1]), u & 4 && H(t, "vf-conversation--active", c[2])
    },
    i: _,
    o: _,
    d(c) {
      c && P(t), a.d(), o = !1, De(s)
    }
  }
}

function Du(e, t, r) {
  let n, {
      conversation: o
    } = t,
    {
      isCollapsed: s = !1
    } = t,
    {
      isActive: i = !1
    } = t;
  const l = u => u.replace(/<[^>]*>/g, ""),
    a = u => {
      var d;
      (u.key === "Enter" || u.key === " ") && (u.preventDefault(), (d = u.currentTarget) == null || d.dispatchEvent(new MouseEvent("click", {
        bubbles: !0
      })))
    };

  function c(u) {
    pc.call(this, e, u)
  }
  return e.$$set = u => {
    "conversation" in u && r(0, o = u.conversation), "isCollapsed" in u && r(1, s = u.isCollapsed), "isActive" in u && r(2, i = u.isActive)
  }, e.$$.update = () => {
    e.$$.dirty & 1 && r(3, n = l(o.preview ?? ""))
  }, [o, s, i, n, a, c]
}
class Bu extends Se {
  constructor(t) {
    super(), Oe(this, t, Du, Fu, ye, {
      conversation: 0,
      isCollapsed: 1,
      isActive: 2
    })
  }
}
const $r = "vf_history_auth",
  zu = () => {
    const {
      subscribe: e,
      set: t,
      update: r
    } = K({
      historyToken: null,
      tokenExpiresAt: null
    });
    return {
      subscribe: e,
      setToken: n => {
        if (Me()) return;
        const o = {
          historyToken: n,
          tokenExpiresAt: Date.now() + 30 * 24 * 60 * 60 * 1e3
        };
        t(o), L.setItem($r, JSON.stringify(o))
      },
      clear: () => {
        t({
          historyToken: null,
          tokenExpiresAt: null
        }), L.removeItem($r)
      },
      init: () => {
        const n = L.getItem($r);
        if (n) try {
          const o = JSON.parse(n);
          t(o)
        } catch {}
      }
    }
  },
  mn = zu(),
  Ju = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  eo = "vf_device_key",
  cn = {
    getDeviceKey() {
      if (Me()) return null;
      const t = L.getItem(eo);
      if (t) return t;
      const r = sn();
      return L.setItem(eo, r), r
    },
    setDeviceKey(e) {
      Me() || L.setItem(eo, e)
    }
  },
  qu = Object.freeze(Object.defineProperty({
    __proto__: null,
    deviceKeyManager: cn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Fs = {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };
class an {
  static async fetchRecentConversations(t, r = 0, n = 10) {
    const o = Ne(mn),
      s = cn.getDeviceKey();
    if (!o.historyToken || !s) return {
      needsTokenRefresh: !0
    };
    const i = Ne(be),
      l = (i == null ? void 0 : i.sUrl) || "",
      a = (i == null ? void 0 : i.sid) || "",
      c = `${l}/web/conversations/recent?pk=${t}&offset=${r}&limit=${n}${a?`&currentSid=${a}`:""}`;
    try {
      const u = await lt(c, {
        ...Fs,
        headers: {
          ...Fs.headers,
          Authorization: `Bearer ${o.historyToken}`,
          "X-Device-Key": s
        }
      });
      if (u.status === 401) return {
        needsTokenRefresh: !0
      };
      if (u.status === 403) return pt.hideHistory(), mt.clear(), null;
      if (!u.ok) throw new Error(`HTTP ${u.status}`);
      const d = await u.json();
      if (d != null && d.result && Array.isArray(d.result)) {
        const p = d.result.map(f => ({
            sid: f.sessionId,
            timestamp: f.startTime ? new Date(f.startTime).toISOString() : new Date().toISOString(),
            preview: f.title || f.snippet || "No preview available",
            current: f.current ?? !1
          })),
          b = p.find(f => f.current),
          m = Ne(Le);
        return Fr.set(b != null && b.sid && (m == null ? void 0 : m.length) > 0 ? b.sid : null), p.sort((f, k) => f.current && !k.current ? -1 : !f.current && k.current ? 1 : 0), {
          conversations: p,
          hasMore: d.hasNext ?? !1,
          offset: d.offset ?? r
        }
      }
      return d
    } catch (u) {
      if (ct(u)) return null;
      throw u
    }
  }
  static async fetchWithTokenRefresh(t, r = 0, n = 10) {
    let o = await this.fetchRecentConversations(t, r, n);
    if (o != null && o.needsTokenRefresh) {
      if (this.isRefreshingTokens) return console.warn("[HistoryService] Token refresh already in progress, aborting"), null;
      this.isRefreshingTokens = !0;
      try {
        if (await this.refreshTokens(t), o = await this.fetchRecentConversations(t, r, n), o != null && o.needsTokenRefresh) return pt.hideHistory(), mt.clear(), null
      } finally {
        this.isRefreshingTokens = !1
      }
    }
    return o
  }
  static async refreshTokens(t) {
    const {
      getLoad: r
    } = await de(async () => {
      const {
        getLoad: s
      } = await Promise.resolve().then(() => Xc);
      return {
        getLoad: s
      }
    }, void 0), n = cn.getDeviceKey(), o = await r({
      partnerKey: t,
      deviceKey: n
    });
    o != null && o.ht && mn.setToken(o.ht), o != null && o.dk && cn.setDeviceKey(o.dk)
  }
}
tt(an, "isRefreshingTokens", !1);
const Ku = Object.freeze(Object.defineProperty({
    __proto__: null,
    HistoryService: an
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Ds = {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  },
  Vu = (e, t) => {
    var u;
    const r = e.side === "LEFT",
      n = r ? "user" : "platform",
      o = r ? "text" : "BOT",
      s = e.message.split("<br/>").map(d => d.trim()).filter(d => d.length > 0).reverse();
    let i;
    r ? i = s : i = s.map(d => ({
      mc: null,
      mt: o,
      pp: e.logoUrl,
      sn: e.title,
      t: d,
      time: e.time
    }));
    const l = !r && (!!e.nlu || e.title === "AI" || !!e.genAIProactiveApproach),
      a = e.time ? e.time + t : Date.now() + t;
    return {
      type: o,
      responseType: n,
      generatedByAi: l,
      responseBasedOn: ((u = e.responseBasedOn) == null ? void 0 : u.length) > 0 ? e.responseBasedOn : null,
      isBot: !r,
      body: i,
      animate: !1,
      showRate: !1,
      id: a,
      name: r ? void 0 : e.title,
      pills: null,
      slider: null
    }
  };
class Co {
  static transformTranscriptResponse(t) {
    var a;
    if (!((a = t == null ? void 0 : t.chat) != null && a.messages) || !Array.isArray(t.chat.messages)) return [];
    let n = t.chat.messages.filter(c => c.message !== "(Customer clicked on chat icon)").reverse();
    const o = [];
    let s = 0;
    for (; s < n.length;) {
      const c = n[s];
      if (c.side === "LEFT") {
        const u = [c];
        let d = s + 1;
        for (; d < n.length && n[d].side === "LEFT";) u.push(n[d]), d++;
        if (u.length > 1) {
          const p = {
            ...c,
            message: u.map(b => b.message).join("<br/>")
          };
          o.push(p)
        } else o.push(c);
        s = d
      } else {
        if (c.responseType === "SUPPORT_AGENT_HANDOFF") {
          o.push(c), s++;
          continue
        }
        const u = c.messageId,
          d = [c];
        let p = s + 1;
        for (; p < n.length && n[p].side === "RIGHT" && n[p].messageId === u && u !== null;) d.push(n[p]), p++;
        if (d.length > 1) {
          const b = {
            ...c,
            message: d.reverse().map(m => m.message).join("<br/>"),
            chips: d[d.length - 1].chips || c.chips,
            catalogs: d.reduce((m, f) => f.catalogs && f.catalogs.length > 0 ? [...m, ...f.catalogs] : m, []),
            responseBasedOn: d.reduce((m, f) => f.responseBasedOn && f.responseBasedOn.length > 0 ? [...m, ...f.responseBasedOn] : m, [])
          };
          o.push(b)
        } else o.push(c);
        s = p
      }
    }
    const i = o,
      l = i.flatMap((c, u) => {
        if (c.responseType !== "SUPPORT_AGENT_HANDOFF") {
          const f = Vu(c, u);
          if (c.side === "RIGHT") {
            const k = i[u + 1],
              C = i[u + 2];
            if (!!k && (k.responseType === "SUPPORT_AGENT_HANDOFF" || k.side === "LEFT" && !!C && C.responseType === "SUPPORT_AGENT_HANDOFF")) {
              const w = {
                type: "devider",
                responseType: "devider",
                body: [{
                  t: c.message,
                  pp: null,
                  mt: "BOT",
                  mc: null,
                  sn: null,
                  gba: !1,
                  type: "BOT",
                  time: c.time
                }],
                animate: !1,
                showRate: !1,
                id: `${c.time}inner`,
                name: "",
                pills: null,
                slider: null
              };
              return [f, w]
            }
          }
          return [f]
        }
        const d = c.message || "";
        if (/<\s*p[\s>]/i.test(d)) return [{
          type: "HUMAN",
          responseType: "platform",
          generatedByAi: !1,
          responseBasedOn: null,
          body: [{
            t: d,
            pp: null,
            mt: "HUMAN",
            mc: null,
            sn: "a human agent",
            gba: !1,
            type: "HUMAN",
            time: c.time
          }],
          animate: !1,
          showRate: !1,
          delays: [{
            delay: 0,
            timeout: 0,
            typingDelay: 0
          }],
          id: `${c.time}HUMAN${u}`,
          timeToReset: 1e3,
          requestMetadata: null,
          isBot: !0,
          pills: null,
          slider: null
        }];
        const b = {
            type: "devider",
            responseType: "devider",
            body: [{
              t: d || "I'm connecting you with a support agent.",
              pp: null,
              mt: "BOT",
              mc: null,
              sn: null,
              gba: !1,
              type: "BOT",
              time: c.time
            }],
            animate: !1,
            showRate: !1,
            delays: {
              delay: 0,
              timeout: 0,
              typingDelay: 0
            },
            id: `${c.time}devider1`,
            name: "a human agent",
            generatedByAi: !1,
            responseBasedOn: null,
            isBot: !0,
            pills: null,
            slider: null
          },
          m = {
            type: "BOT",
            responseType: "platform",
            generatedByAi: !1,
            responseBasedOn: null,
            body: [{
              t: d || "I'm connecting you with a support agent.",
              pp: null,
              mt: "BOT",
              mc: null,
              sn: null,
              gba: !1,
              type: "BOT",
              time: c.time
            }],
            animate: !1,
            showRate: !1,
            id: `${c.time}BOT${u}`,
            requestMetadata: null,
            isBot: !0,
            pills: null,
            slider: null
          };
        return [b, m]
      });
    if (l.length > 0) {
      const c = l[0],
        u = i[0];
      c.responseType !== "user" && u.chips && Array.isArray(u.chips) && u.chips.length > 0 && (c.pills = u.chips)
    }
    return l
  }
  static async fetchTranscriptInternal(t, r) {
    var l;
    const n = Ne(mn),
      o = cn.getDeviceKey();
    if (!n.historyToken || !o) return {
      needsTokenRefresh: !0
    };
    const i = `${((l=Ne(be))==null?void 0:l.sUrl)||""}/web/conversations/${r}?pk=${t}`;
    try {
      const a = await lt(i, {
        ...Ds,
        headers: {
          ...Ds.headers,
          Authorization: `Bearer ${n.historyToken}`,
          "X-Device-Key": o
        }
      });
      return a.status === 401 ? {
        needsTokenRefresh: !0
      } : a.status === 403 ? (pt.hideHistory(), mt.clear(), null) : a.status === 404 ? {
        error: "not_found"
      } : a.ok ? {
        data: await a.json()
      } : {
        error: "fetch_failed"
      }
    } catch (a) {
      return ct(a) || console.error("Failed to fetch transcript:", a), null
    }
  }
  static async fetchTranscript(t, r) {
    let n = await this.fetchTranscriptInternal(t, r);
    if (n != null && n.needsTokenRefresh) {
      if (this.isRefreshingTokens) return console.warn("[TranscriptService] Token refresh already in progress, aborting"), null;
      this.isRefreshingTokens = !0;
      try {
        const {
          HistoryService: o
        } = await de(async () => {
          const {
            HistoryService: s
          } = await Promise.resolve().then(() => Ku);
          return {
            HistoryService: s
          }
        }, void 0);
        if (await o.refreshTokens(t), n = await this.fetchTranscriptInternal(t, r), n != null && n.needsTokenRefresh) return pt.hideHistory(), mt.clear(), null
      } finally {
        this.isRefreshingTokens = !1
      }
    }
    return n
  }
}
tt(Co, "isRefreshingTokens", !1);

function Bs(e, t, r) {
  const n = e.slice();
  return n[16] = t[r], n
}

function zs(e) {
  let t, r, n, o, s = [],
    i = new Map,
    l, a, c, u, d = Mt(e[3]);
  const p = m => m[16].sid;
  for (let m = 0; m < d.length; m += 1) {
    let f = Bs(e, d, m),
      k = p(f);
    i.set(k, s[m] = Js(k, f))
  }
  let b = e[2] && qs();
  return {
    c() {
      t = q("div"), r = q("span"), r.textContent = "Recent Conversations", n = Z(), o = q("div");
      for (let m = 0; m < s.length; m += 1) s[m].c();
      l = Z(), b && b.c(), g(r, "class", "vf-conversations-list__label svelte-1o5og8k"), g(o, "class", "vf-conversations-list__items svelte-1o5og8k"), g(t, "class", "vf-conversations-list svelte-1o5og8k"), H(t, "vf-conversations-list--hidden", e[0])
    },
    m(m, f) {
      N(m, t, f), F(t, r), F(t, n), F(t, o);
      for (let k = 0; k < s.length; k += 1) s[k] && s[k].m(o, null);
      e[10](o), F(t, l), b && b.m(t, null), a = !0, c || (u = Je(o, "scroll", e[6]), c = !0)
    },
    p(m, f) {
      f & 169 && (d = Mt(m[3]), X(), s = qo(s, f, p, 1, m, d, i, o, Jo, Js, null, Bs), x()), m[2] ? b || (b = qs(), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!a || f & 1) && H(t, "vf-conversations-list--hidden", m[0])
    },
    i(m) {
      if (!a) {
        for (let f = 0; f < d.length; f += 1) E(s[f]);
        a = !0
      }
    },
    o(m) {
      for (let f = 0; f < s.length; f += 1) T(s[f]);
      a = !1
    },
    d(m) {
      m && P(t);
      for (let f = 0; f < s.length; f += 1) s[f].d();
      e[10](null), b && b.d(), c = !1, u()
    }
  }
}

function Js(e, t) {
  let r, n, o;

  function s() {
    return t[9](t[16])
  }
  return n = new Bu({
    props: {
      conversation: t[16],
      isCollapsed: t[0],
      isActive: t[5] === t[16].sid
    }
  }), n.$on("click", s), {
    key: e,
    first: null,
    c() {
      r = se(), Q(n.$$.fragment), this.first = r
    },
    m(i, l) {
      N(i, r, l), W(n, i, l), o = !0
    },
    p(i, l) {
      t = i;
      const a = {};
      l & 8 && (a.conversation = t[16]), l & 1 && (a.isCollapsed = t[0]), l & 40 && (a.isActive = t[5] === t[16].sid), n.$set(a)
    },
    i(i) {
      o || (E(n.$$.fragment, i), o = !0)
    },
    o(i) {
      T(n.$$.fragment, i), o = !1
    },
    d(i) {
      i && P(r), Y(n, i)
    }
  }
}

function qs(e) {
  let t;
  return {
    c() {
      t = q("div"), t.innerHTML = '<span class="vf-conversations-list__spinner svelte-1o5og8k"></span>', g(t, "class", "vf-conversations-list__loading svelte-1o5og8k")
    },
    m(r, n) {
      N(r, t, n)
    },
    d(r) {
      r && P(t)
    }
  }
}

function Gu(e) {
  let t, r, n = e[4] && e[3].length > 0 && zs(e);
  return {
    c() {
      n && n.c(), t = se()
    },
    m(o, s) {
      n && n.m(o, s), N(o, t, s), r = !0
    },
    p(o, [s]) {
      o[4] && o[3].length > 0 ? n ? (n.p(o, s), s & 24 && E(n, 1)) : (n = zs(o), n.c(), E(n, 1), n.m(t.parentNode, t)) : n && (X(), T(n, 1, 1, () => {
        n = null
      }), x())
    },
    i(o) {
      r || (E(n), r = !0)
    },
    o(o) {
      T(n), r = !1
    },
    d(o) {
      o && P(t), n && n.d(o)
    }
  }
}
const ju = 50;

function Wu(e, t, r) {
  let n, o, s, i, l, a, c, u;
  U(e, be, w => r(13, l = w)), U(e, Mu, w => r(14, a = w)), U(e, pt, w => r(8, c = w)), U(e, Fr, w => r(5, u = w));
  let {
    isCollapsed: d = !1
  } = t, p, b = !1;
  const m = async () => {
    if (!(!(l != null && l.pk) || b || !s || o) && !(n.length >= ju)) {
      b = !0, pt.setLoading(!0);
      try {
        const w = await an.fetchWithTokenRefresh(l.pk, c.offset, 10);
        w != null && w.conversations && pt.appendConversations(w.conversations, w.hasMore ?? !1)
      } catch (w) {
        console.error("Failed to load more conversations:", w)
      } finally {
        b = !1
      }
    }
  }, f = w => {
    if (!p || d) return;
    const h = w.target,
      v = h.scrollTop,
      y = h.scrollHeight,
      O = h.clientHeight;
    v / (y - O) * 100 >= 70 && s && !o && !b && m()
  };
  hn(() => {
    p && p.removeEventListener("scroll", f)
  });
  const k = async w => {
    if (l != null && l.pk) {
      if (Fr.set(w), a[w]) {
        Le.set(a[w]);
        return
      }
      Eo.set(!0);
      try {
        const h = await Co.fetchTranscript(l.pk, w);
        if (!h) return;
        if (h.error) {
          h.error === "not_found" ? (console.warn("[Transcript] Conversation not found or no access:", w), Le.update(gr("This conversation is no longer available or you don't have access to it."))) : (console.error("[Transcript] Failed to load conversation:", h.error), Le.update(gr("Failed to load conversation. Please try again.")));
          return
        }
        if (h.data) {
          const v = Co.transformTranscriptResponse(h.data),
            y = h.data.sessionId || h.data.sid || w;
          mt.setTranscript(v, y), Vo(y, v)
        }
      } catch (h) {
        console.error("[Transcript] Unexpected error fetching transcript:", h), Le.update(gr("An unexpected error occurred while loading the conversation. Please try again."))
      } finally {
        Eo.set(!1)
      }
    }
  }, C = w => k(w.sid);

  function I(w) {
    vt[w ? "unshift" : "push"](() => {
      p = w, r(1, p)
    })
  }
  return e.$$set = w => {
    "isCollapsed" in w && r(0, d = w.isCollapsed)
  }, e.$$.update = () => {
    e.$$.dirty & 256 && r(3, n = c.conversations), e.$$.dirty & 256 && r(2, o = c.isLoading), e.$$.dirty & 256 && (s = c.hasMore), e.$$.dirty & 256 && r(4, i = c.isVisible)
  }, [d, p, o, n, i, u, f, k, c, C, I]
}
class Yu extends Se {
  constructor(t) {
    super(), Oe(this, t, Wu, Gu, ye, {
      isCollapsed: 0
    })
  }
}

function Ks(e, t, r) {
  const n = e.slice();
  return n[14] = t[r], n[16] = r, n
}

function Vs(e, t, r) {
  const n = e.slice();
  return n[14] = t[r], n[16] = r, n
}

function Gs(e) {
  let t, r = [],
    n = new Map,
    o, s = Mt(e[2].t);
  const i = l => `top-${l[14].l}-${l[14].ui}-${l[16]}`;
  for (let l = 0; l < s.length; l += 1) {
    let a = Vs(e, s, l),
      c = i(a);
    n.set(c, r[l] = js(c, a))
  }
  return {
    c() {
      t = q("nav");
      for (let l = 0; l < r.length; l += 1) r[l].c();
      g(t, "class", "vf-sidebar__shortcuts svelte-1bjs3dz")
    },
    m(l, a) {
      N(l, t, a);
      for (let c = 0; c < r.length; c += 1) r[c] && r[c].m(t, null);
      o = !0
    },
    p(l, a) {
      a & 140 && (s = Mt(l[2].t), X(), r = qo(r, a, i, 1, l, s, n, t, Jo, js, null, Vs), x())
    },
    i(l) {
      if (!o) {
        for (let a = 0; a < s.length; a += 1) E(r[a]);
        o = !0
      }
    },
    o(l) {
      for (let a = 0; a < r.length; a += 1) T(r[a]);
      o = !1
    },
    d(l) {
      l && P(t);
      for (let a = 0; a < r.length; a += 1) r[a].d()
    }
  }
}

function js(e, t) {
  let r, n, o;
  return n = new Ul({
    props: {
      label: t[14].l,
      userInput: t[14].ui,
      icon: t[14].i ?? "",
      category: "TOP",
      isCollapsed: t[3]
    }
  }), n.$on("select", t[7]), {
    key: e,
    first: null,
    c() {
      r = se(), Q(n.$$.fragment), this.first = r
    },
    m(s, i) {
      N(s, r, i), W(n, s, i), o = !0
    },
    p(s, i) {
      t = s;
      const l = {};
      i & 4 && (l.label = t[14].l), i & 4 && (l.userInput = t[14].ui), i & 4 && (l.icon = t[14].i ?? ""), i & 8 && (l.isCollapsed = t[3]), n.$set(l)
    },
    i(s) {
      o || (E(n.$$.fragment, s), o = !0)
    },
    o(s) {
      T(n.$$.fragment, s), o = !1
    },
    d(s) {
      s && P(r), Y(n, s)
    }
  }
}

function Ws(e) {
  let t = [],
    r = new Map,
    n, o, s = Mt(e[2].b);
  const i = l => `bottom-${l[14].l}-${l[14].ui}-${l[16]}`;
  for (let l = 0; l < s.length; l += 1) {
    let a = Ks(e, s, l),
      c = i(a);
    r.set(c, t[l] = Ys(c, a))
  }
  return {
    c() {
      for (let l = 0; l < t.length; l += 1) t[l].c();
      n = se()
    },
    m(l, a) {
      for (let c = 0; c < t.length; c += 1) t[c] && t[c].m(l, a);
      N(l, n, a), o = !0
    },
    p(l, a) {
      a & 140 && (s = Mt(l[2].b), X(), t = qo(t, a, i, 1, l, s, r, n.parentNode, Jo, Ys, n, Ks), x())
    },
    i(l) {
      if (!o) {
        for (let a = 0; a < s.length; a += 1) E(t[a]);
        o = !0
      }
    },
    o(l) {
      for (let a = 0; a < t.length; a += 1) T(t[a]);
      o = !1
    },
    d(l) {
      l && P(n);
      for (let a = 0; a < t.length; a += 1) t[a].d(l)
    }
  }
}

function Ys(e, t) {
  let r, n, o;
  return n = new Ul({
    props: {
      label: t[14].l,
      userInput: t[14].ui,
      icon: t[14].i ?? "",
      category: "BOTTOM",
      isCollapsed: t[3]
    }
  }), n.$on("select", t[7]), {
    key: e,
    first: null,
    c() {
      r = se(), Q(n.$$.fragment), this.first = r
    },
    m(s, i) {
      N(s, r, i), W(n, s, i), o = !0
    },
    p(s, i) {
      t = s;
      const l = {};
      i & 4 && (l.label = t[14].l), i & 4 && (l.userInput = t[14].ui), i & 4 && (l.icon = t[14].i ?? ""), i & 8 && (l.isCollapsed = t[3]), n.$set(l)
    },
    i(s) {
      o || (E(n.$$.fragment, s), o = !0)
    },
    o(s) {
      T(n.$$.fragment, s), o = !1
    },
    d(s) {
      s && P(r), Y(n, s)
    }
  }
}

function Qs(e) {
  let t, r, n, o, s, i;
  return {
    c() {
      t = q("button"), r = q("span"), g(r, "class", "vf-sidebar__toggle-indicator svelte-1bjs3dz"), g(t, "class", "vf-sidebar__toggle svelte-1bjs3dz"), g(t, "aria-label", n = e[3] ? "Expand menu" : "Collapse menu"), g(t, "tabindex", o = e[1] ? -1 : 0), t.disabled = e[1]
    },
    m(l, a) {
      N(l, t, a), F(t, r), s || (i = [Je(t, "click", e[11]), Je(t, "keydown", e[5])], s = !0)
    },
    p(l, a) {
      a & 8 && n !== (n = l[3] ? "Expand menu" : "Collapse menu") && g(t, "aria-label", n), a & 2 && o !== (o = l[1] ? -1 : 0) && g(t, "tabindex", o), a & 2 && (t.disabled = l[1])
    },
    d(l) {
      l && P(t), s = !1, De(i)
    }
  }
}

function Qu(e) {
  let t, r, n, o, s, i, l, a, c, u, d, p, b, m, f, k, C, I;
  n = new Ru({
    props: {
      isCollapsed: e[3]
    }
  });
  let w = e[2].t.length > 0 && Gs(e);
  i = new Yu({
    props: {
      isCollapsed: e[3]
    }
  });
  let h = e[2].b.length > 0 && Ws(e),
    v = !e[0] && Qs(e);
  return {
    c() {
      t = q("aside"), r = q("div"), Q(n.$$.fragment), o = Z(), w && w.c(), s = Z(), Q(i.$$.fragment), l = Z(), a = q("div"), h && h.c(), c = Z(), v && v.c(), g(r, "class", "vf-sidebar__top svelte-1bjs3dz"), r.inert = e[1], H(r, "vf-sidebar__section--loading", e[1]), g(a, "class", "vf-sidebar__bottom svelte-1bjs3dz"), a.inert = e[1], H(a, "vf-sidebar__section--loading", e[1]), g(t, "class", "vf-sidebar notranslate svelte-1bjs3dz"), g(t, "role", u = e[0] ? "dialog" : void 0), g(t, "aria-label", d = e[0] ? "Menu" : void 0), g(t, "aria-modal", p = e[0] ? "true" : void 0), g(t, "data-gp-notranslate", ""), g(t, "data-gp-notranslate-frontend", ""), g(t, "data-gp-noloc", "subtree"), g(t, "translate", "no"), H(t, "vf-sidebar--collapsed", e[3]), H(t, "vf-sidebar--burger", e[0])
    },
    m(y, O) {
      N(y, t, O), F(t, r), W(n, r, null), F(r, o), w && w.m(r, null), F(r, s), W(i, r, null), F(t, l), F(t, a), h && h.m(a, null), F(t, c), v && v.m(t, null), k = !0, C || (I = [Je(t, "keydown", e[6]), Jn(b = Pl.call(null, t, {
        active: e[0] && e[4],
        initialFocus: "button"
      }))], C = !0)
    },
    p(y, [O]) {
      e = y;
      const A = {};
      O & 8 && (A.isCollapsed = e[3]), n.$set(A), e[2].t.length > 0 ? w ? (w.p(e, O), O & 4 && E(w, 1)) : (w = Gs(e), w.c(), E(w, 1), w.m(r, s)) : w && (X(), T(w, 1, 1, () => {
        w = null
      }), x());
      const R = {};
      O & 8 && (R.isCollapsed = e[3]), i.$set(R), (!k || O & 2) && (r.inert = e[1]), (!k || O & 2) && H(r, "vf-sidebar__section--loading", e[1]), e[2].b.length > 0 ? h ? (h.p(e, O), O & 4 && E(h, 1)) : (h = Ws(e), h.c(), E(h, 1), h.m(a, null)) : h && (X(), T(h, 1, 1, () => {
        h = null
      }), x()), (!k || O & 2) && (a.inert = e[1]), (!k || O & 2) && H(a, "vf-sidebar__section--loading", e[1]), e[0] ? v && (v.d(1), v = null) : v ? v.p(e, O) : (v = Qs(e), v.c(), v.m(t, null)), (!k || O & 1 && u !== (u = e[0] ? "dialog" : void 0)) && g(t, "role", u), (!k || O & 1 && d !== (d = e[0] ? "Menu" : void 0)) && g(t, "aria-label", d), (!k || O & 1 && p !== (p = e[0] ? "true" : void 0)) && g(t, "aria-modal", p), b && $e(b.update) && O & 17 && b.update.call(null, {
        active: e[0] && e[4],
        initialFocus: "button"
      }), (!k || O & 8) && H(t, "vf-sidebar--collapsed", e[3]), (!k || O & 1) && H(t, "vf-sidebar--burger", e[0])
    },
    i(y) {
      k || (E(n.$$.fragment, y), E(w), E(i.$$.fragment, y), E(h), y && qe(() => {
        k && (f && f.end(1), m = Gn(t, Ft, {
          duration: e[0] ? 0 : 300
        }), m.start())
      }), k = !0)
    },
    o(y) {
      T(n.$$.fragment, y), T(w), T(i.$$.fragment, y), T(h), m && m.invalidate(), y && (f = zo(t, Ft, {
        duration: 200
      })), k = !1
    },
    d(y) {
      y && P(t), Y(n), w && w.d(), Y(i), h && h.d(), v && v.d(), y && f && f.end(), C = !1, De(I)
    }
  }
}

function Zu(e, t, r) {
  let n, o, s, i, l, a, c, u, d;
  U(e, ze, C => r(12, i = C)), U(e, be, C => r(13, l = C)), U(e, kt, C => r(4, a = C)), U(e, gt, C => r(8, c = C)), U(e, yo, C => r(9, u = C)), U(e, xr, C => r(10, d = C));
  let {
    isBurgerMode: p = !1
  } = t;
  const b = C => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), xr.toggle())
    },
    m = C => {
      C.key === "Escape" && p && a && (Hr(l, i, "close_button"), kt.close())
    },
    f = () => {
      p && a && (Hr(l, i, "shortcut_click"), kt.close())
    },
    k = () => xr.toggle();
  return e.$$set = C => {
    "isBurgerMode" in C && r(0, p = C.isBurgerMode)
  }, e.$$.update = () => {
    e.$$.dirty & 1025 && r(3, n = p ? !1 : d), e.$$.dirty & 512 && r(2, o = u), e.$$.dirty & 256 && r(1, s = !c)
  }, [p, s, o, n, a, b, m, f, c, u, d, k]
}
class Hl extends Se {
  constructor(t) {
    super(), Oe(this, t, Zu, Qu, ye, {
      isBurgerMode: 0
    })
  }
}

function Zs(e) {
  let t, r, n, o, s, i, l, a, c, u;
  return i = new Hl({
    props: {
      isBurgerMode: !0
    }
  }), {
    c() {
      t = q("div"), r = q("div"), o = Z(), s = q("div"), Q(i.$$.fragment), g(r, "class", "vf-burger-backdrop svelte-104zhzi"), g(s, "class", "vf-burger-menu-wrapper svelte-104zhzi"), g(t, "class", "vf-burger-overlay notranslate svelte-104zhzi"), g(t, "data-gp-notranslate", ""), g(t, "data-gp-notranslate-frontend", ""), g(t, "data-gp-noloc", "subtree"), g(t, "translate", "no")
    },
    m(d, p) {
      N(d, t, p), F(t, r), F(t, o), F(t, s), W(i, s, null), a = !0, c || (u = Je(r, "click", e[1]), c = !0)
    },
    p: _,
    i(d) {
      a || (d && qe(() => {
        a && (n || (n = xn(r, Ft, {
          duration: 200
        }, !0)), n.run(1))
      }), E(i.$$.fragment, d), d && qe(() => {
        a && (l || (l = xn(s, bs, {
          x: -277,
          duration: 300
        }, !0)), l.run(1))
      }), a = !0)
    },
    o(d) {
      d && (n || (n = xn(r, Ft, {
        duration: 200
      }, !1)), n.run(0)), T(i.$$.fragment, d), d && (l || (l = xn(s, bs, {
        x: -277,
        duration: 300
      }, !1)), l.run(0)), a = !1
    },
    d(d) {
      d && P(t), d && n && n.end(), Y(i), d && l && l.end(), c = !1, u()
    }
  }
}

function Xu(e) {
  let t, r, n = e[0] && Zs(e);
  return {
    c() {
      n && n.c(), t = se()
    },
    m(o, s) {
      n && n.m(o, s), N(o, t, s), r = !0
    },
    p(o, [s]) {
      o[0] ? n ? (n.p(o, s), s & 1 && E(n, 1)) : (n = Zs(o), n.c(), E(n, 1), n.m(t.parentNode, t)) : n && (X(), T(n, 1, 1, () => {
        n = null
      }), x())
    },
    i(o) {
      r || (E(n), r = !0)
    },
    o(o) {
      T(n), r = !1
    },
    d(o) {
      o && P(t), n && n.d(o)
    }
  }
}

function xu(e, t, r) {
  let n, o, s;
  return U(e, ze, l => r(2, n = l)), U(e, be, l => r(3, o = l)), U(e, kt, l => r(0, s = l)), [s, () => {
    Hr(o, n, "outside_click"), kt.close()
  }]
}
class $u extends Se {
  constructor(t) {
    super(), Oe(this, t, xu, Xu, ye, {})
  }
}

function ef(e) {
  let t, r, n, o, s;
  return {
    c() {
      t = q("button"), r = q("span"), r.textContent = "menu", g(r, "class", "vf-burger-trigger__icon material-symbols-rounded svelte-7gup8x"), g(t, "class", "vf-burger-trigger notranslate svelte-7gup8x"), g(t, "aria-label", n = e[0] ? "Close menu" : "Open menu"), g(t, "aria-expanded", e[0]), g(t, "data-gp-notranslate", ""), g(t, "data-gp-notranslate-frontend", ""), g(t, "data-gp-noloc", "subtree"), g(t, "translate", "no"), H(t, "vf-burger-trigger--open", e[0])
    },
    m(i, l) {
      N(i, t, l), F(t, r), o || (s = Je(t, "click", e[1]), o = !0)
    },
    p(i, [l]) {
      l & 1 && n !== (n = i[0] ? "Close menu" : "Open menu") && g(t, "aria-label", n), l & 1 && g(t, "aria-expanded", i[0]), l & 1 && H(t, "vf-burger-trigger--open", i[0])
    },
    i: _,
    o: _,
    d(i) {
      i && P(t), o = !1, s()
    }
  }
}

function tf(e, t, r) {
  let n, o, s;
  return U(e, ze, l => r(2, n = l)), U(e, be, l => r(3, o = l)), U(e, kt, l => r(0, s = l)), [s, () => {
    if (s) {
      Hr(o, n, "close_button"), kt.close();
      return
    }
    Ou(o, n), kt.open()
  }]
}
class nf extends Se {
  constructor(t) {
    super(), Oe(this, t, tf, ef, ye, {})
  }
}

function rf(e) {
  let t, r, n;
  return {
    c() {
      t = q("div"), r = q("h2"), n = We(e[0]), g(r, "class", "vf-empty-chat-prompt__text svelte-1jhdyxi"), H(r, "vf-empty-chat-prompt__text--expanded", e[1]), g(t, "class", "vf-empty-chat-prompt notranslate svelte-1jhdyxi"), g(t, "data-gp-notranslate", ""), g(t, "data-gp-notranslate-frontend", ""), g(t, "data-gp-noloc", "subtree"), g(t, "translate", "no"), H(t, "vf-empty-chat-prompt--collapsed", !e[1])
    },
    m(o, s) {
      N(o, t, s), F(t, r), F(r, n)
    },
    p(o, [s]) {
      s & 1 && at(n, o[0]), s & 2 && H(r, "vf-empty-chat-prompt__text--expanded", o[1]), s & 2 && H(t, "vf-empty-chat-prompt--collapsed", !o[1])
    },
    i: _,
    o: _,
    d(o) {
      o && P(t)
    }
  }
}

function of(e, t, r) {
  let {
    text: n = "What can I help you with?"
  } = t, {
    isExpanded: o = !1
  } = t;
  return e.$$set = s => {
    "text" in s && r(0, n = s.text), "isExpanded" in s && r(1, o = s.isExpanded)
  }, [n, o]
}
class sf extends Se {
  constructor(t) {
    super(), Oe(this, t, of, rf, ye, {
      text: 0,
      isExpanded: 1
    })
  }
}
const lf = "vf-fte-",
  Fl = e => `${lf}${e}`,
  cf = e => {
    try {
      return L.getItem(Fl(e)) === "true"
    } catch {
      return !1
    }
  },
  af = e => {
    try {
      L.setItem(Fl(e), "true")
    } catch (t) {
      console.error("Failed to save firstTimeExpanded flag:", t)
    }
  },
  yr = {
    showExpandButton: !0,
    showMenu: !0,
    allowFullscreen: !0
  },
  Dl = {
    assouline: () => de(() => import("./assouline.js"), [])
  },
  uf = e => !!e && Object.prototype.hasOwnProperty.call(Dl, e),
  ff = async e => {
    const t = Dl[e];
    return t ? (await t()).default : {}
  }, Er = K({
    ...yr
  });
let fr = null,
  Zt = null;
const df = e => {
    const t = e ?? null;
    if (t === fr && Zt) return Zt;
    if (fr = t, !t || !uf(t)) return Er.set({
      ...yr
    }), Zt = Promise.resolve(), Zt;
    const r = t;
    return Zt = ff(t).then(n => {
      fr === r && Er.set({
        ...yr,
        ...n
      })
    }).catch(n => {
      fr === r && (console.error(`[Rep AI] Failed to load partner overrides for "${r}":`, n), Er.set({
        ...yr
      }))
    }), Zt
  },
  Kr = {
    subscribe: Er.subscribe
  },
  Bl = "fullscreen-service",
  zl = e => {
    ko.trigger(150), Lt.set(e), Ol(e ? "expanded" : "collapsed");
    const t = Ne(be),
      r = Ne(ze);
    t != null && t.pk && af(t.pk), Fe(t).then(n => {
      var o, s;
      n && r && ke.update({
        rt: "EVENT",
        et: e ? "CHAT_EXPANDED" : "CHAT_SHRUNK",
        bp: {
          ...n,
          au: !!((s = (o = window == null ? void 0 : window.meta) == null ? void 0 : o.page) != null && s.customerId)
        }
      })
    })
  },
  pf = e => typeof e != "boolean" ? (console.warn("[Rep AI] fullScreenEnabled: Invalid input. Expected boolean, received:", typeof e), !1) : (!Ne(Kr).allowFullscreen || Ne(Lt) === e || zl(e), !0),
  mf = () => {
    if (!Ne(Kr).allowFullscreen) return !0;
    const e = Ne(Lt);
    return zl(!e), !0
  },
  hf = () => ({
    fullScreenEnabled: pf,
    fullScreenToggle: mf
  }),
  Z1 = () => Ho(Bl);

function _f(e) {
  let t;
  const r = e[1].default,
    n = xl(r, e, e[0], null);
  return {
    c() {
      n && n.c()
    },
    m(o, s) {
      n && n.m(o, s), t = !0
    },
    p(o, [s]) {
      n && n.p && (!t || s & 1) && ec(n, r, o, o[0], t ? $l(r, o[0], s, null) : tc(o[0]), null)
    },
    i(o) {
      t || (E(n, o), t = !0)
    },
    o(o) {
      T(n, o), t = !1
    },
    d(o) {
      n && n.d(o)
    }
  }
}

function bf(e, t, r) {
  let {
    $$slots: n = {},
    $$scope: o
  } = t;
  const s = hf();
  return $t(Bl, s), Jr(() => {
    const i = {
      ...(window == null ? void 0 : window.rep) ?? {},
      fullScreenEnabled: s.fullScreenEnabled,
      fullScreenToggle: s.fullScreenToggle
    };
    window.rep = i
  }), e.$$set = i => {
    "$$scope" in i && r(0, o = i.$$scope)
  }, [o, n]
}
class gf extends Se {
  constructor(t) {
    super(), Oe(this, t, bf, _f, ye, {})
  }
}

function wf() {
  const e = () => {
      var A;
      const O = (A = window == null ? void 0 : window.repContainer) == null ? void 0 : A.config;
      return O || null
    },
    t = e(),
    {
      subscribe: r,
      set: n,
      update: o
    } = K(t);
  let s = null,
    i = null,
    l = JSON.stringify(e()),
    a = Date.now();
  const c = () => {
      const O = e(),
        A = JSON.stringify(O);
      A !== l && (l = A, n(O))
    },
    u = (O = 100) => {
      s || ge() && (a = Date.now(), s = setInterval(c, O), i = setTimeout(() => {
        d()
      }, 2500))
    },
    d = () => {
      s && (clearInterval(s), s = null), i && (clearTimeout(i), i = null)
    },
    p = () => {
      c()
    },
    b = (O, A) => {
      o(R => R ? {
        ...R,
        [O]: A
      } : {
        [O]: A
      })
    },
    m = O => {
      o(A => A ? {
        ...A,
        ...O
      } : O)
    },
    f = O => {
      const A = e();
      return A == null ? void 0 : A[O]
    },
    k = (O, A) => {
      const R = {};
      O && (R.width = O), A && (R.height = A), m(R)
    },
    C = O => {
      b("position", O)
    },
    I = O => {
      b("defaultOpen", O)
    },
    w = O => {
      b("isFixed", O)
    },
    h = () => {
      const O = e();
      n(O)
    },
    v = () => s !== null,
    y = () => {
      const O = Date.now() - a;
      return {
        isMonitoring: v(),
        isOnRepDomains: ge(),
        elapsedTime: O,
        remainingTime: Math.max(0, 2500 - O)
      }
    };
  return ge() && u(), {
    subscribe: r,
    set: n,
    update: o,
    updateProperty: b,
    updateProperties: m,
    getProperty: f,
    setDimensions: k,
    setPosition: C,
    toggleDefaultOpen: I,
    toggleFixed: w,
    reset: h,
    refresh: p,
    startMonitoring: u,
    stopMonitoring: d,
    isMonitoring: v,
    getStatus: y,
    destroy: d
  }
}
const It = wf();

function kf(e) {
  e[75] = e[74].default
}

function vf(e) {
  e[76] = e[74].default
}

function yf(e) {
  e[77] = e[74].default
}

function Xs(e) {
  e[78] = e[74].default
}

function xs(e) {
  e[79] = e[74].default
}

function $s(e) {
  e[80] = e[74].default
}

function ei(e) {
  e[73] = e[74].default
}

function Ef(e) {
  e[81] = e[74].default
}

function Cf(e) {
  e[82] = e[74].default
}

function Tf(e) {
  e[83] = e[74].default
}

function ti(e) {
  e[84] = e[74].default
}

function Of(e) {
  e[85] = e[74].default
}

function Sf(e) {
  e[86] = e[74].default
}

function ni(e) {
  e[87] = e[74].default
}

function If(e) {
  e[88] = e[74].default
}

function ri(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Nf,
    then: Pf,
    catch: Af,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[24], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 16777216 && r !== (r = e[24]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function Af(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function Pf(e) {
  If(e);
  let t, r;
  return t = new e[88]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function Nf(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function oi(e) {
  var I;
  let t, r, n, o, s, i, l, a, c, u = e[19] && si(e),
    d = e[20] && ii(e),
    p = e[23] && !((I = e[37]) != null && I.sdk) && li(e),
    b = e[25] && ci(e),
    m = e[26] && ai(e),
    f = e[21] && ui(e),
    k = e[22] && fi(e),
    C = !e[38] && di(e);
  return {
    c() {
      u && u.c(), t = Z(), d && d.c(), r = Z(), p && p.c(), n = Z(), b && b.c(), o = Z(), m && m.c(), s = Z(), f && f.c(), i = Z(), k && k.c(), l = Z(), C && C.c(), a = se()
    },
    m(w, h) {
      u && u.m(w, h), N(w, t, h), d && d.m(w, h), N(w, r, h), p && p.m(w, h), N(w, n, h), b && b.m(w, h), N(w, o, h), m && m.m(w, h), N(w, s, h), f && f.m(w, h), N(w, i, h), k && k.m(w, h), N(w, l, h), C && C.m(w, h), N(w, a, h), c = !0
    },
    p(w, h) {
      var v;
      w[19] ? u ? (u.p(w, h), h[0] & 524288 && E(u, 1)) : (u = si(w), u.c(), E(u, 1), u.m(t.parentNode, t)) : u && (X(), T(u, 1, 1, () => {
        u = null
      }), x()), w[20] ? d ? (d.p(w, h), h[0] & 1048576 && E(d, 1)) : (d = ii(w), d.c(), E(d, 1), d.m(r.parentNode, r)) : d && (X(), T(d, 1, 1, () => {
        d = null
      }), x()), w[23] && !((v = w[37]) != null && v.sdk) ? p ? (p.p(w, h), h[0] & 8388608 | h[1] & 64 && E(p, 1)) : (p = li(w), p.c(), E(p, 1), p.m(n.parentNode, n)) : p && (X(), T(p, 1, 1, () => {
        p = null
      }), x()), w[25] ? b ? (b.p(w, h), h[0] & 33554432 && E(b, 1)) : (b = ci(w), b.c(), E(b, 1), b.m(o.parentNode, o)) : b && (X(), T(b, 1, 1, () => {
        b = null
      }), x()), w[26] ? m ? (m.p(w, h), h[0] & 67108864 && E(m, 1)) : (m = ai(w), m.c(), E(m, 1), m.m(s.parentNode, s)) : m && (X(), T(m, 1, 1, () => {
        m = null
      }), x()), w[21] ? f ? (f.p(w, h), h[0] & 2097152 && E(f, 1)) : (f = ui(w), f.c(), E(f, 1), f.m(i.parentNode, i)) : f && (X(), T(f, 1, 1, () => {
        f = null
      }), x()), w[22] ? k ? (k.p(w, h), h[0] & 4194304 && E(k, 1)) : (k = fi(w), k.c(), E(k, 1), k.m(l.parentNode, l)) : k && (X(), T(k, 1, 1, () => {
        k = null
      }), x()), w[38] ? C && (X(), T(C, 1, 1, () => {
        C = null
      }), x()) : C ? (C.p(w, h), h[1] & 128 && E(C, 1)) : (C = di(w), C.c(), E(C, 1), C.m(a.parentNode, a))
    },
    i(w) {
      c || (E(u), E(d), E(p), E(b), E(m), E(f), E(k), E(C), c = !0)
    },
    o(w) {
      T(u), T(d), T(p), T(b), T(m), T(f), T(k), T(C), c = !1
    },
    d(w) {
      w && (P(t), P(r), P(n), P(o), P(s), P(i), P(l), P(a)), u && u.d(w), d && d.d(w), p && p.d(w), b && b.d(w), m && m.d(w), f && f.d(w), k && k.d(w), C && C.d(w)
    }
  }
}

function si(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Mf,
    then: Lf,
    catch: Rf,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[19], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 524288 && r !== (r = e[19]) && te(r, o) || Bt(o, e, i)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function Rf(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function Lf(e) {
  ni(e);
  let t, r;
  return t = new e[87]({
    props: {
      handleClose: e[14],
      handleOpen: e[12],
      fireFlow: e[17],
      setContainerInlineStyle: e[51],
      handleMounted: e[13],
      handleSettings: e[15]
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    p(n, o) {
      ni(n);
      const s = {};
      o[0] & 16384 && (s.handleClose = n[14]), o[0] & 4096 && (s.handleOpen = n[12]), o[0] & 131072 && (s.fireFlow = n[17]), o[0] & 8192 && (s.handleMounted = n[13]), o[0] & 32768 && (s.handleSettings = n[15]), t.$set(s)
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function Mf(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function ii(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Ff,
    then: Hf,
    catch: Uf,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[20], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 1048576 && r !== (r = e[20]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function Uf(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function Hf(e) {
  Sf(e);
  let t, r;
  return t = new e[86]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function Ff(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function li(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: zf,
    then: Bf,
    catch: Df,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[23], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 8388608 && r !== (r = e[23]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function Df(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function Bf(e) {
  Of(e);
  let t, r;
  return t = new e[85]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function zf(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function ci(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Kf,
    then: qf,
    catch: Jf,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[25], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 33554432 && r !== (r = e[25]) && te(r, o) || Bt(o, e, i)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function Jf(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function qf(e) {
  ti(e);
  let t, r;
  return t = new e[84]({
    props: {
      trackManualEvents: Od
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    p(n, o) {
      ti(n)
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function Kf(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function ai(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: jf,
    then: Gf,
    catch: Vf,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[26], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 67108864 && r !== (r = e[26]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function Vf(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function Gf(e) {
  Tf(e);
  let t, r;
  return t = new e[83]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function jf(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function ui(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Qf,
    then: Yf,
    catch: Wf,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[21], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 2097152 && r !== (r = e[21]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function Wf(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function Yf(e) {
  Cf(e);
  let t, r;
  return t = new e[82]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function Qf(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function fi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: xf,
    then: Xf,
    catch: Zf,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[22], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 4194304 && r !== (r = e[22]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function Zf(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function Xf(e) {
  Ef(e);
  let t, r;
  return t = new e[81]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function xf(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function di(e) {
  var u;
  let t, r, n, o, s;
  const i = [ed, $f],
    l = [];

  function a(d, p) {
    var b, m;
    return d[39] && ((b = d[37]) != null && b.d) && !d[40] ? 0 : d[40] && ((m = d[37]) != null && m.d) ? 1 : -1
  }~(t = a(e)) && (r = l[t] = i[t](e));
  let c = !e[40] && !e[39] && ((u = e[37]) == null ? void 0 : u.d) && Ei(e);
  return {
    c() {
      r && r.c(), n = Z(), c && c.c(), o = se()
    },
    m(d, p) {
      ~t && l[t].m(d, p), N(d, n, p), c && c.m(d, p), N(d, o, p), s = !0
    },
    p(d, p) {
      var m;
      let b = t;
      t = a(d), t === b ? ~t && l[t].p(d, p) : (r && (X(), T(l[b], 1, 1, () => {
        l[b] = null
      }), x()), ~t ? (r = l[t], r ? r.p(d, p) : (r = l[t] = i[t](d), r.c()), E(r, 1), r.m(n.parentNode, n)) : r = null), !d[40] && !d[39] && ((m = d[37]) != null && m.d) ? c ? (c.p(d, p), p[1] & 832 && E(c, 1)) : (c = Ei(d), c.c(), E(c, 1), c.m(o.parentNode, o)) : c && (X(), T(c, 1, 1, () => {
        c = null
      }), x())
    },
    i(d) {
      s || (E(r), E(c), s = !0)
    },
    o(d) {
      T(r), T(c), s = !1
    },
    d(d) {
      d && (P(n), P(o)), ~t && l[t].d(d), c && c.d(d)
    }
  }
}

function $f(e) {
  let t, r, n, o, s, i, l, a, c, u, d, p, b, m, f, k, C, I, w, h, v, y, O, A = e[33] && pi(e),
    R = e[32] && mi(e),
    V = e[44] && hi(),
    ee = !e[36] && e[35] && e[34] && _i();
  const Ie = [cd, ld],
    Ae = [];

  function Pe(D, B) {
    return D[35] && D[49] ? 0 : D[35] && D[31] ? 1 : -1
  }~(d = Pe(e)) && (p = Ae[d] = Ie[d](e));
  let ie = !e[35] && e[29] && bi(e),
    re = e[35] && gi(e);
  return {
    c() {
      var D, B, G, le, me, j;
      t = q("div"), r = q("div"), n = q("div"), A && A.c(), o = Z(), R && R.c(), s = Z(), i = q("div"), V && V.c(), l = Z(), a = q("div"), ee && ee.c(), c = Z(), u = q("div"), p && p.c(), b = Z(), ie && ie.c(), m = Z(), re && re.c(), g(u, "class", "vf-messages svelte-16o0m70"), H(u, "vf-messages--collapsed", !e[36]), H(u, "vf-messages--expanded", e[36]), H(u, "vf-messages--empty", !e[35] && e[29]), H(u, "vf-messages--height", !e[47]), H(u, "vf-messages--transitioning", e[48]), H(u, "no-margin", e[39]), g(a, "class", "main-content-inner svelte-16o0m70"), H(a, "main-content-inner--empty", !e[47]), g(i, "class", "main-content svelte-16o0m70"), H(i, "vf-main-content--expanded", e[36]), H(i, "vf-main-content--empty", !e[47]), Te(n, "display", "flex"), Te(n, "flex-direction", "column"), Te(n, "justify-content", "flex-end"), Te(n, "flex-grow", "1"), Te(n, "width", "100%"), Te(n, "height", "100%"), g(r, "class", "vf-content svelte-16o0m70"), Te(r, "display", "flex"), Te(r, "flex-direction", "row"), Te(r, "justify-content", "flex-end"), Te(r, "flex-grow", "1"), Te(r, "width", "100%"), H(r, "vf-content--expanded", e[36]), g(t, "class", f = un(`vf-container  open ${((B=(D=e[41])==null?void 0:D.crd)==null?void 0:B.p)??((le=(G=e[37])==null?void 0:G.crd)==null?void 0:le.p)??""} notranslate`) + " svelte-16o0m70"), g(t, "style", e[46]), g(t, "role", "dialog"), g(t, "aria-label", "Chat window"), g(t, "aria-modal", "true"), g(t, "aria-hidden", k = e[40] ? "false" : "true"), g(t, "data-gp-notranslate", ""), g(t, "data-gp-notranslate-frontend", ""), g(t, "data-gp-noloc", "subtree"), g(t, "translate", "no"), H(t, "vf-fixed", ((me = e[42]) == null ? void 0 : me.isFixed) ?? !e[42]), H(t, "vf-expanded", e[36]), H(t, "checkout-ext", (j = window == null ? void 0 : window.shopify) == null ? void 0 : j.extension)
    },
    m(D, B) {
      N(D, t, B), F(t, r), F(r, n), A && A.m(n, null), F(n, o), R && R.m(n, null), F(n, s), F(n, i), V && V.m(i, null), F(i, l), F(i, a), ee && ee.m(a, null), F(a, c), F(a, u), ~d && Ae[d].m(u, null), F(u, b), ie && ie.m(u, null), e[65](u), F(a, m), re && re.m(a, null), e[66](t), v = !0, y || (O = [Jn(C = Xa.call(null, t, {
        isOpen: e[40],
        onClose: e[67],
        global: !1
      })), Jn(I = Pl.call(null, t, {
        active: e[40],
        initialFocus: "textarea"
      }))], y = !0)
    },
    p(D, B) {
      var le, me, j, oe, Ce, ae;
      D[33] ? A ? (A.p(D, B), B[1] & 4 && E(A, 1)) : (A = pi(D), A.c(), E(A, 1), A.m(n, o)) : A && (X(), T(A, 1, 1, () => {
        A = null
      }), x()), D[32] ? R ? (R.p(D, B), B[1] & 2 && E(R, 1)) : (R = mi(D), R.c(), E(R, 1), R.m(n, s)) : R && (X(), T(R, 1, 1, () => {
        R = null
      }), x()), D[44] ? V ? B[1] & 8192 && E(V, 1) : (V = hi(), V.c(), E(V, 1), V.m(i, l)) : V && (X(), T(V, 1, 1, () => {
        V = null
      }), x()), !D[36] && D[35] && D[34] ? ee ? B[1] & 56 && E(ee, 1) : (ee = _i(), ee.c(), E(ee, 1), ee.m(a, c)) : ee && (X(), T(ee, 1, 1, () => {
        ee = null
      }), x());
      let G = d;
      d = Pe(D), d === G ? ~d && Ae[d].p(D, B) : (p && (X(), T(Ae[G], 1, 1, () => {
        Ae[G] = null
      }), x()), ~d ? (p = Ae[d], p ? p.p(D, B) : (p = Ae[d] = Ie[d](D), p.c()), E(p, 1), p.m(u, b)) : p = null), !D[35] && D[29] ? ie ? (ie.p(D, B), B[0] & 536870912 | B[1] & 16 && E(ie, 1)) : (ie = bi(D), ie.c(), E(ie, 1), ie.m(u, null)) : ie && (X(), T(ie, 1, 1, () => {
        ie = null
      }), x()), (!v || B[1] & 32) && H(u, "vf-messages--collapsed", !D[36]), (!v || B[1] & 32) && H(u, "vf-messages--expanded", D[36]), (!v || B[0] & 536870912 | B[1] & 16) && H(u, "vf-messages--empty", !D[35] && D[29]), (!v || B[1] & 65536) && H(u, "vf-messages--height", !D[47]), (!v || B[1] & 131072) && H(u, "vf-messages--transitioning", D[48]), (!v || B[1] & 256) && H(u, "no-margin", D[39]), D[35] ? re ? (re.p(D, B), B[1] & 16 && E(re, 1)) : (re = gi(D), re.c(), E(re, 1), re.m(a, null)) : re && (X(), T(re, 1, 1, () => {
        re = null
      }), x()), (!v || B[1] & 65536) && H(a, "main-content-inner--empty", !D[47]), (!v || B[1] & 32) && H(i, "vf-main-content--expanded", D[36]), (!v || B[1] & 65536) && H(i, "vf-main-content--empty", !D[47]), (!v || B[1] & 32) && H(r, "vf-content--expanded", D[36]), (!v || B[1] & 1088 && f !== (f = un(`vf-container  open ${((me=(le=D[41])==null?void 0:le.crd)==null?void 0:me.p)??((oe=(j=D[37])==null?void 0:j.crd)==null?void 0:oe.p)??""} notranslate`) + " svelte-16o0m70")) && g(t, "class", f), (!v || B[1] & 32768) && g(t, "style", D[46]), (!v || B[1] & 512 && k !== (k = D[40] ? "false" : "true")) && g(t, "aria-hidden", k), C && $e(C.update) && B[0] & 16384 | B[1] & 512 && C.update.call(null, {
        isOpen: D[40],
        onClose: D[67],
        global: !1
      }), I && $e(I.update) && B[1] & 512 && I.update.call(null, {
        active: D[40],
        initialFocus: "textarea"
      }), (!v || B[1] & 3136) && H(t, "vf-fixed", ((Ce = D[42]) == null ? void 0 : Ce.isFixed) ?? !D[42]), (!v || B[1] & 1120) && H(t, "vf-expanded", D[36]), (!v || B[1] & 1088) && H(t, "checkout-ext", (ae = window == null ? void 0 : window.shopify) == null ? void 0 : ae.extension)
    },
    i(D) {
      v || (E(A), E(R), E(V), E(ee), E(p), E(ie), E(re), D && qe(() => {
        v && (h && h.end(1), w = Gn(t, e[52], {}), w.start())
      }), v = !0)
    },
    o(D) {
      T(A), T(R), T(V), T(ee), T(p), T(ie), T(re), w && w.invalidate(), D && (h = zo(t, Sl, {
        duration: 500,
        start: .9
      })), v = !1
    },
    d(D) {
      D && P(t), A && A.d(), R && R.d(), V && V.d(), ee && ee.d(), ~d && Ae[d].d(), ie && ie.d(), e[65](null), re && re.d(), e[66](null), D && h && h.end(), y = !1, De(O)
    }
  }
}

function ed(e) {
  let t, r, n = e[27] && yi(e);
  return {
    c() {
      n && n.c(), t = se()
    },
    m(o, s) {
      n && n.m(o, s), N(o, t, s), r = !0
    },
    p(o, s) {
      o[27] ? n ? (n.p(o, s), s[0] & 134217728 && E(n, 1)) : (n = yi(o), n.c(), E(n, 1), n.m(t.parentNode, t)) : n && (X(), T(n, 1, 1, () => {
        n = null
      }), x())
    },
    i(o) {
      r || (E(n), r = !0)
    },
    o(o) {
      T(n), r = !1
    },
    d(o) {
      o && P(t), n && n.d(o)
    }
  }
}

function pi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: rd,
    then: nd,
    catch: td,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[33], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[1] & 4 && r !== (r = e[33]) && te(r, o) || Bt(o, e, i)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function td(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function nd(e) {
  var n;
  $s(e);
  let t, r;
  return t = new e[80]({
    props: {
      background: ((n = e[41]) == null ? void 0 : n.mc) ?? e[3]
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(o, s) {
      W(t, o, s), r = !0
    },
    p(o, s) {
      var l;
      $s(o);
      const i = {};
      s[0] & 8 | s[1] & 1024 && (i.background = ((l = o[41]) == null ? void 0 : l.mc) ?? o[3]), t.$set(i)
    },
    i(o) {
      r || (E(t.$$.fragment, o), r = !0)
    },
    o(o) {
      T(t.$$.fragment, o), r = !1
    },
    d(o) {
      Y(t, o)
    }
  }
}

function rd(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function mi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: id,
    then: sd,
    catch: od,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[32], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[1] & 2 && r !== (r = e[32]) && te(r, o) || Bt(o, e, i)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function od(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function sd(e) {
  var n, o, s, i;
  xs(e);
  let t, r;
  return t = new e[79]({
    props: {
      onMinimize: e[16],
      title: ((n = e[41]) == null ? void 0 : n.wt) ?? ((o = e[37]) == null ? void 0 : o.wt) ?? "",
      subTitle: ((s = e[41]) == null ? void 0 : s.sbt) ?? ((i = e[37]) == null ? void 0 : i.sbt) ?? ""
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(l, a) {
      W(t, l, a), r = !0
    },
    p(l, a) {
      var u, d, p, b;
      xs(l);
      const c = {};
      a[0] & 65536 && (c.onMinimize = l[16]), a[1] & 1088 && (c.title = ((u = l[41]) == null ? void 0 : u.wt) ?? ((d = l[37]) == null ? void 0 : d.wt) ?? ""), a[1] & 1088 && (c.subTitle = ((p = l[41]) == null ? void 0 : p.sbt) ?? ((b = l[37]) == null ? void 0 : b.sbt) ?? ""), t.$set(c)
    },
    i(l) {
      r || (E(t.$$.fragment, l), r = !0)
    },
    o(l) {
      T(t.$$.fragment, l), r = !1
    },
    d(l) {
      Y(t, l)
    }
  }
}

function id(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function hi(e) {
  let t, r;
  return t = new Hl({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function _i(e) {
  let t, r, n, o;
  return t = new nf({}), n = new $u({}), {
    c() {
      Q(t.$$.fragment), r = Z(), Q(n.$$.fragment)
    },
    m(s, i) {
      W(t, s, i), N(s, r, i), W(n, s, i), o = !0
    },
    i(s) {
      o || (E(t.$$.fragment, s), E(n.$$.fragment, s), o = !0)
    },
    o(s) {
      T(t.$$.fragment, s), T(n.$$.fragment, s), o = !1
    },
    d(s) {
      s && P(r), Y(t, s), Y(n, s)
    }
  }
}

function ld(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: fd,
    then: ud,
    catch: ad,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[31], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[1] & 1 && r !== (r = e[31]) && te(r, o) || Bt(o, e, i)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function cd(e) {
  let t, r;
  return t = new Rl({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    p: _,
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function ad(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function ud(e) {
  Xs(e);
  let t, r;
  return t = new e[78]({
    props: {
      isMinimized: e[39],
      pillClickable: !0
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    p(n, o) {
      Xs(n);
      const s = {};
      o[1] & 256 && (s.isMinimized = n[39]), t.$set(s)
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function fd(e) {
  let t, r;
  return t = new Rl({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    p: _,
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function bi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: md,
    then: pd,
    catch: dd,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[29], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 536870912 && r !== (r = e[29]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function dd(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function pd(e) {
  yf(e);
  let t, r;
  return t = new e[77]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function md(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function gi(e) {
  let t, r, n, o, s = !e[47] && !e[49] && wi(e),
    i = e[35] && e[30] && ki(e),
    l = e[28] && vi(e);
  return {
    c() {
      s && s.c(), t = Z(), r = q("div"), i && i.c(), n = Z(), l && l.c(), g(r, "class", "vf-container__footer svelte-16o0m70")
    },
    m(a, c) {
      s && s.m(a, c), N(a, t, c), N(a, r, c), i && i.m(r, null), F(r, n), l && l.m(r, null), o = !0
    },
    p(a, c) {
      !a[47] && !a[49] ? s ? (s.p(a, c), c[1] & 327680 && E(s, 1)) : (s = wi(a), s.c(), E(s, 1), s.m(t.parentNode, t)) : s && (X(), T(s, 1, 1, () => {
        s = null
      }), x()), a[35] && a[30] ? i ? (i.p(a, c), c[0] & 1073741824 | c[1] & 16 && E(i, 1)) : (i = ki(a), i.c(), E(i, 1), i.m(r, n)) : i && (X(), T(i, 1, 1, () => {
        i = null
      }), x()), a[28] ? l ? (l.p(a, c), c[0] & 268435456 && E(l, 1)) : (l = vi(a), l.c(), E(l, 1), l.m(r, null)) : l && (X(), T(l, 1, 1, () => {
        l = null
      }), x())
    },
    i(a) {
      o || (E(s), E(i), E(l), o = !0)
    },
    o(a) {
      T(s), T(i), T(l), o = !1
    },
    d(a) {
      a && (P(t), P(r)), s && s.d(a), i && i.d(), l && l.d()
    }
  }
}

function wi(e) {
  let t, r;
  return t = new sf({
    props: {
      isExpanded: e[36]
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    p(n, o) {
      const s = {};
      o[1] & 32 && (s.isExpanded = n[36]), t.$set(s)
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function ki(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: bd,
    then: _d,
    catch: hd,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[30], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 1073741824 && r !== (r = e[30]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function hd(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function _d(e) {
  vf(e);
  let t, r;
  return t = new e[76]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function bd(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function vi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: kd,
    then: wd,
    catch: gd,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[28], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 268435456 && r !== (r = e[28]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function gd(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function wd(e) {
  kf(e);
  let t, r;
  return t = new e[75]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function kd(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function yi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Ed,
    then: yd,
    catch: vd,
    value: 74,
    blocks: [, , , ]
  };
  return te(r = e[27], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 134217728 && r !== (r = e[27]) && te(r, o) || Bt(o, e, i)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function vd(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function yd(e) {
  var n, o, s, i, l, a, c, u, d;
  ei(e);
  let t, r;
  return t = new e[73]({
    props: {
      mc: ((n = e[41]) == null ? void 0 : n.mc) ?? e[3],
      bgc: ((o = e[41]) == null ? void 0 : o.bgc) ?? e[4],
      ac: ((s = e[41]) == null ? void 0 : s.ac) ?? e[5],
      sc: ((i = e[41]) == null ? void 0 : i.sc) ?? e[6],
      pacmc: ((l = e[41]) == null ? void 0 : l.pacmc) ?? e[7],
      pacc: ((a = e[41]) == null ? void 0 : a.pacc) ?? e[8],
      paxc: ((c = e[41]) == null ? void 0 : c.paxc) ?? e[9],
      pamc: ((u = e[41]) == null ? void 0 : u.pamc) ?? e[10],
      position: ((d = e[42]) == null ? void 0 : d.position) ?? e[11],
      textDirection: e[1]
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(p, b) {
      W(t, p, b), r = !0
    },
    p(p, b) {
      var f, k, C, I, w, h, v, y, O;
      ei(p);
      const m = {};
      b[0] & 8 | b[1] & 1024 && (m.mc = ((f = p[41]) == null ? void 0 : f.mc) ?? p[3]), b[0] & 16 | b[1] & 1024 && (m.bgc = ((k = p[41]) == null ? void 0 : k.bgc) ?? p[4]), b[0] & 32 | b[1] & 1024 && (m.ac = ((C = p[41]) == null ? void 0 : C.ac) ?? p[5]), b[0] & 64 | b[1] & 1024 && (m.sc = ((I = p[41]) == null ? void 0 : I.sc) ?? p[6]), b[0] & 128 | b[1] & 1024 && (m.pacmc = ((w = p[41]) == null ? void 0 : w.pacmc) ?? p[7]), b[0] & 256 | b[1] & 1024 && (m.pacc = ((h = p[41]) == null ? void 0 : h.pacc) ?? p[8]), b[0] & 512 | b[1] & 1024 && (m.paxc = ((v = p[41]) == null ? void 0 : v.paxc) ?? p[9]), b[0] & 1024 | b[1] & 1024 && (m.pamc = ((y = p[41]) == null ? void 0 : y.pamc) ?? p[10]), b[0] & 2048 | b[1] & 2048 && (m.position = ((O = p[42]) == null ? void 0 : O.position) ?? p[11]), b[0] & 2 && (m.textDirection = p[1]), t.$set(m)
    },
    i(p) {
      r || (E(t.$$.fragment, p), r = !0)
    },
    o(p) {
      T(t.$$.fragment, p), r = !1
    },
    d(p) {
      Y(t, p)
    }
  }
}

function Ed(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function Ei(e) {
  var n, o;
  let t, r;
  return t = new fu({
    props: {
      isFixed: ((n = e[42]) == null ? void 0 : n.isFixed) ?? !e[42],
      isCounter: !0,
      style: e[45],
      color: e[50].isHuman ? e[50].mainColor === Mn.HUMAN_HANDOFF_MAIN ? Mn.HUMAN_HANDOFF_SECONDARY : e[50].mainColor ?? void 0 : ((o = e[41]) == null ? void 0 : o.mc) ?? e[3] ?? void 0
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(s, i) {
      W(t, s, i), r = !0
    },
    p(s, i) {
      var a, c;
      const l = {};
      i[1] & 2048 && (l.isFixed = ((a = s[42]) == null ? void 0 : a.isFixed) ?? !s[42]), i[1] & 16384 && (l.style = s[45]), i[0] & 8 | i[1] & 525312 && (l.color = s[50].isHuman ? s[50].mainColor === Mn.HUMAN_HANDOFF_MAIN ? Mn.HUMAN_HANDOFF_SECONDARY : s[50].mainColor ?? void 0 : ((c = s[41]) == null ? void 0 : c.mc) ?? s[3] ?? void 0), t.$set(l)
    },
    i(s) {
      r || (E(t.$$.fragment, s), r = !0)
    },
    o(s) {
      T(t.$$.fragment, s), r = !1
    },
    d(s) {
      Y(t, s)
    }
  }
}

function Cd(e) {
  let t, r, n, o = e[24] && ri(e),
    s = e[2] && e[0] && oi(e);
  return {
    c() {
      o && o.c(), t = Z(), s && s.c(), r = se()
    },
    m(i, l) {
      o && o.m(i, l), N(i, t, l), s && s.m(i, l), N(i, r, l), n = !0
    },
    p(i, l) {
      i[24] ? o ? (o.p(i, l), l[0] & 16777216 && E(o, 1)) : (o = ri(i), o.c(), E(o, 1), o.m(t.parentNode, t)) : o && (X(), T(o, 1, 1, () => {
        o = null
      }), x()), i[2] && i[0] ? s ? (s.p(i, l), l[0] & 5 && E(s, 1)) : (s = oi(i), s.c(), E(s, 1), s.m(r.parentNode, r)) : s && (X(), T(s, 1, 1, () => {
        s = null
      }), x())
    },
    i(i) {
      n || (E(o), E(s), n = !0)
    },
    o(i) {
      T(o), T(s), n = !1
    },
    d(i) {
      i && (P(t), P(r)), o && o.d(i), s && s.d(i)
    }
  }
}

function Td(e) {
  let t, r, n, o;
  return t = new Eu({}), n = new gf({
    props: {
      $$slots: {
        default: [Cd]
      },
      $$scope: {
        ctx: e
      }
    }
  }), {
    c() {
      Q(t.$$.fragment), r = Z(), Q(n.$$.fragment)
    },
    m(s, i) {
      W(t, s, i), N(s, r, i), W(n, s, i), o = !0
    },
    p(s, i) {
      const l = {};
      i[0] & 2147483647 | i[1] & 1048575 | i[2] & 134217728 && (l.$$scope = {
        dirty: i,
        ctx: s
      }), n.$set(l)
    },
    i(s) {
      o || (E(t.$$.fragment, s), E(n.$$.fragment, s), o = !0)
    },
    o(s) {
      T(t.$$.fragment, s), T(n.$$.fragment, s), o = !1
    },
    d(s) {
      s && P(r), Y(t, s), Y(n, s)
    }
  }
}
let Od = !0;

function Sd(e, t, r) {
  let n, o, s, i, l, a, c, u, d, p, b, m, f, k, C, I, w, h, v, y, O, A, R, V, ee;
  U(e, ze, M => r(35, d = M)), U(e, Lt, M => r(36, p = M)), U(e, Kr, M => r(59, b = M)), U(e, yo, M => r(60, m = M)), U(e, be, M => r(37, f = M)), U(e, du, M => r(38, k = M)), U(e, Ze, M => r(39, C = M)), U(e, He, M => r(40, I = M)), U(e, Vn, M => r(41, w = M)), U(e, It, M => r(42, h = M)), U(e, Nl, M => r(61, v = M)), U(e, Nr, M => r(62, y = M)), U(e, Le, M => r(63, O = M)), U(e, mt, M => r(64, A = M)), U(e, ko, M => r(48, R = M)), U(e, Eo, M => r(49, V = M)), U(e, zt, M => r(50, ee = M));
  let {
    isStyles: Ie
  } = t, {
    textDirection: Ae
  } = t, {
    mounted: Pe
  } = t, {
    mc: ie = ""
  } = t, {
    bgc: re = ""
  } = t, {
    ac: D = ""
  } = t, {
    sc: B = ""
  } = t, {
    pacmc: G = null
  } = t, {
    pacc: le = null
  } = t, {
    paxc: me = null
  } = t, {
    pamc: j = null
  } = t, {
    cmc: oe = null
  } = t, {
    position: Ce = null
  } = t, {
    handleOpen: ae
  } = t, {
    handleMounted: we
  } = t, {
    handleClose: ve
  } = t, {
    handleSettings: Ke
  } = t, {
    onMinimize: Jt
  } = t, {
    fireFlow: qt
  } = t, ht, ue, bn, _t, yt, Kt, Ve, Ge, gn, wn, Vt, kn, vn, Gt, Yn, yn, Ye, En = "", Cn = null, Et = !1, et = null;

  function Qn() {
    et && (clearTimeout(et), et = null)
  }
  const Vr = M => {
      r(54, En = M)
    },
    $o = M => Sl(M, {
      start: .9,
      duration: 500
    });
  hn(() => {
    Cn && (clearTimeout(Cn), Cn = null), et && (clearTimeout(et), et = null), ko.reset()
  });

  function Tn(M) {
    vt[M ? "unshift" : "push"](() => {
      ue = M, r(43, ue)
    })
  }

  function Gr(M) {
    vt[M ? "unshift" : "push"](() => {
      ht = M, r(18, ht)
    })
  }
  const Zn = () => {
    ve()
  };
  return e.$$set = M => {
    "isStyles" in M && r(0, Ie = M.isStyles), "textDirection" in M && r(1, Ae = M.textDirection), "mounted" in M && r(2, Pe = M.mounted), "mc" in M && r(3, ie = M.mc), "bgc" in M && r(4, re = M.bgc), "ac" in M && r(5, D = M.ac), "sc" in M && r(6, B = M.sc), "pacmc" in M && r(7, G = M.pacmc), "pacc" in M && r(8, le = M.pacc), "paxc" in M && r(9, me = M.paxc), "pamc" in M && r(10, j = M.pamc), "cmc" in M && r(53, oe = M.cmc), "position" in M && r(11, Ce = M.position), "handleOpen" in M && r(12, ae = M.handleOpen), "handleMounted" in M && r(13, we = M.handleMounted), "handleClose" in M && r(14, ve = M.handleClose), "handleSettings" in M && r(15, Ke = M.handleSettings), "onMinimize" in M && r(16, Jt = M.onMinimize), "fireFlow" in M && r(17, qt = M.fireFlow)
  }, e.$$.update = () => {
    var M, On, S, J, z, ce, pe, Re, Qe, $, _e;
    e.$$.dirty[2] & 6 && r(47, n = A.isViewing && A.messages.length > 0 || O.length > 0), e.$$.dirty[1] & 64 && f != null && f.ms && yo.setFromSettings(f.ms), e.$$.dirty[0] & 524293 && Pe && Ie && !bn && r(19, bn = de(() => import("./Controll.js"), [])), e.$$.dirty[0] & 1048581 | e.$$.dirty[1] & 64 | e.$$.dirty[2] & 1 && (M = f == null ? void 0 : f.hl) != null && M.d && y.find(({
      m: fe
    }) => fe === "HELPSCOUT") && Pe && Ie && !ge() && !_t && r(20, _t = de(() => import("./HelpScout.js"), [])), e.$$.dirty[0] & 6291461 | e.$$.dirty[1] & 1073741888 && v && f && Pe && Ie && !yt && !Kt && (r(21, yt = de(() => import("./ScrollEvent.js"), [])), ge() || r(22, Kt = de(() => import("./PollingIsUserLoggedIn.js"), []))), e.$$.dirty[0] & 16777216 | e.$$.dirty[1] & 16 && !d && !ge() && !Ge && r(24, Ge = de(() => import("./CookieNotProvedEventTracking.js"), [])), e.$$.dirty[0] & 100663301 | e.$$.dirty[1] & 64 && f && Pe && Ie && !gn && !wn && (r(25, gn = de(() => import("./ManualTracking.js"), [])), r(26, wn = de(() => import("./PageViewEvent.js"), []))), e.$$.dirty[0] & 8388613 | e.$$.dirty[1] & 80 && f && f != null && f.sid && d && Pe && Ie && !Ve && !ge() && r(23, Ve = de(() => import("./WatchCartChanges.js"), [])), e.$$.dirty[0] & 134217733 | e.$$.dirty[1] & 704 && !k && Pe && Ie && f != null && f.d && !I && !Vt && r(27, Vt = de(() => import("./RegularNew.js"), [])), e.$$.dirty[0] & 2048 | e.$$.dirty[1] & 2048 && r(55, o = h ? (h == null ? void 0 : h.position) || st.BOTTOM_RIGHT : Ce || st.BOTTOM_RIGHT), e.$$.dirty[0] & 8 | e.$$.dirty[1] & 1024 && r(56, s = (w == null ? void 0 : w.mc) ?? ie), e.$$.dirty[1] & 3136 && r(58, i = Oc(((On = h == null ? void 0 : h.crd) == null ? void 0 : On.p) ?? ((S = w == null ? void 0 : w.crd) == null ? void 0 : S.p) ?? ((J = f == null ? void 0 : f.crd) == null ? void 0 : J.p))), e.$$.dirty[1] & 3136 && r(57, l = Sc(((z = h == null ? void 0 : h.crd) == null ? void 0 : z.p) ?? ((ce = w == null ? void 0 : w.crd) == null ? void 0 : ce.p) ?? ((pe = f == null ? void 0 : f.crd) == null ? void 0 : pe.p))), e.$$.dirty[0] & 122 | e.$$.dirty[1] & 230689888 && r(46, a = [`--txt-dir: ${Ae}`, `--txt-align: ${Ae==="ltr"?"left":"right"}`, "display: flex", `--vf-mc: ${(w==null?void 0:w.mc)??ie}`, `--vf-bgc: ${(w==null?void 0:w.bgc)??re}`, `--vf-hh: ${(w==null?void 0:w.mc)??ie}`, `--vf-sc: ${(w==null?void 0:w.sc)??B}`, `--vf-ac: ${(w==null?void 0:w.ac)??D}`, `--vf-support: ${((Re=w==null?void 0:w.csd)==null?void 0:Re.c)??((Qe=f==null?void 0:f.csd)==null?void 0:Qe.c)??"#1c1d48"}`, `--vf-chipMessage: ${(w==null?void 0:w.cmc)??(f==null?void 0:f.cmc)??oe??(w==null?void 0:w.mc)??ie}`, "--vf-message-max-width: 270px", "--vf-messages-container-max-width: 100%", "--vf-slider-max-width: calc(100% + 32px)", `--vf-transform-origin: ${i}`, p && window.innerWidth > 540 ? l : o, En || "", h != null && h.width ? `width: ${h.width}; max-width: ${h.width}` : "", h != null && h.height ? `height: ${h.height}` : ""].filter(Boolean).join("; ")), e.$$.dirty[0] & 120 | e.$$.dirty[1] & 50332736 && r(45, c = [`--vf-mc: ${(w==null?void 0:w.mc)??ie}`, `--vf-bgc: ${(w==null?void 0:w.bgc)??re}`, `--vf-support: ${(($=w==null?void 0:w.csd)==null?void 0:$.c)??((_e=f==null?void 0:f.csd)==null?void 0:_e.c)??"#1c1d48"}`, `--vf-hh: ${(w==null?void 0:w.mc)??ie}`, `--vf-sc: ${(w==null?void 0:w.sc)??B}`, `--vf-btn: ${s}`, `--vf-ac: ${(w==null?void 0:w.ac)??D}`, o].join("; ")), e.$$.dirty[0] & 536870912 | e.$$.dirty[1] & 16 && !d && !vn && r(29, vn = de(() => import("./PirvacyBanner.js"), [])), e.$$.dirty[0] & 268435461 | e.$$.dirty[1] & 964 && Pe && Ie && !k && I && f != null && f.d && !C && !kn && !Ye && (r(28, kn = de(() => import("./BrandingLink.js"), [])), r(33, Ye = de(() => import("./ImageViewer.js"), []))), e.$$.dirty[0] & 1073741829 | e.$$.dirty[1] & 195 && Pe && Ie && !k && f != null && f.d && !Gt && !Yn && !yn && (Cn = setTimeout(() => {
      r(30, Gt = de(() => import("./TextArea.js"), [])), r(31, Yn = de(() => import("./Messages.js"), [])), r(32, yn = de(() => import("./TopRow.js"), []))
    }, 500)), e.$$.dirty[0] & 262144 && ht && !Ho(Ss) && $t(Ss, ht), e.$$.dirty[1] & 536870912 && (m.t.length > 0 || m.b.length > 0), e.$$.dirty[1] & 268435456 && r(34, u = b.showMenu), e.$$.dirty[1] & 56 && (p && window.innerWidth > 540 && d && u ? (Qn(), r(44, Et = !1), et = setTimeout(() => {
      r(44, Et = !0), et = null
    }, 500)) : (Qn(), r(44, Et = !1)))
  }, [Ie, Ae, Pe, ie, re, D, B, G, le, me, j, Ce, ae, we, ve, Ke, Jt, qt, ht, bn, _t, yt, Kt, Ve, Ge, gn, wn, Vt, kn, vn, Gt, Yn, yn, Ye, u, d, p, f, k, C, I, w, h, ue, Et, c, a, n, R, V, ee, Vr, $o, oe, En, o, s, l, i, b, m, v, y, O, A, Tn, Gr, Zn]
}
class Id extends Se {
  constructor(t) {
    super(), Oe(this, t, Sd, Td, ye, {
      isStyles: 0,
      textDirection: 1,
      mounted: 2,
      mc: 3,
      bgc: 4,
      ac: 5,
      sc: 6,
      pacmc: 7,
      pacc: 8,
      paxc: 9,
      pamc: 10,
      cmc: 53,
      position: 11,
      handleOpen: 12,
      handleMounted: 13,
      handleClose: 14,
      handleSettings: 15,
      onMinimize: 16,
      fireFlow: 17
    }, null, [-1, -1, -1])
  }
}
const Ad = (e, t) => {
    var l, a, c, u;
    const r = L.getItem("rep"),
      n = r ? JSON.parse(r) : null;
    n != null && n.msd && `${n.msd}`;
    const o = (((a = (l = window == null ? void 0 : window.Shopify) == null ? void 0 : l.routes) == null ? void 0 : a.root) ?? "").replace(Br, ""),
      s = (u = (c = window == null ? void 0 : window.Shopify) == null ? void 0 : c.currency) == null ? void 0 : u.rate,
      i = [];
    return e.forEach(d => {
      const {
        u: p,
        dmi: b
      } = d, m = {
        ...d
      };
      b && (m.price = Dd(b, t, s ? +s : 1));
      const f = To(p);
      if (o) {
        const k = `${window.location.origin}${o}${f}`;
        m.u = `${k}${window.location.search}`
      }
      i.push(m)
    }), i
  },
  Jl = {
    updates: [],
    partnerKey: null,
    currentIndex: -1,
    currentMessage: "",
    isDisplaying: !1
  },
  wt = K(Jl);
let Bn = null;
const Ci = () => {
    if (Bn || !Ne(wt).updates.length) return;
    const t = () => {
      const r = Ne(wt);
      if (!Ne(He)) return;
      const n = r.currentIndex + 1;
      if (n >= r.updates.length) {
        Cr();
        return
      }
      const o = r.updates[n];
      wt.update(s => ({
        ...s,
        currentIndex: n,
        currentMessage: o.m,
        isDisplaying: !0
      }))
    };
    t(), Bn = setInterval(() => {
      t()
    }, 3e3)
  },
  Cr = () => {
    Bn && (clearInterval(Bn), Bn = null), wt.update(e => ({
      ...e,
      isDisplaying: !1
    }))
  },
  Pd = {
    subscribe: wt.subscribe,
    set: (e, t = null) => {
      Cr();
      const r = Array.isArray(e) ? e.filter(n => n.t > 0) : [];
      wt.set({
        updates: r,
        partnerKey: t,
        currentIndex: -1,
        currentMessage: "",
        isDisplaying: !1
      }), r.length > 0 && Ne(He) && Ci()
    },
    reset: () => {
      Cr(), wt.set(Jl)
    },
    startDisplaying: Ci,
    stopDisplaying: Cr,
    isActive: () => Ne(wt).updates.length > 0
  },
  Nd = e => {
    if (!e || typeof e != "string") return !0;
    const t = e.trim();
    return t === "" ? !0 : /<\s*(img|iframe|video|audio|source|embed|object|picture|svg)\b[^>]*>/gi.test(t) ? !1 : t.replace(Hd, "").trim() === ""
  },
  Rd = ["LAUNCH", "USER_REQUEST", "QUICK_LINK", "AUTO_LAUNCH"],
  Ti = ["MINI_MESSAGE_DISMISSED", "ACTIVITY", "LINK_CLICKED", "LINK_DISPLAYED", "USER_ENGAGED", "USER_WENT_FORWARD", "USER_WENT_BACK", "ELEMENT_CLICKED", "USER_IDLED", "CHAT_MINIMIZED", "CHAT_OPENED", "USER_MOVED_MOUSE_OUT", "LOGOUT", "LOGIN", "TAB_FOCUSED", "TAB_UNFOCUSED", "SHOPIFY_WEB_CLIENT_ERROR", "BACKEND_ERROR", "BEHAVIORAL_TRIGGER_VIEWED", "NEW_CONVERSATION_RESET"],
  Ld = e => {
    if (!e) return !1;
    const {
      rt: t,
      et: r
    } = e;
    return r && Ti.includes(r) ? !1 : !!(t && Rd.includes(t) || t === "EVENT" && r && !Ti.includes(r))
  },
  Dr = (e, t) => {
    var O, A, R, V, ee, Ie, Ae, Pe, ie;
    const r = [];
    if (Array.isArray(e == null ? void 0 : e.statusUpdates) && e.statusUpdates.length > 0) {
      let re = null;
      be.subscribe(B => {
        re = (B == null ? void 0 : B.pk) || null
      })(), Pd.set(e.statusUpdates, re)
    }
    const n = Ne(He),
      o = Ld(t) ? t : null;
    let s = !1,
      i = !1,
      l = "",
      a = "",
      c = "#E5FBE5",
      u = null,
      d = !1,
      p = !1,
      b = !1,
      m = !1,
      f = !1,
      k = !1,
      C = !1,
      I = [],
      w = null,
      h = null,
      v = !1,
      y = {
        mc: null,
        pp: null,
        sn: null,
        t: ""
      };
    if (e) {
      let re = null;
      (O = e == null ? void 0 : e.rbo) != null && O.length && (re = e == null ? void 0 : e.rbo.map(G => ({
        idAtStore: G.i,
        url: G.u,
        type: G.t
      }))), e != null && e.ibbt && (v = !0), Array.isArray(e == null ? void 0 : e.cmpts) && (w = e == null ? void 0 : e.cmpts);
      let D = null,
        B = null;
      if (Array.isArray(e == null ? void 0 : e.ds) && e.ds.includes("CHAT_DISABLED_APPLIED") && (C = !0), Array.isArray(e == null ? void 0 : e.dds) && (e == null || e.dds.forEach(({
          d: G,
          ai: le
        }) => {
          if (G === "CHAT_DISABLED_APPLIED") {
            C = !0;
            return
          }
          h = Md(G), b = G.indexOf("MINIMIZE") > -1, m || (m = G.indexOf("APPLY_DISCOUNT") > -1 ? le : !1), f = G.indexOf("HELPSCOUT") > -1, k = G.indexOf("IDENTIFY") > -1, s = G.indexOf("ADD_TO_CART") > -1, h && (y.ds = h, y.ai = le ?? "")
        })), e.sc && (B = e.sc), e.o) {
        let G = e.o;
        const le = (A = G == null ? void 0 : G[0]) == null ? void 0 : A.cet,
          me = le === "PRODUCT" || le === "PRODUCT_VARIANT",
          oe = ((R = window == null ? void 0 : window.repConfig) == null ? void 0 : R.currencySymbol) ?? ((ee = (V = window == null ? void 0 : window.Shopify) == null ? void 0 : V.currency) == null ? void 0 : ee.active) ?? "USD",
          Ce = jl(oe),
          ae = ge();
        me && Array.isArray(G) && !ae && (G = Ad(G, Ce ?? "$")), D = G
      }
      if (e.ro) {
        const G = (((Ae = (Ie = window == null ? void 0 : window.Shopify) == null ? void 0 : Ie.routes) == null ? void 0 : Ae.root) ?? "").replace(Br, "");
        if (G) {
          const {
            u: le
          } = e.ro, me = To(le), j = `${window.location.origin}${G}${me}`;
          p = {
            ...e.ro,
            u: j
          }
        } else p = e.ro
      } else if (e.r) {
        const G = (((ie = (Pe = window == null ? void 0 : window.Shopify) == null ? void 0 : Pe.routes) == null ? void 0 : ie.root) ?? "").replace(Br, "");
        if (G) {
          const le = e.r,
            me = To(le);
          d = `${window.location.origin}${G}${me}`
        } else d = e.r
      }
      if (e.sm && e.sm.length > 0) {
        const {
          sm: G
        } = e, le = G.filter(ae => !Nd(ae == null ? void 0 : ae.t)), me = le[le.length - 1];
        if (me) {
          const {
            mc: ae,
            mt: we,
            pp: ve,
            sn: Ke
          } = me;
          i = we !== "BOT" && we !== "ERROR", l = ve ?? "", a = Ke ?? "", c = ae ?? "#E5FBE5"
        }
        let j = [],
          oe = "";
        const Ce = [];
        le.forEach((ae, we) => {
          if (ae != null && ae.t && I.push(...Ud(ae == null ? void 0 : ae.t)), ae) {
            const {
              mt: ve,
              sn: Ke
            } = ae;
            we === 0 ? (oe = ve ?? "BOT", j.push({
              ...ae,
              type: oe,
              time: Date.now(),
              firstOfResponse: !0
            }), le.length === 1 && (h && j.push({
              ...y,
              mt: i ? "HUMAN" : "BOT",
              time: Date.now()
            }), Ce.unshift({
              type: oe,
              responseType: "platform",
              generatedByAi: (e == null ? void 0 : e.gbai) ?? !1,
              responseBasedOn: re,
              body: [...j].reverse(),
              animate: n,
              showRate: le.length === we + 1,
              id: `${new Date().getTime()}${oe}${we}`,
              slider: D,
              pills: B,
              requestMetadata: o
            }), oe = "", j = [])) : oe !== ve ? (Ce.unshift({
              ...Ac,
              name: Ke ?? "",
              body: [...j].reverse(),
              id: `${new Date().getTime()}devider${we}`
            }, {
              type: oe,
              responseType: "platform",
              generatedByAi: (e == null ? void 0 : e.gbai) ?? !1,
              responseBasedOn: re,
              body: [...j].reverse(),
              animate: n,
              showRate: !1,
              id: `${new Date().getTime()}${oe}${we}`,
              requestMetadata: o
            }), oe = ve ?? "BOT", j = [{
              ...ae,
              type: oe,
              time: Date.now()
            }], le.length === we + 1 && (h && j.push({
              ...y,
              mt: i ? "HUMAN" : "BOT",
              time: Date.now()
            }), Ce.unshift({
              type: oe,
              responseType: "platform",
              generatedByAi: (e == null ? void 0 : e.gbai) ?? !1,
              responseBasedOn: re,
              body: [...j].reverse(),
              animate: n,
              showRate: !0,
              id: `${new Date().getTime()}${oe}${we}`,
              slider: D,
              pills: B,
              requestMetadata: o
            }), oe = "", j = [])) : we === le.length - 1 ? (j.push({
              ...ae,
              type: oe,
              time: Date.now()
            }), Array.isArray(e.dds) && h && j.push({
              ...y,
              mt: i ? "HUMAN" : "BOT",
              time: Date.now()
            }), Ce.unshift({
              type: oe,
              responseType: "platform",
              generatedByAi: (e == null ? void 0 : e.gbai) ?? !1,
              responseBasedOn: re,
              body: [...j].reverse(),
              animate: n,
              showRate: G.length === we + 1,
              id: `${new Date().getTime()}${oe}${we}`,
              slider: D,
              pills: B,
              requestMetadata: o
            }), oe = "", j = []) : j.push({
              ...ae,
              type: oe,
              time: Date.now()
            })
          }
        }), r.push(...Ce)
      }!e.sm && (D || B) && r.push({
        type: "BOT",
        responseType: "platform",
        generatedByAi: (e == null ? void 0 : e.gbai) ?? !1,
        responseBasedOn: re,
        body: [],
        animate: n,
        showRate: !1,
        id: `${new Date().getTime()}BOT`,
        slider: D,
        requestMetadata: o,
        pills: B
      }), Array.isArray(e.ci) && e.ci.length > 0 && e.ci.forEach(G => {
        const le = L.getItem("repSellingPlans") ?? null;
        let me = null;
        le && (me = JSON.parse(le));
        let j = {
          id: G.i,
          quantity: G.q
        };
        me && me[G.i] && (j = {
          ...j,
          ...me[G.i]
        }), u ? Array.isArray(u) && u.push(j) : u = [j]
      })
    }
    return {
      formated: r,
      redirect: d,
      redirectObject: p,
      minimize: b,
      applyDiscount: m,
      isHelpscout: f,
      aIdx: r.length - 1,
      count: r.length,
      delay: 0,
      isHuman: i,
      humanPic: l,
      humanName: a,
      mainColor: c,
      identify: k,
      isAddTocart: s,
      items: u,
      viewedLinks: I,
      BEHAVIORAL_TRIGGER_VIEWED: v,
      componets: w,
      chatDisabledApplied: C,
      trackErrorDetails: (e == null ? void 0 : e.trackErrorDetails) ?? null,
      pfi: e == null ? void 0 : e.pfi,
      fs: e == null ? void 0 : e.fs
    }
  },
  Md = e => e.indexOf("PHONE_FORM") > -1 ? "PHONE_FORM" : e.indexOf("NAME_FORM") > -1 ? "NAME_FORM" : e.indexOf("EMAIL_FORM") > -1 ? "EMAIL_FORM" : e.indexOf("ORDER_ID_FORM") > -1 ? "ORDER_ID_FORM" : e.indexOf("PHOTO_FORM") > -1 ? "PHOTO_FORM" : null,
  X1 = async e => null, x1 = () => {
    const {
      location: {
        search: e
      }
    } = window;
    let t = null,
      r = null,
      n = null,
      o = null;
    const s = e.replace("?", "").split("&");
    return s && s.length > 0 && s.forEach(i => {
      i.indexOf("vft") > -1 && (t = i.replace("vft=", "")), i.indexOf("vck") > -1 && (r = decodeURIComponent(i.replace("vck=", ""))), i.indexOf("vaid") > -1 && (n = i.replace("vaid=", "")), i.indexOf("vat") > -1 && (o = i.replace("vat=", ""))
    }), {
      ft: t,
      ck: r,
      ai: n,
      at: o
    }
  }, Ud = e => {
    const t = [],
      r = e.match(/<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>/g);
    return Array.isArray(r) && r.length && r.forEach(n => {
      const o = {
          anchor: n,
          target: "_blank",
          class: "",
          href: ""
        },
        s = n.match(/(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/g),
        i = n.match(/(?:href)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/g);
      s != null && s[0] && (o.class = s[0].replace("class", "").replace(/[^a-zA-Z ]/g, "")), i != null && i[0] && (o.href = i[0].replace("href", "").replace("=", "").replace(/^"(.*)"$/, "$1")), t.push(o)
    }), t
  }, Hd = new RegExp("<[^>]*>", "gi"), Fd = /(?:https?:\/\/)?[^/]+(.+)/, Br = /\/$/, To = e => {
    const t = e.match(Fd);
    return t ? t[1] : null
  }, Dd = (e, t, r) => {
    const {
      op: n,
      p: o,
      opv: s,
      pv: i
    } = e;
    return n !== o ? r !== 1 ? {
      op: s && typeof s == "number" ? `${t}${Math.round(r*s)}` : n,
      p: i && typeof i == "number" ? `${t}${Math.round(+r*i)}` : o
    } : {
      op: n,
      p: o
    } : {
      op: n,
      p: typeof i == "number" && r && typeof + r == "number" && +r != 1 ? `${t}${Math.round(+r*i)}` : o
    }
  }, $1 = async (e, t) => {
    const r = Me(),
      n = await t(e);
    let o = r ? null : (n == null ? void 0 : n.sid) ?? null,
      s = (n == null ? void 0 : n.fs) ?? null,
      i = !1,
      l = !1;
    return Array.isArray(n) ? {
      res: n.map(u => (o = u == null ? void 0 : u.sid, s = u == null ? void 0 : u.fs, Array.isArray(u == null ? void 0 : u.o) && (i = !!(u != null && u.hmo), l = !0), {
        ...Dr(u),
        sid: r ? null : o,
        fs: s
      })),
      loadSlidesMore: i,
      isSlider: l
    } : {
      res: [{
        ...Dr(n ?? {}),
        sid: r ? null : o
      }],
      loadSlidesMore: i
    }
  }, ep = async (e, t, r = "REST") => {
    var d, p, b;
    const n = Me();
    let o;
    r === "WEBSOCKET" ? o = await t(e) : o = await t(e);
    let s = n ? null : (o == null ? void 0 : o.sid) ?? null,
      i = (o == null ? void 0 : o.fs) ?? null,
      l = !1,
      a = !1;
    if (Array.isArray(o)) return {
      res: o.map((f, k) => {
        var w, h, v;
        s = f == null ? void 0 : f.sid, i = f == null ? void 0 : f.fs, Array.isArray(f == null ? void 0 : f.o) && (l = !!(f != null && f.hmo), a = !0);
        let C = null;
        if (r === "REST" && ((w = e == null ? void 0 : e.requests) != null && w[k])) {
          const y = e.requests[k];
          try {
            let O = "";
            (h = y.bp) != null && h.url && (O = new URL(y.bp.url).pathname.replace(/\/$/, "") || "/"), C = {
              rt: y.rt,
              et: y.et || null,
              pk: ((v = y.bp) == null ? void 0 : v.pk) || null,
              urlPath: O
            }
          } catch {}
        }
        return {
          ...Dr(f, C),
          sid: n ? null : s,
          fs: i
        }
      }),
      loadSlidesMore: l,
      isSlider: a
    };
    let c = null;
    if (r === "REST" && ((d = e == null ? void 0 : e.requests) != null && d[0])) {
      const m = e.requests[0];
      try {
        let f = "";
        (p = m.bp) != null && p.url && (f = new URL(m.bp.url).pathname.replace(/\/$/, "") || "/"), c = {
          rt: m.rt,
          et: m.et || null,
          pk: ((b = m.bp) == null ? void 0 : b.pk) || null,
          urlPath: f
        }
      } catch {}
    }
    return {
      res: [{
        ...Dr(o ?? {}, c),
        sid: s
      }],
      loadSlidesMore: l
    }
  }, tp = async (e, t) => {
    const r = Me(),
      n = await t(e);
    let o = r ? (n == null ? void 0 : n.sid) ?? null : null,
      s = !1,
      i = null;
    return Array.isArray(n) && n.forEach(l => {
      o = r ? null : l == null ? void 0 : l.sid, Array.isArray(l == null ? void 0 : l.o) && (i = [...l == null ? void 0 : l.o], s = !!(l != null && l.hmo))
    }), {
      slideItems: i,
      sid: r ? null : o,
      loadSlidesMore: s
    }
  }, Bd = async () => {
    var a, c;
    if (ge()) return;
    const t = (((c = (a = window == null ? void 0 : window.Shopify) == null ? void 0 : a.routes) == null ? void 0 : c.root) ?? "").replace(Br, "");
    L.getItem("rep");
    const r = `${window.location.origin}${t}/apps/vf-proxy`,
      o = await (await fetch(r)).text(),
      l = new DOMParser().parseFromString(o, "text/html").querySelector("#vf_customer_details");
    if (l) {
      const u = l.innerText;
      if (typeof u == "string" && u.length > 0) return JSON.parse(u)
    }
    return null
  }, zd = e => {
    var r;
    return ((r = e.split("/discount/")) == null ? void 0 : r[1]) ?? ""
  }, np = async e => {
    if (typeof e == "string") {
      L.getItem("rep");
      let t = window.location.host;
      const r = /\.(?=.*\.)/g,
        n = t.match(r);
      if (n != null && n.length && t.indexOf("myshopify.com") === -1) {
        const s = window.location.host.indexOf(".");
        s > -1 && (t = t.slice(s + 1, t.length))
      }
      t.indexOf("localhost") > -1 && (t = "localhost");
      const o = zd(e);
      try {
        document.cookie = "discount_code=" + o + "; domain=" + t, document.cookie = "discount_code=" + o + "; domain=" + window.location.host
      } catch {}
      try {
        const s = await fetch(e)
      } catch (s) {
        console.error(s)
      }
    }
  }, Jd = /\/$/, Oi = {
    "Content-Type": "application/json"
  };
var qd = (e => (e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.DELETE = "DELETE", e.PATCH = "PATCH", e))(qd || {});
const Si = {
  error: !0,
  type: "iframe",
  message: "Sorry, but it seems like I'm unable to add this product to your cart"
};
class Kd {
  constructor() {
    tt(this, "apiUrlAddCart");
    tt(this, "apiUrlGetCart");
    tt(this, "handleIframeError", t => {
      const r = typeof t == "number" ? t + 1e3 : 1e3;
      return setTimeout(() => {
        Le.update([{
          type: "BOT",
          responseType: "platform",
          generatedByAi: !1,
          isBot: !0,
          body: [{
            t: Si.message,
            mt: "BOT"
          }],
          delays: [],
          animate: !0,
          id: `${new Date().getTime()}`
        }])
      }, r), Si
    });
    tt(this, "postCart", async (t, r) => {
      const n = ge(),
        o = Ht();
      if (n) return;
      if (o) return this.handleIframeError(r);
      const s = {
        body: JSON.stringify(t),
        headers: Oi,
        method: "POST"
      };
      try {
        const i = await lt(this.apiUrlAddCart, s);
        return i.ok ? await i.json() : (console.warn(`Shopify postCart error - Status: ${i.status}, URL: ${this.apiUrlAddCart}, Data:`, t), null)
      } catch (i) {
        if (ct(i)) return console.warn("Add to cart request was cancelled"), null;
        throw i
      }
    });
    tt(this, "getCart", async () => {
      var n, o;
      if ((o = (n = window == null ? void 0 : window.shopify) == null ? void 0 : n.config) != null && o.shop) return;
      const t = {
        headers: Oi,
        method: "GET"
      };
      if (!(ge() || Ht())) try {
        const s = await lt(this.apiUrlGetCart, t);
        return s.ok ? await s.json() : (console.warn(`Shopify getCart error - Status: ${s.status}, URL: ${this.apiUrlGetCart}`), null)
      } catch (s) {
        if (ct(s)) return console.warn("Get cart request was cancelled"), null;
        throw s
      }
    });
    var r, n;
    const t = (((n = (r = window == null ? void 0 : window.Shopify) == null ? void 0 : r.routes) == null ? void 0 : n.root) ?? "").replace(Jd, "");
    this.apiUrlAddCart = `${window.location.origin}${t}/cart/add.js`, this.apiUrlGetCart = `${window.location.origin}${t}/cart.js`
  }
}
const ql = {
    csd: 0,
    misd: 0,
    msd: 0,
    ise: !1,
    tcp: Date.now()
  },
  dr = K(ql),
  to = {
    subscribe: dr.subscribe,
    update: (e, t) => {
      dr.update(r => {
        const n = {
          ...r
        };
        return n[e] = t, n
      })
    },
    reset: () => {
      dr.set(ql)
    },
    resetTcp: () => {
      dr.update(e => ({
        ...e,
        tcp: Date.now()
      }))
    }
  },
  Un = {
    tc: 0,
    tkd: 0,
    asp: 0,
    ttf: 0,
    ttu: 0,
    tue: 0,
    tmo: 0,
    tps: 0,
    pvc: 0
  },
  Kl = "",
  tn = "vfEvDict",
  pr = K(Ee(tn, "localStorage") ? JSON.parse(L.getItem(tn) ?? "{}") : {
    ...Un,
    sessionId: Kl
  }),
  Ii = {
    subscribe: pr.subscribe,
    update: (e, t) => {
      pr.update(r => {
        const n = L.getItem(tn),
          o = {
            ...Un,
            ...n ? JSON.parse(n) : {}
          };
        return o[e] = t, (o == null ? void 0 : o.pvc) === 0 && (o.pvc = 1), L.setItem(tn, JSON.stringify(o)), o
      })
    },
    set: e => {
      pr.update(() => {
        const t = {
          ...Un,
          ...e
        };
        return (t == null ? void 0 : t.pvc) === 0 && (t.pvc = 1), L.setItem(tn, JSON.stringify(t)), t
      })
    },
    reset: e => {
      let t = {};
      const r = Me();
      return pr.update(() => (t = {
        ...Un,
        pvc: 1,
        sessionId: r ? "" : e ?? Kl
      }, L.setItem(tn, JSON.stringify(t)), t)), Un
    }
  },
  mr = K(null),
  Vd = {
    subscribe: mr.subscribe,
    set: e => {
      mr.set(e)
    },
    updatePfi: e => {
      mr.update(t => Array.isArray(t) && t.length === 0 ? (t ?? []).map(n => ({
        ...n,
        bp: {
          ...(n == null ? void 0 : n.bp) ?? {},
          pfi: e
        }
      })) : t && {
        ...t,
        bp: {
          ...(t == null ? void 0 : t.bp) ?? {},
          pfi: e
        }
      })
    },
    reset: () => {
      mr.set(null)
    }
  },
  Oo = "vfCurrentPage",
  Ai = K(Ee(Oo, "sessionStorage") ? JSON.parse(ne.getItem(Oo)) : null),
  Pi = {
    subscribe: Ai.subscribe,
    set: e => {
      Ai.set(e), ne.setItem(Oo, JSON.stringify(e))
    }
  },
  So = "vfCurrentPagePath",
  Ni = K(Ee(So, "sessionStorage") ? JSON.parse(ne.getItem(So)) : null),
  Ri = {
    subscribe: Ni.subscribe,
    set: e => {
      Ni.set(e), ne.setItem(So, JSON.stringify(e))
    }
  },
  Gd = !1,
  Li = K(Gd),
  jd = {
    subscribe: Li.subscribe,
    set: e => {
      Li.set(e)
    }
  },
  Io = "vfLatestPage",
  Mi = K(Ee(Io, "sessionStorage") ? JSON.parse(ne.getItem(Io) ?? "null") : window.location.href),
  Ui = {
    subscribe: Mi.subscribe,
    set: e => {
      Mi.set(e), ne.setItem(Io, JSON.stringify(e))
    }
  },
  Rn = K([]),
  Wd = {
    subscribe: Rn.subscribe,
    update: e => {
      Rn.update(t => [...t, e])
    },
    updatePfi: e => {
      Rn.update(t => (t ?? []).map(n => ({
        ...n,
        bp: {
          ...(n == null ? void 0 : n.bp) ?? {},
          pfi: e
        }
      })))
    },
    set: e => {
      Rn.set(e)
    },
    reset: () => {
      Rn.set([])
    }
  },
  Ao = {
    fs: "HOMEPAGE",
    pfi: !1
  },
  nn = rl,
  Ln = K(Ee(nn, "localStorage") ? JSON.parse(L.getItem(nn) ?? "{}") : Ao),
  Yd = {
    subscribe: Ln.subscribe,
    set: e => {
      Ln.set(e), L.setItem(nn, JSON.stringify(e))
    },
    reset: () => {
      Ln.set(Ao), L.setItem(nn, JSON.stringify(Ao))
    },
    updatePfi: e => {
      Ln.update(t => {
        const r = {
          ...t
        };
        return r.pfi = e, L.setItem(nn, JSON.stringify(r)), r
      })
    },
    updateFS: e => {
      Ln.update(t => {
        const r = {
          ...t
        };
        return r.fs = e, L.setItem(nn, JSON.stringify(r)), r
      })
    }
  };

function Qd(e) {
  e[75] = e[76].default
}

function Zd(e) {
  e[77] = e[76].default
}

function Xd(e) {
  e[78] = e[76].default
}

function xd(e) {
  e[79] = e[76].default
}

function $d(e) {
  e[80] = e[76].default
}

function Hi(e) {
  e[81] = e[76].default
}

function e1(e) {
  let t, r;
  return t = new Sa({
    props: {
      resetSid: e[21]
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    p: _,
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function t1(e) {
  let t, r;
  return t = new Ta({
    props: {
      resetSid: e[21]
    }
  }), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    p: _,
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function Fi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: o1,
    then: r1,
    catch: n1,
    value: 76,
    blocks: [, , , ]
  };
  return te(r = e[2], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 4 && r !== (r = e[2]) && te(r, o) || Bt(o, e, i)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function n1(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function r1(e) {
  Hi(e);
  let t, r, n;

  function o(i) {
    e[46](i)
  }
  let s = {
    handleOpen: e[24]
  };
  return e[8] !== void 0 && (s.handleEvent = e[8]), t = new e[81]({
    props: s
  }), vt.push(() => bc(t, "handleEvent", o)), {
    c() {
      Q(t.$$.fragment)
    },
    m(i, l) {
      W(t, i, l), n = !0
    },
    p(i, l) {
      Hi(i);
      const a = {};
      !r && l[0] & 256 && (r = !0, a.handleEvent = i[8], mc(() => r = !1)), t.$set(a)
    },
    i(i) {
      n || (E(t.$$.fragment, i), n = !0)
    },
    o(i) {
      T(t.$$.fragment, i), n = !1
    },
    d(i) {
      Y(t, i)
    }
  }
}

function o1(e) {
  return {
    c: _,
    m: _,
    p: _,
    i: _,
    o: _,
    d: _
  }
}

function Di(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: l1,
    then: i1,
    catch: s1,
    value: 76,
    blocks: [, , , ]
  };
  return te(r = e[3], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 8 && r !== (r = e[3]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function s1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function i1(e) {
  $d(e);
  let t, r;
  return t = new e[80]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function l1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function Bi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: u1,
    then: a1,
    catch: c1,
    value: 76,
    blocks: [, , , ]
  };
  return te(r = e[4], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 16 && r !== (r = e[4]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function c1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function a1(e) {
  xd(e);
  let t, r;
  return t = new e[79]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function u1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function zi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: p1,
    then: d1,
    catch: f1,
    value: 76,
    blocks: [, , , ]
  };
  return te(r = e[5], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 32 && r !== (r = e[5]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function f1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function d1(e) {
  Xd(e);
  let t, r;
  return t = new e[78]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function p1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function Ji(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: _1,
    then: h1,
    catch: m1,
    value: 76,
    blocks: [, , , ]
  };
  return te(r = e[6], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 64 && r !== (r = e[6]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function m1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function h1(e) {
  Zd(e);
  let t, r;
  return t = new e[77]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function _1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function qi(e) {
  let t, r, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: w1,
    then: g1,
    catch: b1,
    value: 76,
    blocks: [, , , ]
  };
  return te(r = e[20], o), {
    c() {
      t = se(), o.block.c()
    },
    m(s, i) {
      N(s, t, i), o.block.m(s, o.anchor = i), o.mount = () => t.parentNode, o.anchor = t, n = !0
    },
    p(s, i) {
      e = s, o.ctx = e, i[0] & 1048576 && r !== (r = e[20]) && te(r, o)
    },
    i(s) {
      n || (E(o.block), n = !0)
    },
    o(s) {
      for (let i = 0; i < 3; i += 1) {
        const l = o.blocks[i];
        T(l)
      }
      n = !1
    },
    d(s) {
      s && P(t), o.block.d(s), o.token = null, o = null
    }
  }
}

function b1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function g1(e) {
  Qd(e);
  let t, r;
  return t = new e[75]({}), {
    c() {
      Q(t.$$.fragment)
    },
    m(n, o) {
      W(t, n, o), r = !0
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0)
    },
    o(n) {
      T(t.$$.fragment, n), r = !1
    },
    d(n) {
      Y(t, n)
    }
  }
}

function w1(e) {
  return {
    c: _,
    m: _,
    i: _,
    o: _,
    d: _
  }
}

function k1(e) {
  let t, r, n, o, s, i, l, a, c, u, d;
  const p = [t1, e1],
    b = [];

  function m(v, y) {
    var O;
    return (O = v[7]) != null && O.sdk ? 0 : 1
  }
  t = m(e), r = b[t] = p[t](e);
  let f = e[2] && Fi(e),
    k = e[3] && Di(e),
    C = e[4] && Bi(e),
    I = e[5] && zi(e),
    w = e[6] && Ji(e),
    h = e[20] && qi(e);
  return u = new Id({
    props: {
      mc: e[10],
      bgc: e[11],
      ac: e[12],
      sc: e[13],
      pacmc: e[14],
      pacc: e[15],
      paxc: e[16],
      pamc: e[17],
      cmc: e[18],
      isStyles: e[0],
      mounted: e[1],
      position: e[19],
      handleOpen: e[24],
      handleMounted: e[26],
      handleClose: e[23],
      fireFlow: e[25],
      handleSettings: e[27],
      onMinimize: e[22],
      textDirection: e[9]
    }
  }), {
    c() {
      r.c(), n = Z(), f && f.c(), o = Z(), k && k.c(), s = Z(), C && C.c(), i = Z(), I && I.c(), l = Z(), w && w.c(), a = Z(), h && h.c(), c = Z(), Q(u.$$.fragment)
    },
    m(v, y) {
      b[t].m(v, y), N(v, n, y), f && f.m(v, y), N(v, o, y), k && k.m(v, y), N(v, s, y), C && C.m(v, y), N(v, i, y), I && I.m(v, y), N(v, l, y), w && w.m(v, y), N(v, a, y), h && h.m(v, y), N(v, c, y), W(u, v, y), d = !0
    },
    p(v, y) {
      let O = t;
      t = m(v), t === O ? b[t].p(v, y) : (X(), T(b[O], 1, 1, () => {
        b[O] = null
      }), x(), r = b[t], r ? r.p(v, y) : (r = b[t] = p[t](v), r.c()), E(r, 1), r.m(n.parentNode, n)), v[2] ? f ? (f.p(v, y), y[0] & 4 && E(f, 1)) : (f = Fi(v), f.c(), E(f, 1), f.m(o.parentNode, o)) : f && (X(), T(f, 1, 1, () => {
        f = null
      }), x()), v[3] ? k ? (k.p(v, y), y[0] & 8 && E(k, 1)) : (k = Di(v), k.c(), E(k, 1), k.m(s.parentNode, s)) : k && (X(), T(k, 1, 1, () => {
        k = null
      }), x()), v[4] ? C ? (C.p(v, y), y[0] & 16 && E(C, 1)) : (C = Bi(v), C.c(), E(C, 1), C.m(i.parentNode, i)) : C && (X(), T(C, 1, 1, () => {
        C = null
      }), x()), v[5] ? I ? (I.p(v, y), y[0] & 32 && E(I, 1)) : (I = zi(v), I.c(), E(I, 1), I.m(l.parentNode, l)) : I && (X(), T(I, 1, 1, () => {
        I = null
      }), x()), v[6] ? w ? (w.p(v, y), y[0] & 64 && E(w, 1)) : (w = Ji(v), w.c(), E(w, 1), w.m(a.parentNode, a)) : w && (X(), T(w, 1, 1, () => {
        w = null
      }), x()), v[20] ? h ? (h.p(v, y), y[0] & 1048576 && E(h, 1)) : (h = qi(v), h.c(), E(h, 1), h.m(c.parentNode, c)) : h && (X(), T(h, 1, 1, () => {
        h = null
      }), x());
      const A = {};
      y[0] & 1024 && (A.mc = v[10]), y[0] & 2048 && (A.bgc = v[11]), y[0] & 4096 && (A.ac = v[12]), y[0] & 8192 && (A.sc = v[13]), y[0] & 16384 && (A.pacmc = v[14]), y[0] & 32768 && (A.pacc = v[15]), y[0] & 65536 && (A.paxc = v[16]), y[0] & 131072 && (A.pamc = v[17]), y[0] & 262144 && (A.cmc = v[18]), y[0] & 1 && (A.isStyles = v[0]), y[0] & 2 && (A.mounted = v[1]), y[0] & 524288 && (A.position = v[19]), y[0] & 512 && (A.textDirection = v[9]), u.$set(A)
    },
    i(v) {
      d || (E(r), E(f), E(k), E(C), E(I), E(w), E(h), E(u.$$.fragment, v), d = !0)
    },
    o(v) {
      T(r), T(f), T(k), T(C), T(I), T(w), T(h), T(u.$$.fragment, v), d = !1
    },
    d(v) {
      v && (P(n), P(o), P(s), P(i), P(l), P(a), P(c)), b[t].d(v), f && f.d(v), k && k.d(v), C && C.d(v), I && I.d(v), w && w.d(v), h && h.d(v), Y(u, v)
    }
  }
}

function v1(e, t, r) {
  let n, o, s, i, l, a, c, u, d, p, b, m, f, k, C, I, w;
  U(e, be, S => r(7, n = S)), U(e, Ui, S => r(53, o = S)), U(e, He, S => r(38, s = S)), U(e, It, S => r(54, i = S)), U(e, zt, S => r(55, l = S)), U(e, Pi, S => r(56, a = S)), U(e, ze, S => r(39, c = S)), U(e, mn, S => r(40, u = S)), U(e, Ri, S => r(57, d = S)), U(e, Ii, S => r(58, p = S)), U(e, ot, S => r(59, b = S)), U(e, Le, S => r(41, m = S)), U(e, Nr, S => r(60, f = S)), U(e, Vn, S => r(42, k = S)), U(e, Lt, S => r(43, C = S)), U(e, bo, S => r(44, I = S)), U(e, Kr, S => r(45, w = S));
  let {
    nodeForStyles: h
  } = t, {
    root: v
  } = t, y, {
    cssUrlSecond: O
  } = t, A = "rtl", R = !1, V = !1, ee = !1, Ie = "", Ae = "", Pe = "", ie = "", re = null, D = null, B = null, G = null, le = null, me = null, j = null, oe = null, Ce = null, ae = null, we = null, ve = !1, Ke, Jt, qt, ht, ue = null;
  const bn = new Kd;
  let _t, yt;
  const Kt = () => ge();
  $t("rootElement", v);
  let Ve = !0,
    Ge = null;
  const gn = be.subscribe(S => {
      S != null && S.bgc && r(11, Ae = S.bgc), S != null && S.mc && r(10, Ie = S.mc), S != null && S.ac && r(12, Pe = S.ac), S != null && S.sc && r(13, ie = S.sc), S != null && S.pacmc && r(14, re = S.pacmc), S != null && S.pacc && r(15, D = S.pacc), S != null && S.paxc && r(16, B = S.paxc), S != null && S.pamc && r(17, G = S.pamc), S != null && S.cmc && r(18, le = S.cmc)
    }),
    wn = () => {
      ue && (r(35, ue.sid = "", ue), r(35, ue.cid = "", ue)), be.resetSid()
    },
    Vt = (S = !0) => {
      const J = n == null ? void 0 : n.sid,
        z = n == null ? void 0 : n.cid,
        ce = sn(),
        pe = S ? sn() : z ?? sn();
      return J && ir.add(J), z && ir.add(z), ir.add(ce), ir.add(pe), be.update("sid", ce), S && be.update("cid", pe), ue && (r(35, ue.sid = ce, ue), S && r(35, ue.cid = pe, ue)), window.repSettings && (window.repSettings = {
        ...window.repSettings,
        sid: ce,
        ...S ? {
          cid: pe
        } : {}
      }), xe() ? (dt(n == null ? void 0 : n.pk), Kn({
        days: 1,
        value: ce,
        partnerKey: n == null ? void 0 : n.pk
      })) : (dt(), dn({
        days: 1,
        name: Xe,
        value: ce
      })), ke.updateSid(ce, pe), ao.updateSid(ce, pe), {
        newSid: ce,
        newCid: pe
      }
    },
    kn = async () => {
      var ce, pe;
      Le.reset(), Qo.set(!0);
      const {
        newSid: S,
        newCid: J
      } = Vt(!1), z = await Fe(ue);
      if (z) {
        const Re = {
          rt: "LAUNCH",
          bp: {
            ...z,
            sid: S,
            cid: J,
            au: !!((pe = (ce = window == null ? void 0 : window.meta) == null ? void 0 : ce.page) != null && pe.customerId)
          }
        };
        i != null && i.defaultOpen ? or.set(Re) : ke.update(Re)
      }
    }, vn = S => {
      ot.reset(), Ze.set(!0), i != null && i.defaultOpen && (i != null && i.hideControls) || He.set(!1), Fe(S || ue).then(J => {
        var z, ce;
        J && c && ke.update({
          rt: "EVENT",
          et: "CHAT_MINIMIZED",
          bp: {
            ...J,
            au: !!((ce = (z = window == null ? void 0 : window.meta) == null ? void 0 : z.page) != null && ce.customerId)
          }
        })
      })
    }, Gt = S => {
      n != null && n.sdk || f.find(({
        m: J
      }) => J === "SHOPIFY") && (window != null && window.Shopify) && Bd().then(J => {
        if (J && typeof J == "object" && J.hmac && J.id) {
          const {
            id: z,
            hmac: ce
          } = J, pe = {
            iat: z ?? "",
            hm: ce ?? ""
          };
          Fe(S || ue).then(Re => {
            Re && c && ke.update({
              rt: "IDENTIFY",
              p: pe,
              bp: Re
            })
          })
        }
      })
    };
  $t("toggleFunction", S => {
    if (!s) {
      const J = !m.length || m.every(z => z.type === "loading");
      (b && !b.length || J) && ((Ve || J) && (Le.hasLaunchForContext() || (l.isHuman || (gt.set(!1), Le.update([_r])), Fe(S || ue).then(z => {
        var ce, pe;
        z && c && ke.update({
          rt: "LAUNCH",
          bp: {
            ...z,
            au: !!((pe = (ce = window == null ? void 0 : window.meta) == null ? void 0 : ce.page) != null && pe.customerId)
          }
        })
      }))), Ve = !1)
    }
    ot.reset(), i != null && i.defaultOpen && (i != null && i.hideControls) && s || He.set(!s), Ze.set(!1), Ia.set(!0)
  });
  const yn = () => {
      s && (ot.reset(), i != null && i.defaultOpen && (i != null && i.hideControls) || He.set(!1), Ze.set(!1))
    },
    Ye = (S, J) => {
      s || (b && !b.length && !S && (Ve && (Le.hasLaunchForContext() || (l.isHuman || (gt.set(!1), Le.update([_r])), Fe(J || ue).then(z => {
        var ce, pe;
        if (z && c) {
          const Re = {
            rt: "LAUNCH",
            bp: {
              ...z,
              au: !!((pe = (ce = window == null ? void 0 : window.meta) == null ? void 0 : ce.page) != null && pe.customerId)
            }
          };
          i != null && i.defaultOpen ? or.set(Re) : ke.update(Re)
        }
      }))), Ve = !1), ot.reset(), He.set(!0), Ze.set(!1))
    };

  function En() {}
  $t("handleResponse", {
    handleCanUserType: S => {
      r(32, oe = setTimeout(() => {
        gt.set(!0), clearTimeout(oe), r(32, oe = null)
      }, 300))
    },
    handleIdentify: Gt
  });
  const Et = S => {
      var J;
      (J = S == null ? void 0 : S.data) != null && J.rep && r(1, ee = !0)
    },
    et = S => {
      const {
        vck: J,
        vft: z,
        vfsim: ce,
        chatopened: pe,
        latestParsedVF: Re
      } = S;
      ce ? ne.setItem("vfplatform", "SIMULATOR") : typeof ne.getItem("vfplatform") == "string" && ne.removeItem("vfplatform"), pe ? (Ze.set(!1), He.set(!0)) : (i != null && i.defaultOpen && (i != null && i.hideControls) || He.set(!1), Ze.set(!0)), Fe(Re || ue).then(Qe => {
        var $, _e;
        if (Qe && c) {
          const fe = {
            rt: "QUICK_LINK",
            bp: {
              ...Qe,
              au: !!((_e = ($ = window == null ? void 0 : window.meta) == null ? void 0 : $.page) != null && _e.customerId)
            },
            ck: J,
            ft: z
          };
          ke.update(fe)
        }
      })
    },
    Qn = S => {
      r(1, ee = S)
    },
    Vr = (S, J) => {
      if (It.refresh(), S && r(35, ue = S), J && It.updateProperties(J), J != null && J.position) {
        const z = st != null && st[J.position] ? st == null ? void 0 : st[J.position] : void 0;
        It.updateProperty("position", z)
      }
      J != null && J.width && r(28, v.style.width = J.width, v), J != null && J.height && r(28, v.style.height = J.height, v)
    };
  $t("handleShouldSendLaunch", S => {
    Ve = S
  });
  const Tn = S => {
      if (window.location.pathname !== d) {
        ot.reset(), Ve = !0, Ri.set(window.location.pathname);
        const J = (p == null ? void 0 : p.pvc) ?? 0,
          z = J === 0 ? 1 : J + 1;
        Ii.update("pvc", z), n != null && n.sdk && to.resetTcp()
      }
      S && (jd.set(!0), r(1, ee = !0))
    },
    Gr = () => {
      ee || Tn(), ae = new MutationObserver(function(S) {
        S.forEach(function() {
          window.location.pathname !== d && ee && (r(1, ee = !1), Ce && clearTimeout(Ce), Ce = setTimeout(() => {
            Tn(!0), Ce = null
          }, 500))
        })
      }), ae.observe(document, {
        childList: !0,
        subtree: !0
      })
    },
    Zn = S => {
      if (S != null && S.cartToken) {
        const {
          cartToken: J
        } = S;
        L.setItem("repCT", J), window.repCT = J
      }
      if (S != null && S.attributes) {
        const {
          attributes: J
        } = S;
        (J == null ? void 0 : J.rep_session_id) !== (n == null ? void 0 : n.sid) && pl.set({
          attributes: {
            rep_session_id: n == null ? void 0 : n.sid,
            rep_assisted: !!(J != null && J.rep_assisted)
          },
          note: ""
        })
      }
    };
  let M = !1;
  Jr(() => {
    try {
      Promise.all([de(() => import("./purify.es.js"), []), de(() => import("./linkify-html.js"), [])]).then(([z, ce]) => {
        try {
          const pe = z.default ?? z;
          (ce.default ?? ce)(pe.sanitize("<p>.</p>"))
        } catch {}
      })
    } catch {}
    It.refresh(), i != null && i.width && v && r(28, v.style.width = i.width, v), i != null && i.height && v && r(28, v.style.height = i.height, v), c || (Yd.reset(), ke.updatePfi(!1), Wd.updatePfi(!1), Vd.updatePfi(!1)), i != null && i.defaultOpen && Ye(), (window.location.search ?? "").toLocaleLowerCase().includes("roc=true") && !s && Ye(), _n() && Hn.stopAllPolling(), Gr(), Tn(), j = setTimeout(() => {
      r(1, ee = !!window.scrollTo)
    }, 100), cl(Et), ll().has("vmin") && (i != null && i.defaultOpen && (i != null && i.hideControls) || He.set(!1), Ze.set(!0)), window.location.href !== a && (Pi.set(window.location.href), ot.reset(), Ze.set(!s), n != null && n.sdk && to.resetTcp()), ul().then(async ({
      settings: z
    }) => {
      var pe, Re, Qe;
      const ce = Me();
      if (z) {
        let $ = {
          ...z
        };
        if (i != null && i.crd && ($ = {
            ...$,
            crd: i.crd
          }), await df($.pk), z != null && z.sdk || Gt($), Vn.set($), r(35, ue = $), r(9, A = fl($)), be.set($), mn.init(), window.innerWidth > 540 && !cf($.pk) && ($.ddom === "FULL_SCREEN" ? Lt.set(!0) : Lt.set(!1)), $ != null && $.ipwe && ($ != null && $.ipci) && !Kt() && document.getElementById($ == null ? void 0 : $.ipci) && r(5, _t = de(() => import("./InlineChipsWidget.js"), [])), i != null && i.defaultOpen)
          if (i != null && i.freshStart) {
            br.cancelAllRequests(), Hn.stopAllPolling(), Le.reset(), ke.reset(), ao.reset(), or.reset(), ot.reset(), l.isHuman || (gt.set(!1), Le.update([_r]));
            const {
              newSid: _e,
              newCid: fe
            } = Vt();
            Hn.resumeAllPolling(), Ve = !1, Fe($).then(jt => {
              var es, ts;
              jt && or.set({
                rt: "LAUNCH",
                bp: {
                  ...jt,
                  sid: _e,
                  cid: fe,
                  au: !!((ts = (es = window == null ? void 0 : window.meta) == null ? void 0 : es.page) != null && ts.customerId)
                }
              })
            }), Ye(!0, z)
          } else if (i != null && i.shouldRefresh) kn().then(() => {
          Ve = !1, Ye(!0, z)
        });
        else {
          i != null && i.defaultReset && Le.reset();
          const _e = (i == null ? void 0 : i.skipLaunch) || !1;
          Ye(_e, z)
        }
        if ((window.location.search ?? "").toLocaleLowerCase().includes("roc=true") && !s && Ye(!1, z), Array.isArray(z == null ? void 0 : z.ig) && (z != null && z.ig.find(({
            m: _e
          }) => _e === "SHOPIFY")) && !ce && (z != null && z.sid) && !(z != null && z.doca))
          if (z != null && z.sdk) {
            if (Ol("getCartDetails", {
                callback: Zn
              }), Array.isArray((Re = (pe = window == null ? void 0 : window.rep) == null ? void 0 : pe.events) == null ? void 0 : Re.getCartDetails)) {
              const {
                getCartDetails: _e
              } = (Qe = window == null ? void 0 : window.rep) == null ? void 0 : Qe.events;
              _e.forEach(fe => {
                typeof fe == "function" && fe(Zn)
              })
            }
          } else bn.getCart().then(_e => {
            var fe;
            ((fe = _e == null ? void 0 : _e.attributes) == null ? void 0 : fe.rep_session_id) !== (z == null ? void 0 : z.sid) && ml.updateShopifySidAttr({
              sid: (z == null ? void 0 : z.sid) ?? "",
              repAssisted: !1,
              onError: En
            })
          }).catch(_e => {
            console.error("getWebAppSettings error:", _e)
          });
        Nr.set((z == null ? void 0 : z.ig) ?? [])
      }
    }), o !== window.location.pathname && (ot.reset(), Ui.set(window.location.pathname), n != null && n.sdk && to.resetTcp()), al()
  }), hn(() => {
    gn(), ke.unsubscribeIntegration(), ke.storeSettingsSubscribed(), ke.unsubscribeRefreshSession(), ke.unsubscribePollingControl(), ke.unsubscribeTemporaryQueue(), ke.unsubscribeEventsEnabled(), ke.unsubscribeIsOpen(), ke.unsubscribeWebSocketStore(), Ce && clearTimeout(Ce), ae && (ae.disconnect(), ae = null), j && (clearTimeout(j), j = null), oe && (clearTimeout(oe), r(32, oe = null)), we && clearTimeout(we), window.removeEventListener("message", Et), It.destroy()
  });

  function On(S) {
    y = S, r(8, y)
  }
  return e.$$set = S => {
    "nodeForStyles" in S && r(29, h = S.nodeForStyles), "root" in S && r(28, v = S.root), "cssUrlSecond" in S && r(30, O = S.cssUrlSecond)
  }, e.$$.update = () => {
    var S, J, z, ce, pe, Re, Qe;
    if (e.$$.dirty[0] & 132 && n && !Ke && r(2, Ke = de(() => import("./BulkPUT.js"), [])), e.$$.dirty[0] & 1610612736 | e.$$.dirty[1] & 1 && h && !R && (r(31, R = !0), O)) {
      const $ = document.createElement("link");
      $.setAttribute("href", O), $.setAttribute("rel", "stylesheet"), h.appendChild($), $.addEventListener("load", () => {
        r(0, V = !0)
      })
    }
    if (e.$$.dirty[0] & 155 && !Jt && n && ee && V && !qt && (r(3, Jt = de(() => import("./ActivityDictionary.js"), [])), r(4, qt = de(() => import("./Idle.js"), [])), r(20, ht = de(() => import("./UrlBlocker.js"), []))), e.$$.dirty[0] & 163 && n != null && n.ipwe && n != null && n.ipci && ee && V && !_t && !Kt() && r(5, _t = de(() => import("./InlineChipsWidget.js"), [])), e.$$.dirty[0] & 195 && n != null && n.aswe && n != null && n.asci && ee && V && !yt && r(6, yt = de(() => import("./AskOurAiSearchWidget.js"), [])), e.$$.dirty[1] & 2192 && !s && window.innerWidth <= 540 && r(28, v.style.zIndex = (k == null ? void 0 : k.zIndexRoot) ?? (ue == null ? void 0 : ue.zidx) ?? 2147483647, v), e.$$.dirty[1] & 128 && s && window.innerWidth <= 540 && r(28, v.style.zIndex = 2147483647, v), e.$$.dirty[1] & 412 && (s && !ve && (we && clearTimeout(we), r(33, we = setTimeout(() => {
        Fe(ue).then($ => {
          var _e, fe;
          $ && c && ke.update({
            rt: "EVENT",
            et: "CHAT_OPENED",
            bp: {
              ...$,
              au: !!((fe = (_e = window == null ? void 0 : window.meta) == null ? void 0 : _e.page) != null && fe.customerId)
            }
          })
        }), r(33, we = null)
      }, 300))), r(34, ve = s)), e.$$.dirty[0] & 536870912 | e.$$.dirty[1] & 16416 && h && w.cssText && !Ge) {
      const $ = (S = h.querySelector) == null ? void 0 : S.call(h, "style[data-partner-css]");
      $ ? r(36, Ge = $) : (r(36, Ge = document.createElement("style")), Ge.setAttribute("data-partner-css", "true"), r(36, Ge.textContent = w.cssText, Ge), h.appendChild(Ge))
    }
    if (e.$$.dirty[1] & 2 && (oe || gt.set(!0)), e.$$.dirty[1] & 8320 && s && I > 0 && bo.set(0), e.$$.dirty[0] & 128 && n && Nl.set(n.ate), e.$$.dirty[1] & 2064 && (J = ue == null ? void 0 : ue.crd) != null && J.p && !((z = k == null ? void 0 : k.crd) != null && z.p)) {
      if (ue.crd.p !== "CUSTOM") r(19, me = st[ue.crd.p]);
      else if (ue.crd.cp) {
        const {
          v: $,
          h: _e,
          y: fe,
          x: jt
        } = ue.crd.cp;
        r(19, me = `${$==="BOTTOM"?"bottom":"top"}:${fe};${_e==="RIGHT"?"right":"left"}:${jt};`)
      }
    }
    if (e.$$.dirty[0] & 268435456 | e.$$.dirty[1] & 2048 && typeof(k == null ? void 0 : k.zIndexRoot) == "number" && v && (be.update("zidx", k == null ? void 0 : k.zIndexRoot), r(28, v.style.zIndex = k == null ? void 0 : k.zIndexRoot, v)), e.$$.dirty[0] & 268435584 | e.$$.dirty[1] & 128 && !s && typeof(n == null ? void 0 : n.zidx) == "number" && v != null && v.style && (n == null ? void 0 : n.zidx) !== v.style.zIndex && r(28, v.style.zIndex = n == null ? void 0 : n.zidx, v), e.$$.dirty[0] & 268435584 | e.$$.dirty[1] & 4224 && v != null && v.style && (C ? r(28, v.style.zIndex = "2147483647", v) : !s && typeof(n == null ? void 0 : n.zidx) == "number" && r(28, v.style.zIndex = n == null ? void 0 : n.zidx, v)), e.$$.dirty[1] & 2048 && k != null && k.crd) {
      if (((ce = k == null ? void 0 : k.crd) == null ? void 0 : ce.p) !== "CUSTOM") r(19, me = st[(pe = k == null ? void 0 : k.crd) == null ? void 0 : pe.p]);
      else if ((Re = k == null ? void 0 : k.crd) != null && Re.cp) {
        const {
          v: $,
          h: _e,
          y: fe,
          x: jt
        } = (Qe = k == null ? void 0 : k.crd) == null ? void 0 : Qe.cp;
        r(19, me = `${$==="BOTTOM"?"bottom":"top"}:${fe};${_e==="RIGHT"?"right":"left"}:${jt};`)
      }
    }
    if (e.$$.dirty[1] & 1152 && m && m.length > 0 && (typeof L.getItem("isMinimized") != "string" || JSON.parse(L.getItem("isMinimized") ?? "false")) && Ze.set(!s), e.$$.dirty[0] & 128 | e.$$.dirty[1] & 832 && c && !M && n != null && n.pk) {
      r(37, M = !0), n.sid && Fr.set(n.sid);
      const $ = cn.getDeviceKey(),
        _e = u.historyToken;
      !$ || !_e ? an.refreshTokens(n.pk).then(() => an.fetchWithTokenRefresh(n.pk, 0, 10)).then(fe => {
        fe != null && fe.conversations && pt.setConversations(fe.conversations, fe.hasMore ?? !1)
      }).catch(fe => {
        console.error("[App] Failed to initialize history:", fe)
      }) : an.fetchWithTokenRefresh(n.pk, 0, 10).then(fe => {
        fe != null && fe.conversations && pt.setConversations(fe.conversations, fe.hasMore ?? !1)
      }).catch(fe => {
        console.error("[App] Failed to load conversations:", fe)
      })
    }
  }, [V, ee, Ke, Jt, qt, _t, yt, n, y, A, Ie, Ae, Pe, ie, re, D, B, G, le, me, ht, wn, vn, yn, Ye, et, Qn, Vr, v, h, O, R, oe, we, ve, ue, Ge, M, s, c, u, m, k, C, I, w, On]
}
class Po extends Se {
  constructor(t) {
    super(), Oe(this, t, v1, k1, ye, {
      nodeForStyles: 29,
      root: 28,
      cssUrlSecond: 30
    }, null, [-1, -1, -1])
  }
}
const y1 = "rep";

function E1() {
  try {
    const e = L.getItem(y1);
    if (!e) return !1;
    const t = JSON.parse(e);
    return (t == null ? void 0 : t.dsd) === !0
  } catch (e) {
    return console.error("[ShadowDomStateControl] Error reading from settings:", e), !1
  }
}
const C1 = ["hellorep"],
  T1 = () => {
    const e = window.location.origin;
    return window.location.search.indexOf("vfOpen") > -1 || E1() || C1.some(t => e.includes(t)) ? "open" : "closed"
  };
let zn = null;
async function No(e = !1) {
  var f, k, C, I, w, h, v;
  const t = ((f = window == null ? void 0 : window.location) == null ? void 0 : f.href) ?? "";
  let r = t.indexOf("localhost") !== -1,
    n = t.indexOf("localhost:3000") !== -1,
    o = !0;
  n ? o = !0 : r && (o = !1);
  const s = document.body,
    i = (k = window == null ? void 0 : window.repContainer) == null ? void 0 : k.selector;
  let l = null,
    a = null;
  if (i && (a = await dl(i)), a) {
    const y = a.querySelector("#repWebClientContainer");
    y && (e || y.shadowRoot) ? (y.remove(), l = document.createElement("div"), a.appendChild(l)) : y ? l = y : (l = document.createElement("div"), a.appendChild(l))
  } else {
    const y = document.getElementById("repWebClientContainer");
    y && (e || y.shadowRoot) ? (y.remove(), l = document.createElement("div")) : y ? l = y : l = document.createElement("div")
  }
  l && (l.ontouchstart = y => {
    y.stopPropagation()
  }, l.ontouchend = y => {
    y.stopPropagation()
  }, l.onclick = y => {
    y.stopPropagation()
  }, l.onkeydown = y => {
    y.stopPropagation()
  }), l.ondragover = y => {
    y.stopPropagation()
  }, l.ondrop = y => {
    y.stopPropagation()
  }, l.ondragenter = y => {
    y.stopPropagation()
  }, l.ondragleave = y => {
    y.stopPropagation()
  };
  const c = () => new Promise(y => {
    const O = "vf-material-symbols-font";
    if (document.getElementById(O)) {
      y();
      return
    }
    const R = document.createElement("link");
    R.id = O, R.rel = "stylesheet", R.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,400,0,0&display=block", R.onload = () => {
      y()
    }, R.onerror = () => {
      console.error("[PRELOAD] Failed to load Material Symbols"), y()
    }, document.head.appendChild(R), setTimeout(() => {
      console.warn("[PRELOAD] Timeout fallback triggered (3s)"), y()
    }, 3e3)
  });
  let u = null,
    d = "";
  if (s != null && s.attachShadow) {
    !i && l && !l.parentNode && (document.body.appendChild(l), l.style.height = "0px", l.style.width = "0px", l.style.position = "fixed", l.style.display = "block", l.style.zIndex = L.getItem("repZidx") ?? "2147483647"), c();
    const y = T1();
    l.shadowRoot ? (u = l.shadowRoot, u.innerHTML = "") : u = l.attachShadow({
      mode: y,
      delegatesFocus: !0
    })
  } else !i && l && !l.parentNode && document.body.appendChild(l);
  let p = null;
  const b = L.getItem("rep"),
    m = document.getElementById("vfChat");
  if (b && b !== "undefined" && ((C = JSON.parse(b)) != null && C.cid) ? p = JSON.parse(b) : (I = window == null ? void 0 : window.repSettings) != null && I.cid && (p = window == null ? void 0 : window.repSettings), (p || (w = m == null ? void 0 : m.dataset) != null && w.cfl) && (typeof(p == null ? void 0 : p.gcfl) == "string" && (p != null && p.gcfl.length) ? p == null || p.gcfl : (h = m == null ? void 0 : m.dataset) == null || h.gcfl, d = typeof(p == null ? void 0 : p.cfl) == "string" && (p != null && p.cfl.length) ? p == null ? void 0 : p.cfl : (v = m == null ? void 0 : m.dataset) == null ? void 0 : v.cfl), !i)
    if (typeof(p == null ? void 0 : p.zidx) == "number") l.style.zIndex = p.zidx;
    else {
      const y = document.querySelector("html");
      zn = new MutationObserver(function(O) {
        var A, R;
        if ((A = O == null ? void 0 : O[0]) != null && A.target) {
          const V = getComputedStyle((R = O == null ? void 0 : O[0]) == null ? void 0 : R.target);
          if (V) {
            const ee = V.getPropertyValue("overflow");
            l.style.zIndex = ee === "hidden" ? "1" : "2147483647"
          }
        }
      }), zn.observe(y, {
        attributes: !0,
        attributeFilter: ["class"],
        childList: !1,
        characterData: !1
      })
    } return l && (l.id = "repWebClientContainer", l.setAttribute("data-gp-notranslate", ""), l.setAttribute("data-gp-notranslate-frontend", ""), l.setAttribute("data-gp-noloc", "subtree"), l.setAttribute("translate", "no"), l.classList.add("notranslate")), {
    target: u || l,
    intro: !0,
    props: {
      nodeForStyles: s.attachShadow && u ? u : document.head,
      root: l,
      cssUrlSecond: o ? d || null : "assets/style.css"
    }
  }
}
let bt;
(async () => {
  const e = await No();
  bt = new Po(e), window.repAppV2 = bt
})();
const O1 = async () => {
  try {
    bt && bt.$destroy();
    const e = await No(!0);
    return bt = new Po(e), window.repAppV2 = bt, !0
  } catch {
    try {
      const t = await No(!1);
      return bt = new Po(t), window.repAppV2 = bt, !1
    } catch {
      return !1
    }
  }
};
window.changeTargetV2 = O1;

function Ki() {
  zn && (zn.disconnect(), zn = null)
}
typeof window < "u" && (window.addEventListener("beforeunload", Ki), window.addEventListener("pagehide", Ki));
export {
  Vn as $, Jr as A, hn as B, Te as C, Jn as D, q as E, g as F, V1 as G, ot as H, _r as I, Ic as J, Ms as K, ke as L, E1 as M, at as N, F as O, he as P, Z as Q, We as R, Se as S, Mt as T, qo as U, Jo as V, _ as W, Y as X, W as Y, Q as Z, It as _, Ne as a, J1 as a$, Kd as a0, Ht as a1, Qc as a2, Le as a3, Zc as a4, L as a5, Me as a6, Dr as a7, ir as a8, ao as a9, xe as aA, Ol as aB, De as aC, R1 as aD, H as aE, Je as aF, ic as aG, sc as aH, Lt as aI, dl as aJ, sn as aK, br as aL, or as aM, Xe as aN, Fr as aO, Mu as aP, mt as aQ, ku as aR, dt as aS, Kn as aT, dn as aU, fn as aV, cn as aW, qe as aX, F1 as aY, D1 as aZ, Rr as a_, Nr as aa, pl as ab, ml as ac, Ii as ad, Hn as ae, Ns as af, da as ag, Qo as ah, Yd as ai, as as aj, Wr as ak, an as al, pt as am, Wd as an, Vd as ao, Pd as ap, ge as aq, $1 as ar, bo as as, Ac as at, zd as au, np as av, to as aw, z1 as ax, Nl as ay, B1 as az, be as b, ec as b$, jd as b0, jc as b1, te as b2, Vc as b3, Kc as b4, Gc as b5, ll as b6, x1 as b7, de as b8, Jc as b9, pn as bA, Ut as bB, Tr as bC, Yc as bD, X1 as bE, L1 as bF, oc as bG, zo as bH, Ft as bI, Da as bJ, H1 as bK, q1 as bL, K1 as bM, Ql as bN, N1 as bO, A1 as bP, U1 as bQ, Ss as bR, bc as bS, mc as bT, G1 as bU, Ot as bV, Fc as bW, j1 as bX, bs as bY, ul as bZ, xl as b_, $e as ba, xa as bb, un as bc, vt as bd, Al as be, Gn as bf, st as bg, Ia as bh, fu as bi, Y1 as bj, Sl as bk, us as bl, W1 as bm, lt as bn, ct as bo, xn as bp, Aa as bq, _n as br, Q1 as bs, ko as bt, Wc as bu, M1 as bv, mn as bw, pc as bx, dc as by, tp as bz, Ee as c, tc as c0, $l as c1, P1 as c2, Z1 as c3, oa as c4, Kr as c5, yo as c6, qd as c7, Oi as c8, Fe as d, hl as e, ye as f, qc as g, P as h, Oe as i, E as j, X as k, x as l, N as m, se as n, U as o, ep as p, zt as q, Ze as r, ne as s, T as t, ze as u, He as v, K as w, gt as x, du as y, Ho as z
};