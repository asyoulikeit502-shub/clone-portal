function waitForElement(querySelector, timeout) {
  return new Promise((resolve, reject) => {
    var timer = !1;
    if (document.querySelectorAll(querySelector).length) return resolve();
    const observer = new MutationObserver(() => {
      if (document.querySelectorAll(querySelector).length) return observer.disconnect(), timer !== !1 && clearTimeout(timer), resolve()
    });
    observer.observe(document.body, {
      childList: !0,
      subtree: !0
    }), timeout && (timer = setTimeout(() => {
      observer.disconnect(), reject()
    }, timeout))
  })
}

function getViewportHeight() {
  return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
}

function getScrollTop() {
  return window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
}

function isInViewport(element) {
  if (element === null) return !1;
  var rect = element.getBoundingClientRect(),
    elementTop = rect.top + getScrollTop(),
    elementBottom = elementTop + rect.height,
    viewportTop = getScrollTop(),
    viewportBottom = viewportTop + getViewportHeight();
  return elementBottom > viewportTop && elementTop < viewportBottom
}
window.addEventListener("scroll", checkBundleAccordionViewport);

function checkBundleAccordionViewport() {
  const ingredientList = document.querySelector(".ingredient-list"),
    productFaq = document.querySelector(".product-faq"),
    descriptionToggle = document.querySelector(".toggle-panel"),
    newVerifiedCustomers = document.querySelector(".new-verified-customers"),
    faqSection = document.querySelector(".intro--normal.section-spacing--top"),
    hasElementInViewport = ingredientList && isInViewport(ingredientList) || productFaq && isInViewport(productFaq) || descriptionToggle && isInViewport(descriptionToggle) || newVerifiedCustomers && isInViewport(newVerifiedCustomers) || faqSection && isInViewport(faqSection);
  !window.runExperiment100472986 && hasElementInViewport && (window.runExperiment100472986 = 1, window._conv_q = window._conv_q || [], window._conv_q.push(["executeExperiment", "100472986"]), console.log("Convert - 100472986 - Her Fantasy Bundle - How to Use & Ingredients - Experiment Activated"))
}
window.addEventListener("scroll", checkDescriptionAccordionViewport), document.addEventListener("DOMContentLoaded", checkDescriptionAccordionViewport);

function checkDescriptionAccordionViewport() {
  const descriptionTop = document.querySelector(".product-main-description"),
    descriptionBottom = document.querySelector(".description-accordion"),
    hasElementInViewport = descriptionTop && isInViewport(descriptionTop) || descriptionBottom && isInViewport(descriptionBottom);
  !window.runExperiment100477301 && hasElementInViewport && (window.runExperiment100477301 = 1, window._conv_q = window._conv_q || [], window._conv_q.push(["executeExperiment", "100477301"]), console.log("Convert - 100477301 - Renew Her Oil - Description Accordion - Experiment Activated"))
}
window.addEventListener("scroll", reviewsViewport), document.addEventListener("DOMContentLoaded", reviewsViewport);

function reviewsViewport() {
  const reviews = document.querySelector(".new-verified-customers--ratingstats"),
    hasElementInViewport = reviews && isInViewport(reviews);
  !window.runExperiment100495453 && hasElementInViewport && (window.runExperiment100495453 = 1, window._conv_q = window._conv_q || [], window._conv_q.push(["executeExperiment", "100495453"]), console.log("Convert - 100495453 - Homepage | Animated Reviews - Experiment Activated"))
}
window.addEventListener("DOMContentLoaded", function() {
  const headerHamburger = document.querySelector(".header-hamburger");
  headerHamburger && headerHamburger.addEventListener("click", function() {
    window.runExperimentReviewsNav || (window.runExperimentReviewsNav = 1, window._conv_q = window._conv_q || [], window._conv_q.push(["executeExperiment", "1004114842"]), console.log("Convert - 1004114842 - Mobile Nav | Reviews - Experiment Activated"))
  });
  const reviewsLink = document.querySelector(".link-reviews-results");
  reviewsLink && reviewsLink.addEventListener("click", function() {
    window._conv_q = window._conv_q || [], _conv_q.push(["triggerConversion", "100477914"]), console.log("Trigger Conversion")
  })
});

function handleQuizLinkClick(event) {
  window._conv_q = window._conv_q || [], _conv_q.push(["triggerConversion", "100478815"])
}
document.querySelectorAll('a[href^="#quiz-"]').forEach(link => {
  link.addEventListener("click", handleQuizLinkClick)
});
//# sourceMappingURL=/cdn/shop/t/260/assets/convert.js.map?v=19284229376388452691749762314