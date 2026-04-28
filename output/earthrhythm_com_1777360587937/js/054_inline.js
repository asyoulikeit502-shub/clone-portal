const initWithBundlrDiscount = (e) => {
    window.bndlr.getCheckoutInfo(function (data) {
      let popupCheck = false;
      setTimeout(() => {
        if (!popupCheck) onCheckoutClick(e);
      }, 2200);
      // try {
        if (
          typeof data !== 'undefined' &&
          typeof data.can_apply_discount !== 'undefined' &&
          data.can_apply_discount === true
        ) {
            console.log(data)
         if(data?.code){
                     createCookie('discount_code', data?.code);
         } else if (data?.items[0]?.applied_discount?.title){
               createCookie('discount_code', data?.items[0]?.applied_discount?.title);
         }
        } else {
          createCookie('discount_code', '');
        }
      // } catch {}
      onCheckoutClick(e);
      popupCheck = true;
    });
  };
  const createCookie = (name, value, days) => {
    let expires = '';
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  };
  
  let gkButtonCode = '<div class="gokwik-checkout"><button type="button" class="button" onclick="initWithBundlrDiscount(this)"><span class="btn-text"><span style="text-align: center;">Place Order</span><!--<span class="gksubtxt">Additional 3% off on orders above 599</span>--> </span><span class="pay-opt-icon"><img src="https://cdn.gokwik.co/v4/images/upi-icons.svg"><img src="https://cdn.gokwik.co/v4/images/right-arrow.svg"></span><div style="display:none"><div class="cir-loader">Loading..</div></div></button></div>'
  let parsedBtnCode = new DOMParser().parseFromString(gkButtonCode, 'text/html').querySelectorAll('.gokwik-checkout')[0];
  
  window.addEventListener('gokwikLoaded', e => {

   $('.gokwik-checkout button').prop('disabled', false);
              $('.gokwik-checkout button').removeClass('disabled');
         $('#gokwik-buy-now').prop('disabled', false);
              $('#gokwik-buy-now').removeClass('disabled');

  const targetElement = document.querySelector("body");
  function debounce(func, delay) {
    let timeoutId;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        func.apply(context, args);
      }, delay);
    };
  }
  const observer = new MutationObserver(() => {
           let sideCartButtonParent = document.querySelector('.hs-drawer-checkout');
    let buttonAdded = sideCartButtonParent && sideCartButtonParent.nextElementSibling && sideCartButtonParent.nextElementSibling.classList.contains('gokwik-checkout');
      if(sideCartButtonParent && !buttonAdded){
                      buttonAdded = true
                      sideCartButtonParent.after(parsedBtnCode)
                  }
    debouncedMyTimer();
  });
  const debouncedMyTimer = debounce(() => {
    observer.disconnect();
    enableGokwikCart();
    getCountryData();
    observer.observe(targetElement, { childList: true, subtree: true });
  }, 400);
  function enableGokwikCart() {
      $('.gokwik-checkout button').prop('disabled', false);
              $('.gokwik-checkout button').removeClass('disabled');

  }
  const config = { childList: true, subtree: true };
  observer.observe(targetElement, config);
});