"use strict";
class RobustCart {
  constructor(rootEl, country, currency, cartUrl, cartAddUrl, cartChangeUrl) {
    this.rootEl = rootEl, this.country = country, this.currency = currency, this.cartUrl = cartUrl, this.cartAddUrl = cartAddUrl, this.cartChangeUrl = cartChangeUrl, this.scrollPosition = window.scrollY, this.log("Initializing"), this.addAllListeners(), this.log("Initialized"), this.refreshCart(), this.log("Initial cart refreshed!")
  }
  log(message) {
    window.ROBUST_CART_DEV && console.log(`%cRobust Cart: ${message}`, "background: #cd302b; color: #fff", this)
  }
  createAddToCartPromise(form) {
    let formData = new FormData(form),
      data = Object.fromEntries(formData.entries());
    const sellingPlanEl = document.getElementById("selling_plan")?.value || form.querySelector("input[name='selling_plan']")?.value;
    return sellingPlanEl && sellingPlanEl != "undefined" ? data.selling_plan = sellingPlanEl : delete data.selling_plan, fetch(this.cartAddUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }
  createFetchCartPromise() {
    return fetch("/?section_id=robust-cart")
  }
  createUpdateCartItemPromise(id, quantity) {
    return fetch(this.cartChangeUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        quantity
      })
    })
  }
  createAddCartItemPromise(id, quantity) {
    return fetch(this.cartAddUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        quantity
      })
    })
  }
  openCart() {
    this.rootEl.classList.add("rc90--open"), this.scrollPosition = window.scrollY, this.lockScroll(), initAll()
  }
  closeCart() {
    this.rootEl.classList.remove("rc90--open"), this.unlockScroll()
  }
  async refreshCart() {
    let html = await (await this.createFetchCartPromise()).text(),
      container = document.createElement("div");
    container.innerHTML = html;
    let content = container.querySelector(".rc90-box");
    this.rootEl.querySelector(".rc90-box").innerHTML = content.innerHTML, this.addInnerListeners(), initAll();
    try {
      simplyInsurance && typeof simplyInsurance < "u" && simplyInsurance.loadApp()
    } catch (e) {
      console.log(e)
    }
  }
  async removeCartItem(id) {
    await this.createUpdateCartItemPromise(id, 0), await this.refreshCart()
  }
  async changeCartItemQuantity(id, quantity) {
    await this.createUpdateCartItemPromise(id, quantity), await this.refreshCart(), initAll()
  }
  getCartJson() {
    let dataEl = this.rootEl.querySelector(".robust-cart-json");
    if (dataEl) {
      let jsonData = dataEl.getAttribute("data-cart-json");
      if (jsonData) return JSON.parse(jsonData)
    }
  }
  addAllListeners() {
    this.addOpenCartListeners(), this.addCartBoxListener(), this.addInnerListeners(), this.addLinkSubmissionListeners()
  }
  addInnerListeners() {
    this.addCloseCartListeners(), this.addFormSubmissionListeners(), this.addItemRemoveListeners(), this.addItemQuantityListeners()
  }
  addCartBoxListener() {
    this.log("Adding cart box click listener");
    let box = this.rootEl.querySelector(".rc90-box");
    box && box.addEventListener("click", e => {
      e.stopPropagation()
    })
  }
  async addUpsellToCart(upsellProductId, quantity) {
    try {
      await this.createAddCartItemPromise(upsellProductId, quantity), await this.refreshCart(), document.querySelector(`[data-item-id='${upsellProductId}'] .upsell__checkbox`).click()
    } catch (error) {
      console.error("Error adding upsell to cart:", error)
    }
  }
  addOpenCartListeners() {
    this.log("Adding open click listeners"), document.querySelectorAll(`[href="${this.cartUrl}"], [href="/cart"]`).forEach(element => {
      element.addEventListener("click", e => {
        e.preventDefault(), this.openCart()
      })
    })
  }
  addCloseCartListeners() {
    this.log("Adding close click listeners"), this.rootEl.addEventListener("click", this.closeCart.bind(this)), this.rootEl.querySelectorAll(".rc90-header-close, .rc90-buttons-continue-shopping, .rc90-empty-inner-continue").forEach(element => {
      element.addEventListener("click", this.closeCart.bind(this))
    })
  }
  addLinkSubmissionListeners() {
    this.log("Adding link submission listeners"), document.querySelectorAll('a[href*="/cart/add"]').forEach(link => {
      link.addEventListener("click", async e => {
        e.preventDefault();
        const urlParams = new URL(link.href).searchParams,
          id = urlParams.get("id"),
          quantity = parseInt(urlParams.get("quantity")) || 1,
          sellingPlan = urlParams.get("selling_plan");
        if (console.log("sellingPlan", sellingPlan), id) {
          const data = {
            id,
            quantity
          };
          sellingPlan && (data.selling_plan = sellingPlan), await this.createAddCartItemPromiseWithData(data), await this.refreshCart(), this.openCart()
        }
      })
    })
  }
  createAddCartItemPromiseWithData(data) {
    return fetch(this.cartAddUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }
  addFormSubmissionListeners() {
    this.formSubmissionListenerAdded || (document.addEventListener("click", async e => {
      if (e.target.matches(`form[action="${this.cartAddUrl}"] button[name="add"], form[action="${this.cartAddUrl}"] button[name="add"] *`)) {
        e.preventDefault();
        let form = e.target.closest(`form[action="${this.cartAddUrl}"]`);
        await this.createAddToCartPromise(form), await this.refreshCart(), this.openCart()
      }
    }, !1), this.formSubmissionListenerAdded = !0)
  }
  addItemRemoveListeners() {
    this.rootEl.querySelectorAll(".rc90-item-main-header-remove").forEach(element => {
      element.addEventListener("click", () => {
        let id = element.getAttribute("data-line-item-key");
        id && this.removeCartItem(id)
      })
    })
  }
  addItemQuantityListeners() {
    this.rootEl.querySelectorAll(".rc90-item-main-footer-quantity-plus, .rc90-item-main-footer-quantity-minus").forEach(element => {
      const isPlus = element.classList.contains("rc90-item-main-footer-quantity-plus");
      element.addEventListener("click", async () => {
        const id = element.getAttribute("data-line-item-key"),
          quantity = Number(element.getAttribute("data-quantity"));
        if (id && quantity) {
          const newQuantity = isPlus ? quantity + 1 : quantity - 1;
          showOverlay(), await this.changeCartItemQuantity(id, newQuantity);
          const cart = await this.getCartJson();
          if (cart ? cart.items.find(item => item.key === id) : null) return;
          {
            const variantId = element.closest("[data-item-id]")?.getAttribute("data-item-id");
            if (variantId) {
              const itemByVariant = cart ? cart.items.find(item => item.id == variantId) : null
            }
          }
          hideOverlay()
        }
      })
    })
  }
  lockScroll() {
    document.body.style.overflow = "hidden", document.body.style.touchAction = "none"
  }
  unlockScroll() {
    document.body.style.overflow = "", document.body.style.touchAction = ""
  }
}
document.addEventListener("DOMContentLoaded", initAll);

