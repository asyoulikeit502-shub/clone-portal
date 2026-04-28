function setupShadowDom(e) {
  e.attachShadow({
    mode: "open"
  }), applyFastClickStyles(e), e.style.display = "block"
}

function applyFastClickStyles(e) {
  e.classList.add("needsclick")
}

function createStylesheetLink(e) {
  const t = document.createElement("link");
  return t.rel = "stylesheet", t.href = e, t.fetchPriority = "high", t
}

function shouldAddFallbackDiv(e) {
  return "recart-landing-page-root" === e.id || "recart-unsubscribe-page-root" === e.id
}

function createFallbackDiv() {
  const e = document.createElement("div");
  return e.id = "recart-root", setupShadowDom(e), e
}! function(e) {
  const t = "recart-tracking-js";
  if (e.getElementById(t)) return;
  const o = e.createElement("div");
  o.id = "recart-popup-root", e.body.appendChild(o);
  let r = [];
  const c = e.getElementById("recart-landing-page-root");
  c && (r = [c]);
  const n = e.getElementById("recart-unsubscribe-page-root");
  n && (r = [n]);
  const a = e.getElementById("recart-popup-root");
  if (a && 0 === r.length) {
    r.push(a);
    const t = e.createElement("div");
    t.id = "recart-root", e.body.appendChild(t), r.push(t)
  }
  const s = e.querySelectorAll('[class^="recart-embedded-form-root"]');
  s.length > 0 && r.push(...s), r.forEach((e => {
    setupShadowDom(e), applyFastClickStyles(e);
    const t = createStylesheetLink("https://storefront.recart.com/main.css");
    if (e.shadowRoot.appendChild(t), shouldAddFallbackDiv(e)) {
      const o = createFallbackDiv();
      o.shadowRoot.appendChild(t.cloneNode(!0)), e.appendChild(o)
    }
  }));
  const d = e.createElement("script");
  d.id = t, d.src = "https://storefront.recart.com/main.js?version=59a81e3b", d.async = !0, d.fetchPriority = "high", e.body.appendChild(d)
}(document);