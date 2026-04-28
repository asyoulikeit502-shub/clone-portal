document.addEventListener("DOMContentLoaded", function() {
  const shopByCategoryItems = document.querySelectorAll(".header-nav-item.header-nav-item--has-sub");
  [0, 4].forEach(idx => {
    const shopByCategoryCont = shopByCategoryItems[idx];
    if (shopByCategoryCont === void 0) return;
    shopByCategoryCont.classList.add("menu-shop-by-category");
    const categories = Array.from(shopByCategoryCont.querySelectorAll(".header-sub-nav-item a"));
    categories.forEach(category => {
      const categoryImg = document.createElement("img");
      categoryImg.width = 40, categoryImg.height = 40;
      const categoryIndex = categories.indexOf(category);
      categoryImg.classList.add("category-icon"), categoryImg.src = categoryIconMap[categoryIndex], categoryImg.alt = category.textContent.trim(), category.prepend(categoryImg)
    })
  })
});
//# sourceMappingURL=/cdn/shop/t/260/assets/category-icons.js.map?v=69223973440749424051758813385