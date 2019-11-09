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
  describe('#generateNeighbours', () => {
    it('should return corresponding 8 neighbours when input is one cell', () => {
      const expectedResult = [
        new Cell(0, 0, Cell.DEAD),
        new Cell(0, 1, Cell.DEAD),
        new Cell(0, 2, Cell.DEAD),
        new Cell(1, 0, Cell.DEAD),
        new Cell(1, 2, Cell.DEAD),
        new Cell(2, 0, Cell.DEAD),
        new Cell(2, 1, Cell.DEAD),
        new Cell(2, 2, Cell.DEAD)
      ];
      const cell = new Cell(1, 1, Cell.ALIVE);

      const actualResult = cell.generateNeighbours();

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
