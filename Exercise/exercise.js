//write a program that divides two  variables and finds the remainder

//x = 17;
//a = 2;

//let results = x / a;
//let remainder = x % a;

//console.log("Result:", results);
//console.log("remainder:", remainder);


// write a program that gets temperature from the user in celsius and convert its to fahrenheit using the formula F = 9/5*C+32.

function temperature(C) {
    let F = 9/5*C+32;
    return F;
}

//let F = temperature(9);



console.log("Temperature:", temperature(9));



//write a program that comnpare two number and find whether both are equal
/*
 let x = "3";
 let y = 9;
 //let z = (x >y);
 //let z = (x==y);


 console.log(x==y);


*/


// write a program that compare numbers and finds if the second is the square of the first of the first.
/*
function compare (p1, p2) {
    let square_p1 = p1**2;

    if(square_p1==p2)
    return true;
    else return false;
}
 let p1 = 2;
 let p2 = 4;
 let square_p1 = compare(p1, p2)

 console.log(square_p1);

*/
// write a program that has two variables "Salary" and "Grade". it add 50% bonus if the grade is greater than 15. it adds 25% bonus if the grade is 15 or less and then dispay the salary.
/*
function myFunction(Grade,Salary){
 if (Grade >15) {
     let bonus = Salary * (50 /100);
     Salary = Salary + bonus;
     return Salary;
 }
    else if (Grade <= 15) {
        let bonus = Salary * (25 /100);
        Salary = bonus + Salary;
        return Salary;
    }

 }


let Salary = 130;
let Grade = 23;

let result = myFunction(Grade,Salary);

console.log(result);
*/