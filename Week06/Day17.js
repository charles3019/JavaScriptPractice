// let total = 47999995 + 19;
// console.log(total);
// let time = total % 24;
// console.log("time:", time);
// let x = 47999995 % 24;
// console.log("x:", x);
// let answer = x + 19;
// console.log("answer", answer);

// let total = 59999988 + 29;
// console.log("total:", total);
// let time = total % 25;
// console.log("time:", time);
// let x = 59999988 % 25;
// console.log("X", x);
// let answer = x + 29;
// console.log("answer", answer);

//CLASS

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//     //   this.brand = brand;
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }

//   myCar1 = new Car("Ford");
//   console.log(myCar1.present());
//   let myCar = new Model("Ford", "Mustang");
//   console.log(myCar.show());


  // class Book {
  //   constructor(genres) {
  //     this.bookname = genres;
  //   }
  //   present() {
  //     return 'I borrowed the book ' + this.bookname;
  //   }
  // }

  // class Anotherbook extends Book {
  //   constructor(genres, ano) {
  //    super(genres);
  //   //  this.genres = genres;
  //    this.Anotherbook = ano;
  //   }
  //   show() {
  //     return this.present() + 'and ' + this.Anotherbook;
  //   }
  // }

  // myBook1 = new Book("happy sexy millioniare");
  // console.log(myBook1.present());
  // let myBook = new Anotherbook(" power ", "Think and grow rich");
  // console.log(myBook.show());

  // class Car {
  //   constructor(name, year) {
  //     this.name = name;
  //     this.year = year;
  //   }
  //   age() {
  //     let date = new Date();
  //     return date.getFullYear() - this.year;
  //   }
  // }
  
  // let myCar = new Car("Ford", 2014);
  
  // console.log("My car is " + myCar.age() + " years old.");


  // class Player {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   year() {
  //     //let date = new Date();
  //     //console.log("date" , date.getFullYear());
  //     //console.log("age", this.age);
  //     return this.age;
  //   }
  // }

  // let myPlayer = new Player("Leao", 23);
  // let myAge = myPlayer.year();
  // console.log("My player is " + myAge + " years old");

  // class Car {
  //   constructor(name, year) {
  //     this.name = name;
  //     this.year = year;
  //   }
  //   age(x) {
  //     return x - this.year;
  //   }
  // }
  
  // let date = new Date();
  // let year = date.getFullYear();
  
  // let myCar = new Car("Ford", 2014);
  // document.getElementById("demo").innerHTML=
  // "My car is " + myCar.age(year) + " years old.";
  
  class Book {
    constructor(name,year) {
      this.name = name;
      this.year = year
    }
    age(v) {
       return v - this.year
    }
  }

let date = new Date();
let year = date.getFullYear();

let myBook = new Book("Think & Grow Rich", 2018);
console.log(myBook);
console.log("My Book is " + myBook.age(year) + " years old");
