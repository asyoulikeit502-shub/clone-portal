const flitsMiniAccountWidgetMainScript = "https://cdn.shopify.com/extensions/019c763d-6694-737b-a903-476ba949f627/flits-81/assets/main.storeFrontMiniAccountWidget.4.6.10.js";
const miniAccountWidgetUrl = window?.flitsThemeAppExtensionObjects?.Metafields?.FINAL_SETTINGS?.themeSettingMetafield?.data?.microfront_remotes?.miniAccountWidgetUrl;

let widgetSettingData = window?.flitsThemeAppExtensionObjects?.Metafields;
const currentThemeId = window?.flitsThemeAppExtensionObjects?.theme?.id;
widgetSettingData =
  widgetSettingData?.[
    `FLITS_EXTENSION_ONSITE_CONTENT_ACCOUNT_WIDGET_${currentThemeId}`
  ] ?? widgetSettingData?.FLITS_EXTENSION_ONSITE_CONTENT_ACCOUNT_WIDGET;

const isAccountWidgetAvailable = window?.flitsThemeAppExtensionObjects?.Metafields?.IS_ACCOUNT_WIDGET_AVAILABLE;
const isAccountWidgetEnable = widgetSettingData?.admin_settings?.is_enable;

// only load mini account widget if it is in current plan and also enable for current theme (current theme can be customized)
if (isAccountWidgetAvailable && isAccountWidgetEnable) {
  let scriptEle = document.createElement("script");
  scriptEle.setAttribute("src", miniAccountWidgetUrl ?? flitsMiniAccountWidgetMainScript);
  scriptEle.defer = true;
  scriptEle.async = true;
  document.body.appendChild(scriptEle);
}