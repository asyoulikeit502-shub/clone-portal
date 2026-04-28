const getCountryData = async () => {
    try {
       
      const response = await fetch("/browsing_context_suggestions.json");
      const data = await response.json();
      const res = data?.detected_values?.country_name;

     
      const shadowContainer = document.querySelector("shadow-dom-container");
      if (!shadowContainer) {
        console.error("Shadow DOM container not found.");
        return;
      }

      const shadowRoot = shadowContainer.shadowRoot;
      if (!shadowRoot) {
        console.error("Shadow root not found.");
        return;
      }

      
      const gokwikCheckout = shadowRoot.querySelector(".gokwik-checkout");
      if (!gokwikCheckout) {
        console.error("GoKwik checkout element not found.");
        return;
      }

       
      let shopifyButton = shadowRoot.querySelector(".shopify-checkout-btn");
      if (!shopifyButton) {
        shopifyButton = document.createElement("a");
        shopifyButton.href = "/checkout";
        shopifyButton.type = "button";
        shopifyButton.textContent = "Checkout";
        shopifyButton.style.cssText = `
          display: inline-block;
          background-color: #F6338A;;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
          text-align: center;
          margin-top: 10px;
        `;
        shopifyButton.classList.add("shopify-checkout-btn");
      }

       
      if (res === "India") {
        
        gokwikCheckout.style.display = "block"; 
        if (shopifyButton.parentElement) {
          shopifyButton.remove();
        }
      } else {
        
        gokwikCheckout.style.display = "none"; 
        if (!shopifyButton.parentElement) {
          
          gokwikCheckout.insertAdjacentElement("afterend", shopifyButton);
        }
      }
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  };