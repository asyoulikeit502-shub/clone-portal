const expandBtn = document.getElementById('expand-btn');
const productMainDescription = document.querySelector('.product-main-description');

const expandText = expandBtn?.querySelector('h3');
expandBtn?.addEventListener('click', () => {
  productMainDescription.classList.toggle('expand');
  if (expandText.textContent === 'READ MORE') {
    expandText.textContent = 'CLOSE DESCRIPTION';
  } else {
    expandText.textContent = 'READ MORE';
  }
});

// Get a reference to the button element
const stickyButton = document.getElementById('sticky-atc');

if (stickyButton) {
  // Add an event listener to the window's scroll event
  window.addEventListener('scroll', function() {
    // Check if the user has scrolled past a certain point
    if (window.scrollY > 1500) {
      // If they have, show the button
      stickyButton.style.display = 'flex';
    } else {
      // If they haven't, hide the button
      stickyButton.style.display = 'none';
    }
  });
}