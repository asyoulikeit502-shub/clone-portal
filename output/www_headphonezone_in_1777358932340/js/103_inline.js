(function() {
  const isControlCentreEnabledFromMetafield = window?.SwymEnabledCommonFeatures?.["control-centre"];
  const isControlCentreEnabledFromBlockSettings = false;
  const isCommonCustomizationEnabledFromMetafield = window?.SwymWishlistCommonCustomizationSettings &&
    Object.keys(window.SwymWishlistCommonCustomizationSettings).length > 0;

  if (!(isControlCentreEnabledFromMetafield && isCommonCustomizationEnabledFromMetafield) && !isControlCentreEnabledFromBlockSettings) {
    return;
  }
  if (typeof window.SwymStorefrontLayoutContext === 'undefined') {
    window.SwymStorefrontLayoutContext = {};
  }

  // Initialize strings with empty values first to prevent string changes after loadStrings()
  SwymStorefrontLayoutContext.Strings = {
    title: "",
    addToCart: "",
    addedToCart: "",
    soldOut: "",
    addingToCart: "",
    viewCartCta: "",
    moveToCartCta: "",
    movingToCartCta: "",
    removeSflItemCta: "",

    loginHeading: "",
    loginText: "",
    loginButtonText: "",
    loggedUserWelcomeMessage: "",
    VariantSelectorBtnText: "",
    wishlistTitle: "",
    wishlistInfo: "",
    emptyWishlistTitle: "",
    emptyWishlistDescription: "",

    collectionTitle: "",
    emptyCarouselCollectionText: "",
    emptyCollectionText: "",
    emptyCollectionDescription: "",

    addToCollectionTitle: "",
    removeItemCta: "",
    addToCollectionCta: "",
    createCollectionCta: "",
    saveNewCollectionCta: "",
    renameCollectionCta: "",
    deleteCollectionCta: "",
    shareCollectionCta: "",
    saveCollectionCta: "",
    editCollectionCta: "",
    shareCollectionTitle: "",
    shareCollectionMessage: "",
    sharedCollectionMessage: "",
    updateCollectionTitle: "",

    errorMessageListNameRequired: "",
    errorMessageListNameRequire3Char: "",
    errorMessageListNameAlreadyExist: "",

    notificationMessageItemSaved: "",
    notificationMessageItemRemoved: "",
    notificationMessageAddedToCart: "",
    notificationMessageAddedToCollection: "",
    notificationMessageCollectionSaved: "",
    notificationMessageCollectionDeleted: "",
    notificationMessageCollectionUpdated: "",
    notificationMessageCollectionUnavailable: "",
    notificationMessageSFLItemSaved: "",
    notificationMessageSFLItemRemoved: "",
    notificationMessageMovedToCart: "",

    notificationActionAddToCollection: "",
    notificationActionView: "",
    notificationActionViewCollection: "",
    notificationActionGoToCart: "",

    item: "",
    items: "",

    tabWishlist: "",
    tabSavedForLater: "",
    tabSavedForYou: "",

    savedForLaterTitle: "",
    emptySavedForLaterTitle: "",
    emptySavedForLaterDescription: "",

    awNudgeMessage: "",
    awNudgeMessageSub: "",
    awNudgeLoginCTA: "",
    awNudgeDismiss: ""
  };

  /** 
   * Function to override Swym's default UI behavior.
   **/
  const overrideSwymDefaultUI = (swat) => {
    try {
      swat.ui.open = function() {
        window.location.hash = SwymStorefrontLayoutContext?.StorefrontLayoutUrls?.List;
      }

      if (swat.ui?.uiRef?.settings?.UI) {
        swat.ui.uiRef.settings.UI.NotificationDisabled = true;
      }
    } catch (e) {
      swat.utils?.warn('Error overriding Swym default UI:', e);
    }
  }

  /**
   * Callback function to override Swym's default UI behavior based on Storefront Layout settings.
   * 
   * - Overrides `swat.ui.open` to redirect to a custom Storefront Layout URL if enabled.
   * - Overrides Swym's default notifications to log notifications instead of displaying them.
   * - Ensures the callback is pushed to `window.SwymCallbacks` for execution when Swym is initialized.
   * 
   * @param {Object} swat - Swym's UI object used for overriding UI behaviors.
   */
  const swymStorefrontLayoutCallback = (swat) => {
    SwymStorefrontLayoutContext.swat = swat;

    overrideSwymDefaultUI(swat);


    let triggerHeartbeat = swat?.ExtensionHealth?.triggerExtensionHeartbeat;
    if (typeof triggerHeartbeat !== "function") return;

    let wishlistNewUiHeartbeatData = '';
    try {
      wishlistNewUiHeartbeatData = JSON.parse(wishlistNewUiHeartbeatData) || {};
    } catch (e) {
      wishlistNewUiHeartbeatData = {};
    }

    let themeId = window.Shopify.theme.id;
    let isDesignMode = !!window.swymDesignMode;
    let lastHeartbeat = isDesignMode ? wishlistNewUiHeartbeatData?.editor : wishlistNewUiHeartbeatData?.[themeId];
    let themeContext = isDesignMode ? 'editor' : themeId;
    let extensionData = {
      extensionName: "wishlist-new-ui",
      extensionType: "app-embed",
      metadata: {},
      themeId: themeContext,
      extensionSource: "default"
    };
    /** Stop heartbeat
    triggerHeartbeat(extensionData, lastHeartbeat);
    */
  }

  if (!window.SwymCallbacks) {
    window.SwymCallbacks = [];
  }
  window.SwymCallbacks.push(swymStorefrontLayoutCallback);
})();