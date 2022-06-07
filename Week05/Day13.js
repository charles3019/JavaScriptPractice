// strict mode
//  "use strict"
// let ajx = 8;

// //  x = 99;
// agx = 24;
//  console.log( ajx );




// // Arrow function

// let myArrowfunc = () =>{

//     console.log("This is arrow function");
//     // console.log(this);
// }

// myArrowfunc();
 //this keyword
// console.log(this);

// let myObj = {

// name1: "my name 1",
// name2: "name2",
// myfunction1: function () {
//     console.log(this);
//     console.log(this.name1);
// },
// myfunction2: ()=>{
//     console.log(this);
//     console.log(this.name1);
// }
// }
// myObj.myfunction1();
// console.log("My function2:");
// myObj.myfunction2();

// let herObj = {
//     name: "bridget",
//     surname: "Oduro", 
//     myfunction: function () {
//         console.log(this);
//         console.log(this.name);
//     },
//    myfunction2: ()=>{
//        console.log(this);
//        console.log(this.name);
//    }
// }

// herObj.myfunction();
//  console.log("My function2:");
//  herObj.myfunction2();

// // Array destructuring

// const cars = ["Saab", "Volvo", "BMW"];

// let sab = cars[0];
// // console.log("sab:", sab);
// // let  vao = cars[1]
// // console.log();
// // let [x, y] = cars;

// // console.log( x, y);
// console.log("sab:", saab, "vol;", volvo, "bmw:", bmw);

// let books  = ["power",  "the Bibbles", "sex millionaire"];

// let power = books[0];
// console.log("power",power);

// let bib = books[2];
// console.log("bib",bib);

// let [x ,y, v] = books;
// console.log(x,y,v);

// // // Object destructuring

// const car = {type:"Fiat", Model:"500", color:"white"};

// let {type, Model, color} = car;
// console.log(type, Model, color);

// const games = {type:"war", edition:"2022", platform:"ps5" };
// // let {type, edition, platform} = games;
// // console.log(type, edition, platform);


// // // spread Operator
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// // // const mirged = car + person;
// // const mirged = {...person, ...car}
// // // console.log(mirged);

// const student = {fName:"Charles", lname:"Agyemang", age:26, eyeColor:"dark brown"};
// // const merged = student + games;
// const merged = {...student, ...games};
// console.log(merged);


// // Spread operator is also valid for array.

// const books = ["The bible", "Thing & Grow Rich", "Power"];
// const letters = ["a, b, c, d, e, f, g"];
// const merge = [...books, ...letters];
// console.log(merge);
// const cars = ["Saab", "Volvo", "BMW"];

// // const numbers = [1, 2, 3, 4, 5, 6];

// // const mir = [...cars, ...numbers]

// // console.log(mir);

// const numbers = {one: 1, two: 2, three: 3, four: 4, five:5, six:6};

// //const [one, two, ...rest] = numbers;
// console.log(numbers.one);
// const {one, two, ...rest} = numbers; // destrcuring as well using spread operator

// console.log(one);
// console.log(two);
// console.log(rest);




let x = "mystring"
let result = x > 10

console.log("result", result);