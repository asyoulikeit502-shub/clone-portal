const checkInterval = setInterval(() => {
  const titleDivs = document.querySelectorAll(".cc-cart-row-prod-title");
  const displaySpans = document.querySelectorAll(".dynamic_month");

  var foundSupplyPeriod = null;

  titleDivs.forEach((div) => {
    const text = div.textContent.toLowerCase();

    // Detect quantity first
    let quantity = null;

    if (text.includes("6")) quantity = 6;
    else if (text.includes("3")) quantity = 3;
    else if (text.includes("1")) quantity = 1;

    // Detect unit (month / box / supply / pack)
    const hasValidUnit =
      text.includes("month") ||
      text.includes("box") ||
      text.includes("supply") ||
      text.includes("pack");

    if (quantity && hasValidUnit && !foundSupplyPeriod) {
      foundSupplyPeriod = `${quantity} month`;
    }
  });

  if (foundSupplyPeriod) {
    $(".dynamic_month").text(foundSupplyPeriod);
    // clearInterval(checkInterval);
  }
}, 500);