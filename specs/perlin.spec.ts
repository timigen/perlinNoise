import { expect } from 'chai';

import { Perlin } from '../src/perlin';

const cols = 17;
const rows = 15;

describe('Perlin', () => {
  describe(`new Perlin(${rows}, ${cols})`, () => {
    it(`does not throw exception`, () => {
      expect(() => {
        new Perlin(rows, cols);
      }).not.to.throw(Error);
    });
  });

  describe(`new Perlin(${rows}, ${cols}).generate2D()`, () => {
    it(`does not throw exception`, () => {
      expect(() => {
        new Perlin(rows, cols).generate2D();
      }).not.to.throw(Error);
    });

    const grid = new Perlin(rows, cols).generate2D();

    it(`not null`, () => {
      expect(grid.length).not.equal(null);
    });

    it(`rows to equal ${rows}`, () => {
      expect(grid.length).to.equal(rows);
    });

    it(`cols to equal ${cols}`, () => {
      expect(grid[0].length).to.equal(cols);
    });
  });
});
