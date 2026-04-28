document.addEventListener("DOMContentLoaded", function() {
  /* ---------------------------
            Copyrighy year
         ---------------------------- */
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("copyrightYear");
  if (yearElement) {
    yearElement.innerHTML = currentYear;
  }

  /* ---------------------------
     FIRST TAB SYSTEM
  ---------------------------- */
  // const tabs = document.querySelectorAll(".product-tabs");
  // const sections = document.querySelectorAll(".selected-product-section");

  // function activateTab(index) {
  //   tabs.forEach(tab => tab.classList.remove("active-product-tabs"));
  //   sections.forEach(section => section.style.display = "none");

  //   tabs[index].classList.add("active-product-tabs");
  //   sections[index].style.display = "flex";
  //   sections[index].classList.add("active-plan");
  // }

  // activateTab(1);

  // tabs.forEach((tab, index) => {
  //   tab.addEventListener("click", () => activateTab(index));
  // });

  const tabs = document.querySelectorAll(".product-tabs");
  const sections = document.querySelectorAll(".selected-product-section");

  function activateTab(index) {
    tabs.forEach(tab => tab.classList.remove("active-product-tabs"));

    sections.forEach(section => {
      section.style.display = "none";
      section.classList.remove("active-plan");
    });

    tabs[index].classList.add("active-product-tabs");
    sections[index].style.display = "flex";
    sections[index].classList.add("active-plan");
  }

  activateTab(1);

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(index));
  });



  /* ---------------------------
     SECOND TAB SYSTEM
  ---------------------------- */
  // const tabs2 = document.querySelectorAll(".product-tabs-2");
  // const sections2 = document.querySelectorAll(".selected-product-section-2");

  // function activateTab2(index) {
  //   tabs2.forEach(tab => tab.classList.remove("active-product-tabs-2"));
  //   sections2.forEach(section => section.style.display = "none");

  //   tabs2[index].classList.add("active-product-tabs-2");
  //   sections2[index].style.display = "flex";
  //   sections2[index].classList.add("active-plan");
  // }

  // activateTab2(1);

  // tabs2.forEach((tab, index) => {
  //   tab.addEventListener("click", () => activateTab2(index));
  // });

  const tabs2 = document.querySelectorAll(".product-tabs-2");
  const sections2 = document.querySelectorAll(".selected-product-section-2");

  function activateTab2(index) {
    tabs2.forEach(tab => tab.classList.remove("active-product-tabs-2"));

    sections2.forEach(section => {
      section.style.display = "none";
      section.classList.remove("active-plan"); // ✅ REMOVE from all
    });

    tabs2[index].classList.add("active-product-tabs-2");
    sections2[index].style.display = "flex";
    sections2[index].classList.add("active-plan"); // ✅ ADD only to active
  }

  activateTab2(1);

  tabs2.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab2(index));
  });



  /* ---------------------------
     ACCORDION
  ---------------------------- */
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      const openItem = document.querySelector(".accordion-item.active");

      if (openItem && openItem !== item) {
        openItem.classList.remove("active");
      }

      item.classList.toggle("active");
    });
  });
});