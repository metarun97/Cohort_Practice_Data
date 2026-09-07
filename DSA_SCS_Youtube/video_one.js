//! Day 1 questions:-
//^ Date - 07/09/2026
//* Q1 ->  Sum of two integers (Number are integers in JS) ?

// let a = 20;
// let b = 10;
// console.log(a + b);                                   // 30


//* Q2 ->  Sum of two integers (Number are integers in JS) with message ?

// let a = 20;
// let b = 10;
// console.log(`Sum of ${a} and ${b} is ${a + b}`);      // Sum of 20 and 10 is 30


//? type coercion in JS:-

// console.log("1" + 1);                                 // 11  (Concatination hua right number 1 ko string me conver krke)
// console.log("1" - 1);                                 // 0   (Substract hua left strng 1 ko number me conver krke)
// console.log("1" * 1);                                 // 1   (Multiply hua left strng 1 ko number me conver krke)
// console.log("1" / 1);                                 // 0   (Devide hua left strng 1 ko number me conver krke)
// console.log("1" % 1);                                 // 0   (Modulous hua left strng 1 ko number me conver krke)


//* Q2 ->  Swaping two variables ?

// [Method - A] => Swaping two variables using an extra variable:-

// let a = 10;
// let b = 20;
// let c;

// c = a;       // c = 10, a = 10
// a = b;       // a = 20 , b = 20
// b = c;       // b = 10

// console.log(a);                                        // 20
// console.log(b);                                        // 10

// [Method - B] => Swaping two variables without using an extra variable:-

// let a = 10;
// let b = 20;

// a = a + b;  // a = a + b, a = 30
// b = a - b;  // b = 30 - 20, b = 10
// a = a - b;  // a = 30 - 10, a = 20

// console.log(a);                                        // 20
// console.log(b);                                        // 10

// [Method - C] => Swapping two variables without a temporary variable via (Array Destructuring Assignment):-

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a);                                        // 20
// console.log(b);                                        // 10

//^ Date - 08/09/2026


