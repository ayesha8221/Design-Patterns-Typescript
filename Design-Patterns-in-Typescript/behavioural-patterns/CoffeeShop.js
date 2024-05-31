var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.cost = function () {
        return 5;
    };
    SimpleCoffee.prototype.description = function () {
        return "Just a normal coffee";
    };
    return SimpleCoffee;
}());
// abstract classes are ways to extend classes
// you would call the method on the instance of the class
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(decoratedCoffee) {
        this.decoratedCoffee = decoratedCoffee;
    }
    CoffeeDecorator.prototype.cost = function () {
        return this.decoratedCoffee.cost();
    };
    CoffeeDecorator.prototype.description = function () {
        return this.decoratedCoffee.description();
    };
    return CoffeeDecorator;
}());
var MilkDecorator = /** @class */ (function (_super) {
    __extends(MilkDecorator, _super);
    function MilkDecorator(decoratedCoffee) {
        return _super.call(this, decoratedCoffee) || this;
    }
    MilkDecorator.prototype.cost = function () {
        return _super.prototype.cost.call(this) + 1.5;
    };
    MilkDecorator.prototype.description = function () {
        return _super.prototype.description.call(this) + ", with milk";
    };
    return MilkDecorator;
}(CoffeeDecorator));
var SugarDecorator = /** @class */ (function (_super) {
    __extends(SugarDecorator, _super);
    function SugarDecorator(decoratedCoffee) {
        return _super.call(this, decoratedCoffee) || this;
    }
    SugarDecorator.prototype.cost = function () {
        return _super.prototype.cost.call(this) + 0.5;
    };
    SugarDecorator.prototype.description = function () {
        return _super.prototype.description.call(this) + ", with sugar";
    };
    return SugarDecorator;
}(CoffeeDecorator));
var myCoffee = new SimpleCoffee();
console.log("".concat(myCoffee.description(), " costs ").concat(myCoffee.cost()));
myCoffee = new MilkDecorator(myCoffee);
console.log("".concat(myCoffee.description(), " costs ").concat(myCoffee.cost()));
myCoffee = new SugarDecorator(myCoffee);
console.log("".concat(myCoffee.description(), " costs ").concat(myCoffee.cost()));
