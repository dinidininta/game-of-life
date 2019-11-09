import Cell from '../src/Cell';

describe('Cell', () => {
  describe('#status', () => {
    it('should return alive when condition of alive is met', () => {
      const expectedResult = Cell.ALIVE;
      const cell = new Cell();

      const actualResult = cell.status();

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
