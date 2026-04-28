(function() {
  const shopStore = "her-fantasy-box.myshopify.com";
  if (!shopStore || !shopStore.length) return;

  const environment = 'production'; // local, staging, production;

  const srcUrls = {
    local: 'http://localhost:3005/dist/tc-plugins.es.js',
    staging: 'https://unpkg.com/tapcart-capture-kit@staging/dist/tc-plugins.es.js',
    production: 'https://unpkg.com/tapcart-capture-kit@production/dist/tc-plugins.es.js',
  };
  const srcUrl = srcUrls[environment] || srcUrls.production;

  window['tapcartParams'] = {
    shopStore,
    environment
  };

  function loadCaptureKit() {
    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.src = srcUrl;
    document.head.appendChild(moduleScript);

    moduleScript.onerror = function() {
      console.error('Capture kit failed to load.');
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCaptureKit);
  } else {
    loadCaptureKit();
  }
})();