import Game from './Game';

const board = [
  ['-', '-', '-'],
  ['-', 'X', 'X'],
  ['-', 'X', 'X']
];
const game = new Game(board);
game.simulateForNthTicks(1);