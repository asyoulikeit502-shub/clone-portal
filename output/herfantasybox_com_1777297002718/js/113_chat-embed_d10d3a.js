// Rep AI CDN Integration JavaScript

/**
 * Rep AI CDN Script Injector
 * Loads the appropriate chat script based on environment
 */
window.RepAI = window.RepAI || {};

// Set simulator platform in sessionStorage before any CDN injection
// window.sessionStorage.setItem("vfplatform", "SIMULATOR");

window.RepAI.injectCDNScript = function(partnerKey, env) {
  // Validate required data
  if (!partnerKey) {
    console.error("Rep AI: Partner key not found");
    return;
  }

  // Determine which CDN script to look for based on environment
  const cdnFiles = {
    qa: "vfLoader-qa.js",
    prod: "vfLoader.js",
  };

  const expectedCdnFile = cdnFiles[env] || cdnFiles.qa;

  // Check if CDN is already loaded (either isVfChat exists OR script exists on page)
  const existingScript =
    document.querySelector(`script[src*="${expectedCdnFile}"]`) ||
    document.getElementById("vfLoader");

  if (window.isVfChat || existingScript) {
    console.log(
      window.isVfChat ?
      "Rep AI: isVfChat detected - CDN already loaded" :
      `Rep AI: ${expectedCdnFile} script already exists on page`,
    );
    window.RepAI.handleExistingChat();
    return;
  }

  // CDN script not found, inject it
  const cdnUrls = {
    qa: "https://d1o5e9vlirdalo.cloudfront.net/vfLoader-qa.js",
    prod: "https://d1o5e9vlirdalo.cloudfront.net/vfLoader.js",
  };

  const cdnUrl = cdnUrls[env] || cdnUrls.qa;

  // Create and inject CDN script
  const script = document.createElement("script");
  script.src = cdnUrl;
  script.id = "vfLoader";
  script.defer = true;
  script.async = true;

  // Set data attributes for the CDN script
  script.dataset.pk = partnerKey;
  script.dataset.e = env;

  // Inject script into document
  const targetElement = document.body || document.documentElement;
  targetElement.appendChild(script);

  console.log(
    `Rep AI: Injecting CDN script from ${cdnUrl} with pk=${partnerKey}, e=${env}`,
  );
};

/**
 * Handle existing chat that might already be loaded
 */
window.RepAI.handleExistingChat = function() {
  console.log("Rep AI: Using existing CDN");

  // Check if window.rep.show is directly available
  if (window.rep && window.rep.show && typeof window.rep.show === "function") {
    console.log("Rep AI: Chat show method available, showing directly");
    window.rep.show();
    return;
  }

  // If show method not available, check if we have window.rep.on
  if (window.rep) {
    // Check if event system exists
    if (!window.rep.on || typeof window.rep.on !== "function") {
      console.log("Rep AI: Event system not available, adding polyfill");
      window.RepAI.addEventPolyfill();
    }

    // Now set up integration
    window.RepAI.setupRepIntegration();
  }
};

/**
 * Setup Rep AI integration using window.rep.on API
 */
window.RepAI.setupRepIntegration = function() {
  if (!window.rep) {
    console.warn("Rep AI: window.rep not available");
    return;
  }

  // Event system is guaranteed to exist at this point
  window.rep.on("load", () => {
    if (
      window.rep &&
      window.rep.show &&
      typeof window.rep.show === "function"
    ) {
      window.rep.show();
    }
  });
};

/**
 * Add Rep AI event system polyfill
 */
window.RepAI.addEventPolyfill = function() {
  // Polyfill code exactly as provided
  var __assign =
    (this && this.__assign) ||
    function() {
      return (__assign =
        Object.assign ||
        function(n) {
          for (var i, o = 1, d = arguments.length; o < d; o++)
            for (var l in (i = arguments[o]))
              Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          return n;
        }).apply(this, arguments);
    };

  !(function() {
    var n, i, o, d;
    if (
      !(null ===
        (n = null === window || void 0 === window ? void 0 : window.rep) ||
        void 0 === n ?
        void 0 :
        n.on)
    ) {
      var l = __assign({},
          null !==
          (o =
            null ===
            (i =
              null === window || void 0 === window ? void 0 : window.rep) ||
            void 0 === i ?
            void 0 :
            i.events) && void 0 !== o ?
          o :
          {},
        ),
        r = __assign({},
          null !==
          (d = null === window || void 0 === window ? void 0 : window.rep) &&
          void 0 !== d ?
          d :
          {},
        );
      (r.events = l),
      (r.on = function(n, i) {
        switch (n) {
          case "load":
            (null == l ? void 0 : l[n]) ?
            Array.isArray(null == l ? void 0 : l[n]) && l[n].push(i): (l[n] = [i]);
        }
      }),
      (window.rep = r);
    }
  })();
};