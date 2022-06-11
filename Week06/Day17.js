// let total = 47999995 + 19;
// console.log(total);
// let time = total % 24;
// console.log("time:", time);
// let x = 47999995 % 24;
// console.log("x:", x);
// let answer = x + 19;
// console.log("answer", answer);


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
    //   this.brand = brand;
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  myCar1 = new Car("Ford");
  console.log(myCar1.present());
  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.show());