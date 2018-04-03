$(function(){
  //----------------------Map blueprint & Controls--------------------------

  var $mapWrap = $('.map-wrap');
  var $controls = $('.controls');
  //-----------------------------------TOWERS-----------------------------------


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
        $(this).text(towers.$tower1.name);
      }
      if($(this).attr('id') === '2'){
        $(this).text(towers.$tower2.name);
      }
      if($(this).attr('id') === '3'){
        $(this).text(towers.$tower3.name);
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
        }
      });
    });
    event(btnClicked);
  });
  function event(btnClicked){

    $mapWrap.children('.availableTile').on('click', function(event){
      console.log(event);
      for(key in towers){
        if (towers[key].name === btnClicked){
          var selectedT  = towers[key].class;
          $(this).addClass(selectedT);
          $mapWrap.children('.availableTile').off('click');
          $mapWrap.children().removeClass('availableTile');
        }
      }
    });
  }
  // console.log(towers[key].name);
  //[key]
  //,
  // $( "p" ).click(function() {
  //   var htmlString = $( this ).html();
  //   $( this ).text( htmlString );
  // });

  // function reset(){
  //   $mapWrap.children('.availableTile').removeClass('.availableTile');
  //   console.log('hello');
  // }

  //------------------------Build Map-------------------------------------------
  controlsFn();
  mapBuilder();
});
