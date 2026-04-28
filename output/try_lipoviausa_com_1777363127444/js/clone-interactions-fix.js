(function () {
  'use strict';

  /* ── Utilities ─────────────────────────────────────────────────────── */
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function q(selector, scope) { return (scope || document).querySelector(selector); }
  function qa(selector, scope) { return Array.from((scope || document).querySelectorAll(selector)); }
  function cl(el) { return el ? el.classList : { toggle: function(){}, add: function(){}, remove: function(){}, contains: function(){ return false; } }; }

  /* ── Preloader / scroll-lock removal ────────────────────────────────── */
  function unlockPageScroll() {
    var html = document.documentElement;
    var body = document.body;
    if (!body) return;

    var lockClasses = ['no-scroll','noscroll','overflow-hidden','modal-open',
      'menu-open','loading','is-loading','preload','preloader-active',
      'js-nav-open','drawer-open','is-menu-open'];
    lockClasses.forEach(function (cls) {
      cl(html).remove(cls);
      cl(body).remove(cls);
    });

    [html, body].forEach(function (el) {
      var ov = (el.style.overflow || '').toLowerCase();
      var ovy = (el.style.overflowY || '').toLowerCase();
      if (ov === 'hidden') el.style.overflow = 'auto';
      if (ovy === 'hidden') el.style.overflowY = 'auto';
      if (el.style.position === 'fixed' && (el === body || el === html)) el.style.position = '';
      if (el.style.height === '100vh') el.style.height = '';
      if (el.style.top && el === body) el.style.top = '';
    });

    qa('.preloader, .preloader-wrapper, .page-loader, .loader, .loading-screen, #preloader, #loader, .site-preloader').forEach(function (el) {
      el.style.cssText += ';display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important';
    });
  }

  /* ── Accordion / collapse ────────────────────────────────────────────── */
  function handleCollapse(trigger) {
    var selector = trigger.getAttribute('data-bs-target') ||
                   trigger.getAttribute('data-target') ||
                   trigger.getAttribute('aria-controls') && ('#' + trigger.getAttribute('aria-controls'));
    // href="#id" style collapse triggers
    if (!selector) {
      var href = trigger.getAttribute('href') || '';
      if (href.length > 1 && href.charAt(0) === '#') selector = href;
    }
    if (!selector || selector.length <= 1) return false;

    var panel = q(selector);
    if (!panel) return false;

    var isCollapse = panel.classList.contains('collapse') ||
                     panel.classList.contains('accordion-collapse') ||
                     trigger.getAttribute('data-bs-toggle') === 'collapse' ||
                     trigger.getAttribute('data-toggle') === 'collapse';
    if (!isCollapse) return false;

    panel.classList.toggle('show');
    cl(trigger).toggle('collapsed');
    trigger.setAttribute('aria-expanded', panel.classList.contains('show') ? 'true' : 'false');

    // Animate height for smooth open/close
    if (panel.classList.contains('show')) {
      panel.style.height = '';
      panel.style.display = 'block';
      var h = panel.scrollHeight;
      panel.style.height = '0';
      panel.style.overflow = 'hidden';
      panel.style.transition = 'height .3s ease';
      requestAnimationFrame(function () { panel.style.height = h + 'px'; });
      setTimeout(function () { panel.style.height = ''; panel.style.overflow = ''; panel.style.transition = ''; }, 320);
    } else {
      panel.style.height = panel.scrollHeight + 'px';
      panel.style.overflow = 'hidden';
      panel.style.transition = 'height .3s ease';
      requestAnimationFrame(function () { panel.style.height = '0'; });
      setTimeout(function () { panel.style.display = 'none'; panel.style.height = ''; panel.style.overflow = ''; panel.style.transition = ''; }, 320);
    }
    return true;
  }

  function handleAccordionButton(btn) {
    var item = btn.closest('.accordion-item, .faq-item, .accordion, [class*="accordion"]') || btn.parentElement;
    if (!item) return false;
    var body = item.querySelector('.accordion-body, .accordion-content, .faq-answer, .accordion-panel, [class*="accordion-body"]');
    if (!body && item.nextElementSibling) body = item.nextElementSibling;
    if (!body) return false;

    var open = btn.classList.contains('active') || btn.getAttribute('aria-expanded') === 'true';
    cl(btn).toggle('active', !open);
    btn.setAttribute('aria-expanded', open ? 'false' : 'true');

    if (open) {
      body.style.height = body.scrollHeight + 'px';
      body.style.overflow = 'hidden';
      body.style.transition = 'height .3s ease';
      requestAnimationFrame(function () { body.style.height = '0'; });
      setTimeout(function () { cl(body).remove('show'); body.style.cssText = ''; }, 320);
    } else {
      body.style.display = 'block';
      cl(body).add('show');
      body.style.height = '0';
      body.style.overflow = 'hidden';
      body.style.transition = 'height .3s ease';
      var h = body.scrollHeight;
      requestAnimationFrame(function () { body.style.height = h + 'px'; });
      setTimeout(function () { body.style.height = ''; body.style.overflow = ''; body.style.transition = ''; }, 320);
    }
    return true;
  }

  /* ── Navigation / Drawer / Mobile menu ─────────────────────────────── */
  function handleNav(btn) {
    // Shopify drawer pattern: data-drawer-toggle, aria-controls pointing to a <details> or panel
    var drawerSelector = btn.getAttribute('data-drawer-toggle') ||
                         btn.getAttribute('data-drawer') ||
                         btn.getAttribute('aria-controls') && ('#' + btn.getAttribute('aria-controls'));
    if (drawerSelector) {
      var drawer = q(drawerSelector) || q('[id="' + drawerSelector.replace('#','') + '"]');
      if (drawer) {
        cl(drawer).toggle('active');
        cl(drawer).toggle('is-active');
        cl(drawer).toggle('drawer--is-open');
        cl(document.body).toggle('drawer-open');
        btn.setAttribute('aria-expanded', drawer.classList.contains('active') || drawer.classList.contains('is-active') ? 'true' : 'false');
        return true;
      }
    }

    // Standard mobile menu
    var targetSelector = btn.getAttribute('data-bs-target') || btn.getAttribute('data-target') || btn.getAttribute('data-menu-toggle');
    var menu = (targetSelector && q(targetSelector)) ||
               q('.navbar-collapse, .mobile-menu, .nav-menu, .menu-drawer, [class*="mobile-nav"]');
    if (menu) {
      cl(menu).toggle('show');
      cl(menu).toggle('active');
      cl(menu).toggle('is-active');
      cl(document.body).toggle('menu-open');
      btn.setAttribute('aria-expanded', menu.classList.contains('show') || menu.classList.contains('active') ? 'true' : 'false');
      return true;
    }
    return false;
  }

  /* ── Tabs ────────────────────────────────────────────────────────────── */
  function handleTab(tab) {
    // Bootstrap / custom tabs
    var panelSel = tab.getAttribute('data-bs-target') || tab.getAttribute('data-target') || tab.getAttribute('href');
    if (!panelSel || panelSel.charAt(0) !== '#') return false;
    var panel = q(panelSel);
    if (!panel) return false;

    // Deactivate siblings
    var list = tab.closest('[role="tablist"], .nav, .tabs, .tab-list, ul') || tab.parentElement.parentElement;
    qa('[role="tab"], .nav-link, .tab-link, .tab-item > a, .tab-item > button', list).forEach(function (t) {
      cl(t).remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    // Hide all panels in same tab container
    var container = panel.parentElement;
    qa('.tab-pane, .tab-panel, [role="tabpanel"]', container).forEach(function (p) {
      cl(p).remove('show', 'active');
      p.hidden = true;
    });

    cl(tab).add('active');
    tab.setAttribute('aria-selected', 'true');
    cl(panel).add('show', 'active');
    panel.hidden = false;
    return true;
  }

  /* ── Shopify <details> / summary disclosure pattern ──────────────────── */
  // Shopify Dawn and many themes use <details>/<summary> for menus, drawers, filters
  // These are native HTML — no JS needed — but cloner may have altered the markup.
  // We ensure they work by reinitialising any custom attributes.
  function patchDetailsElements() {
    qa('details').forEach(function (det) {
      // If it has data-disclosure or similar, wire up open class on parent
      det.addEventListener('toggle', function () {
        cl(det).toggle('is-open', det.open);
        cl(det.parentElement).toggle('is-open', det.open);
      });
    });
  }

  /* ── Dropdown (hover / click) ─────────────────────────────────────────── */
  function handleDropdown(btn) {
    var menu = btn.nextElementSibling ||
               q('.dropdown-menu, [class*="sub-menu"]', btn.parentElement);
    if (!menu) return false;
    var open = cl(menu).contains('show') || cl(menu).contains('active');
    // Close all other open dropdowns first
    qa('.dropdown-menu.show, [class*="sub-menu"].show').forEach(function (m) { cl(m).remove('show', 'active'); });
    cl(menu).toggle('show', !open);
    cl(menu).toggle('active', !open);
    return true;
  }

  /* ── Slider (Slick / Swiper / Owl / generic) ─────────────────────────── */
  function sliderMove(el, dir) {
    // Walk up to find the slider root
    var root = el.closest('.slick-slider, .swiper, .swiper-container, .swiper-wrapper, .owl-carousel, .splide, .glide, .slider, .carousel, [class*="slider"]');
    if (!root) return false;

    // For Swiper: call .slideNext() / .slidePrev() if available
    if (root.swiper) {
      dir > 0 ? root.swiper.slideNext() : root.swiper.slidePrev();
      return true;
    }
    if (root._splide) {
      dir > 0 ? root._splide.go('>') : root._splide.go('<');
      return true;
    }

    // Generic CSS-transform approach
    var track = root.querySelector('.slick-track, .swiper-wrapper, .owl-stage, .splide__list, .glide__slides, .slider-track, .carousel-inner, [class*="track"], [class*="wrapper"]') || root;
    var slides = qa(':scope > *', track);
    if (!slides.length) return false;

    var current = parseInt(root.getAttribute('data-clone-slide') || '0', 10);
    var visible = Math.round(root.offsetWidth / (slides[0].offsetWidth || root.offsetWidth));
    visible = Math.max(1, visible);
    var max = Math.max(0, slides.length - visible);
    current = Math.max(0, Math.min(current + dir, max));
    root.setAttribute('data-clone-slide', current);

    track.style.transition = 'transform .45s ease';
    track.style.transform = 'translateX(' + (-current * (100 / visible)) + '%)';
    slides.forEach(function (s) { s.style.flex = '0 0 ' + (100 / visible) + '%'; });
    track.style.display = 'flex';
    return true;
  }

  /* ── Close overlays on Escape or outside click ───────────────────────── */
  function bindGlobalDismiss() {
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      qa('.modal.show, .drawer.active, .drawer.is-active, [role="dialog"][aria-hidden="false"]').forEach(function (el) {
        cl(el).remove('show', 'active', 'is-active');
      });
      unlockPageScroll();
    });

    document.addEventListener('click', function (e) {
      // Close open dropdown menus when clicking outside
      qa('.dropdown-menu.show, [class*="sub-menu"].show').forEach(function (menu) {
        if (!menu.contains(e.target) && !(menu.previousElementSibling && menu.previousElementSibling.contains(e.target))) {
          cl(menu).remove('show', 'active');
        }
      });
    });
  }

  /* ── Main delegated click handler ───────────────────────────────────── */
  ready(function () {
    unlockPageScroll();
    setTimeout(unlockPageScroll, 300);
    setTimeout(unlockPageScroll, 1200);

    patchDetailsElements();
    bindGlobalDismiss();

    document.addEventListener('click', function (e) {
      var t = e.target;

      /* 1. Bootstrap / custom collapse */
      var collapseBtn = t.closest('[data-bs-toggle="collapse"], [data-toggle="collapse"]');
      if (collapseBtn) {
        if (handleCollapse(collapseBtn)) { e.preventDefault(); return; }
      }

      /* 2. Accordion buttons (class-based, no data-bs-toggle) */
      var accBtn = t.closest('.accordion-button, .accordion-title, .faq-question, .faq-title, [class*="accordion-btn"]');
      if (accBtn && !collapseBtn) {
        if (handleAccordionButton(accBtn)) { e.preventDefault(); return; }
      }

      /* 3. href="#id" anchors that target a collapse panel */
      var anchor = t.closest('a[href^="#"]');
      if (anchor) {
        if (handleCollapse(anchor)) { e.preventDefault(); return; }
        // Tab triggers via href
        if (handleTab(anchor)) { e.preventDefault(); return; }
      }

      /* 4. Tabs */
      var tabBtn = t.closest('[role="tab"], [data-bs-toggle="tab"], [data-toggle="tab"]');
      if (tabBtn) {
        if (handleTab(tabBtn)) { e.preventDefault(); return; }
      }

      /* 5. Mobile nav / drawer toggle */
      var navBtn = t.closest('.navbar-toggler, .menu-toggle, .hamburger, .mobile-menu-toggle, [data-menu-toggle], [data-drawer-toggle], [class*="mobile-nav-toggle"]');
      if (navBtn) {
        if (handleNav(navBtn)) { e.preventDefault(); return; }
      }

      /* 6. Dropdown toggle */
      var ddBtn = t.closest('[data-bs-toggle="dropdown"], [data-toggle="dropdown"], .dropdown-toggle');
      if (ddBtn) {
        if (handleDropdown(ddBtn)) { e.preventDefault(); return; }
      }

      /* 7. Slider previous / next */
      var nextBtn = t.closest('.slick-next, .swiper-button-next, .owl-next, .splide__arrow--next, .glide__arrow--right, [data-slider-next], [aria-label*="next" i], [class*="slider-next"], [class*="carousel-next"]');
      var prevBtn = t.closest('.slick-prev, .swiper-button-prev, .owl-prev, .splide__arrow--prev, .glide__arrow--left, [data-slider-prev], [aria-label*="prev" i], [class*="slider-prev"], [class*="carousel-prev"]');
      if (nextBtn) { if (sliderMove(nextBtn, 1)) { e.preventDefault(); return; } }
      if (prevBtn) { if (sliderMove(prevBtn, -1)) { e.preventDefault(); return; } }

      /* 8. Slider dots / pagination */
      var dot = t.closest('.slick-dots li, .swiper-pagination-bullet, .owl-dot, .splide__pagination__page, [class*="slider-dot"], [class*="carousel-dot"]');
      if (dot) {
        var list = dot.parentElement;
        var idx  = Array.prototype.indexOf.call(list.children, dot);
        var sliderRoot = dot.closest('.slick-slider, .swiper, .swiper-container, .owl-carousel, .splide, .slider, .carousel, [class*="slider"]');
        if (sliderRoot) {
          qa('li, button, .owl-dot', list).forEach(function (d) { cl(d).remove('active'); });
          cl(dot).add('active');
          if (sliderRoot.swiper) { sliderRoot.swiper.slideTo(idx); }
          else {
            var tr = sliderRoot.querySelector('.slick-track, .swiper-wrapper, .owl-stage, [class*="track"]') || sliderRoot;
            var sl = qa(':scope > *', tr);
            if (sl.length) {
              sliderRoot.setAttribute('data-clone-slide', idx);
              tr.style.transition = 'transform .45s ease';
              tr.style.transform = 'translateX(' + (-idx * 100) + '%)';
              sl.forEach(function (s) { s.style.flex = '0 0 100%'; });
              tr.style.display = 'flex';
            }
          }
          e.preventDefault();
        }
      }
    }, true);
  });
})();
