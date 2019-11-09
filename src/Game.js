import Cell from './Cell';

class Game {
  constructor(input) {
    this._input = input;
  }

  generateCells() {
    const cells = [];
    this._input.forEach(element => cells.push(new Cell(element[0], element[1], Cell.ALIVE)));
    return cells;
  }
}

export default Game;
