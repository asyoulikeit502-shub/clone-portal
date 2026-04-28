(function() {
  if (!document.cookie.includes("first_ref=")) {
    const ref = document.referrer || location.href;
    document.cookie =
      "first_ref=" +
      encodeURIComponent(ref) +
      "; path=/; max-age=1800; SameSite=Lax";
  }
})();