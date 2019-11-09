import Cell from '../src/Cell';
import Neighbour from '../src/Neighbour';

describe('Cell', () => {
  describe('#status', () => {
    it('should return Cell.DEAD when there are no neighbours and initial status is Cell.ALIVE', () => {
      const expectedResult = Cell.DEAD;
      const cell = new Cell(1, 1, Cell.ALIVE);
      const neighbours = new Neighbour(cell);

      const actualResult = cell.status(neighbours.generate());

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
