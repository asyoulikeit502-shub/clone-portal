document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#shopify-section-template--18085670322315__plp_single_product_video_testimonials_DbT4Ra .video--items');
  const items = document.querySelectorAll('#shopify-section-template--18085670322315__plp_single_product_video_testimonials_DbT4Ra .video-testimonials-item');
  const pagination = document.querySelector('#shopify-section-template--18085670322315__plp_single_product_video_testimonials_DbT4Ra .video-pagination');

  // Create pagination bullets dynamically based on items
  items.forEach((_, index) => {
    const bullet = document.createElement('span');
    bullet.classList.add('bullet');
    if (index === 0) bullet.classList.add('active');
    bullet.dataset.index = index;
    bullet.addEventListener('click', () => scrollToItem(index));
    pagination.appendChild(bullet);
  });

  const bullets = document.querySelectorAll('#shopify-section-template--18085670322315__plp_single_product_video_testimonials_DbT4Ra .bullet');

  // Intersection Observer setup for full visibility
  const observerOptions = {
    root: container,
    rootMargin: '0px',
    threshold: 1.0, // Trigger only when 100% of the item is visible
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(items).indexOf(entry.target);
        bullets.forEach((bullet) => bullet.classList.remove('active'));
        bullets[index].classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  items.forEach((item) => observer.observe(item));

  // Scroll to specific item on bullet click
  const scrollToItem = (index) => {
    const item = items[index];
    if (item) {
      container.scrollTo({
        left: item.offsetLeft - container.offsetLeft,
        behavior: 'smooth',
      });
    }
  };
});
document.querySelectorAll('.video-testimonials--template--18085670322315__plp_single_product_video_testimonials_DbT4Ra .video-testimonials-item').forEach((item, i) => {
  item.addEventListener('click', () => {
    const root = item.closest('.video-testimonials-wrap');
    const modal = root.querySelectorAll(`.video-testimonials-modal`)[i];
    const video = modal.querySelector('video');

    const videoSources = video.getAttribute('data-video-src').split(', ');
    const videoTypes = video.getAttribute('data-video-type').split(', ');

    video.innerHTML = ''; // Clear existing sources
    videoSources.forEach((src, index) => {
      const source = document.createElement('source');
      source.src = src;
      source.type = videoTypes[index];
      video.appendChild(source);
    });

    modal.classList.add('video-testimonials-modal--active');
    video.load(); // Load the video
    video.play(); // Play the video
  });
});

document.querySelectorAll('.video-testimonials-wrap--template--18085670322315__plp_single_product_video_testimonials_DbT4Ra .video-testimonials-modal').forEach((el) => {
  el.addEventListener('click', () => {
    const video = el.querySelector('video');
    video.pause();
    el.classList.remove('video-testimonials-modal--active');
  });
});