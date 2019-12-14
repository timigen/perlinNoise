export declare class Perlin {
    private size;
    private multiplier;
    private readonly permutation;
    private p;
    constructor(size: number, multiplier?: number);
    generate2D(): number[][];
    private noise;
    private fade;
    private lerp;
    private grad;
    private scale;
}
