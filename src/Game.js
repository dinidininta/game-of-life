/**
 * Represent a Game of Life board
 */

export default class Game {
  constructor(board) {
    this._board = board;
  }

  getAliveCells() {
    return this._board;
  }
}
