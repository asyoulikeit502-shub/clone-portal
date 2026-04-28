function getUpdatedSubscriptionLabel(label) {
  const labelText = label.toLowerCase().trim(),
    weekMatch = labelText.match(/(?:every\s*)?(\d+)\s*week/);
  if (weekMatch) {
    const weeks = weekMatch[1];
    return `Delivered every ${weeks} week${weeks==="1"?"":"s"}`
  }
  const monthMatch = labelText.match(/(?:every\s*)?(\d+)\s*month/);
  if (monthMatch) {
    const months = monthMatch[1];
    return `Delivered every ${months} month${months==="1"?"":"s"}`
  }
  return labelText.match("delivered every month") ? "Delivered every 1 month" : null
}

function updateOptionLabels(optionList) {
  Array.from(optionList).forEach(option => {
    if (option.dataset.modified === "true") return;
    const newLabel = getUpdatedSubscriptionLabel(option.label);
    newLabel && (option.label = newLabel, option.dataset.modified = "true")
  })
}

function updateAltProductLabels(labelElements) {
  labelElements.forEach(labelEl => {
    if (labelEl.dataset.modified === "true") return;
    const newText = getUpdatedSubscriptionLabel(labelEl.textContent);
    newText && (labelEl.textContent = newText, labelEl.dataset.modified = "true")
  })
}

function updateSubscriptionLabels() {
  document.querySelectorAll(".upsell__options").forEach(productLabel => {
    productLabel && productLabel.options && updateOptionLabels(productLabel.options)
  });
  const productForm = document.querySelector(".product-subscription__item-v2.item--recurring.active .ss-body .selection-wrapper");
  if (productForm) {
    const productSubscriptionOptions = productForm.querySelector("#sel_delivery_cycle");
    productSubscriptionOptions && updateOptionLabels(productSubscriptionOptions.options)
  }
  const altProductLabels = document.querySelectorAll(".product-subscription__title.title--original");
  altProductLabels.length > 0 && updateAltProductLabels(altProductLabels)
}
updateSubscriptionLabels();
const observer = new MutationObserver(() => {
  updateSubscriptionLabels()
});
observer.observe(document.body, {
  childList: !0,
  subtree: !0
});
//# sourceMappingURL=/cdn/shop/t/260/assets/subscription-label.js.map?v=102167492681051779241753722086