(function() {
  const clickId = sessionStorage.getItem("click_id");
  if (!clickId) return;
  const tblci = sessionStorage.getItem("tblci");
  const lptoken = sessionStorage.getItem("lptoken");
  if (!tblci && !lptoken) {
    return;
  }

  new Image().src = `https://disfiedmolorial.com/postback?cid=${clickId}&et=add_to_cart`;

  new Image().src = `https://disfiedmolorial.com/postback?cid=${clickId}&et=nb_initiate_checkout`;

  console.log("✅ add_to_cart + initiate_checkout postbacks fired");
})();