(function() {
    // Highlight active nav item based on current path
    var path = window.location.pathname.replace(/\/+$/, '');
    var mapping = {
      account: "/account".replace(/\/+$/, ''),
      categories: "/collections".replace(/\/+$/, ''),
      offers: '/search',
      skin: '/pages/skin-concern',
      cart: "/cart".replace(/\/+$/, '')
    };

    function setActive() {
      var items = document.querySelectorAll('.sb-nav__item');
      items.forEach(function(el) { el.classList.remove('sb-nav__item--active'); });
      // find best match
      for (var key in mapping) {
        if (!mapping[key]) continue;
        var mapped = mapping[key];
        if (mapped === path || (mapped !== '/' && path.indexOf(mapped) === 0)) {
          var sel = document.querySelector('.sb-nav__item[data-nav="'+key+'"]');
          if (sel) sel.classList.add('sb-nav__item--active');
          break;
        }
      }
    }

    // Show cart count if available (Shopify provides window.cart sometimes via AJAX APIs)
    function updateCartCount() {
      try {
        // If theme provides a global cart object, use it; otherwise fetch (optional)
        var countEl = document.getElementById('sb-cart-count');
        var cartCount = 0;
        // if your theme has 'cart' JS object: cart.item_count
        if (window.cart && typeof window.cart.item_count !== 'undefined') {
          cartCount = window.cart.item_count;
        } else {
          // try to read from cookie/localStorage if your theme stores it, or skip
          // For better accuracy, fetch /cart.js (uncomment to enable)
          // fetch('/cart.js').then(res => res.json()).then(data => { cartCount = data.item_count; ... });
        }
        if (countEl && cartCount > 0) {
          countEl.textContent = cartCount;
          countEl.style.display = 'inline-block';
        } else if (countEl) {
          countEl.style.display = 'none';
        }
      } catch(e) {
        console.warn('sb-nav cart count error', e);
      }
    }

    // run on load
    document.addEventListener('DOMContentLoaded', function() {
      setActive();
      updateCartCount();
    });

    // Optional: update active on history change (single-page transitions)
    window.addEventListener('popstate', setActive);
    // If your theme fires a custom event after ajax cart update, you can listen and call updateCartCount
    document.addEventListener('cart:updated', updateCartCount);
  })();