// var currentDayButton = document.querySelector(".currentDayButton");
//
// var currentDay = document.querySelector(".currentDay");

function timer() {
  var currentDay = new Date();
  var hour = currentDay.getHours();
  var minutes = currentDay.getMinutes();
  var seconds = currentDay.getSeconds();

  hour = currentTime(hour);
  minutes = currentTime(minutes);
  seconds = currentTime(seconds);

  function currentTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  // document.querySelector(".currentTime").innerHTML = hour + ":" + minutes + ":" + seconds;

  $(".currentTime").text(hour + ":" + minutes + ":" + seconds);

  // document.querySelector(".currentDay").innerHTML = currentDay;

  $(".currentDay").text(currentDay);

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
