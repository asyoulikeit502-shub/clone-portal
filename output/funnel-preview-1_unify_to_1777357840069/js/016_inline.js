document.addEventListener("DOMContentLoaded", function() {

  // Get URL parameters
  const params = new URLSearchParams(window.location.search);

  // Read ?cancellation=...
  const cancellationParam = params.get("cancellation");

  console.log("Cancellation param:", cancellationParam);

  // If cancellation parameter exists AND div with id="cancellation" exists
  if (cancellationParam) {
    const cancelDiv = document.getElementById("cancellation");

    if (cancelDiv) {
      // Delay ensures page fully loads before scrolling
      setTimeout(() => {
        cancelDiv.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 500);
    }
  }

});