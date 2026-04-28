/*!
 * 0.91.4 - 2026-04-22T20:06:24.842Z
 * Copyright (c) 2026 Okendo Pty Ltd
 * 
 */
(function(e) {
  function l(l) {
    for (var o, a, t = l[0], r = l[1], d = 0, i = []; d < t.length; d++) a = t[d], Object.prototype.hasOwnProperty.call(s, a) && s[a] && i.push(s[a][0]), s[a] = 0;
    for (o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    n && n(l);
    while (i.length) i.shift()()
  }
  var o = {},
    a = {
      app: 0
    },
    s = {
      app: 0
    };

  function t(e) {
    return r.p + "js/" + ({
      "modules/okendo-metafield-star-rating-utils": "modules/okendo-metafield-star-rating-utils",
      "okendo-reviews-core": "okendo-reviews-core",
      "modules/okendo-reviews-settings": "modules/okendo-reviews-settings",
      "okendo-reviews-styles": "okendo-reviews-styles",
      "okendo-reviews-translation": "okendo-reviews-translation",
      "modules/okendo-widget-init": "modules/okendo-widget-init",
      "locales/locale-bg-js": "locales/locale-bg-js",
      "locales/locale-cs-js": "locales/locale-cs-js",
      "locales/locale-da-js": "locales/locale-da-js",
      "locales/locale-de-formal-js": "locales/locale-de-formal-js",
      "locales/locale-de-informal-js": "locales/locale-de-informal-js",
      "locales/locale-el-js": "locales/locale-el-js",
      "locales/locale-es-js": "locales/locale-es-js",
      "locales/locale-et-js": "locales/locale-et-js",
      "locales/locale-fi-js": "locales/locale-fi-js",
      "locales/locale-fr-js": "locales/locale-fr-js",
      "locales/locale-hi-js": "locales/locale-hi-js",
      "locales/locale-hr-js": "locales/locale-hr-js",
      "locales/locale-hu-js": "locales/locale-hu-js",
      "locales/locale-id-js": "locales/locale-id-js",
      "locales/locale-it-js": "locales/locale-it-js",
      "locales/locale-ja-js": "locales/locale-ja-js",
      "locales/locale-ko-js": "locales/locale-ko-js",
      "locales/locale-lt-js": "locales/locale-lt-js",
      "locales/locale-lv-js": "locales/locale-lv-js",
      "locales/locale-ms-js": "locales/locale-ms-js",
      "locales/locale-nb-js": "locales/locale-nb-js",
      "locales/locale-nl-js": "locales/locale-nl-js",
      "locales/locale-pl-js": "locales/locale-pl-js",
      "locales/locale-pt-br-js": "locales/locale-pt-br-js",
      "locales/locale-pt-pt-js": "locales/locale-pt-pt-js",
      "locales/locale-ro-js": "locales/locale-ro-js",
      "locales/locale-ru-js": "locales/locale-ru-js",
      "locales/locale-sk-js": "locales/locale-sk-js",
      "locales/locale-sl-js": "locales/locale-sl-js",
      "locales/locale-sr-js": "locales/locale-sr-js",
      "locales/locale-sv-js": "locales/locale-sv-js",
      "locales/locale-th-js": "locales/locale-th-js",
      "locales/locale-tr-js": "locales/locale-tr-js",
      "locales/locale-uk-js": "locales/locale-uk-js",
      "locales/locale-vi-js": "locales/locale-vi-js",
      "locales/locale-zh-cn-js": "locales/locale-zh-cn-js",
      "locales/locale-zh-tw-js": "locales/locale-zh-tw-js",
      "modules/all-reviews-modal": "modules/all-reviews-modal",
      "modules/okendo-media-grid": "modules/okendo-media-grid",
      "modules/okendo-questions-widget": "modules/okendo-questions-widget",
      "modules/okendo-reviews-badge": "modules/okendo-reviews-badge",
      "modules/okendo-reviews-keywords": "modules/okendo-reviews-keywords",
      "modules/okendo-reviews-tab": "modules/okendo-reviews-tab",
      "modules/okendo-star-rating": "modules/okendo-star-rating",
      "modules/okendo-widget": "modules/okendo-widget",
      "okendo-reviews-lib": "okendo-reviews-lib",
      "modules/media-modal": "modules/media-modal",
      "modules/okendo-homepage-carousel": "modules/okendo-homepage-carousel",
      "modules/okendo-media-carousel": "modules/okendo-media-carousel",
      "modules/okendo-reviews-summary": "modules/okendo-reviews-summary",
      "modules/media-overlay": "modules/media-overlay",
      "modules/media-thumbnail": "modules/media-thumbnail",
      "modules/questions": "modules/questions",
      "modules/large-badge": "modules/large-badge",
      "modules/minimal-badge": "modules/minimal-badge",
      "modules/shared-components": "modules/shared-components",
      "modules/small-badge": "modules/small-badge",
      "modules/widget": "modules/widget",
      "modules/review-basic-content": "modules/review-basic-content",
      "modules/review-carousel-shared": "modules/review-carousel-shared",
      "review-templates/card-default": "review-templates/card-default",
      "review-templates/card-featured-media": "review-templates/card-featured-media",
      "review-templates/card-minimal-centered": "review-templates/card-minimal-centered",
      "review-templates/card-testimonial": "review-templates/card-testimonial",
      "modules/tooltip": "modules/tooltip",
      "modules/avatar": "modules/avatar",
      "modules/helpful-voting": "modules/helpful-voting",
      "header-modules/attributes": "header-modules/attributes",
      "header-modules/chat-assistant": "header-modules/chat-assistant",
      "header-modules/media-carousel": "header-modules/media-carousel",
      "header-modules/media-grid": "header-modules/media-grid",
      "header-modules/rating-average": "header-modules/rating-average",
      "header-modules/rating-breakdown": "header-modules/rating-breakdown",
      "header-modules/recommends": "header-modules/recommends",
      "header-modules/reviews-keywords": "header-modules/reviews-keywords",
      "header-modules/reviews-summary": "header-modules/reviews-summary",
      "modules/filters": "modules/filters",
      "review-list/carousel": "review-list/carousel",
      "review-list/default": "review-list/default",
      "review-list/masonry": "review-list/masonry",
      "modules/reviewer": "modules/reviewer",
      "modules/video-transcript": "modules/video-transcript",
      "modules/media-collage": "modules/media-collage",
      "modules/media-strip": "modules/media-strip",
      "modules/reviewer-achievements": "modules/reviewer-achievements",
      "modules/attributes": "modules/attributes",
      "modules/show-more-button": "modules/show-more-button",
      "modules/okendo-chat-assistant": "modules/okendo-chat-assistant",
      "modules/okendo-chat-starters": "modules/okendo-chat-starters",
      "modules/media-carousel": "modules/media-carousel",
      "review-templates/default": "review-templates/default",
      "review-templates/minimal": "review-templates/minimal",
      "review-templates/split": "review-templates/split",
      "modules/flag": "modules/flag",
      "attribute-bars/bar-blocks": "attribute-bars/bar-blocks",
      "attribute-bars/bar-classic": "attribute-bars/bar-classic",
      "attribute-bars/bar-default": "attribute-bars/bar-default",
      "attribute-bars/bar-outlined": "attribute-bars/bar-outlined",
      "attribute-bars/bar-rounded": "attribute-bars/bar-rounded"
    } [e] || e) + "." + {
      "modules/okendo-metafield-star-rating-utils": "4db3377f",
      "okendo-reviews-core": "84d23785",
      "modules/okendo-reviews-settings": "16f7829f",
      "okendo-reviews-styles": "35ef0117",
      "okendo-reviews-translation": "c0fa6869",
      "modules/okendo-widget-init": "3d0a356b",
      "locales/locale-bg-js": "215375bf",
      "locales/locale-cs-js": "0ac8656a",
      "locales/locale-da-js": "7d28f594",
      "locales/locale-de-formal-js": "eea14e65",
      "locales/locale-de-informal-js": "b645f8eb",
      "locales/locale-el-js": "de033256",
      "locales/locale-es-js": "4c455884",
      "locales/locale-et-js": "aed47528",
      "locales/locale-fi-js": "2a9a0760",
      "locales/locale-fr-js": "02e3a3d1",
      "locales/locale-hi-js": "4123acf2",
      "locales/locale-hr-js": "9f2ee274",
      "locales/locale-hu-js": "505d4b5b",
      "locales/locale-id-js": "29304ce2",
      "locales/locale-it-js": "8e0a9362",
      "locales/locale-ja-js": "353b5582",
      "locales/locale-ko-js": "0689d7cb",
      "locales/locale-lt-js": "17204e17",
      "locales/locale-lv-js": "f8d8ccb9",
      "locales/locale-ms-js": "69852fe0",
      "locales/locale-nb-js": "a3bcbd60",
      "locales/locale-nl-js": "a9abce9b",
      "locales/locale-pl-js": "c50c974d",
      "locales/locale-pt-br-js": "f1f26bd9",
      "locales/locale-pt-pt-js": "b1d0c0ee",
      "locales/locale-ro-js": "5d51425f",
      "locales/locale-ru-js": "7110cc34",
      "locales/locale-sk-js": "1c2e94ce",
      "locales/locale-sl-js": "09a7f04e",
      "locales/locale-sr-js": "f13d7c5b",
      "locales/locale-sv-js": "35875c30",
      "locales/locale-th-js": "701c0d10",
      "locales/locale-tr-js": "babb7cd3",
      "locales/locale-uk-js": "6e8b2f4f",
      "locales/locale-vi-js": "254c1cba",
      "locales/locale-zh-cn-js": "58792f78",
      "locales/locale-zh-tw-js": "8050236c",
      "modules/all-reviews-modal": "9a1e04e7",
      "modules/okendo-media-grid": "98e4acd9",
      "modules/okendo-questions-widget": "335c2841",
      "modules/okendo-reviews-badge": "e7ec0271",
      "modules/okendo-reviews-keywords": "6c09901b",
      "modules/okendo-reviews-tab": "13db1d19",
      "modules/okendo-star-rating": "e1851f91",
      "modules/okendo-widget": "a068f25a",
      "okendo-reviews-lib": "74a14cd7",
      "modules/media-modal": "e1b20cec",
      "modules/okendo-homepage-carousel": "af60657f",
      "modules/okendo-media-carousel": "529cdd93",
      "modules/okendo-reviews-summary": "298654a9",
      "modules/media-overlay": "256c57c1",
      "modules/media-thumbnail": "625491ad",
      "modules/questions": "d5282258",
      "modules/large-badge": "b2ed71a7",
      "modules/minimal-badge": "d945acf0",
      "modules/shared-components": "8677be30",
      "modules/small-badge": "368ede73",
      "modules/widget": "84b78095",
      "modules/review-basic-content": "25c873cd",
      "modules/review-carousel-shared": "8971cc51",
      "review-templates/card-default": "4a9c740a",
      "review-templates/card-featured-media": "5cf5c509",
      "review-templates/card-minimal-centered": "93b28fb3",
      "review-templates/card-testimonial": "a0fb43b2",
      "modules/tooltip": "c65bf039",
      "modules/avatar": "fd5c3ad5",
      "modules/helpful-voting": "3075f496",
      "header-modules/attributes": "d25eab90",
      "header-modules/chat-assistant": "805faf10",
      "header-modules/media-carousel": "e05e4184",
      "header-modules/media-grid": "34249d21",
      "header-modules/rating-average": "69092077",
      "header-modules/rating-breakdown": "977b32fb",
      "header-modules/recommends": "dac2cefc",
      "header-modules/reviews-keywords": "64e3a47c",
      "header-modules/reviews-summary": "a2c14121",
      "modules/filters": "898d01e2",
      "review-list/carousel": "d776c369",
      "review-list/default": "5dc301fc",
      "review-list/masonry": "db561ddb",
      "modules/reviewer": "c0a90649",
      "modules/video-transcript": "eab800f9",
      "modules/media-collage": "d8f60dbb",
      "modules/media-strip": "6ac3bbea",
      "modules/reviewer-achievements": "ab48f826",
      "modules/attributes": "209a38a2",
      "modules/show-more-button": "8e8db793",
      "modules/okendo-chat-assistant": "9c8f0d2f",
      "modules/okendo-chat-starters": "875a3754",
      "modules/media-carousel": "3a801770",
      "review-templates/default": "0098086b",
      "review-templates/minimal": "323f8078",
      "review-templates/split": "29eecbb9",
      "modules/flag": "9297279a",
      "attribute-bars/bar-blocks": "8e3194b8",
      "attribute-bars/bar-classic": "e420f6b0",
      "attribute-bars/bar-default": "cf07b833",
      "attribute-bars/bar-outlined": "aacad912",
      "attribute-bars/bar-rounded": "dd3da519"
    } [e] + ".js"
  }

  function r(l) {
    if (o[l]) return o[l].exports;
    var a = o[l] = {
      i: l,
      l: !1,
      exports: {}
    };
    return e[l].call(a.exports, a, a.exports, r), a.l = !0, a.exports
  }
  r.e = function(e) {
    var l = [],
      o = {
        "okendo-reviews-styles": 1,
        "modules/all-reviews-modal": 1,
        "modules/okendo-media-grid": 1,
        "modules/okendo-questions-widget": 1,
        "modules/okendo-reviews-badge": 1,
        "modules/okendo-reviews-keywords": 1,
        "modules/okendo-reviews-tab": 1,
        "modules/okendo-star-rating": 1,
        "modules/okendo-widget": 1,
        "okendo-reviews-lib": 1,
        "modules/media-modal": 1,
        "modules/okendo-homepage-carousel": 1,
        "modules/okendo-media-carousel": 1,
        "modules/okendo-reviews-summary": 1,
        "modules/media-overlay": 1,
        "modules/media-thumbnail": 1,
        "modules/questions": 1,
        "modules/large-badge": 1,
        "modules/shared-components": 1,
        "modules/small-badge": 1,
        "modules/widget": 1,
        "modules/review-basic-content": 1,
        "modules/review-carousel-shared": 1,
        "review-templates/card-default": 1,
        "review-templates/card-featured-media": 1,
        "review-templates/card-minimal-centered": 1,
        "review-templates/card-testimonial": 1,
        "modules/tooltip": 1,
        "modules/avatar": 1,
        "modules/helpful-voting": 1,
        "header-modules/attributes": 1,
        "header-modules/chat-assistant": 1,
        "header-modules/media-carousel": 1,
        "header-modules/media-grid": 1,
        "header-modules/rating-average": 1,
        "header-modules/rating-breakdown": 1,
        "header-modules/recommends": 1,
        "header-modules/reviews-keywords": 1,
        "header-modules/reviews-summary": 1,
        "modules/filters": 1,
        "review-list/carousel": 1,
        "review-list/default": 1,
        "review-list/masonry": 1,
        "modules/reviewer": 1,
        "modules/video-transcript": 1,
        "modules/media-collage": 1,
        "modules/media-strip": 1,
        "modules/reviewer-achievements": 1,
        "modules/attributes": 1,
        "modules/show-more-button": 1,
        "modules/okendo-chat-assistant": 1,
        "modules/okendo-chat-starters": 1,
        "modules/media-carousel": 1,
        "review-templates/default": 1,
        "review-templates/minimal": 1,
        "review-templates/split": 1,
        "modules/flag": 1,
        "attribute-bars/bar-blocks": 1,
        "attribute-bars/bar-classic": 1,
        "attribute-bars/bar-default": 1,
        "attribute-bars/bar-outlined": 1,
        "attribute-bars/bar-rounded": 1
      };
    a[e] ? l.push(a[e]) : 0 !== a[e] && o[e] && l.push(a[e] = new Promise((function(l, o) {
      for (var s = "css/" + ({
          "modules/okendo-metafield-star-rating-utils": "modules/okendo-metafield-star-rating-utils",
          "okendo-reviews-core": "okendo-reviews-core",
          "modules/okendo-reviews-settings": "modules/okendo-reviews-settings",
          "okendo-reviews-styles": "okendo-reviews-styles",
          "okendo-reviews-translation": "okendo-reviews-translation",
          "modules/okendo-widget-init": "modules/okendo-widget-init",
          "locales/locale-bg-js": "locales/locale-bg-js",
          "locales/locale-cs-js": "locales/locale-cs-js",
          "locales/locale-da-js": "locales/locale-da-js",
          "locales/locale-de-formal-js": "locales/locale-de-formal-js",
          "locales/locale-de-informal-js": "locales/locale-de-informal-js",
          "locales/locale-el-js": "locales/locale-el-js",
          "locales/locale-es-js": "locales/locale-es-js",
          "locales/locale-et-js": "locales/locale-et-js",
          "locales/locale-fi-js": "locales/locale-fi-js",
          "locales/locale-fr-js": "locales/locale-fr-js",
          "locales/locale-hi-js": "locales/locale-hi-js",
          "locales/locale-hr-js": "locales/locale-hr-js",
          "locales/locale-hu-js": "locales/locale-hu-js",
          "locales/locale-id-js": "locales/locale-id-js",
          "locales/locale-it-js": "locales/locale-it-js",
          "locales/locale-ja-js": "locales/locale-ja-js",
          "locales/locale-ko-js": "locales/locale-ko-js",
          "locales/locale-lt-js": "locales/locale-lt-js",
          "locales/locale-lv-js": "locales/locale-lv-js",
          "locales/locale-ms-js": "locales/locale-ms-js",
          "locales/locale-nb-js": "locales/locale-nb-js",
          "locales/locale-nl-js": "locales/locale-nl-js",
          "locales/locale-pl-js": "locales/locale-pl-js",
          "locales/locale-pt-br-js": "locales/locale-pt-br-js",
          "locales/locale-pt-pt-js": "locales/locale-pt-pt-js",
          "locales/locale-ro-js": "locales/locale-ro-js",
          "locales/locale-ru-js": "locales/locale-ru-js",
          "locales/locale-sk-js": "locales/locale-sk-js",
          "locales/locale-sl-js": "locales/locale-sl-js",
          "locales/locale-sr-js": "locales/locale-sr-js",
          "locales/locale-sv-js": "locales/locale-sv-js",
          "locales/locale-th-js": "locales/locale-th-js",
          "locales/locale-tr-js": "locales/locale-tr-js",
          "locales/locale-uk-js": "locales/locale-uk-js",
          "locales/locale-vi-js": "locales/locale-vi-js",
          "locales/locale-zh-cn-js": "locales/locale-zh-cn-js",
          "locales/locale-zh-tw-js": "locales/locale-zh-tw-js",
          "modules/all-reviews-modal": "modules/all-reviews-modal",
          "modules/okendo-media-grid": "modules/okendo-media-grid",
          "modules/okendo-questions-widget": "modules/okendo-questions-widget",
          "modules/okendo-reviews-badge": "modules/okendo-reviews-badge",
          "modules/okendo-reviews-keywords": "modules/okendo-reviews-keywords",
          "modules/okendo-reviews-tab": "modules/okendo-reviews-tab",
          "modules/okendo-star-rating": "modules/okendo-star-rating",
          "modules/okendo-widget": "modules/okendo-widget",
          "okendo-reviews-lib": "okendo-reviews-lib",
          "modules/media-modal": "modules/media-modal",
          "modules/okendo-homepage-carousel": "modules/okendo-homepage-carousel",
          "modules/okendo-media-carousel": "modules/okendo-media-carousel",
          "modules/okendo-reviews-summary": "modules/okendo-reviews-summary",
          "modules/media-overlay": "modules/media-overlay",
          "modules/media-thumbnail": "modules/media-thumbnail",
          "modules/questions": "modules/questions",
          "modules/large-badge": "modules/large-badge",
          "modules/minimal-badge": "modules/minimal-badge",
          "modules/shared-components": "modules/shared-components",
          "modules/small-badge": "modules/small-badge",
          "modules/widget": "modules/widget",
          "modules/review-basic-content": "modules/review-basic-content",
          "modules/review-carousel-shared": "modules/review-carousel-shared",
          "review-templates/card-default": "review-templates/card-default",
          "review-templates/card-featured-media": "review-templates/card-featured-media",
          "review-templates/card-minimal-centered": "review-templates/card-minimal-centered",
          "review-templates/card-testimonial": "review-templates/card-testimonial",
          "modules/tooltip": "modules/tooltip",
          "modules/avatar": "modules/avatar",
          "modules/helpful-voting": "modules/helpful-voting",
          "header-modules/attributes": "header-modules/attributes",
          "header-modules/chat-assistant": "header-modules/chat-assistant",
          "header-modules/media-carousel": "header-modules/media-carousel",
          "header-modules/media-grid": "header-modules/media-grid",
          "header-modules/rating-average": "header-modules/rating-average",
          "header-modules/rating-breakdown": "header-modules/rating-breakdown",
          "header-modules/recommends": "header-modules/recommends",
          "header-modules/reviews-keywords": "header-modules/reviews-keywords",
          "header-modules/reviews-summary": "header-modules/reviews-summary",
          "modules/filters": "modules/filters",
          "review-list/carousel": "review-list/carousel",
          "review-list/default": "review-list/default",
          "review-list/masonry": "review-list/masonry",
          "modules/reviewer": "modules/reviewer",
          "modules/video-transcript": "modules/video-transcript",
          "modules/media-collage": "modules/media-collage",
          "modules/media-strip": "modules/media-strip",
          "modules/reviewer-achievements": "modules/reviewer-achievements",
          "modules/attributes": "modules/attributes",
          "modules/show-more-button": "modules/show-more-button",
          "modules/okendo-chat-assistant": "modules/okendo-chat-assistant",
          "modules/okendo-chat-starters": "modules/okendo-chat-starters",
          "modules/media-carousel": "modules/media-carousel",
          "review-templates/default": "review-templates/default",
          "review-templates/minimal": "review-templates/minimal",
          "review-templates/split": "review-templates/split",
          "modules/flag": "modules/flag",
          "attribute-bars/bar-blocks": "attribute-bars/bar-blocks",
          "attribute-bars/bar-classic": "attribute-bars/bar-classic",
          "attribute-bars/bar-default": "attribute-bars/bar-default",
          "attribute-bars/bar-outlined": "attribute-bars/bar-outlined",
          "attribute-bars/bar-rounded": "attribute-bars/bar-rounded"
        } [e] || e) + "." + {
          "modules/okendo-metafield-star-rating-utils": "31d6cfe0",
          "okendo-reviews-core": "31d6cfe0",
          "modules/okendo-reviews-settings": "31d6cfe0",
          "okendo-reviews-styles": "6dbb2446",
          "okendo-reviews-translation": "31d6cfe0",
          "modules/okendo-widget-init": "31d6cfe0",
          "locales/locale-bg-js": "31d6cfe0",
          "locales/locale-cs-js": "31d6cfe0",
          "locales/locale-da-js": "31d6cfe0",
          "locales/locale-de-formal-js": "31d6cfe0",
          "locales/locale-de-informal-js": "31d6cfe0",
          "locales/locale-el-js": "31d6cfe0",
          "locales/locale-es-js": "31d6cfe0",
          "locales/locale-et-js": "31d6cfe0",
          "locales/locale-fi-js": "31d6cfe0",
          "locales/locale-fr-js": "31d6cfe0",
          "locales/locale-hi-js": "31d6cfe0",
          "locales/locale-hr-js": "31d6cfe0",
          "locales/locale-hu-js": "31d6cfe0",
          "locales/locale-id-js": "31d6cfe0",
          "locales/locale-it-js": "31d6cfe0",
          "locales/locale-ja-js": "31d6cfe0",
          "locales/locale-ko-js": "31d6cfe0",
          "locales/locale-lt-js": "31d6cfe0",
          "locales/locale-lv-js": "31d6cfe0",
          "locales/locale-ms-js": "31d6cfe0",
          "locales/locale-nb-js": "31d6cfe0",
          "locales/locale-nl-js": "31d6cfe0",
          "locales/locale-pl-js": "31d6cfe0",
          "locales/locale-pt-br-js": "31d6cfe0",
          "locales/locale-pt-pt-js": "31d6cfe0",
          "locales/locale-ro-js": "31d6cfe0",
          "locales/locale-ru-js": "31d6cfe0",
          "locales/locale-sk-js": "31d6cfe0",
          "locales/locale-sl-js": "31d6cfe0",
          "locales/locale-sr-js": "31d6cfe0",
          "locales/locale-sv-js": "31d6cfe0",
          "locales/locale-th-js": "31d6cfe0",
          "locales/locale-tr-js": "31d6cfe0",
          "locales/locale-uk-js": "31d6cfe0",
          "locales/locale-vi-js": "31d6cfe0",
          "locales/locale-zh-cn-js": "31d6cfe0",
          "locales/locale-zh-tw-js": "31d6cfe0",
          "modules/all-reviews-modal": "54d8a81e",
          "modules/okendo-media-grid": "72811230",
          "modules/okendo-questions-widget": "2be887fe",
          "modules/okendo-reviews-badge": "987b84e6",
          "modules/okendo-reviews-keywords": "0942444f",
          "modules/okendo-reviews-tab": "dd9f4ebe",
          "modules/okendo-star-rating": "4cb378a8",
          "modules/okendo-widget": "6aeb18ae",
          "okendo-reviews-lib": "65939eaa",
          "modules/media-modal": "cebe2529",
          "modules/okendo-homepage-carousel": "ca9ce1d9",
          "modules/okendo-media-carousel": "f779afda",
          "modules/okendo-reviews-summary": "a0c9d7d6",
          "modules/media-overlay": "730e835a",
          "modules/media-thumbnail": "f7ab8544",
          "modules/questions": "f1d3564b",
          "modules/large-badge": "9ee07b0a",
          "modules/minimal-badge": "31d6cfe0",
          "modules/shared-components": "c2ff03ce",
          "modules/small-badge": "5678834d",
          "modules/widget": "386541eb",
          "modules/review-basic-content": "8974514e",
          "modules/review-carousel-shared": "4d26166f",
          "review-templates/card-default": "78ed975a",
          "review-templates/card-featured-media": "6ef99b1b",
          "review-templates/card-minimal-centered": "b80d514b",
          "review-templates/card-testimonial": "2c1bbd02",
          "modules/tooltip": "ea8fe98f",
          "modules/avatar": "89663c87",
          "modules/helpful-voting": "39996c12",
          "header-modules/attributes": "7cf57481",
          "header-modules/chat-assistant": "1751ee60",
          "header-modules/media-carousel": "e353b48e",
          "header-modules/media-grid": "a67981f4",
          "header-modules/rating-average": "6f2ee529",
          "header-modules/rating-breakdown": "a108ab46",
          "header-modules/recommends": "826afd09",
          "header-modules/reviews-keywords": "d134dcfc",
          "header-modules/reviews-summary": "bc0924f4",
          "modules/filters": "b3764b03",
          "review-list/carousel": "45ee74bf",
          "review-list/default": "f346f6a0",
          "review-list/masonry": "0e5de697",
          "modules/reviewer": "05892934",
          "modules/video-transcript": "40e6b686",
          "modules/media-collage": "ab84d4e1",
          "modules/media-strip": "5c47f062",
          "modules/reviewer-achievements": "19fae041",
          "modules/attributes": "b4237f39",
          "modules/show-more-button": "36160e9f",
          "modules/okendo-chat-assistant": "5036e26a",
          "modules/okendo-chat-starters": "f7107953",
          "modules/media-carousel": "50d40644",
          "review-templates/default": "32c6f91c",
          "review-templates/minimal": "bd27b3ef",
          "review-templates/split": "a4035c0a",
          "modules/flag": "143bbb7e",
          "attribute-bars/bar-blocks": "6ee392a5",
          "attribute-bars/bar-classic": "1dd8f253",
          "attribute-bars/bar-default": "9a29e91c",
          "attribute-bars/bar-outlined": "ec73b484",
          "attribute-bars/bar-rounded": "2793cccc"
        } [e] + ".css", t = r.p + s, d = document.getElementsByTagName("link"), i = 0; i < d.length; i++) {
        var c = d[i],
          n = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (n === s || n === t)) return l()
      }
      var u = document.getElementsByTagName("style");
      for (i = 0; i < u.length; i++) {
        c = u[i], n = c.getAttribute("data-href");
        if (n === s || n === t) return l()
      }
      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = l, m.onerror = function(l) {
        var s = l && l.target && l.target.src || t,
          r = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
        r.code = "CSS_CHUNK_LOAD_FAILED", r.request = s, delete a[e], m.parentNode.removeChild(m), o(r)
      }, m.href = t;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m)
    })).then((function() {
      a[e] = 0
    })));
    var d = s[e];
    if (0 !== d)
      if (d) l.push(d[2]);
      else {
        var i = new Promise((function(l, o) {
          d = s[e] = [l, o]
        }));
        l.push(d[2] = i);
        var c, n = document.createElement("script");
        n.charset = "utf-8", n.timeout = 120, r.nc && n.setAttribute("nonce", r.nc), n.src = t(e);
        var u = new Error;
        c = function(l) {
          n.onerror = n.onload = null, clearTimeout(m);
          var o = s[e];
          if (0 !== o) {
            if (o) {
              var a = l && ("load" === l.type ? "missing" : l.type),
                t = l && l.target && l.target.src;
              u.message = "Loading chunk " + e + " failed.\n(" + a + ": " + t + ")", u.name = "ChunkLoadError", u.type = a, u.request = t, o[1](u)
            }
            s[e] = void 0
          }
        };
        var m = setTimeout((function() {
          c({
            type: "timeout",
            target: n
          })
        }), 12e4);
        n.onerror = n.onload = c, document.head.appendChild(n)
      } return Promise.all(l)
  }, r.m = e, r.c = o, r.d = function(e, l, o) {
    r.o(e, l) || Object.defineProperty(e, l, {
      enumerable: !0,
      get: o
    })
  }, r.r = function(e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, r.t = function(e, l) {
    if (1 & l && (e = r(e)), 8 & l) return e;
    if (4 & l && "object" === typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (r.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & l && "string" != typeof e)
      for (var a in e) r.d(o, a, function(l) {
        return e[l]
      }.bind(null, a));
    return o
  }, r.n = function(e) {
    var l = e && e.__esModule ? function() {
      return e["default"]
    } : function() {
      return e
    };
    return r.d(l, "a", l), l
  }, r.o = function(e, l) {
    return Object.prototype.hasOwnProperty.call(e, l)
  }, r.p = "https://cdn-static.okendo.io/reviews-widget-plus/", r.oe = function(e) {
    throw console.error(e), e
  };
  var d = window["wpJsonpOkeReviews"] = window["wpJsonpOkeReviews"] || [],
    i = d.push.bind(d);
  d.push = l, d = d.slice();
  for (var c = 0; c < d.length; c++) l(d[c]);
  var n = i;
  r(r.s = "cd49")
})({
  "02e8": function(e, l, o) {
    "use strict";
    var a = o("6f27");
    l["a"] = {
      widgetSelector: "[data-oke-widget]",
      async areStarRatingsClickable(e) {
        const l = await this.getClickTargetSelector(e);
        return !!l && !!document.querySelector(l)
      },
      async getClickTargetSelector(e) {
        let l;
        if (e) l = e;
        else {
          const {
            default: e
          } = await Promise.all([o.e("okendo-reviews-core"), o.e("modules/okendo-reviews-settings")]).then(o.bind(null, "7c19"));
          l = e.widgetSettings.starRatings
        }
        if ("none" !== l.clickBehavior) return "scroll-to-id" === l.clickBehavior && l.scrollTargetId && document.querySelector("#" + l.scrollTargetId) ? "#" + l.scrollTargetId : this.widgetSelector
      },
      async scrollToElement(e) {
        var l;
        const o = await this.getClickTargetSelector();
        if (e && o) {
          let s = document.querySelector(o);
          s && s.firstElementChild && (s = s.firstElementChild);
          const t = "true" === e.dataset.okeScrollDisabled;
          s && (null === (l = e.firstElementChild) || void 0 === l ? void 0 : l.classList.contains("oke-is-clickable")) && !t && (a["a"].smoothScrollTo(s), s.focus())
        }
      }
    }
  },
  "0625": function(e, l, o) {
    "use strict";
    o.d(l, "a", (function() {
      return a
    }));
    const a = {
      apiBaseUrl: "https://api.okendo.io/v1",
      dynamicTranscodedMediaBaseUrl: "https://media-dynamic.okendo.io",
      appBaseUrl: "https://reviews.okendo.io",
      recorderPlusBaseUrl: "https://okendo.reviews"
    }
  },
  "342a": function(e, l, o) {
    "use strict";
    var a = o("a8f8");
    l["a"] = {
      getCustomerLocaleFromShopify(e) {
        var l;
        if (null === e || void 0 === e ? void 0 : e.matchCustomerLocale) return Object(a["getLocale"])(null === (l = window.Shopify) || void 0 === l ? void 0 : l.locale)
      },
      isTranslationDisabled(e) {
        return !!(e.okeInAngularAdminPreview || e.okeInEmbeddedAdminPreview || e.okeInShopifyThemeCustomizer)
      },
      supportedLocaleCodesLowerCase() {
        return a["allLocalesWithAliases"].map(e => e.toLowerCase())
      },
      supportedSourceLocaleCodesLowerCase() {
        return a["awsSupportedLocaleCodes"].map(e => e.toLowerCase())
      }
    }
  },
  "522e": function(e, l, o) {
    "use strict";
    o.d(l, "a", (function() {
      return a
    }));
    const a = {
      get: (e, l) => (l ? fetch(e, l) : fetch(e)).then(e => e.json()),
      post: (e, l) => fetch(e, {
        method: "POST",
        body: JSON.stringify(l)
      }).then(e => e.json())
    }
  },
  "6f27": function(e, l, o) {
    "use strict";
    let a;
    const s = (e, l) => {
      if ("HTML" === e.nodeName) return -l;
      const o = e.getBoundingClientRect().top,
        a = parseInt((window.getComputedStyle(e).scrollMarginTop || 0).toString(), 10);
      return o + l - a
    };

    function t(e) {
      return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
    }
    l["a"] = {
      smoothScrollTo(e, l = -48) {
        const o = 500;
        a || (a = window.requestAnimationFrame || function(e) {
          window.setTimeout(e, 16)
        });
        const r = window.pageYOffset;
        let d = s(e, r);
        d += l;
        const i = Date.now(),
          c = t,
          n = () => {
            const e = Date.now() - i;
            let l = d;
            e < o && (l = r + (d - r) * c(e / o), a(n)), window.scrollTo(0, l)
          };
        n()
      },
      bindScrollEventForElements(e) {
        e.forEach(e => {
          const l = e.getAttribute("data-oke-scroll-target");
          if (!l) return;
          const o = document.querySelector(l);
          o && (e.addEventListener("click", () => this.smoothScrollTo(o)), e.style.cursor = "pointer")
        })
      }
    }
  },
  "88a3": function(e, l, o) {
    "use strict";
    l["a"] = {
      addOrUpdateTargetBlock(e, l, o, a = "innerHTML", s = "head") {
        if (!o) return;
        const t = document.querySelector(s),
          r = t.querySelector("#" + l);
        if (r) r[a] = o;
        else {
          const s = document.createElement(e);
          s.id = l, t.prepend(s), s[a] = o
        }
      },
      getFocusableElements(e, l) {
        if (e) {
          const o = ["button", "a", "input", "select", "textarea", "[tabindex]"],
            a = l ? o : o.map(e => e + ':not([tabindex="-1"])');
          return Array.from(e.querySelectorAll(a.join(",")))
        }
      },
      getFirstFocusable(e) {
        if (e) {
          const l = this.getFocusableElements(e);
          if (null === l || void 0 === l ? void 0 : l.length) return l[0]
        }
      },
      sanitiseControlId(e) {
        if (!(null === e || void 0 === e ? void 0 : e.length)) return;
        const l = /[^\p{L}\p{N}-]+/gu,
          o = /^[-]+|[-]+$/gu,
          a = /^[^\p{L}]+/u,
          s = e.toLowerCase().replace(l, "-");
        return s.replace(o, "").replace(a, "id-")
      }
    }
  },
  a8f8: function(e, l, o) {
    "use strict";
    var a = this && this.__createBinding || (Object.create ? function(e, l, o, a) {
        void 0 === a && (a = o);
        var s = Object.getOwnPropertyDescriptor(l, o);
        s && !("get" in s ? !l.__esModule : s.writable || s.configurable) || (s = {
          enumerable: !0,
          get: function() {
            return l[o]
          }
        }), Object.defineProperty(e, a, s)
      } : function(e, l, o, a) {
        void 0 === a && (a = o), e[a] = l[o]
      }),
      s = this && this.__exportStar || function(e, l) {
        for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(l, o) || a(l, e, o)
      };
    Object.defineProperty(l, "__esModule", {
      value: !0
    }), s(o("ffff"), l)
  },
  cd49: function(e, l, o) {
    "use strict";
    o.r(l);
    var a = o("02e8"),
      s = o("6f27"),
      t = o("342a"),
      r = o("a8f8"),
      d = o("522e"),
      i = o("0625"),
      c = o("88a3");
    let n;
    const u = "Could not retrieve Okendo Reviews & UGC configuration";
    async function m() {
      var e, l;
      if (n) return await n;
      const o = document.getElementById("oke-reviews-settings");
      if (o) n = Promise.resolve(JSON.parse(o.innerText));
      else {
        const o = document.querySelector('meta[name="oke:subscriber_id"]'),
          a = null === (e = document.querySelector("script[data-oke-subscriber-id]")) || void 0 === e ? void 0 : e.getAttribute("data-oke-subscriber-id"),
          s = null !== (l = null === o || void 0 === o ? void 0 : o.content) && void 0 !== l ? l : a;
        if (!s) return;
        const t = async () => {
          try {
            const [e, l] = await Promise.all([d["a"].get(`${i["a"].apiBaseUrl}/stores/${s}/widget_plus_settings`), c["a"]]);
            return l.addOrUpdateTargetBlock("style", "oke-css-vars", e.cssVariables, "outerHTML"), l.addOrUpdateTargetBlock("style", "oke-reviews-custom-css", e.customCss, "outerHTML"), l.addOrUpdateTargetBlock("svg", "oke-star-symbols", e.starSymbols, "outerHTML", "body"), e.reviewsHeaderConfig
          } catch (e) {
            console.error(u)
          }
        };
        n = t()
      }
      return await n
    }
    async function f(e) {
      let {
        widgetSettings: l
      } = e;
      if (!l) {
        const {
          defaultSettings: e
        } = await Promise.all([o.e("okendo-reviews-core"), o.e("modules/okendo-reviews-settings")]).then(o.bind(null, "4adb"));
        l = e
      }
      return l
    }
    var v, b;
    let w;
    const g = document.querySelector('meta[name="oke:subscriber_id"]'),
      h = null === (v = document.querySelector("script[data-oke-subscriber-id]")) || void 0 === v ? void 0 : v.getAttribute("data-oke-subscriber-id"),
      k = document.querySelector('meta[name="oke:auto_initialise"]'),
      p = document.querySelector('meta[name="oke:hide_reviews_tab"]'),
      j = null !== (b = null === g || void 0 === g ? void 0 : g.content) && void 0 !== b ? b : h;

    function y(e) {
      const {
        isTestModeEnabled: l,
        locale: o,
        localeAndVariant: a,
        matchCustomerLocale: s
      } = e;
      return {
        isTestModeEnabled: l,
        locale: o,
        localeAndVariant: a,
        matchCustomerLocale: s
      }
    }(!j || j && k) && (async () => {
      const e = await m();
      e && ("interactive" !== document.readyState && "complete" !== document.readyState ? document.addEventListener("readystatechange", () => {
        S(e)
      }, {
        once: !0
      }) : S(e))
    })();
    const L = {
      initAllWidgets: A,
      setWidgetSettings: P,
      setWidgetLocale: W,
      setSubscriberId: z,
      initWidget: q,
      setProduct: T,
      setGroup: _
    };
    async function S(e) {
      const l = await f(e),
        o = y(e),
        a = Object(r["getLocaleWithFallback"])(null === o || void 0 === o ? void 0 : o.localeAndVariant, null === o || void 0 === o ? void 0 : o.locale),
        s = t["a"].getCustomerLocaleFromShopify(o),
        d = s && s.code !== a.code;
      await A(e.subscriberId, l, void 0, o, e.features, e.analyticsSettings, e.customDomain, d)
    }
    async function A(e, l, o, a, d, i, c, n = !0) {
      var u, v, b, w;
      if (!e || !l || !a) {
        const o = await m();
        if (!o) return;
        if (l = await f(o), d = null !== d && void 0 !== d ? d : o.features, e = null !== (u = null !== e && void 0 !== e ? e : j) && void 0 !== u ? u : o.subscriberId, !a) {
          a = y(o);
          const e = Object(r["getLocaleWithFallback"])(null === a || void 0 === a ? void 0 : a.localeAndVariant, null === a || void 0 === a ? void 0 : a.locale),
            l = t["a"].getCustomerLocaleFromShopify(a);
          n = !!l && l.code !== e.code
        }
      }
      if (!e) return void console.error("No Okendo Reviews & UGC Subscriber ID. Please check your configuration.");
      const g = Array.from(document.querySelectorAll("[data-oke-star-rating]")),
        h = Array.from(document.querySelectorAll("[data-oke-widget]")),
        k = Array.from(document.querySelectorAll("[data-oke-questions-widget]")),
        L = Array.from(document.querySelectorAll("[data-oke-carousel]")),
        S = Array.from(document.querySelectorAll("[data-oke-badge]")),
        A = Array.from(document.querySelectorAll("[data-oke-media-grid]")),
        E = Array.from(document.querySelectorAll("[data-oke-media-carousel]")),
        T = Array.from(document.querySelectorAll("[data-oke-scroll-target]")),
        _ = Array.from(document.querySelectorAll("[data-oke-reviews-keywords]")),
        q = Array.from(document.querySelectorAll("[data-oke-reviews-modal-trigger]")),
        P = Array.from(document.querySelectorAll("[data-oke-reviews-summary]")),
        z = !p && null !== (b = null === (v = l.reviewsTab) || void 0 === v ? void 0 : v.enabled) && void 0 !== b && b;
      if (e) {
        const t = null === window || void 0 === window ? void 0 : window.okeShowPreviewData,
          r = t || (null === (w = l.reviewsWidget) || void 0 === w ? void 0 : w.showWhenEmpty) ? h : h.filter(e => "<span></span>" !== e.innerHTML.trim()),
          u = g.filter(e => "" !== e.innerHTML.trim()),
          m = !!n || await O(u, l, r);
        !m && u.length && C(u);
        const f = m ? g : g.filter(e => "" === e.innerHTML.trim());
        T.length > 0 && s["a"].bindScrollEventForElements(T);
        const v = f.length || r.length || k.length || L.length || S.length || A.length || E.length || _.length || q.length || P.length || z;
        if (v) {
          const s = await B(!1);
          await s.setGlobalWidgetSettingsAndDirectives(l, a, e, d, i, c), s.initialiseWidgets({
            starRating: f,
            widget: r,
            questions: k,
            homepageCarousel: L,
            reviewsKeywords: _,
            reviewsModal: q,
            reviewsSummary: P,
            reviewsTab: z,
            badge: S,
            mediaGrid: A,
            mediaCarousel: E
          }, o)
        }
      }
    }
    async function O(e, l, o) {
      let s = !1;
      return e.length && (s = o.length > 0 || await a["a"].areStarRatingsClickable(l.starRatings)), s
    }
    async function C(e) {
      const {
        default: l
      } = await o.e("modules/okendo-metafield-star-rating-utils").then(o.bind(null, "06b3"));
      l.bindEventsToMetafieldStarRatings(e)
    }
    async function E(e, l, o) {
      var a;
      if (e) {
        null === (a = e.firstElementChild) || void 0 === a || a.remove();
        const s = `data-oke-reviews-${"group"===o?"product":"group"}-id`;
        (null === e || void 0 === e ? void 0 : e.hasAttribute(s)) && e.removeAttribute(s), e.setAttribute(`data-oke-reviews-${o}-id`, l), await q(e, !0)
      }
    }
    async function T(e, l) {
      await E(e, l, "product")
    }
    async function _(e, l) {
      await E(e, l, "group")
    }
    async function q(e, l = !1) {
      if (!(null === e || void 0 === e ? void 0 : e.innerHTML) || !e.hasAttribute("data-oke-rendered") || l) {
        const l = await B();
        l.initialiseWidget([e])
      }
    }
    async function P(e, l) {
      const o = await B();
      o.setWidgetSettings(e, l);
      const a = Object(r["getLocaleWithFallback"])(null === l || void 0 === l ? void 0 : l.localeAndVariant, null === l || void 0 === l ? void 0 : l.locale);
      a && W(a.code, a.variant)
    }
    async function z(e) {
      const l = await B();
      l.setSubscriberId(e)
    }
    async function W(e, l) {
      const o = await B();
      o.setWidgetLocale(e, l), document.dispatchEvent(new Event("oke-locale-changed"))
    }
    async function B(e = !0) {
      if (w) return Promise.resolve(w);
      const {
        InitialiseWidgets: l
      } = await Promise.all([o.e("okendo-reviews-core"), o.e("okendo-reviews-styles"), o.e("okendo-reviews-translation"), o.e("modules/okendo-widget-init")]).then(o.bind(null, "2003")), a = new l;
      return e && (await R(a), w = a), a
    }
    async function R(e) {
      const l = await m();
      if (l) {
        const o = y(l),
          a = await f(l);
        e.setGlobalWidgetSettingsAndDirectives(a, o, l.subscriberId, l.features, l.analyticsSettings, l.customDomain)
      }
    }
    window.okeWidgetApi = L, document.dispatchEvent(new Event("oke-script-loaded"))
  },
  ffff: function(e, l, o) {
    "use strict";
    Object.defineProperty(l, "__esModule", {
      value: !0
    }), l.awsSupportedLocaleCodes = l.allLocalesWithAliases = l.localeAliases = l.allLocales = l.english = l.LocaleUtils = void 0, l.getLocale = t, l.getAllLocales = r, l.getLocaleWithFallback = d, l.getSubscriberLocaleWithFallback = i, l.getSubscriberLocaleTranslationFilename = c, l.getLocaleTranslationFilename = n;
    const a = v();
    var s;

    function t(e, o) {
      if (void 0 === e) return;
      const a = f(e) ? e : l.localeAliases[e.toLowerCase()],
        s = l.allLocales[a];
      if (s) {
        if ("string" === typeof s) return {
          code: a
        };
        if ("variants" in s) {
          if (o) {
            const e = s.variants[o];
            if (e) return {
              code: a,
              variant: o
            }
          }
          return {
            code: a,
            variant: s.defaultVariant
          }
        }
      }
    }

    function r() {
      const e = [];
      for (const [o, a] of Object.entries(l.allLocales))
        if ("string" === typeof a) e.push({
          name: a,
          code: o
        });
        else if ("variants" in a)
        for (const [l, {
            name: s
          }] of Object.entries(a.variants)) e.push({
          name: s,
          code: o,
          variant: l
        });
      return e.sort((e, l) => e.name.localeCompare(l.name))
    }

    function d(e, o, a = l.english) {
      var s, r;
      return null !== (r = null !== (s = t(null === e || void 0 === e ? void 0 : e.code, null === e || void 0 === e ? void 0 : e.variant)) && void 0 !== s ? s : t(o)) && void 0 !== r ? r : a
    }

    function i(e, o = l.english) {
      return d(e.localeAndVariant, e.locale, o)
    }

    function c(e) {
      const l = i(e);
      return u(l)
    }

    function n(e, l) {
      const o = t(e, l);
      if (o) return u(o)
    }

    function u(e) {
      return `${e.code.toLowerCase()}${e.variant?"-"+e.variant.toLowerCase():""}`
    }

    function m(e) {
      const l = a.exec(e);
      if (!(null === l || void 0 === l ? void 0 : l.groups)) return e;
      const {
        language: o,
        script: s,
        region: t
      } = l.groups, r = [o.toLowerCase()];
      return s && r.push(s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()), t && r.push(t.toUpperCase()), r.join("-")
    }

    function f(e) {
      return !!e && Object.keys(s.kOkendoLocales).some(l => l.toLowerCase() === e.toLowerCase())
    }

    function v() {
      const e = "(?<language>([A-Za-z]{2,3}))",
        l = "(?<script>[A-Za-z]{4})",
        o = "(?<region>[A-Za-z]{2}|[0-9]{3})";
      return new RegExp(`^${e}(-${l})?(-${o})?$`)
    }(function(e) {
      function l(l, o) {
        if (void 0 === l) return;
        const a = m(l),
          s = f(a) ? a : e.kOkendoLocaleAliases[a],
          t = e.kOkendoLocales[s];
        if (t) {
          if ("string" === typeof t) return {
            code: s
          };
          if ("variants" in t) {
            if (o) {
              const e = t.variants[o];
              if (e) return {
                code: s,
                variant: o
              }
            }
            return {
              code: s,
              variant: t.defaultVariant
            }
          }
        }
      }

      function o(o, a, s = e.kEnglish) {
        var t, r;
        return null !== (r = null !== (t = l(null === o || void 0 === o ? void 0 : o.code, null === o || void 0 === o ? void 0 : o.variant)) && void 0 !== t ? t : l(a)) && void 0 !== r ? r : s
      }

      function s(l, a = e.kEnglish) {
        return o(l.localeAndVariant, l.locale, a)
      }

      function t(e) {
        const l = s(e);
        return i(l)
      }

      function r() {
        const l = [];
        for (const [o, a] of Object.entries(e.kOkendoLocales))
          if ("string" === typeof a) l.push({
            name: a,
            code: o
          });
          else if ("variants" in a)
          for (const [e, {
              name: s
            }] of Object.entries(a.variants)) l.push({
            name: s,
            code: o,
            variant: e
          });
        return l.sort((e, l) => e.name.localeCompare(l.name))
      }

      function d(e, o) {
        const a = l(e, o);
        if (a) return i(a)
      }

      function i(e) {
        return `${e.code.toLowerCase()}${e.variant?"-"+e.variant.toLowerCase():""}`
      }

      function c(e) {
        var o, s, t;
        if (void 0 === e) return;
        const r = a.exec(e.trim());
        if (!(null === (o = null === r || void 0 === r ? void 0 : r.groups) || void 0 === o ? void 0 : o.language)) return;
        let d = r.groups.language.toLocaleLowerCase();
        const i = null === (s = r.groups.region) || void 0 === s ? void 0 : s.toLocaleLowerCase(),
          c = null === (t = r.groups.script) || void 0 === t ? void 0 : t.toLocaleLowerCase();
        switch (d) {
          case "pt":
            "br" === i ? d = "pt-BR" : "pt" === i && (d = "pt-PT");
            break;
          case "zh":
            i && ["tw", "hk", "mo"].includes(i) || "hant" === c ? d = "zh-TW" : (i && ["cn", "sg"].includes(i) || "hans" === c) && (d = "zh-CN");
            break
        }
        return l(d)
      }

      function n(e) {
        return void 0 !== e && a.test(e.trim())
      }
      e.kEnglish = {
        code: "en"
      }, e.kOkendoLocales = {
        bg: "Bulgarian",
        cs: "Czech",
        da: "Danish",
        de: {
          defaultVariant: "formal",
          variants: {
            formal: {
              name: "German, formal"
            },
            informal: {
              name: "German, informal"
            }
          }
        },
        el: "Greek",
        en: "English",
        es: "Spanish",
        et: "Estonian",
        fi: "Finnish",
        fr: "French",
        hi: "Hindi",
        hr: "Croatian",
        hu: "Hungarian",
        id: "Indonesian",
        it: "Italian",
        ja: "Japanese",
        ko: "Korean",
        lt: "Lithuanian",
        lv: "Latvian",
        ms: "Malay",
        nb: "Norwegian, Bokmål",
        nl: "Dutch",
        pl: "Polish",
        "pt-BR": "Portuguese, Brazil",
        "pt-PT": "Portuguese, Portugal",
        ro: "Romanian",
        ru: "Russian",
        sk: "Slovak",
        sl: "Slovenian",
        sr: "Serbian",
        sv: "Swedish",
        th: "Thai",
        tr: "Turkish",
        uk: "Ukrainian",
        vi: "Vietnamese",
        "zh-CN": "Chinese, simplified",
        "zh-TW": "Chinese, traditional"
      }, e.kOkendoLocaleAliases = {
        no: "nb",
        pt: "pt-PT",
        zh: "zh-CN"
      }, e.kAllOkendoLocalesWithAliases = [...Object.keys(e.kOkendoLocales), ...Object.keys(e.kOkendoLocaleAliases)], e.kAWSLocales = ["af", "sq", "am", "ar", "hy", "az", "bn", "bs", "bg", "ca", "zh", "zh-TW", "hr", "cs", "da", "fa-AF", "nl", "en", "et", "fa", "tl", "fi", "fr", "fr-CA", "ka", "de", "el", "gu", "ht", "ha", "he", "hi", "hu", "is", "id", "ga", "it", "ja", "kn", "kk", "ko", "lv", "lt", "mk", "ms", "ml", "mt", "mr", "mn", "no", "ps", "pl", "pt", "pt-PT", "pa", "ro", "ru", "sr", "si", "sk", "sl", "so", "es", "es-MX", "sw", "sv", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi", "cy"], e.getOkendoLocale = l, e.getOkendoLocaleWithFallback = o, e.getSubscriberOkendoLocaleWithFallback = s, e.getSubscriberOkendoLocaleFileName = t, e.getAllOkendoLocale = r, e.getOkendoLocaleTranslationFileName = d, e.okendoLocaleToLocaleFileName = i, e.ietfLocaleToOkendoLocale = c, e.isValidIetfLocale = n
    })(s || (l.LocaleUtils = s = {})), l.english = {
      code: "en"
    }, l.allLocales = s.kOkendoLocales, l.localeAliases = s.kOkendoLocaleAliases, l.allLocalesWithAliases = [...Object.keys(l.allLocales), ...Object.keys(l.localeAliases)], l.awsSupportedLocaleCodes = ["af", "sq", "am", "ar", "hy", "az", "bn", "bs", "bg", "ca", "zh", "zh-TW", "hr", "cs", "da", "fa-AF", "nl", "en", "et", "fa", "tl", "fi", "fr", "fr-CA", "ka", "de", "el", "gu", "ht", "ha", "he", "hi", "hu", "is", "id", "ga", "it", "ja", "kn", "kk", "ko", "lv", "lt", "mk", "ms", "ml", "mt", "mr", "mn", "no", "ps", "pl", "pt", "pt-PT", "pa", "ro", "ru", "sr", "si", "sk", "sl", "so", "es", "es-MX", "sw", "sv", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi", "cy"]
  }
});