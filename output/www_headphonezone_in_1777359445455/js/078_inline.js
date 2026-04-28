document.addEventListener('click', function(e) {
  const btn = e.target.closest('.promo-grid-prev, .promo-grid-next');
  if (!btn) return;

  const targetId = btn.dataset.target;
  const track = document.getElementById(targetId);
  if (!track) return;

  const scrollAmount = track.querySelector('.content-over-media')?.offsetWidth + 16 || 220;

  if (btn.classList.contains('promo-grid-next')) {
    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  } else {
    track.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }
});