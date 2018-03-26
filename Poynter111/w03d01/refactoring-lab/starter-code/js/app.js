window.addEventListener('DOMContentLoaded', () => {

  let firstNumber  = '';
  let secondNumber = '';
  let operator      = '';
  const opBtn = document.querySelectorAll('.operator');
  const numBtn = document.querySelectorAll('.number');
  const screen = document.querySelector('.display');
  const eqBtn = document.querySelector('.eq');
  const clearBtn = document.querySelector('.clear');
  const calOperators ={
    '+': +,
    '-': -
    '*': *
    '/': /
  }


    opBtn.forEach(operatorBtn => {
      operatorBtn.addEventListener('click', (e) => {
        operator = e.target.value;
      });
    });




  numBtn.forEach(numberBtn => {
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



  eqBtn.addEventListener('click', () => {
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

  clearBtn.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    document.querySelector('.display').value = '';
  });

});
