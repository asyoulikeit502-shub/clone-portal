function loadScript(src) {
  let scriptEle = document.createElement("script");
  scriptEle.setAttribute("src", src);
  scriptEle.defer = true;
  scriptEle.async = true;
  document.body.appendChild(scriptEle);
}

function checkContainerLoading() {
  const containerNeededPage = "metaobject";
  if (containerNeededPage === null || containerNeededPage === undefined) {
    return true;
  }

  const arrayofPage = containerNeededPage.split(',');
  if (containerNeededPage && arrayofPage.includes(window.flitsThemeAppExtensionObjects.request.page_type)) {
    return true;
  }
  return false;
}

if (checkContainerLoading())
  loadScript(window.flitsThemeAppExtensionObjects.flitsGetStoreFrontContainerUrl());