document.addEventListener("DOMContentLoaded", function() {

  //      const cardInput = document.getElementById("cardNumber");

  // cardInput.addEventListener("input", function (e) {
  //     let value = cardInput.value;

  //     // Remove all non-digits
  //     value = value.replace(/\D/g, "");

  //     // Limit to 16 digits
  //     value = value.substring(0, 16);

  //     // Insert spaces every 4 digits
  //     let formatted = value.replace(/(.{4})/g, "$1 ").trim();

  //     cardInput.value = formatted;
  // });

  const cardInput = document.getElementById("cardNumber");

  cardInput.addEventListener("input", function() {
    let rawValue = cardInput.value.replace(/\D/g, ""); // only numbers
    rawValue = rawValue.substring(0, 16); // max 16 digits

    // formatted display
    let formatted = rawValue.replace(/(.{4})/g, "$1 ").trim();

    // set formatted value in UI
    cardInput.value = formatted;

    console.log("Raw:", rawValue);
    console.log("Formatted:", formatted);

    // Update Angular model safely
    const scope = angular.element(document.getElementById("b")).scope();
    console.log("scope ", scope);
    scope.$applyAsync(() => {
      scope.FullFormData.cc_number = rawValue; // store WITHOUT spaces
      scope.FullFormData.cc_number_formatted = formatted; // optional
    });
  });

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  emailInput.addEventListener("keyup", function() {
    const value = emailInput.value.trim();

    // Basic strong email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
      emailError.style.display = "none";
      emailInput.classList.remove("invalid");
      return;
    }

    if (!emailRegex.test(value)) {
      emailError.style.display = "block";
      emailInput.classList.add("invalid");
    } else {
      emailError.style.display = "none";
      emailInput.classList.remove("invalid");
    }
  });

});