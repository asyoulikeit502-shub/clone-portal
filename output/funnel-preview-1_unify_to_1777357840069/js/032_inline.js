var global_watchImageUrl = 0;
var global_watchImageUrl1 = 0;

function Sub_function() {
  var checkBox = document.getElementById("sub_check");
  var sub_text = document.getElementById("sub_text");

  if (checkBox.checked == true) {
    sub_text.style.display = "block";
  } else {
    sub_text.style.display = "none";
  }

}

$(document).ready(function() {
  $("#rd").change(function() {
    var price = $("#rd").val();

    var price = price.split('|');
    var only_price = parseFloat(price[0]).toFixed(2);
    var p_qty = price[5];
    var updated_rebill = p_qty * 30;
    var dis20 = (only_price - (only_price * 0.5)).toFixed(2)
    $("#p_show").html('$' + only_price);
    $("#updated_price").html('$' + only_price);
    $(".updated_rebill").html(updated_rebill);
    $(".dis20").html('$' + dis20);
  })
})

function change_price(val) {
  console.log("value ", val);
  var price = $("#rd").val();
  var price = price.split('|');
  var only_price = price[0];
  var only_id = price[1];
  var p_name = price[2];
  var ship_id = price[4];
  var ship_price = price[3];
  var p_qty = price[5];
  var updated_rebill = p_qty * 30;
  var dis20 = (only_price - (only_price * 0.5)).toFixed(2)
  var checkBox = document.getElementById("sub_check");
  var isChecked = checkBox.checked;
  if (val == '1st') {
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product1', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/mem-img.jpg',
        productQty: '1',
        type: 'product1',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '2nd') {
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product2', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/mem-img.jpg',
        productQty: '1',
        type: 'product2',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '3rd') {
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product3', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/mem-img.jpg',
        productQty: '1',
        type: 'product3',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '4th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product4', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/mem-img.jpg',
        productQty: '1',
        type: 'product3',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '5th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product5', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/mem-img.jpg',
        productQty: '1',
        type: 'product5',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '6th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product6', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/mem-img.jpg',
        productQty: '1',
        type: 'product6',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '7th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product7', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/mem-img.jpg',
        productQty: '1',
        type: 'product5',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '8th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product8', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/mem-img.jpg',
        productQty: '1',
        type: 'product3',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '9th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product9', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/mem-img.jpg',
        productQty: '1',
        type: 'product9',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '10th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product10', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-10.jpg',
        productQty: '1',
        type: 'product10',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '11th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product11', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-11.jpg',
        productQty: '1',
        type: 'product11',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '12th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product12', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-12.jpg',
        productQty: '1',
        type: 'product12',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '13th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product13', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-13.jpg',
        productQty: '1',
        type: 'product13',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '14th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product14', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-14.jpg',
        productQty: '1',
        type: 'product14',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '15th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product15', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shipping': '',
        'productImage': 'images/product-15.jpg',
        productQty: '1',
        type: 'product15',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '16th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product16', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shipping': '',
        'productImage': 'images/product-16.jpg',
        productQty: '1',
        type: 'product16',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '17th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product17', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shipping': '',
        'productImage': 'images/product-17.jpg',
        productQty: '1',
        type: 'product17',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '18th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product18', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shipping': '',
        'productImage': 'images/product-18.jpg',
        productQty: '1',
        type: 'product18',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '19th') {
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product19', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shipping': '',
        'productImage': 'images/product-19.jpg',
        productQty: '1',
        type: 'product19',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '20th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product20', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-20.jpg',
        productQty: '1',
        type: 'product20',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '21st') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product21', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-21.jpg',
        productQty: '1',
        type: 'product21',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '22nd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product22', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-22.jpg',
        productQty: '1',
        type: 'product22',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '23rd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product23', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-23.jpg',
        productQty: '1',
        type: 'product23',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '24th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product24', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-24.jpg',
        productQty: '1',
        type: 'product24',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '25th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product25', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-25.jpg',
        productQty: '1',
        type: 'product25',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '26th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product26', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-26.jpg',
        productQty: '1',
        type: 'product26',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '27th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product27', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-27.jpg',
        productQty: '1',
        type: 'product27',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '28th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product28', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-28.jpg',
        productQty: '1',
        type: 'product28',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '29th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product29', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-29.jpg',
        productQty: '1',
        type: 'product29',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '30th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product30', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-30.jpg',
        productQty: '1',
        type: 'product30',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '31st') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product31', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-21.jpg',
        productQty: '1',
        type: 'product31',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '32nd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product32', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-22.jpg',
        productQty: '1',
        type: 'product32',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '33rd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product33', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-31.jpg',
        productQty: '1',
        type: 'product33',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '34th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product34', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-32.jpg',
        productQty: '1',
        type: 'product34',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '35th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product35', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-33.jpg',
        productQty: '1',
        type: 'product35',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '36th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product36', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-34.jpg',
        productQty: '1',
        type: 'product36',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '37th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product37', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-24.jpg',
        productQty: '1',
        type: 'product37',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }
  if (val == '38th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product38', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-35.jpg',
        productQty: '1',
        type: 'product38',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '39th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product39', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-36.jpg',
        productQty: '1',
        type: 'product39',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '40th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product40', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-37.jpg',
        productQty: '1',
        type: 'product40',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '41st') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product41', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-38.jpg',
        productQty: '1',
        type: 'product41',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '42nd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product42', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-39.jpg',
        productQty: '1',
        type: 'product42',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '43rd') {
    var price = $("#rd").val();
    if ($("#variation").val() == 'w') {
      var image_path = 'images/product-40w.jpg';
    } else {
      var image_path = 'images/product-40.jpg';
    }
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product43', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': image_path,
        productQty: '1',
        type: 'product43',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '44th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product44', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-44.jpg',
        productQty: '1',
        type: 'product44',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '45th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product45', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-45.jpg',
        productQty: '1',
        type: 'product45',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '46th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product46', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-46.jpg',
        productQty: '1',
        type: 'product46',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '47th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product47', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-47.jpg',
        productQty: '1',
        type: 'product47',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '48th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product48', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-48.jpg',
        productQty: '1',
        type: 'product48',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '49th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product49', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-49.jpg',
        productQty: '1',
        type: 'product48',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '50th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product50', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-50.jpg',
        productQty: '1',
        type: 'product50',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '51st') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product51', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-51.jpg',
        productQty: '1',
        type: 'product51',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '52nd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product52', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-52.jpg',
        productQty: '1',
        type: 'product52',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '53rd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product53', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-53.jpg',
        productQty: '1',
        type: 'product53',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '54th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product54', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-54.jpg',
        productQty: '1',
        type: 'product54',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '55th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product55', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-55.jpg',
        productQty: '1',
        type: 'product55',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '56th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product56', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-56.jpg',
        productQty: '1',
        type: 'product56',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '57th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product57', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-57.jpg',
        productQty: '1',
        type: 'product57',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '58th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product58', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-58.jpg',
        productQty: '1',
        type: 'product58',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '59th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product59', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-59.jpg',
        productQty: '1',
        type: 'product59',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '60th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product60', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-60.jpg',
        productQty: '1',
        type: 'product60',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '61st') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product61', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-61.jpg',
        productQty: '1',
        type: 'product61',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '62nd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product62', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-62.jpg',
        productQty: '1',
        type: 'product62',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '63rd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product63', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-63.jpg',
        productQty: '1',
        type: 'product63',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  // addition
  if (val == '64th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product64', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-64.jpg',
        productQty: '1',
        type: 'product64',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '65th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product65', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-65.jpg',
        productQty: '1',
        type: 'product65',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '66th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product66', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-66.jpg',
        productQty: '1',
        type: 'product66',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '67th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product67', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-67.jpg',
        productQty: '1',
        type: 'product67',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '68th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product68', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-68.jpg',
        productQty: '1',
        type: 'product68',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '69th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product69', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-69.jpg',
        productQty: '1',
        type: 'product69',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '70th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product70', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-70.jpg',
        productQty: '1',
        type: 'product70',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '71st') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product71', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-71.jpg',
        productQty: '1',
        type: 'product71',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '72nd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product72', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-72.jpg',
        productQty: '1',
        type: 'product72',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '73rd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product73', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-73.jpg',
        productQty: '1',
        type: 'product73',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '74th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product74', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-74.jpg',
        productQty: '1',
        type: 'product74',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '75th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product75', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-75.jpg',
        productQty: '1',
        type: 'product75',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '76th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product76', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-76.jpg',
        productQty: '1',
        type: 'product76',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '77th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product77', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-77.jpg',
        productQty: '1',
        type: 'product77',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '78th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product78', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-78.jpg',
        productQty: '1',
        type: 'product78',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '79th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product79', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-79.jpg',
        productQty: '1',
        type: 'product79',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '80th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product80', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-80.jpg',
        productQty: '1',
        type: 'product80',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }



  if (val == '81th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product81', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-81.jpg',
        productQty: '1',
        type: 'product81',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '82th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product82', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-82.jpg',
        productQty: '1',
        type: 'product82',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }



  if (val == '83th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product83', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-83.jpg',
        productQty: '1',
        type: 'product83',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '84th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product84', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-84.jpg',
        productQty: '1',
        type: 'product84',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '85th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product85', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-85.jpg',
        productQty: '1',
        type: 'product85',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }



  if (val == '86th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product86', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-86.jpg',
        productQty: '1',
        type: 'product86',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '87th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product87', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-87.jpg',
        productQty: '1',
        type: 'product87',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }



  if (val == '88th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product88', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-88.jpg',
        productQty: '1',
        type: 'product88',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '89th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product89', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-89.jpg',
        productQty: '1',
        type: 'product89',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '90th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product90', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-90.jpg',
        productQty: '1',
        type: 'product90',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '91th') {
    var price = $("#rd").val();
    if ($("#size").val() == 'x') {
      var image_path = 'images/product-91x.jpg';
    } else {
      var image_path = 'images/product-91s.jpg';
    }
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product91', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': image_path,
        productQty: '1',
        type: 'product91',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '92th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product92', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-92.jpg',
        productQty: '1',
        type: 'product92',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '93th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product93', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-93.jpg',
        productQty: '1',
        type: 'product93',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '94th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product94', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-94.jpg',
        productQty: '1',
        type: 'product94',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '95th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product95', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-95.jpg',
        productQty: '1',
        type: 'product95',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '96th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product96', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-96p.jpg',
        productQty: '1',
        type: 'product96',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '97th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product97', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-96b.jpg',
        productQty: '1',
        type: 'product97',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '98th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product98', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-98.jpg',
        productQty: '1',
        type: 'product98',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '99th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product99', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-99.jpg',
        productQty: '1',
        type: 'product99',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '100th') {

    var current_image_used = '';

    var currentImageUrl = global_watchImageUrl;
    var image = currentImageUrl;
    var p_name1 = '';
    var only_id1 = 0;
    //  var image=$('#yl').val();

    console.log("url", image);

    if (image == 1) {
      current_image_used = 'images/product-100.jpg';
      //   p_name1='1x Smart Watch Band';
      //   only_id1=21872;
    } else if (image == 2) {
      current_image_used = 'images/product-101.jpg';
      //   p_name1='2x Smart Watch Bands (5% OFF)';
      //   only_id1=21873;
    } else if (image == 3) {
      current_image_used = 'images/product-102.jpg';
      //   p_name1='3x Smart Watch Bands (10% OFF)';
      //   only_id1=21874;
    } else {
      current_image_used = 'images/product-103.jpg';
      //     p_name1='4x Smart Watch Bands (15% OFF)';
      //   only_id1=21875;
    }

    //   if(only_id == 21856){
    //       p_name1='5x Smart Watch Bands (20% OFF)';
    //       only_id1=21876;
    //   }


    if (only_id == 21852) {
      p_name1 = '1x Smart Watch Band';
      only_id1 = 21872;
    }
    if (only_id == 21853) {
      p_name1 = '2x Smart Watch Bands (5% OFF)';
      only_id1 = 21873;
    }
    if (only_id == 21854) {
      p_name1 = '3x Smart Watch Bands (10% OFF)';
      only_id1 = 21874;
    }

    if (only_id == 21855) {
      p_name1 = '4x Smart Watch Bands (15% OFF)';
      only_id1 = 21875;
    }

    if (only_id == 21856) {
      p_name1 = '5x Smart Watch Bands (20% OFF)';
      only_id1 = 21876;
    }

    console.log("p_name1 ", p_name1);
    console.log("only_id1 ", only_id1);



    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product100', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-100.jpg',
        productQty: '1',
        type: 'product100',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';

      //  current_image_used='images/product-100.jpg';

      angular.element(document.getElementById('cart')).scope().updateCart('product104', {
        'productName': p_name1,
        'productId': only_id1,
        productPrice: 0.0,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': current_image_used,
        productQty: '1',
        type: 'product104',
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';





    }
  }

  if (val == '101th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product101', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-101.jpg',
        productQty: '1',
        type: 'product101',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '102th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product102', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-102.jpg',
        productQty: '1',
        type: 'product102',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '103th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product103', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-103.jpg',
        productQty: '1',
        type: 'product103',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }


  if (val == '104th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product104', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-104.jpg',
        productQty: '1',
        type: 'product104',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '105th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product105', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-105.jpg',
        productQty: '1',
        type: 'product105',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '106th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product106', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-106.jpg',
        productQty: '1',
        type: 'product106',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '107th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product107', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-107.jpg',
        productQty: '1',
        type: 'product107',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '108th') {
    var price = $("#rd").val();
    console.log(price.split('|'));
    var current_image_used1 = '';
    var currentImageUrl1 = global_watchImageUrl1;
    var image1 = currentImageUrl1;

    // var image= currentImageUrl;
    var p_name2 = '';
    var only_id2 = 0;
    //  var image=$('#yl').val();

    console.log("url", image1);

    if (image1 == 1) {
      current_image_used1 = 'images/product-108.jpg';

    } else if (image1 == 2) {
      current_image_used1 = 'images/product-109.jpg';
      //   p_name2='2x Sports Watch Bands (5% OFF)';
      //   only_id2=21913;
    } else if (image1 == 3) {
      current_image_used1 = 'images/product-110.jpg';

    } else {
      current_image_used1 = 'images/product-111.jpg';

    }

    if (only_id == 21896) {
      p_name2 = '5x Sports Watch Bands (20% OFF)';
      only_id2 = 21916;
    }
    if (only_id == 21892) {
      p_name2 = '1x Sports Watch Band';
      only_id2 = 21912;
    }
    if (only_id == 21893) {
      p_name2 = '2x Sports Watch Bands (5% OFF)';
      only_id2 = 21913;
    }
    if (only_id == 21894) {
      p_name2 = '3x Sports Watch Bands (10% OFF)';
      only_id2 = 21914;
    }

    if (only_id == 21895) {
      p_name2 = '4x Sports Watch Bands (15% OFF)';
      only_id2 = 21915;
    }

    console.log("p_name2 ", p_name2);
    console.log("only_id2 ", only_id2);

    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product108', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-108.jpg',
        productQty: '1',
        type: 'product108',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';

      angular.element(document.getElementById('cart')).scope().updateCart('product112', {
        'productName': p_name2,
        'productId': only_id2,
        productPrice: 0.0,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': current_image_used1,
        productQty: '1',
        type: 'product104',
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '109th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product109', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-109.jpg',
        productQty: '1',
        type: 'product109',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '110th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product110', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-110.jpg',
        productQty: '1',
        type: 'product110',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '111th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product111', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-111.jpg',
        productQty: '1',
        type: 'product111',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '112th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product112', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-112.jpg',
        productQty: '1',
        type: 'product112',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '113th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product113', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-113.jpg',
        productQty: '1',
        type: 'product113',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '114th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product114', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-114.jpg',
        productQty: '1',
        type: 'product114',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '115th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product115', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-115.jpg',
        productQty: '1',
        type: 'product115',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  // addition

  if (val == '116th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product115', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-116.jpg',
        productQty: '1',
        type: 'product116',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '117th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product115', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-117.jpg',
        productQty: '1',
        type: 'product117',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  // addition

  if (val == '118th') {
    var price = $("#rd").val();
    var product_array = price.split('|');
    var product_price = product_array[0];
    var product_name = product_array[1];
    var product_crm_id = product_array[5];
    var product_current = product_array[6];
    var product_rebill_term = product_array[4];

    //   console.log("product_array : ",product_array);
    //   console.log("product_price ",product_price);
    //   console.log("product_name ",product_name);
    //    console.log("product_crm_name ",product_crm_id);
    //      console.log("product_current ",product_current);
    //        console.log("rebill_term ",product_rebill_term);
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      //  console.log("clicked indisecee22");
      angular.element(document.getElementById('cart')).scope().updateCart(product_current, {
        'productName': product_name,
        'productId': product_crm_id,
        productPrice: product_price,
        'productImage': 'images/mem-img.jpg',
        reward_terms: product_rebill_term,
        isChecked: false
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = '#';
    }
  }

  if (val == '119th') {
    var price = $("#rd").val();
    var ab_price_split = price.split('|');

    //console.log("119th val",ab_price_split);
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      if (only_id == 31798 || only_id == 31796) {

        angular.element(document.getElementById('cart')).scope().updateCart('product119', {
          'productName': p_name,
          'productId': only_id,
          productPrice: only_price,
          'shippingPrice': ship_price,
          'shippingId': ship_id,
          'productImage': 'images/product-118.jpg',
          productQty: '1',
          type: 'product119',
          rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
          isChecked: isChecked
        });
        angular.element(document.getElementById('cart')).scope().$apply();
        window.location.href = '#';


        //  console.log();

        if (only_id == 31798) {
          angular.element(document.getElementById('cart')).scope().updateCart('product144', {
            'productName': ab_price_split[6],
            'productId': ab_price_split[7],
            productPrice: 0.0,
            'shippingPrice': ship_price,
            'shippingId': ship_id,
            'productImage': 'images/10xgel.jpg',
            productQty: '1',
            type: 'product144',
            isChecked: isChecked
          });
          angular.element(document.getElementById('cart')).scope().$apply();
          window.location.href = '#';
        } else {
          angular.element(document.getElementById('cart')).scope().updateCart('product144', {
            'productName': ab_price_split[6],
            'productId': ab_price_split[7],
            productPrice: 0.0,
            'shippingPrice': ship_price,
            'shippingId': ship_id,
            'productImage': 'images/20x-gel.jpg',
            productQty: '1',
            type: 'product144',
            isChecked: isChecked
          });
          angular.element(document.getElementById('cart')).scope().$apply();
          window.location.href = '#';
        }


      } else {
        // console.log();
        angular.element(document.getElementById('cart')).scope().updateCart('product119', {
          'productName': p_name,
          'productId': only_id,
          productPrice: only_price,
          'shippingPrice': ship_price,
          'shippingId': ship_id,
          'productImage': 'images/product-118.jpg',
          productQty: '1',
          type: 'product119',
          rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
          isChecked: isChecked
        });
        angular.element(document.getElementById('cart')).scope().$apply();
        window.location.href = '#';
      }

    }
  }


  if (val == '120th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product120', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-119.jpgsss',
        productQty: '1',
        type: 'product120',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }


  if (val == '120th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product120', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-119.jpg',
        productQty: '1',
        type: 'product120',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }


  if (val == '121st') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product121', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-120.jpg',
        productQty: '1',
        type: 'product121',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }


  if (val == '122nd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product122', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-121.jpg',
        productQty: '1',
        type: 'product122',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }


  if (val == '123rd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product123', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-122.jpg',
        productQty: '1',
        type: 'product123',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }




  if (val == '124th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product124', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-123.jpg',
        productQty: '1',
        type: 'product124',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }




  if (val == '125th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product125', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-124.jpg',
        productQty: '1',
        type: 'product125',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }




  if (val == '126th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product126', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-125.jpg',
        productQty: '1',
        type: 'product126',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }








  if (val == '127th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product127', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-126.jpg',
        productQty: '1',
        type: 'product127',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }




  if (val == '128th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product128', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-127.jpg',
        productQty: '1',
        type: 'product128',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }




  if (val == '129th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product129', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-128.jpg',
        productQty: '1',
        type: 'product129',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }

  if (val == '130th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product130', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-129.jpg',
        productQty: '1',
        type: 'product130',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }
  if (val == '131st') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product131', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-130.jpg',
        productQty: '1',
        type: 'product131',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }
  if (val == '132nd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product132', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-131.jpg',
        productQty: '1',
        type: 'product132',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }
  if (val == '133rd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product133', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-132.jpg',
        productQty: '1',
        type: 'product133',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }

  if (val == '134th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product134', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-133.jpg',
        productQty: '1',
        type: 'product134',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }

  if (val == '135th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product135', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-134.jpg',
        productQty: '1',
        type: 'product135',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }

  if (val == '136th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product136', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-135.jpg',
        productQty: '1',
        type: 'product136',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }

  if (val == '137th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product137', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-136.jpg',
        productQty: '1',
        type: 'product137',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }

  if (val == '138th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product138', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-137.jpg',
        productQty: '1',
        type: 'product138',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }

  // new products here

  if (val == '139th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product139', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-138.jpg',
        productQty: '1',
        type: 'product139',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }

  if (val == '140th') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product140', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-139.jpg',
        productQty: '1',
        type: 'product140',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }


  if (val == '141st') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product141', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-140.jpg',
        productQty: '1',
        type: 'product141',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }


  if (val == '142nd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product142', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-141.jpg',
        productQty: '1',
        type: 'product142',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }

  if (val == '143rd') {
    var price = $("#rd").val();
    if (price == 0) {
      alert("Please choose an option !")
    } else {
      angular.element(document.getElementById('cart')).scope().updateCart('product143', {
        'productName': p_name,
        'productId': only_id,
        productPrice: only_price,
        'shippingPrice': ship_price,
        'shippingId': ship_id,
        'productImage': 'images/product-142.jpg',
        productQty: '1',
        type: 'product143',
        rebill_terms: `By redeeming this Subscribe and Save offer at checkout, you agree to our Terms and authorize a charge of $` + only_price + ` for today’s order, and authorize your first Subscribe and Save subscription of ` + p_name + ` to be shipped to you ` + updated_rebill + ` days from today for the 20% discounted price of $` + dis20 + ` Every ` + updated_rebill + ` days thereafter, the ` + p_name + ` you ordered today from our online store will be shipped to the address on file, and the discounted price of $` + dis20 + ` will be charged to the card on file until you cancel. You can alter or cancel the Subscribe and Save membership anytime by contacting customer service available 24-7.`,
        isChecked: isChecked
      });
      angular.element(document.getElementById('cart')).scope().$apply();
      window.location.href = 'cart';
    }
  }






}



