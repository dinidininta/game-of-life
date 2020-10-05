import Game from '../src/Game';

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
    it('should return cell coordinates that are still alive for Blinker pattern', () => {
      const board = [
        ['-', '-', '-'],
        ['X', 'X', 'X'],
        ['-', '-', '-']
      ];
      const expectedResult = [
        ['-', 'X', '-'],
        ['-', 'X', '-'],
        ['-', 'X', '-']
      ];

      const game = new Game(board);
      const actualResult = game.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return cell coordinates that are still alive for Toad pattern', () => {
      const board = [
        ['-', '-', '-', '-', '-'],
        ['-', 'X', 'X', 'X', '-'],
        ['-', '-', 'X', 'X', 'X'],
        ['-', '-', '-', '-', '-']
      ];
      const expectedResult = [
        ['-', '-', 'X', '-', '-'],
        ['-', 'X', '-', '-', 'X'],
        ['-', 'X', '-', '-', 'X'],
        ['-', '-', '-', 'X', '-']
      ];

      const game = new Game(board);
      const actualResult = game.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return cell coordinates that are still alive for Beehive pattern', () => {
      const board = [
        ['-', '-', '-', '-', '-', '-'],
        ['-', '-', 'X', 'X', '-', '-'],
        ['-', 'X', '-', '-', 'X', '-'],
        ['-', '-', 'X', 'X', '-', '-'],
        ['-', '-', '-', '-', '-', '-']
      ];
      const expectedResult = [
        ['-', '-', '-', '-', '-', '-'],
        ['-', '-', 'X', 'X', '-', '-'],
        ['-', 'X', '-', '-', 'X', '-'],
        ['-', '-', 'X', 'X', '-', '-'],
        ['-', '-', '-', '-', '-', '-']
      ];

      const game = new Game(board);
      const actualResult = game.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return cell coordinates that are still alive for Beacon pattern', () => {
      const board = [
        ['-', '-', '-', '-', '-', '-'],
        ['-', 'X', 'X', '-', '-', '-'],
        ['-', 'X', 'X', '-', '-', '-'],
        ['-', '-', '-', 'X', 'X', '-'],
        ['-', '-', '-', 'X', 'X', '-'],
        ['-', '-', '-', '-', '-', '-']
      ];
      const expectedResult = [
        ['-', '-', '-', '-', '-', '-'],
        ['-', 'X', 'X', '-', '-', '-'],
        ['-', 'X', '-', '-', '-', '-'],
        ['-', '-', '-', '-', 'X', '-'],
        ['-', '-', '-', 'X', 'X', '-'],
        ['-', '-', '-', '-', '-', '-']
      ];

      const game = new Game(board);
      const actualResult = game.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
