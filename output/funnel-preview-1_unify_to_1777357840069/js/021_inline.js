function formatExpiry(el) {
  let v = el.value.replace(/\D/g, "");

  // Auto insert slash
  if (v.length >= 3) {
    el.value = v.slice(0, 2) + "/" + v.slice(2, 4);
  } else {
    el.value = v;
  }

  // Update angular model
  const scope = angular.element(document.getElementById("b")).scope();
  if (!scope) return;

  const mm = v.slice(0, 2);
  const yy = v.slice(2, 4);

  scope.$applyAsync(() => {
    scope.FullFormData.expmonth = mm || "";
    scope.FullFormData.expyear = yy || "";
  });

  console.log("scope ", scope.FullFormData);
}