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
    describe('#Glider Pattern', () => {
      const initialBoard = [
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', 'X', '-', '-', '-'],
        ['-', '-', '-', '-', 'X', '-', '-'],
        ['-', '-', 'X', 'X', 'X', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-']
      ];

      it('should return cell coordinates that are still alive for Glider pattern after 2 ticks', () => {
        const expectedResult = [
          ['-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', 'X', '-', '-'],
          ['-', '-', 'X', '-', 'X', '-', '-'],
          ['-', '-', '-', 'X', 'X', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-']
        ];

        const game = new Game(initialBoard);
        const actualResult = game.simulateForNthTicks(2);

        expect(actualResult).toEqual(expectedResult);
      });
      it('should return cell coordinates that are still alive for Glider pattern after 3 ticks', () => {
        const expectedResult = [
          ['-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', 'X', '-', '-', '-'],
          ['-', '-', '-', '-', 'X', 'X', '-'],
          ['-', '-', '-', 'X', 'X', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-']
        ];

        const game = new Game(initialBoard);
        const actualResult = game.simulateForNthTicks(3);

        expect(actualResult).toEqual(expectedResult);
      });
      it('should return cell coordinates that are still alive for Glider pattern after 4 ticks', () => {
        const expectedResult = [
          ['-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', 'X', '-', '-'],
          ['-', '-', '-', '-', '-', 'X', '-'],
          ['-', '-', '-', 'X', 'X', 'X', '-'],
          ['-', '-', '-', '-', '-', '-', '-']
        ];

        const game = new Game(initialBoard);
        const actualResult = game.simulateForNthTicks(4);

        expect(actualResult).toEqual(expectedResult);
      });
    });
  });
});
