// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
// const example = {
//   id: 0,
//   name: "Example",
//   email: "examples@you.edu",
//   gender: "F",
// }

// Write your intern objects here:

// Person Class (with constructor definition for new object initialization) 
// for ECMA2015 or ES6 browser compatability, use class instead of function to initiate it.

class Person {
  constructor(id, name, email, gender) {
    this.personID = id;
    this.firstName = name;
    this.personEmail = email;
    this.sex = gender;
  }

  // getters and setters

  // getter and setter for ID
  get pID() {
    return this.personID;
  }
  set pID(assignedID) {
    this.personID = assignedID;
  }
  // getter and setter for name
  get pName() {
    return this.firstName;
  }
  set pName(assignedName) {
    this.firstName = assignedName;
  }
  // getter and setter for email
  get pEmail() {
    return this.personEmail;
  }
  set pEmail(assignedEmail) {
    this.personEmail = assignedEmail;
  }
  // getter and setter for gender
  get pSex() {
    return this.sex;
  }
  set pSex(assignedSex) {
    this.sex = assignedSex;
  }
}

person1 = new Person ("1", "Mitzi", "mmelloy0@psu.edu", "F");
person2 = new Person ("2", "Kennan", "kdiben1@tinypic.com", "M");
person3 = new Person ("3", "Keven", "kmummery2@wikimedia.org", "M");
person4 = new Person ("4", "Gannie", "gmartinson3@illinois.edu", "M");
person5 = new Person ("5", "Antonietta", "adaine5@samsung.com", "F");

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
//console.log(person1.pName);
// Kennan's ID
//console.log(person2.pID);
// Keven's email
//console.log(person3.pEmail);
// Gannie's name
//console.log(person4.pName);
// Antonietta's Gender
//console.log(person5.pSex);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
person2.speak = function () {
  return "Hello, my name is " + this.pName;
}
//console.log(person2.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

person5.multiplyNums = function (x, y) {
  return x * y;
}
//console.log(person5.multiplyNums(2,6));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed 
// the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
