// var currentDayButton = document.querySelector(".currentDayButton");
//
// var currentDay = document.querySelector(".currentDay");

function timer() {
  var currentDay = new Date();
  var hour = currentDay.getHours();
  var minutes = currentDay.getMinutes();
  var seconds = currentDay.getSeconds();
  var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var monthList = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var day = currentDay.getDay();
  var month = currentDay.getMonth();
  var dayOfMonth = currentDay.getDate();
  var year = currentDay.getFullYear();

  hour = currentTime(hour);
  minutes = currentTime(minutes);
  seconds = currentTime(seconds);

  dayOfMonth = currentTime(dayOfMonth);

  function currentTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  // document.querySelector(".currentTime").innerHTML = hour + ":" + minutes + ":" + seconds;

  $(".currentTime").text("The Current Time is: " + hour + ":" + minutes + ":" + seconds + " (EST)");

  // document.querySelector(".currentDay").innerHTML = currentDay;

  $(".currentDay").text("Today is: " + dayList[day] + "- " + monthList[month] + " " + dayOfMonth + ", " + year);

  setTimeout(function () {
    timer();
  },
   1000
 );

}

$(".currentDayButton").on("click", function () {
  if($(".currentDay").hasClass("hidden")) {
    $(".currentDay").removeClass("hidden");
  }  else {
    $(".currentDay").addClass("hidden");
  }
});

// currentDayButton.click = function () {
//   currentDay.toggle("hidden");
// };




console.log(timer());
