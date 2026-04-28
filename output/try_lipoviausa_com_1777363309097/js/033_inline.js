// Select both elements that have the same id
const labels = document.querySelectorAll("#izo76d1");
// Function to toggle active class
function toggleActiveClass(event) {
  labels.forEach((label) => label.classList.remove("active"));
  // Remove active from all
  event.target.classList.add("active");
  // Add active to the clicked labelihe5la
}
// Add event listeners to both labels
labels.forEach((label) => {
  label.addEventListener("click", toggleActiveClass);
});