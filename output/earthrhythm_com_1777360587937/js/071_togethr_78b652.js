document.addEventListener("DOMContentLoaded", function () {
  console.log("script loaded in together app");
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams.entries());
  if (Object.keys(params).length > 0) {
    fetch("/cart/update.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attributes: params,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("Error in updating cart: ", error.message);
      });
  } else {
    console.log("No params in URL");
  }
});
