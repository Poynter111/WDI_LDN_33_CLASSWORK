window.addEventListener('DOMContentLoaded', function(){
  const toGo = document.getElementById('toGo');
  const startAmount = [];
  const howMuch = document.getElementById('howMuch');
  var dBtn = document.getElementsByClassName('donBtn');
  for(var i = 0; i < dBtn.length; i++){
    dBtn[i].addEventListener('click', function() {
      const donatedAmount = Number(this.dataset.value);
      startAmount.push(donatedAmount);
      const newAmount = startAmount.reduce((a, b) => a + b, 0);
      howMuch.innerHTML = newAmount;
      toGo.innerHTML = 100 - newAmount;
      // (newAmount >100) ? audio.play() : audio.pause
    });
  }

});
// console.log(newAmount);
