// function myDisplayer(some) {
//     console.log(some);
//   }
  
  // function myFirst() {
  //   // myDisplayer("Hello");
  //   console.log("Hello");
  // }
  
  // function mySecond() {
  //   // myDisplayer("Goodbye");
  //   console.log("Goodbye");
  // }
  
  // myFirst();
  // mySecond();
  
  
// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
// //   myDisplayer(result);
// console.log(result);

// function myDisplayer(some) {
// console.log("myDisplayer", some);
// console.log("myDisplayer2");
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   console.log("myCalculator1");
//   myDisplayer(sum);
//   console.log("myCalculator2");
// }

// myCalculator(5, 5);


// function myDisplayer(some) {
//     console.log("mydisplayer");

//     console.log(some);
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     console.log("myCalcultor");
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);




// function myFunction() {
//     console.log( "I love You !!");
// }

// setTimeout(myFunction, 3000);

// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }

// function myFunction () {
//   console.log("I am a software engineer !!");
// }
// setTimeout(myFunction, 3000);
// setInterval(myFunction, 1000);

// function myFunction () {
//   let x = new Date();
//   console.log(x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds());
// }



// const function2 = () =>{
//     setTimeout(()=>{
//         console.log("Function2 is called");
//     }, 2000)
// }

// const function1 = () =>{

//     console.log("Function1 is called");
//     function2();
//     console.log("Function1 is called again");
//     console.log("Function1 is called again");
//     console.log("Function1 is called again");
//     console.log("Function1 is called again");


// }

// function1();

const function2 = () =>{
  setTimeout(()=>{
    console.log("Function2 is called ");
  }, 3000)
}

const function1 = () =>{
  console.log("Function is called again");
  function2();
    console.log("Function1 is called again");
    console.log("Function1 is called again");
    console.log("Function1 is called again");
    console.log("Function1 is called again");

}

function1();