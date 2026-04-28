if (!window.customerHub) {
  window.customerHub = {};
}
window.customerHub.storefrontRoutes = {
  login: "https://www.rejuvia.co/customer_authentication/redirect?locale=en&region_country=US?return_url=%2F%23k-hub",
  register: "https://shopify.com/41870852258/account?locale=en&buyer_flags=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJyZWp1dmlhbWVkaWNhbC5teXNob3BpZnkuY29tIiwiZmxhZ3MiOltdLCJleHAiOjE3Nzc5NjI3ODIsIm5iZiI6MTc3NzM1Nzk4Mn0.vdr-qZahHnvaEcwn0r2j6PJzXcmodMEHAVRRZvKV_98?return_url=%2F%23k-hub",
  logout: "/account/logout",
  profile: "/account",
  addresses: "/account/addresses",
};

window.customerHub.userId = null;

window.customerHub.storeDomain = "rejuviamedical.myshopify.com";




window.customerHub.storeLocale = {
  currentLanguage: 'en',
  currentCountry: 'US',
  availableLanguages: [

    {
      iso_code: 'en',
      endonym_name: 'English'
    }

  ],
  availableCountries: [

    {
      iso_code: 'US',
      name: 'United States',
      currency_code: 'USD'
    }

  ]
};