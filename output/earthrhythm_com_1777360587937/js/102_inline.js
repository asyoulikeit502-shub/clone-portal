(function() {
      const sectionId = 'template--19911934738476__sliding_logo_iNCNCH';
      const root = document.getElementById('logo-swiper-' + sectionId);
      if (!root) return;
      const swiperEl = document.getElementById('swiper-template--19911934738476__sliding_logo_iNCNCH');

      // load Swiper assets once
      function ensureSwiperAssets(cb) {
        if (window.Swiper) { cb(); return; }

        if (!window.__swiper_css__) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css';
          document.head.appendChild(link);
          window.__swiper_css__ = true;
        }

        if (!window.__swiper_js_loading__) {
          window.__swiper_js_loading__ = true;
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js';
          s.onload = function(){ cb(); };
          document.head.appendChild(s);
        } else {
          const iv = setInterval(function(){
            if (window.Swiper) { clearInterval(iv); cb(); }
          }, 50);
        }
      }

      function initSwiper() {
        if (!swiperEl) return;
        if (swiperEl.swiper) swiperEl.swiper.destroy(true, true);

        const cfg = {
          loop: true,
          speed: 500,
          grabCursor: true,
          autoplay: true ? {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          } : false,
          slidesPerView: 6,
          spaceBetween: 4,
          breakpoints: {
            320:  { slidesPerView: 3, spaceBetween: 4 },
            768:  { slidesPerView: 3, spaceBetween: 4 },
            1024: { slidesPerView: 6, spaceBetween: 4 }
          },
          
          
          watchSlidesProgress: true
        };

        swiperEl.swiper = new Swiper(swiperEl, cfg);
      }

      ensureSwiperAssets(initSwiper);

      // Theme Editor events
      document.addEventListener('shopify:section:load', function(e){
        if (e.detail.sectionId === 'template--19911934738476__sliding_logo_iNCNCH') ensureSwiperAssets(initSwiper);
      });
      document.addEventListener('shopify:section:unload', function(e){
        if (e.detail.sectionId === 'template--19911934738476__sliding_logo_iNCNCH' && swiperEl && swiperEl.swiper) {
          swiperEl.swiper.destroy(true, true);
        }
      });
      document.addEventListener('shopify:block:select', function(e){
        if (e.detail.sectionId === 'template--19911934738476__sliding_logo_iNCNCH' && swiperEl && swiperEl.swiper) {
          swiperEl.swiper.update();
        }
      });
    })();