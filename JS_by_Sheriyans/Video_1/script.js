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


