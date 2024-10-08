# Simple SOLID Principles

## Single Responsibility Principle (SRP)
```A class should have only one reason to change, meaning it should have only one job or responsibility.```

``` Here, the User class is responsible for holding user data, while the UserRepository class is responsible for managing users in the database. ```

## Open/Close Principle (OCP)

```  Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. ```

``` Here, Rectangle and Circle classes can be extended without modifying the existing code. ```

## Liskov Substitutaion Principle (LSP)

``` Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. ```

``` Here, Ostrich violates the LSP because it cannot replace Bird without causing errors. ```

## Interface Segregation Principle (ISP)

``` Here, Ostrich violates the LSP because it cannot replace Bird without causing errors. ```

``` Here, SimplePrinter only implements the Printer interface and does not need to implement Scanner. ```

## Dependency Inversion Principle (DIP)

``` High-level modules should not depend on low-level modules. Both should depend on abstractions. ```

``` Here, the Application class depends on the Database interface rather than a specific implementation like MySQLDatabase. ```