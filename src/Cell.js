import state from './State';
/**
 * Represent a single Cell state and neighbours
 */
export default class Cell {
  constructor(initialState) {
    this._initialState = initialState;
  }

  getNextState(neighbours) {
    if (!neighbours) {
      return this._initialState;
    }
    const aliveNeighbours = neighbours.filter(neighbour =>
      neighbour.getNextState() === state.ALIVE).length;
    if (this._initialState === state.ALIVE && aliveNeighbours < 2) {
      return state.DEAD;
    }
    return state.ALIVE;
  }
}
