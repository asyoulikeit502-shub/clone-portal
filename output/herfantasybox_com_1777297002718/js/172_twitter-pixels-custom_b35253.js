var rootlinkTwitterPixel = "https://apps3.omegatheme.com/twitter-multi-pixels";
shop = Shopify.shop;
var pageURL = window.location.href,
  currency = Shopify.currency.active,
  cart_url = "//" + window.location.hostname + "/cart.json",
  itemInCart, otElementButtonAddToCartTwitter = "#teeAtcButton,#new-form-atc,.ProductForm__AddToCart, .product-form__add-button,.single_add_to_cart_button,#AddToCartForm button,.product__form button.add-to-cart, #AddToCart-product-template,.product-form__cart-submit,[name^='add']",
  otElementButtonCheckoutTwitter = 'form[action^="/checkout"] :submit[name^="checkout"],form[action^="/checkout"] .checkout-button,.checkout_btn,.OTCheckout,[name^="checkout"],form[action^="/cart"] :submit[name^="checkout"],form[action^="/cart"] .checkout-button,#cart .action_button.right, #mu-checkout-button, .upcart-checkout-button';
window.arrayCheck = [], window.ot_email = "", localStorage.getItem("ot_email") !== null && (window.ot_email = localStorage.getItem("ot_email")), (function(e, t, n, s, u, a) {
  e.ottwitter = function() {
    if (e.twq || (s = e.twq = function() {
        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments)
      }, s.version = "1.1.0", s.queue = [], u = t.createElement(n), u.async = !0, u.src = "//static.ads-twitter.com/uwt.js", a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a)), arguments.length > 0) {
      var g, p, c;
      if (typeof arguments[0] == "string" && (g = arguments[0]), typeof arguments[1] == "string" && (p = arguments[1]), typeof arguments[2] == "object" ? c = arguments[2] : c = {}, typeof g == "string" && g.replace(/\s+/gi, "") != "" && typeof p == "string" && p.replace(/\s+/gi, "")) switch (p) {
        case "Base":
          twq("config", g);
          break;
        case "AddToCart":
          twq("event", g, c);
          break;
        case "InitiateCheckout":
          twq("event", g, c);
          break;
        case "PageView":
        case "ViewContent":
        case "Search":
        case "AddPaymentInfo":
        case "Lead":
        case "CompleteRegistration":
        case "Purchase":
        case "AddToWishlist":
          setTimeout(() => {
            twq("event", g, {
              email_address: window.ot_email,
              ...c
            })
          }, 1e3);
          break;
        default:
          return
      }
    }
  }
})(window, document, "script"), typeof $ > "u" ? (function(e, s) {
  e.src = s, e.onload = function() {
    $ = jQuery.noConflict(), typeof window.otCheckExistFileTwitter > "u" && (otTwitterPixelInit($), window.otCheckExistFileTwitter = !1)
  }, document.head.appendChild(e)
})(document.createElement("script"), "https://cdn.shopify.com/s/files/1/0559/8792/9227/files/jquery-3.6.3.min.js") : typeof window.otCheckExistFileTwitter > "u" && (otTwitterPixelInit($), window.otCheckExistFileTwitter = !1);
async function otTwitterPixelInit($2) {
  if (localStorage.getItem("ot_email") == null) {
    var email = await sha256("");
    window.ot_email = email, localStorage.setItem("ot_email", email)
  }
  let checkExpireApp = await ottwitterPixelCheckExpireApp($2, rootlinkTwitterPixel, shop);
  checkExpireApp.checkExpire == !1 && checkExpireApp.enableApp == "1" && otMultiTwitterPixel($2)
}
async function otMultiTwitterPixel($2) {
  if (typeof arrayTwitterPixelTrack < "u" && arrayTwitterPixelTrack.length > 0) {
    if (otGetBasePixel(arrayTwitterPixelTrack), getArrayPixelForEvent("Page view (formerly site visit)").forEach(function(element, index) {
        ottwitter(`${element}`, "PageView")
      }), pageURL.indexOf("/products/") > -1) {
      if (pageURL.indexOf("?") > -1) {
        var product_url = pageURL.split("?");
        product_url = product_url[0] + ".json"
      } else var product_url = pageURL + ".json";
      var product = await otGetInfoProductByLinkTwitter(product_url, $2);
      product.title.indexOf("'") > -1 && (product.title = product.title.replace(/'/g, "")), getArrayPixelForEvent("Content view").forEach(function(element, index) {
        ottwitter(`${element}`, "ViewContent", {
          value: product.variants[0].price,
          currency,
          contents: [{
            content_id: product.id,
            content_type: "product",
            content_name: product.title,
            content_price: product.variants[0].price,
            num_items: 1,
            content_group_id: product.variants[0].id
          }]
        })
      })
    }
    pageURL.indexOf("/cart") > -1 && getItemOnCartPage($2, function(cart) {
      itemInCart = cart;
      let items = cart.items,
        lastItem = items[items.length - 1],
        totalItemCart = localStorage.getItem("OTPXTWITTER"),
        checkAddedOnProductPage = localStorage.getItem("OTPXTWITTERADDED"),
        contents2 = [{
          content_id: lastItem.product_id,
          content_type: "product",
          content_name: lastItem.product_title,
          content_price: parseInt(lastItem.price) / 100,
          num_items: lastItem.quantity,
          content_group_id: lastItem.product_id
        }];
      (totalItemCart != cart.item_count || totalItemCart == null) && checkAddedOnProductPage != 1 && (localStorage.setItem("OTPXTWITTERADDED", 0), localStorage.setItem("OTPXTWITTER", cart.item_count), getArrayPixelForEvent("Add to cart").forEach(function(element, index) {
        ottwitter(`${element}`, "AddToCart", {
          value: parseInt(cart.total_price) / 100,
          currency,
          contents: contents2
        })
      }))
    }), $2(otElementButtonAddToCartTwitter).click(function(e) {
      $2.ajax({
        type: "GET",
        url: "/cart.js",
        dataType: "json"
      }).done(cart => {
        if (localStorage.setItem("OTPXTWITTERADDED", 1), cart.items.length > 0) {
          let lastItem = cart.items[0],
            items = cart.items,
            contents2 = [{
              content_id: lastItem.product_id,
              content_type: "product",
              content_name: lastItem.product_title,
              content_price: parseInt(lastItem.price) / 100,
              num_items: lastItem.quantity,
              content_group_id: lastItem.product_id
            }];
          getArrayPixelForEvent("Add to cart").forEach(function(element, index) {
            ottwitter(`${element}`, "AddToCart", {
              value: parseInt(cart.total_price) / 100,
              currency,
              contents: contents2
            })
          })
        } else typeof __st.rid < "u" && typeof meta.product.variants[0].id < "u" ? getArrayPixelForEvent("Add to cart").forEach(function(element, index) {
          ottwitter(`${element}`, "AddToCart", {
            value: parseInt(meta.product.variants[0].price) / 100,
            currency,
            contents: [{
              content_id: __st.rid,
              content_type: "product",
              content_name: meta.product.variants[0].name,
              content_price: parseInt(meta.product.variants[0].price) / 100,
              num_items: 1,
              content_group_id: __st.rid
            }]
          })
        }) : setTimeout(() => {
          omegaTwitterCallbackAtc()
        }, 1e3)
      })
    }), $2("body").on("click", otElementButtonCheckoutTwitter, function(e) {
      if (typeof itemInCart < "u" && typeof itemInCart.items < "u") {
        var cart = itemInCart;
        if (cart.items.length > 0) {
          let items = cart.items,
            content = [];
          items.forEach(e2 => {
            content.push({
              content_id: e2.product_id,
              content_type: "product",
              content_name: e2.product_title,
              content_price: parseInt(e2.price) / 100,
              num_items: e2.quantity,
              content_group_id: e2.product_id
            })
          }), getArrayPixelForEvent("Checkout Initiated").forEach(function(element, index) {
            ottwitter(`${element}`, "InitiateCheckout", {
              value: parseInt(cart.total_price) / 100,
              currency,
              contents: content
            })
          })
        }
      } else $2.ajax({
        type: "GET",
        url: "/cart.js",
        dataType: "json"
      }).done(cart2 => {
        if (cart2.items.length > 0) {
          let items = cart2.items,
            content = [];
          items.forEach(e2 => {
            content.push({
              content_id: e2.product_id,
              content_type: "product",
              content_name: e2.product_title,
              content_price: parseInt(e2.price) / 100,
              num_items: e2.quantity,
              content_group_id: e2.product_id
            })
          }), getArrayPixelForEvent("Checkout Initiated").forEach(function(element, index) {
            ottwitter(`${element}`, "InitiateCheckout", {
              value: parseInt(cart2.total_price) / 100,
              currency,
              contents: content
            })
          })
        }
      }).fail(function(jqXHR, textStatus) {})
    })
  }
  if (Shopify.Checkout && Shopify.Checkout.page.includes("thank_you")) {
    var contents = [],
      quantity = 0;
    Shopify.checkout.line_items.forEach(function(item, index) {
      if (quantity = quantity + item.quantity, item.variant_title != "") var prod_name = item.title + " - " + item.variant_title;
      else var prod_name = item.title;
      contents.push({
        content_id: `${item.product_id}`,
        content_name: prod_name,
        content_price: item.price,
        num_items: quantity,
        content_type: "product_group"
      })
    }), addEventPurchaseInThankYouPageTwitter($2, contents)
  }
}

