document
  .querySelectorAll(".custom-summary-main-box")
  .forEach(function(el) {
    el.addEventListener("click", function() {
      document.getElementById("i2firn").classList.toggle("summaryCon");
      document.getElementById("i2firn").classList.toggle("d-none");
    });
  });

function removeLeadingDash() {
  const el = document.getElementById("cc-id-EeU8QeHkhyxt");
  if (!el) return;

  const text = el.innerText.trim();

  if (text.startsWith("-")) {
    el.innerText = text.replace(/^-+/, "");
  }
}
removeLeadingDash();
const observer = new MutationObserver(() => {
  removeLeadingDash();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
});

/* const btn = document.querySelector(".order_summary_click_mb");
   const box = document.querySelector(".show_details");
   const spanText = btn.querySelector("abbr span");
   btn.addEventListener("click", () => {
     btn.classList.toggle("active");
     box.classList.toggle("hide");
     if (btn.classList.contains("active")) {
       spanText.textContent = "Hide ";
     } else {
       spanText.textContent = "Show ";
     }
   });*/
const el = document.getElementById("cc-id-EeU8QeHkhyxt");
if (el && el.innerText.trim().startsWith("-")) {
  document.getElementById("cc-id-EeU8QeHkhyxt").innerText = document
    .getElementById("cc-id-EeU8QeHkhyxt")
    .innerText.trim()
    .replace(/^-/, "");
}