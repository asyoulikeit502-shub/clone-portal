window.addEventListener('scroll', () => {
  const header = document.getElementById('header')
  const headerHeight = document.getElementById('mobile-header-container').offsetHeight

  if (window.scrollY > headerHeight) {
    header.classList.add('sticky_add_color')
  } else {
    header.classList.remove('sticky_add_color')
  }
})