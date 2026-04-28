document.addEventListener("DOMContentLoaded", function() {
  const subscriptionWrapper = document.querySelector(".product-subscription-pdp");
  if (!subscriptionWrapper) return;
  let isSubscriptionMode = !0;
  const oneTimePurchase = subscriptionWrapper.querySelector('.product-subscription__item[data-place="0"]'),
    subscribeAndSaveTrigger = subscriptionWrapper.querySelector(".subscription-collapsable-trigger"),
    subscriptionOptionsContainer = subscriptionWrapper.querySelector(".product-subscription-options__cont"),
    dropdown = subscriptionWrapper.querySelector(".product-subscription-dropdown"),
    dropdownTrigger = dropdown?.querySelector(".product-subscription-dropdown__trigger"),
    dropdownSelected = dropdown?.querySelector(".product-subscription-dropdown__selected"),
    subscriptionPlanItems = dropdown?.querySelectorAll(".product-subscription-options__collapsable .product-subscription__item"),
    sellingPlanInput = document.getElementById("selling_plan"),
    firstSubscriptionPlan = subscriptionWrapper.querySelector('.product-subscription-options__collapsable .product-subscription__item[data-place="1"]');
  if (sellingPlanInput && firstSubscriptionPlan && firstSubscriptionPlan.dataset.sellingPlan) {
    sellingPlanInput.value = firstSubscriptionPlan.dataset.sellingPlan;
    const firstPlanTitle = firstSubscriptionPlan.querySelector(".product-subscription__title");
    dropdownSelected && firstPlanTitle && (dropdownSelected.textContent = firstPlanTitle.textContent.trim())
  }

  function activateOneTimePurchase() {
    isSubscriptionMode = !1;
    const sellingPlanInput2 = document.getElementById("selling_plan");
    sellingPlanInput2 && (sellingPlanInput2.value = ""), oneTimePurchase.classList.add("product-subscription__item--active"), subscribeAndSaveTrigger.classList.remove("product-subscription__item--active"), subscriptionPlanItems.forEach(item => item.classList.remove("product-subscription__item--active")), dropdown.classList.remove("active"), dropdown.classList.remove("open"), subscriptionOptionsContainer.classList.remove("active"), typeof updateBottlePriceOriginal == "function" && updateBottlePriceOriginal(0)
  }

  function activateSubscriptionMode() {
    isSubscriptionMode = !0, oneTimePurchase.classList.remove("product-subscription__item--active"), subscribeAndSaveTrigger.classList.add("product-subscription__item--active"), dropdown.classList.add("active"), subscriptionOptionsContainer.classList.add("active"), typeof updateBottlePriceOriginal == "function" && updateBottlePriceOriginal(1), subscriptionPlanItems && subscriptionPlanItems.length > 0 && setTimeout(() => {
      const firstPlan = subscriptionPlanItems[0],
        sellingPlanInput2 = document.getElementById("selling_plan");
      sellingPlanInput2 && firstPlan.dataset.sellingPlan && (sellingPlanInput2.value = firstPlan.dataset.sellingPlan), subscriptionPlanItems.forEach(opt => opt.classList.remove("product-subscription__item--active")), firstPlan.classList.add("product-subscription__item--active");
      const titleEl = firstPlan.querySelector(".product-subscription__title");
      dropdownSelected && titleEl && (dropdownSelected.textContent = titleEl.textContent.trim()), updateDynamicSubscriptionPrice(firstPlan)
    }, 100)
  }

  function updateDynamicSubscriptionPrice(item) {
    const dynamicPriceEl = subscriptionWrapper.querySelector(".dynamic-subscription-price"),
      itemPriceEl = item.querySelector(".product-subscription__price .price--sale");
    dynamicPriceEl && itemPriceEl && (dynamicPriceEl.textContent = itemPriceEl.textContent.trim())
  }

  function selectSubscriptionPlan(item, closeDropdown = !0) {
    isSubscriptionMode = !0;
    const sellingPlanInput2 = document.getElementById("selling_plan");
    sellingPlanInput2 && item.dataset.sellingPlan && (sellingPlanInput2.value = item.dataset.sellingPlan), oneTimePurchase.classList.remove("product-subscription__item--active"), subscribeAndSaveTrigger.classList.add("product-subscription__item--active"), dropdown.classList.add("active"), subscriptionOptionsContainer.classList.add("active"), subscriptionPlanItems.forEach(opt => opt.classList.remove("product-subscription__item--active")), item.classList.add("product-subscription__item--active");
    const titleEl = item.querySelector(".product-subscription__title");
    dropdownSelected && titleEl && (dropdownSelected.textContent = titleEl.textContent.trim()), typeof updateBottlePriceOriginal == "function" && item.dataset.place && updateBottlePriceOriginal(parseInt(item.dataset.place)), updateDynamicSubscriptionPrice(item), closeDropdown && dropdown.classList.remove("open")
  }

  function ensureTriggerActiveWhenSubscriptionSelected() {
    if (Array.from(subscriptionPlanItems).some(item => item.classList.contains("product-subscription__item--active"))) {
      isSubscriptionMode = !0, oneTimePurchase.classList.remove("product-subscription__item--active"), subscribeAndSaveTrigger.classList.add("product-subscription__item--active"), dropdown.classList.add("active");
      const activeItem = Array.from(subscriptionPlanItems).find(item => item.classList.contains("product-subscription__item--active"));
      if (activeItem) {
        const titleEl = activeItem.querySelector(".product-subscription__title");
        dropdownSelected && titleEl && (dropdownSelected.textContent = titleEl.textContent.trim())
      }
    }
  }
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.type === "attributes" && mutation.attributeName === "class" && ensureTriggerActiveWhenSubscriptionSelected()
    })
  });
  subscriptionPlanItems.forEach(function(item) {
    observer.observe(item, {
      attributes: !0,
      attributeFilter: ["class"]
    })
  }), oneTimePurchase.addEventListener("click", function(e) {
    activateOneTimePurchase()
  }), subscribeAndSaveTrigger.addEventListener("click", function(e) {
    isSubscriptionMode || activateSubscriptionMode()
  }), dropdownTrigger && dropdownTrigger.addEventListener("click", function(e) {
    e.stopPropagation(), dropdown.classList.toggle("open")
  }), subscriptionPlanItems && subscriptionPlanItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
      selectSubscriptionPlan(item)
    })
  }), document.addEventListener("click", function(e) {
    dropdown && !dropdown.contains(e.target) && dropdown.classList.remove("open")
  }), ensureTriggerActiveWhenSubscriptionSelected()
});
//# sourceMappingURL=/cdn/shop/t/260/assets/product-subscription-pdp.js.map?v=39944269278386550101773765775