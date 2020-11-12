/* eslint-disable no-param-reassign,new-cap,no-undef */
import p5 from 'p5';
import Board from './Board';
import State from './State';
import Util from './Util';
// import Patterns from './Patterns';

const resolution = 20;

const rows = window.innerWidth / resolution;
const columns = window.innerHeight / resolution;
// let board = createBoard(7, 7);
// let board = Util.initiateBoard(rows, columns, Patterns.GLIDER_RUN);
// Random Pattern
// let board = Util.initiateBoard(rows, columns);
const pattern = [];
let board;

const drawEmptyBoard = (processing) => {
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      const x = i * resolution;
      const y = j * resolution;
      processing.fill(255);
      processing.stroke(0);
      processing.strokeWeight(1);
      processing.rect(x, y, resolution - 1, resolution - 1);
    }
  }
};

const drawPattern = (processing) => {
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      const x = i * resolution;
      const y = j * resolution;
      if (cell === State.ALIVE) {
        processing.fill(0);
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
      processing.background(0);
      drawEmptyBoard(processing);
    };

    processing.draw = () => {
      if (processing.mouseIsPressed) {
        const x = Util.estimatePoint(processing.mouseX, resolution);
        const y = Util.estimatePoint(processing.mouseY, resolution);
        pattern.push([x, y]);
        board = Util.initiateBoard(rows, columns, pattern);
        drawPattern(processing);
      }
      if (processing.keyCode === processing.ENTER) {
        drawEmptyBoard(processing);
        board = new Board(board).getNextBoard();
        drawPattern(processing);
      }
    };
  };

  return new p5(sketch);
};

render();
