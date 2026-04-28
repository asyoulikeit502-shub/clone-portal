if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  document.getElementById("safari-flasher-pre").innerHTML = '' + '#swym-plugin,#swym-hosted-plugin{display: none;}' + '.swym-button.swym-add-to-wishlist{display: none;}' + '.swym-button.swym-add-to-watchlist{display: none;}' + '#swym-plugin  #swym-notepad, #swym-hosted-plugin  #swym-notepad{opacity: 0; visibility: hidden;}' + '#swym-plugin  #swym-notepad, #swym-plugin  #swym-overlay, #swym-plugin  #swym-notification,' + '#swym-hosted-plugin  #swym-notepad, #swym-hosted-plugin  #swym-overlay, #swym-hosted-plugin  #swym-notification' + '{-webkit-transition: none; transition: none;}' + '';
  window.SwymCallbacks = window.SwymCallbacks || [];
  window.SwymCallbacks.push(function(tracker) {
    tracker.evtLayer.addEventListener(tracker.JSEvents.configLoaded, function() {
      var x = function() {
        SwymUtils.onDOMReady(function() {
          var d = document.createElement("div");
          d.innerHTML = "<style id='safari-flasher-post'>" + "#swym-plugin:not(.swym-ready),#swym-hosted-plugin:not(.swym-ready){display: none;}" + ".swym-button.swym-add-to-wishlist:not(.swym-loaded){display: none;}" + ".swym-button.swym-add-to-watchlist:not(.swym-loaded){display: none;}" + "#swym-plugin.swym-ready  #swym-notepad, #swym-plugin.swym-ready  #swym-overlay, #swym-plugin.swym-ready  #swym-notification," + "#swym-hosted-plugin.swym-ready  #swym-notepad, #swym-hosted-plugin.swym-ready  #swym-overlay, #swym-hosted-plugin.swym-ready  #swym-notification" + "{-webkit-transition: opacity 0.3s, visibility 0.3ms, -webkit-transform 0.3ms !important;-moz-transition: opacity 0.3s, visibility 0.3ms, -moz-transform 0.3ms !important;-ms-transition: opacity 0.3s, visibility 0.3ms, -ms-transform 0.3ms !important;-o-transition: opacity 0.3s, visibility 0.3ms, -o-transform 0.3ms !important;transition: opacity 0.3s, visibility 0.3ms, transform 0.3ms !important;}" + "</style>";
          document.head.appendChild(d);
        });
      };
      setTimeout(x, 10);
    });
  });
}
window.SwymOverrideMoneyFormat = "₹ {{amount_no_decimals}}";