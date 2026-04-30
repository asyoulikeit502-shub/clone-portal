document.addEventListener("click", function(a) {
  a.target.closest("button") && a.target.closest("#addToCart__btn") && dataLayer.push({
    event: "add_to_cart_btn"
  });
  a.target.closest("button") && a.target.closest(".checkout-btn") && dataLayer.push({
    event: "checkout_btn"
  })
});