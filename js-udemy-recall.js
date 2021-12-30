//!========================================== Mundarija =================================================
/* Line   Topic
   52    Switch statements
   67    Conditional(Turnary) Operator
   125   1st coding challenge!
   146   Arrays
   154   Push method()
   161   Unshift method()
   171   Pop method()
   177   Shift method()
   185   indexOf() Method
   192   includes()
   200   2nd coding challenge!
   221   OBJECTS
   241   DOT Notation
   245   Bracket Notation
   256   Changing property of an Object
   319   3rd Coding Challenge
   361   Foor Loop





























*/
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

// const num = new Array(1, 2, 3, 4, 5);
// console.log(num);
//!Note: Javascript has some built-in functions that we can basically apply directly on Arrays. THese built-in fuctions are called "Methods"
// ----------------------------- Beginning of Add elements ---------------------------------------

//!! ---------------------------------- PUSH() Method ----------------------------------------------
// Push Method adds alements to the end of an Array

// const friends = ["ali", "safar", "jabbor"];
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

// const calcTip = function (bill) {
//   return `${bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2} `;
// };

// const bills = [125, 555, 44];

// const tips = [
//   Number(calcTip(bills[0])),
//   Number(calcTip(bills[1])),
//   Number(calcTip(bills[2])),
// ];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

// !! ----------------------------- OBJECTS ------------------------------------------------
/*
In Javascript objects are standalone entity with properties which define their characteristics each property consists of key value pairs.
!Note: The only difference between Object & Array is that in object order of elements does not matter while in Array order plays important role!
*/

// const Abduhalim = {
//   firstName: "Abdukhalim",
//   lastName: "Orziqulov",
//   age: 22,
//   nationality: "o'zbek",
//   major: "student",
//   friends: ["Mirabbos", "Og`abek", "Moxirbek"],
// }; //Abduhalim object has 5 properties.

// console.log(Abduhalim);

//! ------------------- There are 2 ways of getting a property of an object -------------------------
// The only difference between two DOT and Bracket Notations is that in bracket notation we can give expression which produces a value but in dot notation we cannot give expression.

// ! -------------------------------- DOT Notation ---------------------------------------------------

// console.log(Abduhalim.major);

// !! ----------------------------- Bracket Notation ------------------------------------------------
// const nameword = "Name";
// console.log(Abduhalim["first" + nameword]);
// console.log(Abduhalim["last" + nameword]);

// const promptquestion = prompt(
//   "What do you want to know? firstName, lastName, age, nationality, major ? "
// );

// console.log(Abduhalim[promptquestion]);

// !! -------------------------- Changing property of an Object ----------------------------------

// Abduhalim.uzunligi = 1.73; // Through DOT notation
// Abduhalim["xulqi"] = "yaxshi"; // through Bracket notation
// console.log(
//   `${Abduhalim.firstName} has ${Abduhalim.friends.length} friends ${Abduhalim.friends} and his best friend is ${Abduhalim.friends[0]}`
// );

//! Function is another type of value
// !we can store functions inside of an object but we can only use function expression not function decloration!
//!Note: Any Function that attached to an object is called "Method"

/*
const FunctionName = function(parameter){
  return statements;
}
*/

// const Abduhalim = {
//   firstName: "Abdukhalim",
//   lastName: "Orziqulov",
//   birthYear: 1999,
//   calcAge: function () {
//     return 2022 - this.birthYear; //! "this" keyword or "this" variable is basically equal to the object on which the method is called!
//   },
//   nationality: "o'zbek",
//   major: "student",
//   friends: ["Mirabbos", "Og`abek", "Moxirbek"],
// };

// console.log(Abduhalim.calcAge()); // Calling that function using Dot notoation!
// console.log(Abduhalim["calcAge"]()); // Calling that function using Bracket notoation!

/*
If we want recall function of an object multiple times for small projects or for small calculations it does not take a lot of time but in big projects it would take a lot of time and it will also be harmful for comp to calculate multiple times to avoid this situation we can store that result into new created property and then we can simply call it! 
*/

// const Abduhalim = {
//   firstName: "Abdukhalim",
//   lastName: "Orziqulov",
//   birthYear: 1999,
//   calcAge: function () {
//     this.age = 2022 - this.birthYear; //! we are creating "age" property using "this" keyword!
//     return this.age;
//   },
//   nationality: "o'zbek",
//   major: "student",
//   friends: ["Mirabbos", "Og`abek", "Moxirbek"],
//   hasDriverLicense: true,
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.major
//     } and ${
//       Abduhalim.hasDriverLicense
//         ? "He has driver's licence"
//         : "He does not have driver's licence"
//     }`;
//   },
// };
// //! First we should call calcAge() function itself before using age property

// console.log(Abduhalim.getSummary());

// ! -------------------------------- 3rd Coding Challenge --------------------------------------------------------

// const Marks = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   BMI: function () {
//     return this.mass / (this.height * this.height);
//   },
// };

// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   BMI: function () {
//     return this.mass / (this.height * this.height);
//   },
// };

// console.log(
//   `${
//     Marks.BMI() > John.BMI()
//       ? Marks.fullName +
//         "'s BMI " +
//         Marks.BMI() +
//         " is higher than " +
//         John.fullName +
//         "'s " +
//         John.BMI() +
//         "!"
//       : John.fullName +
//         "'s BMI " +
//         John.BMI() +
//         " is higher than " +
//         Marks.fullName +
//         "'s " +
//         Marks.BMI() +
//         "!"
//   }`
// );

// !! ------------------------------------ For Loop ----------------------------------------------------
// for loop is for repitation!
// for loop keeps running while condition is true!

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Abduhalim ${rep}`);
// }

// const friends = [
//   "ali",
//   "safar",
//   "jabbor",
//   true,
//   1999,
//   2000 - 200,
//   [1, 2, 3, 4],
// ];

// const types = [];

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i], typeof friends[i]);
// types[i] = typeof friends[i]; //filling free types Array
// types.push(typeof friends[i]); //filling types Array using push method.
// }

// console.log(types);

// const years = [1993, 1995, 1999, 2003];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }

// console.log(ages);

//!! ----------------------------- Continue & Break statements in for loop ------------------------------------

const friends = [
  "ali",
  "safar",
  "jabbor",
  true,
  1999,
  2000 - 200,
  [1, 2, 3, 4],
];

// console.log("-----" + friends + "----------------");
// for (let i = 0; i < friends.length; i++) {
//   if (typeof friends[i] === "string") continue; //! continue! ifdagi shart true bo`lsa loopni to`xtatmaydi to false bo`guncha false bo`lsa keyingi qatorga tushib natijani chiqaradi!

//   console.log(friends[i], typeof friends[i]);
// }

console.log("-----" + friends + "----------------");
for (let i = 0; i < friends.length; i++) {
  if (typeof friends[i] === "string") break; //! Break! ifdagi shart true bo`lishi bilan loopni to`xtatib qo`yadi!

  console.log(friends[i], typeof friends[i]);
}
