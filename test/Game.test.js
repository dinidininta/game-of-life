import Game from '../src/Game';
import Cell from '../src/Cell';

describe('Game', () => {
  describe('#inputPattern', () => {
    it('should return cell objects when the input are coordinates', () => {
      const expectedResult = [new Cell(1, 1, Cell.ALIVE)];
      const game = new Game([[1, 1]]);

      const actualResult = game.generateCells();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return array of cell objects when the input are multiple coordinates', () => {
      const expectedResult = [
        new Cell(1, 1, Cell.ALIVE),
        new Cell(1, 2, Cell.ALIVE),
        new Cell(2, 1, Cell.ALIVE),
        new Cell(2, 2, Cell.ALIVE)
      ];
      const game = new Game([[1, 1], [1, 2], [2, 1], [2, 2]]);

      const actualResult = game.generateCells();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return new generation when the input is previous generation', () => {
      const expectedResult = [
        new Cell(1, 1, Cell.ALIVE),
        new Cell(1, 2, Cell.ALIVE),
        new Cell(2, 1, Cell.ALIVE),
        new Cell(2, 2, Cell.ALIVE)
      ];
      const game = new Game([[1, 1], [1, 2], [2, 1], [2, 2]]);

      const actualResult = game.play();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return the cell grid when the input is string', () => {
      const expectedResult = [
        new Cell(1, 1, Cell.ALIVE),
        new Cell(1, 2, Cell.ALIVE),
        new Cell(2, 1, Cell.ALIVE),
        new Cell(2, 2, Cell.ALIVE)
      ];

      const game = new Game('1, 1' +
        '\n1, 2' +
        '\n2, 1' +
        '\n2, 2');

      const actualResult = game.generateFromString();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return a complete neighboring grid for first column when the input is string', () => {
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

      const game = new Game('1, 1' +
        '\n1, 2' +
        '\n2, 1' +
        '\n2, 2');

      game.generateFromString();
      const actualResult = game.generateNeighbours();

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return the Cell.ALIVE status for the first cell when the input is {1, 1} {1, 2} {2, 1} {2, 2}', () => {
      const expectedResult = Cell.ALIVE;
      const game = new Game('1, 1' +
        '\n1, 2' +
        '\n2, 1' +
        '\n2, 2');

      game.generateFromString();
      const neighbours = game.generateNeighbours();

      const actualResult = game.play(neighbours);

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return the Cell.ALIVE status for the second cell when the input is {1, 1} {1, 2} {2, 1} {2, 2}', () => {
      const expectedResult = Cell.ALIVE;
      const game = new Game('1, 1' +
        '\n1, 2' +
        '\n2, 1' +
        '\n2, 2');

      game.generateFromString();
      const neighbours = game.generateNeighbours(2);

      const actualResult = game.play(neighbours);

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return the Cell.ALIVE status for the first cell when the input is blinker pattern', () => {
      const expectedResult = Cell.ALIVE;
      const game = new Game('1, 1' +
        '\n1, 0' +
        '\n1, 2');

      game.generateFromString();
      const neighbours = game.generateNeighbours(0);

      const actualResult = game.play(neighbours);

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return the Cell.DEAD status for the second cell when the input is blinker pattern', () => {
      const expectedResult = Cell.DEAD;
      const game = new Game('1, 1' +
        '\n1, 0' +
        '\n1, 2');

      game.generateFromString();
      const neighbours = game.generateNeighbours(1);

      const actualResult = game.play(neighbours);

      expect(actualResult).toEqual(expectedResult);
    });

    it('should return the Cell.DEAD status for the third cell when the input is blinker pattern', () => {
      const expectedResult = Cell.DEAD;
      const game = new Game('1, 1' +
        '\n1, 0' +
        '\n1, 2');

      game.generateFromString();
      const neighbours = game.generateNeighbours(2);

      const actualResult = game.play(neighbours);

      expect(actualResult).toEqual(expectedResult);
    });
  });
});
