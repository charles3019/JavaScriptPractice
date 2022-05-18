// let text = "We are the so-called \"Vikings\" from the north.";
// let text= 'It\'s alright. \n This another line.';

// console.log(text);

let str = "Apple, Banana, Kiwi";
let part = str.slice(15, 19);

// console.log(part);
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);

// let numb = 5;
// console.log("Before", numb);
// console.log("typeof", typeof(numb));

// let text = numb.toString();
// console.log("After", text);
// console.log("typeof", typeof(text));


//Numbers

// let x = 9999999369999;

// console.log(x);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// let fruit = fruits.pop();

// console.log(fruits);

// "2022-05-18T17:10:54.509Z"
// const d = new Date(0)
// const d = new Date("October 13, 2021 11:13:00");
// const d = new Date();
// let miliTime = d.getTime();

// console.log(miliTime);
let day;
let x = new Date().getDay()
console.log(x);

switch (x) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(day);