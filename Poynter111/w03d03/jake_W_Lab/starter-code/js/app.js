$(function(){

  // $('ul').on('click', 'li', function(){
  //   console.log('a button has been pressed');
  // });


  var number1 = null;
  var number2 = null;
  var opBtnPressed = null;


  $('.number').on('click', function() {
    number1  = $(this).val();
    });
    


  });

//Get value of buttons pressed.















  //   if (buttonPressed === "C") {
  //     result = 0;
  //     currentEntry = '0';
  //   } else if (buttonPressed === "CE") {
  //     currentEntry = '0';
  //   } else if (buttonPressed === "back") {
  //     //currentEntry = currentEntry.substring(0, currentEntry.length-1);
  //   } else if (buttonPressed === "+/-") {
  //     currentEntry *= -1;
  //   } else if (buttonPressed === '.') {
  //     currentEntry += '.';
  //   } else if (isNumber(buttonPressed)) {
  //     if (currentEntry === '0') currentEntry = buttonPressed;
  //     else currentEntry = currentEntry + buttonPressed;
  //   } else if (isOperator(buttonPressed)) {
  //     prevEntry = parseFloat(currentEntry);
  //     operation = buttonPressed;
  //     currentEntry = '';
  //   } else if(buttonPressed === '%') {
  //     currentEntry = currentEntry / 100;
  //   } else if (buttonPressed === 'sqrt') {
  //     currentEntry = Math.sqrt(currentEntry);
  //   } else if (buttonPressed === '1/x') {
  //     currentEntry = 1 / currentEntry;
  //   } else if (buttonPressed === 'pi') {
  //     currentEntry = Math.PI;
  //   } else if (buttonPressed === '=') {
  //     currentEntry = operate(prevEntry, currentEntry, operation);
  //     operation = null;
  //   }
  //
  //   updateScreen(currentEntry);
  // });
  //
  //
  // updateScreen = function(displayValue) {
  //   var displayValue = displayValue.toString();
  //   $('.screen').html(displayValue.substring(0, 10));
  // };
  //
  // isNumber = function(value) {
  //   return !isNaN(value);
  // }
  //
  // isOperator = function(value) {
  //   return value === '/' || value === '*' || value === '+' || value === '-';
  // };
  //
  // operate = function(a, b, operation) {
  //   a = parseFloat(a);
  //   b = parseFloat(b);
  //   console.log(a, b, operation);
  //   if (operation === '+') return a + b;
  //   if (operation === '-') return a - b;
  //   if (operation === '*') return a * b;
  //   if (operation === '/') return a / b;
  // }
});
