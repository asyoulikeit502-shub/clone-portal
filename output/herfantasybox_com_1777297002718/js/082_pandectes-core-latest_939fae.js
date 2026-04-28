var PandectesCore = function(e) {
  Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  });
  var t = Array.isArray,
    n = Array.prototype.indexOf,
    r = Array.prototype.includes,
    a = Array.from,
    i = Object.keys,
    o = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    l = Object.getOwnPropertyDescriptors,
    c = Object.prototype,
    d = Array.prototype,
    u = Object.getPrototypeOf,
    f = Object.isExtensible,
    p = () => {};

  function v() {
    var e, t;
    return {
      promise: new Promise((n, r) => {
        e = n, t = r
      }),
      resolve: e,
      reject: t
    }
  }

  function h(e, t, n = !1) {
    return void 0 === e ? n ? t() : t : e
  }
  var g = 1024,
    m = 2048,
    w = 4096,
    b = 8192,
    y = 32768,
    x = 1 << 25,
    k = 65536,
    _ = 1 << 19,
    S = 1 << 25,
    A = 65536,
    C = 1 << 21,
    M = 1 << 23,
    P = Symbol("$state"),
    z = Symbol("legacy props"),
    E = Symbol(""),
    j = (Symbol("proxy path"), new class extends Error {
      name = "StaleReactionError";
      message = "The reaction that called `getAbortSignal()` was re-run or destroyed"
    }),
    T = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");

  function $(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component")
  }

  function L(e, t, n) {
    throw new Error("https://svelte.dev/e/each_key_duplicate")
  }
  var O = {},
    B = Symbol(),
    N = (Symbol("filename"), "http://www.w3.org/2000/svg");

  function D(e) {
    console.warn("https://svelte.dev/e/hydration_mismatch")
  }
  var R, q = !1;

  function I(e) {
    q = e
  }

  function V(e) {
    if (null === e) throw D(), O;
    return R = e
  }

  function H() {
    return V(gt(R))
  }

  function U(e) {
    if (q) {
      if (null !== gt(R)) throw D(), O;
      R = e
    }
  }

  function F(e = 1) {
    if (q) {
      for (var t = e, n = R; t--;) n = gt(n);
      R = n
    }
  }

  function G(e = !0) {
    for (var t = 0, n = R;;) {
      if (8 === n.nodeType) {
        var r = n.data;
        if ("]" === r) {
          if (0 === t) return n;
          t -= 1
        } else("[" === r || "[!" === r || "[" === r[0] && !isNaN(Number(r.slice(1)))) && (t += 1)
      }
      var a = gt(n);
      e && n.remove(), n = a
    }
  }

  function W(e) {
    if (!e || 8 !== e.nodeType) throw D(), O;
    return e.data
  }

  function X(e) {
    return e === this.v
  }

  function K(e, t) {
    return e != e ? t == t : e !== t || null !== e && "object" == typeof e || "function" == typeof e
  }

  function J(e) {
    return !K(e, this.v)
  }
  var Z = !1;
  var Y = [];

  function Q(e, n, r, a, i = null, o = !1) {
    if ("object" == typeof e && null !== e) {
      var s = n.get(e);
      if (void 0 !== s) return s;
      if (e instanceof Map) return new Map(e);
      if (e instanceof Set) return new Set(e);
      if (t(e)) {
        var l = Array(e.length);
        n.set(e, l), null !== i && n.set(i, l);
        for (var d = 0; d < e.length; d += 1) {
          var f = e[d];
          d in e && (l[d] = Q(f, n, r, a, null, o))
        }
        return l
      }
      if (u(e) === c) {
        for (var p of (l = {}, n.set(e, l), null !== i && n.set(i, l), Object.keys(e))) l[p] = Q(e[p], n, r, a, null, o);
        return l
      }
      if (e instanceof Date) return structuredClone(e);
      if ("function" == typeof e.toJSON && !o) return Q(e.toJSON(), n, r, a, e)
    }
    if (e instanceof EventTarget) return e;
    try {
      return structuredClone(e)
    } catch (v) {
      return e
    }
  }
  var ee = null;

  function te(e) {
    ee = e
  }

  function ne(e, t = !1, n) {
    ee = {
      p: ee,
      i: !1,
      c: null,
      e: null,
      s: e,
      x: null,
      r: rn,
      l: Z && !t ? {
        s: null,
        u: null,
        $: []
      } : null
    }
  }

  function re(e) {
    var t = ee,
      n = t.e;
    if (null !== n)
      for (var r of (t.e = null, n)) Tt(r);
    return void 0 !== e && (t.x = e), t.i = !0, ee = t.p, e ?? {}
  }

  function ae() {
    return !Z || null !== ee && null === ee.l
  }
  var ie = [];

  function oe() {
    var e = ie;
    ie = [],
      function(e) {
        for (var t = 0; t < e.length; t++) e[t]()
      }(e)
  }

  function se(e) {
    if (0 === ie.length && !xe) {
      var t = ie;
      queueMicrotask(() => {
        t === ie && oe()
      })
    }
    ie.push(e)
  }

  function le() {
    for (; ie.length > 0;) oe()
  }
  new WeakMap;

  function ce(e) {
    var t = rn;
    if (null === t) return en.f |= M, e;
    if (!(32768 & t.f || 4 & t.f)) throw e;
    de(e, t)
  }

  function de(e, t) {
    for (; null !== t;) {
      if (128 & t.f) {
        if (!(32768 & t.f)) throw e;
        try {
          return void t.b.error(e)
        } catch (n) {
          e = n
        }
      }
      t = t.parent
    }
    throw e
  }
  var ue = -7169;

  function fe(e, t) {
    e.f = e.f & ue | t
  }

  function pe(e) {
    512 & e.f || null === e.deps ? fe(e, g) : fe(e, w)
  }

  function ve(e) {
    if (null !== e)
      for (const t of e) 2 & t.f && 65536 & t.f && (t.f ^= A, ve(t.deps))
  }

  function he(e, t, n) {
    2048 & e.f ? t.add(e) : 4096 & e.f && n.add(e), ve(e.deps), fe(e, g)
  }
  var ge = !1;
  var me = new Set,
    we = null,
    be = null,
    ye = null,
    xe = !1,
    ke = !1,
    _e = null,
    Se = null,
    Ae = 0,
    Ce = 1,
    Me = class e {
      id = Ce++;
      current = new Map;
      previous = new Map;
      #e = new Set;
      #t = new Set;
      #n = 0;
      #r = 0;
      #a = null;
      #i = [];
      #o = new Set;
      #s = new Set;
      #l = new Map;
      is_fork = !1;
      #c = !1;
      #d() {
        return this.is_fork || this.#r > 0
      }
      skip_effect(e) {
        this.#l.has(e) || this.#l.set(e, {
          d: [],
          m: []
        })
      }
      unskip_effect(e) {
        var t = this.#l.get(e);
        if (t) {
          for (var n of (this.#l.delete(e), t.d)) fe(n, m), this.schedule(n);
          for (n of t.m) fe(n, w), this.schedule(n)
        }
      }
      #u() {
        if (Ae++ > 1e3 && (me.delete(this), function() {
            try {
              ! function() {
                throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
              }()
            } catch (e) {
              0,
              de(e, ye)
            }
          }()), !this.#d()) {
          for (const e of this.#o) this.#s.delete(e), fe(e, m), this.schedule(e);
          for (const e of this.#s) fe(e, w), this.schedule(e)
        }
        const t = this.#i;
        this.#i = [], this.apply();
        var n = _e = [],
          r = [],
          a = Se = [];
        for (const e of t) try {
          this.#f(e, n, r)
        } catch (s) {
          throw Oe(e), s
        }
        if (we = null, a.length > 0) {
          var i = e.ensure();
          for (const e of a) i.schedule(e)
        }
        if (_e = null, Se = null, this.#d()) {
          this.#p(r), this.#p(n);
          for (const [e, t] of this.#l) Le(e, t)
        } else {
          0 === this.#n && me.delete(this), this.#o.clear(), this.#s.clear();
          for (const e of this.#e) e(this);
          this.#e.clear(), Ee(r), Ee(n), this.#a?.resolve()
        }
        var o = we;
        if (this.#i.length > 0) {
          const e = o ??= this;
          e.#i.push(...this.#i.filter(t => !e.#i.includes(t)))
        }
        null !== o && (me.add(o), o.#u()), me.has(this) || this.#v()
      }
      #f(e, t, n) {
        e.f ^= g;
        for (var r = e.first; null !== r;) {
          var a = r.f,
            i = !!(96 & a);
          if (!(i && 1024 & a || 8192 & a || this.#l.has(r)) && null !== r.fn) {
            i ? r.f ^= g : 4 & a ? t.push(r) : gn(r) && (16 & a && this.#s.add(r), xn(r));
            var o = r.first;
            if (null !== o) {
              r = o;
              continue
            }
          }
          for (; null !== r;) {
            var s = r.next;
            if (null !== s) {
              r = s;
              break
            }
            r = r.parent
          }
        }
      }
      #p(e) {
        for (var t = 0; t < e.length; t += 1) he(e[t], this.#o, this.#s)
      }
      capture(e, t) {
        t === B || this.previous.has(e) || this.previous.set(e, t), 8388608 & e.f || (this.current.set(e, e.v), be?.set(e, e.v))
      }
      activate() {
        we = this
      }
      deactivate() {
        we = null, be = null
      }
      flush() {
        try {
          ke = !0, we = this, this.#u()
        } finally {
          Ae = 0, ye = null, _e = null, Se = null, ke = !1, we = null, be = null, Ke.clear()
        }
      }
      discard() {
        for (const e of this.#t) e(this);
        this.#t.clear(), me.delete(this)
      }
      #v() {
        for (const s of me) {
          var e = s.id < this.id,
            t = [];
          for (const [n, r] of this.current) {
            if (s.current.has(n)) {
              if (!e || r === s.current.get(n)) continue;
              s.current.set(n, r)
            }
            t.push(n)
          }
          var n = [...s.current.keys()].filter(e => !this.current.has(e));
          if (0 === n.length) e && s.discard();
          else if (t.length > 0) {
            0,
            s.activate();
            var r = new Set,
              a = new Map;
            for (var i of t) je(i, n, r, a);
            if (s.#i.length > 0) {
              for (var o of (s.apply(), s.#i)) s.#f(o, [], []);
              s.#i = []
            }
            s.deactivate()
          }
        }
      }
      increment(e) {
        this.#n += 1, e && (this.#r += 1)
      }
      decrement(e, t) {
        this.#n -= 1, e && (this.#r -= 1), this.#c || t || (this.#c = !0, se(() => {
          this.#c = !1, this.flush()
        }))
      }
      transfer_effects(e, t) {
        for (const n of e) this.#o.add(n);
        for (const n of t) this.#s.add(n);
        e.clear(), t.clear()
      }
      oncommit(e) {
        this.#e.add(e)
      }
      ondiscard(e) {
        this.#t.add(e)
      }
      settled() {
        return (this.#a ??= v()).promise
      }
      static ensure() {
        if (null === we) {
          const t = we = new e;
          ke || (me.add(we), xe || se(() => {
            we === t && t.flush()
          }))
        }
        return we
      }
      apply() {
        be = null
      }
      schedule(e) {
        if (ye = e, !(e.b?.is_pending && 16777228 & e.f) || 32768 & e.f) {
          for (var t = e; null !== t.parent;) {
            var n = (t = t.parent).f;
            if (!(null === _e || t !== rn || null !== en && 2 & en.f)) return;
            if (96 & n) {
              if (!(1024 & n)) return;
              t.f ^= g
            }
          }
          this.#i.push(t)
        } else e.b.defer_effect(e)
      }
    };

  function Pe(e) {
    var t = xe;
    xe = !0;
    try {
      var n;
      for (e && (null === we || we.is_fork || we.flush(), n = e());;) {
        if (le(), null === we) return n;
        we.flush()
      }
    } finally {
      xe = t
    }
  }
  var ze = null;

  function Ee(e) {
    var t = e.length;
    if (0 !== t) {
      for (var n = 0; n < t;) {
        var r = e[n++];
        if (!(24576 & r.f) && gn(r) && (ze = new Set, xn(r), null === r.deps && null === r.first && null === r.nodes && null === r.teardown && null === r.ac && Ut(r), ze?.size > 0)) {
          Ke.clear();
          for (const e of ze) {
            if (24576 & e.f) continue;
            const t = [e];
            let n = e.parent;
            for (; null !== n;) ze.has(n) && (ze.delete(n), t.push(n)), n = n.parent;
            for (let e = t.length - 1; e >= 0; e--) {
              const n = t[e];
              24576 & n.f || xn(n)
            }
          }
          ze.clear()
        }
      }
      ze = null
    }
  }

  function je(e, t, n, r) {
    if (!n.has(e) && (n.add(e), null !== e.reactions))
      for (const a of e.reactions) {
        const e = a.f;
        2 & e ? je(a, t, n, r) : 4194320 & e && !(2048 & e) && Te(a, t, r) && (fe(a, m), $e(a))
      }
  }

  function Te(e, t, n) {
    const a = n.get(e);
    if (void 0 !== a) return a;
    if (null !== e.deps)
      for (const i of e.deps) {
        if (r.call(t, i)) return !0;
        if (2 & i.f && Te(i, t, n)) return n.set(i, !0), !0
      }
    return n.set(e, !1), !1
  }

  function $e(e) {
    we.schedule(e)
  }

  function Le(e, t) {
    if (!(32 & e.f && 1024 & e.f)) {
      2048 & e.f ? t.d.push(e) : 4096 & e.f && t.m.push(e), fe(e, g);
      for (var n = e.first; null !== n;) Le(n, t), n = n.next
    }
  }

  function Oe(e) {
    fe(e, g);
    for (var t = e.first; null !== t;) Oe(t), t = t.next
  }

  function Be(e, t, n, r) {
    new Ne(e, t, n, r)
  }
  var Ne = class {
    parent;
    is_pending = !1;
    transform_error;
    #h;
    #g = q ? R : null;
    #m;
    #w;
    #b;
    #y = null;
    #x = null;
    #k = null;
    #_ = null;
    #S = 0;
    #A = 0;
    #C = !1;
    #o = new Set;
    #s = new Set;
    #M = null;
    #P = function(e) {
      let t, n = 0,
        r = Ze(0);
      return () => {
        zt() && (_n(r), Ot(() => (0 === n && (t = Cn(() => e(() => rt(r)))), n += 1, () => {
          se(() => {
            n -= 1, 0 === n && (t?.(), t = void 0, rt(r))
          })
        })))
      }
    }(() => (this.#M = Ze(this.#S), () => {
      this.#M = null
    }));
    constructor(e, t, n, r) {
      this.#h = e, this.#m = t, this.#w = e => {
        var t = rn;
        t.b = this, t.f |= 128, n(e)
      }, this.parent = rn.b, this.transform_error = r ?? this.parent?.transform_error ?? (e => e), this.#b = Nt(() => {
        if (q) {
          const e = this.#g;
          H();
          const t = "[!" === e.data;
          if (e.data.startsWith("[?")) {
            const t = JSON.parse(e.data.slice(2));
            this.#z(t)
          } else t ? this.#E() : this.#j()
        } else this.#T()
      }, 589824), q && (this.#h = R)
    }
    #j() {
      try {
        this.#y = Rt(() => this.#w(this.#h))
      } catch (e) {
        this.error(e)
      }
    }
    #z(e) {
      const t = this.#m.failed;
      t && (this.#k = Rt(() => {
        t(this.#h, () => e, () => () => {})
      }))
    }
    #E() {
      const e = this.#m.pending;
      e && (this.is_pending = !0, this.#x = Rt(() => e(this.#h)), se(() => {
        var e = this.#_ = document.createDocumentFragment(),
          t = vt();
        e.append(t), this.#y = this.#$(() => Rt(() => this.#w(t))), 0 === this.#A && (this.#h.before(e), this.#_ = null, Ft(this.#x, () => {
          this.#x = null
        }), this.#L(we))
      }))
    }
    #T() {
      try {
        if (this.is_pending = this.has_pending_snippet(), this.#A = 0, this.#S = 0, this.#y = Rt(() => {
            this.#w(this.#h)
          }), this.#A > 0) {
          var e = this.#_ = document.createDocumentFragment();
          Kt(this.#y, e);
          const t = this.#m.pending;
          this.#x = Rt(() => t(this.#h))
        } else this.#L(we)
      } catch (t) {
        this.error(t)
      }
    }
    #L(e) {
      this.is_pending = !1, e.transfer_effects(this.#o, this.#s)
    }
    defer_effect(e) {
      he(e, this.#o, this.#s)
    }
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered())
    }
    has_pending_snippet() {
      return !!this.#m.pending
    }
    #$(e) {
      var t = rn,
        n = en,
        r = ee;
      an(this.#b), nn(this.#b), te(this.#b.ctx);
      try {
        return Me.ensure(), e()
      } catch (a) {
        return ce(a), null
      } finally {
        an(t), nn(n), te(r)
      }
    }
    #O(e, t) {
      this.has_pending_snippet() ? (this.#A += e, 0 === this.#A && (this.#L(t), this.#x && Ft(this.#x, () => {
        this.#x = null
      }), this.#_ && (this.#h.before(this.#_), this.#_ = null))) : this.parent && this.parent.#O(e, t)
    }
    update_pending_count(e, t) {
      this.#O(e, t), this.#S += e, this.#M && !this.#C && (this.#C = !0, se(() => {
        this.#C = !1, this.#M && tt(this.#M, this.#S)
      }))
    }
    get_effect_pending() {
      return this.#P(), _n(this.#M)
    }
    error(e) {
      var t = this.#m.onerror;
      let n = this.#m.failed;
      if (!t && !n) throw e;
      this.#y && (Vt(this.#y), this.#y = null), this.#x && (Vt(this.#x), this.#x = null), this.#k && (Vt(this.#k), this.#k = null), q && (V(this.#g), F(), V(G()));
      var r = !1,
        a = !1;
      const i = () => {
          r ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (r = !0, a && function() {
            throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
          }(), null !== this.#k && Ft(this.#k, () => {
            this.#k = null
          }), this.#$(() => {
            this.#T()
          }))
        },
        o = r => {
          try {
            a = !0, t?.(r, i), a = !1
          } catch (e) {
            de(e, this.#b && this.#b.parent)
          }
          n && (this.#k = this.#$(() => {
            try {
              return Rt(() => {
                var e = rn;
                e.b = this, e.f |= 128, n(this.#h, () => r, () => i)
              })
            } catch (e) {
              return de(e, this.#b.parent), null
            }
          }))
        };
      se(() => {
        var t;
        try {
          t = this.transform_error(e)
        } catch (n) {
          return void de(n, this.#b && this.#b.parent)
        }
        null !== t && "object" == typeof t && "function" == typeof t.then ? t.then(o, e => de(e, this.#b && this.#b.parent)) : o(t)
      })
    }
  };

  function De(e, t, n, r) {
    const a = ae() ? Ie : He;
    var i = e.filter(e => !e.settled);
    if (0 !== n.length || 0 !== i.length) {
      var o = rn,
        s = function() {
          var e = rn,
            t = en,
            n = ee,
            r = we;
          return function(a = !0) {
            an(e), nn(t), te(n), !a || 16384 & e.f || (r?.activate(), r?.apply())
          }
        }(),
        l = 1 === i.length ? i[0].promise : i.length > 1 ? Promise.all(i.map(e => e.promise)) : null;
      if (0 !== n.length) {
        var c = qe();
        l ? l.then(() => {
          s(), u(), Re()
        }) : u()
      } else l.then(() => d(t.map(a)))
    } else r(t.map(a));

    function d(e) {
      s();
      try {
        r(e)
      } catch (t) {
        16384 & o.f || de(t, o)
      }
      Re()
    }

    function u() {
      Promise.all(n.map(e => function(e) {
        let t = rn;
        null === t && function() {
          throw new Error("https://svelte.dev/e/async_derived_orphan")
        }();
        var n = void 0,
          r = Ze(B);
        0;
        var a = !en,
          i = new Map;
        (function(e) {
          Pt(4718592, e)
        })(() => {
          var o = rn,
            s = v();
          n = s.promise;
          try {
            Promise.resolve(e()).then(s.resolve, s.reject).finally(Re)
          } catch (u) {
            s.reject(u), Re()
          }
          var l = we;
          if (a) {
            if (32768 & o.f) var c = qe();
            if (t.b.is_rendered()) i.get(l)?.reject(j), i.delete(l);
            else {
              for (const e of i.values()) e.reject(j);
              i.clear()
            }
            i.set(l, s)
          }
          const d = (e, t = void 0) => {
            if (c && c(t === j), !(t === j || 16384 & o.f)) {
              if (l.activate(), t) r.f |= M, tt(r, t);
              else {
                8388608 & r.f && (r.f ^= M), tt(r, e);
                for (const [e, t] of i) {
                  if (i.delete(e), e === l) break;
                  t.reject(j)
                }
                0
              }
              l.deactivate()
            }
          };
          s.promise.then(d, e => d(null, e || "unknown"))
        }), Et(() => {
          for (const e of i.values()) e.reject(j)
        }), !1;
        return new Promise(e => {
          function t(a) {
            function i() {
              a === n ? e(r) : t(n)
            }
            a.then(i, i)
          }
          t(n)
        })
      }(e))).then(e => d([...t.map(a), ...e])).catch(e => de(e, o)).finally(() => c())
    }
  }

  function Re(e = !0) {
    an(null), nn(null), te(null), e && we?.deactivate()
  }

  function qe() {
    var e = rn.b,
      t = we,
      n = e.is_rendered();
    return e.update_pending_count(1, t), t.increment(n), (r = !1) => {
      e.update_pending_count(-1, t), t.decrement(n, r)
    }
  }
  new Set;

  function Ie(e) {
    var t = null !== en && 2 & en.f ? en : null;
    null !== rn && (rn.f |= _);
    const n = {
      ctx: ee,
      deps: null,
      effects: null,
      equals: X,
      f: 2050,
      fn: e,
      reactions: null,
      rv: 0,
      v: B,
      wv: 0,
      parent: t ?? rn,
      ac: null
    };
    return n
  }

  function Ve(e) {
    const t = Ie(e);
    return sn(t), t
  }

  function He(e) {
    const t = Ie(e);
    return t.equals = J, t
  }

  function Ue(e) {
    var t = e.effects;
    if (null !== t) {
      e.effects = null;
      for (var n = 0; n < t.length; n += 1) Vt(t[n])
    }
  }

  function Fe(e) {
    var t, n = rn;
    an(function(e) {
      for (var t = e.parent; null !== t;) {
        if (!(2 & t.f)) return 16384 & t.f ? null : t;
        t = t.parent
      }
      return null
    }(e));
    try {
      e.f &= -65537, Ue(e), t = wn(e)
    } finally {
      an(n)
    }
    return t
  }

  function Ge(e) {
    var t = e.v,
      n = Fe(e);
    e.equals(n) || (e.wv = hn(), we?.is_fork && null !== e.deps || (e.v = n, we?.capture(e, t), null !== e.deps)) ? Yt || (null !== be ? (zt() || we?.is_fork) && be.set(e, n) : pe(e)) : fe(e, g)
  }

  function We(e) {
    if (null !== e.effects)
      for (const t of e.effects) t.teardown && xn(t)
  }
  var Xe = new Set,
    Ke = new Map;
  var Je = !1;

  function Ze(e, t) {
    var n = {
      f: 0,
      v: e,
      reactions: null,
      equals: X,
      rv: 0,
      wv: 0
    };
    return n
  }

  function Ye(e, t) {
    const n = Ze(e);
    return sn(n), n
  }

  function Qe(e, t = !1, n = !0) {
    const r = Ze(e);
    return t || (r.equals = J), Z && n && null !== ee && null !== ee.l && (ee.l.s ??= []).push(r), r
  }

  function et(e, t, n = !1) {
    null !== en && (!tn || 131072 & en.f) && ae() && 4325394 & en.f && (null === on || !r.call(on, e)) && function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation")
    }();
    let a = n ? it(t) : t;
    return tt(e, a, Se)
  }

  function tt(e, t, n = null) {
    if (!e.equals(t)) {
      var r = e.v;
      Yt ? Ke.set(e, t) : Ke.set(e, r), e.v = t;
      var a = Me.ensure();
      if (a.capture(e, r), 2 & e.f) {
        const t = e;
        2048 & e.f && Fe(t), null === be && pe(t)
      }
      e.wv = hn(), at(e, m, n), ae() && null !== rn && 1024 & rn.f && !(96 & rn.f) && (null === dn ? function(e) {
        dn = e
      }([e]) : dn.push(e)), !a.is_fork && Xe.size > 0 && !Je && nt()
    }
    return t
  }

  function nt() {
    Je = !1;
    for (const e of Xe) 1024 & e.f && fe(e, w), gn(e) && xn(e);
    Xe.clear()
  }

  function rt(e) {
    et(e, e.v + 1)
  }

  function at(e, t, n) {
    var r = e.reactions;
    if (null !== r)
      for (var a = ae(), i = r.length, o = 0; o < i; o++) {
        var s = r[o],
          l = s.f;
        if (a || s !== rn) {
          0;
          var c = 0 === (l & m);
          if (c && fe(s, t), 2 & l) {
            var d = s;
            be?.delete(d), 65536 & l || (512 & l && (s.f |= A), at(d, w, n))
          } else if (c) {
            var u = s;
            16 & l && null !== ze && ze.add(u), null !== n ? n.push(u) : $e(u)
          }
        }
      }
  }

  function it(e) {
    if ("object" != typeof e || null === e || P in e) return e;
    const n = u(e);
    if (n !== c && n !== d) return e;
    var r = new Map,
      a = t(e),
      i = Ye(0),
      o = pn,
      l = e => {
        if (pn === o) return e();
        var t = en,
          n = pn;
        nn(null), vn(o);
        var r = e();
        return nn(t), vn(n), r
      };
    a && r.set("length", Ye(e.length));
    return new Proxy(e, {
      defineProperty(e, t, n) {
        "value" in n && !1 !== n.configurable && !1 !== n.enumerable && !1 !== n.writable || function() {
          throw new Error("https://svelte.dev/e/state_descriptors_fixed")
        }();
        var a = r.get(t);
        return void 0 === a ? l(() => {
          var e = Ye(n.value);
          return r.set(t, e), e
        }) : et(a, n.value, !0), !0
      },
      deleteProperty(e, t) {
        var n = r.get(t);
        if (void 0 === n) {
          if (t in e) {
            const e = l(() => Ye(B));
            r.set(t, e), rt(i)
          }
        } else et(n, B), rt(i);
        return !0
      },
      get(t, n, a) {
        if (n === P) return e;
        var i = r.get(n),
          o = n in t;
        if (void 0 !== i || o && !s(t, n)?.writable || (i = l(() => {
            var e = Ye(it(o ? t[n] : B));
            return e
          }), r.set(n, i)), void 0 !== i) {
          var c = _n(i);
          return c === B ? void 0 : c
        }
        return Reflect.get(t, n, a)
      },
      getOwnPropertyDescriptor(e, t) {
        var n = Reflect.getOwnPropertyDescriptor(e, t);
        if (n && "value" in n) {
          var a = r.get(t);
          a && (n.value = _n(a))
        } else if (void 0 === n) {
          var i = r.get(t),
            o = i?.v;
          if (void 0 !== i && o !== B) return {
            enumerable: !0,
            configurable: !0,
            value: o,
            writable: !0
          }
        }
        return n
      },
      has(e, t) {
        if (t === P) return !0;
        var n = r.get(t),
          a = void 0 !== n && n.v !== B || Reflect.has(e, t);
        return !((void 0 !== n || null !== rn && (!a || s(e, t)?.writable)) && (void 0 === n && (n = l(() => {
          var n = Ye(a ? it(e[t]) : B);
          return n
        }), r.set(t, n)), _n(n) === B)) && a
      },
      set(e, t, n, o) {
        var c = r.get(t),
          d = t in e;
        if (a && "length" === t)
          for (var u = n; u < c.v; u += 1) {
            var f = r.get(u + "");
            void 0 !== f ? et(f, B) : u in e && (f = l(() => Ye(B)), r.set(u + "", f))
          }
        void 0 === c ? d && !s(e, t)?.writable || (et(c = l(() => Ye(void 0)), it(n)), r.set(t, c)) : (d = c.v !== B, et(c, l(() => it(n))));
        var p = Reflect.getOwnPropertyDescriptor(e, t);
        if (p?.set && p.set.call(o, n), !d) {
          if (a && "string" == typeof t) {
            var v = r.get("length"),
              h = Number(t);
            Number.isInteger(h) && h >= v.v && et(v, h + 1)
          }
          rt(i)
        }
        return !0
      },
      ownKeys(e) {
        _n(i);
        var t = Reflect.ownKeys(e).filter(e => {
          var t = r.get(e);
          return void 0 === t || t.v !== B
        });
        for (var [n, a] of r) a.v === B || n in e || t.push(n);
        return t
      },
      setPrototypeOf() {
        ! function() {
          throw new Error("https://svelte.dev/e/state_prototype_fixed")
        }()
      }
    })
  }

  function ot(e) {
    try {
      if (null !== e && "object" == typeof e && P in e) return e[P]
    } catch {}
    return e
  }

  function st(e, t) {
    return Object.is(ot(e), ot(t))
  }
  var lt, ct, dt, ut, ft;
  new Set(["copyWithin", "fill", "pop", "push", "reverse", "shift", "sort", "splice", "unshift"]);

  function pt() {
    if (void 0 === lt) {
      lt = window, ct = document, dt = /Firefox/.test(navigator.userAgent);
      var e = Element.prototype,
        t = Node.prototype,
        n = Text.prototype;
      ut = s(t, "firstChild").get, ft = s(t, "nextSibling").get, f(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), f(n) && (n.__t = void 0)
    }
  }

  function vt(e = "") {
    return document.createTextNode(e)
  }

  function ht(e) {
    return ut.call(e)
  }

  function gt(e) {
    return ft.call(e)
  }

  function mt(e, t) {
    if (!q) return ht(e);
    var n = ht(R);
    if (null === n) n = R.appendChild(vt());
    else if (t && 3 !== n.nodeType) {
      var r = vt();
      return n?.before(r), V(r), r
    }
    return t && kt(n), V(n), n
  }

  function wt(e, t = !1) {
    if (!q) {
      var n = ht(e);
      return n instanceof Comment && "" === n.data ? gt(n) : n
    }
    if (t) {
      if (3 !== R?.nodeType) {
        var r = vt();
        return R?.before(r), V(r), r
      }
      kt(R)
    }
    return R
  }

  function bt(e, t = 1, n = !1) {
    let r = q ? R : e;
    for (var a; t--;) a = r, r = gt(r);
    if (!q) return r;
    if (n) {
      if (3 !== r?.nodeType) {
        var i = vt();
        return null === r ? a?.after(i) : r.before(i), V(i), i
      }
      kt(r)
    }
    return V(r), r
  }

  function yt(e) {
    e.textContent = ""
  }

  function xt(e, t, n) {
    let r = n ? {
      is: n
    } : void 0;
    return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r)
  }

  function kt(e) {
    if (e.nodeValue.length < 65536) return;
    let t = e.nextSibling;
    for (; null !== t && 3 === t.nodeType;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling
  }

  function _t(e, t) {
    if (t) {
      const t = document.body;
      e.autofocus = !0, se(() => {
        document.activeElement === t && e.focus()
      })
    }
  }
  var St = !1;

  function At() {
    St || (St = !0, document.addEventListener("reset", e => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (const t of e.target.elements) t.__on_r?.()
      })
    }, {
      capture: !0
    }))
  }

  function Ct(e) {
    var t = en,
      n = rn;
    nn(null), an(null);
    try {
      return e()
    } finally {
      nn(t), an(n)
    }
  }

  function Mt(e) {
    null === rn && (null === en && function() {
      throw new Error("https://svelte.dev/e/effect_orphan")
    }(), function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
    }()), Yt && function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown")
    }()
  }

  function Pt(e, t) {
    var n = rn;
    null !== n && 8192 & n.f && (e |= b);
    var r = {
      ctx: ee,
      deps: null,
      nodes: null,
      f: e | m | 512,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: n,
      b: n && n.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null
    };
    var a = r;
    if (4 & e) null !== _e ? _e.push(r) : Me.ensure().schedule(r);
    else if (null !== t) {
      try {
        xn(r)
      } catch (a) {
        throw Vt(r), a
      }
      null !== a.deps || null !== a.teardown || null !== a.nodes || a.first !== a.last || 524288 & a.f || (a = a.first, 16 & e && 65536 & e && null !== a && (a.f |= k))
    }
    if (null !== a && (a.parent = n, null !== n && function(e, t) {
        var n = t.last;
        null === n ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
      }(a, n), null !== en && 2 & en.f && !(64 & e))) {
      var i = en;
      (i.effects ??= []).push(a)
    }
    return r
  }

  function zt() {
    return null !== en && !tn
  }

  function Et(e) {
    const t = Pt(8, null);
    return fe(t, g), t.teardown = e, t
  }

  function jt(e) {
    Mt();
    var t = rn.f;
    if (en || !(32 & t) || 32768 & t) return Tt(e);
    var n = ee;
    (n.e ??= []).push(e)
  }

  function Tt(e) {
    return Pt(1048580, e)
  }

  function $t(e) {
    Me.ensure();
    const t = Pt(524352, e);
    return () => {
      Vt(t)
    }
  }

  function Lt(e) {
    return Pt(4, e)
  }

  function Ot(e, t = 0) {
    return Pt(8 | t, e)
  }

  function Bt(e, t = [], n = [], r = []) {
    De(r, t, n, t => {
      Pt(8, () => e(...t.map(_n)))
    })
  }

  function Nt(e, t = 0) {
    var n = Pt(16 | t, e);
    return n
  }

  function Dt(e, t = 0) {
    var n = Pt(16777216 | t, e);
    return n
  }

  function Rt(e) {
    return Pt(524320, e)
  }

  function qt(e) {
    var t = e.teardown;
    if (null !== t) {
      const e = Yt,
        n = en;
      Qt(!0), nn(null);
      try {
        t.call(null)
      } finally {
        Qt(e), nn(n)
      }
    }
  }

  function It(e, t = !1) {
    var n = e.first;
    for (e.first = e.last = null; null !== n;) {
      const e = n.ac;
      null !== e && Ct(() => {
        e.abort(j)
      });
      var r = n.next;
      64 & n.f ? n.parent = null : Vt(n, t), n = r
    }
  }

  function Vt(e, t = !0) {
    var n = !1;
    (t || 262144 & e.f) && null !== e.nodes && null !== e.nodes.end && (Ht(e.nodes.start, e.nodes.end), n = !0), fe(e, x), It(e, t && !n), yn(e, 0);
    var r = e.nodes && e.nodes.t;
    if (null !== r)
      for (const i of r) i.stop();
    qt(e), e.f ^= x, e.f |= 16384;
    var a = e.parent;
    null !== a && null !== a.first && Ut(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null
  }

  function Ht(e, t) {
    for (; null !== e;) {
      var n = e === t ? null : gt(e);
      e.remove(), e = n
    }
  }

  function Ut(e) {
    var t = e.parent,
      n = e.prev,
      r = e.next;
    null !== n && (n.next = r), null !== r && (r.prev = n), null !== t && (t.first === e && (t.first = r), t.last === e && (t.last = n))
  }

  function Ft(e, t, n = !0) {
    var r = [];
    Gt(e, r, !0);
    var a = () => {
        n && Vt(e), t && t()
      },
      i = r.length;
    if (i > 0) {
      var o = () => --i || a();
      for (var s of r) s.out(o)
    } else a()
  }

  function Gt(e, t, n) {
    if (!(8192 & e.f)) {
      e.f ^= b;
      var r = e.nodes && e.nodes.t;
      if (null !== r)
        for (const e of r)(e.is_global || n) && t.push(e);
      for (var a = e.first; null !== a;) {
        var i = a.next;
        Gt(a, t, !!(!!(65536 & a.f) || !!(32 & a.f) && !!(16 & e.f)) && n), a = i
      }
    }
  }

  function Wt(e) {
    Xt(e, !0)
  }

  function Xt(e, t) {
    if (8192 & e.f) {
      e.f ^= b, 1024 & e.f || (fe(e, m), Me.ensure().schedule(e));
      for (var n = e.first; null !== n;) {
        var r = n.next;
        Xt(n, !!(!!(65536 & n.f) || !!(32 & n.f)) && t), n = r
      }
      var a = e.nodes && e.nodes.t;
      if (null !== a)
        for (const e of a)(e.is_global || t) && e.in()
    }
  }

  function Kt(e, t) {
    if (e.nodes)
      for (var n = e.nodes.start, r = e.nodes.end; null !== n;) {
        var a = n === r ? null : gt(n);
        t.append(n), n = a
      }
  }
  var Jt = null,
    Zt = !1,
    Yt = !1;

  function Qt(e) {
    Yt = e
  }
  var en = null,
    tn = !1;

  function nn(e) {
    en = e
  }
  var rn = null;

  function an(e) {
    rn = e
  }
  var on = null;

  function sn(e) {
    null !== en && (null === on ? on = [e] : on.push(e))
  }
  var ln = null,
    cn = 0,
    dn = null;
  var un = 1,
    fn = 0,
    pn = fn;

  function vn(e) {
    pn = e
  }

  function hn() {
    return ++un
  }

  function gn(e) {
    var t = e.f;
    if (2048 & t) return !0;
    if (2 & t && (e.f &= -65537), 4096 & t) {
      for (var n = e.deps, r = n.length, a = 0; a < r; a++) {
        var i = n[a];
        if (gn(i) && Ge(i), i.wv > e.wv) return !0
      }
      512 & t && null === be && fe(e, g)
    }
    return !1
  }

  function mn(e, t, n = !0) {
    var a = e.reactions;
    if (null !== a && (null === on || !r.call(on, e)))
      for (var i = 0; i < a.length; i++) {
        var o = a[i];
        2 & o.f ? mn(o, t, !1) : t === o && (n ? fe(o, m) : 1024 & o.f && fe(o, w), $e(o))
      }
  }

  function wn(e) {
    var t = ln,
      n = cn,
      r = dn,
      a = en,
      i = on,
      o = ee,
      s = tn,
      l = pn,
      c = e.f;
    ln = null, cn = 0, dn = null, en = 96 & c ? null : e, on = null, te(e.ctx), tn = !1, pn = ++fn, null !== e.ac && (Ct(() => {
      e.ac.abort(j)
    }), e.ac = null);
    try {
      e.f |= C;
      var d = (0, e.fn)();
      e.f |= y;
      var u = e.deps,
        f = we?.is_fork;
      if (null !== ln) {
        var p;
        if (f || yn(e, cn), null !== u && cn > 0)
          for (u.length = cn + ln.length, p = 0; p < ln.length; p++) u[cn + p] = ln[p];
        else e.deps = u = ln;
        if (zt() && 512 & e.f)
          for (p = cn; p < u.length; p++)(u[p].reactions ??= []).push(e)
      } else !f && null !== u && cn < u.length && (yn(e, cn), u.length = cn);
      if (ae() && null !== dn && !tn && null !== u && !(6146 & e.f))
        for (p = 0; p < dn.length; p++) mn(dn[p], e);
      if (null !== a && a !== e) {
        if (fn++, null !== a.deps)
          for (let e = 0; e < n; e += 1) a.deps[e].rv = fn;
        if (null !== t)
          for (const e of t) e.rv = fn;
        null !== dn && (null === r ? r = dn : r.push(...dn))
      }
      return 8388608 & e.f && (e.f ^= M), d
    } catch (v) {
      return ce(v)
    } finally {
      e.f ^= C, ln = t, cn = n, dn = r, en = a, on = i, te(o), tn = s, pn = l
    }
  }

  function bn(e, t) {
    let a = t.reactions;
    if (null !== a) {
      var i = n.call(a, e);
      if (-1 !== i) {
        var o = a.length - 1;
        0 === o ? a = t.reactions = null : (a[i] = a[o], a.pop())
      }
    }
    if (null === a && 2 & t.f && (null === ln || !r.call(ln, t))) {
      var s = t;
      512 & s.f && (s.f ^= 512, s.f &= -65537), pe(s),
        function(e) {
          if (null !== e.effects)
            for (const t of e.effects)(t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(j), t.teardown = p, t.ac = null, yn(t, 0), It(t))
        }(s), yn(s, 0)
    }
  }

  function yn(e, t) {
    var n = e.deps;
    if (null !== n)
      for (var r = t; r < n.length; r++) bn(e, n[r])
  }

  function xn(e) {
    var t = e.f;
    if (!(16384 & t)) {
      fe(e, g);
      var n = rn,
        r = Zt;
      rn = e, Zt = !0;
      try {
        16777232 & t ? function(e) {
          for (var t = e.first; null !== t;) {
            var n = t.next;
            32 & t.f || Vt(t), t = n
          }
        }(e) : It(e), qt(e);
        var a = wn(e);
        e.teardown = "function" == typeof a ? a : null, e.wv = un
      } finally {
        Zt = r, rn = n
      }
    }
  }
  async function kn() {
    await Promise.resolve(), Pe()
  }

  function _n(e) {
    var t = !!(2 & e.f);
    if (Jt?.add(e), null !== en && !tn && !(null !== rn && 16384 & rn.f || null !== on && r.call(on, e))) {
      var n = en.deps;
      if (2097152 & en.f) e.rv < fn && (e.rv = fn, null === ln && null !== n && n[cn] === e ? cn++ : null === ln ? ln = [e] : ln.push(e));
      else {
        (en.deps ??= []).push(e);
        var a = e.reactions;
        null === a ? e.reactions = [en] : r.call(a, en) || a.push(en)
      }
    }
    if (Yt && Ke.has(e)) return Ke.get(e);
    if (t) {
      var i = e;
      if (Yt) {
        var o = i.v;
        return (1024 & i.f || null === i.reactions) && !An(i) || (o = Fe(i)), Ke.set(i, o), o
      }
      var s = !(512 & i.f) && !tn && null !== en && (Zt || !!(512 & en.f)),
        l = 0 === (i.f & y);
      gn(i) && (s && (i.f |= 512), Ge(i)), s && !l && (We(i), Sn(i))
    }
    if (be?.has(e)) return be.get(e);
    if (8388608 & e.f) throw e.v;
    return e.v
  }

  function Sn(e) {
    if (e.f |= 512, null !== e.deps)
      for (const t of e.deps)(t.reactions ??= []).push(e), 2 & t.f && !(512 & t.f) && (We(t), Sn(t))
  }

  function An(e) {
    if (e.v === B) return !0;
    if (null === e.deps) return !1;
    for (const t of e.deps) {
      if (Ke.has(t)) return !0;
      if (2 & t.f && An(t)) return !0
    }
    return !1
  }

  function Cn(e) {
    var t = tn;
    try {
      return tn = !0, e()
    } finally {
      tn = t
    }
  }

  function Mn(e, t = new Set) {
    if (!("object" != typeof e || null === e || e instanceof EventTarget || t.has(e))) {
      t.add(e), e instanceof Date && e.getTime();
      for (let a in e) try {
        Mn(e[a], t)
      } catch (n) {}
      const r = u(e);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const t = l(r);
        for (let r in t) {
          const a = t[r].get;
          if (a) try {
            a.call(e)
          } catch (n) {}
        }
      }
    }
  }

  function Pn(e) {
    return e.endsWith("capture") && "gotpointercapture" !== e && "lostpointercapture" !== e
  }
  var zn = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

  function En(e) {
    return zn.includes(e)
  }
  var jn = {
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject",
    novalidate: "noValidate",
    allowfullscreen: "allowFullscreen",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback"
  };

  function Tn(e) {
    return e = e.toLowerCase(), jn[e] ?? e
  }
  var $n = ["touchstart", "touchmove"];

  function Ln(e) {
    return $n.includes(e)
  }
  var On = ["textarea", "script", "style", "title"];
  var Bn = Symbol("events"),
    Nn = new Set,
    Dn = new Set;

  function Rn(e, t, n, r = {}) {
    function a(e) {
      if (r.capture || Hn.call(t, e), !e.cancelBubble) return Ct(() => n?.call(this, e))
    }
    return e.startsWith("pointer") || e.startsWith("touch") || "wheel" === e ? se(() => {
      t.addEventListener(e, a, r)
    }) : t.addEventListener(e, a, r), a
  }

  function qn(e, t, n, r, a) {
    var i = {
        capture: r,
        passive: a
      },
      o = Rn(e, t, n, i);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Et(() => {
      t.removeEventListener(e, o, i)
    })
  }

  function In(e, t, n) {
    (t[Bn] ??= {})[e] = n
  }

  function Vn(e) {
    for (var t = 0; t < e.length; t++) Nn.add(e[t]);
    for (var n of Dn) n(e)
  }

  function Hn(e) {
    var t = this,
      n = t.ownerDocument,
      r = e.type,
      a = e.composedPath?.() || [],
      i = a[0] || e.target,
      s = 0,
      l = e === e && e[Bn];
    if (l) {
      var c = a.indexOf(l);
      if (-1 !== c && (t === document || t === window)) return void(e[Bn] = t);
      var d = a.indexOf(t);
      if (-1 === d) return;
      c <= d && (s = c)
    }
    if ((i = a[s] || e.target) !== t) {
      o(e, "currentTarget", {
        configurable: !0,
        get: () => i || n
      });
      var u = en,
        f = rn;
      nn(null), an(null);
      try {
        for (var p, v = []; null !== i;) {
          var h = i.assignedSlot || i.parentNode || i.host || null;
          try {
            var g = i[Bn]?.[r];
            null == g || i.disabled && e.target !== i || g.call(i, e)
          } catch (m) {
            p ? v.push(m) : p = m
          }
          if (e.cancelBubble || h === t || null === h) break;
          i = h
        }
        if (p) {
          for (let e of v) queueMicrotask(() => {
            throw e
          });
          throw p
        }
      } finally {
        e[Bn] = t, delete e.currentTarget, nn(u), an(f)
      }
    }
  }
  var Un = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    createHTML: e => e
  });

  function Fn(e) {
    var t = xt("template");
    return t.innerHTML = function(e) {
      return Un?.createHTML(e) ?? e
    }(e.replaceAll("<!>", "\x3c!----\x3e")), t.content
  }

  function Gn(e, t) {
    var n = rn;
    null === n.nodes && (n.nodes = {
      start: e,
      end: t,
      a: null,
      t: null
    })
  }

  function Wn(e, t) {
    var n, r = !!(1 & t),
      a = !!(2 & t),
      i = !e.startsWith("<!>");
    return () => {
      if (q) return Gn(R, null), R;
      void 0 === n && (n = Fn(i ? e : "<!>" + e), r || (n = ht(n)));
      var t = a || dt ? document.importNode(n, !0) : n.cloneNode(!0);
      r ? Gn(ht(t), t.lastChild) : Gn(t, t);
      return t
    }
  }

  function Xn(e, t) {
    return function(e, t, n = "svg") {
      var r, a = !e.startsWith("<!>"),
        i = !!(1 & t),
        o = `<${n}>${a?e:"<!>"+e}</${n}>`;
      return () => {
        if (q) return Gn(R, null), R;
        if (!r) {
          var e = ht(Fn(o));
          if (i)
            for (r = document.createDocumentFragment(); ht(e);) r.appendChild(ht(e));
          else r = ht(e)
        }
        var t = r.cloneNode(!0);
        return i ? Gn(ht(t), t.lastChild) : Gn(t, t), t
      }
    }(e, t, "svg")
  }

  function Kn() {
    if (q) return Gn(R, null), R;
    var e = document.createDocumentFragment(),
      t = document.createComment(""),
      n = vt();
    return e.append(t, n), Gn(t, n), e
  }

  function Jn(e, t) {
    if (q) {
      var n = rn;
      return 32768 & n.f && null !== n.nodes.end || (n.nodes.end = R), void H()
    }
    null !== e && e.before(t)
  }

  function Zn(e) {
    0
  }

  function Yn(e, t) {
    var n = null == t ? "" : "object" == typeof t ? `${t}` : t;
    n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`)
  }

  function Qn(e, t) {
    return nr(e, t)
  }

  function er(e, t) {
    pt(), t.intro = t.intro ?? !1;
    const n = t.target,
      r = q,
      a = R;
    try {
      for (var i = ht(n); i && (8 !== i.nodeType || "[" !== i.data);) i = gt(i);
      if (!i) throw O;
      I(!0), V(i);
      const r = nr(e, {
        ...t,
        anchor: i
      });
      return I(!1), r
    } catch (o) {
      if (o instanceof Error && o.message.split("\n").some(e => e.startsWith("https://svelte.dev/e/"))) throw o;
      return o !== O && console.warn("Failed to hydrate: ", o), !1 === t.recover && function() {
        throw new Error("https://svelte.dev/e/hydration_failed")
      }(), pt(), yt(n), I(!1), Qn(e, t)
    } finally {
      I(r), V(a)
    }
  }
  var tr = new Map;

  function nr(e, {
    target: t,
    anchor: n,
    props: r = {},
    events: i,
    context: o,
    intro: s = !0,
    transformError: l
  }) {
    pt();
    var c = void 0,
      d = function(e) {
        Me.ensure();
        const t = Pt(524352, e);
        return (e = {}) => new Promise(n => {
          e.outro ? Ft(t, () => {
            Vt(t), n(void 0)
          }) : (Vt(t), n(void 0))
        })
      }(() => {
        var s = n ?? t.appendChild(vt());
        Be(s, {
          pending: () => {}
        }, t => {
          if (ne({}), o && (ee.c = o), i && (r.$$events = i), q && Gn(t, null), c = e(t, r) || {}, q && (rn.nodes.end = R, null === R || 8 !== R.nodeType || "]" !== R.data)) throw D(), O;
          re()
        }, l);
        var d = new Set,
          u = e => {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              if (!d.has(r)) {
                d.add(r);
                var a = Ln(r);
                for (const e of [t, document]) {
                  var i = tr.get(e);
                  void 0 === i && (i = new Map, tr.set(e, i));
                  var o = i.get(r);
                  void 0 === o ? (e.addEventListener(r, Hn, {
                    passive: a
                  }), i.set(r, 1)) : i.set(r, o + 1)
                }
              }
            }
          };
        return u(a(Nn)), Dn.add(u), () => {
          for (var e of d)
            for (const n of [t, document]) {
              var r = tr.get(n),
                a = r.get(e);
              0 == --a ? (n.removeEventListener(e, Hn), r.delete(e), 0 === r.size && tr.delete(n)) : r.set(e, a)
            }
          Dn.delete(u), s !== n && s.parentNode?.removeChild(s)
        }
      });
    return rr.set(c, d), c
  }
  var rr = new WeakMap;

  function ar(e, t) {
    const n = rr.get(e);
    return n ? (rr.delete(e), n(t)) : Promise.resolve()
  }
  var ir, or = class {
    anchor;
    #B = new Map;
    #N = new Map;
    #D = new Map;
    #R = new Set;
    #q = !0;
    constructor(e, t = !0) {
      this.anchor = e, this.#q = t
    }
    #v = e => {
      if (this.#B.has(e)) {
        var t = this.#B.get(e),
          n = this.#N.get(t);
        if (n) Wt(n), this.#R.delete(t);
        else {
          var r = this.#D.get(t);
          r && (this.#N.set(t, r.effect), this.#D.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect)
        }
        for (const [t, n] of this.#B) {
          if (this.#B.delete(t), t === e) break;
          const r = this.#D.get(n);
          r && (Vt(r.effect), this.#D.delete(n))
        }
        for (const [e, r] of this.#N) {
          if (e === t || this.#R.has(e)) continue;
          const a = () => {
            if (Array.from(this.#B.values()).includes(e)) {
              var t = document.createDocumentFragment();
              Kt(r, t), t.append(vt()), this.#D.set(e, {
                effect: r,
                fragment: t
              })
            } else Vt(r);
            this.#R.delete(e), this.#N.delete(e)
          };
          this.#q || !n ? (this.#R.add(e), Ft(r, a, !1)) : a()
        }
      }
    };
    #I = e => {
      this.#B.delete(e);
      const t = Array.from(this.#B.values());
      for (const [n, r] of this.#D) t.includes(n) || (Vt(r.effect), this.#D.delete(n))
    };
    ensure(e, t) {
      var n = we;
      !t || this.#N.has(e) || this.#D.has(e) || this.#N.set(e, Rt(() => t(this.anchor)));
      this.#B.set(n, e), q && (this.anchor = R), this.#v(n)
    }
  };

  function sr(e, t, n = !1) {
    var r;
    q && (r = R, H());
    var a = new or(e);

    function i(e, t) {
      if (q) {
        var n = W(r);
        if (e !== parseInt(n.substring(1))) {
          var i = G();
          return V(i), a.anchor = i, I(!1), a.ensure(e, t), void I(!0)
        }
      }
      a.ensure(e, t)
    }
    Nt(() => {
      var e = !1;
      t((t, n = 0) => {
        e = !0, i(n, t)
      }), e || i(-1, null)
    }, n ? k : 0)
  }

  function lr(e, t) {
    return t
  }

  function cr(e, t, n = !0) {
    var r;
    if (e.pending.size > 0) {
      r = new Set;
      for (const t of e.pending.values())
        for (const n of t) r.add(e.items.get(n).e)
    }
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      r?.has(i) ? (i.f |= S, Kt(i, document.createDocumentFragment())) : Vt(t[a], n)
    }
  }

  function dr(e, n, r, i, o, s = null) {
    var l = e,
      c = new Map;
    if (4 & n) {
      var d = e;
      l = q ? V(ht(d)) : d.appendChild(vt())
    }
    q && H();
    var u, f = null,
      p = He(() => {
        var e = r();
        return t(e) ? e : null == e ? [] : a(e)
      }),
      v = new Map,
      h = !0;

    function g(e) {
      16384 & m.effect.f || (m.pending.delete(e), m.fallback = f, function(e, t, n, r, i) {
        var o, s, l, c, d, u = !!(8 & r),
          f = t.length,
          p = e.items,
          v = ur(e.effect.first),
          h = null,
          g = [],
          m = [];
        if (u)
          for (d = 0; d < f; d += 1) l = i(t[d], d), 33554432 & (c = p.get(l).e).f || (c.nodes?.a?.measure(), (s ??= new Set).add(c));
        for (d = 0; d < f; d += 1) {
          if (l = i(t[d], d), c = p.get(l).e, null !== e.outrogroups)
            for (const t of e.outrogroups) t.pending.delete(c), t.done.delete(c);
          if (8192 & c.f && (Wt(c), u && (c.nodes?.a?.unfix(), (s ??= new Set).delete(c))), 33554432 & c.f) {
            if (c.f ^= S, c !== v) {
              var w = h ? h.next : v;
              c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), vr(e, h, c), vr(e, c, w), pr(c, w, n), g = [], m = [], v = ur((h = c).next);
              continue
            }
            pr(c, null, n)
          }
          if (c !== v) {
            if (void 0 !== o && o.has(c)) {
              if (g.length < m.length) {
                var b, y = m[0];
                h = y.prev;
                var x = g[0],
                  k = g[g.length - 1];
                for (b = 0; b < g.length; b += 1) pr(g[b], y, n);
                for (b = 0; b < m.length; b += 1) o.delete(m[b]);
                vr(e, x.prev, k.next), vr(e, h, x), vr(e, k, y), v = y, h = k, d -= 1, g = [], m = []
              } else o.delete(c), pr(c, v, n), vr(e, c.prev, c.next), vr(e, c, null === h ? e.effect.first : h.next), vr(e, h, c), h = c;
              continue
            }
            for (g = [], m = []; null !== v && v !== c;)(o ??= new Set).add(v), m.push(v), v = ur(v.next);
            if (null === v) continue
          }
          33554432 & c.f || g.push(c), h = c, v = ur(c.next)
        }
        if (null !== e.outrogroups) {
          for (const t of e.outrogroups) 0 === t.pending.size && (cr(e, a(t.done)), e.outrogroups?.delete(t));
          0 === e.outrogroups.size && (e.outrogroups = null)
        }
        if (null !== v || void 0 !== o) {
          var _ = [];
          if (void 0 !== o)
            for (c of o) 8192 & c.f || _.push(c);
          for (; null !== v;) 8192 & v.f || v === e.fallback || _.push(v), v = ur(v.next);
          var A = _.length;
          if (A > 0) {
            var C = 4 & r && 0 === f ? n : null;
            if (u) {
              for (d = 0; d < A; d += 1) _[d].nodes?.a?.measure();
              for (d = 0; d < A; d += 1) _[d].nodes?.a?.fix()
            }! function(e, t, n) {
              for (var r, i = t.length, o = t.length, s = 0; s < i; s++) {
                let n = t[s];
                Ft(n, () => {
                  if (r) {
                    if (r.pending.delete(n), r.done.add(n), 0 === r.pending.size) {
                      var t = e.outrogroups;
                      cr(e, a(r.done)), t.delete(r), 0 === t.size && (e.outrogroups = null)
                    }
                  } else o -= 1
                }, !1)
              }
              if (0 === o) {
                var l = null !== n;
                if (l) {
                  var c = n,
                    d = c.parentNode;
                  yt(d), d.append(c), e.items.clear()
                }
                cr(e, t, !l)
              } else r = {
                pending: new Set(t),
                done: new Set
              }, (e.outrogroups ??= new Set).add(r)
            }(e, _, C)
          }
        }
        u && se(() => {
          if (void 0 !== s)
            for (c of s) c.nodes?.a?.apply()
        })
      }(m, u, l, n, i), null !== f && (0 === u.length ? 33554432 & f.f ? (f.f ^= S, pr(f, null, l)) : Wt(f) : Ft(f, () => {
        f = null
      })))
    }
    var m = {
      effect: Nt(() => {
        var e = (u = _n(p)).length;
        let t = !1;
        q && "[!" === W(l) != (0 === e) && (V(l = G()), I(!1), t = !0);
        for (var a = new Set, d = we, m = 0; m < e; m += 1) {
          q && 8 === R.nodeType && "]" === R.data && (l = R, t = !0, I(!1));
          var w = u[m],
            b = i(w, m),
            y = h ? null : c.get(b);
          y ? (y.v && tt(y.v, w), y.i && tt(y.i, m)) : (y = fr(c, h ? l : ir ??= vt(), w, b, m, o, n, r), h || (y.e.f |= S), c.set(b, y)), a.add(b)
        }
        0 === e && s && !f && (h ? f = Rt(() => s(l)) : (f = Rt(() => s(ir ??= vt()))).f |= S), e > a.size && L(), q && e > 0 && V(G()), h || (v.set(d, a), g(d)), t && I(!0), _n(p)
      }),
      flags: n,
      items: c,
      pending: v,
      outrogroups: null,
      fallback: f
    };
    h = !1, q && (l = R)
  }

  function ur(e) {
    for (; null !== e && !(32 & e.f);) e = e.next;
    return e
  }

  function fr(e, t, n, r, a, i, o, s) {
    var l = 1 & o ? 16 & o ? Ze(n) : Qe(n, !1, !1) : null,
      c = 2 & o ? Ze(a) : null;
    return {
      v: l,
      i: c,
      e: Rt(() => (i(t, l ?? n, c ?? a, s), () => {
        e.delete(r)
      }))
    }
  }

  function pr(e, t, n) {
    if (e.nodes)
      for (var r = e.nodes.start, a = e.nodes.end, i = !t || 33554432 & t.f ? n : t.nodes.start; null !== r;) {
        var o = gt(r);
        if (i.before(r), r === a) return;
        r = o
      }
  }

  function vr(e, t, n) {
    null === t ? e.effect.first = n : t.next = n, null === n ? e.effect.last = t : n.prev = t
  }

  function hr(e, t, n = !1, r = !1, a = !1, i = !1) {
    var o = e,
      s = "";
    if (n) {
      var l = e;
      q && (o = V(ht(l)))
    }
    Bt(() => {
      var e = rn;
      if (s !== (s = t() ?? "")) {
        if (n && !q) return e.nodes = null, l.innerHTML = s, void("" !== s && Gn(ht(l), l.lastChild));
        if (null !== e.nodes && (Ht(e.nodes.start, e.nodes.end), e.nodes = null), "" !== s) {
          if (q) {
            R.data;
            for (var i = H(), c = i; null !== i && (8 !== i.nodeType || "" !== i.data);) c = i, i = gt(i);
            if (null === i) throw D(), O;
            return Gn(R, c), void(o = V(i))
          }
          var d = xt(r ? "svg" : a ? "math" : "template", r ? N : a ? "http://www.w3.org/1998/Math/MathML" : void 0);
          d.innerHTML = s;
          var u = r || a ? d : d.content;
          if (Gn(ht(u), u.lastChild), r || a)
            for (; ht(u);) o.before(ht(u));
          else o.before(u)
        }
      } else q && H()
    })
  }

  function gr(e, t, ...n) {
    var r = new or(e);
    Nt(() => {
      const e = t() ?? null;
      r.ensure(e, e && (t => e(t, ...n)))
    }, k)
  }

  function mr(e) {
    0
  }

  function wr(e, t, n, r, a, i) {
    let o = q;
    q && H();
    var s = null;
    q && 1 === R.nodeType && (s = R, H());
    var l = q ? R : e,
      c = rn,
      d = new or(l, !1);
    Nt(() => {
      const e = t() || null;
      var i = a ? a() : n || "svg" === e ? N : void 0;
      return null === e ? (d.ensure(null, null), void Zn(!0)) : (d.ensure(e, t => {
        if (e) {
          if (Gn(s = q ? s : xt(e, i), s), r) {
            q && (a = e, On.includes(a)) && s.append(document.createComment(""));
            var n = q ? ht(s) : s.appendChild(vt());
            q && (null === n ? I(!1) : V(n)), mr(c), r(s, n), mr(null)
          }
          rn.nodes.end = s, t.before(s)
        }
        var a;
        q && V(t)
      }), Zn(!0), () => {
        e && Zn(!1)
      })
    }, k), Et(() => {
      Zn(!0)
    }), o && (I(!0), V(l))
  }

  function br(e, t, n) {
    Lt(() => {
      var r = Cn(() => t(e, n?.()) || {});
      if (n && r?.update) {
        var a = !1,
          i = {};
        Ot(() => {
          var e = n();
          ! function(e) {
            if ("object" == typeof e && e && !(e instanceof EventTarget))
              if (P in e) Mn(e);
              else if (!Array.isArray(e))
              for (let t in e) {
                const n = e[t];
                "object" == typeof n && n && P in n && Mn(n)
              }
          }(e), a && K(i, e) && (i = e, r.update(e))
        }), a = !0
      }
      if (r?.destroy) return () => r.destroy()
    })
  }

  function yr(e, t) {
    var n, r = void 0;
    Dt(() => {
      r !== (r = t()) && (n && (Vt(n), n = null), r && (n = Rt(() => {
        Lt(() => r(e))
      })))
    })
  }

  function xr(e) {
    var t, n, r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var a = e.length;
        for (t = 0; t < a; t++) e[t] && (n = xr(e[t])) && (r && (r += " "), r += n)
      } else
        for (n in e) e[n] && (r && (r += " "), r += n);
    return r
  }

  function kr(e) {
    return "object" == typeof e ? function() {
      for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (t = xr(e)) && (r && (r += " "), r += t);
      return r
    }(e) : e ?? ""
  }
  var _r = [..." \t\n\r\f \v\ufeff"];

  function Sr(e, t = !1) {
    var n = t ? " !important;" : ";",
      r = "";
    for (var a of Object.keys(e)) {
      var i = e[a];
      null != i && "" !== i && (r += " " + a + ": " + i + n)
    }
    return r
  }

  function Ar(e) {
    return "-" !== e[0] || "-" !== e[1] ? e.toLowerCase() : e
  }

  function Cr(e, t, n, r, a, i) {
    var o = e.__className;
    if (q || o !== n || void 0 === o) {
      var s = function(e, t, n) {
        var r = null == e ? "" : "" + e;
        if (t && (r = r ? r + " " + t : t), n)
          for (var a of Object.keys(n))
            if (n[a]) r = r ? r + " " + a : a;
            else if (r.length)
          for (var i = a.length, o = 0;
            (o = r.indexOf(a, o)) >= 0;) {
            var s = o + i;
            0 !== o && !_r.includes(r[o - 1]) || s !== r.length && !_r.includes(r[s]) ? o = s : r = (0 === o ? "" : r.substring(0, o)) + r.substring(s + 1)
          }
        return "" === r ? null : r
      }(n, r, i);
      q && s === e.getAttribute("class") || (null == s ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n
    } else if (i && a !== i)
      for (var l in i) {
        var c = !!i[l];
        null != a && c === !!a[l] || e.classList.toggle(l, c)
      }
    return i
  }

  function Mr(e, t = {}, n, r) {
    for (var a in n) {
      var i = n[a];
      t[a] !== i && (null == n[a] ? e.style.removeProperty(a) : e.style.setProperty(a, i, r))
    }
  }

  function Pr(e, t, n, r) {
    var a = e.__style;
    if (q || a !== t) {
      var i = function(e, t) {
        if (t) {
          var n, r, a = "";
          if (Array.isArray(t) ? (n = t[0], r = t[1]) : n = t, e) {
            e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var i = !1,
              o = 0,
              s = !1,
              l = [];
            n && l.push(...Object.keys(n).map(Ar)), r && l.push(...Object.keys(r).map(Ar));
            var c = 0,
              d = -1;
            const t = e.length;
            for (var u = 0; u < t; u++) {
              var f = e[u];
              if (s ? "/" === f && "*" === e[u - 1] && (s = !1) : i ? i === f && (i = !1) : "/" === f && "*" === e[u + 1] ? s = !0 : '"' === f || "'" === f ? i = f : "(" === f ? o++ : ")" === f && o--, !s && !1 === i && 0 === o)
                if (":" === f && -1 === d) d = u;
                else if (";" === f || u === t - 1) {
                if (-1 !== d) {
                  var p = Ar(e.substring(c, d).trim());
                  l.includes(p) || (";" !== f && u++, a += " " + e.substring(c, u).trim() + ";")
                }
                c = u + 1, d = -1
              }
            }
          }
          return n && (a += Sr(n)), r && (a += Sr(r, !0)), "" === (a = a.trim()) ? null : a
        }
        return null == e ? null : String(e)
      }(t, r);
      q && i === e.getAttribute("style") || (null == i ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t
    } else r && (Array.isArray(r) ? (Mr(e, n?.[0], r[0]), Mr(e, n?.[1], r[1], "important")) : Mr(e, n, r));
    return r
  }

  function zr(e, n, r = !1) {
    if (e.multiple) {
      if (null == n) return;
      if (!t(n)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var a of e.options) a.selected = n.includes(Tr(a))
    } else {
      for (a of e.options)
        if (st(Tr(a), n)) return void(a.selected = !0);
      r && void 0 === n || (e.selectedIndex = -1)
    }
  }

  function Er(e) {
    var t = new MutationObserver(() => {
      zr(e, e.__value)
    });
    t.observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["value"]
    }), Et(() => {
      t.disconnect()
    })
  }

  function jr(e, t, n = t) {
    var r = new WeakSet,
      a = !0;
    ! function(e, t, n, r = n) {
      e.addEventListener(t, () => Ct(n));
      const a = e.__on_r;
      e.__on_r = a ? () => {
        a(), r(!0)
      } : () => r(!0), At()
    }(e, "change", t => {
      var a, i = t ? "[selected]" : ":checked";
      if (e.multiple) a = [].map.call(e.querySelectorAll(i), Tr);
      else {
        var o = e.querySelector(i) ?? e.querySelector("option:not([disabled])");
        a = o && Tr(o)
      }
      n(a), e.__value = a, null !== we && r.add(we)
    }), Lt(() => {
      var i = t();
      if (e === document.activeElement) {
        var o = we;
        if (r.has(o)) return
      }
      if (zr(e, i, a), a && void 0 === i) {
        var s = e.querySelector(":checked");
        null !== s && (i = Tr(s), n(i))
      }
      e.__value = i, a = !1
    }), Er(e)
  }

  function Tr(e) {
    return "__value" in e ? e.__value : e.value
  }
  var $r = Symbol("class"),
    Lr = Symbol("style"),
    Or = Symbol("is custom element"),
    Br = Symbol("is html"),
    Nr = T ? "link" : "LINK",
    Dr = T ? "input" : "INPUT",
    Rr = T ? "option" : "OPTION",
    qr = T ? "select" : "SELECT";

  function Ir(e) {
    if (q) {
      var t = !1,
        n = () => {
          if (!t) {
            if (t = !0, e.hasAttribute("value")) {
              var n = e.value;
              Hr(e, "value", null), e.value = n
            }
            if (e.hasAttribute("checked")) {
              var r = e.checked;
              Hr(e, "checked", null), e.checked = r
            }
          }
        };
      e.__on_r = n, se(n), At()
    }
  }

  function Vr(e, t) {
    t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected")
  }

  function Hr(e, t, n, r) {
    var a = Fr(e);
    q && (a[t] = e.getAttribute(t), "src" === t || "srcset" === t || "href" === t && e.nodeName === Nr) || a[t] !== (a[t] = n) && ("loading" === t && (e[E] = n), null == n ? e.removeAttribute(t) : "string" != typeof n && Wr(e).includes(t) ? e[t] = n : e.setAttribute(t, n))
  }

  function Ur(e, t, n = [], r = [], a = [], i, o = !1, s = !1) {
    De(a, n, r, n => {
      var r = void 0,
        a = {},
        l = e.nodeName === qr,
        c = !1;
      if (Dt(() => {
          var d = t(...n.map(_n)),
            u = function(e, t, n, r, a = !1) {
              if (q && a && e.nodeName === Dr) {
                var i = e;
                ("checkbox" === i.type ? "defaultChecked" : "defaultValue") in n || Ir(i)
              }
              var o = Fr(e),
                s = o[Or],
                l = !o[Br];
              let c = q && s;
              c && I(!1);
              var d = t || {},
                u = e.nodeName === Rr;
              for (var f in t) f in n || (n[f] = null);
              n.class ? n.class = kr(n.class) : (r || n[$r]) && (n.class = null), n[Lr] && (n.style ??= null);
              var p = Wr(e);
              for (const y in n) {
                let x = n[y];
                if (u && "value" === y && null == x) e.value = e.__value = "", d[y] = x;
                else if ("class" !== y)
                  if ("style" !== y) {
                    var v = d[y];
                    if (x !== v || void 0 === x && e.hasAttribute(y)) {
                      d[y] = x;
                      var h = y[0] + y[1];
                      if ("$$" !== h)
                        if ("on" === h) {
                          const k = {},
                            _ = "$$" + y;
                          let S = y.slice(2);
                          var g = En(S);
                          if (Pn(S) && (S = S.slice(0, -7), k.capture = !0), !g && v) {
                            if (null != x) continue;
                            e.removeEventListener(S, d[_], k), d[_] = null
                          }
                          if (g) In(S, e, x), Vn([S]);
                          else if (null != x) {
                            function m(e) {
                              d[y].call(this, e)
                            }
                            d[_] = Rn(S, e, m, k)
                          }
                        } else if ("style" === y) Hr(e, y, x);
                      else if ("autofocus" === y) _t(e, Boolean(x));
                      else if (s || "__value" !== y && ("value" !== y || null == x))
                        if ("selected" === y && u) Vr(e, x);
                        else {
                          var w = y;
                          l || (w = Tn(w));
                          var b = "defaultValue" === w || "defaultChecked" === w;
                          if (null != x || s || b) b || p.includes(w) && (s || "string" != typeof x) ? (e[w] = x, w in o && (o[w] = B)) : "function" != typeof x && Hr(e, w, x);
                          else if (o[y] = null, "value" === w || "checked" === w) {
                            let A = e;
                            const C = void 0 === t;
                            if ("value" === w) {
                              let M = A.defaultValue;
                              A.removeAttribute(w), A.defaultValue = M, A.value = A.__value = C ? M : null
                            } else {
                              let P = A.defaultChecked;
                              A.removeAttribute(w), A.defaultChecked = P, A.checked = !!C && P
                            }
                          } else e.removeAttribute(y)
                        }
                      else e.value = e.__value = x
                    }
                  } else Pr(e, x, t?.[Lr], n[Lr]), d[y] = x, d[Lr] = n[Lr];
                else Cr(e, "http://www.w3.org/1999/xhtml" === e.namespaceURI, x, r, t?.[$r], n[$r]), d[y] = x, d[$r] = n[$r]
              }
              return c && I(!0), d
            }(e, r, d, i, o, s);
          c && l && "value" in d && zr(e, d.value);
          for (let e of Object.getOwnPropertySymbols(a)) d[e] || Vt(a[e]);
          for (let t of Object.getOwnPropertySymbols(d)) {
            var f = d[t];
            "@attach" !== t.description || r && f === r[t] || (a[t] && Vt(a[t]), a[t] = Rt(() => yr(e, () => f))), u[t] = f
          }
          r = u
        }), l) {
        var d = e;
        Lt(() => {
          zr(d, r.value, !0), Er(d)
        })
      }
      c = !0
    })
  }

  function Fr(e) {
    return e.__attributes ??= {
      [Or]: e.nodeName.includes("-"),
      [Br]: "http://www.w3.org/1999/xhtml" === e.namespaceURI
    }
  }
  var Gr = new Map;

  function Wr(e) {
    var t, n = e.getAttribute("is") || e.nodeName,
      r = Gr.get(n);
    if (r) return r;
    Gr.set(n, r = []);
    for (var a = e, i = Element.prototype; i !== a;) {
      for (var o in t = l(a)) t[o].set && r.push(o);
      a = u(a)
    }
    return r
  }

  function Xr(e, t) {
    return e === t || e?.[P] === t
  }

  function Kr(e = {}, t, n, r) {
    var a = ee.r,
      i = rn;
    return Lt(() => {
      var o, s;
      return Ot(() => {
        o = s, s = r?.() || [], Cn(() => {
          e !== n(...s) && (t(e, ...s), o && Xr(n(...o), e) && t(null, ...o))
        })
      }), () => {
        let r = i;
        for (; r !== a && null !== r.parent && 33554432 & r.parent.f;) r = r.parent;
        const o = r.teardown;
        r.teardown = () => {
          s && Xr(n(...s), e) && t(null, ...s), o?.()
        }
      }
    }), e
  }

  function Jr(e, t, n, r) {
    var a = !Z || !!(2 & n),
      i = !!(8 & n),
      o = !!(16 & n),
      l = r,
      c = !0,
      d = () => (c && (c = !1, l = o ? Cn(r) : r), l);
    let u;
    if (i) {
      var f = P in e || z in e;
      u = s(e, t)?.set ?? (f && t in e ? n => e[t] = n : void 0)
    }
    var p, v, h = !1;
    if (i ? [p, h] = function(e) {
        var t = ge;
        try {
          return ge = !1, [e(), ge]
        } finally {
          ge = t
        }
      }(() => e[t]) : p = e[t], void 0 === p && void 0 !== r && (p = d(), u && (a && function() {
        throw new Error("https://svelte.dev/e/props_invalid_value")
      }(), u(p))), v = a ? () => {
        var n = e[t];
        return void 0 === n ? d() : (c = !0, n)
      } : () => {
        var n = e[t];
        return void 0 !== n && (l = void 0), void 0 === n ? l : n
      }, a && !(4 & n)) return v;
    if (u) {
      var g = e.$$legacy;
      return function(e, t) {
        return arguments.length > 0 ? (a && t && !g && !h || u(t ? v() : e), e) : v()
      }
    }
    var m = !1,
      w = (1 & n ? Ie : He)(() => (m = !1, v()));
    i && _n(w);
    var b = rn;
    return function(e, t) {
      if (arguments.length > 0) {
        const n = t ? _n(w) : a && i ? it(e) : e;
        return et(w, n), m = !0, void 0 !== l && (l = n), e
      }
      return Yt && m || 16384 & b.f ? w.v : _n(w)
    }
  }
  var Zr = class {
    #V;
    #H;
    constructor(e) {
      var t = new Map,
        n = (e, n) => {
          var r = Qe(n, !1, !1);
          return t.set(e, r), r
        };
      const r = new Proxy({
        ...e.props || {},
        $$events: {}
      }, {
        get: (e, r) => _n(t.get(r) ?? n(r, Reflect.get(e, r))),
        has: (e, r) => r === z || (_n(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r)),
        set: (e, r, a) => (et(t.get(r) ?? n(r, a), a), Reflect.set(e, r, a))
      });
      this.#H = (e.hydrate ? er : Qn)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: r,
        context: e.context,
        intro: e.intro ?? !1,
        recover: e.recover,
        transformError: e.transformError
      }), e?.props?.$$host && !1 !== e.sync || Pe(), this.#V = r.$$events;
      for (const a of Object.keys(this.#H)) "$set" !== a && "$destroy" !== a && "$on" !== a && o(this, a, {
        get() {
          return this.#H[a]
        },
        set(e) {
          this.#H[a] = e
        },
        enumerable: !0
      });
      this.#H.$set = e => {
        Object.assign(r, e)
      }, this.#H.$destroy = () => {
        ar(this.#H)
      }
    }
    $set(e) {
      this.#H.$set(e)
    }
    $on(e, t) {
      this.#V[e] = this.#V[e] || [];
      const n = (...e) => t.call(this, ...e);
      return this.#V[e].push(n), () => {
        this.#V[e] = this.#V[e].filter(e => e !== n)
      }
    }
    $destroy() {
      this.#H.$destroy()
    }
  };

  function Yr(e, t, n, r) {
    const a = n[e]?.type;
    if (t = "Boolean" === a && "boolean" != typeof t ? null != t : t, !r || !n[e]) return t;
    if ("toAttribute" === r) switch (a) {
      case "Object":
      case "Array":
        return null == t ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return null == t ? null : t;
      default:
        return t
    } else switch (a) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
      default:
        return t;
      case "Number":
        return null != t ? +t : t
    }
  }

  function Qr(e) {
    var t, n;
    null === ee && $(), Z && null !== ee.l ? (t = ee, n = t.l, n.u ??= {
      a: [],
      b: [],
      m: []
    }).m.push(e) : jt(() => {
      const t = Cn(e);
      if ("function" == typeof t) return t
    })
  }

  function ea(e) {
    return null !== e && "object" == typeof e && !Array.isArray(e)
  }

  function ta(e, ...t) {
    const n = {
      ...e
    };
    for (const r of t)
      if (ea(r))
        for (const e in r)
          if (Object.prototype.hasOwnProperty.call(r, e)) {
            const t = n[e],
              a = r[e];
            ea(t) && ea(a) ? n[e] = ta(t, a) : void 0 !== a && (n[e] = a)
          } return n
  }
  "function" == typeof HTMLElement && HTMLElement;
  var na = new URLSearchParams(window.location.search).get("trace") || sessionStorage.getItem("pandectes-trace") || "",
    ra = na.split(",");
  var aa = e => (t, n = "debug") => {
      (ra.includes(e) || "*" === na) && console[n](`[${function(){const e=new Date;return`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`}()}] ${e}@pandectes → ${t}`)
    },
    ia = () => {},
    oa = () => Math.floor(Date.now() / 1e3),
    sa = function(e) {
      return e.StartHidden = "startHidden", e
    }({}),
    la = function(e) {
      return e.Banner = "banner", e.Consent = "consent", e.Configuration = "configuration", e
    }({}),
    ca = function(e) {
      return e.Set = "set", e.Stored = "stored", e.Effective = "effective", e
    }({}),
    da = function(e) {
      return e.Get = "get", e.Patch = "patch", e.Snippet = "snippet", e
    }({}),
    ua = {
      [sa.StartHidden]: {
        visibility: {
          startHidden: [".*"]
        }
      }
    },
    fa = function(e) {
      return e.escape = "escape", e.clickOutside = "clickOutside", e.scroll = "scroll", e.timeout = "timeout", e.button = "button", e.api = "api", e
    }({}),
    pa = function(e) {
      return e.dismiss = "dismiss", e.allow = "allow", e.deny = "deny", e
    }({}),
    va = function(e) {
      return e.notice = "notice", e.preferences = "preferences", e.status = "status", e
    }({}),
    ha = function(e) {
      return e.box = "box", e.wide = "wide", e.bar = "bar", e.panel = "panel", e.drawer = "drawer", e
    }({}),
    ga = function(e) {
      return e.vertical = "vertical", e.vertical_grouped = "vertical-grouped", e.horizontal = "horizontal", e.horizontal_justified = "horizontal-justified", e.horizontal_grouped = "horizontal-grouped", e
    }({}),
    ma = function(e) {
      return e[e.Xs = 300] = "Xs", e[e.Sm = 400] = "Sm", e[e.Md = 500] = "Md", e[e.Lg = 650] = "Lg", e[e.Xl = 800] = "Xl", e[e.Xxl = 1e3] = "Xxl", e[e.Full = 0] = "Full", e
    }({}),
    wa = function(e) {
      return e.topleft = "top left", e.topcenter = "top center", e.topright = "top right", e.middleleft = "middle left", e.middlecenter = "middle center", e.middleright = "middle right", e.bottomleft = "bottom left", e.bottomcenter = "bottom center", e.bottomright = "bottom right", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom", e
    }({}),
    ba = function(e) {
      return e.topleft = "justify-start items-start", e.topcenter = "justify-start items-center", e.topright = "justify-start items-end", e.middleleft = "justify-center items-start", e.middlecenter = "justify-center items-center", e.middleright = "justify-center items-end", e.bottomleft = "justify-end items-start", e.bottomcenter = "justify-end items-center", e.bottomright = "justify-end items-end", e.left = "items-start", e.right = "items-end", e.top = "justify-start", e.bottom = "justify-end", e
    }({}),
    ya = function(e) {
      return e.dialog = "dialog", e.div = "div", e
    }({}),
    xa = function(e) {
      return e.allow = "allow", e.deny = "deny", e.custom = "custom", e.dismiss = "dismiss", e.preferences = "preferences", e.status = "status", e.reopen = "reopen", e
    }({}),
    ka = function(e) {
      return e.reopen = "reopen", e.status = "status", e
    }({}),
    _a = function(e) {
      return e.DialogOpened = "PandectesDialogOpened", e.DialogClosed = "PandectesDialogClosed", e.ButtonClicked = "PandectesButtonClicked", e.Consent = "PandectesConsentUpdate", e.ConsentLegacy = "PandectesConsentUpdateLegacy", e.Api = "PandectesApi", e.Initialized = "PandectesInitialized", e
    }({}),
    Sa = e => ({
      preferences: !1 === Boolean(1 & e),
      analytics: !1 === Boolean(2 & e),
      marketing: !1 === Boolean(4 & e)
    }),
    Aa = e => 0 === e ? xa.allow : 7 === e ? xa.deny : xa.custom,
    Ca = async (e, t, n) => {
      const {
        status: r,
        preferences: a
      } = e, i = e.country?.code || "", o = e.country?.state || "";
      return (await (await fetch(`https://consents-v2.pandect.es/store/consent/${t}/${n}`, {
        method: "POST",
        body: JSON.stringify({
          path: window.location.pathname,
          domain: window.location.hostname,
          countryCode: i,
          stateCode: o,
          status: r,
          preferences: a
        })
      })).json()).id
    }, Ma = (e, t, n) => Promise.resolve("XXXXXXXXXXXX"), Pa = aa("api"), za = () => {
      window.pandectesDataLayer = window.pandectesDataLayer || [], window.Pandectes = {
          version: "4",
          events: _a,
          openDialog: e => {
            pi.touched = !0, ki(e)
          },
          setLanguage: e => {
            pi.language = e
          },
          closeDialog: () => {
            Ea({
              subject: la.Banner,
              action: xa.dismiss
            })
          },
          getConfiguration: () => Ea({
            subject: la.Configuration,
            action: da.Get
          }),
          patchConfiguration: e => Ea({
            subject: la.Configuration,
            action: da.Patch,
            params: {
              data: e
            }
          }),
          currentVisitorConsent: () => {
            const e = Ea({
              subject: la.Consent,
              action: ca.Stored
            });
            return e ? {
              preferences: e.preferences ? "yes" : "no",
              analytics: e.analytics ? "yes" : "no",
              marketing: e.marketing ? "yes" : "no"
            } : {
              preferences: "",
              analytics: "",
              marketing: ""
            }
          },
          preferencesProcessingAllowed: () => Ea({
            subject: la.Consent,
            action: ca.Effective
          }).preferences,
          analyticsProcessingAllowed: () => Ea({
            subject: la.Consent,
            action: ca.Effective
          }).analytics,
          marketingAllowed: () => Ea({
            subject: la.Consent,
            action: ca.Effective
          }).marketing,
          setTrackingConsent: e => Ea({
            subject: la.Consent,
            action: ca.Set,
            params: {
              data: e
            }
          })
        },
        function() {
          if (0 === window.pandectesDataLayer.length) return;
          for (; window.pandectesDataLayer.length;) {
            const e = window.pandectesDataLayer.shift();
            e && Ea(e, !0), kn()
          }
        }(),
        function() {
          const e = window.pandectesDataLayer.push;
          window.pandectesDataLayer.push = function(...t) {
            return t[0] && Ea(t[0], !0), e.apply(this, t)
          }
        }()
    }, Ea = (e, t = !1) => {
      const {
        subject: n,
        action: r,
        params: a
      } = e;
      try {
        let e = "";
        switch (n) {
          case la.Banner:
            switch (r) {
              case xa.reopen:
              case xa.dismiss:
                Si(r, fa.api);
                break;
              default:
                throw new Error(`Unknown ${n} action: ${r}`)
            }
            break;
          case la.Configuration:
            switch (r) {
              case da.Get:
                if (!pi.baseSettings && !pi.settings) throw new Error("configuration not initialized");
                e = function(e, t = !1, n = !1) {
                  return Q(e, new Map, "", Y, null, n)
                }(pi.baseSettings || pi.settings);
                break;
              case da.Patch:
                if (!pi.baseSettings && !pi.settings) throw new Error("configuration not initialized");
                const t = pi.baseSettings || pi.settings;
                if (!t) throw new Error("configuration not initialized");
                const i = a?.data || {},
                  o = ta({}, t, i, {
                    version: t.version
                  });
                o.store.plan = t.store.plan, o.overrides = i.overrides, window.pandectesBannerSettings = o, xi(window.pandectesBannerSettings);
                break;
              case da.Snippet:
                if (!a?.data || !ua[a.data]) throw new Error("snippet not found");
                if (!pi.baseSettings && !pi.settings) throw new Error("configuration not initialized");
                const s = pi.baseSettings || pi.settings;
                if (!s) throw new Error("configuration not initialized");
                xi(ta({}, s, ua[a.data]));
                break;
              default:
                throw new Error(`Unknown ${n} action: ${r}`)
            }
            break;
          case la.Consent:
            switch (r) {
              case ca.Set:
                if (!a?.data) throw new Error("missing data for consent");
                const t = (e => {
                  let t = 0;
                  return !1 === e.preferences && (t += 1), !1 === e.analytics && (t += 2), !1 === e.marketing && (t += 4), t
                })(a.data);
                pi.tempPreferences = t, Si(Aa(t), fa.api);
                break;
              case ca.Stored:
                e = pi.consent ? Sa(pi.consent.preferences) : void 0;
                break;
              case ca.Effective:
                e = Sa(vi());
                break;
              default:
                throw new Error(`Unknown ${n} action: ${r}`)
            }
            break;
          default:
            throw new Error("Unknown subject")
        }
        if (!t) return e;
        (a?.replyTo || window).dispatchEvent(new CustomEvent(_a.Api, {
          detail: e
        }))
      } catch (i) {
        Pa(`Api Error: ${i}`, "error")
      }
    };
  var ja = ya.dialog,
    Ta = {
      AD: "ca",
      AE: "ar",
      AF: "ps",
      AG: "en",
      AI: "en",
      AL: "sq",
      AM: "hy",
      AO: "pt",
      AQ: "en",
      AR: "es",
      AS: "sm",
      AT: "de",
      AU: "en",
      AW: "nl",
      AX: "sv",
      AZ: "az",
      BA: "bs",
      BB: "en",
      BD: "bn",
      BE: "de",
      BF: "fr",
      BG: "bg",
      BH: "ar",
      BI: "fr",
      BJ: "fr",
      BL: "fr",
      BM: "en",
      BN: "ms",
      BO: "es",
      BQ: "nl",
      BR: "pt",
      BS: "en",
      BT: "dz",
      BV: "no",
      BW: "en",
      BY: "be",
      BZ: "en",
      CA: "en",
      CC: "en",
      CD: "fr",
      CF: "fr",
      CG: "fr",
      CH: "de",
      CI: "fr",
      CK: "en",
      CL: "es",
      CM: "fr",
      CN: "zh",
      CO: "es",
      CR: "es",
      CU: "es",
      CV: "pt",
      CW: "nl",
      CX: "en",
      CY: "el",
      CZ: "cs",
      DE: "de",
      DJ: "fr",
      DK: "da",
      DM: "en",
      DO: "es",
      DZ: "ar",
      EC: "es",
      EE: "et",
      EG: "ar",
      EH: "ar",
      ER: "ti",
      ES: "es",
      ET: "am",
      FI: "fi",
      FJ: "en",
      FK: "en",
      FM: "en",
      FO: "fo",
      FR: "fr",
      GA: "fr",
      GB: "en",
      GD: "en",
      GE: "ka",
      GF: "fr",
      GG: "en",
      GH: "en",
      GI: "en",
      GL: "kl",
      GM: "en",
      GN: "fr",
      GP: "fr",
      GQ: "es",
      GR: "el",
      GS: "en",
      GT: "es",
      GU: "en",
      GW: "pt",
      GY: "en",
      HK: "zh",
      HM: "en",
      HN: "es",
      HR: "hr",
      HT: "fr",
      HU: "hu",
      ID: "id",
      IE: "ga",
      IL: "he",
      IM: "en",
      IN: "hi",
      IO: "en",
      IQ: "ar",
      IR: "fa",
      IS: "is",
      IT: "it",
      JE: "en",
      JM: "en",
      JO: "ar",
      JP: "ja",
      KE: "sw",
      KG: "ky",
      KH: "km",
      KI: "en",
      KM: "ar",
      KN: "en",
      KP: "ko",
      KR: "ko",
      KW: "ar",
      KY: "en",
      KZ: "kk",
      LA: "lo",
      LB: "ar",
      LC: "en",
      LI: "de",
      LK: "si",
      LR: "en",
      LS: "en",
      LT: "lt",
      LU: "fr",
      LV: "lv",
      LY: "ar",
      MA: "ar",
      MC: "fr",
      MD: "ro",
      ME: "sr",
      MF: "fr",
      MG: "mg",
      MH: "en",
      MK: "mk",
      ML: "fr",
      MM: "my",
      MN: "mn",
      MO: "zh",
      MP: "en",
      MQ: "fr",
      MR: "ar",
      MS: "en",
      MT: "mt",
      MU: "fr",
      MV: "dv",
      MW: "en",
      MX: "es",
      MY: "ms",
      MZ: "pt",
      NA: "en",
      NC: "fr",
      NE: "fr",
      NF: "en",
      NG: "en",
      NI: "es",
      NL: "nl",
      NO: "nb",
      NP: "ne",
      NR: "na",
      NU: "en",
      NZ: "mi",
      OM: "ar",
      PA: "es",
      PE: "es",
      PF: "fr",
      PG: "en",
      PH: "en",
      PK: "ur",
      PL: "pl",
      PM: "fr",
      PN: "en",
      PR: "es",
      PS: "ar",
      PT: "pt",
      PW: "ja",
      PY: "es",
      QA: "ar",
      RE: "fr",
      RO: "ro",
      RS: "sr",
      RU: "ru",
      RW: "rw",
      SA: "ar",
      SB: "en",
      SC: "fr",
      SD: "ar",
      SE: "sv",
      SG: "zh",
      SH: "en",
      SI: "sl",
      SJ: "no",
      SK: "sk",
      SL: "en",
      SM: "it",
      SN: "fr",
      SO: "so",
      SR: "nl",
      ST: "pt",
      SS: "en",
      SV: "es",
      SX: "nl",
      SY: "ar",
      SZ: "en",
      TC: "en",
      TD: "fr",
      TF: "fr",
      TG: "fr",
      TH: "th",
      TJ: "tg",
      TK: "sm",
      TL: "pt",
      TM: "tk",
      TN: "ar",
      TO: "en",
      TR: "tr",
      TT: "en",
      TV: "en",
      TW: "zh",
      TZ: "sw",
      UA: "uk",
      UG: "sw",
      UM: "en",
      US: "en",
      UY: "es",
      UZ: "uz",
      VA: "it",
      VC: "en",
      VE: "es",
      VG: "en",
      VI: "en",
      VN: "vi",
      VU: "fr",
      WF: "fr",
      WS: "sm",
      YE: "ar",
      YT: "fr",
      ZA: "en",
      ZM: "en",
      ZW: "en"
    },
    $a = (e = window.innerWidth) => e <= 485,
    La = null,
    Oa = e => {
      La = e
    },
    Ba = () => La,
    Na = e => {
      const t = Ba();
      t && t.dispatchEvent(new CustomEvent(e.eventName, {
        detail: e.detail,
        bubbles: !0,
        composed: !0
      }))
    };

  function Da(e, t, n, r = 100, a = 5e3) {
    const i = e === window && t.startsWith("window.") ? t.substring(7) : t;
    return new Promise((o, s) => {
      let l = null;
      if (n?.aborted) return s(new Error("Aborted"));
      const c = () => {
          l && clearTimeout(l), n?.removeEventListener("abort", d)
        },
        d = () => {
          c(), s(new Error("Aborted"))
        };
      n?.addEventListener("abort", d, {
        once: !0
      });
      const u = Date.now(),
        f = () => {
          const n = function(e, t) {
            return t ? null != e ? t.replace(/\[(\d+)\]/g, ".$1").replace(/\["([^"]+)"\]/g, ".$1").replace(/\['([^']+)'\]/g, ".$1").split(".").filter(Boolean).reduce((e, t) => {
              if (null != e && ("object" == typeof e || "function" == typeof e)) return e[t]
            }, e) : void 0 : e
          }(e, i);
          return null != n ? (c(), o({
            value: n
          })) : Date.now() - u >= a ? (c(), s(new Error(`Property path "${t}" not found within ${a}ms.`))) : void(l = setTimeout(f, r))
        };
      f()
    })
  }
  var Ra = aa("shopify");
  var qa = (e, t) => {
      if (window.Shopify?.customerPrivacy) {
        const n = window.Shopify.customerPrivacy,
          r = n.currentVisitorConsent(),
          {
            preferences: a,
            marketing: i,
            analytics: o
          } = Sa(t);
        if ((a ? "yes" : "no") === r.preferences && (o ? "yes" : "no") === r.analytics && (i ? "yes" : "no") === r.marketing) return;
        n.setTrackingConsent({
          ...e.headless ? {
            headlessStorefront: e.headless,
            storefrontRootDomain: e.storefrontRootDomain,
            checkoutRootDomain: e.checkoutRootDomain,
            storefrontAccessToken: e.storefrontAccessToken
          } : {},
          preferences: a,
          analytics: o,
          marketing: i
        }, () => {})
      }
    },
    Ia = function(e) {
      return e[e.Necessary = 0] = "Necessary", e[e.Preferences = 1] = "Preferences", e[e.Analytics = 2] = "Analytics", e[e.Marketing = 4] = "Marketing", e[e.Unclassified = 8] = "Unclassified", e
    }({}),
    Va = function(e) {
      return e[e.AllBlocked = Ia.Preferences | Ia.Marketing | Ia.Analytics] = "AllBlocked", e[e.PreferencesOnlyAllowed = e.AllBlocked ^ Ia.Preferences] = "PreferencesOnlyAllowed", e[e.AnalyticsOnlyAllowed = e.AllBlocked ^ Ia.Analytics] = "AnalyticsOnlyAllowed", e[e.MarketingOnlyAllowed = e.AllBlocked ^ Ia.Marketing] = "MarketingOnlyAllowed", e[e.PreferencesAndAnalyticsAllowed = e.AllBlocked ^ Ia.Preferences ^ Ia.Analytics] = "PreferencesAndAnalyticsAllowed", e[e.PreferencesAndMarketingAllowed = e.AllBlocked ^ Ia.Preferences ^ Ia.Marketing] = "PreferencesAndMarketingAllowed", e[e.AnalyticsAndMarketingAllowed = e.AllBlocked ^ Ia.Analytics ^ Ia.Marketing] = "AnalyticsAndMarketingAllowed", e[e.AllAllowed = 0] = "AllAllowed", e
    }({}),
    Ha = function(e) {
      return e.Explicit = "explicit", e.Implied = "implied", e.Api = "api", e
    }({}),
    Ua = function(e) {
      return e.http = "http", e.html = "html", e
    }({}),
    Fa = "_pandectes_gdpr",
    Ga = aa("storage");

  function Wa(e, t, n) {
    const r = [];
    r.push(`${Fa}=${window.btoa(e)}`), r.push("path=/"), r.push(`max-age=${t}`), n.length > 0 ? (r.push(`domain=${n}`), r.push("samesite=None;"), r.push("secure;")) : (r.push(`domain=.${window.location.hostname}`), r.push("samesite=Lax;")), document.cookie = r.join("; ")
  }
  var Xa = (e, t) => {
    const {
      type: n,
      duration: r,
      domain: a
    } = e;
    if (null !== t)
      if (Ga("updateStorage()"), "html" === n) try {
        Qa(Fa, t)
      } catch (i) {
        Wa(t, 86400 * r, a)
      } else Wa(t, 86400 * r, a);
      else if (Ga("clearing storage"), "html" === n) try {
      Ya(Fa)
    } catch (i) {
      Wa("", -1, a)
    } else Wa("", -1, a)
  };

  function Ka() {
    const e = document.cookie.split("; ");
    for (const t of e) {
      const [e, ...n] = t.split("=");
      if (e === Fa) {
        const e = n.join("=");
        if (!e) return null;
        try {
          return window.atob(e)
        } catch {
          return Ga("invalid consent cookie", "warn"), null
        }
      }
    }
    return null
  }
  var Ja, Za = e => {
      try {
        return window.localStorage.getItem(e)
      } catch (t) {
        return Ga("localStorage is not available", "warn"), null
      }
    },
    Ya = e => {
      try {
        window.localStorage.removeItem(e)
      } catch (t) {
        throw Ga("localStorage is not available", "warn"), t
      }
    },
    Qa = (e, t) => {
      try {
        window.localStorage.setItem(e, t)
      } catch (n) {
        throw Ga("localStorage is not available", "warn"), n
      }
    },
    ei = "pandectes",
    ti = aa("broadcast"),
    ni = function(e) {
      return e.Optin = "optin", e.Optout = "optout", e
    }({}),
    ri = function(e) {
      return e.basic = "basic", e.plus = "plus", e.premium = "premium", e.enterprise = "enterprise", e
    }({}),
    ai = function(e) {
      return e.off = "off", e.close = "close", e.primary = "primary", e
    }({}),
    ii = function(e) {
      return e.primary = "primary", e.secondary = "secondary", e
    }({}),
    oi = (e, t = {}) => {
      console.error(e, t)
    },
    si = new Set(["ar", "he", "fa", "ur"]),
    li = (e, t, n) => {
      const {
        language: {
          multilingual: r,
          fallback: a,
          detection: i
        }
      } = e, o = e.language.supported;
      if (!r) return a;
      const s = (() => {
        const e = window.navigator;
        return (e.languages?.[0] || e.language).substring(0, 2)
      })();
      let l = null;
      if ("url" === i) {
        const e = window.location.pathname.split("/");
        l = e[1] ? e[1] : a
      }
      return !l && n.length && "country" === i && Ta[n] && (l = Ta[n]), l || (l = "locale" === i && t?.length ? t : s), l ? 0 === o.length ? l : -1 === o.indexOf(l) ? a : l : a
    },
    ci = Object.values(ba),
    di = {
      [ba.topleft]: wa.topleft,
      [ba.topcenter]: wa.topcenter,
      [ba.topright]: wa.topright,
      [ba.middleleft]: wa.middleleft,
      [ba.middlecenter]: wa.middlecenter,
      [ba.middleright]: wa.middleright,
      [ba.bottomleft]: wa.bottomleft,
      [ba.bottomcenter]: wa.bottomcenter,
      [ba.bottomright]: wa.bottomright,
      [ba.left]: wa.left,
      [ba.right]: wa.right,
      [ba.top]: wa.top,
      [ba.bottom]: wa.bottom
    },
    ui = Va.AllBlocked,
    fi = aa("app"),
    pi = it({
      settings: null,
      baseSettings: null,
      ref: void 0,
      active: null,
      tempPreferences: Va.AllBlocked,
      consent: null,
      touched: !1,
      language: "en"
    }),
    vi = () => pi.consent ? pi.consent.preferences : ui,
    hi = !1,
    gi = null,
    mi = e => {
      const t = (e => {
        const t = {
          ...e
        };
        return t.dialogs.notice && ci.includes(t.dialogs.notice.style.position) && (t.dialogs.notice.style.position = di[t.dialogs.notice.style.position]), t.dialogs.preferences && ci.includes(t.dialogs.preferences.style.position) && (t.dialogs.preferences.style.position = di[t.dialogs.preferences.style.position]), t.dialogs.status && ci.includes(t.dialogs.status.style.position) && (t.dialogs.status.style.position = di[t.dialogs.status.style.position]), ci.includes(t.widget.position) && (t.widget.position = di[t.widget.position]), t
      })(e);
      pi.settings = t, pi.consent = ((e, t) => {
        if (!e) return null;
        const {
          type: n,
          duration: r
        } = e;
        let a, i;
        if (n === Ua.http) {
          if (a = Ka(), !a && (a = Za(Fa), a)) {
            try {
              Ya(Fa)
            } catch (o) {}
            Xa(e, a)
          }
        } else a = Za(Fa), a || (a = Ka(), a && (Wa("", -1, e.domain), Xa(e, a)));
        try {
          if (a) {
            const e = JSON.parse(a) || null;
            i = e ? null == e.preferences ? null : e : null
          } else i = null
        } catch (o) {
          console.warn(o), i = null
        }
        return i && r > 0 && (i.timestamp < e.lastReset || oa() - i.timestamp > 86400 * e.duration) && (i = null, Xa(e, null), t && qa(t, Va.AllBlocked)), i
      })(t.storage, e.store), pi.tempPreferences = void 0 !== pi.consent?.preferences ? pi.consent.preferences : ui, pi.language = li(t, Ja.locale, Ja.country)
    },
    wi = () => {
      pi.baseSettings && mi(((e, t) => {
        const {
          overrides: n,
          ...r
        } = e;
        return t && n?.mobile ? ta({}, r, n.mobile) : r
      })(pi.baseSettings, hi))
    },
    bi = () => {
      gi || (hi = $a(), gi = (e => {
        let t = $a();
        const n = () => {
          const n = $a();
          n !== t && (t = n, e(n))
        };
        return window.addEventListener("resize", n), () => window.removeEventListener("resize", n)
      })(e => {
        hi = e, wi()
      }))
    },
    yi = e => {
      Ja = e.props, ui = Ja.policy === ni.Optin ? Va.AllBlocked : 0, bi(), xi(e.settings);
      const t = pi.settings;
      t && Ci(t.store.plan) && za()
    },
    xi = e => {
      pi.baseSettings = e, wi()
    };
  var ki = e => {
      const t = pi.settings;
      if (!t) return;
      const n = e || (e => {
        const {
          dialogs: t
        } = e;
        return t.preferences && !t.notice ? va.preferences : va.notice
      })(t);
      pi.active !== n && (fi(`openDialog(${n||""})`), pi.active = n, kn().then(() => {
        Ci(t.store.plan) && Na({
          eventName: _a.DialogOpened,
          detail: {
            dialog: pi.active
          }
        }), ja === ya.dialog && (t.theme.isModal ? pi.ref?.showModal() : pi.ref?.show());
        const e = t.theme.focus === ai.primary ? pi.ref?.querySelector("div.actions")?.querySelector("button:last-child") : t.theme.focus === ai.close ? pi.ref?.querySelector("button.close") : pi.ref;
        e && e.focus()
      }))
    },
    _i = () => {
      const e = pi.settings;
      if (!e) return;
      if (!pi.ref || !pi.active) return;
      fi("closeDialog()"), pi.ref.classList.add("closing");
      const t = pi.active;
      Promise.allSettled(pi.ref.getAnimations().map(e => e.finished)).then(() => {
        pi.active = null, ja === ya.dialog && pi.ref?.close(), Ci(e.store.plan) && Na({
          eventName: _a.DialogClosed,
          detail: {
            dialog: t
          }
        })
      })
    },
    Si = (e, t) => {
      const n = pi.settings;
      if (n) {
        switch (pi.touched = !0, e) {
          case xa.preferences:
            ki(va.preferences);
            break;
          case xa.status:
            ki(va.status);
            break;
          case xa.reopen:
            ki(n.dialogs.preferences ? va.preferences : va.notice);
            break;
          case xa.dismiss:
            _i();
            const r = n.close.action;
            r !== pa.dismiss && pi.active !== va.status && t !== fa.api && null === pi.consent && Ai(r === pa.allow ? xa.allow : xa.deny, t);
            break;
          case xa.deny:
          case xa.allow:
          case xa.custom:
            _i(), Ai(e);
            break;
          default:
            fi(`Unknown action: ${e}`, "error")
        }!Ci(n.store.plan) || t && t !== fa.button || Na({
          eventName: _a.ButtonClicked,
          detail: {
            action: e
          }
        })
      }
    },
    Ai = (e, t) => {
      const n = pi.settings;
      if (!n) return;
      const {
        store: r,
        consent: {
          shopify: a,
          redirectOnDeny: i,
          redirectOnDenyUrl: o,
          reloadOnConsent: s
        },
        storage: l
      } = n, c = e === xa.custom ? pi.tempPreferences : e === xa.allow ? Va.AllAllowed : Va.AllBlocked, d = Aa(c);
      if (i && d === xa.deny && t !== fa.api) return void window.location.assign(o || "https://pandectes.io");
      const u = {
        status: d,
        timestamp: oa(),
        preferences: c,
        method: t === fa.api ? Ha.Api : t ? Ha.Implied : Ha.Explicit,
        id: null,
        country: {
          code: Ja.country || "",
          state: Ja.state || ""
        },
        version: n.version
      };
      a && qa(r, c), Mi(r.plan) && Na({
        eventName: _a.ConsentLegacy,
        detail: u
      }), Ci(r.plan) && Na({
        eventName: _a.Consent,
        detail: Sa(u.preferences)
      }), (e => {
        try {
          new BroadcastChannel(ei).postMessage(e)
        } catch (t) {
          ti(t, "warn")
        }
      })(u), (l ? Ca : Ma)(u, n.store.id, Ja.customer || "0").then(e => {
        Object.assign(u, {
          id: e
        })
      }).catch(e => {
        oi(e)
      }).finally(() => {
        pi.consent = u, pi.tempPreferences = c, l && Xa(l, JSON.stringify(u)), s && window.location.reload()
      })
    },
    Ci = e => e === ri.enterprise,
    Mi = e => e !== ri.basic;
  "undefined" != typeof window && ((window.__svelte ??= {}).v ??= new Set).add("5");
  var Pi = e => $t(() => {
      jt(() => {
        const t = e.getVariables();
        t && (e => {
          const t = Ba();
          if (!t) return;
          const n = t.getElementById("pandectes-cmp-custom-styles") || document.createElement("style");
          n.textContent = e, n.id = "pandectes-cmp-custom-styles", t.appendChild(n)
        })(t)
      })
    }),
    zi = aa("auto-close"),
    Ei = e => $t(() => {
      jt(() => {
        if (e.getEnabled()) return (e => {
          const t = new BroadcastChannel(ei);
          try {
            ti("listening to tab changes"), t.onmessage = t => {
              t.data && e(t.data)
            }
          } catch (n) {
            ti(n, "warn")
          }
          return () => {
            ti("stopped listening to tab changes"), t.close()
          }
        })(() => {
          console.log("Tab change detected - closing dialog")
        })
      })
    }),
    ji = e => $t(() => {
      const t = Si.bind(null, xa.reopen),
        n = e => {
          if (!e) return;
          const n = async () => {
            for await (const e of ((e, t = 1e3, n = 1e4) => {
              const r = new WeakMap;
              return {
                async * [Symbol.asyncIterator]() {
                  const a = Date.now();
                  for (; Date.now() - a < n;) {
                    const n = document.querySelectorAll(e);
                    for (const e of n) r.has(e) || (r.set(e, !0), yield e);
                    await new Promise(e => setTimeout(e, t))
                  }
                }
              }
            })('[href*="#reopenBanner" i]')) e.onclick = e => {
              e.preventDefault(), t()
            }
          };
          if ("loading" === document.readyState) return window.addEventListener("load", n, {
            once: !0
          }), () => window.removeEventListener("load", n);
          n()
        };
      jt(() => n(e.getCustomTrigger()))
    }),
    Ti = aa("initial-open"),
    $i = e => {
      try {
        const t = window.location.pathname;
        return e.some(e => new RegExp(e).test(t))
      } catch {
        return Ti("Error evaluating hide rules", "error"), !1
      }
    },
    Li = !1,
    Oi = null,
    Bi = () => {
      Oi && (Ti(`clearing initial open timeout: ${Oi}`), clearTimeout(Oi), Oi = null)
    },
    Ni = e => (Li || (e ? (Ti(`initial open with delay of ${e}ms`), Oi = setTimeout(() => {
      Oi = null, Li = !0, ki()
    }, e)) : (Ti("initial open without delay"), Li = !0, ki())), Bi),
    Di = (e, t, n) => {
      const r = aa("focus-trap");
      return a => {
        if (e && t && n !== va.status) {
          const e = ((e, t) => function(n) {
            if ("Tab" !== n.key) return;
            if (0 === t.length) return;
            const r = t[0],
              a = t[t.length - 1];
            t.includes(e.activeElement) || r.focus(), n.shiftKey ? e.activeElement === r && (n.preventDefault(), a.focus()) : e.activeElement === a && (n.preventDefault(), r.focus())
          })(a.getRootNode(), (e => Array.from(e.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])')))(a));
          return a.addEventListener("keydown", e), r("attaching focus trap", "debug"), () => {
            r("cleanup focus trap attachment", "debug"), a.removeEventListener("keydown", e)
          }
        }
        return ia
      }
    },
    Ri = (e, t) => {
      let {
        size: n
      } = e;
      const {
        type: r
      } = e;
      return void 0 === n ? n = (e => {
        const {
          type: t,
          layout: n
        } = e;
        return [ha.bar, ha.drawer].includes(t) ? ma.Full : t === ha.wide ? ma.Xxl : n === ga.vertical ? ma.Sm : n === ga.vertical_grouped ? ma.Md : ma.Xl
      })(e) : [ha.bar, ha.drawer].includes(r) ? n = ma.Full : r === ha.wide && (n = ma.Xxl), n === ma.Full ? "100%" : ((e, t) => `min(calc(100% - 2 * var(--actual-float)), ${e+2*t}px)`)(n, t)
    };

  function qi(e, t) {
    let n = !1;

    function r() {
      e.style.overflow = "", e.style.paddingRight = ""
    }

    function a(t) {
      t !== n && (n = t, n ? function() {
        const t = window.innerWidth - document.body.clientWidth;
        e.style.paddingRight = `${t}px`, e.style.overflow = "hidden"
      }() : r(), e.dispatchEvent(new CustomEvent("lockscrolltoggle", {
        detail: {
          locked: n
        }
      })))
    }
    return e.isSameNode(document) && (e = document.documentElement), a(t), {
      update(e) {
        a(e)
      },
      destroy() {
        r()
      }
    }
  }
  var Ii = Wn('<button type="button"> </button>'),
    Vi = Wn('<div class="group"></div>'),
    Hi = Wn("<!> <!>", 1),
    Ui = Wn("<!> <!>", 1),
    Fi = Wn("<div><!></div>");
  Vn(["click"]), Z = !0;
  var Gi = Xn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style="width: 0.75em; height: 0.75em; display: block;" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 1 1 19"></path><path d="M1 1 19 19"></path></svg>');

  function Wi(e) {
    Jn(e, Gi())
  }
  var Xi = Xn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325 79" fill="currentColor" stroke="none" style="width: auto; height: 16px; display: block;" aria-hidden="true"><path d="M8 78.6V56.2Q12.7 61 18.7 61q7 0 11.6-5.1T34.9 43q0-8-4.7-13-4.6-5.4-11.6-5.3-6 0-10.6 4.7v-3.7H0v52.8zM17.2 54q-4.3 0-7-3-2.7-3.2-2.7-8 0-5 2.7-8a9 9 0 0 1 7-3q4.2 0 6.9 3.2 2.7 3 2.7 8 0 4.6-2.8 7.7-2.6 3-6.8 3.1M58 61q5.6 0 10.5-4.5V60h8V25.8h-8v4q-4.8-5-10.8-5-6.9 0-11.5 5.1-4.5 5.2-4.6 12.9a19 19 0 0 0 4.6 13Q50.8 61 58 61m1.2-7q-4.1 0-6.9-3.1a12 12 0 0 1-2.6-8q0-4.7 2.7-7.8t6.8-3a9 9 0 0 1 7 3q2.8 3 2.8 8 0 4.8-2.7 7.9a9 9 0 0 1-7.1 3m35.1 6V43.5q0-6.4 1.7-9t5.6-2.6q3.5 0 5 2 1.3 2 1.3 7V60h8V39q0-7.2-2.9-10.4a12 12 0 0 0-9.3-3.8 13 13 0 0 0-9.4 4.1v-3.1h-7.9V60zm46.2 1q6 0 10.6-4.6V60h8V.6h-8v29.1q-4.7-5-10.7-4.9-7 0-11.5 5.2-4.6 5.1-4.6 12.8a19 19 0 0 0 4.6 13q4.6 5.2 11.6 5.2m1.3-7q-4 0-6.8-3.2a12 12 0 0 1-2.7-8q0-4.7 2.8-7.8t6.8-3a9 9 0 0 1 7 3q2.7 3 2.7 8 0 4.8-2.7 7.9a9 9 0 0 1-7.1 3m42.6 7q2.7 0 5-.6t4.2-1.8 3.7-3q1.6-2 3.3-4.6l-6.7-3.7a20 20 0 0 1-4.4 5.2 8 8 0 0 1-4.8 1.4q-3.8 0-6.3-2.4a10 10 0 0 1-2.7-6.8h24.5V43a19 19 0 0 0-4.3-13.3q-4.4-4.8-12-4.8t-12 5a19 19 0 0 0-4.5 13.1q0 8.3 4.7 13.2 4.6 4.9 12.3 4.9m-8.2-22.7 1.1-2.7a8 8 0 0 1 4.1-3.2q1.4-.5 2.7-.5 6.5 0 8 6.4zM226 61q4.8 0 9.6-2.5V48a20 20 0 0 1-5 4.7 10 10 0 0 1-5 1.2q-4.5 0-7.3-3-2.8-3.2-2.8-8t2.9-7.8 7.4-3.2q3 0 5 1.3 2.1 1.2 4.8 4.5V27.2a20 20 0 0 0-22.8 2.9 17 17 0 0 0-5.4 13q0 7.5 5.3 12.8 5.4 5 13.3 5m25.5-1V33.1h6.1v-7.3h-6.1V13.2h-8v12.6h-3.3V33h3.3v27zm26.8 1q2.6 0 5-.6 2.3-.6 4.2-1.8t3.7-3 3.3-4.6l-6.7-3.7a20 20 0 0 1-4.3 5.2 8 8 0 0 1-5 1.4q-3.6 0-6.1-2.4a10 10 0 0 1-2.8-6.8h24.6V43a19 19 0 0 0-4.4-13.3q-4.3-4.8-12-4.8-7.4 0-12 5a19 19 0 0 0-4.4 13.1q0 8.3 4.6 13.2t12.3 4.9m-8.1-22.7q.4-1.5 1-2.7a8 8 0 0 1 4.2-3.2q1.2-.5 2.7-.5 6.3 0 8 6.4zM312.6 61q5 0 8.6-3.2t3.6-8.3q0-3.9-2.2-6.1a27 27 0 0 0-8.4-5q-4.6-2-4.6-4 0-1 .8-1.8.8-.6 1.8-.7 2.3 0 3.9 3.2l6.5-3.5q-3.2-6.8-9.8-6.8-4.5 0-7.6 3-3 2.8-3 7.3 0 3.4 1.8 5.5 1.4 1.8 4.8 3.4l4.8 2.3q3.1 1.9 3.1 4 0 3.6-4 3.6-2 0-3.4-1.3-.7-.7-2.2-3.1l-6.7 3Q304 61 312.6 61"></path></svg>');
  var Ki = Wn("<option> </option>"),
    Ji = Wn('<select name="language"></select>');
  var Zi = Wn('<div class="body"><!> <!></div>');

  function Yi(e, t) {
    ne(t, !0);
    let n, r = Ye(void 0);
    const a = () => {
      if (!_n(r)) return;
      if (!(_n(r).scrollHeight > _n(r).clientHeight)) return void _n(r).classList.remove("overflown");
      const e = _n(r).scrollHeight < _n(r).clientHeight + _n(r).scrollTop + 10;
      _n(r).classList.toggle("overflown", !e)
    };
    Qr(a), jt(() => {
      if (!_n(r) || "undefined" == typeof ResizeObserver) return;
      const e = t.detailsRef ?? _n(r);
      return n?.disconnect(), n = new ResizeObserver(() => {
        a()
      }), n.observe(e), () => {
        n?.disconnect()
      }
    });
    var i = Zi(),
      o = mt(i);
    gr(o, () => t.intro ?? p), gr(bt(o, 2), () => t.details ?? p), U(i), Kr(i, e => et(r, e), () => _n(r)), qn("scroll", i, a), Jn(e, i), re()
  }
  var Qi = function(e) {
      return e.policy = "policy", e.imprint = "imprint", e.google = "google", e
    }({}),
    eo = Wn("<a> </a>"),
    to = Wn('<div class="links"></div>');

  function no(e, t) {
    ne(t, !0);
    const n = Ve(() => pi.settings),
      r = Ve(() => t.links.links),
      a = Ve(() => t.links.respectLocale),
      i = Ve(() => t.links.target),
      {
        locale: o
      } = Ja,
      s = Ve(() => _n(n).store),
      l = Ve(() => _n(s).primaryLocale),
      c = e => _n(a) && o !== _n(l) ? function(e, t) {
        if (!/^(https?:\/\/)/i.test(e)) return function(e, t) {
          if (!e || "/" === e) return `/${t}`;
          const n = (e.startsWith("/") ? e.slice(1) : e).split("/").filter(e => e);
          return 2 === n[0]?.length ? n[0] = t : n.unshift(t), `/${n.join("/")}`
        }(e, t);
        try {
          const n = new URL(e),
            r = new URL(window.location.href);
          if (n.hostname !== r.hostname) return e;
          const a = n.pathname.split("/").filter(e => e);
          return 2 === a[0]?.length ? a[0] = t : a.unshift(t), n.pathname = `/${a.join("/")}`, n.toString()
        } catch (n) {
          return e
        }
      }(e, o) : e;
    var d = Kn(),
      u = wt(d),
      f = e => {
        var n = to();
        dr(n, 21, () => _n(r), ({
          url: e,
          id: t
        }) => t, (e, n) => {
          let r = () => _n(n).id;
          var a = eo(),
            o = mt(a, !0);
          U(a), Bt(e => {
            Hr(a, "href", e), Hr(a, "target", r() === Qi.google ? "_blank" : _n(i)), Hr(a, "rel", r() === Qi.google ? "nofollow noopener noreferrer" : void 0), Yn(o, t.texts.links[r()])
          }, [() => c(_n(n).url)]), Jn(e, a)
        }), U(n), Jn(e, n)
      };
    sr(u, e => {
      _n(r).length > 0 && e(f)
    }), Jn(e, d), re()
  }
  var ro = Wn('<button type="button" aria-controls="message"> </button>'),
    ao = Wn('<span id="message"></span> <!>', 1);

  function io(e, t) {
    ne(t, !0);
    const n = Jr(t, "expandableIntro", 3, !1),
      r = Jr(t, "showMore", 3, ""),
      a = Jr(t, "showLess", 3, "");
    let i = Ye(!1),
      o = Ye(!1);
    const s = () => {
        et(i, !_n(i))
      },
      l = Ve(() => n() && !_n(i));
    var c = ao(),
      d = wt(c);
    let u;
    hr(d, () => t.message, !0), U(d), yr(d, () => {
      return e = n(), t => ((e => {
        if (!e) return et(i, !1), void et(o, !1);
        et(i, !1), et(o, !1), kn().then(() => {
          et(o, t.clientHeight < t.scrollHeight)
        })
      })(e), () => {});
      var e
    });
    var f = bt(d, 2),
      p = e => {
        var t = ro(),
          n = mt(t, !0);
        U(t), Bt(() => {
          Hr(t, "aria-expanded", !_n(l)), Yn(n, _n(l) ? r() : a())
        }), In("click", t, s), Jn(e, t)
      };
    sr(f, e => {
      n() && _n(o) && e(p)
    }), Bt(() => u = Cr(d, 1, "message", null, u, {
      truncated: _n(l)
    })), Jn(e, c), re()
  }
  Vn(["click"]);
  var oo = Wn("<div><!> <!></div>");

  function so(e, t) {
    const n = Ve(() => t.texts.notice.message),
      r = Ve(() => t.texts.buttons.showMore),
      a = Ve(() => t.texts.buttons.showLess),
      i = Ve(() => h(t.features.inlineLinks, !1)),
      o = Ve(() => h(t.features.expandableIntro, !1));
    {
      const s = e => {
        var s = oo();
        let l;
        var c = mt(s);
        io(c, {
          get message() {
            return _n(n)
          },
          get showMore() {
            return _n(r)
          },
          get showLess() {
            return _n(a)
          },
          get expandableIntro() {
            return _n(o)
          }
        }), no(bt(c, 2), {
          get texts() {
            return t.texts
          },
          get links() {
            return t.links
          }
        }), U(s), Bt(() => l = Cr(s, 1, "intro", null, l, {
          "inline-table": _n(i) && !_n(o)
        })), Jn(e, s)
      };
      Yi(e, {
        intro: s,
        $$slots: {
          intro: !0
        }
      })
    }
  }
  var lo = Xn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>');

  function co(e) {
    Jn(e, lo())
  }
  var uo = Wn("<div><!> <!></div>"),
    fo = Wn('<button type="button" class="trigger"><span> </span> <!></button>'),
    po = Wn('<label class="trigger"> </label>'),
    vo = Wn('<span class="trigger" role="heading" aria-level="3"> </span>'),
    ho = Wn('<span class="text-accent hidden @lg:block"> </span>'),
    go = Wn('<div class="checkbox"><input type="checkbox"/> <div><svg class="checkmark-svg w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></div></div>'),
    mo = Wn('<button role="switch" type="button"><span></span></button>'),
    wo = Wn('<span class="description"></span>'),
    bo = Wn('<tr><th> </th><td> </td></tr> <tr><th> </th><td> </td></tr> <tr><th> </th><td> </td></tr> <tr class="separator"><th> </th><td> </td></tr>', 1),
    yo = Wn('<div class="content" role="region"><table class="list"><tbody></tbody></table></div>'),
    xo = Wn('<div class="collapsible"><!> <div class="flex items-center gap-4"><!> <!></div> <!> <!></div>'),
    ko = Wn("<div></div>");

  function _o(e, t) {
    ne(t, !0);
    const n = Ve(() => h(t.features.useCheckboxes, !1)),
      r = Ve(() => h(t.features.expandableIntro, !1)),
      a = Ve(() => h(t.features.inlineLinks, !1)),
      i = Ve(() => h(t.features.showDescriptions, !1)),
      o = Ve(() => h(t.features.showCookies, !1)),
      s = Ve(() => t.texts.preferences.message),
      l = Ve(() => t.texts.preferences.cookieDetails),
      c = Ve(() => t.texts.buttons.showMore),
      d = Ve(() => t.texts.buttons.showLess);
    let u = Ye(void 0);
    const f = (e, t) => {
        pi.tempPreferences = t ? pi.tempPreferences - e : pi.tempPreferences + e
      },
      p = Ve(() => !_n(o) && !_n(i));
    let v = Ye(void 0);
    {
      const i = e => {
          var n = uo();
          let i;
          var o = mt(n);
          io(o, {
            get expandableIntro() {
              return _n(r)
            },
            get message() {
              return _n(s)
            },
            get showMore() {
              return _n(c)
            },
            get showLess() {
              return _n(d)
            }
          }), no(bt(o, 2), {
            get links() {
              return t.links
            },
            get texts() {
              return t.texts
            }
          }), U(n), Bt(() => i = Cr(n, 1, "intro", null, i, {
            "inline-table": _n(a) && !_n(r)
          })), Jn(e, n)
        },
        o = e => {
          var r = ko();
          let a;
          dr(r, 23, () => t.categories, e => e.bitwise, (e, r, a) => {
            const i = Ve(() => t.cookies.filter(e => e.category === _n(a))),
              o = Ve(() => 0 === (pi.tempPreferences & _n(r).bitwise)),
              s = Ve(() => _n(u) === _n(a)),
              c = Ve(() => `toggler-${_n(a)}`),
              d = Ve(() => `title-${_n(a)}`),
              v = Ve(() => `description-${_n(a)}`),
              h = Ve(() => `content-${_n(a)}`),
              g = Ve(() => t.texts.categories[_n(a)]?.title || ""),
              m = Ve(() => t.texts.categories[_n(a)]?.description || ""),
              w = Ve(() => t.features.showCookies && _n(i).length > 0);
            var b = xo(),
              y = mt(b),
              x = e => {
                var t = fo(),
                  n = mt(t),
                  r = mt(n, !0);
                U(n);
                var o = bt(n, 2),
                  l = e => {
                    co(e)
                  };
                sr(o, e => {
                  _n(i).length && e(l)
                }), U(t), Bt(() => {
                  Hr(t, "data-state", _n(s) ? "open" : "closed"), Hr(t, "aria-controls", _n(h)), Hr(t, "aria-expanded", _n(s)), Hr(n, "id", _n(d)), Yn(r, _n(g))
                }), In("click", t, () => {
                  try {
                    (e => {
                      et(u, _n(u) === e ? void 0 : e, !0)
                    })(_n(a))
                  } catch (e) {
                    throw oi(e), e
                  }
                }), Jn(e, t)
              },
              k = e => {
                var t = po(),
                  n = mt(t, !0);
                U(t), Bt(() => {
                  Hr(t, "id", _n(d)), Hr(t, "for", _n(c)), Yn(n, _n(g))
                }), Jn(e, t)
              },
              _ = e => {
                var t = vo(),
                  n = mt(t, !0);
                U(t), Bt(() => {
                  Hr(t, "id", _n(d)), Yn(n, _n(g))
                }), Jn(e, t)
              };
            sr(y, e => {
              _n(w) ? e(x) : _n(p) ? e(k, 1) : e(_, -1)
            });
            var S = bt(y, 2),
              A = mt(S),
              C = e => {
                var n = ho(),
                  r = mt(n, !0);
                U(n), Bt(() => Yn(r, t.texts.preferences.alwaysActive)), Jn(e, n)
              };
            sr(A, e => {
              0 !== _n(r).bitwise || _n(p) || e(C)
            });
            var M = bt(A, 2),
              P = e => {
                var t = go(),
                  n = mt(t);
                Ir(n), F(2), U(t), Bt(() => {
                  Hr(n, "tabindex", 0 === _n(r).bitwise ? -1 : 0), n.disabled = 0 === _n(r).bitwise, Hr(n, "aria-labelledby", _n(d)),
                    function(e, t) {
                      var n = Fr(e);
                      n.checked !== (n.checked = t ?? void 0) && (e.checked = t)
                    }(n, _n(o)), Hr(n, "id", _n(c))
                }), In("click", n, () => {
                  f(_n(r).bitwise, !_n(o))
                }), Jn(e, t)
              },
              z = e => {
                var t = mo();
                Bt(() => {
                  Hr(t, "id", _n(c)), Hr(t, "tabindex", 0 === _n(r).bitwise ? -1 : 0), t.disabled = 0 === _n(r).bitwise, Hr(t, "aria-checked", _n(o)), Hr(t, "data-state", _n(o) ? "checked" : "unchecked"), Hr(t, "aria-labelledby", _n(d))
                }), In("click", t, () => {
                  f(_n(r).bitwise, !_n(o))
                }), Jn(e, t)
              };
            sr(M, e => {
              _n(n) ? e(P) : e(z, -1)
            }), U(S);
            var E = bt(S, 2),
              j = e => {
                var t = wo();
                hr(t, () => _n(m), !0), U(t), Jn(e, t)
              };
            sr(E, e => {
              t.features.showDescriptions && e(j)
            });
            var T = bt(E, 2),
              $ = e => {
                var n = yo(),
                  r = mt(n),
                  a = mt(r);
                dr(a, 21, () => _n(i), lr, (e, n) => {
                  const r = Ve(() => "Session" === _n(n).retention ? t.texts.declaration.expirations?.declSession ? t.texts.declaration.expirations.declSession : _n(n).retention : void 0 !== _n(n).expires && void 0 !== t.texts.declaration.expirations && void 0 !== t.texts.declaration.expirations[_n(n).unit] ? `${_n(n).expires} ${t.texts.declaration.expirations[_n(n).unit]}` : _n(n).retention);
                  var a = bo(),
                    i = wt(a),
                    o = mt(i),
                    s = mt(o);
                  U(o);
                  var l = bt(o),
                    c = mt(l, !0);
                  U(l), U(i);
                  var d = bt(i, 2),
                    u = mt(d),
                    f = mt(u);
                  U(u);
                  var p = bt(u),
                    v = mt(p, !0);
                  U(p), U(d);
                  var h = bt(d, 2),
                    g = mt(h),
                    m = mt(g);
                  U(g);
                  var w = bt(g),
                    b = mt(w, !0);
                  U(w), U(h);
                  var y = bt(h, 2),
                    x = mt(y),
                    k = mt(x);
                  U(x);
                  var _ = bt(x),
                    S = mt(_, !0);
                  U(_), U(y), Bt(() => {
                    Yn(s, `${t.texts.declaration.name??""}:`), Yn(c, _n(n).name), Yn(f, `${t.texts.declaration.vendor??""}:`), Yn(v, _n(n).vendor), Yn(m, `${t.texts.declaration.retention??""}:`), Yn(b, _n(r)), Yn(k, `${t.texts.declaration.purpose??""}:`), Yn(S, t.texts.cookies?.[_n(n).name] || "")
                  }), Jn(e, a)
                }), U(a), U(r), U(n), Bt(() => {
                  Hr(n, "aria-labelledby", _n(d)), Hr(n, "aria-describedby", _n(v)), Hr(n, "id", _n(h)), Hr(n, "data-state", _n(s) ? "open" : "closed"), Hr(r, "aria-label", _n(l))
                }), Jn(e, n)
              };
            sr(T, e => {
              _n(w) && _n(s) && e($)
            }), U(b), Jn(e, b)
          }), U(r), Kr(r, e => et(v, e), () => _n(v)), Bt(() => a = Cr(r, 1, "details", null, a, {
            compact: _n(p)
          })), Jn(e, r)
        };
      Yi(e, {
        get detailsRef() {
          return _n(v)
        },
        intro: i,
        details: o,
        $$slots: {
          intro: !0,
          details: !0
        }
      })
    }
    re()
  }
  Vn(["click"]);
  var So = Xn('<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>');
  var Ao = Xn('<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="16" r="1"></circle><rect x="3" y="10" width="18" height="12" rx="2"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>');
  var Co = Wn("<li><!> <span> </span></li>"),
    Mo = Wn('<div class="intro"><!> <ul class="mt-2"></ul></div>'),
    Po = Wn('<tr><th> </th></tr> <tr><td class="font-mono"> </td></tr>', 1),
    zo = Wn('<div id="status-details" class="content" role="region" aria-labelledby="status-toggler"><table class="list"><tbody><tr><th> </th></tr><tr><td> </td></tr><!></tbody></table></div>'),
    Eo = Wn('<div class="details"><div class="collapsible border-0"><button class="trigger col-span-full" id="status-toggler" type="button" aria-controls="status-details"><span> </span> <!></button> <!></div></div>');

  function jo(e, t) {
    ne(t, !0);
    const n = Ve(() => t.texts.status.message),
      r = Ve(vi);
    let a = Ye(!1),
      i = Ye(void 0);
    {
      const o = e => {
          var a = Mo(),
            i = mt(a);
          io(i, {
            get message() {
              return _n(n)
            }
          });
          var o = bt(i, 2);
          dr(o, 21, () => t.categories, lr, (e, n, a) => {
            var i = Co(),
              o = mt(i),
              s = e => {
                ! function(e) {
                  Jn(e, Ao())
                }(e)
              },
              l = e => {
                ! function(e) {
                  Jn(e, So())
                }(e)
              },
              c = e => {
                Wi(e)
              };
            sr(o, e => {
              0 === _n(n).bitwise ? e(s) : 0 === (_n(r) & _n(n).bitwise) ? e(l, 1) : e(c, -1)
            });
            var d = bt(o, 2),
              u = mt(d, !0);
            U(d), U(i), Bt(() => Yn(u, t.texts.categories[a]?.title || "")), Jn(e, i)
          }), U(o), U(a), Jn(e, a)
        },
        s = e => {
          var n = Kn(),
            r = wt(n),
            o = e => {
              var n = Eo(),
                r = mt(n),
                o = mt(r),
                s = mt(o),
                l = mt(s, !0);
              U(s), co(bt(s, 2)), U(o);
              var c = bt(o, 2),
                d = e => {
                  var n = zo(),
                    r = mt(n),
                    a = mt(r),
                    i = mt(a),
                    o = mt(i),
                    s = mt(o, !0);
                  U(o), U(i);
                  var l = bt(i),
                    c = mt(l),
                    d = mt(c, !0);
                  U(c), U(l);
                  var u = bt(l),
                    f = e => {
                      var n = Po(),
                        r = wt(n),
                        a = mt(r),
                        i = mt(a, !0);
                      U(a), U(r);
                      var o = bt(r, 2),
                        s = mt(o),
                        l = mt(s, !0);
                      U(s), U(o), Bt(() => {
                        Yn(i, t.texts.status.consentId), Yn(l, pi.consent.id)
                      }), Jn(e, n)
                    };
                  sr(u, e => {
                    pi.consent?.id && e(f)
                  }), U(a), U(r), U(n), Bt(e => {
                    Yn(s, t.texts.status.consentDate), Yn(d, e)
                  }, [() => pi.consent ? new Date(1e3 * pi.consent.timestamp).toUTCString() : t.texts.status.noConsent]), Jn(e, n)
                };
              sr(c, e => {
                _n(a) && e(d)
              }), U(r), U(n), Kr(n, e => et(i, e), () => _n(i)), Bt(() => {
                Hr(o, "data-state", _n(a) ? "open" : "closed"), Hr(o, "aria-expanded", _n(a)), Yn(l, _n(a) ? t.texts.status.hideDetails : t.texts.status.showDetails)
              }), In("click", o, () => et(a, !_n(a))), Jn(e, n)
            };
          sr(r, e => {
            t.features.showStatusDetails && e(o)
          }), Jn(e, n)
        };
      Yi(e, {
        get detailsRef() {
          return _n(i)
        },
        intro: o,
        details: s,
        $$slots: {
          intro: !0,
          details: !0
        }
      })
    }
    re()
  }
  Vn(["click"]);
  var To = Wn('<img class="logo" alt="Logo" aria-hidden="true"/>'),
    $o = Wn('<div class="logo" aria-hidden="true"></div>'),
    Lo = Wn('<button type="button" class="close"><!></button>'),
    Oo = Wn('<div class="menu"><!> <!></div>'),
    Bo = Wn('<div class="header"><h2 class="title"><!> <span> </span></h2> <!></div>'),
    No = Wn('<div class="footer" dir="ltr"><span>Powered by</span> <a href="https://pandectes.io" rel="noopener" target="_blank" aria-label="Powered by Pandectes"><!></a></div>'),
    Do = Wn("<div><!> <!> <!></div> <!>", 1),
    Ro = Wn('<div class="overlay"></div>'),
    qo = Wn("<!> <!>", 1);

  function Io(e, t) {
    ne(t, !0);
    const n = Ve(() => pi.settings),
      r = Ve(() => _n(n).theme.isModal),
      a = Ve(() => _n(n).theme.scrollLock),
      i = Ve(() => _n(n).theme.showPoweredBy),
      o = Ve(() => _n(n).theme.border),
      s = Ve(() => _n(n).theme.logos),
      l = Ve(() => _n(n).theme.buttons),
      c = Ve(() => _n(n).theme.shadows),
      d = Ve(() => _n(n).theme.useAnimations),
      u = Ve(() => _n(n).close),
      f = Ve(() => _n(n).language),
      v = Ve(() => _n(n).categories),
      h = Ve(() => _n(n).cookies),
      g = Ve(() => _n(n).links),
      m = Ve(() => _n(n).texts[pi.language] || _n(n).texts[_n(f).fallback]),
      w = Ve(() => t.dialog.style),
      b = Ve(() => pi.active === va.status ? jo : pi.active === va.preferences ? _o : so),
      y = Ve(() => t.dialog.features),
      x = Ve(() => !!_n(y).alignCenter),
      _ = Ve(() => !!_n(y).hideHeader),
      S = Ve(() => ja === ya.div),
      A = Ve(() => _n(f).allowChange || _n(u).triggers.includes(fa.button)),
      C = Ve(() => (_n(w).type === ha.bar || _n(w).type === ha.wide) && [ga.horizontal, ga.vertical, ga.vertical_grouped].includes(_n(w).layout)),
      M = Ve(() => (e => {
        if (!e) return !1;
        const t = e.toLowerCase().split("-")[0];
        return si.has(t)
      })(pi.language)),
      P = Ve(() => Ri(_n(w), _n(o))),
      z = Ve(() => pi.active ? window.scrollY : null);
    var E = qo();
    qn("keydown", ct, e => {
      "Escape" === e.key && (t.active && ja === ya.dialog && e.preventDefault(), _n(u).triggers.includes(fa.escape) && Si(xa.dismiss, fa.escape))
    }), qn("click", ct, e => {
      try {
        if (!pi.ref) return;
        const n = aa("clickOutside");
        if (!_n(u).triggers.includes(fa.clickOutside)) return;
        if (_n(r) && t.active !== va.status) return void n("modal window (not status) - ignoring click outside");
        if (e.composedPath().some(e => e instanceof HTMLAnchorElement && "#reopenbanner" === e.hash.toLowerCase())) return void n("Reopen trigger click - ignoring");
        if (!1 === e.composedPath().includes(pi.ref)) return n("Eligible click"), Si(xa.dismiss, fa.clickOutside);
        n("Ineligible click")
      } catch (n) {
        throw oi(n), n
      }
    }), qn("scroll", lt, () => {
      _n(r) || pi.touched || _n(u).triggers.includes(fa.scroll) && _n(u).pixels && null !== _n(z) && Math.abs(window.scrollY - _n(z)) > _n(u).pixels && Si(xa.dismiss, fa.scroll)
    }), qn("resize", lt, () => {}), br(ct.body, (e, t) => qi?.(e, t), () => _n(a) && !!t.active && t.active !== va.status && _n(r));
    var j = wt(E);
    wr(j, () => ja, !1, (e, n) => {
      Kr(e, e => pi.ref = e, () => pi?.ref), yr(e, () => _n(S) ? Di(!!pi.active, _n(r), t.active) : () => {});
      var a = () => {
        try {
          pi.touched = !0
        } catch (e) {
          throw oi(e), e
        }
      };
      Ur(e, () => ({
        ..._n(S) ? {
          role: "dialog",
          "data-open": !!pi.active,
          "aria-modal": _n(r)
        } : {
          closedby: "none"
        },
        "aria-label": _n(m)[t.active].title,
        dir: _n(M) ? "rtl" : "ltr",
        class: ["dialog", pi.active, _n(w).type, _n(w).position, _n(w).animation],
        style: `border-width:${_n(o)}px; max-width: ${_n(P)};`,
        onclick: a,
        [$r]: {
          "shadow-dialog": _n(c),
          animate: _n(d)
        }
      }));
      var z = Do(),
        E = wt(z);
      let j;
      var T = mt(E),
        $ = e => {
          var n = Bo(),
            r = mt(n),
            a = mt(r),
            i = e => {
              var t = Kn(),
                n = wt(t),
                r = e => {
                  var t = To();
                  Bt(() => Hr(t, "src", _n(s).banner)), Jn(e, t)
                },
                a = e => {
                  var t = $o();
                  Bt(() => Pr(t, `mask-image: url('${_n(s).banner??""}'); -webkit-mask-image: url('${_n(s).banner??""}');`)), Jn(e, t)
                };
              sr(n, e => {
                _n(s).custom ? e(r) : e(a, -1)
              }), Jn(e, t)
            };
          sr(a, e => {
            _n(s).banner.length > 0 && e(i)
          });
          var o = bt(a, 2),
            l = mt(o, !0);
          U(o), U(r);
          var c = bt(r, 2),
            d = e => {
              var n = Oo(),
                r = mt(n),
                a = e => {
                  ! function(e, t) {
                    ne(t, !0);
                    let n = Jr(t, "current", 15);
                    var r = Ji();
                    dr(r, 20, () => t.languages, e => e, (e, t) => {
                      var n = Ki(),
                        r = mt(n, !0);
                      U(n);
                      var a = {};
                      Bt(e => {
                        Yn(r, e), a !== (a = t) && (n.value = (n.__value = t) ?? "")
                      }, [() => t.toUpperCase()]), Jn(e, n)
                    }), U(r), jr(r, n), Jn(e, r), re()
                  }(e, {
                    get languages() {
                      return _n(f).supported
                    },
                    get current() {
                      return pi.language
                    },
                    set current(e) {
                      pi.language = e
                    }
                  })
                };
              sr(r, e => {
                _n(f).allowChange && e(a)
              });
              var i = bt(r, 2),
                o = e => {
                  var n = Lo();
                  Wi(mt(n)), U(n), Bt(() => Hr(n, "aria-label", _n(m)[t.active].dismiss)), In("click", n, () => {
                    try {
                      Si(xa.dismiss, fa.button)
                    } catch (e) {
                      throw oi(e), e
                    }
                  }), Jn(e, n)
                },
                s = Ve(() => _n(u).triggers.includes(fa.button));
              sr(i, e => {
                _n(s) && e(o)
              }), U(n), Jn(e, n)
            };
          sr(c, e => {
            _n(A) && e(d)
          }), U(n), Bt(() => Yn(l, _n(m)[t.active].title)), Jn(e, n)
        };
      sr(T, e => {
        _n(_) || e($)
      });
      var L = bt(T, 2);
      ! function(e, t, n) {
        var r;
        q && (r = R, H());
        var a = new or(e);
        Nt(() => {
          var e = t() ?? null;
          if (q && "[" === W(r) != (null !== e)) {
            var i = G();
            return V(i), a.anchor = i, I(!1), a.ensure(e, e && (t => n(t, e))), void I(!0)
          }
          a.ensure(e, e && (t => n(t, e)))
        }, k)
      }(L, () => _n(b), (e, t) => {
        t(e, {
          get texts() {
            return _n(m)
          },
          get links() {
            return _n(g)
          },
          get features() {
            return _n(y)
          },
          get categories() {
            return _n(v)
          },
          get cookies() {
            return _n(h)
          }
        })
      });
      var O = bt(L, 2);
      {
        let e = Ve(() => t.active === va.preferences);
        ! function(e, t) {
          ne(t, !0);
          const n = (e, n = p, r = p) => {
            var i = Kn(),
              o = wt(i),
              s = e => {
                var i = Vi();
                dr(i, 20, n, e => e, (e, n) => {
                  var i = Ii(),
                    o = mt(i, !0);
                  U(i), Bt(() => {
                    Cr(i, 1, kr([t.theme.variants[r()], n, r()])), Yn(o, t.texts[n])
                  }), In("click", i, () => {
                    try {
                      a() ? n === xa.allow ? pi.tempPreferences = Va.AllAllowed : n === xa.deny ? pi.tempPreferences = Va.AllBlocked : Si(n) : Si(n)
                    } catch (e) {
                      throw oi(e), e
                    }
                  }), Jn(e, i)
                }), U(i), Jn(e, i)
              };
            sr(o, e => {
              n().length && e(s)
            }), Jn(e, i)
          };
          let r = Jr(t, "flipped", 3, !1),
            a = Jr(t, "primarySave", 3, !1);
          const i = Ve(() => (r() ? t.buttons.primary?.slice().reverse() : t.buttons.primary) || []),
            o = Ve(() => (r() ? t.buttons.secondary?.slice().reverse() : t.buttons.secondary) || []);
          var s = Fi();
          let l;
          var c = mt(s),
            d = e => {
              var t = Hi(),
                r = wt(t);
              n(r, () => _n(o), () => ii.secondary), n(bt(r, 2), () => _n(i), () => ii.primary), Jn(e, t)
            },
            u = e => {
              var t = Ui(),
                r = wt(t);
              n(r, () => _n(i), () => ii.primary), n(bt(r, 2), () => _n(o), () => ii.secondary), Jn(e, t)
            };
          sr(c, e => {
            r() ? e(d) : e(u, -1)
          }), U(s), Bt(() => l = Cr(s, 1, kr(["actions", t.layout]), null, l, {
            divided: t.divided
          })), Jn(e, s), re()
        }(O, {
          get layout() {
            return _n(w).layout
          },
          get divided() {
            return _n(e)
          },
          get theme() {
            return _n(l)
          },
          get buttons() {
            return t.dialog.buttons
          },
          get texts() {
            return _n(m)[t.active]
          },
          get flipped() {
            return _n(y).flipButtons
          },
          get primarySave() {
            return _n(y).primarySave
          }
        })
      }
      U(E);
      var B = bt(E, 2),
        N = e => {
          var t = No(),
            n = bt(mt(t), 2);
          ! function(e) {
            Jn(e, Xi())
          }(mt(n)), U(n), U(t), Bt(() => t.dir = t.dir), Jn(e, t)
        };
      sr(B, e => {
        _n(i) && t.active !== va.notice && e(N)
      }), Bt(() => j = Cr(E, 1, "inner", null, j, {
        "inner-grid": _n(C),
        "align-center": _n(x)
      })), Jn(n, z)
    });
    var T = bt(j, 2),
      $ = e => {
        var t = Ro();
        Hr(t, "aria-hidden", !0), Bt(() => Hr(t, "data-open", !!pi.active)), Jn(e, t)
      };
    sr(T, e => {
      _n(S) && _n(r) && pi.active !== va.status && e($)
    }), Jn(e, E), re()
  }
  Vn(["click"]);
  var Vo = Wn('<img class="img" aria-hidden="true"/>'),
    Ho = Wn('<div class="img" aria-hidden="true"></div>'),
    Uo = Wn("<button><!></button>");

  function Fo(e, t) {
    ne(t, !0);
    const n = Ve(() => pi.settings),
      r = Ve(() => _n(n).theme),
      a = Ve(() => _n(n).widget),
      i = Ve(() => _n(n).close),
      o = Ve(() => _n(n).language),
      s = Ve(() => _n(n).dialogs),
      l = Ve(() => _n(n).visibility),
      c = Ve(() => _n(n).consent),
      d = Ve(() => _n(n).texts),
      u = Ve(() => _n(d)[pi.language] || _n(d)[_n(o).fallback]),
      f = Ve(() => pi.active),
      p = Ve(() => _n(f) ? _n(s)[_n(f)] : null),
      v = (h = {
        getStartHidden: () => _n(l).startHidden,
        getTouched: () => pi.touched,
        getConsent: () => pi.consent,
        getDelay: () => _n(l).delay
      }, $t(() => (jt(() => {
        const e = $i([...h.getStartHidden()]) && !h.getTouched(),
          t = !!h.getConsent();
        return e && !t ? (Bi(), void(pi.active && _i())) : e || h.getTouched() || t ? void Bi() : Ni(h.getDelay())
      }), () => {
        Bi(), Li = !1
      })));
    var h;
    const g = ji({
        getCustomTrigger: () => _n(a).customTrigger
      }),
      m = (e => $t(() => {
        let t = null;
        const n = () => {
          t && (zi(`clearing auto close timeout: ${t}`), clearTimeout(t), t = null)
        };
        return jt(() => {
          if (!e.getTouched() && e.getTriggers().includes(fa.timeout)) {
            const r = e.getTimeout();
            return r ? (zi(`auto close after ${r}ms`), t = setTimeout(() => Si(xa.dismiss, fa.timeout), r), n) : n
          }
          return n
        }), n
      }))({
        getTouched: () => pi.touched,
        getTriggers: () => _n(i).triggers,
        getTimeout: () => _n(i).timeout
      }),
      w = Pi({
        getVariables: () => _n(r).variables
      }),
      b = Ei({
        getEnabled: () => _n(c).broadcastChannel
      });
    var y;
    y = () => {
      v(), g(), m(), w(), b()
    }, null === ee && $(), Qr(() => () => Cn(y));
    var x = Kn(),
      k = wt(x),
      _ = e => {
        var t = Kn(),
          n = wt(t),
          r = e => {
            Io(e, {
              get active() {
                return _n(f)
              },
              get dialog() {
                return _n(p)
              }
            })
          };
        sr(n, e => {
          _n(p) && e(r)
        }), Jn(e, t)
      },
      S = e => {
        ! function(e, t) {
          ne(t, !0);
          const n = Ve(() => t.theme.logos),
            r = Ve(() => t.theme.shadows),
            a = Ve(() => t.widget.action === ka.reopen ? t.texts.status.reopen : t.texts.status.title);
          var i = Uo();
          let o;
          var s = mt(i),
            l = e => {
              var t = Vo();
              Bt(() => {
                Hr(t, "src", _n(n).widget), Hr(t, "alt", _n(a))
              }), Jn(e, t)
            },
            c = e => {
              var t = Ho();
              Bt(() => Pr(t, `mask-image: url('${_n(n).widget??""}'); -webkit-mask-image: url('${_n(n).widget??""}');`)), Jn(e, t)
            };
          sr(s, e => {
            _n(n).customWidget ? e(l) : e(c, -1)
          }), U(i), Bt(() => {
            o = Cr(i, 1, kr(["widget", t.widget.position]), null, o, {
              "shadow-dialog": _n(r)
            }), Hr(i, "aria-label", _n(a))
          }), In("click", i, e => {
            try {
              Si(t.widget.action === ka.reopen ? xa.reopen : xa.status), e.stopPropagation()
            } catch (n) {
              throw oi(n), n
            }
          }), Jn(e, i), re()
        }(e, {
          get widget() {
            return _n(a)
          },
          get texts() {
            return _n(u)
          },
          get theme() {
            return _n(r)
          }
        })
      };
    sr(k, e => {
      _n(f) ? e(_) : _n(a).enabled && e(S, 1)
    }), Jn(e, x), re()
  }

  function Go(e, t) {
    ne(t, !0);
    const n = aa("Bootstrap"),
      r = Ve(() => pi.settings),
      a = Ve(() => ["US", "CA"].includes(t.country) ? t.country + t.state : t.country),
      i = Ve(() => Mi(_n(r).store.plan)),
      o = !(void 0 === window.dataLayer || !Array.isArray(window.dataLayer) || !window.dataLayer.some(e => "pandectes_full_scan" === e?.event)),
      s = (() => {
        if (navigator.webdriver) return !0;
        const e = navigator.userAgent;
        return !!/bot|crawler|spider|crawling|lighthouse|inspect|slurp|facebookexternalhit/i.test(e) || !!/HeadlessChrome/.test(e) || !!(navigator.userAgentData?.brands)?.some(e => /headless/i.test(e.brand))
      })(),
      l = Ve(() => (({
        settings: e,
        country: t,
        region: n,
        preview: r,
        isBot: a,
        scanner: i,
        designMode: o
      }) => {
        const {
          visibility: s,
          regions: l
        } = e;
        if (!s.enabled) return !1;
        if (a && s.botsFriendly) return !1;
        if (s.adminMode && !r) return !1;
        if (s.disableDesignMode && o) return !1;
        if (i) return !1;
        if (Array.isArray(l.visible)) {
          if ("" === t) return !1;
          if (!l.visible.includes(n) && !l.visible.some(e => e.startsWith(n))) return !1
        }
        return !0
      })({
        settings: _n(r),
        country: t.country,
        region: _n(a),
        preview: t.preview,
        isBot: s,
        scanner: o,
        designMode: Boolean(window.Shopify?.designMode)
      }));
    Qr(async () => {
      try {
        const r = {
          policy: t.policy,
          region: _n(a),
          banner: _n(l)
        };
        if (!window.PandectesRules && _n(i)) {
          n("PandectesRules not found, waiting for it to be available...");
          try {
            await Da(window, "PandectesRules")
          } catch (e) {
            n(e, "warn")
          }
        }
        o || s && _n(l) ? Si(xa.allow) : _n(i) && window.dispatchEvent(new CustomEvent(_a.Initialized, {
          detail: r
        }))
      } catch (e) {
        throw oi(e), e
      }
    });
    var c = Kn(),
      d = wt(c),
      u = e => {
        Fo(e, {})
      };
    sr(d, e => {
      _n(l) && e(u)
    }), Jn(e, c), re()
  }

  function Wo(e, t) {
    ne(t, !0);
    var n = Kn(),
      r = wt(n),
      a = e => {
        var n = Kn();
        Be(wt(n), {
          onerror: e => {
            oi(e)
          }
        }, e => {
          Go(e, {
            get preview() {
              return t.preview
            },
            get country() {
              return t.country
            },
            get state() {
              return t.state
            },
            get policy() {
              return t.policy
            },
            get locale() {
              return t.locale
            },
            get customer() {
              return t.customer
            }
          })
        }), Jn(e, n)
      };
    sr(r, e => {
      pi.settings && e(a)
    }), Jn(e, n), re()
  }
  Vn(["click"]);
  var Xo = function(e) {
      return e.True = "true", e.False = "false", e
    }({}),
    Ko = aa("element"),
    Jo = "pandectes-region",
    Zo = "data-active-instance",
    Yo = class extends HTMLElement {
      _app;
      abortController = new AbortController;
      constructor() {
        super(), this.attachShadow({
          mode: "open"
        })
      }
      disconnectedCallback() {
        this.abortController.abort(), this._app && (ar(this._app), ui = Va.AllBlocked, pi.ref = void 0, pi.settings = null, pi.baseSettings = null, pi.active = null, pi.tempPreferences = Va.AllBlocked, pi.consent = null, pi.touched = !1, pi.language = "en", gi?.(), gi = null), La = null, this.removeAttribute(Zo)
      }
      getLocale(e) {
        const t = this.attributes.getNamedItem("data-locale");
        return t && t.value.length > 0 ? t.value.substring(0, 2) : window.Shopify?.locale ? window.Shopify.locale.substring(0, 2) : (Ko(`"data-locale" not set or undetectable. Falling back to "${e}".`, "warn"), e)
      }
      getPreview() {
        const e = this.attributes.getNamedItem("data-preview");
        return e && e.value.length > 0 ? e.value === Xo.True : void 0 !== window.Shopify?.previewMode && window.Shopify.previewMode
      }
      getCustomer() {
        const e = this.attributes.getNamedItem("data-customer")?.value;
        return e && /^\d+$/.test(e) ? e : window.__st?.cid ? window.__st.cid.toString() : "0"
      }
      getCountryStateFromRegion(e) {
        if (!e || 0 === e.length) return {
          country: "",
          state: ""
        };
        const t = e.replace(/[^a-zA-Z0-9]/g, "").trim().toUpperCase();
        return t.length <= 2 ? {
          country: t,
          state: ""
        } : {
          country: t.substring(0, 2),
          state: t.substring(2)
        }
      }
      getPolicy(e, t, n, r, a) {
        if (t.isAvailable && !e) return t.shouldShowBanner() ? ni.Optin : ni.Optout;
        const {
          strict: i
        } = n.regions;
        if ("*" === i) return ni.Optin;
        if (!i || 0 === i.length) return ni.Optout;
        const o = r.toUpperCase(),
          s = a.toUpperCase(),
          l = ["US", "CA"].includes(o) ? o + s : o;
        return i.includes(l) ? ni.Optin : ni.Optout
      }
      mountPandectes(e, t, n, r, a) {
        const i = this.getPolicy(a.store.headless, t, a, n, r);
        Ko(`Policy: ${i}`);
        const o = {
          locale: this.getLocale(a.language.fallback),
          preview: this.getPreview(),
          country: n,
          state: r,
          policy: i,
          customer: this.getCustomer()
        };
        Oa(e), yi({
          props: o,
          settings: a
        });
        try {
          this._app = Qn(Wo, {
            target: e,
            intro: !0,
            props: o
          })
        } catch (s) {
          Ko(`Failed to mount Svelte application: ${s}`, "error"), this.abortController.abort()
        }
      }
      async loadSettings(e, t) {
        const n = e.host;
        if (n?.appData) return n.appData;
        const {
          value: r
        } = await Da(window, "pandectesBannerSettings", t);
        return r
      }
      async loadGeolocation(e) {
        let t = "";
        try {
          t = window.sessionStorage.getItem(Jo) || ""
        } catch (n) {}
        if (t.length) return t;
        try {
          const r = await (await fetch("https://geo.pandect.es/325dc1fe-5446-4680-8546-11848623151c", {
            signal: e
          })).json();
          if (r.data && (t = (r.data.country || "") + (r.data.state || ""), t.length)) try {
            window.sessionStorage.setItem(Jo, t)
          } catch (n) {}
          return t
        } catch (n) {
          return "AbortError" === n.name || (oi(n), Ko(`Geolocation API request failed: ${n}`, "warn")), ""
        }
      }
      async getRegion(e, t, n) {
        const r = e => e.trim().toUpperCase(),
          a = this.attributes.getNamedItem("data-region");
        if (a) return 0 === a.value.length && Ko('"data-region" was provided but with empty string.', "warn"), r(a.value);
        if (e.isAvailable) {
          const t = e.getRegion();
          if (t && t.length > 0) return r(t)
        }
        const i = await this.loadGeolocation(n);
        return i ? r(i) : ""
      }
      async connectedCallback() {
        const e = document.querySelector(`pandectes-cmp[${Zo}="true"]`);
        if (e && e !== this) return Ko("Another pandectes-cmp instance is already active. Removing this one.", "warn"), void this.remove();
        this.setAttribute(Zo, "true");
        const t = this.abortController.signal;
        if (this.shadowRoot) try {
          Oa(this.shadowRoot), (e => {
            if (e.getElementById("pandectes-cmp-default-styles")) return;
            const t = document.createElement("style");
            t.textContent = '/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-font-weight:initial;--tw-duration:initial;--tw-leading:initial}}}@layer theme{:root,:host{--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--spacing:.25rem;--font-weight-semibold:600;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-family,inherit);--default-mono-font-family:var(--font-mono);--color-base-100:var(--color-base-100);--color-base-200:var(--color-base-200);--color-base-300:var(--color-base-300);--color-base-content:var(--color-base-content);--color-primary:var(--color-primary);--color-primary-content:var(--color-primary-content);--color-secondary:var(--color-secondary);--color-secondary-content:var(--color-secondary-content);--color-accent:var(--color-accent);--color-accent-content:var(--color-accent-content);--tw-border-style:solid;--font-weight-button:var(--font-weight-button,400);--radius-dialog:var(--radius-dialog,12px);--radius-button:var(--radius-button,8px);--shadow-button:var(--shadow-button);--shadow-dialog:var(--shadow-dialog,0 0 14px #00000080);--tw-shadow-color:black;--tw-inset-shadow:0 0 #0000;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:host{--spacing:.25em;--motion:cubic-bezier(.4, 0, .2, 1);--font-size:16px;--duration:.5s;--padding:16px;--float:16px;--widget-float:16px;--radius-dialog:8px;--radius-button:8px;--border-button:2px;--font-weight-button:400;--actual-float:max(0px, min(var(--float), (100vw - 400px) * 1000));--backdrop-blur:0px;--max-height:80dvh}a{white-space:nowrap;text-decoration-line:underline}.dialog:focus-visible{--tw-outline-style:none;outline-style:none}button,input,select,a,label{pointer-events:auto;cursor:pointer;-webkit-user-select:none;user-select:none}:is(button,input,select,a,label):focus-visible{outline-style:var(--tw-outline-style);outline-offset:3px;outline-width:2px;outline-color:var(--color-base-content);--tw-outline-style:solid;outline-style:solid}}@layer components{.widget{--actual-float:var(--widget-float);pointer-events:auto;z-index:10;width:calc(var(--spacing) * 11);height:calc(var(--spacing) * 11);background-color:var(--color-base-100);padding:calc(var(--spacing) * 2);color:var(--color-base-content);border-radius:3.40282e38px}@media (hover:hover){.widget:hover{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}}.widget>.img{width:calc(var(--spacing) * 7);height:calc(var(--spacing) * 7);-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.widget>div.img{background-color:currentColor}.dialog{pointer-events:none;z-index:10;width:100%;min-width:100%;transform-origin:var(--transform-origin-y) var(--transform-origin-x);border-color:var(--color-base-content);background-color:var(--color-base-100);font-size:calc(var(--font-size,16px) - 2px);color:var(--color-base-content);opacity:0;border-radius:0;display:block;overflow:hidden;container-type:inline-size}@media (width>=400px){.dialog{border-radius:var(--radius-dialog,12px);min-width:auto;font-size:var(--font-size,16px)}}.dialog[open],.dialog[data-open=true],:is(.dialog[open],.dialog[data-open=true])::backdrop{pointer-events:auto;opacity:1}.dialog::backdrop{pointer-events:none;opacity:0;--tw-backdrop-blur:blur(var(--backdrop-blur));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);background-color:oklab(0% none none/.5)}.dialog+.overlay{pointer-events:none;inset:calc(var(--spacing) * 0);z-index:0;animation:fade-in var(--motion) var(--duration) forwards;display:none;position:fixed}.dialog+.overlay[data-open=true]{pointer-events:auto;background-color:oklab(0% none none/.5);display:block}.widget,.dialog{inset:unset;transform-origin:var(--transform-origin-y) var(--transform-origin-x);position:fixed}:is(.widget,.dialog).top{--vertical-slide-direction:-100%;--transform-origin-y:top;top:var(--actual-float);--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}:is(.widget,.dialog).bottom{--vertical-slide-direction:100%;--transform-origin-y:bottom;bottom:var(--actual-float);--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}:is(.widget,.dialog).left{--horizontal-slide-direction:-100%;--transform-origin-x:left;left:var(--actual-float);--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}:is(.widget,.dialog).right{--horizontal-slide-direction:100%;--transform-origin-x:right;right:var(--actual-float);--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}:is(.widget,.dialog).center{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y);left:50%}:is(.widget,.dialog).middle{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y);top:50%}.inner{max-height:var(--max-height);flex-direction:column;align-items:stretch;display:flex}@container (width>=500px){.inner.inner-grid{gap:calc(var(--spacing) * 4);padding:var(--padding);grid-template-columns:1fr auto;display:grid}.inner.inner-grid:has(.header){grid-template-rows:auto minmax(0,1fr)}.inner.inner-grid>div{padding:calc(var(--spacing) * 0)}}.inner.inner-grid>.body{align-self:center}@container (width>=500px){.inner.inner-grid>.body{padding-right:calc(var(--spacing) * 4)}.inner.inner-grid>.header{grid-column:span 2/span 2}.inner.inner-grid>.actions{border-style:var(--tw-border-style);border-width:0;align-self:center}.inner.inner-grid.compact>.inner{align-items:center;column-gap:var(--padding);flex-direction:row;display:flex}}.inner>.header+.body{padding-top:calc(var(--spacing) * 0)}.inner>.body{padding-top:var(--padding)}.dialog:has(.footer)>.inner{max-height:calc(var(--max-height) - 2.5em)}.header{align-items:center;gap:calc(var(--spacing) * 2);padding:var(--padding);flex-wrap:wrap;display:flex}.header>h2{min-width:calc(var(--spacing) * 0);align-items:center;gap:calc(var(--spacing) * 2.5);font-size:var(--font-size,16px);--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold);text-wrap:balance;flex:1;display:flex}@media (width>=400px){.header>h2{font-size:calc(var(--font-size,16px) + 2px)}}.header>h2>.logo{height:calc(var(--spacing) * 6)}@media (width>=400px){.header>h2>.logo{height:calc(var(--spacing) * 8)}}.header>h2>div.logo{width:calc(var(--spacing) * 6);background-color:currentColor;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}@media (width>=400px){.header>h2>div.logo{width:calc(var(--spacing) * 8)}}.header>div.menu{align-items:center;gap:calc(var(--spacing) * 4);align-self:flex-start;margin-left:auto;display:flex}.header>div.menu>button,.header>div.menu>select{cursor:pointer;appearance:none;opacity:.7;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media (hover:hover){:is(.header>div.menu>button,.header>div.menu>select):hover{opacity:1}}:is(.header>div.menu>button,.header>div.menu>select) option{background-color:var(--color-base-100);padding:calc(var(--spacing) * 1);color:var(--color-base-content)}:is(.header>div.menu>button,.header>div.menu>select)>svg{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.body{overscroll-behavior-y:contain;width:100%;max-height:100%;padding-inline:var(--padding);scrollbar-color:var(--color-base-content) var(--color-base-300);flex-direction:column;align-self:flex-start;display:flex;overflow-y:auto}@supports (color:color-mix(in lab, red, red)){.body{scrollbar-color:color-mix(in oklab, var(--color-base-content) 50%, transparent) var(--color-base-300)}}.body::-webkit-scrollbar-track{background-color:var(--color-base-300)}@supports (color:color-mix(in lab, red, red)){.body::-webkit-scrollbar-track{background-color:color-mix(in oklab, var(--color-base-300) 20%, transparent)}}.body::-webkit-scrollbar-thumb{background-color:var(--color-primary)}.body.overflown{-webkit-mask-image:linear-gradient(#0000 0,#000 0 calc(100% - 64px),#0000 100%);mask-image:linear-gradient(#0000 0,#000 0 calc(100% - 64px),#0000 100%)}.body>.intro{overflow-wrap:anywhere}.body>.intro button{margin-right:calc(var(--spacing) * 1);text-decoration-line:underline}@media (hover:hover){.body>.intro button:hover{opacity:.8}}.body>.intro>span.message.truncated{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.body>.intro.inline-table>.links{display:contents}.body>.intro.inline-table>.links>a:first-child{margin-left:calc(var(--spacing) * 2)}.body>.intro.inline-table>.links>a:not(:last-child){margin-right:calc(var(--spacing) * 2)}.body>.intro>.links{column-gap:calc(var(--spacing) * 2);flex-wrap:wrap;display:flex}.body>.intro>ul>li{align-items:center;gap:calc(var(--spacing) * 2);flex-direction:row;display:flex}.body>.details{margin-top:calc(var(--spacing) * 4)}.body>.details.compact{margin-top:calc(var(--spacing) * 2);flex-flow:wrap;display:flex}.body>.details.compact .collapsible{width:50%;min-width:calc(var(--spacing) * 64);border-style:var(--tw-border-style);border-width:0;flex-direction:row-reverse;justify-content:flex-end;display:flex}.actions{gap:calc(var(--spacing) * 2);padding:var(--padding);flex-direction:column;display:flex}.actions .group{min-width:calc(var(--spacing) * 0);display:contents}.actions.divided{border-top-style:var(--tw-border-style);border-top-width:1px;border-color:var(--color-base-content)}@supports (color:color-mix(in lab, red, red)){.actions.divided{border-color:color-mix(in oklab, var(--color-base-content) 20%, transparent)}}@container (width>=400px){.actions.vertical-grouped .group{gap:calc(var(--spacing) * 2);display:flex}.actions.vertical-grouped .group button{flex:1}}@container (width>=500px){.actions.horizontal{flex-flow:wrap;justify-content:flex-end}.actions.horizontal .group{display:contents}.actions.horizontal .group button{flex:none}.actions.horizontal-grouped{flex-flow:wrap;justify-content:space-between}.actions.horizontal-grouped .group{justify-content:space-between;gap:calc(var(--spacing) * 2);flex-wrap:nowrap;width:fit-content;display:flex}.actions.horizontal-grouped .group:only-child{margin-inline-start:auto}.actions.horizontal-justified{flex-direction:row;justify-content:space-between}.actions.horizontal-justified div.group{display:contents}.actions.horizontal-justified div.group button{flex:1}}.footer{justify-content:flex-end;align-items:center;gap:calc(var(--spacing) * 2);background-color:var(--color-base-300);height:2.5em;padding-inline:var(--padding);display:flex}.footer span{font-size:calc(var(--font-size,16px) - 2px)}.footer img{max-height:calc(var(--spacing) * 5)}.collapsible{gap:calc(var(--spacing) * 2);border-top-style:var(--tw-border-style);border-top-width:1px;border-top-color:var(--color-base-300);grid-template-columns:1fr auto;display:grid}@supports (color:color-mix(in lab, red, red)){.collapsible{border-top-color:color-mix(in oklab, var(--color-base-300) 80%, transparent)}}.collapsible{padding-block:calc(var(--spacing) * 2)}.collapsible>.trigger{align-items:center;column-gap:calc(var(--spacing) * 1);--tw-font-weight:var(--font-weight-semibold);width:fit-content;font-weight:var(--font-weight-semibold);white-space:nowrap;flex-direction:row;display:flex}.collapsible>.trigger[data-state=open]>svg{rotate:180deg}.collapsible>.description{grid-column:span 2/span 2}.collapsible>.content{font-size:calc(var(--font-size,16px) - 4px);grid-column:span 2/span 2;overflow:hidden}@media (width>=400px){.collapsible>.content{font-size:calc(var(--font-size,16px) - 2px)}}.collapsible>.content table.list{margin-top:calc(var(--spacing) * 1);border-radius:var(--radius-button,8px);background-color:var(--color-base-200);width:100%}.collapsible>.content table.list th,.collapsible>.content table.list td{padding-inline:calc(var(--spacing) * 2);text-align:left;vertical-align:top}.collapsible>.content table.list tr.separator:not(:last-child) td,.collapsible>.content table.list tr.separator:not(:last-child) th{border-bottom-style:var(--tw-border-style);border-bottom-width:1px;border-color:var(--color-base-content)}@supports (color:color-mix(in lab, red, red)){.collapsible>.content table.list tr.separator:not(:last-child) td,.collapsible>.content table.list tr.separator:not(:last-child) th{border-color:color-mix(in oklab, var(--color-base-content) 10%, transparent)}}.collapsible>.content table.list tr.separator:not(:last-child) td,.collapsible>.content table.list tr.separator:not(:last-child) th{padding-bottom:calc(var(--spacing) * 1)}.collapsible>.content table.list tr.separator:not(:last-child)+tr td,.collapsible>.content table.list tr.separator:not(:last-child)+tr th{padding-top:calc(var(--spacing) * 1)}.dialog[dir=rtl] .collapsible table.list th,.dialog[dir=rtl] .collapsible table.list td{text-align:right}:is(.dialog[open].animate,.dialog[data-open=true].animate)::backdrop{animation:fade-in var(--motion) var(--duration) forwards}@media (prefers-reduced-motion:reduce){:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow{animation:fade-in var(--motion) var(--duration) forwards}}@media (prefers-reduced-motion:no-preference){:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).animation-fade{animation:fade-in var(--motion) var(--duration) forwards}:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).animation-zoom{animation:zoom-in var(--motion) var(--duration) forwards}:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).animation-slide{animation:slide-in var(--motion) var(--duration) forwards}:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).animation-grow{animation:grow-in var(--motion) var(--duration) forwards}}@media (prefers-reduced-motion:reduce){:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).closing{animation:fade-out var(--motion) var(--duration) forwards}}:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).closing::backdrop{animation:fade-out var(--motion) var(--duration) forwards}@media (prefers-reduced-motion:no-preference){:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).closing.animation-fade{animation:fade-out var(--motion) var(--duration) forwards}:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).closing.animation-zoom{animation:zoom-out var(--motion) var(--duration) forwards}:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).closing.animation-slide{animation:slide-out var(--motion) var(--duration) forwards}:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).closing.animation-grow{animation:grow-out var(--motion) var(--duration) forwards}}:is(:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-fade,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-zoom,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-slide,:is(.dialog[open].animate,.dialog[data-open=true].animate).animation-grow).closing+.overlay{animation:fade-out var(--motion) var(--duration) forwards}button[role=switch]{width:58px;height:32px;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-duration:.4s;border-radius:3.40282e38px;flex-shrink:0;align-items:center;transition-duration:.4s;display:inline-flex;position:relative}@media (width>=640px){button[role=switch]{width:44px;height:24px}}button[role=switch]>span{background-color:var(--color-base-100);width:24px;height:24px;transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));border-radius:3.40282e38px;display:block;position:absolute;bottom:4px;left:4px}@media (width>=640px){button[role=switch]>span{width:18px;height:18px;bottom:3px;left:3px}}button[role=switch][data-state=checked]{background-color:var(--color-accent)}button[role=switch][data-state=checked]>span{--tw-translate-x:26px;--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y);background-color:var(--color-accent-content)}@media (width>=640px){button[role=switch][data-state=checked]>span{--tw-translate-x:20px;translate:var(--tw-translate-x) var(--tw-translate-y)}}button[role=switch]:disabled{opacity:.3;cursor:not-allowed!important}button[role=switch][data-state=unchecked]{background-color:var(--color-base-content);opacity:.6}button[role=switch][data-state=unchecked]>span{--tw-translate-x:calc(var(--spacing) * 0);--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}div.checkbox{cursor:pointer;display:inline-block;position:relative}div.checkbox input[type=checkbox]{z-index:1;opacity:0;width:100%;height:100%;position:absolute}div.checkbox input[type=checkbox]:checked+div{border-color:var(--color-accent);background-color:var(--color-accent);color:var(--color-accent-content)}div.checkbox input[type=checkbox]:checked+div svg{opacity:1}div.checkbox input[type=checkbox]:focus-visible+div{outline-style:var(--tw-outline-style);outline-offset:2px;outline-width:2px;outline-color:var(--color-base-content);--tw-outline-style:solid;outline-style:solid}div.checkbox input[type=checkbox]:disabled+div{cursor:not-allowed;opacity:.3}div.checkbox>div{width:calc(var(--spacing) * 7);height:calc(var(--spacing) * 7);border-style:var(--tw-border-style);border-width:2px;border-radius:4px;flex-shrink:0;justify-content:center;align-items:center;display:flex}div.checkbox>div svg{opacity:0}.dialog.bar,.dialog.drawer,.dialog.panel{--actual-float:0px;border-radius:0}:is(.dialog.box,.dialog.panel,.dialog.drawer)>.inner.divided>.body{padding-bottom:var(--padding)}.dialog.panel,.dialog.panel>.inner{height:100%;max-height:100%}.dialog.panel>.inner>.body{flex-grow:1}.dialog.panel:has(.footer)>.inner{max-height:calc(100% - 2.5em)}div.actions button{--depth:1}div.actions button.primary{--color:var(--color-primary);--color-contrast:var(--color-primary-content)}div.actions button.secondary{--color:var(--color-secondary);--color-contrast:var(--color-secondary-content)}div.actions button{justify-content:center;align-items:center;gap:calc(var(--spacing) * 1);border-radius:var(--radius-button,8px);border-style:var(--tw-border-style);border-width:var(--border-button);border-color:var(--color);background-color:var(--color);min-width:10em;padding-inline:calc(var(--spacing) * 5);padding-block:calc(var(--spacing) * 3);--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5);--tw-font-weight:var(--font-weight-button,400);font-weight:var(--font-weight-button,400);color:var(--color-contrast);--tw-shadow:var(--shadow-button);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));display:inline-flex}@media (hover:hover){div.actions button:hover{opacity:.8}}div.actions button>svg{rotate:270deg}div.actions button.filled{background-color:var(--color);color:var(--color-contrast)}div.actions button.outlined{background-color:var(--color-contrast);color:var(--color)}.inner.align-center>.header>h2{text-align:center;justify-content:center}.inner.align-center>.body{text-align:center;align-items:center}.inner.align-center .intro>.links{justify-content:center}@container (width>=650px){.inner.align-center>.actions.horizontal{justify-content:center}}}@layer utilities{.visible{visibility:visible}.fixed{position:fixed}.relative{position:relative}.static{position:static}.start{inset-inline-start:var(--spacing)}.col-span-full{grid-column:1/-1}.container{width:100%}@media (width>=400px){.container{max-width:400px}}@media (width>=640px){.container{max-width:640px}}.mt-2{margin-top:calc(var(--spacing) * 2)}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-table{display:inline-table}.h-5{height:calc(var(--spacing) * 5)}.w-5{width:calc(var(--spacing) * 5)}.grow{flex-grow:1}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.resize{resize:both}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-4{gap:calc(var(--spacing) * 4)}.rounded{border-radius:.25rem}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.bg-black\\/50{background-color:oklab(0% none none/.5)}.font-mono{font-family:var(--font-mono)}.text-accent{color:var(--color-accent)}.uppercase{text-transform:uppercase}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-dialog{--tw-shadow:var(--shadow-dialog,0 0 14px #00000080);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}@container (width>=650px){.\\@lg\\:block{display:block}}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-leading{syntax:"*";inherits:false}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes zoom-in{0%{opacity:0;scale:.95}to{opacity:1;scale:1}}@keyframes zoom-out{0%{opacity:1;scale:1}to{opacity:0;scale:.95}}@keyframes slide-in{0%{transform:translate(var(--horizontal-slide-direction,0), var(--vertical-slide-direction,0));opacity:0}to{opacity:1;transform:translate(0)}}@keyframes slide-out{0%{opacity:1;transform:translate(0)}to{transform:translate(var(--horizontal-slide-direction,0), var(--vertical-slide-direction,0));opacity:0}}@keyframes grow-in{0%{opacity:0;scale:0}to{opacity:1;scale:1}}@keyframes grow-out{0%{opacity:1;scale:1}to{opacity:0;scale:0}}', t.id = "pandectes-cmp-default-styles", e.appendChild(t)
          })(this.shadowRoot);
          const e = await this.loadSettings(this.shadowRoot, t);
          let n = {
            isAvailable: !1
          };
          e.consent.shopify && (n = await async function(e, t) {
            try {
              if (e) {
                const {
                  value: e
                } = await Da(window, "Shopify.customerPrivacy", t);
                return {
                  ...e,
                  isAvailable: !0
                }
              }
              const n = new AbortController;
              t.addEventListener("abort", () => n.abort(), {
                once: !0
              });
              try {
                const e = await Promise.any([Da(window, "Shopify.customerPrivacy.shouldShowBanner", n.signal).then(() => (Ra("customerPrivacy already hydrated"), window.Shopify.customerPrivacy)), (async () => {
                  const {
                    value: e
                  } = await Da(window, "Shopify.loadFeatures", n.signal);
                  return await new Promise(t => {
                    e([{
                      name: "consent-tracking-api",
                      version: "0.1"
                    }], () => t()), t()
                  }), await Da(window, "Shopify.customerPrivacy.shouldShowBanner", n.signal), Ra("customerPrivacy hydrated via loadFeatures"), window.Shopify.customerPrivacy
                })()]);
                return n.abort(), {
                  ...e,
                  isAvailable: !0
                }
              } catch {
                throw n.abort(), new Error("No strategy resolved")
              }
            } catch {
              return {
                isAvailable: !1
              }
            }
          }(e.store.headless, t), n.isAvailable || Ko("Customer privacy API is not available.", "warn"));
          const r = await this.getRegion(n, e.store.useGeolocation, t),
            {
              country: a,
              state: i
            } = this.getCountryStateFromRegion(r);
          Ko(`Region: ${r?.length?r:"empty"}`), this.mountPandectes(this.shadowRoot, n, a, i, e), this.style.zIndex = e.theme.zIndex.toString(), this.style.position = "fixed", this.style.top = "0", this.style.left = "0", this.style.display = "inherit"
        } catch (n) {
          if (n instanceof Error && "Aborted" === n.message) return;
          oi(n, {
            component: "PandectesWebComponent",
            method: "connectedCallback"
          }), Ko(`pandectes-cmp initialization failed: ${n}`, "error")
        }
      }
    };
  return customElements.define("pandectes-cmp", Yo), e.PandectesWebComponent = Yo, e
}({});