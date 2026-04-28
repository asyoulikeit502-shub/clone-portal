// Checkout Plus Widget Template
// This file contains the actual widget code that will be served to Shopify themes

;
(function() {
  // Get store domain from script tag or URL parameters
  const currentScript =
    document.currentScript || document.querySelector('script[src*="widget.js"]')
  const scriptSrc = currentScript ? currentScript.src : ''
  const urlParams = new URLSearchParams(scriptSrc.split('?')[1] || '')
  const storeDomain = urlParams.get('store') || 'STORE_PLACEHOLDER'
  console.log('Checkout Plus Widget loaded for store:', storeDomain)

  let cartSubtotal = 0
  /** Insurable subtotal (excludes digital/tag/id-excluded lines); drives P+ % and variant. */
  let eligibleProtectionSubtotal = 0
  let activeCurrency = 'USD'
  let conversionRate = 1
  let protectionPercentage = 0.02 // Dynamic rate from store config
  let minimumProtectionCost = 4.99 // Dynamic fee from store config
  let protectPlusProductData = null // Store product data globally
  const excludeFromAutoProtectionTags = []
  const excludeFromAutoProtectionProductIds = []
  const excludeDigitalProductsFromAutoProtection =
    false

  function ppNumericProductIdForCompare(raw) {
    if (raw == null || raw === '') return ''
    const s = String(raw).trim()
    const m = s.match(/Product\/(\d+)/i)
    if (m) return m[1]
    if (/^\d+$/.test(s)) return s
    return ''
  }

  // Widget customization from merchant settings
  const widgetTitle = "Checkout+"
  const widgetBadge = "Recommended"
  const widgetSubtext = "Free Return Shipping for Exchanges/Store Credit + Package Protection, Shop worry-free."
  const widgetSkipLinkText = "checkout without free returns + package protection"
  const widgetModalTitle = "Checkout+ Protection"
  const widgetModalContent = "<p><strong>What's included:</strong></p><p>• Free return shipping for exchanges</p><p>• Store credit for returns</p><p>• Package protection against loss or damage</p><p>• Priority customer support</p><p><strong>How it works:</strong></p><p>If your package is lost, damaged, stolen or you need to make a return, we've got you covered with our premium protection service.</p><p><br></p><p>\"Porch pirates stole 260 million packages last year. Sleep better knowing your order is protected \"</p>"
  const widgetEnabled = false
  const widgetDisplayPrice = true
  const widgetButtonLabel = "Checkout+"
  const widgetButtonLabelColor = "#ffffff"
  const widgetShowSkipLink = true
  const widgetShowLogo = true

  // Multi-language translations
  const widgetTranslations = {}

  // Detect buyer's locale and apply translations
  function ppGetBuyerLocale() {
    try {
      // 1. Shopify's locale (set by Shopify for multi-language stores)
      if (window.Shopify && window.Shopify.locale) return window.Shopify.locale.toLowerCase().split('-')[0]
      // 2. HTML lang attribute
      const htmlLang = document.documentElement.lang
      if (htmlLang) return htmlLang.toLowerCase().split('-')[0]
      // 3. Browser language
      const navLang = navigator.language || navigator.userLanguage
      if (navLang) return navLang.toLowerCase().split('-')[0]
    } catch (e) {
      /* fallback to en */ }
    return 'en'
  }

  function ppGetTranslatedText(field, defaultValue) {
    const locale = ppGetBuyerLocale()
    if (locale === 'en') return defaultValue
    if (widgetTranslations[locale] && widgetTranslations[locale][field]) {
      return widgetTranslations[locale][field]
    }
    return defaultValue
  }

  // Apply translations to widget text (English values are the defaults, translated values override)
  const ppTitle = ppGetTranslatedText('title', widgetTitle)
  const ppBadge = ppGetTranslatedText('badge', widgetBadge)
  const ppSubtext = ppGetTranslatedText('subtext', widgetSubtext)
  const ppSkipLinkText = ppGetTranslatedText('skipLinkText', widgetSkipLinkText)
  const ppModalTitle = ppGetTranslatedText('modalTitle', widgetModalTitle)
  const ppModalContent = ppGetTranslatedText('modalContent', widgetModalContent)
  const ppButtonLabel = ppGetTranslatedText('buttonLabel', widgetButtonLabel)

  console.log('protectionPercentage: ', protectionPercentage)
  console.log('minimumProtectionCost: ', minimumProtectionCost)
  console.log('Widget customization loaded:', {
    title: widgetTitle,
    badge: widgetBadge,
    subtext: widgetSubtext,
    skipLinkText: widgetSkipLinkText,
    modalTitle: widgetModalTitle,
    enabled: widgetEnabled,
    excludeFromAutoProtectionTags,
    excludeFromAutoProtectionProductIds,
    excludeDigitalProductsFromAutoProtection,
  })

  window.protectPlusConfig = {
    enabled: widgetEnabled,
  }

  const detectMonsterUpsells = () => {
    return window.mu_version
  }

  if (detectMonsterUpsells()) {
    console.log('Monster Cart detected - using custom checkout flow')
    window.mu_custom_checkout = async () => {
      const discountCode = await window.mu_get_discount()

      if (discountCode && discountCode.code) {
        const checkoutUrl = '/checkout'
        const discountedCheckoutUrl = `${checkoutUrl}?discount=${discountCode.code}`

        console.log(
          `Detected discount code: ${discountCode.code}, redirecting to: ${discountedCheckoutUrl}`,
        )
        window.location.href = discountedCheckoutUrl
        return true
      }

      // No discount code, proceed to standard checkout
      console.log(
        'No valid discount code found, proceeding to standard checkout',
      )
      window.location.href = '/checkout'
      return false
    }
  }

  // Centralized checkout function
  const proceedToCheckout = async () => {
    if (detectMonsterUpsells()) {
      console.log('Using Monster Upsells custom checkout flow')
      return await window.mu_custom_checkout()
    }
    console.log('Proceeding to standard checkout')
    window.location.href = '/checkout'
  }

  // Store variants on window object for global access
  window.protectPlusVariants = window.protectPlusVariants || []

  const style = `
    .pp-container,
    #monster-upsell-cart .pp-container {
      font-family: inherit !important;
      font-size: 14px !important;
      color: #000 !important;
    }
    .pp-header,
    #monster-upsell-cart .pp-header {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      margin-bottom: 4px !important;
    }
    .pp-left,
    #monster-upsell-cart .pp-left {
      display: flex !important;
      align-items: center !important;
      gap: 6px !important;
    }
    .pp-icon,
    #monster-upsell-cart .pp-icon {
      width: 16px !important;
      height: 16px !important;
    }
    .pp-info-icon,
    #monster-upsell-cart .pp-info-icon {
      cursor: pointer !important;
    }
    .pp-title,
    #monster-upsell-cart .pp-title {
      font-weight: 600 !important;
      color: #000000 !important;
    }
    .pp-badge,
    #monster-upsell-cart .pp-badge {
      background: #E5F0FF !important;
      color: #1A73E8 !important;
      font-size: 10px !important;
      padding: 2px 4px !important;
      border-radius: 4px !important;
      font-weight: 500 !important;
    }
    .pp-subtext,
    #monster-upsell-cart .pp-subtext {
      font-size: 12px !important;
      color: #333333 !important;
      margin: 8px 0 !important;
      text-align: left !important;
    }
    .pp-button,
    #monster-upsell-cart .pp-button {
      background-color: #000000 !important;
      color: #ffffff !important;
      padding: 10px 16px !important;
      font-size: 13px !important;
      font-weight: normal !important;
      text-align: center !important;
      border: none !important;
      cursor: pointer !important;
      margin-bottom: 8px !important;
      width: 100% !important;
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    .pp-button.loading,
    #monster-upsell-cart .pp-button.loading {
      color: transparent !important;
    }
    .pp-button .pp-spinner {
      position: absolute !important;
      width: 16px !important;
      height: 16px !important;
      border: 2px solid rgba(255, 255, 255, 0.3) !important;
      border-top: 2px solid #fff !important;
      border-radius: 50% !important;
    }
    .pp-button .pp-spinner,
    #monster-upsell-cart .pp-button .pp-spinner {
      display: none !important;
    }
    .pp-button.loading .pp-spinner,
    #monster-upsell-cart .pp-button.loading .pp-spinner {
      display: block !important;
      animation: pp-spin 1s linear infinite !important;
    }
    @keyframes pp-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .pp-link,
    #monster-upsell-cart .pp-link {
      font-size: 11px !important;
      color: #666666 !important;
      text-align: center !important;
      display: block !important;
      text-decoration: underline !important;
      cursor: pointer !important;
    }
    .pp-modal {
      display: none;
      position: fixed !important;
      z-index: 2147483647 !important;
      left: 0 !important;
      top: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background-color: rgba(0,0,0,0) !important;
      pointer-events: auto !important;
      opacity: 0;
      transition: opacity 0.3s ease, background-color 0.3s ease;
    }
    .pp-modal.pp-modal-show {
      opacity: 1;
      background-color: rgba(0,0,0,0.6) !important;
    }
    .pp-modal-content {
      background-color: #ffffff !important;
      margin: 15vh auto !important;
      padding: 20px !important;
      border-radius: 8px !important;
      width: 90% !important;
      max-width: 400px !important;
      position: relative !important;
      z-index: 2147483647 !important;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
      transform: scale(0.7) translateY(-20px);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
    }
    .pp-modal.pp-modal-show .pp-modal-content {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    .pp-modal-close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
      line-height: 1;
    }
    .pp-modal-close:hover {
      color: #000;
    }
    .pp-modal-title {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 12px;
      color: #111827 !important;
    }
    .pp-modal-text {
      font-size: 14px;
      line-height: 1.4;
      color: #333333 !important;
    }
  `

  function isNonPhysicalCartItem(item) {
    if (!item) return false
    const rs = item.requires_shipping
    if (rs === false || rs === 'false' || rs === 0 || rs === '0') return true
    const gc = item.gift_card
    return gc === true || gc === 'true'
  }

  function isProtectPlusCartLine(item, ppId) {
    if (!item) return false
    if (item.handle === 'protectplus') return true
    if (ppId == null || ppId === '') return false
    return String(item.product_id) === String(ppId)
  }

  // Function to format currency using Shopify's currency settings
  function formatCurrency(amount) {
    try {
      const currency =
        activeCurrency ||
        (window.Shopify && window.Shopify.currency ?
          window.Shopify.currency.active :
          null) ||
        'USD'

      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })

      return formatter.format(amount)
    } catch (error) {
      console.warn('Currency formatting error:', error)
      // Simple fallback
      return `$${amount.toFixed(2)}`
    }
  }

  // Function to remove ProtectPlus products from cart
  async function removeProtectPlusFromCart() {
    try {
      const response = await fetch('/cart.js')
      if (!response.ok) {
        console.warn('Could not fetch cart for cleanup')
        return
      }

      const cart = await response.json()
      const ppId =
        window.protectPlusProductData?.id || protectPlusProductData?.id
      const protectPlusItems = cart.items
        .filter((item) => isProtectPlusCartLine(item, ppId))
        .map((item) => ({
          id: item.variant_id,
          quantity: 0,
        }))

      // Remove all ProtectPlus items if any found
      if (protectPlusItems.length > 0) {
        console.log(
          'Removing existing ProtectPlus items from cart:',
          protectPlusItems,
        )

        const updateResponse = await fetch('/cart/update.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            updates: protectPlusItems.reduce((acc, item) => {
              acc[item.id] = item.quantity
              return acc
            }, {}),
          }),
        })

        if (updateResponse.ok) {
          console.log('Successfully removed ProtectPlus items from cart')
        } else {
          console.warn('Failed to remove ProtectPlus items from cart')
        }
      }
    } catch (error) {
      console.error('Error removing ProtectPlus from cart:', error)
    }
  }

  // Function to find the variant with price closest to target amount (optimized with cache)
  function findNearestVariant(targetAmount) {
    // Use cached variants if available, otherwise fall back to product data
    const variants =
      window.protectPlusVariants.length > 0 ?
      window.protectPlusVariants :
      protectPlusProductData?.variants || []

    if (variants.length === 0) {
      return null
    }

    let nearestVariant = null
    let smallestDifference = Infinity

    variants.forEach((variant) => {
      if (variant.available) {
        const variantPrice = variant.price / 100 // Convert from cents to dollars
        const difference = Math.abs(variantPrice - targetAmount)

        if (difference < smallestDifference) {
          smallestDifference = difference
          nearestVariant = variant
        }
      }
    })

    return nearestVariant
  }

  /**
   * Sums line_price for cart lines that count toward package protection. Excludes
   * Protect+, digital (when configured), excluded product ids, and excluded tags.
   */
  async function computeEligibleProtectionSubtotalFromCart(
    cart,
    protectPlusProductId,
  ) {
    const items = cart.items || []
    const hasTagRules =
      excludeFromAutoProtectionTags && excludeFromAutoProtectionTags.length > 0
    const excludePidSet = new Set(
      (excludeFromAutoProtectionProductIds || [])
      .map(ppNumericProductIdForCompare)
      .filter(Boolean),
    )
    const hasProductRules = excludePidSet.size > 0
    const excludeSet = hasTagRules ?
      excludeFromAutoProtectionTags
      .map((t) => String(t).trim())
      .filter(Boolean) :
      []
    const root = window.Shopify?.routes?.root || '/'

    async function productTagListForItem(item) {
      const handle = item.handle
      if (!handle) return []
      const pr = await fetch(
        root + 'products/' + encodeURIComponent(handle) + '.js',
      )
      if (!pr.ok) return []
      const product = await pr.json()
      const rawTags = product.tags
      return Array.isArray(rawTags) ?
        rawTags.map((t) => String(t).trim()).filter(Boolean) :
        String(rawTags || '')
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    }

    async function lineIsExcludedFromProtection(item) {
      if (isProtectPlusCartLine(item, protectPlusProductId)) return true
      if (
        excludeDigitalProductsFromAutoProtection &&
        isNonPhysicalCartItem(item)
      ) {
        return true
      }
      if (hasProductRules) {
        const pid = item.product_id != null ? String(item.product_id) : ''
        if (pid && excludePidSet.has(pid)) return true
      }
      if (hasTagRules && excludeSet.length > 0) {
        const tagList = await productTagListForItem(item)
        if (excludeSet.some((ex) => tagList.includes(ex))) return true
      }
      return false
    }

    let subtotalCents = 0
    let hasEligibleLines = false
    for (const item of items) {
      if (await lineIsExcludedFromProtection(item)) continue
      hasEligibleLines = true
      subtotalCents += typeof item.line_price === 'number' ? item.line_price : 0
    }
    return {
      subtotalCents,
      hasEligibleLines
    }
  }

  async function fetchEligibleProtectionState(protectPlusProductId) {
    try {
      const cartRes = await fetch('/cart.js')
      if (!cartRes.ok) {
        return {
          subtotalCents: 0,
          hasEligibleLines: false
        }
      }
      const cart = await cartRes.json()
      return await computeEligibleProtectionSubtotalFromCart(
        cart,
        protectPlusProductId,
      )
    } catch (e) {
      console.warn('ProtectPlus eligibility check failed', e)
      return {
        subtotalCents: 0,
        hasEligibleLines: false
      }
    }
  }

  // Function to add variant to cart
  async function addVariantToCart(variantId, quantity = 1) {
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity,
        }),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Successfully added variant to cart:', result)
        return result
      } else {
        console.error('Failed to add variant to cart:', response.status)
        return null
      }
    } catch (error) {
      console.error('Error adding variant to cart:', error)
      return null
    }
  }

  // Function to add protection to cart (updated)
  async function addProtectionToCart(clickedButton = null) {
    // Use the clicked button if provided, otherwise find the button
    let button = clickedButton

    if (!button) {
      // Find the button within any protectplus-hook element or fallback to global search
      const widget = document.querySelector('protectplus-hook')
      button = widget ?
        widget.querySelector('.pp-button') :
        document.querySelector('.pp-button')
    }

    console.log('Button found for loading state:', button ? 'Yes' : 'No')

    if (button) {
      button.classList.add('loading')
      button.disabled = true
    }

    try {
      // First, remove any existing ProtectPlus products from cart
      console.log('Removing any existing ProtectPlus products from cart...')
      await removeProtectPlusFromCart()

      const ppId =
        protectPlusProductData?.id || window.protectPlusProductData?.id
      const eligibility = await fetchEligibleProtectionState(ppId)
      if (!eligibility.hasEligibleLines) {
        console.log(
          'No eligible lines for protection — skipping protection add',
        )
        if (button) {
          button.classList.remove('loading')
          button.disabled = false
        }
        proceedToCheckout()
        return
      }

      // Use stored product data or fetch it
      const product =
        protectPlusProductData || (await fetchProtectPlusProduct())

      if (!product) {
        console.error('ProtectPlus product not found')
        proceedToCheckout()
        return
      }

      // Calculate the premium cost with minimum protection cost validation
      const eligibleSubtotal = eligibility.subtotalCents / 100
      const percentageFee = eligibleSubtotal * protectionPercentage
      const minimumInCustomerCurrency = minimumProtectionCost * conversionRate
      const calculatedPremium = Math.max(
        percentageFee,
        minimumInCustomerCurrency,
      )

      // Convert to USD for variant matching (variants are stored in USD)
      const targetAmountUSD = calculatedPremium / conversionRate
      const nearestVariant = findNearestVariant(targetAmountUSD)

      if (!nearestVariant) {
        console.error('No available variant found for protection product')
        proceedToCheckout()
        return
      }

      console.log(
        'Adding correct protection variant:',
        nearestVariant.id,
        'Price:',
        nearestVariant.price / 100,
      )

      // Add the correct variant to cart
      const addResult = await addVariantToCart(nearestVariant.id)

      if (addResult) {
        console.log('Protection successfully added to cart')
        // Small delay to ensure cart is updated
        setTimeout(() => {
          proceedToCheckout()
        }, 500)
      } else {
        console.error('Failed to add protection to cart')
        proceedToCheckout()
      }
    } catch (error) {
      console.error('Error in addProtectionToCart:', error)
      proceedToCheckout()
    }
  }

  // Function to proceed without protection
  function checkoutWithoutProtection() {
    proceedToCheckout()
  }

  const html = `
    <div class="pp-container">
      <div class="pp-header">
        <div class="pp-left">
          ${
            widgetShowLogo
              ? '<img class="pp-icon" src="https://cdn.jsdelivr.net/gh/ProtectPlus/widget-assets/logo-icon.png" alt="Protect+" />'
              : ''
          }
          <span class="pp-title">${ppTitle}</span>
          <span class="pp-badge">${ppBadge}</span>
        </div>
        <img class="pp-icon pp-info-icon" src="https://cdn.jsdelivr.net/gh/ProtectPlus/widget-assets/moreinfo.png" alt="info" />
      </div>
      <div class="pp-subtext">
        ${ppSubtext}
      </div>
      <button class="pp-button">
        ${ppTitle} | $0.00
        <div class="pp-spinner"></div>
      </button>
      ${
        widgetShowSkipLink
          ? `<a class="pp-link" href="#">${ppSkipLinkText}</a>`
          : ''
      }
    </div>
  `

  // Function to fetch product with handle 'protectplus'
  async function fetchProtectPlusProduct() {
    try {
      const productHandle = 'protectplus' // Product handle for ProtectPlus
      const url =
        window.Shopify.routes.root + 'products/' + productHandle + '.js'
      console.log('Fetching ProtectPlus product from:', url)

      const response = await fetch(url)
      if (response.ok) {
        const product = await response.json()
        return product
      } else {
        console.log('ProtectPlus product not found:', response.status)
        return null
      }
    } catch (error) {
      console.error('Error fetching ProtectPlus product:', error)
      return null
    }
  }

  // Define custom element <protectplus-hook />
  class ProtectPlusHook extends HTMLElement {
    constructor() {
      super()
      this.initialized = false
      this.protectPlusProduct = null
      this.cartWatcherInterval = null
      this.lastCartFingerprint = ''
      this.isCartExcluded = false
    }

    connectedCallback() {
      if (!this.initialized) {
        this.initializeWidget()
        this.initialized = true
      } else {
        this.startCartWatcher()
      }
    }

    disconnectedCallback() {
      this.stopCartWatcher()
    }

    async initializeWidget() {
      console.log('Initializing Checkout Plus Widget in custom element...')

      // Check if Monster Upsells is detected and if widget is disabled for Monster cart
      const isMonsterCart = detectMonsterUpsells()
      if (isMonsterCart && !window.protectPlusConfig.enabled) {
        console.log(
          'Monster Upsells detected and widget is disabled for Monster cart - widget will not display',
        )
        // Hide the widget completely
        this.style.display = 'none'
        return
      }

      // Check if widget already exists
      if (this.querySelector('.pp-container')) {
        console.log('Widget already exists, updating pricing only')
        await this.updatePricing()
        this.startCartWatcher()
        return
      }

      // Before first render, honor excluded-product state immediately.
      if (window.protectPlusVariants.length === 0) {
        window.protectPlusProductData = protectPlusProductData =
          await fetchProtectPlusProduct()
        if (protectPlusProductData) {
          window.protectPlusVariants = protectPlusProductData.variants || []
        }
      }
      const ppId =
        window.protectPlusProductData?.id || protectPlusProductData?.id
      let hasEligibleLines = false
      try {
        const cartRes = await fetch('/cart.js')
        if (cartRes.ok) {
          const cart = await cartRes.json()
          const el = await computeEligibleProtectionSubtotalFromCart(cart, ppId)
          hasEligibleLines = el.hasEligibleLines
        }
      } catch (_e) {
        hasEligibleLines = false
      }
      this.isCartExcluded = !hasEligibleLines
      this.style.display = ''

      // Step 1: Render static content immediately (no async operations)
      this.renderStaticContent()

      // Step 2: Setup event listeners immediately
      this.setupEventListeners()

      // Step 3: Fetch data and update pricing in background (async)
      this.loadDynamicContent()
      this.startCartWatcher()
    }

    startCartWatcher() {
      if (this.cartWatcherInterval) return
      this.cartWatcherInterval = setInterval(async () => {
        await this.refreshIfCartChanged()
      }, 2000)
    }

    stopCartWatcher() {
      if (!this.cartWatcherInterval) return
      clearInterval(this.cartWatcherInterval)
      this.cartWatcherInterval = null
    }

    async refreshIfCartChanged() {
      // try {
      //   const response = await fetch('/cart.js')
      //   if (!response.ok) return
      //   const cart = await response.json()
      //   const fingerprint = (cart.items || [])
      //     .slice()
      //     .sort((a, b) => Number(a.id) - Number(b.id))
      //     .map((item) => `${item.id}:${item.quantity}`)
      //     .join('|')
      //   if (!this.lastCartFingerprint) {
      //     this.lastCartFingerprint = fingerprint
      //     return
      //   }
      //   if (fingerprint !== this.lastCartFingerprint) {
      //     this.lastCartFingerprint = fingerprint
      //     await this.updatePricing()
      //   }
      // } catch (_error) {
      //   // noop: watcher is best-effort and updatePricing has its own fallback
      // }
    }

    renderStaticContent() {
      // Clear any existing content
      this.innerHTML = ''

      // Add styles to head if not already present
      if (!document.querySelector('style[data-protectplus-styles]')) {
        const styleTag = document.createElement('style')
        styleTag.textContent = style
        styleTag.setAttribute('data-protectplus-styles', 'true')
        document.head.appendChild(styleTag)
      }

      // Insert the HTML directly without extra wrapper
      this.innerHTML = html

      // Update button with current cart data
      this.updateButtonPrice()
    }

    setupEventListeners() {
      const protectionButton = this.querySelector('.pp-button')
      const skipLink = this.querySelector('.pp-link')
      const infoIcon = this.querySelector('.pp-info-icon')

      if (protectionButton) {
        protectionButton.addEventListener('click', function(e) {
          e.preventDefault()

          // Check if widget is in error state
          const widget = this.closest('protectplus-hook')
          const errorState = widget ? widget.getAttribute('data-error') : null

          if (errorState) {
            // If there's an error, proceed with normal checkout without protection
            console.log('Error state detected, proceeding with normal checkout')
            checkoutWithoutProtection()
          } else {
            // Normal flow - add protection to cart
            addProtectionToCart(this) // Pass the clicked button as context
          }
        })
      }

      if (skipLink) {
        skipLink.addEventListener('click', function(e) {
          e.preventDefault()
          checkoutWithoutProtection()
        })
      }

      // Setup modal - ensure it works even with re-renders
      if (infoIcon) {
        this.setupModal(infoIcon)
      }
    }

    setupModal(infoIcon) {
      // Find existing modal or create a new one
      let modal = document.querySelector('.pp-modal')

      if (!modal) {
        modal = document.createElement('div')
        modal.className = 'pp-modal'
        modal.innerHTML = `
          <div class="pp-modal-content">
            <span class="pp-modal-close">&times;</span>
            <div class="pp-modal-title">${ppModalTitle}</div>
            <div class="pp-modal-text">
              ${ppModalContent}
            </div>
          </div>
        `
        document.body.appendChild(modal)

        // Setup modal close events (only once per modal)
        const closeBtn = modal.querySelector('.pp-modal-close')

        // Function to show modal with animation
        function showModal() {
          modal.style.display = 'block'
          // Force reflow to ensure display change is applied
          modal.offsetHeight
          modal.classList.add('pp-modal-show')
        }

        // Function to hide modal with animation
        function hideModal() {
          modal.classList.remove('pp-modal-show')
          setTimeout(() => {
            modal.style.display = 'none'
          }, 300) // Match the CSS transition duration
        }

        closeBtn.addEventListener('click', hideModal)

        window.addEventListener('click', function(event) {
          if (event.target === modal) {
            hideModal()
          }
        })
      }

      // Always attach click event to the current info icon (fresh binding for re-renders)
      const newClickHandler = function() {
        // Show modal with animation
        modal.style.display = 'block'
        // Force reflow to ensure display change is applied
        modal.offsetHeight
        modal.classList.add('pp-modal-show')
      }

      // Remove any existing click listeners by cloning the node
      const newInfoIcon = infoIcon.cloneNode(true)
      infoIcon.parentNode.replaceChild(newInfoIcon, infoIcon)

      // Add fresh click listener
      newInfoIcon.addEventListener('click', newClickHandler)
    }

    async loadDynamicContent() {
      try {
        // Check if we already have cached variants, skip product fetch if we do
        if (window.protectPlusVariants.length === 0) {
          console.log(
            'No cached variants found, fetching ProtectPlus product...',
          )

          // Fetch the ProtectPlus product in background and store it globally
          window.protectPlusProductData = protectPlusProductData =
            await fetchProtectPlusProduct()

          if (protectPlusProductData) {
            console.log(
              'ProtectPlus product loaded:',
              protectPlusProductData.title,
            )
            console.log(
              'Available variants:',
              protectPlusProductData.variants.length,
            )

            // Cache variants for quick access
            window.protectPlusVariants = protectPlusProductData.variants || []
            console.log(
              'Cached',
              window.protectPlusVariants.length,
              'variants for quick access',
            )
          } else {
            // Product not found - set error state
            console.error('ProtectPlus product not found')
            this.setAttribute('data-error', 'product-not-found')
          }
        } else {
          console.log('Using cached variants, skipping product fetch')
        }

        // Fetch cart data and update pricing
        await this.updatePricing()
      } catch (error) {
        console.error('Error loading dynamic content:', error)
        // Set error state
        this.setAttribute('data-error', 'fetch-error')
        // Still update with fallback pricing
        await this.updatePricing()
      }
    }

    async updatePricing() {
      let hasEligibleLines = false
      try {
        const response = await fetch('/cart.js')
        if (response.ok) {
          const cart = await response.json()
          this.lastCartFingerprint = (cart.items || [])
            .slice()
            .sort((a, b) => Number(a.id) - Number(b.id))
            .map((item) => `${item.id}:${item.quantity}`)
            .join('|')

          // Capture cart currency context for accurate display
          activeCurrency =
            cart?.currency ||
            window.Shopify?.currency?.active ||
            activeCurrency ||
            'USD'
          const detectedRate = parseFloat(window.Shopify?.currency?.rate)
          conversionRate =
            Number.isFinite(detectedRate) && detectedRate > 0 ? detectedRate : 1

          const ppIdForSubtotal =
            window.protectPlusProductData?.id || protectPlusProductData?.id
          const eligibility = await computeEligibleProtectionSubtotalFromCart(
            cart,
            ppIdForSubtotal,
          )
          eligibleProtectionSubtotal = eligibility.subtotalCents / 100
          hasEligibleLines = eligibility.hasEligibleLines

          let merchandiseCents = 0
          for (const item of cart.items || []) {
            if (isProtectPlusCartLine(item, ppIdForSubtotal)) continue
            merchandiseCents +=
              typeof item.line_price === 'number' ? item.line_price : 0
          }
          cartSubtotal = merchandiseCents / 100
          console.log(
            'Cart merchandise (excl. P+):',
            cartSubtotal,
            'eligible for P+:',
            eligibleProtectionSubtotal,
          )
        } else {
          console.warn('Could not fetch cart data, status:', response.status)
          cartSubtotal = 0
          eligibleProtectionSubtotal = 0
          hasEligibleLines = false
        }
      } catch (error) {
        console.error('Error fetching cart:', error)
        cartSubtotal = 0
        eligibleProtectionSubtotal = 0
        hasEligibleLines = false
      }

      const container = this.querySelector('.pp-container')

      this.isCartExcluded = !hasEligibleLines
      if (container) container.style.display = ''
      this.style.display = ''

      const button = this.querySelector('.pp-button')
      if (button) {
        button.classList.remove('loading')
        button.disabled = false
      }

      // Update button with calculated price
      this.updateButtonPrice()
    }

    updateButtonPrice() {
      const button = this.querySelector('.pp-button')
      if (button) {
        const setButtonLabel = (labelText) => {
          const spinner = button.querySelector('.pp-spinner')
          button.textContent = ''

          if (widgetButtonLabelColor) {
            const labelSpan = document.createElement('span')
            labelSpan.className = 'pp-button-label'
            labelSpan.style.color = widgetButtonLabelColor
            labelSpan.textContent = labelText
            button.appendChild(labelSpan)
          } else {
            button.textContent = labelText
          }

          if (spinner) {
            button.appendChild(spinner)
          }
        }

        // Don't update if button is currently in loading state (user clicked it)
        if (button.classList.contains('loading')) {
          console.log('Button is loading, skipping price update')
          return
        }

        // Check for error states
        const errorState = this.getAttribute('data-error')

        if (errorState) {
          const displayPriceAttr = this.getAttribute('displayPrice')
          const shouldDisplayPrice =
            displayPriceAttr !== null ?
            displayPriceAttr !== 'false' :
            widgetDisplayPrice
          const labelAttr = this.getAttribute('label')
          const customLabelBase = labelAttr || ppButtonLabel || ppTitle

          if (shouldDisplayPrice) {
            setButtonLabel(
              `${customLabelBase} | ${formatCurrency(cartSubtotal)}`,
            )
          } else if (errorState === 'product-not-found') {
            setButtonLabel('Continue to Checkout')
          } else if (errorState === 'fetch-error') {
            setButtonLabel('Continue to Checkout')
          } else {
            setButtonLabel('Continue to Checkout')
          }

          button.disabled = false // Keep button enabled for normal checkout
          button.classList.remove('loading')
          return
        }

        // Normal operation - reset any error styles
        button.style.backgroundColor = '' // Reset to CSS default
        button.style.color = '' // Reset to CSS default

        // Get display settings from database config (can be overridden by attributes for backward compatibility)
        const displayPriceAttr = this.getAttribute('displayPrice')
        const shouldDisplayPrice =
          displayPriceAttr !== null ?
          displayPriceAttr !== 'false' :
          widgetDisplayPrice

        // Get custom label from database config or attribute (attribute takes precedence for backward compatibility)
        const labelAttr = this.getAttribute('label')
        const customLabel = labelAttr || ppButtonLabel || ppTitle

        if (shouldDisplayPrice) {
          // cartSubtotal = full merchandise (non–P+ lines). eligibleProtectionSubtotal drives P+ fee.
          const percentageFee =
            eligibleProtectionSubtotal * protectionPercentage
          const minimumInCustomerCurrency =
            minimumProtectionCost * conversionRate
          const calculatedPremium = Math.max(
            percentageFee,
            minimumInCustomerCurrency,
          )

          const targetPremiumUSD = calculatedPremium / conversionRate
          let displayVariantPrice = this.isCartExcluded ? 0 : calculatedPremium
          let displayTotal = cartSubtotal + displayVariantPrice

          if (!this.isCartExcluded && window.protectPlusVariants.length > 0) {
            const nearestVariant = findNearestVariant(targetPremiumUSD)
            if (nearestVariant) {
              const nearestVariantPriceUSD = nearestVariant.price / 100
              const nearestVariantPrice =
                nearestVariantPriceUSD * conversionRate
              displayVariantPrice = nearestVariantPrice
              displayTotal = cartSubtotal + nearestVariantPrice
            }
          }

          setButtonLabel(`${customLabel} | ${formatCurrency(displayTotal)}`)
        } else {
          // Display without price, using custom label
          setButtonLabel(customLabel)
        }

        button.disabled = false
        button.classList.remove('loading')
      }
    }
  }

  // Register the custom element
  if (!customElements.get('protectplus-hook')) {
    customElements.define('protectplus-hook', ProtectPlusHook)
  }

  // Global function to refresh all widget instances (can be called externally)
  window.refreshProtectPlusWidgets = function() {
    const allWidgets = document.querySelectorAll('protectplus-hook')
    allWidgets.forEach((widget) => {
      if (widget.updatePricing) {
        widget.updatePricing()
      }
    })
  }

  // Widget will automatically initialize when <protectplus-hook /> elements are added to the DOM
  console.log('ProtectPlus Widget script loaded and ready')
})()