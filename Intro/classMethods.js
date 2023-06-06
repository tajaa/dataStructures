//this is kind of inverse of instance methods

//the static keyword defines a static method for a class. Static
//methods are called without instantiating their class and cannot be called
//through a class instance
//static methods are often used to create utility functions
//for an application

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your Full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      console.log("you are expelled!");
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      //reduce takes each item and makes a total
      //
      return a + b;
    });
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    console.log("Enrolling Students!");
  }
}

let firstStudent = new Student("Bobby", "Digital", 1, 50);
let secondStudent = new Student("Nighttime", "Ramen", 2, 90);

let students = [firstStudent, secondStudent];

Student.EnrollStudents();
// console.log(firstStudent);

//distance between two points s
//doesn't make sense to do thi son an individual instance
//makes more sense to use a class-methods

//you call iton the class itself like Point instead of individual
//instance like 'secondStudent'

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

//how we'll be uses classes in general

class DataStructure {
  constructor() {
    //what default properties should it have
  }
  someInstnaceMethod() {
    //what should each object created from this class be able to
    //do?
  }
}

//we'll be using the constructor and instance methods a lot
//we will almost never be using static methods

//One fotcha with "this": insie all of our instance methods
// and constructor, the keyword `this` refers to the object
//created from that class (also known as instance)

//recap

//classes are blueprints that when created make objects known as
//instances

//classes are created with the 'New' keyword

//the constructor function is a special function that gets run
//when the class is instantiated

//instance methods can be added to classes similar to methods in
//objects

//class methods can be added using the static keyword
