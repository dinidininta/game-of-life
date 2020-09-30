/**
 * Represent a Game of Life board
 */

export default class Game {
  constructor(board) {
    this._board = board;
  }

  getNextBoard() {
    return this._board;
  }
}
