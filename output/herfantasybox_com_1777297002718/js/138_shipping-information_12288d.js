document.addEventListener("DOMContentLoaded", () => {

  const buyBtn = document.querySelector(".buy-button button")

  document.querySelector(".shipping-information-cont .shipping-information-top p").style.color = getComputedStyle(buyBtn).backgroundColor
  document.querySelector(".shipping-information-cont .shipping-information-top svg path").style.fill = getComputedStyle(buyBtn).backgroundColor;


})