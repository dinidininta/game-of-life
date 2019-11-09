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
    console.log(this._input);
    const splitInput = this._input.split('\n');
    splitInput.forEach(element => this._cells.push(new Cell(
      parseInt(element[0], 10),
      parseInt(element[3], 10),
      Cell.ALIVE
    )));

    return this._cells;
  }
}

export default Game;
