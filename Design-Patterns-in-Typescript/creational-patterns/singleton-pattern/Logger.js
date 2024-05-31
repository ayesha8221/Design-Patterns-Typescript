var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.log = function (message) {
        console.log("Log: ".concat(message));
    };
    return Logger;
}());
var logger1 = Logger.getInstance();
var logger2 = Logger.getInstance();
logger1.log("This is the first message.");
logger2.log("This is the second message.");
console.log(logger1 === logger2);
