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


  $(".currentDay").text("Today is: " + dayList[day] + " - " + monthList[month] + " " + dayOfMonth + ", " + year);

  setTimeout(function () {
    timer();
    },
   1000
  );
}

$(".gif-button").on("click", function () {
  $(".gifs").attr("src", gifArray[Math.floor(Math.random() * gifArray.length)]);
  setTimeout(function () {
    if($(".gifs").hasClass("slideInLeft")) {
      $(".gifs").removeClass("slideInLeft");
    }
    },
  1000
  );
  $(".gifs").addClass("slideInLeft");
});


$(".image-button").on("click", function () {
  $(".images").attr("src", imageArray[Math.floor(Math.random() * imageArray.length)]);
  setTimeout(function () {
    if($(".images").hasClass("slideInRight")) {
      $(".images").removeClass("slideInRight");
    }
    },
  1000
  );
  $(".images").addClass("slideInRight");
});


$(".currentDayButton").on("click", function () {
  if($(".currentDay").hasClass("hidden")) {
    $(".currentDay").removeClass("hidden");
    $(".currentDay").addClass("flip");
    setTimeout(function () {
      // if($(".currentDay").hasClass("flip")) {
      // }
      $(".currentDay").removeClass("flip");
    },
    700
    );
  }  else {
    $(".currentDay").addClass("flip");
    setTimeout(function () {
      $(".currentDay").addClass("hidden");
      $(".currentDay").removeClass("flip");
    },
    700
    );
  }
});


console.log(timer());
