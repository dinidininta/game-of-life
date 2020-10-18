/* eslint-disable no-param-reassign,class-methods-use-this,new-cap */
import p5 from 'p5';
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
      this.render();
      this._board = new Board(currentBoard);
    }
    return currentBoard;
  }

  render() {
    const sketch = (processing) => {
      processing.setup = () => {
        processing.createCanvas(100, 100);
      };

      processing.draw = () => {
        processing.background(0);
      };
    };

    return new p5(sketch);
  }
}
