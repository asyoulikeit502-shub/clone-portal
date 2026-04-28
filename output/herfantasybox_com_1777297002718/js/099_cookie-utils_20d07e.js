/**
 * Cookie utility functions for Growi affiliate tracking
 * @version 1.0.0
 */

// Generate a UUID for visitor tracking
function generateUUID() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
}

// Enhanced URL parameter extraction that handles timing issues
function getQueryParam(param) {
  // First try the standard approach
  const urlParams = new URLSearchParams(window.location.search);
  let value = urlParams.get(param);

  if (value !== null && value !== "") {
    return value;
  }

  // If not found and we're in a potential WebView scenario, try the full URL approach
  const escapedParam = param.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + escapedParam + "(=([^&#]*)|&|#|$)");
  const match = regex.exec(window.location.href);

  if (match && match[2]) {
    return decodeURIComponent(match[2].replace(/\+/g, " "));
  }

  return null;
}

// Enhanced affiliate parameter extraction with multiple fallbacks
function getAffiliateParam() {
  // Try multiple parameter names in order of preference
  return (
    getQueryParam("growi") ||
    getQueryParam("snowball") || // Support snowball format
    getQueryParam("a") || // Keep as fallback
    null
  );
}

// Get cookie value
function getCookie(name) {
  // simply read the cookie string
  const all = document.cookie;
  // split on " name=" (exactly)
  const parts = all.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Set cookie with expiration
function setCookie(name, value, days = 365) {
  let cookie = `${name}=${encodeURIComponent(value)}`;
  if (days !== -1) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    cookie += `;expires=${expires}`;
  }
  cookie += `;path=/;SameSite=Lax`;
  // use a template literal
  document.cookie = cookie;
}

// Delete cookie by setting expiration in the past
function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
}

// Update affiliate cookie duration
function updateAffiliateCookieDuration(cookieDuration) {
  const storedAffiliateId = getCookie("growi_affiliate_id");
  if (storedAffiliateId) {
    setCookie("growi_affiliate_id", storedAffiliateId, cookieDuration);
  }
}

// Check and manage affiliate cookies
function manageAffiliateCookies() {
  // Get stored affiliate ID
  const storedAffiliateId = getCookie("growi_affiliate_id");

  // Check if affiliate parameter is in URL
  const incomingAffiliateId = getAffiliateParam();

  const noPreviousAndIncoming = !!incomingAffiliateId && !storedAffiliateId;
  const previousAndNewIncoming = !!storedAffiliateId &&
    !!incomingAffiliateId &&
    storedAffiliateId.toLowerCase() !== incomingAffiliateId.toLowerCase();

  // Set affiliate ID cookie if needed
  if (noPreviousAndIncoming || previousAndNewIncoming) {
    setCookie("growi_affiliate_id", incomingAffiliateId);
  }

  // Create visitor UID if needed
  const storedVisitorUid = getCookie("growi_visitor_uid");
  if (!storedVisitorUid) {
    setCookie("growi_visitor_uid", generateUUID());
  }

  // Capture UTM parameters if present in URL (for Meta/Facebook ad tracking)
  manageUtmCookies();

  return {
    affiliateId: getCookie("growi_affiliate_id"),
    visitorUid: getCookie("growi_visitor_uid"),
  };
}

// Manage UTM parameter cookies for ad tracking (Meta/Facebook ads)
function manageUtmCookies() {
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id', 'campaign_id', 'user_id', 'campaign_affiliate_id', 'asset_id'];

  utmParams.forEach(param => {
    const value = getQueryParam(param);
    if (value) {
      // Store UTM params for 30 days (standard attribution window)
      setCookie(`growi_${param}`, value, 30);
    }
  });
}

// Get all stored UTM parameters
function getUtmParams() {
  return {
    utm_source: getCookie("growi_utm_source"),
    utm_medium: getCookie("growi_utm_medium"),
    utm_campaign: getCookie("growi_utm_campaign"),
    utm_content: getCookie("growi_utm_content"),
    utm_term: getCookie("growi_utm_term"),
    utm_id: getCookie("growi_utm_id"),
    campaign_id: getCookie("growi_campaign_id"),
    user_id: getCookie("growi_user_id"),
    campaign_affiliate_id: getCookie("growi_campaign_affiliate_id"),
    asset_id: getCookie("growi_asset_id"),
  };
}

// console.log("🚀 [COOKIE-UTILS] cookie-utils.js STARTED loading, v.1.7.27");
// console.log("🚀 [COOKIE-UTILS] Script execution timestamp:", new Date().toISOString());
// console.log("🚀 [COOKIE-UTILS] Document readyState:", document.readyState);

// Make functions globally available
window.growiCookieUtils = {
  getCookie,
  setCookie,
  deleteCookie,
  getQueryParam,
  generateUUID,
  manageAffiliateCookies,
  updateAffiliateCookieDuration,
  manageUtmCookies,
  getUtmParams,
};

// console.log("✅ [COOKIE-UTILS] window.growiCookieUtils SET SUCCESSFULLY!");
// console.log("✅ [COOKIE-UTILS] Available methods:", Object.keys(window.growiCookieUtils));
// console.log("✅ [COOKIE-UTILS] cookie-utils.js FINISHED loading");