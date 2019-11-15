import Cell from '../src/Cell';

describe('Cell', () => {
  describe('#status', () => {
    it('should return Cell.ALIVE when the first status is Cell.ALIVE', () => {
      const cell = new Cell(0, 0, Cell.ALIVE);
      const expectedResult = Cell.ALIVE;

      const actualResult = cell.status();

      expect(actualResult).toBe(expectedResult);
    });

    it('should return Cell.DEAD when the first status is Cell.DEAD', () => {
      const cell = new Cell(0, 0, Cell.DEAD);
      const expectedResult = Cell.DEAD;

      const actualResult = cell.status();

      expect(actualResult).toBe(expectedResult);
    });
  });
});
