import Cell from '../src/Cell';

describe('Cell', () => {
  describe('#status', () => {
    it('should return Cell.ALIVE when condition of alive is met', () => {
      const expectedResult = Cell.ALIVE;
      const cell = new Cell(1, 1, Cell.ALIVE);

      const actualResult = cell.status();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return Cell.DEAD when condition of dead cell is met', () => {
      const expectedResult = Cell.DEAD;
      const cell = new Cell(1, 1, Cell.DEAD);

      const actualResult = cell.status();

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
