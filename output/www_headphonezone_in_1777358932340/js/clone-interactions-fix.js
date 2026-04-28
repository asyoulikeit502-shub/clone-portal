(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function closest(el, selector) {
    return el && el.closest ? el.closest(selector) : null;
  }

  function unlockPageScroll() {
    var html = document.documentElement;
    var body = document.body;
    if (!body) return;

    ['no-scroll','noscroll','overflow-hidden','modal-open','menu-open','loading','is-loading','preload','preloader-active'].forEach(function (cls) {
      html.classList.remove(cls);
      body.classList.remove(cls);
    });

    [html, body].forEach(function (el) {
      var overflow = (el.style.overflow || '').toLowerCase();
      var overflowY = (el.style.overflowY || '').toLowerCase();
      if (overflow === 'hidden') el.style.overflow = 'auto';
      if (overflowY === 'hidden') el.style.overflowY = 'auto';
      if (el.style.position === 'fixed' && (el === body || el === html)) el.style.position = '';
      if (el.style.height === '100vh') el.style.height = '';
    });

    document.querySelectorAll('.preloader, .preloader-wrapper, .page-loader, .loader, .loading-screen, #preloader, #loader').forEach(function (el) {
      el.style.display = 'none';
      el.style.opacity = '0';
      el.style.visibility = 'hidden';
      el.style.pointerEvents = 'none';
    });
  }

  ready(function () {
    unlockPageScroll();
    setTimeout(unlockPageScroll, 300);
    setTimeout(unlockPageScroll, 1200);

    document.addEventListener('click', function (e) {
      var toggle = closest(e.target, '[data-bs-toggle="collapse"], [data-toggle="collapse"], [data-target], [href^="#"]');
      if (toggle) {
        var selector = toggle.getAttribute('data-bs-target') || toggle.getAttribute('data-target') || toggle.getAttribute('href');
        if (selector && selector.length > 1 && selector.charAt(0) === '#') {
          var panel = document.querySelector(selector);
          if (panel && (panel.classList.contains('collapse') || panel.classList.contains('accordion-collapse'))) {
            e.preventDefault();
            panel.classList.toggle('show');
            toggle.classList.toggle('collapsed');
            toggle.setAttribute('aria-expanded', panel.classList.contains('show') ? 'true' : 'false');
          }
        }
      }

      var accBtn = closest(e.target, '.accordion-button, .accordion-title, .faq-question, .faq-title');
      if (accBtn && !toggle) {
        var item = closest(accBtn, '.accordion-item, .faq-item, .accordion') || accBtn.parentElement;
        var body = item && (item.querySelector('.accordion-body, .accordion-content, .faq-answer, .collapse') || item.nextElementSibling);
        if (body) {
          e.preventDefault();
          accBtn.classList.toggle('active');
          body.classList.toggle('show');
          body.style.display = (body.classList.contains('show') || accBtn.classList.contains('active')) ? 'block' : '';
        }
      }

      var menuBtn = closest(e.target, '.navbar-toggler, .menu-toggle, .hamburger, .mobile-menu-toggle, [data-menu-toggle]');
      if (menuBtn) {
        var targetSelector = menuBtn.getAttribute('data-bs-target') || menuBtn.getAttribute('data-target') || menuBtn.getAttribute('data-menu-toggle');
        var menu = targetSelector ? document.querySelector(targetSelector) : null;
        if (!menu) menu = document.querySelector('.navbar-collapse, .mobile-menu, .nav-menu, .menu');
        if (menu) {
          e.preventDefault();
          menu.classList.toggle('show');
          menu.classList.toggle('active');
          document.body.classList.toggle('menu-open');
        }
      }

      var next = closest(e.target, '.slick-next, .swiper-button-next, .owl-next, [data-slider-next]');
      var prev = closest(e.target, '.slick-prev, .swiper-button-prev, .owl-prev, [data-slider-prev]');
      if (next || prev) {
        var slider = closest(e.target, '.slick-slider, .swiper, .swiper-container, .owl-carousel, .slider, .carousel');
        if (slider) {
          var track = slider.querySelector('.slick-track, .swiper-wrapper, .owl-stage, .slider-track, .carousel-inner') || slider;
          var slides = track.children;
          if (slides.length) {
            e.preventDefault();
            var current = parseInt(slider.getAttribute('data-clone-slide') || '0', 10);
            current = next ? Math.min(current + 1, slides.length - 1) : Math.max(current - 1, 0);
            slider.setAttribute('data-clone-slide', current);
            track.style.transition = 'transform .45s ease';
            track.style.transform = 'translateX(' + (-current * 100) + '%)';
            Array.prototype.forEach.call(slides, function (slide) { slide.style.flex = '0 0 100%'; });
            track.style.display = 'flex';
          }
        }
      }
    }, true);
  });
})();
