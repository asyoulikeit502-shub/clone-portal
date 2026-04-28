document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("a");
  links.forEach(function(link) {
    link.addEventListener("mouseover", function() {
      var url = link.href,
        speculationRules = document.getElementById("speculationrules");
      if (speculationRules) try {
        var rules = JSON.parse(speculationRules.textContent);
        rules.prerender[0].urls.includes(url) || (rules.prerender[0].urls.push(url), speculationRules.textContent = JSON.stringify(rules))
      } catch (e) {}
    })
  })
});
//# sourceMappingURL=/cdn/shop/t/260/assets/speculation-rules.js.map?v=49332545827353799461772808300