import { expect } from 'chai';

import { Perlin } from '../src/perlin';

const cols = 10;
const rows = 10;

describe('Perlin', () => {
  describe('constructor', () => {
    it(`new Perlin(${rows}, ${cols}) does not throw exception`, () => {
      expect(() => {
        new Perlin(rows, cols);
      }).not.to.throw(Error);
    });
  });

  describe('constructor', () => {
    it(`new Perlin(${rows}, ${cols}).generate2D() does not throw exception`, () => {
      expect(() => {
        new Perlin(rows, cols).generate2D();
      }).not.to.throw(Error);
    });
  });
});
