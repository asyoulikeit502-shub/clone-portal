(function() {
  const partnerKey = "herfantasybox";
  const env = "prod";

  function initRepAIChat() {
    if (document.readyState === 'complete') {
      window.RepAI.injectCDNScript(partnerKey, env);
    } else if (document.readyState === 'interactive') {
      if (window.requestIdleCallback) {
        requestIdleCallback(() => window.RepAI.injectCDNScript(partnerKey, env), {
          timeout: 500
        });
      } else {
        setTimeout(() => window.RepAI.injectCDNScript(partnerKey, env), 16);
      }
    } else {
      document.addEventListener('DOMContentLoaded', () => window.RepAI.injectCDNScript(partnerKey, env), {
        passive: true
      });
    }
  }
  initRepAIChat();
})();