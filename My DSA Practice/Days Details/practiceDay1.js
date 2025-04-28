// ! DSA  Practice Day 1st:-

// Todo 1  => Swap two valiables by via methods:-

// ? (A) By using an extra space(variable):-

// let a = 10,
//   b = 5,
//   c;

// c = a;
// a = b;
// b = c;
// console.log("Swapped Result=> ", a, b);

// ? (B) By Destructring way:-

// let a = 10,
//   b = 5;

// [a, b] = [b, a];
// console.log("Swapped Result=> ", a, b);

// ? (C) By  Mathematical calculation:-

// let a = 10,
//   b = 5;

// c = a + b;
// a = c - a;
// b = c - b;
// console.log("Swapped Result=> ", a, b);

// Todo 2  => Calculate compound interest:-

// let prompt = require("prompt-sync")();
// let p = Number(prompt("Enter Principle ammount: "));
// let r = Number(prompt("Enter Rate of intrest: "));
// let nt = Number(prompt("Enter time period/number of years: "));

// let CI = Math.floor(p * Math.pow(1 + r / 100, nt) - p);
// console.log("Compound Intrest =", CI);

// Todo 3  => Generate a random OTP creator:-

// console.log("Random OPT = ", Math.floor(Math.random() * 9000 + 1000));

// Todo 4  => Area of triangle by Heron's formula:-

// let prompt = require("prompt-sync")();
// let a = Number(prompt("Enter a value: "));
// let b = Number(prompt("Enter b value: "));
// let c = Number(prompt("Enter c value: "));

// if (a + b <= c || b + c <= a || c + a <= b) {
//   console.log("Not possible to calculate the area by these values.");
// } else {
//   let s = (a + b + c) / 2;
//   console.log(
//     "Area of Triangle = ",
//     Math.sqrt(s * (s - a) * (s - b) * (s - c))
//   );
// }

// Todo 5  =>  Calculate circumfrence of a circle:-

// let prompt = require("prompt-sync")();
// let r = Number(prompt("Enter circle's radius: "));

// console.log(2 * Math.PI * r);

// Todo 6  =>  Accept two number and find which one is greatest of them:-

// ? A(By if else):-

// let prompt = require("prompt-sync")();
// let num1 = Number(prompt("Enter number 1st: "));
// let num2 = Number(prompt("Enter number 2nd: "));

// if (num2 > num1) {
//   console.log(`Num2 = ${num2} is greatest.`);
// } else {
//   console.log(`Num1 = ${num1} is greatest.`);
// }

// ? B (By turnary):-

// let prompt = require("prompt-sync")();
// let a = Number(prompt("Enter First number: "));
// let b = Number(prompt("Enter Second number: "));

// if ((isNaN(a) || a == "") && (isNaN(b) || b == "")) {
//   console.log("Enter Valid inputs");
// } else {
//   let greatest = a > b ? `Num1 = ${a} is greatest.` : `Num1 = ${b} is gretest.`;
//   console.log(greatest);
// }

// Todo 7  =>  Accept an integer and then check if it is even or odd:-

// ? A (By if else):-

// let prompt = require("prompt-sync")();
// let num = Number(prompt("Enter number: "));

// if (num % 2 === 0) {
//   console.log(`Iteger ${num} is even.`);
// } else {
//   console.log(`Iteger ${num} is odd.`);
// }

// ? B (By turnary):-

// let prompt = require("prompt-sync")();
// let num = Number(prompt("Enter number: "));

// let intEvenOddRes =
//   num % 2 === 0 ? `Iteger ${num} is even.` : `Iteger ${num} is odd.`;
// console.log(intEvenOddRes);

// Todo 8 =>  Accept two values age and name and check that if a valid voter or not:-

// let prompt = require("prompt-sync")();
// let age = Number(prompt("Enter person's age: "));
// let name = prompt("Enter person's name: ");

// if (isNaN(age) || (age == "" && !isNaN(name)) || name == "") {
//   console.log("Enter valid inputs.");
// } else {
//   let resVoter =
//     age >= 18 ? `${name} is a valid voter.` : `${name} is not a valid voter.`;
//   console.log(resVoter);
// }

// Todo 9 =>  Accept three number and find which one is greatest of them:-

// ? A (With some checks):-

// let prompt = require("prompt-sync")();
// let n1 = Number(prompt("Enter 1st number: "));
// let n2 = Number(prompt("Enter 2nd number: "));
// let n3 = Number(prompt("Enter 3rd number: "));

// if (n1 > n2) {
//   console.log(`Number 1 = ${n1} is greatest.`);
// } else if (n2 > n3) {
//   console.log(`Number 2 = ${n2} is greatest.`);
// } else if (n3 > n1) {
//   console.log(`Number 3 = ${n3} is greatest.`);
// } else console.log("Can't check which is greatest of not.");

// ? B (With some mains checks):-

// let prompt = require("prompt-sync")();
// let n1 = Number(prompt("Enter 1st number: "));
// let n2 = Number(prompt("Enter 2nd number: "));
// let n3 = Number(prompt("Enter 3rd number: "));

// if (
//   isNaN(n1) ||
//   (n1 == "" && isNaN(n2)) ||
//   (n2 == "" && isNaN(n3)) ||
//   n3 == ""
// ) {
//   console.log("Enter valid Inputs.");
// }
// if (n1 > n2) console.log(`Number 1 = ${n1} is gretest.`);
// if (n2 > n3) console.log(`Number 2 = ${n2} is gretest.`);
// if (n3 > n1) console.log(`Number 3 = ${n3} is gretest.`);

// Todo 10 =>   Accept an year and get the result it is a leap year or not:-

// ? A - (By else if):-

// let prompt = require("prompt-sync")();
// let year = Number(prompt("Enter a year: "));

// if ((year % 4 === 0 && year !== 100) || year % 400 === 0) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

// ? B - (By turnary):-

// let prompt = require("prompt-sync")();
// let year = Number(prompt("Enter a year: "));

// let resOfLeap =
//   (year % 4 === 0 && year !== 100) || year % 400 === 0
//     ? `${year} is a leap year.`
//     : `${year} is not a leap year.`;
// console.log(resOfLeap);

// ? C - If else :-

// let prompt = require("prompt-sync")();
// let year = Number(prompt("Enter the year value: "));
// let isLeap = true;

// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       isLeap = true;
//     } else isLeap = false;
//     isLeap = false;
//   } else {
//     isLeap = true;
//   }
//   isLeap = true;
// } else {
//   isLeap = false;
// }
// let leapres = isLeap ? "A leap year" : "Not a leap year.";
// console.log(leapres);



