(function() {
  const currentSwymJSPath = '//procdn.swymrelay.com/code/swym-shopify.js';
  const currentSwymStorePath = 'https://swymstore-v3pro-01.swymrelay.com';
  const dnsPrefetchLink = `<link rel="dns-prefetch" href="https://${currentSwymStorePath}" crossorigin>`;
  const dnsPrefetchLink2 = `<link rel="dns-prefetch" href="${currentSwymJSPath}">`;
  const preConnectLink = `<link rel="preconnect" href="${currentSwymJSPath}">`;
  const swymSnippet = document.getElementById('wishlist-embed-init');
  if (dnsPrefetchLink) {
    swymSnippet.insertAdjacentHTML('afterend', dnsPrefetchLink);
  }
  if (dnsPrefetchLink2) {
    swymSnippet.insertAdjacentHTML('afterend', dnsPrefetchLink2);
  }
  if (preConnectLink) {
    swymSnippet.insertAdjacentHTML('afterend', preConnectLink);
  }
})()