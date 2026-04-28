$(document).ready(function() {
  $("#success-alert").hide();
  $("#cart").click(function showAlert() {
    $("#success-alert").fadeTo(4000, 500).slideUp(500, function() {
      $("#success-alert").slideUp(4000);
    });
  });
});