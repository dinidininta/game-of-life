import Cell from '../src/Cell';

describe('Cell', () => {
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
});
