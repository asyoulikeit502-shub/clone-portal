(function() {
  var swiperInstance = null,
    isInitializing = !1,
    debounceTimer = null,
    retryCount = 0,
    maxRetries = 20,
    observerSetup = !1;

  function initCrossSellNew() {
    if (!isInitializing) {
      var container = document.querySelector(".cross-sell-new__swiper");
      if (!container) {
        retryCount < maxRetries && (retryCount++, setTimeout(initCrossSellNew, 150));
        return
      }
      if (!(swiperInstance && !swiperInstance.destroyed && container.classList.contains("swiper-initialized"))) {
        if (typeof window.Swiper > "u") {
          retryCount < maxRetries && (retryCount++, setTimeout(initCrossSellNew, 150));
          return
        }
        if (isInitializing = !0, retryCount = 0, swiperInstance && !swiperInstance.destroyed) {
          try {
            swiperInstance.destroy(!0, !0)
          } catch {}
          swiperInstance = null
        }
        requestAnimationFrame(function() {
          setTimeout(function() {
            var freshContainer = document.querySelector(".cross-sell-new__swiper");
            if (!freshContainer) {
              isInitializing = !1;
              return
            }
            try {
              swiperInstance = new Swiper(freshContainer, {
                slidesPerView: 2,
                breakpoints: {
                  400: {
                    slidesPerView: 2.4
                  }
                },
                spaceBetween: 16,
                navigation: {
                  prevEl: ".cross-sell-new__arrow--prev",
                  nextEl: ".cross-sell-new__arrow--next"
                },
                observer: !0,
                observeParents: !0,
                watchOverflow: !0
              })
            } catch (e) {
              console.warn("Cross-sell Swiper init error:", e)
            }
            isInitializing = !1
          }, 50)
        })
      }
    }
  }

  function debouncedInit() {
    clearTimeout(debounceTimer), retryCount = 0, debounceTimer = setTimeout(initCrossSellNew, 200)
  }
  window.initCrossSellNew = initCrossSellNew;

  function setupObserver() {
    if (!observerSetup) {
      var cartBox = document.querySelector(".rc90-box");
      if (!cartBox) {
        setTimeout(setupObserver, 200);
        return
      }
      observerSetup = !0;
      var observer = new MutationObserver(function(mutations) {
        var hasSignificantChange = mutations.some(function(m) {
          return m.addedNodes.length > 0 || m.removedNodes.length > 0
        });
        hasSignificantChange && debouncedInit()
      });
      observer.observe(cartBox, {
        childList: !0,
        subtree: !0
      })
    }
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", function() {
    initCrossSellNew(), setupObserver()
  }) : (initCrossSellNew(), setupObserver()), window.addEventListener("load", function() {
    setTimeout(initCrossSellNew, 100)
  });
  var originalRefreshCart = null;

  function hookRobustCart() {
    window.robustCart && window.robustCart.refreshCart && !originalRefreshCart ? (originalRefreshCart = window.robustCart.refreshCart.bind(window.robustCart), window.robustCart.refreshCart = async function() {
      await originalRefreshCart(), setTimeout(debouncedInit, 100)
    }) : window.robustCart || setTimeout(hookRobustCart, 300)
  }
  hookRobustCart(), ["cart:updated", "cart:refresh", "cart-drawer:open", "shopify:section:load"].forEach(function(evt) {
    document.addEventListener(evt, debouncedInit)
  }), document.addEventListener("submit", function(e) {
    var form = e.target.closest(".cross-sell-new__form");
    if (form) {
      e.preventDefault(), e.stopPropagation();
      var btn = form.querySelector(".cross-sell-new__add-btn"),
        variantInput = form.querySelector('input[name="id"]');
      if (!(!variantInput || !variantInput.value)) {
        var variantId = variantInput.value;
        btn && (btn.disabled = !0, btn.textContent = "..."), fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            items: [{
              id: parseInt(variantId),
              quantity: 1
            }]
          })
        }).then(function(res) {
          return res.json()
        }).then(function() {
          btn && (btn.textContent = "ADDED"), setTimeout(function() {
            window.robustCart && typeof window.robustCart.refreshCart == "function" ? window.robustCart.refreshCart() : window.location.reload()
          }, 300)
        }).catch(function() {
          btn && (btn.disabled = !1, btn.textContent = "ADD")
        })
      }
    }
  }, !0)
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/cross-sell-cart-new.js.map?v=87220442946940595831772023344