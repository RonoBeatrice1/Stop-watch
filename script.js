window.onload = function () {
  // Initialize variables to track seconds and tenths of a second
  var seconds = 0o123;
  var tens = 0o123;

  // Get references to HTML elements where we'll display the time
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");

  // Get references to the start, stop, and reset buttons
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");

  // Initialize a variable for the timer interval
  var Interval;

  // Event handler for the "Start" button
  buttonStart.onclick = function () {
    // Clear any previous intervals to avoid multiple timers running
    clearInterval(Interval);

    // Start a new interval that calls the startTimer function every 10 milliseconds
    Interval = setInterval(startTimer, 10);
  };

  // Event handler for the "Stop" button
  buttonStop.onclick = function () {
    // Clear the interval to stop the timer
    clearInterval(Interval);
  };

  // Event handler for the "Reset" button
  buttonReset.onclick = function () {
    // Clear the interval to stop the timer
    clearInterval(Interval);

    // Reset the tens and seconds to zero
    tens = "00";
    seconds = "00";

    // Update the displayed time to show zeros
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  // Function to start the timer
  function startTimer() {
    tens++;

    // Format tens with leading zero if less than 10
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    // Display tens without leading zero if 10 or greater
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    // When tens reach 100, increment seconds and reset tens to zero
    if (tens > 99) {
      seconds++;
      // Format seconds with leading zero if less than 10
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    // Display seconds with leading zero if 10 or greater
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
