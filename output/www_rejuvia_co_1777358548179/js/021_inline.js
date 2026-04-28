(function() {
  var isLoaded = false;

  function asyncLoad() {
    if (isLoaded) return;
    isLoaded = true;
    var urls = ["https:\/\/cdn.richpanel.com\/js\/richpanel_shopify_script.js?appClientId=rejuvia4331\u0026tenantId=rejuvia433\u0026shop=rejuviamedical.myshopify.com\u0026shop=rejuviamedical.myshopify.com", "https:\/\/pps.triplewhale.systems\/main.js?shop=rejuviamedical.myshopify.com"];
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