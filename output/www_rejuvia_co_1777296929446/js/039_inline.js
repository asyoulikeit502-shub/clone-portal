! function() {
  document.addEventListener('click', (e) => {
    if (e.target.matches('.loop-btn')) {
      const emailEle = document.querySelector('.loop-form-input-container input[type="text"]');
      const email = emailEle && emailEle.value;
      if (email) {
        edgetag('user', 'email', email);
        edgetag('tag', 'Lead');
      }
    }
  }, {
    capture: true
  });
}();