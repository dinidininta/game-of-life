import Game from '../src/Game';
import Cell from '../src/Cell';
import state from '../src/State';

const cell = (neighbours, initialState) => new Cell(neighbours, initialState);

describe('Game', () => {
  describe('#getNextBoard', () => {
    it('should return cell coordinates that are still alive for Block pattern', () => {
      const board = [
        [cell([], state.DEAD), cell([], state.DEAD), cell([], state.DEAD)],
        [cell([], state.DEAD), cell([], state.ALIVE), cell([], state.ALIVE)],
        [cell([], state.DEAD), cell([], state.ALIVE), cell([], state.ALIVE)]
      ];
      const game = new Game(board);
      const actualResult = game.getNextBoard();

      expect(actualResult).toEqual(board);
    });
    it('should return cell coordinates that are still alive for Boat pattern', () => {
      const board = [
        [cell([], state.DEAD), cell([], state.ALIVE), cell([], state.ALIVE)],
        [cell([], state.ALIVE), cell([], state.DEAD), cell([], state.ALIVE)],
        [cell([], state.DEAD), cell([], state.ALIVE), cell([], state.DEAD)]
      ];
      const game = new Game(board);
      const actualResult = game.getNextBoard();

      expect(actualResult).toEqual(board);
    });
  });
});
