import State from './State';

const randomState = () => {
  const value = Math.round(Math.random(2));
  if (value > 0) {
    return State.ALIVE;
  }
  return State.DEAD;
};

const createBoard = (rows, columns, stateFn) => Array.from({ length: rows }, () =>
  (Array.from({ length: columns }, () => stateFn())));

const initiateBoard = (rows, columns, aliveCells = []) => {
  let init = [];
  if (aliveCells.length < 1) {
    init = createBoard(rows, columns, randomState);
  }
  if (aliveCells.length > 0) {
    init = createBoard(rows, columns, () => State.DEAD);
    aliveCells.forEach((cell) => {
      const x = cell[0];
      const y = cell[1];
      init[x][y] = State.ALIVE;
    });
  }
  return init;
};


const estimatePoint = (n, resolution) => {
  let estimation = 0;
  for (let i = 0; i <= n; i += resolution) {
    estimation = i;
  }
  return estimation;
};

export default {
  initiateBoard,
  estimatePoint
};
