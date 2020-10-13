import Cell from '../src/Cell';

/**
 * Represent a Game of Life board
 */
export default class Game {
  constructor(board) {
    this._initialBoard = board;
  }

  getNextBoard() {
    const cells = this._convertBoardToCells();
    const maximumX = cells.length - 1;
    const nextBoard = [];
    cells.forEach((row, x) => {
      const nextRow = [];
      const maximumY = row.length - 1;
      row.forEach((cell, y) => {
        const neighbours = [];
        this._evaluateRow(x, y, maximumX, maximumY, neighbours, cells);
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

  _evaluateCell(y, maximumY, row, neighbours) {
    if (y - 1 >= 0) {
      neighbours.push(row[y - 1]);
    }
    if (y + 1 <= maximumY) {
      neighbours.push(row[y + 1]);
    }
  }

  _evaluateRow(x, y, maximumX, maximumY, neighbours, cells) {
    if (x - 1 >= 0) {
      this._evaluateCell(y, maximumY, cells[x - 1], neighbours);
      neighbours.push(cells[x - 1][y]);
    }
    this._evaluateCell(y, maximumY, cells[x], neighbours);
    if (x + 1 <= maximumX) {
      this._evaluateCell(y, maximumY, cells[x + 1], neighbours);
      neighbours.push(cells[x + 1][y]);
    }
  }
}
