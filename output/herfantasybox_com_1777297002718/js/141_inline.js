//Main panel
const togglePanels = document.querySelectorAll('.toggle-panel');
togglePanels.forEach((panel) => {
  const panelTitle = panel.querySelector('.toggle-panel-title');
  const panelBody = panel.querySelector('.toggle-panel-body');

  panelTitle.addEventListener('click', () => {
    panel.classList.toggle('open');
  });
});

//Ingredients
const toggleIngr = document.querySelectorAll('.toggle-ingr');
toggleIngr.forEach((button) => {
  const ingrBody = button.parentElement.querySelector('.bundle-item__desc');

  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('open');
    button.innerHTML = button.parentElement.classList.contains('open') ? 'Minimize -' : 'Ingredients +';
  });
});


(function() {
  const form = document.querySelector('.product-main--template--18085670322315__plp_main_product_FXNdTM');

  function fetchSelectedOptions() {
    // Figure out selected options
    const selectedOptions = [];

    form.querySelectorAll('.product-main-option-value-radio:checked').forEach((o) => {
      selectedOptions.push(o.value);
    });

    return selectedOptions;
  }

  function fetchProductJson() {
    const jsonEl = form.querySelector('.product-main-json');
    const jsonRaw = jsonEl.getAttribute('data-json');
    const json = JSON.parse(jsonRaw);

    return json;
  }

  function findSelectedVariant(variants, selectedOptions) {
    const selectedVariant = variants.find((v) => {
      var pass = true;

      for (var i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions.indexOf(v.options[i]) === -1) {
          pass = false;
          break;
        }
      }

      return pass;
    });

    return selectedVariant;
  }

  function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    var separator = uri.indexOf('?') !== -1 ? '&' : '?';
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + '=' + value + '$2');
    } else {
      return uri + separator + key + '=' + value;
    }
  }

  function addEventListeners() {
    form.querySelectorAll('.product-main-option-value-radio').forEach((input) => {
      input.addEventListener('change', async () => {
        const selectedOptions = fetchSelectedOptions();
        const json = fetchProductJson();
        const variant = findSelectedVariant(json.variants, selectedOptions);

        // Fetch the new section
        const resRaw = await fetch(`?variant=${variant.id}&section_id=template--18085670322315__plp_main_product_FXNdTM`);
        const res = await resRaw.text();

        // Replace content
        const dom = document.createElement('div');
        dom.innerHTML = res;

        const currentDescription = document.querySelector('.product-main-description')
        //dom.querySelector('.product-main-description').innerHTML = currentDescription.innerHTML

        const newHTML = dom.querySelector('.product-main-content').innerHTML;
        //form.querySelector('.product-main-content').innerHTML = newHTML;

        // Update url
        const qs = updateQueryStringParameter(window.location.href, 'variant', variant.id);
        window.history.replaceState(null, null, qs);
        window.location.reload();

      });
    });

    document.querySelectorAll('.quantity-selector-button').forEach((button) => {
      button.addEventListener('click', () => {
        const isUp = button.classList.contains('quantity-selector-button--up');
        const input = button.parentElement.querySelector('.quantity-selector-input');
        const currentValue = Number(input.value);

        if (isUp) {
          input.value = currentValue + 1;
        } else if (!isUp && currentValue > 1) {
          input.value = currentValue - 1;
        }
      });
    });
  }

  addEventListeners();

  // image changing - handle each gallery independently
  document.querySelectorAll('.product-main-images').forEach((gallery) => {
    const mainImage = gallery.querySelector('.product-main-image');
    const thumbs = gallery.querySelectorAll('.product-main-image-thumb');

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        if (thumb.classList.contains('product-main-image-thumb--selected')) return;

        const src = thumb.querySelector('img').getAttribute('src');
        const srcset = thumb.querySelector('img').getAttribute('srcset');

        mainImage.setAttribute('src', src);
        // Only set srcset if it exists and is not null
        if (srcset && srcset !== 'null') {
          mainImage.setAttribute('srcset', srcset);
        } else {
          mainImage.removeAttribute('srcset');
        }

        gallery
          .querySelector('.product-main-image-thumb--selected')
          .classList.remove('product-main-image-thumb--selected');
        thumb.classList.add('product-main-image-thumb--selected');
      });
    });
  });



  document.querySelector('.product-main-description-read')?.addEventListener('click', () => {
    document.querySelector('.product-main-description').classList.remove('product-main-description--expandable')
  })

})();