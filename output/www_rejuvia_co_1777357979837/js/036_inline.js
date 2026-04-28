! function() {
  const newsletterFormSelectors = ["#ContactFooter", "#wisepops-root", "#contact_form", "form[id*=\"newsletter\" i]", "form[id*=\"subscribe\" i]", "form.ml-block-form", "#email_signup", "form[id^=omnisend-form]"];
  const newsletterForm = newsletterFormSelectors.join(",");
  const sendNewsletterEvent = (beacon) => {
    let name = 'Lead';
    if (!name) {
      return;
    }
    if (name === 'Subscribe') {
      name = 'Lead';
    }
    if (beacon) {
      edgetag("tag", name, {}, {}, {
        method: "beacon",
        destination: window.edgetagSharedVariables.tagUrl
      });
    } else {
      edgetag("tag", name, {}, {}, {
        destination: window.edgetagSharedVariables.tagUrl
      });
    }
  };
  const getUser = (form, selectors) => {
    const user = {};
    if (!selectors) {
      return user;
    }
    Object.entries(selectors).forEach(([userKey, selector]) => {
      if (!selector || selector.length === 0) {
        return;
      }
      const selectorArray = Array.isArray(selector) ? selector : [selector];
      for (const selector of selectorArray) {
        if (!selector) {
          continue;
        }
        const inputUserValue = form.querySelector(selector);
        const userValue = (inputUserValue && inputUserValue.value) || "";
        if (userValue) {
          user[userKey] = userValue;
          break;
        }
      }
    });
    return user;
  };
  const sendUserData = (userData, isBeacon) => {
    if (!userData || !Object.keys(userData).length) {
      return;
    }
    if (isBeacon) {
      edgetag('data', userData, {}, {
        method: 'beacon',
        destination: window.edgetagSharedVariables.tagUrl
      });
      return;
    }
    edgetag("data", userData, {}, {
      destination: window.edgetagSharedVariables.tagUrl
    });
  };
  const actions = [{
    selectors: ["[type=\"submit\"]", newsletterForm],
    length: 2,
    fun: (ele) => {
      const user = getUser(ele, {
        email: ["input[type=\"email\"]", "input[name*=\"email\" i]:not([type=\"hidden\" i])"],
        phone: ["input[type=\"tel\"]", "input[name*=\"phone\" i]:not([type=\"hidden\" i])"],
        firstName: "input[name*=\"name\" i]:not([type=\"hidden\" i])",
        dateOfBirth: "input[name*=\"birthday\" i]:not([type=\"hidden\" i])"
      });
      sendUserData(user);
      sendNewsletterEvent(true);
    },
    current: 0
  }, {
    selectors: ["button:not([role='combobox'])", newsletterForm],
    length: 2,
    fun: (ele) => {
      const user = getUser(ele, {
        email: ["input[type=\"email\"]", "input[name*=\"email\" i]:not([type=\"hidden\" i])"],
        phone: ["input[type=\"tel\"]", "input[name*=\"phone\" i]:not([type=\"hidden\" i])"],
        firstName: "input[name*=\"name\" i]:not([type=\"hidden\" i])",
        dateOfBirth: "input[name*=\"birthday\" i]:not([type=\"hidden\" i])"
      });
      sendUserData(user);
      sendNewsletterEvent(true);
    },
    current: 0
  }, {
    selectors: ["[type=\"submit\"]", "form[action=\"/account/login\"]"],
    length: 2,
    fun: (ele) => {
      const user = getUser(ele, {
        email: ['input[type=\"email\"]', "#CustomerEmail"]
      });
      sendUserData(user);
    },
    current: 0
  }, {
    selectors: ["[type=\"submit\"]", "form[action=\"/account\"]"],
    length: 2,
    fun: (ele) => {
      let user = getUser(ele, {
        email: ['input[type=\"email\"]', 'input[name=\"customer[email]\"]', '#RegisterForm-email'],
        phone: "input[type=\"tel\"]",
        firstName: ['#RegisterForm-FirstName', 'input[name=\"customer[first_name]\"]', 'input[name*=\"first\" i]:not([type=\"hidden\" i])'],
        lastName: ['#RegisterForm-LastName', 'input[name=\"customer[last_name]\"]', 'input[name*=\"last\" i]:not([type=\"hidden\" i])']
      });
      if (!user.firstName && !user.lastName) {
        user = {
          ...user,
          ...getUser(ele, {
            firstName: "input[name*=\"name\" i]:not([type=\"hidden\" i])"
          })
        };
      }
      sendUserData(user);
      edgetag("tag", "CompleteRegistration", {}, {}, {
        destination: window.edgetagSharedVariables.tagUrl
      });
    },
    current: 0
  }, {
    selectors: ["[type=\"submit\"]", "form[action^=\"/contact\"]"],
    length: 2,
    fun: (ele) => {
      const user = getUser(ele, {
        email: ["input[type=\"email\"]", "input[name*=\"email\" i]:not([type=\"hidden\" i])"],
        phone: ["input[type=\"tel\"]", "input[name*=\"phone\" i]:not([type=\"hidden\" i])"],
        firstName: ["input[name*=\"first\" i]:not([type=\"hidden\" i])", "input[name*=\"name\" i]:not([type=\"hidden\" i])", "input[name*=\"nom\" i]:not([type=\"hidden\" i])"],
        lastName: "input[id*=\"last\" i]:not([type=\"hidden\" i])"
      });
      sendUserData(user);
      edgetag("tag", "Contact", {}, {}, {
        destination: window.edgetagSharedVariables.tagUrl
      });
    },
    current: 0
  }];
  const resetActions = () => {
    for (let i = 0; i < actions.length; i++) {
      actions[i].current = 0;
    }
  };
  const checkElement = (element) => {
    if (!element || element.nodeName === "BODY") {
      resetActions();
      return;
    }
    if (element.nodeName !== "DIV" && element.nodeName !== "INPUT" && element.nodeName !== "A" && element.nodeName !== "BUTTON" && element.nodeName !== "FORM") {
      checkElement(element.parentElement);
      return;
    }
    for (let i = 0; i < actions.length; ++i) {
      if (element.matches(actions[i].selectors[actions[i].current])) {
        ++actions[i].current;
        if (actions[i].length === actions[i].current) {
          actions[i].fun(element);
          resetActions();
          return;
        }
      }
    }
    checkElement(element.parentElement);
  };
  document.addEventListener("click", (e) => {
    checkElement(e.target);
  }, {
    capture: true
  });
  window.addEventListener("message", (event) => {
    if (event.origin !== "https://creatives.attn.tv") {
      return;
    }
    if (!event.data || !event.data.__attentive) {
      return;
    }
    try {
      const data = event.data.__attentive;
      if (!data.action || !data.action.includes("LEAD")) {
        return;
      }
      const user = {};
      if (data.email) {
        user.email = data.email;
      }
      if (data.phone) {
        user.phone = data.phone.replace(/[^0-9]/g, "");
      }
      sendUserData(user);
      sendNewsletterEvent();
    } catch (e) {
      console.log("[Edgetag]", e);
    }
  }, false);
  window.addEventListener("message", (event) => {
    if (!event || !event.origin || !event.data || !event.origin.includes("postscript")) {
      return;
    }
    const user = {};
    if (event.data.values?.phone) {
      user.phone = event.data.values.phone;
    }
    if (event.data.CollectedEmailEvent?.email) {
      user.email = event.data.CollectedEmailEvent.email;
    }
    if (user.email || user.phone) {
      sendUserData(user);
      sendNewsletterEvent();
    }
  });
  window.juapp = window.juapp || function() {
    (window.juapp.q = window.juapp.q || []).push(arguments)
  };
  juapp("trackFunc", "engagement", function(email, eventname, promotitle, cmid, options, form) {
    if (!email) {
      return;
    }
    const userData = {
      email
    };
    form.forEach((item) => {
      if (item.name === "phone_number" && item.value) {
        userData["phone"] = item.value;
      }
    });
    edgetag("data", userData);
    sendNewsletterEvent();
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('form[action*="api.bounceexchange.com"] [type="submit"]')) {
      return;
    }
    const form = e.target.closest('form[action*="api.bounceexchange.com"]');
    if (!form) {
      return;
    }
    const user = getUser(form, {
      email: 'input[type="email"]',
      phone: 'input[type="tel"]',
    });
    sendUserData(user);
    if (user && Object.keys(user).length > 0) {
      sendNewsletterEvent();
    }
  }, {
    capture: true
  });
  document.addEventListener('submit', (e) => {
    if (!e.target.matches('form#customer_login')) {
      return;
    }
    if (e.target.getAttribute('action') === '/account/login' && e.target.querySelector('[type="submit"]')) {
      return;
    }
    const user = getUser(e.target, {
      email: ['input[type="email"]', '#CustomerEmail'],
    });
    if (!user.email) {
      return;
    }
    sendUserData(user, true);
  });
  document.addEventListener('submit', (e) => {
    if (!e.target.matches('form#create_customer')) {
      return;
    }
    if (e.target.getAttribute('action') === '/account' && e.target.querySelector('[type="submit"]')) {
      return;
    }
    const user = getUser(e.target, {
      email: ['input[type=\"email\"]', 'input[name=\"customer[email]\"]', '#RegisterForm-email'],
      phone: "input[type=\"tel\"]",
      firstName: ['#RegisterForm-FirstName', 'input[name=\"customer[first_name]\"]', 'input[name*=\"first\" i]:not([type=\"hidden\" i])'],
      lastName: ['#RegisterForm-LastName', 'input[name=\"customer[last_name]\"]', 'input[name*=\"last\" i]:not([type=\"hidden\" i])']
    });
    sendUserData(user, true);
    edgetag("tag", "CompleteRegistration", {}, {}, {
      method: 'beacon',
      destination: window.edgetagSharedVariables.tagUrl
    });
  });
  window.addEventListener('emotiveForms', ({
    detail
  }) => {
    if (detail?.type !== 'SUBMITTED' || !detail?.metadata) {
      return;
    }
    const {
      email,
      phone_number: phone
    } = detail.metadata;
    const user = {};
    if (email) {
      user.email = email;
    }
    if (phone) {
      user.phone = phone;
    }
    if (Object.keys(user).length === 0) {
      return;
    }
    sendUserData(user);
    sendNewsletterEvent();
  });
  window.addEventListener('load', () => {
    let wisepopsCheckAttempts = 0;
    const captureWisepops = () => {
      wisepopsCheckAttempts++;
      if (typeof window.wisepops === 'function') {
        wisepops('listen', 'after-form-submit', function(event) {
          const eveEle = event.target.elements;
          const emailEle = eveEle['email'] || eveEle['email_address'];
          const email = emailEle && emailEle.value;
          const phone = (eveEle['phone-dialcode'] ? eveEle['phone-dialcode'].value : '') + (eveEle['phone-number'] ? eveEle['phone-number'].value : '');
          const firstName = eveEle['first_name'] && eveEle['first_name'].value;
          const lastName = eveEle['last_name'] && eveEle['last_name'].value;
          const data = {};
          if (email) {
            data.email = email;
          }
          if (phone) {
            data.phone = phone;
          }
          if (firstName) {
            data.firstName = firstName;
          }
          if (lastName) {
            data.lastName = lastName;
          }
          sendUserData(data);
          if (email || phone) {
            sendNewsletterEvent();
          }
        });
      } else if (wisepopsCheckAttempts <= 10) {
        setTimeout(captureWisepops, 1000);
      }
    };
    captureWisepops();
    if (window.OptiMonk) {
      OptiMonk.addListener(document, 'optimonk#campaign-before_mark_filled', function(event) {
        const campaign = event.parameters?.campaignId ? OptiMonk.campaigns[event.parameters.campaignId] : undefined;
        if (!campaign) {
          return;
        }
        const data = campaign.data;
        if (!data) {
          return;
        }
        const user = {};
        const email = data['visitor[email]'];
        if (email) {
          user.email = email;
        }
        const firstName = data['visitor[firstname]'];
        if (firstName) {
          user.firstName = firstName;
        }
        const [_, phone] = Object.entries(data).find(([key, value]) => key.includes('custom_fields') && value.startsWith('+')) ?? [];
        if (phone) {
          user.phone = phone;
        }
        sendUserData(user);
        if (phone || email) {
          sendNewsletterEvent();
        }
      });
    }
  });
  window.addEventListener('FORMTORO_FORM_LOADED', (t) => {
    const formToroIframe = document.querySelector(`[data-formtoro-form="${t.detail}"]`);
    if (!formToroIframe) {
      return;
    }
    const formToroRoot = formToroIframe.shadowRoot;
    const formToroForm = formToroRoot?.querySelector('ft-form-container');
    if (!formToroForm) {
      return;
    }
    formToroForm.addEventListener('submit', (e) => {
      const formData = new FormData(e.target);
      const email = formData.get('email');
      const user = {};
      if (email) {
        user.email = email;
      }
      const countryCodeEle = e.target.querySelector('div[class$="phone-number"] [class*="dropdown"]');
      const countryCode = countryCodeEle?.value;
      const phone = formData.get('phone-number')?.replace(/\D/g, '');
      if (phone) {
        user.phone = phone;
        if (countryCode) {
          user.phone = countryCode + phone;
        }
      }
      if (Object.keys(user).length == 0) {
        return;
      }
      sendUserData(user);
      sendNewsletterEvent();
    }, {
      capture: true
    });
  }, {
    once: true
  });
  document.addEventListener('octane.quiz.completed', (e) => {
    if (!e || !e.detail) {
      return;
    }
    const email = e.detail.email;
    if (!email) {
      return;
    }
    sendUserData({
      email
    });
    sendNewsletterEvent();
  }, {
    capture: true
  });
  document.addEventListener('alia:signup', (e) => {
    const data = e.detail;
    if (!data) {
      return;
    }
    sendUserData({
      email: data.email,
      phone: data.phone
    });
    sendNewsletterEvent();
  });
  window.addEventListener('klaviyoForms', function(e) {
    if (e.detail?.type === 'submit') {
      const data = e.detail.metaData;
      if (!data) {
        return;
      }
      sendUserData({
        email: data.$email,
        phone: data.$phone_number
      });
      sendNewsletterEvent();
    }
  });
  const cartUrl = new URL("/cart", window.location.href);
  const parseCookies = ( /**@type {string} */ cookie) => Object.fromEntries(cookie.split(/;\s+/).map((r) => r.split('=').map((str) => str.trim())).map(([cookieKey, ...cookieValues]) => {
    const cookieValue = cookieValues.join('=');
    if (!cookieKey) {
      return []
    }
    let decodedValue = '';
    if (cookieValue) {
      try {
        decodedValue = decodeURIComponent(cookieValue)
      } catch (e) {
        decodedValue = cookieValue
      }
    }
    return [cookieKey, decodedValue]
  }));
  const fireInitiateCheckout = (cartCookie) => {
    /* grab the cart contents based on the current cart cookie value */
    let data = null;
    try {
      data = JSON.parse(localStorage.getItem('_workerCartCache'))[cartCookie]
    } catch (e) {
      try {
        if (localStorage.getItem('edgeTagDebug') === '1') {
          console.debug('[EdgeTag] Failed to parse _workerCartCache', e);
        }
      } catch (_) {}
    }
    if (!data) {
      /* cannot determine cart contents since the value isn't cached */
      return;
    }
    edgetag('tag', 'InitiateCheckout', data, {}, {
      method: 'beacon'
    }); /* record cart cookie and session to deduplicate the event in the case of app pixeltriggering another checkout */
    let dedup = {};
    try {
      dedup = JSON.parse(localStorage.getItem('_workerEventDeduplication') ?? '{}')
    } catch (e) {
      try {
        if (localStorage.getItem('edgeTagDebug') === '1') {
          console.debug('[EdgeTag] Failed to parse _workerEventDeduplication', e);
        }
      } catch (_) {}
    }
    localStorage.setItem('_workerEventDeduplication', JSON.stringify({
      ...dedup,
      InitiateCheckout: {
        cart: cartCookie,
        sessionId: sessionStorage.getItem('tag_session') || ''
      }
    }))
  }; /* standard Shopify cart checkout form submit */
  const detectCheckout = ( /**@type {SubmitEvent}*/ ev) => {
    const actionUrl = new URL(ev.target.action, window.location.href);
    if (actionUrl.pathname != cartUrl.pathname) {
      /* submitted form is not a checkout */
      return;
    }
    const submitter = ev.submitter;
    if (submitter?.getAttribute('name') != 'checkout') {
      /* the intended action is not a checkout */
      return;
    }
    if (ev.defaultPrevented) {
      /* the action will not be submitted */
      return;
    } /* since default is not prevented, we know this will eventually */
    const cartCookie = parseCookies(document.cookie).cart ?? null;
    if (!cartCookie) {
      /* no cart cookie, nothing to do */
      return;
    }
    fireInitiateCheckout(cartCookie);
  };
  document.addEventListener('submit', detectCheckout); /* Rebuy has a mechanism that redirects directly to the checkout URL withoutusing the standard cart URL submission, so we need to detect it directly. */
  const detectRebuyCheckout = ( /** @type {MouseEvent} */ ev) => {
    const target = ev.target;
    if (!target || !(target instanceof Element)) {
      return;
    } /* Match Rebuy's checkout or Shop Pay button */
    if (!target.closest('.rebuy-cart__checkout-button, .rebuy-cart__shop-pay-button')) {
      return;
    }
    const cartCookie = parseCookies(document.cookie).cart ?? null;
    if (!cartCookie) {
      return;
    }
    fireInitiateCheckout(cartCookie);
  };
  document.addEventListener('click', detectRebuyCheckout, {
    capture: true
  });
}();