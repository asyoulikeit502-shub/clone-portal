if (item == null) {
  var _learnq = _learnq || [];

  var MetafieldReviews = null
  var MetafieldYotpoRating = null
  var MetafieldYotpoCount = null
  var MetafieldLooxRating = null
  var MetafieldLooxCount = null
  var okendoProduct = null
  var okendoProductReviewCount = null
  var okendoProductReviewAverageValue = null
  try {
    // The following fields are used for Customer Hub recently viewed in order to add reviews.
    // This information is not part of __kla_viewed. Instead, it is part of __kla_viewed_reviewed_items
    MetafieldReviews = {
      "rating": {
        "scale_min": "1.0",
        "scale_max": "5.0",
        "value": "4.7"
      },
      "rating_count": 4615
    };
    MetafieldYotpoRating = null
    MetafieldYotpoCount = null
    MetafieldLooxRating = "4.7"
    MetafieldLooxCount = 4615

    okendoProduct = null
    // If the okendo metafield is not legacy, it will error, which then requires the new json formatted data
    if (okendoProduct && 'error' in okendoProduct) {
      okendoProduct = null
    }
    okendoProductReviewCount = okendoProduct ? okendoProduct.reviewCount : null
    okendoProductReviewAverageValue = okendoProduct ? okendoProduct.reviewAverageValue : null
  } catch (error) {
    console.error('Error in Klaviyo onsite reviews tracking:', error);
  }

  var item = {
    Name: "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin",
    ProductID: 7048466202763,
    Categories: ["All Products", "Best Sellers", "Body Odor", "Build Your Bundle Subscription", "Bundle", "Dark Mark \u0026 Ingrown Hairs", "Dark Spots", "Gynecologist Approved Products", "Gynecologist Approved Products", "Products", "Shop", "Supplements", "Vaginal Taste \u0026 Smell"],
    ImageURL: "https://herfantasybox.com/cdn/shop/files/Body_Magic_Main_grande.jpg?v=1764326138",
    URL: "https://herfantasybox.com/products/body-magic-remove-full-body-odor-naturally",
    Brand: "Body Odor \u0026 Clear Skin",
    Price: "$15.98",
    Value: "15.98",
    CompareAtPrice: "$50.00"
  };
  _learnq.push(['track', 'Viewed Product', item]);
  _learnq.push(['trackViewedItem', {
    Title: item.Name,
    ItemId: item.ProductID,
    Categories: item.Categories,
    ImageUrl: item.ImageURL,
    Url: item.URL,
    Metadata: {
      Brand: item.Brand,
      Price: item.Price,
      Value: item.Value,
      CompareAtPrice: item.CompareAtPrice
    },
    metafields: {
      reviews: MetafieldReviews,
      yotpo: {
        rating: MetafieldYotpoRating,
        count: MetafieldYotpoCount,
      },
      loox: {
        rating: MetafieldLooxRating,
        count: MetafieldLooxCount,
      },
      okendo: {
        rating: okendoProductReviewAverageValue,
        count: okendoProductReviewCount,
      }
    }
  }]);
}