(function(Flits2) {
  Flits2.Metafields.IS_SOCIAL_LOGIN_PAID && Flits2.Metafields.IS_SOCIAL_LOGIN_ENABLE && window.flitsObjects.allCssJs.socialLoginJs && Flits2.LoadStyleScript("socialLoginJs", window.flitsObjects.allCssJs.socialLoginJs.url), Flits2(document).on("click", ".flits-custom-warranty-button", function(event) {
    let id = Flits2(this).attr("aria-controls");
    Flits2("body > navigation-drawer#" + id).not(":last").remove()
  }), Flits2(document).on("toggle", function(event) {
    window.location.pathname == "/account" && Flits2("body").parent().removeClass("lock")
  }), Flits2(document).on("Flits:SocialLoginAutomaticCode:Loaded", function(event) {
    var data = event.detail,
      el = data.el,
      parent = data.parent,
      cloneNode = data.cloneNode,
      socialLoginTitle = '<div class="social-login-title"> <span>login with social or</span></div>';
    cloneNode.append(socialLoginTitle), parent.prepend(cloneNode), setTimeout(function() {
      window.location.pathname == "/account/register" ? Flits2(".shopify-section--main-customers-register .flits-social-login-container").insertAfter(".shopify-section--main-customers-register .page-header .page-header__text-wrapper h1") : Flits2("#login-form-container .flits-social-login-container").insertAfter("#login-form-container .page-header .page-header__text-wrapper h1")
    }, 1e3)
  }), Flits2(document).on("Flits:Navigation:Loaded", function(event) {
    for (var settings = event.detail.settings, listToDelete = ["My Wishlist", "Log Out"], i = 0; i < settings.navs.length; i++) {
      var obj = settings.navs[i];
      listToDelete.indexOf(obj.title) !== -1 && (settings.navs.splice(i, 1), i--)
    }
    var obj = {
      title: "Club Audiophile Rewards",
      url: "#club-audiophile-rewards",
      target: 0,
      badge: null,
      icon: null,
      isShow: 1,
      loader: null,
      body_html: '<div class="nector_reward_tab"></div>'
    };
    settings.navs.splice(2, 0, obj), setTimeout(function() {
      var customContactInfo = Flits2(".headphone-zone-contact-us-body").clone();
      Flits2(".headphone-zone-contact-us-main").html(customContactInfo), Flits2(".headphone-zone-contact-us-main .headphone-zone-contact-us-body").show()
    }, 3e3)
  }), Flits2(document).on("click", ".flits-profile-edit-button", function(event) {
    Flits2(".flits-profile-logout-btn").hide()
  }), Flits2(document).on("click", ".flits-profile-cancel-button", function(event) {
    Flits2(".flits-profile-logout-btn").show()
  }), Flits2(document).on("Flits:myProfile:Updated", function() {
    Flits2(".flits-profile-logout-btn").show()
  });

  function flitsCustomIntregation() {
    var nector_integrated_page = Flits2(".nector_flits").children();
    Flits2("#flits_tab_club-audiophile-rewards").find(".nector_reward_tab").children().length > 0 || Flits2("#flits_tab_club-audiophile-rewards").find(".nector_reward_tab").append(nector_integrated_page)
  }
  Flits2(document).on("Flits:AccountPage:Loaded", function(event) {
    setTimeout(function() {
      flitsCustomIntregation()
    }, 1400)
  }), Flits2(document).on("Flits:order:AllLoaded", function(event) {
    setTimeout(function() {
      Flits2(".flits-order-list-container .flits-pagination-div ul.flits-pagination li:first").click()
    }, 1500)
  }), Flits2(document).on("Flits:SocialLogin:Loaded", function(event) {
    var data = event.detail;
    data.settings.domSelector = [
      ["form#customer_login", !0],
      ["form#create_customer", !0],
      ["form#RegisterForm", !0],
      ['form[action="/account/login"]:not(#customer_login_guest)', !0],
      ['form[action="/account"][method="post"]', !0]
    ]
  }), Flits2(document).on("Flits:SocialLogin:Loaded", function(event) {
    setTimeout(function() {
      location.pathname.indexOf("/account") == -1 && Flits2.setLocalStorage("flits_before_login_url", "/account")
    }, 800)
  }), Flits2(window).load(function() {
    location.pathname.indexOf("/account") == -1 && (location.pathname.indexOf("checkout") != -1 ? Flits2.setLocalStorage("flits_before_login_url", location.pathname) : Flits2.setLocalStorage("flits_before_login_url", "/account"))
  }), Flits2(window).on("Flits:setPhoneCountryCode:Loaded", function(event) {
    Flits2.settings = event.detail.settings, Flits2.settings.country_list = [{
      countryName: "India",
      code: "IN",
      phoneCode: "91"
    }]
  }), Flits2(document).on("Flits:AccountPage:Loaded", function(event) {
    var data = event.detail;
    data.settings.active_tab = "#order", Flits2.shopCountryName = "India"
  }), Flits2(document).on("Flits:order:Loaded", function(event) {
    var data = event.detail;
    console.log(data)
  }), Flits2(document).on("click", ".cancelBtn", function() {
    cancel_button = Flits2(this)
  }), Flits2(document).on("change", ".cancelOrderReason", function() {
    (Flits2(this).val() == "Order would not arrive on time" || Flits2(this).val() == "Product price too high" || Flits2(this).val() == "Need to change shipping address" || Flits2(this).val() == "Need to change payment method" || Flits2(this).val() == "Others" || Flits2(this).val() == "I want to change the variant (For ex: Black to Blue)") && (Flits2("#formModal .modal__content").empty(), Flits2("#reason_date").trigger("click"), reason = Flits2(this).val()), reason == "Order would not arrive on time" && Flits2(`
              <!-- Modal Header -->
              <div class="modal-header">
				<span>&nbsp;</span>
                 <button type="button" class="modal__close-button" data-action="close" title="close">
                     <svg focusable="false" width="14" height="14" class="icon icon--close" viewBox="0 0 14 14">
                       <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                     </svg>
              </button>        
              </div>

              <!-- Modal body -->
              <div class="modal-body" style="overflow:hidden; text-align: center;">
				<div class="input__wrapper" style="display:none">
                  <label for="requested_single_date"><span class="warning">*</span> Requested Delivery Date:</label>
                  <input type="date" id="requested_single_date"/>
                </div>
                <div class="input__wrapper">
                  <label for="urgency_text"><span class="warning">*</span> When would you like delivery?</label>
                  <textarea  id="urgency_text" placeholder="Please elaborate" class="required"></textarea>
                </div>
                <div class="input__wrapper date_range_holder">
                  <div class="date_range">
					<label for="requested_Start_date"> Deliver after this date:</label>
                    <input type="date" id="requested_Start_date" />
                  </div>
                   <div class="date_range">
                    <label for="requested_end_date">Deliver before this date:</label>
                    <input type="date" id="requested_end_date" />
                  </div>
                </div>
                <p class="error_text warning"></p>
              </div>
            <!-- Modal body -->
			<div class="modal-footer">
                  <button id="cancelOrderFormSubmit" type="button" class="btn" style="color:white">Submit</button>
                  <button type="button" class="btn select_reverse" data-action="close" style="color:white">Don't Cancel</button>
                </div>`).appendTo("#formModal .modal__content"), reason == "I want to change the variant (For ex: Black to Blue)" && Flits2(`
              <!-- Modal Header -->
              <div class="modal-header">
				<span>&nbsp;</span>
               <button type="button" class="modal__close-button" data-action="close" title="close">
                     <svg focusable="false" width="14" height="14" class="icon icon--close" viewBox="0 0 14 14">
                       <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                     </svg>
              </button>      
              </div>

              <!-- Modal body -->
              <div class="modal-body" style="overflow:hidden; text-align: center;">

                <div class="input__wrapper">
                  <label for="more_details"><span class="warning">*</span> Please share more details</label>
                  <textarea required id="more_details" placeholder="Enter details here..." class="required"></textarea>
                </div>
				 <p class="error_text warning"></p>

              </div>
            <!-- Modal body -->
                <div class="modal-footer">
                  <button id="cancelOrderFormSubmit" type="button" class="btn" style="color:white">Submit</button>
                  <button type="button" class="btn select_reverse" data-action="close" style="color:white">Don't Cancel</button>
                </div>`).appendTo("#formModal .modal__content"), reason == "Product price too high" && Flits2(`<!-- Modal Header -->
              <div class="modal-header">
				<span>&nbsp;</span>
                <button type="button" class="modal__close-button" data-action="close" title="close">
                     <svg focusable="false" width="14" height="14" class="icon icon--close" viewBox="0 0 14 14">
                       <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                     </svg>
              </button>  
              </div>

              <!-- Modal body -->
              <div class="modal-body" style="overflow:hidden; text-align: center;">
                <div class="input__wrapper">
                  <label for="cheap_link"><span class="warning">*</span> Please share the link of the product being priced cheaper than Headphone Zone.</label>
                  <input type="url" id="cheap_link" class="required" placeholder="Paste URL here"/>
                </div>
                <p class="error_text warning"></p>

              </div>
            <!-- Modal body -->
                <div class="modal-footer">
                  <button id="cancelOrderFormSubmit" type="button" class="btn" style="color:white">Submit</button>
                  <button type="button" class="btn select_reverse" data-action="close" style="color:white">Don't Cancel</button>
                </div>`).appendTo("#formModal .modal__content"), reason == "Need to change payment method" && Flits2(`
              <!-- Modal Header -->
              <div class="modal-header">
				<span>&nbsp;</span>
                <button type="button" class="modal__close-button" data-action="close" title="close">
                     <svg focusable="false" width="14" height="14" class="icon icon--close" viewBox="0 0 14 14">
                       <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                     </svg>
              </button>         
              </div>

              <!-- Modal body -->
              <div class="modal-body" style="overflow:hidden; text-align: center;">
                <div class="input__wrapper">
                  <label for="payment_method"><span class="warning">*</span> What payment method would you like to use?</label>
                  <textarea  id="payment_method" placeholder="Enter your preferred payment method here" class="required"></textarea>
                </div>
                <p class="error_text warning"></p>

              </div>
            <!-- Modal body -->
                <div class="modal-footer">
                  <button id="cancelOrderFormSubmit" type="button" class="btn" style="color:white">Submit</button>
                  <button type="button" class="btn select_reverse" data-action="close" style="color:white">Don't Cancel</button>
                </div>`).appendTo("#formModal .modal__content"), reason == "Need to change shipping address" && Flits2(`
              <!-- Modal Header -->
              <div class="modal-header">
				  <span>&nbsp;</span>	
                  <button type="button" class="modal__close-button" data-action="close" title="close">
                     <svg focusable="false" width="14" height="14" class="icon icon--close" viewBox="0 0 14 14">
                       <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                     </svg>
              </button> 
              </div>

              <!-- Modal body -->
              <div class="modal-body" style="overflow:hidden; text-align: center;">
                <div class="input__wrapper">
                  <label for="request__address"><span class="warning">*</span> Please share the updated delivery address:</label>
                  <textarea  id="request__address" placeholder="Enter your Address here" class="required"></textarea>
                </div>
                <div class="input__wrapper">
                  <label for="request__pincode"><span class="warning">*</span> Enter Pincode:</label>
                  <input type="number" id="request__pincode" max="6" placeholder ="Enter your 6 digit pincode" class="required" />
                </div>
                <p class="error_text warning"></p>

              </div>
            <!-- Modal body -->
                <div class="modal-footer">
                  <button id="cancelOrderFormSubmit" type="button" class="btn" style="color:white">Submit</button>
                  <button type="button" class="btn select_reverse" data-action="close" style="color:white">Don't Cancel</button>
                </div>`).appendTo("#formModal .modal__content"), reason == "Others" && Flits2(`
              <!-- Modal Header -->
              <div class="modal-header">
				   <span>&nbsp;</span>
                   <button type="button" class="modal__close-button" data-action="close" title="close">
                     <svg focusable="false" width="14" height="14" class="icon icon--close" viewBox="0 0 14 14">
                       <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                     </svg>
              </button>         
              </div>

              <!-- Modal body -->
              <div class="modal-body" style="overflow:hidden; text-align: center;">
                <div class="input__wrapper">
                  <label for="request__reason"><span class="warning">*</span> Please share why you would like to cancel your order. The more information we have, the better we'll be able to help.</label>
                  <textarea  id="request__reason" placeholder="Enter your reason here" class="required"></textarea>
                </div>
                <p class="error_text warning"></p>

              </div>
            <!-- Modal body -->
            <div class="modal-footer">
                <button id="cancelOrderFormSubmit" type="button" class="btn" style="color:white">Submit</button>
                <button type="button" class="btn select_reverse" data-action="close" style="color:white">Don't Cancel</button>
            </div>`).appendTo("#formModal .modal__content")
  }), Flits2(document).on("click", "#reason_date", function() {
    order_id = cancel_button.attr("data_id"), line_item_id = cancel_button.attr("data_line_item_id"), customer_id = Flits2.customer_id
  }), Flits2(document).on("click", ".close, .select_reverse", function() {
    Flits2("select.cancelOrderReason").val("I don't want this product any more").change()
  }), Flits2(document).on("click", "#cancelOrderFormSubmit", function() {
    let data = {},
      single_date = "",
      urgent_text = "",
      requested_end_date = "",
      requested_start_date = "",
      cheap_link = "",
      request_address = "",
      request_pincode = "",
      other = "",
      variant_change = "",
      payment_method = "",
      help_required = "";
    reason == "Order would not arrive on time" && (requested_start_date = Flits2("#requested_Start_date").val(), requested_end_date = Flits2("#requested_end_date").val(), single_date = "00/00/0000", urgent_text = Flits2("#urgency_text").val(), requested_start_date && !requested_end_date ? Flits2("#requested_end_date").addClass("input_error") : !requested_start_date && requested_end_date ? Flits2("#requested_start_date").addClass("input_error") : Flits2("#requested_start_date, #requested_end_date").removeClass("input_error")), reason == "I want to change the variant (For ex: Black to Blue)" && (variant_change = Flits2("#more_details").val()), reason == "Product price too high" && (cheap_link = Flits2("#cheap_link").val()), reason == "Need to change shipping address" && (request_address = Flits2("#request__address").val(), request_pincode = Flits2("#request__pincode").val().toString()), reason == "Need to change payment method" && (payment_method = Flits2("#payment_method").val()), reason == "Others" && (other = Flits2("#request__reason").val()), Flits2(".required").each(function() {
      Flits2(this).val() ? Flits2(this).removeClass("input_error") : Flits2(this).addClass("input_error")
    }), request_pincode && (request_pincode.length < 6 || request_pincode.length > 6 ? Flits2("#request__pincode").addClass("input_error pin_error") : Flits2("#request__pincode").removeClass("input_error"));
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
      regex = new RegExp(expression);
    if (cheap_link.match(regex) ? Flits2("#cheap_link").removeClass("input_error url_error") : Flits2("#cheap_link").addClass("input_error url_error"), Flits2("#formModal input, #formModal textarea").hasClass("pin_error") && Flits2("#formModal input, #formModal textarea").hasClass("input_error")) Flits2(".error_text").text("Please enter valid pin code").show();
    else if (Flits2("#formModal input, #formModal textarea").hasClass("url_error") && Flits2("#formModal input, #formModal textarea").hasClass("input_error")) Flits2(".error_text").text("Please enter valid url").show();
    else if (Flits2("#formModal input, #formModal textarea").hasClass("input_error")) Flits2(".error_text").text("Please fill all the required field").show();
    else {
      $btn = Flits2(this), Flits2(this).text("Processing"), Flits2(this).attr("disabled", !0), Flits2(this).css("background", "#444444;"), Flits2(".error_text").hide(), reason == "Order would not arrive on time" && (data = {
        customer_requested_delivry_date: single_date,
        urgency_details: urgent_text,
        customer_requested_delivry_date_range: requested_start_date + " " + requested_end_date,
        reason,
        order_id,
        line_item_id,
        customer_id
      }), reason == "I want to change the variant (For ex: Black to Blue)" && (data = {
        reason,
        more_details: variant_change,
        order_id,
        line_item_id,
        customer_id
      }), reason == "I would like to choose another product" && (data = {
        reason,
        order_id,
        line_item_id,
        customer_id
      }), reason == "Product price too high" && (data = {
        cheap_price_link: cheap_link,
        reason,
        order_id,
        line_item_id,
        customer_id
      }), reason == "Need to change payment method" && (data = {
        reason,
        order_id,
        line_item_id,
        customer_id,
        payment_method
      }), reason == "Need to change shipping address" && (data = {
        reason,
        order_id,
        line_item_id,
        customer_id,
        updated_delivery_address: request_address,
        pincode: request_pincode
      }), reason == "Others" && (data = {
        reason,
        order_id,
        line_item_id,
        customer_id,
        reason_for_cancellation: other
      });
      var settings = {
        timeout: 1e4,
        async: !0,
        crossDomain: !0,
        url: "https://cors-anywhere.herokuapp.com/https://cancel.headphonezone.in/cancel/api",
        method: "POST",
        processData: !1,
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      };
      Flits2.ajax(settings).done(function(response) {
        Flits2(".close").click(), Flits2("#success").trigger("click"), Flits2("#successModal .response_text").text(response.msg).addClass("success"), cancel_button.val("Cancellation Requested").css("color", "#C4C4C4").prop("disabled", !0)
      }).fail(function(response, textStatus) {
        $btn.prop("disabled", !0), $btn.text("cancel"), Flits2(".error_text").text("oops! some error occurred. Try again later").show(), setTimeout(function() {
          $btn.attr("disabled", !1)
        }, 3e3)
      })
    }
  });
  var dummyButtonInterval;
  Flits2(document).on("click", ".dummy__button", function() {
    var dateData = Flits2(this).attr("data-order-date"),
      countDownDate = new Date(dateData).getTime();
    document.getElementById("time").innerHTML = "", clearInterval(dummyButtonInterval2);
    var dummyButtonInterval2 = setInterval(function() {
      var now = new Date().getTime(),
        distance = now - countDownDate;
      if (Math.floor(distance / 1e3 / 3600) >= 1) {
        clearInterval(dummyButtonInterval2), document.getElementById("time").innerHTML = "", location.reload();
        return
      }
      var minute = 59 - Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60)),
        second = 60 - Math.floor(distance % (1e3 * 60) / 1e3);
      document.getElementById("time").innerHTML = minute + "mins " + second + "s "
    }, 1e3)
  }), Flits2(document).on("click", ".flits-order-action-row [data-toggle='modal']", function() {
    var el = Flits2(this),
      target = el.attr("data-target");
    Flits2(target).attr("open", "true"), Flits2(target).css("display", "block")
  }), Flits2(document).on("click", ".flits-modal-content [data-action='close']", function() {
    Flits2(this).parents(".flits-modal-content").hide(), Flits2(this).parents(".flits-modal-content").removeAttr("open")
  }), Flits2(document).on("click", ".flits-order-cancel", function() {
    Flits2(".flits-custom-overlay, .flits-custom-popup").fadeIn()
  }), Flits2(document).on("click", ".flits-custom-close-popup", function() {
    Flits2(".flits-custom-overlay, .flits-custom-popup").fadeOut()
  }), Flits2(document).on("click", ".flits-custom-overlay", function() {
    Flits2(".flits-custom-overlay, .flits-custom-popup").fadeOut()
  }), Flits2(document).on("click", ".flits-custom-popup", function(event) {
    event.stopPropagation()
  }), Flits2(document).on("click", "#raise-ticket", function() {
    alert("Handle the action for raising a ticket here"), Flits2(".flits-custom-overlay, .flits-custom-popup").fadeOut()
  }), Flits2(document).on("click", "#flits-temp-invoice-button", function(event) {
    Flits2(".flits-invoice-popup-main").addClass("active")
  }), Flits2(document).on("click", ".flits-invoice-popup-close", function(event) {
    Flits2(".flits-invoice-popup-main").removeClass("active")
  })
})(Flits);
let reason = "",
  order_id = "",
  line_item_id = "",
  customer_id = "",
  cancel_button = "";
