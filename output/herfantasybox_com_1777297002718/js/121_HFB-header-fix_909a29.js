(function() {
  "use strict";
  const header = document.querySelector("#shopify-section-header");
  document.addEventListener("scroll", () => {
    if (header)
      if (window.scrollY > 20) {
        header.classList.add("pf-header-fix");
        const navigationBarPDP = document.querySelector("#sticky-navigation-pdp");
        navigationBarPDP && navigationBarPDP.classList.add("pf-header-fix")
      } else {
        header.classList.remove("pf-header-fix");
        const navigationBarPDP = document.querySelector("#sticky-navigation-pdp");
        navigationBarPDP && navigationBarPDP.classList.remove("pf-header-fix")
      }
  });

  function BlockScroll() {
    document.querySelector("html").classList.add("scroll-block")
  }

  function AllowScroll() {
    document.querySelector("html").classList.remove("scroll-block")
  }
  const menuObserver = new MutationObserver(() => {
      document.querySelector("body").classList.contains("nav-active") ? BlockScroll() : AllowScroll()
    }),
    cartObserver = new MutationObserver(() => {
      const cart2 = document.querySelector(".rc90");
      cart2 && (cart2.classList.contains("rc90--open") ? BlockScroll() : AllowScroll())
    }),
    cart = document.querySelector(".rc90");
  cart && cartObserver.observe(cart, {
    attributes: !0,
    attributeFilter: ["class"]
  });
  const body = document.querySelector("body");
  body && menuObserver.observe(body, {
    attributes: !0,
    attributeFilter: ["class"]
  })
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/HFB-header-fix.js.map?v=74404054359903257511772808300