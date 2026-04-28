document.documentElement.classList.replace('no-js', 'js');

  // This allows to expose several variables to the global scope, to be used in scripts
  window.themeVariables = {
    settings: {
      showPageTransition: false,
      pageType: "index",
      moneyFormat: "₹{{amount}}",
      moneyWithCurrencyFormat: "₹{{amount}}",
      currencyCodeEnabled: false,
      cartType: "drawer"
    },

    strings: {
      addToCartButton: "Add to cart",
      soldOutButton: "Sold out",
      preOrderButton: "Pre-order",
      unavailableButton: "Unavailable",
      addedToCart: "Added to your cart!",
      closeGallery: "Close gallery",
      zoomGallery: "Zoom picture",
      errorGallery: "Image cannot be loaded",
      soldOutBadge: "Sold out",
      discountBadge: "@@ off",
      sku: "SKU:",
      shippingEstimatorNoResults: "Sorry, we do not ship to your address.",
      shippingEstimatorOneResult: "There is one shipping rate for your address:",
      shippingEstimatorMultipleResults: "There are several shipping rates for your address:",
      shippingEstimatorError: "One or more error occurred while retrieving shipping rates:",
      next: "Next",
      previous: "Previous"
    },

    mediaQueries: {
      'sm': 'screen and (min-width: 700px)',
      'md': 'screen and (min-width: 1000px)',
      'lg': 'screen and (min-width: 1150px)',
      'xl': 'screen and (min-width: 1400px)',
      '2xl': 'screen and (min-width: 1600px)',
      'sm-max': 'screen and (max-width: 699px)',
      'md-max': 'screen and (max-width: 999px)',
      'lg-max': 'screen and (max-width: 1149px)',
      'xl-max': 'screen and (max-width: 1399px)',
      '2xl-max': 'screen and (max-width: 1599px)',
      'motion-safe': '(prefers-reduced-motion: no-preference)',
      'motion-reduce': '(prefers-reduced-motion: reduce)',
      'supports-hover': 'screen and (pointer: fine)',
      'supports-touch': 'screen and (hover: none)'
    }
  };