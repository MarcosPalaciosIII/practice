function timer() {
  var currentDay = new Date();
  var hour = currentDay.getHours();
  var minutes = currentDay.getMinutes();
  var seconds = currentDay.getSeconds();

  minutes = currentTime(minutes);
  seconds = currentTime(seconds);

  function currentTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  document.querySelector(".currentTime").innerHTML = hour + ":" + minutes + ":" + seconds;

  document.querySelector(".currentDay").innerHTML = currentDay;

  setTimeout(function () {
    timer();
  },
   1000
 );

}





console.log(timer());
