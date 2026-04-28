! function(e, t) {
  "use strict";
  const n = "repSid",
    r = "vf_device_key";

  function o(e) {
    try {
      const t = "__vf_test__";
      return e.setItem(t, "1"), e.removeItem(t), e
    } catch (e) {
      const t = new Map;
      return {
        get length() {
          return t.size
        },
        clear() {
          t.clear()
        },
        getItem(e) {
          var n;
          return null !== (n = t.get(e)) && void 0 !== n ? n : null
        },
        setItem(e, n) {
          t.set(e, n)
        },
        removeItem(e) {
          t.delete(e)
        },
        key(e) {
          var n;
          return null !== (n = [...t.keys()][e]) && void 0 !== n ? n : null
        }
      }
    }
  }
  const s = o(t.localStorage),
    i = o(t.sessionStorage),
    c = function() {
      let e = !1;
      try {
        const n = "__vf_ls_probe__";
        t.localStorage.setItem(n, "1"), e = "1" === t.localStorage.getItem(n), t.localStorage.removeItem(n)
      } catch (t) {
        e = !1
      }
      let n = !1;
      try {
        const e = "__vf_cookie_probe__";
        document.cookie = `${e}=1; path=/; SameSite=Lax`, n = -1 !== document.cookie.indexOf(`${e}=1`), document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
      } catch (e) {
        n = !1
      }
      return e || n ? !e && n ? "cookie-only" : e && !n ? "cookieless" : "healthy" : "sandbox"
    }();

  function l() {
    if (f()) return null;
    try {
      const e = s.getItem(r);
      if (e) return e
    } catch (e) {}
    const e = function() {
      try {
        const e = t.crypto || t.msCrypto;
        if (e && "function" == typeof e.randomUUID) return e.randomUUID();
        if (e && "function" == typeof e.getRandomValues) {
          const t = new Uint8Array(16);
          e.getRandomValues(t), t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128;
          const n = [];
          for (let e = 0; e < 16; e++) n.push((t[e] < 16 ? "0" : "") + t[e].toString(16));
          return n.slice(0, 4).join("") + "-" + n.slice(4, 6).join("") + "-" + n.slice(6, 8).join("") + "-" + n.slice(8, 10).join("") + "-" + n.slice(10, 16).join("")
        }
      } catch (e) {}
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
        const t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16)
      })
    }();
    try {
      s.setItem(r, e)
    } catch (e) {}
    return e
  }

  function a() {
    const e = t.location.href.toLowerCase();
    return e.includes("hellorep.ai") || e.includes("localhost")
  }
  let u = "",
    d = null;

  function initRep(e, t, r) {
    f();
    const o = function(e) {
      const t = function() {
          try {
            const e = s.getItem("rep");
            return e ? JSON.parse(e) : {}
          } catch (e) {
            return {}
          }
        }(),
        r = (null == e ? void 0 : e.pk) || null;
      p(), m(r, e);
      const o = (null == d ? void 0 : d.has("vfsim")) || (null == e ? void 0 : e.pk) ? null : function(e) {
        const t = document.cookie;
        if (!t) return;
        const n = e + "=",
          r = t.indexOf(n);
        if (-1 === r) return;
        const o = t.indexOf(";", r);
        return t.substring(r + 7, -1 === o ? t.length : o)
      }(n);
      let i = "";
      o && "null" !== o && !(null == e ? void 0 : e.pk) && (i = o);
      let c = null,
        a = null,
        u = null,
        f = null;
      return (null == t ? void 0 : t.createdAt) && Date.now() <= t.createdAt + 864e5 && (c = t.jfl, u = t.gcfl, a = t.cfl, f = t.sgld), {
        storedData: t,
        partnerKey: r,
        sid: i,
        jfl: c,
        cfl: a,
        gcfl: u,
        getLoadDate: f,
        apiVars: g(t, i, c, a, u, f, l())
      }
    }(r);
    v(o, r)
  }

  function f() {
    try {
      const e = t.Shopify;
      if (!(null == e ? void 0 : e.customerPrivacy)) return !1;
      const n = e.customerPrivacy;
      return n.analyticsProcessingAllowed && !n.analyticsProcessingAllowed() || !n.firstPartyMarketingAllowed()
    } catch (e) {
      return !1
    }
  }

  function p() {
    u !== t.location.search && (u = t.location.search, d = new URLSearchParams(u)), (null == d ? void 0 : d.has("vfsim")) && S()
  }

  function m(e, r) {
    const o = t.isVfChat;
    o && !(null == r ? void 0 : r.pk) || (o && (null == r ? void 0 : r.pk) && o !== r.pk && (S(!0), t.repSettings = null, x(n)), t.isVfChat = e || "true")
  }

  function g(e, t, n, r, o, s, i) {
    return {
      cid: (null == e ? void 0 : e.cid) || "",
      g: (d ? d.get("rgroup") : null) || (null == e ? void 0 : e.g) || "",
      ged: (null == e ? void 0 : e.ged) || "",
      getLoadDate: s,
      sid: t,
      jfl: n,
      cfl: r,
      gcfl: o,
      dk: i,
      severs: {
        qa: "https://server-qa.myrepai.com",
        prod: "https://server.myrepai.com"
      }
    }
  }

  function v(o, l) {
    const u = document.currentScript || e.getElementById("vfLoader") || e.querySelector('[src*="vfLoader"]');
    if (!u || t.repSettings) return;
    const d = function(e, n) {
      if (null == n ? void 0 : n.pk) return n;
      if (e.dataset.pk) return {
        pk: e.dataset.pk,
        e: e.dataset.e || "prod"
      };
      if (!e.src || !e.src.includes("pk=")) return null;
      try {
        const n = new URL(e.src),
          r = n.searchParams.get("pk"),
          o = n.searchParams.get("e");
        if (r) {
          if (t.repPk = r, o) {
            const e = "qa" === o ? "https://server-qa.myrepai.com" : "https://server.myrepai.com";
            t.repEnv = e
          }
          return {
            pk: r,
            e: o || "prod"
          }
        }
      } catch (e) {}
      return null
    }(u, l);
    (null == d ? void 0 : d.pk) && function(e, o, l) {
      const u = o.apiVars.severs[e.e] || "https://server.myrepai.com",
        {
          shouldSend: d,
          scriptUrl: p
        } = function(e) {
          const {
            sid: t,
            v: n
          } = h(), {
            jfl: r,
            getLoadDate: o
          } = e.apiVars, s = r && e.serverUrl && e.pk ? r : null;
          return {
            shouldSend: !o || o + 3e5 <= Date.now() || !!t || !!n,
            scriptUrl: s
          }
        }({
          serverUrl: u,
          pk: e.pk,
          apiVars: o.apiVars
        });
      var m;
      d || !p ? (m = () => {
        (async function(e, n, r, o) {
          if (!e || !n) return null;
          const s = f(),
            {
              v: l,
              cid: u,
              sid: d
            } = h(),
            p = new URLSearchParams,
            m = a() ? t.location.origin + t.location.pathname : t.location.href;
          if (p.set("url", m), p.set("pk", e), l && p.set("v", l), (u || r.cid) && p.set("cid", u || r.cid || ""), s) p.set("dnt", "true");
          else {
            if ((d || r.sid) && p.set("sid", d || r.sid || ""), document.referrer) {
              let e = document.referrer;
              if (a() && e) try {
                const t = new URL(e);
                e = t.origin + t.pathname
              } catch (e) {}
              p.set("r", document.referrer)
            }
            try {
              const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
              e && p.set("tz", e)
            } catch (e) {}
            const e = navigator.language || navigator.userLanguage;
            e && p.set("ul", e)
          }
          r.g && p.set("g", r.g), r.ged && p.set("ged", r.ged), r.dk && !s && p.set("dk", r.dk), p.set("sf", c);
          let g = null;
          (null == o ? void 0 : o.skipSimulator) || (t.location.search && t.location.search.toLowerCase().indexOf("vfsim") > -1 ? (g = "SIMULATOR", i.setItem("vfplatform", "SIMULATOR")) : "string" == typeof i.getItem("vfplatform") && (g = "SIMULATOR")), g && p.set("p", g);
          const v = `${n}/web/load?${p.toString()}`;
          try {
            const e = await fetch(v, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            });
            return e.ok ? await e.json() : 401 === e.status ? {
              message: "Unauthorized"
            } : 400 === e.status ? await e.json() : {
              message: `HTTP ${e.status}`
            }
          } catch (e) {
            return {
              message: "Network error"
            }
          }
        })(e.pk, u, o.apiVars, l).then(o => function({
          result: e,
          pk: o,
          serverUrl: i
        }) {
          var c;
          if (!e || e.message) return;
          const l = s.getItem("rep"),
            u = a() ? null : Date.now(),
            d = {
              ...e,
              sUrl: i,
              createdAt: Date.now(),
              sgld: u,
              pk: decodeURIComponent(o)
            },
            p = f();
          p && (d.sid = null, d.cid = null);
          try {
            if (t.repSettings = d, s.setItem("rep", JSON.stringify(d)), e.sid && !p && k(n, e.sid, 1), !p && ("string" == typeof e.dk && e.dk && s.setItem(r, e.dk), "string" == typeof e.ht && e.ht)) {
              const t = {
                historyToken: e.ht,
                tokenExpiresAt: Date.now() + 2592e6
              };
              s.setItem("vf_history_auth", JSON.stringify(t))
            }
            l && (null === (c = JSON.parse(l)) || void 0 === c ? void 0 : c.sid) && JSON.parse(l).sid === e.sid || s.setItem("vfSessionStart", JSON.stringify(Date.now()))
          } catch (e) {}
          "string" == typeof e.jfl && y({
            scriptUrl: e.jfl,
            cfl: e.cfl,
            gcfl: e.gcfl,
            pk: o,
            serverUrl: i
          })
        }({
          result: o,
          pk: e.pk,
          serverUrl: u
        })).catch(e => {
          "undefined" != typeof console && console.warn
        })
      }, t.requestIdleCallback ? t.requestIdleCallback(() => m(), {
        timeout: 2e3
      }) : setTimeout(m, 10)) : p && y({
        scriptUrl: p,
        cfl: o.cfl,
        gcfl: o.gcfl,
        pk: e.pk,
        serverUrl: u
      })
    }(d, o, l)
  }

  function h() {
    return d ? {
      v: d.get("vfv") || d.get("repv"),
      cid: d.get("rCid"),
      sid: d.get("rSid")
    } : {
      v: null,
      cid: null,
      sid: null
    }
  }

  function y({
    scriptUrl: t,
    cfl: n,
    gcfl: r,
    pk: o,
    serverUrl: s
  }) {
    const i = e.getElementById("vfHolder") || e.body,
      c = e.createDocumentFragment(),
      l = e.createElement("script");
    Object.assign(l, {
      src: t,
      id: "vfChat",
      type: "module",
      defer: !0,
      crossOrigin: "anonymous"
    }), l.dataset.cfl = n || "", l.dataset.gcfl = r || "", l.dataset.pk = o || "", l.dataset.sUrl = s || "", c.appendChild(l), i.appendChild(c)
  }

  function k(e, n, r) {
    let o = t.location.hostname;
    if (o.includes(".") && !o.includes("myshopify.com")) {
      const e = o.split(".");
      e.length > 2 && (o = e.slice(-2).join("."))
    }
    const s = new Date;
    s.setTime(s.getTime() + 864e5 * r), document.cookie = `${e}=${n}; expires=${s.toUTCString()}; domain=${o}; path=/`
  }

  function x(e) {
    k(e, "", 0)
  }

  function S(e) {
    const r = ["rep", "vfEnabledIntegrations", "vfSessionStart", "repCT", "vfEvBackForwardDi"];
    e && (r.push("repCart", "vfCanSend", "evQueue", "isMinimized", "vfEvDict", "temporarryQueue", "repCmpts"), t.isVfChat = !1), r.forEach(e => s.removeItem(e)), i.removeItem("vfHumanHandoff"), e && i.removeItem("vfChat"), x(n)
  }
  t.initRep = initRep;
  try {
    initRep()
  } catch (e) {
    "undefined" != typeof console && console.error
  }
}(document, window);