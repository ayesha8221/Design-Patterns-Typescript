var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.clone = function () {
        return new Circle(this.radius);
    };
    Circle.prototype.draw = function () {
        console.log("Drawing a circle with a radius of ".concat(this.radius));
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.clone = function () {
        return new Rectangle(this.width, this.height);
    };
    Rectangle.prototype.draw = function () {
        console.log("Drawing a rectangle with a width of ".concat(this.width, " and a height of ").concat(this.height));
    };
    return Rectangle;
}());
var originalCircle = new Circle(20);
var clonedCircle = originalCircle.clone();
originalCircle.draw();
var originalRectangle = new Rectangle(4, 5);
var clonedRectangle = originalCircle.clone();
originalRectangle.draw();
