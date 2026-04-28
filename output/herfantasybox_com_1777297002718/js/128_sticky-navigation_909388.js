document.addEventListener("DOMContentLoaded", () => {
  const buyBtn = document.querySelector(".buy-button button");
  if (buyBtn) {
    const style = document.createElement("style"),
      bgColor = getComputedStyle(buyBtn).backgroundColor;
    style.textContent = `
            .sticky-navigation-pdp__inner a.active-nav::before {
                background-color: ${bgColor} !important;
            }
        `, document.head.appendChild(style)
  }
  const items = [{
      id: "product-details",
      label: "Purchase details"
    }, {
      id: "product-main",
      label: "Purchasing options"
    }, {
      id: "product-ingredients",
      label: "Key ingredients"
    }, {
      id: "product-benefits",
      label: "Benefits"
    }, {
      id: "product-faqs",
      label: "FAQs"
    }, {
      id: "related-products",
      label: "Related products"
    }, {
      id: "looxReviews",
      label: "Reviews"
    }],
    nav = document.querySelector(".sticky-navigation-pdp__inner"),
    sticky = document.getElementById("sticky-navigation-pdp"),
    header = document.querySelector("#shopify-section-header");
  let timeout = null;
  nav.innerHTML = "";
  let hasItems = !1;
  items.forEach(item => {
    if (document.getElementById(item.id)) {
      const a = document.createElement("a");
      a.href = `#${item.id}`, a.textContent = item.label, nav.appendChild(a), hasItems = !0
    }
  }), sticky.classList.toggle("populated", hasItems);
  const scrollTo = e => {
    e.preventDefault();
    const target = document.getElementById(e.target.getAttribute("href").substring(1));
    if (target) {
      const offset = 40 + (sticky?.offsetHeight || 0) + (header?.offsetHeight || 0);
      window.scrollTo({
        top: target.getBoundingClientRect().top + scrollY - offset,
        behavior: "smooth"
      })
    }
  };
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", scrollTo));
  const getOffset = () => (sticky?.offsetHeight || 0) + (header?.offsetHeight || 0) + 20,
    setActive = id => {
      clearTimeout(timeout), timeout = setTimeout(() => {
        nav.querySelectorAll("a").forEach(link => {
          const isActive = link.getAttribute("href") === `#${id}`;
          if (link.classList.toggle("active-nav", isActive), isActive && window.innerWidth < 860) {
            const linkRect = link.getBoundingClientRect(),
              stickyRect = sticky.getBoundingClientRect(),
              scrollLeft = sticky.scrollLeft,
              linkCenter = linkRect.left - stickyRect.left + linkRect.width / 2,
              stickyCenter = stickyRect.width / 2,
              targetScroll = scrollLeft + linkCenter - stickyCenter;
            sticky.scrollTo({
              left: Math.max(0, targetScroll),
              behavior: "smooth"
            })
          }
        })
      }, 0)
    },
    createObserver = () => new IntersectionObserver(entries => {
      let activeSection = null,
        minDistance = 1 / 0;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const distance = Math.abs(entry.boundingClientRect.top - getOffset());
          distance < minDistance && (minDistance = distance, activeSection = entry.target.id)
        }
      }), activeSection && setActive(activeSection)
    }, {
      rootMargin: `-${getOffset()}px 0px -70% 0px`,
      threshold: [0, .1, .5]
    });
  let observer = createObserver();
  items.forEach(({
    id
  }) => {
    const el = document.getElementById(id);
    el && observer.observe(el)
  }), header && new MutationObserver(() => {
    setTimeout(() => {
      observer.disconnect(), observer = createObserver(), items.forEach(({
        id
      }) => {
        const el = document.getElementById(id);
        el && observer.observe(el)
      })
    }, 100)
  }).observe(header, {
    attributes: !0,
    attributeFilter: ["class"]
  })
});
//# sourceMappingURL=/cdn/shop/t/260/assets/sticky-navigation.js.map?v=108529681066408105981760392463