import Cell from './Cell';

class Game {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  generateCells() {
    return new Cell(this._x, this._y, Cell.ALIVE);
  }
}

export default Game;
