const faqItems = document.querySelectorAll(".faq-item");

// Initial open support (multiple)
faqItems.forEach((item) => {
  if (item.classList.contains("open")) {
    const body = item.querySelector(".faq-body");
    const icon = item.querySelector(".faq-icon");
    body.style.height = body.scrollHeight + "px";
    icon.textContent = "−";
  }
});

faqItems.forEach((item) => {
  const title = item.querySelector(".faq-title");
  const body = item.querySelector(".faq-body");
  const icon = item.querySelector(".faq-icon");

  title.addEventListener("click", () => {
    // ✅ CASE 1: already open → just close this one
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      body.style.height = "0px";
      icon.textContent = "+";
      return;
    }

    // ✅ CASE 2: closed → close others first
    faqItems.forEach((i) => {
      i.classList.remove("open");
      i.querySelector(".faq-body").style.height = "0px";
      i.querySelector(".faq-icon").textContent = "+";
    });

    // open clicked one
    item.classList.add("open");
    body.style.height = body.scrollHeight + "px";
    icon.textContent = "−";
  });
});