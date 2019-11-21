import { Numbers } from './numbers';

export class Grid {
    private size: number;

    constructor(size: number) {
        this.size = size;
    }

    generateRandomArray(minimum:number, maximum: number) {
        let arr: number[] = [];
        
        for( let row = 0; row < this.size; row++ ) {
            let num = Numbers.getRandomInt(minimum, maximum);

            arr.push(num);
        }

        return arr;
    }
    
    generateRandom(minimum:number, maximum: number): number[][] {
    
        let grid: number[][] = [];
        
        
        for( let row = 0; row < this.size; row++ ) {
            let newRow = [];
            for( let col = 0; col < this.size; col++) {
    
                let num = Numbers.getRandomInt(minimum, maximum);

                newRow.push(num);
            }
            grid.push(newRow);
        }
    
        return grid;
    }
}