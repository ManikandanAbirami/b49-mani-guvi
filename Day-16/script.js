console.log("Let's start the timer!!!");

setTimeout(function () {
  console.log("Timer 3 is finished!!!");

  setTimeout(() => {
    console.log("Timer 2 is finished!!!");

    setTimeout(() => {
      console.log("Timer 1 is finished!!!");

      console.log("Happy New Year!!!!!!");
    }, 2000);
  }, 3000);
}, 4000);
