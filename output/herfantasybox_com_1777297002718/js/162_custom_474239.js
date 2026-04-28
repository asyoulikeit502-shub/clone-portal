(function() {
  "use strict";
  const header = document.querySelector(".header"),
    searchCloseIcon = document.querySelector(".search-close-icon"),
    searchIcons = document.querySelectorAll(".search-icon"),
    searchDropdown = document.querySelector(".search-dropdown");
  searchIcons.forEach(elem => {
    elem.addEventListener("click", toggleSearch)
  }), searchCloseIcon.addEventListener("click", toggleSearch);

  function toggleSearch() {
    searchDropdown.classList.toggle("active"), searchDropdown.style.top = header.offsetHeight + 10 + "px"
  }

  function waitForElement(querySelector, timeout) {
    return new Promise((resolve, reject) => {
      var timer = !1;
      if (document.querySelectorAll(querySelector).length) return resolve();
      const observer2 = new MutationObserver(() => {
        if (document.querySelectorAll(querySelector).length) return observer2.disconnect(), timer !== !1 && clearTimeout(timer), resolve()
      });
      observer2.observe(document.body, {
        childList: !0,
        subtree: !0
      }), timeout && (timer = setTimeout(() => {
        observer2.disconnect(), reject()
      }, timeout))
    })
  }
  document.addEventListener("DOMContentLoaded", function() {
    waitForElement(".yotpo-email-link-action", 1e3).then(() => {
      document.querySelector(".yotpo-email-link-action").click()
    }).catch(e => {})
  });

  function onNavActiveAdded() {
    const headerElement = document.querySelector("#shopify-section-header"),
      announcementBarElement = document.querySelector("#shopify-section-announcement-bar"),
      navElement = document.querySelector(".header-nav");
    if (headerElement && announcementBarElement && navElement) {
      const headerHeight = headerElement.offsetHeight,
        announcementBarHeight = announcementBarElement.offsetHeight,
        totalHeight = headerHeight + announcementBarHeight;
      navElement.style.top = `${totalHeight}px`
    } else console.error("One or more elements were not found")
  }
  const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const currentClasses = mutation.target.classList;
          if (currentClasses.contains("nav-active") && onNavActiveAdded(), currentClasses.contains("test-animated-reviews")) {
            const verifiedCustomersSpan = document.querySelector(".new-verified-customers--ratingstats span");
            verifiedCustomersSpan && !verifiedCustomersSpan.classList.contains("is-animated") && animateReviews()
          }
        }
      })
    }),
    bodyElement = document.querySelector("body");
  observer.observe(bodyElement, {
    attributes: !0
  }), observer.observe(document.documentElement, {
    attributes: !0
  });

  function animateReviews() {
    const toAnimate = document.querySelector(".new-verified-customers--ratingstats span");
    toAnimate.classList.add("is-animated");
    let currentNumber = 97e4;
    const targetNumber = 1e6,
      increment = 1e3,
      interval = 100;

    function formatNumber(num) {
      return num.toLocaleString() + "+"
    }

    function animateNumber() {
      currentNumber < targetNumber ? (currentNumber += increment, requestAnimationFrame(() => {
        toAnimate.textContent = formatNumber(currentNumber)
      }), setTimeout(animateNumber, interval)) : toAnimate.textContent = formatNumber(targetNumber)
    }
    animateNumber()
  }
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/custom.js.map?v=113034734548720953641772808300