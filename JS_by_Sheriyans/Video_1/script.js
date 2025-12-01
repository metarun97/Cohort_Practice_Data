//!______________________________________________________________________VIDEO_________________________________________________________________________

//? Variables and declaration in JS:-

//^ ____WORD VS KEYWORD____:-

//* WORD:-
// -> JS me vo cheej jo koi matlab na deti ho jissey koi operational work na ho sake vo word hai.
// Eg-> "lolo","Tarun","Javascript" etc.

//* KEYWORD:-
// -> JS me vo cheej jo koi matlab rakhti ho jissey koi operational work ho sake vo keyowrd hai.
// Eg-> let, var , const , for , if etc.

//^ ___VARIABLES___:-

// var a;                      //* declaration
// var a = 10;                 //* declaration & initialization

//& var keyword:-

//* Ye apne apko window me add krta hai.

// var b = 25;

//* Ye function scopped hota h.

// function myFun() {
//   if (true) {
//     var a = 10;
//   }
// }

// Note -> Ye esa h ki jab hum var se declare krenge to vo function me poore me excess ho skta hai yaha block me chale jane means if else condition me andar hone me bhi ye poore funtion me kahi bhi excess kia ja skta hai.

//* Iseey dobra declare kr skta h same name se error nahi ayega kesa bhi.

// var a = 20;
// var a = 30;

//^ Tamporal-dead-zone:-

//& let & const keyword:-

// console.log(a);                         // a isn't defined

//& var keyword:-

// console.log(a);                         // undefined
// var a = 20;
//* Kuch is tarha tutta hai ye:-
// var a;
// a= 20;

//* Note -> Ye hoisting ki vjha se hota hai jo var ko hi support krta hai isme variable declaration top pe jump krke chala jata hai or vo usey undefined bata deta h.

//^ Hoisting per type:-

// Note -> Hoisting ke concept me hamara variable kuch is tarha tutta hai jisme uska declaration part top pe shift ho jata hai or initialized part neeche reh jata hai isi vhjha se undefined milta hai bina kisi error k.

// console.log(a);                        // undefined

// var a = undefined;
// a = 20;

//? Datatypes Type system in JS:-

//^ Premetive types-> String,Boolean,Number,Symbol,Null,undefined,bigInt

// let a = 10;
// let b = a;
// console.log(b + 1);                    // 11
// console.log(a);                        // 10

//^ Reference types-> Arrays, Objects, functions

// let arr = [1, 2, 3, 4]
// let arr1 = arr;
// arr1.pop();
// console.log(arr);                      // [1, 2, 3]
// console.log(arr1);                     // [1, 2, 3]

//^ Type coercion-> JS automatically change kr deta hai type ko ek dusre se.

// let a = 1;
// let b = "5";
// console.log(a + b);
// console.log(typeof (a + b));           // string

//& Note-> Yaha concatination se 1 string me badal gya add operator concat or add dono krta hai to yaha concat kr dia isne change krke.

// let c = 10;
// let d = "5";
// console.log(c - d);
// console.log(typeof (c - d));           // number

//& Yaha normal substraction se 5 number me badal gya kyuki substract bs ghatata hi h.

//^ Truthy and falsy values:-

// falsy Values --> 0,false,"",null,undefined,document.all,NaN.
// truthy Values --> falsy k alava sb truthy.

//? Operators in JS:-

//^ Arirthmatic operators:-

// console.log(5 + 5);                     // add -> 10
// console.log("Tar" + "un");              // concat -> Tarun
// console.log(10 - 5);                    // substract -> 5
// console.log(2 * 4);                     // multiply -> 8
// console.log(12 / 6);                    // devide -> 2
// console.log(15 % 2);                    // modulous -> 1
// console.log(2 ** 3);                    // exponentiation -> 8

//^ Comparison operators:-

// console.log(20 == 20);                  // true
// console.log(20 == 18);                  // false
// console.log(20 == "20");                // true
// console.log(20 === "20");               // false
// console.log(20 != 21);                  // true
// console.log(20 != "20");                // false
// console.log(20 !== "20");               // true
// console.log(25 > 20);                   // true
// console.log(25 < 20);                   // false
// console.log(20 <= 20);                  // true
// console.log(32 >= 32);                  // true

