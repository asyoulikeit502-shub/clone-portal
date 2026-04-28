(async function() {
  function debounce(delay = 500, callback) {
    let timer;
    return function() {
      clearTimeout(timer), timer = null, timer = setTimeout(() => {
        callback()
      }, delay)
    }
  }
  let isProPage = !1,
    isCollPage = !1,
    productId = 0,
    insertEls = [],
    collVariants = [],
    observer = null,
    oldCollElsCount = 0,
    proPosition = [],
    locale, customStyle = "",
    customPosition = null,
    customFeature = null,
    collectionAccess = !1;
  const themeId = Shopify.theme.id;
  let executeDelay = 0,
    firstExecute = !1,
    insertType = "afterend",
    emailStyle = null;
  const isMobile = /(iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|webOS|BlackBerry)/i.test(navigator.userAgent);
  typeof ShopifyAnalytics > "u" && await new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, 1500)
  }), typeof email_custom_info < "u" && (email_custom_info.css_code && (customStyle += email_custom_info.css_code), email_custom_info.selector && (customPosition = {
    selector: email_custom_info.selector,
    position: email_custom_info.position
  })), window.ShopifyAnalytics && ShopifyAnalytics.meta.product ? productId = ShopifyAnalytics.meta.product.id : Shopify.designMode && (q("#em_product_id") || await new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, 1e3)
  }), productId = JSON.parse(q("#em_product_id").textContent));
  let shopId = 0;
  qa("#shopify-features") ? shopId = JSON.parse(qa("#shopify-features")[0].outerText).shopId : window.ShopifyAnalytics && ShopifyAnalytics.lib && ShopifyAnalytics.lib.config && (shopId = ShopifyAnalytics.lib.config.Trekkie.defaultAttributes.shopId), locale = Shopify.locale;
  let requests = {
    getProsVariantsData(p) {
      const url = baseUrl + "api/v1/customer/getVariantBtStatus";
      let params = {
        shopId
      };
      return Object.assign(params, p), request(url, params)
    },
    getCollBtnStyle() {
      const url = baseUrl + "api/v1/getCollectionButtonStyle";
      return request(url, {
        shopId,
        shop_language: locale
      })
    }
  };
  const domain = Shopify.shop,
    debug = isDebug,
    baseUrl = apiBaseUrl;
  let customerInfo = {},
    showVariants = [];
  getCustomerInfo();
  const btnAndPopupData = initBtnAndPopupData(),
    {
      buttonStyleUrl,
      collButtonStyleUrl,
      popupStyleUrl,
      integrationUrl,
      floatBtnPosition,
      buttonData,
      generalData,
      formAction
    } = btnAndPopupData;
  let {
    iti,
    popupData,
    inlineBtnHeight,
    inlineBtnWidth,
    btnRadius,
    btnFontSize,
    btnFontWeight,
    insertEl,
    selectedType,
    selBtnStatus,
    btnStyleSwitch,
    popupStyleSwitch,
    inteStatus
  } = btnAndPopupData;
  const initRes = await init();
  importStyles(), typeof initRes == "string" ? console.log("Init info: ", initRes) : console.log("App is on!");
  const {
    MAX_SEARCH_TIMES
  } = initRes;
  let {
    times
  } = initRes;
  const elements = initElement();
  let {
    inlineBtnElement,
    floatBtnElement,
    emailFrameElement,
    inlineEmailDiv,
    floatEmailDiv,
    invalidTip,
    successFrame,
    variantSelector,
    closeBox,
    submitBtn,
    emailInput,
    nameInput,
    smsInput,
    mailingCheckbox,
    soldOutBtn,
    exactForm
  } = elements;
  const {
    trueForms
  } = elements, productInfo = initProductInfo();
  let {
    currentVariant,
    available,
    selectVariantId,
    productTitle,
    currentVariantOption,
    addOptionsStatus,
    initUrl,
    listenVariantFlag
  } = productInfo, {
    variantData,
    unVariantOptions
  } = productInfo;
  const payment_button_class = ".shopify-payment-button";
  debug && console.log("Init data finished"), execute(), getUserConfig();
  async function init() {
    const {
      ShopifyAnalytics: ShopifyAnalytics2
    } = window, pageType = ShopifyAnalytics2 && ShopifyAnalytics2.meta && ShopifyAnalytics2.meta.page && ShopifyAnalytics2.meta.page.pageType;
    let proParams = {},
      prosEle = [];
    if (isProPage = pageType === "product" || q("#sealapps-bis-widget"), isCollPage = pageType === "collection" || collectionAccess, addCustomModify(), executeDelay !== 0 && await new Promise((res, rej) => {
        setTimeout(() => {
          res()
        }, executeDelay)
      }), isProPage) productId && (proParams.productIds = [productId], proParams.type = 2);
    else if (isCollPage && (await getButtonStyle(shopId, collButtonStyleUrl), prosEle = await getProsEle(), debug && console.log(prosEle), prosEle !== null)) {
      oldCollElsCount = prosEle.length;
      const lists = getProductsANodes(prosEle);
      prosEle = lists.prosEle, proParams.handles = getProsHandles(lists.aNodeList), proParams.type = 1
    }
    if (!isCollPage && !isProPage) return "not collectionPage or productPage";
    if (changeStatus({
        baseUrl
      }), Object.keys(proParams).length !== 0) {
      const res = await requests.getProsVariantsData(proParams);
      if (debug && console.log("res", res), !(shopId == 48441458840 && proParams.type === 1)) {
        if (res.btStatus !== 1) return "collectionPage btn disable"
      }
      const {
        apiCode,
        products
      } = res;
      isProPage ? apiCode === 200 && products && (showVariants = products[0].variants.map(variant => variant.variantRid)) : isCollPage && products.forEach((i, inx) => {
        i.productStatus === 1 && (insertEls.push(prosEle[inx]), proPosition.push(inx), collVariants.push({
          proId: i.productId,
          productName: i.productName,
          variants: i.variants
        }))
      }), debug && console.log("Get Product Status Success")
    }
    if ((showVariants.length || collVariants.length) == 0) return isCollPage && checkVariantChange(), "All btn of variants are hidden.";
    const nodes = qa(`#product-restore-email-flag,
    #product-restore-email-float,.product-restore-email`);
    return nodes.length !== 0 ? isCollPage || nodes.forEach(i => i.remove()) : document.body.insertAdjacentHTML("beforeend", `
      <div id="product-restore-email-flag" style="display: none;"></div>
      `), {
      debug,
      baseUrl,
      MAX_SEARCH_TIMES: 50,
      times: 0
    }
  }
  async function execute() {
    isProPage ? searchParentEl().then(res => {
      debug && console.log("SearchParentEl finished");
      const {
        code
      } = res;
      if (code === 501) {
        console.log("Search Node Failed"), handleSearchNodeFailed().then(searchRes => {
          searchRes.code === 200 && (handleBasicData(), getAllStyle())
        });
        return
      }
      code === 200 && (debug && console.log("SearchParentEl success"), handleBasicData(), getAllStyle())
    }) : isCollPage && getAllStyle()
  }
  async function getProsEle() {
    const themeStoreId = Shopify.theme.theme_store_id;
    let selector = "";
    if (buttonData.btn_insert_el) selector = buttonData.btn_insert_el;
    else switch (themeStoreId) {
      case 887:
      case 1567:
      case 1356:
      case 1363:
      case 1368:
      case 1431:
      case 1434:
      case 1500:
      case 1499:
      case 1399: {
        selector = ".card-information .price";
        break
      }
      case 829: {
        selector = ".card__info>.card__price";
        break
      }
      case 775: {
        selector = ".product-card__info>.product-card__price";
        break
      }
      case 796: {
        selector = ".product-card>.price";
        break
      }
      case 730: {
        selector = ".grid__item .grid-product__price-wrap";
        break
      }
      case 679: {
        selector = ".grid-item .product-item--price";
        break
      }
      case 380: {
        selector = ".grid__item .grid-link__meta";
        break
      }
      case 578: {
        selector = ".grid__item .product__prices";
        break
      }
      case 857: {
        selector = ".grid__item .grid-product__price";
        break
      }
      case 765: {
        selector = ".product--details";
        break
      }
      case 849: {
        selector = ".product-block__info";
        break
      }
      case 459: {
        selector = ".product-info-inner .price";
        break
      }
      default:
        if (q("body.warehouse--v1")) selector = ".product-item .product-item__price-list";
        else {
          switch (themeId) {
            case 129555497130:
              selector = ".collection-grid-item__meta";
              break;
            case 139843010841:
              selector = ".product-item-meta";
              break;
            case 117705834682:
              selector = ".grid-view-item";
              break;
            case 3639214169: {
              selector = ".product-index .product-info";
              break
            }
          }
          shopId === 3639214169 && themeId === 139935711534 ? selector = ".product-index .product-info" : shopId === 61058973863 && themeId === 130619900071 ? selector = ".product-block .product-info" : shopId === 71594410265 && themeId === 143828386073 ? selector = ".product-item__info-inner" : shopId === 68210557218 && themeId === 142585594146 ? selector = ".card-information .price" : shopId === 25981404 && themeId === 132703387810 || shopId === 66663121193 && themeId === 139562189097 ? selector = ".product-item-meta" : shopId === 2797404227 && themeId === 122716946499 ? selector = ".price.price--sold-out" : shopId === 73514025266 && themeId === 146007327026 ? selector = ".product-item__price-list.price-list" : shopId === 25981404 && themeId === 132868636834 && (selector = ".product-item__cta.button.button--secondary.hidden-phone")
        }
    }
    if (shopId === 72470462767 && themeStoreId === 1399 && (selector = ".card-information__button", insertType = "afterbegin"), selector) {
      const nodes = Array.from(qa(selector));
      return nodes.length == 0 && await new Promise((res, rej) => {
        setTimeout(() => {
          res()
        }, 1500)
      }), nodes.filter(i => i.offsetParent !== null && !i.getAttribute("bis-inserted"))
    } else return null
  }

  function getProsHandles(nodes) {
    let productHandleStrings = "",
      handleArr = [];
    if (nodes.length) {
      let tarEle = "A";
      for (let i = 0; i < nodes.length; i++)
        if (nodes[i] && nodes[i].tagName === tarEle && nodes[i].getAttribute("href")) {
          let href = nodes[i].getAttribute("href"),
            start = href.lastIndexOf("/products/") + 10,
            end = href.indexOf("?"),
            handle = "";
          end != -1 ? handle = href.substring(start, end) : handle = href.substring(start), handle.indexOf(".jpg") === -1 && (handle = decodeURI(handle), handleArr.push(handle))
        } else handleArr.push("undefined")
    }
    return handleArr
  }

  function getProductsANodes(nodes) {
    let lists = {
        aNodeList: [],
        prosEle: []
      },
      aNodeList = [],
      index = 0,
      hs = 'a[href*="/products/"]',
      tarEle = "A",
      curNode = nodes[0],
      aNode;
    for (let i = 0; i < nodes.length; i++) {
      curNode = nodes[i], aNode = null;
      for (let j = 0; j < 5; j++) {
        if (curNode = curNode.parentNode, curNode.tagName === tarEle && curNode.href && curNode.href.indexOf("/products/") !== -1) {
          aNode = curNode;
          break
        }
        let childA = q(hs, curNode);
        if (childA) {
          aNode = childA;
          break
        }
      }
      aNode ? (index++, lists.prosEle.push(nodes[i]), lists.aNodeList.push(aNode)) : nodes[i] = null
    }
    return lists
  }

  function initProductInfo() {
    let info = {
      selectVariantId: "",
      unVariantOptions: [],
      currentVariantOption: null,
      addOptionsStatus: 0,
      productTitle: "",
      initUrl: document.URL
    };
    if (isProPage) {
      const variantData2 = JSON.parse(q("#em_product_variants").textContent),
        hasAvailableV = variantData2.some(v => v.available === !1),
        currentVariant2 = JSON.parse(q("#em_product_selected_or_first_available_variant").textContent);
      Object.assign(info, {
        variantData: variantData2,
        currentVariant: currentVariant2,
        available: currentVariant2.available,
        selectVariantId: currentVariant2.id,
        hasAvailableV,
        listenVariantFlag: !0
      })
    }
    return info
  }

  function initBtnAndPopupData() {
    return {
      btnRadius: "",
      btnFontSize: "",
      inlineBtnWidth: "",
      inlineBtnHeight: "",
      btnFontWeight: "initial",
      popupStyleUrl: "getPopupStyle",
      buttonStyleUrl: "getButtonStyle",
      collButtonStyleUrl: "getCollectionButtonStyle",
      integrationUrl: "integrate/getIntegration",
      floatBtnPosition: "float-btn-right",
      buttonData: {
        btn_value: "",
        btn_color: "",
        font_color: "",
        btn_margin_top: "",
        btn_margin_bottom: "",
        collection_btn_value: "",
        collection_is_show: 0,
        inline_status: 0,
        float_btn_value: "",
        float_btn_color: "",
        float_font_color: "",
        btn_insert_customized: 0,
        btn_insert_el: "",
        btn_insert_type: "",
        offset: 0,
        float_status: 0,
        is_branding_removed: 0
      },
      generalData: {
        btn_display_all: 0,
        btn_font_family: "inherit",
        btn_font_size: "14",
        btn_font_weight: "inherit",
        btn_hover_animation: 0,
        btn_hover_color: "#333333",
        btn_hover_font_color: "#ffffff",
        btn_margin_top: "0",
        btn_margin_bottom: "0",
        btn_border_radius: "0",
        btn_border_color: "transparent",
        btn_customize_css: ""
      },
      popupData: null,
      frameBtnColor: "#333333",
      frameBtnFontColor: "#ffffff",
      insertType: "afterend",
      insertEl: null,
      selectedType: {},
      iti: null,
      selBtnStatus: 0,
      btnStyleSwitch: 0,
      popupStyleSwitch: 0,
      inteStatus: 0,
      formAction: "https://" + document.domain + "/cart/add"
    }
  }

  function initElement() {
    return {
      inlineBtnElement: null,
      floatBtnElement: null,
      emailFrameElement: null,
      inlineEmailDiv: null,
      floatEmailDiv: null,
      invalidTip: null,
      successFrame: null,
      variantSelector: null,
      closeBox: null,
      submitBtn: null,
      soldOutBtn: null,
      emailInput: null,
      nameInput: null,
      smsInput: null,
      mailingCheckbox: null,
      trueForms: [],
      exactForm: null
    }
  }

  function getBtnStyle(btn) {
    if (btn.tagName == "DIV" && (btn = btn.querySelector("button")), !btn) return;
    const btnStyle = window.getComputedStyle(btn, null);
    btnStyle.width == "auto" || !btnStyle.width ? inlineBtnWidth = "" : btnStyle.width.indexOf("px") !== -1 && parseFloat(btnStyle.width) > 120 && (inlineBtnWidth = btnStyle.width), btnStyle.height == "auto" || !btnStyle.height ? inlineBtnHeight = "" : inlineBtnHeight = btnStyle.height, btnRadius = btnStyle.borderRadius, btnFontSize = btnStyle.fontSize, btnFontWeight = btnStyle.fontWeight
  }

  function getSoldOutBtn(trueForm) {
    const btnArr = trueForm.querySelectorAll("button"),
      iptArr = [...trueForm.querySelectorAll("input[type='submit']"), ...trueForm.querySelectorAll("input[type='button']")],
      allArr = [...btnArr, ...iptArr];
    if (allArr.length) {
      for (let i = 0; i < allArr.length; i++)
        if (allArr[i].type == "submit" && allArr[i].name == "add" || allArr[i].type == "submit" && allArr[i].name == "button") {
          soldOutBtn = allArr[i];
          break
        } if (!soldOutBtn) {
        for (let i = 0; i < allArr.length; i++)
          if (allArr[i].type == "submit") {
            soldOutBtn = allArr[i];
            break
          }
      }
      if (!soldOutBtn) {
        for (let i = 0; i < allArr.length; i++)
          if (allArr[i].disabled) {
            soldOutBtn = allArr[i];
            break
          }
      }
      soldOutBtn || (soldOutBtn = allArr[0]), soldOutBtn && getBtnStyle(soldOutBtn)
    }
  }

  function searchParentEl() {
    return new Promise(resolve => {
      const forms = qa("form");
      for (let i = 0; i < forms.length; i++) forms[i].action.indexOf("/cart/add") !== -1 && trueForms.push(forms[i]);
      if (trueForms.length || resolve({
          code: 501,
          msg: "Search el failed"
        }), trueForms.length == 1) exactForm = trueForms[0], getSoldOutBtn(trueForms[0]);
      else
        for (let i = 0; i < trueForms.length && !soldOutBtn; i++) {
          const formStyle = window.getComputedStyle(trueForms[i], null);
          if (!(formStyle.visibility != "visible" || formStyle.display == "none" || formStyle.height == "0px" || formStyle.height == "0" || formStyle.width == "0px" || formStyle.width == "0" || formStyle.height == "auto")) {
            if (exactForm = trueForms[i], getSoldOutBtn(trueForms[i]), soldOutBtn) {
              const parent = soldOutBtn.parentElement,
                parentStyle = window.getComputedStyle(parent, null);
              if (parentStyle.visibility == "visible" && parentStyle.display != "none" && parentStyle.height != 0 && parentStyle.width != 0) break
            }
            if (soldOutBtn = trueForms[i].querySelector(payment_button_class), soldOutBtn) break;
            {
              const iptSubArr = trueForms[i].querySelectorAll("input[type='submit']");
              if (iptSubArr.length != 0) {
                soldOutBtn = iptSubArr[0];
                break
              }
              const btnArr = trueForms[i].querySelectorAll("button");
              for (let j = 0; j < btnArr.length; j++)
                if (btnArr[j].type == "submit") {
                  soldOutBtn = btnArr[j];
                  break
                }
            }
          }
        }
      if (soldOutBtn || exactForm) {
        const params = {
          code: 200,
          msg: "success"
        };
        soldOutBtn ? (insertType = "afterend", insertEl = soldOutBtn) : (insertType = "beforeend", insertEl = exactForm), resolve(params)
      } else times >= MAX_SEARCH_TIMES ? resolve({
        code: 501,
        msg: "Search el failed"
      }) : (times++, setTimeout(() => {
        searchParentEl().then(res => resolve(res))
      }, 50))
    })
  }

  function getParentWithoutForm() {
    const btnElements = qa(`.action-button, [class*=add-to-cart], [class*=add_to_cart], [id*=add_to_card],
     [id*=add-to-card], [data-add-to-cart], .sold-out, #out-of-stock-gl,.option-selectors`);
    if (btnElements.length)
      for (let i = 0; i < btnElements.length; i++) {
        const width = Number(window.getComputedStyle(btnElements[i], null).width.split("px")[0]);
        if (!isNaN(width) && width > 64) return {
          type: "afterend",
          ele: btnElements[i]
        }
      }
    const parents = qa(".action-button, .tt-swatches-container.tt-swatches-container-js");
    if (parents.length)
      for (let i = 0; i < parents.length; i++) {
        const style = window.getComputedStyle(parents[i], null);
        if (!(style.visibility != "visible" || style.display == "none" || style.height == "0px" || style.height == "0" || style.width == "0px" || style.width == "0" || style.height == "auto")) return {
          type: "beforeend",
          ele: parents[i]
        }
      }
    return {
      type: ""
    }
  }

  function setInlineBtnWhenErr(el) {
    const res = getParentWithoutForm();
    res.type && res.ele.insertAdjacentHTML(res.type, el), getBISEle()
  }

  function handleSearchNodeFailed() {
    return new Promise(resolve => {
      getButtonStyle(shopId, buttonStyleUrl).then(() => {
        buttonData.btn_insert_el ? resolve({
          code: 200
        }) : getParentWithoutForm().type ? resolve({
          code: 200
        }) : resolve({
          code: 404
        })
      })
    })
  }

  function changeButtonPos() {
    debug && console.log("changeButtonPos");
    let {
      btn_insert_customized,
      btn_insert_el,
      btn_insert_type
    } = buttonData;
    if (!btn_insert_customized && !btn_insert_el && customPosition && (btn_insert_customized = 1, btn_insert_el = customPosition.selector, btn_insert_type = customPosition.position), btn_insert_customized && btn_insert_el) {
      if (shopId === 53793915066 && themeId === 136421834975 && (btn_insert_el = ".product__submit__item.product__submit__item--inline"), isProPage) insertEl = q(btn_insert_el) || soldOutBtn;
      else if (isCollPage) {
        insertEls = qa(btn_insert_el), insertEls = Array.from(insertEls);
        let insertElsCopy = insertEls;
        insertEls = [];
        for (let inx = 0; inx < insertElsCopy.length; inx++) proPosition.includes(inx) && insertEls.push(insertElsCopy[inx])
      }
      insertType = btn_insert_type || "afterend"
    }
    if (isProPage) {
      const isBlcok = q("#sealapps-bis-widget");
      isBlcok && (insertEl = isBlcok, insertType = "beforeend")
    }
  }

  function handleBasicData() {
    if (debug && console.log("Handle Basic Data"), soldOutBtn) {
      const parentStyle = window.getComputedStyle(soldOutBtn.parentElement, null);
      parentStyle.display == "flex" && parentStyle.flexDirection == "row" && parentStyle.flexWrap == "nowrap" && (soldOutBtn.parentElement.style.flexWrap = "wrap")
    }
    const v1 = variantData[0];
    try {
      const arr = v1.name.split("-");
      arr.length === 1 ? productTitle = v1.name : productTitle = arr.slice(0, -1).join("-"), productTitle = productTitle.trim(), shopId === 61058973863 ? productTitle = v1.name : shopId === 55190913133 && (productTitle = v1.name.split("-").slice(0, -1).join("-"))
    } catch {
      v1.public_title && v1.public_title.length - 3 > 0 ? productTitle = v1.name.substr(0, v1.name.length - v1.public_title.length - 3) : productTitle = v1.name
    }
  }

  function getAllStyle() {
    debug && console.log("Get All Style"), document.head.insertAdjacentHTML("beforeend", '<style class="email-style"></style>'), emailStyle = document.querySelector(".email-style");
    let btnPromise, styUrl = "";
    debug && console.log("isProPage", isProPage), debug && console.log("collButtonStyleUrl", collButtonStyleUrl), debug && console.log("btnPromise", btnPromise);
    const popupPromise = getPopupStyle(shopId, popupStyleUrl),
      intePromise = getIntegration(shopId, integrationUrl),
      promises = [popupPromise, intePromise];
    isProPage && promises.push(getButtonStyle(shopId, buttonStyleUrl)), Promise.all(promises).then(() => {
      renderBtnAndPopup()
    })
  }

  function getButtonStyle(shopId2, btnurl) {
    if (btnStyleSwitch) return new Promise(resolve => {
      resolve({
        code: 200
      })
    });
    debug && console.log("Get Button Style");
    const url = baseUrl + "api/v1/" + btnurl;
    return request(url, {
      shopId: shopId2,
      shop_language: locale
    }).then(res => {
      debug && console.log("Get Button Style Success");
      const {
        code,
        data
      } = res;
      code === 200 && data && (btnStyleSwitch = 1, Object.keys(buttonData).forEach(key => {
        buttonData[key] = data[key]
      }), q("#sealapps-bis-widget") && (buttonData.inline_status = 1), Object.keys(generalData).forEach(key => {
        generalData[key] = data[key]
      }), isCollPage && (generalData.btn_font_family = generalData.btn_font_weight = "inherit"), renderSettingStyles(), changeButtonPos())
    })
  }

  function getPopupStyle(shopId2, popupUrl) {
    debug && console.log("Get Popup Style");
    const url = baseUrl + "api/v1/" + popupUrl;
    return request(url, {
      shopId: shopId2,
      shop_language: locale
    }).then(res => {
      debug && console.log("Get Popup Style Success");
      const {
        code,
        data
      } = res;
      if (code === 200 && data) switch (popupStyleSwitch = 1, popupData = JSON.parse(JSON.stringify(data)), popupData.popup_option) {
        case 1:
          selectedType.type = "email";
          break;
        case 2:
          selectedType.type = "sms";
          break;
        case 3:
          selectedType.type = "email";
          break
      }
    })
  }

  function getIntegration(shopId2, inteUrl) {
    debug && console.log("Get Integration");
    const url = baseUrl + "api/v1/" + inteUrl;
    return request(url, {
      shopId: shopId2
    }).then(res => {
      debug && console.log("Get Integration Success");
      const {
        code,
        data
      } = res;
      code === 200 && data && (debug && console.log("inte", data), inteStatus = data.find(o => o.is_enable))
    })
  }

  function renderSettingStyles() {
    debug && console.log("renderSettingStyles");
    const {
      btn_font_size,
      btn_hover_animation,
      btn_border_radius,
      btn_border_color,
      btn_font_weight,
      btn_font_family,
      btn_margin_top,
      btn_margin_bottom,
      btn_hover_font_color,
      btn_hover_color,
      btn_customize_css
    } = generalData;
    let generalStyles = `
      .email-me-button {
        font-size: ${btn_font_size}px !important;
      font-weight: ${btn_font_weight} !important;
      font-family: ${btn_font_family} !important;
      border-color: ${btn_border_color} !important;
      border-radius: ${btn_border_radius}px !important;
      border-width: 2px;
      border-style: solid;
      }
      .email-me-inlineButton {
        margin-top: ${btn_margin_top}px !important;
      margin-bottom: ${btn_margin_bottom}px !important;
      }
      .email-me-button:hover {
        color: ${btn_hover_font_color} !important;
      background-color: ${btn_hover_color} !important;        
      }
      ${btn_customize_css}
      `;
    btn_hover_animation && (generalStyles += `
      .email-me-inlineButton::after,
      .email-me-inlineButton::before,
      .email-me-submitButton::after,
      .email-me-submitButton::before {
          content:'';
          color: ${buttonData.btn_color};
          font-size: ${btn_font_size}px; 
          text-align: center; 
          border-radius: ${btn_border_radius}px;
          width: 0;
          height: 100%;
          background-color: ${btn_hover_color};
          position: absolute;
          left:0;
          transition: all ease-in-out .35s;
          top:0;
          z-index: -2;
      }
      .email-me-inlineButton::before,
      .email-me-submitButton::before {
          z-index: -1;
          background-color: ${btn_hover_color};
      }
      .email-me-inlineButton:hover,
        .email-me-submitButton:hover {
          z-index: 1;
          color: ${btn_hover_font_color} !important;
          background-color: ${btn_hover_color} !important;
      }
      .email-me-button:hover::before,
      .email-me-button:hover::after
      {
          width: 100%;
      }
      `);
    const styles = `
      <style>
        ${generalStyles}
      </style>
      `;
    document.head.insertAdjacentHTML("beforeend", styles)
  }

  function renderBtnAndPopup() {
    debug && console.log("renderBtnAndPopup");
    const {
      toggler,
      ipt,
      mailingList
    } = renderSpecificPopup(), mountWindowElement = `
      <div class="successSub">
        <div class="successSub_header">
          <img src="https://cdn.shopify.com/s/files/1/0576/6063/7389/t/1/assets/success.png?v=1629367773" />
          <div class="successSub_header_text">${popupData.success_frame_title}</div>
          <div class="successSub_close-box">
            <div class="successSub_frame-close"></div>
          </div>
        </div>
        <div class="successSub_text">
          ${popupData.success_frame_content}
        </div>
      </div>
      <div id="email-me-frame">
        <div class="email-frame-content">
          <div class="close-box">
            <div class="frame-close"></div>
          </div>
          <div class="email-frame-header">
            <div class="frame-email-logo">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5.324V15.5A1.5 1.5 0 001.5 17h17a1.5 1.5 0 001.5-1.5V5.324l-9.496 5.54a1 1 0 01-1.008 0L0 5.324z"
                  fill="#5C5F62" />
                <path d="M19.443 3.334A1.494 1.494 0 0018.5 3h-17c-.357 0-.686.125-.943.334L10 8.842l9.443-5.508z"
                  fill="#5C5F62" />
              </svg>
            </div>
            <div class="frame-title">${popupData.popup_header_text}</div>
          </div>
          <div class="split-line" style="border: 1px solid #d9d9d9;"></div>
          <div class="email-frame-body">
            <div class="frame-body-content">
              <span>${productTitle}</span>
            </div>
            <div>
              <select class="selected-unavailable-variant"></select>
            </div>
            ${toggler||""}
            <div>
              <input class="buyer-name" type="text" placeholder="${popupData.popup_name_placeholder_text}">
            </div>
            ${ipt}
            ${mailingList||""}
            <div class="frame-submit">
              <div class="email-me-button email-me-submitButton" style=" text-align:center; color: ${popupData.popup_btn_font_color}; background-color:  ${popupData.popup_btn_color}; border-radius: ${btnRadius}; font-size: ${btnFontSize}; ">
                ${popupData.popup_btn_value}
              </div>
            </div>
          </div>
          <div class="email-frame-footer">
            <div class="email-footer-tips">
              <span>${popupData.popup_footer_text}</span>
            </div>
          </div>
          <div class="email-provider" style="display: ${buttonData.is_branding_removed?"none":""};">
            Powered by <span><a class="email-app-link" target="_blank" href="https://apps.shopify.com/email-1?surface_detail=back+in+stock&surface_inter_position=1&surface_intra_position=10&surface_type=search">Channelwill</a></span>
          </div>
        </div>
      </div>`;
    document.body.insertAdjacentHTML("beforeend", mountWindowElement), document.querySelector("#sealapps-bis-widget") && soldOutBtn && getComputedStyle(soldOutBtn.parentNode).textAlign === "center" && (emailStyle.textContent += "#sealapps-bis-widget{justify-content:center}"), renderButton().then(res => {
      debug && console.log("renderButton success"), res.code === 200 ? (createEmailButton(), listenVariantChange(), getBISEle(), popupData.popup_option !== 1 && initSms()) : debug && console.log("Insert failed")
    })
  }

  function renderButton() {
    return new Promise(resolve => {
      const {
        inline_status,
        float_status
      } = buttonData;
      let flag = 0;
      if (inline_status || isCollPage) {
        const {
          font_color,
          btn_color,
          btn_value,
          collection_btn_value,
          btn_margin_top,
          btn_margin_bottom
        } = buttonData;
        let btnText = "";
        isProPage ? btnText = btn_value : isCollPage && (btnText = collection_btn_value);
        const mountInlineBtn = `
      <div class="product-restore-email"
       style="margin-top: ${btn_margin_top}px; margin-bottom: ${btn_margin_bottom}px; width: ${inlineBtnWidth||"initial"}; max-width:100%;">
        <div class="email-me-button email-me-inlineButton" style="text-align:center; margin-top:0; color: ${font_color} ; background-color: ${btn_color} ; height:${inlineBtnHeight} ; border-radius: ${btnRadius||"2px"} ; font-size: ${btnFontSize||"14px"} ; font-weight: ${btnFontWeight||"inherit"};">
          ${btnText}
        </div>
      </div>`;
        if (isProPage) try {
          debug && console.log("insert", insertEl, insertType), insertEl.insertAdjacentHTML(insertType, mountInlineBtn), flag++
        } catch {
          setInlineBtnWhenErr(mountInlineBtn), flag++
        } else isCollPage && (insertEls.forEach((i, inx) => {
          if (iparentNode = i.parentNode, qa(".product-restore-email", iparentNode).length == 0) {
            const wrapper = document.createElement("div");
            wrapper.setAttribute("proId", collVariants[inx].proId), wrapper.innerHTML = mountInlineBtn, wrapper.style.position = "relative", wrapper.style.zIndex = "1", wrapper.className = "restore-email-wrapper", i.insertAdjacentElement(insertType, wrapper), i.setAttribute("bis-inserted", !0)
          }
        }), flag++)
      }
      if (float_status) {
        const {
          offset,
          float_font_color,
          float_btn_color,
          float_btn_value
        } = buttonData, mountFloatBtn = `
      <div id="product-restore-email-float" style="top:${offset+"px"}" class="${floatBtnPosition}">
        <div class="email-me-button email-me-floatButton" style="text-align:center; display:none; color: ${float_font_color} ; background-color:  ${float_btn_color} ; border-radius: ${btnRadius} ; font-size: ${btnFontSize}; font-weight: ${btnFontWeight}; ">
          ${float_btn_value}
        </div>
      </div>`;
        document.body.insertAdjacentHTML("afterbegin", mountFloatBtn), flag++
      }
      flag > 0 ? resolve({
        code: 200,
        msg: "Success!"
      }) : resolve({
        code: 404,
        msg: "Insert failed"
      })
    })
  }

  function renderSpecificPopup(type) {
    let ipt, toggler, mailingList;
    if (type = popupData.popup_option || type, type === 1) ipt = `
        <div>
          <input class="buyer-email" type="text" placeholder="${popupData.popup_placeholder_text}">
          <div class="invalid-email-tips">${popupData.popup_validation_text}</div>
        </div>
      `;
    else if (type === 2) ipt = `
        <div>
          <div class="buyer-phone-container">
            <input type="text" class="buyer-phone">
          </div>
          <div class="invalid-email-tips">${popupData.popup_validation_text}</div>
        </div>
      `;
    else if (type === 3) {
      ipt = `
      <div>
        <input class="buyer-email" type="text" placeholder="${popupData.popup_placeholder_text}">
        <div class="buyer-phone-container">
          <input type="text" class="buyer-phone">
        </div>
        <div class="invalid-email-tips">${popupData.popup_validation_text}</div>
      </div>
      `;
      const email = `<div class="email-type">
          ${popupData.popup_tab_email}
        </div>`,
        sms = `<div class="sms-type">
          ${popupData.popup_tab_sms}
        </div>`;
      let content = "";
      shopId === 56661573841 ? content = sms + email : content = email + sms, toggler = `
      <div class="notify-type-toggler">
        ${content}
      </div>
      `
    }
    return renderSpecificStyle(type), inteStatus && (mailingList = `
      <div class="join-mailing-container">
        <input id="join-mailing-list" type="checkbox" checked/>
        <label for="join-mailing-list" class="join-mailing-listLabel">
        ${popupData.popup_opt_in_text}
        </label>
      </div>
    `), {
      ipt,
      toggler,
      mailingList
    }
  }

  function renderSpecificStyle(type) {
    switch (type) {
      case 1:
      case 2:
        addStyle(`<style>
        #email-me-frame .email-frame-content {
          max-height: 412px !important;
          }
      </style>`);
        break;
      case 3:
        addStyle(`<style>
        #email-me-frame .email-frame-content {
          max-height: 459px !important;
          }
      </style>`);
        break;
      default:
        break
    }
  }

  function getBISEle() {
    switch (popupData.popup_option) {
      case 1:
        emailInput = q(".buyer-email");
        break;
      case 2:
        smsInput = q(".buyer-phone");
        break;
      case 3:
        emailInput = q(".buyer-email"), smsInput = q(".buyer-phone");
        break
    }
    nameInput = q(".email-frame-body .buyer-name"), successFrame = q(".successSub"), invalidTip = q(".invalid-email-tips"), emailFrameElement = q("#email-me-frame"), closeBox = q("#email-me-frame .close-box"), submitBtn = q(".frame-submit .email-me-button"), variantSelector = q(".selected-unavailable-variant"), inlineEmailDiv = qa(".product-restore-email"), floatEmailDiv = q("#product-restore-email-float"), inlineBtnElement = qa(".email-me-inlineButton"), floatBtnElement = q(".email-me-floatButton"), mailingCheckbox = q("#join-mailing-list") || {}, insertStyle = q("#email-insert-style"), handleEleEvent()
  }

  function handleEleEvent() {
    switch (popupData.popup_option) {
      case 1:
        emailInput.addEventListener("blur", verifyEmail);
        break;
      case 2:
        break;
      case 3:
        emailInput.addEventListener("blur", verifyEmail);
        break
    }
    submitBtn.addEventListener("click", subEmail), closeBox.addEventListener("click", function() {
      emailFrameElement.style.display = "none", variantSelector.style.display !== "none" && currentVariantOption && currentVariantOption.removeAttribute("selected")
    }), successFrame.addEventListener("click", function() {
      successFrame.classList.remove("successSub_active")
    }), isProPage && mountedUnVariantOptions(), initInlineAndFloatBtn()
  }

  function initInlineAndFloatBtn() {
    inlineBtnElement.length && inlineBtnElement.forEach((i, inx) => {
      i.addEventListener("click", function(e) {
        e.preventDefault(), autoInput();
        let curProId = 0;
        emailFrameElement.style.display = "block";
        const selected_unavailable_variant = emailFrameElement.querySelector(".selected-unavailable-variant");
        if (isCollPage) {
          curProId = this.parentNode.parentNode.getAttribute("proId");
          let oldProId = selected_unavailable_variant.getAttribute("proId");
          oldProId ? oldProId !== curProId && (addOptionsStatus = 0, variantData = collVariants.find(i2 => i2.proId == curProId).variants, unVariantOptions = [], mountedUnVariantOptions(), selected_unavailable_variant.innerHTML = "", selected_unavailable_variant.setAttribute("proId", curProId)) : (unVariantOptions = [], variantData = collVariants.find(i2 => i2.proId == curProId).variants, mountedUnVariantOptions(), selected_unavailable_variant.setAttribute("proId", curProId))
        }
        for (let i2 = 0; i2 < unVariantOptions.length; i2++) addOptionsStatus === 0 && selected_unavailable_variant.add(unVariantOptions[i2]), unVariantOptions[i2].getAttribute("value") === selectVariantId.toString() && (currentVariantOption = selected_unavailable_variant.querySelectorAll("option")[i2], currentVariantOption.setAttribute("selected", "selected"));
        addOptionsStatus = 1
      })
    }), floatBtnElement && floatBtnElement.addEventListener("click", function() {
      autoInput(), emailFrameElement.style.display = "block";
      for (let i = 0; i < unVariantOptions.length; i++) addOptionsStatus === 0 && variantSelector.add(unVariantOptions[i]), unVariantOptions[i].getAttribute("value") === selectVariantId.toString() && (currentVariantOption = variantSelector.querySelectorAll("option")[i], currentVariantOption.setAttribute("selected", "selected"));
      addOptionsStatus = 1
    })
  }

  function autoInput() {
    JSON.stringify(customerInfo) != "{}" && (nameInput.value = customerInfo.name, emailInput && (emailInput.value = customerInfo.email), smsInput && (smsInput.value = customerInfo.phone.replace(/[^0-9]/g, "")))
  }

  function mountedUnVariantOptions() {
    let optionIndex = 0,
      title, id = "id";
    isProPage ? title = "title" : isCollPage && (title = "variantTitle", id = "variantRid");
    for (let i = 0; i < variantData.length; i++)(showVariants.includes(String(variantData[i].id)) && isProPage || isCollPage) && (isCollPage && collRednerProName(variantData[i].productRid), variantData[i][title] === "Default Title" && (variantSelector.style.display = "none"), unVariantOptions[optionIndex] = create({
      tag: "option",
      attributes: {
        value: variantData[i][id],
        textContent: variantData[i][title]
      }
    }), optionIndex++)
  }
  const observeDebounce = debounce(600, async () => {
    observer.disconnect();
    const curEls = await getProsEle(),
      bns = qa(".product-restore-email").length;
    curEls.length !== oldCollElsCount || !bns ? (debug && console.log("\u76D1\u542C\u6210\u529F\uFF0C\u5F00\u59CB\u8FD0\u884C"), insertEls = [], selBtnStatus = 0, await init(), execute()) : checkVariantChange()
  });

  function listenVariantChange() {
    if (isProPage) {
      const url = document.URL;
      listenUrlStatus(), (url.indexOf("variant=") === -1 || shopId == 1742274613) && checkVariantChange()
    } else isCollPage && setTimeout(() => {
      checkVariantChange()
    }, 1e3)
  }

  function checkVariantChange() {
    let targetNode;
    if (isProPage ? shopId == 55013703857 ? targetNode = q(".select-selected, select[name=id]") : shopId == 1742274613 ? targetNode = q(".option-1") : shopId == 42547151016 && themeId === 122478428328 ? targetNode = q(".swatch-variants-wrapper") : shopId == 57593233596 && themeId === 132009820348 ? targetNode = q(".swatches-select.swatch__list_pr") : shopId == 16708787 && themeId === 141528334609 ? targetNode = q(".shopify-product-form") : shopId == 56342347836 && themeId === 148975190351 ? targetNode = q("form .t4s-swatch") : shopId == 23566876752 && themeId === 122101039184 ? targetNode = q(".swatches-select") : shopId == 63893045484 && themeId === 136267792620 ? targetNode = q(".option-selectors") : targetNode = q("input[name=id], select[name=id]") : isCollPage && (targetNode = q("main"), shopId === 25981404 && themeId === 132868636834 && (targetNode = q("#main"))), targetNode) {
      const config = {
        attributes: !0,
        childList: !0,
        subtree: !0
      };
      observer = new MutationObserver(observerCallback), observer.observe(targetNode, config), debug && console.log("\u76D1\u542C\u5668\u542F\u52A8\u4E2D")
    }
  }

  function observerCallback() {
    if (isProPage) {
      debug && console.log("\u76D1\u542C\u5230\u5143\u7D20\u53D8\u5316\uFF0C\u68C0\u67E5variant\u53D8\u5316");
      let curVariantId;
      if (shopId == 55013703857) {
        const selectedTitle = q(".select-selected").innerText;
        curVariantId = variantData.find(o => o.title == selectedTitle).id
      } else if (shopId == 1742274613) {
        const option1Node = q(".option-0"),
          option2Node = q(".option-1"),
          option1Title = option1Node.querySelector(".selected_val").innerText,
          option2Title = option2Node.querySelector(".selected_val").innerText;
        curVariantId = variantData.find(o => o.option1 == option1Title && o.option2 == option2Title).id
      } else shopId === 56342347836 ? curVariantId = q(".t4s-product__select.t4s-d-none").value : curVariantId = q("input[name=id], select[name=id]").value;
      handleVariantChange(curVariantId)
    } else isCollPage && observeDebounce()
  }

  function listenUrlStatus() {
    overwritePushstate(), window.addEventListener("locationchange", () => {
      if (document.URL !== initUrl) {
        const currentUrl2 = document.URL,
          vid = new URL(currentUrl2).searchParams.get("variant");
        debug && console.log("vid", vid), initUrl = currentUrl2, vid && handleVariantChange(vid), listenVariantFlag = !1, debug && console.log("\u6E05\u9664\u5B9A\u65F6\u5668")
      }
    })
  }

  function handleVariantChange(vid) {
    vid && String(selectVariantId) !== String(vid) && (selectVariantId = vid, currentVariant = variantData.find(o => o.id == vid), available = currentVariant.available, (showVariants.includes(String(selectVariantId)) && !btnStyleSwitch || !popupStyleSwitch) && getAllStyle(), showVariants.includes(String(selectVariantId)) && !selBtnStatus && createEmailButton(), selBtnStatus === 1 && (debug && console.log("initEmailToMeEle"), debug && console.log(currentVariant), initEmailToMeElement()))
  }

  function createEmailButton() {
    if (debug && console.log("createEmailButton"), selBtnStatus === 0) {
      const url = baseUrl + "api/v1/email/selBtnStatus";
      request(url, {
        shopId
      }).then(res => {
        const {
          code,
          data
        } = res;
        code === 200 && (data.status == 1 || data.status == 2 || data.status == 0 || data.snsStatus ? (selBtnStatus = 1, initEmailToMeElement()) : selBtnStatus = data.status)
      })
    }
  }

  function initEmailToMeElement() {
    selBtnStatus === 1 && (showVariants.includes(String(selectVariantId)) && isProPage || isCollPage) ? (customFeature && customFeature(), inlineBtnElement && (inlineBtnElement.forEach(i => i.style.display = "flex"), inlineEmailDiv.forEach(i => i.style.display = "flex")), floatBtnElement && (floatBtnElement.style.display = "flex", floatEmailDiv.style.display = "flex")) : (inlineBtnElement && inlineEmailDiv.forEach(i => {
      i.style.display = "none"
    }), floatBtnElement && (floatEmailDiv.style.display = "none"))
  }

  function verifyEmail() {
    const email = emailInput.value;
    new RegExp(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,}$/).test(email) ? invalidTip.style.visibility = "hidden" : toggleInvalidTip(!0, {
      type: "email",
      info: popupData.popup_validation_text
    })
  }

  function create({
    tag,
    appendTo,
    children = [],
    attributes = {},
    events = {}
  }) {
    const element = document.createElement(tag);
    return Object.entries(attributes).forEach(([key, value]) => {
      element[key] = value
    }), Object.entries(events).forEach(([key, value]) => {
      element.addEventListener(key, value)
    }), appendTo && appendTo.appendChild(element), children.forEach(child => element.appendChild(child)), element
  }

  function subEmail() {
    const {
      popup_validation_text
    } = popupData;
    let buyerName;
    switch (nameInput && (buyerName = nameInput.value), selectedType.type) {
      case "sms":
        smsInput && smsInput.value || "" ? iti.isValidNumber() ? (toggleInvalidTip(!1), subscribeSms({
          buyerName
        })) : toggleInvalidTip(!0, {
          type: "sms",
          info: popup_validation_text
        }) : toggleInvalidTip(!0, {
          type: "sms",
          info: popup_validation_text
        });
        break;
      case "email":
        const email = emailInput.value;
        email ? new RegExp(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,}$/).test(email) ? (toggleInvalidTip(!1), subscribeEmail({
          buyerName
        })) : toggleInvalidTip(!0, {
          type: "email",
          info: popup_validation_text
        }) : toggleInvalidTip(!0, {
          type: "email",
          info: popup_validation_text
        });
        break;
      default:
        return
    }
  }

  function toggleInvalidTip(show, data) {
    const style = getComputedStyle(invalidTip),
      {
        type,
        info
      } = data || {
        type: selectedType.type,
        info: popupData.popup_validation_text
      };
    switch (type) {
      case "sms":
        style.visibility === "hidden" ? (invalidTip.style.visibility = "visible", invalidTip.innerHTML = info) : invalidTip.style.visibility = "hidden";
        break;
      case "email":
        style.visibility === "hidden" ? (invalidTip.style.visibility = "visible", invalidTip.innerHTML = info) : invalidTip.style.visibility = "hidden";
        break;
      default:
        invalidTip.style.visibility = "hidden";
        break
    }
    debug && console.log(invalidTip), show ? invalidTip.style.visibility = "visible" : show === !1 && (invalidTip.style.visibility = "hidden")
  }

  function subscribeSms(data) {
    const params = {
        shopId,
        variant_rid: variantSelector.value,
        receiver_number: formatPhoneNumber(smsInput.value.trim()),
        region: iti.getSelectedCountryData().iso2.toUpperCase(),
        is_integration: Number(mailingCheckbox.checked || !1),
        receiver_name: data.buyerName || "customer",
        customer_rid: 0,
        shop_language: locale
      },
      url = baseUrl + "api/v1/sns/insCustomerSnsInfo";
    submitBtn.parentElement.className = "frame-submit loading", request(url, params).then(res => {
      const {
        code,
        message
      } = res;
      code === 200 ? (emailFrameElement.style.display = "none", successFrame.classList.add("successSub_active"), setTimeout(function() {
        successFrame.classList.remove("successSub_active")
      }, 4e3)) : code === 108 || code === 107 ? (invalidTip.style.visibility = "visible", invalidTip.innerHTML = popupData.popup_subscribed_text) : code === 109 ? (invalidTip.style.visibility = "visible", invalidTip.innerHTML = popupData.popup_validation_text) : (invalidTip.style.visibility = "visible", invalidTip.innerHTML = message)
    }).finally(() => {
      submitBtn.parentElement.className = "frame-submit"
    })
  }

  function subscribeEmail(data) {
    const params = {
        shopId,
        variant_rid: variantSelector.value,
        receiver_email: document.getElementsByClassName("buyer-email")[0].value,
        receiver_name: data.buyerName || "customer",
        is_integration: Number(mailingCheckbox.checked || !1),
        customer_rid: 0,
        shop_language: locale
      },
      url = baseUrl + "api/v1/email/insCustomerEmailInfo";
    submitBtn.parentElement.className = "frame-submit loading", request(url, params).then(res => {
      const {
        code,
        message
      } = res;
      code === 200 ? (emailFrameElement.style.display = "none", successFrame.classList.add("successSub_active"), setTimeout(function() {
        successFrame.classList.remove("successSub_active")
      }, 4e3)) : code === 108 || code === 107 ? (invalidTip.style.visibility = "visible", invalidTip.innerHTML = popupData.popup_subscribed_text) : code === 109 ? (invalidTip.style.visibility = "visible", invalidTip.innerHTML = popupData.popup_validation_text) : (invalidTip.style.visibility = "visible", invalidTip.innerHTML = message)
    }).finally(() => {
      submitBtn.parentElement.className = "frame-submit"
    })
  }

  function formatPhoneNumber(num) {
    const code = iti.getSelectedCountryData().dialCode;
    return num = num.replace(/\b(0+)/gi, ""), num.startsWith(code) ? num : code + num
  }

  function initSms() {
    const emailInput2 = q(".buyer-email"),
      phoneInput = q(".buyer-phone"),
      phoneContainer = q(".buyer-phone-container"),
      emailTypeBtn = q(".email-type"),
      smsTypeBtn = q(".sms-type");
    q(".iti--allow-dropdown") || initPhoneInput().then(res => {
      res.code === 200 && popupData.popup_option === 3 && (selectedType = new Proxy({
        type: "email"
      }, {
        set(target, key, newVal) {
          return debug && console.log(target, key, newVal), target[key] = newVal, toggleInput(newVal), !0
        }
      }), toggleInput(selectedType.type), emailTypeBtn.addEventListener("click", () => {
        selectedType.type = "email"
      }), smsTypeBtn.addEventListener("click", () => {
        selectedType.type = "sms"
      }))
    });

    function initPhoneInput() {
      return new Promise(resolve => {
        addScript("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css").then(cssRes => {
          cssRes.code === 200 && (document.head.insertAdjacentHTML("beforeend", `
      <style>
        .iti__flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/img/flags.png");}
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
              .iti__flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/img/flags@2x.png");}
              }
        .iti.iti--allow-dropdown {
          width: 100%;
        display: flex;
        height: var(--sa-button-height-normal);
        margin-top: 10px;
              }
        .iti__country {
          color: #777777;
              }
        .iti--container {
          z-index: 999999999 !important;
              }
      </style>
      `), addScript("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/intlTelInput.min.js", !0).then(script => {
            script.onload = function() {
              iti = window.intlTelInput(phoneInput, {
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/utils.min.js",
                autoPlaceholder: "aggressive",
                initialCountry: popupData.sms_default_region || ""
              }), debug && console.log("Script Loaded"), debug && console.log(phoneInput), phoneInput.addEventListener("input", e => {
                debug && console.log("getNumber", iti.getNumber()), debug && console.log("getSelectedCountryData", iti.getSelectedCountryData()), iti.isValidNumber() ? toggleInvalidTip(!1) : toggleInvalidTip(!0)
              }), phoneInput.addEventListener("blur", e => {
                debug && console.log("isValidNumber", iti.isValidNumber()), iti.isValidNumber() ? toggleInvalidTip(!1) : toggleInvalidTip(!0)
              })
            }, document.body.appendChild(script), resolve({
              code: 200
            })
          }))
        })
      })
    }

    function toggleInput(type) {
      switch (invalidTip.style.visibility = "hidden", type) {
        case "sms":
          emailInput2.style.display = "none", phoneContainer.style.display = "flex", emailTypeBtn.className = "email-type", smsTypeBtn.className = "sms-type type-selected";
          break;
        case "email":
          smsTypeBtn.className = "sms-type", emailInput2.style.display = "block", phoneContainer.style.display = "none", emailTypeBtn.className = "email-type type-selected";
          break;
        default:
          invalidTip.style.visibility = "hidden";
          break
      }
    }
  }

  function addScript(url, returnWithScript = !1) {
    return new Promise((resolve, reject) => {
      try {
        const type = url.endsWith(".js") && "js" || "css";
        if (type === "js") {
          const script = document.createElement("script");
          script.setAttribute("type", "text/javascript"), script.setAttribute("src", url), returnWithScript && resolve(script), document.head.appendChild(script), resolve({
            code: 200,
            data: script,
            type: "script"
          })
        } else if (type === "css") {
          const link = document.createElement("link");
          link.setAttribute("rel", "stylesheet"), link.setAttribute("href", url), returnWithScript && resolve(link), document.head.appendChild(link), resolve({
            code: 200,
            data: link,
            type: "style"
          })
        }
      } catch (err) {
        reject({
          code: 600,
          err
        })
      }
    })
  }

  function createRequestId(length) {
    length = length && length < 64 ? length : 63;
    let result = "";
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    for (let i = 0; i < length; ++i) result += chars[Math.floor(Math.random() * chars.length)];
    const timestamp = +new Date;
    return result + timestamp
  }

  function request(url, params, callback, method = "POST") {
    return new Promise((resolve, reject) => {
      url || resolve({
        code: 999,
        data: "\u6CA1\u6709\u4F20api\u5730\u5740"
      });
      try {
        const finalParams = params || {};
        (params && !Object.keys(params).includes("shopId") || !params) && (finalParams.shopId = shopId);
        const xmlHttp = new XMLHttpRequest;
        xmlHttp.open(method, url, !0), xmlHttp.setRequestHeader("Content-Type", "application/json"), xmlHttp.setRequestHeader("authorization", domain), xmlHttp.setRequestHeader("Org-Request-ID", createRequestId(37)), xmlHttp.setRequestHeader("Org-Request-URL", window.location.href), xmlHttp.send(JSON.stringify(finalParams)), xmlHttp.onreadystatechange = function() {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200 || xmlHttp.status == 304) {
            const json = JSON.parse(this.responseText),
              {
                code,
                data
              } = json;
            code === 200 ? (callback && callback(data), resolve(json)) : code !== 500 && resolve(json)
          }
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  function getUserConfig() {
    const params = {
        type: "user_config"
      },
      url = baseUrl + "api/v1/collect/config";
    request(url, params)
  }
  async function getProductStatus(baseApiUrl) {
    debug && console.log("getProductStatus");
    let productIds = [];
    if (window.ShopifyAnalytics && ShopifyAnalytics.meta.product) {
      const productId2 = ShopifyAnalytics.meta.product.id;
      productIds.push(productId2)
    } else return;
    const params = {
        shopId,
        productIds,
        type: 2
      },
      url = baseApiUrl + "api/v1/customer/getVariantBtStatus";
    await request(url, params).then(res => {
      debug && console.log("Get Prodcut Status Success");
      const {
        apiCode,
        products
      } = res;
      apiCode === 200 && products && (showVariants = products[0].variants.map(variant => variant.variantRid))
    })
  }

  function getCustomerInfo() {
    let id = "";
    if (window.ShopifyAnalytics && ShopifyAnalytics.meta.page.customerId) id = ShopifyAnalytics.meta.page.customerId;
    else return;
    const params = {
        shopId,
        customerId: id
      },
      url = baseUrl + "api/v1/customer/getCustomerInfo";
    request(url, params).then(res => {
      const {
        apiCode,
        customer
      } = res;
      apiCode === 200 && customer && (debug && console.log("Get Customer Info Success"), customerInfo = JSON.parse(JSON.stringify(customer)))
    })
  }

  function importStyles() {
    const styles = `<style>
        body {
          --sa-border-normal: 1px solid #d9d9d9;
        --sa-border-hover: 2px solid skyblue;
        --sa-button-height-normal: 44px;
        --sa-border-radius-input: 4px;
        --sa-border-radius-button: 4px;
        --sa-border-color: #d9d9d9;
        --sa-disabled-bgc: #f2f2f2;
        --sa-btn-hover-bgc: #f6f6f7;
        --sa-input-padding: 8px;
    }
        ${customStyle}
        #email-me-frame * {
          box-sizing: border-box;
    }
        #email-me-frame *:empty {
          display: inherit;
    }
        .email-me-button{
          width: 100%;
        height: var(--sa-button-height-normal);
        /*background-color: rgb(51, 51, 51);*/
        /*border-radius: 7px;*/
        /*color: white;*/
        font-size: 15px;
        cursor: pointer;
        letter-spacing: 1px;
        border-radius: var(--sa-border-radius-button);
        align-items:center;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        transition: all linear .15s;
        position: relative;
  }
        .email-me-inlineButton {
          display: none;
  }
        #email-me-frame {
          position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
        z-index: 9999999;
        display: none;
  }

        #email-me-frame input {
          background-color: #ffffff;
        border: 1px solid var(--sa-border-color);
        border-radius: var(--sa-border-radius-input);
  }

        #email-me-frame .email-frame-content{
          width: 65%;
        /*height: 358px;*/
        max-width: 398px;
        min-width: 300px;
        background: white;
        border-radius: 7px;
        padding-bottom:16px;
        border: 1px solid var(--sa-border-color);
        box-shadow: 0 0 18px #00000030;
        animation: fadeIn .15s linear;
        position: fixed;
        top: 50%; left: 50%;
        bottom: 0;
        height: 100%;
        max-height: 508px;
        transform: translate(-50%, -50%);
        overflow-y: scroll;
  }
        .email-frame-content::-webkit-scrollbar {
          /*\u6EDA\u52A8\u6761\u6574\u4F53\u6837\u5F0F*/
          width: 4px; /*\u9AD8\u5BBD\u5206\u522B\u5BF9\u5E94\u6A2A\u7AD6\u6EDA\u52A8\u6761\u7684\u5C3A\u5BF8*/
        height: 1px;
  }
        .email-frame-content::-webkit-scrollbar-thumb {
          /*\u6EDA\u52A8\u6761\u91CC\u9762\u5C0F\u65B9\u5757*/
          border-radius: 10px;
        background: #a9a9a9;
  }
        .email-frame-content::-webkit-scrollbar-track {
          /*\u6EDA\u52A8\u6761\u91CC\u9762\u8F68\u9053*/
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #ededed;
        border-radius: 10px;
  }

        #email-me-frame .frame-close {
          margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 5px;
        cursor: pointer;
        display: inline-block;
        width: 100%;
        height: 2px;
        background: #333;
        transform: rotate(
        45deg
        );
  }
        #email-me-frame .frame-close::after{
          content: "";
        display: block;
        height: 2px;
        background: #333;
        transform: rotate(
        -90deg
        );
  }

        #email-me-frame .email-frame-header{
          display: flex;
        justify-content: center;
        clear: both;
        padding-top: 2px;
        padding-left: 30px;
        margin-bottom: 7px;
        font-family: "Arial",sans-serif;
  
  }

        #email-me-frame .close-box{
          width: 20px;
        height: 19px;
        float: right;
        margin-right: 5px;
        margin-top: 5px;
        cursor: pointer;
  }

        #email-me-frame .frame-email-logo svg{
          background-size: 25px 25px;
        width: 24px;
        margin-top: 3px;
  }

        #email-me-frame .frame-title{
          padding-left: 13px;
        flex: 1;
        color:#1A1B18;
        font-size: 16px;
        font-weight: 600;
        padding-top: 3px;
  }

        #email-me-frame .split-line {
          border: 1px solid var(--sa-border-color);
  }

        #email-me-frame .email-frame-body{
          padding-left: 30px;
        padding-right: 30px;
  }

        #email-me-frame .frame-body-content{
          letter-spacing: 0.01rem;
        line-height: 1.6rem;
        font-weight: 500;
        font-size: 15px;
        margin-top:16px;
        margin-bottom: 5px;
        color:#1A1B18;
  }

        #email-me-frame .buyer-email,
        #email-me-frame .buyer-phone-input,
        #email-me-frame .buyer-name{
          border-radius: var(--sa-border-radius-input);
        border: 1px solid var(--sa-border-color);
        margin: 10px 0 0 0;
        width: 100%;
        font-size: 15px ;
        outline: none !important;
        height: var(--sa-button-height-normal) !important;
        color: #000 !important;
        background: #fff !important;
        padding: var(--sa-input-padding) !important;
  }
        .buyer-phone-input {
          border-left: none;
  }

        #email-me-frame .notify-type-toggler {
          display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: 15px ;
        height: var(--sa-button-height-normal) !important;
        color: #000 !important;
        background: #fff !important;
        margin-top: 10px;
  }
  .notify-type-toggler > div {
          flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--sa-border-color);
        height: 100%;
        cursor: pointer;
        transition: all linear .14s;
  }
  .notify-type-toggler > div:hover {
          background: var(--sa-btn-hover-bgc)
  }
  .notify-type-toggler > div:nth-child(1) {
          border-radius: var(--sa-border-radius-button) 0 0 5px;
  }
  .notify-type-toggler > div:nth-child(2) {
          border-left: 0;
        border-radius: 0 5px 5px 0;
  }
        .join-mailing-container {
          display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 12px;
        margin-top: 4px;
  }
        .join-mailing-listLabel {
          margin: 0 0 0 8px;
        color: #333333 !important;
  }
        #email-me-frame .buyer-phone-block {
          display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        height: var(--sa-button-height-normal);
        padding: var(--sa-input-padding);
  }
        #email-me-frame .country-selector {
          width: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border: 1px solid var(--sa-border-color);
        cursor: pointer;
  }
        #email-me-frame .country-selector:hover {
          background: var(--sa-disabled-bgc);
  }
        #email-me-frame .country-selector-list {
          max-width: 120px;
        position: absolute;
        border: 1px solid var(--sa-border-color);
        border-radius: 8px;
        background-color: #fff;
        list-style: none;
        padding: 0px;
        max-height: 120px;
        overflow-y: scroll;
        margin-bottom: 50%;
  }
        #email-me-frame .country-selector-list li {
          display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        padding: var(--sa-input-padding);
        cursor: pointer;
        transition: all linear .14s;
        bottom: 0;
  }
        #email-me-frame .country-selector-list li:hover {
          background-color: #eeeeee;
  }
        .buyer-phone {
          outline: none;
        flex: 1;
        transition: all linear .14s;
        border: var(--sa-border-normal);
        border-radius: var(--sa-border-radius-button);
  }
        input::-webkit-input-placeholder{
          color:gray;
        font-size:15px;
  }

        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
          color:gray;
        font-size:15px;
  }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
          color:gray;
        font-size:15px;
  }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
          color:gray;
        font-size:15px;
  }


        #email-me-frame .frame-submit{
          position: relative;
  }

        /* loading\u7684\u4EE3\u7801 */
        .frame-submit.loading {
          pointer-events: none;
        cursor: not-allowed;
  }
        .frame-submit.loading::after {
          content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border-bottom: 2px solid #ddd;
        border-right: 2px solid #ddd;
        animation: spin ease-in-out 0.8s infinite;
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translate(-50%, -50%);
  }
        .frame-submit.loading .email-me-submitButton {
          opacity: 0;
  }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
    100% {
          transform: rotate(360deg);
    }
  }

        #email-me-frame .selected-unavailable-variant{
          border-radius: var(--sa-border-radius-button);
        border: 1px solid var(--sa-border-color);
        margin: 10px 0 0 0;
        width: 100%;
        height: var(--sa-button-height-normal);
        font-size: 15px;
        outline: none;
        color: #000;
        padding: var(--sa-input-padding) !important;
        background: #fff;
  }

        #email-me-frame .invalid-email-tips{
          color: rgb(219, 17, 42);
        font-weight: 500;
        letter-spacing: 0;
        visibility: hidden;
        line-height: 24px;
        font-size: 12px;
  }

        #email-me-frame .email-frame-footer{
          padding: 0 30px;
        margin-top: 20px;
  }

        #email-me-frame .email-frame-footer .email-footer-tips{
          font-size: 14px;
        font-family: "Arial",sans-serif;
        line-height: 1.1em;
        color: #ccc;
  }
        #email-me-frame .email-app-link{
          color: #008ddd;
  }
        #email-me-frame .email-app-link:hover{
          color: #0089d6;
  }
        #email-me-frame .email-app-link:visited{
          color: #008ddd;
  }
        #email-me-frame .email-app-link:active{
          color: #008ddd;
  }
        #email-me-frame .email-provider {
          margin-top: 8px;
        text-align: center !important;
        font-family: "Arial",sans-serif;
        color: black;
        font-size: 12px;
  }
        .successSub_header img {
          width: 32px;
        margin: 0;
}
        .successSub {
          transition: width 0.5s ease-out, opacity 0.5s ease-in, visibility 0.5s ease-in;
        max-width: 350px;
        background: rgb(255, 255, 255);
        padding: 20px;
        border-radius: 7px;
        border:1px solid #445958 ;
        display: block;
        z-index: -1;
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        visibility: hidden;
        opacity: 0;
        color: #464646;
}
        .successSub_active {
          width: 100%;
        visibility: visible;
        opacity: 1;
        z-index: 999999999;
}
        .product-restore-email img {
          width: 44px;
        margin: 0;
}
        #email-me-frame img {
          /* width: 100%; */
          width: 50px;
        margin-right: 8px;
}
        .successSub_header {
          width: 100%;
        align-items: center;
        justify-content: space-between;
        display: flex;
}
        .successSub_header_text {
          font-weight: 700;
        flex: 1;
        padding-left: 8px;
}
        .successSub_close-box {
          width: 20px;
        height: 20px;
        padding: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transform: translate(8px, -16px);
}
        .successSub_frame-close {
          margin-bottom: 10px;
        cursor: pointer;
        display: inline-block !important;
        width: 100%;
        height: 1px;
        background: #333;
        transform: rotate(
        45deg
        );
}
        .successSub_frame-close::after {
          content: '';
        display: block;
        height: 1px;
        background: #333;
        transform: rotate(
        -90deg
        );
}
        .successSub_text {
          margin-top: 8px;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;
}
        .product-restore-email{
          justify-content: flex-start;
        width: 100%;
        flex:1;
  }
        .product-restore-email input {
          background: #ffffff;
  }
        #product-restore-email-float{
          display: flex;
        z-index:99999999999;
        justify-content: center;
        position:fixed;

  }
        .float-btn-left{
          transform: rotate(90deg) translateY(-100%);
        transform-origin: 0% 0%;
        left:0;
  }
        .float-btn-right{
          transform: rotate(-90deg) translateY(-100%);
        transform-origin: 100% 0%;
        right:0;
  }
        #product-restore-email-float .email-me-button{
          padding: 0.8rem 1.2rem;
  }
        #email-me-frame .email-provider span{
          color: blue;
  }
        @keyframes fadeIn {
          0% {
            opacity: .6;
          }
      100% {
          opacity: 1;
      }
  }
        /* \u6EDA\u52A8\u6761\u8BBE\u7F6E\u6CA1\u6709\u751F\u6548 */
        /* \u6EDA\u52A8\u6761\u6574\u4F53\u90E8\u5206\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5BBD\u5EA6\u5565\u7684 */
        #email-me-frame .country-selector-list ::-webkit-scrollbar {
          width: 2px;
        height: 2px;
  }
        /* \u6EDA\u52A8\u6761\u4E24\u7AEF\u7684\u6309\u94AE */
        #email-me-frame .country-selector-list ::-webkit-scrollbar-button {
          display: none !important;
  }
        /* \u5916\u5C42\u8F68\u9053 */
        #email-me-frame .country-selector-list ::-webkit-scrollbar-track  {
          display: none !important;
  }
        /* \u5185\u5C42\u6EDA\u52A8\u69FD */
        #email-me-frame .country-selector-list ::-webkit-scrollbar-track-piece{
          display: none !important;
  }
        /* \u6EDA\u52A8\u7684\u6ED1\u5757  */
        #email-me-frame .country-selector-list ::-webkit-scrollbar-thumb {
          background-color:#ff9900;
        background-color:rgba(255,153,0, 0.6);
        border-radius: 10px;
  }
        .type-selected {
          pointer-events: none;
        background-color: var(--sa-disabled-bgc);
  }

      </style>`;
    document.head.insertAdjacentHTML("beforeend", styles), document.head.insertAdjacentHTML("beforeend", '<style id="email-insert-style"></style>')
  }

  function addStyle(style) {
    typeof style == "string" ? document.head.insertAdjacentHTML("beforeend", style) : document.head.appendChild(style)
  }

  function getQueryString(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
      r = window.location.search.substr(1).match(reg);
    return r != null ? unescape(r[2]) : null
  }

  function changeStatus(data) {
    const emailCustomerId = getQueryString("emailCustomerId");
    if (!emailCustomerId) return;
    const variantId = getQueryString("variant");
    if (!variantId) return;
    const {
      baseUrl: baseUrl2
    } = data, params = {
      id: emailCustomerId,
      shopId,
      variantId
    }, url = baseUrl2 + "api/v1/email/changeEmailStatus";
    request(url, params)
  }

  function overwritePushstate() {
    const oldPushState = history.pushState;
    history.pushState = function() {
      const ret = oldPushState.apply(this, arguments);
      return window.dispatchEvent(new Event("pushstate")), window.dispatchEvent(new Event("locationchange")), ret
    };
    const oldReplaceState = history.replaceState;
    history.replaceState = function() {
      const ret = oldReplaceState.apply(this, arguments);
      return window.dispatchEvent(new Event("replacestate")), window.dispatchEvent(new Event("locationchange")), ret
    }, window.addEventListener("popstate", () => {
      window.dispatchEvent(new Event("locationchange"))
    })
  }

  function q(selector, context) {
    let node;
    return context ? node = context.querySelector(selector) : node = document.querySelector(selector), node
  }

  function qa(selector, context) {
    let nodes;
    return context ? nodes = context.querySelectorAll(selector) : nodes = document.querySelectorAll(selector), nodes
  }

  function shopLanguageCallback() {
    locale = q(".notranslate").querySelector(".selected img[alt]").alt
  }

  function collRednerProName(curProId) {
    productTitle = collVariants.find(i => i.proId == curProId).productName;
    const productTitleEl = q(".frame-body-content");
    productTitleEl.innerText = productTitle
  }

  function addCustomModify() {
    switch (shopId) {
      case 55605198922: {
        customStyle += `#email-me-frame .frame-title, #email-me-frame input {
        font-family: 'Sabon Next';
        }`;
        break
      }
      case 66366374137: {
        isCollPage && (isMobile && (customStyle += `@media only screen and (min-width: 280px) and (max-width: 757px) {
							.product-restore-email{
								max-width: initial !important;
							}
						 .email-me-inlineButton{line-height: calc(1 + .2 / var(--font-body-scale));height:auto !important;padding: 6px;}}`), customStyle += `.quick-add__submit[disabled] {
						display: none;
					}.email-me-inlineButton{min-height: calc(4.5rem + var(--buttons-border-width) * 2);}`);
        break
      }
      case 66697953568:
        isProPage && (customFeature = function() {
          const n = document.querySelector(".product_payments_btns .shopify-payment-button__button[disabled]");
          n && (n.closest(".product_payments_btns").style.display = "none");
          const available2 = document.querySelectorAll(".swatch.clearfix .available");
          document.querySelectorAll(".swatch.clearfix .soldout").forEach(it => it.style.display = "none"), available2.length === 0 && (document.querySelector(".swatch.clearfix").style.display = "none")
        });
      case 57581600963:
        customStyle += `
				#email-me-frame{font-family: synthese, sans-serif !important;}
				#email-me-frame .frame-title {
					padding-left: 0px !important;
					color: #0d3860 !important;
					font-size: 11px !important;
					font-weight: 400  !important;
					padding-top: 3px  !important;
					text-transform: capitalize;
			}
			#email-me-frame .frame-body-content {
				font-weight: 300 !important;
				font-size: 11px !important;
				color: #0d3860 !important;
		}
				button .email-me-inlineButton {
					font-weight: 400 !important;
					border-width: 1px;
				}`;
      case 72470462767: {
        isCollPage && (customStyle += `.card-information__button button[disabled] {
          display: none;}.restore-email-wrapper{width:100%}.product-restore-email,.product-restore-email .email-me-inlineButton{margin:0 !important}
					.restore-email-wrapper+.item_cart_items {
						display: none;
					}.email-me-button.email-me-inlineButton {
							font-weight: 600 !important;
					}@media only screen and (max-width: 768px){
						.email-me-button.email-me-inlineButton {
								font-size: 12px !important;
						}
					}`);
        break
      }
      case 73514025266: {
        themeId === 146007327026 && isCollPage && (customStyle += ".product-restore-email {width: 80% !important;margin: 0 auto;}");
        break
      }
      case 58193838255: {
        isMobile && isCollPage && (customStyle += `.email-me-button.email-me-inlineButton {
            letter-spacing: 0px;
        }`);
        break
      }
      case 53793915066: {
        themeId === 136421834975 && (customStyle += ".product-restore-email{max-width:initial !important}");
        break
      }
      case 11881800:
        customFeature = function() {
          insertStyle.textContent += `button.custom_pers.product-add-to-cart-btn {
          background-color: #fff !important;
          color: #000;
         }`, inlineEmailDiv[0].insertAdjacentHTML("beforebegin", `<div style="text-align: center;color: #000;margin-bottom: 14px">
            GET NOTIFIED WHERE BACK IN STOCK</div>`)
        };
      case 67088286014: {
        customFeature = function() {
          q("#email-me-frame") && (q(".frame-email-logo").innerHTML = `
              <svg class="icon" style="width:19px;height: 19px;margin-top:5px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2253" height="128" width="128"><path d="M871.673333 770.813333l-165.933333-165.94a53.4 53.4 0 0 0-75.426667 0l-37.713333 37.713334c-21.333333 21.333333-90.413333 0.1-150.846667-60.34S360.046667 452.76 381.413333 431.4l37.713334-37.713333a53.4 53.4 0 0 0 0-75.426667l-165.94-165.933333a53.393333 53.393333 0 0 0-75.42 0l-37.713334 37.713333c-27.866667 27.866667-44.84 64.52-50.46 108.946667-5.213333 41.206667-0.406667 87.42 14.28 137.333333C133.333333 536.586667 199.773333 642 290.9 733.1S487.42 890.666667 587.653333 920.126667c36.926667 10.86 71.813333 16.32 104.146667 16.32a264.333333 264.333333 0 0 0 33.213333-2.04c44.426667-5.62 81.08-22.593333 108.946667-50.46l37.713333-37.713334a53.393333 53.393333 0 0 0 0-75.42z" fill="#bb8461" p-id="2254"></path></svg>
            `)
        };
        break
      }
      case 52260241573: {
        customFeature = function() {
          const n = q("#email-me-frame .frame-submit");
          n && n.insertAdjacentHTML("afterend", "<p>By signing up, you agree to receive promotional and marketing information from Mango People</p>")
        };
        break
      }
      case 56661573841: {
        customFeature = function() {
          if (document.querySelector(".sms-type")) {
            let me = new Event("click");
            document.querySelector(".sms-type").dispatchEvent(me)
          }
        };
        break
      }
      case 71669449038: {
        customFeature = function() {
          qa(".email-frame-body input").forEach(i => i.removeAttribute("type"))
        };
        break
      }
      case 19073267: {
        customFeature = function() {
          q("#join-mailing-list") && q("#join-mailing-list").removeAttribute("checked")
        };
        break
      }
      case 66072805644: {
        customFeature = function() {
          setTimeout(() => {
            const n = q("#email-me-frame .buyer-phone");
            n && (n.placeholder = n.placeholder.substring(1))
          }, 2e3)
        };
        break
      }
      case 48441458840:
        if (ShopifyAnalytics.meta.page.pageType === "collection") {
          themeId === 137027780861 && (customStyle += ".quick-add__submit.button.button--full-width.button--secondary[disabled]{display:none}"), customFeature = function() {
            qa(".product-restore-email").forEach(i => i.parentNode.style.gridRowStart = 3)
          };
          break
        }
      case 73761816874:
        collectionAccess = !0
    }
  }
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/product_restore_email.js.map?v=50450150359517315191749762316