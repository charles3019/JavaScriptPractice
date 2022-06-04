// strict mode
"use strict";
let ajx = 8;

// x = 99;

ajx = 88;
// console.log( ajx );


// Arrow function

let myArrowfunc = () =>{

    console.log("This is arrow function");
    // console.log(var1, param2);
}

// myArrowfunc();
// this key word
// console.log(this);
let myObj = {

name1: "my name 1",
name2: "name2",
myfunction1: function () {
    console.log(this);
    console.log(this.name1);
},
myfunction2: ()=>{
    console.log(this);
    console.log(this.name1);
}
}
// myObj.myfunction1();
// console.log("My function2:");
// myObj.myfunction2();



// Array destructuring

// const cars = ["Saab", "Volvo", "BMW"];

// let sab = cars[0];
// console.log("sab:", sab);
// let  vao = cars[1]
// console.log();
// let [x, y] = cars;

// console.log( x, y);
// console.log("sab:", saab, "vol;", volvo, "bmw:", bmw);

// Object destructuring

const car = {type:"Fiat", Model:"500", color:"white"};

// let {type, Model, color} = car;
// console.log(type, Model, color);

// spread Operator
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// const mirged = car + person;
const mirged = {...person, ...car}
// console.log(mirged);


// Spread operator is also valid for array.


const cars = ["Saab", "Volvo", "BMW"];

// const numbers = [1, 2, 3, 4, 5, 6];

// const mir = [...cars, ...numbers]

// console.log(mir);

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(one);
console.log(two);
console.log(rest);

