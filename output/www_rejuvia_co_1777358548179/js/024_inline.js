! function() {
  'use strict';
  const t = 'contact',
    e = 'new_comment',
    n = [
      [t, t],
      ['blogs', e],
      ['comments', e],
      [t, 'customer']
    ],
    o = 'password',
    r = 'form_key',
    c = ['recaptcha-v3-token', 'g-recaptcha-response', 'h-captcha-response', o],
    s = () => {
      try {
        return window.sessionStorage
      } catch {
        return
      }
    },
    i = '__shopify_v',
    u = t => t.elements[r],
    a = function() {
      const t = [...n].map((([t, e]) => `form[action*='/${t}']:not([data-nocaptcha='true']) input[name='form_type'][value='${e}']`)).join(',');
      var e;
      return e = t, () => e ? [...document.querySelectorAll(e)].map((t => t.form)) : []
    }();

  function m(t) {
    const e = u(t);
    a().includes(t) && (!e || !e.value) && function(t) {
      try {
        if (!s()) return;
        ! function(t) {
          const e = s();
          if (!e) return;
          const n = u(t);
          if (!n) return;
          const o = n.value;
          o && e.removeItem(o)
        }(t);
        const e = Array.from(Array(32), (() => Math.random().toString(36)[2])).join('');
        ! function(t, e) {
          u(t) || t.append(Object.assign(document.createElement('input'), {
            type: 'hidden',
            name: r
          })), t.elements[r].value = e
        }(t, e),
        function(t, e) {
          const n = s();
          if (!n) return;
          const r = [...t.querySelectorAll(`input[type='${o}']`)].map((({
              name: t
            }) => t)),
            u = [...c, ...r],
            a = {};
          for (const [o, c] of new FormData(t).entries()) u.includes(o) || (a[o] = c);
          n.setItem(e, JSON.stringify({
            [i]: 1,
            action: t.action,
            data: a
          }))
        }(t, e)
      } catch (e) {
        console.error('failed to persist form', e)
      }
    }(t)
  }
  const f = t => {
    if ('true' === t.dataset.persistBound) return;
    const e = function(t, e) {
      const n = function(t) {
        return 'function' == typeof t.submit ? t.submit : HTMLFormElement.prototype.submit
      }(t).bind(t);
      return function() {
        let t;
        return () => {
          t || (t = !0, (() => {
            try {
              e(), n()
            } catch (t) {
              (t => {
                console.error('form submit failed', t)
              })(t)
            }
          })(), setTimeout((() => t = !1), 250))
        }
      }()
    }(t, (() => {
      m(t)
    }));
    ! function(t, e) {
      if ('function' == typeof t.submit && 'function' == typeof e) try {
        t.submit = e
      } catch {}
    }(t, e), t.addEventListener('submit', (t => {
      t.preventDefault(), e()
    })), t.dataset.persistBound = 'true'
  };
  ! function() {
    function t(t) {
      const e = (t => {
        const e = t.target;
        return e instanceof HTMLFormElement ? e : e && e.form
      })(t);
      e && m(e)
    }
    document.addEventListener('submit', t), document.addEventListener('DOMContentLoaded', (() => {
      const e = a();
      for (const t of e) f(t);
      var n;
      n = document.body, new window.MutationObserver((t => {
        for (const e of t)
          if ('childList' === e.type && e.addedNodes.length)
            for (const t of e.addedNodes) 1 === t.nodeType && 'FORM' === t.tagName && a().includes(t) && f(t)
      })).observe(n, {
        childList: !0,
        subtree: !0,
        attributes: !1
      }), document.removeEventListener('submit', t)
    }))
  }()
}();