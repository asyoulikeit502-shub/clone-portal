// Liquid-resolved globals. Everything below this inline block lives in the
// theme app extension's assets/ folder (Shopify CDN). See main-extension.js
// and dom-pricing-extension.js for the behavioural code.
var _conv_page_type = "product";
var _conv_category_id = "";
var _conv_category_name = null;
var _conv_product_id = 7048466202763;
var _conv_product_sku = "MagicBody100";
var _conv_product_variant_id = 41096878948491;
var _conv_product_name = "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin";
var _conv_product_price = "15.98";
var _conv_customer_id = "";
var _conv_custom_v1 = "body-odor";
var _conv_custom_v2 = null;
var _conv_custom_v3 = "0";
var _conv_custom_v4 = "0.00";

// Advanced matching: Collections and Tags (for pricing rules)
var _conv_product_handle = "body-magic-remove-full-body-odor-naturally";
var _conv_product_collections = ["all-products", "best-sellers", "body-odor", "build-your-bundle-subscription", "bundle", "dark-mark-ingrown-hairs", "dark-spots", "sample-collection", "shop-all", "all", "shop", "supplements", "vag-taste"];
var _conv_product_tags = ["body-odor", "capsule", "chlorophyll", "dark-spots", "type: pills", "vag-taste"];

// Build product data map for products on this page (for related products, collection pages, etc.)
var _conv_products_data = {};


// Product page: Add main product to map
_conv_products_data["body-magic-remove-full-body-odor-naturally"] = {
  handle: "body-magic-remove-full-body-odor-naturally",
  collections: ["all-products", "best-sellers", "body-odor", "build-your-bundle-subscription", "bundle", "dark-mark-ingrown-hairs", "dark-spots", "sample-collection", "shop-all", "all", "shop", "supplements", "vag-taste"],
  tags: ["body-odor", "capsule", "chlorophyll", "dark-spots", "type: pills", "vag-taste"],
  id: 7048466202763,
  title: "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin"
};

// Store product ID for recommendations fetching
var _conv_product_id_for_recommendations = 7048466202763;


// Values read by main-extension.js's goals_evaluated handler.
var _conv_webhook_id = "gid:\/\/shopify\/WebhookSubscription\/1381703123083";
var _conv_shopify_data_tpl = {
  accountId: "10007840",
  projectId: "10007811",
  currency: "USD",
  revenueGoalId: "100035979",
  subscriptionGoalId: "null",
  oneTimePaymentGoalId: "null"
};

// Global namespace for Shopify-specific Convert helpers. Populated by the
// extension assets loaded below, and by Variation JS (via addPricingRules).
window.convertShopify = window.convertShopify || {};

// Safe default: if dom-pricing-extension.js isn't loaded for this shop
// (pricingSettings metafield is blank), Variation JS calls become no-ops
// instead of throwing.
window.convertShopify.addPricingRules = window.convertShopify.addPricingRules || function() {};

// Pricing settings (metafield value). dom-pricing-extension.js reads this.
window.convertShopify.pricingSettings = {
  multipleRulesStrategy: 'sequential'
};