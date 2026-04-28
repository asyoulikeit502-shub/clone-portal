;
(function() {
  const url = new URL(window.location)
  const viewParam = url.searchParams.get('view')
  if (viewParam && viewParam.includes('variant-pf-')) {
    url.searchParams.set('pf_v', viewParam)
    url.searchParams.delete('view')
    window.history.replaceState({}, '', url)
  }
})()