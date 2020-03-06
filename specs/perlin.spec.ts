import { expect } from 'chai';

import { Perlin } from '../src/perlin';

const cols = 200;
const rows = 200;

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

    it(`grid.length not null`, () => {
      expect(grid.length).not.equal(null);
    });

    it(`rows to equal ${rows}`, () => {
      expect(grid.length).to.equal(rows);
    });

    it(`cols to equal ${cols}`, () => {
      expect(grid[0].length).to.equal(cols);
    });
  });

  describe(`new Perlin(${rows}, ${cols}).generate2D()`, () => {
    const grid = new Perlin(rows, cols).generate2D();

    it(`grid does not contain any null values`, () => {
      grid.forEach(row => {
        row.forEach(target => {
          expect(target).not.equal(null);
        });
      });
    });

    it(`grid only contains number values`, () => {
      grid.forEach(row => {
        row.forEach(target => {
          expect(Number.isNaN(target)).to.equal(false);
        });
      });
    });

    it(`grid only contains whole numbers`, () => {
      grid.forEach(row => {
        row.forEach(target => {
          expect(Number.isInteger(target)).to.equal(true);
        });
      });
    });

    it(`grid contains whole numbers greater than zero`, () => {
      grid.forEach(row => {
        row.forEach(target => {
          expect(target).to.be.greaterThan(0);
        });
      });
    });

    it(`grid contains whole numbers less than 101`, () => {
      grid.forEach(row => {
        row.forEach(target => {
          expect(target).to.be.lessThan(101);
        });
      });
    });
  });
});
