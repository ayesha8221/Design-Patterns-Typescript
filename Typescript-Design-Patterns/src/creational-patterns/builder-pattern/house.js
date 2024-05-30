var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.setWindows = function (windows) {
        this.windows = windows;
    };
    House.prototype.setDoors = function (doors) {
        this.doors = doors;
    };
    House.prototype.setGarage = function (hasGarage) {
        this.hasGarage = hasGarage;
    };
    House.prototype.setSwimmingPool = function (hasSwimmingPool) {
        this.hasSwimmingPool = hasSwimmingPool;
    };
    House.prototype.describe = function () {
        return "House with ".concat(this.windows, " windows, ").concat(this.doors, " doors, ") +
            "".concat(this.hasGarage ? 'a garage' : 'no garage', ", ") +
            "".concat(this.hasSwimmingPool ? 'a swimming pool' : 'no swimming pool', ".");
    };
    return House;
}());
var house = new House();
house.setWindows(4);
house.setDoors(2);
house.setGarage(true);
house.setSwimmingPool(false);
console.log(house.describe());
