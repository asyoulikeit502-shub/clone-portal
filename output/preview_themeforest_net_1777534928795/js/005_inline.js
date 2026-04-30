//<![CDATA[
(function() {
  function normalizeAttributeValue(value) {
    if (value === undefined || value === null) return undefined

    var normalizedValue

    if (Array.isArray(value)) {
      normalizedValue = normalizedValue || value
        .map(normalizeAttributeValue)
        .filter(Boolean)
        .join(', ')
    }

    normalizedValue = normalizedValue || value
      .toString()
      .toLowerCase()
      .trim()
      .replace(/&amp;/g, '&')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')

    if (normalizedValue === '') return undefined
    return normalizedValue
  }

  var pageAttributes = {
    app_name: normalizeAttributeValue('Marketplace'),
    app_env: normalizeAttributeValue('production'),
    app_version: normalizeAttributeValue('fd40f37078c9591aa45e11705cee0ccc59c226d9'),
    page_type: normalizeAttributeValue('item'),
    page_location: window.location.href,
    page_title: document.title,
    page_referrer: document.referrer,
    ga_param: normalizeAttributeValue(''),
    event_attributes: null,
    user_attributes: {
      user_id: normalizeAttributeValue(''),
      market_user_id: normalizeAttributeValue(''),
    }
  }
  dataLayer.push(pageAttributes)

  dataLayer.push({
    event: 'analytics_ready',
    event_attributes: {
      event_type: 'user',
      custom_timestamp: Date.now()
    }
  })
})();

//]]>