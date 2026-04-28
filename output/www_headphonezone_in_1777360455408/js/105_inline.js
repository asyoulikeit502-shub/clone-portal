(function() {
  function postDomLoad() {
    var element = document.querySelector('script#swym-snippet:not([type="text"])');
    if (!element) {
      var script = document.querySelector('script#swym-snippet[type="text"]');
      if (script) {
        script.type = 'text/javascript';
        new Function(script.textContent)();
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', postDomLoad);
  } else {
    postDomLoad();
  }
})();