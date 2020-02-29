import { Arrays } from 'utils';

export class Perlin {
  private rows: number;
  private cols: number;
  private multiplier: number;

  private readonly permutation = [];

  private p: number[] = [];

  constructor(
    rows: number,
    cols: number,
    multiplier: number = 0.0431,
  ) {
    this.rows = rows;
    this.cols = cols;
    this.multiplier = multiplier;
    this.permutation = Arrays.getRandomlySeeded(this.cols, 0, 256);
  }

  public generate2D(): number[][] {
    let z = 0;
    let grid: number[][] = [];

    for (let row = 0; row < this.rows; row++) {
      const r = [];
      for (let column = 0; column < this.cols; column++) {
        let perlin = this.noise(
          column * this.multiplier,
          row * this.multiplier,
          z * this.multiplier,
        );

        r.push(perlin);
      }
      grid.push(r);
    }

    return grid;
  }

  private noise(x: number, y: number, z: number) {
    this.p = new Array(512);

    for (let i = 0; i < 256; i++) {
      this.p[256 + i] = this.p[i] = this.permutation[i];
    }

    let X = Math.floor(x) & 255,
      Y = Math.floor(y) & 255,
      Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    let u = this.fade(x),
      v = this.fade(y),
      w = this.fade(z);
    let A = this.p[X] + Y,
      AA = this.p[A] + Z,
      AB = this.p[A + 1] + Z,
      B = this.p[X + 1] + Y,
      BA = this.p[B] + Z,
      BB = this.p[B + 1] + Z;

    return this.scale(
      this.lerp(
        w,
        this.lerp(
          v,
          this.lerp(
            u,
            this.grad(this.p[AA], x, y, z),
            this.grad(this.p[BA], x - 1, y, z),
          ),
          this.lerp(
            u,
            this.grad(this.p[AB], x, y - 1, z),
            this.grad(this.p[BB], x - 1, y - 1, z),
          ),
        ),
        this.lerp(
          v,
          this.lerp(
            u,
            this.grad(this.p[AA + 1], x, y, z - 1),
            this.grad(this.p[BA + 1], x - 1, y, z - 1),
          ),
          this.lerp(
            u,
            this.grad(this.p[AB + 1], x, y - 1, z - 1),
            this.grad(this.p[BB + 1], x - 1, y - 1, z - 1),
          ),
        ),
      ),
    );
  }

  private fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t, a, b) {
    return a + t * (b - a);
  }

  private grad(hash, x, y, z) {
    let h = hash & 15;
    let u = h < 8 ? x : y,
      v = h < 4 ? y : h == 12 || h == 14 ? x : z;
    return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
  }

  private scale(n) {
    return (1 + n) / 2;
  }
}
