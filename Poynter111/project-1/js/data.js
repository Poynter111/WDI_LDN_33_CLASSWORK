//-------------------------------------TOWERS-----------------------------------
var towers =
{
  $tower1:
  {
    name: 'Machine',
    hTml: $('#1'),
    value: 50,
    range: 5,
    class: 'tower1',
    speed: 500,
    dmg: 10
  },
  $tower2:
  {
    name: 'Sniper',
    hTml: $('#2'),
    value: 100,
    range: 10,
    class: 'tower2',
    speed: 1000,
    dmg: 10
  },
  $tower3:
  {
    name: '50 Cal',
    hTml: $('#3'),
    value: 150,
    range: 5,
    class: 'tower3',
    speed: 1000,
    dmg: 10
  }
};
  //----------------------Map blueprint & Controls------------------------------
var gameBoard =[
  [0,0,1,1,1,1,1,1,1,2],
  [0,0,1,0,0,0,0,0,0,0],
  [0,0,1,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,1,1,1,1,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,1,1,1,1,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,3,0]
];
//---------------------------------Minnions-------------------------------------
var minions = [{
  name: 'Minions',
  nextCell: [],
  pathHistory: [],
  MaxHealth: 50,
  speed: 1000,
  class: 'mobs',
  id: 'mobA'
}];
// ('.cell_${i}_${j-4}'),
// $(`.cell_${i}_${j-5}`).append($mob),
// $(`.cell_${i}_${j-6}`).append($mob),
// $(`.cell_${i}_${j-7}`).append($mob),
// $(`.cell_${i+1}_${j-7}`).append($mob),
// $(`.cell_${i+2}_${j-7}`).append($mob),
// $(`.cell_${i+2}_${j-6}`).append($mob),
// $(`.cell_${i+2}_${j-5}`).append($mob),
// $(`.cell_${i+2}_${j-4}`).append($mob),
// $(`.cell_${i+2}_${j-3}`).append($mob),
// $(`.cell_${i+2}_${j-2}`).append($mob),
// $(`.cell_${i+3}_${j-2}`).append($mob),
// $(`.cell_${i+4}_${j-2}`).append($mob),
// $(`.cell_${i+4}_${j-3}`).append($mob),
// $(`.cell_${i+4}_${j-4}`).append($mob),
// $(`.cell_${i+4}_${j-5}`).append($mob),
// $(`.cell_${i+5}_${j-5}`).append($mob),
// $(`.cell_${i+6}_${j-5}`).append($mob),
// $(`.cell_${i+6}_${j-6}`).append($mob),
// $(`.cell_${i+6}_${j-7}`).append($mob),
// $(`.cell_${i+6}_${j-8}`).append($mob),
// $(`.cell_${i+7}_${j-8}`).append($mob),
// $(`.cell_${i+8}_${j-8}`).append($mob),
// $(`.cell_${i+8}_${j-7}`).append($mob),
// $(`.cell_${i+8}_${j-6}`).append($mob),
// $(`.cell_${i+8}_${j-5}`).append($mob),
// $(`.cell_${i+8}_${j-4}`).append($mob),
// $(`.cell_${i+8}_${j-3}`).append($mob),
// $(`.cell_${i+8}_${j-2}`).append($mob),
// $(`.cell_${i+8}_${j-1}`).append($mob),
// $(`.cell_${i+9}_${j-1}`).append($mob)
