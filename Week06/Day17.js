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


  class Book {
    constructor(genres) {
      this.bookname = genres;
    }
    present() {
      return 'I borrowed the book ' + this.bookname;
    }
  }

  class Anotherbook extends Book {
    constructor(genres, ano) {
     super(genres);
    //  this.genres = genres;
     this.Anotherbook = ano;
    }
    show() {
      return this.present() + 'and ' + this.Anotherbook;
    }
  }

  myBook1 = new Book("happy sexy millioniare");
  console.log(myBook1.present());
  let myBook = new Anotherbook(" power ", "Think and grow rich");
  console.log(myBook.show());


