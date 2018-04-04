$(function(){

  var $mapWrap = $('.map-wrap');
  var $controls = $('.controls');
  let $bullet;
  let $mob = null;
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
      for(key in towers){
        if (towers[key].name === btnClicked){
          var selectedT  = towers[key].class;
          $(this).addClass(selectedT);
          $(this).append('<div class="fire-range" />')
          $mapWrap.children('.availableTile').off('click');
          $mapWrap.children().removeClass('availableTile');
          const turrentLocationTop = $(this).offset().top + 25;
          const turrentLocationLeft = $(this).offset().left + 25;
          setInterval(() => {
            shoot(turrentLocationTop, turrentLocationLeft);
          }, towers[key].dmg);
        }
      }
    });
  }
  function nextCell(minion){
    const x = minion.nextCell[0];
    const y = minion.nextCell[1];
    const oldPosX = (minion.pathHistory[minion.pathHistory.length-2] || [])[0];
    const oldPosY = (minion.pathHistory[minion.pathHistory.length-2] || [])[1];
    const newLeftCell = gameBoard[x][y-1];
    const newRightCell = gameBoard[x][y+1];
    const newTopCell = (gameBoard[x - 1] || [])[y];
    const newBottomCell = gameBoard[x + 1][y];
    if(newLeftCell === 1 && y-1 !== oldPosY){ // left
      return [x, y-1];
    } else if(newRightCell === 1 && y+1 !== oldPosY){ // right
      return [x, y+1];
    } else if(newTopCell === 1 && x - 1 !== oldPosX ){ // top
      return [x - 1, y];
    } else if(newBottomCell === 1 && x + 1 !== oldPosX ){ // bottom
      return [x+ 1, y];
    }
  }
  function findEntrance(){
    let entrance = []
    $.each(gameBoard, function(i, line){
      $.each(line, (j, cell) => {
        if (cell === 6){
          entrance = [i,j];
        }
      });
    });
    return entrance;
  }
  var minionSpawm = {
    spawm: setInterval( function(){
      $.each(minions, function(i, minion){
        if(minion.nextCell.length === 0){
          minion.nextCell  = findEntrance();
        }else{
          minion.nextCell = nextCell(minion);
          if (minion.nextCell === undefined){
            minion.nextCell  = findEntrance();
            clearInterval();
          }
        }
        const prevCell = minion.pathHistory[minion.pathHistory.length-1];
        if(prevCell){
          $(`.cell_${prevCell[0]}_${prevCell[1]}`).empty();
        }
        $mob = $(`.cell_${minion.nextCell[0]}_${minion.nextCell[1]}`);
        $mob.append($('<div class="mobs"/>'));
        minion.pathHistory.push(minion.nextCell);
        minions[i] = minion;
      });
    }, minions[0].speed )
  };



  //------------------------Collisions------------------------------------------
  // var bulletInterval = setInterval(collisions, 5);
  //
  // function collisions(){
  //   console.log('pewPew collisions running');
  //
  //   const opponentLeft = $mob.offset().left;
  //   const opponentTop = $mob.offset().top;
  //   const opponentRight = opponentLeft + $mob.width();
  //   const opponentBottom = opponentTop + $mob.height();
  //
  //   const laserTop = $bullet.offset().top;
  //   const laserBottom = $bullet.offset().top + $bullet.height();
  //   const laserLeft = $bullet.offset().left;
  //   const laserRight = $bullet.offset().left + $bullet.width();
  //
  //   if ((laserRight > opponentLeft && laserRight < opponentRight &&
  //     laserTop > opponentTop && laserBottom < opponentBottom) ||
  //     (laserLeft > opponentRight && laserLeft < opponentLeft &&
  //       laserTop > opponentTop && laserBottom < opponentBottom)){
  //     console.log('BOOM');
  //     $bullet.stop().remove();
  //   }
  // }
  //
  // function pauseLasers(object){
  //   setTimeout(function(){
  //     console.log('pauseLasers, noLasers is', object.noLasers);
  //     clearInterval(bulletInterval);
  //     object.noLasers = true;
  //   }, 500);
  // }
  // pauseLasers(object);
  function shoot(top, left){
    $bullet = $('<div class=bullet/>');
    $bullet.css({
      left: left ,
      top: top
    });
    $bullet.appendTo($('.map-wrap')).animate({
      left: $mob.offset().left + 25,
      top: $mob.offset().top + 25
    },{
      complete: function(){
        $bullet.stop().remove();
      }
    });
  }






  //------------------------Build Map-------------------------------------------
  // coll();
  controlsFn();
  mapBuilder();
});