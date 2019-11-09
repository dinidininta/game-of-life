import Cell from '../src/Cell';
import Neighbour from '../src/Neighbour';

describe('Cell', () => {
  describe('#status', () => {
    it('should return Cell.ALIVE when initial status is Cell.ALIVE', () => {
      const expectedResult = Cell.ALIVE;
      const cell = new Cell(1, 1, Cell.ALIVE);

      const actualResult = cell.status();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return Cell.DEAD when initial status is Cell.DEAD', () => {
      const expectedResult = Cell.DEAD;
      const cell = new Cell(1, 1, Cell.DEAD);

      const actualResult = cell.status();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return Cell.DEAD when there are no neighbours and initial status is Cell.ALIVE', () => {
      const expectedResult = Cell.DEAD;
      const cell = new Cell(1, 1, Cell.ALIVE);
      const neighbours = new Neighbour(cell);

      const actualResult = cell.status(neighbours.generate());

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
