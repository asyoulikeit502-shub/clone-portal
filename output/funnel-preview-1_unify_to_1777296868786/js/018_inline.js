$(document).ready(function() {
  $(".prod_btn").click(function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    console.log("Product added to cart");

    $('#success-alert').css('z-index', '99999999');
    $("#success-alert").fadeTo(4000, 500).slideUp(500, function() {
      $("#success-alert").slideUp(2000);
    });

    // window.location.href = 'cart';
  });
});