$(document).on("click", ".order-discount-btn", function(e) {
  e.preventDefault();
  $(".order-arrow").trigger("click");
  $("#i2dp1b").trigger("focus");
});