
// Constructor function for Person objects
// class Person {
//     constructor(first, last, age, eye) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eye;
//     }

// }

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// function ChildPerson 

// Create a Person object

// const myFather = new Person("John", "Doe", 50, "blue");

let myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather);
let me = new Person("John", "Doh", 25, "Brown");
// console.log(me);
let num = [1,2,3,4,5];
let str = "W3Schools";
// for (const x of str) {
//     // code block to be executed
//     console.log(x);
//   }


// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        // return {value:n, done:false};
        return n;
      }
    };
  }
  
  // Create Iterable
  const n = myNumbers();
  // Returns 10
  console.log( n.next());
//   n.next(); // Returns 20
  console.log( n.next());
//   n.next(); // Returns 30
  console.log(n.next());

// Display age
// document.getElementById("demo").innerHTML =
// "My father is " + myFather.age + "."; 
