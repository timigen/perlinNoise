export class Numbers {
    public static largest(a: number, b: number): number {
      if (a > b) {
        return a;
      } else {
        return b;
      }
    }

    public static getRandomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static roundBy(target: number, rounder: number): number {
      return Math.floor(target / rounder) * rounder;
    }
  }
