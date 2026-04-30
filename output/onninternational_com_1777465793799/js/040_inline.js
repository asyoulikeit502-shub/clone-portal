// enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// sweetalert fires | type = success, error, warning, info, question
function toastFire(type = 'success', title, body = '') {
  Swal.fire({
    icon: type,
    title: title,
    text: body,
    confirmButtonColor: '#c10909',
    //timer: 5000
  })

  /*	const Toast = Swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3000,
				// timerProgressBar: true,
                showCloseButton: true,
				didOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer)
					toast.addEventListener('mouseleave', Swal.resumeTimer)
				}
			});

			Toast.fire({
				icon: type,
				title: title
			});*/
}

// on session toast fires

// button text changes on form submit
$('form').on('submit', function(e) {
  $('button').attr('disabled', true).prop('disabled', 'disabled');
});

// subscription mail form
$('#joinUsForm').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    url: $(this).attr('action'),
    method: $(this).attr('method'),
    data: {
      _token: '38a3ofigojs3sr0M7092ifnHw89aF6ds2TfKvTyW',
      email: $('input[name="subsEmail"]').val()
    },
    beforeSend: function() {
      $('#joinUsMailResp').html('Please wait <i class="fas fa-spinner fa-pulse"></i>');
    },
    success: function(result) {
      result.resp == 200 ? $icon = '<i class="fas fa-check"></i> ' : $icon = '<i class="fas fa-info-circle"></i> ';
      $('#joinUsMailResp').html('<span class="success_message">' + $icon + result.message + '</span>');
      $('button').attr('disabled', false);
    }
  });
});

// remove applied coupon option
function removeAppliedCoupon() {
  $.ajax({
    url: 'https://onninternational.com/cart/coupon/remove',
    method: 'POST',
    data: {
      '_token': '38a3ofigojs3sr0M7092ifnHw89aF6ds2TfKvTyW'
    },
    beforeSend: function() {
      $('#applyCouponBtn').text('Checking');
    },
    success: function(result) {
      if (result.type == 'success') {
        $('#appliedCouponHolder').html('');
        $('input[name="couponText"]').val('').attr('disabled', false);
        $('#applyCouponBtn').text('Apply').css('background', '#141b4b').attr('disabled', false);

        let grandTotalWithoutCoupon = $('input[name="grandTotalWithoutCoupon"]').val();
        $('#displayGrandTotal').text(grandTotalWithoutCoupon);

        toastFire(result.type, result.message);

        location.href = "https://onninternational.com";
      } else {
        toastFire(result.type, result.message);
        $('#applyCouponBtn').text('Apply');
      }
    }
  });
}

// input key validation
$('input[name="fname"]').on('keypress', function(event) {
  validate(event, 'charOnly');
});
$('input[name="lname"]').on('keypress', function(event) {
  validate(event, 'charOnly');
});
$('input[name="mobile"]').on('keypress', function(event) {
  validate(event, 'numbersOnly');
});
$('input[name="billing_pin"]').on('keypress', function(event) {
  validate(event, 'numbersOnly');
});
$('input[name="shipping_pin"]').on('keypress', function(event) {
  validate(event, 'numbersOnly');
});
$('input[name="billing_country"]').on('keypress', function(event) {
  validate(event, 'charOnly');
});
$('input[name="billing_city"]').on('keypress', function(event) {
  validate(event, 'charOnly');
});
$('input[name="billing_state"]').on('keypress', function(event) {
  validate(event, 'charOnly');
});
$('input[name="shipping_country"]').on('keypress', function(event) {
  validate(event, 'charOnly');
});
$('input[name="shipping_city"]').on('keypress', function(event) {
  validate(event, 'charOnly');
});
$('input[name="shipping_state"]').on('keypress', function(event) {
  validate(event, 'charOnly');
});

function validate(evt, type) {
  var theEvent = evt || window.event;
  // var regex = /[0-9]|\./;
  var charOnlyRegex = /^[A-Za-z]+$/;
  var numberOnlyRegex = /^[0-9]+$/;

  // Handle paste
  if (theEvent.type === 'paste') {
    key = event.clipboardData.getData('text/plain');
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }

  // character only
  if (type == "charOnly") {
    if (!charOnlyRegex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  // number only
  if (type == "numbersOnly") {
    if (!numberOnlyRegex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
}

// search box suggestion
$('.search_box').on('keyup', function() {
  $.ajax({
    url: "https://onninternational.com/search/suggestion",
    method: "POST",
    data: {
      _token: '38a3ofigojs3sr0M7092ifnHw89aF6ds2TfKvTyW',
      val: $(this).val()
    },
    beforeSend: function() {
      $('#searchResp').html('<div class="col-12">Please wait...</div>');
      // $('#joinUsMailResp').html('Please wait <i class="fas fa-spinner fa-pulse"></i>');
    },
    success: function(result) {
      if (result.status === 200) {
        var content = '';
        $.each(result.data, (key, value) => {
          content += `
                            <div class="searchbar-single-product">
                                <a href="${value.url}">
                                    <div class="d-flex">
                                        <img src="${value.image}" alt="" height="100">
                                        <div class="product-info">
                                            <h5>${value.name}</h5>
                                            <p>&#8377; ${value.offer_price}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            `;
        })

        $('#searchResp').html(content);
      } else {
        $('#searchResp').html('<div class="no-found text-center">' + result.message + '</div>');
      }
      // $('#searchResp').html('<div class="col-12">Please wait...</div>');
      // result.resp == 200 ? $icon = '<i class="fas fa-check"></i> ' : $icon = '<i class="fas fa-info-circle"></i> ';
      // $('#joinUsMailResp').html('<span class="success_message">'+ $icon+result.message + '</span>');
      // $('button').attr('disabled', false);
    }
  });
});
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 85) {
    return false;
  }
}

/*
		function validate(evt, type) {
			var theEvent = evt || window.event;
			// var regex = /[0-9]|\./;
			var regex = /^[A-Za-z]+$\d{10}/;

			// Handle paste
			if (theEvent.type === 'paste') {
				key = event.clipboardData.getData('text/plain');
			} else {
				// Handle key press
				var key = theEvent.keyCode || theEvent.which;
				key = String.fromCharCode(key);
			}

			if( regex.test(key) ) {
				if(type == 'numbersOnly') {
					theEvent.returnValue = false;
					if(theEvent.preventDefault) theEvent.preventDefault();
				}
			} else {
                // alert()
				if(type == 'charOnly') {
					theEvent.returnValue = false;
					if(theEvent.preventDefault) theEvent.preventDefault();
				}
				// console.log(theEvent.length)
			}
		}
        */

/* let chekoutAmount = getCookie('checkoutAmount');
// console.log(chekoutAmount);
if (chekoutAmount) {
    couponApplied(chekoutAmount);
}

// checkout page coupon applied design
function couponApplied(amount) {
    $('input[name="grandTotal"]').val(amount);
    $('#displayGrandTotal').text(amount);

    let couponContent = `
    <div class="cart-total">
        <div class="cart-total-label">
            COUPON APPLIED<br/>
            <a href="javascript:void(0)" onclick="removeAppliedCoupon(${amount})"><small>(Remove this coupon)</small></a>
        </div>
        <div class="cart-total-value">- ${amount}</div>
    </div>
    `;

    $('#appliedCouponHolder').html(couponContent);
} */

// let paymentGatewayAmount = chekoutAmount ? parseInt(chekoutAmount) * 100 : document.querySelector('[name="grandTotal"]').value * 100;
// let paymentGatewayAmount = parseInt($('#displayGrandTotal').text()) * 100;