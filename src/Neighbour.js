import Cell from './Cell';

class Neighbour {
  constructor(cells, cellIndex) {
    this._cells = cells;
    this._neighbour = [];
    this._cellIndex = cellIndex;
  }

  generate() {
    this._neighbour = this._cells.filter(cell => cell !== this._cells[this._cellIndex]);
    console.log(this._neighbour);
    this._generateUpperNeighbour();
    this._generateLevelNeighbour();
    this._generateLowerNeighbour();
    return this._neighbour;
  }

  _generateUpperNeighbour() {
    const firstUpperNeighbour = new Cell(
      this._cells[this._cellIndex]._x - 1,
      this._cells[this._cellIndex]._y - 1,
      Cell.ALIVE
    );
    if (!this._neighbour.includes(firstUpperNeighbour)) {
      firstUpperNeighbour._initialStatus = Cell.DEAD;
      this._neighbour.push(firstUpperNeighbour);
    }

    const secondUpperNeighbour = new Cell(
      this._cells[this._cellIndex]._x - 1,
      this._cells[this._cellIndex]._y,
      Cell.ALIVE
    );
    if (!this._neighbour.includes(secondUpperNeighbour)) {
      secondUpperNeighbour._initialStatus = Cell.DEAD;
      this._neighbour.push(secondUpperNeighbour);
    }

    const thirdUpperNeighbour = new Cell(
      this._cells[this._cellIndex]._x - 1,
      this._cells[this._cellIndex]._y + 1,
      Cell.ALIVE
    );
    if (!this._neighbour.includes(thirdUpperNeighbour)) {
      thirdUpperNeighbour._initialStatus = Cell.DEAD;
      this._neighbour.push(thirdUpperNeighbour);
    }

    return this._neighbour;
  }

  _generateLevelNeighbour() {
    const firstLevelNeighbour = new Cell(
      this._cells[this._cellIndex]._x,
      this._cells[this._cellIndex]._y - 1,
      Cell.ALIVE
    );
    if (!this._neighbour.includes(firstLevelNeighbour)) {
      firstLevelNeighbour._initialStatus = Cell.DEAD;
      this._neighbour.push(firstLevelNeighbour);
    }

    const secondLevelNeighbour = new Cell(
      this._cells[this._cellIndex]._x,
      this._cells[this._cellIndex]._y + 1,
      Cell.ALIVE
    );
    if (!this._neighbour.includes(secondLevelNeighbour)) {
      secondLevelNeighbour._initialStatus = Cell.DEAD;
      this._neighbour.push(secondLevelNeighbour);
    }

    return this._neighbour;
  }

  _generateLowerNeighbour() {
    const firstLowerNeighbour = new Cell(
      this._cells[this._cellIndex]._x + 1,
      this._cells[this._cellIndex]._y - 1,
      Cell.ALIVE
    );
    if (!this._neighbour.includes(firstLowerNeighbour)) {
      firstLowerNeighbour._initialStatus = Cell.DEAD;
      this._neighbour.push(firstLowerNeighbour);
    }

    const secondLowerNeighbour = new Cell(
      this._cells[this._cellIndex]._x + 1,
      this._cells[this._cellIndex]._y,
      Cell.ALIVE
    );
    if (!this._neighbour.includes(secondLowerNeighbour)) {
      secondLowerNeighbour._initialStatus = Cell.DEAD;
      this._neighbour.push(secondLowerNeighbour);
    }

    const thirdLowerNeighbour = new Cell(
      this._cells[this._cellIndex]._x + 1,
      this._cells[this._cellIndex]._y + 1,
      Cell.ALIVE
    );
    if (!this._neighbour.includes(thirdLowerNeighbour)) {
      thirdLowerNeighbour._initialStatus = Cell.DEAD;
      this._neighbour.push(thirdLowerNeighbour);
    }

    return this._neighbour;
  }
}

export default Neighbour;
