// window.addEventListener('DOMContentLoaded', () => {
//   const $feelingDiv = $('#feeling');
//   const $buttons = $('button');
//
//   for(let i=0, len=buttons.length;i<len;i++) {
//     buttons[i].addEventListener('click', (e) => {
//       const newFeeling = e.target.textContent;
//       feelingDiv.textContent = newFeeling;
//
//       if(newFeeling === 'Sassy') {
//         feelingDiv.style.color = 'pink';
//         feelingDiv.style.fontFamily = 'cursive';
//         feelingDiv.style.fontSize = '40px';
//       }
//       if(newFeeling === 'Silly') {
//         feelingDiv.style.color = 'orange';
//         feelingDiv.style.fontFamily = 'fantasy';
//         feelingDiv.style.fontSize = '32px';
//       }
//       if(newFeeling === 'Sad') {
//         feelingDiv.style.color = 'grey';
//         feelingDiv.style.fontFamily = 'serif';
//         feelingDiv.style.fontSize = '36px';
//       }
//       if(newFeeling === 'Submarine') {
//         feelingDiv.style.color = 'lightBlue';
//         feelingDiv.style.fontFamily = 'sans-serif';
//         feelingDiv.style.fontSize = '30px';
//       }
//     });
//   }
// });
$(function(){

  const $feelingDiv = $('#feeling');
  const $buttons = $('button');

  $buttons.on('click', (event)=>{
    const newFeeling = $(event.target).text();
    $feelingDiv.text(newFeeling);
    if(newFeeling === 'Sassy')
      $feelingDiv.css({color: '#69D2E7', fontFamily: 'cursive', fontSize: '40px'});
    if(newFeeling === 'Silly')
      $feelingDiv.css({color: '#A7DBDB', fontFamily: 'fantasy', fontSize: '50px'});
    if(newFeeling === 'Sad')
      $feelingDiv.css({color: ' #E0E4CC', fontFamily: 'serif', fontSize: '30px'});
    if(newFeeling === 'Submarine')
      $feelingDiv.css({color: ' #F38630', fontFamily: 'sans-serif', fontSize: '200px'});
    if(newFeeling === 'ALEX')
      $feelingDiv.css({color: ' #FA6900', fontFamily: 'sans-serif', fontSize: '400px'});
  });
});
