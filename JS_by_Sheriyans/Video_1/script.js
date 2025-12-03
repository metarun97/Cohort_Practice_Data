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


//~ Note -> hoisting functions me support jaha funtion statement/declaration ya named hoga vha krti hai but kuch jagha jese function expression of arraw function ki condition me ye work sirf var keyword k liye kregi or const ,ket me nahi krti h.


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



//* Some programmes:-

//* BMI Calculator:-

// function bmiCalulater(weight,height){
//   return weight / (height * height);
// }

// console.log(bmiCalulater(99.1,1.73).toFixed(2));

//* Discounter Calculator:-

// function discountFun(discount) {
//   return function (price) {
//     return price - price * discount / 100;
//   }
// }

// let discounter = discountFun(20);
// let res = discounter(500);
// console.log(res);


//* Counter by using closure:-

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   }
// }

// let c = counter();
// console.log(c());             // 1
// console.log(c());             // 2

// let d = counter();
// console.log(d());             // 1

//* Pure function transform a value:-

// function qubeMaker(val) {
//   return val ** 3
// }

// let res = qubeMaker(5);
// console.log(res);

//* Using IFFE function to make Isolated (private) variables:-

// (function myFunc(){
//   const secretPassword = "Tryagainlaterbhaiya12345";
//   console.log(secretPassword);
// })();
// console.log(secretPassword);

//? Arrays in JS:-

//* Creation of array:-

// let arr = [10, 20, 30, 40, 50];
// console.log(arr);

//* Excessing array element in array:-

// let arr = [10, 20, 30, 40, 50];
// console.log(arr[2]);              // 30
// console.log(arr[3]);              // 40
// console.log(arr[20]);             // undefined


//* Modify array element in array:-

// let arr = [1, 2, 3, 4, 5];
// arr[2] = 12;
// console.log(arr);                 // [1, 2, 12, 4, 5]


//* Methods in array:-

// Push:-

// let arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr);                 // [1 ,2 ,3 ,4 ,5 ,6]

//~ Note -> Ye push original array me change kr deta hai.

// Pop:-

// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// console.log(arr);                 // [1 ,2 ,3 ,4]

//~ Note -> Ye pop original array me change kr deta hai.

// Unshift:-

// let arr = [1, 2, 3, 4, 5];
// arr.unshift(0);
// console.log(arr);                 // [0 ,1 ,2 ,3 ,4 ,5]

//~ Note -> Ye unshift original array me change kr deta hai.

// Shift:-

// let arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log(arr);                 // [2 ,3 ,4 ,5]

//~ Note -> Ye shift original array me change kr deta hai.

// splice:-

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2,1);
// console.log(arr);                 // [1 ,2 ,4 ,5]

//~ Note -> Ye splice original array me change kr deta hai.

// Slice:-

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0,3);
// console.log(newArr);                 // [1 ,2 ,3]

//~ Note -> Ye slice ek new copy deta hai array ki usme change krke deta hai or isme (0,3) me index 3 tak na hokr ussey phle tak k element hi remove krke deta hai.

// Reverse:-

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);                 // [5, 4, 3, 2, 1]

//~ Note -> Ye reverse original array me change kr deta hai.

// Sort:-

// let arr = [16, 23, 13, 4, 45];
// let resRev = arr.sort();
// console.log(resRev);                 //  [13, 16, 23, 4, 45]

//~ Note -> Ye sort original array me change na krke array ke new copy me change krke deta hai,isme ye sort method alphabetical sort k liye to siple sahi h leking number sorting k liye hume main sort functioning ka use krna chaiye jisme function pass kia jata hai.

//* Main working of sort method:-

//* Ascending sorting:-

// let arr = [16, 23, 13, 4, 45];

// let resRev = arr.sort(function(a,b){
//   return a - b;
// })

// console.log(resRev);


//* Descending sorting:-

// let arr = [16, 23, 13, 4, 45];

// let resRev = arr.sort(function (a, b) {
//   return b - a;
// })

// console.log(resRev);

//* forEach method:-

// let arr = [12, 13, 14, 15, 16];

// arr.forEach(function (val) {
//    console.log(val * 2);             // 24, 26, 28, 30, 32
// })

//* Map method:-

//* Eg1:-

// let arr = [26, 14, 5, 72, 3];

// let resArr = arr.map(function (val) {
//   return val;
// })
// console.log(resArr);                       // [26, 14, 5, 72, 3]

//* Eg2:-

// let arr = [26, 14, 5, 72, 3];

// let resArr = arr.map(function (val) {
//   if (val > 10) return val;
// })
// console.log(resArr);                       // [26, 14, undefined, 72, undefined]


//~ Note -> filter jab banana hai jab apko new array banana hai pichle array k data k basis pe or ek baat ki jab bhi map dekho apne dimag me ek blank array banalo.

//* Filter method:-

// let arr = [1, 2, 3, 4, 5];

// let arrNew = arr.filter(function (val) {
//   if (val > 3) return val;
// })
// console.log(arrNew);                        // [4, 5]

