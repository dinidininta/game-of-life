import Cell from './Cell';

class Game {
  constructor(input) {
    this._input = input;
    this._cells = [];
  }

  generateCells() {
    this._input.forEach(element => this._cells.push(new Cell(element[0], element[1], Cell.ALIVE)));
    return this._cells;
  }

  generateFromString() {
    const splitInput = this._input.split('\n');
    splitInput.forEach(element => this._cells.push(new Cell(
      parseInt(element[0], 10),
      parseInt(element[3], 10),
      Cell.ALIVE
    )));

    return this._cells;
  }

  generateNeighbours() {
    const firstCell = this._cells[0];
    const neighbours = [];

    for (let i = firstCell._x - 1; i < firstCell._x + 2; i += 1) {
      for (let j = firstCell._y - 1; j < firstCell._y + 2; j += 1) {
        if (!(i === firstCell._x && j === firstCell._y)) {
          if (this._existed(this._cells, new Cell(i, j, Cell.ALIVE))) {
            neighbours.push(new Cell(i, j, Cell.ALIVE));
          } else {
            neighbours.push(new Cell(i, j, Cell.DEAD));
          }
        }
      }
    }
    return neighbours;
  }

  _equals(cell, otherCell) {
    return cell._x === otherCell._x && cell._y === otherCell._y &&
      cell._initialStatus === otherCell._initialStatus;
  }

  _existed(neighbours, cell) {
    for (const neighbour of neighbours) {
      if (this._equals(neighbour, cell)) {
        return true;
      }
    }
    return false;
  }

  play(neighbours) {
    const aliveNeighbours = neighbours.filter(element => element._initialStatus === Cell.ALIVE);
    if (aliveNeighbours.length < 2 || aliveNeighbours > 3) {
      return Cell.DEAD;
    }
    return Cell.ALIVE;
  }
}

export default Game;
