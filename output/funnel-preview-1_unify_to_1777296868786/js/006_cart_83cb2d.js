/***************************THE CART ERROR HANDLER SECTION ***************************/
/*
 * Create an object type CartException
 */
function CartException() {}
/*
 * Make the exception convert to a pretty string when used as a string 
 * (e.g. by the error console)
 */
CartException.prototype.toString = function(message, showAs, type, code) {
  this.showAs = showAs || 'console';
  this.message = message || 'Unknown error.';
  this.type = type || 'Cart Exception';
  this.code = code || 'Null'
  var e = this.type + ': "' + this.message + '" (Error Code: ' + this.code + ")";
  if ("" == this.showAs) return this.type + ': "' + this.message + '" (Error Code: ' + this.code + ")";
  if ("alert" == this.showAs) return alert(this.message + "\n"), "Cart Error: " + e;
  if ("console" == this.showAs) return e;
  if ("modal" == this.showAs) return this.showErrorModal();
};
/*
 * Show cart exception on modal
 */
CartException.prototype.showErrorModal = function(type) {
  $(".error_handler_overlay").removeClass('hide').addClass('show');
  //Switch type of content
  if (type != undefined && type == 'iframe') {
    $(".error_handler_body_content_iframe").removeClass('hide').addClass('show');
    $(".error_handler_body_content_error").removeClass('show').addClass('hide');
  } else {
    $(".error_handler_body_content_iframe").removeClass('show').addClass('hide');
    $(".error_handler_body_content_error").removeClass('hide').addClass('show');
  }
  //add noscroll to body
  var bodyElement = document.querySelector('body');
  bodyElement.className += " noscroll";
  //iOS Scroll fix
  var is_iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (is_iOS) {
    var modalElements = document.querySelectorAll('.error_handler_overlay .error_handler_body .error_handler_body_content');
    var len = modalElements.length;
    for (var i = 0; i < len; i++) {
      var elem = modalElements[i];
      if (elem == undefined) continue;
      if (elem.className.indexOf("ios_scroll") < 0) {
        elem.className += " ios_scroll fullheight";
      }
    }
  }
}
/*************************** THE PRODUCT STORAGE SECTION ***************************/
/*
 * The store class
 */
function Store() {
  this.step = getPackageBlockAttrByName('stepName') || 'step1';
  this.products = [];
  this.splitCharges = [];
  this.uni_products = window.uni_products || {};
  var packageBlockStore = getHtmlElementDataStore('uni-product-store');
  // Create a new Product object
  this.products = overWriteObject(UniConfig['productStore'][this.step]['mainProducts'], this.uni_products['meta'], this.uni_products['item'], packageBlockStore);
  this.splitCharges = overWriteObject(UniConfig['productStore'][this.step]['splitCharges'], [], this.uni_products['splitCharges'], packageBlockStore);
  this.insuranceProvider = UniConfig['productStore'][this.step]['insuranceProvider'];
}
/*
 * Get product(s) from store
 */
Store.prototype.getProduct = function(productId) {
  try {
    if (isNaN(productId)) {
      productId = productId.indexOf('uni_') == 0 ? productId.substr(4) : productId;
    }
    for (var a = 0; a < this.products.length; a++)
      if (this.products[a].id == productId) return this.products[a];
  } catch (e) {
    throw new CartException().toString("No product found!");
  }
};
/*
 * The product class: 
 */
function Product(a) {
  this.id = parseInt(a.id);
  this.name = a.name;
  this.img = a.img;
  this.thumbnail = a.thumbnail;
  this.price = parseFloat(a.price).toFixed(2);
  this.qty = parseInt(a.qty) || 1;
  this.maxQty = parseInt(a.maxQty) || 1;
  this.type = a.type || "trial";
  //[regular, trial]
  this.shippingPrice = parseFloat(a.shippingPrice).toFixed(2) || 0;
  this.subTotal = (this.qty * parseFloat(a.price) + parseFloat(a.shippingPrice)).toFixed(2);
  this.description = a.description || "";
  this.meta = a.meta || ""
};
/***************************THE CART SECTION ***************************/
/*  cart: Shopping cart class
    params:
        cartName <string> : localStorage cart name
        expiry   <number> : localStorage cart expiry time in minute(s) 
    returns:
        <object> : new Cart object
 */
