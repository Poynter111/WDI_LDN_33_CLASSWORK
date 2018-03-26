window.addEventListener('DOMContentLoaded', () => {

  let firstNumber  = '';
  let secondNumber = '';
  let operator      = '';
  const calOperators ={
    '+': +,
    '-': -
    '*': *
    '/': /
  }

function operatorGen(num1, operUsed, num2){
  

    document.querySelectorAll('.operator').forEach(operatorBtn => {
      operatorBtn.addEventListener('click', (e) => {
        operator = e.target.value;
      });
    });

}


  document.querySelectorAll('.number').forEach(numberBtn => {
    numberBtn.addEventListener('click', (e) => {
      const value = e.target.value;
      document.querySelector('.display').value = value;

      if(typeof firstNumber !== 'number') { // Check if firstNumber has already been assigned
        firstNumber = parseFloat(value); // If it hasn't, assign the value to firstNumber
      } else {
        secondNumber = parseFloat(value); // Else assign the value to secondNumber
      }
    });
  });



  document.querySelector('.eq').addEventListener('click', () => {
    switch (operator) {
      case '+':
        document.querySelector('.display').value = firstNumber + secondNumber;
        break;
      case '-':
        document.querySelector('.display').value = firstNumber - secondNumber;
        break;
      case '/':
        document.querySelector('.display').value = firstNumber / secondNumber;
        break;
      case 'x':
        document.querySelector('.display').value = firstNumber * secondNumber;
        break;
    }
  });

  document.querySelector('.clear').addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    document.querySelector('.display').value = '';
  });

});
