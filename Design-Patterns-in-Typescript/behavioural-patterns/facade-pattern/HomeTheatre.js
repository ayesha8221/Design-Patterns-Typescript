//Defining complex subsystem classes
// added my own interface
// these are the complex subclasses doing the work that will be used by the facade class
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log("Amplifier is on");
    };
    Amplifier.prototype.setVolume = function (volume) {
        console.log("Amplier volume set to ".concat(volume));
    };
    return Amplifier;
}());
var DVDPlayer = /** @class */ (function () {
    function DVDPlayer() {
    }
    DVDPlayer.prototype.on = function () {
        console.log("DVD Player is on");
    };
    DVDPlayer.prototype.play = function (movie) {
        console.log("Playing movie: ".concat(movie));
    };
    return DVDPlayer;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.on = function () {
        console.log("Projector is on");
    };
    Projector.prototype.setInput = function (input) {
        console.log("Projector input set to ".concat(input));
    };
    return Projector;
}());
var HomeTheatreFacade = /** @class */ (function () {
    function HomeTheatreFacade(amp, dvd, projector) {
        this.amp = amp;
        this.dvd = dvd;
        this.projector = projector;
    }
    HomeTheatreFacade.prototype.watchMovie = function () {
        console.log("Get ready to watch a movie...");
        this.amp.on();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play("Inception");
        this.projector.on();
        this.projector.setInput("DVD");
    };
    HomeTheatreFacade.prototype.endMovie = function () {
        console.log("The movie has ended...");
    };
    return HomeTheatreFacade;
}());
var amp = new Amplifier();
var dvd = new DVDPlayer();
var projector = new Projector();
//creating the facade
var homeTheatre = new HomeTheatreFacade(amp, dvd, projector);
homeTheatre.watchMovie();
homeTheatre.endMovie();
