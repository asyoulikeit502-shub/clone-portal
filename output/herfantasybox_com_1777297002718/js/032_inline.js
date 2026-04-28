(function() {
  var isLoaded = false;

  function asyncLoad() {
    if (isLoaded) return;
    isLoaded = true;
    var urls = ["https:\/\/loox.io\/widget\/VJWK7O9ou3\/loox.1654827272493.js?shop=her-fantasy-box.myshopify.com", "https:\/\/config.gorgias.chat\/bundle-loader\/01HY3C9YZYD57PDGK0VS4W0VXB?source=shopify1click\u0026shop=her-fantasy-box.myshopify.com", "https:\/\/storefront.recart.com\/settings\/62bc52bdbafea8619b06b4a9\/settings.js?shop=her-fantasy-box.myshopify.com", "https:\/\/storefront.recart.com\/loader.js?domain=herfantasybox.com\u0026account=62bc52bdbafea8619b06b4a9\u0026hasGMInitParams=1\u0026shop=her-fantasy-box.myshopify.com", "https:\/\/admin.revenuehunt.com\/embed.js?shop=her-fantasy-box.myshopify.com", "https:\/\/static.rechargecdn.com\/assets\/js\/widget.min.js?shop=her-fantasy-box.myshopify.com", "https:\/\/app.electricsms.com\/cart-widget\/widget.min.js?shop=her-fantasy-box.myshopify.com", "https:\/\/api.socialsnowball.io\/js\/referral.js?shop=her-fantasy-box.myshopify.com", "\/\/searchserverapi1.com\/widgets\/shopify\/init.js?a=0R8x3I0f5j\u0026shop=her-fantasy-box.myshopify.com", "https:\/\/media.9gtb.com\/loader.js?g_cvt_id=47ba8fb9-7f94-41b8-9cdd-dccba505635a\u0026shop=her-fantasy-box.myshopify.com", "https:\/\/storage.googleapis.com\/mobile-embed-scripts-prod\/webbridge-sdk\/webbridge.umd.js?shop=her-fantasy-box.myshopify.com"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if (window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();