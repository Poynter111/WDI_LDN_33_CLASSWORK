$(function(){
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
  var $tower1 = $('#tower1');
  var $tower2 = $('#tower2');
  var $tower3 = $('#tower3');

  function buildCell(cell, i, j){
    var $elem = $(`<div class="basetile cell_${i}_${j} " data-i='${i}' data-j='${j}'/>`);
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
  function mapBuilder(){
    $.each(gameBoard, function(i, line){
      $.each(line, (j, cell) => {
        buildCell(cell, i, j);
      });
    });
  }
  $tower1.on('click', function(){
    $.each(gameBoard, function(i, line){
      $.each(line, (j, cell) => {
        if (cell === 0){
          $(`.cell_${i}_${j}`).addClass('availableTile');
          $mapWrap.children('.availableTile').on('click', function(){
            $(this).addClass('tower1');
          });
        }
      });
    });
  });
  $tower2.on('click', function(){
    $.each(gameBoard, function(i, line){
      $.each(line, (j, cell) => {
        if (cell === 0){
          $(`.cell_${i}_${j}`).addClass('availableTile');
          $mapWrap.children('.availableTile').on('click', function(){
            $(this).addClass('tower2');
          });
        }
      });
    });
  });
  $tower3.on('click', function(){
    $.each(gameBoard, function(i, line){
      $.each(line, (j, cell) => {
        if (cell === 0){
          $(`.cell_${i}_${j}`).addClass('availableTile');
          $mapWrap.children('.availableTile').on('click', function(){
            $(this).addClass('tower3');
          });
        }
      });
    });
  });


  // function reset(){
  //   $mapWrap.children('.availableTile').removeClass('.availableTile');
  //   console.log('hello');
  // }
  //
  // function constructTower(){
  //
  //   reset();
  // }


  mapBuilder();
});
