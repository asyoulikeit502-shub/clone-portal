function activateTab(tabId, direction = "left") {
  $(".tab-btn").removeClass("active");
  $(`.tab-btn[data-tab='${tabId}']`).addClass("active");

  $(".tab-panel").removeClass("active slide-left slide-right");

  // let panel = $("#" + tabId);
  let panel = $('.tab-panel[id="' + tabId + '"]');
  panel.addClass("active");

  // Apply animation based on direction
  if (direction === "left") {
    panel.addClass("slide-left");
    $(".swp_lft p").text("SWIPE RIGHT TO SEE LESS"); // ✅ TEXT UPDATE
  } else {
    panel.addClass("slide-right");
    $(".swp_lft p").text("SWIPE LEFT TO SEE MORE"); // ✅ TEXT UPDATE
  }
}

/* ---------- CLICK TAB WITH ANIMATION ---------- */
$(".tab-btn").click(function() {
  let tabId = $(this).data("tab");

  let direction = (tabId === "sub") ? "left" : "right";

  activateTab(tabId, direction);
});

/* ---------- SWIPE WITH ANIMATION ---------- */
let startX = 0;
let startY = 0;
let startTime = 0;

const SWIPE_DISTANCE = 180;
const MAX_VERTICAL = 80; // ignore vertical movement
const MAX_TIME = 500; // ms

$(".for_mob_pack").on("touchstart", function(e) {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  startTime = Date.now();
});

$(".for_mob_pack").on("touchend", function(e) {
  let endX = e.changedTouches[0].clientX;
  let endY = e.changedTouches[0].clientY;
  let endTime = Date.now();

  let diffX = startX - endX;
  let diffY = Math.abs(startY - endY);
  let timeDiff = endTime - startTime;

  // Ignore vertical scrolls
  if (diffY > MAX_VERTICAL) return;

  // Ignore very slow swipes
  if (timeDiff > MAX_TIME) return;

  // Swipe Left → Next Tab
  if (diffX > SWIPE_DISTANCE) {
    activateTab("sub", "left");
  }

  // Swipe Right → Previous Tab
  if (diffX < -SWIPE_DISTANCE) {
    activateTab("one", "right");
  }
});