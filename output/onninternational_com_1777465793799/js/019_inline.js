$('.shop-look .shop-look-product-card1').css('display', 'none');
$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function() {
  $('.shop-look-product-card').hide();
});
$('.shop-look').on('mouseenter', '.hotspot', function() {
  const container = $(this).closest('.shop-category-wrapper');
  const card = container.find('.shop-look-product-card');
  card.hide();
  card.find('a').attr('href', '#');
  card.find('img').attr('src', '');
  card.find('h4').text('');
  card.find('.price').text('');
  const link = $(this).data('link');
  const img = $(this).data('img');
  const name = $(this).data('name');
  const price = $(this).data('price');
  card.find('a').attr('href', link);
  card.find('img').attr('src', img);
  card.find('h4').text(name);
  card.find('.price').text(price);
  card.css('display', 'flex');
});