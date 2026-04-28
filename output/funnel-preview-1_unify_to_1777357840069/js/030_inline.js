$('.hr1').click(function() {
  if ($('input:radio[name="offer_option"]:checked').length == 0) {
    alert('Please select a package before proceeding to checkout');
    return false;
  } else {
    window.location.href = '#';
  }
});