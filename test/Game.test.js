import Game from '../src/Game';
import Cell from '../src/Cell';
import state from '../src/State';


describe('Game', () => {
  describe('#getNextBoard', () => {
    it('should return cell coordinates that are still alive for Block pattern', () => {
      const board = [
        ['-', '-', '-'],
        ['-', 'X', 'X'],
        ['-', 'X', 'X']
      ];
      const expectedResult = [
        ['-', '-', '-'],
        ['-', 'X', 'X'],
        ['-', 'X', 'X']
      ];

      const game = new Game(board);
      const actualResult = game.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return cell coordinates that are still alive for Boat pattern', () => {
      const board = [
        ['-', 'X', 'X'],
        ['X', '-', 'X'],
        ['-', 'X', '-']
      ];
      const expectedResult = [
        ['-', 'X', 'X'],
        ['X', '-', 'X'],
        ['-', 'X', '-']
      ];

      const game = new Game(board);
      const actualResult = game.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
