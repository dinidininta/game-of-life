import Neighbour from '../src/Neighbour';
import Cell from '../src/Cell';
import Game from '../src/Game';

describe('Grid', () => {
  describe('#generateGrid', () => {
    it('should return 8 neighbours grid when the input is one grid', () => {
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
      const cell = [new Cell(1, 1, Cell.ALIVE)];
      const neighbour = new Neighbour(cell, 0);

      const actualResult = neighbour.generate();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return 8 neighbours grid with corresponding status when there are some predefined cells status', () => {
      const expectedResult = [
        new Cell(0, 0, Cell.DEAD),
        new Cell(0, 1, Cell.DEAD),
        new Cell(0, 2, Cell.DEAD),
        new Cell(1, 0, Cell.DEAD),
        new Cell(1, 2, Cell.ALIVE),
        new Cell(2, 0, Cell.DEAD),
        new Cell(2, 1, Cell.ALIVE),
        new Cell(2, 2, Cell.ALIVE)
      ];

      const game = new Game([[1, 1], [1, 2], [2, 1], [2, 2]]);
      const cells = game.generateCells();
      const neighbours = new Neighbour(cells, 0);

      const actualResult = neighbours.generate();

      expect(actualResult).not.toEqual(expectedResult);
    });
  });
});
