const Simplistic = {
  formatMoney: "$ {{amount}}",
  beforeTrapFocus: null,
  trapFocus(options) {
    this.beforeTrapFocus = document.activeElement;
    const eventName = options.namespace ? `focusin.${options.namespace}` : "focusin",
      container = options.container,
      elementToFocus = options.elementToFocus || container;
    container.setAttribute("tabindex", "-1"), elementToFocus.focus();
    const handleFocusIn = evt => {
      container !== evt.target && !container.contains(evt.target) && container.focus()
    };
    document.addEventListener("focusin", handleFocusIn), container._focusInHandler = handleFocusIn
  },
  removeTrapFocus(options) {
    const container = options.container;
    container && (container.removeAttribute("tabindex"), container._focusInHandler && (document.removeEventListener("focusin", container._focusInHandler), delete container._focusInHandler)), this.beforeTrapFocus && (this.beforeTrapFocus.focus(), this.beforeTrapFocus = null)
  },
  handleize(str) {
    return str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "")
  },
  reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  },
  getQueryParam(name, url) {
    return url || (url = window.location.href), new URL(url).searchParams.get(name)
  },
  randomstring(length) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
    return result
  },
  validateEmail(email) {
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email)
  },
  openModal(content, css) {
    if (typeof tingle > "u") return;
    const modal = new tingle.modal({
      closeMethods: ["overlay", "button", "escape"],
      closeLabel: "Close",
      cssClass: [css],
      beforeOpen() {
        if (window.innerWidth > 600) {
          const closeBtn = document.querySelector(".tingle-modal__close"),
            content2 = document.querySelector(".tingle-modal-box__content");
          closeBtn && content2 && content2.appendChild(closeBtn)
        }
      },
      beforeClose() {
        const closeBtn = document.querySelector(".tingle-modal__close"),
          modal2 = document.querySelector(".tingle-modal");
        return closeBtn && modal2 && modal2.insertBefore(closeBtn, modal2.firstChild), !0
      }
    });
    modal.setContent(content), modal.open(), window.modal = modal
  },
  onImagesLoaded(images, callback) {
    const imageArray = images.jquery ? Array.from(images) : Array.isArray(images) ? images : [images];
    let imagesLoaded = 0;
    const totalImages = imageArray.length,
      loadFunction = () => {
        imagesLoaded++, imagesLoaded === totalImages && callback()
      };
    totalImages > 0 ? imageArray.forEach(img => {
      let src = null;
      if (img.getAttribute ? src = img.getAttribute("src") : img.src && (src = img.src), !src || src === "null" || src === "undefined" || src.trim() === "") {
        loadFunction();
        return
      }
      const image = new Image;
      image.onload = loadFunction, image.onerror = loadFunction, image.src = src
    }) : callback()
  }
};
window.Simplistic = Simplistic;

function handleFirstTab(e) {
  e.keyCode === 9 && document.body.classList.add("user-is-tabbing")
}
window.addEventListener("keydown", handleFirstTab), document.addEventListener("click", () => {
  document.body.classList.remove("user-is-tabbing")
}), typeof isMobile < "u" && !isMobile.any && document.body.classList.add("isNotMobile");

function initQuantityBoxes() {
  document.addEventListener("click", e => {
    if (e.target.closest(".quantity-box .minus")) {
      e.preventDefault();
      const input = e.target.closest(".quantity-box .minus").parentElement.querySelector("input[type=number]");
      if (input) try {
        const min = parseInt(input.getAttribute("min")) || 0;
        (parseInt(input.value) || 0) > min && (input.stepDown(), input.dispatchEvent(new Event("change", {
          bubbles: !0
        })))
      } catch {
        const value = parseInt(input.value) - 1;
        input.value = value >= 0 ? value : 0, input.dispatchEvent(new Event("change", {
          bubbles: !0
        }))
      }
    }
  }), document.addEventListener("click", e => {
    if (e.target.closest(".quantity-box .plus")) {
      e.preventDefault();
      const input = e.target.closest(".quantity-box .plus").parentElement.querySelector("input[type=number]");
      if (input) try {
        input.stepUp(), input.dispatchEvent(new Event("change", {
          bubbles: !0
        }))
      } catch {
        const value = parseInt(input.value) + 1;
        input.value = value, input.dispatchEvent(new Event("change", {
          bubbles: !0
        }))
      }
    }
  })
}

