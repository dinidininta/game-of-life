class Cell {
  constructor(x, y, initialStatus) {
    this._x = x;
    this._y = y;
    this._initialStatus = initialStatus;
  }

  status(neighbours) {
    const aliveNeighbours = neighbours.filter(neighbour => neighbour._initialStatus === Cell.ALIVE);
    if (this._initialStatus || aliveNeighbours.length < 2) {
      return Cell.DEAD;
    }
    return Cell.ALIVE;
  }
}

Cell.ALIVE = 1;
Cell.DEAD = 0;

export default Cell;
