import Game from '../src/Game';
import Cell from '../src/Cell';

describe('Game', () => {
  describe('#inputPattern', () => {
    it('should return cell objects when the input are coordinates', () => {
      const expectedResult = new Cell(1, 1, Cell.ALIVE);
      const game = new Game(1, 1);

      const actualResult = game.generateCells();

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