$("#size").change(function() {
  if ($("#size").val() == 'x') {
    var image_size = 'images/product-91x.jpg';
  } else {
    var image_size = 'images/product-91s.jpg';
  }
  $("#img_path1").attr('src', image_size);
})

$("#variation").change(function() {
  if ($("#variation").val() == 'w') {
    var image_path = 'images/product-40w.jpg';
  } else {
    var image_path = 'images/product-40.jpg';
  }
  $("#img_path").attr('src', image_path);
})
$("#variation1").change(function() {
  if ($("#variation1").val() == 'p') {
    var image_path = 'images/product-96p.jpg';
  } else {
    var image_path = 'images/product-96b.jpg';
  }
  $("#img_path2").attr('src', image_path);
})



$("#bl").click(function() {

  var image_path = 'images/product-100.jpg';
  global_watchImageUrl = 1;


  $("#imageToSwap").attr('src', image_path);
  // $("#smart_color").
  document.getElementById("smart_color").innerHTML = "Black";
})


$("#nb").click(function() {

  var image_path = 'images/product-101.jpg';
  global_watchImageUrl = 2;


  $("#imageToSwap").attr('src', image_path);
  document.getElementById("smart_color").innerHTML = "Navy Blue";
})
$("#yl").click(function() {

  var image_path = 'images/product-102.jpg';
  global_watchImageUrl = 3;


  $("#imageToSwap").attr('src', image_path);
  document.getElementById("smart_color").innerHTML = "Yellow";
})

