
// INHERITANCE

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
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   let myCar = new Model("Ford", "Mustang");
//  console.log(myCar.show());



//  class Phone {
//      constructor(brand) {
//          this.phonename = brand;
//      }
//      present() {
//          return 'I have a ' + this.phonename;
//      }
//  }

//  class Model extends Phone {
//      constructor(brand, mod) {
//          super(brand);
//          this.model = mod;
//      }
//      show() {
//          return this.present() + ', it is a ' + this.model;
//      }
//  }

//  let myPhone = new Model("Iphone 13", "Pro max");
//  console.log(myPhone.show());

//GETTER & SETTERS

//  class Phone {
//      constructor(brand) {
//          this.phonename = brand;
//      }
//      get pname() {
//          return this.phonename;
//      }
//      set pname(x) {
//          this.phonename = x;
//      }
// }

// let myPhone = new Phone("Iphone 14");
// console.log(myPhone.pname);

// class Phone {
//          constructor(brand) {
//              this._phonename = brand;
//          }
//          get phonename() {
//              return this._phonename;
//          }
//          set phonename(x) {
//              this._phonename = x;
//          }
//     }
    
//     let myPhone = new Phone("Iphone 14");
//     myPhone.phonename = "Galaxy 15";
//     console.log(myPhone.phonename);


//HOISTING 

// class Fruit {
//     constructor(type) {
//         this.fruitname = type;
//     }
// }
//   let myFruit = new Fruit("Banana");
//   console.log(myFruit);


//STATIC METHOD
// class Fruit {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello() {
//         return "hello";
//     }
// }

// let myFruit = new Fruit("Banana");
// console.log(Fruit.hello());

// OBJECT INSIDE THE STATIC METHOD
//EXMAPLE

// class Car {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello(x) {
//       return "Hello " + x.name;
//     }
//   }
//   let myCar = new Car("Ford");
//   document.getElementById("demo").innerHTML = Car.hello(myCar);

//    class Fruit {
//         constructor(name) {
//             this.name = name;
//         }
//         static hello(x) {
//             return "Hello " + x.name;
//         }
//    }

//    let myFruit = new Fruit("Apple");
//    console.log(Fruit.hello(myFruit));