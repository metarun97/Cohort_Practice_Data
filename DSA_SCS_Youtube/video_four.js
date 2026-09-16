//! Day 4 questions:-
//^ Date - 14/09/2026

//* This is a node invironment function to write code in a single line.

// process.stdout.write("hello ");
// process.stdout.write("world");


//* Q1->  Basic pattern for the star printing?
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter your n value"));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log("")
// }


//* Q2->  Right angle pattern for the star printing?
// *
// * *
// * * *
// * * * *
// * * * * *

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter your n value: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(" *");
//   }
//   console.log();
// }


//* Q3->  Right angle pattern for the number printing start from 1?
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter your n value: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

//* Q4->  Right angle pattern for alphabets?
// A
// A B
// A B C
// A B C D
// A B C D E

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n value: "));

// for (let i = 1; i <= n; i++) {
//   let ascaii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascaii) + " ");
//     ascaii++;
//   }
//   console.log();
// }

//* Q5->  Mirror right angle pattern for the star printing?
// * * * * *
// * * * *
// * * *
// * *
// *

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter your n value: "));


// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }


