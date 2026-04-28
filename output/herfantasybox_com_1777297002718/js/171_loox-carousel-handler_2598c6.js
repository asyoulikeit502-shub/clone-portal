function waitForElement(querySelector, timeout) {
  return new Promise((resolve, reject) => {
    var timer = !1;
    if (document.querySelectorAll(querySelector).length) return resolve();
    const observer = new MutationObserver(() => {
      if (document.querySelectorAll(querySelector).length) return observer.disconnect(), timer !== !1 && clearTimeout(timer), resolve()
    });
    observer.observe(document.body, {
      childList: !0,
      subtree: !0
    }), timeout && (timer = setTimeout(() => {
      observer.disconnect(), reject()
    }, timeout))
  })
}
document.addEventListener("DOMContentLoaded", () => {
  waitForElement(".loox-v2-carousel-container", 1e4).then(() => {
    const look = document.querySelectorAll(".loox-v2-carousel-container");
    look[0] && look[0].parentNode.parentNode.classList.add("loox-v2-carousel-container-1"), look[1] && look[1].parentNode.parentNode.classList.add("loox-v2-carousel-container-2")
  }).catch(e => {})
});
//# sourceMappingURL=/cdn/shop/t/260/assets/loox-carousel-handler.js.map?v=44042412958614754301772808300