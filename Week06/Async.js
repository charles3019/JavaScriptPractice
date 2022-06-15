 //FUNCTION SEQUENCE
// function myFirst() {
//     //myDisplayer("Hello");
//     console.log("Hello");
//   }
  
//   function mySecond() {
//     //myDisplayer("Goodbye");
//     console.log("Goodbye");
//   }
  
//   mySecond();
//   myFirst();

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
//     console.log("myDisplayer", some);
//     console.log("myDisplayer2");
// }
// function myCalculator(num1,num2) {
//     let sum = num1 * num2;
//     console.log("myCalculator1");
//     myDisplayer(sum);
//     console.log("myCalculator2");
// }

// myCalculator(25,4)
   

//callbacks


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

function myDisplayer(some) {
    console.log("mydisplayer");
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 * num2;
    console.log("myCalculator");
    myCallback(sum);
}

myCalculator(23, 5, myDisplayer);





