// ---------------------------- switch statements -----------------------------------

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

// ------------------ Conditional(Turnary) Operator ----------------------------------

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
//     leftRetirementYear > 0
//       ? leftRetirementYear + " years left till your retirement!"
//       : "It has already been " + -leftRetirementYear + " years that you retired"
//   }`;
// };

// console.log(calRetirementYear(1999));

const calcAvg = (a, b, c) => {
  return (a + b + c) / 3;
};

const avgCaolas = calcAvg(65, 54, 49);
const avgDelphins = calcAvg(44, 23, 71);

const checkWinner = function (averageOfCaolas, averageOfDelphins) {
  return averageOfCaolas > averageOfDelphins ? "Caolas win!" : "Delphins win!";
};

console.log(checkWinner(avgCaolas, avgDelphins));
console.log(avgCaolas, avgDelphins);
