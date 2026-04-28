/* v2 */
function updateBottlePriceOriginal(cycle) {
  cycle = parseInt(cycle);
  var option_list = document.querySelector('ul.product-bottle-options__list');
  if (option_list) {
    option_list.setAttribute('data-cycle', cycle);
  }
  // Badge Amount Html Elements
  const saveBadgeElements = document.querySelectorAll('.product-bottle-options__list--item-badge');
  const saveBadgeAmountElement1 = document.querySelectorAll('.product-bottle-option--1 .product-bottle-options__list--item-badge span');
  const saveBadgeAmountElement2 = document.querySelectorAll('.product-bottle-option--2 .product-bottle-options__list--item-badge span');
  const saveBadgeAmountElement3 = document.querySelectorAll('.product-bottle-option--3 .product-bottle-options__list--item-badge span');
  const product_price = 15.98;
  // Initial Saving amounts per delivery options
  const initial_saving_delivery = [
    0,
    1.6,
    0.8,
    0.32
  ];

  // Quantities for Each Bottle Options
  const option1_quantity = 1;
  const option2_quantity = 2;
  const option3_quantity = 4;

  // We need to "fake" the quantity discount. The discount is really applied only in the cart and checkout.
  // 5% for 2 bottles
  // 15% for 4 bottles

  const twoBottlesDiscount = 0.05;
  const fourBottlesDiscount = 0.05;


  switch (cycle) {
    case 0:
      saveBadgeAmountElement1.forEach((element) => element.innerHTML = 0);
      saveBadgeAmountElement2.forEach((element) => element.innerHTML = 0);
      saveBadgeAmountElement3.forEach((element) => element.innerHTML = 0);

      saveBadgeElements.forEach(element => {
        element.style.display = "none";
      });
      break;

    case 1:
    case 2:
    case 3:
      saveBadgeAmountElement1.forEach((element) => element.innerHTML = Math.round(initial_saving_delivery[cycle] * option1_quantity));
      saveBadgeAmountElement2.forEach((element) => element.innerHTML = Math.round(initial_saving_delivery[cycle] * option2_quantity + initial_saving_delivery[cycle] * twoBottlesDiscount * option2_quantity));
      saveBadgeAmountElement3.forEach((element) => element.innerHTML = Math.round(initial_saving_delivery[cycle] * option3_quantity + initial_saving_delivery[cycle] * fourBottlesDiscount * option3_quantity));

      saveBadgeElements.forEach(element => {
        element.style.display = "block";
      });
      break;
  }
  console.log(((product_price - initial_saving_delivery[cycle]) * option1_quantity).toFixed(2));
  if (document.querySelector('.product-bottle-options__list--item-price-wrap [data-option="1"][data-quantity="' + option1_quantity + '"]')) {
    document.querySelector('.product-bottle-options__list--item-price-wrap [data-option="1"][data-quantity="' + option1_quantity + '"]').innerHTML = '$' + ((product_price - initial_saving_delivery[cycle]) * option1_quantity).toFixed(2);
  }
  console.log(((product_price - initial_saving_delivery[cycle] - initial_saving_delivery[cycle] * twoBottlesDiscount) * option2_quantity).toFixed(2));
  if (document.querySelector('.product-bottle-options__list--item-price-wrap [data-option="1"][data-quantity="' + option2_quantity + '"]')) {
    document.querySelector('.product-bottle-options__list--item-price-wrap [data-option="1"][data-quantity="' + option2_quantity + '"]').innerHTML = '$' + ((product_price - initial_saving_delivery[cycle] - initial_saving_delivery[cycle] * twoBottlesDiscount) * option2_quantity).toFixed(2);
  }
  console.log(((product_price - initial_saving_delivery[cycle] - initial_saving_delivery[cycle] * fourBottlesDiscount) * option3_quantity).toFixed(2));
  if (document.querySelector('.product-bottle-options__list--item-price-wrap [data-option="1"][data-quantity="' + option3_quantity + '"]')) {
    document.querySelector('.product-bottle-options__list--item-price-wrap [data-option="1"][data-quantity="' + option3_quantity + '"]').innerHTML = '$' + ((product_price - initial_saving_delivery[cycle] - initial_saving_delivery[cycle] * fourBottlesDiscount) * option3_quantity).toFixed(2);
  }
  console.log(cycle);
  if (cycle == 0) {
    document.querySelector('.sticky-price').textContent = document.querySelector('[data-selling-plan-name="One-time purchase"] .price--normal').textContent
  } else {
    document.querySelector('.sticky-price').textContent = '$' + ((product_price - initial_saving_delivery[cycle]) * option1_quantity).toFixed(2);;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const bottlesOptionSelection = document.querySelectorAll('.product-bottle-options__list--item');
  const saveBadgeElements = document.querySelectorAll('.product-bottle-options__list--item-badge');

  // Quantities for Each Bottle Options
  const option1_quantity = 1;
  const option2_quantity = 2;
  const option3_quantity = 4;

  // Badge Amount Html Elements
  const saveBadgeAmountElement1 = document.querySelectorAll('.product-bottle-option--1 .product-bottle-options__list--item-badge span');
  const saveBadgeAmountElement2 = document.querySelectorAll('.product-bottle-option--2 .product-bottle-options__list--item-badge span');
  const saveBadgeAmountElement3 = document.querySelectorAll('.product-bottle-option--3 .product-bottle-options__list--item-badge span');

  const subscriptionItemOneMonth = document.querySelector('.product-subscription__item.item--one-month');
  const subscriptionItemTwoMonth = document.querySelector('.product-subscription__item.item--two-month');
  const subscriptionItemOneTimePurchase = document.querySelector('.product-subscription__item.item--subdued');

  // v2 
  const subscriptionItemOneTimePurchaseV2 = document.querySelector('.product-subscription__item-v2.item--subdued');

  // Subscription Prices per delivery options
  const price_standard = 15.98;
  const price_per_delivery = [
    price_standard,
    14.38,
    15.18,
    15.66
  ];

  // Initial Saving amounts per delivery options
  const initial_saving_delivery_1 = 1.6;
  const initial_saving_delivery_2 = 0.8;

  bottlesOptionSelection.forEach(selection => {
    selection.addEventListener("click", function() {
      bottlesOptionSelection.forEach(selection => {
        selection.classList.remove('active');
      });
      selection.classList.add('active');
      var bottleQuantity = parseInt(selection.dataset.quantity);

      // We need to "fake" the quantity discount. The discount is really applied only in the cart and checkout.
      // 5% for 2 bottles
      // 15% for 4 bottles

      var quantityDiscount = 1;

      if (bottleQuantity === 2)


        quantityDiscount = 0.95;

      if (bottleQuantity === 3)
        quantityDiscount = 0.9;
      if (bottleQuantity === 4)

        quantityDiscount = 0.85;


      subscriptionItemOneMonth.querySelector('.product-subscription__price .price--sale').innerHTML = '$' + (price_per_delivery[1] * bottleQuantity * quantityDiscount).toFixed(2);
      subscriptionItemOneMonth.querySelector('.product-subscription__price .price--regular .money-with-zero').innerHTML = '$' + price_standard * bottleQuantity;
      subscriptionItemOneMonth.querySelector('.product-subscription__price .price--regular .money-without-zero').innerHTML = '$' + price_standard * bottleQuantity;

      subscriptionItemTwoMonth.querySelector('.product-subscription__price .price--sale').innerHTML = '$' + (price_per_delivery[2] * bottleQuantity * quantityDiscount).toFixed(2);
      subscriptionItemTwoMonth.querySelector('.product-subscription__price .price--regular .money-with-zero').innerHTML = '$' + price_standard * bottleQuantity;
      subscriptionItemTwoMonth.querySelector('.product-subscription__price .price--regular .money-without-zero').innerHTML = '$' + price_standard * bottleQuantity;

      subscriptionItemOneTimePurchase.querySelector('.product-subscription__price .price--normal').innerHTML = '$' + (price_standard * bottleQuantity * quantityDiscount).toFixed(2);
      if (bottleQuantity > 1) {
        console.log("more than 1 bottle")
        console.log("subscriptionItemOneTimePurchase.querySelector('.product-subscription__price')", subscriptionItemOneTimePurchase.querySelector('.product-subscription__price'))
        subscriptionItemOneTimePurchase.querySelector('.product-subscription__price')?.insertAdjacentHTML("beforeend", `
            <div class="price--regular">
              <span class="money-with-zero">$${price_standard * bottleQuantity}</span>
              <span class="money-without-zero">$${price_standard * bottleQuantity}</span>
            </div>
          `);
      } else {
        subscriptionItemOneTimePurchase.querySelector('.product-subscription__price .price--regular')?.remove()
      }


      // v2
      document.getElementById('ss-recurring').querySelectorAll('.ss-heading-right .ss-plan-choices').forEach(element => {
        const planIndex = element.dataset.place;
        let finalPrice;
        if (auto_discount_percent > 0) {
          const price_saving = (price_per_delivery[planIndex] * bottleQuantity * auto_discount_percent / 100);
          finalPrice = (price_per_delivery[planIndex] * bottleQuantity) - price_saving;
        } else {
          finalPrice = price_per_delivery[planIndex] * bottleQuantity * quantityDiscount;
        }
        element.querySelector('.product-subscription__price .price--sale').innerHTML = '$' + finalPrice.toFixed(2);
        element.querySelector('.product-subscription__price .price--regular .money-with-zero').innerHTML = '$' + price_standard * bottleQuantity;
        element.querySelector('.product-subscription__price .price--regular .money-without-zero').innerHTML = '$' + price_standard * bottleQuantity;
      });


      if (auto_discount_percent > 0) {
        subscriptionItemOneTimePurchaseV2.querySelector('.product-subscription__price .price--normal').innerHTML = '$' + (price_standard * (100 - auto_discount_percent) / 100 * bottleQuantity).toFixed(2);
        subscriptionItemOneTimePurchaseV2.querySelector('.product-subscription__price .price--regular .money-with-zero').innerHTML = `$${price_standard * bottleQuantity}`
        subscriptionItemOneTimePurchaseV2.querySelector('.product-subscription__price .price--regular .money-without-zero').innerHTML = `$${price_standard *bottleQuantity}`
      } else {
        subscriptionItemOneTimePurchaseV2.querySelector('.product-subscription__price .price--normal').innerHTML = '$' + (price_standard * bottleQuantity * quantityDiscount).toFixed(2);

        if (bottleQuantity > 1) {
          if (subscriptionItemOneTimePurchaseV2.querySelector('.product-subscription__price .price--regular')) {
            subscriptionItemOneTimePurchaseV2.querySelector('.product-subscription__price .price--regular .money-with-zero').innerHTML = `$${price_standard * bottleQuantity}`
            subscriptionItemOneTimePurchaseV2.querySelector('.product-subscription__price .price--regular .money-without-zero').innerHTML = `$${price_standard * bottleQuantity}`
          } else {
            subscriptionItemOneTimePurchaseV2.querySelector('.product-subscription__price')?.insertAdjacentHTML("beforeend", `
                <div class="price--regular">
                  <span class="money-with-zero">$${price_standard * bottleQuantity}</span>
                  <span class="money-without-zero">$${price_standard * bottleQuantity}</span>
                </div>
              `);
          }
        } else {
          subscriptionItemOneTimePurchaseV2.querySelector('.product-subscription__price .price--regular')?.remove()
        }
      }


      document.querySelectorAll(".product-main-form input[name='quantity']").forEach(input => {
        input.value = bottleQuantity;
      });
      const counterEl = document.getElementById('counter');
      if (counterEl) counterEl.textContent = bottleQuantity;
    })
  })

  if (saveBadgeAmountElement1.length > 0) {
    const purchaseOptions = document.querySelectorAll(".product-subscription__item");
    purchaseOptions.forEach(selection => {
      const monthsLength = parseInt(selection.dataset.place);

      // We need to "fake" the quantity discount. The discount is really applied only in the cart and checkout.
      // 5% for 2 bottles
      // 15% for 4 bottles


      const twoBottlesDiscount = 0.05;
      const fourBottlesDiscount = 0.05;


      selection.addEventListener("click", function() {
        switch (monthsLength) {
          case 0:

            saveBadgeAmountElement1.forEach((element) => element.innerHTML = 0);
            saveBadgeAmountElement2.forEach((element) => element.innerHTML = 0);
            saveBadgeAmountElement3.forEach((element) => element.innerHTML = 0);

            saveBadgeElements.forEach(element => {
              element.style.display = "none";
            });
            break;
          case 1:
            saveBadgeAmountElement1.forEach((element) => element.innerHTML = initial_saving_delivery_1 * option1_quantity);
            saveBadgeAmountElement2.forEach((element) => element.innerHTML = initial_saving_delivery_1 * option2_quantity + (initial_saving_delivery_1 * option2_quantity * twoBottlesDiscount));
            saveBadgeAmountElement3.forEach((element) => element.innerHTML = initial_saving_delivery_1 * option3_quantity + (initial_saving_delivery_1 * option3_quantity * fourBottlesDiscount));

            saveBadgeElements.forEach(element => {
              element.style.display = "block";
            });
            break;
          case 2:
            saveBadgeAmountElement1.forEach((element) => initial_saving_delivery_2 * option1_quantity);
            saveBadgeAmountElement2.forEach((element) => initial_saving_delivery_2 * option2_quantity + (initial_saving_delivery_2 * option2_quantity * twoBottlesDiscount));
            saveBadgeAmountElement3.forEach((element) => initial_saving_delivery_2 * option3_quantity + (initial_saving_delivery_2 * option3_quantity * fourBottlesDiscount));

            saveBadgeElements.forEach(element => {
              element.style.display = "block";
            });
            break;
        }
      })
    })
  }

  /* v2 */
  const subscribeGroupElement = document.getElementById('ss-recurring');

  document.querySelectorAll('.product-subscription__item-v2').forEach(itemV2 => {
    itemV2.addEventListener('click', function(e) {
      if (subscribeGroupElement.classList.contains('active') && e.srcElement.tagName === 'SELECT') {
        return;
      }

      var selDeliveryCycle = document.getElementById('sel_delivery_cycle');
      if (!document.querySelector('html.abtest_pdp-redesign')) {
        updateBottlePriceOriginal(itemV2.dataset.place);
      }
    });
  });

  document.getElementById('sel_delivery_cycle').addEventListener('change', function() {
    if (!document.querySelector('html.abtest_pdp-redesign')) {
      updateBottlePriceOriginal(this.value)
    }
  });
})