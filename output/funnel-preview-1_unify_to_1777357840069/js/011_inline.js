// Order Cancellation controller
app.controller("OrderCancellationCtrl2", function($rootScope, $scope, $http) {
  //console.log("CancellationFormData : ",$scope.CancellationFormData);
  // //console.log("Inside OrderCancellationCtrl2");
  // $scope.CancellationFormData = {};

  $scope.CancellationFormData = {
    success_message: "You will receive an email within the next 24-48 hours to confirm your program changes. Please note that changes will not be applied until they are verified. For any additional questions, please call customer service at +1 (866) 673-3146 or email us at support@buymeridian.co for further assistance",
    order_email: "", // This will be filled dynamically with ngModel
    reason: "", // This will be filled dynamically with ngModel
    smtp_token: "5e492c4e-aef2-4837-8d61-259198bfa04f", // Manually added
    sender_mail: "support@buymeridian.co", // Manually added
    DBA_name: "Meridian Marketing", // Manually added
    cs_number: "+1 (866) 673-3146", // Manually added
    mail_sub: "Subscription Cancellation Confirmation for Your Order",
    program: "32679",
    new_product_id: 32679,
  };

  // $scope.$watch('CancellationFormData.program', function(newVal) {
  //   //console.log('Program changed to:', newVal);
  // }); 

  $scope.CancellationFormData1 = {
    success_message: "You will receive an email within the next 24-48 hours to confirm your program changes. Please note that changes will not be applied until they are verified. For any additional questions, please call customer service at +1 (866) 673-3146 or email us at support@buymeridian.co for further assistance",
    order_email: "", // This will be filled dynamically with ngModel
    reason: "", // This will be filled dynamically with ngModel
    smtp_token: "5e492c4e-aef2-4837-8d61-259198bfa04f", // Manually added
    sender_mail: "support@buymeridian.co", // Manually added
    DBA_name: "Meridian Marketing", // Manually added
    cs_number: "+1 (866) 673-3146", // Manually added
    mail_sub: "Subscription Modification Confirmation for Your Order",
    new_product_id: 32679
  };

  console.log("CancellationFormData : ", $scope.CancellationFormData);

  //  //console.log("CancellationFormDataAPI : ",SITE_BASE_URL + 'ajaxmail/cancelAllSubscription.php');

  $rootScope.getConfig();
  $scope.CancellationFormSubmitHandler2 = function() {
    console.log("CancellationFormData : ", $scope.CancellationFormData);
    $rootScope.errorHandler($scope.CancellationFormData, 'OrderCancellation');
    //console.log("Error ",$rootScope.errorMessages);
    if ($rootScope.errorMessages.length > 0) {
      $rootScope.processOverlay(false);
      $rootScope.modalShow();
      return true;
    }
    var forceRedirectPage = $scope.redirectTo;
    var forceRedirectTo = forceRedirectPage == null || forceRedirectPage == undefined ? null : forceRedirectPage;
    var successMessage = $scope.successMessage == null || $scope.successMessage == undefined ? 'Order cancellation successful!' : $scope.successMessage;
    $rootScope.processOverlay(true);

    if ($scope.CancellationFormData.reason == 'Cancel') {
      //  $scope.CancellationFormData.program = 'test';
      $http.post('ajaxmail/cancelAllSubscription.php', $scope.CancellationFormData).then(function(response) {

        //   //console.log("response : ",response.data.status);
        if (response.data.status == 200) {
          // successMessage = (response.data.apiResponse.hasOwnProperty('response_message') && response.data.apiResponse.response_message !== null) ? response.data.apiResponse.response_message : successMessage;
          $rootScope.processOverlay(false);
          $rootScope.errorMessages = [response.data.message];
          $rootScope.modalShow();
          if (forceRedirectTo != null) {
            var redirect_to = forceRedirectTo;
            setTimeout(function() {
              window.location.href = './' + redirect_to;
            }, 1000);
          }

        } else {
          $rootScope.processOverlay(false);
          // $rootScope.errorMessages = [response.data.apiResponse.response_message];
          $rootScope.errorMessages = ["All of your order subscriptions have been successfully cancelled."];
          $rootScope.modalShow();
        }
      }).catch(function(response) {
        $rootScope.processOverlay(false);
        $rootScope.pushErrorMessage(response);
        $rootScope.modalShow();
      }).finally(function() {
        $rootScope.processing = false;
      });

    } else {
      $scope.CancellationFormData.new_product_id = parseInt($scope.CancellationFormData.program, 10);
      $http.post('ajaxmail/modifyAllSubscription.php', $scope.CancellationFormData).then(function(response) {

        //   //console.log("response : ",response.data.status);
        if (response.data.status == 200) {
          // successMessage = (response.data.apiResponse.hasOwnProperty('response_message') && response.data.apiResponse.response_message !== null) ? response.data.apiResponse.response_message : successMessage;
          $rootScope.processOverlay(false);
          $rootScope.errorMessages = [response.data.message];
          $rootScope.modalShow();
          if (forceRedirectTo != null) {
            var redirect_to = forceRedirectTo;
            setTimeout(function() {
              window.location.href = './' + redirect_to;
            }, 1000);
          }

        } else {
          $rootScope.processOverlay(false);
          // $rootScope.errorMessages = [response.data.apiResponse.response_message];
          $rootScope.errorMessages = [$scope.CancellationFormData.success_message];
          $rootScope.modalShow();
        }
      }).catch(function(response) {
        $rootScope.processOverlay(false);
        $rootScope.pushErrorMessage(response);
        $rootScope.modalShow();
      }).finally(function() {
        $rootScope.processing = false;
      });
    }

  };


});
// Order Cancellation controller ends