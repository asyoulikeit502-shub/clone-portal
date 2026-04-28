/**
 * Swym Ghost-Intent: Local Wishlist Engine
 * 
 * Provides LocalStorage-based wishlist functionality for shoppers
 * who haven't given cookie consent. No PII or Swym API calls.
 * 
 * Loaded by storefront-ui-elements.liquid (always runs, no consent needed).
 */
(function() {
  "use strict";

  // Prevent double initialization
  if (window.SwymLocalWishlist) return;

  // --- Configuration ---
  const STORAGE_KEY_PREFIX = "swym-ghost-";
  const STORAGE_VERSION = 1;
  const FIRST_NUDGE_THRESHOLD = 3; // Show consent popup after 3 add-to-wishlist clicks
  const SECOND_NUDGE_THRESHOLD = 5; // Show consent popup again after 5 total clicks
  // No time-based unblock — user stays blocked until they accept consent

  /**
   * Get the storage key for the current shop domain
   */
  const getStorageKey = () => {
    const shop = window.Shopify?.shop || window.location.hostname;
    return STORAGE_KEY_PREFIX + shop;
  };

  /**
   * Read the full data object from LocalStorage
   */
  const readStore = () => {
    try {
      const raw = localStorage.getItem(getStorageKey());
      if (!raw) {
        return {
          items: [],
          nudgeDismissed: false,
          clickCounter: 0,
          declineStage: 0,
          version: STORAGE_VERSION
        };
      }
      const data = JSON.parse(raw);
      // Version check — if structure changes in future, migrate here
      if (data.version !== STORAGE_VERSION) {
        return {
          items: data.items || [],
          nudgeDismissed: data.nudgeDismissed || false,
          clickCounter: data.clickCounter || 0,
          declineStage: data.declineStage || 0,
          version: STORAGE_VERSION
        };
      }
      // Ensure clickCounter and declineStage exist for stores upgrading from older version
      if (typeof data.clickCounter === 'undefined') {
        data.clickCounter = 0;
      }
      if (typeof data.declineStage === 'undefined') {
        data.declineStage = 0;
      }
      return data;
    } catch (e) {
      console.warn("[Swym Ghost-Intent] Failed to read LocalStorage:", e);
      return {
        items: [],
        nudgeDismissed: false,
        clickCounter: 0,
        declineStage: 0,
        version: STORAGE_VERSION
      };
    }
  };

  /**
   * Write the full data object to LocalStorage
   */
  const writeStore = (data) => {
    try {
      localStorage.setItem(getStorageKey(), JSON.stringify(data));
    } catch (e) {
      console.warn("[Swym Ghost-Intent] Failed to write LocalStorage:", e);
    }
  };

  /**
   * Normalize a product URL for consistent comparison
   * Strips query params and trailing slashes, lowercases
   */
  const normalizeUrl = (url) => {
    if (!url) return "";
    try {
      // Handle relative URLs
      let fullUrl = url;
      if (url.startsWith("/")) {
        fullUrl = window.location.origin + url;
      }
      const parsed = new URL(fullUrl);
      // Keep only the pathname (strip query, hash, origin)
      return parsed.pathname.replace(/\/$/, "").toLowerCase();
    } catch (e) {
      // Fallback: basic string cleanup
      return url.split("?")[0].replace(/\/$/, "").toLowerCase();
    }
  };

  // --- Public API ---

  const SwymLocalWishlist = {

    /**
     * Add an item to the local wishlist
     * @param {Object} product - { empi, epi, du, dt, iu, pr }
     * @returns {boolean} true if added, false if already exists
     */
    addItem(product) {
      if (!product || !product.du) {
        console.warn("[Swym Ghost-Intent] addItem requires at least { du }");
        return false;
      }

      const store = readStore();
      const normalizedDu = normalizeUrl(product.du);

      // Check for duplicates by du (normalized URL)
      const exists = store.items.some(
        (item) => normalizeUrl(item.du) === normalizedDu
      );

      if (exists) {
        return false;
      }

      store.items.push({
        empi: product.empi || null,
        epi: product.epi || null,
        du: product.du,
        dt: product.dt || "",
        iu: product.iu || "",
        pr: product.pr || null,
        stk: product.stk != null ? product.stk : 1,
        ts: Date.now(),
        synced: false,
      });

      writeStore(store);
      this._dispatchEvent("localItemAdded", {
        product
      });
      return true;
    },

    /**
     * Remove an item from the local wishlist
     * @param {Object} product - { du } or { empi, epi }
     * @returns {boolean} true if removed
     */
    removeItem(product) {
      if (!product) return false;

      const store = readStore();
      const normalizedDu = product.du ? normalizeUrl(product.du) : null;
      const originalLength = store.items.length;

      store.items = store.items.filter((item) => {
        if (normalizedDu) {
          return normalizeUrl(item.du) !== normalizedDu;
        }
        // Fallback: match by empi + epi
        if (product.empi && product.epi) {
          return !(item.empi === product.empi && item.epi === product.epi);
        }
        return true;
      });

      if (store.items.length < originalLength) {
        writeStore(store);
        this._dispatchEvent("localItemRemoved", {
          product
        });
        return true;
      }
      return false;
    },

    /**
     * Toggle an item in the local wishlist (add if not present, remove if present)
     * @param {Object} product - { empi, epi, du, dt, iu, pr }
     * @returns {boolean} true if item is now in wishlist, false if removed
     */
    toggleItem(product) {
      if (this.isWishlisted(product)) {
        this.removeItem(product);
        return false;
      } else {
        this.addItem(product);
        return true;
      }
    },

    /**
     * Check if a product is in the local wishlist
     * @param {Object} product - { du } or { empi, epi }
     * @returns {boolean}
     */
    isWishlisted(product) {
      if (!product) return false;

      const store = readStore();
      const normalizedDu = product.du ? normalizeUrl(product.du) : null;

      return store.items.some((item) => {
        if (normalizedDu) {
          return normalizeUrl(item.du) === normalizedDu;
        }
        if (product.empi && product.epi) {
          return item.empi === product.empi && item.epi === product.epi;
        }
        return false;
      });
    },

    /**
     * Get all items in the local wishlist
     * @returns {Array}
     */
    getItems() {
      return readStore().items;
    },

    /**
     * Get the count of items in the local wishlist
     * @returns {number}
     */
    getCount() {
      return readStore().items.length;
    },

    /**
     * Get items that haven't been synced to cloud yet
     * @returns {Array}
     */
    getSyncableItems() {
      return readStore().items.filter((item) => !item.synced);
    },

    /**
     * Mark all items as synced after successful cloud sync
     */
    markAllSynced() {
      const store = readStore();
      store.items.forEach((item) => {
        item.synced = true;
      });
      writeStore(store);
    },

    /**
     * Mark specific items as synced
     * @param {Array} syncedProducts - array of { du } or { empi, epi }
     */
    markItemsSynced(syncedProducts) {
      if (!syncedProducts || syncedProducts.length === 0) return;

      const store = readStore();
      syncedProducts.forEach((syncedProduct) => {
        const normalizedDu = syncedProduct.du ? normalizeUrl(syncedProduct.du) : null;
        store.items.forEach((item) => {
          if (normalizedDu && normalizeUrl(item.du) === normalizedDu) {
            item.synced = true;
          } else if (syncedProduct.empi && syncedProduct.epi &&
            item.empi === syncedProduct.empi && item.epi === syncedProduct.epi) {
            item.synced = true;
          }
        });
      });
      writeStore(store);
    },

    /**
     * Clear all local wishlist data
     */
    clear() {
      try {
        localStorage.removeItem(getStorageKey());
      } catch (e) {
        console.warn("[Swym Ghost-Intent] Failed to clear LocalStorage:", e);
      }
    },

    // --- Progressive Consent Nudge Logic ---
    //
    // Flow:
    //   declineStage 0 → popup at 3 clicks → user declines → declineStage 1
    //   declineStage 1 → popup at 5 total clicks → user declines → confirmation alert shown
    //   User declines confirmation → blocked for 30 days (declineStage 2)
    //   After 30 days → reset to declineStage 0, clickCounter 0

    /**
     * Check if a sync nudge should be shown based on the current decline stage.
     * @returns {string|false} 'popup' to show consent popup, 'confirm' to show confirmation alert, or false
     */
    shouldShowSyncNudge() {
      // If user is blocked (declined twice), always show popup on every click
      if (this.isConsentBlocked()) return 'popup';
      const store = readStore();
      if (store.declineStage === 0 && store.clickCounter >= FIRST_NUDGE_THRESHOLD) {
        return 'popup';
      }
      if (store.declineStage === 1 && store.clickCounter >= SECOND_NUDGE_THRESHOLD) {
        return 'popup';
      }
      return false;
    },

    /**
     * Increment the click counter (called on each ADD action, not removes).
     */
    incrementClickCounter() {
      const store = readStore();
      store.clickCounter = (store.clickCounter || 0) + 1;
      writeStore(store);
    },

    /**
     * Reset the click counter to 0.
     */
    resetClickCounter() {
      const store = readStore();
      store.clickCounter = 0;
      writeStore(store);
    },

    /**
     * Get the current decline stage.
     * @returns {number} 0 = no declines, 1 = first decline, 2 = blocked
     */
    getDeclineStage() {
      const store = readStore();
      return store.declineStage || 0;
    },

    /**
     * Advance the decline stage after a popup decline.
     * Stage 0 → 1 (first decline), Stage 1 → triggers confirmation alert (handled by caller).
     */
    advanceDeclineStage() {
      const store = readStore();
      store.declineStage = (store.declineStage || 0) + 1;
      writeStore(store);
    },

    /**
     * Block consent permanently after final decline in confirmation alert.
     * Sets declineStage to 2. User stays blocked until they accept consent.
     */
    setConsentBlocked() {
      const store = readStore();
      store.declineStage = 2;
      store.clickCounter = 0;
      writeStore(store);
    },

    /**
     * Check if consent is currently blocked (user declined twice).
     * User stays blocked until they accept consent — no time-based unblock.
     * @returns {boolean}
     */
    isConsentBlocked() {
      const store = readStore();
      return store.declineStage >= 2;
    },

    /**
     * Reset decline stage and click counter (e.g., when user accepts consent).
     */
    resetConsentState() {
      const store = readStore();
      store.declineStage = 0;
      store.clickCounter = 0;
      writeStore(store);
    },

    // --- Ghost-Intent State ---

    /**
     * Check if Ghost-Intent should be active.
     * Active when:
     * 1. At least one config flag is enabled (merchant setting)
     * 2. Not in Shopify design mode
     * 3. User has NOT given consent through our Ghost-Intent flow yet
     * 
     * Note: Does NOT depend on Shopify's shouldShowBanner() or region.
     * The merchant flag is the authority - if they enable Ghost-Intent,
     * it works on any store regardless of region.
     * 
     * @returns {boolean}
     */
    isGhostIntentActive() {
      const config = window.SwymGhostIntentConfig || {};

      // If neither flag is enabled, Ghost-Intent is off
      if (!config.isExplicitConsentNeeded && !config.isExplicitConsentNeededEvenForLocalStorage) {
        return false;
      }

      // Check if we're in design mode
      if (window.Shopify?.designMode) {
        return false;
      }

      // Check if consent has already been given through our flow
      if (this.hasConsentBeenGiven()) {
        return false;
      }

      // Check if Shopify native cookie consent was given via the cookie banner.
      // If user accepted cookies through Shopify's banner, Ghost-Intent should not be active
      // because the SDK will load normally via the standard consent flow.
      try {
        var shopifyConsentGiven = window.Shopify?.customerPrivacy?.preferencesProcessingAllowed?.();
        if (shopifyConsentGiven) {
          return false;
        }
      } catch (e) {}

      // Merchant enabled Ghost-Intent and no consent given yet
      return true;
    },

    /**
     * Check if the merchant requires explicit consent even for LocalStorage
     * @returns {boolean}
     */
    requiresLocalStorageConsent() {
      const config = window.SwymGhostIntentConfig || {};
      // Show popup if: merchant requires it AND user hasn't already accepted.
      // Declining does NOT block — popup re-shows on every heart click until accepted.
      return !!config.isExplicitConsentNeededEvenForLocalStorage && !this.hasLocalConsentBeenGiven();
    },

    /**
     * Get the Ghost-Intent configuration
     * @returns {Object}
     */
    getConfig() {
      return window.SwymGhostIntentConfig || {
        isExplicitConsentNeeded: false,
        isExplicitConsentNeededEvenForLocalStorage: false,
      };
    },

    /**
     * Check if consent has been given through our Ghost-Intent flow.
     * Uses a separate localStorage key so it works on any store (EU or non-EU).
     * @returns {boolean}
     */
    hasConsentBeenGiven() {
      try {
        var consentKey = 'swym-ghost-consent-' + (window.Shopify?.shop || '');
        return localStorage.getItem(consentKey) === 'true';
      } catch (e) {
        return false;
      }
    },

    /**
     * Mark consent as given through our Ghost-Intent flow.
     * Called when user accepts consent via sync nudge popup.
     */
    setConsentGiven() {
      try {
        var consentKey = 'swym-ghost-consent-' + (window.Shopify?.shop || '');
        localStorage.setItem(consentKey, 'true');
      } catch (e) {
        console.warn('[Swym Ghost-Intent] Failed to save consent flag');
      }
    },

    /**
     * Check if user has acknowledged the "device only" Mode 2 popup.
     * Uses a separate localStorage key to track Mode 2 local consent.
     * @returns {boolean}
     */
    hasLocalConsentBeenGiven() {
      try {
        var consentKey = 'swym-ghost-local-consent-' + (window.Shopify?.shop || '');
        return localStorage.getItem(consentKey) === 'true';
      } catch (e) {
        return false;
      }
    },

    /**
     * Mark Mode 2 "device only" acknowledgment as given.
     * Called when user accepts the Mode 2 popup (saves to local storage + remembers choice).
     */
    setLocalConsentGiven() {
      try {
        var consentKey = 'swym-ghost-local-consent-' + (window.Shopify?.shop || '');
        localStorage.setItem(consentKey, 'true');
        // Clear any previous decline flag since user accepted
        var declineKey = 'swym-ghost-local-declined-' + (window.Shopify?.shop || '');
        localStorage.removeItem(declineKey);
      } catch (e) {
        console.warn('[Swym Ghost-Intent] Failed to save local consent flag');
      }
    },

    /**
     * Check if user has declined the Mode 2 popup within the TTL (30 days).
     * @returns {boolean} true if user declined and TTL has not expired
     */
    hasLocalConsentBeenDeclined() {
      try {
        var declineKey = 'swym-ghost-local-declined-' + (window.Shopify?.shop || '');
        var declinedAt = localStorage.getItem(declineKey);
        if (!declinedAt) return false;
        var TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
        var elapsed = Date.now() - parseInt(declinedAt, 10);
        if (elapsed < TTL_MS) {
          return true;
        }
        // TTL expired — remove flag so popup can show again
        localStorage.removeItem(declineKey);
        return false;
      } catch (e) {
        return false;
      }
    },

    /**
     * Mark Mode 2 popup as declined. Stores timestamp for 30-day TTL.
     * Called when user clicks "No thanks" on Mode 2 popup.
     */
    setLocalConsentDeclined() {
      try {
        var declineKey = 'swym-ghost-local-declined-' + (window.Shopify?.shop || '');
        localStorage.setItem(declineKey, String(Date.now()));
      } catch (e) {
        console.warn('[Swym Ghost-Intent] Failed to save local decline flag');
      }
    },

    // --- Sync Helper ---

    /**
     * Sync local items to Swym cloud.
     * Called when SDK loads after consent is given.
     *
     * Strategy (optimized for minimal API calls):
     * 1. Add first item via addToWishlistUsingDu() — auto-creates the default
     *    list and resolves empi/epi internally. Returns lid.
     * 2. Resolve product details for remaining items IN PARALLEL using
     *    swat.api.getProductDetails() — ghost-intent items from collections
     *    pages only have 'du', but addProductsToList requires empi, epi, du.
     * 3. Batch-add all resolved items via addProductsToList(lid, items) —
     *    single API call for all remaining items.
     *
     * Result: 1 item = 1 API call. N items = 1 + N parallel resolves + 1 batch = N+2 calls
     * (vs 2N sequential calls with individual addToWishlistUsingDu for each).
     *
     * @param {Object} swat - The Swym SDK instance
     */
    syncToCloud(swat) {
      if (!swat) {
        console.warn("[Swym Ghost-Intent] syncToCloud called without swat instance");
        return;
      }

      if (typeof swat.addToWishlistUsingDu !== "function") {
        console.warn("[Swym Ghost-Intent] addToWishlistUsingDu not available on swat instance");
        return;
      }

      const syncableItems = this.getSyncableItems();
      if (syncableItems.length === 0) {
        console.log("[Swym Ghost-Intent] No items to sync");
        return;
      }

      console.log("[Swym Ghost-Intent] Syncing " + syncableItems.length + " local items to cloud");

      // Suppress "Item Saved" notifications during ghost-intent sync
      // The storefront layout checks swat.ui.uiRef.settings.UI.WishlistShowNotification
      this._suppressNotifications(swat);

      const self = this;
      const firstItem = syncableItems[0];
      const remainingItems = syncableItems.slice(1);

      // Step 1: Add first item via addToWishlistUsingDu — creates default list + resolves product details
      console.log("[Swym Ghost-Intent] Step 1: Adding first item via addToWishlistUsingDu: " + firstItem.du);
      swat.addToWishlistUsingDu({
          du: firstItem.du,
          source: "ghost-intent-sync",
        },
        function(firstResult) {
          console.log("[Swym Ghost-Intent] First item synced successfully");
          self.markItemsSynced([firstItem]);

          if (remainingItems.length === 0) {
            console.log("[Swym Ghost-Intent] Sync complete (1 item)");
            self._restoreNotifications(swat);
            self._dispatchEvent("syncComplete", {
              total: 1,
              synced: 1,
              failed: 0
            });
            return;
          }

          // Extract lid from the first item's response
          var lid = firstResult && (firstResult.lid || (firstResult.di && firstResult.di.lid));

          if (!lid) {
            // Fallback: fetch lists to get the lid
            console.log("[Swym Ghost-Intent] No lid in response, fetching lists...");
            self._fetchLidThenBatchSync(swat, remainingItems);
            return;
          }

          // Step 2 + 3: Resolve product details in parallel, then batch add
          self._resolveAndBatchSync(swat, lid, remainingItems);
        },
        function(error) {
          console.warn("[Swym Ghost-Intent] First item sync failed:", error);
          // Fallback: try fetching lists and syncing all items
          self._fetchLidThenBatchSync(swat, syncableItems);
        }
      );
    },

    /**
     * Fetch the default list lid, then resolve + batch sync items.
     * Used as fallback when lid is not available from the first item's response.
     * @private
     */
    _fetchLidThenBatchSync(swat, items) {
      var self = this;
      if (typeof swat.fetch !== "function") {
        console.warn("[Swym Ghost-Intent] swat.fetch not available, falling back to individual sync");
        self._syncItemsIndividually(swat, items);
        return;
      }
      swat.fetch(function(lists) {
        var defaultList = lists && lists[0];
        if (defaultList && defaultList.lid) {
          self._resolveAndBatchSync(swat, defaultList.lid, items);
        } else {
          console.warn("[Swym Ghost-Intent] No lists found, falling back to individual sync");
          self._syncItemsIndividually(swat, items);
        }
      });
    },

    /**
     * Resolve product details for items in parallel, then batch-add to list.
     * 
     * Ghost-intent items from collections pages only have 'du' (product URL).
     * addProductsToList requires empi, epi, du for each item.
     * So we resolve product details first using swat.api.getProductDetails().
     * 
     * @private
     */
    _resolveAndBatchSync(swat, lid, items) {
      var self = this;
      var resolvedProducts = [];
      var failedItems = [];
      var completed = 0;
      var total = items.length;

      console.log("[Swym Ghost-Intent] Step 2: Resolving product details for " + total + " items in parallel");

      if (!(swat.api && typeof swat.api.getProductDetails === "function") && typeof swat.getProductDetails !== "function") {
        console.warn("[Swym Ghost-Intent] getProductDetails not available, falling back to individual sync");
        self._syncItemsIndividually(swat, items);
        return;
      }

      var getProductDetailsFn = (swat.api && typeof swat.api.getProductDetails === "function") ?
        swat.api.getProductDetails.bind(swat.api) :
        swat.getProductDetails.bind(swat);

      items.forEach(function(item, index) {
        var duParams = {
          du: item.du
        };
        // Use platform.getProductUrl if available to normalize the URL
        if (swat.platform && typeof swat.platform.getProductUrl === "function") {
          duParams.du = swat.platform.getProductUrl(item.du);
        }

        getProductDetailsFn(duParams, function(productDetails) {
          var resolved = {
            empi: productDetails.id,
            epi: item.epi || (productDetails.variants && productDetails.variants[0] && productDetails.variants[0].id),
            du: duParams.du,
            pr: productDetails.price / 100,
            iu: productDetails.featured_image,
          };
          if (productDetails.title) {
            resolved.dt = productDetails.title;
          }
          resolvedProducts.push({
            resolved: resolved,
            original: item
          });
          completed++;
          console.log("[Swym Ghost-Intent] Resolved " + completed + "/" + total + ": " + item.du);

          if (completed === total) {
            self._batchAddResolved(swat, lid, resolvedProducts, failedItems);
          }
        }, function(error) {
          console.warn("[Swym Ghost-Intent] Failed to resolve product details for: " + item.du + " - ", error);
          failedItems.push(item);
          completed++;

          if (completed === total) {
            self._batchAddResolved(swat, lid, resolvedProducts, failedItems);
          }
        });
      });
    },

    /**
     * Batch-add resolved products to list in a single API call.
     * @private
     */
    _batchAddResolved(swat, lid, resolvedProducts, failedItems) {
      var self = this;

      if (resolvedProducts.length === 0) {
        console.warn("[Swym Ghost-Intent] No products resolved successfully");
        self._restoreNotifications(swat);
        self._dispatchEvent("syncComplete", {
          total: failedItems.length,
          synced: 0,
          failed: failedItems.length
        });
        return;
      }

      var listItemMaps = resolvedProducts.map(function(p) {
        return p.resolved;
      });
      var originalItems = resolvedProducts.map(function(p) {
        return p.original;
      });

      console.log("[Swym Ghost-Intent] Step 3: Batch adding " + listItemMaps.length + " items to list " + lid);

      if (swat.api && typeof swat.api.addProductsToList === "function") {
        swat.api.addProductsToList(
          lid,
          listItemMaps,
          function() {
            console.log("[Swym Ghost-Intent] Batch sync successful (" + listItemMaps.length + " items)");
            self.markItemsSynced(originalItems);
            self._restoreNotifications(swat);
            var totalSynced = listItemMaps.length + 1; // +1 for the first item
            self._dispatchEvent("syncComplete", {
              total: totalSynced + failedItems.length,
              synced: totalSynced,
              failed: failedItems.length,
            });
          },
          function(error) {
            console.warn("[Swym Ghost-Intent] Batch sync failed, falling back to individual sync:", error);
            self._syncItemsIndividually(swat, originalItems);
          }
        );
      } else {
        console.warn("[Swym Ghost-Intent] addProductsToList not available, falling back to individual sync");
        self._syncItemsIndividually(swat, originalItems);
      }
    },

    /**
     * Fallback: sync items one by one using addToWishlistUsingDu.
     * Used when batch sync is unavailable or fails.
     * @private
     */
    _syncItemsIndividually(swat, items) {
      var self = this;
      var completedCount = 0;
      var total = items.length;
      var failedProducts = [];

      console.log("[Swym Ghost-Intent] Fallback: syncing " + total + " items individually");

      items.forEach(function(item) {
        swat.addToWishlistUsingDu({
            du: item.du,
            source: "ghost-intent-sync",
          },
          function() {
            completedCount++;
            self.markItemsSynced([item]);
            if (completedCount === total) {
              console.log("[Swym Ghost-Intent] Individual sync complete (" + total + " items, " + failedProducts.length + " failed)");
              self._restoreNotifications(swat);
              self._dispatchEvent("syncComplete", {
                total: total,
                synced: total - failedProducts.length,
                failed: failedProducts.length
              });
            }
          },
          function(error) {
            completedCount++;
            failedProducts.push(item);
            console.warn("[Swym Ghost-Intent] Failed to sync item:", item.du, error);
            if (completedCount === total) {
              self._restoreNotifications(swat);
              self._dispatchEvent("syncComplete", {
                total: total,
                synced: total - failedProducts.length,
                failed: failedProducts.length
              });
            }
          }
        );
      });
    },

    // --- Notification Suppression ---

    /**
     * Temporarily suppress "Item Saved" notifications during ghost-intent sync.
     * Saves the original setting and disables it so bulk sync doesn't spam notifications.
     * @private
     */
    _suppressNotifications(swat) {
      try {
        var uiSettings = swat && swat.ui && swat.ui.uiRef && swat.ui.uiRef.settings && swat.ui.uiRef.settings.UI;
        if (uiSettings) {
          this._originalWishlistShowNotification = uiSettings.WishlistShowNotification;
          uiSettings.WishlistShowNotification = false;
          console.log('[Swym Ghost-Intent] Notifications suppressed during sync');
        }
      } catch (e) {
        // Silent fail — notifications may still show but sync won't break
      }
    },

    /**
     * Restore notifications after ghost-intent sync completes.
     * @private
     */
    _restoreNotifications(swat) {
      try {
        var uiSettings = swat && swat.ui && swat.ui.uiRef && swat.ui.uiRef.settings && swat.ui.uiRef.settings.UI;
        if (uiSettings && typeof this._originalWishlistShowNotification !== 'undefined') {
          uiSettings.WishlistShowNotification = this._originalWishlistShowNotification;
          delete this._originalWishlistShowNotification;
          console.log('[Swym Ghost-Intent] Notifications restored after sync');
        }
      } catch (e) {
        // Silent fail
      }
    },

    // --- Events ---

    /**
     * Dispatch a custom event for other components to listen to
     * @private
     */
    _dispatchEvent(eventName, detail) {
      try {
        document.dispatchEvent(
          new CustomEvent("swym:ghost-intent:" + eventName, {
            detail
          })
        );
      } catch (e) {
        // Silent fail for older browsers
      }
    },
  };

  // Expose globally
  window.SwymLocalWishlist = SwymLocalWishlist;
})();