! function() {
  if (window.OCUIncart) return;
  const loopReturns = JSON.parse(localStorage.getItem('loop-onstore-data'));
  if (loopReturns && loopReturns.active) return;
  window.OCUIncart = {
    ...(window.OCUIncart || {}),
    version: '2025/11/11',
    cart_items: [],
    subscription_tags: '',
    money_format: '₹ {{amount_no_decimals}}',
    option_selection: '//www.headphonezone.in/cdn/shopifycloud/storefront/assets/themes_support/option_selection-b017cd28.js',
    metafields: {
      main: {

        general: {
          "settings": {
            "app_endpoint": "https://ocu.zipify.com",
            "proxy_url": "/apps/oneclickupsell",
            "sdp": "https://e7d54b729aaf49ea8b2f80dae22860aa@sentry.zipify.com/52",
            "inc_sdp": "https://f14faca962674f149161045845b21b35@sentry.zipify.com/50",
            "popup_locations": {
              "product": true,
              "cart": false,
              "collection": false,
              "index": false,
              "page": false,
              "zp_page": false,
              "zp_index": false,
              "zp_product": false,
              "zp_collection": false
            },
            "popup_settings": {
              "popup_frequency": "accept_or_decline"
            },
            "snippet_source": "extension",
            "cart_drawer_extension": true,
            "cart_drawer_upsell": true,
            "ads_widget": false,
            "features": {
              "ppw": true,
              "cart_drawer": true
            },
            "offer_scripts": {
              "zipify-oneclickupsell-multiple": false,
              "zipify-oneclickupsell-on-page": false,
              "zipify-oneclickupsell-single": true
            }
          },
          "integrations": {
            "skip_cart": "false"
          }
        },

      } ||
      {},
      triggerProducts: '',
      get general() {
        return this.main.general || {};
      },
      get settings() {
        return this.general.settings || {};
      },
      get triggers() {
        return this.general.triggers ? this.general.triggers.pre_checkout : {};
      },
      get proxy_url() {
        return this.settings.proxy_url || '/apps/secure-checkout';
      },
      get scripts() {
        const onPage = 'zipify-oneclickupsell-on-page';
        const scripts = this.general.settings.offer_scripts ?? {};
        const vendor = 'zipify-oneclickupsell-vendor';
        const loaded = Zipify.OCU.api.loaded || {};
        if (Shopify?.designMode && !scripts[onPage]) scripts[onPage] = true;
        const uris = Object.entries(scripts).reduce((acc, [script, enabled]) => (enabled && !script.includes('.js') && !loaded[script] ? [...acc, script] : acc), []);
        return uris.length ? [...uris, vendor] : uris;
      }
    },
    get hasNotOfferInCart() {
      if (!this.cart_items?.length) return true;
      return !this.cart_items.find(function(item) {
        return item && item.properties && (item.properties._ocu_offer_id || item.properties._ocu_product_page_id);
      });
    },
    get hasWidgetOffersInCart() {
      if (!this.cart_items?.length) return true;
      return this.cart_items.find(function(item) {
        return item && item.properties && item.properties._ocu_product_page_id;
      });
    },
    get settings() {
      return this.metafields.settings.popup_settings;
    },
    get proxy_url() {
      return this.metafields.proxy_url;
    },
    get appEndpoint() {
      return this.metafields.settings.app_endpoint;
    },
    get popupLocation() {
      return this.metafields.general.settings.popup_locations;
    },
    get isEmptyCart() {
      return !this.cart_items.length && this.popupLocation.product;
    },
    get permanent_domain() {
      return Zipify.OCU.lqd.permanent_domain;
    },
    get hasProductAddonsWidgetOffers() {
      return !!Object.keys(OCUApi.store.get('productPageWidget')).length;
    },
    get hasWidgetOffers() {
      console.warn('[OCU] Deprecation:`OCUIncart.hasWidgetOffers` is deprecated. Please use `OCUIncart.hasProductAddonsWidgetOffers` instead');
      return this.hasProductAddonsWidgetOffers;
    },
    get triggerProducts() {
      let products = this.metafields.triggerProducts;
      try {
        products = JSON.parse(products);
      } catch {
        products = {}
      }
      const handles = products?.trigger_products?.reduce((acc, obj) => {
        const [key, value] = Object.entries(obj)[0];
        acc[key] = value;
        return acc;
      }, {});
      return {
        ...handles,
        ...this._externalHandles
      };
    },
    _externalHandles: {},
    preventHandle(checkoutButton, addToCartButton) {
      return OCUApi.productLocationOnly && !this.popupLocation.cart && checkoutButton && !addToCartButton;
    }
  };
  Zipify.OCU.lqd = {
    cart: {
      "note": null,
      "attributes": {},
      "original_total_price": 0,
      "total_price": 0,
      "total_discount": 0,
      "total_weight": 0.0,
      "item_count": 0,
      "items": [],
      "requires_shipping": false,
      "currency": "INR",
      "items_subtotal_price": 0,
      "cart_level_discount_applications": [],
      "checkout_charge_amount": 0
    },
    path: '' === 'true' ? 'd56719fefdd75e95ba06caea3d9a3732' : '5965fedc7708e03e1024db4bf2ed5fe6',
    template_name: 'index',
    template_suffix: '',
    shop_currency: 'INR',
    skip_cart: OCUIncart.metafields.general.integrations.skip_cart === 'true',
    skip_cart_only: 'false' === 'true',
    cart_products_json: JSON.parse("[]"),
    cart_collections_json: [],
    cart_variants_json: [],
    customer_id: "",
    customer: {
      id: "",
      email: ''
    },
    customer_tags: [],
    proxy_url: OCUIncart.metafields.general.settings.proxy_url,
    scripts: OCUIncart.metafields.scripts,
    permanent_domain: 'headphone-zone.myshopify.com',
    current_domain: 'www.headphonezone.in',
    disabled_by_subscription_app: false,
    subscription_app_enabled: false,
    subscription_products_json: '',
    subscription_variants_json: '',
    subscription_products_size: 0,
    integrate_with_recharge: '' === 'true',
    product: null || OCUApi.product,
    collectionProducts: null,
    product_tags: [],
    amazon_pay: '' === 'true',
    themePopup: '' === 'true' || '' === 'true',
    root_url: '/',
    themeSkipCart: '' === 'redirect_checkout' || '' === 'true' || '' === 'skip_cart',
    get upsell_cart_include_subscription_upsells() {
      var self = this;
      var hasSubscription = this.product_tags.reduce(function(acc, tag) {
        return acc || ~self.postcheckout_tags.indexOf(tag.toLowerCase());
      }, false);
      return hasSubscription;
    },
    get isThemePopupTag() {
      return this.product && this.product.tags.some(function(tag) {
        return /cross-sell-\d/.test(tag);
      });
    },
    get isSkipCartPage() {
      return /index|collection|product/.test(this.template_name);
    },
    get isSkipCartCondition() {
      return (this.skip_cart || this.themeSkipCart) && this.isSkipCartPage && !this.isThemePopupTag;
    },
    get checkoutUrl() {
      return (this.root_url === '/' ? '' : this.root_url) + '/checkout';
    },
    get isPopupTriggerPage() {
      const popupLocation = {
        ...OCUIncart.popupLocation
      };
      if (OCUApi.enableCollectionLocation) {
        popupLocation.collection = popupLocation.product;
      }
      if (OCUApi.enableCustomPages) {
        const pageName = OCUApi.customPageName || 'page';
        popupLocation[pageName] = (popupLocation[pageName] || popupLocation.product) && OCUApi.enableCustomPages.includes(location.pathname);
      }
      const pages = Zipify.OCU.api.context.integrations.zipifyPages;
      if (pages.isZipifyEntity() && !pages.isAcceptableZPLocation()) {
        return null;
      } else if (pages.isAcceptableZPLocation()) {
        return popupLocation[pages.zpLocation()];
      }
      return popupLocation[Zipify.OCU.lqd.template_name];
    }
  };
  Zipify.OCU.lqd.cart_products_json = Zipify.OCU.lqd.cart_products_json.filter(function(item) {
    return item.handle && !item.error;
  });
  const lqd = Zipify.OCU.lqd;
  if (Zipify.OCU.loadScriptTags) Zipify.OCU.loadScriptTags();

  function _createForOfIteratorHelper(e, n) {
    var t, i, l, o, c = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (c) return i = !(t = !0), {
      s: function() {
        c = c.call(e)
      },
      n: function() {
        var e = c.next();
        return t = e.done, e
      },
      e: function(e) {
        i = !0, l = e
      },
      f: function() {
        try {
          t || null == c.return || c.return()
        } finally {
          if (i) throw l
        }
      }
    };
    if (Array.isArray(e) || (c = _unsupportedIterableToArray(e)) || n && e && "number" == typeof e.length) return c && (e = c), o = 0, {
      s: n = function() {},
      n: function() {
        return o >= e.length ? {
          done: !0
        } : {
          done: !1,
          value: e[o++]
        }
      },
      e: function(e) {
        throw e
      },
      f: n
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }

  function _unsupportedIterableToArray(e, n) {
    var t;
    if (e) return "string" == typeof e ? _arrayLikeToArray(e, n) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(e, n) : void 0
  }

  function _arrayLikeToArray(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
    return i
  }! function() {
    Zipify.OCU.cdn = "https://d1u9wuqimc88kc.cloudfront.net", Zipify.OCU.api.loaded ||= {};
    var e, n = {
        "zipify-oneclickupsell-on-page.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-on-page.c91be1bdedbd96a3.js",
        "zipify-oneclickupsell-single-offer.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-single-offer.f0a91e368a9dc12f.js",
        "zipify-oneclickupsell-single.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-single.affcd198cb0f8d27.js",
        "zipify-oneclickupsell-vendor.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-vendor.ccb3be90223958d0.js",
        "zipify-oneclickupsell-multiple.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-multiple.4f8f0ba16e9da682.js",
        "zipify-oneclickupsell-multiple-offer.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-multiple-offer.461bea4adcc4b4af.js",
        "zipify-oneclickupsell-on-page.css": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-on-page.881c18e2cf9a6c92.css",
        "zipify-oneclickupsell-single.css": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-single.f6edb1c56a99aab7.css",
        "zipify-oneclickupsell-single-offer.css": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-single-offer.4848758ee5762be7.css",
        "zipify-oneclickupsell-multiple.css": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-multiple.0cbdc36767834301.css",
        "zipify-oneclickupsell-multiple-offer.css": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-multiple-offer.e56395214fcdad48.css",
        "zipify-oneclickupsell-editor.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-editor.96fb5f63bd8efaeb.js",
        "zipify-oneclickupsell-clear-cart.js": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-clear-cart.0abc074cfa5b90de.js",
        "zipify-oneclickupsell-editor.css": "https://d1npnstlfekkfz.cloudfront.net/zipify-oneclickupsell-editor.7ed23b017f830ef7.css"
      },
      o = !1,
      t = {
        "zipify-oneclickupsell-extension.js": 'https://cdn.shopify.com/extensions/019dce47-6bfa-793c-91f3-7a7689e067b9/ocu-in-checkout-933/assets/zipify-oneclickupsell-extension.js'
      },
      c = {
        "zipify-oneclickupsell-on-page.js": function() {
          return Zipify.OCU.__initProductPageWidgets()
        }
      };

    function r(e, n) {
      var t;
      Zipify.OCU.api.loaded[e] ? c[e] && c[e]() : (t = document.createElement("script"), Zipify.OCU.api.loaded[e] = !0, t.src = n, t.defer = !0, document.head.append(t))
    }

    function f(e) {
      return n[e] || (console.warn("[OCU Extension] Missing resource in manifest: ".concat(e)), null)
    }

    function s(e) {
      return e.includes("vendor")
    }

    function p(e) {
      var n, i, l, o, c, e = "".concat(e, ".css");
      s(e) || (n = f(e)) && (i = e, l = n, Zipify.OCU.api.loaded[i] || (o = document.createElement("link"), c = !("undefined" != typeof InstallTrigger), function e() {
        var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3,
          t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100;
        Zipify.OCU.api.loaded[i] || (o.relList?.supports?.("prefetch") && c ? (o.as = "style", o.rel = "prefetch", o.onload = function() {
          o.rel = "stylesheet", Zipify.OCU.api.loaded[i] = !0
        }) : (o.rel = "stylesheet", o.onload = function() {
          return Zipify.OCU.api.loaded[i] = !0
        }), o.onerror = function() {
          0 < n ? setTimeout(function() {
            return e(--n)
          }, t) : console.error("Failed to load ".concat(l, " after multiple retries"))
        }, o.href = l, document.head.append(o))
      }()))
    }

    function i() {
      var e, n, t, i = _createForOfIteratorHelper(Zipify.OCU.lqd.scripts);
      try {
        for (i.s(); !(e = i.n()).done;) {
          var l = e.value;
          t = void 0, n = "".concat(n = l, ".js"), Zipify.OCU.api.loaded[n] ? c[n] && c[n]() : o && s(n) || (t = f(n)) && r(n, t), o || p(l)
        }
      } catch (e) {
        i.e(e)
      } finally {
        i.f()
      }
    }
    for (e in t) r(e, t[e]);
    OCUApi.loadScriptsOnWindowLoad ? window.addEventListener("load", i) : i()
  }();
}();