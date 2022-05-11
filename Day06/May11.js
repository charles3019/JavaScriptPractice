
// function addition(p1, p2, p3) {
//     if (p3 == undefined) {
//         return p1 + p2;
//     } else if(p2 == undefined){

//     } 
    
//     else {
//         return p1 + p2 + p3;   // The function returns the product of p1 and p2
//     }
//   }

//  function mainFunction() {
//     let num1 = 99;
//     let num2 = 88;
//     console.log("Addition of num1 =",num1, "num2 =" ,num2, "is" );
//     let result = addition(num1, num2);
//     console.log(result);
//     let num3 = 77;
//     console.log("Addition of num1 =",num1, "num2 =" ,num2, "num3 =" ,num3, "is" );
//     result = addition(num1, num2, num3);
//     console.log(result);

//   }



// mainFunction();


//If else conditions


// let time = 21;

// if (time < 10) {
//     greeting = "Good morning";
//     console.log(greeting);
//   }
  
//   else if (time < 20) {
//     greeting = "Good day";
//     console.log(greeting);
//   } 
  
//   else {
//     greeting = "Good evening";
//     console.log(greeting);

//   }

//Objects with Method

  const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

// console.log(person.fullName());
let name1 = person.fullName();
console.log(name1);
