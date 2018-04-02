$(function(){
  //----------------------Map blueprint & Controls--------------------------
  var gameBoard =[
    [0,0,1,1,1,1,1,1,1,6],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,1,1,1,1,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,1,1,1,1,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,7,0]
  ];
  var $mapWrap = $('.map-wrap');
  var $controls = $('.controls');
  //-----------------------------------TOWERS-----------------------------------
  var $towers =
{
  $tower1:
    {
      name: 'Machine',
      hTml: $('#1'),
      value: 50,
      range: 5,
      class: 'tower1',
      dmg: 10
    },
  $tower2:
    {
      name: 'Sniper',
      hTml: $('#2'),
      value: 100,
      range: 10,
      class: 'tower2',
      dmg: 50
    },
  $tower3:
  {
    name: '50 Cal',
    hTml: $('#3'),
    value: 150,
    range: 5,
    class: 'tower3',
    dmg: 30
  }
};

  //---------------------------Map Generation-----------------------------------
  function mapBuilder(){
    $.each(gameBoard, function(i, line){
      $.each(line, (j, cell) => {
        buildCell(cell, i, j);
      });
    });
  }
  function buildCell(cell, i, j){
    var $elem =
    $(`<div class="basetile cell_${i}_${j} " data-i='${i}' data-j='${j}'/>`);
    if (cell === 0){
      $mapWrap.append($elem.addClass('grass'));
    } if (cell === 1){
      $mapWrap.append($elem.addClass('path'));
    } if (cell === 2){
      $mapWrap.append($elem.addClass('tower'));
    }if (cell === 6){
      $mapWrap.append($elem.addClass('entrance'));
    } if (cell === 7){
      $mapWrap.append($elem.addClass('exit'));
    }
  }
  //-------------------------------Controls-------------------------------------
  function controlsFn(){
    $controls.children('.cntrBtn').each(function(){
      if($(this).attr('id') === '1'){
        $(this).text($towers.$tower1.name);
      }
      if($(this).attr('id') === '2'){
        $(this).text($towers.$tower2.name);
      }
      if($(this).attr('id') === '3'){
        $(this).text($towers.$tower3.name);
      }
      // if($(this).attr('id') === '4'){  Need to decide what these buttone will do
      //   $(this).text($tower3.name);      will there function stay here or
      // }                                          go somewhere else.
      // if($(this).attr('id') === '5'){
      //   $(this).text($tower3.name);
      // }
    });
  }
  //------------------------Tower managment and construction--------------------
  $controls.children('.cntrBtn').on('click', function(){
    var btnClicked = $(this).html();
    $(this).text(btnClicked);
    $.each(gameBoard, function(i, line){
      $.each(line, (j, cell) => {
        if (cell === 0){
          $(`.cell_${i}_${j}`).addClass('availableTile');
          event(btnClicked);
        }
      });
    });
  });
  function event(btnClicked){
    $mapWrap.children('.availableTile').on('click', function(){
      $(this).addClass('tower1');
      console.log(btnClicked);
    });
  }
  // $( "p" ).click(function() {
  //   var htmlString = $( this ).html();
  //   $( this ).text( htmlString );
  // });


  // $tower1.hTml.on('click', function(){
  //   $.each(gameBoard, function(i, line){
  //     $.each(line, (j, cell) => {
  //       if (cell === 0){
  //         $(`.cell_${i}_${j}`).addClass('availableTile');
  //         $mapWrap.children('.availableTile').on('click', function(){
  //           $(this).addClass('tower1');
  //         });
  //       }
  //     });
  //   });
  // });
  // $tower2.on('click', function(){
  //   $.each(gameBoard, function(i, line){
  //     $.each(line, (j, cell) => {
  //       if (cell === 0){
  //         $(`.cell_${i}_${j}`).addClass('availableTile');
  //         $mapWrap.children('.availableTile').on('click', function(){
  //           $(this).addClass('tower2');
  //         });
  //       }
  //     });
  //   });
  // });
  // $tower3.on('click', function(){
  //   $.each(gameBoard, function(i, line){
  //     $.each(line, (j, cell) => {
  //       if (cell === 0){
  //         $(`.cell_${i}_${j}`).addClass('availableTile');
  //         $mapWrap.children('.availableTile').on('click', function(){
  //           $(this).addClass('tower3');
  //         });
  //       }
  //     });
  //   });
  // });


  // function reset(){
  //   $mapWrap.children('.availableTile').removeClass('.availableTile');
  //   console.log('hello');
  // }

  //------------------------Build Map-------------------------------------------
  controlsFn();
  mapBuilder();
});