function initQuickView() {
  document.addEventListener("click", async e => {
    const quickViewBtn = e.target.closest(".product-item .quick-view-btn");
    if (quickViewBtn) {
      e.preventDefault();
      const url = quickViewBtn.dataset.url,
        loadingOverlay = document.getElementById("loading-overlay");
      loadingOverlay && (loadingOverlay.style.display = "block");
      try {
        const data = await (await fetch(url, {
          method: "GET",
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        })).text();
        loadingOverlay && (loadingOverlay.style.display = "none"), Simplistic.openModal(data, "quick-view")
      } catch (error) {
        console.error("Quick view error:", error), loadingOverlay && (loadingOverlay.style.display = "none")
      }
    }
  })
}

function initSideCart() {
  const cartWrap = document.querySelector(".header .cart-wrap");
  document.getElementById("side-cart") && (cartWrap && cartWrap.addEventListener("click", e => {
    e.stopPropagation(), e.preventDefault(), showSideCart(!0)
  }), document.addEventListener("click", event => {
    const sideCart2 = document.getElementById("side-cart");
    sideCart2 && !event.target.closest("#side-cart") && event.target.id !== "loading-overlay" && sideCart2.classList.contains("open") && hideSideCart()
  }))
}

function showSideCart(animate) {
  document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden";
  const page = document.getElementById("page"),
    sideCart = document.getElementById("side-cart");
  page && page.classList.add("mode-overlay"), animate ? setTimeout(() => {
    sideCart && sideCart.classList.add("open")
  }, 100) : sideCart && (sideCart.classList.remove("ease-animation-slow"), sideCart.classList.add("open"), setTimeout(() => {
    sideCart.classList.add("ease-animation-slow")
  }, 200)), sideCart && Simplistic.trapFocus({
    container: sideCart,
    namespace: "side-cart"
  })
}

function hideSideCart() {
  const sideCart = document.getElementById("side-cart"),
    page = document.getElementById("page");
  sideCart && sideCart.classList.remove("open"), page && page.classList.remove("mode-overlay"), document.body.style.overflow = "", document.documentElement.style.overflow = "", sideCart && Simplistic.removeTrapFocus({
    container: sideCart,
    namespace: "side-cart"
  })
}

function validateAddCart(form) {
  const variantInput = form.querySelector("input[name=id]");
  if (!variantInput || variantInput.value === "") {
    const singleOptionSelectors = form.querySelectorAll(".single-option-selector");
    let allOptionsSelected = !0;
    if (singleOptionSelectors.length > 0 ? singleOptionSelectors.forEach(selector => {
        selector.value === "" && (allOptionsSelected = !1)
      }) : allOptionsSelected = !1, allOptionsSelected) {
      const errorMsg = form.querySelector(".validation-msg")?.textContent;
      alert(errorMsg || "The selected variant is sold out.")
    } else {
      const labels = [];
      form.querySelectorAll(".options label").forEach(label => {
        labels.push(label.textContent.replace(":", "").trim())
      }), alert("You must select a " + labels.join("/") + ".")
    }
    return !1
  }
  return !0
}
async function addToCart(form, callback) {
  const loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay && (loadingOverlay.style.display = "block"), window.modal && window.modal.close();
  const productContainer = form.closest(".initialized");
  let productJs = null;
  productContainer && productContainer.dataset.productjs && (productJs = productContainer.dataset.productjs), productJs ? document.dispatchEvent(new CustomEvent("addToCart", {
    detail: {
      productJs,
      form
    }
  })) : document.dispatchEvent(new CustomEvent("addToCart", {
    detail: {
      form
    }
  }));
  const formData = new FormData(form);
  try {
    const response = await fetch("/cart/add.js", {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.description || "Add to cart failed")
    }
    productJs ? document.dispatchEvent(new CustomEvent("addToCartSuccess", {
      detail: {
        productJs,
        form
      }
    })) : document.dispatchEvent(new CustomEvent("addToCartSuccess", {
      detail: {
        form
      }
    })), callback ? callback() : addToCartSuccess()
  } catch (error) {
    addToCartFail(error)
  }
}

function addToCartSuccess() {
  const allowSideCart = window.THEME_SETTINGS?.allow_side_cart ?? !0;
  updateCartDesc(allowSideCart)
}

function addToCartFail(error) {
  const loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay && (loadingOverlay.style.display = "none");
  const errorMessage = error.message || "An error occurred";
  Simplistic.openModal(`<div class="error-itemincart">${errorMessage}</div>`, "message")
}
async function updateCartDesc(openSideCart) {
  try {
    const data = await (await fetch("/cart?view=side-cart", {
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      })).text(),
      loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay && (loadingOverlay.style.display = "none");
    const oldSideCart = document.getElementById("side-cart"),
      animate = !oldSideCart || oldSideCart.offsetWidth === 0 || !oldSideCart.classList.contains("open");
    oldSideCart && oldSideCart.remove();
    const page = document.getElementById("page");
    page && page.insertAdjacentHTML("beforeend", data), window.modal && window.modal.close(), openSideCart ? showSideCart(animate) : window.location.pathname = "/cart"
  } catch (error) {
    console.error("Update cart error:", error);
    const loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay && (loadingOverlay.style.display = "none")
  }
}

