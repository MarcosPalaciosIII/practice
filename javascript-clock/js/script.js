var gifArray = [
  "public/gif/clock.gif",
  "public/gif/drWho1.gif",
  "public/gif/bigBangTheory1.gif",
  "public/gif/randomElevator.gif"
];

var imageArray = [
  "public/image/spaceballs1.jpg",
  "public/image/spaceballs2.jpg",
  "public/image/rockPaperScissors.jpg",
  "public/image/funnyDog1.jpg"
];

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


  $(".currentTime").text("The Current Time is: " + hour + ":" + minutes + ":" + seconds + " (EST)");


  $(".currentDay").text("Today is: " + dayList[day] + "- " + monthList[month] + " " + dayOfMonth + ", " + year);

  setTimeout(function () {
    timer();
  },
   1000
 );

}

$(".gif-button").on("click", function () {
  $(".gifs").attr("src", gifArray[Math.floor(Math.random() * gifArray.length)]);
});

$(".image-button").on("click", function () {
  $(".images").attr("src", imageArray[Math.floor(Math.random() * imageArray.length)]);
});

$(".currentDayButton").on("click", function () {
  if($(".currentDay").hasClass("hidden")) {
    $(".currentDay").removeClass("hidden");
  }  else {
    $(".currentDay").addClass("hidden");
  }
});


console.log(timer());
