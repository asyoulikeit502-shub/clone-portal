(function() {
  function toggleHighlight(highlight) {
    var wasOpen = highlight.classList.contains("cashback-percentage__highlight--open");
    document.querySelectorAll(".cashback-percentage__highlight--open").forEach(function(el) {
      el.classList.remove("cashback-percentage__highlight--open")
    }), wasOpen || highlight.classList.add("cashback-percentage__highlight--open")
  }
  document.addEventListener("click", function(e) {
    var highlight = e.target.closest(".cashback-percentage__highlight");
    if (highlight) {
      if (e.target.closest(".cashback-percentage__tooltip")) return;
      toggleHighlight(highlight);
      return
    }
    document.querySelectorAll(".cashback-percentage__highlight--open").forEach(function(el) {
      el.classList.remove("cashback-percentage__highlight--open")
    })
  }), document.addEventListener("keydown", function(e) {
    if (!(e.key !== "Enter" && e.key !== " ")) {
      var highlight = e.target.closest(".cashback-percentage__highlight");
      highlight && (e.preventDefault(), toggleHighlight(highlight))
    }
  })
})();
//# sourceMappingURL=/cdn/shop/t/260/assets/cashback-percentage.js.map?v=24288603122178329331776107646