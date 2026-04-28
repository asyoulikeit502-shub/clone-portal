(() => {
  function t(t, e = !1, n = !1, r = !1, a = !1) {
    let o = !1;
    if (a) {
      const e = document.querySelectorAll(`script[src^="${t}"]`);
      e.length > 0 && (e.forEach((t => t.remove())), o = !0)
    }
    if (o) {
      const e = (new Date).getTime(),
        n = new URL(t, window.location.origin);
      n.searchParams.append("t", e), t = n.toString()
    }
    const i = document.createElement("script");
    i.setAttribute("src", t), e && i.setAttribute("async", ""), n && i.setAttribute("defer", ""), r && i.setAttribute("type", "module"), document.body.appendChild(i)
  }

  function e(t) {
    return t && null != t ? ("string" == typeof t || t instanceof String) && (t.trim().length < 1 || "null" === t.trim() || "undefined" === t.trim()) ? null : t : null
  }

  function n() {
    let t = null,
      e = null;
    try {
      window && window.location && window.location.href && (t = new URL(window.location.href), e = t && t.searchParams)
    } catch (t) {}
    return {
      current_url: t,
      current_url_params: e
    }
  }

  function r(r, a, o = null, i = null) {
    const c = window.nector_params || {},
      d = "true" === a.force_refresh || !0 === a.force_refresh;
    if (!o && !i) return console.error("Nector SDK: insert_before_element or insert_to_element must be provided"), null;
    if ("widget" === r) {
      const n = e(a.api_key) || null,
        r = e(a.customer_id) || e(c.customer_id) || null,
        d = a.platform || null,
        l = a.websdk_url || null,
        s = a.platform_url || null,
        p = a.font_name || null,
        u = a.font_url || null,
        _ = a.app || null,
        m = a.target_currency || null;
      if (!n) return null;
      nector = {
        ...nector || {},
        api_key: n,
        identifier: d,
        business_customer_id: r || null,
        websdk_url: l,
        platform_url: s
      }, p && u && (nector.font_name = p, nector.font_url = u), _ && (nector.app = _), m && (nector.target_currency = m);
      const w = window.elementId || "nector-rewards-widget-wSVNjD";
      let f = document.getElementById(w);
      if (f) i && f.parentNode !== i && i.appendChild(f);
      else {
        const t = document.createElement("div");
        t.id = w, i ? i.appendChild(t) : o && o.parentNode ? o.parentNode.insertBefore(t, o) : document.body.appendChild(t), f = t
      }
      let g = "";
      return g = s && s.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/main.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/main.min.js", t(g, !0), {
        containerId: w,
        script_url: g
      }
    }
    if ("review_list" === r || "row_review_list" === r) {
      const n = e(a.api_key) || null,
        r = a.platform || "",
        l = e(a.product_id) || e(c.product_id) || "",
        s = a.websdk_url || "https://websdk.nector.io",
        p = a.platform_url || "https://platform.nector.io",
        u = Number(a.limit || 10),
        _ = a.all_reviews || "",
        m = a.view_type || "grid",
        w = a.default_reviews_sort || "",
        f = a.app || "",
        g = a.hide_date || !1,
        h = a.hide_write_review_button || !1,
        $ = a.show_qna || !1,
        y = a.hide_overall_rating || !1,
        v = a.hide_total_review_count || !1,
        k = a.fetch_all_reviews_if_not_found || !1,
        b = a.target_currency || "",
        x = "false" !== a.show_images_carousel && !1 !== a.show_images_carousel,
        j = "false" !== a.show_tags && !1 !== a.show_tags,
        L = "false" !== a.show_summary && !1 !== a.show_summary,
        I = "true" === a.show_detailed_breakup || !0 === a.show_detailed_breakup,
        N = "true" === a.show_featured_reviews_only || !0 === a.show_featured_reviews_only;
      if (!n) return null;
      const E = a.containerId || "nector-reviews",
        B = document.createElement("div");
      B.innerHTML = `\n\t\t\t<div \n\t\t\t\tid="${E}"\n\t\t\t\tdata-api_key="${n}"\n\t\t\t\tdata-platform="${r}"\n\t\t\t\tdata-product_id="${l}"\n\t\t\t\tdata-websdk_url="${s}"\n\t\t\t\tdata-platform_url="${p}"\n\t\t\t\tdata-limit="${u}"\n\t\t\t\tdata-all_reviews="${_}"\n\t\t\t\tdata-view_type="${m}"\n\t\t\t\tdata-default_reviews_sort="${w}"\n\t\t\t\tdata-hide_date="${g}"\n\t\t\t\tdata-hide_write_review_button="${h}"\n\t\t\t\tdata-app="${f}"\n\t\t\t\tdata-show_qna="${$}"\n\t\t\t\tdata-hide_overall_rating="${y}"\n\t\t\t\tdata-hide_total_review_count="${v}"\n\t\t\t\tdata-fetch_all_reviews_if_not_found="${k}"\n\t\t\t\tdata-show_images_carousel="${x}"\n\t\t\t\tdata-show_tags="${j}"\n\t\t\t\tdata-show_summary="${L}"\n\t\t\t\tdata-show_detailed_breakup="${I}"\n\t\t\t\tdata-show_featured_reviews_only="${N}"\n\t\t\t\tdata-target_currency="${b}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(B) : o && o.parentNode.insertBefore(B, o);
      let C = "";
      return C = p && p.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/reviews.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/reviews.min.js", t(C, !1, !1, !0, d), {
        containerId: E,
        script_url: C
      }
    }
    if ("featured_review_list" === r) {
      const n = e(a.api_key) || null,
        r = a.platform_url || "https://platform.nector.io",
        c = a.hide_title || !1,
        l = a.hide_overall_rating || !1,
        s = a.view_type || "carousel",
        p = a.target_currency || "";
      if (!n) return null;
      const u = a.containerId || "nector-featuredreview-container",
        _ = document.createElement("div");
      _.innerHTML = `\n\t\t\t<div \n\t\t\t\tid="${u}"\n\t\t\t\tdata-api_key="${n}"\n\t\t\t\tdata-platform_url="${r}"\n\t\t\t\tdata-hide_title="${c}"\n\t\t\t\tdata-hide_overall_rating="${l}"\n\t\t\t\tdata-view_type="${s}"\n\t\t\t\tdata-target_currency="${p}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(_) : o && o.parentNode.insertBefore(_, o);
      let m = "";
      return m = r && r.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/featuredreview.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/featuredreview.min.js", t(m, !1, !1, !0, d), {
        containerId: u,
        script_url: m
      }
    }
    if ("pdpfeatured_review_list" === r) {
      const n = e(a.api_key) || null,
        r = a.platform || "",
        c = a.platform_url || "https://platform.nector.io",
        l = a.background_color || !1,
        s = a.product_id || "",
        p = a.target_currency || "";
      if (!n) return null;
      const u = a.containerId || "nector-pdpfeaturedreview",
        _ = document.createElement("div");
      _.innerHTML = `\n\t\t\t<div \n\t\t\t\tid="${u}"\n\t\t\t\tdata-api_key="${n}"\n\t\t\t\tdata-platform_url="${c}"\n\t\t\t\tdata-platform="${r}"\n\t\t\t\tdata-background_color="${l}"\n\t\t\t\tdata-product_id="${s}"\n\t\t\t\tdata-target_currency="${p}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(_) : o && o.parentNode.insertBefore(_, o);
      let m = "";
      return m = c && c.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/pdpfeaturedreview.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/pdpfeaturedreview.min.js", t(m, !1, !1, !0, d), {
        containerId: u,
        script_url: m
      }
    }
    if ("review_rating" === r) {
      const t = e(a.api_key) || null,
        n = a.platform || null,
        r = e(a.product_id) || null,
        c = a.entity_id || null;
      let d = a.platform_url || null;
      const l = a.color || "#ffc83d";
      if (d || (d = c ? "https://collectfront.nector.io" : "https://cachefront.nector.io"), !t) return null;
      const s = document.createElement("p");
      i ? i.appendChild(s) : o && o.parentNode.insertBefore(s, o);
      let p = `${d}/api/v2/merchant/reviews-count`;
      const u = new URLSearchParams;
      c && "https://collectfront.nector.io" === d && u.set("entity_id", c), n && u.set("reference_product_source", n), r && u.set("reference_product_id", r), [...u.keys()].length > 0 && (p += `?${u.toString()}`);
      const _ = function(t) {
        if (!t || !t.data || !t.data.countsum) return;
        const e = t.data.countsum || {
            sum: 0,
            count: 1
          },
          n = (Number(e.sum || 0) / Number(e.count || 1)).toFixed(2),
          r = Number(e.count || 0),
          a = n;
        let o = `<a href="#nector-reviews" style="text-decoration: none;"><span style="font-weight: bold; font-size: 14px; color: ${l}; display: inline-flex; justify-content: center;">`;
        for (let t = 1; t <= 5; t++) {
          let e = t - .5;
          o += a >= t ? '<svg class="prapp-star" style="width: 1em; height: 1em;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">\n\t\t\t\t\t\t\t\t<path fill="currentcolor" d="M512,197.816L325.961 185.585 255.898 9.569 185.835 185.585 0 197.816 142.534 318.842 95.762 502.431 255.898 401.21 416.035 502.431 369.263 318.842z"></path>\n\t\t\t\t\t\t\t</svg>' : a >= e ? '<svg class="prapp-star" style="width: 1em; height: 1em;" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="510px" height="510px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">\n\t\t\t\t\t\t\t\t<path fill="currentcolor" d="M510,197.472l-183.37-15.734L255,12.75l-71.629,168.988L0,197.472l0,0l0,0l139.103,120.539L97.41,497.25L255,402.186l0,0l157.59,95.039l-41.692-179.239L510,197.472z M255,354.348V117.172l43.605,102.918l111.689,9.588l-84.711,73.389l25.398,109.166L255,354.348z"/>\n\t\t\t\t\t\t\t</svg>' : '<svg class="prapp-star" style="width: 1em; height: 1em;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">\n\t\t\t\t\t\t\t\t<path fill="currentcolor" d="M512,197.819l-185.933-12.228L256,9.571l-70.067,176.021L0,197.82l142.658,120.93L95.856,502.429L256,401.214 l160.144,101.215l-46.8-183.671L512,197.819z M256,365.724l-112.464,71.08l32.827-128.831L75.829,222.888l130.971-8.603 L256,90.687l49.2,123.599l131.124,8.602l-100.689,85.077l32.829,128.839L256,365.724z" />\n\t\t\t\t\t\t\t</svg>'
        }
        o += `<span style="margin-left: 3px">(${r})</span> </span></a>`, s.innerHTML = o
      };
      return fetch(p, {
        method: "get",
        headers: {
          "x-apikey": t,
          "x-source": "web"
        }
      }).then((t => t.json())).then((t => _(t))), {
        containerId: null,
        script_url: null
      }
    }
    if ("floatingreview_widget" === r) {
      const n = e(a.api_key) || null,
        r = a.platform || "",
        l = e(a.customer_id) || e(c.customer_id) || "",
        s = a.platform_url || "https://platform.nector.io",
        p = a.offset || "",
        u = a.title || "",
        _ = a.position || "",
        m = a.view_type || "",
        w = a.show_qna || !1,
        f = a.target_currency || "";
      if (!n) return null;
      const g = a.containerId || "nector-floatingreviewwidget",
        h = document.createElement("div");
      h.innerHTML = `\n\t\t\t<div \n\t\t\t\tid="${g}"\n\t\t\t\tdata-api_key="${n}"\n\t\t\t\tdata-platform="${r}"\n\t\t\t\tdata-platform_url="${s}"\n\t\t\t\tdata-customer_id="${l}"\n\t\t\t\tdata-offset="${p}"\n\t\t\t\tdata-title="${u}"\n\t\t\t\tdata-position="${_}"\n\t\t\t\tdata-view_type="${m}"\n\t\t\t\tdata-show_qna="${w}"\n\t\t\t\tdata-target_currency="${f}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(h) : o && o.parentNode.insertBefore(h, o);
      let $ = "";
      return $ = s && s.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/floatingreviewwidget.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/floatingreviewwidget.min.js", t($, !1, !1, !0, d), {
        containerId: g,
        script_url: $
      }
    }
    if ("reward" === r) {
      const {
        current_url_params: r
      } = n(), l = e(a.api_key) || null, s = a.platform || "", p = e(a.customer_id) || e(c.customer_id) || r && e(r.get("nector_inject_id")) || "", u = a.platform_url || "https://platform.nector.io", _ = a.app || "", m = a.target_currency || "";
      if (!l) return null;
      const w = a.containerId || "nector-reward-page-container",
        f = document.createElement("div");
      f.innerHTML = `\n\t\t\t<div \n\t\t\t\tid="${w}"\n\t\t\t\tdata-api_key="${l}"\n\t\t\t\tdata-platform_url="${u}"\n\t\t\t\tdata-platform="${s}"\n\t\t\t\tdata-customer_id="${p}"\n\t\t\t\tdata-app="${_}"\n\t\t\t\tdata-target_currency="${m}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(f) : o && o.parentNode.insertBefore(f, o);
      let g = "";
      return g = u && u.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/rewardspage.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/rewardspage.min.js", t(g, !1, !1, !0, d), {
        containerId: w,
        script_url: g
      }
    }
    if ("credit_page" === r) {
      const {
        current_url_params: r
      } = n(), l = e(a.api_key) || null, s = a.platform || "", p = e(a.customer_id) || e(c.customer_id) || r && e(r.get("nector_inject_id")) || "", u = a.platform_url || "https://platform.nector.io", _ = a.app || "", m = a.target_currency || "";
      if (!l) return null;
      const w = a.containerId || "nector-credits-page-container",
        f = document.createElement("div");
      f.innerHTML = `\n\t\t\t<div\n\t\t\t\tid="${w}"\n\t\t\t\tdata-api_key="${l}"\n\t\t\t\tdata-platform_url="${u}"\n\t\t\t\tdata-platform="${s}"\n\t\t\t\tdata-customer_id="${p}"\n\t\t\t\tdata-app="${_}"\n\t\t\t\tdata-target_currency="${m}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(f) : o && o.parentNode.insertBefore(f, o);
      let g = "";
      return g = u && u.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/creditspage.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/creditspage.min.js", t(g, !1, !1, !0, d), {
        containerId: w,
        script_url: g
      }
    }
    if ("boatreward" === r) {
      const {
        current_url_params: r
      } = n(), l = e(a.api_key) || null, s = a.platform || "", p = e(a.customer_id) || e(c.customer_id) || r && e(r.get("nector_inject_id")) || "", u = a.platform_url || "https://platform.nector.io", _ = a.app || "", m = a.wallet_type || "coins", w = a.target_currency || "";
      if (!l) return null;
      const f = a.containerId || "nector-boat-reward-page-container",
        g = document.createElement("div");
      g.innerHTML = `\n\t\t\t<div \n\t\t\t\tid="${f}"\n\t\t\t\tdata-api_key="${l}"\n\t\t\t\tdata-platform_url="${u}"\n\t\t\t\tdata-platform="${s}"\n\t\t\t\tdata-customer_id="${p}"\n\t\t\t\tdata-app="${_}"\n\t\t\t\tdata-wallet_type="${m}"\n\t\t\t\tdata-target_currency="${w}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(g) : o && o.parentNode.insertBefore(g, o);
      let h = "";
      return h = u && u.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/boatrewardspage.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/boatrewardspage.min.js", t(h, !1, !1, !0, d), {
        containerId: f,
        script_url: h
      }
    }
    if ("referral" === r) {
      const {
        current_url_params: r
      } = n(), l = e(a.api_key) || null, s = a.platform || "", p = e(a.customer_id) || e(c.customer_id) || r && e(r.get("nector_inject_id")) || "", u = a.platform_url || "https://platform.nector.io", _ = a.show_on || "", m = a.app || "", w = a.target_currency || "", f = a.placement || "last", g = a.container_selector || null;
      if (!l) return null;
      const h = a.containerId || "nector-referral-page-container",
        $ = document.createElement("div");
      if ($.innerHTML = `\n\t\t\t<div \n\t\t\t\tid="${h}"\n\t\t\t\tdata-api_key="${l}"\n\t\t\t\tdata-platform_url="${u}"\n\t\t\t\tdata-platform="${s}"\n\t\t\t\tdata-customer_id="${p}"\n\t\t\t\tdata-show_on="${_}"\n\t\t\t\tdata-app="${m}"\n\t\t\t\tdata-target_currency="${w}"\n\t\t\t></div>\n\t\t`, "order_status_page" === _) {
        $.classList.add("nector-content-box"), $.style = "margin: 15px 0;";
        const t = document.querySelector(g || ".main .main__content .step .step__sections > .section > .section__content");
        t && ("first" === f ? t.prepend($) : t.append($))
      } else i ? i.appendChild($) : o && o.parentNode.insertBefore($, o);
      let y = "";
      return y = u && u.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/referralspage.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/referralspage.min.js", t(y, !1, !1, !0, d), {
        containerId: h,
        script_url: y
      }
    }
    if ("customerearn" === r) {
      const n = window.nector_params || {},
        r = e(a.api_key) || null,
        c = a.platform || "",
        l = e(a.customer_id) || e(n.customer_id) || "",
        s = a.platform_url || "https://platform.nector.io",
        p = a.redirect_url || null,
        u = a.view_type || !1,
        _ = a.price || n.price || "",
        m = a.background_color || null,
        w = a.text_color || null,
        f = a.font_size || null,
        g = a.earn_coins_classes || null,
        h = a.coin_per_unit || null,
        $ = a.custom_text || null,
        y = a.target_currency || "";
      if (!r) return null;
      const v = a.containerId || "nector-customerearn-container",
        k = document.createElement("div");
      k.innerHTML = `\n\t\t\t<div \n\t\t\t\tid="${v}"\n\t\t\t\tdata-api_key="${r}"\n\t\t\t\tdata-customer_id="${l}"\n\t\t\t\tdata-platform="${c}"\n\t\t\t\tdata-platform_url="${s}"\n\t\t\t\tdata-redirect_url="${p}"\n\t\t\t\tdata-view_type="${u}"\n\t\t\t\tdata-price="${_}"\n\t\t\t\tdata-background_color="${m}"\n\t\t\t\tdata-text_color="${w}"\n\t\t\t\tdata-font_size="${f}"\n\t\t\t\tdata-earn_coins_classes="${g}"\n\t\t\t\tdata-coin_per_unit="${h}"\n\t\t\t\tdata-custom_text="${$}"\n\t\t\t\tdata-target_currency="${y}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(k) : o && o.parentNode.insertBefore(k, o);
      let b = "";
      return b = s && s.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/customerearn.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/customerearn.min.js", t(b, !1, !1, !0, d), {
        containerId: v,
        script_url: b
      }
    }
    if ("useyourcoinscheckbox" === r) {
      const n = window.nector_params || {},
        r = e(a.api_key) || null,
        c = a.platform || "",
        l = e(a.customer_id) || e(n.customer_id) || "",
        s = a.platform_url || "https://platform.nector.io",
        p = a.useyourcoins_checkbox_classes || n.useyourcoins_checkbox_classes || "",
        u = a.target_element_id || n.target_element_id,
        _ = a.price || n.price || "",
        m = e(a.product_id) || e(n.product_id) || "",
        w = a.price_selector || n.price_selector || "",
        f = a.page_type || n.page_type || "",
        g = a.auto_apply || n.auto_apply || !1,
        h = a.hide_if_not_loggedin || n.hide_if_not_loggedin || !1,
        $ = a.hide_border || n.hide_border || !1,
        y = a.hide_animation || n.hide_animation || !1,
        v = a.redirect_url || null,
        k = a.background_color || null,
        b = a.text_color || null,
        x = a.font_size || null,
        j = a.logged_in_custom_text_unchecked || null,
        L = a.logged_in_custom_text_checked || null,
        I = a.logged_out_custom_text || null,
        N = a.target_currency || "";
      if (!r) return null;
      const E = u || a.containerId || "nector-useyourcoins-container",
        B = document.createElement("div");
      B.innerHTML = `\n\t\t\t<div\n\t\t\t\tid="${E}"\n\t\t\t\tdata-useyourcoins_checkbox_classes="${p}"\n\t\t\t\tdata-price="${_}"\n\t\t\t\tdata-product_id="${m}"\n\t\t\t\tdata-price_selector="${w}"\n\t\t\t\tdata-page_type="${f}"\n\t\t\t\tdata-auto_apply="${g}"\n\t\t\t\tdata-hide_if_not_loggedin="${h}"\n\t\t\t\tdata-hide_border="${$}"\n\t\t\t\tdata-hide_animation="${y}"\n\t\t\t\tdata-redirect_url="${v}"\n\t\t\t\tdata-background_color="${k}"\n\t\t\t\tdata-text_color="${b}"\n\t\t\t\tdata-font_size="${x}"\n\t\t\t\tdata-logged_in_custom_text_unchecked="${j}"\n\t\t\t\tdata-logged_in_custom_text_checked="${L}"\n\t\t\t\tdata-logged_out_custom_text="${I}"\n\t\t\t\tdata-api_key="${r}"\n\t\t\t\tdata-customer_id="${l}"\n\t\t\t\tdata-platform="${c}"\n\t\t\t\tdata-platform_url="${s}"\n\t\t\t\tdata-target_currency="${N}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(B) : o && o.parentNode.insertBefore(B, o);
      let C = "";
      return C = s && s.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/useyourcoins.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/useyourcoins.min.js", u && (C += `?target_element_id=${u}`), t(C, !1, !1, !0, d), {
        containerId: E,
        script_url: C
      }
    }
    if ("visitor_widget" === r) {
      const n = e(a.api_key) || null,
        r = a.platform || "",
        l = e(a.customer_id) || e(c.customer_id) || "",
        s = a.platform_url || "https://platform.nector.io",
        p = a.delay,
        u = a.title,
        _ = a.show_widget || !0,
        m = a.target_currency || "";
      if (!n || l) return null;
      const w = a.containerId || "nector-visitorleads",
        f = document.createElement("div");
      f.innerHTML = `\n\t\t\t<div \n\t\t\t\tid="${w}"\n\t\t\t\tdata-api_key="${n}"\n\t\t\t\tdata-platform="${r}"\n\t\t\t\tdata-platform_url="${s}"\n\t\t\t\tdata-customer_id="${l}"\n\t\t\t\tdata-delay="${p}"\n\t\t\t\tdata-title="${u}"\n\t\t\t\tdata-show_widget="${_}"\n\t\t\t\tdata-target_currency="${m}"\n\t\t\t></div>\n\t\t`, i ? i.appendChild(f) : o && o.parentNode.insertBefore(f, o);
      let g = "";
      return g = s && s.includes("stageplatform.nector.io") ? "https://cdn.nector.io/nector-static/no-cache/stagereward-widget/package/visitorleads.min.js" : "https://cdn.nector.io/nector-static/no-cache/reward-widget/package/visitorleads.min.js", t(g, !1, !1, !0, d), {
        containerId: w,
        script_url: g
      }
    }
    return null
  }
  const a = document.currentScript;
  void 0 === window.nector_params && (window.nector_params = {}), void 0 === window.nector && (window.nector = {}), window.elementId = "nector-rewards-widget-wSVNjD", void 0 !== window.nector_sdk && window.nector_sdk._initialized || (window.nector_sdk = {
      _initialized: !0,
      _emitted: !1,
      init_widget: function(t, e, n) {
        if (!t || !e || !n) return console.error("Nector SDK: init_widget requires op, config, and container_element"), null;
        let a = null;
        if ("string" == typeof n) {
          if (a = document.getElementById(n), !a) return console.error("Nector SDK: Element with id '" + n + "' not found"), null
        } else {
          if (!n || !n.appendChild) return console.error("Nector SDK: container_element must be a DOM element or a string element ID"), null;
          a = n
        }
        return r(t, e, null, a)
      }
    }, window.nector_sdk._emitted || (window.dispatchEvent(new CustomEvent("nector_sdk_initialized", {
      detail: {
        sdk: window.nector_sdk
      }
    })), window.nector_sdk._emitted = !0)),
    function(t) {
      const e = t.dataset;
      if (!e || 0 === Object.values(e).length || !e.op) return;
      const n = {};
      for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
      r(e.op, n, t, null)
    }(a)
})();