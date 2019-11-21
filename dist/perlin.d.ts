export declare class Perlin {
    private grid;
    private size;
    private multiplier;
    private readonly permutation;
    private p;
    constructor(size: number, multiplier?: number);
    generate2D(z?: number): number[][];
    noise(x: number, y: number, z: number): number;
    fade(t: any): number;
    lerp(t: any, a: any, b: any): any;
    grad(hash: any, x: any, y: any, z: any): any;
    scale(n: any): number;
}
