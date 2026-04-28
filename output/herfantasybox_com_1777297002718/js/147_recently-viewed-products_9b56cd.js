(function() {
  "use strict";
  const STORAGE_KEY = "hfb_recently_viewed_products";

  function getRecentlyViewedProducts() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      return console.error("Error reading recently viewed products:", error), []
    }
  }

  function saveRecentlyViewedProducts(products) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    } catch (error) {
      console.error("Error saving recently viewed products:", error)
    }
  }

  function addRecentlyViewedProduct(productHandle) {
    if (!productHandle) return;
    productHandle = String(productHandle);
    let recentProducts = getRecentlyViewedProducts();
    recentProducts = recentProducts.filter(handle => handle !== productHandle), recentProducts.unshift(productHandle), recentProducts.length > 10 && (recentProducts = recentProducts.slice(0, 10)), saveRecentlyViewedProducts(recentProducts)
  }

  function init() {
    if (!window.location.pathname.includes("/products/")) return;
    const pathParts = window.location.pathname.split("/"),
      productsIndex = pathParts.indexOf("products");
    if (productsIndex >= 0 && pathParts.length > productsIndex + 1) {
      let productHandle = pathParts[productsIndex + 1];
      if (productHandle = productHandle.replace(/\/$/, ""), /^\d+$/.test(productHandle)) {
        console.log("Skipping product ID:", productHandle, "- IDs are not supported");
        return
      }
      productHandle && productHandle.length > 0 && (addRecentlyViewedProduct(productHandle), console.log("Recently viewed product added:", productHandle), typeof window.updateRecentlyViewedInCart == "function" && window.updateRecentlyViewedInCart())
    }
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init(), window.RecentlyViewedProducts = {
    getRecentlyViewedProducts,
    addRecentlyViewedProduct
  }
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/recently-viewed-products.js.map?v=183793259709998003291764334561