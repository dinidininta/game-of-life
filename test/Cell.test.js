import Cell from '../src/Cell';
import state from '../src/State';

describe('Cell', () => {
  describe('#getState', () => {
    it('should return Alive state when initial state is Dead and there are 3 ' +
    'alive neighbour Cells', () => {
      const expectedResult = state.ALIVE;
      const initialState = state.DEAD;
      const neighbours = [
        new Cell(state.ALIVE),
        new Cell(state.ALIVE),
        new Cell(state.ALIVE),
        new Cell(state.DEAD),
        new Cell(state.DEAD),
        new Cell(state.DEAD),
        new Cell(state.DEAD),
        new Cell(state.DEAD)
      ];

      const cell = new Cell(initialState);
      const actualResult = cell.getNextState(neighbours);

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return Dead state when initial state is Alive and there is ' +
      'less than 2 alive neighbours', () => {
      const expectedResult = state.DEAD;
      const initialState = state.ALIVE;
      const neighbours = [
        new Cell(state.ALIVE),
        new Cell(state.DEAD),
        new Cell(state.DEAD),
        new Cell(state.DEAD),
        new Cell(state.DEAD),
        new Cell(state.DEAD),
        new Cell(state.DEAD),
        new Cell(state.DEAD)
      ];

      const cell = new Cell(initialState);
      const actualResult = cell.getNextState(neighbours);

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return Dead state when initial state is Alive and there is ' +
      'more than 3 alive neighbours', () => {
      const expectedResult = 'Dead';
      const initialState = 'Alive';
      const neighbours = [
        new Cell([], 'Alive'),
        new Cell([], 'Alive'),
        new Cell([], 'Alive'),
        new Cell([], 'Alive'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead')
      ];

      const cell = new Cell(neighbours, initialState);
      const actualResult = cell.getState();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return Alive state when initial state is Dead and there is ' +
      'exactly 3 alive neighbours', () => {
      const expectedResult = 'Alive';
      const initialState = 'Dead';
      const neighbours = [
        new Cell([], 'Alive'),
        new Cell([], 'Alive'),
        new Cell([], 'Dead'),
        new Cell([], 'Alive'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead')
      ];

      const cell = new Cell(neighbours, initialState);
      const actualResult = cell.getState();

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
