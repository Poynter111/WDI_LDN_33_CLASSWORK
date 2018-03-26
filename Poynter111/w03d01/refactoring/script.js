window.addEventListener('DOMContentLoaded', () => {
  const choices = Object.keys(winConditions);
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  function makeChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function findWinner(player1Choice, player2Choice){
    if (winConditions[player1Choice] === player2Choice) return 'Player 1 Wins !';
    if (winConditions[player2Choice] === player1Choice) return 'Player 2 Wins !';
    return 'Tie';
  }

  function setup(){
    const player1 = document.querySelector('.player1');
    const player2 = document.querySelector('.player2');
    const result = document.querySelector('.result');
    const buttons = document.querySelectorAll('button.choice');
    const resetBtn = document.querySelector('button.reset');

    function play(event){
      const player1Choice = event.target.textContent;
      const player2Choice = makeChoice();
      const textResult = findWinner(player1Choice, player2Choice);
      player1.textContent = player1Choice;
      player2.textContent = player2Choice;
      result.textContent = textResult;
    }
    function reset(){
      player1.textContent = '';
      player2.textContent = '';
      result.textContent = '';
    }
    buttons.forEach(button => button.addEventListener('click', play));
    resetBtn.addEventListener('click', reset);
  }
});
// function findWinner(player1Choice, player2Choice){
//   if(player1Choice === player2Choice) {
//     return 'Tie';
//   }
//   if(
//     player1Choice === 'rock' && player2Choice === 'scissors' ||
//     player1Choice === 'paper' && player2Choice === 'rock' ||
//     player1Choice === 'scissors' && player2Choice === 'paper'
//   ) {
//     return 'Player 1 wins';
//   }
//
//   return 'Player 2 wins';
// }