//^ Assignment operators:-

// let a = 8;
// console.log(a+=4);                      // 12
// console.log(a-=2);                      // 10
// console.log(a*=2);                      // 20
// console.log(a/=2);                      // 10
// console.log(a%=3);                      // 1

//^ Logical operators:-

// console.log(13>12 && 10>12);            // fasle
// console.log(13>12 && 10<12);            // true
// console.log(13>12 || 10>12);            // true
// console.log(13>12 || 14>12);            // true
// console.log(10>12 || 11>12);            // false
// console.log(!true);                     // false
// console.log(!false);                    // true

//~ Note -> Agar hume kisi bhi cheej ka adjact nature check krna h truthy h ya falsy hai to vo hum ussey phle do !! mark lgakr check kr skte hai.

//^ Urenary operators:-

// console.log(+"5");                       // 5
// console.log(-5);                         // -5
// console.log(!15)                         // false
// console.log(typeof 15);                  // number
// console.log(typeof "hello");             // string
// console.log(typeof true);                // boolean
// let a = 5
// console.log(a++);                        // 5
// console.log(a);                          // 6
// console.log(++a);                        // 7
// console.log(a);                          // 7

//^ Ternary operators:-

// condition ? "true ka code" : "false ka code"

//~ Note -> Agar condtion true hui to ? k baad ka code chalega or agar false hui to : k baad ka code chalega.

// 12 > 13 ? console.log("true") : console.log("false");

//^ typeof in JS:-

// console.log(typeof "tarun");             // string
// console.log(typeof 12);                  // number
// console.log(typeof true);                // boolean

//^ instanceof in JS:-

// let a = [];
// console.log(a instanceof Array);         // true

// let b = {};

// console.log(b instanceof Object);        // true

//~ Note -> Instanceof reference value k liye hi use kiya jaata hai.

//? Control flow in JS:-

//^ If else statement:-

// if (12 > 15) {
//   console.log("correct");
// } else {
//   console.log("wrong")
// }

//~ Note -> If k condition ki statement sahi hogi to if ka bloack chalega nahi to else wala chal jayega.

//^ Switch case:-

// switch (3) {
//   case 1:
//     console.log("case 1");
//     break;
//   case 2:
//     console.log("case 2");
//     break;
//   case 3:
//     console.log("case 3");
//     break;
//   default:
//     console.log("har jagha chalunga me to!");
//     break;
// }

//^ Early return statement:-

//* Wrong way:-

// function myVal(val) {
//   if (val < 100) return "A"
//   if (val < 75) return "B"
//   if (val < 50) return "C"
//   else return "D"
// }

// console.log(myVal(12));

//~ Note -> Is condition me ye pehli condition pe hi stuck reh jayega to hum bade se chota ma likhte hue hum chote se bada patter se likhte hai.

//* Right way:-

// function getVal(val) {
//   if (val < 25) return 'D'
//   if (val < 50) return "C"
//   if (val < 75) return "B"
//   else return 'A'
// }
// console.log(getVal(84));

//* Some questions:-

//* Q1-> Make a grade system for the students so catagrized by his/her scores...?

// function getGrade(score) {
//   if (score >= 90 && score <= 100) return "A+"
//   if (score >= 80 && score <= 89) return "A"
//   if (score >= 70 && score <= 79) return "B"
//   if (score >= 60 && score <= 69) return "C"
//   if (score >= 50 && score <= 59) return "D"
//   if (score >= 40 && score <= 49) return "E"
//   if (score >= 33 && score <= 39) return "F"
//   if (score >= 0 && score < 33) return 'fail'
//   return "Invalid marks😒"
// }

// console.log(getGrade(91))

//* Q2-> Make a programme of rock,paper & scissor game...?

