var towers =
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
