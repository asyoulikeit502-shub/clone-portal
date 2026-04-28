const buyButton = document.querySelector('.buy-button');
const buyButtonFlag = document.querySelector('.ab-sticky-flag');

if (buyButton && buyButtonFlag) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const rect = entry.boundingClientRect;
      console.log('rect.top');
      console.log(rect.top);
      if (rect.bottom < 0) {
        document.body.classList.add('sticky-atc-active');
      } else {
        document.body.classList.remove('sticky-atc-active');
      }
    }, {
      root: null,
      threshold: 1, // Fires as soon as any part of the element is out of view
    }
  );

  observer.observe(buyButtonFlag);
}

document.getElementById('orderButton').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const $loadTarget = document.querySelectorAll('[id*="plp_main_product"]');
  if ($loadTarget.length > 0) {
    $loadTarget[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});