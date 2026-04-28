const option1_quantity = 1;
const option2_quantity = 2;
const option3_quantity = 4;

// Dyamic Price updates
function updateBottlePrice(cycle) {
  var option_list = document.querySelector('.ab-test-bottle-options ul.product-bottle-options__list');
  if (option_list) {
    option_list.setAttribute('data-cycle', cycle);
  }
  let one_selection = document.querySelector('.ab-test-bottle-options .product-bottle-options__list--item-price-wrap [data-sale-price][data-quantity="' + option1_quantity + '"]')
  let two_selection = document.querySelector('.ab-test-bottle-options .product-bottle-options__list--item-price-wrap [data-sale-price][data-quantity="' + option2_quantity + '"]')
  let three_selection = document.querySelector('.ab-test-bottle-options .product-bottle-options__list--item-price-wrap [data-sale-price][data-quantity="' + option3_quantity + '"]')

  if (cycle == "0") {
    console.log("One Time")
    // One Time
    let one_updated_price = one_selection.closest('.product-bottle-options__list--item').getAttribute('data-one-time-price');
    let two_updated_price = two_selection.closest('.product-bottle-options__list--item').getAttribute('data-one-time-price');
    let three_updated_price = three_selection.closest('.product-bottle-options__list--item').getAttribute('data-one-time-price');
    one_selection.innerHTML = one_updated_price;
    two_selection.innerHTML = two_updated_price;
    three_selection.innerHTML = three_updated_price;
  } else if (cycle == "1") {
    // One Month
    console.log("One Month")
    let one_updated_price = one_selection.closest('.product-bottle-options__list--item').getAttribute('data-subscription-price-1');
    let two_updated_price = two_selection.closest('.product-bottle-options__list--item').getAttribute('data-subscription-price-1');
    let three_updated_price = three_selection.closest('.product-bottle-options__list--item').getAttribute('data-subscription-price-1');
    one_selection.innerHTML = one_updated_price;
    two_selection.innerHTML = two_updated_price;
    three_selection.innerHTML = three_updated_price;
  } else if (cycle == "2") {
    // Two Month
    console.log("Two Month")
    let one_updated_price = one_selection.closest('.product-bottle-options__list--item').getAttribute('data-subscription-price-2');
    let two_updated_price = two_selection.closest('.product-bottle-options__list--item').getAttribute('data-subscription-price-2');
    let three_updated_price = three_selection.closest('.product-bottle-options__list--item').getAttribute('data-subscription-price-2');
    one_selection.innerHTML = one_updated_price;
    two_selection.innerHTML = two_updated_price;
    three_selection.innerHTML = three_updated_price;
  } else if (cycle == "3") {
    // Four Months
    console.log("Four Month")
    let one_updated_price = one_selection.closest('.product-bottle-options__list--item').getAttribute('data-subscription-price-4');
    let two_updated_price = two_selection.closest('.product-bottle-options__list--item').getAttribute('data-subscription-price-4');
    let three_updated_price = three_selection.closest('.product-bottle-options__list--item').getAttribute('data-subscription-price-4');
    one_selection.innerHTML = one_updated_price;
    two_selection.innerHTML = two_updated_price;
    three_selection.innerHTML = three_updated_price;
  }
}

// Bottle Listener switch classes, update form
document.addEventListener('DOMContentLoaded', function() {
  const bottlesOptionSelection = document.querySelectorAll('.ab-test-bottle-options .product-bottle-options__list--item');
  bottlesOptionSelection.forEach(selection => {
    selection.addEventListener("click", function() {
      let bottleQuantity = selection.getAttribute('data-quantity');
      // Update all quantity inputs and displays
      document.querySelectorAll(".product-main-form input[name='quantity']").forEach(input => {
        input.value = bottleQuantity;
      });
      const counterEl = document.getElementById('counter');
      if (counterEl) counterEl.textContent = bottleQuantity;

      bottlesOptionSelection.forEach(selection => {
        selection.classList.remove('active');
      });
      selection.classList.add('active');
    });
  })

  // Subscription updates
  const subscribeGroupElement = document.getElementById('ss-recurring');
  document.querySelectorAll('.product-subscription__item-v2').forEach(itemV2 => {
    itemV2.addEventListener('click', function(e) {
      if (subscribeGroupElement.classList.contains('active') && e.srcElement.tagName === 'SELECT') {
        return;
      }
      if (document.querySelector('html.abtest_pdp-redesign')) {
        updateBottlePrice(itemV2.dataset.place);
      }
    });
  });
  document.getElementById('sel_delivery_cycle').addEventListener('change', function() {
    if (document.querySelector('html.abtest_pdp-redesign')) {
      updateBottlePrice(this.value)
    }
  });

  //Update qty to one by default on page load
  document.querySelectorAll(".product-main-form input[name='quantity']").forEach(input => {
    input.value = 1;
  });
  const counterEl = document.getElementById('counter');
  if (counterEl) counterEl.textContent = '1';
});