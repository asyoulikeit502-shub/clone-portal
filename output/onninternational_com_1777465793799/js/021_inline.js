function updateComfortSection($el) {
  $('.our-exclusives-color').removeClass('active');
  $el.addClass('active');
  for (let i = 1; i <= 4; i++) {
    const img = $el.data('img' + i);
    const name = $el.data('name' + i);
    const link = $el.data('link' + i);
    const $col = $('#comfort_link' + i).closest('.col-xl-3');
    if (!name || !link || link === '#') {
      $col.hide();
    } else {
      $col.show();
      const $img = $('#comfort_img' + i);
      $img.css('visibility', 'hidden');
      $('#comfort_name' + i).text(name);
      $('#comfort_link' + i).attr('href', link);
      $img.off('load error').one('load', function() {
        $(this).css('visibility', 'visible');
      }).one('error', function() {
        $(this).css('visibility', 'visible');
      });
      $img.attr('src', img);
      if ($img[0].complete) {
        $img.css('visibility', 'visible');
      }
    }
  }
}
$('.our-exclusives-color').on('mouseenter click', function() {
  updateComfortSection($(this));
});
updateComfortSection($('.our-exclusives-color').first());