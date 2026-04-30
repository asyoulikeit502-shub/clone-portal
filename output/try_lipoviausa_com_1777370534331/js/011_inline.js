function startCountdown() {
  let timeLeft = 1800;

  const timerElement = document.getElementById("timer");

  const interval = setInterval(() => {
    timeLeft--;

    // Format MM:SS
    let minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    let seconds = String(timeLeft % 60).padStart(2, "0");

    timerElement.textContent = `${minutes}:${seconds}`;

    // When time ends → restart
    if (timeLeft <= 0) {
      clearInterval(interval);
      timerElement.textContent = "00:00";

      setTimeout(startCountdown, 1000); // restart after 1 sec
    }
  }, 1000);
}

startCountdown();

// Redirection
//       document
//       .querySelectorAll(".selected-product-section, .selected-product-section-2")
//       .forEach(section => {
//         section.addEventListener("click", function (e) {
//           const btn = e.target.closest("a[offer]");
//           if (!btn) return;
//           e.preventDefault();
//           const productId = btn.getAttribute("offer");
//           const planType = section.dataset.plan;
//           let redirectUrl = `https://try.lipoviausa.com/lead-checkout?products=${productId}:1`;
//           // if (planType === "subscription") {
//           //   redirectUrl += "&type=subscription";
//           // } else if (planType === "onetime") {
//           //   redirectUrl += "&type=onetime";
//           // }
//           window.location.href = redirectUrl;
//         });
//       });
document.querySelectorAll(".tab-panel").forEach(panel => {
  panel.addEventListener("click", function(e) {
    const btn = e.target.closest("a[offer]");
    if (!btn) return;
    e.preventDefault();
    const activeTab = document.querySelector(".tab-panel.active");
    if (!activeTab) return;
    const planType = activeTab.dataset.plan || "subscription";
    const card = btn.closest(".cards");
    if (!card) return;
    const dataItem = card.dataset.item;
    var proId = '1033';
    if (planType == "subscription") {
      if (dataItem == "1") {
        proId = "1033";
      } else if (dataItem == "6") {
        proId = "1035";
      } else {
        proId = "1037";
      }
    } else {
      if (dataItem == "1") {
        proId = "1027";
      } else if (dataItem == "6") {
        proId = "1029";
      } else {
        proId = "1031";
      }
    }
    let redirectUrl = `https://try.lipoviausa.com/checkout-split-Cortisol?products=${proId}:1`;
    window.location.href = redirectUrl;
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("cc-id-taGZUy8dlDzM");

  if (btn) {
    btn.addEventListener("click", function(e) {
      e.preventDefault(); // prevent default link behavior

      let redirectUrl = "https://try.lipoviausa.com/checkout-split-Cortisol?products=1037:1";
      window.location.href = redirectUrl;
    });
  }
});
sessionStorage.setItem('nbFire', true);