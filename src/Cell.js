class Cell {
  constructor(x, y, initialStatus) {
    this._x = x;
    this._y = y;
    this._initialStatus = initialStatus;
  }

  status() {
    return Cell.ALIVE;
  }
}

Cell.ALIVE = 1;

export default Cell;
