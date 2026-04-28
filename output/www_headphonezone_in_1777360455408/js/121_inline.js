let FlitsLocalStorage = localStorage.getItem("flits")
if (!FlitsLocalStorage) {
  localStorage.setItem("flits", JSON.stringify({
    "FlitsCodeLoadTime": new Date().getTime()
  }))
} else {
  localStorage.setItem("flits", JSON.stringify({
    ...JSON.parse(FlitsLocalStorage),
    "FlitsCodeLoadTime": new Date().getTime()
  }))
}

let FlitsRemoveFirstClickOnReload = localStorage.getItem("flits")

if (FlitsRemoveFirstClickOnReload) {
  FlitsRemoveFirstClickOnReload = JSON.parse(FlitsRemoveFirstClickOnReload)
  if (FlitsRemoveFirstClickOnReload.FlitsFirstClick) {
    delete FlitsRemoveFirstClickOnReload["FlitsFirstClick"]
    localStorage.setItem("flits", JSON.stringify(FlitsRemoveFirstClickOnReload))
  }
}

window.addEventListener("click", function() {
  const FlitsFirstClickedOnBrowser = new CustomEvent("FirstClickedOnBrowser");
  window.dispatchEvent(FlitsFirstClickedOnBrowser);
});
window.flitsThemeAppExtensionObjects = {
  customerHash: '',
  customerTags: [''],
  customerTagsArray: [],
  shop_name: 'Headphone Zone',
  shop_domain: "www.headphonezone.in",
  token: 'a6db93201905bb1a89ec9f057da7a736',
  base_url: '/' + 'apps' + '/' + 'flits' + '/' + 'api' + '/' + '1' + '/' + '19326',
  proxy_name: 'flits',
  app_id: 1,
  shop_id: 19326,
  shop_token: 'a6db93201905bb1a89ec9f057da7a736',
  chandle: 'flits_products_handle',
  recent_handle: "flits_recently_products",
  cemail: "flits_customer_email",
  shop_currency: 'INR',
  shopCountryCode: 'IN',
  shopCountryName: 'India',
  defaultCountry: 'US',
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": [],
              "required": ["IS_ACCOUNT_PAGE_ENABLE"]
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCreditUsage",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              "jsonTemplate": []
            },
            "storeFrontSocialLogin": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontNavigation",
              "remoteName": "storeFrontNavigation",
              "localRoute": "storeFrontNavigation",
              "skeletonToLoad": "SkeletonNavigation",
              "states": []
            },
            "storeFrontRegisterPageCustomFields": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRegisterPageCustomFields",
              "remoteName": "storeFrontMyProfile",
              "localRoute": "storeFrontMyProfile",
              "required": ["IS_CUSTOM_FIELDS_ENABLE"]
            },
            "storeFrontMyProfile": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontMyProfile",
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
              "moduleToLoad": "&#46;&#47;storeFrontChangePassword",
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
              "moduleToLoad": "&#46;&#47;storeFrontWishList",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishList",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListCollection": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListCollection",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListCollection",
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontWishListPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontWishListPage",
              "remoteName": "storeFrontWishList",
              "localRoute": "storeFrontWishListPage",
              "skeletonToLoad": "Loading",
              "jsonTemplate": [],
              "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
            },
            "storeFrontCreditUsage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontCreditUsage",
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
              "moduleToLoad": "&#46;&#47;storeFrontSocialLogin",
              "remoteName": "storeFrontSocialLogin",
              "localRoute": "storeFrontSocialLogin",
              "jsonTemplate": [],
              "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
            },
            "storeFrontReferFriendRegisterPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriendRegisterPage",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriendRegisterPage",
              "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontReferFriend": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontReferFriend",
              "remoteName": "storeFrontReferFriend",
              "localRoute": "storeFrontReferFriend",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
            },
            "storeFrontHowToManageCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontHowToManageCredit",
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
              "moduleToLoad": "&#46;&#47;storeFrontCredit",
              "remoteName": "storeFrontCredit",
              "localRoute": "storeFrontCredit",
              "skeletonToLoad": "Loading",
              "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
            },
            "storeFrontOrder": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontOrder",
              "remoteName": "storeFrontOrder",
              "localRoute": "storeFrontOrder",
              "skeletonToLoad": "Loading"
            },
            "storeFrontDeliveryAddress": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontDeliveryAddress",
              "remoteName": "storeFrontDeliveryAddress",
              "localRoute": "storeFrontDeliveryAddress",
              "skeletonToLoad": "LoadingWithOutShadow"
            },
            "storeFrontRecentlyViewedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProducts",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProducts",
              "skeletonToLoad": "Loading",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontRecentlyViewedProductPage": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRecentlyViewedProductPage",
              "remoteName": "storeFrontRecentlyViewedProducts",
              "localRoute": "storeFrontRecentlyViewedProductPage",
              "required": ["is_recently_view_enable"]
            },
            "storeFrontTopOrderedProducts": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontTopOrderedProducts",
              "remoteName": "storeFrontTopOrderedProducts",
              "localRoute": "storeFrontTopOrderedProducts",
              "skeletonToLoad": "LoadingWithOutShadow",
              "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
            },
            "storeFrontRefundCredit": {
              "remoteUrl": "defaultURL",
              "moduleToLoad": "&#46;&#47;storeFrontRefundCredit",
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
  scPaid: false,
  scEnable: false,
  scReferOn: false,
  customerExist: false,
  locals: {},
  fromCache: true,
  cacheTime: 5,
  customer: {
    orderSize: "",
    orderCount: "",
    orderPerPageItem: "3",
    "name": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "contact": "",
    "customer_accept_marketing": "",
    "gender": "",
    "birthday": "",
    "customer_id": "-1",
    "order_count": "",
    "shop_id": "19326",
    "customer_hash": "",
    "shop_token": "a6db93201905bb1a89ec9f057da7a736",
    "default_address": null,
    "address_count": "",
    "paginate": "25"
  },
  orderCart: [],
  defaultEnJson: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_en.json",
  defaultLanguageJson: {
    "pt-PT": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_pt_PT.json",
    "pt-BR": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_pt_Br.json",
    "zh-CN": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_zh_CN.json",
    "zh-TW": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_zh_TW.json",
    "en": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_en.json",
    "pt": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_pt_Br.json",
    "zh": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_zh_CN.json",
    "es": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_es.json",
    "de": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_de.json",
    "fr": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_MultiLanguage_fr.json"
  },
  ManageCreditRuleIcons: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/managecredittabIcon.json?v=1718347029",
  UnoDuoIconsUrl: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Svgs.json?v=1731309159",
  iconUrl: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/Flits_icons.json?v=1734670873",
  CountryListUrl: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/country_list.json?v=1718347029",
  product: {
    "product_id": "",
    "product_handle": "",
    "product_image": "<!-- Liquid error (shopify://apps/flits/blocks/flits/d5eeb0f1-bc12-4372-af4d-40ca0d3ad847 line 221): invalid url input -->",
    "product_title": "",
    "wishlistCount": "0"
  },
  request: {
    design_mode: false,
    host: "www.headphonezone.in",
    locale: {
      "shop_locale": {
        "locale": "en",
        "enabled": true,
        "primary": true,
        "published": true
      }
    },
    origin: "https://www.headphonezone.in",
    page_type: "index",
    path: "/",
    visual_preview_mode: false,
  },
  languageData: async function(url) {
    let langFullCode = document
      ?.getElementsByTagName("html")[0]
      ?.getAttribute("lang");
    let lanPrefix = langFullCode?.split("-")[0];
    let themeId = window?.Shopify?.theme?.id;

    const endpoint = url?.includes("default") ?
      window?.flitsThemeAppExtensionObjects?.defaultLanguageJson[
        langFullCode
      ] ??
      window?.flitsThemeAppExtensionObjects?.defaultLanguageJson[lanPrefix] ??
      window?.flitsThemeAppExtensionObjects?.defaultLanguageJson["en"] ?? window?.flitsThemeAppExtensionObjects?.defaultEnJson :
      url;

    let jsonData =
      window?.flitsThemeAppExtensionObjects?.Metafields[
        `FLITS_EXTENSION_MULTILANGUAGE_CONTENT_${langFullCode}`
      ] ??
      window?.flitsThemeAppExtensionObjects?.Metafields[
        `FLITS_EXTENSION_MULTILANGUAGE_CONTENT_${lanPrefix}`
      ] ??
      window?.flitsThemeAppExtensionObjects?.Metafields[
        `MULTILANGUAGE_CONTENT_${lanPrefix}_${themeId}`
      ];

    if (jsonData) {
      return {
        status: true,
        data: jsonData,
        endpoint: endpoint,
      };
    }

    jsonData =
      window?.flitsThemeAppExtensionObjects?.Metafields[
        `FLITS_EXTENSION_MULTILANGUAGE_CONTENT_en`
      ] ??
      window?.flitsThemeAppExtensionObjects?.Metafields[
        `MULTILANGUAGE_CONTENT_en_${themeId}`
      ];

    if (
      !(
        window?.flitsThemeAppExtensionObjects?.defaultLanguageJson[
          langFullCode
        ] ??
        window?.flitsThemeAppExtensionObjects?.defaultLanguageJson[lanPrefix]
      ) &&
      jsonData
    ) {
      return {
        status: true,
        data: jsonData,
        endpoint: endpoint,
      };
    }

    return {
      status: false,
      endpoint: endpoint,
    };
  },
  addCommonEndpoint: function() {
    window.commonEndpoint = {
      cart: !window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.primary ? `${window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.locale?.split("-")?.[0]}` + "/" + "cart" : "cart",
      logout: !window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.primary ? "/" + `${window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.locale?.split("-")?.[0]}` + "/" + "account" + "/" + "logout" : "/" + "account" + "/" + "logout",
      product: !window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.primary ? "/" + `${window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.locale?.split("-")?.[0]}` : "",
      collection: !window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.primary ? "/" + `${window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.locale?.split("-")?.[0]}` : "",
      register: !window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.primary ? "/" + `${window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.locale?.split("-")?.[0]}` + "/" + "account" + "/" + "register" : "/" + "account" + "/" + "register",
      login: !window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.primary ? "/" + `${window?.flitsThemeAppExtensionObjects?.request?.locale?.shop_locale?.locale?.split("-")?.[0]}` + "/" + "account" + "/" + "login" : "/" + "account" + "/" + "login"
    }
  },
  template: {
    directory: "",
    name: "index",
    suffix: "",
  },
  theme: JSON.parse(JSON.stringify(window.Shopify.theme)),
  // encoded routes due to SEO problem (FA-5417)
  routes: "CiAgewogICAgImFjY291bnRfbG9naW5fdXJsIjogImh0dHBzOi8vYWNjb3VudC5oZWFkcGhvbmV6b25lLmluP2xvY2FsZT1lbiZyZWdpb25fY291bnRyeT1JTiZidXllcl9mbGFncz1leUpoYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSm9aV0ZrY0dodmJtVXRlbTl1WlM1dGVYTm9iM0JwWm5rdVkyOXRJaXdpWm14aFozTWlPbHRkTENKbGVIQWlPakUzTnpjNU5qVXlORFVzSW01aVppSTZNVGMzTnpNMk1EUTBOWDAuQU92T00yLThObl9sTWM1WkFOVVpvWlhKSC1tYVA2bGt0aEJ5SVJTU3FyWSIsCiAgICAicm9vdF91cmwiOiAiLyIsCiAgICAiYWNjb3VudF9hZGRyZXNzZXNfdXJsIjogIi9hY2NvdW50L2FkZHJlc3NlcyIsCiAgICAiYWNjb3VudF9sb2dvdXRfdXJsIjogIi9hY2NvdW50L2xvZ291dCIsCiAgICAiYWNjb3VudF9yZWNvdmVyX3VybCI6ICIvYWNjb3VudC9yZWNvdmVyIiwKICAgICJhY2NvdW50X3JlZ2lzdGVyX3VybCI6ICJodHRwczovL2FjY291bnQuaGVhZHBob25lem9uZS5pbj9sb2NhbGU9ZW4mcmVnaW9uX2NvdW50cnk9SU4mYnV5ZXJfZmxhZ3M9ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcGMzTWlPaUpvWldGa2NHaHZibVV0ZW05dVpTNXRlWE5vYjNCcFpua3VZMjl0SWl3aVpteGhaM01pT2x0ZExDSmxlSEFpT2pFM056YzVOalV5TkRVc0ltNWlaaUk2TVRjM056TTJNRFEwTlgwLkFPdk9NMi04Tm5fbE1jNVpBTlVab1pYSkgtbWFQNmxrdGhCeUlSU1NxclkiLAogICAgImFjY291bnRfdXJsIjogIi9hY2NvdW50IiwKICAgICJhbGxfcHJvZHVjdHNfY29sbGVjdGlvbl91cmwiOiAiL2NvbGxlY3Rpb25zL2FsbCIsCiAgICAiY2FydF9hZGRfdXJsIjogIi9jYXJ0L2FkZCIsCiAgICAiY2FydF9jaGFuZ2VfdXJsIjogIi9jYXJ0L2NoYW5nZSIsCiAgICAiY2FydF9jbGVhcl91cmwiOiAiL2NhcnQvY2xlYXIiLAogICAgImNhcnRfdXBkYXRlX3VybCI6ICIvY2FydC91cGRhdGUiLAogICAgImNhcnRfdXJsIjogIi9jYXJ0IiwKICAgICJjb2xsZWN0aW9uc191cmwiOiAiL2NvbGxlY3Rpb25zIiwKICAgICJwcmVkaWN0aXZlX3NlYXJjaF91cmwiOiAiL3NlYXJjaC9zdWdnZXN0IiwKICAgICJwcm9kdWN0X3JlY29tbWVuZGF0aW9uc191cmwiOiAiL3JlY29tbWVuZGF0aW9ucy9wcm9kdWN0cyIsCiAgICAic2VhcmNoX3VybCI6ICIvc2VhcmNoIiwKICAgICJzdG9yZWZyb250X2xvZ2luX3VybCI6ICIvY3VzdG9tZXJfYXV0aGVudGljYXRpb24vbG9naW4\/cmV0dXJuX3RvPSUyRiUzRiUyNTNGdXRtX3NvdXJjZSUzRGZiJTI2dXRtX21lZGl1bSUzRGNwYyUyNnV0bV9jYW1wYWlnbiUzRHRvcF9mdW5uZWwlMjZ1dG1fY29udGVudCUzRG5vbl9wcm9kdWN0X3ZzaXRvciUyNnV0bV9pZCUzRDY5NDAwMjkzMDg0MTclMjZ1dG1fdGVybSUzRDY5NDA3MDMzNzcwMTclMjZmYmNsaWQlM0RJd1kyeGphd1JkUFl4bGVIUnVBMkZsYlFFd0FHRmthV1FBQUFaZDMzYVdFWE55ZEdNR1lYQndYMmxrRHpJME5UYzVNRGd4T0RrMU5UZzJPQUFCSG9NeUxzd1ZHazhKQUpCMWRkUFY2ZDk5eVZWamRObDlYS3lBcWQ5a1VYcVVOaHRBSGQxdHFnSUxyZkloX2FlbV85UGJlTk9QX2l6NmNIRGVxU09ZV2FBJTI2dXRtX3NvdXJjZSUzRGZhY2Vib29rJTI2Y2FtcGFpZ25faWQlM0Q2OTQwMDI5MzA4NDE3JTI2YWRfaWQlM0Q2OTYwMTk4MjA5ODE3JmxvY2FsZT1lbiZ1aV9oaW50PWZ1bGwiCiAgfQogIA==",
  utilityUrls: "CiAgewogICAgImZhY2Vib29rX2xpa2UiOiAiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3JlcGxhY2VfdXJsIiwKICAgICJmYWNlYm9va19zaGFyZSI6ICJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA\/dT1yZXBsYWNlX3VybCIsCiAgICAiaW5zdGFncmFtX2xpa2UiOiAicmVwbGFjZV91cmwiLAogICAgImluc3RhZ3JhbV9mb2xsb3ciOiAiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yZXBsYWNlX2hhbmRsZS8iLAogICAgInR3aXR0ZXJfc2hhcmUiOiAiaHR0cHM6Ly94LmNvbS9pbnRlbnQvdHdlZXQ\/dGV4dD1yZXBsYWNlX3RleHQmdXJsPXJlcGxhY2VfdXJsIiwKICAgICJ0d2l0dGVyX2ZvbGxvdyI6ICJodHRwczovL3d3dy50d2l0dGVyLmNvbS9yZXBsYWNlX2hhbmRsZSIsCiAgICAidGlrdG9rX2ZvbGxvdyI6ICJodHRwczovL3d3dy50aWt0b2suY29tL0ByZXBsYWNlX2hhbmRsZSIKICB9CiAg",
  flitsMicrofrontendJsUrls: {
    storeFrontContainerV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/main.storeFrontContainer_3_1_4.js?v=1729751070",
    storeFrontContainerV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/main.storeFrontContainer.4.6.10.js",
    storeFrontChangePasswordV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_change_password_V_3_1_4.js?v=1729751043",
    storeFrontDeliveryAddressV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_delivery_address_3_1_4.js?v=1729751088",
    storeFrontHowToManageCreditV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_how_to_manage_credit_3_1_4.js?v=1729751102",
    storeFrontNavigationV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_navigation_3_1_4.js?v=1731334065",
    storeFrontOrderV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_order_3_1_4.js?v=1729751132",
    storeFrontMyProfileV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/storeFront_myProfile_3_1_4.js?v=1729751146",
    storeFrontRecentlyViewedProductsV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_recently_viewed_products_3_1_4.js?v=1729751156",
    storeFrontReferFriendV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_refer_friend_3_1_4.js?v=1729751170",
    storeFrontSocialLoginV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_social_login_3_1_4.js?v=1729751181",
    storeFrontCreditV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_credit_3_1_4.js?v=1729751196",
    storeFrontTopOrderedProductsV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/store_front_top_ordered_products_3_1_4.js?v=1729751206",
    storeFrontWishListV3: "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/storeFront_wishList_3_1_5.js?v=1740137463",
    storeFrontChangePasswordV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_change_password.4.6.10.js",
    storeFrontDeliveryAddressV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_delivery_address.4.6.10.js",
    storeFrontHowToManageCreditV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_how_to_manage_credit.4.6.10.js",
    storeFrontNavigationV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_navigation.4.6.10.js",
    storeFrontOrderV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_order.4.6.10.js",
    storeFrontMyProfileV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/storeFront_myProfile.4.6.10.js",
    storeFrontRecentlyViewedProductsV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_recently_viewed_products.4.6.10.js",
    storeFrontReferFriendV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_refer_friend.4.6.10.js",
    storeFrontSocialLoginV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_social_login.4.6.10.js",
    storeFrontCreditV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_credit.4.6.10.js",
    storeFrontTopOrderedProductsV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/store_front_top_ordered_products.4.6.10.js",
    storeFrontWishListV4: "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/storeFront_wishList.4.6.10.js",
  },
  flitsGetStoreMicrofrontendUrl: function(name) {
    const themeSettingMetafield =
      window?.flitsThemeAppExtensionObjects?.Metafields?.FINAL_SETTINGS?.themeSettingMetafield;
    if (
      themeSettingMetafield &&
      window?.flitsThemeAppExtensionObjects?.checkIsNeedToLoadVersion3()
    ) {
      return window.flitsThemeAppExtensionObjects.flitsMicrofrontendJsUrls[
        `${name}V3`
      ];
    }
    return window.flitsThemeAppExtensionObjects.flitsMicrofrontendJsUrls[
      `${name}V4`
    ];
  },
  // need to change function  because it is not good pratice
  checkIsNeedToLoadVersion3: function() {
    let requireMetafieldData =
      window?.flitsThemeAppExtensionObjects?.Metafields?.FINAL_SETTINGS;
    let metafield = requireMetafieldData?.container;
    let metafieldUsed = requireMetafieldData?.themeSettingMetafield;
    const themeSettingMetafield =
      metafieldUsed?.data?.accountSettings?.codeVersion;
    let getRemoteUrls = metafieldUsed?.data?.microfront_remotes?.remotes;

    if (!getRemoteUrls) {
      if (metafield) {
        if (themeSettingMetafield?.startsWith("3")) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    if (getRemoteUrls) {
      if (metafield) {
        if (themeSettingMetafield?.startsWith("3")) {
          return true;
        }
        if (themeSettingMetafield?.startsWith("4")) {
          return false;
        }
      } else {
        for (let key in getRemoteUrls) {
          if (
            getRemoteUrls[key] &&
            getRemoteUrls[key].remoteUrl !== "defaultURL"
          ) {
            if (themeSettingMetafield?.startsWith("3")) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
    }

    return false;
  },
  flitsGetStoreFrontContainerUrl: function() {
    // added hirerachy dependent container url
    let metafield =
      window?.flitsThemeAppExtensionObjects?.Metafields?.FINAL_SETTINGS?.container;

    if (!metafield || metafield === "defaultURL") {
      return window.flitsThemeAppExtensionObjects.flitsGetStoreMicrofrontendUrl(
        "storeFrontContainer"
      )
    }
    return metafield;
  },
  "THEME_SETTINGS_DEFAULT": {
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
        "codeVersion": "4.5.6",
        "themeStoreId": 1499
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
          ["customers" + "/" + "account"]: [{
            "component": "storeFrontNavigation",
            "renderType": "remote"
          }, {
            "component": "storeFrontCreditUsage",
            "renderType": "remote"
          }],
          ["customers" + "/" + "activate_account"]: [{
            "component": "storeFrontCreditUsage",
            "renderType": "remote"
          }],
          ["customers" + "/" + "addresses"]: [{
            "component": "storeFrontCreditUsage",
            "renderType": "remote"
          }],
          ["customers" + "/" + "login"]: [{
            "component": "storeFrontSocialLogin",
            "renderType": "remote"
          }],
          ["customers" + "/" + "order"]: [{
            "component": "storeFrontCreditUsage",
            "renderType": "remote"
          }],
          ["customers" + "/" + "register"]: [{
            "component": "storeFrontSocialLogin",
            "renderType": "remote"
          }, {
            "component": "storeFrontReferFriendRegisterPage",
            "renderType": "remote"
          }, {
            "component": "storeFrontRegisterPageCustomFields",
            "renderType": "remote"
          }],
          ["customers" + "/" + "reset_password"]: [{
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
            "moduleToLoad": "." + "/" + "storeFrontNavigation",
            "remoteName": "storeFrontNavigation",
            "localRoute": "storeFrontNavigation",
            "skeletonToLoad": "SkeletonNavigation",
            "required": ["IS_ACCOUNT_PAGE_ENABLE"]
          },
          "storeFrontRegisterPageCustomFields": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontRegisterPageCustomFields",
            "remoteName": "storeFrontMyProfile",
            "localRoute": "storeFrontMyProfile",
            "required": ["IS_CUSTOM_FIELDS_ENABLE"]
          },
          "storeFrontMyProfile": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontMyProfile",
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
            "moduleToLoad": "." + "/" + "storeFrontChangePassword",
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
            "moduleToLoad": "." + "/" + "storeFrontWishList",
            "remoteName": "storeFrontWishList",
            "localRoute": "storeFrontWishList",
            "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
          },
          "storeFrontWishListCollection": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontWishListCollection",
            "remoteName": "storeFrontWishList",
            "localRoute": "storeFrontWishListCollection",
            "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
          },
          "storeFrontWishListPage": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontWishListPage",
            "remoteName": "storeFrontWishList",
            "localRoute": "storeFrontWishListPage",
            "skeletonToLoad": "Loading",
            "jsonTemplate": [],
            "required": ["IS_WISHLIST_ENABLE", "IS_WISHLIST_PAID"]
          },
          "storeFrontCreditUsage": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontCreditUsage",
            "remoteName": "storeFrontCredit",
            "localRoute": "storeFrontCreditUsage",
            "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
            "jsonTemplate": [],
            "requiredArray": [
              ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"],
              ["IS_REFUND_CREDIT_ENABLE"]
            ]
          },
          "storeFrontSocialLogin": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontSocialLogin",
            "remoteName": "storeFrontSocialLogin",
            "localRoute": "storeFrontSocialLogin",
            "jsonTemplate": [],
            "required": ["IS_SOCIAL_LOGIN_PAID", "IS_SOCIAL_LOGIN_ENABLE"]
          },
          "storeFrontReferFriendRegisterPage": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontReferFriendRegisterPage",
            "remoteName": "storeFrontReferFriend",
            "localRoute": "storeFrontReferFriendRegisterPage",
            "required": ["IS_REFER_PROGRAM_ON", "IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
          },
          "storeFrontReferFriend": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontReferFriend",
            "remoteName": "storeFrontReferFriend",
            "localRoute": "storeFrontReferFriend",
            "skeletonToLoad": "Loading",
            "required": ["IS_STORE_CREDIT_PAID", "IS_REFER_PROGRAM_ON", "is_store_credit_enable"]
          },
          "storeFrontHowToManageCredit": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontHowToManageCredit",
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
            "moduleToLoad": "." + "/" + "storeFrontCredit",
            "remoteName": "storeFrontCredit",
            "localRoute": "storeFrontCredit",
            "skeletonToLoad": "Loading",
            "required": ["IS_STORE_CREDIT_PAID", "is_store_credit_enable"]
          },
          "storeFrontOrder": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontOrder",
            "remoteName": "storeFrontOrder",
            "localRoute": "storeFrontOrder",
            "skeletonToLoad": "Loading"
          },
          "storeFrontDeliveryAddress": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontDeliveryAddress",
            "remoteName": "storeFrontDeliveryAddress",
            "localRoute": "storeFrontDeliveryAddress",
            "skeletonToLoad": "LoadingWithOutShadow"
          },
          "storeFrontRecentlyViewedProducts": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontRecentlyViewedProducts",
            "remoteName": "storeFrontRecentlyViewedProducts",
            "localRoute": "storeFrontRecentlyViewedProducts",
            "skeletonToLoad": "Loading",
            "required": ["is_recently_view_enable"]
          },
          "storeFrontRecentlyViewedProductPage": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontRecentlyViewedProductPage",
            "remoteName": "storeFrontRecentlyViewedProducts",
            "localRoute": "storeFrontRecentlyViewedProductPage",
            "required": ["is_recently_view_enable"]
          },
          "storeFrontTopOrderedProducts": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontTopOrderedProducts",
            "remoteName": "storeFrontTopOrderedProducts",
            "localRoute": "storeFrontTopOrderedProducts",
            "skeletonToLoad": "LoadingWithOutShadow",
            "required": ["IS_ADVANCE_DASHBOARD_ENABLE", "IS_ADVANCE_DASHBOARD_PAID"]
          },
          "storeFrontRefundCredit": {
            "remoteUrl": "defaultURL",
            "moduleToLoad": "." + "/" + "storeFrontRefundCredit",
            "remoteName": "storeFrontCredit",
            "localRoute": "storeFrontRefundCredit",
            "skeletonToLoad": "Loading",
            "required": ["IS_REFUND_CREDIT_ENABLE"]
          }
        }
      },
      "multilanguage": "https://cdn.getflits.com/locales/default/en.json"
    },
    "flagSvgUrl": "https://cdn.shopify.com/s/files/1/0030/7491/6461/files/flags.svg?v=1646045459"
  },
  deepEqual: function(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || !obj1 || !obj2) {
      return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1?.length !== keys2?.length) {
      return false;
    }

    for (let key of keys1) {
      if (key === "accountSettings" || key === "flagSvgUrl" || key === "miniAccountWidgetUrl") {
        continue;
      }
      if (!keys2?.includes(key)) {
        return false;
      }

      if (!window?.flitsThemeAppExtensionObjects?.deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }
};

