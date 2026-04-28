document.addEventListener('DOMContentLoaded', function() {
  recharge.init({
    storeIdentifier: 'her-fantasy-box.myshopify.com',
    storefrontAccessToken: 'strfnt_a31cc63db04726b305c0b9a968e2cbdf7b236e3383c73a31ed28ec7989f0d387',
    appName: 'appName',
    appVersion: '1.0.0',
    loginRetryFn: () => {
      return recharge.auth.loginShopifyAppProxy().then(session => {
        return session;
      });
    },
  });
});