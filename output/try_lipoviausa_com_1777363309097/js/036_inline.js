function countdown(elementName, minutes, seconds) {
  var element, endTime, msLeft, time;

  function twoDigits(n) {
    return n < 10 ? "0" + n : n;
  }

  function updateTimer() {
    msLeft = endTime - Date.now();
    if (msLeft < 1000) {
      element.innerHTML = "Time is up!";
    } else {
      time = new Date(msLeft);
      var totalSeconds = Math.floor(msLeft / 1000);
      var mins = Math.floor(totalSeconds / 60);
      var secs = totalSeconds % 60;
      element.innerHTML = twoDigits(mins) + ":" + twoDigits(secs);
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }
  }
  element = document.getElementById(elementName);
  endTime = Date.now() + 1000 * (60 * minutes + seconds) + 500;
  updateTimer();
}
// Example usage:
countdown("ten-countdown", 30, 0);