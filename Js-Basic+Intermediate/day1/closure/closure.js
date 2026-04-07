// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// }

/********************************* */

// const counter = outer();
// console.log(counter()); 
// console.log(counter()); 

// function outer() {
//   let x = 10;

//   return function inner() {
//     console.log(x);
//   };
// }

// const fn = outer();
// fn();


/****************************************** */
// function test() {
//   let x = 10;

//   return function () {
//     x++;
//     return x;
//   };
// }

// const a = test();
// const b = test();

// console.log(a()); 
// console.log(b());


/*********************************************** */

// function test() {
//   let x = 10;

//   return function () {
//     x++;
//     return x;
//   };
// }

// const a = test();
// const b = test();

// console.log(a()); 
// console.log(a());

/************************************************** */

for(var i=0;i<3;i++){
  setTimeout(()=>{return console.log(i)},1000)
}