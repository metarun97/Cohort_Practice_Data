//! Day 3 questions:-
//^ Date - 10/09/2026

//* Q1-> Print 1 to n numbers by for loop?

// for (let i = 1; i < 10; i++) {
//   console.log(i);   // print 1 to 9
// }

//* Q2-> Print hello to i times i = 9 by for loop?

// for (let i = 1; i < 10; i++) {
//   console.log("hello");   // print "hello" 9 times
// }

//? Interviewer must asks those stuffs:-

//* Valid Code 1:-

// for (let i = 1; i < 10;) {
// console.log(i);   // it is valid loop and it will run as infinite loop because i's value is always be 1
// }

//* Valid Code 2:-

// for (let i = 1;;) {
// console.log(i);   // it is valid loop and it will run as infinite loop because i's value is always be 1
// }

//* Valid Code 3:-

// for (; ;) {
// console.log('hello');   // it is valid loop and it will run as infinite loop and console hello continously
// }

//* Q3-> Sum of n natural numbers?

// let pr = prompt("Enter your n number");

// if (pr === null) {
//   console.log("User Cancelled the prompt");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       for (let i = 1; i <= n; i++) {
//         sum += i;
//       }
//       console.log(`Sum of n natural numbers :${sum}`);
//     } else {
//       console.log("Value of n should be +ve or more than 0");
//     }
//   }
// }

//* Q4-> Factorial of n natural numbers?

// let pr = prompt("Enter your n number");

// if (pr === null) {
//   console.log("User Cancelled the prompt");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       let fact = 1;
//       for (let i = 1; i <= n; i++) {
//         fact *= i;
//       }
//       console.log(`Factorial of n natural numbers :${fact}`);
//     } else {
//       console.log("Value of n should be +ve or more than 0");
//     }
//   }
// }

//* Q4-> Factor of n number?

//& Brooteforce method:-

// let pr = prompt("Enter your n number");

// if (pr === null) {
//   console.log("User Cancelled the prompt");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       for (let i = 1; i <= n; i++){
//         if(n % i === 0){
//           console.log(i);
//         }
//       }
//     } else {
//       console.log("Value of n should be +ve or more than 0");
//     }
//   }
// }

//& Efficient method:-

// let pr = prompt("Enter your n number");

// if (pr === null) {
//   console.log("User Cancelled the prompt");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       for (let i = 1; i <= Math.floor(n/2); i++){
//         if(n % i === 0){
//           console.log(i);
//         }
//       }
//       console.log(n);
//     } else {
//       console.log("Value of n should be +ve or more than 0");
//     }
//   }
// }


//* Q5-> Check your n number is prime or not?


//& Brooteforce method:-

// let pr = prompt("Enter your n number");

// if (pr === null) {
//   console.log("User Cancelled the prompt");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       let isPrime = true;
//       for (let i = 2; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           isPrime = false;
//         }
//       }
//       console.log(isPrime);
//     } else {
//       console.log("Value of n should be +ve or more than 0");
//     }
//   }
// }


//& Efficient method:-

// let pr = prompt("Enter your n number");

// if (pr === null) {
//   console.log("User Cancelled the prompt");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       console.log(isPrime(n));
//     } else {
//       console.log("Value of n should be +ve or more than 0");
//     }
//   }
// }

// function isPrime(n) {
//   if (n <= 0) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i == 0) return false
//   }
//   return true;
// }


//^ Break and continue:-

//* break => Loop ko rokta hai jaha bola h vaha hi ruk jayega.
//* continue => Loop ko continue karta hai  bs jaha bola h vo skip kr dega next pe chala jayega.


// let i = 22;

// for (let i = 0; i < 22; i++) {
//   if (i === 20) break;
//   console.log(i);
// }


//* Q6-> Sum of number in a number?
// HINT -> 564  = 4 + 6 + 5 = [15 Ans]

// let pr = prompt("Enter number");

// if (pr === null) {
//   console.log("User cancel the prompt");
// } else {
//   if (isNaN(pr)) {
//     console.log("Invalid Input");
//   } else {
//     let num = Number(pr);
//     if (num > 0) {
//       let num = Number(pr);
//       let sum = 0;
//       while (num > 0) {
//         let rem = num % 10;
//         sum += rem;
//         num = Math.floor(num / 10)
//       }
//       console.log(sum);
//     } else {
//       console.log("Number is +ve or more than 0")
//     }
//   }
// }


console.log(1234 % 10)
