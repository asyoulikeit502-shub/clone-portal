if (!window.pandectesRulesSettings) {
  window.pandectesRulesSettings = {
    "version": "5",
    "timestamp": 1776445868868,
    "store": {
      "id": 55987929227,
      "plan": "enterprise",
      "primaryLocale": "en",
      "headless": false,
      "useGeolocation": false,
      "checkoutRootDomain": "",
      "storefrontRootDomain": "",
      "storefrontAccessToken": ""
    },
    "banner": {
      "enabled": true
    },
    "regions": {
      "strict": ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"],
      "visible": ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "USCA", "USCO", "USCT", "USDE", "USIN", "USIA", "USKY", "USMN", "USMT", "USNE", "USNH", "USNJ", "USOR", "USRI", "USTN", "USTX", "USUT", "USVA", "CAAB", "CABC", "CAMB", "CANB", "CANL", "CANS", "CANT", "CANU", "CAON", "CAPE", "CAQC", "CASK", "CAYT"]
    },
    "storage": {
      "type": "html",
      "domain": "",
      "duration": 365,
      "lastReset": 1776165371
    },
    "gpc": {
      "enabled": true
    },
    "klaviyo": {
      "enabled": false
    },
    "customEvent": {
      "enabled": false
    },
    "rakuten": {
      "enabled": false,
      "cmp": false,
      "ccpa": false
    },
    "facebook": {
      "enabled": false,
      "id": ""
    },
    "amazon": {
      "enabled": false
    },
    "microsoft": {
      "uet": {
        "enabled": false,
        "tags": ""
      },
      "clarity": {
        "enabled": false,
        "id": ""
      }
    },
    "google": {
      "enabled": true,
      "gtmId": "",
      "ga4Id": "",
      "adsId": "",
      "gtmOnly": false,
      "adStorageCategory": 4,
      "analyticsStorageCategory": 2,
      "functionalityStorageCategory": 1,
      "personalizationStorageCategory": 1,
      "securityStorageCategory": 0,
      "redactData": false,
      "urlPassthrough": false,
      "dataLayerName": "dataLayer",
      "waitForUpdate": 500,
      "sendPageView": true,
      "debugMode": false,
      "basicMode": false
    },
    "blocker": {
      "enabled": true,
      "scripts": {
        "0": [],
        "1": ["static.hotjar.com/c/hotjar", "northbeam.io", "growi-", "revenuehunt.com", "nexus.ensighten.com"],
        "2": [],
        "4": ["analytics.tiktok.com/i18n/pixel", "static.ads-twitter.com/uwt.js|static.ads-twitter.com/oct.js", "myrepai.com|server.myrepai.com", "electricsms.com", "recart.com|storefront.recart.com", "convertexperiments.com", "connect.facebook.net", "mountain.com"],
        "8": []
      },
      "css": {
        "0": [],
        "1": [],
        "2": [],
        "4": [],
        "8": []
      },
      "iframes": {
        "0": [],
        "1": [],
        "2": [],
        "4": [],
        "8": []
      },
      "pixels": {
        "0": [],
        "1": [],
        "2": [],
        "4": [],
        "8": []
      }
    }
  };
  const rulesScript = document.createElement('script');

  rulesScript.src = "https://cdn.shopify.com/extensions/019dcefe-8542-7698-a708-555b5ca2b0bf/gdpr-cookie-consent-313/assets/pandectes-rules-latest.js";

  const firstChild = document.head.firstChild;
  document.head.insertBefore(rulesScript, firstChild);
}