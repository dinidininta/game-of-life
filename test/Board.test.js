import Board from '../src/Board';

describe('Board', () => {
  describe('#getNextBoard', () => {
    it('should return cell coordinates that are still alive for Block pattern', () => {
      const initialBoard = [
        ['-', '-', '-'],
        ['-', 'X', 'X'],
        ['-', 'X', 'X']
      ];
      const expectedResult = [
        ['-', '-', '-'],
        ['-', 'X', 'X'],
        ['-', 'X', 'X']
      ];

      const board = new Board(initialBoard);
      const actualResult = board.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return cell coordinates that are still alive for Boat pattern', () => {
      const initialBoard = [
        ['-', 'X', 'X'],
        ['X', '-', 'X'],
        ['-', 'X', '-']
      ];
      const expectedResult = [
        ['-', 'X', 'X'],
        ['X', '-', 'X'],
        ['-', 'X', '-']
      ];

      const board = new Board(initialBoard);
      const actualResult = board.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return cell coordinates that are still alive for Blinker pattern', () => {
      const initialBoard = [
        ['-', '-', '-'],
        ['X', 'X', 'X'],
        ['-', '-', '-']
      ];
      const expectedResult = [
        ['-', 'X', '-'],
        ['-', 'X', '-'],
        ['-', 'X', '-']
      ];

      const board = new Board(initialBoard);
      const actualResult = board.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return cell coordinates that are still alive for Toad pattern', () => {
      const initialBoard = [
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

      const board = new Board(initialBoard);
      const actualResult = board.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return cell coordinates that are still alive for Beehive pattern', () => {
      const initialBoard = [
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

      const board = new Board(initialBoard);
      const actualResult = board.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
    it('should return cell coordinates that are still alive for Beacon pattern', () => {
      const initialBoard = [
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

      const board = new Board(initialBoard);
      const actualResult = board.getNextBoard();

      expect(actualResult).toEqual(expectedResult);
    });
  });
  describe('#getBoard', () => {
    it('should return initial board', () => {
      const initialBoard = [
        ['-', '-', '-'],
        ['-', 'X', 'X'],
        ['-', 'X', 'X']
      ];
      const expectedResult = [
        ['-', '-', '-'],
        ['-', 'X', 'X'],
        ['-', 'X', 'X']
      ];

      const board = new Board(initialBoard);
      const actualResult = board.getBoard();

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