function otGetBasePixel(pixels) {
  let listBasePixel = [];
  pixels.forEach(pixel => {
    pixel.split("-")[1] != null && listBasePixel.push(pixel.split("-")[1])
  }), listBasePixel = [...new Set(listBasePixel)], listBasePixel.forEach(base => {
    ottwitter(`${base}`, "Base", {})
  })
}

function omegaTwitterCallbackAtc() {
  $.ajax({
    type: "GET",
    url: "/cart.js",
    dataType: "json"
  }).done(cart => {
    if (localStorage.setItem("OTPXTWITTERADDED", 1), cart.items.length > 0) {
      let lastItem = cart.items[0],
        items = cart.items,
        contents = [{
          content_id: lastItem.product_id,
          content_type: "product",
          content_name: lastItem.product_title,
          content_price: parseInt(lastItem.price) / 100,
          num_items: lastItem.quantity,
          content_group_id: lastItem.product_id
        }];
      getArrayPixelForEvent("Add to cart").forEach(function(element, index) {
        ottwitter(`${element}`, "AddToCart", {
          value: parseInt(cart.total_price) / 100,
          currency,
          contents
        })
      })
    }
  })
}

function getItemOnCartPage($2, callback) {
  $2.ajax({
    type: "GET",
    url: "/cart.js",
    dataType: "json"
  }).done(cart => {
    typeof callback == "function" && callback(cart)
  })
}

