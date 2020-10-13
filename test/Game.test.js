import Game from '../src/Game';

describe('#Game', () => {
  describe('#getBoardAfterNthTicks', () => {
    it('should return cell coordinates that are still alive for Blinker pattern after 2 ticks', () => {
      const initialBoard = [
        ['-', '-', '-'],
        ['X', 'X', 'X'],
        ['-', '-', '-']
      ];
      const expectedResult = [
        ['-', '-', '-'],
        ['X', 'X', 'X'],
        ['-', '-', '-']
      ];

      const game = new Game(initialBoard);
      const actualResult = game.simulateForNthTicks(2);

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
