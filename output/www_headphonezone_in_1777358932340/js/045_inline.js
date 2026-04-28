var Shopify = Shopify || {};
Shopify.PaymentButton = Shopify.PaymentButton || {
  isStorefrontPortableWallets: !0,
  init: function() {
    window.Shopify.PaymentButton.init = function() {};
    var t = document.createElement("script");
    t.src = "https://www.headphonezone.in/cdn/shopifycloud/portable-wallets/latest/portable-wallets.en.js", t.type = "module", document.head.appendChild(t)
  }
};