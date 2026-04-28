jQuery(window).scroll(function() {
  var scroll = jQuery(window).scrollTop();
  if (scroll > 120) {
    $('body').addClass('sticky-none');
  } else {
    $('body').removeClass('sticky-none');
  }
});
window.onscroll = function(e) {
  var scrolly = this.scrollY;
  if (this.oldScroll > scrolly) {
    // console.log('Scrolling up');
    $('body').addClass('sticky-header');
  } else {
    // console.log('Scrolling down');

    $('body').removeClass('sticky-header');
  }
  this.oldScroll = this.scrollY;
}

function updateMobileHeaderSpacer() {
  if (isMobile.any) {
    setTimeout(function() {
      // console.log('updating')
      $('.header-spacer').attr('style', 'height: ' + $('.header').outerHeight() + 'px');
    }, 500)
  }
}
$(function() {

  updateMobileHeaderSpacer();

  $(window).on('resize', function() {
    updateMobileHeaderSpacer();
  })
})