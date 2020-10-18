/* eslint-disable no-param-reassign,class-methods-use-this,new-cap */
import p5 from 'p5';
import Board from './Board';
import State from './State';

/**
 * Represent a simulation for Game of Life
 */
export default class Game {
  constructor(board) {
    this._board = new Board(board);
    this._resolution = 40;
  }

  simulateForNthTicks(ticks) {
    let currentBoard = [];
    for (let tick = ticks; tick > 0; tick -= 1) {
      currentBoard = this._board.getNextBoard();
      this._board = new Board(currentBoard);
    }
    console.log(currentBoard);
    this.render(currentBoard);
    return currentBoard;
  }

  render(board) {
    const sketch = (processing) => {
      processing.setup = () => {
        processing.createCanvas(400, 400);
        console.log({
          col: processing.width / this._resolution,
          rows: processing.height / this._resolution
        });
      };

      processing.draw = () => {
        processing.background(0);
        this.drawBoard(board, processing);
      };
    };

    return new p5(sketch);
  }

  drawBoard(board, processing) {
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        const x = i * this._resolution;
        const y = j * this._resolution;
        if (cell === State.ALIVE) {
          processing.fill(255);
          processing.rect(x, y, this._resolution, this._resolution);
        }
      });
    });
  }
}
