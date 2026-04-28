/**
 * Swym Ghost Wishlist Drawer
 * Lightweight wishlist UI that shows localStorage items when SDK is blocked (Ghost-Intent mode).
 * Auto-hides when SDK loads (consent given). Does NOT touch or modify the existing storefront layout.
 */
(function() {
  "use strict";

  // Prevent double initialization
  if (window.SwymGhostWishlistDrawer) return;

  const DRAWER_ID = "swym-ghost-wishlist-drawer";
  const OVERLAY_ID = "swym-ghost-wishlist-overlay";

  // Get translated strings from the Liquid-rendered data attributes
  const getStrings = () => {
    const el = document.getElementById("swym-ghost-wishlist-data");
    if (!el) {
      return {
        title: "My Wishlist",
        emptyTitle: "Your wishlist is empty",
        emptyDescription: "Add items to your wishlist and see them here",
        addToCart: "Add to Cart",
        addedToCart: "Added to Cart",
        remove: "Remove",
        viewProduct: "View Product",
        consentCta: "Sync across devices",
        itemsCount: "{{count}} items",
        close: "Close"
      };
    }
    return {
      title: el.getAttribute("data-title") || "My Wishlist",
      emptyTitle: el.getAttribute("data-empty-title") || "Your wishlist is empty",
      emptyDescription: el.getAttribute("data-empty-description") || "Add items to your wishlist and see them here",
      addToCart: el.getAttribute("data-add-to-cart") || "Add to Cart",
      addedToCart: el.getAttribute("data-added-to-cart") || "Added to Cart",
      remove: el.getAttribute("data-remove") || "Remove",
      viewProduct: el.getAttribute("data-view-product") || "View Product",
      consentCta: el.getAttribute("data-consent-cta") || "Sync across devices",
      itemsCount: el.getAttribute("data-items-count") || "{{count}} items",
      close: el.getAttribute("data-close") || "Close"
    };
  };

  // Format price using Shopify's money format
  const formatPrice = (price) => {
    if (price == null || isNaN(price)) return "";
    const moneyFormat = window.SwymOverrideMoneyFormat || "${{amount}}";
    const formatted = parseFloat(price).toFixed(2);
    return moneyFormat
      .replace("{{amount}}", formatted)
      .replace("{{amount_no_decimals}}", Math.round(price).toString())
      .replace("{{amount_with_comma_separator}}", formatted.replace(".", ","))
      .replace("{{amount_no_decimals_with_comma_separator}}", Math.round(price).toString());
  };

  // Build a single product tile HTML
  const buildProductTile = (item, strings) => {
    const productUrl = item.du || "#";
    const fullUrl = productUrl.startsWith("/") ? productUrl : "/" + productUrl;
    const imageUrl = item.iu || "";
    const title = item.dt || "Product";
    const price = item.pr;
    const inStock = item.stk !== 0;
    const variantId = item.epi || "";

    return `
      <div class="swym-ghost-wl-item" data-du="${fullUrl}">
        <a href="${fullUrl}" class="swym-ghost-wl-item-image-link">
          ${imageUrl
            ? `<img src="${imageUrl}" alt="${title}" class="swym-ghost-wl-item-image" loading="lazy" />`
            : `<div class="swym-ghost-wl-item-image-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>`
          }
        </a>
        <div class="swym-ghost-wl-item-info">
          <a href="${fullUrl}" class="swym-ghost-wl-item-title">${title}</a>
          ${price != null ? `<span class="swym-ghost-wl-item-price">${formatPrice(price)}</span>` : ""}
          <div class="swym-ghost-wl-item-actions">
            ${inStock
              ? `<button class="swym-ghost-wl-item-atc" data-atc-du="${fullUrl}" data-atc-epi="${variantId}">
                  <span class="swym-ghost-wl-atc-text">${strings.addToCart}</span>
                  <span class="swym-ghost-wl-atc-spinner" aria-hidden="true"></span>
                </button>`
              : `<span class="swym-ghost-wl-item-soldout">Sold Out</span>`
            }
            <button class="swym-ghost-wl-item-remove" data-remove-du="${fullUrl}" aria-label="${strings.remove}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  };

  // Build the items-only HTML (for in-place updates without destroying drawer shell)
  const buildItemsHTML = (strings, items) => {
    if (items.length === 0) {
      return `
        <div class="swym-ghost-wl-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5">
            <path d="M19.67 5.47c-1.99-1.64-4.95-1.35-6.78.48L12 6.84l-.89-.89c-1.82-1.82-4.79-2.12-6.78-.48C2.05 7.35 1.93 10.74 3.97 12.78l7.67 7.67c.2.2.51.2.71 0l7.67-7.67c2.05-2.04 1.93-5.44-.35-7.31z"></path>
          </svg>
          <h4 class="swym-ghost-wl-empty-title">${strings.emptyTitle}</h4>
          <p class="swym-ghost-wl-empty-desc">${strings.emptyDescription}</p>
        </div>
      `;
    }
    return items.map(item => buildProductTile(item, strings)).join("");
  };

  // Build footer HTML
  const buildFooterHTML = (strings, itemCount) => {
    if (itemCount === 0) return "";
    return `
      <div class="swym-ghost-wl-footer">
        <button class="swym-ghost-wl-consent-btn" data-ghost-consent-cta>
          ${strings.consentCta}
        </button>
      </div>
    `;
  };

  // Build the full drawer HTML (used for initial render only)
  const buildDrawerHTML = () => {
    const strings = getStrings();
    const items = window.SwymLocalWishlist?.getItems?.() || [];
    const countText = strings.itemsCount.replace("{{count}}", items.length.toString());

    return `
      <div id="${OVERLAY_ID}" class="swym-ghost-wl-overlay"></div>
      <div id="${DRAWER_ID}" class="swym-ghost-wl-drawer" role="dialog" aria-modal="true" aria-label="${strings.title}">
        <div class="swym-ghost-wl-header">
          <div class="swym-ghost-wl-header-left">
            <h2 class="swym-ghost-wl-title">${strings.title}</h2>
            <span class="swym-ghost-wl-count">${countText}</span>
          </div>
          <button class="swym-ghost-wl-close" aria-label="${strings.close}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="swym-ghost-wl-items">
          ${buildItemsHTML(strings, items)}
        </div>
        ${buildFooterHTML(strings, items.length)}
      </div>
    `;
  };

  // State
  let isOpen = false;
  let drawerContainer = null;

  const SwymGhostWishlistDrawer = {

    /**
     * Initialize the drawer — creates the container element
     */
    init() {
      if (drawerContainer) return;
      drawerContainer = document.createElement("div");
      drawerContainer.id = "swym-ghost-wishlist-drawer-root";
      document.body.appendChild(drawerContainer);

      // Listen for local wishlist changes to re-render if drawer is open
      // Event names match swym-local-wishlist.js _dispatchEvent: "swym:ghost-intent:{eventName}"
      document.addEventListener("swym:ghost-intent:localItemAdded", () => {
        if (isOpen) this.render();
        this._updateHeaderCount();
      });
      document.addEventListener("swym:ghost-intent:localItemRemoved", () => {
        if (isOpen) this.render();
        this._updateHeaderCount();
      });

      // Auto-hide when SDK loads (consent given)
      if (!window.SwymCallbacks) window.SwymCallbacks = [];
      window.SwymCallbacks.push(() => {
        if (isOpen) this.close();
        // SDK loaded means full storefront layout will take over
        this._sdkLoaded = true;
      });

      // Set initial header count from localStorage
      this._updateHeaderCount();
    },

    /**
     * Open the drawer
     */
    open() {
      // If SDK is already loaded, don't show ghost drawer — let the real UI handle it
      if (this._sdkLoaded || (window._swat && window._swat.ui)) {
        try {
          window._swat.ui.open();
        } catch (e) {}
        return;
      }

      if (!drawerContainer) this.init();
      this.render();
      isOpen = true;

      requestAnimationFrame(() => {
        const drawer = document.getElementById(DRAWER_ID);
        const overlay = document.getElementById(OVERLAY_ID);
        if (drawer) drawer.classList.add("swym-ghost-wl-drawer-open");
        if (overlay) overlay.classList.add("swym-ghost-wl-overlay-visible");
      });

      // Trap focus and prevent body scroll
      document.body.style.overflow = "hidden";
    },

    /**
     * Close the drawer
     */
    close() {
      const drawer = document.getElementById(DRAWER_ID);
      const overlay = document.getElementById(OVERLAY_ID);
      if (drawer) drawer.classList.remove("swym-ghost-wl-drawer-open");
      if (overlay) overlay.classList.remove("swym-ghost-wl-overlay-visible");

      document.body.style.overflow = "";
      isOpen = false;
      window.SwymAdvancedHeaderIconAPI?.setWishlistExpandedState?.(false);
    },

    /**
     * Toggle the drawer
     */
    toggle() {
      if (isOpen) {
        this.close();
      } else {
        this.open();
      }
    },

    /**
     * Re-render drawer contents.
     * If drawer is already open, only update the items list, count, and footer in-place
     * to preserve the drawer shell and its open-state CSS classes.
     */
    render() {
      if (!drawerContainer) return;

      const existingDrawer = document.getElementById(DRAWER_ID);
      if (isOpen && existingDrawer) {
        // In-place update: only replace items, count badge, and footer
        const strings = getStrings();
        const items = window.SwymLocalWishlist?.getItems?.() || [];
        const countText = strings.itemsCount.replace("{{count}}", items.length.toString());

        // Update items list
        const itemsContainer = existingDrawer.querySelector(".swym-ghost-wl-items");
        if (itemsContainer) {
          itemsContainer.innerHTML = buildItemsHTML(strings, items);
        }

        // Update count
        const countEl = existingDrawer.querySelector(".swym-ghost-wl-count");
        if (countEl) {
          countEl.textContent = countText;
        }

        // Update footer (show/hide consent CTA)
        let footer = existingDrawer.querySelector(".swym-ghost-wl-footer");
        if (items.length > 0) {
          if (!footer) {
            existingDrawer.insertAdjacentHTML("beforeend", buildFooterHTML(strings, items.length));
          }
        } else {
          if (footer) footer.remove();
        }

        this._bindEvents();
        return;
      }

      // Full render (drawer not yet open)
      drawerContainer.innerHTML = buildDrawerHTML();
      this._bindEvents();
    },

    /**
     * Check if the drawer should be used (Ghost-Intent active and SDK not loaded)
     */
    isActive() {
      return window.SwymLocalWishlist?.isGhostIntentActive?.() && !this._sdkLoaded && !(window._swat && window._swat.ui);
    },

    /**
     * Bind click handlers to drawer elements
     */
    _bindEvents() {
      // Close button
      const closeBtn = drawerContainer.querySelector(".swym-ghost-wl-close");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => this.close());
      }

      // Overlay click
      const overlay = document.getElementById(OVERLAY_ID);
      if (overlay) {
        overlay.addEventListener("click", () => this.close());
      }

      // Remove buttons — remove from localStorage and re-render immediately
      const removeButtons = drawerContainer.querySelectorAll("[data-remove-du]");
      removeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const du = btn.getAttribute("data-remove-du");
          if (du && window.SwymLocalWishlist) {
            window.SwymLocalWishlist.removeItem({
              du
            });
            // Direct re-render as safety net (event listener also triggers render)
            this.render();
            this._updateHeaderCount();
          }
        });
      });

      // Add to Cart buttons — POST to Shopify /cart/add.json
      // If epi (variant ID) is missing, fetch it from the product JSON endpoint first
      const atcButtons = drawerContainer.querySelectorAll("[data-atc-du]");
      atcButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          // Show loading state
          btn.classList.add("swym-ghost-wl-atc-loading");
          btn.disabled = true;

          const epi = btn.getAttribute("data-atc-epi");
          const du = btn.getAttribute("data-atc-du");

          // Resolve variant ID: use stored epi, or fetch first available variant from product JSON
          const resolveVariantId = epi ?
            Promise.resolve(epi) :
            fetch(du.split("?")[0] + ".json")
            .then(r => r.json())
            .then(data => {
              const variant = data?.product?.variants?.[0];
              return variant ? String(variant.id) : null;
            })
            .catch(() => null);

          resolveVariantId.then(variantId => {
            if (!variantId) {
              // Can't resolve variant — fall back to navigating to product page
              btn.classList.remove("swym-ghost-wl-atc-loading");
              btn.disabled = false;
              window.location.href = du;
              return;
            }

            fetch("/cart/add.json", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  id: variantId,
                  quantity: 1
                })
              })
              .then(res => {
                if (!res.ok) throw new Error("Cart add failed");
                return res.json();
              })
              .then(() => {
                // Show "Added to Cart" state — stays until page refresh
                btn.classList.remove("swym-ghost-wl-atc-loading");
                btn.classList.add("swym-ghost-wl-atc-added");
                const textEl = btn.querySelector(".swym-ghost-wl-atc-text");
                if (textEl) textEl.textContent = getStrings().addedToCart;
                // Keep button disabled with "Added to Cart" text permanently
                // Only resets on page refresh or drawer re-render
              })
              .catch(() => {
                btn.classList.remove("swym-ghost-wl-atc-loading");
                btn.disabled = false;
              });
          });
        });
      });

      // Consent CTA button
      const consentBtn = drawerContainer.querySelector("[data-ghost-consent-cta]");
      if (consentBtn) {
        consentBtn.addEventListener("click", () => {
          this.close();
          // Trigger the sync nudge consent popup
          if (window.SwymConsentPopupManager) {
            window.SwymConsentPopupManager.show({
              source: "ghost-wishlist-drawer",
              nudge: true
            });
          }
        });
      }

      // Escape key to close
      const escHandler = (e) => {
        if (e.key === "Escape" && isOpen) {
          this.close();
          document.removeEventListener("keydown", escHandler);
        }
      };
      document.addEventListener("keydown", escHandler);
    },

    /**
     * Update the header icon count badge from localStorage
     */
    _updateHeaderCount() {
      const count = window.SwymLocalWishlist?.getCount?.() || 0;
      const countElements = document.querySelectorAll(".swym-header-icon-count, [data-swym-count]");
      countElements.forEach(el => {
        el.textContent = count;
        el.setAttribute("data-count", count);
        const bubble = el.closest(".swym-header-icon-count-bubble");
        if (bubble) {
          bubble.style.display = count > 0 ? "" : "none";
        }
      });
    },

    _sdkLoaded: false
  };

  window.SwymGhostWishlistDrawer = SwymGhostWishlistDrawer;

  // Auto-initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => SwymGhostWishlistDrawer.init());
  } else {
    SwymGhostWishlistDrawer.init();
  }
})();