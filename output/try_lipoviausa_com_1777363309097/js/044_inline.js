document.addEventListener("DOMContentLoaded", function() {
  const arrow = document.querySelector(".order-arrow");
  const arrowDiv = document.querySelector(".order-summary-row");
  const orderTitle = document.querySelector(".order-total-title");
  const openingDiv = document.querySelector(".opeing_div");

  const hideEls = document.querySelectorAll(
    ".order-discount-btn, .order-product-thumb, .order-total-text, .order-currency, .order-price"
  );

  const orderSumm = document.querySelector(".orde_summ");

  let isOpen = false;

  function toggleOrderSummary() {
    isOpen = !isOpen;

    if (isOpen) {
      openingDiv.classList.add("active");
      openingDiv.style.display = "block";

      hideEls.forEach((el) => (el.style.display = "none"));
      orderSumm.style.display = "block";

      arrow.classList.add("order_icon_click");
    } else {
      openingDiv.classList.remove("active");
      openingDiv.style.display = "none";

      hideEls.forEach((el) => (el.style.display = ""));
      orderSumm.style.display = "none";

      arrow.classList.remove("order_icon_click");
    }
  }

  <
  !--arrow.addEventListener("click", toggleOrderSummary);
  -- >
  arrowDiv.addEventListener("click", toggleOrderSummary);
});