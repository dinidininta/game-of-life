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
    const nextBoard = [];
    cells.forEach((row, x) => {
      const nextRow = [];
      row.forEach((cell, y) => {
        const neighbours = [];
        if (x - 1 >= 0) {
          if (y - 1 >= 0) {
            neighbours.push(cells[x - 1][y - 1]);
          }
          neighbours.push(cells[x - 1][y]);
          if (y + 1 <= 2) {
            neighbours.push(cells[x - 1][y + 1]);
          }
        }
        if (y - 1 >= 0) {
          neighbours.push(cells[x][y - 1]);
        }
        if (y + 1 <= 2) {
          neighbours.push(cells[x][y + 1]);
        }
        if (x + 1 <= 2) {
          if (y - 1 >= 0) {
            neighbours.push(cells[x + 1][y - 1]);
          }
          neighbours.push(cells[x + 1][y]);
          if (y + 1 <= 2) {
            neighbours.push(cells[x + 1][y + 1]);
          }
        }
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
}
