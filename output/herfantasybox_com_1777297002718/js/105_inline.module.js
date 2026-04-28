const configUrl = "/a/elevar/static/configs/00e760226e03ddc3d3135fa43eba6af7d2da99d9/config.js";
const config = (await import(configUrl)).default;
const scriptUrl = config.script_src_app_theme_embed;

if (scriptUrl) {
  const {
    handler
  } = await import(scriptUrl);

  await handler(
    config, {
      cartData: {
        marketId: "1535869067",
        attributes: {},
        cartTotal: "0.0",
        currencyCode: "USD",
        items: []
      },
      user: {
        cartTotal: "0.0",
        currencyCode: "USD",
        customer: {},
      },
      isOnCartPage: false,
      collectionView: null,
      searchResultsView: null,
      productView: {
        attributes: {},
        currencyCode: "USD",
        defaultVariant: {
          id: "MagicBody100",
          name: "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin",
          brand: "Body Odor \u0026 Clear Skin",
          category: "supplements \/ suppositories",
          variant: "100 mg",
          price: "15.98",
          productId: "7048466202763",
          variantId: "41096878948491",
          compareAtPrice: "50.0",
          image: "\/\/herfantasybox.com\/cdn\/shop\/files\/Body_Magic_Main.jpg?v=1764326138",
          url: "\/products\/body-magic-remove-full-body-odor-naturally?variant=41096878948491"
        },
        items: [{
          id: "MagicBody100",
          name: "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin",
          brand: "Body Odor \u0026 Clear Skin",
          category: "supplements \/ suppositories",
          variant: "100 mg",
          price: "15.98",
          productId: "7048466202763",
          variantId: "41096878948491",
          compareAtPrice: "50.0",
          image: "\/\/herfantasybox.com\/cdn\/shop\/files\/Body_Magic_Main.jpg?v=1764326138",
          url: "\/products\/body-magic-remove-full-body-odor-naturally?variant=41096878948491"
        }, {
          id: "BODYMG-30CT",
          name: "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin",
          brand: "Body Odor \u0026 Clear Skin",
          category: "supplements \/ suppositories",
          variant: "200 mg",
          price: "19.98",
          productId: "7048466202763",
          variantId: "45025188708491",
          compareAtPrice: "50.0",
          image: "\/\/herfantasybox.com\/cdn\/shop\/files\/Body_Magic_Main.jpg?v=1764326138",
          url: "\/products\/body-magic-remove-full-body-odor-naturally?variant=45025188708491"
        }, ]
      },
      checkoutComplete: null
    }
  );
}