function initAddToCart(allowAjaxCart) {
  document.addEventListener("submit", e => {
    e.target.classList.contains("add-to-cart-form") && (e.preventDefault(), validateAddCart(e.target) && (allowAjaxCart ? addToCart(e.target) : e.target.submit()))
  })
}

function setupDropdownMenus() {
  const trigger = document.querySelector(".has-dropdown--mega"),
    menu = document.querySelector(".menu-desktop");
  trigger && menu && (trigger.addEventListener("mouseenter", () => {
    menu.classList.add("open"), trigger.classList.add("open")
  }), document.addEventListener("mousemove", e => {
    !menu.contains(e.target) && !trigger.contains(e.target) && (menu.classList.remove("open"), trigger.classList.remove("open"))
  })), document.addEventListener("keydown", e => {
    const focused = document.activeElement;
    if (focused.closest(".main-menu .has-dropdown > a")) {
      if (e.which === 32) {
        e.preventDefault();
        const submenu = focused.nextElementSibling;
        submenu && toggleSlide(submenu)
      }
      if (e.which === 40) {
        e.preventDefault();
        const submenu = focused.nextElementSibling;
        submenu && slideDown(submenu)
      }
      if (e.which === 38) {
        e.preventDefault();
        const submenu = focused.nextElementSibling;
        submenu && slideUp(submenu)
      }
    }
    if (focused.closest(".main-menu .has-dropdown .has-dropdown > a")) {
      if (e.which === 39) {
        e.preventDefault();
        const submenu = focused.nextElementSibling;
        submenu && slideDown(submenu)
      }
      if (e.which === 37) {
        e.preventDefault();
        const submenu = focused.nextElementSibling;
        submenu && slideUp(submenu)
      }
    }
  })
}

function slideDown(element, duration = 300) {
  if (Simplistic.reducedMotion()) {
    element.style.display = "block";
    return
  }
  element.style.display = "block";
  const height = element.scrollHeight;
  element.style.height = "0", element.style.overflow = "hidden", element.style.transition = `height ${duration}ms ease`, requestAnimationFrame(() => {
    element.style.height = height + "px"
  }), setTimeout(() => {
    element.style.height = "", element.style.overflow = "", element.style.transition = ""
  }, duration)
}

function slideUp(element, duration = 300) {
  if (Simplistic.reducedMotion()) {
    element.style.display = "none";
    return
  }
  const height = element.scrollHeight;
  element.style.height = height + "px", element.style.overflow = "hidden", element.style.transition = `height ${duration}ms ease`, requestAnimationFrame(() => {
    element.style.height = "0"
  }), setTimeout(() => {
    element.style.display = "none", element.style.height = "", element.style.overflow = "", element.style.transition = ""
  }, duration)
}

function toggleSlide(element, duration = 300) {
  element.offsetHeight === 0 ? slideDown(element, duration) : slideUp(element, duration)
}

function initHeaderScroll() {
  const header = document.getElementById("header"),
    utilityBar = document.querySelector(".utility-bar");
  if (!header || !utilityBar) return;
  const barHeight = utilityBar.offsetHeight;
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop,
      translateValue = Math.min(scrollTop, barHeight);
    header.style.transform = `translateY(-${translateValue}px)`
  })
}

function init() {
  const mainMenu = document.querySelector("#header .main-menu"),
    dropHeaderMenu = document.querySelector(".header-drop .main-menu");
  mainMenu && dropHeaderMenu && (dropHeaderMenu.innerHTML = mainMenu.innerHTML, dropHeaderMenu.querySelectorAll("a").forEach(link => {
    link.setAttribute("focusable", "false"), link.setAttribute("tabindex", "-1"), link.setAttribute("aria-hidden", "true")
  })), initQuantityBoxes(), initQuickView(), setupDropdownMenus(), document.getElementById("side-cart") && initSideCart();
  const menuDesktop = document.querySelector(".menu-desktop");
  menuDesktop && menuDesktop.classList.remove("hidden"), initHeaderScroll()
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init(), window.ModernInteractions = {
  addToCart,
  initAddToCart,
  showSideCart,
  hideSideCart,
  updateCartDesc,
  validateAddCart
};
//# sourceMappingURL=/cdn/shop/t/215/assets/modern-interactions.js.map?v=131474106491916813831776933006