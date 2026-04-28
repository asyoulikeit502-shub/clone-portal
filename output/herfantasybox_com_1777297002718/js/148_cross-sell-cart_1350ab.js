(() => {
  function initCrossSell() {
    const el = document.querySelector(".cross_sell_swiper");
    if (!el) return;
    if (typeof window.Swiper > "u") {
      setTimeout(initCrossSell, 50);
      return
    }
    const root = el.closest(".cross-sell-cart") || document,
      nextEl = root.querySelector(".cross-sell-nav .swiper-button-next"),
      prevEl = root.querySelector(".cross-sell-nav .swiper-button-prev");
    if (el.swiper) {
      el.swiper.params.navigation.nextEl = nextEl, el.swiper.params.navigation.prevEl = prevEl, el.swiper.navigation.init(), el.swiper.navigation.update(), el.swiper.update();
      return
    }
    const sw = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl,
        prevEl
      },
      observer: !0,
      observeParents: !0,
      resizeObserver: !0
    });
    setTimeout(() => sw.update(), 60)
  }
  document.addEventListener("DOMContentLoaded", initCrossSell), window.addEventListener("load", initCrossSell), ["cart:updated", "cart:refresh", "cart-drawer:open", "shopify:section:load", "shopify:section:select"].forEach(evt => document.addEventListener(evt, () => setTimeout(initCrossSell, 150))), new MutationObserver(() => setTimeout(initCrossSell, 150)).observe(document.body, {
    childList: !0,
    subtree: !0
  })
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/cross-sell-cart.js.map?v=135015154214136584151757442143