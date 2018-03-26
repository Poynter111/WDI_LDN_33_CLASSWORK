window.addEventListener('DOMContentLoaded', function(){
//-----------------Function factory---------------------------------------------
// function makeAdder (x){
//     return function(y){
//       return x + y;
//     };
// }
// var add5 = makeAdder(5);
// add5(6)
// This function will add 5 to any number we pass to it.
//----------------------Class Work----------------------------------------------
function makeSizer(size){
    return function (){
      document.this.style.fontSize = size + 'px';
    };
}

let size12 = makeSizer(12);
let size16 = makeSizer(16);
let size24 = makeSizer(24);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-16').onclick = size16;
document.getElementById('size-24').onclick = size24;
//----------------------Class Work----------------------------------------------
//IIFE--------------------------------------------------------------------------
(function sayWhat(words){
    console.log(words)
})('I will say these words straight away');
//by wrapping the function in () it will be exicuted autom atially--------------







//----------------------Console.log.check---------------------------------------
console.log('Im working');
});
