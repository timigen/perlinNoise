export declare class Perlin {
    private rows;
    private cols;
    private multiplier;
    private readonly permutation;
    private p;
    constructor(rows: number, cols: number, multiplier?: number);
    generate2D(): number[][];
    private noise;
    private fade;
    private lerp;
    private grad;
    private scale;
}
