function onCaptchaChecked(response) {
  console.log("CAPTCHA Checked:", response);
  $.post("reCapchaVerify.php", {
    "g-recaptcha-response": response
  }, function(data) {
    console.log("data Checked:", data);
    if (data.success) {
      console.log("reCAPTCHA verified successfully");
      $("#submitBtn").prop("disabled", false); // Enable submit button
    } else {
      console.log("reCAPTCHA verification failed");
      $("#submitBtn").prop("disabled", true); // Keep submit button disabled
    }
  }, "json");
}
// Handle reCAPTCHA expiration
function onCaptchaExpired() {
  console.log("⚠ reCAPTCHA expired! Disabling submit button.");
  $("#submitBtn").prop("disabled", true); // Disable submit button again
}