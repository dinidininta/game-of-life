/* eslint-disable no-param-reassign,new-cap,no-undef */
import p5 from 'p5';
import Board from './Board';
import State from './State';

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

const state = () => {
  const value = Math.round(Math.random(2));
  if (value > 0) {
    return State.ALIVE;
  }
  return State.DEAD;
};

const createBoard = (rows, columns) => Array.from({ length: rows }, () =>
  (Array.from({ length: columns }, () => state())));

const initiateBoard = (rows, columns, aliveCells) => {
  const init = Array.from({ length: rows }, () =>
    (Array.from({ length: columns }, () => State.DEAD)));
  aliveCells.forEach((cell) => {
    const x = cell[0];
    const y = cell[1];
    init[x][y] = State.ALIVE;
  });
  return init;
};

const rows = window.innerWidth / resolution;
const columns = window.innerHeight / resolution;
// let board = createBoard(7, 7);
// let board = createBoard(rows, columns);

const aliveCells = [ // Glider Run
  [1, 5], [1, 6], [2, 5], [2, 6], [11, 5], [11, 6], [11, 7], [12, 4], [12, 8],
  [13, 3], [13, 9], [14, 3], [14, 9], [15, 6], [16, 4], [16, 8], [17, 5], [17, 6],
  [17, 7], [18, 6], [21, 3], [21, 4], [21, 5], [22, 3], [22, 4], [22, 5], [23, 2],
  [23, 6], [25, 1], [25, 2], [25, 6], [25, 7], [35, 3], [35, 4], [36, 3], [36, 4]
];
let board = initiateBoard(rows, columns, aliveCells);

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
