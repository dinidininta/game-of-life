/* eslint-disable no-param-reassign,new-cap,no-undef */
import p5 from 'p5';
import Board from './Board';
import State from './State';
import Util from './Util';
import Patterns from './Patterns';

const resolution = 20;
// let board = [
//   ['-', '-', '-', '-', '-', '-', '-'],
//   ['-', '-', '-', '-', '-', '-', '-'],
//   ['-', '-', '-', '-', '-', '-', '-'],
//   ['-', '-', 'X', 'X', 'X', '-', '-'],
//   ['-', '-', '-', '-', '-', '-', '-'],
//   ['-', '-', '-', '-', '-', '-', '-'],
//   ['-', '-', '-', '-', '-', '-', '-']
// ];
// let board = createBoard(7, 7);
// let board = createBoard(rows, columns);

const rows = window.innerWidth / resolution;
const columns = window.innerHeight / resolution;
let board = Util.initiateBoard(rows, columns, Patterns.PENTADECATHLON);
// let board = Util.initiateBoard(rows, columns); // Random

const drawBoard = (processing) => {
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      const x = i * resolution;
      const y = j * resolution;
      if (cell === State.ALIVE) {
        processing.fill(255);
        processing.rect(x, y, resolution - 1, resolution - 1);
      }
    });
  });
};

const render = () => {
  const sketch = (processing) => {
    processing.setup = () => {
      // processing.createCanvas(280, 280);
      processing.createCanvas(window.innerWidth, window.innerHeight);
      processing.frameRate(10);
    };

    processing.draw = () => {
      processing.background(0);
      drawBoard(processing);
      board = new Board(board).getNextBoard();
    };
  };

  return new p5(sketch);
};

render();
