// !! -------------------------- 03 JS fundamental part-2 ------------------------------------

//!! ---------------------------- switch statements -----------------------------------

// const day = "tuesday";

// switch (day) {
//   case "monday":
//     console.log("dushanba");
//     break;
//   case "tuesday":
//     console.log("seshanba");
//     break;
//   default:
//     console.log("unday kun yo`q");
// }

//!! ------------------ Conditional(Turnary) Operator ----------------------------------

// const age = 19;

// const availability = age >= 18 ? "can drive a car" : "can`t drive a car";
// console.log(availability);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// const bill = 430;

// const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill} , the tip was ${tip}, and the total value ${bill + tip}`
// );

// ------------------- The same as below -------------------------------------------------

// if (bill >= 50 && bill <= 300) {
//   console.log(bill + bill * tip);
// } else {
//   console.log(bill + bill * 0.2);
// }

// console.log("23" + "10" - 3);
// "use strict";
// let hasLicense = false;
// let passedTest = true;

// if (passedTest) haslicense = true;
// if (hasLicense) console.log("can drive");

// const calAge = (birthYear) => 2022 - birthYear;
// console.log(calAge(1999));

// const calRetirementYear = (birthYEar) => {
//   const age = 2022 - birthYEar;
//   const retirementAge = 60;
//   return `You will get retired after ${retirementAge - age} years`;
// };

// const RetirementYear = calRetirementYear(1999);
// console.log(RetirementYear);

// const Age = function (birthYear) {
//   return 2022 - birthYear;
// };

// const calRetirementYear = (age) => {
//   const leftRetirementYear = 60 - Age(age);
//   return `${
//     leftRetirementYear > 0 ? leftRetirementYear + " years left till your retirement!"
//       : "It has already been " + -leftRetirementYear + " years that you retired"
//   }`;
// };

// console.log(calRetirementYear(1999));

//!! -------------------------------   1st coding challenge!   ---------------------------------

// const calcAvg = (a, b, c) => {
//   return (a + b + c) / 3;
// };

// const avgCaolas = calcAvg(23, 34, 27);
// const avgDelphins = calcAvg(85, 54, 41);

// const checkWinner = function (averageOfCaolas, averageOfDelphins) {
//   if (averageOfCaolas >= 2 * averageOfDelphins) {
//     return `Coalas Win🎉 (${averageOfCaolas} vs ${averageOfDelphins})`;
//   } else if (averageOfDelphins >= 2 * averageOfCaolas) {
//     return `Delphins Win🎉 (${averageOfCaolas} vs ${averageOfDelphins})`;
//   } else {
//     return `No team won the trophy🤷‍♀️ (${averageOfCaolas} vs ${averageOfDelphins})`;
//   }
// };

// console.log(checkWinner(avgCaolas, avgDelphins));

//!! -------------------------------------  Arrays      -------------------------------------------
// Arrays are big containers that are used to store more amount of data

const num = new Array(1, 2, 3, 4, 5);
// console.log(num);

// ----------------------------- Beginning of Add elements ---------------------------------------

//!! ---------------------------------- PUSH() Method ----------------------------------------------
// Push Method adds alements to the end of an Array

const friends = ["ali", "safar", "jabbor"];
// friends.push("Malik");
// console.log(friends); // ["ali", "safar", "jabbor", "Malik"]

//!! ------------------------------- UNSHIFT() Method -----------------------------------------------
// Unshift method adds elements to the beginning of an Array

// const newLength = friends.unshift("Sardor");
// console.log(friends);  //  ["Sardor", "ali", "safar", "jabbor"]
// console.log(newLength);  // 4
// ----------------------------- End of Add elements ---------------------------------------------

// ----------------------------- Beginning of Remove elements ------------------------------------

//!! ------------------------------------ POP() Method ----------------------------------------------
// Pop method removes last element of an Array.

// friends.pop();
// console.log(friends);

//!! ------------------------------ SHift() Method -----------------------------------------------
// Shift method removes first element of an Array.

// friends.shift();
// console.log(friends);

// ----------------------------- End of Remove elements ------------------------------------

//!! ------------------------------- indexOf() Method -------------------------------------------
// indexOf() method returns index of an given element of an Array if that given element is not found in that Array then this method returns -1.

// console.log(friends.indexOf("safar"));
// console.log(friends.indexOf("malik"));
// console.log(num.indexOf("5"));

//!! ---------------------------------- includes() -------------------------------------------------
// includes() method is the same as indexOf() but it returns true or false values
// !! NOTE:both these indexOf() & includes() methods works in strict check with data types.

// if (friends.includes("ali")) {
//   console.log("You have a friend called Ali");
// }

// !! -------------------------------- 2nd coding challenge! ----------------------------------
/* in this challenge I used function expression and 
inside function expression I used template literal ` ${}` and
instead of if else operators I used conditonal(Ternary) Operators ? :
*/

const calcTip = function (bill) {
  return `${bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2} `;
};

const bills = [125, 555, 44];

const tips = [
  Number(calcTip(bills[0])),
  Number(calcTip(bills[1])),
  Number(calcTip(bills[2])),
];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);

// !! ----------------------------- OBJECTS ------------------------------------------------
/*
In Javascript objects are standalone entity with properties which define their characteristics each property consists of key value pairs.
*/
