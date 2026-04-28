function updateDate() {
  const today = new Date();
  let businessDaysToAdd = 3;
  const futureDate = new Date(today);
  while (businessDaysToAdd > 0) {
    futureDate.setDate(futureDate.getDate() + 1);
    const day = futureDate.getDay();
    // Skip Saturday (6) and Sunday (0)
    if (day !== 0 && day !== 6) {
      businessDaysToAdd--;
    }
  }
  const options = {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = futureDate.toLocaleDateString("en-US", options);
  const element = document.getElementById("cc-id-XFQxU3xLj8n3");
  if (element) {
    element.textContent = formattedDate;
    console.log(formattedDate);
  }
}
updateDate();