var dataObj = {},
  textId = "",
  orderNote = "";

function inputOrderDetails(event) {
  let orderId = Flits(event.target).attr("data_id"),
    lineItemId = Flits(event.target).attr("data_line_item_id"),
    shopName = "headphone-zone",
    customerId = Flits(event.target).attr("data_customer_id");
  orderNote = Flits(event.target).attr("data_order_note"), dataObj = {
    shop_name: shopName,
    order_id: orderId,
    customer_id: customerId,
    line_item_id: lineItemId,
    note: orderNote
  }, textId = "[data_line_item_id=" + lineItemId + "]"
}

function cancelOrderReasonWithCalling(event) {
  let reason2 = Flits(".cancelOrderReason").val();
  dataObj.reason = reason2, cancelOrder(event)
}

function cancelOrder(event) {
  console.log(dataObj), console.log(textId), console.log(orderNote);
  let dataStringObj = JSON.stringify(dataObj),
    apiURL = "https://cancel.headphonezone.in/cancel/api";
  dataObj.reason == "I want to change the variant (For ex: Black to Blue)" && (apiURL = "https://cancel.headphonezone.in/cancel/api");
  var settings = {
    async: !0,
    crossDomain: !0,
    url: apiURL,
    method: "POST",
    processData: !1,
    data: dataStringObj,
    headers: {
      "Content-Type": "application/json"
    },
    beforeSend: function(e) {
      Flits(textId).html("Processing"), Flits(textId).attr("disabled", !0), Flits(textId).css("color", "green")
    },
    success: function(e) {
      Flits(textId).html("Cancelled"), Flits(textId).css("text-transform", "uppercase"), Flits(textId).attr("disabled", !0), Flits(textId).css("color", "#d54d4d"), cancelledOrderCallbackMarmeto(event)
    },
    error: function(e) {
      Flits(textId).val("Error Occured"), Flits(textId).css("color", "#ff9494"), setTimeout(function() {
        Flits(textId).val("Cancel"), Flits(textId).css("color", "#03a196"), Flits(textId).attr("disabled", !1)
      }, 3e3)
    }
  };
  Flits.ajax(settings).done(function(response) {
    console.log(response), dataObj = {}, textId = "", orderNote = ""
  })
}

function cancelledOrderCallbackMarmeto(event) {
  var t = dataObj.order_id,
    e = "Order is cancelled successfully.";
  ["I want to change the variant (For ex: Black to Blue)", "Order would not arrive on time", "Product price too high", "Need to change shipping address", "Others"].includes(dataObj.reason) && (Flits('.flits-order-row[data-order-id="' + t + '"] .flits-order-cancel-label').html("Cancellation Requested"), e = "Order cancellation request sent successfully"), Flits('.flits-order-row[data-order-id="' + t + '"] .flits-order-cancel-label').removeClass("flits-d-none"), flitsSnackbar.show({
    text: e,
    pos: "bottom-center",
    showAction: !1,
    customClass: "flits-alert-success"
  })
}
//# sourceMappingURL=/cdn/shop/t/516/assets/flits_custom.js.map?v=140435415037100550031776948164