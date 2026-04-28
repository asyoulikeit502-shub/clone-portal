document.addEventListener("DOMContentLoaded", function() {
  document
    .querySelectorAll(".cc-cart-row-prod-title")
    .forEach(function(el) {
      if (el.textContent.trim().toLowerCase() === "expedited shipping") {
        console.log(el);
        el.style.setProperty("display", "none", "important");
        // el.closest('.cc-cart-row').style.display = 'none';
      }
    });
});