// if customer excluded than change metafield


window.flitsThemeAppExtensionObjects.Metafields["IS_HOW_TO_EARN_CREDIT_DISPLAY"] = 1

window.flitsThemeAppExtensionObjects.routes = JSON.parse(atob(decodeURIComponent(window.flitsThemeAppExtensionObjects.routes)) ?? {});
window.flitsThemeAppExtensionObjects.utilityUrls = JSON.parse(atob(decodeURIComponent(window.flitsThemeAppExtensionObjects.utilityUrls)) ?? {});

function performFinalChange(finalMetafield, themeSetting, containerSetting) {
  if (!themeSetting?.custom && !themeSetting?.global && !themeSetting?.theme) {
    finalMetafield["themeSettingMetafield"] = window?.flitsThemeAppExtensionObjects?.THEME_SETTINGS_DEFAULT;
    finalMetafield["name"] = "default"
  }
  let isAccountPageEnable = window?.flitsThemeAppExtensionObjects?.Metafields?.IS_ACCOUNT_PAGE_ENABLE
  let navigationExist = finalMetafield?.themeSettingMetafield?.data?.microfront_remotes?.remotes?.storeFrontNavigation

  if (isAccountPageEnable !== undefined && isAccountPageEnable !== null && navigationExist && !navigationExist?.required?.includes("IS_ACCOUNT_PAGE_ENABLE")) {
    finalMetafield.themeSettingMetafield.data.microfront_remotes.remotes.storeFrontNavigation["required"] = navigationExist?.required ? [...navigationExist?.required, "IS_ACCOUNT_PAGE_ENABLE"] : ["IS_ACCOUNT_PAGE_ENABLE"]
  }

  if ((isAccountPageEnable === undefined || isAccountPageEnable === null) && navigationExist && navigationExist?.required?.includes("IS_ACCOUNT_PAGE_ENABLE")) {
    finalMetafield.themeSettingMetafield.data.microfront_remotes.remotes.storeFrontNavigation["required"] = navigationExist?.required?.filter((meta) => meta !== "IS_ACCOUNT_PAGE_ENABLE")
  }

  if (finalMetafield?.themeSettingMetafield?.data?.microfront_remotes?.remotes?.storeFrontNavigation?.required?.includes("IS_ACCOUNT_PAGE_ENABLE") && !isAccountPageEnable) {
    window?.flitsMainContentDiv?.classList?.add("flits-old-account");
    window?.flitsMainContentDiv?.classList?.remove("flits-loading");
  }

  // added refer friend microfrontend to load new customer acount page inviter form and popups
  if (finalMetafield?.themeSettingMetafield?.data?.microfront_remotes?.pages_template?.index) {
    finalMetafield.themeSettingMetafield.data.microfront_remotes.pages_template.index = [
      ...finalMetafield.themeSettingMetafield.data.microfront_remotes.pages_template.index,
      {
        "component": "storeFrontReferFriendRegisterPage",
        "renderType": "remote"
      }
    ]
  }

  if (finalMetafield?.themeSettingMetafield) {
    finalMetafield.themeSettingMetafield = JSON.parse(JSON.stringify(finalMetafield?.themeSettingMetafield ?? {}).replace(/&#46;&#47;/g, "./"))
  }

  return finalMetafield;
}

function getThemeSettingsMetafield() {
  const metafields = window?.flitsThemeAppExtensionObjects?.Metafields;
  const containerMetafield = metafields?.MICRO_FRONTEND_STOREFRONT_CONTAINER_URL;
  const themeId = window?.flitsThemeAppExtensionObjects?.theme?.id;
  const deepEqual = window?.flitsThemeAppExtensionObjects?.deepEqual;

  let themeSetting = {
    "custom": metafields?.[`CUSTOM_THEME_SETTINGS_${themeId}`]?.status ? metafields?.[`CUSTOM_THEME_SETTINGS_${themeId}`] : null,
    "global": metafields?.[`THEME_SETTINGS_1`]?.status ? metafields?.[`THEME_SETTINGS_1`] : null,
    "theme": metafields?.[`THEME_SETTINGS_${themeId}`]?.status ? metafields?.[`THEME_SETTINGS_${themeId}`] : null
  }

  let containerSetting = {
    "custom": containerMetafield?.[`CUSTOM_${themeId}`],
    "global": containerMetafield?.["1"],
    "theme": containerMetafield?.[themeId]
  }

  let finalMetafield = {}

  let oldVersionMetafield = themeSetting?.custom ? themeSetting?.custom : (themeSetting?.global && !themeSetting?.theme) ? themeSetting?.global : null;
  let oldVersionContainerUrl = containerSetting?.custom ?? containerSetting?.global
  if (oldVersionMetafield) {
    finalMetafield["container"] = oldVersionContainerUrl;
    finalMetafield["themeSettingMetafield"] = oldVersionMetafield;
    finalMetafield = performFinalChange(finalMetafield, themeSetting, containerSetting)
    window.flitsThemeAppExtensionObjects.Metafields.FINAL_SETTINGS = finalMetafield;
    window.flitsThemeAppExtensionObjects.Metafields[`THEME_SETTINGS_${themeId}`] = finalMetafield?.themeSettingMetafield;
    return;
  }

  if (!containerSetting?.custom && containerSetting?.global && containerSetting?.global !== "defaultURL" && containerSetting?.theme) {
    finalMetafield["container"] = containerSetting?.theme;
  }

  if (!themeSetting?.custom && themeSetting?.global && themeSetting?.theme && !deepEqual(themeSetting?.global, themeSetting?.theme)) {
    finalMetafield["themeSettingMetafield"] = themeSetting?.theme;
  }

  if (!finalMetafield?.themeSettingMetafield) {
    finalMetafield["themeSettingMetafield"] = themeSetting?.custom ?? themeSetting?.global ?? themeSetting?.theme;
  }

  if (!finalMetafield?.container) {
    finalMetafield["container"] = containerSetting?.custom ?? containerSetting?.global ?? containerSetting?.theme;
  }

  finalMetafield = performFinalChange(finalMetafield, themeSetting, containerSetting)
  if (finalMetafield && Object.entries(finalMetafield ?? {})?.length > 0) {
    window.flitsThemeAppExtensionObjects.Metafields.FINAL_SETTINGS = finalMetafield
    window.flitsThemeAppExtensionObjects.Metafields[`THEME_SETTINGS_${themeId}`] = finalMetafield?.themeSettingMetafield;
  }
  return;
}

window.flitsThemeAppExtensionObjects.Metafields[`ORIGINAL_THEME_SETTINGS`] = window?.flitsThemeAppExtensionObjects?.Metafields?.[`THEME_SETTINGS_${window?.flitsThemeAppExtensionObjects?.theme?.id}`]

if (window?.flitsThemeAppExtensionObjects?.defaultEnJson) {
  fetch(window.flitsThemeAppExtensionObjects.defaultEnJson).then((res) => res.json()).then((res) => window.defaultLanguageContent = res)
}

fetch("https://cdn.shopify.com/s/files/1/0030/7491/6461/files/flits_loyalty_program_rules_svg.json").then((res) => res.json()).then((res) => window.loyalty_program_rules_svg = res)
getThemeSettingsMetafield()