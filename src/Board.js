import Cell from '../src/Cell';

/**
 * Represent a Board for Game of Life
 */
export default class Board {
  constructor(board) {
    this._initialBoard = board;
    this._cells = this._convertBoardToCells();
    this._maximumX = this._cells.length - 1;
  }

  getNextBoard() {
    const nextBoard = [];
    this._cells.forEach((row, x) => {
      const nextRow = [];
      const maximumY = row.length - 1;
      row.forEach((cell, y) => {
        const neighbours = [];
        this._evaluateRow(x, y, maximumY, neighbours);
        const nextState = cell.getNextState(neighbours);
        nextRow.push(nextState);
      });
      nextBoard.push(nextRow);
    });
    return nextBoard;
  }

  _convertBoardToCells() {
    const cells = [];
    this._initialBoard.forEach((row) => {
      cells.push(row.map(cell => new Cell(cell)));
    });
    return cells;
  }

  // eslint-disable-next-line class-methods-use-this
  _evaluateCell(y, maximumY, row, neighbours) {
    if (y - 1 >= 0) {
      neighbours.push(row[y - 1]);
    }
    if (y + 1 <= maximumY) {
      neighbours.push(row[y + 1]);
    }
  }

  _evaluateRow(x, y, maximumY, neighbours) {
    if (x - 1 >= 0) {
      this._evaluateCell(y, maximumY, this._cells[x - 1], neighbours);
      neighbours.push(this._cells[x - 1][y]);
    }
    this._evaluateCell(y, maximumY, this._cells[x], neighbours);
    if (x + 1 <= this._maximumX) {
      this._evaluateCell(y, maximumY, this._cells[x + 1], neighbours);
      neighbours.push(this._cells[x + 1][y]);
    }
  }
}
