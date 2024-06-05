//Defining complex subsystem classes
// added my own interface

interface Sound {
  on(): void;
}

// these are the complex subclasses doing the work that will be used by the facade class
class Amplifier implements Sound {
  on() {
    console.log("Amplifier is on");
  }
  setVolume(volume: number) {
    console.log(`Amplier volume set to ${volume}`);
  }
}

class DVDPlayer implements Sound {
  on() {
    console.log("DVD Player is on");
  }
  play(movie: string) {
    console.log(`Playing movie: ${movie}`);
  }
}

class Projector implements Sound {
  on() {
    console.log("Projector is on");
  }
  setInput(input: string) {
    console.log(`Projector input set to ${input}`);
  }
}

class HomeTheatreFacade {
  private amp: Amplifier;
  private dvd: DVDPlayer;
  private projector: Projector;

  constructor(amp: Amplifier, dvd: DVDPlayer, projector: Projector) {
    this.amp = amp;
    this.dvd = dvd;
    this.projector = projector;
  }

  watchMovie() {
    console.log("Get ready to watch a movie...");
    this.amp.on();
    this.amp.setVolume(5);
    this.dvd.on();
    this.dvd.play("Inception");
    this.projector.on();
    this.projector.setInput("DVD");
  }
  endMovie() {
    console.log("The movie has ended...");
  }
}
let amp = new Amplifier();
let dvd = new DVDPlayer();
let projector = new Projector();

//creating the facade
let homeTheatre = new HomeTheatreFacade(amp, dvd, projector);
homeTheatre.watchMovie();
homeTheatre.endMovie();
