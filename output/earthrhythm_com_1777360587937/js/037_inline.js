(function() {
  var isLoaded = false;
  function asyncLoad() {
    if (isLoaded) return;
    isLoaded = true;
    var urls = ["\/\/social-login.oxiapps.com\/api\/init?vt=928350\u0026shop=earth-rhythm-v1.myshopify.com","https:\/\/cdn.shopify.com\/s\/files\/1\/0597\/3783\/3627\/files\/tptinstall.min.js?v=1718591634\u0026t=tapita-seo-script-tags\u0026shop=earth-rhythm-v1.myshopify.com"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if(window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();