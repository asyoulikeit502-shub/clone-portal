function getFkCartItemCount() {
  const fkCartRaw = sessionStorage.getItem("fkCart");
  if (!fkCartRaw) return 0;

  let fkCart;
  try {
    fkCart = JSON.parse(fkCartRaw);
  } catch (e) {
    console.error("Invalid fkCart JSON");
    return 0;
  }

  let count = 0;

  Object.entries(fkCart).forEach(([productId, qty]) => {
    // Exclude product ID 287
    if (String(productId) === "287") return;

    count += parseInt(qty, 10) || 0;
  });

  return count;
}

function updateItemCountUI() {
  const el = document.getElementById("cc-id-5qztRFCuzZon");
  if (!el) return;

  const itemCount = getFkCartItemCount();
  if (itemCount <= 0) return;

  el.textContent = itemCount + (itemCount === 1 ? " item" : " items");
}

updateItemCountUI();

// update if fkCart changes later
window.addEventListener("storage", function(e) {
  if (e.key === "fkCart") {
    updateItemCountUI();
  }
});