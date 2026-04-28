document.addEventListener('DOMContentLoaded', function() {
  function handleResize() {
    if (window.innerWidth >= 767) {
      const detailsElements = document.querySelectorAll('.footer-menu-item-details');

      detailsElements.forEach(function(detailsElement) {
        detailsElement.setAttribute('open', 'open');
      });
    } else {
      const detailsElements = document.querySelectorAll('.footer-menu-item-details');

      detailsElements.forEach(function(detailsElement) {
        detailsElement.removeAttribute('open');
      });
    }
  }

  handleResize();

  window.addEventListener('resize', handleResize);
});