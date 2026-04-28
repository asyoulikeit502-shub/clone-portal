function updateActiveAttribute() {
  var element = document.querySelector('[data-ingredient="Renew Oil"]');
  if (window.innerWidth < 749) {
    if (element) {
      element.setAttribute('active', 'false');
    }
  } else {
    if (element) {
      element.setAttribute('active', 'true');
    }
  }
}

// Run on page load
updateActiveAttribute();

// Add event listener for window resize
window.addEventListener('resize', updateActiveAttribute);