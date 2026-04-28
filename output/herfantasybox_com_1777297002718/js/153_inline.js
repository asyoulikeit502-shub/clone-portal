// Set the date and time when the countdown ends
var countDownDate = new Date().getTime() + 900000;

// Update the countdown every second
var x = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown end date
  var distance = countDownDate - now;

  // Calculate minutes and seconds remaining
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in the element with id="countdown-clock"
  if (document.getElementById('countdown-clock'))
    document.getElementById('countdown-clock').innerHTML = minutes + ':' + seconds + '';

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown-clock').innerHTML = 'Time is up';
  }
}, 1000);