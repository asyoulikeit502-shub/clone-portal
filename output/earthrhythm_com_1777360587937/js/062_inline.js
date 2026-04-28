var gk_cart_domain = "earth-rhythm-v1.myshopify.com";

  (function() {
      window.kwikCartActive = false;
      window.gk_cart_domain = gk_cart_domain;
      window.gk_cart_currency = "INR";
      try {
        window.gk_currency_format = "en"+'-'+"IN";
      } catch (err) {
        console.log(err);
      }

      function shouldLoadKwikCart(config, countryCode) {
        if (!config) return false;
        var disableOnNonIndia = config.appearance && config.appearance.disableOnNonIndiaStore;
        if (disableOnNonIndia && countryCode !== 'IN') return false;
        return true;
      }

      var atcButtonSelectors = [
        "form[action='/cart/add'] button[name='add']",
        "form[action$='/cart/add'] button[name='add']",
        "form[action='/cart/add'] button[data-checkout='same']",
        "form[action='/cart/add'] button[type='submit']",
        "form[action='/cart/add'] input[type='submit']",
        "form[action='/cart/add'] button[data-add-to-cart]",
        "form[action='/cart/add'] label[role='submit']",
        "form[data-zp-product-url='/cart'] button[type='submit']",
        "form[action='/cart/add'] a[role='submit']",
      ];

      var addAddtoCartEventListener = function() {
        document.querySelectorAll(atcButtonSelectors.join(", ")).forEach(function(atcButton) {
          atcButton.addEventListener(
            "click",
            async function(event) {
              event.stopPropagation();
              event.stopImmediatePropagation();
              event.preventDefault();
              window.addItemtoCartFromForm && window.addItemtoCartFromForm(event);
            },
            true
          );
        });
      };

      function initKwikCart(config) {
        // Cart page redirect
        try {
          if (config && config.appearance && config.appearance.disableCartPage && config.appearance.disableCartPage.enable) {
            if (location.pathname.split("/")[1].split("?")[0] === "cart") {
              console.log('redirecting from extension');
              location.href = "/?openCart=true";
            }
          }
        } catch (err) {
          console.log(err);
        }

        // Product-level globals + freebie redirect
        window.gk_selected_product_id = null;
        var gk_product_tags = null;
        if (gk_product_tags && gk_product_tags.length){
          if(gk_product_tags.some(function(tag) { return tag === 'kwikcart-freebie'; })){
            window.location.replace("/")
          }
        }

        // ATC listeners
        var gkAtcExcludedStores = [
          "bareanatomy.myshopify.com",
    "eumeworld-com.myshopify.com",
    "bombay-shaving.myshopify.com",
    "bblunt-com.myshopify.com",
    "two-brothers-organic-farms-amorearth.myshopify.com",
    "979fb0-0d.myshopify.com",
    "gillori.myshopify.com",
    "205ae7-83.myshopify.com",
    "terractive-4794.myshopify.com",
    "shady-gators.myshopify.com",
    "fflirtygo-com.myshopify.com",
    "thriveco-in.myshopify.com",
    "beyours-india.myshopify.com",
    "indus-valley2.myshopify.com",
    "shareyourbasil.myshopify.com",
    "dennisonfashionindia.myshopify.com",
    "philips-ecom.myshopify.com",
    "a5aec8.myshopify.com",
    "gushbeauty.myshopify.com",
    "9df745-2e.myshopify.com",
    "deea06.myshopify.com",
    "wellversed-health.myshopify.com",
    "slurrpfarm.myshopify.com",
    "thedermaco.myshopify.com",
    "aqualogicaprod.myshopify.com",
    "dr-sheths.myshopify.com",
    "truebrowns.myshopify.com",
    "swashaa.myshopify.com",
    "5b0dca-99.myshopify.com",
    "hiraperfume.myshopify.com",
    "hyphen-mcaffeine.myshopify.com",
    "ayasgold.myshopify.com",
    "4b84f0.myshopify.com",
    "physicswallahstore.myshopify.com",
    "gusto-foods-store.myshopify.com",
    "wntrbags.myshopify.com",
    "theartarium.myshopify.com",
    "milton-india-store.myshopify.com",
    "farida-gupta-india.myshopify.com",
    "thepetsclubllc.myshopify.com",
    "innisfree-india-prod.myshopify.com",
    "sleepyhead-prod.myshopify.com",
    "gramiyaa.myshopify.com",
    "lakshitaonline.myshopify.com",
    "hunnit-ventures.myshopify.com",
    "orika-spices-india.myshopify.com",
    "vedaoils1.myshopify.com",
    "theformalclub.myshopify.com",
    "maximo-perfumes.myshopify.com",
    "fizzygoblet.myshopify.com",
    "678f48-7e.myshopify.com",
    "sohraibeauty.myshopify.com",
    "hjyp94-yk.myshopify.com",
    "duroflex-world.myshopify.com",
    "kkug6m-b0.myshopify.com",
    "supply-6-store.myshopify.com",
    "qubo-india.myshopify.com",
    "glamzei.myshopify.com",
    "just-in-time-webstore.myshopify.com",
    "eaurave.myshopify.com"
  ];

        function attachAtcListeners() {
          if (!gkAtcExcludedStores.includes(gk_cart_domain)) {
            addAddtoCartEventListener();
          } else {
            console.log("no atc modification");
          }
        }

        if (document.readyState === 'loading') {
          document.addEventListener("DOMContentLoaded", attachAtcListeners);
        } else {
          attachAtcListeners();
        }

        // Script injection
        var scriptFile = "https://kwikcart.gokwik.co/kwikcart/side-cart.js";
        var script = document.createElement('script');
        if (gk_cart_domain !== 'koskii.myshopify.com') {
          script.defer = "true";
        }
        script.src = scriptFile;
        document.head.appendChild(script);
        script.onload = function() {
          window.kwikCartActive = true;
        };
      }

      // --- Resolve config + country in parallel ---
      var configPromise;
      var cachedConfig = null;
      try {
        var raw = sessionStorage.getItem("kwik-cart-request-data");
        if (raw) cachedConfig = JSON.parse(raw);
      } catch (err) {}

      if (cachedConfig) {
        configPromise = Promise.resolve(cachedConfig);
      } else {
        configPromise = fetch('https://prod-shp-checkout.gokwik.co/v3/kwik-cart/request', {
          headers: {
            'Content-Type': 'application/json',
            'x-shop-domain': gk_cart_domain
          }
        })
        .then(function(res) { return res.json(); })
        .then(function(response) {
          var config = response && response.data ? response.data : response;
          try {
            sessionStorage.setItem('kwik-cart-request-data', JSON.stringify(config));
          } catch (e) {}
          return config;
        });
      }

      // Expose promise so side-cart.js can reuse the in-flight/resolved result
      // instead of making its own /request call. Survives sessionStorage quota failures.
      window.__gkConfigPromise = configPromise;

      // Country detection: cache > browsing_context > Liquid fallback
      var cachedCountry = null;
      try {
        var stored = sessionStorage.getItem('gk-detected-country');
        if (stored && stored.length === 2) cachedCountry = stored;
      } catch (e) {}

      var countryPromise = cachedCountry
        ? Promise.resolve(cachedCountry)
        : fetch('/browsing_context_suggestions.json')
            .then(function(res) { return res.json(); })
            .then(function(data) {
              var code = data && data.detected_values && data.detected_values.country && data.detected_values.country.handle;
              if (code && code.length === 2) {
                try { sessionStorage.setItem('gk-detected-country', code); } catch (e) {}
                return code;
              }
              return "IN";
            })
            .catch(function() {
              // Fallback to Liquid market-based country
              return "IN";
            });

      Promise.all([configPromise, countryPromise])
        .then(function(results) {
          var config = results[0];
          var countryCode = results[1];
          window.__gkExtRequestDone = true;
          if (shouldLoadKwikCart(config, countryCode)) {
            initKwikCart(config);
          }
        })
        .catch(function(err) {
          console.log('kwik-cart init failed, cart will not load', err);
        });
    })();