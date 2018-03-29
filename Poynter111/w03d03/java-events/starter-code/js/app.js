$(function(){
  // $('li').on('click', function(){
  //   const $element = $(this);
  //   $element.hide('slow','swing',function(){
  //     setTimeout(function(){
  //       $element.fadeIn('slow');
  //     },1000);
  //   });
  // });
  // $('li').on('click', function(){
  //   $('.grid').append($(this).clone());
  // });

  // $('li').on('', 'li', function(){
  //   $('.grid').append($(this).clone());
  // });

  // $(function(){
  //   $('html').keydown(function(e){
  //     $('#keydown_con').val(e.which);
  //   });
  // });
  let x = 0;


  $(document).keydown(function(e) {
    const keypressed = e.keyCode;
    x += 1;
    console.log(x);
    console.log(keypressed);
    if (keypressed === 37){
      $('li').css({color: '#69D2E7',right: x +'px'});
    } if (keypressed === 38){
      $('li').css({color: '#F38630',top: x +'px'});
    } if (keypressed === 39){
      $('li').css({color: '#A7DBDB',left: x +'px'});
    } if (keypressed === 40){
      $('li').css({color: '#E0E4CC',bottom: x +'px'});
    }
  });









  // const $lis = $('li');
  // $.each($lis, function(index, element){
  //   $(element).slideUp(200 * index + 1);
  // });
  // $buttons.on('click', (event)=>{
  //     const newFeeling = $(event.target).text();
  //     $feelingDiv.text(newFeeling);
  //     if(newFeeling === 'Sassy')
  //       $feelingDiv.css({color: '#69D2E7', fontFamily: 'cursive', fontSize: '40px'});
  //     if(newFeeling === 'Silly')
  //       $feelingDiv.css({color: '#A7DBDB', fontFamily: 'fantasy', fontSize: '50px'});
  //     if(newFeeling === 'Sad')
  //       $feelingDiv.css({color: ' #E0E4CC', fontFamily: 'serif', fontSize: '30px'});
  //     if(newFeeling === 'Submarine')
  //       $feelingDiv.css({color: ' #F38630', fontFamily: 'sans-serif', fontSize: '200px'});
  //     if(newFeeling === 'ALEX')
  //       $feelingDiv.css({color: ' #FA6900', fontFamily: 'sans-serif', fontSize: '400px'});
  //   });
  // });

  console.log('Im working');
});
