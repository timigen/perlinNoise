  import { Html } from './utils/html';
  import { Numbers } from './utils/numbers';
  
  export class Viewport {
    public containerElement: HTMLElement;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private width: number;
    private height: number;
    private grid: number[][];
    private tileWidth:number;
    private tileHeight:number;

    constructor(container: HTMLElement, grid: number[][]) {
      this.containerElement = container;
      this.grid = grid;

      let width: number = Html.getWidth(this.containerElement);
      let height: number = Html.getHeight(this.containerElement);
      
      this.width = Numbers.roundBy(height, 100);
      this.height = Numbers.roundBy(height, 100);      
      this.tileWidth =  this.width / grid.length;
      this.tileHeight = this.height / grid.length;

      this.canvas = <HTMLCanvasElement>document.createElement("canvas");
      this.canvas.tabIndex = 1;
      this.canvas.id = "viewport";
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx = this.canvas.getContext("2d");
      this.containerElement.appendChild(this.canvas);
      this.drawFilledRectangle(0, 0, this.width, this.height, "orange");
    }

    display() {
      for(let row = 0; row < this.grid.length; row++) {
        let r = this.grid[row];
        for(let column = 0; column < this.grid.length;column++) {
          this.displayTile(column*this.tileWidth,row*this.tileHeight, this.getColor(r[column]));
        }
      }
    }

    private getColor(value: number) {
      if(value > 0.43 ) return "DarkGoldenrod";

      return "aqua";
    }

    private displayTile(x0, y0, color) {
      this.drawFilledRectangle(x0, y0, this.tileWidth, this.tileHeight, color);
    }

    private drawFilledRectangle(x0: number, y0: number, x1: number, y1: number, color: string): void {
      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x0, y0, x1, y1);
      this.ctx.closePath();
    }
  
    private drawRectangle(x0: number, y0: number, color: string): void {
      this.ctx.beginPath();
      this.ctx.strokeStyle = color;
      this.ctx.rect(x0, y0, this.tileWidth, this.tileHeight);
      this.ctx.stroke();
      this.ctx.closePath();
    }
    
  }