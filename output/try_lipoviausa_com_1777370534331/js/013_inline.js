(function() {
  /* ===============================
     GET CLICK ID
  =============================== */
  const params = new URLSearchParams(window.location.search);
  const clickId = params.get("click_id");
  const tblci = params.get("tblci");
  console.log("tblci:", tblci);
  const lptoken = params.get("lptoken");

  if (!clickId) return;

  if (!tblci && !lptoken) {
    return;
  }
  sessionStorage.setItem("tblci", tblci);
  sessionStorage.setItem("lptoken", lptoken);

  // persist for later events (checkout / purchase)
  sessionStorage.setItem("click_id", clickId);

  /* ===============================
     FIRE POSTBACK (NO CORS)
  =============================== */
  const postbackUrl =
    `https://disfiedmolorial.com/postback?cid=${clickId}&et=nb_view_content`;

  new Image().src = postbackUrl;

  console.log("✅ ViewContent postback fired");

})();