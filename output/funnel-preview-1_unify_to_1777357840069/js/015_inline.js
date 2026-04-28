$(function() {
  setInterval(function() {
    if ($("#reward-terms-hid").hasClass("ng-hide")) {
      $(".member_item").addClass("col-lg-3");
    } else {
      $(".member_item").removeClass("col-lg-3");
    }
  }, 100);
});