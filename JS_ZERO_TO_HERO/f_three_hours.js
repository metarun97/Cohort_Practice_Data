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


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! Topic 6 [Memory conept in JS]:-

//^ There are two types of memory:-
// Stack -> [for premetive datatypes]
// Heap -> [for reference datatypes]


//^ Stack memory example:-

// let userYoutube = "metarundotio";

// let anotherYoutubeuser = userYoutube;
// anotherYoutubeuser = 'techTarun97';

// console.log(userYoutube);                //* metarundotio
// console.log(anotherYoutubeuser);         //* techTarun97


//^ Heap memory example:-

// let user = {
//   name: "Tarun",
//   age: 29
// }

// let user2 = user;

// user2.name = "Manish";
// console.log(user.name);                   //* Manish
// console.log(user2.name);                  //* Manish

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! Topic 7 [Strings in JS]:-

//^ Concat the strings:-

// let name = "Tarun";
// let repos = 4;
// console.log("I am " + name + " and i have " + repos + " on github");

//^ Template literals technique:-
// console.log(`I am ${name} and i have ${repos} on github`);


//^ Another way to declare a string:-

// let gameName = new String("Cricket2026");

// console.log(gameName[0]);              //* C
// console.log(gameName.__proto__);       //* {} empty object but it is not an empty (it has all string methods)

// let gameKaName = 'Callofduty';

// console.log(gameKaName.charAt(2))         //* l
// console.log(gameKaName.indexOf("d"));     //* 6

// let userInp = "     shopData    ";

// console.log(userInp);
// console.log(userInp.trim());


// let url = "http://localhost:3000/data%user1";

// console.log(url.replace("user1", "user2"));
// console.log(url.includes(3000));
// console.log(url.includes("data%"));

//^ All String methods:-

//& 1. length

// String ki length (characters ki total count) deta hai.

// let name = "Tarun";
// console.log(name.length); // 5

//& 2. toUpperCase()

// Saare letters ko uppercase me convert karega.

// console.log("hello".toUpperCase()); // HELLO

//& 3. toLowerCase()

// Saare letters ko lowercase me convert karega.

// console.log("HELLO".toLowerCase()); // hello

//& 4. trim()

// Aage-peeche ke extra spaces hatata hai.

// let str = "   hello   ";
// console.log(str.trim()); // "hello"

//& 5. trimStart() / trimEnd()

// Sirf starting ya ending spaces hatata hai.

// "   hi".trimStart(); // "hi"
// "hi   ".trimEnd();   // "hi"

//& 6. includes()

// String ke andar koi word hai ya nahi — true/false.

// "javascript is cool".includes("cool"); // true

//& 7. startsWith()

// String kisi specific word se start hota hai ya nahi.

// "Hello world".startsWith("Hello"); // true

//& 8. endsWith()

// String kisi word pe end hota hai ya nahi.

// "image.png".endsWith(".png"); // true

//& 9. indexOf()

// Word ka starting index batata hai. (Mil na paye toh -1)

// "banana".indexOf("na"); // 2

//& 10. lastIndexOf()

// Peeche se index search karta hai.

// "banana".lastIndexOf("na"); // 4

//& 11. slice(start, end)

// String ka ek hisa kaat ke return karta hai.

// "JavaScript".slice(0, 4); // "Java"
// "JavaScript".slice(4);    // "Script"

//& 12. substring(start, end)

// Slice jaise hi, but negative values support nahi karta or isme end include nai h.

// "Hello".substring(1, 4); // "ell"

//& 13. substr(start, length)

// (Old method – still used)
// Start se given length ka text deta hai.

// "Apple".substr(1, 3); // "ppl"

//& 14. replace()

// String ka pehla matching part replace karega.

// "Hello world".replace("world", "Tarun");
// // "Hello Tarun"

//& 15. replaceAll()

// Saare matching words replace karega.

// "ha ha ha".replaceAll("ha", "ho");
// // "ho ho ho"

//& 16. split()

// String ko array me tod deta hai.

// "apple,banana,kiwi".split(",");
// // ["apple", "banana", "kiwi"]

//& 17. charAt(index)

// Specific index pe character deta hai.

// "Tarun".charAt(2); // "r"

//& 18. charCodeAt(index)

// ASCII / Unicode number deta hai.

// "A".charCodeAt(0); // 65

//& 19. repeat(count)

// String ko multiple times repeat karega.

// "ha".repeat(3); // "hahaha"

//& 20. concat()

// Strings ko jod deta hai.

// "Hello".concat(" ", "Tarun");
// // "Hello Tarun"

//& 21. padStart(targetLength, padString)

// String ke aage padding add karta hai.

// "5".padStart(3, "0"); // "005"

//& 22. padEnd(targetLength, padString)

// String ke end me padding.

// "5".padEnd(3, "0"); // "500"

//& 23. toString()

// Value ko string me convert karta hai.

// (123).toString(); // "123"

//& 🔥 Bonus: Template Literals (String Method nahi but useful)

// Backticks ( ) ke andar variable likh sakte ho:

// let name = "Tarun";
// console.log(`Hello ${name}, kaise ho?`);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! Topic 8 [Numbers and Math in JS]:-

//^ Numbers in JS:-

// let score = 400;
// console.log(score);                            //* 400

// let balance = new Number(100);
// console.log(balance);                          //* [Number: 100]


//& Change balance variable into a string and find the length:-

// console.log(balance.toString().length);        //* 3
// console.log(balance.toFixed(1));               //* 100.0

// let number = 254.751;
// console.log(number.toPrecision(3))             //* 255


// let number = 2547.751;
// console.log(number.toPrecision(3))             //* 2.55e+3 (ye exponencial me bhi de diya last me value)

// let money = 1000000;
// console.log(money.toLocaleString());           //* USA standard (en-US) -> 1,000,000
// console.log(money.toLocaleString("en-IN"));    //* Indian standard (en-IN) -> 10,00,000

//^ Math in JS:-

// console.log(Math.floor(2.6));                   //* 2
// console.log(Math.ceil(5.6));                    //* 6
// console.log(Math.round(3.6));                   //* 4
// console.log(Math.min(2, 7, 8, 6, 15));          //* 2
// console.log(Math.max(6, 45, 75, 14));           //* 75


// console.log(Math.random());                         //* It give number between 0 to 1.
// console.log(Math.floor(Math.random() * 10) + 1)     //* Ab ye hume 1 se 10 tak k numbers dega bina kisi dacimal k.