//~ Note -> filter jab banana hai jab apko new array banana hai pichle array k data k basis pe kuch condtion k behalf pe or ye value true ya false base pe new array me store hogi or ek baat ki jab bhi filter dekho apne dimag me ek blank array banalo.


//* Reduce method:-

// let arr = [2, 4, 6, 8, 10];

// let arrRes = arr.reduce(function (acc, curVal) {
//   return acc + curVal;
// },0)

// console.log(arrRes);                         // 30

//~ Note -> reduce tab use hota hai jab hume apne array elements ki value reduce krke ek value me convert krni h single digit type tab use ata h ye.

//* Find method:-

// let arr = [2, 4, 6, 8, 10];

// let resFind = arr.find(function(val){
//   if(val === 2) return val;
// })
// console.log(resFind);

//~ Note -> Ye fist find value ko hi deta hai.

//* Some method:-

// let arr = [2, 4, 6, 8, 10];
// let resSome = arr.some(function (val) {
//   if (val > 4) return val;
// })
// console.log(resSome);

//~ Note -> Kya kuch element array k condition ko satisfy krte hai krte hai agar to true nahi to false.

//* Every method:-

// let arr = [2, 4, 6, 8, 10];
// let resSome = arr.every(function (val) {
//   if (val > 4) return val;
// })
// console.log(resSome);

//~ Note -> Kya sabhi element array k condition ko satisfy krte hai krte hai agar to true nahi to false.

//* Destructuring in Array:-

// let arr = [2, 5, 6, 7];

// let [a, b, , c] = arr;
// console.log(a);                     // 2
// console.log(b);                     // 5
// console.log(c);                     // 7


//* Spread operator in Array:-

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let arr2 = [...arr];
// arr2.pop();
// console.log(arr);                   // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr2);                  // [1, 2, 3, 4, 5, 6, 7, 8]


//* Some questions on array:-

//* Set "red" and "blue" on the first index of array:-

// let colors = ["green", "yellow"];

// colors.splice(1, 0, "red", "blue");
// console.log(colors);               // ['green', 'red', 'blue', 'yellow']

//* Extract middle three elements of array:-

// let arr = [1, 2, 3, 4, 5, 6];

// let newArr =  arr.slice(1, 4);
// console.log(newArr);               // [2, 3, 4]

//* Make square of each number in array:-

// let arr = [2, 4, 6, 8, 10];

// let squareRes = arr.map(function(val){
//   return val * val;
// })
// console.log(squareRes);           // [4, 16, 36, 64, 100]

//* use .filter to keep numbers greater then 10:-

// let arr = [10, 20, 30, 40, 80, 100];

// let resFilter = arr.filter(function (val) {
//   if (val > 10) return val;
// })
// console.log(resFilter);            // [20, 30, 40, 80, 100]

//* use .reduce to sum the array elements:-

//  let arr = [10, 20, 30];

//  let sumRes = arr.reduce(function(acc,currVal){
//   return acc + currVal;
//  },0)
// console.log(sumRes);               // 60

//* use .find to get value less then 10 in the array:-

// let arr = [2, 4, 6, 8, 10];
// let resFind = arr.find(function (val) {
//   return val < 10;
// })
// console.log(resFind);

//* use .some to get value of students marks less then 33 in the array:-

// let marks = [54, 21, 68, 71, 29];

// let resMarks = marks.some(function(val){
//  return val < 33;
// })
// console.log(resMarks);              // true

//* use .every to check all numbers are even in the array:-

// let arr = [2, 4, 6, 8, 10];
// let even = arr.every(function(val){
//   if(val % 2 === 0) return val;
// })
// console.log(even);                  // true

//* Take firstname and lastname in the array by destructuring:-

// let name = ["Tarun","Upadhyay"];
// let [firstname,lastname] = name;
// console.log(firstname);             // Tarun
// console.log(lastname);              // Upadhyay

//* Merge two arrays by using spread operator:-

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// let fullMergerArr = [...arr1,...arr2];
// console.log(fullMergerArr);         // [1, 2, 3, 4]

//* Add IND to arrau by using spread operator:-

// let countries = ["USA", "UK"];
// countries = ['IND',...countries];
// console.log(countries);             // ['IND', 'USA', 'UK']


//? Objects in JS:-

//* Creation of object:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   isEmployNow: false
// }
// console.log(obj);                  // {name: 'Tarun', age: 29, isEmployNow: false}

//* Excessing key's value of object:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   isEmployNow: false
// }

// console.log(obj.name);              // Tarun
// console.log(obj.age);               // 29

//* Modify key's value of object:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   isEmployNow: false
// }

// obj.name = "Vikash";
// console.log(obj);                  // {name: 'Vikash', age: 29, isEmployNow: false}


//* Excessing nested values of key in object:-

// let myDetails = {
//   name: "Tarun",
//   age: 29,
//   address: {
//     colony: "Amar Maya Enclave",
//     city: "Bulandshahr",
//     Pin: 203001,
//     location: {
//       lat: 22.1,
//       lang: 14.2
//     }
//   }
// }

