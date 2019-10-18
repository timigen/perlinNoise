import { Perlin } from './perlin';
import { Viewport } from './viewport';

export class Display {
    private size: number;
    private perlinUI: HTMLElement;

    private perlin: Perlin;
    private viewport: Viewport;

    constructor(doc: Document, size: number) {
        this.size = size;
        this.perlin = new Perlin(this.size);
        this.perlinUI = doc.getElementById('perlin');
    }
    
    generate() {
        console.log('generate');
        let perlin = this.perlin.generate(this.size, 24);
        this.viewport = new Viewport(this.perlinUI,perlin);
        this.viewport.display();
    }
  }