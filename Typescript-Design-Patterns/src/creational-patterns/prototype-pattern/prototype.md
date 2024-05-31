**Prototype Pattern**

The Prototype Pattern is a creational design pattern that allows you to copy existing objects without making your code dependent on their classes. This pattern is used when the cost of creating a new object is expensive or complex.

Let's consider a simple example where we have a Shape interface and two concrete classes, Circle and Rectangle, that implement this interface. We will add a **clone()** method to these classes to create copies of their instances.

The idea is to avoid the overhead of creating objects the standard way (using the new keyword) and to enable creating a copy of an object based on a prototype instance.

- Prototype Interface defines the clone method.
- Concrete Prototypes implements the IShape interface and the clone method to create      copies of the objects.
- Client uses the clone method to create copies of the prototype instances.