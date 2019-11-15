class Cell {
  constructor(x, y, initialStatus) {
    this._x = x;
    this._y = y;
    this._initialStatus = initialStatus;
    this._neighbours = 3;
  }

  status() {
    if (this._initialStatus === Cell.DEAD) {
      return Cell.DEAD;
    }
    return Cell.ALIVE;
  }
}

Cell.ALIVE = {};
Cell.DEAD = {};

export default Cell;
