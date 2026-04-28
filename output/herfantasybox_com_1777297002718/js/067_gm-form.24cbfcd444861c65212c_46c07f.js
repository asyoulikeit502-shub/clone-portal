/*! For license information please see gm-form.24cbfcd444861c65212c.js.LICENSE.txt */
"use strict";
(self.webpackChunk_ghostmonitor_gm_tracking_js = self.webpackChunk_ghostmonitor_gm_tracking_js || []).push([
  [54], {
    7214(t, e, n) {
      n.d(e, {
        init: () => l
      }), n(4423), n(8111), n(7588);
      var a = n(9517),
        o = n.n(a),
        i = n(7692),
        r = n(1527);
      const c = {
        swell: "swell",
        "cbox-text-input": "beeketing",
        "om-": "optimonk"
      };
      let u = null;

      function l() {
        u = window.parent.document,
          function() {
            const t = window.parent.ju_callback;
            window.parent.ju_callback = (e, n, a) => {
              i.Ay.info("This call (ju_callback) is deprecated, for sending to recart, pls use recart_ju_callback with email and coupon code!");
              try {
                t?.()
              } catch {}
              n && (0, r.g_)({
                email: n,
                formName: "justuno"
              })
            }
          }(),
          function() {
            const t = window.parent.spinasaleSignupCallback;
            window.parent.spinasaleSignupCallback = e => {
              try {
                t?.()
              } catch {}
              e && (0, r.g_)({
                email: e,
                formName: "spinasale"
              })
            }
          }(), window.parent.recart_ju_callback = t => {
            t && (0, r.g_)({
              email: t,
              formName: "justuno"
            })
          }, u.addEventListener("focusout", (t => {
            t.target.matches('input:not([type=password]):not(#recart-popup-root):not(#recart-landing-page-root):not([class^="recart-embedded-form-root"]):not(#recart-unsubscribe-page-root)') && function(t, e) {
              const {
                inputName: n,
                inputValue: a,
                formName: u
              } = function(t, e) {
                const n = t.target;
                let a = n.getAttribute("name");
                const i = n.value,
                  r = function(t) {
                    return t ? t.closest("form") : null
                  }(n);
                let u;
                u = function(t) {
                  if (!t) return "default";
                  const e = t.getAttribute("name");
                  if (e) return e;
                  if (t.classList.toString().includes("klaviyo")) return "klaviyo";
                  const n = t.getAttribute("id");
                  return n ? `#${n}` : "default"
                }(r);
                let l = null;
                const s = n.classList.toString();
                return Object.keys(c).forEach((t => {
                  s.includes(t) && (l = c[t])
                })), l && (u = `${l}`), !a && o()(i) && (a = "unknown"), {
                  inputName: a,
                  inputValue: i,
                  formName: u
                }
              }(t);
              n && a ? "privy-inner-container" !== t.target.parentNode.id ? o()(a) && (0, r.g_)({
                fieldName: n,
                email: a,
                formName: u
              }) : i.Ay.debug("Privy input detected", {
                event: t
              }) : i.Ay.debug("Missing input name or value", {
                event: t
              })
            }(t)
          }), {
            passive: !0
          })
      }
    }
  }
]);