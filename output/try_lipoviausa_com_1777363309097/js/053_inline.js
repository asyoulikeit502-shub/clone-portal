setInterval(function() {
  // Check if the element exists and jQuery is active
  if (window.jQuery && $("#ilh8k3").length) {
    let subTotalRaw = $("#ilh8k3").html();

    // Clean and parse
    let subTotal = parseFloat(subTotalRaw.replace(/[$,]/g, "")) || 0;

    let grandTotal = subTotal;

    // Check if coupon exists in sessionStorage
    let discountsRaw = sessionStorage.getItem("discountsObj");
    if (discountsRaw) {
      let discountsObj = JSON.parse(discountsRaw);

      // Subtract priceDiscount if a coupon is applied
      if (discountsObj.coupons && discountsObj.coupons.length > 0 && discountsObj.priceDiscount) {
        grandTotal = subTotal - discountsObj.priceDiscount;
        $(".discount-price").html("$" + discountsObj.priceDiscount.toFixed(2));
      }
    }

    $(".grandTotal").html("$" + grandTotal.toFixed(2));

  } else {
    console.warn(
      "jQuery not found or #ilh8k3 element is missing from the DOM."
    );
  }
}, 500);