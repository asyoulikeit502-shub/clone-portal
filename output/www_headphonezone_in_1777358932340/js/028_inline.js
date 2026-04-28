// This allows to expose several variables to the global scope, to be used in scripts
window.themeVariables = {
  settings: {
    showPageTransition: null,
    staggerProductsApparition: true,
    reduceDrawerAnimation: false,
    reduceMenuAnimation: false,
    headingApparition: "split_rotation",
    pageType: "index",
    moneyFormat: "₹ {{amount_no_decimals}}",
    moneyWithCurrencyFormat: "₹ {{amount_no_decimals}}",
    currencyCodeEnabled: false,
    cartType: "drawer",
    showDiscount: false,
    discountMode: "saving",
    pageBackground: "#f9f9f9",
    textColor: "#444444"
  },

  strings: {
    accessibilityClose: "Close",
    accessibilityNext: "Next",
    accessibilityPrevious: "Previous",
    closeGallery: "Close gallery",
    zoomGallery: "Zoom",
    errorGallery: "Image cannot be loaded",
    searchNoResults: "No results could be found.",
    addOrderNote: "Add order note",
    editOrderNote: "Edit order note",
    shippingEstimatorNoResults: "Sorry, we do not ship to your address.",
    shippingEstimatorOneResult: "There is one shipping rate for your address:",
    shippingEstimatorMultipleResults: "There are several shipping rates for your address:",
    shippingEstimatorError: "One or more error occurred while retrieving shipping rates:"
  },

  breakpoints: {
    'sm': 'screen and (min-width: 700px)',
    'md': 'screen and (min-width: 1000px)',
    'lg': 'screen and (min-width: 1150px)',
    'xl': 'screen and (min-width: 1400px)',

    'sm-max': 'screen and (max-width: 699px)',
    'md-max': 'screen and (max-width: 999px)',
    'lg-max': 'screen and (max-width: 1149px)',
    'xl-max': 'screen and (max-width: 1399px)'
  }
};

// For detecting native share
document.documentElement.classList.add(`native-share--${navigator.share ? 'enabled' : 'disabled'}`);