// function rps(user, comp) {
//   if (user === comp) return "drawn";
//   if (user === "rock" && comp === "scissor") return "user";
//   if (user === "scissor" && comp === "paper") return "user";
//   if (user === "paper" && comp === "rock") return "user";
//   return "comp";
// }

// console.log(rps("scissor", "scissor"));

//? Loops in JS:-

//^ For loop:-

//* Pattern:-

// for (start; end; change) {
//   //code
// }

//* Example:-

// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

//^ While loop:-

//* Pattern:-

// start
// while (end) {
//   //code
// }

//* Example:-

// let i = 1;

// while(i<20){
//   console.log(i);
//   i++;
// }

//^ do While loop:-

//* Pattern:-

// // start
// do {
//   // code
//   change
// } while (end);

//* Example:-

// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

//~ Note -> Is loop me condition wrong hone pe bhi ek baar jarur chalega.

//^ break statement:-

// for (let i = 1; i < 10; i++) {
//   console.log(i);
//   if (i === 4) break;           // 4 pe rukega
// }

//^ continue statement:-

// for (let i = 1; i < 10; i++) {
//   if (i === 4) continue;           // 1 se 3  or fir 4 na hokr 5 se print hoga
//   console.log(i);
// }

//^ Some questions related to loops:-

//* Q1- Print number from 1 to 10 by for loop...?

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

//* Q2- Print number from 10 to 10 by for loop...?

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

//* Q3- Print even number between 1 to 20...?

// let i = 1;

// while (i < 21) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
//   i++;
// }

//* Q4- Print odd number between 1 to 16...?

// let i = 1;

// while (i < 16) {
//   if (i % 2 === 1) {
//     console.log(i)
//   }
//   i++;
// }

//* Q5- Print table for any number you want...?

// let number = 5;

// for (let i = 1; i < 11; i++) {
//   console.log(`${number} X ${i} = ${number * i}`)
// }

//* Q6- Print sum of 0 to 100 numbers by loop...?

// let sum = 0;

// for (let i = 1; i < 101; i++) {
//   sum += i;
// }
// console.log(sum);

//* Q7- Print all the numbers between 1 to 50 which are divisible by 3...?

// for (let i = 1; i < 51; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

//* Q8- Ask a number from the user and print number wether if it is even or odd...?
//* 2 "is even" ,

// let number = Number(prompt("Enter a number"));

// for (let i = 1; i <= number; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is Even number`)
//   } else {
//     console.log(`${i} is Odd number`)
//   }
// }

//* Q9- Check the ranged number which are divisible by 3 and 5...?

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

//* Q10- Run a loop to 100 and stop when the first multiple of 7...?

// for (let i = 1; i < 101; i++) {
//   if (i % 7 === 0) {
//     break;
//   }
//   console.log(i);                   // 7 se phle rukega 6 pe
// }

// for (let i = 1; i < 101; i++) {
//   console.log(i);                   // 7 pe hi ruk jayega
//   if (i % 7 === 0) {
//     break;
//   }
// }

//* Q11- Run a loop to 20 and skip multiples of 3...?

// for (let i = 1; i < 21; i++) {
//   if (i % 3 === 0) continue;
//   console.log(i);
// }

//* Q12- Run a loop to 20 and get 5 odd numbers from the start...?

// let count = 0;
// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 1) {
//     count++;
//     console.log(i);
//   }
//   if (count === 5) {
//     break;
//   }
// }

//* Q13- Run a loop to 100 and get start 10 multiples of 5...?

// let count = 0;
// for (let i = 1; i < 101; i++) {
//   if (i % 5 === 0) {
//     count++;
//     console.log(i);
//   }
//   if(count === 10){
//     break;
//   }
// }

//? Functions in JS:-

//~ Note-> Jab hume koi code turant na chalakr jab chalana hai jab hum chahe to vo hum ek function ki madad se kr skte hai jab banakr hum usey call krte hai.

//^ Declaration/Statement function:-

// function fun() {
//   console.log("hello world");
//   console.log("hello world");
//   console.log("hello world");
//   console.log("hello world");
//   console.log("hello world");
// }
// fun();

//^ Function expression:-

