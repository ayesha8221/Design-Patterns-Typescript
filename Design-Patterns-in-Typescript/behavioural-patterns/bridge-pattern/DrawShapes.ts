interface IDrawAPI {
  drawTriangle(base: number, height: number): void;
}

class DrawAPIBase implements IDrawAPI {
  drawTriangle(base: number, height: number): void {
    console.log(`Triangle1 has a base of ${base} and a height of ${height}`);
  }
}

class DrawAPIHeight implements IDrawAPI {
  drawTriangle(base: number, height: number): void {
    console.log(`Triangle2 has a base of ${base} and a height of ${height}`);
  }
}

abstract class Shape {
  protected drawAPI = IDrawAPI;

  constructor(drawAPI: IDrawAPI) {
    this.drawAPI = drawAPI;
  }

  static draw() {}
}

class Triangle extends Shape {
  private base: number;
  private height: number;

  constructor(base: number, height: number, drawAPI: IDrawAPI) {
    super(drawAPI);
    this.base = base;
    this.height = height;
  }
}
