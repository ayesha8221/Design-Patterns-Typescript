interface ICoffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements ICoffee {
  cost(): number {
    return 5;
  }
  description(): string {
    return "Just a normal coffee";
  }
}

// abstract classes are ways to extend classes
// you would call the method on the instance of the class
abstract class CoffeeDecorator implements ICoffee {
  protected decoratedCoffee: ICoffee;

  constructor(decoratedCoffee: ICoffee) {
    this.decoratedCoffee = decoratedCoffee;
  }
  cost() {
    return this.decoratedCoffee.cost();
    // the protected method allows you to only call the method on the decoratedCoffee property
    // this.decorated.cost() instead of setting the type and property cost in the constructor
  }
  description() {
    return this.decoratedCoffee.description();
  }
}

class MilkDecorator extends CoffeeDecorator {
  constructor(decoratedCoffee: ICoffee) {
    super(decoratedCoffee);
    // the 'super' keyword is the way to call the constructor of the CoffeeDecorator class and its methods
  }
  cost(): number {
    return super.cost() + 1.5;
  }
  description(): string {
    return super.description() + ", with milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  constructor(decoratedCoffee: ICoffee) {
    super(decoratedCoffee);
  }
  cost(): number {
    return super.cost() + 0.5;
  }
  description(): string {
    return super.description() + ", with sugar";
  }
}

let myCoffee: ICoffee = new SimpleCoffee();
console.log(`${myCoffee.description()} costs ${myCoffee.cost()}`);

myCoffee = new MilkDecorator(myCoffee);
console.log(`${myCoffee.description()} costs ${myCoffee.cost()}`);

myCoffee = new SugarDecorator(myCoffee);
console.log(`${myCoffee.description()} costs ${myCoffee.cost()}`);
