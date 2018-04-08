var daftPlayer = daftPlayer || {};

daftPlayer.loadAudioPlayer = function(){
  this.player = document.getElementById('audio');
};

daftPlayer.setup = function(){
  this.loadAudioPlayer();
  var buttons = document.querySelectorAll('#player a');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', daftPlayer.playSound.bind(this));
  }
};

daftPlayer.playSound = function(){
  event.preventDefault();
  var filename = event.currentTarget.getAttribute('id') + '.wav';
  this.player.src = '/sounds/' + filename;
  this.player.play();
};

document.addEventListener('DOMContentLoaded', function() {
  daftPlayer.setup();
});
