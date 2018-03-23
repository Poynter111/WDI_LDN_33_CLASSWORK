window.addEventListener('DOMContentLoaded', function(){
  const audio = document.getElementById('playMe');
  var playBtn = document.getElementsByClassName('playBtn');
  for(var i = 0; i < playBtn.length; i++){
    playBtn[i].addEventListener('click', function() {
      const btnPressed = this.dataset.value;
      audio.src = `/sounds/${btnPressed}.wav`;
      audio.play()
    });
  }
});
