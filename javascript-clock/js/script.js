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
  setTimeout(function () {
    $(".gifs").attr("src", gifArray[Math.floor(Math.random() * gifArray.length)]);
      if($(".gifs").hasClass("fadeOutLeft")) {
      $(".gifs").removeClass("fadeOutLeft");
      $(".gifs").addClass("hidden");
      }
    },
  999
  );
  setTimeout(function () {
    if($(".gifs").hasClass("hidden")) {
      $(".gifs").removeClass("hidden");
      $(".gifs").addClass("fadeInLeft");
    }
  },
  1000
  );
  $(".gifs").removeClass("fadeInLeft");
  $(".gifs").addClass("fadeOutLeft");
});


$(".image-button").on("click", function () {
  setTimeout(function () {
    $(".images").attr("src", imageArray[Math.floor(Math.random() * imageArray.length)]);
      if($(".images").hasClass("fadeOutRight")) {
      $(".images").removeClass("fadeOutRight");
      $(".images").addClass("hidden");
      }
    },
  999
  );
  setTimeout(function () {
    if($(".images").hasClass("hidden")) {
      $(".images").removeClass("hidden");
      $(".images").addClass("fadeInRight");
    }
  },
  1000
  );
  $(".images").removeClass("fadeInRight");
  $(".images").addClass("fadeOutRight");
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

$(".logInBtn").on("click", function () {
  if($(".logIn-div").hasClass("hidden") && (!$(".homePage-div").hasClass("hidden"))) {
    $(".homePage-div").addClass("fadeOut");
    $(".homePage-div").removeClass("fadeIn");
    setTimeout(function () {
      $(".homePage-div").addClass("hidden");
      $(".homePage-div").removeClass("fadeOut");
    },
    700
    );
    setTimeout(function () {
      $(".logIn-div").addClass("fadeIn");
      $(".logIn-div").removeClass("hidden");
    },
    701
    );
  } else if ($(".logIn-div").hasClass("hidden") && ($(".homePage-div").hasClass("hidden"))) {
    $(".signUp-div").addClass("fadeOut");
    $(".signUp-div").removeClass("fadeIn");
    setTimeout(function () {
      $(".signUp-div").addClass("hidden");
      $(".signUp-div").removeClass("fadeOut");
    },
    700
    );
    setTimeout(function () {
      $(".logIn-div").addClass("fadeIn");
      $(".logIn-div").removeClass("hidden");
    },
    701
    );
  }
});

$(".signUpBtn").on("click", function () {
  if($(".signUp-div").hasClass("hidden") && (!$(".homePage-div").hasClass("hidden"))) {
    $(".homePage-div").addClass("fadeOut");
    $(".homePage-div").removeClass("fadeIn");
    setTimeout(function () {
      $(".homePage-div").addClass("hidden");
      $(".homePage-div").removeClass("fadeOut");
    },
    700
    );
    setTimeout(function () {
      $(".signUp-div").addClass("fadeIn");
      $(".signUp-div").removeClass("hidden");
    },
    701
    );
  } else if ($(".signUp-div").hasClass("hidden") && ($(".homePage-div").hasClass("hidden"))) {
    $(".logIn-div").addClass("fadeOut");
    $(".logIn-div").removeClass("fadeIn");
    setTimeout(function () {
      $(".logIn-div").addClass("hidden");
      $(".logIn-div").removeClass("fadeOut");
    },
    700
    );
    setTimeout(function () {
      $(".signUp-div").addClass("fadeIn");
      $(".signUp-div").removeClass("hidden");
    },
    701
    );
  }
});

$(".homeBtn").on("click", function () {
  if($(".homePage-div").hasClass("hidden") && !$(".logIn-div").hasClass("hidden")) {
    $(".logIn-div").addClass("fadeOut");
    $(".logIn-div").removeClass("fadeIn");
    setTimeout(function () {
      $(".logIn-div").addClass("hidden");
      $(".logIn-div").removeClass("fadeOut");
    },
    700
    );
    setTimeout(function() {
      $(".homePage-div").addClass("fadeIn");
      $(".homePage-div").removeClass("hidden");
    },
    701
    );
  } else if ($(".homePage-div").hasClass("hidden") && !$(".signUp-div").hasClass("hidden")) {
    $(".signUp-div").addClass("fadeOut");
    $(".signUp-div").removeClass("fadeIn");
    setTimeout(function () {
      $(".signUp-div").addClass("hidden");
      $(".signUp-div").removeClass("fadeOut");
    },
    700
    );
    setTimeout(function() {
      $(".homePage-div").addClass("fadeIn");
      $(".homePage-div").removeClass("hidden");
    },
    701
    );
  }
});
