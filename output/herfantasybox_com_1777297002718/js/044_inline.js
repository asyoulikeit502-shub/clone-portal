var checkoutEventFire = false;
const otInterval = setInterval(myTimer, 1000);

function myTimer() {
  if (document.querySelector('button[name="checkout"]')) {
    otStopFunction();
    const targetNode = document.querySelector('button[name="checkout"]');
    const config = {
      childList: true,
      subtree: true,
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true,
    };
    const callback = function(mutationsList, observer) {
      console.log("mutationsList: ", mutationsList)
      for (let mutation of mutationsList) {
        console.log("Mutation: ", mutation.type);
        if (mutation.type === "childList") {
          checkoutEventFire = true;
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
}

window.onbeforeunload = function(event) {
  $.ajax({
    type: "GET",
    url: "/cart.js",
    dataType: "json",
  }).done((cart) => {
    console.log("checkoutEventFire: ", checkoutEventFire)
    if (cart.items.length > 0 && checkoutEventFire) {
      checkoutEventFire = false;
      // Track code IC here
      let items = cart.items;
      let content = [];
      items.forEach((e) => {
        content.push({
          content_id: e["product_id"],
          content_type: "product",
          content_name: e["product_title"],
          content_price: parseInt(e["price"]) / 100,
          num_items: e["quantity"],
          content_group_id: e["product_id"],
        });
      });
      getArrayPixelForEvent("Checkout Initiated").forEach(function(
        element,
        index
      ) {
        ottwitter(`${element}`, "InitiateCheckout", {
          value: parseInt(cart.total_price) / 100,
          currency: currency,
          contents: content,
        });
      });
    }
  });
};

function otStopFunction() {
  clearInterval(otInterval);
}