/* global describe, beforeEach, afterEach, it, xit, expect */
describe('JS tests', () => {

  let cells;
  let display;
  let resetBtn;

  beforeEach(done => {
    if(!window.__html__) return done();
    document.body.innerHTML = window.__html__['index.html'];
    const DomContentLoaded = document.createEvent('Event');
    DomContentLoaded.initEvent('DOMContentLoaded', true, true);
    document.dispatchEvent(DomContentLoaded);

    cells = [].slice.apply(document.querySelectorAll('li'));
    display = document.getElementById('display');
    resetBtn = document.querySelector('button');

    done();
  });

  afterEach(done => {
    document.body.innerHTML = null;
    done();
  });

  it('should add an X to a cell on first go', done => {
    const cell = cells[0];
    cell.click();
    expect(cell.innerHTML).to.eq('X');
    done();
  });

  it('should add an O to a cell on second go', done => {
    const cellX = cells[0];
    const cellO = cells[1];
    cellX.click();
    cellO.click();
    expect(cellO.innerHTML).to.eq('O');
    done();
  });

  xit('should only allow a empty square to be clicked on', done => {
    const cell = cells[0];
    cell.click();
    cell.click();
    expect(cell.innerHTML).to.eq('X');
    done();
  });

  xit('should detect a win on the top row', done => {
    cells[0].click();
    cells[3].click();
    cells[1].click();
    cells[4].click();
    cells[2].click();
    expect(display.innerHTML).to.eq('X wins!');
    done();
  });

  xit('should detect a win on the middle row', done => {
    cells[3].click();
    cells[0].click();
    cells[4].click();
    cells[1].click();
    cells[5].click();
    expect(display.innerHTML).to.eq('X wins!');
    done();
  });

  xit('should detect a win on the bottom row', done => {
    cells[6].click();
    cells[0].click();
    cells[7].click();
    cells[1].click();
    cells[8].click();
    expect(display.innerHTML).to.eq('X wins!');
    done();
  });

  xit('should detect a win on the left column', done => {
    cells[0].click();
    cells[1].click();
    cells[3].click();
    cells[4].click();
    cells[6].click();
    expect(display.innerHTML).to.eq('X wins!');
    done();
  });

  xit('should detect a win on the middle column', done => {
    cells[1].click();
    cells[0].click();
    cells[4].click();
    cells[3].click();
    cells[7].click();
    expect(display.innerHTML).to.eq('X wins!');
    done();
  });

  xit('should detect a win on the right column', done => {
    cells[2].click();
    cells[0].click();
    cells[5].click();
    cells[3].click();
    cells[8].click();
    expect(display.innerHTML).to.eq('X wins!');
    done();
  });

  xit('should detect a win on the top left to bottom right diagonal', done => {
    cells[0].click();
    cells[1].click();
    cells[4].click();
    cells[2].click();
    cells[8].click();
    expect(display.innerHTML).to.eq('X wins!');
    done();
  });

  xit('should detect a win on the top right to bottom left diagonal', done => {
    cells[2].click();
    cells[0].click();
    cells[4].click();
    cells[1].click();
    cells[6].click();
    expect(display.innerHTML).to.eq('X wins!');
    done();
  });

  xit('should detect a tie', done => {
    cells[0].click();
    cells[1].click();
    cells[2].click();
    cells[4].click();
    cells[3].click();
    cells[5].click();
    cells[7].click();
    cells[6].click();
    cells[8].click();
    expect(display.innerHTML).to.eq('Game is a tie');
    done();
  });


  xit('should clear the board when the RESET button is clicked', done => {
    cells[0].click();
    cells[1].click();
    cells[2].click();
    cells[4].click();
    cells[3].click();
    cells[5].click();
    cells[7].click();
    cells[6].click();
    cells[8].click();
    resetBtn.click();
    expect(display.innerHTML).to.eq('X\'s turn');
    expect(cells.every(cell => !cell.innerHTML)).to.eq(true);
    done();
  });

  xit('cells should not be clickable when the game is over', done => {
    cells[2].click();
    cells[0].click();
    cells[4].click();
    cells[1].click();
    cells[6].click();
    cells[3].click();
    expect(cells[3].innerHTML).to.eq('');
    done();
  });
});
