import { Numbers } from './numbers';

export class Grid {
    private size: number;

    constructor(size: number) {
        this.size = size;
    }

    public generateRandomArray(minimum: number, maximum: number) {
        const arr: number[] = [];

        for (let row = 0; row < this.size; row++) {
            const num = Numbers.getRandomInt(minimum, maximum);

            arr.push(num);
        }

        return arr;
    }

    public generateRandom(minimum: number, maximum: number): number[][] {

        const grid: number[][] = [];

        for (let row = 0; row < this.size; row++) {
            const newRow = [];
            for (let col = 0; col < this.size; col++) {

                const num = Numbers.getRandomInt(minimum, maximum);

                newRow.push(num);
            }
            grid.push(newRow);
        }

        return grid;
    }
}
