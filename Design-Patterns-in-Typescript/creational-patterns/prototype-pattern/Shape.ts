interface IShape {
  clone(): IShape;
  draw(): void;
}

class Circle implements IShape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  clone(): IShape {
    return new Circle(this.radius);
  }

  draw(): void {
    console.log(`Drawing a circle with a radius of ${this.radius}`);
  }
}

class Rectangle implements IShape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  clone(): IShape {
    return new Rectangle(this.width, this.height);
  }

  draw(): void {
    console.log(
      `Drawing a rectangle with a width of ${this.width} and a height of ${this.height}`
    );
  }
}

const originalCircle = new Circle(20);
const clonedCircle = originalCircle.clone();
originalCircle.draw();

const originalRectangle = new Rectangle(4, 5);
const clonedRectangle = originalCircle.clone();
originalRectangle.draw();
