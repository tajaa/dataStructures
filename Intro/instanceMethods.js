//INSTANCE METHODS

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
}

let firstStudent = new Student("Bobby", "Digital", 1, 50);
let secondStudent = new Student("Nighttime", "Ramen", 2, 90);

let students = [firstStudent, secondStudent];
// console.log(firstStudent.fullName());

//Instance Methods
//they provide functionality that pertains to a single instance of 'student' or whatever
// console.log(secondStudent.fullName());

// firstStudent.markLate();
// firstStudent.markLate();
// firstStudent.markLate();
// console.log(students);

secondStudent.addScore(90);
secondStudent.addScore(87);
firstStudent.addScore(76);
firstStudent.addScore(98);
// console.log(secondStudent.scores);
// firstStudent.calculateAverage();
console.log(firstStudent.calculateAverage());

//idea is: all of these operate on individual instances