$("#pn").click(function() {

  var image_path = 'images/product-103.jpg';
  global_watchImageUrl = 4;


  $("#imageToSwap").attr('src', image_path);
  document.getElementById("smart_color").innerHTML = "Pink";
})


$("#bl1").click(function() {

  console.log("clicked");

  var image_path = 'images/product-108.jpg';
  global_watchImageUrl1 = 1;


  $("#imageToSwap3").attr('src', image_path);
  document.getElementById("fitness_color").innerHTML = "Black";
})


$("#nb1").click(function() {

  var image_path = 'images/product-109.jpg';
  global_watchImageUrl1 = 2;


  $("#imageToSwap3").attr('src', image_path);
  document.getElementById("fitness_color").innerHTML = "Navy Blue";
})
$("#yl1").click(function() {

  var image_path = 'images/product-110.jpg';
  global_watchImageUrl1 = 3;


  $("#imageToSwap3").attr('src', image_path);
  document.getElementById("fitness_color").innerHTML = "Yellow";
})

$("#pn1").click(function() {

  var image_path = 'images/product-111.jpg';
  global_watchImageUrl1 = 4;


  $("#imageToSwap3").attr('src', image_path);
  document.getElementById("fitness_color").innerHTML = "Pink";
})

console.log("current_image1 ", global_watchImageUrl1);

