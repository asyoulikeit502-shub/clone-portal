!(function() {
  if (window.OCUIncart) return;

  window.Zipify = window.Zipify || {};
  window.OCUApi = window.OCUApi || {};
  Zipify.OCU = Zipify.OCU || {
    api: OCUApi
  };
  Zipify.OCU.enabled = true;
})()