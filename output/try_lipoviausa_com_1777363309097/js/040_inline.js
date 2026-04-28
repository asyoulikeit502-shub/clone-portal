// Price update
function subtractFromPrices() {
  const elements = document.querySelectorAll(".subtract-10");
  elements.forEach(function(element) {
    // Get the original value stored in data attribute, or current value
    let originalValue = element.dataset.originalPrice;

    if (!originalValue) {
      // First time - store the original CheckoutChamp price
      originalValue = parseFloat(
        element.innerText.replace("$", "").replace(",", "").trim()
      );
      element.dataset.originalPrice = originalValue;
    }

    // Always subtract from the original CheckoutChamp value
    let newValue = parseFloat(originalValue) - 0;
    if (newValue < 0) newValue = 0;

    element.innerText = `$${newValue.toFixed(2)}`;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Run initial subtraction after page loads
  setTimeout(subtractFromPrices, 2000);

  // Keep watching for CheckoutChamp price updates and re-subtract
  setInterval(function() {
    // Reset original prices when CheckoutChamp updates them
    document.querySelectorAll(".subtract-10").forEach(function(element) {
      let currentDisplayed = parseFloat(
        element.innerText.replace("$", "").replace(",", "").trim()
      );
      let storedOriginal = parseFloat(element.dataset.originalPrice || 0);

      // If displayed price is different from (storedOriginal - 0), CheckoutChamp updated it
      if (Math.abs(currentDisplayed - (storedOriginal - 0)) > 0.01) {
        // Reset - this is a new CheckoutChamp price
        element.dataset.originalPrice = currentDisplayed;
      }
    });

    subtractFromPrices();
  }, 500); // Check every 500ms
});