$("#variation3").change(function() {
  if ($("#variation3").val() == 'bl') {
    var image_path = 'images/product-104.jpg';
  } else if ($("#variation3").val() == 'nb') {
    var image_path = 'images/product-105.jpg';
  } else if ($("#variation3").val() == 'yl') {
    var image_path = 'images/product-106.jpg';
  } else {
    var image_path = 'images/product-107.jpg';
  }

  $("#imageToSwap2").attr('src', image_path);
})
$("#variation4").change(function() {
  if ($("#variation4").val() == 'bl') {
    var image_path = 'images/product-108.jpg';
  } else if ($("#variation4").val() == 'nb') {
    var image_path = 'images/product-109.jpg';
  } else if ($("#variation4").val() == 'yl') {
    var image_path = 'images/product-110.jpg';
  } else {
    var image_path = 'images/product-111.jpg';
  }

  $("#imageToSwap3").attr('src', image_path);
})


$("#variation5").change(function() {
  if ($("#variation5").val() == 'bl') {
    var image_path = 'images/product-112.jpg';
  } else if ($("#variation5").val() == 'nb') {
    var image_path = 'images/product-113.jpg';
  } else if ($("#variation5").val() == 'yl') {
    var image_path = 'images/product-114.jpg';
  } else if ($("#variation5").val() == 'pn') {
    var image_path = 'images/product-115.jpg';
  } else if ($("#variation5").val() == 'red') {
    var image_path = 'images/product-116.jpg';
  } else {
    var image_path = 'images/product-117.jpg';
  }

  $("#imageToSwap4").attr('src', image_path);
})