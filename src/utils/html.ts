import { Colors } from '../colors';

export class Html {
    public static getHeight(e: HTMLElement): number {
        return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
      }
    
      public static getWidth(e: HTMLElement): number {
        return Math.max(e.scrollWidth, e.offsetWidth, e.clientWidth);
      }
  }