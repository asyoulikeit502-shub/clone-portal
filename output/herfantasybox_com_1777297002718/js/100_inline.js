console.log('growi-embed.liquid');
console.log('🔵 [GROWI-EMBED] growi-embed.liquid inline script STARTED, v.1.7.27');
console.log('🔵 [GROWI-EMBED] Script execution timestamp:', new Date().toISOString());
console.log('🔵 [GROWI-EMBED] Document readyState:', document.readyState);
console.log('🔵 [GROWI-EMBED] window.growiCookieUtils exists?', typeof window.growiCookieUtils !== 'undefined');
if (typeof window.growiCookieUtils !== 'undefined') {
  console.log('✅ [GROWI-EMBED] Cookie utils ALREADY available!', window.growiCookieUtils);
} else {
  console.log('⏳ [GROWI-EMBED] Cookie utils NOT YET available, will wait...');
}

(function() {
  // Default customization settings
  const defaultCustomization = {
    popup_enabled: true,
    heading_text: null,
    body_text: null,
    button_text: null,
    helper_text: null,
    background_color: '#ffffff',
    text_color: '#000000',
    button_color: '#2c2c2c',
    button_text_color: '#ffffff',
    banner_enabled: false,
    banner_top_offset: 0,
    emoji: '🎉',
  };

  // Fetch customization settings from API
  async function fetchCustomization(affiliateTag) {
    try {
      const response = await fetch(
        `https://api.growi.io/api/v1/campaigns/ambassador_program_customization?affiliate_tag=${encodeURIComponent(
            affiliateTag
          )}&url=${encodeURIComponent(window.location.href)}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        console.warn('Customization API returned error, returning null');
        return null;
      }

      const data = await response.json();

      if (data.success && data.customization) {
        console.log('✅ Loaded customization settings:', data.customization);
        return data.customization;
      } else {
        console.log('ℹ️ No customization found, returning null');
        return null;
      }
    } catch (error) {
      console.error('Failed to fetch customization, returning null:', error);
      return null;
    }
  }

  function showDiscountModal(discountCode, affiliateName, discountValue, discountType, affiliateId) {
    console.log('showDiscountModal', discountCode, affiliateName, discountValue, discountType, affiliateId);

    if (
      !discountValue ||
      discountValue === '0' ||
      discountValue === 0 ||
      discountValue === null ||
      discountValue === undefined ||
      discountValue === 'null'
    )
      return;
    // Prevent duplicate modals
    if (document.getElementById('__growi-modal-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = '__growi-modal-overlay';
    overlay.style.cssText = `
        display:block;
        position:fixed;
        top:0; left:0;
        width:100%; height:100%;
        background-color:rgba(0,0,0,0.5);
        z-index:9998;
      `;

    const modal = document.createElement('div');
    modal.className = '__growi_modal_content';
    modal.style.cssText = `
        display:block;
        background-color:white;
        z-index:9999;
        border-top:10px solid #2C2C2C;
        border-radius:10px;
        text-align:center;
        margin:auto;
        min-height:400px;
        height:auto;
        position:fixed;
        top:50%; left:50%;
        transform:translate(-50%, -50%);
        width:90%; max-width:500px;
      `;

    // Add mobile-specific styles
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        @media (max-width: 768px) {
          .__growi_modal_content {
            top: calc(50% + 20px) !important;
          }
        }
        @media (max-width: 480px) {
          .__growi_modal_content {
            top: calc(50% + 30px) !important;
          }
        }
      `;
    document.head.appendChild(mobileStyles);

    modal.innerHTML = `
        <div class="__growi-modal-inner" style="display:block;position:relative;width:100%;height:100%;padding:40px 40px 40px 40px;box-sizing:border-box;">
          <button id="__growi-close-modal" style="position:absolute;top:15px;right:15px;background-color:transparent;border:none;cursor:pointer;z-index:10000;padding:5px;">
            <svg style="fill:#000000" height="20px" width="20px" viewBox="0 0 490 490" xmlns="http://www.w3.org/2000/svg">
              <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337
                212.669,245.004 0.708,457.678 33.149,490
                245,277.443 456.851,490 489.292,457.678
                277.331,245.004 489.292,32.337"/>
            </svg>
          </button>

          <div style="text-align:center;width:100%;">
            <p style="text-align:center;margin:0 0 20px 0;">
            <img src="https://d2pnkb2a79l965.cloudfront.net/party-popper-emoji.png" style="width:80px;height:80px;display:inline-block;">
          </p>
          <h2 style="
            text-align:center;
            font-size:2.5em;
            line-height:1em;
              margin:0.5em 0;
            font-family:-apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            font-weight:bold;
            color:#000000;
          ">
              ${affiliateName ? decodeURIComponent(affiliateName) : "We've"} sent you ${discountValue}${
        discountType === 'percentage' ? '%' : '$'
      } off!
          </h2>
          <h3 style="
            text-align:center;
            font-size:1.3em;
              margin:0.8em 0;
            color:#9aaab9;
            font-family:-apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          ">
              Click below to redeem your discount code
          </h3>
          <button id="__growi-redeem-btn" style="
            display:block;
              margin:20px auto 0 auto;
            padding:12px 20px;
            width:230px;
            background-color:#2c2c2c;
            color:#ffffff;
            border:1px solid #535459;
            border-radius:5px;
            font-size:1.2em;
            cursor:pointer;
            font-family:-apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          ">
            Redeem Coupon
          </button>
            <div style="font-size:0.8em;color:#9aaab9;margin-top:10px;text-align:center;">
            <em>Your discount will automatically be applied at checkout</em>
            </div>
          </div>
        </div>
      `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Close handler
    document.getElementById('__growi-close-modal').onclick = () => {
      window.growiCookieUtils.setCookie('discount_seen', `${affiliateId.toLowerCase()}`, -1);
      overlay.remove();
    };

    // Redeem handler
    document.getElementById('__growi-redeem-btn').onclick = () => {
      const redeemBtn = document.getElementById('__growi-redeem-btn');

      // Set loading state
      redeemBtn.disabled = true;
      redeemBtn.style.cursor = 'not-allowed';
      redeemBtn.innerHTML = `
          <svg style="animation: spin 1s linear infinite; width: 20px; height: 20px; display: inline-block; margin-right: 8px;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.416" stroke-dashoffset="31.416" fill="none" stroke-linecap="round"/>
          </svg>
          Loading...
        `;

      // Add spinning animation
      const style = document.createElement('style');
      style.textContent = `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `;
      document.head.appendChild(style);

      // Simulate loading delay then show discount code
      setTimeout(() => {
        // Replace button with discount code
        redeemBtn.style.display = 'none';

        // Create discount code container
        const discountCodeDiv = document.createElement('div');
        discountCodeDiv.id = '__growi-discount-code';
        discountCodeDiv.style.cssText = `
            background-color:#ecf0ff;
            display:block;
            width:90%;
            margin:20px auto 0 auto;
            text-align:center;
            color:#3860fb;
            font-size:25px;
            padding:8px;
            cursor:pointer;
            border-radius:5px;
            font-weight:bold;
            font-family:-apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif;
          `;
        discountCodeDiv.innerHTML = `
            ${discountCode.toUpperCase()}
            <img src="https://d2pnkb2a79l965.cloudfront.net/copy-blue-icon.png" style="width:22px;margin-bottom:-5px;display:inline;">
          `;

        // Add copy functionality
        discountCodeDiv.onclick = () => {
          navigator.clipboard
            .writeText(discountCode.toUpperCase())
            .then(() => {
              // Show copied feedback under the code
              let copiedText = document.getElementById('__growi-copied-text');
              if (!copiedText) {
                copiedText = document.createElement('div');
                copiedText.id = '__growi-copied-text';
                copiedText.style.cssText = `
                  font-size:0.9em;
                  color:#28a745;
                  margin-top:8px;
                  text-align:center;
                `;
                discountCodeDiv.parentNode.insertBefore(copiedText, discountCodeDiv.nextSibling);
              }
              copiedText.innerHTML = '✓ Discount applied!';
            })
            .catch(() => {
              // Fallback for older browsers
              const textArea = document.createElement('textarea');
              textArea.value = discountCode.toUpperCase();
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand('copy');
              document.body.removeChild(textArea);

              let copiedText = document.getElementById('__growi-copied-text');
              if (!copiedText) {
                copiedText = document.createElement('div');
                copiedText.id = '__growi-copied-text';
                copiedText.style.cssText = `
                  font-size:0.9em;
                  color:#28a745;
                  margin-top:8px;
                  text-align:center;
                `;
                discountCodeDiv.parentNode.insertBefore(copiedText, discountCodeDiv.nextSibling);
              }
              copiedText.innerHTML = '✓ Discount applied!';
            });
        };

        // Insert the discount code div after the button
        redeemBtn.parentNode.insertBefore(discountCodeDiv, redeemBtn.nextSibling);
      }, 1500);

      window.growiCookieUtils.setCookie('discount_seen', `${affiliateId.toLowerCase()}`);
    };
  }

  async function showDiscountModalV2(discountCode, affiliateName, discountValue, discountType, affiliateId) {
    console.log('showDiscountModalV2', discountCode, affiliateName, discountValue, discountType, affiliateId);

    if (
      !discountValue ||
      discountValue === '0' ||
      discountValue === 0 ||
      discountValue === null ||
      discountValue === undefined ||
      discountValue === 'null'
    )
      return;

    // Fetch customization from API
    const customization = await fetchCustomization(affiliateId);

    // If no customization exists, fall back to the original showDiscountModal
    if (!customization) {
      console.log('ℹ️ No customization available, falling back to default modal');
      showDiscountModal(discountCode, affiliateName, discountValue, discountType, affiliateId);
      return;
    }

    // Prevent duplicate modals
    if (document.getElementById('__growi-modal-overlay')) return;

    // Merge customization with defaults
    const config = {
      ...defaultCustomization,
      ...customization
    };

    // Check if popup is enabled
    if (!config.popup_enabled) {
      console.log('ℹ️ Popup is disabled by customization settings');

      if (config.banner_enabled) {
        window.growiCookieUtils.setCookie('discount_seen', affiliateId.toLowerCase());
        showBanner(affiliateId, discountCode, customization);
      }

      return;
    }

    const headingText =
      config.heading_text ||
      `${affiliateName ? decodeURIComponent(affiliateName) : "We've"} sent you ${discountValue}${
          discountType === 'percentage' ? '%' : '$'
        } off!`;
    const bodyText = config.body_text || 'Click below to redeem your discount code';
    const buttonText = config.button_text || 'Redeem Coupon';
    const helperText = config.helper_text || 'Your discount will automatically be applied at checkout';
    const buttonMarkup = config.hide_button ?
      '' :
      `<button id="__growi-redeem-btn" style="
            display:block;
              margin:20px auto 0 auto;
            padding:12px 20px;
            width:230px;
            background-color:${config.button_color};
            color:${config.button_text_color};
            border:1px solid ${config.button_color};
            border-radius:5px;
            font-size:1.2em;
            cursor:pointer;
            font-family:-apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          ">
            ${buttonText}
          </button>`;
    const helperMarkup = `
            <div style="font-size:0.8em;color:${config.text_color};opacity:0.7;margin-top:10px;text-align:center;">
            <em>${helperText}</em>
            </div>
          `;

    const overlay = document.createElement('div');
    overlay.id = '__growi-modal-overlay';
    overlay.style.cssText = `
        display:block;
        position:fixed;
        top:0; left:0;
        width:100%; height:100%;
        background-color:rgba(0,0,0,0.5);
        z-index:9998;
      `;

    const modal = document.createElement('div');
    modal.className = '__growi_modal_content';
    modal.style.cssText = `
        display:block;
        background-color:${config.background_color};
        z-index:9999;
        border-top:10px solid #2C2C2C;
        border-radius:10px;
        text-align:center;
        margin:auto;
        min-height:400px;
        height:auto;
        position:fixed;
        top:50%; left:50%;
        transform:translate(-50%, -50%);
        width:90%; max-width:500px;
      `;

    // Add mobile-specific styles
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        @media (max-width: 768px) {
          .__growi_modal_content {
            top: calc(50% + 20px) !important;
          }
        }
        @media (max-width: 480px) {
          .__growi_modal_content {
            top: calc(50% + 30px) !important;
          }
        }
      `;
    document.head.appendChild(mobileStyles);

    modal.innerHTML = `
        <div class="__growi-modal-inner" style="display:block;position:relative;width:100%;height:100%;padding:40px 40px 40px 40px;box-sizing:border-box;">
          <button id="__growi-close-modal" style="position:absolute;top:15px;right:15px;background-color:transparent;border:none;cursor:pointer;z-index:10000;padding:5px;">
            <svg style="fill:${config.text_color}" height="20px" width="20px" viewBox="0 0 490 490" xmlns="http://www.w3.org/2000/svg">
              <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337
                212.669,245.004 0.708,457.678 33.149,490
                245,277.443 456.851,490 489.292,457.678
                277.331,245.004 489.292,32.337"/>
            </svg>
          </button>

          <div style="text-align:center;width:100%;">
            <p style="text-align:center;margin:0 0 20px 0;">
            <span style="font-size:80px;line-height:1;display:inline-block;">${config.emoji || '🎉'}</span>
          </p>
          <h2 style="
            text-align:center;
            font-size:2.5em;
            line-height:1em;
              margin:0.5em 0;
            font-family:-apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            font-weight:bold;
            color:${config.text_color};
          ">
              ${headingText}
          </h2>
          <h3 style="
            text-align:center;
            font-size:1.3em;
              margin:0.8em 0;
            color:${config.text_color};
            opacity:0.7;
            font-family:-apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          ">
              ${bodyText}
          </h3>
          ${buttonMarkup}
          ${helperMarkup}
          </div>
        </div>
      `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Close handler
    const closeButton = document.getElementById('__growi-close-modal');
    if (closeButton) {
      closeButton.onclick = () => {
        window.growiCookieUtils.setCookie('discount_seen', affiliateId.toLowerCase(), -1);
        overlay.remove();
      };
    }

    // Redeem handler
    const redeemBtn = document.getElementById('__growi-redeem-btn');
    if (redeemBtn) {
      redeemBtn.onclick = () => {
        // Set loading state (preserve custom button colors)
        redeemBtn.disabled = true;
        redeemBtn.style.cursor = 'not-allowed';
        redeemBtn.style.backgroundColor = config.button_color;
        redeemBtn.style.color = config.button_text_color;
        redeemBtn.innerHTML = `
          <svg style="animation: spin 1s linear infinite; width: 20px; height: 20px; display: inline-block; margin-right: 8px;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.416" stroke-dashoffset="31.416" fill="none" stroke-linecap="round"/>
          </svg>
          Loading...
        `;

        // Add spinning animation
        const style = document.createElement('style');
        style.textContent = `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `;
        document.head.appendChild(style);

        // Simulate loading delay then show discount code
        setTimeout(() => {
          // Replace button with discount code
          redeemBtn.style.display = 'none';

          // Create discount code container
          const discountCodeDiv = document.createElement('div');
          discountCodeDiv.id = '__growi-discount-code';
          discountCodeDiv.style.cssText = `
            background-color:#ecf0ff;
            display:block;
            width:90%;
            margin:20px auto 0 auto;
            text-align:center;
            color:#3860fb;
            font-size:25px;
            padding:8px;
            cursor:pointer;
            border-radius:5px;
            font-weight:bold;
            font-family:-apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif;
          `;
          discountCodeDiv.innerHTML = `
            ${discountCode.toUpperCase()}
            <img src="https://d2pnkb2a79l965.cloudfront.net/copy-blue-icon.png" style="width:22px;margin-bottom:-5px;display:inline;">
          `;

          // Add copy functionality
          discountCodeDiv.onclick = () => {
            navigator.clipboard
              .writeText(discountCode.toUpperCase())
              .then(() => {
                // Show copied feedback under the code
                let copiedText = document.getElementById('__growi-copied-text');
                if (!copiedText) {
                  copiedText = document.createElement('div');
                  copiedText.id = '__growi-copied-text';
                  copiedText.style.cssText = `
                  font-size:0.9em;
                  color:#28a745;
                  margin-top:8px;
                  text-align:center;
                `;
                  discountCodeDiv.parentNode.insertBefore(copiedText, discountCodeDiv.nextSibling);
                }
                copiedText.innerHTML = '✓ Discount applied!';
              })
              .catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = discountCode.toUpperCase();
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);

                let copiedText = document.getElementById('__growi-copied-text');
                if (!copiedText) {
                  copiedText = document.createElement('div');
                  copiedText.id = '__growi-copied-text';
                  copiedText.style.cssText = `
                  font-size:0.9em;
                  color:#28a745;
                  margin-top:8px;
                  text-align:center;
                `;
                  discountCodeDiv.parentNode.insertBefore(copiedText, discountCodeDiv.nextSibling);
                }
                copiedText.innerHTML = '✓ Discount applied!';
              });
          };

          // Insert the discount code div after the button
          redeemBtn.parentNode.insertBefore(discountCodeDiv, redeemBtn.nextSibling);
        }, 1500);

        window.growiCookieUtils.setCookie('discount_seen', affiliateId.toLowerCase());
      };
    }
  }

  async function showBanner(affiliateId, discountCode, customizationData = null) {
    // Prevent duplicate banners
    if (document.getElementById('__growi-banner')) return;

    // Fetch customization from API if not provided
    const customization = customizationData || (await fetchCustomization(affiliateId));

    // If no customization exists or banner not enabled, return
    if (!customization || !customization.banner_enabled) {
      console.log('ℹ️ Banner is disabled or no customization available');
      return;
    }

    // Merge customization with defaults
    const config = {
      ...defaultCustomization,
      ...customization
    };

    const affiliateName = window.growiCookieUtils.getCookie('affiliate_name');
    const discountValue = window.growiCookieUtils.getCookie('discount_value');
    const discountType = window.growiCookieUtils.getCookie('discount_type');

    const bannerHeading =
      config.heading_text ||
      `${affiliateName ? decodeURIComponent(affiliateName) : 'We'} sent you ${discountValue}${
          discountType === 'percentage' ? '%' : '$'
        } off!`;
    const bannerSubtext = config.body_text || `Click below to redeem your discount code`;
    const bannerButtonText = config.button_text || 'Redeem Coupon';
    const bannerButtonMarkup = config.hide_button ?
      '' :
      `<button id="__growi-banner-btn" style="
          padding: 14px 24px;
          background-color: ${config.button_color};
          color: ${config.button_text_color};
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: -apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
            Helvetica Neue, Arial, Noto Sans, sans-serif;
          transition: opacity 0.2s;
        ">
          ${bannerButtonText}
        </button>`;

    // Create banner element
    const banner = document.createElement('div');
    banner.id = '__growi-banner';
    banner.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        background-color: ${config.background_color};
        color: ${config.text_color};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 9997;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-bottom: 1px solid rgba(0,0,0,0.08);
        font-family: -apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
          Helvetica Neue, Arial, Noto Sans, sans-serif;
        gap: 20px;
        box-sizing: border-box;
      `;

    banner.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
          <div style="font-size: 40px; line-height: 1; flex-shrink: 0;">
            ${config.emoji || '🎉'}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 18px; font-weight: 700; color: ${config.text_color}; margin-bottom: 4px; line-height: 1.3;">
              ${bannerHeading}
            </div>
            <div style="font-size: 14px; color: ${config.text_color}; opacity: 0.7; line-height: 1.4;">
              ${bannerSubtext}
            </div>
          </div>
        </div>
        ${bannerButtonMarkup}
        <button id="__growi-banner-close" style="
          background: transparent;
          border: none;
          color: ${config.text_color};
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          opacity: 0.6;
          transition: opacity 0.2s;
        ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </button>
      `;

    // Add responsive styles and hover effects
    const bannerStyles = document.createElement('style');
    bannerStyles.textContent = `
        #__growi-banner-btn:hover {
          opacity: 0.9;
        }
        #__growi-banner-close:hover {
          opacity: 1;
        }
        @media (max-width: 768px) {
          #__growi-banner {
            flex-direction: column;
            align-items: stretch !important;
            padding: 16px;
            width: 100%;
          }
          #__growi-banner > div:first-child {
            margin-bottom: 12px;
          }
          #__growi-banner-btn {
            width: 100%;
          }
          #__growi-banner-close {
            position: absolute;
            top: 16px;
            right: 16px;
          }
        }
      `;
    document.head.appendChild(bannerStyles);

    // Append to body
    document.body.appendChild(banner);

    // Add body padding to prevent content from being hidden behind banner
    const originalPaddingTop = document.body.style.paddingTop;
    // Wait for banner to render to get actual height
    setTimeout(() => {
      const bannerBottom = banner.getBoundingClientRect().bottom;
      document.body.style.paddingTop = `${bannerBottom}px`;

      // Push down any existing sticky announcement bars so they appear below our banner
      const stickyAnnouncementBars = document.querySelectorAll(
        '[class*="announcement-bar"], [class*="announcement_bar"], [id*="announcement-bar"]'
      );
      stickyAnnouncementBars.forEach((el) => {
        const style = getComputedStyle(el);
        if (style.position === 'sticky') {
          el.style.top = `${bannerBottom}px`;
        }
      });
    }, 0);

    // Store original padding for cleanup
    banner.dataset.originalPadding = originalPaddingTop;

    // Button click handler - always copy code to clipboard, and optionally open modal
    const bannerBtn = document.getElementById('__growi-banner-btn');
    if (bannerBtn) {
      bannerBtn.onclick = () => {
        const discountCode = window.growiCookieUtils.getCookie('discount_code');
        const affiliateName = window.growiCookieUtils.getCookie('affiliate_name');
        const discountType = window.growiCookieUtils.getCookie('discount_type');
        const discountValue = window.growiCookieUtils.getCookie('discount_value');

        if (discountCode && discountValue) {
          // Always copy discount code to clipboard
          const originalText = bannerBtn.innerHTML;

          navigator.clipboard
            .writeText(discountCode.toUpperCase())
            .then(() => {
              bannerBtn.innerHTML = '✓ Discount applied!';
              bannerBtn.style.backgroundColor = '#28a745';
              setTimeout(() => {
                bannerBtn.innerHTML = originalText;
                bannerBtn.style.backgroundColor = config.button_color;
              }, 2000);
            })
            .catch(() => {
              // Fallback for older browsers
              const textArea = document.createElement('textarea');
              textArea.value = discountCode.toUpperCase();
              textArea.style.position = 'fixed';
              textArea.style.opacity = '0';
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand('copy');
              document.body.removeChild(textArea);

              bannerBtn.innerHTML = '✓ Discount applied!';
              bannerBtn.style.backgroundColor = '#28a745';
              setTimeout(() => {
                bannerBtn.innerHTML = originalText;
                bannerBtn.style.backgroundColor = config.button_color;
              }, 2000);
            });

          // Additionally show modal if enabled
          if (config.popup_enabled) {
            showDiscountModalV2(discountCode, affiliateName, discountValue, discountType, affiliateId);
          }
        }
      };
    }

    // Close button handler
    document.getElementById('__growi-banner-close').onclick = () => {
      // Restore original padding
      const originalPadding = banner.dataset.originalPadding || '';
      document.body.style.paddingTop = originalPadding;

      banner.remove();
      // Store in cookie that banner was dismissed
      window.growiCookieUtils.setCookie('banner_dismissed', affiliateId.toLowerCase(), 1); // 1 day
    };
  }

  // ---- PAGE VIEW (exact referrer only) ----
  function hasFiredPageView(visitorUid) {
    const key = `growi_pv_sent::${visitorUid || 'anon'}::${location.pathname}`;
    try {
      if (sessionStorage.getItem(key)) return true;
    } catch {}
    if (window.growiCookieUtils) {
      const ck = window.growiCookieUtils.getCookie(encodeURIComponent(key));
      if (ck === '1') return true;
    }
    return false;
  }

  function markFiredPageView(visitorUid) {
    const key = `growi_pv_sent::${visitorUid || 'anon'}::${location.pathname}`;
    try {
      sessionStorage.setItem(key, '1');
    } catch {}
    // ~30 minutes lock across tabs
    window.growiCookieUtils && window.growiCookieUtils.setCookie(encodeURIComponent(key), '1', 0.02);
  }

  async function sendOneTimePageView(externalId) {
    console.log('sendOneTimePageView', externalId);
    if (!window.growiCookieUtils) return;
    console.log('sendOneTimePageView1', externalId);
    if (!externalId) return;

    const affiliateId = window.growiCookieUtils.getCookie('growi_affiliate_id');
    const visitorUid = window.growiCookieUtils.getCookie('growi_visitor_uid');
    if (!affiliateId || affiliateId === 'null') return; // keep your current rule
    console.log('sendOneTimePageView2', affiliateId);

    if (hasFiredPageView(visitorUid)) return;
    console.log('sendOneTimePageView3', visitorUid);
    markFiredPageView(visitorUid);

    // EXACT referrer only
    const referrerRaw = document.referrer || null;
    let referrerHost = null;
    try {
      referrerHost = referrerRaw ? new URL(referrerRaw).host : null;
    } catch {}

    // Get UTM parameters for Meta/Facebook ad tracking
    const utmParams = window.growiCookieUtils.getUtmParams ? window.growiCookieUtils.getUtmParams() : {};

    // Check if traffic is from Facebook/Meta based on utm_source
    const isFacebookSource = utmParams.utm_source && ['fb', 'facebook', 'meta'].includes(utmParams.utm_source.toLowerCase());

    const event = {
      name: 'page_viewed',
      id: (crypto.randomUUID && crypto.randomUUID()) || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      timestamp: new Date().toISOString(),
      data: {
        title: document.title || null,
        path: location.pathname,
        url: location.href,
        referrer_raw: referrerRaw,
        referrer_host: referrerHost,
        utm_source: utmParams.utm_source || null,
        utm_medium: utmParams.utm_medium || null,
        utm_campaign: utmParams.utm_campaign || null,
        utm_content: utmParams.utm_content || null,
        utm_term: utmParams.utm_term || null,
        utm_id: utmParams.utm_id || null,
        // Meta Ad ID (only set if utm_source is fb/facebook/meta)
        meta_ad_id: isFacebookSource ? (utmParams.utm_content || null) : null,
      },
      clientId: visitorUid,
    };

    const body = {
      tracking_event: {
        event_name: event.name,
        occurred_at: event.timestamp,
        visitor_uid: visitorUid,
        event_data: {
          pageEventId: event.id,
          timeStamp: event.timestamp,
          data: {
            ...event.data,
            clientId: event.clientId
          },
        },
      },
      campaign_affiliate_id: affiliateId,
      external_id: `gid://shopify/Shop/${externalId}`,
      conversion_platform: 'shopify',
    };

    // Optional server dedupe
    const idempKey = `${visitorUid || 'anon'}::${location.pathname}::${Math.floor(Date.now() / 60000)}`;

    try {
      await fetch('https://api.growi.io/api/v1/tracking_events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempKey,
        },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.warn('page_viewed send failed', err);
    }
  }

  function waitForUrlParams(retries = 10, delay = 200) {
    // Check if URL has any parameters yet
    const hasParams = window.location.search.length > 0;
    const affiliateParam =
      new URLSearchParams(window.location.search).get('a') ||
      new URLSearchParams(window.location.search).get('snowball') ||
      new URLSearchParams(window.location.search).get('growi');

    // If we found affiliate params or exhausted retries, proceed
    if (affiliateParam || retries <= 0 || hasParams) {
      console.log(`✅ URL stabilized after ${10 - retries} attempts. Affiliate param:`, affiliateParam);
      initializeAffiliate();
      return;
    }

    // Wait and retry - Instagram WebView needs time to stabilize
    console.log(`⏳ Waiting for URL params to stabilize... (${retries} retries left)`);
    setTimeout(() => waitForUrlParams(retries - 1, delay), delay);
  }

  function waitForUtils(retries = 5) {
    console.log(`🔍 [WAIT-FOR-UTILS] Attempt ${6 - retries}/5 - Checking for window.growiCookieUtils...`);
    console.log(
      `🔍 [WAIT-FOR-UTILS] window.growiCookieUtils exists?`,
      typeof window.growiCookieUtils !== 'undefined'
    );
    console.log(`🔍 [WAIT-FOR-UTILS] Document readyState:`, document.readyState);
    console.log(`🔍 [WAIT-FOR-UTILS] Timestamp:`, new Date().toISOString());

    if (window.growiCookieUtils) {
      console.log('✅ [WAIT-FOR-UTILS] Cookie utils found! Available methods:', Object.keys(window.growiCookieUtils));
      // Don't immediately read params - wait for URL to stabilize first
      waitForUrlParams();
    } else if (retries > 0) {
      console.log(`⏳ [WAIT-FOR-UTILS] Not found yet, retrying in 100ms... (${retries} retries left)`);
      setTimeout(() => waitForUtils(retries - 1), 100);
    } else {
      console.error('❌ [WAIT-FOR-UTILS] Growi cookie utilities not loaded after 5 retries (500ms total)');
      console.error('❌ [WAIT-FOR-UTILS] All window properties:', Object.keys(window));
      console.error('❌ [WAIT-FOR-UTILS] Check if cookie-utils.js is loading correctly');
    }
  }

  function initializeAffiliate() {
    console.log('🎯 [INIT-AFFILIATE] initializeAffiliate() called');
    console.log(
      '🎯 [INIT-AFFILIATE] window.growiCookieUtils exists?',
      typeof window.growiCookieUtils !== 'undefined'
    );

    if (!window.growiCookieUtils) {
      console.error('❌ [INIT-AFFILIATE] Cookie utils not available - CANNOT PROCEED');
      console.error('❌ [INIT-AFFILIATE] This usually means cookie-utils.js failed to load or execute');
      return;
    }

    console.log('✅ [INIT-AFFILIATE] Cookie utils available, proceeding...');

    // Now read affiliate params after URL has stabilized
    const urlAffiliateId =
      new URLSearchParams(window.location.search).get('a') ||
      new URLSearchParams(window.location.search).get('snowball') ||
      new URLSearchParams(window.location.search).get('growi');

    // Get affiliate info from cookies
    const cookieInfo = window.growiCookieUtils.manageAffiliateCookies();

    // Determine which affiliate ID to use (URL param takes precedence)
    const affiliateId = urlAffiliateId || cookieInfo.affiliateId;
    const visitorUid = cookieInfo.visitorUid;

    console.log('🔍 Final affiliate detection:', {
      urlAffiliateId,
      cookieAffiliateId: cookieInfo.affiliateId,
      finalAffiliateId: affiliateId,
    });

    // If we have affiliate data from either source, update the cart
    if (affiliateId && visitorUid) {
      // Get UTM parameters to pass to order
      const utmParams = window.growiCookieUtils.getUtmParams ? window.growiCookieUtils.getUtmParams() : {};

      // Check if traffic is from Facebook/Meta based on utm_source
      const isFacebookSource = utmParams.utm_source && ['fb', 'facebook', 'meta'].includes(utmParams.utm_source.toLowerCase());

      // Build cart attributes
      const cartAttributes = {
        __growi_affiliate_id: affiliateId,
        __growi_visitor_uid: visitorUid,
      };

      if (utmParams.utm_source) cartAttributes.__growi_utm_source = utmParams.utm_source;
      if (utmParams.utm_medium) cartAttributes.__growi_utm_medium = utmParams.utm_medium;
      if (utmParams.utm_campaign) cartAttributes.__growi_utm_campaign = utmParams.utm_campaign;
      if (utmParams.utm_content) cartAttributes.__growi_utm_content = utmParams.utm_content;
      if (utmParams.utm_term) cartAttributes.__growi_utm_term = utmParams.utm_term;
      if (utmParams.utm_id) cartAttributes.__growi_utm_id = utmParams.utm_id;
      if (utmParams.campaign_id) cartAttributes.__growi_campaign_id = utmParams.campaign_id;
      if (utmParams.user_id) cartAttributes.__growi_user_id = utmParams.user_id;
      if (utmParams.campaign_affiliate_id) cartAttributes.__growi_campaign_affiliate_id = utmParams.campaign_affiliate_id;
      if (utmParams.asset_id) cartAttributes.__growi_asset_id = utmParams.asset_id;

      if (isFacebookSource && utmParams.utm_content) {
        cartAttributes.__growi_meta_ad_id = utmParams.utm_content;
      }

      fetch('/cart/update.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            attributes: cartAttributes,
          }),
        })
        .then((res) => {
          // Extract x-shopid from response headers
          const externalId = res.headers.get('x-shopid');
          console.log('🏪 Shop ID extracted from headers:', externalId);

          return res.json().then((data) => ({
            data,
            externalId
          }));
        })
        .then(({
          data,
          externalId
        }) => {
          console.log('✅ Cart attributes updated with affiliate & visitor ID', data);
          // --- Discount code logic start ---
          // Only fetch if we have an affiliateId and no discount_code cookie
          // Only fetch if we have an affiliateId and no discount_code cookie
          const discountCode = window.growiCookieUtils.getCookie('discount_code');
          const affiliateName = window.growiCookieUtils.getCookie('affiliate_name');
          const discountType = window.growiCookieUtils.getCookie('discount_type');
          const discountValue = window.growiCookieUtils.getCookie('discount_value');
          const campaignType = window.growiCookieUtils.getCookie('campaign_type');
          const discountSeen = window.growiCookieUtils.getCookie('discount_seen');
          const isDiscountSeen = discountSeen && discountSeen === `${affiliateId}`.toLowerCase();

          console.log('Test', affiliateId, discountCode, affiliateId !== 'null', externalId);

          if (affiliateId && !!discountCode && affiliateId !== 'null' && isDiscountSeen) {
            const bannerDismissed = window.growiCookieUtils.getCookie('banner_dismissed');
            const isBannerDismissed = bannerDismissed && bannerDismissed === `${affiliateId}`.toLowerCase();

            if (!isBannerDismissed) {
              // Check if banner is enabled before showing
              fetchCustomization(affiliateId).then((customization) => {
                if (customization && customization.banner_enabled) {
                  showBanner(affiliateId, discountCode, customization);
                }
              });
            }

            sendOneTimePageView(externalId);
          } else if (
            affiliateId &&
            (!discountCode || (!!discountCode && !isDiscountSeen)) &&
            affiliateId !== 'null'
          ) {
            const currentUrl = window.location.href;
            fetch(
                `https://api.growi.io/api/v1/campaign_affiliates/${encodeURIComponent(
                  affiliateId
                )}/discount_code?url=${encodeURIComponent(currentUrl)}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
              .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
              })
              .then((data) => {
                if (data.success) {
                  cookieDuration = data.cookie_duration;
                  if (!!cookieDuration) {
                    updateAffiliateCookieDuration(cookieDuration);
                    console.log('✅ Affiliate cookie duration updated:', cookieDuration);
                  }
                }
                if (data.success && data.discount_code) {
                  // Set discount_code cookie for 30 days
                  window.growiCookieUtils.setCookie('discount_code', data.discount_code, 30);
                  // Set new response format cookies
                  if (data.affiliate_name) {
                    window.growiCookieUtils.setCookie('affiliate_name', data.affiliate_name, 30);
                  }
                  if (data.discount_type) {
                    window.growiCookieUtils.setCookie('discount_type', data.discount_type, 30);
                  }
                  if (data.discount_value) {
                    window.growiCookieUtils.setCookie('discount_value', data.discount_value, 30);
                  }
                  if (data.campaign_type) {
                    window.growiCookieUtils.setCookie('campaign_type', data.campaign_type, 30);
                  }
                  console.log('✅ Discount code cookies set:', data.discount_code);

                  // Show discount modal only for ambassador programs and if not seen yet
                  const discountSeen = window.growiCookieUtils.getCookie('discount_seen');
                  const isDiscountSeen = discountSeen && discountSeen === `${affiliateId}`.toLowerCase();

                  if (!isDiscountSeen) {
                    if (data.is_v2) {
                      showDiscountModalV2(
                        data.discount_code,
                        data.affiliate_name,
                        data.discount_value,
                        data.discount_type,
                        affiliateId
                      );
                    } else {
                      showDiscountModal(
                        data.discount_code,
                        data.affiliate_name,
                        data.discount_value,
                        data.discount_type,
                        affiliateId
                      );
                    }
                  } else {
                    // If modal was already seen, show banner instead (if not dismissed)
                    const bannerDismissed = window.growiCookieUtils.getCookie('banner_dismissed');
                    const isBannerDismissed = bannerDismissed && bannerDismissed === `${affiliateId}`.toLowerCase();

                    if (!isBannerDismissed) {
                      // Check if banner is enabled before showing
                      fetchCustomization(affiliateId).then((customization) => {
                        if (customization && customization.banner_enabled) {
                          showBanner(affiliateId, data.discount_code, customization);
                        }
                      });
                    }
                  }
                }
              })
              .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
              });
          }
          // --- Discount code logic end ---

          sendOneTimePageView(externalId);
        })
        .catch((err) => {
          console.error('❌ Failed to update cart attributes', err);
        });
    } else {
      console.log('ℹ️ No affiliate data to process');
    }
  }

  // Start the process - wait for utils first, then URL stability
  console.log('🚀 [GROWI-EMBED] Starting waitForUtils() immediately...');
  console.log('🚀 [GROWI-EMBED] Current timestamp:', new Date().toISOString());
  waitForUtils();

  // Also try on window.load as a fallback for very slow WebViews
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log('🔄 [WINDOW-LOAD] Window load backup trigger fired (500ms after window.load)');
      console.log('🔄 [WINDOW-LOAD] window.growiCookieUtils exists?', typeof window.growiCookieUtils !== 'undefined');
      initializeAffiliate();
    }, 500);
  });
})();