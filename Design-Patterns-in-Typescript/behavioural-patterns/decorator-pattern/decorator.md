**Decorator Pattern**

The Decorator Pattern is a structural design pattern that allows you to dynamically add behavior or responsibilities to an object without altering its code. It provides a flexible alternative to subclassing for extending functionality.

Let's create a simple example of a coffee shop where you can order a coffee and add various condiments (like milk and sugar) using the Decorator Pattern.

**Component Interface:** Defines the basic interface for the objects (e.g., Coffee).
**Concrete Component:** Implements the base behavior (e.g., SimpleCoffee).
**Decorator Class:** Abstract class that implements the component interface and wraps a component object (e.g., CoffeeDecorator).
**Concrete Decorators:** Extend the decorator class to add new behavior (e.g., MilkDecorator, SugarDecorator).