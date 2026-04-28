console.log('Using theme sections by Design Packs 🎒 | learn more at https://design-packs.com (legacylink)')

function generateComplexId() {
  const prefix = "ID-";
  const part1 = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + // Random uppercase letter
    String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const part2 = Math.floor(100 + Math.random() * 900); // Three digits
  const part3 = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // One uppercase letter
  const part4 = Math.floor(10 + Math.random() * 90); // Two digits

  // Simple checksum calculation
  const checksum = String.fromCharCode(65 + (part2 % 6));

  return `${prefix}${part1}${part2}${part3}${part4}${checksum}`;
}

const regex = /^ID-[A-Z]{2}[0-9]{3}[A-Z][0-9]{2}[A-F]$/;

// Test the function
const newId = generateComplexId();
window.designPacksRegistered = newId;


window.addEventListener('shopify:section:load', function(e) {
  const sectionJS = document.querySelector(`[data-dsgn-pck-js="${e.detail.sectionId}"]`);
  const sectionExternalJS = document.querySelector(`[data-dsgn-pck-external-js="${e.detail.sectionId}"]`);
  const section = document.querySelector(`#DP--${e.detail.sectionId}`);

  const loadJavaScriptBlock = () => {
    if (sectionJS) {
      const sectionScript = sectionJS.innerHTML;
      const newScript = document.createElement('script');
      const inlineScript = document.createTextNode(sectionScript);
      newScript.appendChild(inlineScript);
      section.appendChild(newScript);
    }
  }

  if (sectionExternalJS) {
    const newScript = document.createElement('script');
    const externalPath = sectionExternalJS.src;
    newScript.src = externalPath;
    section.appendChild(newScript);
    newScript.onload = () => {
      loadJavaScriptBlock();
    }
  } else {
    loadJavaScriptBlock();
  }

});