function Cart(cartName, expiry) {
  this.cartName = cartName || "cart";
  this.clearCart = false;
  this.items = [];
  this.expiry = isNaN(expiry) ? 60 : Number(expiry);
  // Check already stored cart object's validity
  (localStorage.getItem(this.cartName + "_expiry") < (new Date).getTime()) && this.clearItems();
  // load items from localStorage when initializing
  this.loadItems();
  this.updateExpiry();
  // Save items to local store when unloading
  var self = this;
  $(window).unload(function() {
    self.clearCart && self.clearItems();
    self.saveItems();
    self.clearCart = false;
  })
};
/*
 * Load items from localStorage
 */
Cart.prototype.loadItems = function() {
  var items = null;
  if ('undefined' !== typeof localStorage[this.cartName]) {
    items = localStorage[this.cartName]
  } else {
    throw new CartException().toString("Missing localStorage cart!");
  }

  if (null != items && null != JSON) {
    try {
      items = JSON.parse(items);
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        null !== item.id && null !== item.name && null !== item.price && (item = new Product(item), this.items.push(item));
      }
    } catch (err) { //console.error('Can not load items from store : ' + err);
    }
  }
};
/*
 * Get base64 data img
 */
Cart.prototype.onErrorSrc = function() {
  return "data:image/png;base64,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";
};
/*
 * Save item to the storage
 */
Cart.prototype.saveItems = function() {
  if (null != JSON) {
    localStorage[this.cartName] = JSON.stringify(this.items);
  } else {
    throw new CartException().toString("JSON not supported!");
  }
};
/*
 * Update expiry time on user activity
 */
Cart.prototype.updateExpiry = function() {
  localStorage[this.cartName + "_expiry"] = (new Date).getTime() + 6E4 * this.expiry;
}
/*  addItem: Add an item to the cart
    params:
        item <object | csv> : item object or comma separated item's value
    returns:
        <object> : cart object
 */
Cart.prototype.addItem = function(item) {
  this.updateExpiry();
  var itemObj = {},
    i;
  // Check itemObj is an obj or number (User can pass only item id as init);
  if ("number" === typeof item) {
    itemObj.id = item,
      itemObj.qty = 1;
  } else if ("object" === typeof item) {
    for (i in item) {
      itemObj[i] = item[i];
    }
  } else {
    throw new CartException().toString("Invalid parameters");
  }
  var id = toNumber(itemObj.id),
    qty = toNumber(itemObj.qty) || 1;
  if (0 != qty) {
    // Update quantity for existing  item
    found = false;
    for (i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      if (item.id == id) {
        found = true;
        item.qty = toNumber(item.qty + qty);
        if (item.qty > item.maxQty) {
          item.qty = toNumber(item.qty - qty);
          throw new CartException().toString("Maximum (" + item.maxQty + ") quantity allowed for this product.");
        }
        // Overwrite item with given object parameters
        for (var e in itemObj) {
          "id" != e && "qty" != e && (item[e] = itemObj[e]);
        }
        0 >= item.qty && this.items.splice(i, 1)
        // At position i, remove i items:
      }
    }
    // new item add now
    if (!found) {
      var s = new Store,
        p = new Product(s.getProduct(id));
      // Overwrite item with given object parameters
      for (i in itemObj) "id" != p[i] && "qty" != p[i] && (p[i] = itemObj[i]);
      this.items.push(p)
    }
    // save changes
    this.saveItems();
    return this;
  }
  return false;
};
/*
 * Remove item from cart
 */
Cart.prototype.removeItem = function(item) {
  if ("number" === typeof item) {
    var itemObj = {
      id: item,
      qty: -1E3
    };
  } else if ("object" === typeof item) {
    itemObj = {},
      itemObj.id = item.id,
      itemObj.qty = item.qty || -1E3;
  } else return;
  this.addItem(itemObj)
};
/*
 * Increment item Qty on cart
 */
Cart.prototype.incrementQty = function(item, q) {
  var itemObj = {};
  if ("number" === typeof item) {
    itemObj.id = item,
      itemObj.qty = q || 1;
  } else if ("object" === typeof item) {
    itemObj.id = item.id,
      itemObj.qty = item.qty || 1;
  } else return;
  this.addItem(itemObj)
};
/*
 * Decrement item Qty on cart
 */
Cart.prototype.decrementQty = function(item, q) {
  var itemObj = {};
  if ("number" === typeof item) {
    itemObj.id = item,
      itemObj.qty = q || -1;
  } else if ("object" === typeof item) {
    itemObj.id = item.id,
      itemObj.qty = item.qty || -1;
  } else return;
  this.addItem(itemObj)
};
/*
 * Update / add existing item with select - option menu 
 * (Normally used for increment decrement of item qty)
 */
