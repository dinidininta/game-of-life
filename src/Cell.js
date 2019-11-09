class Cell {
  constructor(x, y, initialStatus) {
    this._x = x;
    this._y = y;
    this._initialStatus = initialStatus;
  }

  status() {
    if (this._initialStatus === Cell.ALIVE) {
      return Cell.ALIVE;
    }
    return Cell.DEAD;
  }
}

Cell.ALIVE = 1;
Cell.DEAD = 0;

export default Cell;
