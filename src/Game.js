import Board from './Board';

/**
 * Represent a simulation for Game of Life
 */
export default class Game {
  constructor(board) {
    this._board = new Board(board);
  }

  simulateForNthTicks(ticks) {
    let currentBoard = [];
    for (let tick = ticks; tick > 0; tick -= 1) {
      currentBoard = this._board.getNextBoard();
      this._board = new Board(currentBoard);
    }
    return currentBoard;
  }
}
