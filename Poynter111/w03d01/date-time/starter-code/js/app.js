window.addEventListener('DOMContentLoaded', () => {

  // WATCH
  const screen = document.getElementsByClassName('screen')[0];
  const screen2 = document.getElementsByClassName('screen')[1];
  const strtStpBtn = document.getElementById('startStop');
  const resetBtn = document.getElementById('reset');

  window.setInterval(function(){
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    screen.innerHTML = `${hours}:${minutes}:${seconds}`;
  }, 1000);


  let seconds = 10;
  resetBtn.onclick = function(){
    screen2.innerHTML = 10;
  };
  strtStpBtn.onclick = function(){
    setInterval(function(){
      seconds--;
      screen2.innerHTML = seconds;
    }, 1000)
  }

//



  // window.setInterval(function(){
  //   currentTime(hours, minutes, seconds);
  // }, 1000);
  // setTimeout('window.location.reload();', 100);





  // function startClock() {
  //   // display the current time on the clock screen
  //   // update the current time every second
  // }
  //
  // startClock();
  //
  // // TIMER
  // const $timer = $('#timer');
  // const $timerScreen = $timer.find('.screen');
  // const $startStopBtn = $timer.find('#startStop');
  // const $resetBtn = $timer.find('#reset');
  //
  // // add event listeners to $startStopBtn & $resetBtn
  //
  // const timeRemaining = 10;
  // const timerIsRunning = false;
  //
  // function startStopTimer() {
  //   // stop the timer if it is running
  //   // start the timer if it is NOT running
  //   // add "ringing" class to timer when time reaches 0
  // }
  //
  // function resetTimer() {
  //   // stop the timer
  //   // remove the "ringing" class
  //   // reset the timeRemaining
  // }
});
