window.swymLandingURL = document.URL;
window.swymCart = {
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
window.swymPageLoad = function() {
  window.SwymProductVariants = window.SwymProductVariants || {};
  window.SwymHasCartItems = 0 > 0;
  window.SwymPageData = {}, window.SwymProductInfo = {};
  var unknown = {
    et: 0
  };
  window.SwymPageData = unknown;

  window.SwymPageData.uri = window.swymLandingURL;
};
if (window.selectCallback) {
  (function() {
    var originalSelectCallback = window.selectCallback;
    window.selectCallback = function(variant) {
      originalSelectCallback.apply(this, arguments);
      try {
        if (window.triggerSwymVariantEvent) {
          window.triggerSwymVariantEvent(variant.id);
        }
      } catch (err) {
        console.warn("Swym selectCallback", err);
      }
    };
  })();
}
window.swymCustomerId = null;
window.swymCustomerExtraCheck =
  null;
var swappName = ("Wishlist" || "Wishlist");
var swymJSObject = {
  pid: "5qnKEJA6TsC5OOLU30SZj47FAKfb+\/4OSOkfx+CWcL0=",
  interface: "/apps/swym" + swappName + "/interfaces/interfaceStore.php?appname=" + swappName
};
window.swymJSShopifyLoad = function() {
  if (window.swymPageLoad) swymPageLoad();
  if (!window._swat) {
    (function(s, w, r, e, l, a, y) {
      r['SwymRetailerConfig'] = s;
      r[s] = r[s] || function(k, v) {
        r[s][k] = v;
      };
    })('_swrc', '', window);
    _swrc('RetailerId', swymJSObject.pid);
    _swrc('Callback', function() {
      initSwymShopify();
    });
  } else if (window._swat.postLoader) {
    _swrc = window._swat.postLoader;
    _swrc('RetailerId', swymJSObject.pid);
    _swrc('Callback', function() {
      initSwymShopify();
    });
  } else {
    initSwymShopify();
  }
}
if (!window._SwymPreventAutoLoad) {
  swymJSShopifyLoad();
}