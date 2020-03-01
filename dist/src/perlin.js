"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("utils");
class Perlin {
    constructor(rows, cols, multiplier = 0.0431) {
        this.permutation = [];
        this.p = [];
        this.rows = rows;
        this.cols = cols;
        this.multiplier = multiplier;
        this.permutation = utils_1.Arrays.getRandomlySeeded(this.cols, 0, 256);
    }
    generate2D() {
        let z = 0;
        let grid = [];
        for (let row = 0; row < this.rows; row++) {
            const r = [];
            for (let column = 0; column < this.cols; column++) {
                let perlin = this.noise(column * this.multiplier, row * this.multiplier, z * this.multiplier);
                r.push(Math.floor(perlin * 100));
            }
            grid.push(r);
        }
        return grid;
    }
    noise(x, y, z) {
        this.p = new Array(512);
        for (let i = 0; i < 256; i++) {
            this.p[256 + i] = this.p[i] = this.permutation[i];
        }
        let X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);
        let u = this.fade(x), v = this.fade(y), w = this.fade(z);
        let A = this.p[X] + Y, AA = this.p[A] + Z, AB = this.p[A + 1] + Z, B = this.p[X + 1] + Y, BA = this.p[B] + Z, BB = this.p[B + 1] + Z;
        return this.scale(this.lerp(w, this.lerp(v, this.lerp(u, this.grad(this.p[AA], x, y, z), this.grad(this.p[BA], x - 1, y, z)), this.lerp(u, this.grad(this.p[AB], x, y - 1, z), this.grad(this.p[BB], x - 1, y - 1, z))), this.lerp(v, this.lerp(u, this.grad(this.p[AA + 1], x, y, z - 1), this.grad(this.p[BA + 1], x - 1, y, z - 1)), this.lerp(u, this.grad(this.p[AB + 1], x, y - 1, z - 1), this.grad(this.p[BB + 1], x - 1, y - 1, z - 1)))));
    }
    fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }
    lerp(t, a, b) {
        return a + t * (b - a);
    }
    grad(hash, x, y, z) {
        let h = hash & 15;
        let u = h < 8 ? x : y, v = h < 4 ? y : h == 12 || h == 14 ? x : z;
        return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
    }
    scale(n) {
        return (1 + n) / 2;
    }
}
exports.Perlin = Perlin;
