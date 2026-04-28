(async function() {
  try {

    const blockVersion = "v3"
    if (blockVersion != "v3") {
      return
    }

    let metaErrorFlag = false;
    if (metaErrorFlag) {
      return
    }

    // Parse metafields as JSON
    const metafields = {
      "easygift-rule-6880216bd8e3133d09563c4b": {
        "schedule": {
          "enabled": false,
          "starts": null,
          "ends": null
        },
        "trigger": {
          "productTags": {
            "targets": [],
            "collectionInfo": null,
            "sellingPlan": null
          },
          "promoCode": null,
          "promoCodeDiscount": null,
          "type": "productsInclude",
          "minCartValue": null,
          "upperCartValue": null,
          "products": [{
            "name": "Sleep Spray - 30 Servings",
            "variantId": 46763671027932,
            "variantGid": "gid:\/\/shopify\/ProductVariant\/46763671027932",
            "productGid": "gid:\/\/shopify\/Product\/9015003676892",
            "handle": "sleep-spray-copy",
            "sellingPlans": [],
            "alerts": [],
            "_id": "6880216bd8e3133d09563c4c"
          }],
          "collections": [],
          "condition": "quantity",
          "conditionMin": 1,
          "conditionMax": null,
          "collectionSellingPlanType": null
        },
        "action": {
          "notification": {
            "enabled": false,
            "headerText": null,
            "subHeaderText": null,
            "showImage": false,
            "imageUrl": ""
          },
          "discount": {
            "issue": null,
            "type": "app",
            "id": "gid:\/\/shopify\/DiscountAutomaticNode\/1415545913564",
            "title": "BUY1GET1FREE",
            "createdByEasyGift": true,
            "easygiftAppDiscount": true,
            "discountType": "percentage",
            "value": 100
          },
          "popupOptions": {
            "headline": null,
            "subHeadline": null,
            "showItemsPrice": false,
            "showVariantsSeparately": false,
            "popupDismissable": false,
            "imageUrl": null,
            "persistPopup": false,
            "rewardQuantity": 1,
            "showDiscountedPrice": false,
            "hideOOSItems": false
          },
          "banner": {
            "enabled": false,
            "headerText": null,
            "subHeaderText": null,
            "showImage": false,
            "imageUrl": null,
            "displayAfter": "5",
            "closingMode": "doNotAutoClose",
            "selfcloseAfter": "5",
            "reshowBannerAfter": "everyNewSession",
            "redirectLink": null
          },
          "showPromoCodeMessage": false,
          "type": "addAutomatically",
          "products": [{
            "name": "Sleep Spray - 30 Servings",
            "variantId": "46763671027932",
            "variantGid": "gid:\/\/shopify\/ProductVariant\/46763671027932",
            "productGid": "gid:\/\/shopify\/Product\/9015003676892",
            "quantity": 1,
            "handle": "sleep-spray-copy",
            "price": "45.00"
          }],
          "limit": 1,
          "preventProductRemoval": true,
          "addAvailableProducts": false
        },
        "targeting": {
          "link": {
            "destination": null,
            "data": null,
            "cookieLifetime": 14
          },
          "testMode": {
            "testCount": 0,
            "lastTestedAt": null,
            "currentNonce": null,
            "lastTestUrl": null,
            "lastTokenExpiresAt": null
          },
          "additionalCriteria": {
            "geo": {
              "include": [],
              "exclude": []
            },
            "type": null,
            "customerTags": [],
            "customerTagsExcluded": [],
            "customerId": [],
            "orderCount": null,
            "hasOrderCountMax": false,
            "orderCountMax": null,
            "totalSpent": null,
            "hasTotalSpentMax": false,
            "totalSpentMax": null
          },
          "type": "all"
        },
        "settings": {
          "worksInReverse": true,
          "runsOncePerSession": false,
          "preventAddedItemPurchase": false,
          "showReminderBanner": false
        },
        "_id": "6880216bd8e3133d09563c4b",
        "name": "BOGO | Free Sleep Spray w\/ Order | New Customers on LP",
        "store": "686d45fc1c316cad4338afd0",
        "shop": "rejuviamedical",
        "active": true,
        "translations": null,
        "createdAt": "2025-07-22T23:40:27.855Z",
        "updatedAt": "2026-04-26T14:07:57.536Z",
        "__v": 0,
        "testMode": false
      },
      "easygift-rule-6888da1ce066dbe27167c0b7": {
        "schedule": {
          "enabled": false,
          "starts": null,
          "ends": null
        },
        "trigger": {
          "productTags": {
            "targets": [],
            "collectionInfo": null,
            "sellingPlan": null
          },
          "promoCode": null,
          "promoCodeDiscount": null,
          "type": "productsInclude",
          "minCartValue": null,
          "upperCartValue": null,
          "products": [{
            "name": "Sleep Spray - 60 Servings",
            "variantId": 46763671060700,
            "variantGid": "gid:\/\/shopify\/ProductVariant\/46763671060700",
            "productGid": "gid:\/\/shopify\/Product\/9015003676892",
            "handle": "sleep-spray-copy",
            "sellingPlans": [{
              "id": "32466960604",
              "name": "3 Months"
            }, {
              "id": "32466927836",
              "name": "2 Months"
            }, {
              "id": "32466895068",
              "name": "1 Month"
            }, {
              "id": "32485769436",
              "name": "2 Months"
            }, {
              "id": "32392085724",
              "name": "1 Month"
            }, {
              "id": null,
              "name": "One Time Purchase"
            }],
            "alerts": [],
            "_id": "689261fb3df157c8d7fe8efe"
          }],
          "collections": [],
          "condition": "quantity",
          "conditionMin": 1,
          "conditionMax": null,
          "collectionSellingPlanType": null
        },
        "action": {
          "notification": {
            "enabled": false,
            "headerText": null,
            "subHeaderText": null,
            "showImage": false,
            "imageUrl": ""
          },
          "discount": {
            "issue": null,
            "type": "app",
            "id": "gid:\/\/shopify\/DiscountAutomaticNode\/1415545848028",
            "title": "BUY2GET2FREE",
            "createdByEasyGift": true,
            "easygiftAppDiscount": true,
            "discountType": "percentage",
            "value": 100
          },
          "popupOptions": {
            "headline": null,
            "subHeadline": null,
            "showItemsPrice": false,
            "showVariantsSeparately": false,
            "popupDismissable": false,
            "imageUrl": null,
            "persistPopup": false,
            "rewardQuantity": 1,
            "showDiscountedPrice": false,
            "hideOOSItems": false
          },
          "banner": {
            "enabled": false,
            "headerText": null,
            "subHeaderText": null,
            "showImage": false,
            "imageUrl": null,
            "displayAfter": "5",
            "closingMode": "doNotAutoClose",
            "selfcloseAfter": "5",
            "reshowBannerAfter": "everyNewSession",
            "redirectLink": null
          },
          "showPromoCodeMessage": false,
          "type": "addAutomatically",
          "products": [{
            "name": "Sleep Spray - 60 Servings",
            "variantId": "46763671060700",
            "variantGid": "gid:\/\/shopify\/ProductVariant\/46763671060700",
            "productGid": "gid:\/\/shopify\/Product\/9015003676892",
            "quantity": 1,
            "handle": "sleep-spray-copy",
            "price": "65.00"
          }],
          "limit": 1,
          "preventProductRemoval": true,
          "addAvailableProducts": false
        },
        "targeting": {
          "link": {
            "destination": null,
            "data": null,
            "cookieLifetime": 14
          },
          "testMode": {
            "testCount": 0,
            "lastTestedAt": null,
            "currentNonce": null,
            "lastTestUrl": null,
            "lastTokenExpiresAt": null
          },
          "additionalCriteria": {
            "geo": {
              "include": [],
              "exclude": []
            },
            "type": null,
            "customerTags": [],
            "customerTagsExcluded": [],
            "customerId": [],
            "orderCount": null,
            "hasOrderCountMax": false,
            "orderCountMax": null,
            "totalSpent": null,
            "hasTotalSpentMax": false,
            "totalSpentMax": null
          },
          "type": "all"
        },
        "settings": {
          "worksInReverse": true,
          "runsOncePerSession": false,
          "preventAddedItemPurchase": false,
          "showReminderBanner": false
        },
        "_id": "6888da1ce066dbe27167c0b7",
        "name": "60s BOGO Test | New Customers on LP",
        "store": "686d45fc1c316cad4338afd0",
        "shop": "rejuviamedical",
        "active": true,
        "translations": null,
        "createdAt": "2025-07-29T14:26:36.027Z",
        "updatedAt": "2026-04-26T14:07:49.807Z",
        "__v": 0,
        "testMode": false
      },
      "easygift-rule-693c44db262723db7113f4f8": {
        "schedule": {
          "enabled": false,
          "starts": null,
          "ends": null
        },
        "trigger": {
          "productTags": {
            "targets": [],
            "collectionInfo": null,
            "sellingPlan": null
          },
          "promoCode": null,
          "promoCodeDiscount": null,
          "type": "productsInclude",
          "minCartValue": null,
          "upperCartValue": null,
          "products": [{
            "name": "Sleep Spray - 90 Servings",
            "variantId": 46763671093468,
            "variantGid": "gid:\/\/shopify\/ProductVariant\/46763671093468",
            "productGid": "gid:\/\/shopify\/Product\/9015003676892",
            "handle": "sleep-spray-copy",
            "sellingPlans": [{
              "id": "32466960604",
              "name": "3 Months"
            }, {
              "id": "32466927836",
              "name": "2 Months"
            }, {
              "id": "32466895068",
              "name": "1 Month"
            }, {
              "id": "32485769436",
              "name": "2 Months"
            }, {
              "id": "32392085724",
              "name": "1 Month"
            }, {
              "id": null,
              "name": "One Time Purchase"
            }],
            "alerts": [],
            "_id": "693c44db262723db7113f4f9"
          }],
          "collections": [],
          "condition": "quantity",
          "conditionMin": 1,
          "conditionMax": null,
          "collectionSellingPlanType": null
        },
        "action": {
          "notification": {
            "enabled": false,
            "headerText": null,
            "subHeaderText": null,
            "showImage": false,
            "imageUrl": ""
          },
          "discount": {
            "issue": null,
            "type": "app",
            "id": "gid:\/\/shopify\/DiscountAutomaticNode\/1422345928924",
            "title": "FREE3MONTHS",
            "createdByEasyGift": true,
            "easygiftAppDiscount": true,
            "discountType": "percentage",
            "value": 100
          },
          "popupOptions": {
            "headline": null,
            "subHeadline": null,
            "showItemsPrice": false,
            "showVariantsSeparately": false,
            "popupDismissable": false,
            "imageUrl": null,
            "persistPopup": false,
            "rewardQuantity": 1,
            "showDiscountedPrice": false,
            "hideOOSItems": false
          },
          "banner": {
            "enabled": false,
            "headerText": null,
            "subHeaderText": null,
            "showImage": false,
            "imageUrl": null,
            "displayAfter": "5",
            "closingMode": "doNotAutoClose",
            "selfcloseAfter": "5",
            "reshowBannerAfter": "everyNewSession",
            "redirectLink": null
          },
          "showPromoCodeMessage": false,
          "type": "addAutomatically",
          "products": [{
            "name": "Sleep Spray - 90 Servings",
            "variantId": "46763671093468",
            "variantGid": "gid:\/\/shopify\/ProductVariant\/46763671093468",
            "productGid": "gid:\/\/shopify\/Product\/9015003676892",
            "quantity": 1,
            "handle": "sleep-spray-copy",
            "price": "125.00"
          }],
          "limit": 1,
          "preventProductRemoval": true,
          "addAvailableProducts": false
        },
        "targeting": {
          "link": {
            "destination": null,
            "data": null,
            "cookieLifetime": 14
          },
          "testMode": {
            "testCount": 0,
            "lastTestedAt": null,
            "currentNonce": null,
            "lastTestUrl": null,
            "lastTokenExpiresAt": null
          },
          "additionalCriteria": {
            "geo": {
              "include": [],
              "exclude": []
            },
            "type": null,
            "customerTags": [],
            "customerTagsExcluded": [],
            "customerId": [],
            "orderCount": null,
            "hasOrderCountMax": false,
            "orderCountMax": null,
            "totalSpent": null,
            "hasTotalSpentMax": false,
            "totalSpentMax": null
          },
          "type": "all"
        },
        "settings": {
          "worksInReverse": true,
          "runsOncePerSession": false,
          "preventAddedItemPurchase": false,
          "showReminderBanner": false
        },
        "_id": "693c44db262723db7113f4f8",
        "name": "90s BOGO Test | New Customers on LP",
        "store": "686d45fc1c316cad4338afd0",
        "shop": "rejuviamedical",
        "active": true,
        "translations": null,
        "createdAt": "2025-12-12T16:37:47.772Z",
        "updatedAt": "2026-04-26T14:07:39.478Z",
        "__v": 0,
        "testMode": false
      },
      "easygift-rule-69875af7e83a32d8a593e1ae": {
        "schedule": {
          "enabled": false,
          "starts": null,
          "ends": null
        },
        "trigger": {
          "productTags": {
            "targets": [],
            "collectionInfo": null,
            "sellingPlan": null
          },
          "type": "productsInclude",
          "promoCode": null,
          "promoCodeDiscount": null,
          "minCartValue": null,
          "hasUpperCartValue": false,
          "upperCartValue": null,
          "products": [{
            "name": "Sleep Spray - 30 Servings",
            "variantId": 44328075526364,
            "variantGid": "gid:\/\/shopify\/ProductVariant\/44328075526364",
            "productGid": "gid:\/\/shopify\/Product\/5433533956258",
            "handle": "sleep-spray",
            "sellingPlans": [{
              "id": "32315277532",
              "name": "6 Months"
            }, {
              "id": "29054075100",
              "name": "3 Months"
            }, {
              "id": "29054042332",
              "name": "2 Months"
            }, {
              "id": "29054009564",
              "name": "1 Month"
            }],
            "alerts": [],
            "_id": "686d492eb1cf28f0ea1ca179"
          }, {
            "name": "Sleep Spray - 60 Servings",
            "variantId": 45415434387676,
            "variantGid": "gid:\/\/shopify\/ProductVariant\/45415434387676",
            "productGid": "gid:\/\/shopify\/Product\/5433533956258",
            "handle": "sleep-spray",
            "sellingPlans": [{
              "id": "32315277532",
              "name": "6 Months"
            }, {
              "id": "29054075100",
              "name": "3 Months"
            }, {
              "id": "29054042332",
              "name": "2 Months"
            }, {
              "id": "29054009564",
              "name": "1 Month"
            }],
            "alerts": [],
            "_id": "686d492eb1cf28f0ea1ca17a"
          }, {
            "name": "Sleep Spray - 90 Servings",
            "variantId": 45415440089308,
            "variantGid": "gid:\/\/shopify\/ProductVariant\/45415440089308",
            "productGid": "gid:\/\/shopify\/Product\/5433533956258",
            "handle": "sleep-spray",
            "sellingPlans": [{
              "id": "32315277532",
              "name": "6 Months"
            }, {
              "id": "29054075100",
              "name": "3 Months"
            }, {
              "id": "29054042332",
              "name": "2 Months"
            }, {
              "id": "29054009564",
              "name": "1 Month"
            }],
            "alerts": [],
            "_id": "686d492eb1cf28f0ea1ca17b"
          }],
          "collections": [],
          "condition": "quantity",
          "conditionMin": 1,
          "conditionMax": 10,
          "collectionSellingPlanType": null
        },
        "action": {
          "notification": {
            "enabled": false,
            "headerText": null,
            "subHeaderText": null,
            "showImage": false,
            "imageUrl": ""
          },
          "discount": {
            "type": "app",
            "title": "FREED3K2",
            "id": "gid:\/\/shopify\/DiscountAutomaticNode\/1431891509468",
            "createdByEasyGift": true,
            "easygiftAppDiscount": true,
            "value": 100,
            "discountType": "percentage",
            "issue": null
          },
          "popupOptions": {
            "headline": null,
            "subHeadline": null,
            "showItemsPrice": false,
            "popupDismissable": false,
            "imageUrl": null,
            "persistPopup": false,
            "rewardQuantity": 1,
            "showDiscountedPrice": false,
            "hideOOSItems": false,
            "showVariantsSeparately": false
          },
          "banner": {
            "enabled": false,
            "headerText": null,
            "imageUrl": null,
            "subHeaderText": null,
            "showImage": false,
            "displayAfter": "5",
            "closingMode": "doNotAutoClose",
            "selfcloseAfter": "5",
            "reshowBannerAfter": "everyNewSession",
            "redirectLink": null
          },
          "type": "addAutomatically",
          "products": [{
            "name": "Vitamin D3+K2 Spray - 30 Servings",
            "variantId": "46819555311836",
            "variantGid": "gid:\/\/shopify\/ProductVariant\/46819555311836",
            "productGid": "gid:\/\/shopify\/Product\/9031520518364",
            "quantity": 1,
            "handle": "vitamin-d3-k2-spray",
            "price": "45.00",
            "sellingPlanId": "29054009564",
            "sellingPlanName": "4 Weeks",
            "alerts": []
          }],
          "limit": 1,
          "preventProductRemoval": false,
          "addAvailableProducts": false
        },
        "targeting": {
          "link": {
            "destination": null,
            "data": null,
            "cookieLifetime": 14
          },
          "additionalCriteria": {
            "geo": {
              "include": [],
              "exclude": []
            },
            "type": null,
            "customerTags": [],
            "customerTagsExcluded": [],
            "customerId": [],
            "orderCount": null,
            "hasOrderCountMax": false,
            "orderCountMax": null,
            "totalSpent": null,
            "hasTotalSpentMax": false,
            "totalSpentMax": null
          },
          "type": "all"
        },
        "settings": {
          "worksInReverse": true,
          "runsOncePerSession": false,
          "preventAddedItemPurchase": false,
          "showReminderBanner": false
        },
        "_id": "69875af7e83a32d8a593e1ae",
        "name": "Free D3K2 Spray w\/ Sleep Spray Subscription",
        "store": "686d45fc1c316cad4338afd0",
        "shop": "rejuviamedical",
        "active": true,
        "translations": null,
        "createdAt": "2026-02-07T15:32:07.794Z",
        "updatedAt": "2026-02-10T16:47:44.616Z",
        "__v": 0
      }
    };

    // Process metafields in JavaScript
    let savedRulesArray = [];
    for (const [key, value] of Object.entries(metafields)) {
      if (value) {
        for (const prop in value) {
          // avoiding Object.Keys for performance gain -- no need to make an array of keys.
          savedRulesArray.push(value);
          break;
        }
      }
    }

    const metaTag = document.createElement('meta');
    metaTag.id = 'easygift-rules';
    metaTag.content = JSON.stringify(savedRulesArray);
    metaTag.setAttribute('itemid', 'cnVsZXNfJF8xNzc3Mjk2OTI5');

    document.head.appendChild(metaTag);
  } catch (err) {

  }
})();