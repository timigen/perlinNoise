import { Grid } from './utils/grid';
var Perlin = /** @class */ (function () {
    function Perlin(size, multiplier) {
        if (multiplier === void 0) { multiplier = 0.0431; }
        this.permutation = [];
        this.p = [];
        this.size = size;
        this.multiplier = multiplier;
        this.grid = new Grid(this.size);
        this.permutation = this.grid.generateRandomArray(0, 256);
    }
    Perlin.prototype.generate2D = function (z) {
        if (z === void 0) { z = 0; }
        var grid = [];
        var randomScale = false;
        for (var row = 0; row < this.size; row++) {
            var r = [];
            for (var column = 0; column < this.size; column++) {
                var perlin = this.noise(column * this.multiplier, row * this.multiplier, z * this.multiplier);
                r.push(perlin);
            }
            grid.push(r);
        }
        return grid;
    };
    Perlin.prototype.noise = function (x, y, z) {
        this.p = new Array(512);
        for (var i = 0; i < 256; i++)
            this.p[256 + i] = this.p[i] = this.permutation[i];
        var X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);
        var u = this.fade(x), v = this.fade(y), w = this.fade(z);
        var A = this.p[X] + Y, AA = this.p[A] + Z, AB = this.p[A + 1] + Z, B = this.p[X + 1] + Y, BA = this.p[B] + Z, BB = this.p[B + 1] + Z;
        return this.scale(this.lerp(w, this.lerp(v, this.lerp(u, this.grad(this.p[AA], x, y, z), this.grad(this.p[BA], x - 1, y, z)), this.lerp(u, this.grad(this.p[AB], x, y - 1, z), this.grad(this.p[BB], x - 1, y - 1, z))), this.lerp(v, this.lerp(u, this.grad(this.p[AA + 1], x, y, z - 1), this.grad(this.p[BA + 1], x - 1, y, z - 1)), this.lerp(u, this.grad(this.p[AB + 1], x, y - 1, z - 1), this.grad(this.p[BB + 1], x - 1, y - 1, z - 1)))));
    };
    Perlin.prototype.fade = function (t) { return t * t * t * (t * (t * 6 - 15) + 10); };
    Perlin.prototype.lerp = function (t, a, b) { return a + t * (b - a); };
    Perlin.prototype.grad = function (hash, x, y, z) {
        var h = hash & 15;
        var u = h < 8 ? x : y, v = h < 4 ? y : h == 12 || h == 14 ? x : z;
        return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
    };
    Perlin.prototype.scale = function (n) { return (1 + n) / 2; };
    return Perlin;
}());
export { Perlin };
