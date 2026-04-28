const productLdJsonSchema = {
  "@context": "http://schema.org",
  "@type": "Product",
  "name": "Body Magic Chlorophyll Pill - For Body Odor, Detox \u0026 Skin",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": 4615
  }
}

const looxAddProductLdJsonSchema = () => {
  const scriptEl = document.createElement('script');
  scriptEl.type = 'application/ld+json';

  const stringifyProductLdJsonSchema = JSON.stringify(productLdJsonSchema);

  try {
    scriptEl.appendChild(document.createTextNode(stringifyProductLdJsonSchema));
    document.body.appendChild(scriptEl);
  } catch (e) {
    scriptEl.textContent = stringifyProductLdJsonSchema;
    document.body.appendChild(scriptEl);
  }
};

let productSchemaHandled = false;

window.addEventListener('DOMContentLoaded', () => {
  try {
    const ldJsonScripts = document.querySelectorAll("[type='application/ld+json']");
    const microdataElements = document.querySelectorAll("[itemtype='https://schema.org/Product'], [itemprop='aggregateRating']");

    if (microdataElements.length) return;
    if ([...ldJsonScripts].some(({
        textContent
      }) => JSON.parse(textContent).hasOwnProperty('aggregateRating'))) return;

    ldJsonScripts.forEach(script => {
      const json = JSON.parse(script.textContent);

      if (productSchemaHandled) return;
      if (json['@type'] !== 'Product' && json['@type'] !== 'ProductGroup') return;

      json.aggregateRating = productLdJsonSchema.aggregateRating;
      script.textContent = JSON.stringify(json);
      productSchemaHandled = true;
    });

    if (!productSchemaHandled) looxAddProductLdJsonSchema();
  } catch (error) {
    // swallow error
  }
});