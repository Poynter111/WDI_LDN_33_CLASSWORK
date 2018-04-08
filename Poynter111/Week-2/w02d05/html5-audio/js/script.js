window.addEventListener("DOMContentLoaded", function(event){

  const audio = document.getElementById('audio');
  audio.src = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3';
  const playBtn = document.getElementsByTagName('button')[0]
  playBtn.addEventListener('click', function(){
    audio.play();
  });

console.log('Im working');
});
