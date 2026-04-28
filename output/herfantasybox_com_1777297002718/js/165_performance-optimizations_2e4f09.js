(function() {
  "use strict";
  var loaded = {
      swiper: !1,
      swiperLoading: !1,
      tracking: !1
    },
    swiperQueue = window._swiperQueue || [],
    swiperCallbacks = [];

  function executeQueuedSwipers() {
    if (!(!window.Swiper || window.Swiper._isStub)) {
      var queue = window._swiperQueue || swiperQueue;
      queue.forEach(function(item) {
        if (!item.d) try {
          var selector = item.s || item.selector,
            options = item.o || item.options;
          item.instance = new window.Swiper(selector, options)
        } catch (e) {
          console.warn("Swiper init error:", e)
        }
      }), window._swiperQueue && (window._swiperQueue.length = 0), swiperQueue.length = 0, swiperCallbacks.forEach(function(cb) {
        try {
          cb()
        } catch (e) {}
      }), swiperCallbacks = []
    }
  }
  window.loadSwiper = function(callback) {
    if (callback && swiperCallbacks.push(callback), loaded.swiper && window.Swiper && !window.Swiper._isStub) {
      executeQueuedSwipers();
      return
    }
    if (!loaded.swiperLoading) {
      loaded.swiperLoading = !0;
      var script = document.createElement("script");
      if (script.src = window.swiperBundleUrl, !script.src) {
        console.warn("Swiper URL not found");
        return
      }
      script.onload = function() {
        loaded.swiper = !0, executeQueuedSwipers(), document.dispatchEvent(new CustomEvent("swiper:loaded"))
      }, document.body.appendChild(script)
    }
  };

  function initSwiperLazyLoad() {
    var swiperElements = document.querySelectorAll('.swiper, [class*="swiper"], [data-swiper-lazy]');
    if (swiperElements.length) {
      if (!("IntersectionObserver" in window)) {
        setTimeout(function() {
          window.loadSwiper()
        }, 100);
        return
      }
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          entry.isIntersecting && (window.loadSwiper(), observer.disconnect())
        })
      }, {
        rootMargin: "300px 0px",
        threshold: 0
      });
      swiperElements.forEach(function(el) {
        observer.observe(el)
      });
      var scrollHandler = function() {
        window.loadSwiper(), window.removeEventListener("scroll", scrollHandler)
      };
      window.addEventListener("scroll", scrollHandler, {
        passive: !0
      })
    }
  }

  function loadDelayedScripts() {
    if (!loaded.tracking) {
      loaded.tracking = !0;
      var ensighten = document.createElement("script");
      ensighten.src = "//nexus.ensighten.com/choozle/20245/Bootstrap.js", ensighten.defer = !0, document.head.appendChild(ensighten), removeInteractionListeners()
    }
  }

  function removeInteractionListeners() {
    document.removeEventListener("scroll", loadDelayedScripts), document.removeEventListener("click", loadDelayedScripts), document.removeEventListener("touchstart", loadDelayedScripts), document.removeEventListener("mousemove", loadDelayedScripts)
  }

  function init() {
    initSwiperLazyLoad(), document.addEventListener("scroll", loadDelayedScripts, {
      once: !0,
      passive: !0
    }), document.addEventListener("click", loadDelayedScripts, {
      once: !0
    }), document.addEventListener("touchstart", loadDelayedScripts, {
      once: !0,
      passive: !0
    }), document.addEventListener("mousemove", loadDelayedScripts, {
      once: !0,
      passive: !0
    }), setTimeout(loadDelayedScripts, 5e3)
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init()
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/performance-optimizations.js.map?v=32163006064387180531772808300