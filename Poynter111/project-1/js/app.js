$(function(){

  var $mapWrap = $('.map-wrap');
  var $controls = $('.controls');
  const $bullet = $('<div class=bullet/>');
  let $mob = $('<div class="mobs"/>');
  const cellClasses = ['grass', 'path', 'entrance', 'exit'];
  const DEV = false;

  function log(arguments){
    if(DEV){
      console.log(arguments)
    }
  }
  //---------------------------Map Generation-----------------------------------
  function mapBuilder(){
    $.each(gameBoard, function(i, line){
      $.each(line, (j, cell) => buildCell(cell, i, j));
    });
  }
  function buildCell(cell, i, j){
    var $elem = $(`<div class="basetile cell_${i}_${j} " data-i='${i}' data-j='${j}'/>`);
    $mapWrap.append($elem.addClass(cellClasses[cell]));

  }

  //------------------------Tower managment and construction--------------------
  $controls.on('click', 'button', function(){
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
          $(this).addClass(selectedT).append('<div class="fire-range" />');
          $mapWrap.children('.availableTile').off('click');
          $mapWrap.children().removeClass('availableTile');
          const turrentLocationTop = $(this).offset().top + 25;
          const turrentLocationLeft = $(this).offset().left + 25;
          setInterval(() => {
            shoot(turrentLocationTop, turrentLocationLeft);
          }, towers[key].speed); //TOWER RATE OF FIRE
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
        if (cell === 2){
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
          }
        }
        const prevCell = minion.pathHistory[minion.pathHistory.length-1];
        if(prevCell){
          $(`.cell_${prevCell[0]}_${prevCell[1]}`).empty();
        }
        $cell = $(`.cell_${minion.nextCell[0]}_${minion.nextCell[1]}`);
        $mob = $('<div class="mobs"/>');
        $mob.append('<div class="life-bar">')
        $mob.append('<div class="health-bar">')
        $cell.append($mob);

        minion.pathHistory.push(minion.nextCell);
        minions[i] = minion;
      });
    }, minions[0].speed) //MINION SPEED
  };


  function shoot(top, left){
    $bullet
      .css({
        left: left ,
        top: top
      })
      .appendTo($('.map-wrap'))
      .animate({
        left: $mob.offset().left + 20,
        top: $mob.offset().top + 10

      },{
        complete: function(){
          $bullet.stop().remove();
          console.log('shoot complete')
        }
      });
  }
  setInterval(collisions,10);
  // setInterval(minionSpawm.spawm,3000);

  function boundaries(element){ // return element boundaries [top, right, bottom, left]
    const offset = element.offset()
    return [offset.top, offset.left+element.width(),offset.top+ element.height(), offset.left]
  }
  function collisions(){
    [ot, or, ob, ol] = boundaries($mob);
    [lt, lr, lb, ll] = boundaries($bullet);

    if ((lr > ol && lr < or && lt > ot && lb < ob) ||
        (ll > or && ll < ol && lt > ot && lb < ob) ){
      $bullet.stop().remove();
      console.log('BOOM');
      minionHit();
    }

  }
function minionHit(){
  let health = minions[0].MaxHealth;
  let damage = towers.$tower1.dmg;
  health -= damage;
   minions[0].MaxHealth = health;
   console.log(health);
   healthBar(health);
  if(health < 0){
    clearInterval(minionSpawm.spawm);
    $mob.remove();

  }
}
function healthBar(health){
  if (health <= 40){
    $('.health-bar').css({
      width: 28
    })
  }if (health <= 30){
    $('.health-bar').css({
      width: 21
    })
  }if (health <= 20){
    $('.health-bar').css({
      width: 14
    })
  }if (health <= 10){
    $('.health-bar').css({
      width: 7
    })
  }if (health <= 0){
    $('.health-bar').css({
      width: 0
    })
  }
}
  //------------------------Build Map-------------------------------------------
  function setup(){
    for(key in towers){
      $(`<button class='cntrBtn'>${towers[key].name}</button>`).appendTo('.controls');
    }
    mapBuilder();
  }
  setup();
});
