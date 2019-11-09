class Cell {
  constructor(x, y, initialStatus) {
    this._x = x;
    this._y = y;
    this._initialStatus = initialStatus;
  }

  generateNeighbours() {
    const neighbours = [];
    for (let i = this._x - 1; i < this._x + 2; i += 1) {
      for (let j = this._y - 1; j < this._y + 2; j += 1) {
        if (!(i === this._x && j === this._y)) {
          neighbours.push(new Cell(i, j, Cell.DEAD));
        }
      }
    }

    return neighbours;
  }

  status(neighbours) {
    const aliveNeighbours = neighbours.filter(neighbour => neighbour._initialStatus === Cell.ALIVE);
    if (this._initialStatus === Cell.DEAD || aliveNeighbours.length < 2) {
      return Cell.DEAD;
    }
    return Cell.ALIVE;
  }
}

Cell.ALIVE = 1;
Cell.DEAD = 0;

export default Cell;
