class DynamicCartCount {
  constructor() {
    this.cartCountWrapper = document.getElementById("cart-count-wrapper"), this.updateTimeout = null, this.init()
  }
  init() {
    if (!this.cartCountWrapper) {
      console.warn("Cart count wrapper not found");
      return
    }
    this.bindEvents(), this.interceptCartRequests(), this.observeCartForms()
  }
  bindEvents() {
    ["cart:changed", "cart:added", "cart:removed", "cart:quantity-updated", "cart:updated"].forEach(event => {
      document.addEventListener(event, this.debounceUpdate.bind(this))
    })
  }
  debounceUpdate() {
    this.updateTimeout && clearTimeout(this.updateTimeout), this.updateTimeout = setTimeout(() => {
      this.updateCartCount()
    }, 100)
  }
  async updateCartCount() {
    try {
      const response = await fetch("/cart.js", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        const cart = await response.json();
        this.updateCartCountDisplay(cart.item_count)
      } else await this.updateCartCountViaSection()
    } catch (error) {
      console.error("Error updating cart count:", error), await this.updateCartCountViaSection()
    }
  }
  async updateCartCountViaSection() {
    try {
      const response = await fetch(`${window.Shopify?.routes?.root||"/"}?section_id=cart-count&_=${Date.now()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        const html = await response.text(),
          newCartCount = new DOMParser().parseFromString(html, "text/html").querySelector(".header-icons-anchor-cart-count");
        if (newCartCount) {
          const count = parseInt(newCartCount.textContent.trim()) || 0;
          this.updateCartCountDisplay(count)
        }
      }
    } catch (error) {
      console.error("Error updating cart count via section rendering:", error)
    }
  }
  updateCartCountDisplay(count) {
    if (!this.cartCountWrapper) return;
    const cartCountSpan = this.cartCountWrapper.querySelector(".header-icons-anchor-cart-count");
    if (cartCountSpan) {
      const currentCount = parseInt(cartCountSpan.textContent.trim()) || 0;
      if (currentCount !== count) {
        cartCountSpan.classList.add("updating"), setTimeout(() => {
          cartCountSpan.textContent = count, count === 0 ? cartCountSpan.classList.add("header-icons-anchor-cart-count--hide") : (cartCountSpan.classList.remove("header-icons-anchor-cart-count--hide"), cartCountSpan.classList.add("cart-count-updated")), setTimeout(() => {
            cartCountSpan.classList.remove("updating", "cart-count-updated")
          }, 400)
        }, 150);
        const event = new CustomEvent("cart-count:updated", {
          detail: {
            count,
            previousCount: currentCount,
            changed: !0
          }
        });
        document.dispatchEvent(event)
      }
    }
  }
  observeCartForms() {
    document.addEventListener("submit", event => {
      const form = event.target;
      form && form.action && this.isCartForm(form.action) && setTimeout(() => this.debounceUpdate(), 500)
    })
  }
  isCartForm(action) {
    return action && (action.includes("/cart/add") || action.includes("/cart/update") || action.includes("/cart/change") || action.includes("/cart/clear"))
  }
  interceptCartRequests() {
    this.interceptFetch(), this.interceptXHR()
  }
  interceptFetch() {
    const originalFetch = window.fetch,
      self = this;
    window.fetch = function(...args) {
      const [url, options] = args, isCartRequest = typeof url == "string" && self.isCartUrl(url), fetchPromise = originalFetch.apply(this, args);
      return isCartRequest && fetchPromise.then(response => {
        response.ok && setTimeout(() => self.debounceUpdate(), 200)
      }).catch(() => {
        setTimeout(() => self.debounceUpdate(), 500)
      }), fetchPromise
    }
  }
  interceptXHR() {
    const self = this,
      originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
      return this._url = url, originalXHROpen.apply(this, [method, url, ...args])
    };
    const originalXHRSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(...args) {
      return this._url && self.isCartUrl(this._url) && this.addEventListener("loadend", () => {
        this.status >= 200 && this.status < 300 && setTimeout(() => self.debounceUpdate(), 200)
      }), originalXHRSend.apply(this, args)
    }
  }
  isCartUrl(url) {
    return url && (url.includes("/cart/add") || url.includes("/cart/update") || url.includes("/cart/change") || url.includes("/cart/clear") || url.includes("/cart.js"))
  }
  refresh() {
    this.debounceUpdate()
  }
  destroy() {
    this.updateTimeout && clearTimeout(this.updateTimeout)
  }
}
document.addEventListener("DOMContentLoaded", () => {
  window.dynamicCartCount = new DynamicCartCount
}), document.addEventListener("shopify:section:load", event => {
  event.detail.sectionId === "header" && (window.dynamicCartCount && window.dynamicCartCount.destroy(), window.dynamicCartCount = new DynamicCartCount)
}), document.addEventListener("shopify:section:reorder", () => {
  window.dynamicCartCount && window.dynamicCartCount.refresh()
}), typeof module < "u" && module.exports && (module.exports = DynamicCartCount);
//# sourceMappingURL=/cdn/shop/t/260/assets/dynamic-cart-count.js.map?v=83763386584340581631761323278