Cart.prototype.updateItemQty = function(itemObj) {
  this.updateExpiry();
  var itemAdd = {},
    i;
  // Check itemObj is an obj or number (User can pass only item id as init);
  if (typeof itemObj === 'number') {
    itemAdd['id'] = itemObj,
      itemAdd['qty'] = 1
  } else if (typeof itemObj === 'object') {
    for (i in itemObj) {
      itemAdd[i] = itemObj[i];
    }
  }
  id = toNumber(itemAdd.id);
  qty = toNumber(itemAdd.qty) || 1;
  if (qty != 0) {
    // Update quantity for existing  item
    var found = false;
    for (i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      if (item.id == id) {
        found = true;
        item.qty = toNumber(item.qty + qty);
        // Overwrite item with given object parameters
        for (var ikey in itemAdd) {
          if (ikey != 'id') {
            item[ikey] = itemAdd[ikey];
          }
        }
        if (item.qty <= 0) {
          this.items.splice(i, 1);
          // At position i, remove i items:
        }
      }
    }
    // new item add now
    if (!found) {
      var s = new Store(),
        p = new Product(s.getProduct(id));
      // Overwrite item with given object parameters
      for (i in itemAdd) {
        (p[i] != 'id') && (p[i] = itemAdd[i]);
      }
      this.items.push(p);
    }
    // save changes
    this.saveItems();
    return this;
  }
  return false;
}
/*
 * Get the total price for all/per items currently in the cart
 */
Cart.prototype.getTotalPrice = function(pid) {
  var total = 0;
  for (var a = 0; a < this.items.length; a++) {
    var item = this.items[a];
    if (null == pid || pid == item.id) total += toNumber(item.qty * item.price);
  }
  return total.toFixed(2)
};
/*
 * Get Total price and shipping price
 */
Cart.prototype.getGrandTotal = function(pid) {
  var total = 0;
  var shipping = 0;
  for (var a = 0; a < this.items.length; a++) {
    var item = this.items[a];
    if (null == pid || pid == item.id) total += toNumber(item.qty * item.price);
  }
  for (a = 0; a < this.items.length; a++) {
    item = this.items[a];
    if (null == pid || pid == item.id) shipping += toNumber(item.shippingPrice);
  }
  return (total + shipping).toFixed(2);
};
/*
 * Get count for all items currently in the cart
 */
Cart.prototype.getTotalCount = function(pid) {
  var count = 0;
  for (var a = 0; a < this.items.length; a++) {
    var item = this.items[a];
    if (null == pid || pid == item.id) count += toNumber(item.qty);
  }
  return count;
};
/*
 * Get Shipping and Handling price
 */
Cart.prototype.getTotalShipping = function(pid) {
  return (this.getGrandTotal(pid) - this.getTotalPrice(pid)).toFixed(2);
};
/*
 * Check the item is already added or not
 */
Cart.prototype.isAdded = function(pid) {
  return 0 < this.getTotalCount(pid) ? this : false;
}
/*
 * Goto new a window.location
 */
Cart.prototype.goto = function(href, millisecond) {
  var ms = millisecond || 0;
  setTimeout(function() {
    return window.location = '' != href ? href : false;
  }, ms);
}
/*
 * Clear the current cart from everywhere
 */
Cart.prototype.clearItems = function() {
  this.items = [];
  this.saveItems();
  return this;
};
/*
 * Generate an array with range
 */
Cart.prototype.range = function(min, max, step) {
  step = step || 1;
  var input = [];
  for (var i = min; i <= max; i += step) input.push(i);
  return input;
};
/***************************END: THE CART SECTION ***************************/
/*
 * Thankyou page payment receipt
 */
function Receipt(store, cartName, expiry) {
  this.keepReceipt = false;
  this.store = store || "receipt";
  this.cartName = cartName || 'uniCart'
  this.clearStorage = false;
  this.items = [];
  this.expiry = isNaN(expiry) ? 60 : Number(expiry);
  // Check already stored cart object's validity
  (parseInt(sessionStorage.getItem(this.store + "_expiry")) < (new Date).getTime()) && this.clearReceipt();
  // load items from localStorage when initializing
  this.loadReceipt();
  sessionStorage[this.store + "_expiry"] = (new Date).getTime() + 6E4 * this.expiry;
  // Save items to local store when unloading
  var self = this;
  $(window).unload(function() {
    self.clearStorage && self.clearReceipt();
    self.saveReceipt();
    self.clearStorage = false;
  });
};
/*
 * Keep cart data and store into receipt objetc
 */
