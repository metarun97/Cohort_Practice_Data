//! Day 1 questions:-
//^ Date - 07/09/2026
//* Q1 ->  Sum of two integers (Whol number are integers in JS) ?

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

//* Q1->

// let a = 11,  // 12 => 13
//   b = 22;    // 23 => 24

//      // 11 + 22 + 11  + 22  +  13 + 24
// let c = a  + b  + a++ + b++ + ++a + ++b;
// console.log(a)  // 13
// console.log(b)  // 24
// console.log(c)  // 66 + 13 + 24 => 103


//* Q2->
// let i = true;

// i++;
// console.log(i)  // 2


//* Q3->
// let a = 10++;
// console.log(a);

//* Q4->

// let a = 10;
// let b = ++(a++);
// console.log(b);

//~ Note => Ap kabhi bhi constant value pe pre ya post [increment/decrement] nahi laga sakte bs ap variable pe hi laga sakte ho.

//* Q5-> Find the area of a rectangle?

// let length = 12;
// let bredth = 6;

// console.log(`Area of rectangle: ${length * bredth}`);           // 72

//* Q6-> Find the perimeter of a rectangle?

// let length = 12;
// let bredth = 6;

// console.log(`Area of rectangle: ${2 * (length + bredth)}`);     // 36

//* Q7-> Genreate four digit OTP?

// console.log(Math.floor(Math.random() * 9000) + 1000);


//* Q8-> Find the area of a triangle by Heron's formule?

// let a = 3;
// let b = 4;
// let c = 5;

// let s = (a + b + c) / 2;

// console.log(`Area of triange: ${Math.sqrt(s * (s - a) * (s - b) * (s - c))}`);

//* Q9-> Find the circumfrence of a circle?

// let r = 12;

// console.log(Number(2 * Math.PI * r).toFixed(2));
