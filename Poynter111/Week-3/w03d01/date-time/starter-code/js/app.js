window.addEventListener('DOMContentLoaded', () => {
  //
  // // WATCH
  // const screen = document.getElementsByClassName('screen')[0];
  // const screen2 = document.getElementsByClassName('screen')[1];
  // const strtStpBtn = document.getElementById('startStop');
  // const resetBtn = document.getElementById('reset');
  //
  // window.setInterval(function(){
  //   const currentDate = new Date();
  //   const hours = currentDate.getHours();
  //   const minutes = currentDate.getMinutes();
  //   const seconds = currentDate.getSeconds();
  //   screen.innerHTML = `${hours}:${minutes}:${seconds}`;
  // }, 1000);
  //
  //
  // let seconds = 10;
  // resetBtn.onclick = function(){
  //   screen2.innerHTML = 10;
  // };
  // strtStpBtn.onclick = function(){
  //   setInterval(function(){
  //     seconds--;
  //     screen2.innerHTML = seconds;
  //   }, 1000)
  // }

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

//CLASS SOULUTION --------------------------------------------------------------
  function formatNumber(number){
    return number < 10 ? `0${number}`:number;
  }
  const screen = document.getElementsByClassName('screen')[0];
  function currentTime(){
    const currentDate = new Date();
    const hours = formatNumber(currentDate.getHours());
    const minutes = formatNumber(currentDate.getMinutes());
    const seconds = formatNumber(currentDate.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }
  function startClock(){
    screen.innerHTML = currentTime();
    setInterval(() => {
      screen.innerHTML = currentTime();
    }, 1000);
  }
  startClock();

  const strtStpBtn = document.getElementById('startStop');
  const resetBtn = document.getElementById('reset');
  const screen2 = document.getElementsByClassName('screen')[1];
  const timer = document.getElementById('timer');

  let timeIsRunning = false;
  let timeRemaining = 10;
  let timerId = null;

  function startStopTimer(){
    if (timeIsRunning){
      clearInterval(timerId);
      timeIsRunning = false;
    } else {
      timerId = setInterval(() => {
        timeRemaining--;
        screen2.innerHTML = timeRemaining;
        if (timeRemaining ===0){
          clearInterval(timerId);
          timer.classlist.add('ringing');
        }
      },1000);
    }
    timeIsRunning = true;
  }
  strtStpBtn.addEventListener('click', startStopTimer);

  function resetTimer(){
    clearInterval(timerId);
    timer.classlist.remove('ringing');
    timeRemaining = 10;
    screen2.innerHTML = timeRemaining;
    timeIsRunning = false;
  }

  resetBtn.addEventListener('click', resetTimer);




















});
