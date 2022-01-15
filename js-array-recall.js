// const cars = [
//   { model: "x5", brand: "BMW", engine: 5 },
//   { model: "model s", brand: "Tesla", engine: 8 },
//   { model: "Gentra", brand: "Ravon", engine: 1.5 },
//   { model: "Malibu", brand: "GM", engine: 3 },
//   { model: "222", brand: "mercedes", engine: 6 },
// ];

// const carsArr = [];
//!-------------------------------------------- for() -----------------------------------------------------
// for (let i = 0; i < cars.length; i++) {
//   carsArr.push(cars[i].model);
// }

// console.log(carsArr);

//!--------------------------------------------- map() ----------------------------------------------------
/*
in Higher order Function --> har doim Aarray qaytaradi! map()ni ichiga shart yozsak shartimizni qanoatlantirgan qiymatlarni ko`rsatib lekin shartni qanoatlantirmagan qiymatlarni ham undefined ko`rinishda yangi arrayga qo`shib qaytaradi! 
*/

// const carsArr = cars.map((c) => c.brand);  //! code 1 qator bo`lsa "{}" va "return" so`zi shart emas!

// const carsArr = cars.map((car) => {
//   return car.brand; //! "{}" kodimiz ko`p qatordan iborat bo`lganda ishlatiladi va "{}" ichida "return" bo`lishi shart!
// });

// console.log(carsArr);

//!-------------------------------- reduce() --> qiymat qaytaradi! ----------------------------------------
// hozirgi misolimizda cars arrayi ichidagi enginelani yig`indisini xisoblab qaytarvotti!

// const engineSum = cars.reduce((counter, car) => {
//   return (counter += car.engine);
// }, 0); //!--> Arrayni ichidagi obyectlar uchun reduce() ishlatganimizda 0 qoyishimiz kerak!

// console.log(engineSum);

//!--------------------------------------------- for() ----------------------------------------------------

// const carsArr = [];

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].engine >= 5) {
//     carsArr.push(cars[i]);
//   }
// }

// console.log(carsArr);

//!------------------------------------ forEach() hech narsa qaytarmaydi ----------------------------------

// const carsArr = [];

// const carsEngine = cars.forEach((car) => {
//   if (car.engine >= 4) {
//     carsArr.push(car);
//   }
// });

// console.log(carsEngine); //! undefined (chunki forEach() hech narsa qaytarmaydi)

// console.log(carsArr);

//! --------------------------------------- filter() ------------------------------------------------------
/*
filter() array.filter() arraydagi elementini aylanib call back funksiyasida berishimiz majburiy bo`lgan shartni qanoatlantirganini yangi arrayga push qilib qaytaradi!
*/
// const carEngine = cars.filter((car) => {
//   return car.engine > 2;
// });

// console.log(carEngine);

//!-------------------------------------- join() ---------------------------------------------------------
/*
join() The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/
// const a = ["wind", "water", "fire"];

// console.log(a.join()); //wind,water,fire
// console.log(a.join(" , ")); // wind , water , fire
// console.log(a.join(" + ")); //wind + water + fire
// console.log(a.join("")); // windwaterfire

// const http = require("http");
// const express = require("express");
// const app = express();
// app.use((req, res, next) => {
//   console.log("first express use");
// });

// const server = http.createServer(app);

// const express = require("express");
// const app = express();
// const port = 8000;

// app.listen(port, () => {
//   console.log(`your port${port} is running on https://localhost:${port}`);
// });