Receipt.prototype.keep = function() {
  this.keepReceipt = true;
  this.saveReceipt();
}
/*
 * Clear Receipt data from storage
 */
Receipt.prototype.clearReceipt = function() {
  this.items = [];
  this.keepReceipt = true;
  this.saveReceipt();
  return this;
};
/*
 * Load Receipt data from storage
 */
Receipt.prototype.loadReceipt = function() {
  // localStorage / sessionStorage items has been saved as string, so we can check the string length
  // Usually a product JSON string should be greater than 5
  var items = null;

  if (sessionStorage.hasOwnProperty('uniReceipt') && localStorage.hasOwnProperty('uniCart')) {
    items = margeArry(sessionStorage.uniReceipt, localStorage.uniCart);
  } else {
    items = null;
  }

  if (null != items && null != JSON) {
    try {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        null !== item.id && null !== item.name && null !== item.price && (item = new Product(item), this.items.push(item));
      }
    } catch (err) { //console.error('Can not load items from store : ' + err);
    }
  }
};
/*
 * Save order receipt to storage
 */
Receipt.prototype.saveReceipt = function() {
  if (this.keepReceipt === false) return false;
  if (null != JSON) {
    sessionStorage[this.store] = JSON.stringify(this.items);
  } else {
    console.error("JSON error, please use updated browser!");
    return false;
  }
};
/*
 * Get Total Price of current receipt
 */
Receipt.prototype.getTotalPrice = function(pid) {
  return Cart.prototype.getTotalPrice.call(this, pid);
};
/*
 * Get price with shipping price
 */
Receipt.prototype.getGrandTotal = function(pid) {
  return Cart.prototype.getGrandTotal.call(this, pid);
};
/*
 * get Shipping and Handling price
 */
Receipt.prototype.getTotalShipping = function(pid) {
  return Cart.prototype.getTotalShipping.apply(this, [pid]);
};
/*
 * get the count for all items currently in the cart
 */
Receipt.prototype.getTotalCount = function(pid) {
  return Cart.prototype.getTotalCount.call(this, pid);
};
/*************************** HELPER METHODS SECTION ***************************/
/*
 * Get `package-block` attribute values with attr name
 */
function getPackageBlockAttrByName(attr) {
  return $('.package-block').data(attr) ? $('.package-block').data(attr) : null;
}
/*
 * Get the HTML element product store object for overwrite the main object
 */
function getHtmlElementDataStore(className) {
  var className = className || 'uni-product-store', // Get all elements with package-block class
    storeUni = $('.package-block'),
    store = [];
  for (var i = 0; i < storeUni.length; i++) {
    var s = $(storeUni[i]);
    if (s.hasClass(className)) {
      store.push(storeUni[i])
    }
  }
  // get all data-attributes value as object and store them into an array object
  products = [];
  if (store.length > 0) {
    for (i = 0; i < store.length; i++) {
      var elObj = $(store[i]).data();
      // remove 'product' form 'productAttributeName'
      var p = {};
      for (s in elObj) {
        var k = s.replace('product', '');
        // will returned data-max-qty => MaxQty
        k = k.charAt(0).toLowerCase() + k.slice(1);
        // MaxQty => maxQty
        p[k] = elObj[s];
      }
      products.push(p);
    }
  }
  return products;
}
/*
 * Overwrite the main product store object with some user defined object on runtime.
 */
