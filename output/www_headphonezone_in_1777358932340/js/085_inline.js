window.flitsObjects && void 0 !== window.flitsObjects || (window.flitsObjects = {});
window.flitsObjects.global = {
  customerHash: '',
  shop_name: 'Headphone Zone',
  token: 'a6db93201905bb1a89ec9f057da7a736',
  base_url: '/apps/flits/api/1/19326',
  proxy_name: 'flits',
  app_id: 1,
  shop_id: 19326,
  shop_token: 'a6db93201905bb1a89ec9f057da7a736',
  chandle: 'flits_products_handle',
  recent_handle: "flits_recently_products",
  cemail: "flits_customer_email",
  customJsURL: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_custom.js?v=140435415037100550031776948164",
  shop_currency: 'INR',
  shopCountryName: 'India',
  defualtCountry: 'US',
  money_format: '₹ {{amount_no_decimals}}',
  money_format_replace: {
    moneyReplaceRegex: /((\,00)|(\.00))$/g,
    replaceTo: ''
  },
  Metafields: {
    "APP_ID": "1",
    "APP_NAMESPACE": "Flits",
    "APP_PROXY": "flits",
    "APP_SETTINGS_UPDATED": "1777275263",
    "B_C_B_B_C_CLR": "#34404a",
    "B_C_B_B_R_CLR": "10",
    "B_E_B_B_C_CLR": "#34404a",
    "B_E_B_B_R_CLR": "10",
    "B_S_B_B_C_CLR": "#34404a",
    "B_S_B_B_R_CLR": "10",
    "CUSTOM_THEME_SETTINGS_180749500784": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "CUSTOM_THEME_SETTINGS_180823196016": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "CUSTOM_THEME_SETTINGS_184555078000": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "CUSTOM_THEME_SETTINGS_184556257648": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "CUSTOM_THEME_SETTINGS_185153421680": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "CUSTOM_THEME_SETTINGS_185209586032": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "CUSTOM_THEME_SETTINGS_186559529328": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "CUSTOM_THEME_SETTINGS_188950020464": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(32, 2, 100)",
            "navigationTextColor": "rgb(255, 255, 255)",
            "navigationBorderColor": "rgb(32, 2, 100)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(0, 0, 0)",
            "primaryButtonBGColor": "rgb(32, 2, 100)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(32, 2, 100)",
            "secondaryButtonTextColor": "rgb(32, 2, 100)",
            "badgeBGColor": "rgb(32, 2, 100)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(32, 2, 100)"
          },
          "isAccountPageInJSON": false,
          "sections": [],
          "codeVersion": "4.6.9",
          "themeStoreId": null
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          },
          "miniAccountWidgetUrl": "https:\/\/localhost:4000\/files\/main.storeFrontMiniAccountWidget.4.6.10_28717_fetchAllOrder_customTask_15-04-2026.js"
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "CUSTOM_THEME_SETTINGS_188951527792": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 2,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(255, 255, 255)",
            "navigationTextColor": "rgb(12, 33, 84)",
            "navigationBorderColor": "rgb(255, 255, 255)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(0, 0, 0)",
            "primaryButtonBGColor": "rgb(12, 33, 84)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(12, 33, 84)",
            "secondaryButtonTextColor": "rgb(12, 33, 84)",
            "badgeBGColor": "rgb(12, 33, 84)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(12, 33, 84)"
          },
          "isAccountPageInJSON": false,
          "sections": [],
          "codeVersion": "4.6.9",
          "themeStoreId": null
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          },
          "miniAccountWidgetUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0904\/8490\/0207\/files\/main.storeFrontMiniAccountWidget.4.6.10_28717_fetchAllOrder_customTask_15-04-2026.js?v=1776228514"
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "CUSTOM_THEME_SETTINGS_189907566960": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 2,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(255, 255, 255)",
            "navigationTextColor": "rgb(12, 33, 84)",
            "navigationBorderColor": "rgb(255, 255, 255)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(0, 0, 0)",
            "primaryButtonBGColor": "rgb(12, 33, 84)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(12, 33, 84)",
            "secondaryButtonTextColor": "rgb(12, 33, 84)",
            "badgeBGColor": "rgb(12, 33, 84)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(12, 33, 84)"
          },
          "isAccountPageInJSON": false,
          "sections": [],
          "codeVersion": "4.6.9",
          "themeStoreId": null
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          },
          "miniAccountWidgetUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0904\/8490\/0207\/files\/main.storeFrontMiniAccountWidget.4.6.10_28717_fetchAllOrder_customTask_15-04-2026.js?v=1776228514"
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "C_BG_CLR": "#ffffff",
    "C_T_CLR": "#444444",
    "D_C_B_C_CLR": "#34404a",
    "D_C_T_C_CLR": "#34404a",
    "D_S_B_C_CLR": "#36404a",
    "D_S_M_A_B_C_CLR": "#34904a",
    "D_S_M_A_T_C_CLR": "#34404a",
    "D_S_M_H_B_C_CLR": "#34404a",
    "D_S_M_H_T_C_CLR": "#34414a",
    "D_S_T_C_CLR": "#34404a",
    "ENABLED_FEATURES_FOR_ONLINE_STORE": {
      "status": true,
      "cdnURL": "https:\/\/cdn.getflits.com",
      "features": {
        "onsite_content.account_widget": true,
        "settings.app.recently_viewed_products": 1,
        "settings.wishlist": 1
      }
    },
    "FLITS_EXTENSION_ONSITE_CONTENT_ACCOUNT_WIDGET": {
      "admin_settings": {
        "is_enable": true,
        "brand_logo": "https:\/\/cdn.shopify.com\/s\/files\/1\/0688\/5572\/6324\/files\/shopify_app_19326_Group_15768.png?v=1775050884",
        "primary_color": "#3b08ff",
        "position": {
          "widget_alignment": "right",
          "navigation_bar_alignment": "bottom"
        },
        "navigation_tabs": {
          "for_you": ["flits.mini_account_widget.navigation.for_you", "For you"],
          "orders": ["flits.mini_account_widget.navigation.orders", "Orders"],
          "profile": ["flits.mini_account_widget.navigation.profile", "Profile"]
        },
        "welcome": {
          "guest_sign_in_hyperlink_title": ["flits.mini_account_widget.welcome.guest_sign_in_hyperlink_title", "Sign in"],
          "guest_sign_in_hyperlink": ["flits.mini_account_widget.welcome.guest_sign_in_hyperlink", "\/account\/login"],
          "guest_sign_in_hyperlink_text": ["flits.mini_account_widget.welcome.guest_sign_in_hyperlink_text", "{{ sign_in }} to view your personalised account"],
          "guest_heading": ["flits.mini_account_widget.welcome.guest_heading", "Welcome to {{ store_name }}"],
          "guest_subheading": ["flits.mini_account_widget.welcome.guest_subheading", "Sign in to see orders, profile \u0026 address details. Enjoy handpicked recommendations just for you!"],
          "guest_sign_in_button_text": ["flits.mini_account_widget.welcome.guest_sign_in_button_text", "Sign in"],
          "guest_sign_in_button_url": ["flits.mini_account_widget.welcome.guest_sign_in_button_url", "\/account\/login"],
          "guest_sign_up_button_text": ["flits.mini_account_widget.welcome.guest_sign_up_button_text", "Create an account"],
          "guest_sign_up_button_url": ["flits.mini_account_widget.welcome.guest_sign_up_button_url", "\/account\/register"],
          "member_heading": ["flits.mini_account_widget.welcome.member_heading", "Welcome, You're signed-in!"],
          "member_subheading": ["flits.mini_account_widget.welcome.member_subheading", "Quickly access your orders, wishlist, and personalised picks right from this widget"]
        },
        "recently_view": {
          "visibility": "all_customers",
          "heading": ["flits.mini_account_widget.recently_view.heading", "RECENTLY VIEWED"]
        },
        "wishlist": {
          "visibility": "hide",
          "heading": ["flits.mini_account_widget.wishlist.heading", "WISHLISTED"]
        },
        "popular_today": {
          "visibility": "all_customers",
          "heading": ["flits.mini_account_widget.popular_today.heading", "POPULAR TODAY"],
          "product_badge": ["flits.mini_account_widget.popular_today.product_badge", "Trending"],
          "fallback_products": []
        },
        "marketing_banner": {
          "visibility": "hide",
          "banners": [{
            "image": ["flits.mini_account_widget.marketing_banner.banner_image", "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/summer_collection.jpg?v=1751604812"],
            "button_text": ["flits.mini_account_widget.marketing_banner.banner_button_text", "Shop now"],
            "heading": ["flits.mini_account_widget.marketing_banner.banner_heading", "Summer Collection"],
            "subtext": ["flits.mini_account_widget.marketing_banner.banner_subtext", "Embrace the season with our new fragrances"],
            "redirection_url": ["flits.mini_account_widget.marketing_banner.banner_redirection_url", "\/collections\/all"],
            "type": "banner_with_subtext"
          }]
        },
        "loyalty_and_store_credit": {
          "loyalty_program_visibility": "show",
          "referral_program_visibility": "show",
          "store_credit_program_visibility": "show",
          "loyalty_program_heading": ["flits.mini_account_widget.loyalty_program.heading", "LOYALTY PROGRAM"],
          "referral_program_heading": ["flits.mini_account_widget.referral_program.heading", "Earn rewards for referring our store"],
          "store_credit_program_heading": ["flits.mini_account_widget.store_credit.heading", "Store Credit"]
        },
        "footer_links": [],
        "orders_section": {
          "reorder_button_visibility": "hide",
          "contactus_button_visibility": "hide"
        }
      },
      "customization_settings": {
        "general_settings": {
          "widget_selectors": ["a.flits_header_miniaccountwidget"]
        },
        "navigation_tab_section": {
          "active_tab": "orders",
          "tabs_sequence": ["orders", "rewards", "profile"]
        }
      }
    },
    "FLITS_EXTENSION_ONSITE_CONTENT_ACCOUNT_WIDGET_188950020464": {
      "admin_settings": {
        "is_enable": true,
        "brand_logo": "https:\/\/cdn.shopify.com\/s\/files\/1\/0688\/5572\/6324\/files\/shopify_app_19326_Group_15768.png?v=1775050884",
        "primary_color": "#3b08ff",
        "position": {
          "widget_alignment": "right",
          "navigation_bar_alignment": "bottom"
        },
        "navigation_tabs": {
          "for_you": ["flits.mini_account_widget.navigation.for_you", "For you"],
          "orders": ["flits.mini_account_widget.navigation.orders", "Orders"],
          "profile": ["flits.mini_account_widget.navigation.profile", "Profile"]
        },
        "welcome": {
          "guest_sign_in_hyperlink_title": ["flits.mini_account_widget.welcome.guest_sign_in_hyperlink_title", "Sign in"],
          "guest_sign_in_hyperlink": ["flits.mini_account_widget.welcome.guest_sign_in_hyperlink", "\/account\/login"],
          "guest_sign_in_hyperlink_text": ["flits.mini_account_widget.welcome.guest_sign_in_hyperlink_text", "{{ sign_in }} to view your personalised account"],
          "guest_heading": ["flits.mini_account_widget.welcome.guest_heading", "Welcome to {{ store_name }}"],
          "guest_subheading": ["flits.mini_account_widget.welcome.guest_subheading", "Sign in to see orders, profile \u0026 address details. Enjoy handpicked recommendations just for you!"],
          "guest_sign_in_button_text": ["flits.mini_account_widget.welcome.guest_sign_in_button_text", "Sign in"],
          "guest_sign_in_button_url": ["flits.mini_account_widget.welcome.guest_sign_in_button_url", "\/account\/login"],
          "guest_sign_up_button_text": ["flits.mini_account_widget.welcome.guest_sign_up_button_text", "Create an account"],
          "guest_sign_up_button_url": ["flits.mini_account_widget.welcome.guest_sign_up_button_url", "\/account\/register"],
          "member_heading": ["flits.mini_account_widget.welcome.member_heading", "Welcome, You're signed-in!"],
          "member_subheading": ["flits.mini_account_widget.welcome.member_subheading", "Quickly access your orders, wishlist, and personalised picks right from this widget"]
        },
        "recently_view": {
          "visibility": "all_customers",
          "heading": ["flits.mini_account_widget.recently_view.heading", "RECENTLY VIEWED"]
        },
        "wishlist": {
          "visibility": "hide",
          "heading": ["flits.mini_account_widget.wishlist.heading", "WISHLISTED"]
        },
        "popular_today": {
          "visibility": "all_customers",
          "heading": ["flits.mini_account_widget.popular_today.heading", "POPULAR TODAY"],
          "product_badge": ["flits.mini_account_widget.popular_today.product_badge", "Trending"],
          "fallback_products": []
        },
        "marketing_banner": {
          "visibility": "hide",
          "banners": [{
            "image": ["flits.mini_account_widget.marketing_banner.banner_image", "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/summer_collection.jpg?v=1751604812"],
            "button_text": ["flits.mini_account_widget.marketing_banner.banner_button_text", "Shop now"],
            "heading": ["flits.mini_account_widget.marketing_banner.banner_heading", "Summer Collection"],
            "subtext": ["flits.mini_account_widget.marketing_banner.banner_subtext", "Embrace the season with our new fragrances"],
            "redirection_url": ["flits.mini_account_widget.marketing_banner.banner_redirection_url", "\/collections\/all"],
            "type": "banner_with_subtext"
          }]
        },
        "loyalty_and_store_credit": {
          "loyalty_program_visibility": "show",
          "referral_program_visibility": "show",
          "store_credit_program_visibility": "show",
          "loyalty_program_heading": ["flits.mini_account_widget.loyalty_program.heading", "LOYALTY PROGRAM"],
          "referral_program_heading": ["flits.mini_account_widget.referral_program.heading", "Earn rewards for referring our store"],
          "store_credit_program_heading": ["flits.mini_account_widget.store_credit.heading", "Store Credit"]
        },
        "footer_links": [],
        "orders_section": {
          "reorder_button_visibility": "hide",
          "contactus_button_visibility": "hide"
        }
      },
      "customization_settings": {
        "general_settings": {
          "widget_selectors": ["a.flits_header_miniaccountwidget"]
        },
        "navigation_tab_section": {
          "active_tab": "orders",
          "tabs_sequence": ["orders", "rewards", "profile"]
        }
      }
    },
    "FLITS_EXTENSION_ONSITE_CONTENT_CSS": "#flits-navigation-tabs{\n    -ms-grid-columns: 1fr 1fr 1fr !important;\n    grid-template-columns: 1fr 1fr 1fr !important;\n}\n[data-theme=\"188950020464\"] #flits-navigation-tabs {\n    grid-template-columns: 1fr 1fr 1fr !important;\n}\n#flits-brand-logo-container,#flits-header-cart-wrapper{\ndisplay:none;\n}\n#flits_header_wrapper{\ngrid-template-columns: 1fr auto;\n}\n@media(max-width:767px){\n#flits-brand-logo-container,#flits-header-cart-wrapper{\ndisplay:block;\n}\n}\n@media(max-width:375px){\n#flits_mini_account_widget_custom_order_buttons{\n    grid-template-columns: 1fr;\n}\n}",
    "GET_RULES_FOR_GUEST_CUSTOMERS": {
      "rules": {
        "all_rules_data": []
      }
    },
    "G_G_T_B_CLR": "0",
    "G_G_T_C_CLR": "#8c5959",
    "G_G_T_F_S_CLR": "16",
    "G_G_T_I_CLR": "0",
    "G_G_T_U_CLR": "0",
    "IS_ACCOUNT_PAGE_ENABLE": 0,
    "IS_ACCOUNT_WIDGET_AVAILABLE": 1,
    "IS_ADVANCE_DASHBOARD_ENABLE": 0,
    "IS_ADVANCE_DASHBOARD_PAID": 1,
    "IS_AMAZON_ENABLE": 0,
    "IS_CUSTOM_FIELDS_ENABLE": 1,
    "IS_FACEBOOK_ENABLE": 0,
    "IS_GOOGLE_ENABLE": 0,
    "IS_ORDER_CONTACT_US_ENABLE": 0,
    "IS_ORDER_TRACKING_PAID": 1,
    "is_recently_view_enable": 1,
    "IS_REFER_PROGRAM_ON": 0,
    "IS_REORDER_ENABLE": 0,
    "IS_SOCIAL_LOGIN_ENABLE": 0,
    "IS_SOCIAL_LOGIN_PAID": 0,
    "is_store_credit_enable": 0,
    "IS_STORE_CREDIT_PAID": 0,
    "IS_TRACK_TURTLE_ENABLE": 0,
    "IS_TWITTER_ENABLE": 0,
    "IS_WISHLIST_ENABLE": 1,
    "IS_WISHLIST_PAID": 1,
    "MICRO_FRONTEND_STOREFRONT_CONTAINER_LOAD_INTO_THIS_PAGES": "metaobject",
    "SHOP_ID": "19326",
    "SHOP_TOKEN": "a6db93201905bb1a89ec9f057da7a736",
    "S_BG_CLR": "#e6e6e6",
    "S_M_A_BG_CLR": "#444444",
    "S_M_A_B_CLR": "#444444",
    "S_M_A_T_CLR": "#ffffff",
    "S_M_H_BG_CLR": "#444444",
    "S_M_H_T_CLR": "#ffffff",
    "S_T_CLR": "#444444",
    "THEME_SETTINGS_134731071676": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_137025454268": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_137180610748": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_137180676284": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_137464086716": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_137465102524": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_137468936380": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_137469001916": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_137486991548": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_137799172284": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_137803792572": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_137857138876": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_137924804796": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_137924837564": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_138171547836": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172139807088": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172139839856": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172142035312": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172142068080": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172183486832": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_172239716720": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172268192112": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172268388720": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172584370544": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172817875312": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_172909166960": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_172959859056": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_172961071472": {
      "status": true,
      "data": {
        "accountSettings": {
          "template": 1,
          "isCustomized": false,
          "colorSettings": {
            "navigationBGColor": "rgb(230, 230, 230)",
            "navigationTextColor": "rgb(68, 68, 68)",
            "navigationBorderColor": "rgb(230, 230, 230)",
            "contentBGColor": "rgb(255, 255, 255, 0)",
            "contentTextColor": "rgb(68, 68, 68)",
            "primaryButtonBGColor": "rgb(59, 8, 255)",
            "primaryButtonTextColor": "rgb(255, 255, 255)",
            "secondaryButtonBGColor": "rgb(59, 8, 255)",
            "secondaryButtonTextColor": "rgb(59, 8, 255)",
            "badgeBGColor": "rgb(59, 8, 255)",
            "badgeTextColor": "rgb(255, 255, 255)",
            "linkColor": "rgb(59, 8, 255)"
          },
          "isAccountPageInJSON": true,
          "sections": ["main-customers-account"],
          "codeVersion": "2.1.5",
          "themeStoreId": 1190
        },
        "microfront_remotes": {
          "pages_template": {
            "404": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "article": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "blog": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "captcha": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "cart": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "collection": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }, {
              "component": "storeFrontWishListCollection",
              "renderType": "remote"
            }],
            "list-collections": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/account": [{
              "component": "storeFrontNavigation",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/activate_account": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/addresses": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/login": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }],
            "customers\/order": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "customers\/register": [{
              "component": "storeFrontSocialLogin",
              "renderType": "remote"
            }, {
              "component": "storeFrontReferFriendRegisterPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontRegisterPageCustomFields",
              "renderType": "remote"
            }],
            "customers\/reset_password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "gift_card": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "index": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "metaobject": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "page": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "password": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "policy": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "product": [{
              "component": "storeFrontWishList",
              "renderType": "remote"
            }, {
              "component": "storeFrontRecentlyViewedProductPage",
              "renderType": "remote"
            }, {
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }],
            "search": [{
              "component": "storeFrontCreditUsage",
              "renderType": "remote"
            }]
          },
          "remotes": {
            "storeFrontNavigation": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontMyProfile",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "MyProfileForm",
                "renderType": "local"
              }]
            },
            "storeFrontChangePassword": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontChangePassword",
              "remoteName": "storeFrontChangePassword",
              "localRoute": "storeFrontChangePassword",
              "skeletonToLoad": "LoadingWithOutShadow",
              "jsonTemplate": [{
                "component": "ChangePasswordFormComponent",
                "renderType": "local"
              }]
            },
            "storeFrontWishList": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "requiredArray": [
                ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
                ["IS_REFUND_CREDIT_ENABLE"]
              ],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontHowToManageCredit",
              "remoteName": "storeFrontHowToManageCredit",
              "localRoute": "storeFrontHowToManageCredit",
              "skeletonToLoad": "Loading",
              "required": ["is_store_credit_enable", "IS_HOW_TO_EARN_CREDIT_DISPLAY", "IS_STORE_CREDIT_PAID"],
              "jsonTemplate": [{
                "component": "HowToEarn",
                "name": "edit",
                "label": "flits.navigation.how_to_earn_credit",
                "type": "button"
              }, {
                "component": "HowToSpent",
                "name": "edit",
                "label": "flits.navigation.how_to_spend_credit",
                "type": "button"
              }, {
                "component": "FromStoreOwner",
                "name": "edit",
                "label": "flits.navigation.from_admin",
                "type": "button"
              }]
            },
            "storeFrontCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": ".\/storeFrontRefundCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontRefundCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_REFUND_CREDIT_ENABLE"]
            }
          }
        },
        "multilanguage": "https:\/\/cdn.getflits.com\/locales\/default\/en.json"
      },
      "flagSvgUrl": "https:\/\/cdn.shopify.com\/s\/files\/1\/0030\/7491\/6461\/files\/flags.svg?v=1646045459"
    },
    "THEME_SETTINGS_172961628528": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172991775088": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_172991807856": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_173407961456": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_174764982640": {
      "status": false,
      "message": "Code is not installed"
    },
    "THEME_SETTINGS_179453624688": {
      "status": false,
      "message": "Code is not installed"
    },
    "WSL_AFTER_BTN_BORDER_COLOR": "#F7F5FA",
    "WSL_AFTER_BTN_COLOR": "#080707",
    "WSL_AFTER_BTN_TEXT": "Added to Wishlist",
    "WSL_AFTER_BTN_TEXT_COLOR": "#F5FAF9",
    "WSL_AFTER_HEART_COLOR": "#FC0303",
    "WSL_BEFORE_BTN_BORDER_COLOR": "#000000",
    "WSL_BEFORE_BTN_COLOR": "#FCFCFC",
    "WSL_BEFORE_BTN_TEXT": "Add to Wishlist",
    "WSL_BEFORE_BTN_TEXT_COLOR": "#F5020F",
    "WSL_BEFORE_HEART_COLOR": "#000000",
    "WSL_BTN_TYPE": "1",
    "WSL_CODE_AUTOMATIC": "0",
    "WSL_COUNT_ENABLE": "0",
    "WSL_DEFAULT_AFTER_HEART_COLOR": "#FC2803",
    "WSL_DEFAULT_BEFORE_HEART_COLOR": "#080708"
  },
  locals: {},
  fromCache: true,
  cacheTime: 5
};
window.flitsObjects.global.locals = JSON.parse("{\"general\":{\"greeting\":\"Hello\", \"cant_add_more_quantity\":\"You have reached the maximum limit. You cannot add any more items.\", \"cart_updated\":\"Some items are no longer available. Your cart has been updated.\", \"getting_customer_details\":\"Getting\/Syncing Customer Details\", \"something_went_wrong\":\"Something went wrong. Please try again.\"}, \"navigation\":{\"profile\":\"My Profile\", \"delivery_address\":\"Delivery Address\", \"my_orders\":\"My Orders\", \"top_ordered_products\":\"Top Ordered Products\", \"wishlist\":\"My Wishlist\", \"recently_viewed_products\":\"Recently Viewed Products\", \"store_credit\":\"My Credits\", \"how_to_manage_credit\":\"How To Manage Credits\", \"how_to_earn_credit\":\"How To Earn\", \"how_to_spend_credit\":\"How To Spend\", \"from_admin\":\"From Store Owner\", \"refer_friend\":\"Refer Friend\", \"change_password\":\"Change Password\", \"log_out\":\"Log Out\"}, \"profile_page\":{\"first_name\":\"First Name\", \"last_name\":\"Last Name\", \"email\":\"Email\", \"contact_number\":\"Contact Number\", \"birthdate\":\"Birthdate\", \"gender\":\"Gender\", \"male\":\"Male\", \"female\":\"Female\", \"other\":\"Other\", \"edit_button\":\"Edit\", \"cancel_button\":\"Cancel\", \"save_button\":\"Save\", \"invalid_email\":\"Email is not valid\", \"invalid_email_domain\":\"Email contains an invalid domain name\", \"email_already_taken\":\"This email is already in use. Please enter a different email address.\", \"invalid_contact_number\":\"Contact number is not valid\", \"contact_number_already_taken\":\"This contact number is already in use. Please enter a different contact number.\", \"save_details\":\"Saving profile details...\", \"saved_successfully\":\"Profile updated successfully\"}, \"address_page\":{\"add_new_address\":\"Add New Address\", \"first_name\":\"First Name\", \"last_name\":\"Last Name\", \"address1\":\"Address Line 1\", \"address2\":\"Address Line 2\", \"company\":\"Company\", \"zip\":\"Postal\/Zip Code\", \"contact_number\":\"Contact Number\", \"city\":\"City\", \"country\":\"Country\", \"province\":\"Province\", \"mark_as_default_checkbox\":\"Mark as Default Address\", \"cancel_button\":\"Cancel\", \"save_button\":\"Add Address\", \"first_name_is_long\":\"First name is too long (maximum is 255 characters)\", \"last_name_is_long\":\"Last name is too long (maximum is 255 characters)\", \"address1_is_long\":\"Address Line 1 is too long (maximum is 255 characters)\", \"address2_is_long\":\"Address Line 2 is too long (maximum is 255 characters)\", \"company_name_is_long\":\"Company name is too long (maximum is 255 characters)\", \"city_is_long\":\"City is too long (maximum is 255 characters)\", \"zip_is_long\":\"Zip is too long (maximum is 255 characters)\", \"invalid_contact_number\":\"Contact number is not valid\", \"address_already_taken\":\"This address already exists.\", \"country_invalid\":\"Country is not valid\", \"adding_new_address\":\"Adding New Address...\", \"address_added_successfully\":\"Delivery address added successfully\", \"default_address_label\":\"Default\", \"mark_as_default_button\":\"Mark as Default\", \"edit_button\":\"Edit\", \"edit_address\":\"Edit Address\", \"updating_address\":\"Updating Address...\", \"address_updated_successfully\":\"Delivery address updated successfully\", \"delete_button\":\"Delete\", \"delete_confirmation_message\":\"Are you sure you want to delete this address?\", \"deleting_address\":\"Deleting Address...\", \"address_deleted_successfully\":\"Address deleted successfully\"}, \"order_page\":{\"blank_screen_line_1_html\":\"You haven\u0026#39;t placed any orders yet.\u0026lt;br\u0026gt;We can\u0026#39;t wait to have you as a customer.\", \"blank_screen_line_2_html\":\"Take a look at our products here\", \"order_date\":\"Date\", \"order_date_format\":\"%B %d %Y\", \"order_number\":\"Order\", \"total_items\":\"Total Items\", \"payment_status\":\"Payment\", \"show_order_details\":\"Show Order Details\", \"hide_order_details\":\"Hide Order Details\", \"reorder\":\"Re-order\", \"product_unavailable\":\"Unavailable\", \"sold_out\":\"Sold Out\", \"some_products_unavailable\":\"Some of the products are unavailable\", \"one_product_unavailable\":\"One of the products is unavailable\", \"some_products_sold_out\":\"Some of the products are sold out\", \"one_product_sold_out\":\"One of the products is sold out.\", \"cost_breakup\":\"Cost Breakup\", \"subtotal\":\"Sub Total\", \"discount_code\":\"Discount\", \"shipping_and_handling\":\"Shipping Cost\", \"grand_total\":\"Grand Total\", \"shipping_address\":\"Shipping Address\", \"billing_address\":\"Billing Address\", \"cancel_at\":\"Cancelled at\", \"fulfillment_status\":\"Fulfillment Status\", \"payment_type\":\"Payment Type\", \"tracking_number\":\"Tracking Number\", \"track_your_order\":\"Track Your Order Here!\", \"download_invoice\":\"Download Invoice\", \"order_cancelled\":\"Cancelled\", \"return_order\":\"Return Order\"}, \"order_contact_us\":{\"contact_us_button\":\"Contact Us\", \"form_title\":\"Contact Us\", \"header_text\":\"Your satisfaction is our top priority\", \"customer_name_label\":\"Customer Name\", \"first_name_label\":\"First Name\", \"first_name_placeholder\":\"James\", \"last_name_label\":\"Last Name\", \"last_name_placeholder\":\"Grey\", \"email_label\":\"Email\", \"email_placeholder\":\"abc@xyz.com\", \"email_required_warning\":\"Email is required\", \"invalid_email_warning\":\"Please enter a valid email address\", \"contact_number_label\":\"Contact Number\", \"contact_number_placeholder\":\"1234567890\", \"invalid_contact_number_warning\":\"Please enter a valid contact number\", \"reason_label\":\"Reason to Contact\", \"select_any_reason\":\"Select a Reason\", \"order_cancel_related_reason\":\"Cancel Order\", \"order_and_shipping_related_reason\":\"Order\/Shipping\", \"return_and_exchange_related_reason\":\"Return\/Exchange\", \"product_related_reason\":\"Product\", \"price_related_reason\":\"Price\", \"other_reason\":\"Other\", \"reason_required_warning\":\"Please select a reason\", \"message_label\":\"Message\", \"message_placeholder\":\"Hello Support Team, when can I expect my order?\", \"message_required_warning\":\"Message is required\", \"attachment_link_label\":\"Attachment Link\", \"attachment_link_placeholder\":\"You can upload files on your drive and paste the link here.\", \"invalid_attachment_link_warning\":\"Please enter a valid attachment link\", \"order_number_label\":\"Order Number\", \"order_name_label\":\"Order Name\", \"order_date_label\":\"Order Date\", \"order_total_price_label\":\"Order Total Price\", \"order_fulfillment_status_label\":\"Order Fulfillment Status\", \"order_payment_status_label\":\"Order Payment Status\", \"order_link_label\":\"View Order in Shopify\", \"customer_link_label\":\"View Customer in Shopify\", \"submit_button\":\"Submit\", \"success_button\":\"OK\", \"success_message_line_1\":\"Your request has been submitted.\", \"success_message_line_2\":\"You will receive a reply in the email address which you have submitted in the query form.\", \"success_message_line_3\":\"Thank you for contacting us.\", \"already_contacted_message\":\"You have contacted us last on {{ date_time }}\"}, \"top_ordered_products_page\":{\"blank_screen_line_1_html\":\"There are no top ordered products to display.\u0026lt;br\u0026gt;We are pretty sure that a few products\u0026lt;br\u0026gt;from our fantastic collection\u0026lt;br\u0026gt;will make it to your top products.\", \"search_placeholder\":\"Search product here\", \"search_product_not_found\":\"No product\/s found\", \"filter\":\"Filter\", \"none\":\"None\", \"sort_by_price_low_to_high\":\"Sort by price (Low to High)\", \"sort_by_price_high_to_low\":\"Sort by price (High to Low)\", \"number_of_order_low_to_high\":\"Number of order (Low to High)\", \"number_of_order_high_to_low\":\"Number of order (High to Low)\", \"last_30_days\":\"Last 30 days\", \"last_60_days\":\"Last 60 days\", \"number_of_order\":\"Total quantity ordered till now\"}, \"wishlisted_product_page\":{\"blank_screen_line_1_html\":\"Your wish is our command but\u0026lt;br\u0026gt;you haven’t wishlisted any products.\", \"blank_screen_line_2_html\":\"You can wishlist products\u0026lt;br\u0026gt;and buy them later\", \"add_to_wishlist_button\":\"Add to Wishlist\", \"remove_from_wishlist_button\":\"Added to Wishlist\", \"product_added_to_wishlist\":\"Product has been added to your wishlist\", \"product_remove_from_wishlist\":\"Product removed from your wishlist\", \"what_is_your_email\":\"What\u0026#39;s Your Email?\", \"email_placeholder\":\"Email address\", \"create_account_through\":\"Please create account\/login through {{ customer_email }} email\", \"view_your_wishlist_message\":\"You can view your wishlist by creating account or logging-in an existing account.\", \"login\":\"Login\", \"register\":\"Register\"}, \"recently_viewed_product_page\":{\"blank_screen_line_1_html\":\"Looks like you haven’t checked out\u0026lt;br\u0026gt;any of our products recently.\u0026lt;br\u0026gt;We have a vast collection of quality products.\", \"blank_screen_line_2_html\":\"So why wait? Check out our products.\"}, \"credit_page\":{\"blank_screen_line_1_html\":\"You are missing out on taking advantage of\u0026lt;br\u0026gt;our Reward Program.\", \"blank_screen_line_2_html\":\"So why wait? Start shopping our products to start earning rewards.\", \"earned_credit\":\"Earned Credit\", \"spent_credit\":\"Spent Credit\", \"current_credit\":\"Current Credit\", \"credit_activity\":\"Recent Transactions\", \"time\":\"Date\", \"reason_for_credit\":\"Credit Reason\", \"credit\":\"CR\/DR\", \"registration_credit\":\"Registration Credit\", \"subscribe_credit\":\"Subscribe Credit\", \"first_order_credit\":\"First Order Credit\", \"spent_in_order\":\"Spent in {{ order_number }} order\", \"spent_in_order_through_pos\":\"Spent in {{ order_number }} order through POS\", \"loyal_customer\":\"Loyal Customer\", \"repeat_customer\":\"Repeat Customer\", \"fault_in_product\":\"Fault in product\", \"canceled_order_first_time_by_customer\":\"Canceled order first time by customer\", \"delay_in_delivery_time\":\"Delay in delivery time\"}, \"how_to_earn_credit_page\":{\"no_rule_found\":\"The store has not set up any rules yet\", \"register_credit_rule_title\":\"Register credit\", \"register_credit_rule_description\":\"Register and get {{ credit }} credit.\", \"subscribe_credit_rule_title\":\"Subscriber credit\", \"subscribe_credit_rule_description\":\"Subscribe and get {{ credit }} credit.\", \"specific_order_credit_rule_title\":\"Credit on specific order\", \"specific_order_credit_rule_description\":\"Earn {{ credit }} credit on your order number {{ order_count }}\", \"specific_order_and_next_orders_credit_rule_title\":\"Credit on order number {{ order_count }} and next orders\", \"specific_order_and_next_orders_credit_rule_description\":\"You can earn {{ credit }} credit on order number {{ order_count }} and next orders {{ order_count+1 }}, {{ order_count+2 }}..... {{ order_count+n }}\", \"birthdate_credit_rule_title\":\"Birthday credit*\", \"birthdate_credit_rule_description_1\":\"Share your birthdate with us to get {{ credit }} credit on your birthday.\", \"birthdate_credit_rule_description_2\":\"{{ days }} day\/s left for a birthday reward of {{ credit }} credit.\", \"birthdate_credit_rule_description_3\":\"*You can avail this credit only once in a year.\", \"monthly_credit_rule_title\":\"Monthly credit\", \"monthly_credit_rule_description\":\"You will get {{ credit }} credit on {{ date }} of every month.\", \"special_day_credit_rule_title\":\"Bonus day credit\", \"special_day_credit_rule_description\":\"Get special day credit on {{ date }}\", \"product_review_credit_rule_title\":\"Product review credit\", \"product_review_credit_rule_description\":\"Write a product review and get {{ credit }} credit.\", \"product_tag_credit_rule_title\":\"Credit for specific product collection\", \"product_tag_credit_rule_description\":\"Buy product\/s with (any tag) {{ tag }} and get {{ credit }} credit.\", \"wishlisted_product_credit_rule_title\":\"Wishlisted product credit\", \"wishlisted_product_credit_rule_description\":\"You can earn {{ credit }} credit when you add product\/s in wishlist.\"}, \"how_to_spend_credit_page\":{\"spend_credit_on_cart_rule_title\":\"Spend on cart\", \"spend_credit_on_cart_rule_description_1\":\"Your cart value is between {{ min_cart_value }}-{{ max_cart_value }}. Congratulations you are eligible to use {{ credit }} credit.\", \"spend_credit_on_cart_rule_description_2\":\"Your cart value is between {{ min_cart_value }}-{{ max_cart_value }}. Congratulations you are eligible to use {{ credit }} of cart value as credit.\", \"spend_credit_on_cart_rule_description_3\":\"Your cart value is {{ min_cart_value }} (or more). Congratulations you can use {{ credit }} credit.\", \"spend_credit_on_cart_rule_description_4\":\"Your cart value is {{ min_cart_value }} (or more). Congratulations you are eligible to use {{ credit }} of cart value as credit.\", \"spend_credit_on_shipping_rule_title\":\"Free Shipping\", \"spend_credit_on_shipping_rule_description\":\"You can use your credit on shipping charges.\"}, \"refer_friend_page\":{\"popup_greetings\":\"Welcome Newcomer\", \"popup_message\":\"You were referred by {{ inviter_name }}. Please help us in giving you credit by signing up here.\", \"refer_program_how_it_work_title\":\"How it works\", \"refer_program_how_it_work_step_1\":\"Share your referral link\", \"refer_program_how_it_work_step_2\":\"When your friend signs-up\", \"refer_program_how_it_work_step_3\":\"You get rewarded\", \"copy\":\"Copy\", \"referral_link_copied\":\"Link Copied\", \"facebook_share\":\"Share\", \"whatsapp_share\":\"Share\", \"share\":\"Share\", \"referral_program_invitation_message\":\"You can earn credit for creating an account with {{ shop_name }}. Use this link and get rewarded : {{ link }}\", \"blank_screen_line_1_html\":\"You have no referrals so far.\u0026lt;br\u0026gt;You can earn rewards by referring our store to your friends.\u0026lt;br\u0026gt;Copy the above link and share it with your friends or\", \"blank_screen_line_2_html\":\"Share the link directly via WhatsApp and Facebook.\", \"referrer_credit_rule_title\":\"Referral Program\", \"referrer_credit_rule_description\":\"Invite your friends and get {{ credit }} credit when they sign up.\", \"referee_credit_rule_title\":\"Referral Program\", \"referee_credit_rule_description\":\"When your friends accept the invitation, they will get {{ credit }} credit.\", \"credit_on_number_of_referrals_rule_title\":\"Credit on numbers of referrals\", \"credit_on_number_of_referrals_rule_description\":\"When you reach {{ referral_count }} referrals you get {{ credit }} credit.\", \"referrals_specific_order_credit_rule_title\":\"Credit on specific order by referee\", \"referrals_specific_order_credit_rule_description\":\"You can earn {{ credit }} credit on your referee\u0026#39;s order number {{ order_count }}.\", \"referrals_specific_order_and_next_orders_credit_rule_title\":\"Credit on referee\u0026#39;s order number {{ order_count }} and next orders \", \"referrals_specific_order_and_next_orders_credit_rule_description\":\"You can earn {{ credit }} credit on referee\u0026#39;s order number {{ order_count }} and next orders {{ order_count+1 }}, {{ order_count+2 }}... {{ order_count+n }}\", \"credit_on_referrals_total_spent_amount_rule_title\":\"Credit after referral\u0026#39;s total spent amount\", \"credit_on_referrals_total_spent_amount_rule_description\":\"You can earn {{ credit }} credit when your referral\u0026#39;s total spent amount is {{ total_spent_amount }} or more.\", \"credit_activity\":\"Referral History\", \"earned_credit\":\"Earned Credit\", \"referral_customer_name\":\"Referred To\", \"referral_customer_email\":\"Referral\u0026#39;s Email\", \"credit\":\"Credit\", \"time\":\"Referred Since\", \"you_are_referred_by\":\"Referred by\", \"customer_deleted\":\"Customer Deleted\"}, \"from_admin_page\":{\"header_line_html\":\"From Store Owner\"}, \"update_password_page\":{\"new_password\":\"New Password\", \"new_password_placeholder\":\"Enter New Password\", \"confirm_new_password\":\"Confirm New Password\", \"confirm_password_placeholder\":\"Confirm New Password\", \"update_password_button\":\"Update Password\", \"password_empty_message\":\"The password is empty\", \"password_hint_message\":\"Password must be between 6 to 40 characters\", \"password_not_match\":\"Passwords didn\u0026#39;t match. Try again.\", \"updating_password\":\"Updating password...\", \"password_updated_successfully\":\"Your password for account {{ email }} has been successfully updated\"}, \"buttons\":{\"back\":\"Back\", \"shop_now\":\"View Products\", \"add_to_cart\":\"Add to Cart\", \"sold_out\":\"Sold Out\", \"order_track\":\"Track Order\", \"product_unavailable_text\":\"Currently Unavailable\"}, \"months\":{\"january\":\"January\", \"february\":\"February\", \"march\":\"March\", \"april\":\"April\", \"may\":\"May\", \"june\":\"June\", \"july\":\"July\", \"august\":\"August\", \"september\":\"September\", \"october\":\"October\", \"november\":\"November\", \"december\":\"December\"}, \"social_login_page\":{\"facebook\":\"Facebook\", \"google\":\"Google\", \"twitter\":\"Twitter\", \"amazon\":\"Amazon\", \"loading_message\":\"Logging you in\"}, \"cart_page\":{\"adding_items_to_cart\":\"Adding items to cart...\", \"select_credit_option\":\"Select option to use store credit\", \"credit_cart_percentage\":\"You can use {{ credit }} credit out of {{ total_credit }}.\", \"free_shipping\":\"You can get free shipping\", \"applying_credit_message\":\"Applying credit please wait\", \"credit_applied\":\"Store Credit Applied\"}, \"invoice\":{\"invoice_title\":\"INVOICE\", \"invoice_no\":\"Invoice\", \"payment_method\":\"Payment Method\", \"order_no\":\"Order\", \"issue_date\":\"Issue Date\", \"order_date\":\"Order Date\", \"billing_address_title\":\"Bill To\", \"no_billing_address\":\"No billing address provided\", \"shipping_address_title\":\"Ship To\", \"no_shipping_address\":\"No shipping address provided\", \"money_format\":\"{{ symbol }}{{ amount }}\", \"item_title\":\"Item\", \"item_quantity\":\"Quantity\", \"item_price\":\"Unit Price\", \"item_discount\":\"Discount\", \"item_tax_rate\":\"Tax Rate\", \"item_tax_type\":\"Tax Type\", \"item_tax_amount\":\"Tax Amount\", \"item_total\":\"Total\", \"subtotal\":\"Sub Total\", \"shipping_discount\":\"Shipping Discount\", \"shipping_cost\":\"Shipping Cost\", \"tax\":\"Tax\", \"grand_total\":\"Grand Total\", \"you_saved\":\"You Saved\", \"amount_in_words\":\"Amount in words\", \"for_store_name\":\"For {{ store_name }}\", \"authorised_signatory\":\"Authorised Signatory\", \"greeting_line1\":\"Thank You\", \"greeting_line2\":\"We hope you enjoy your purchase.\", \"email\":\"Email\", \"phone\":\"Phone no\", \"fax\":\"Fax\", \"page_no\":\"Page {{ current_page }} of {{ total_page }}\", \"zero\":\"Zero\", \"one\":\"One\", \"two\":\"Two\", \"three\":\"Three\", \"four\":\"Four\", \"five\":\"Five\", \"six\":\"Six\", \"seven\":\"Seven\", \"eight\":\"Eight\", \"nine\":\"Nine\", \"ten\":\"Ten\", \"eleven\":\"Eleven\", \"twelve\":\"Twelve\", \"thirteen\":\"Thirteen\", \"fourteen\":\"Fourteen\", \"fifteen\":\"Fifteen\", \"sixteen\":\"Sixteen\", \"seventeen\":\"Seventeen\", \"eighteen\":\"Eighteen\", \"nineteen\":\"Nineteen\", \"twenty\":\"Twenty\", \"thirty\":\"Thirty\", \"forty\":\"Forty\", \"fifty\":\"Fifty\", \"sixty\":\"Sixty\", \"seventy\":\"Seventy\", \"eighty\":\"Eighty\", \"ninety\":\"Ninety\", \"hundred\":\"Hundred\", \"thousand\":\"Thousand\", \"million\":\"Million\", \"billion\":\"Billion\", \"trillion\":\"Trillion\", \"zero_only\":\"Zero only\", \"only\":\"only\", \"and\":\"and\", \"invoice_is_generating\":\"Generating invoice...\", \"saving_invoice\":\"Saving invoice\"}, \"order_status_page\":{\"total_earned_credit_on_order\":\"Congratulations! You have earned {{ credit }} credit on this purchase.\", \"earned_credit_on_order_number\":\"You earned {{ credit }} credit for this order.\", \"earned_credit_on_product_tag\":\"You earned {{ credit }} credit by purchasing from {{ tag }} collection.\", \"total_credit_balance\":\"Your total credit balance is {{ credit }}.\", \"shop_more_to_earn_credit_html\":\"Want to earn more credits and save big bucks? Then dive into our collection and shop more!\", \"shop_more_to_spent_credit_html\":\"Still have credits left? Shop more to utilise them all.\"}}");
window.flitsObjects.accountPage = {};
window.flitsObjects.StoreCreditCartPage = {
  isCodeAutomatic: 1
};
window.flitsObjects.allCssJs = {
  flitsCss: {
    name: "flitsCss",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits.css?v=126593983809194886371776948164",
    requestPageType: ["all"],
    relatedTo: "GENERAL",
    loadBasedOnMetafields: [],
  },
  accountCss: {
    name: "accountCss",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_account.css?v=57972587006173696251776948164",
    requestPageType: ["customers/account"],
    relatedTo: "ACCOUNT",
    loadBasedOnMetafields: [],
  },
  customCss: {
    name: "customCss",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_custom.css?v=123192988570523001851776948164",
    requestPageType: ["all"],
    relatedTo: "CUSTOM",
    loadBasedOnMetafields: [],
  },
  libphoneNumberJs: {
    name: "libphoneNumberJs",
    url: "https://unpkg.com/libphonenumber-js@1.9.10/bundle/libphonenumber-max.js",
    requestPageType: ["customers/account"],
    relatedTo: "PHONE NUMBER",
    loadBasedOnMetafields: [],
  },
  tooltipPopperJs: {
    name: "tooltipPopperJs",
    url: "https://unpkg.com/@popperjs/core@2.5.3/dist/umd/popper.min.js",
    requestPageType: ["collection", "product", "customers/account"],
    relatedTo: "TOOLTIP",
    loadBasedOnMetafields: [],
  },
  tooltipTippyJs: {
    name: "tooltipTippyJs",
    url: "https://unpkg.com/tippy.js@6.2.7/dist/tippy-bundle.umd.min.js",
    requestPageType: ["collection", "product", "customers/account"],
    relatedTo: "TOOLTIP",
    loadBasedOnMetafields: [],
  },
  customJs: {
    name: "customJs",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_custom.js?v=140435415037100550031776948164",
    requestPageType: ["all"],
    relatedTo: "CUSTOM",
    loadBasedOnMetafields: [],
    status: 1,
  },
  accountJs: {
    name: "accountJs",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_account.js?v=59437766656328340471776948164",
    requestPageType: ["customers/account"],
    relatedTo: "ACCOUNT",
    loadBasedOnMetafields: [],
  },
  wishlistJs: {
    name: "wishlistJs",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_wishlist.js?v=150458673456100384761776948164",
    requestPageType: ["collection", "product"],
    relatedTo: "WISHLIST",
    loadBasedOnMetafields: ["IS_WISHLIST_PAID", "IS_WISHLIST_ENABLE"],
  },
  socialLoginJs: {
    name: "socialLoginJs",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_social_login.js?v=133130433060360637361776948164",
    requestPageType: ["customers/login", "customers/register"],
    relatedTo: "SOCIAL_LOGIN",
    loadBasedOnMetafields: ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"],
  },
  cartJs: {
    name: "cartJs",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_cart.js?v=126903365578287519751776948164",
    requestPageType: ["cart"],
    relatedTo: "STORE_CREDIT",
    loadBasedOnMetafields: ["IS_STORE_CREDIT_PAID", "is_store_credit_enable", ["CREDIT_DISPLAY_ON", "==", "cart"],
      ["customer_id", '!=', '-1']
    ],
  },
  referFriendJs: {
    name: "referFriendJs",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_refer_friend.js?v=50134068560046703251776948164",
    requestPageType: ["customers/register"],
    relatedTo: "STORE_CREDIT",
    loadBasedOnMetafields: ["IS_STORE_CREDIT_PAID", "is_store_credit_enable", "IS_REFER_PROGRAM_ON"],
  },
  customFieldsJs: {
    name: "customFieldsJs",
    url: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_custom_fields.js?v=37086095402425291401776948164",
    requestPageType: ["all"],
    relatedTo: "CUSTOM_FIELDS",
    loadBasedOnMetafields: ["IS_CUSTOM_FIELDS_ENABLE"],
  },
};
window.flitsObjects.storeData = {
  request: {
    host: "www.headphonezone.in",
    page_type: "index",
    path: "/",
  },
  template: {
    directory: "",
    name: "index",
    suffix: "",
  },
  theme: {
    id: "189907566960",
    name: "Speedify - Impact - New PDP + Home + NAV 2026",
  },
  jsonSettingsPath: "//www.headphonezone.in/cdn/shop/t/516/assets/flits_template_settings.json?v=63680415350965297461776948164",
  product: null,
  cart: {
    "note": null,
    "attributes": {},
    "original_total_price": 0,
    "total_price": 0,
    "total_discount": 0,
    "total_weight": 0.0,
    "item_count": 0,
    "items": [],
    "requires_shipping": false,
    "currency": "INR",
    "items_subtotal_price": 0,
    "cart_level_discount_applications": [],
    "checkout_charge_amount": 0
  },
  shop_currency: 'INR',
  money_format: '₹ {{amount_no_decimals}}',
  customer_id: '',
  customer_email: '',
  customer_accepts_marketing: '',
  customer_orders_count: ''
};
window.flitsObjects.global.Metafields.customer_id = -1;
window.flitsObjects.storeData.customer_id = -1;