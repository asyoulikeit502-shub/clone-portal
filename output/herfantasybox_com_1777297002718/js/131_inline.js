if (!window._whySubscribeAccordionDelegated) {
  window._whySubscribeAccordionDelegated = true;
  document.body.addEventListener('click', function(event) {
    const header = event.target.closest('.why-subscribe-accordion__header');
    if (!header) return;
    // Do not preventDefault, let button act naturally
    const accordion = header.closest('[data-why-subscribe-accordion]');
    if (!accordion) return;
    const isOpen = accordion.classList.toggle('is-open');
    header.setAttribute('aria-expanded', isOpen);
  });
}