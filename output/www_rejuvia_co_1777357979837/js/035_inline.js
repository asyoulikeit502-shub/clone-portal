/* Copyright (c) Blotout, Inc. | Version 24-33 */
window.edgetag = window.edgetag || function() {
  (edgetag.stubs = edgetag.stubs || []).push(arguments);
};
! function() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const userId = params.get('et_u_id') || params.get('tag_user_id') || params.get('_glc[tag_user_id]') || '';
  edgetag("init", {
    edgeURL: window.edgetagSharedVariables.tagUrl,
    disableConsentCheck: true,
    userId
  });
}(); /* Set session_id to sessionStorage */
window.addEventListener('edgetag-initialized', ( /** @type CustomEvent<{ session: { sessionId: string } }> */ e) => {
  sessionStorage.setItem('tag_session', e.detail.session.sessionId);
});
edgetag("tag", "PageView", {}, {}, {
  destination: window.edgetagSharedVariables.tagUrl
});