! function(e, t) {
  "use strict";
  if (function() {
      const e = t.location.href;
      return /\/web-pixels[@-].*\/sandbox\//.test(e) || /\/web-pixels-manager\//.test(e)
    }()) return;
  let n = null;

  function r(t) {
    const n = `https://d1o5e9vlirdalo.cloudfront.net/repLoader.js?pk=${t.pk}&e=${t.e}`,
      r = e.body || e.documentElement,
      o = e.createDocumentFragment(),
      s = e.createElement("script");
    Object.assign(s, {
      src: n,
      id: "repLoader",
      defer: !0,
      async: !0
    }), s.dataset.pk = t.pk, s.dataset.e = t.e, s.onerror = () => {
      "undefined" != typeof console && console.error
    }, o.appendChild(s), r.appendChild(o)
  }
  const o = function() {
    if (n) return n;
    const t = document.currentScript || e.getElementById("vfLoader") || e.querySelector('[src*="vfLoader"]');
    return t ? (n = t.src ? t : null, n) : ("undefined" != typeof console && console.warn, null)
  }();
  if (!o) return;
  const s = function(e) {
    if (e.dataset.pk) return {
      pk: e.dataset.pk,
      e: e.dataset.e || "prod"
    };
    const t = e.src;
    if (!t || -1 === t.indexOf("?") || -1 === t.indexOf("pk=")) return null;
    const n = new URLSearchParams(t.split("?")[1]),
      r = n.get("pk");
    return r ? {
      pk: r,
      e: n.get("e") || "prod"
    } : null
  }(o);
  if (null == s ? void 0 : s.pk) try {
    ! function n(o) {
      const s = document.readyState;
      if ("complete" === s) r(o);
      else if ("interactive" === s) t.requestIdleCallback ? t.requestIdleCallback(() => r(o), {
        timeout: 500
      }) : setTimeout(() => r(o), 16);
      else {
        const t = () => {
          e.removeEventListener("DOMContentLoaded", t), n(o)
        };
        e.addEventListener("DOMContentLoaded", t, {
          passive: !0
        })
      }
    }(s)
  } catch (e) {
    setTimeout(() => r(s), 100)
  }
}(document, window);