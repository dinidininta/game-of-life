import Neighbour from '../src/Neighbour';
import Cell from '../src/Cell';

describe('Grid', () => {
  describe('#generateGrid', () => {
    it('should return 8 neighbours grid when the input is one grid', () => {
      const cell = new Cell(1, 1, Cell.ALIVE);
      const expectedResult = [
        new Cell(cell._x - 1, cell._y - 1, Cell.DEAD),
        new Cell(cell._x - 1, cell._y, Cell.DEAD),
        new Cell(cell._x - 1, cell._y + 1, Cell.DEAD),
        new Cell(cell._x, cell._y - 1, Cell.DEAD),
        new Cell(cell._x, cell._y + 1, Cell.DEAD),
        new Cell(cell._x + 1, cell._y - 1, Cell.DEAD),
        new Cell(cell._x + 1, cell._y, Cell.DEAD),
        new Cell(cell._x + 1, cell._y + 1, Cell.DEAD)
      ];
      const neighbour = new Neighbour(cell);

      const actualResult = neighbour.generate();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return 8 neighbours grid with corresponding status when there are some predefined cells status', () => {


    });
  });
});
