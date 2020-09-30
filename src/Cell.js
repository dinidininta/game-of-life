import state from './State';
/**
 * Represent a single Cell state and neighbours
 */
export default class Cell {
  constructor(neighbours, initialState) {
    this._neighbours = neighbours;
    this._initialState = initialState;
  }

  getState() {
    if (this._neighbours.length < 1) {
      return this._initialState;
    }
    const aliveNeighbours = this._neighbours.filter(neighbour =>
      neighbour.getState() === state.ALIVE);
    if (this._initialState === state.ALIVE && (aliveNeighbours.length < 2
      || aliveNeighbours.length > 3)) {
      return state.DEAD;
    }
    return state.ALIVE;
  }
}
