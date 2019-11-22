export class Numbers {
  public static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static roundBy(target: number, rounder: number): number {
    return Math.floor(target / rounder) * rounder;
  }
}