// const func = function () {
//   console.log('hello world');
// }
// func();

//* Note => Isme humara variable ka name hi function ka name hai jissey hum ussey call krne me use krenge.

//^ Arrow function:-

// const func = () => {
//   console.log("Hello world");
// }
// func();

//^ Parameter and arguments in function:-

//* Eg1:-

// function danceFun(dancer) {
//   console.log(`${dancer} is dancing.`);
// }

// danceFun('Michel Jeckson');
// danceFun('Tiger Shroff');
// danceFun('Hritik Roshan');

//* Eg2:-

// function sum(v1, v2) {
//   console.log(v1 + v2);
// }
// sum(2, 5);
// sum(21, 12);

//~ Note => Jo function name k just baad braces me hai vo hai parameters and jo function call krte me braces me hai vo h arguments.

//^ Default parameters in function:-

// function add(num1 = 0, num2 = 0) {
//   console.log(num1 + num2)
// }
// add(5, 6);

//~ Note => hum default me parameters ki values ko pass kr sakte hai.

//^ Rest operator for function:-

//* Eg1:-

// function values(...val) {
//   console.log(val);
// }
// values(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);          // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//* Eg2:-

// function values(a, b, c, ...val) {
//   console.log(a, b, c, val);
// }
// values(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);           // 1 2 3 [ 4, 5, 6, 7, 8, 9, 10 ]


//^ Return in function:-

//* Eg1:-

// function printVal() {
//   return 5;
// }
// let val = printVal();
// console.log(val);

//* Eg2:-

// function sum(val){
//   return 5 + val;
// }

// let sumRes = sum(6);
// console.log(sumRes);

//^ Pure/Impure funtions in JS:-

//^ Pure function:-

// let num = 10;
// function myFunc() {
//   console.log(num);
// }
// myFunc();

//~Note-> Isme num ki value ko koi change nai hua to ye function pure hai.

//^Impure funtions in JS:-

// let num = 10;
// function myFunc() {
//   console.log(num++);
// }
// myFunc();

//~Note-> Isme num ki value ko change ki h increment se to ye function pure hai.


//^ Closuers in JS:-

// function getVal() {
//   let a = 10;
//   return function () {
//     console.log(a)
//   }
// }
// getVal()();

//~ Note-> Isme hum parent function me banaya hua variable ki value ko andar child function me excess kr skte hai.

//^ Lexical scoping in JS:-

// function abc() {
//   let a = 10;
//   return function def() {
//     let b = 20;
//     return function ghi() {
//       let c = 30;
//     }
//   }
// }

//~ Note-> Isme a ko poore abc function me excess kara ja skta hai,b ko poore def k andar or c ko poore ghi me excess kia jayega.


//^ IIFE (Immedietly invoked function expression) in JS:-

// (function abc() {
//   console.log("hello world");
// })()


//^ Hoisting for functions in JS:-

// myFun();

// function myFun() {
//   console.log("hello world");
// }


//~ Note -> hoisting functions me support jaha funtion statement/declaration ya named hoga vha krti hai but kuch jagha jese function expression of arraw function ki condition me ye work  nahi krti h.


//* Some questions for practice:-

//* Q1- find the total of the marks of the sudents in exam that is given as parameters...?

// function calculateMarksAddition(...marks) {
//   let total = 0;
//   marks.forEach(function (val) {
//     total += val;
//   })
//   return total;
// }
// let res = calculateMarksAddition(66, 78, 55, 46, 51);
// console.log(res);


//* Q2- fix this question using early return:-

// function calculateAge(age) {
//   if (age > 18) return "Allow to vote";
//   return "Don't allow to vote"
// }
// console.log(calculateAge(18));

//* Q3- Pass a function inside a function and exicute it:-

// function myFunc(val) {
//   val();
// }
// myFunc(function () {
//   console.log("Hey")
// })

//* Q4- Pridict the output:-

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   }
// }

// let counter = outer();
// counter();
// counter();


//* Q5- Make this function IIFE:-

// (function myFunc(){
//   console.log("hello world")
// })();



