(function() {
  "use strict";
  const STORAGE_KEY = "hfb_recently_viewed_products";
  let productsCache = null,
    isRendered = !1;

  function getCurrentProductHandle() {
    const match = window.location.pathname.match(/\/products\/([^\/\?]+)/);
    return match ? match[1] : null
  }

  function getRecentlyViewedProducts() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      const products = JSON.parse(stored),
        validHandles = products.filter(function(handle) {
          return handle && !/^\d+$/.test(handle)
        });
      return validHandles.length !== products.length && localStorage.setItem(STORAGE_KEY, JSON.stringify(validHandles)), validHandles
    } catch {
      return []
    }
  }

  function displayRecentlyViewedProducts() {
    const productHandles = getRecentlyViewedProducts(),
      container = document.getElementById("rc90-recently-viewed"),
      listContainer = document.getElementById("rc90-recently-viewed-list");
    if (!container || !listContainer) return;
    if (!productHandles || productHandles.length === 0) {
      container.style.display = "none";
      return
    }
    const currentHandles = productHandles.join(",");
    if (isRendered && productsCache === currentHandles && listContainer.children.length > 0) {
      container.style.display = "block";
      return
    }
    container.style.opacity = "0", container.style.display = "block", listContainer.innerHTML = "", Promise.all(productHandles.map(function(handle) {
      return fetch("/products/" + handle + ".js").then(function(response) {
        if (!response.ok) throw new Error("Product not found");
        return response.json()
      }).then(function(product) {
        let avgRating = null,
          numReviews = null;
        return product.metafields && product.metafields.reviews && (avgRating = product.metafields.reviews.rating_value || null, numReviews = product.metafields.reviews.rating_count || null), {
          handle,
          title: product.title,
          url: product.url || "/products/" + handle,
          image: product.featured_image || product.images[0],
          vendor: product.vendor,
          product_type: product.product_type,
          id: product.id,
          price: product.price,
          is_best_seller: !1,
          avg_rating: avgRating,
          num_reviews: numReviews
        }
      }).catch(function(error) {
        return null
      })
    })).then(function(products) {
      products = products.filter(function(p) {
        return p !== null
      });
      let html = "";
      products.forEach(function(product) {
        html += `
          <div class="swiper-slide">
            <div class="rc90-recently-viewed-card" data-product-handle="${product.handle}">
              <a href="${product.url}" class="rc90-recently-viewed-card__image-link">
                <img src="${product.image}" alt="${product.title}" class="rc90-recently-viewed-card__image" loading="lazy">
                ${product.is_best_seller?`
                  <div class="rc90-recently-viewed-card__best-seller">
                    <span>Best Seller</span>
                    <img src="https://cdn.shopify.com/s/files/1/0559/8792/9227/files/Group_1000006406.png?v=1707287039" alt="discount tag" width="118" height="50" loading="lazy">
                  </div>
                `:""}
              </a>
              <div class="rc90-recently-viewed-card__body">
                ${product.product_type?`<div class="rc90-recently-viewed-card__type">${product.product_type}</div>`:""}
                
                <div class="rc90-recently-viewed-card__rating">
                  ${product.avg_rating&&product.num_reviews?`
                    <span class="rc90-recently-viewed-card__rating-text">${product.avg_rating} | ${product.num_reviews} Reviews</span>
                    <span class="icon-star ${product.avg_rating>=1?"filled":""}">\u2605</span>
                    <span class="icon-star ${product.avg_rating>=2?"filled":""}">\u2605</span>
                    <span class="icon-star ${product.avg_rating>=3?"filled":""}">\u2605</span>
                    <span class="icon-star ${product.avg_rating>=4?"filled":""}">\u2605</span>
                    <span class="icon-star ${product.avg_rating>=5?"filled":""}">\u2605</span>
                  `:`
                    <span class="icon-star filled">\u2605</span>
                    <span class="icon-star filled">\u2605</span>
                    <span class="icon-star filled">\u2605</span>
                    <span class="icon-star filled">\u2605</span>
                    <span class="icon-star filled">\u2605</span>
                  `}
                </div>
                
                <h3 class="rc90-recently-viewed-card__title">
                  <a href="${product.url}">${product.title}</a>
                </h3>
                
                ${product.vendor?`<p class="rc90-recently-viewed-card__vendor">${product.vendor}</p>`:""}
                
                <div class="rc90-recently-viewed-card__atc" data-product-id="${product.id}">
                  <button class="rc90-recently-viewed-card__atc-button" data-product-handle="${product.handle}" data-price="$${(product.price/100).toFixed(2)}">
                    Add to Cart | $${(product.price/100).toFixed(2)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `
      }), listContainer.innerHTML = html, container.setAttribute("data-product-handles", productHandles.join(",")), productsCache = currentHandles, isRendered = !0, initRecentlyViewedSwiper(), attachATCListeners(), setTimeout(function() {
        container.style.transition = "opacity 0.3s ease-in", container.style.opacity = "1"
      }, 50)
    })
  }

  function initRecentlyViewedSwiper() {
    if (typeof Swiper < "u") {
      const recentlyViewedSwiper = new Swiper(".recently-viewed-swiper", {
        slidesPerView: 1.6,
        spaceBetween: 20,
        navigation: {
          nextEl: ".recently-viewed-swiper-button-next",
          prevEl: ".recently-viewed-swiper-button-prev"
        },
        breakpoints: {
          700: {
            slidesPerView: 2
          },
          1120: {
            slidesPerView: 2.2
          }
        },
        on: {
          init: function() {
            updateNavigationVisibility(this)
          },
          resize: function() {
            updateNavigationVisibility(this)
          },
          slideChange: function() {
            updateNavigationVisibility(this)
          }
        }
      })
    } else setTimeout(initRecentlyViewedSwiper, 100)
  }

  function updateNavigationVisibility(swiper) {
    const navigation = document.querySelector(".recently-viewed-swiper-navigation");
    if (!navigation) return;
    swiper.slides.length > swiper.params.slidesPerView ? navigation.classList.add("visible") : navigation.classList.remove("visible")
  }

  function attachATCListeners() {
    document.querySelectorAll(".rc90-recently-viewed-card__atc-button").forEach(function(button) {
      button.addEventListener("click", function(e) {
        e.preventDefault();
        const productHandle = this.getAttribute("data-product-handle");
        fetch("/products/" + productHandle + ".js").then(function(response) {
          return response.json()
        }).then(function(product) {
          const variantId = product.variants[0].id;
          return fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              items: [{
                id: variantId,
                quantity: 1
              }]
            })
          })
        }).then(function(response) {
          return response.json()
        }).then(function(data) {
          window.robustCart && typeof window.robustCart.refreshCart == "function" && window.robustCart.refreshCart(), button.textContent = "Added!", setTimeout(function() {
            const price = button.getAttribute("data-price");
            button.textContent = price ? `Add to Cart | ${price}` : "Add to Cart"
          }, 2e3)
        }).catch(function(error) {
          button.textContent = "Error", setTimeout(function() {
            const price = button.getAttribute("data-price");
            button.textContent = price ? `Add to Cart | ${price}` : "Add to Cart"
          }, 2e3)
        })
      })
    })
  }

  function waitForCartInit() {
    window.robustCart ? (displayRecentlyViewedProducts(), observeCartChanges()) : setTimeout(waitForCartInit, 100)
  }

  function observeCartChanges() {
    const cartBox = document.querySelector(".rc90-box");
    if (!cartBox) return;
    new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.type === "childList" && mutation.addedNodes.length > 0 && setTimeout(function() {
          isRendered = !1, displayRecentlyViewedProducts()
        }, 100)
      })
    }).observe(cartBox, {
      childList: !0,
      subtree: !1
    })
  }
  document.addEventListener("click", function(e) {
    e.target.closest('[href*="/cart"], .cart-trigger, .js-cart-trigger') && setTimeout(displayRecentlyViewedProducts, 300)
  }), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", waitForCartInit) : waitForCartInit(), window.updateRecentlyViewedInCart = displayRecentlyViewedProducts, window.autoOpenCartForRecentlyViewed = function() {
    const SESSION_KEY = "hfb_cart_opened_this_session";
    sessionStorage.getItem(SESSION_KEY) || (sessionStorage.setItem(SESSION_KEY, "true"), getRecentlyViewedProducts().length === 0) || setTimeout(function() {
      const cartTrigger = document.querySelector('[href*="/cart"], .cart-trigger, .js-cart-trigger, .rc90-cart-icon');
      cartTrigger && cartTrigger.click()
    }, 500)
  }
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/recently-viewed-products-display.js.map?v=53527761809669166481772808300