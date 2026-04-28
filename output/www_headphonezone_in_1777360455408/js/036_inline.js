if (!(HTMLScriptElement.supports && HTMLScriptElement.supports('importmap'))) {
  const importMapPolyfill = document.createElement('script');
  importMapPolyfill.async = true;
  importMapPolyfill.src = "//www.headphonezone.in/cdn/shop/t/516/assets/es-module-shims.min.js?v=179508747897846696141776948164";

  document.head.appendChild(importMapPolyfill);
}