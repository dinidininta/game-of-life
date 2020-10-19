/* eslint-disable no-param-reassign,new-cap,no-undef */
import p5 from 'p5';
import Board from './Board';
import State from './State';

const resolution = 40;
let board = [
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', 'X', 'X', 'X', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-']
];

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
      processing.createCanvas(280, 280);
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
