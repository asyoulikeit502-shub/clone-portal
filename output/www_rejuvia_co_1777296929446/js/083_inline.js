document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('collection-products-header');
  const productsList = document.getElementById('products-list');
  const plusIcon = document.getElementById('plus-icon');
  const lessIcon = document.getElementById('less-icon');

  header.addEventListener('click', function() {
    if (productsList.style.display === 'none' || productsList.style.display === '') {
      // Mostrar la lista de productos
      productsList.style.display = 'block';
      plusIcon.style.display = 'none'; // Ocultar el icono de más
      lessIcon.style.display = 'block'; // Mostrar el icono de menos
    } else {
      // Ocultar la lista de productos
      productsList.style.display = 'none';
      plusIcon.style.display = 'block'; // Mostrar el icono de más
      lessIcon.style.display = 'none'; // Ocultar el icono de menos
    }
  });
});