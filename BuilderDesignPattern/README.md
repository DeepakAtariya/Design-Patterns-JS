Problem :
Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code.

Components of builder design pattern
1. Create a builder that will be responsible for creating different types of objects
2. Create a director that will use the builder.
3. Application that uses the Director

Uses :
1. Use the Builder pattern to get rid of a “telescoping constructor”.
2. Use the Builder pattern when you want your code separate your code for various version of your object creation

References:
1. https://refactoring.guru/design-patterns/builder
2. https://www.geeksforgeeks.org/builder-design-pattern/