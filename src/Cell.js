/**
 * Represent a single Cell state and neighbours
 */

export default class Cell {
  constructor(neighbours, initialState) {
    this._neighbours = neighbours;
    this._initialState = initialState;
  }

  getState() {
    const state = {
      ALIVE: 'Alive',
      DEAD: 'Dead'
    };
    const aliveNeighbours = this._neighbours.filter(neighbour =>
      neighbour.getState() === state.ALIVE);
    if (this._initialState === state.ALIVE && aliveNeighbours.length < 2) {
      return state.DEAD;
    }
    return state.ALIVE;
  }
}
