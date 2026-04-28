document.addEventListener("DOMContentLoaded", () => {
  Array.from(document.querySelectorAll(".target-collapsable-faq")).forEach((faq, index) => {
    if (faq.querySelector("a")) {
      const faqImgUrl = faq.querySelector("a").getAttribute("href"),
        faqImg = document.createElement("img");
      faqImg.src = faqImgUrl, faqImg.alt = "FAQ Image", faq.querySelector(".collapsable-content-section-body-inner.rte").appendChild(faqImg), faq.querySelector("a").style.display = "none"
    }
  })
});
//# sourceMappingURL=/cdn/shop/t/260/assets/faq-image.js.map?v=9957719152522974331755540741