function getArrayPixelForEvent(event, arrAllPixel = arrayTwitterPixelTrack, list = listTwitterPixelByType) {
  let arrTrack = [];
  return list[event] != null && arrAllPixel.forEach(e => list[event].includes(e) && arrTrack.push(e)), arrTrack
}

function isUSePixelFromShopifyTwitter() {
  typeof trekkie.integrations[2].options.pixelIds < "u" && $.ajax({
    type: "GET",
    data: {
      action: "checkUsePixelFromShopifyTwitter",
      shop
    },
    url: `${rootlinkTwitterPixel}/client/twitter-pixel.php`,
    dataType: "json"
  }).done(result => {})
}

function ottwitterPixelCheckExpireApp($2, rootlinkTwitterPixel2, shop2) {
  "use strict";
  return new Promise(resolve => {
    $2.ajax({
      type: "GET",
      data: {
        action: "checkExpire",
        shop: shop2
      },
      url: `${rootlinkTwitterPixel2}/client/twitter-pixel.php`,
      dataType: "json"
    }).done(result => {
      typeof result == "string" && (result = JSON.parse(result)), resolve(result)
    })
  })
}
async function addEventPurchaseInThankYouPageTwitter($2, contents) {
  var pixels = await otgetAllPixelTwitter($2, contents);
  let arrPV = pixels["Page view (formerly site visit)"] != null ? pixels["Page view (formerly site visit)"] : [],
    arrPur = pixels.Purchase != null ? pixels.Purchase : [],
    listBasePixel = [];
  [...arrPV, ...arrPur].forEach(pixel => {
    pixel.split("-")[1] != null && listBasePixel.push(pixel.split("-")[1])
  }), listBasePixel = [...new Set(listBasePixel)], listBasePixel.forEach(base => {
    ottwitter(`${base}`, "Base", {})
  });
  var email = typeof Shopify.checkout.email < "u" ? Shopify.checkout.email : "";
  email = await sha256(email), localStorage.setItem("email", email), arrPV.forEach(function(element, index) {
    ottwitter(`${element}`, "PageView", {
      email_address: email
    })
  }), arrPur.forEach(function(element, index) {
    ottwitter(`${element}`, "Purchase", {
      currency,
      email_address: email,
      value: Number(Shopify.checkout.total_price),
      contents
    })
  })
}

function otgetAllPixelTwitter($2, contents) {
  return productIds = contents[0].content_id, new Promise(resolve => {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
      this.readyState == 4 && this.status == 200 && resolve(JSON.parse(xhttp.responseText))
    }, xhttp.open("GET", `${rootlinkTwitterPixel}/client/twitter-pixel.php?shop=${shop}&action=getAllPixel&productIds=${productIds}`, !0), xhttp.send()
  })
}

function otGetInfoProductByLinkTwitter(URL, $2) {
  return new Promise(resolve => {
    $2.ajax({
      url: URL,
      dataType: "jsonp",
      header: {
        "Access-Control-Allow-Origin": "*"
      },
      success: function(responseData) {
        typeof responseData == "string" && (responseData = JSON.parse(responseData)), resolve(responseData.product)
      }
    })
  })
}
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message),
    hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("")
}
//# sourceMappingURL=/cdn/shop/t/260/assets/twitter-pixels-custom.js.map?v=179592964253100687291749762314