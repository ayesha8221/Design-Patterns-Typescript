interface IAnimal {
  speak(): void;
}

class Horse implements IAnimal {
  speak(): void {
    console.log("Neigh");
  }
}

class Rabbit implements IAnimal {
  speak(): void {
    console.log("Honk");
  }
}

class AnimalFactory {
  static createAnimal(type: string): IAnimal {
    if (type === "Horse") {
      return new Horse();
    } else if (type === "Rabbit") {
      return new Rabbit();
    } else {
      throw new Error("Animal type not supported");
    }
  }
}

const myHorse: IAnimal = AnimalFactory.createAnimal("Horse");
myHorse.speak();

const myRabbit: IAnimal = AnimalFactory.createAnimal("Rabbit");
myRabbit.speak();
