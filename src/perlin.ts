import { Grid } from './utils/grid';

export class Perlin {
    private grid: Grid;
    private size: number;
    private multiplier: number;

    private readonly permutation = [];

    private p: number[] = [];

    constructor(size: number, multiplier: number = 0.0431) {
        this.size = size;
        this.multiplier = multiplier;
        this.grid = new Grid(this.size);
        this.permutation = this.grid.generateRandomArray(0, 256);
    }

    public generate2D(z: number = 0) {
        const grid: number[][] = [];

        for (let row = 0; row < this.size; row++) {
            const r = [];
            for (let column = 0; column < this.size; column++) {
                const perlin = this.noise(column * this.multiplier, row * this.multiplier, z * this.multiplier);

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

            const X = Math.floor(x) & 255;
            const Y = Math.floor(y) & 255;
            const Z = Math.floor(z) & 255;

            x -= Math.floor(x);
            y -= Math.floor(y);
            z -= Math.floor(z);

            const u = this.fade(x);
            const v = this.fade(y);
            const w = this.fade(z);
            const A = this.p[X] + Y;
            const AA = this.p[A] + Z;
            const AB = this.p[A + 1] + Z;
            const B = this.p[X + 1] + Y;
            const BA = this.p[B] + Z;
            const BB = this.p[B + 1] + Z;

            return this.scale(this.lerp(w, this.lerp(v, this.lerp(u, this.grad(this.p[AA], x, y, z),
                this.grad(this.p[BA], x - 1, y, z)),
                this.lerp(u, this.grad(this.p[AB], x, y - 1, z),
                    this.grad(this.p[BB], x - 1, y - 1, z))),
                this.lerp(v, this.lerp(u, this.grad(this.p[AA + 1], x, y, z - 1),
                    this.grad(this.p[BA + 1], x - 1, y, z - 1)),
                    this.lerp(u, this.grad(this.p[AB + 1], x, y - 1, z - 1),
                        this.grad(this.p[BB + 1], x - 1, y - 1, z - 1)))));
        }
    }

    private fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }

    private lerp(t, a, b) { return a + t * (b - a); }

    private grad(hash, x, y, z) {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : h === 12 || h === 14 ? x : z;

        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }

    private scale(n) { return (1 + n) / 2; }
}