// console.log(myDetails.address.location.lang);   // 14.2

//* Excessing nested values of key in object by destructuring:-

// let myDetails = {
//   name: "Tarun",
//   age: 29,
//   address: {
//     colony: "Amar Maya Enclave",
//     city: "Bulandshahr",
//     Pin: 203001,
//     location: {
//       lat: 22.1,
//       lang: 14.2
//     }
//   }
// }

// let { lang, lat } = myDetails.address.location;
// console.log(lang);                               // 14.2

//* Excess keys and it's values by for in loop for objects:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com"
// }

// for (let key in obj) {
//   console.log(key, obj[key]);
// }


//* Excess Object.keys and Object.enteris of object:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com"
// }

// console.log(Object.keys(obj));                 // ye object ki keys dega
// console.log(Object.entries(obj));              // Array of arrays dega keys & values k form me

//* Spread operators in object:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com"
// }

// let obj2 = {...obj};
// console.log(obj2);                              // {name: 'Tarun', age: 29, email: 'test@test.com'}


//* Object.assign() in object:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com"
// }

// Object.assign({}, obj);                            // {name: 'Tarun', age: 29, email: 'test@test.com'}
// Object.assign({ price: Infinity }, obj);           // {price: Infinity, name: 'Tarun', age: 29, email: 'test@test.com'}


//* Deep cloning in objects:-

//* Not working technique:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com",
//   location: {
//     city: "Bulandshahr",
//   }
// }

// let obj2 = {...obj};
// obj2.location.city = "Hapur";
// console.log(obj2.location.city);             // Hapur
// console.log(obj.location.city);              // Hapur

//~ Note-> Ye nested object ko copy nahi kr pata unka reference de deta h to change copy wale me kro to main object me change ho jate h to safely deep cloning nahi hui h new object me change ab main object me visible ho rahe hai joki nahi hona chaiye.

//* Not working technique:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com",
//   location: {
//     city: "Bulandshahr",
//   }
// }

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.location.city = "Hapur";
// console.log(obj2.location.city);             // Hapur
// console.log(obj.location.city);              // Bualandshahr

//~ Note-> Ye nested ko ese copy krta hai phle us object ko stringify k through string nbanao or parse krke object banakr new object me save krlo ab safely deep cloning ho gai h new object me change ab main object me visible nai honge.

//* Optional chaining in Objects:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com",
//   locations: {
//     city: "Bulandshahr",
//   }
// }

// console.log(obj.location.city);                 // error dega
// console.log(obj?.location?.city);               // undefined


//~ Note-> Ye optional chaining ?. se dikhai gai h jisme means hai object me agr location excess ho to city name ki cheej ko dhundho jo hai ya nahi dekho isme optioning mili hai to do nai undefined do bss.

//* Computed properties in Objects:-

// let role = "admin";

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com",
//   locations: {
//     city: "Bulandshahr",
//   },
//   [role]:"Full-stack Web developer",
// }

// console.log(obj);                               // admin key me Full-stack Web developer bankr object me add ho jayega.


//* Some questions:-

//* Can a boolean and number value become a key in object:-

// let obj = {
//   name: "tarun",
//   42: "bayalees",
//   true: "karle jo krna h"
// }

// console.log(obj[42]);                          // yes possible
// console.log(obj[true]);                        // yes possible

// const user = {
//   "first-name":"Hello Jack",
// }

// console.log(user['first-name'])               // Hello Jack

//* Can a boolean and number value become a key in object:-

// let key = "age";

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com"
// }
// console.log(user, key);                         // 29

//* Destructure the key "first-name" as a variable called firstName:-

// let user = {
//   'first-name':"Tarun",
// }

// let {'first-name':firstName} = user;
// console.log(firstName);

//* Print all keys of an object:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com"
// }

// for (let key in obj) {
//   console.log(key);
// }

//* Print all key value pairs of an object:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com"
// }

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

//* Print all Object.entries of an object:-

// let obj = {
//   name: "Tarun",
//   age: 29,
//   email: "test@test.com"
// }

// Object.entries(obj).forEach(function (val) {
//   console.log(val[0] + ":" + val[1])
// })

//* Copy the object by spread operator:-

// let obj = { a: 1, b: 2 };

// let obj2 = { ...obj };
// obj2.a = 3;
// console.log(obj2.a);                  // 3
// console.log(obj.a);                   // 1

//* Make deep copy of nested object:-

// let obj = { info: { score: 20 } };

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj.info.score = 30;
// console.log(obj2.info.score);         // 30
// console.log(obj.info.score);          // 20

//* Make it optional chaining in object:-

// let obj = {};
// console.log(obj.name.city);           // error
// console.log(obj?.name?.city);         // undefined

//* Use a variable to dynamically assigen a property:-

// let key = "role";

// let obj = {
//   name: "Tarun",
//   [key]: "admin"
// }

// console.log(obj);                     // {name: 'Tarun', role: 'admin'}
