(function() {
  function initScrollProgress() {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    const progressIndicator = document.querySelector('[data-progress-indicator]');

    if (!scrollContainer || !progressIndicator) return;

    function updateProgress() {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll > 0) {
        const scrollPercentage = (scrollLeft / maxScroll) * 100;
        progressIndicator.style.width = scrollPercentage + '%';

        // Update ARIA attribute
        const progressBar = progressIndicator.parentElement;
        if (progressBar) {
          progressBar.setAttribute('aria-valuenow', Math.round(scrollPercentage));
        }
      }
    }

    scrollContainer.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    // Initial update
    updateProgress();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollProgress);
  } else {
    initScrollProgress();
  }
})();