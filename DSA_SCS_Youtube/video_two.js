//! Day 2 questions:-
//^ Date - 09/09/2026

//* Q1-> Check for user is he/she is a valid voter or not:-

// let age = Number(prompt("Enter your age...?"));

// if (isNaN(age)) {
//   console.log("Enter a valid Input");
// } else if (age >= 18) {
//   console.log(`You are a valid voter with the age ${age} years.`);
// } else {
//   console.log(`You aren't a valid voter with the age ${age} years.`);
// }

//* Q2-> Check how much payble amount payble for user:-

//    [ Amount ]      |       [ Discount ]

//  0 -  5000         |       0 %
//  5001 - 7000       |       5 %
//  7001 - 9000       |       10 %
//  more than 9000    |       20 %

//* Brooteforce method:-

// let amount = Number(prompt("Enter a Amount"));

// if (amount >= 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount >= 5001 && amount <= 7000) {
//   console.log(amount - Math.floor((amount * 5) / 100));
// } else if (amount >= 7001 && amount <= 9000) {
//   console.log(amount - Math.floor((amount * 10) / 100));
// } else if (amount > 9000) {
//   console.log(amount - Math.floor((amount * 20) / 100));
// } else {
//   if (amount < 0) {
//     console.log("Wrong Amount given")
//   }
// }

//* Efficient method:-

// let amount = Number(prompt("Enter a Amount"));
// let discount = 0;

// if (amount >= 0 && amount <= 5000) {
//   discount = 0;
// } else if (amount >= 5001 && amount <= 7000) {
//   discount = 5;
// } else if (amount >= 7001 && amount <= 9000) {
//   discount = 10;
// } else if (amount > 9000) {
//   discount = 20;
// } else {
//   if (amount <= 0) {
//     console.log("Wrong Amount given");
//   }
// }

// console.log(amount - Math.floor((amount * discount) / 100));


//* Q3-> Check how much payble amount give to Government for the electricity bill by graph:-

//    [ Units ]      |       [ Price ]

//  upto 100         |       Rs 4 /unit
//  101 - 200        |       Rs 6 /unit
//  201 - 400        |       Rs 8 /unit
//  more than 400    |       Rs 13 /unit

//~ Note => Isme hum ulta chalenge neeche se ki 400 se jyada fir kam fir ussey ka then so on.

// let units = Number(prompt("Enter your units"));
// let totalAmount = 0;

// if (units > 400) {
//   totalAmount += (units - 400) * 13;
//   units = 400;
// }// 400
// if (units > 200 && units <= 400) {
//   totalAmount += (units - 200) * 8;
//   units = 200;
// }// 200
// if (units > 100 && units <= 200) {
//   totalAmount += (units - 100) * 6;
//   units = 100;
// }// 100
// totalAmount += units * 4;

// console.log(totalAmount);


//* Q4-> INR Denominaton (Amount me apke notes kitene kitne kis tarha ke banenge):-

// let amount = 4532;

// if (amount >= 500) {
//   console.log(`500₹ Notes :  ${Math.floor(amount / 500)}`);
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log(`200₹ Notes :  ${Math.floor(amount / 200)}`);
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log(`100₹ Notes : ${Math.floor(amount / 100)}`);
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log(`50₹ Notes : ${Math.floor(amount / 50)}`);
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log(`20₹ Notes :  ${Math.floor(amount / 20)}`);
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log(`10₹ Notes : ${Math.floor(amount / 10)}`);
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log(`5₹ Notes :  ${Math.floor(amount / 5)}`);
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   console.log(`2₹ Notes : ${Math.floor(amount / 2)}`);
//   amount = amount % 2;
// }
// if (amount === 1) {
//   console.log(`1₹ Notes : ${amount / 1}`);
// }

//^ Important for interview procpective⬇️

//* Nested turnery operator:-

// let a = -10;

// let res = a > 0 ? "+ve Value" : a < 0 ? "-ve Value" : "Zero";
// console.log(res);


//* Fall through in switch conditions:-

// let day = 1;

// switch (day) {
//   case 1:
//     console.log("Monday");

//   case 2:
//     console.log("Tuesday");
//     break;

//   default: console.log("Invalid");
//     break;
// }

// Output => Monday ,Tuesday

//~ Note -> If we not write the break befor the console the fall through condition executes.


//* We can also give same output to multiple cases in it:-

// switch (key) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;

//     case 4:
//     case 5:
//     case 6:
//       console.log("Tuesday");
//       break;

//   default: console.log("Invalid for default")
//     break;
// }

//~ Note =>  Multile case pe same output bhi de sakte h.


//*  Switch condition via condition on the case:-

// switch (true) {
//   case 19 > 10:
//     console.log("Hello")
//     break;

//   case 9 > 91:
//     console.log("Hey")
//     break;
// }

//*  Precision Switch condition:-

// let a = 0.1 + 0.2;

// a = Number(a.toFixed(2));                   // Fix for Precision issue

// switch (a) {
//   case 0.3:
//     console.log("Hello");
//     break;
//   case 0.5:
//     console.log("Hey");
//     break;

//   default: console.log("Invalid");
//     break;
// }

//~ Note => It is because of Precision issue that 0.1 + 0.2 = 0.30000000000000004 so it fall in the default condition.
