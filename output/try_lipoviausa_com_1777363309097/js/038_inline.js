// Show/hide tooltip on mobile tap
document.querySelectorAll("[data-tooltip]").forEach((el) => {
  el.addEventListener("click", function(e) {
    // Close other tooltips
    document.querySelectorAll("[data-tooltip]").forEach((other) => {
      if (other !== el) other.classList.remove("active-tooltip");
    });
    el.classList.toggle("active-tooltip");
    e.stopPropagation();
  });
});
// Close on outside tap
document.addEventListener("click", () => {
  document
    .querySelectorAll("[data-tooltip]")
    .forEach((el) => el.classList.remove("active-tooltip"));
});