document.addEventListener("DOMContentLoaded", function() {

  const countryInput = document.getElementById("country-code-only");
  const phoneInput = document.getElementById("formated-phone-number");

  // init intl-tel-input
  const iti = window.intlTelInput(countryInput, {
    initialCountry: "us",
    separateDialCode: true,
    localizedCountries: {},
    preferredCountries: ["us", "ca"],
    autoPlaceholder: "off",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
  });

  // Add class to the .iti wrapper once it exists (safer than fixed timeout)
  // wrapper is created as a sibling/parent element by the plugin
  function markItiLoaded() {
    // try several likely locations for the wrapper
    let wrapper = countryInput.parentElement.querySelector(".iti") ||
      countryInput.parentElement.querySelector(".iti--allow-dropdown") ||
      countryInput.closest(".iti");

    if (!wrapper) {
      // fallback: search document (very rare)
      wrapper = document.querySelector(".iti");
    }

    if (wrapper) {
      wrapper.classList.add("iti-loaded");
    }
  }

  // Wait briefly for plugin to create DOM, then mark loaded.
  // Using requestAnimationFrame twice is more reliable than a magic timeout.
  requestAnimationFrame(() => requestAnimationFrame(markItiLoaded));

  // combine into angular model
  function updateModel() {
    // guard: if angular not ready, skip
    const el = document.getElementById('b');
    if (!el) return;

    const scope = angular.element(el).scope();
    if (!scope) return;

    const dial = (iti.getSelectedCountryData() && iti.getSelectedCountryData().dialCode) || "";
    const local = scope.FullFormData && scope.FullFormData.phoneLocal ? ("" + scope.FullFormData.phoneLocal).replace(/\D/g, "") : "";
    console.log("scope ", scope);
    scope.$applyAsync(function() {
      scope.FullFormData = scope.FullFormData || {};
      scope.FullFormData.phone = dial ? ("+" + dial + local) : local;
    });
  }

  // events
  phoneInput.addEventListener("input", updateModel);
  countryInput.addEventListener("countrychange", updateModel);

  // initial combine (if any pre-filled values)
  setTimeout(updateModel, 50);

});