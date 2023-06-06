//es 2015 class SYNTAX
// JS doesn't really approach OOP but now with ES2015, we can

//objectives:
//Explain what a class is
//understand how JS implements the iea of classes
//define terms like abstraction, encapsulation, polymorphism
//use es2015 classes to implement data structures

//what is a class?
// a blue print for creating objects with pre-defined properties
//and methods

// the SYNTAX

//pattern for a student
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year; //after "this" is just a placeholder. doesn't matter
    //what you call it
  }
}

//the method to create a new object must be called 'constructor'. Used to pass in or
//or instantiate new student instances

//the class keyword creates a constant, so you can not redefine it

let firstStudent = new Student("Colt", "Steele");
let secondSTudent = new Student("Blue", "Steele");
//this syntax calls the constructor behind the scnes to pass in these
//values--we just don't see it.

// console.log("Emil", "Katz", 3);

let emil = new Student("Emil", "Katz", 3);
// console.log(emil);
// console.log(emil.firstName);

//make clear: when we define a class it doesn't do anything on its own
//we have to insantiate using the "new" keyword

// let secondStudent.grade = 4;
// console.log(secondSTudent);

/* This */
//refers to the specific instance.
