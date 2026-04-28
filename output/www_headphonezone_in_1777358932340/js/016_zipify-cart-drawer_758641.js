(() => {
  var z = Object.defineProperty;
  var X = (i, t, e) => t in i ? z(i, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : i[t] = e;
  var m = (i, t, e) => (X(i, typeof t != "symbol" ? t + "" : t, e), e);
  var h = {
    "zipify-cart-drawer-app.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-cart-drawer-app.a927ce069b733d69.js",
    "zipify-cart-drawer-vendor.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-cart-drawer-vendor.d1b3ab7bd25e747e.js",
    "zipify-cart-drawer-app.css": "https://d1npnstlfekkfz.cloudfront.net/zipify-cart-drawer-app.aed65c54248ea301.css"
  };
  var R, x, P = (x = (R = window.Zipify) == null ? void 0 : R.Cart) == null ? void 0 : x.domain,
    U, M, V, O = (V = (M = (U = window.Shopify) == null ? void 0 : U.routes) == null ? void 0 : M.root) != null ? V : "/";
  var A = !1,
    k = "https://ocu.zipify.com",
    j = "https://d1u9wuqimc88kc.cloudfront.net/content/stubs",
    G = 1e4,
    g = {
      addToCartButton: '[name="add"]:not(.quick-add__button--choose), product-form buy-buttons [type="submit"], [action*="/cart/add"] [type="submit"], [data-pf-type="ProductATC"], add-to-cart-component button[name="add"], .quick-add__button:not(.quick-add__button--choose)',
      addToCartForm: 'form[action*="/cart/add"], form[data-zp-add-to-cart-form], #AddToCartForm',
      openCartButton: 'a[href*="/cart"]:not([href*="/cart/"]):not([href*="/products/"]):not([href*="/cart-"]), sticky-header cart-drawer, header [data-drawer-open="cart"], [data-icon-destination-type="cart_dest"], cart-drawer-component cart-icon, cart-drawer-component > button, cart-drawer-component > a',
      bubbleWrapper: "#cart-icon-bubble",
      bubble: ".cart-count-bubble span",
      customBubble: "[data-cart-item-count], [data-cart-count]:not(form), .cart_count, .cart-count, .header-cart__count--badge, .js-toggle-cart, cart-icon .cart-bubble__text-count",
      quantityCartWrapper: ".quantity__rules-cart",
      quantityCart: ".product-form__quantity .quantity-cart",
      addToCartModalClose: ".quick-add-modal__toggle, .quick-add-modal__close",
      permalinkRegExp: /cart\/add\?id=(\d+)(?:&quantity=(\d+))?/
    },
    d = {
      openCart: "ocu:cart:open",
      openUpdatedCart: "ocu:cart:open:updated",
      closeCart: "ocu:cart:close",
      updateCart: "ocu:cart:update",
      cartLoaded: "ocu:cart:loaded",
      cartOpened: "ocu:cart:opened",
      cartClosed: "ocu:cart:closed",
      cartUpdated: "ocu:cart:updated",
      cartChanging: "ocu:cart:changing",
      productAdded: "ocu:product:added",
      productAdding: "ocu:product:adding",
      updateSettings: "ocu:settings:update",
      checkoutCreated: "ocu:checkout:created",
      ocuDiscounts: "ocu:discounts",
      runtimeError: "ocu:runtime:error"
    },
    S = "ocu_dismissed_free_product_tiers",
    W = "freeProductProcessing";
  Zipify.Cart.integrations.OCU = {
    tokenOnInit: !!document.cookie.match("ocu_popup_token"),
    get api() {
      var i;
      return (i = Zipify.OCU) == null ? void 0 : i.api
    },
    get token() {
      return document.cookie.match("ocu_popup_token")
    },
    get accepted() {
      var e, r, n;
      return ((r = (e = window.OCUIncart) == null ? void 0 : e.settings) == null ? void 0 : r.popup_frequency) === "once" && this.token || ((n = this.api.context) == null ? void 0 : n.popupDispatcher.popupAccepted)
    },
    get anyScripts() {
      var t, e, r, n, s, a;
      let i = (a = (s = (n = (r = (e = (t = window.OCUIncart) == null ? void 0 : t.metafields) == null ? void 0 : e.main) == null ? void 0 : r.general) == null ? void 0 : n.settings) == null ? void 0 : s.offer_scripts) != null ? a : {};
      return !!Object.values(i).filter(Boolean).length
    },
    get anyPopupScript() {
      return ["zipify-oneclickupsell-single", "zipify-oneclickupsell-multiple"].some(t => OCUIncart.metafields.main.general.settings.offer_scripts[t])
    },
    get disabled() {
      return !(this.api && this.anyScripts) || window.OCUDisableEvents
    },
    get preventRedirect() {
      var t, e;
      if (this.disabled) return !1;
      let i = (e = (t = window.OCUIncart) == null ? void 0 : t.popupLocation) == null ? void 0 : e.cart;
      return !this.accepted && i
    },
    init() {
      this.api && (this.upgrade(), this.cartLocation(), this.disableDafaultCartDrawer())
    },
    preventPrePurchaseListeners() {
      window.OCUDisableEvents = !0, setTimeout(() => window.OCUDisableEvents = !1)
    },
    hasBuilderCustomRedirect(i) {
      var e, r, n, s, a, o;
      if (this.hasGemPagesRedirect(i)) return !0;
      let t = (a = (s = (n = (r = (e = Zipify.OCU) == null ? void 0 : e.api) == null ? void 0 : r.context) == null ? void 0 : n.integrations) == null ? void 0 : s.pageFly) == null ? void 0 : a.isPageFlyButton(i.target);
      return ((o = t == null ? void 0 : t.dataset) == null ? void 0 : o.checkout) === "checkout" || !1
    },
    preventAddToCart(i) {
      var n, s, a;
      if (this.hasBuilderCustomRedirect(i) || ((a = (n = window.ZipifyPages) == null ? void 0 : n.isPagesEntity) != null ? a : (s = window.ZipifyPages) == null ? void 0 : s.integrations) && i.target.closest("button[data-zp-add-to-cart]")) return !0;
      if (this.disabled) return !1;
      let e = Zipify.OCU.api.excludeActionButton || Zipify.OCU.api.store.get("excludeAddToCartButton");
      if (i.target.closest(e)) return !1;
      let r = this.popup(i) || this.ppw(i);
      return r ? (i.preventDefault(), this.disableDafaultCartDrawer()) : this.preventPrePurchaseListeners(), r
    },
    popup(i) {
      var a, o, c, u;
      if (!this.anyPopupScript) return !1;
      let t = (a = window.OCUIncart) == null ? void 0 : a.popupLocation,
        e = ["product", "collection", "index", "page"].some(p => t == null ? void 0 : t[p]),
        r = (c = (o = Zipify.OCU) == null ? void 0 : o.lqd) == null ? void 0 : c.isPopupTriggerPage,
        n = (u = this.api.context) == null ? void 0 : u.popupDispatcher.ignoreTrust,
        s = i.isTrusted || n;
      return !s && this.accepted && this.tokenOnInit ? (this.api.context && (this.api.context.popupDispatcher.ignoreTrust = !0), !1) : (!s && this.token && (this.tokenOnInit = !0), !this.accepted && e && r && s)
    },
    ppw(i) {
      var n, s;
      let t = (s = (n = this.api.store) == null ? void 0 : n.get("productPageWidget")) != null ? s : {},
        e = Object.values(t).filter(Boolean).length,
        r = i.isTrusted && e;
      return r && (dispatchEvent(new CustomEvent(d.openCart, {
        detail: {
          preventUpdate: !0,
          triggerElement: document.activeElement
        }
      })), dispatchEvent(new CustomEvent(d.cartChanging)), Zipify.Cart.cart.items.length || dispatchEvent(new CustomEvent(d.productAdding))), r
    },
    upgrade() {
      let i = !1;
      Zipify.OCU.api.callbackBeforeRedirect = async (t, e) => {
        var r, n;
        if (i) return new Promise(() => {});
        if ((r = Zipify.Cart.instance) != null && r.unpublished) return {};
        i = !0, setTimeout(() => i = !1, 100);
        try {
          let s = ((n = t.target) == null ? void 0 : n.getAttribute("form")) === "ocu-cart-form";
          if (t.destination === "checkout") return s && await this.trackCheckoutCreated(), dispatchEvent(new CustomEvent(d.updateCart)), await new Promise(c => {
            addEventListener(d.cartUpdated, () => {
              OCUIncart.cart_items = Zipify.Cart.cart.items, c(!0)
            }, {
              once: !0
            })
          }), {};
          let {
            response: a,
            type: o
          } = e.detail;
          return o === "Upgrade" && a.accepted ? (this.tokenOnInit = !0, t._upsellAppInstance().hide(), setTimeout(() => this.api.store.set("submitted", !1)), dispatchEvent(new CustomEvent(d.openCart)), new Promise(() => {})) : {}
        } catch {
          return {}
        }
      }
    },
    cartLocation() {
      Zipify.OCU.api.beforeCreate = () => {
        var i;
        this.accepted || ((i = document.querySelector("#dynamic-checkout-cart")) == null || i.remove(), dispatchEvent(new CustomEvent(d.closeCart, {
          detail: "dispatchCartClosed"
        })))
      }
    },
    async trackCheckoutCreated() {
      let i = Zipify.Cart.settings.cart_drawer_id,
        [t] = Zipify.Cart.cart.token.split("?"),
        e = {
          cart_action: "cart_checkout"
        },
        {
          error: r
        } = await Zipify.Cart.http.request(`${k}/widgets/v1/track`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Shop-Domain": P
          },
          body: JSON.stringify({
            id: i,
            cart_token: t,
            ...e
          })
        });
      r && console.error("Failed to track stats", r)
    },
    disableDafaultCartDrawer() {
      window.slidecarthq && (slidecarthq.hidden = !0), ["cart-drawer", "cart-notification"].forEach(i => {
        let t = document.querySelector(i),
          e = {
            boolean: () => {
              t.hidden = !0
            },
            function: () => {
              t.open = r => {
                var n, s;
                (s = (n = Zipify.Cart.settings) == null ? void 0 : n.general) != null && s.add_to_cart && dispatchEvent(new CustomEvent(d.openCart, {
                  detail: {
                    triggerElement: r
                  }
                }))
              }
            }
          } [typeof(t == null ? void 0 : t.open)];
        e == null || e()
      })
    },
    hasGemPagesRedirect(i) {
      var r, n;
      let t = i.target.closest("[data-cbto]");
      if (["custom", "checkout"].includes((r = t == null ? void 0 : t.dataset) == null ? void 0 : r.cbto)) return !0;
      let e = i.target.closest("gp-product-button[gp-data]");
      if (e) {
        let s = e == null ? void 0 : e.getAttribute("gp-data"),
          a = JSON.parse(s != null ? s : "{}"),
          o = (n = a == null ? void 0 : a.setting) == null ? void 0 : n.actionEffect;
        if (["continue-shopping", "buy-now", "go-to-url"].includes(o)) return !0
      }
      return !1
    }
  };
  Zipify.Cart.integrations.Pages = {
    get openCartOnATC() {
      var i, t;
      return (t = (i = Zipify.Cart.settings) == null ? void 0 : i.general) == null ? void 0 : t.add_to_cart
    },
    openCart(i) {
      return dispatchEvent(new CustomEvent(d.openCart, {
        detail: {
          triggerElement: i
        }
      }))
    },
    init() {
      var i, t;
      Zipify.OCU.api.showUpsell || (Zipify.OCU.api.showUpsell = async () => {}), (t = (i = window.ZipifyPages) == null ? void 0 : i.on) == null || t.call(i, "productaddtocart", () => {
        var r, n, s, a, o;
        let e = (o = (a = (s = (n = (r = window.Zipify.OCU) == null ? void 0 : r.api) == null ? void 0 : n.context) == null ? void 0 : s.popupDispatcher) == null ? void 0 : a.eventTarget) != null ? o : document.activeElement;
        this.openCartOnATC && this.openCart(e)
      })
    }
  };
  Zipify.Cart.integrations.QuickBuy = {
    button: null,
    selector: '[data-quick-buy], add-to-cart, [data-quick-atc-btn], .sticky-variants[name="id"]+[data-add-to-cart], [data-product-variant-id], a[href*="/cart/add?id="], product-quick-add, .js-product-button-add-to-cart, .js_edit_cart_button',
    get isActive() {
      return !!this.button
    },
    get isPermalink() {
      return g.permalinkRegExp.test(this.button.href)
    },
    get payload() {
      var e, r, n;
      if (!this.isActive) return null;
      if (this.isPermalink) return this.handlePermalink();
      let i = this.button.dataset.quickBuy || this.button.dataset.variantId || this.button.dataset.productVariantId || this.button.dataset.pid || this.button.matches("product-quick-add") && this.button.dataset.id || ((e = this.button.closest("[data-variant-id]")) == null ? void 0 : e.dataset.variantId) || ((n = (r = this.button.closest(".sticky-form")) == null ? void 0 : r.querySelector('[name="id"]')) == null ? void 0 : n.value);
      if (!i) return null;
      let t = new FormData;
      return t.append("id", i), t
    },
    check(i) {
      return this.button = i == null ? void 0 : i.closest(this.selector), this.isActive
    },
    handlePermalink() {
      var n;
      let [i, t, e] = (n = g.permalinkRegExp.exec(this.button.href)) != null ? n : [];
      if (!t) return null;
      let r = new FormData;
      return r.append("id", t), e && r.append("quantity", e), r
    }
  };
  Zipify.Cart.integrations.Zapiet = {
    widgetHTML: '<div id="storePickupApp"></div>',
    selectors: {
      placement: ".ocu-checkout-button",
      widget: "#storePickupApp"
    },
    get enabled() {
      var i;
      return !!((i = window.Zapiet) != null && i.Widget)
    },
    get preventRedirect() {
      var i, t, e;
      return this.enabled && ((e = (t = (i = window.Zapiet) == null ? void 0 : i.Widget) == null ? void 0 : t.checkoutEnabled) == null ? void 0 : e.call(t)) === !1
    },
    setCustomRedirect() {
      Zipify.Cart.api.customRedirect = (i = "") => {
        let t = new URL(`/checkout?${i}`, location.origin);
        new URLSearchParams(Zapiet.Cart.getUrlParams()).forEach((r, n) => {
          var s, a;
          if (n === "discount") {
            let o = (a = (s = Zipify.Cart.cart.discount_codes) == null ? void 0 : s.map(c => c.code)) != null ? a : [];
            return r && o.push(r), t.searchParams.set(n, o.join(","))
          }
          t.searchParams.set(n, r)
        }), location.assign(t)
      }
    },
    init() {
      var r;
      if (!this.enabled) return;
      let i = document.querySelector(this.selectors.placement),
        t = document.querySelector(this.selectors.widget),
        e = ["beforebegin", t != null ? t : this.widgetHTML];
      if (!i) return console.log("Zapiet placement not found");
      t ? i.insertAdjacentElement(...e) : i.insertAdjacentHTML(...e), this.setCustomRedirect(), t || (r = window.initializeZapietApp) == null || r.call(window), this.checkRender(i, e)
    },
    checkRender(i, t) {
      addEventListener(d.cartOpened, () => {
        var s;
        let [e, ...r] = [...document.querySelectorAll(this.selectors.widget)];
        e ? r.length && [...r].forEach(a => a.remove()) : i.insertAdjacentHTML(...t), (e == null ? void 0 : e.innerHTML.length) || (s = window.initializeZapietApp) == null || s.call(window)
      })
    }
  };
  Zipify.Cart.integrations.Zapiet.init = Zipify.Cart.integrations.Zapiet.init.bind(Zipify.Cart.integrations.Zapiet);
  Zipify.Cart.integrations.Ymq = {
    triggerElement: null,
    isThemeCartDrawerEnabled: !1,
    selectors: {
      cartDrawer: "cart-drawer",
      label: "[data-label]",
      value: '[name^="ymq["]'
    },
    init() {
      var t;
      let i = document.querySelector(this.selectors.cartDrawer);
      i && ((t = window.ymq_option) != null && t.theme_ajax_cart) && (this.isThemeCartDrawerEnabled = !0, i.renderContents = () => {
        dispatchEvent(new CustomEvent(d.openCart, {
          detail: {
            triggerElement: this.triggerElement
          }
        }))
      })
    },
    get present() {
      return !!this.elements.length
    },
    get elements() {
      return [...document.querySelectorAll(this.selectors.value)]
    },
    get properties() {
      return this.elements.reduce((i, t) => {
        var a, o;
        if (t.disabled) return i;
        let {
          label: e
        } = (o = (a = t.closest(this.selectors.label)) == null ? void 0 : a.dataset) != null ? o : {}, {
          type: r,
          value: n
        } = t, s = /checkbox|radio/.test(r) ? t.checked && t.value : n;
        return e && s ? [...i, [e, s]] : i
      }, [])
    },
    preventAddToCart(i) {
      return this.triggerElement = document.activeElement, this.present && this.isThemeCartDrawerEnabled && Zipify.Cart.helpers.checkAddToCart(i)
    }
  };
  Zipify.Cart.integrations.GiftWrap = {
    selector: "#gift-note__addon",
    get input() {
      return document.querySelector(this.selector)
    },
    get checked() {
      var i;
      return (i = this.input) == null ? void 0 : i.checked
    },
    get variantId() {
      var i;
      return (i = this.input) == null ? void 0 : i.dataset.variantId
    },
    async addToCart() {
      if (this.checked && this.variantId) return Zipify.Cart.http.request("/cart/add.js", {
        method: "POST",
        body: JSON.stringify({
          id: this.variantId
        })
      })
    }
  };
  Zipify.Cart.integrations.KachingBundles = {
    triggerElement: null,
    selector: "kaching-bundle",
    pageFlySelector: '[data-pf-type="KachingAppz"]',
    get regularBlocks() {
      return [`${this.selector} + product-form`, `${this.selector} + .ProductForm__BuyButtons`, `${this.pageFlySelector} + [data-pf-type="Block"]`]
    },
    get customBlocks() {
      return [{
        parent: '[data-pf-type="Column"]',
        child: this.pageFlySelector
      }, {
        parent: ".product__info-container",
        child: this.selector
      }, {
        parent: 'form[action="/cart/add"]',
        child: this.selector
      }, {
        parent: '[data-block-id="buy_buttons"]',
        child: this.selector
      }, {
        parent: ".shop-product-info",
        child: this.selector
      }, {
        parent: ".product-info",
        child: this.selector
      }]
    },
    get present() {
      let i = document.querySelector(this.selector);
      return !!(i != null && i.innerHTML.length)
    },
    init() {
      this.present && (window.upcartDocumentOrShadowRoot = !0, window.upcartOpenCart = () => {
        dispatchEvent(new CustomEvent(d.openCart, {
          detail: {
            triggerElement: this.triggerElement
          }
        }))
      }, window.upcartRefreshCart = () => {
        dispatchEvent(new Event(d.updateCart))
      })
    },
    preventAddToCart({
      target: i
    } = {}) {
      this.triggerElement = document.activeElement;
      let t = this.regularBlocks.some(r => i == null ? void 0 : i.closest(r)),
        e = this.customBlocks.some(({
          parent: r,
          child: n
        }) => {
          var s;
          return (s = i == null ? void 0 : i.closest(r)) == null ? void 0 : s.querySelector(n)
        });
      return this.present && (t || e)
    }
  };
  Zipify.Cart.integrations.QuantityBreakes = {
    selector: ".quantity-breaks-container",
    get present() {
      return !!document.querySelector(this.selector)
    },
    preventAddToCart(i) {
      var t, e, r;
      return !!((t = i == null ? void 0 : i.target) != null && t.closest(this.selector)) || !!((r = (e = i == null ? void 0 : i.target) == null ? void 0 : e.closest("product-info")) != null && r.querySelector(this.selector))
    }
  };
  var B = class {
      constructor() {
        m(this, "_widgetActive", !1);
        m(this, "events", {
          change: ".nvd-toggle-switch input"
        });
        m(this, "init", () => {
          var s;
          let t = document.querySelector(".ocu-cart-drawer");
          if (!t) return;
          let e = (s = t.querySelector(".nvd-mini")) != null ? s : document.querySelector(".nvd-mini");
          if (!e || e.querySelectorAll("button").length > 0) return;
          let n = t.querySelector("[data-ocu-cart-shipping-protection-dest]");
          n && (n.append(e), e.classList.add("ocu-nvd-mini"), this._widgetActive = !0)
        });
        m(this, "callToAction", async () => {
          var r;
          if (!(this.checked && this.variant && Object.keys(this.variant).length)) return;
          let {
            id: t
          } = this.variant, {
            error: e
          } = await Zipify.Cart.http.request(`${O}cart/add.js`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              items: [{
                id: t,
                quantity: 1
              }]
            })
          });
          e && console.error("Failed to add shipping protection product: Navidium", (r = e == null ? void 0 : e.message) != null ? r : "Navidium error")
        })
      }
      get checked() {
        try {
          return localStorage.getItem("nvdStatus") === "on"
        } catch {
          return console.log("Navidium: Failed to get status"), !1
        }
      }
      get variant() {
        try {
          let t = localStorage.getItem("nvd_variant"),
            e = JSON.parse(localStorage.getItem("nvdProductVariants"));
          return e == null ? void 0 : e.find(({
            id: r
          }) => r === Number(t))
        } catch {
          return console.log("Navidium: Failed to get variant"), null
        }
      }
    },
    H = new B;
  var N = class {
      constructor() {
        m(this, "_instances", []);
        m(this, "app", {});
        m(this, "appName");
        m(this, "init", () => {
          this._startDetectingApps();
          let t = this._findActiveApp();
          if (!t.length) return;
          let {
            instance: e,
            alias: r
          } = t.reduce((n, s) => n.priority > s.priority ? n : s);
          this.app = e, this.appName = r, this.appName && this.listenEvents()
        });
        this._initializeInstances()
      }
      get checked() {
        return !!this.app.checked
      }
      _initializeInstances() {
        [{
          alias: "navidium",
          priority: 5,
          instance: H
        }].forEach(this._addInstance.bind(this))
      }
      _addInstance(t) {
        this._instances.push(t)
      }
      _startDetectingApps() {
        this._instances.forEach(({
          instance: t
        }) => t == null ? void 0 : t.init())
      }
      _findActiveApp() {
        return this._instances.filter(({
          instance: {
            _widgetActive: t
          }
        }) => t)
      }
      listenEvents() {
        var t;
        Object.entries((t = this.app.events) != null ? t : {}).forEach(([e, r]) => {
          document.addEventListener(e, n => {
            n.target.closest(r) && dispatchEvent(new Event(d.updateCart))
          })
        })
      }
    },
    et = new N;
  Zipify.Cart.integrations.ShippingProtection = et;
  Zipify.Cart.integrations.SCProductOptions = {
    callback() {
      dispatchEvent(new CustomEvent("ocu:cart:update", {
        detail: {
          preventEvent: !0
        }
      }))
    },
    init() {
      var i, t, e;
      (e = (t = (i = window == null ? void 0 : window.BOLD) == null ? void 0 : i.common) == null ? void 0 : t.eventEmitter) == null || e.on("BOLD_OPTIONS_cart_prices_updated", this.callback), addEventListener("ocu:cart:update", ({
        detail: r
      }) => {
        r != null && r.preventEvent || addEventListener("ocu:cart:updated", () => {
          var n, s, a;
          (a = (s = (n = window.BOLD) == null ? void 0 : n.common) == null ? void 0 : s.eventEmitter) == null || a.emit("BOLD_COMMON_cart_loaded")
        }, {
          once: !0
        })
      }), addEventListener("ocu:product:added", () => {
        var r, n, s;
        (s = (n = (r = window == null ? void 0 : window.BOLD) == null ? void 0 : r.common) == null ? void 0 : n.eventEmitter) == null || s.emit("BOLD_COMMON_cart_loaded")
      }), addEventListener("beforeunload", () => {
        var r, n, s;
        (s = (n = (r = window == null ? void 0 : window.BOLD) == null ? void 0 : r.common) == null ? void 0 : n.eventEmitter) == null || s.off("BOLD_OPTIONS_cart_prices_updated", this.callback)
      })
    },
    isSCPOForm(i) {
      var t, e, r;
      return (r = (e = (t = window == null ? void 0 : window.BOLD) == null ? void 0 : t.options) == null ? void 0 : e.app) == null ? void 0 : r.getOptionProductByForm(i)
    },
    async validateSCPO(i) {
      var t;
      try {
        return await ((t = this.isSCPOForm(i)) == null ? void 0 : t.validateOptions()), !0
      } catch {
        return !1
      }
    }
  };
  Zipify.Cart.integrations.RapiBundles = {
    selector: ".rapi-bundles",
    get present() {
      let i = document.querySelector(this.selector);
      return !!(i != null && i.innerHTML.length)
    },
    init() {
      if (!this.present) return;
      let i = document.querySelector("cart-drawer");
      i && (i.open = t => {
        dispatchEvent(new CustomEvent(d.openCart, {
          detail: {
            triggerElement: t
          }
        }))
      })
    },
    preventAddToCart(i) {
      var t, e, r, n;
      return this.present ? !!((e = (t = i == null ? void 0 : i.target) == null ? void 0 : t.closest(".product-form__buttons")) != null && e.querySelector(this.selector)) || !!((n = (r = i == null ? void 0 : i.target) == null ? void 0 : r.closest('form[method="post"][action="/cart/add"][data-type="add-to-cart-form"]')) != null && n["properties[_rapi_bundles]"]) : !1
    }
  };
  Zipify.Cart.integrations.Vopo = {
    get enabled() {
      return !!window.bcpo
    },
    applyIntegrationPrices(i) {
      bcpo.fixCartPrices(), !Zipify.Cart.api.customRedirect && window.bcpoCheckout && (Zipify.Cart.api.customRedirect = window.bcpoCheckout);
      let t = (s, a) => s.reduce((o, c) => o + c[a], 0),
        e = s => {
          let a = bcpo.cart2.items.find(l => l.id === s.variant_id && s.quantity === l.quantity && JSON.stringify(s.properties) === JSON.stringify(l.properties));
          if (!a) return 0;
          if (bcpo.price_addons.length === bcpo.cart2.items.length) {
            let l = bcpo.cart2.items.indexOf(a);
            return bcpo.price_addons[l].price_with_addon
          }
          let o = a.properties,
            p = Object.values(o).map(l => {
              var C, E;
              let f = (E = (C = l.match(/ \| ([^|]+)$/)) == null ? void 0 : C[1]) == null ? void 0 : E.replace(/\D/g, "");
              return f ? Number(f) : 0
            }).reduce((l, f) => l + f, 0);
          if (!(!p || isNaN(p))) return s.original_price + p
        },
        r = s => {
          let a = e(s);
          if (!a || isNaN(a)) return;
          let o = s.total_discount / s.original_price * 100,
            c = a * o / 100;
          return {
            priceWithVirtualOptions: a,
            discountedPrice: c,
            finalPrice: a - c
          }
        },
        n = s => {
          let a = r(s);
          a && (s.price = a.priceWithVirtualOptions, s.original_price = a.priceWithVirtualOptions, s.discounted_price = a.discountedPrice, s.line_price = a.priceWithVirtualOptions * s.quantity, s.original_line_price = a.priceWithVirtualOptions * s.quantity, s.final_price = a.finalPrice, s.final_line_price = a.finalPrice * s.quantity)
        };
      i.items.forEach(n), i.original_total_price = t(i.items, "original_line_price"), i.total_price = t(i.items, "line_price"), i.total_discount = t(i.items, "total_discount")
    },
    init() {
      this.enabled && (Zipify.Cart.integrations.applyIntegrationPrices = this.applyIntegrationPrices)
    },
    preventAddToCart(i) {
      var t;
      return Zipify.Cart.integrations.Vopo.enabled && !!((t = i == null ? void 0 : i.target) != null && t.closest('form[action="/cart/add"] button[name="add"]'))
    }
  };
  Zipify.Cart.integrations.Qikify = {
    triggerElement: null,
    container: ".qbk-product-offer",
    actionButton: ".qbk-volume__action-btn, .qbk-bundle__action-btn, .qbk-popup__action-btn",
    events: ["boosterkit-volume-added", "boosterkit-bundle-added"],
    get present() {
      let i = document.querySelector(this.container);
      return !!(i != null && i.innerHTML.length)
    },
    init() {
      this.present && this.events.forEach(i => {
        document.addEventListener(i, () => {
          dispatchEvent(new CustomEvent(d.openCart, {
            detail: {
              triggerElement: this.triggerElement
            }
          }))
        })
      })
    },
    preventAddToCart(i) {
      var t, e;
      return this.triggerElement = document.activeElement, this.present && !!((e = (t = i == null ? void 0 : i.target) == null ? void 0 : t.closest(this.actionButton)) != null && e.closest(this.container))
    }
  };
  Zipify.Cart.integrations.Loop = {
    selector: '[name="add"]',
    get present() {
      var i, t, e, r;
      return ((r = (e = (t = window.LOOP_WIDGET) == null ? void 0 : t[(i = Zipify.Cart.product) == null ? void 0 : i.id]) == null ? void 0 : e.productBundleData) == null ? void 0 : r.status) === "ACTIVE"
    },
    openCart(i) {
      window.LOOP_WIDGET[Zipify.Cart.product.id].productBundleData.redirectionUrl = "None", setTimeout(() => dispatchEvent(new CustomEvent(d.openCart, {
        detail: {
          triggerElement: i
        }
      })), 1e3), setTimeout(() => dispatchEvent(new Event(d.updateCart)), 2e3)
    },
    preventAddToCart(i) {
      var e;
      if (!this.present) return !1;
      let t = !!((e = i == null ? void 0 : i.target) != null && e.closest(this.selector));
      return t && this.openCart(document.activeElement), t
    }
  };
  Zipify.Cart.integrations.Easify = {
    actionButton: ".tpo_add-to-cart",
    event: "easify:add-on-product:add",
    get present() {
      return !!window.TPOConfigs
    },
    init() {
      this.present && (Zipify.Cart.api.excludeActionButton = this.actionButton, window.icartAddToCartEvent = !0, document.addEventListener(this.event, () => {
        dispatchEvent(new CustomEvent(d.openUpdatedCart, {
          detail: {
            triggerElement: document.activeElement
          }
        }))
      }))
    }
  };
  Zipify.Cart.api = {
    customAddToCartButton: null,
    excludeActionButton: null,
    customAddToCartForm: null,
    customOpenCartButton: null,
    customBubbleWrapper: null,
    customBubble: null,
    customBubbleHiddenClass: null,
    customFormValidate: null,
    customRedirect: null,
    enableOptimisticUpdate: !0,
    excludeFreeProducts: !1,
    excludeFreeShippingForDigitalProducts: !1,
    excludeFreeShippingForSubscriptions: !1,
    freeShippingLabelForSubscriptions: !1,
    preventReverseLineItems: !1,
    ...Zipify.Cart.api
  };
  Zipify.Cart.integrations.init = () => {
    ["OCU", "Pages", "KachingBundles", "SCProductOptions", "Vopo", "Ymq", "Qikify", "Easify"].forEach(i => {
      Zipify.Cart.integrations[i].init()
    }), addEventListener(d.cartLoaded, () => {
      setTimeout(Zipify.Cart.integrations.Zapiet.init, 1e3), setTimeout(Zipify.Cart.integrations.ShippingProtection.init, 1e3)
    })
  };
  Zipify.Cart.integrations.preventAddToCart = i => (Zipify.Cart.integrations.KachingBundles.init(), Zipify.Cart.integrations.RapiBundles.init(), Zipify.Cart.integrations.QuickBuy.check(i.target), ["KachingBundles", "QuantityBreakes", "RapiBundles", "Vopo", "Ymq", "Qikify", "Loop"].some(t => Zipify.Cart.integrations[t].preventAddToCart(i)));
  var $ = {
      method: "GET",
      type: "json",
      body: null,
      signal: null,
      omit: !0,
      timeout: 6e3,
      retry: {
        n: 3,
        delay: 200
      },
      headers: {
        "Content-Type": "application/json"
      }
    },
    F = class {
      constructor(t) {
        this.id = 0, this.status = {}, this.controller = {}, this.config = {
          ...t
        }
      }
      default (t) {
        let e = this.config;
        Object.keys(t).forEach(r => {
          $[r] = t[r], e[r] = t[r]
        })
      }
      async request(t, e) {
        try {
          let r = this.options(e),
            n = this.fetch.bind(this, t, r);
          return await this.retry(n, r.id, r.retry)
        } catch (r) {
          return {
            error: r
          }
        }
      }
      async retry(t, e, {
        n: r,
        delay: n
      }) {
        try {
          return await t()
        } catch (s) {
          if (r < 2 || this.preventRetry(e)) throw s;
          return await this.wait(n), await this.retry(t, e, {
            n: r - 1,
            delay: n
          })
        }
      }
      async wait(t) {
        await new Promise(e => setTimeout(e, t))
      }
      async fetch(t, {
        id: e,
        timeout: r,
        type: n,
        ...s
      }) {
        let a = this.setTimeout(e, r),
          o = await fetch(t, s);
        return this.status[e] = o.status, this.preventRetry(e) || this.clearData(e, a), {
          response: await o[n](),
          status: o.status
        }
      }
      options(t, e = this.id++) {
        var r;
        try {
          this.controller[e] = new AbortController
        } catch {
          this.controller[e] = {
            abort: () => {}
          }
        }
        return {
          id: e,
          ...this.config,
          ...t != null ? t : {},
          signal: this.controller[e].signal,
          headers: {
            ...(r = t == null ? void 0 : t.headers) != null ? r : {},
            ...t != null && t.safe ? {} : this.config.headers
          }
        }
      }
      setTimeout(t, e) {
        return setTimeout(() => {
          var r;
          (r = this.controller[t]) == null || r.abort(), this.clearData(t)
        }, e)
      }
      clearData(t, e) {
        delete this.controller[t], delete this.status[t], clearTimeout(e)
      }
      preventRetry(t) {
        return /401|403|404/.test(this.status[t])
      }
    },
    b = new F($);
  var L = class {
    constructor() {
      m(this, "isOpen", !1);
      m(this, "isLoaded", !1);
      m(this, "unpublished", !1);
      m(this, "processing", !1);
      m(this, "permalink", /cart\/(\d+:\d+(?:,\d+:\d+)*)(?:[?&]discount=([-\w! %205]+))*/);
      m(this, "cart", Zipify.Cart.cart);
      m(this, "integrations", Zipify.Cart.integrations)
    }
  };
  var q = class extends L {
    get isProductMissing() {
      var t;
      return !(Zipify.Cart.product || (t = Zipify.Cart.products) != null && t.length)
    }
    get selectedVariantId() {
      let t = this.getAddToCartData(null);
      return Number(t.get("id"))
    }
    checkAddToCart({
      target: t,
      type: e
    }) {
      var a;
      if (t.closest(Zipify.Cart.api.excludeActionButton)) return null;
      if (t.closest(Zipify.Cart.api.customAddToCartButton) || this.integrations.QuickBuy.check(t)) return t;
      let r = (a = Zipify.Cart.api.customAddToCartForm) != null ? a : g.addToCartForm,
        n = t.closest(g.addToCartButton),
        s = t.closest(r);
      return (e === "submit" || n) && s
    }
    preventAddToCart(t) {
      var s, a, o, c;
      if (this.integrations.preventAddToCart(t)) return !0;
      let e = (a = (s = t.target).closest) == null ? void 0 : a.call(s, g.addToCartForm);
      Zipify.Cart.api.customAddToCartForm && (e = document.querySelector(Zipify.Cart.api.customAddToCartForm));
      let r = this.validateForm(e),
        n = u => !this.checkAddToCart(t) || !u;
      return (c = (o = r == null ? void 0 : r.then) == null ? void 0 : o.call(r, n)) != null ? c : n(r)
    }
    preventOpenCart(t) {
      var r, n, s, a, o;
      if ((n = (r = t.target).closest) != null && n.call(r, Zipify.Cart.api.excludeActionButton)) return !0;
      let e = (s = Zipify.Cart.api.customOpenCartButton) != null ? s : g.openCartButton;
      return !((o = (a = t.target).closest) != null && o.call(a, e) && this.isLoaded) || t.synthetic
    }
    getAddToCartData(t) {
      var e, r, n, s, a, o, c, u;
      try {
        let p = (e = Zipify.Cart.api.customAddToCartForm) != null ? e : g.addToCartForm,
          l = (n = (r = t == null ? void 0 : t.target) == null ? void 0 : r.closest(p)) != null ? n : document.querySelector(p),
          f = new FormData(l),
          C = Object.fromEntries(f),
          E = (s = window.getCurrentSellingPlanId) == null ? void 0 : s.call(window),
          y = {
            ...C,
            quantity: (a = C.quantity) != null ? a : 1
          };
        if (isNaN(E) || (y.selling_plan = E), y.id || (y.id = this.getDefaultVariantId(t, l)), !y.id) {
          let w = y["product-id"],
            v = (u = (c = (o = window.__pageflyProducts) == null ? void 0 : o[w]) == null ? void 0 : c.variants.find(_ => _.available)) == null ? void 0 : u.id;
          v && (y.id = v)
        }
        return !f.has("id") && y.id && f.append("id", y.id), f
      } catch (p) {
        return console.log(p.message), new FormData
      }
    }
    getDefaultVariantId(t, e) {
      var s, a, o, c, u;
      let r = (c = (o = (a = (s = t == null ? void 0 : t.target) == null ? void 0 : s.closest) == null ? void 0 : a.call(s, "[data-default-variant]")) == null ? void 0 : o.dataset) == null ? void 0 : c.defaultVariant;
      if (r) return r;
      let n = (u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, 'select[name="id"]');
      if (n) {
        let p = Array.from(n.options).find(l => l.value !== "");
        if (p) return p.value
      }
    }
    validateForm(t) {
      var e, r, n;
      return this.integrations.QuickBuy.isActive ? !0 : this.integrations.SCProductOptions.isSCPOForm(t) ? this.integrations.SCProductOptions.validateSCPO(t) : (n = (r = (e = Zipify.Cart.api).customFormValidate) == null ? void 0 : r.call(e, t)) != null ? n : t == null ? void 0 : t.reportValidity()
    }
    getProduct(t) {
      return Zipify.Cart.product ? Zipify.Cart.product : Zipify.Cart.products.find(e => e.variants.find(({
        id: r
      }) => r === t))
    }
    createLineItem(t) {
      var p, l, f, C, E, y, w, v;
      if (this.isProductMissing) return null;
      let e = this.createPayload(t),
        n = e instanceof FormData ? Object.fromEntries(e) : e,
        s = this.getProduct(Number(n.id)),
        a = Number((p = n.product_id) != null ? p : n["product-id"]);
      if ((s == null ? void 0 : s.id) !== a) return Zipify.Cart.product = null, null;
      if (!s) return null;
      let o = (l = s.variants.find(_ => _.id === Number(n.id))) != null ? l : {};
      if (this.updateProductInCart(n, t)) return null;
      let u = `${j}/no_image.svg`;
      return o.ghost = !0, o.quantity = (f = n.quantity) != null ? f : 1, o.variant_title = o.title, o.product_title = s.title, o.title = s.title, o.original_line_price = o.price * o.quantity, o.final_line_price = o.price * o.quantity, o.properties = n.properties, o.selling_plan_allocation = this.getSellingPlanName(s.selling_plan_groups, n.selling_plan), o.options_with_values = this.getOptionsWithValues(n, s), o.product_id = (C = s == null ? void 0 : s.id) != null ? C : Number(n["product-id"]), (v = o.image) != null || (o.image = (w = (y = (E = o.featured_image) == null ? void 0 : E.src) != null ? y : s.featured_image) != null ? w : u), o
    }
    updateProductInCart({
      id: t,
      quantity: e = 1,
      properties: r = {}
    }, n) {
      let s = (o, c) => {
          let u = Object.entries(o),
            p = Object.entries(c != null ? c : {});
          return u.length !== p.length ? !1 : u.every(([l, f]) => c[l] === f)
        },
        a = this.cart.items.find(o => {
          let c = o.id === Number(t),
            u = s(r, o.properties);
          return c && u
        });
      return a && n.isTrusted && (a.quantity += Number(e)), a
    }
    createPayload(t, e = null) {
      var c;
      let r = this.getAddToCartData(t);
      if (!(r instanceof FormData)) return r;
      this.getCustomProperties().forEach(u => r.append(...u));
      let a = (c = this.integrations.QuickBuy.payload) != null ? c : r;
      return this.validatePayload(a, e) ? a : new FormData
    }
    getCustomProperties() {
      return Zipify.Cart.integrations.Ymq.present ? Zipify.Cart.integrations.Ymq.properties : []
    }
    getSellingPlanName(t, e) {
      return {
        selling_plan: {
          name: t.reduce((n, s) => {
            var a, o;
            return n || ((o = (a = s.selling_plans.find(c => c.id === +e)) == null ? void 0 : a.name) != null ? o : "")
          }, ""),
          id: e
        }
      }
    }
    getOptionsWithValues({
      id: t
    }, {
      options: e,
      variants: r
    }) {
      let n = r.find(({
        id: s
      }) => s === +t);
      return n ? e.map((s, a) => ({
        name: s,
        value: n.options[a]
      })) : [{
        name: "Title",
        value: "Default Title"
      }]
    }
    validatePayload(t, e) {
      if (!t) return !1;
      let r = [this.getFormDataKey(t)];
      return e != null && e.requires_selling_plan && r.push("selling_plan"), r.every(n => t.has(n))
    }
    getFormDataKey(t) {
      return t.has("id") ? "id" : "items[0][id]"
    }
    prepareAddToCartData(t) {
      let e = this.createLineItem(t),
        r = this.createPayload(t, e),
        s = r instanceof FormData ? r.has(this.getFormDataKey(r)) : r == null ? void 0 : r.id;
      return s || console.log("No payload"), {
        lineItem: e,
        payload: r,
        hasPayload: s
      }
    }
    checkProcessing(t) {
      return this.processing ? (t.preventDefault(), t.stopPropagation(), !0) : !1
    }
  };
  var rt = h,
    Q = A ? "zipify-oneclickupsell-cart-drawer" : "zipify-cart-drawer-app",
    J = [`${Q}.js`, "zipify-cart-drawer-vendor.js"],
    it = A ? [] : [`${Q}.css`];
  A && J.pop();

  function K(i, t) {
    let e = rt[t];
    return e ? [...i, e] : (console.warn(`[OCU Cart Drawer] Missing resource in manifest: ${t}`), i)
  }
  var T = {
    scripts: J.reduce(K, []),
    styles: it.reduce(K, []),
    get settings() {
      return [`${k}/widgets/v1/cart_drawer`, {
        method: "GET",
        headers: {
          "Shop-Domain": P
        }
      }]
    },
    get cart() {
      return [`${O}cart.js?ocu`, {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json"
        }
      }]
    },
    addToCart(i) {
      let t = i instanceof FormData,
        r = {
          method: "POST",
          body: t ? i : JSON.stringify(i)
        };
      return t && (r.safe = !0), [`${O}cart/add.js`, r]
    },
    get customerLocation() {
      return ["/browsing_context_suggestions.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }]
    }
  };
  b.default({
    timeout: G
  });
  Zipify.Cart.http = b;
  var Z = class extends q {
    constructor() {
      super(), this.init()
    }
    async init() {
      this.loadScripts(), this.fetchSettings(), this.fetchUserLocation()
    }
    loadScript(t) {
      let e = document.createElement("script");
      e.src = t, e.async = !0, document.head.append(e)
    }
    loadStyle(t) {
      let e = document.createElement("link"),
        n = !(typeof InstallTrigger < "u"),
        s = (a = 3, o = 100) => {
          var c, u;
          (u = (c = e.relList) == null ? void 0 : c.supports) != null && u.call(c, "prefetch") && n ? (e.as = "style", e.rel = "prefetch", e.onload = () => e.rel = "stylesheet") : e.rel = "stylesheet", e.onerror = () => {
            a > 0 ? setTimeout(() => s(--a), o) : console.error(`Failed to load ${t} after multiple retries`)
          }, e.href = t, document.head.append(e)
        };
      s()
    }
    loadScripts() {
      T.scripts.forEach(t => this.loadScript(t)), T.styles.forEach(t => this.loadStyle(t))
    }
    async fetchCart() {
      let {
        response: t,
        error: e
      } = await b.request(...T.cart);
      return e ? (this.setProcessing(!1), console.error(e.message)) : (this.cart = t, Zipify.Cart.cart = this.cart, this.dispatchEvent(d.cartUpdated), this.cart)
    }
    async updateCart(t) {
      var r, n;
      let e = this.cart;
      this.cart = Zipify.Cart.cart = (n = (r = t == null ? void 0 : t.detail) == null ? void 0 : r.cart) != null ? n : await this.fetchCart(), (t == null ? void 0 : t.detail) !== W && this.autoDismissRemovedFreeProducts(e, this.cart), this.updateBubble(), this.updatePageQuantityCart(), this.dispatchEvent(d.cartUpdated, {
        detail: t == null ? void 0 : t.detail
      })
    }
    async addToCart(t) {
      var o, c;
      let e = (o = t.has) != null && o.call(t, this.getFormDataKey(t)) ? t : this.getAddToCartData(t);
      this.dispatchEvent(d.cartChanging), this.isProductMissing && this.setCartLoader();
      let {
        response: r,
        error: n
      } = await b.request(...T.addToCart(e)), s = (c = n == null ? void 0 : n.message) != null ? c : r.message;
      if (s) return console.log(s);
      let a = {
        ...r,
        quantity: Number(e.quantity),
        cart_quantity: r.quantity
      };
      this.dispatchEvent(d.productAdded, {
        item: a
      })
    }
    async fetchSettings() {
      var n, s;
      let t = b.request(...T.settings);
      Zipify.Cart.fetchSettings = t;
      let {
        response: e,
        error: r
      } = await t;
      if (!(r || e != null && e.error)) {
        let a = e.representation.settings.reward_bar;
        return Zipify.Cart.api.excludeFreeProducts && a && (a.tiers = a.tiers.filter(o => o.reward_type !== "free_product")), Zipify.Cart.settings = e.representation.settings
      }
      console.log((s = (n = r == null ? void 0 : r.message) != null ? n : e == null ? void 0 : e.error) != null ? s : "Failed to fetch settings"), this.unpublished = !0, this.removeListeners()
    }
    async fetchUserLocation() {
      var r, n;
      let {
        response: t,
        error: e
      } = await b.request(...T.customerLocation);
      if (e) return Zipify.Cart.location = {
        handle: null
      };
      Zipify.Cart.location = (n = (r = t.detected_values) == null ? void 0 : r.country) != null ? n : {
        handle: null
      }
    }
    autoDismissRemovedFreeProducts(t, e) {
      var c;
      if (!((c = t == null ? void 0 : t.items) != null && c.length)) return;
      let r = "_ocu_free_product_tier_id",
        n = u => new Set((u != null ? u : []).reduce((p, l) => {
          var C;
          let f = (C = l.properties) == null ? void 0 : C[r];
          return f != null ? [...p, String(f)] : p
        }, [])),
        s = n(t.items),
        a = n(e == null ? void 0 : e.items),
        o = [...s].filter(u => !a.has(u));
      if (o.length) try {
        let u = JSON.parse(sessionStorage.getItem(S) || "{}");
        o.forEach(p => {
          u[p] = !0
        }), sessionStorage.setItem(S, JSON.stringify(u))
      } catch {}
    }
  };
  var D = class extends Z {
    constructor() {
      super(), this.openCart = this.openCart.bind(this), this.closeCart = this.closeCart.bind(this), this.updateCart = this.updateCart.bind(this), this.updateBubble = this.updateBubble.bind(this), this.setCartState = this.setCartState.bind(this), this.openUpdatedCart = this.openUpdatedCart.bind(this), this.setupGlobalMethods(), this.disableDefaultCartDrawer()
    }
    async openCart({
      preventUpdate: t,
      detail: e,
      triggerElement: r
    } = {}) {
      this.setCartState(!0), this.dispatchEvent(d.cartOpened, {
        triggerElement: r != null ? r : e == null ? void 0 : e.triggerElement,
        preventUpdate: t != null ? t : e == null ? void 0 : e.preventUpdate
      }), !t && !(e != null && e.preventUpdate) && await this.updateCart()
    }
    openUpdatedCart() {
      this.dispatchEvent(d.updateCart), addEventListener(d.cartUpdated, this.openCart, {
        once: !0
      })
    }
    openCartOnAddToCart(t, e) {
      var n, s;
      if (!((s = (n = Zipify.Cart.settings) == null ? void 0 : n.general) != null && s.add_to_cart)) return;
      let r = e.closest(g.addToCartButton);
      this.addLineItem(t), this.openCart({
        preventUpdate: !0,
        triggerElement: r
      }), this.integrations.QuickBuy.payload && !this.cart.item_count && this.dispatchEvent(d.productAdding)
    }
    closeCart(t) {
      this.setCartState(!1), (!t || (t == null ? void 0 : t.detail) === "dispatchCartClosed") && this.dispatchEvent(d.cartClosed)
    }
    toggleCart() {
      this.isOpen ? this.closeCart() : this.openCart()
    }
    setCartState(t = !1) {
      this.isOpen = t
    }
    updateBubble() {
      let t = Zipify.Cart.api.customBubbleHiddenClass,
        e = [g.customBubble, Zipify.Cart.api.customBubble].filter(Boolean).join(", "),
        r = document.querySelectorAll(e);
      if (r.length) return [...r].forEach(o => {
        o.innerText = this.cart.item_count, t && o.classList.toggle(t, !this.cart.item_count)
      });
      let n = document.querySelector(g.bubbleWrapper),
        s = n == null ? void 0 : n.querySelector(g.bubble);
      if (s) return s.innerText = this.cart.item_count;
      let a = `<div class="cart-count-bubble"><span aria-hidden="true">${this.cart.item_count}</span><span class="visually-hidden">${this.cart.item_count} item</span></div>`;
      n == null || n.insertAdjacentHTML("beforeend", a)
    }
    updatePageQuantityCart() {
      let t = document.querySelector(g.quantityCart),
        e = document.querySelector(g.quantityCartWrapper);
      if (!(e && t)) return;
      let r = this.cart.items.reduce((n, s) => s.id !== this.selectedVariantId ? n : n + s.quantity, 0);
      e.classList.toggle("hidden", !r), t.textContent = r
    }
    addLineItem(t) {
      !t || this.integrations.QuickBuy.isActive || (this.cart.items.unshift(t), this.updateBubble())
    }
    addAcceleratedCheckout(t) {
      var a, o, c, u;
      let e = document.querySelector("[data-ocu-cart-additional-buttons-src]");
      if (!(e && t)) return !1;
      let r = e.querySelector("shopify-accelerated-checkout-cart");
      if (r) {
        let p = JSON.parse(r.getAttribute("wallet-configs")),
          l = (a = p == null ? void 0 : p.length) != null ? a : 1;
        return r.setAttribute("data-button-quantity", l), t.append(e), e.hidden = !1, !0
      }
      let n = e.querySelector("[data-shopify-buttoncontainer]"),
        s = n == null ? void 0 : n.childElementCount;
      for (let p of (n == null ? void 0 : n.children) || []) {
        let l = p.querySelector("iframe");
        if (!l) continue;
        let f = (c = (o = l.contentWindow) == null ? void 0 : o.document) == null ? void 0 : c.querySelector('[id*="paypal"]');
        f && (f.setAttribute("style", "position:relative;"), p.setAttribute("data-paypal", ""), l.setAttribute("scrolling", "no"))
      }
      return (u = t.querySelector("[data-ocu-cart-additional-buttons-src]")) == null || u.remove(), n == null || n.setAttribute("data-button-quantity", s), t.append(e), e.hidden = !1, !0
    }
    setCartLoader({
      delay: t = 0
    } = {}) {
      let r = setTimeout(() => this.dispatchEvent(d.productAdding), t);
      return () => clearTimeout(r)
    }
    setProcessing(t = !1) {
      this.processing = t
    }
    async processAddToCart(t, e, r) {
      r.preventDefault(), r.stopPropagation(), this.setProcessing(!0), this.openCartOnAddToCart(t, r.target), this.closeAddToCartModal(), await Zipify.Cart.integrations.GiftWrap.addToCart(), await this.addToCart(e), await this.fetchCart(), this.updateBubble(), this.updatePageQuantityCart(), this.setProcessing(!1)
    }
    setupGlobalMethods() {
      window.OPEN_CART = window.SLIDECART_OPEN = this.openCart, window.CLOSE_CART = window.SLIDECART_CLOSE = this.closeCart, window.UPDATE_CART = window.SLIDECART_UPDATE = this.updateCart
    }
    disableDefaultCartDrawer() {
      let t = document.querySelector("cart-drawer-component"),
        e = document.querySelector("mini-cart");
      t ? (t.open = () => {}, t.showDialog = () => {}) : e && (e.open = () => this.dispatchEvent(d.openCart));
      let r = n => {
        var s;
        (s = window.theme) != null && s[n] && (theme[n].prototype.open = () => {
          this.dispatchEvent(d.openCart)
        })
      };
      setTimeout(() => ["Drawer", "CartDrawer"].forEach(r), 1e3)
    }
    closeAddToCartModal() {
      let t = document.querySelector(g.addToCartModalClose);
      t == null || t.click()
    }
  };
  var I = class extends D {
    constructor() {
      super();
      m(this, "eventsController", new AbortController);
      this.handleAddToCart = this.handleAddToCart.bind(this), this.handleVisibility = this.handleVisibility.bind(this), this.clickListeners = this.clickListeners.bind(this), this.keydownListeners = this.keydownListeners.bind(this), this.handleCartLoaded = this.handleCartLoaded.bind(this), this.addAcceleratedCheckout = this.addAcceleratedCheckout.bind(this), this.removeListeners = this.removeListeners.bind(this), this.listen()
    }
    dispatchEvent(e, r) {
      let n = [e];
      r && n.push({
        detail: r
      }), dispatchEvent(new CustomEvent(...n))
    }
    async handleAddToCart(e) {
      let r = this.preventAddToCart(e),
        s = r instanceof Promise ? await r : r;
      if (this.checkProcessing(e) || s) return;
      let {
        lineItem: a,
        payload: o,
        hasPayload: c
      } = this.prepareAddToCartData(e);
      !c || this.integrations.OCU.preventAddToCart(e) || this.processAddToCart(a, o, e)
    }
    hanldeCartState(e) {
      var n;
      if (this.preventOpenCart(e)) return;
      e.preventDefault(), e.stopPropagation();
      let r = e.target.closest((n = Zipify.Cart.api.customOpenCartButton) != null ? n : g.openCartButton);
      this.isOpen ? this.closeCart() : this.openCart({
        triggerElement: r
      })
    }
    handleCartLoaded() {
      this.isLoaded = !0
    }
    async handleVisibility() {
      document.visibilityState === "visible" && await this.updateCart()
    }
    async clickListeners(e) {
      this.unpublished || (await this.handleAddToCart(e), this.hanldeCartState(e))
    }
    async keydownListeners(e) {
      var n;
      this.unpublished || !(e.target.closest((n = Zipify.Cart.api.customOpenCartButton) != null ? n : g.openCartButton) && e.key === "Enter") || (e.preventDefault(), e.stopPropagation(), this.hanldeCartState(e))
    }
    touchListeners(e) {
      let r, n = u => r = u,
        s = () => n(!1),
        a = () => n(!0),
        o = u => !r && this.clickListeners(u),
        c = {
          capture: !0,
          passive: !1,
          signal: e
        };
      document.addEventListener("touchstart", s, c), document.addEventListener("touchmove", a, c), document.addEventListener("touchend", o, c)
    }
    publicListeners(e) {
      let r = {
        signal: e
      };
      addEventListener(d.openCart, this.openCart, r), addEventListener(d.openUpdatedCart, this.openUpdatedCart, r), addEventListener(d.closeCart, this.closeCart, r), addEventListener(d.updateCart, this.updateCart, r), addEventListener(d.cartLoaded, this.handleCartLoaded, r), addEventListener(d.runtimeError, this.removeListeners, r)
    }
    handlePageShow(e) {
      e.persisted && (this.processing = !1)
    }
    listen() {
      let {
        signal: e
      } = this.eventsController, r = {
        capture: !0,
        signal: e
      };
      this.interceptCartMutations(), this.touchListeners(e), this.publicListeners(e), addEventListener("pageshow", n => this.handlePageShow(n), {
        signal: e
      }), addEventListener("visibilitychange", this.handleVisibility, r), document.addEventListener("click", this.clickListeners, r), document.addEventListener("keydown", this.keydownListeners, r)
    }
    interceptCartMutations() {
      let e = ["/cart/change", "/cart/update", "/cart/clear"],
        r = "_ocu_free_product_tier_id",
        n = c => c && e.some(u => c.includes(u)) && !c.includes("?ocu"),
        s = c => {
          var C, E, y, w;
          let u = (E = (C = Zipify.Cart) == null ? void 0 : C.cart) == null ? void 0 : E.items;
          if (!(u != null && u.length)) return;
          let p = new Set,
            l = new Set;
          for (let v of u) {
            let _ = (y = v.properties) == null ? void 0 : y[r];
            _ != null && p.add(String(_))
          }
          if (!p.size) return;
          for (let v of c != null ? c : []) {
            let _ = (w = v.properties) == null ? void 0 : w[r];
            _ != null && l.add(String(_))
          }
          let f = [...p].filter(v => !l.has(v));
          if (f.length) try {
            let v = JSON.parse(sessionStorage.getItem(S) || "{}");
            f.forEach(_ => {
              v[_] = !0
            }), sessionStorage.setItem(S, JSON.stringify(v))
          } catch {}
        },
        a = window.fetch;
      window.fetch = function(...c) {
        let u = a.apply(this, c);
        return u.then(p => {
          n(p.url) && p.clone().json().then(l => {
            s(l.items), dispatchEvent(new CustomEvent(d.updateCart, {
              detail: {
                cart: l
              }
            }))
          }).catch(() => {})
        }).catch(() => {}), u
      };
      let o = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function(c, u, ...p) {
        return this.addEventListener("load", function() {
          let l = this.responseURL || u;
          if (n(l)) try {
            let f = JSON.parse(this.responseText);
            s(f.items), dispatchEvent(new CustomEvent(d.updateCart, {
              detail: {
                cart: f
              }
            }))
          } catch {}
        }), o.apply(this, arguments)
      }
    }
    removeListeners() {
      this.eventsController.abort()
    }
  };
  var Y;
  Zipify.Cart.instance = (Y = Zipify.Cart.instance) != null ? Y : new I;
  Zipify.Cart.helpers = {
    checkAddToCart: Zipify.Cart.instance.checkAddToCart.bind(Zipify.Cart.instance)
  };
})();