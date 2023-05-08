// Set the date and time to count down to
var countDownDate = new Date("May 11, 2023 09:30:00").getTime();

// Update the count down every second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate remaining days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("countdown").innerHTML = `${JSON.stringify(
    days
  )} : ${JSON.stringify(hours)} : ${JSON.stringify(minutes)} : ${JSON.stringify(
    seconds
  )} \n
   DAYS     HOURS    MINUTES   SECONDS`;

  // If the count down is finished, clear the interval
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Countdown finished!";
  }
}, 1000);
