'use strict';
(function() {
  if (window.location.search.indexOf('selector_section_mode') > -1) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    window.selector_section_mode = true;
    script.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'back-in-stock.appikon.com/theme-settings/element-selector.js';
    script.type = 'text/javascript';
    head.appendChild(script);
  }
})();