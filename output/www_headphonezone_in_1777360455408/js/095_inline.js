if (location.pathname !== "/account") {
  document.addEventListener('DOMContentLoaded', function() {
    const reviewTab = document.querySelector("a#ireviews");
    const reviewSection = document.querySelector("div#judgeme_product_reviews");

    if (reviewTab && reviewSection) {
      reviewTab.addEventListener("click", function() {
        reviewSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
}