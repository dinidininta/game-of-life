/**
 * Represent a single Cell state and neighbours
 */

export default class Cell {
  constructor(neighbours, initialState) {
    this._neighbours = neighbours;
    this._initialState = initialState;
  }

  // eslint-disable-next-line class-methods-use-this
  getState() {
    return 'Alive';
  }
}
