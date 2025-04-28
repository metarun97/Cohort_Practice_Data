// ! DSA  Practice Day 2nd [Date = 29/04/2025]:-

// Todo 11 => Shop discount - Description on Graphic:-
/* ? [Ammount]                [Discount]
      0-5000                      0%
      5001-7000                   5%
      7001-9000                   10%
      more 7001                   20%
 */

// ? (A) Brute-force method:-

// let prompt = require("prompt-sync")();
// let amount = Number(prompt("Enter an amount: "));

// if (amount > 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount >= 5000 && amount <= 7000) {
//   console.log(amount - (amount * 5) / 100);
// } else if (amount > 7000 && amount <= 9000) {
//   console.log(amount - (amount * 10) / 100);
// } else if (amount > 9000) {
//   console.log(amount - (amount * 20) / 100);
// } else {
//   console.log("Invalid Input");
// }

// ? (B) Efficient Approach method:-

// let prompt = require("prompt-sync")();
// let amount = Number(prompt("Enter an amount: "));
// let discount = 0;

// if (amount <= 0) {
//   console.log("Invalid Input");
//   return;
// } else {
//   if (amount > 0 && amount <= 5000) discount = 0;
//   else if (amount >= 5000 && amount <= 7000) discount = 5;
//   else if (amount > 7000 && amount <= 9000) discount = 10;
//   else if (amount > 9000) discount = 20;
// }

// console.log("Payble Amount= " + (amount - (discount * amount) / 100));


// Todo 12 => Bijli Bill - Description on Graphic:-
/* ? [Ammount]                   [Units]
      upto 100                  Rs. 4.2/Unit
      101-200                   Rs. 6 /Unit
      201-400                   Rs. 8 /Unit
      more than 400             Rs. 13/Unit
 */