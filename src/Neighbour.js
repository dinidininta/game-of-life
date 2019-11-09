import Cell from './Cell';

class Neighbour {
  constructor(cell) {
    this._cell = cell;
    this._neighbour = [];
  }

  generate() {
    this._generateUpperNeighbour();
    this._generateLevelNeighbour();
    this._generateLowerNeighbour();

    return this._neighbour;
  }

  _generateUpperNeighbour() {
    this._neighbour.push(new Cell(this._cell._x - 1, this._cell._y - 1, Cell.DEAD));
    this._neighbour.push(new Cell(this._cell._x - 1, this._cell._y, Cell.DEAD));
    this._neighbour.push(new Cell(this._cell._x - 1, this._cell._y + 1, Cell.DEAD));

    return this._neighbour;
  }

  _generateLevelNeighbour() {
    this._neighbour.push(new Cell(this._cell._x, this._cell._y - 1, Cell.DEAD));
    this._neighbour.push(new Cell(this._cell._x, this._cell._y + 1, Cell.DEAD));

    return this._neighbour;
  }

  _generateLowerNeighbour() {
    this._neighbour.push(new Cell(this._cell._x + 1, this._cell._y - 1, Cell.DEAD));
    this._neighbour.push(new Cell(this._cell._x + 1, this._cell._y, Cell.DEAD));
    this._neighbour.push(new Cell(this._cell._x + 1, this._cell._y + 1, Cell.DEAD));

    return this._neighbour;
  }
}

export default Neighbour;
