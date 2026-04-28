setInterval(() => {
  if (!sessionStorage.fkCart) return;

  const fkCartNew = JSON.parse(sessionStorage.fkCart);

  const totalQty = Object.values(fkCartNew).reduce(
    (sum, qty) => sum + Number(qty),
    0
  );

  $("#cc-id-Ep4LRdQMA4g0").html(totalQty + " items");

  var secondSrc = $(".main-prod-img").eq(1).attr("src");
  $(".order-summary-img").attr("src", secondSrc);
}, 500);