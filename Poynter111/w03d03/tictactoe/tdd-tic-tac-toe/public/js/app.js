// var clicks = 0;





function init() {
  // if ($(this).is(':empty')){
  $('li').on('click', function(){
    $(this).text('X');
    $('li').on('click', function(){
      $(this).text('O');
    });
  });
  // }
}
window.addEventListener('DOMContentLoaded', init);
