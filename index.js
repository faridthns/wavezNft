// Set the date we're counting down to
var countDownDate = new Date("Aug 30, 2024 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(days);


  if (days<10) {
    var days = days.toString().padStart(2, '0');
  }

  var strdays = days.toString();
  var days1 = parseInt(strdays[0], 10);
  var days2 = parseInt(strdays[1], 10);

  if (hours<10) {
    var hours = hours.toString().padStart(2, '0');
  }

  var strhours = hours.toString();
  var hours1 = parseInt(strhours[0], 10);
  var hours2 = parseInt(strhours[1], 10);
  
  if (minutes<10) {
    var minutes = minutes.toString().padStart(2, '0');
  }

  var strminutes = minutes.toString();
  var minutes1 = parseInt(strminutes[0], 10);
  var minutes2 = parseInt(strminutes[1], 10);

  // Display the result in the element with id="demo"
  document.getElementById("days1").innerHTML = days1;
  document.getElementById("days2").innerHTML = days2;
  document.getElementById("hours1").innerHTML = hours1;
  document.getElementById("hours2").innerHTML = hours2;
  document.getElementById("minutes1").innerHTML = minutes1;
  document.getElementById("minutes2").innerHTML = minutes2;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);