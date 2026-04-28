// Order Cancellation controller
app.controller("OrderCancellationCtrl4", function($rootScope, $scope, $http) {

  //  //console.log("Inside OrderCancellationCtrl4");
  $scope.ContactFormData = {
    name: '',
    email: '',
    order_id: '',
    product_name: '',
    reason: '',
    other_reason: '',
    smtp_token: "5e492c4e-aef2-4837-8d61-259198bfa04f", // Manually added
    sender_mail: "support@buymeridian.co", // Manually added
    DBA_name: "Meridian Marketing", // Manually added
    cs_number: "+1 (866) 673-3146", // Manually added
    mail_sub: "Request recieved for return",

  };

  //   //console.log("ContactFormData: ", $scope.ContactFormData);

  // //console.log("ContactFormDataFormDataAPI: ", SITE_BASE_URL + 'ajaxmail/cancelAllSubscription.php');

  $rootScope.getConfig();

  // Form validation function
  $scope.validateForm = function() {
    $rootScope.errorMessages = []; // Clear any previous errors

    // Validate required fields

    if (!$scope.ContactFormData.name || $scope.ContactFormData.name === '') {
      $rootScope.errorMessages.push('Name is required.');
    }
    if (!$scope.ContactFormData.email || $scope.ContactFormData.email === '') {
      $rootScope.errorMessages.push('Email is required.');
    }
    // if (!$scope.ContactFormData.phone_number || $scope.ContactFormData.phone_number === '') {
    //     $rootScope.errorMessages.push('Phone number is required.');
    // }
    if (!$scope.ContactFormData.reason || $scope.ContactFormData.reason === '') {
      $rootScope.errorMessages.push('Reason is required.');
    }
    if (!$scope.ContactFormData.product_name || $scope.ContactFormData.product_name === '') {
      $rootScope.errorMessages.push('Product Name is required.');
    }
    if (!$scope.ContactFormData.order_id || $scope.ContactFormData.order_id === '') {
      $rootScope.errorMessages.push('Order Id is required.');
    }

    // if (!$scope.ContactFormData.order_id || $scope.ContactFormData.order_id === '')      {
    //     $rootScope.errorMessages.push('Order Id is required.');
    // }


    // Validate email format
    if ($scope.ContactFormData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($scope.ContactFormData.email)) {
      $rootScope.errorMessages.push('Please enter a valid email address.');
    }

    // Check if the reason for cancellation is selected
    // if (!$scope.ContactFormData.reason || $scope.ContactFormData.reason === '') {
    //     $rootScope.errorMessages.push('Please select a reason for cancellation.');
    // }

    return $rootScope.errorMessages.length === 0;
  };

  // Submit handler
  $scope.ContactFormDataFormSubmitHandler3 = function() {
    // First, validate the form data
    if (!$scope.validateForm()) {
      // If validation fails, show error messages and return
      $rootScope.processOverlay(false);
      $rootScope.modalShow();
      return;
    }

    // Proceed with form submission if validation passes
    var forceRedirectPage = $scope.redirectTo;
    var forceRedirectTo = forceRedirectPage ? forceRedirectPage : null;
    var successMessage = $scope.successMessage ? $scope.successMessage : 'Request has been recieved !';
    $rootScope.processOverlay(true);

    // Send the cancellation request to the server
    $http.post('ajaxmail/limelight/returnForm.php', $scope.ContactFormData).then(function(response) {

      //  //console.log("Response: ", response.data.status);

      // Handle success
      if (response.data.status == 200) {
        $rootScope.processOverlay(false);
        $rootScope.errorMessages = [response.data.message];
        $rootScope.modalShow();

        if (forceRedirectTo) {
          setTimeout(function() {
            window.location.href = './' + forceRedirectTo;
          }, 1000);
        }
      } else {
        // Handle failure
        $rootScope.processOverlay(false);
        $rootScope.errorMessages = ["Your request has been received successfully."];
        $rootScope.modalShow();
      }
    }).catch(function(error) {
      // Handle errors from the HTTP request
      $rootScope.processOverlay(false);
      $rootScope.pushErrorMessage(error);
      $rootScope.modalShow();
    }).finally(function() {
      // Reset the processing state after the HTTP request
      $rootScope.processing = false;
    });
  };
});