(() => {
  ((o, c, u) => {
    o[c] = o[c] || {}, o[c][u] = o[c][u] || {
      api: {},
      integrations: {}
    }
  })(window, 'Zipify', 'Cart');
  if (Zipify.Cart.snippet) return;

  Zipify.Cart.version = Zipify.Cart.version ?? '2025/11/11';
  Zipify.Cart.assetUrl = 'https://cdn.shopify.com/extensions/019dce47-6bfa-793c-91f3-7a7689e067b9/ocu-in-checkout-933/assets/zipify-cart-drawer.js';
  Zipify.Cart.domain = 'headphone-zone.myshopify.com';
  Zipify.Cart.moneyFormat = '₹ {{amount_no_decimals}}';
  Zipify.Cart.moneyWithCurrencyFormat = '₹ {{amount_no_decimals}}';
  Zipify.Cart.tags = [];
  Zipify.Cart.cart = {
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
  };
  Zipify.Cart.product = null;
  Zipify.Cart.products = null;
  Zipify.Cart.metafileds = ({
    "general": {
      "settings": {
        "app_endpoint": "https:\/\/ocu.zipify.com",
        "proxy_url": "\/apps\/oneclickupsell",
        "sdp": "https:\/\/e7d54b729aaf49ea8b2f80dae22860aa@sentry.zipify.com\/52",
        "inc_sdp": "https:\/\/f14faca962674f149161045845b21b35@sentry.zipify.com\/50",
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
    }
  })?.general?.settings;
  Zipify.Cart.accessibility = {
    close: 'Translation missing: en.accessibility.close',
    discount: 'Translation missing: en.customer.order.discount',
    cartTitle: 'Translation missing: en.sections.cart.title',
    quantityLabel: 'Translation missing: en.sections.cart.headings.quantity',
    remove: (title) => 'Translation missing: en.sections.cart.remove_title'.replace('\{\{ title \}\}', title),
    decrease: (title) => 'Translation missing: en.products.product.quantity.decrease'.replace('\{\{ product \}\}', title),
    increase: (title) => 'Translation missing: en.products.product.quantity.increase'.replace('\{\{ product \}\}', title),
    quantity: (title) => 'Translation missing: en.products.product.quantity.input_label'.replace('\{\{ product \}\}', title),
    cartCount: (count) => 'Translation missing: en.sections.header.cart_count'.replace(/\d+?/, count),
  };

  const loadExtension = () => {
    let e = document.createElement("script");
    e.src = Zipify.Cart.assetUrl, e.defer = !0, document.head.append(e), Zipify.Cart.loaded = !0;
    return e
  };
  const extension = loadExtension();
  extension.onload = () => Zipify.Cart.integrations.init();
})();