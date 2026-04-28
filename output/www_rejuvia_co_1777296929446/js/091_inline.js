document.addEventListener('DOMContentLoaded', () => {
  const playButtons = document.querySelectorAll('.customer-review-play');

  playButtons.forEach((button) => {
    const video = button.previousElementSibling;

    if (video && video.tagName === 'VIDEO') {
      button.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          button.style.visibility = 'hidden';
        } else {
          video.pause();
          button.style.visibility = 'visible';
        }
      });

      video.addEventListener('click', () => {
        if (!video.paused) {
          video.pause();
          button.style.visibility = 'visible';
        } else {
          video.play();
          button.style.visibility = 'hidden';
        }
      });

      video.addEventListener('pause', () => {
        button.style.visibility = 'visible';
      });

      video.addEventListener('play', () => {
        button.style.visibility = 'hidden';
      });
    }
  });
});