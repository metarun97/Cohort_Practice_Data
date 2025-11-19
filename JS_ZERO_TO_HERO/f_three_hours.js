//! Topic 1 [let,var & const keywords in JS]:-

// const accountId = 1455515;
// let accountEmail = "mekaps@mail.com";     //* Then
// var accountpassowrd = '12345';            //* Then
// accountCity = "BSR";

// accountId = 2;   // not allowed


// accountEmail = "kapsbro@mail.com";        //* Now
// accountpassowrd = "121212";               //* Now
// accountCity = "GZB";
// let accountState;                         //* undefined

//^ Note => Jab kisi variable ko value na di jaye to vo defaut me undefined set ho jati h,

// console.table([accountId, accountEmail, accountpassowrd, accountCity,accountState]);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! Topic 2 [Datatypes & ECMA Standards in JS]:-

// ^ ECMA Standards:-

'use Strict'                                 //* treat all code as newer version for JS.

// alert(3 + 3);                             //* ReferenceError: alert is not defined (we are using node.js not browser)

// console.log(3                             //* Code readability should be high
//   + 3
// )



// let name = "Tarun Upadhyay";
// let age = 29;
// let isLOggedIn = false;


//^ Datatypes in JS:-

// number
// bigInt
// string => '' or ""
// boolean => false/true
// null => Standalone value hai ye means that you assign a variable and keep it empty then use null(khali hai).
// undefined => You declare a variable but not assigen it any value.
// symbol => unique

//& typeOf => It find which datatype it was.

// console.log(typeof 2);                     //* number
// console.log(typeof "Tarun");               //* string
// console.log(typeof true);                  //* boolean
// console.log(typeof null);                  //* object
// console.log(typeof undefined);             //* undefined


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! Topic 3 [Datatypes conversion confussion in JS]:-

//& String (number) to number convertion:-

// let age = '33';
// console.log(typeof age);         //* string

// let convAge = Number(age);
// console.log(typeof convAge);     //* number

//& String (number+alphabets) to number convertion:-

// let age = "33ab";
// console.log(typeof age);          //* string

// let convAge = Number(age);
// console.log(convAge);             //* NaN (Not a number jo iski fullform h ye nature me number hi h)
// console.log(typeof convAge);      //* number

//& String (alphabets) to number convertion:-

// let name = "Tarun";
// console.log(typeof name);          //* string

// let convName = Number(name);
// console.log(convName);             //* NaN (Not a number jo iski fullform h ye nature me number hi h)
// console.log(typeof convName);      //* number

//& null to number convertion:-

// let temp = null;
// console.log(typeof temp);          //* object

// let convTemp = Number(temp);
// console.log(convTemp);             //* 0
// console.log(typeof convTemp);      //* number

//& undefined to number convertion:-

// let temp = undefined;
// console.log(typeof temp);           //* undefined

// let convTemp = Number(temp);
// console.log(convTemp);             //* NaN
// console.log(typeof convTemp);      //* number

//& boolean to number convertion:-

// let temp = fasle;
// let temp = true;
// console.log(typeof temp);           //* boolean

// let convTemp = Number(temp);
// console.log(convTemp);             //* 1
// console.log(typeof convTemp);      //* number


//& number to boolean convertion:-

// let numval = true;
// console.log(typeof numval);

// let convBoolNum = Boolean(numval);  //* boolean
// console.log(convBoolNum)            //* true
// console.log(typeof convBoolNum)     //* boolean

//& number to string convertion:-

// let isNumVal = 33;
// console.log(typeof isNumVal)

// let changeNumToStr = String(isNumVal);  //* number
// console.log(changeNumToStr)             //* 33
// console.log(typeof changeNumToStr)      //* string


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! Topic 4 [Why string to number in JS]:-

//^ Some mathematical operations:-

// console.log(2 + 2)                          //* 4
// console.log(4 - 2)                          //* 2
// console.log(2 * 2)                          //* 4
// console.log(2 ** 3)                         //* 8
// console.log(4 / 2)                          //* 2
// console.log(14 / 3)                         //* 4.66667

//^ Some mathematical operations (counfussion one):-

// console.log(5 + 6 + "7")                      //* 117
// console.log("5" + 6 + 7)                      //* 567

// Note-> JS me mathematical operations left se right ki or hote hai to left ki values add hokr uske next me add ho jati h.

// console.log(true)                             //* true
// console.log(+true)                            //* 1
// console.log(+'')                              //* 0

// Note-> JS me + operator conversion kr deta hai jese ki uppr k do console me kia h.

//^ Post increment:-

// let a = 5;
// let b = a++;
// console.log(b)                            //* 5
// console.log(a)                            //* 6

//^ Pre increment:-

// let c = 5;
// let d = ++c;
// console.log(d)                            //* 6
// console.log(c)                            //* 6

//^ Post decrement:-

// let e = 5;
// let f = e--;
// console.log(f)                            //* 5
// console.log(e)                            //* 4

//^ Pre decrement:-

// let g = 5;
// let h = --g;
// console.log(h)                            //* 4
// console.log(g)                            //* 4

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! Topic 5 [Comparison of datatypes in JS]:-

// console.log(2 > 1)                           //* true
// console.log(2 >= 1)                          //* true
// console.log(2 < 1)                           //* false
// console.log(2 <= 1)                          //* false
// console.log(2 == 1)                          //* false
// console.log(2 != 1)                          //* true

// console.log(null > 0)                        //* false
// console.log(null == 0)                       //* false
// console.log(null >= 0)                       //* true

// console.log(undefined == 0)                  //* false
// console.log(undefined > 0)                   //* false
// console.log(undefined < 0)                   //* false

//^ Strict check:-

// console.log('2' === 2)                       //* false


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! Topic 5-A [Revision of datatypes in JS]:-

//^ Premetive datatypes (Passed by value):-

// - String
// - Number
// - Boolean
// - BigInt
// - null
// - undefined
// - Symbol

// let score = 100;
// let userName = "Tarun";
// let isLoggedIn = true;
// let bigNumber = 15461247556n;
// let cityTemp = null;
// let cityName;
// let id = Symbol("123");
// let anotherId = Symbol("123");
// console.log(id === anotherId);            //* false

//^ Non-premetive datatypes (Passed by reference):-

// Array
// Object
// Function

// let heros = ["Saktiman", "Nagraj", "Goga"];
// let myDetails = {
//   name: "Tarun",
//   age: 29
// }

// let myFunc = function () {
//   console.log("Hello world")
// }

// console.log(typeof heros);                    //* object
// console.log(typeof myDetails);                //* object
// console.log(typeof myFunc);                   //* function