function overWriteObject(mainObj, commonObj, itemObj, packageBlock) {
  var products = [];
  // Get all products
  for (var i = 0; i < mainObj.length; i++) {
    var p = mainObj[i];
    // Check if main product has already extra meta property or not, if not then add / modify from meta data
    if (window.uni_products) {
      if (commonObj !== undefined) {
        for (var j = 0; j < commonObj.length; j++) {
          for (var key in commonObj[j]) {
            p[key] = !p.hasOwnProperty(key) ? commonObj[j][key] : p[key];
          }
        }
      }
      // Overwrite / update / add key-value to the mainStore object from manual user defined object *uni_products*
      if (itemObj !== undefined) {
        for (j = 0; j < itemObj.length; j++) {
          if (itemObj[j].id == p.id) {
            for (var itemKey in itemObj[j]) {
              if (p[itemKey] != 'id') {
                itemObj[j][itemKey] != '' && (p[itemKey] = itemObj[j][itemKey]);
              }
            }
          }
        }
      }
    }
    // packageBlock data
    // Final overwrite by User defined HTML package-block data-attributes element
    if (packageBlock.length) {
      for (j = 0; j < packageBlock.length; j++) {
        if (packageBlock[j].id == p.id) {
          for (itemKey in packageBlock[j]) {
            if (p[itemKey] != 'id') {
              packageBlock[j][itemKey] != '' && (p[itemKey] = packageBlock[j][itemKey]);
            }
          }
        }
      }
    }
    // Return product object array
    products[i] = new Product(p);
    // Create a new Product object
  }
  return products;
}
/*
 * convert to number
 */
var toNumber = function(val) {
  val *= 1;
  return isNaN(val) ? 0 : val
};
/*
 * Marge second array with first
 */
function margeArry(ar1, ar2) {
  var arr1 = arr2 = [];
  try {
    arr1 = 'string' === typeof ar1 ? JSON.parse(ar1 || "[]") : ar1;
    arr2 = 'string' === typeof ar2 ? JSON.parse(ar2 || "[]") : ar2;
    for (var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
  } catch (e) {
    return [];
  }
  return arr1;
}
/*
 * Angular ProductService Service
 */
/*************************** ANGULARJS SECTION ***************************/
app.factory("ProductService", function() {
  var myStore = new Store();
  // create shopping cart
  var myCart = new Cart("uniCart", 60);
  var myReceipt = new Receipt("uniReceipt", "uniCart", 5);
  return {
    store: myStore,
    cart: myCart,
    receipt: myReceipt
  };
});
/*
 * Custom Directive for fixed a number
 */
app.filter('uniToFixed', function() {
  return function showAsFloat(num, n) {
    return !isNaN(+num) ? (+num).toFixed(n || 2) : num;
  }
});
/*
 * Custom Directive for cart template
 */
app.directive("uniCart", function() {
  return {
    restrict: "E",
    templateUrl: "templates/examples/uni-cart.html"
  };
});
/*
 * Custom Directive for store template
 */
app.directive("uniStore", function() {
  return {
    restrict: "E",
    templateUrl: "templates/examples/uni-store.html"
  };
});
/*
 * Custom Directive for product template
 */
app.directive("uniProduct", function() {
  return {
    restrict: "E",
    templateUrl: "templates/examples/uni-product.html"
  };
});
/*
 * Custom Directive for Cart Clear
 */
app.directive("uniCartClear", function() {
  return {
    restrict: 'E',
    template: '<div style="display:none"' + '<!--Store cart info before clear the cart-->' + '<span ng-init="cart.clearItems()"></span></div>'
  }
});
/*
 * Custom Directive for keepig Receipt before cart clear
 */
app.directive("keepReceipt", function() {
  var directive = {};
  directive.restrict = 'A';
  directive.compile = function(element, attributes) {
    element.prepend('<span style="display:none;" ng-init="receipt.keep();"></span>');
  }
  return directive;
});
/*
 * Custom Directive for Receipt Clear
 */
app.directive("uniReceiptClear", function() {
  return {
    restrict: 'AE',
    template: '<div style="display:none"' + '<span ng-init="receipt.clearReceipt()"></span></div>'
  }
});
/*
 * Angular directive ngSrc doesn't have any native features for processing of 404 response.
 * EX: <img ng-src="wrongUrl.png" on-error-src="http://google.com/favicon.ico"/>
 */
app.directive('onErrorSrc', function() {
  var directive = {};
  directive.compile = function(element, attributes) {
    element.css({
      "width": '5em',
      'height': '5em',
      'background': '#9c9c9c'
    });
    var linkFunction = function($scope, element, attrs) {
      element.on('error', function() {
        if (attrs.src != attrs.onErrorSrc) {
          attrs.$set('src', attrs.onErrorSrc);
        }
        attrs.$set('style', '');
      });
      element.on('load', function() {
        attrs.$set('style', '');
      })
    }
    return linkFunction;
  }
  return directive;
});
/*
 * Cart controller
 */
app.controller('cartController', function($rootScope, $scope, ProductService) {
  // get store, cart and receipt objects from service
  $scope.store = ProductService.store;
  $scope.cart = ProductService.cart;
  $scope.receipt = ProductService.receipt;
});