import Cell from '../src/Cell';

describe('Cell', () => {
  describe('#getState', () => {
    it('should return Alive state when initial state is Dead and there are 3 ' +
    'alive neighbour Cells', () => {
      const expectedResult = 'Alive';
      const initialState = 'Dead';
      const neighbours = [
        new Cell([], 'Alive'),
        new Cell([], 'Alive'),
        new Cell([], 'Alive'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead')
      ];

      const cell = new Cell(neighbours, initialState);
      const actualResult = cell.getState();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return Dead state when initial state is Alive and there is ' +
      'less than 2 alive neighbours', () => {
      const expectedResult = 'Dead';
      const initialState = 'Alive';
      const neighbours = [
        new Cell([], 'Alive'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead'),
        new Cell([], 'Dead')
      ];

      const cell = new Cell(neighbours, initialState);
      const actualResult = cell.getState();

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
