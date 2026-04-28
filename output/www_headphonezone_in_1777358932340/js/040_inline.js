(function() {
  var isLoaded = false;

  function asyncLoad() {
    if (isLoaded) return;
    isLoaded = true;
    var urls = ["https:\/\/design-packs.herokuapp.com\/design_packs_file.js?shop=headphone-zone.myshopify.com", "https:\/\/design-packs.herokuapp.com\/nonregistered.js?shop=headphone-zone.myshopify.com", "https:\/\/d23dclunsivw3h.cloudfront.net\/redirect-app.js?shop=headphone-zone.myshopify.com", "https:\/\/shopiapps.in\/compare_product\/cmp_widget\/sp_cmp_js.php?shop=headphone-zone.myshopify.com", "https:\/\/admin.revenuehunt.com\/embed.js?shop=headphone-zone.myshopify.com", "https:\/\/cdn.hextom.com\/js\/eventpromotionbar.js?shop=headphone-zone.myshopify.com"];
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