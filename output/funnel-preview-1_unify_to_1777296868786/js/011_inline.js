// Full offer page controller
app.controller("LandingOfferPageCtrlTest", function($rootScope, $scope, $http, $compile, $timeout) {


  //console.log("inside custom one");


  $rootScope.controller_name = 'LandingOfferPageCtrl';
  // Google Captcha
  $rootScope.loadGoogleCaptcha();
  var captchaCallBack = function(res) {
    $rootScope.validateGogoleCaptcha = true;
  };
  $scope.publicKey = $rootScope.googleCaptchaPublicKey;
  window.captchaCallBack = captchaCallBack;
  // Google Captcha



  $rootScope.getCountries();
  $rootScope.fetchGeolocationData();
  $rootScope.getMonths();
  $rootScope.getYears();
  // Reverse sets the cc_type based on cc_number
  $scope.$watch('FullFormData.cc_number', function() {
    $rootScope.detectCardType('FullFormData', $scope);
  });
  // Browser country / state autofill patch
  $rootScope.browserAutofill('FullFormData');
  // Open footer links in popup
  $rootScope.initUtilities();
  // Campaign Switcher
  $rootScope.campaignSwitcher();
  // Insurance checkbox available
  $rootScope.enableInsurance('split_charge');

  // Get parameters from URL or hidden dynamic fields like campaign switcher
  $rootScope.getHiddenParameters = function(formData) {
    if (document.getElementsByName('coupon_code').length > 0 && $rootScope.couponValidated) {
      var couponCode = document.getElementById('coupon_code').value;
      formData.promo_code = couponCode;
    }
    if (formData.dynamicPrice !== undefined && formData.dynamicPrice == 1) {
      $rootScope.campaignsParameters.productPrice = 'product-price';
    }
    // Checking for new Cart system if found then overwrite the selectedProduct obj with new cart storage
    var selectedProduct = $rootScope.hasNewCartStorage('uniCart');
    if (selectedProduct == undefined || selectedProduct == null || selectedProduct.length < 1) return true;

    //console.log("campaignsParameters ",$rootScope.campaignsParameters);
    for (key in $rootScope.campaignsParameters) {
      //console.log("key under loop ",key);
      var tag = 'data-' + $rootScope.campaignsParameters[key];
      var value = "";
      var count = 0;
      for (var i in selectedProduct) {
        //console.log("key under selectedProduct ",i);
        var aProduct = selectedProduct[i];
        var aValue = aProduct[key];
        //console.log("key under aValue ",aValue);
        if (aValue == undefined || aValue == '') {
          continue;
        } else {
          if (count > 0) value += ",";
          value += aValue;
        }
        count++;
      }

      // //console.log("key under selectedProduct ",i);

      if (value == undefined || value == '') {
        if (formData[key] != undefined && formData[key] != null) {
          delete formData[key];
        }
      } else {
        formData[key] = value;
      }
    }
  };

  //Paypal Payments end
  // Full offer form submit handler
  $scope.landingOfferPageSubmitHandler = function($event, internalCall) {
    let combinedData = angular.merge({}, $rootScope.FullFormData, {
      cart: $scope.cart
    });


    //console.log("$rootScope.FullFormData ",combinedData);

    $rootScope.paypalExpress($event, $rootScope.FullFormData);

    if ($rootScope.configData.api_type == 'checkout' && typeof internalCall == 'undefined') {
      $rootScope.checkoutPrefillCardData($event, $rootScope.FullFormData, arguments.callee);
      return;
    }
    $rootScope.getHiddenParameters($rootScope.FullFormData);


    var forceRedirectPage = $scope.redirectTo ? $scope.redirectTo : $rootScope.forceRedirect();
    var forceRedirectTo = forceRedirectPage == null ? 'thank-you' : forceRedirectPage;
    if (document.getElementsByName('insureshipCheckbox').length > 0) {
      if (document.getElementsByName('insureshipCheckbox')[0].checked) {
        $rootScope.FullFormData.insureshipCheckbox = true;
      } else {
        $rootScope.FullFormData.insureshipCheckbox = false;
      }
    }
    if ($rootScope.configData.api_type == 'Square') {
      $rootScope.FullFormData.nonce = $rootScope.SquarePayment.nonce;
    }

    $rootScope.errorHandler($rootScope.FullFormData, 'full').then(function() {
      var campaignId = '';
      for (var i in $rootScope.cart) {
        if ('object' === typeof $rootScope.cart[i] && $rootScope.cart[i].hasOwnProperty('campaignId')) {
          var campaignId = $rootScope.cart[i]['campaignId'];
        }
      }
      var redirect_to = parseInt($rootScope.configData.enable_upsells) ? 'upsell' : forceRedirectTo;
      $rootScope.processOverlay(true);
      $rootScope.FullFormData.current_url = window.location.href;
      $rootScope.FullFormData.next_url = './' + redirect_to;
      $rootScope.FullFormData.campaignId = campaignId;
      //console.log("$rootScope.getHiddenParameters($rootScope.FullFormData) ",$rootScope.getHiddenParameters($rootScope.FullFormData));
      //console.log("FullFormData ",$rootScope.FullFormData);
      $rootScope.initializePaayThreeDS().then(function() {
        $http.post(SITE_BASE_URL + '/ajaxmail/processorder.php', combinedData).then(function(response) {



          const res = response.data;
          //console.log("response from api", res);

          if (res && res.success) {

            if (res.declineReason) {
              $rootScope.processOverlay(false);
              $rootScope.errorMessages = ['Transaction has been declined.'];
              $rootScope.modalShow();
              return;
            }

            // If HTML is returned (3DS, Hosted Payment Page etc.)
            if (res.hasOwnProperty('is_html') && res.is_html) {
              document.write(res.html_data);
              document.close();
              return;
            }

            // Extracting returned IDs from PHP response
            const prospectID = res.apiResponse?.prospectId || '';
            const customerID = res.apiResponse?.customerId || '';
            const orderID = res.order_id || '';

            $rootScope.triggerMail(false, orderID);

            // Build redirect URL
            let url = './' + redirect_to + '?';
            if (prospectID) url += 'prospect_id=' + prospectID + '&';
            url += 'customer_id=' + customerID + '&order_id=' + orderID;

            window.location.href = url;

          } else {
            // Handle failure (invalid, declined, or server error)
            $rootScope.processOverlay(false);
            $rootScope.pushErrorMessage(res);
            $rootScope.modalShow();

            // Handle Google Captcha if enabled
            if (res.isActiveCaptcha !== undefined) {
              $rootScope.configData.show_google_captcha = res.isActiveCaptcha;
              $rootScope.loadGoogleCaptcha();
              $rootScope.validateGogoleCaptcha = false;
              if (window.grecaptcha !== undefined) window.grecaptcha.reset();
            }

            // Handle Slider Captcha (MaxMind) if enabled
            if (res.result && res.result.isSliderCaptcha !== undefined) {
              $rootScope.configData.show_slider_capcha = res.result.isSliderCaptcha;
              $rootScope.loadSliderCaptcha();
            }
          }

        }).catch(function(error) {
          $rootScope.processOverlay(false);
          $rootScope.pushErrorMessage(error);
          $rootScope.modalShow();
        }).finally(function() {
          $rootScope.processing = false;
        });
      });

    }).catch(function() {
      $rootScope.modalShow();
    });
  };


});