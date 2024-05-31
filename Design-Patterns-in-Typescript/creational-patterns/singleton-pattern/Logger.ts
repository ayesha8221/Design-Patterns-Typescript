class Logger {
  private static instance: Logger; // belongs to the class itself and holds the single instance of the class

  private constructor() {
    // constructor called when creating instance of a class
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`Log: ${message}`);
  }
}

// const logger = new Logger() error error red red error
// constructor is private so unable to create a new instance

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("This is the first message.");
logger2.log("This is the second message.");

console.log(logger1 === logger2);
