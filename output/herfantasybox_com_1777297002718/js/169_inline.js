simplyInsurance.cartModificationCallback = function(changeType) {


  // Sticky Cart & Slide Cart - heysenior
  if (typeof(window.HS_SLIDE_CART_UPDATE) === 'function') {
    window.HS_SLIDE_CART_UPDATE(function() {});
  }

  // Icart upsell
  if (typeof prepareDataForDisplayWidgetByRule !== "undefined" && prepareDataForDisplayWidgetByRule) {
    prepareDataForDisplayWidgetByRule();
  }


  if (typeof(window.SLIDECART_UPDATE) === 'function') {
    window.SLIDECART_UPDATE(function() {});
  }
}
simplyInsurance.mode = 1;
simplyInsurance.cartReload = function(changeType) {
  switch (changeType) {
    case 0: { // insurance added
      simplyInsurance.cartModificationCallback(changeType);
      break;
    }
    case 1: { // insurance removed
      simplyInsurance.cartModificationCallback(changeType);
      break;
    }
  }
}

simplyInsurance.toggleUncheck = function() {
  document.body.dispatchEvent(new Event("si.toggle.uncheck"));
}


window.SLIDECART_UPDATED = function(cart) {
  console.log("test")
  // Fires whenevr slide cart has updated
  try {
    if (simplyInsurance && typeof simplyInsurance !== "undefined")
      simplyInsurance.loadApp();


  } catch (e) {
    console.log(e);
  }
}

// Sticky Cart & Slide Cart - heysenior
window.HS_SLIDE_CART_UPDATED = function(cart) {

  // Runs every time the slider cart is updated.
  try {
    if (simplyInsurance && typeof simplyInsurance !== "undefined")
      simplyInsurance.loadApp();


  } catch (e) {
    console.log(e);
  }
}



document.addEventListener('rebuy:smartcart.show', function(event) {
  console.log('rebuy:smartcart.show event', event.detail);
  window.HS_SLIDE_CART_UPDATED();
});
document.addEventListener('rebuy:smartcart.product-removed', function(event) {
  console.log('rebuy:smartcart.product-removed event', event.detail);
  window.HS_SLIDE_CART_UPDATED();
});