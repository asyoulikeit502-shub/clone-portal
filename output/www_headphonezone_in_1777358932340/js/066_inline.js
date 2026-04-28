window.ShopifyAnalytics = window.ShopifyAnalytics || {};
window.ShopifyAnalytics.performance = window.ShopifyAnalytics.performance || {};
(function() {
  const LONG_FRAME_THRESHOLD = 50;
  const longAnimationFrames = [];
  let activeRafId = null;

  function collectLongFrames() {
    let previousTime = null;

    function rafMonitor(now) {
      if (activeRafId === null) {
        return;
      }
      const delta = now - previousTime;
      if (delta > LONG_FRAME_THRESHOLD) {
        longAnimationFrames.push({
          startTime: previousTime,
          endTime: now,
        });
      }
      previousTime = now;
      activeRafId = requestAnimationFrame(rafMonitor);
    }
    previousTime = performance.now();
    activeRafId = requestAnimationFrame(rafMonitor);
  }
  if (!PerformanceObserver.supportedEntryTypes.includes('long-animation-frame')) {
    collectLongFrames();
    const timeoutId = setTimeout(() => {
      cancelAnimationFrame(activeRafId);
    }, 10_000);
    window.ShopifyAnalytics.performance.getLongAnimationFrames = function(stopCollection = false) {
      if (stopCollection) {
        clearTimeout(timeoutId);
        cancelAnimationFrame(activeRafId);
      }
      return longAnimationFrames;
    };
  }
})();