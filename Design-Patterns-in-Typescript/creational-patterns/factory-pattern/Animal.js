var Horse = /** @class */ (function () {
    function Horse() {
    }
    Horse.prototype.speak = function () {
        console.log("Neigh");
    };
    return Horse;
}());
var Rabbit = /** @class */ (function () {
    function Rabbit() {
    }
    Rabbit.prototype.speak = function () {
        console.log("Honk");
    };
    return Rabbit;
}());
var AnimalFactory = /** @class */ (function () {
    function AnimalFactory() {
    }
    AnimalFactory.createAnimal = function (type) {
        if (type === "Horse") {
            return new Horse();
        }
        else if (type === "Rabbit") {
            return new Rabbit();
        }
        else {
            throw new Error("Animal type not supported");
        }
    };
    return AnimalFactory;
}());
var myHorse = AnimalFactory.createAnimal("Horse");
myHorse.speak();
var myRabbit = AnimalFactory.createAnimal("Rabbit");
myRabbit.speak();