function initAll() {
  document.querySelectorAll(".rc90-item").forEach(item => {
    const variantId = item.dataset.itemId,
      sellingPlanCheckbox = item.querySelector(`.upsell__checkbox[data-variant-id="${variantId}"]`),
      sellingPlanOptions = item.querySelector(".upsell__options");
    sellingPlanCheckbox && sellingPlanOptions && !item.dataset.listenerAdded && (sellingPlanCheckbox.addEventListener("change", handleCheckboxChange.bind(null, sellingPlanCheckbox, sellingPlanOptions)), sellingPlanOptions.addEventListener("change", handleOptionsChange.bind(null, sellingPlanCheckbox, sellingPlanOptions)), item.dataset.listenerAdded = !0)
  })
}
async function handleCheckboxChange(sellingPlanCheckbox, sellingPlanOptions) {
  const variantId = sellingPlanCheckbox.dataset.variantId;
  showOverlay(), sellingPlanCheckbox.checked ? (sellingPlanOptions.style.display = "block", await addOrUpdateSellingPlan(variantId, sellingPlanOptions.options[0].value), await window.robustCart.refreshCart()) : (sellingPlanOptions.style.display = "none", await removeSellingPlan(variantId, sellingPlanOptions.value), await new Promise(resolve => setTimeout(resolve, 500)), await window.robustCart.refreshCart()), setTimeout(() => {
    hideOverlay(), updateFreeShippingBar()
  }, 1e3)
}
async function handleOptionsChange(sellingPlanCheckbox, sellingPlanOptions) {
  const variantId = sellingPlanCheckbox.dataset.variantId;
  sellingPlanCheckbox.checked && (showOverlay(), await addOrUpdateSellingPlan(variantId, sellingPlanOptions.value), await window.robustCart.refreshCart(), setTimeout(() => {
    hideOverlay()
  }, 1e3))
}

