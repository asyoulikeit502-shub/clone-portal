window.robustCart = new RobustCart(
  document.querySelector('.rc90'),
  Shopify.country,
  Shopify.currency,
  '/cart',
  '/cart/add',
  '/cart/change'
);