$(document).ready(function() {
  var $faqSection = $('.category-faq-section .cms_context');
  if ($faqSection.length) {
    var $headings = $faqSection.find('.faq_heading');
    var $contents = $faqSection.find('.faq_content');
    $contents.hide();
    $headings.removeClass('active');
    if ($headings.length) {
      $headings.first().addClass('active');
      $headings.first().next('.faq_content').show();
    }
    $headings.off('click.categoryFaq').on('click.categoryFaq', function() {
      var $currentHeading = $(this);
      var $currentContent = $currentHeading.next('.faq_content');
      var isActive = $currentHeading.hasClass('active');
      $headings.removeClass('active');
      $contents.stop(true, true).slideUp();
      if (!isActive) {
        $currentHeading.addClass('active');
        $currentContent.stop(true, true).slideDown();
      }
    });
  }
  $('.footer-content-wrapper').each(function() {
    const $content = $(this).find('.footer-content');
    const $btnWrapper = $(this).find('.read-more-btn-wrapper');
    if ($content[0].scrollHeight <= 100) {
      $content.removeClass('collapsed');
      $btnWrapper.addClass('d-none');
    }
  });
  $('.read-more-btn').on('click', function() {
    const $btn = $(this);
    const $content = $btn.closest('.footer-content-wrapper').find('.footer-content');
    $content.toggleClass('collapsed expanded');
    $btn.toggleClass('active');
    if ($btn.hasClass('active')) {
      $btn.html('Read Less <i class="fas fa-chevron-down"></i>');
    } else {
      $btn.html('Read More <i class="fas fa-chevron-down"></i>');
    }
  });
});