function updateFreeShippingBar() {
  fetch("/?section_id=robust-cart").then(response => response.text()).then(html => {
    const source = new DOMParser().parseFromString(html, "text/html");
    document.querySelector(".progress-bar-wrapper").innerHTML = source.querySelector(".progress-bar-wrapper").innerHTML
  })
}
async function addOrUpdateSellingPlan(variant, plan) {
  const cart = await getCart(),
    lineItemWithPlan = findLineItemWithPlan(cart, variant),
    lineItemWithoutPlan = findLineItemWithoutPlan(cart, variant);
  let quantity;
  lineItemWithoutPlan ? quantity = lineItemWithoutPlan.quantity : lineItemWithPlan ? quantity = lineItemWithPlan.quantity : quantity = 1, lineItemWithPlan && await removeLineItem(lineItemWithPlan.key), lineItemWithoutPlan && await removeLineItem(lineItemWithoutPlan.key);
  const result = await addLineItemPlan(variant, plan, quantity);
  return document.querySelectorAll(`[data-item-id="${variant}"]`).forEach(item => {
    item.querySelector(".rc90-item-main-upsell") || item.remove()
  }), result
}
async function removeSellingPlan(variant, plan) {
  const cart = await getCart(),
    lineItemWithPlan = findLineItemWithPlan(cart, variant);
  lineItemWithPlan && (await removeLineItem(lineItemWithPlan.key), await addLineItem(variant, lineItemWithPlan.quantity))
}
async function getCart() {
  const result = await fetch("/cart.json");
  if (result.status === 200) return result.json();
  throw new Error(`Failed to get request, Shopify returned ${result.status} ${result.statusText}`)
}

function findLineItemWithPlan(cart, variant) {
  return cart.items.find(item => item.id === parseInt(variant) && item.selling_plan_allocation)
}

function findLineItemWithoutPlan(cart, variant) {
  return cart.items.find(item => item.id === parseInt(variant) && !item.selling_plan_allocation)
}

function removeLineItem(key) {
  return postToShopify("cart/change.js", {
    id: key,
    quantity: 0
  })
}

function addLineItemPlan(variant, plan, quantity) {
  return postToShopify("cart/add.js", {
    items: [{
      quantity,
      id: variant,
      selling_plan: plan
    }]
  })
}

function addLineItem(variant, quantity) {
  return postToShopify("cart/add.js", {
    items: [{
      quantity,
      id: variant
    }]
  })
}

function postToShopify(endpoint, formData) {
  return fetch(window.Shopify.routes.root + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }).then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json()
  }).then(data => data)
}
async function updatePrice(variant) {
  const cart = await getCart(),
    item = cart.items.find(item2 => item2.id === parseInt(variant));
  let cartPrice = cart.total_price,
    itemPrice = item.final_line_price,
    originalItemPrice = item.original_line_price;
  const autoDiscountPercent = window.AUTO_DISCOUNT_PERCENT || 0,
    hasSellingPlan = !!item.selling_plan_allocation,
    shouldShowDiscount = autoDiscountPercent > 0 && hasSellingPlan;
  if (!shouldShowDiscount) itemPrice = item.final_line_price, originalItemPrice = item.original_line_price;
  else {
    const basePrice = item.original_line_price,
      discountAmount = Math.round(basePrice * autoDiscountPercent / 100);
    originalItemPrice = basePrice, itemPrice = basePrice - discountAmount
  }
  const itemFormattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(itemPrice / 100),
    originalItemFormattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(originalItemPrice / 100),
    cartFormattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(cartPrice / 100),
    pricesContainer = document.querySelector(`[data-item-id="${variant}"] .rc90-item-main-footer-prices`);
  if (pricesContainer) {
    let compareElement = pricesContainer.querySelector(".rc90-item-main-footer-prices-compare");
    const hasRegularComparePrice = originalItemPrice > itemPrice;
    shouldShowDiscount || hasRegularComparePrice ? (compareElement || (compareElement = document.createElement("span"), compareElement.className = "rc90-item-main-footer-prices-compare", pricesContainer.insertBefore(compareElement, pricesContainer.firstChild)), compareElement.innerText = originalItemFormattedPrice) : compareElement && compareElement.remove();
    const priceElement = pricesContainer.querySelector(".rc90-item-main-footer-prices-price");
    priceElement && (priceElement.innerText = itemFormattedPrice)
  }
  document.querySelector(".rc90-totals-row:last-child .rc90-totals-row-value").innerText = cartFormattedPrice;
  const itemElement = document.querySelector(`[data-item-id="${variant}"]`);
  if (itemElement) {
    const plusButton = itemElement.querySelector(".rc90-item-main-footer-quantity-plus"),
      minusButton = itemElement.querySelector(".rc90-item-main-footer-quantity-minus"),
      quantityDisplay = itemElement.querySelector(".rc90-item-main-footer-quantity-value");
    plusButton && (plusButton.setAttribute("data-line-item-key", item.key), plusButton.setAttribute("data-quantity", item.quantity)), minusButton && (minusButton.setAttribute("data-line-item-key", item.key), minusButton.setAttribute("data-quantity", item.quantity)), quantityDisplay && (quantityDisplay.textContent = item.quantity)
  }
}

function showOverlay() {
  var overlay = document.getElementById("cart-overlay"),
    cartBox = document.querySelector(".rc90-box");
  overlay && cartBox && (overlay.style.height = cartBox.scrollHeight + "px", overlay.style.display = "flex")
}

function hideOverlay() {
  document.getElementById("cart-overlay").style.display = "none"
}
//# sourceMappingURL=/cdn/shop/t/260/assets/robust-cart.js.map?v=178216611417048135891772023345