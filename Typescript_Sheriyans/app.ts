//^ Basic types Typescript termologies for defining:-

//* Primitive (number, sting, boolean):-

// let a = 12;
// let b = 'Twelve';
// let c = true; // or false both

//* Arrays:-

// let arr = [1, 2, 3, 'four'];
// let arr2 = [1, 2, 3, { number: 'four' }, { number: 5 }];

//* Tuples:-

// let arr: [string, boolean] = ['tarun', true];
// let arr2: [string, number, boolean] = ['tarun', 5, false];

//* Enums:-

// enum userRoles {
//   ADMIN = 'admin',
//   USER = 'user',
//   SUPER_ADMIN = 'super_admin',
// }

//* Any:-

// let a;

//~ Note -> By default a is any so you can give it any datatype you want but why we use Typescript when we use any as a variable declaration then use Javascript so stricktness will removed here and also all the Typescript rules are disabled here.

// a = "tarun";
// a = 5;

//* Any example:-

// let a: any;

// a = 15;
// a = "hello";
// a.toUpperCase();

// This is wrong code because it fail for the number but passed with string.

//* Unknown:-

// let a: unknown;

// a = 15;
// a = 'tarun';

// if(typeof a === "string"){
//   a.toUpperCase();
// }

//~ Note -> Here it follow type narrowing (we have to spacify that if string value is given for the variable then make it uppercase) .

//* Void:-

// function abc(): void {
// console.log('hello');
// }

// function abc(): string {
//   return "hello";                 // string returning
// }

// function abc(): number {
//   return 5;                       // number returning
// }

//~ Note -> Not returning anything then write void after the function name but when it return anything then define it's datatype name there.

//* Null:-

// let a: null;

// a = 12;    // error dega ye.

//* Undefined:-

// let a: undefined;

//~ Note => Undefined means koi value de hi nihi rakhi.

//* Never:-

// function abc():never {
//   while (true) {}
// }
// abc();
// console.log('hello');

//^ Type inference:-

//* Understanding type inference:-

//~ Note -> Hum nahi btate ki vo value kis datatype ko belong karti h to ab Typescript khudse pta krenge inference kregi ki value ka datatype kya h ye h type inference.

// let a: number;       // Ese na btaye tab type inference h
// a = 12;

// let a = 12;          // infered value number
// let b = "Twelve";    // infered value string

//* Type annotations:-

// let a: number;
// let b: string;
// let c: boolean;

//~ Note -> Those are the way to write type annotations.

// This is alse a union way of writing variables in this type annotations.

// let a: string | number | boolean;

// a = 12;
// a = 'twelve';
// a = true;

//* Interfaces abd Type Aliases:-

//* Defining interfaces:-

// interface User {
// name: string;
// email: string;
// password: string;
// gender?: string;
// }

//* Using interfaces to define object shapes:-

// function abc(obj: User) {}
// abc({
//   name: 'tarun',
//   email: 'tarun@mail.com',
//   password: 'tarun@123',
//   gender: 'male',
// });

//* Extending interfaces:-

// interface User {
//   name: string;
//   email: string;
//   password: string;
// }

// interface Admin extends User {
//   isAdmin: boolean;
// }

// function abc(obj: Admin) {}

//~ Note => Now admin has user's values and also it's given vale for further use.

// interface Abcd {
// name: string;
// }

// interface Abcd {
// email: string;
// }

// function abc(obj: Abcd) {}

//~ Note => If we give differ values to same interface name it will merge the values in sunge interface.

//* Type Aliases:-

// type sankhya = number;
// let a: sankhya;

//* Better usecase of type aliases:-

// EG1:-
// type value = number | string | null;
// let a: value;

// EG2:-
// type arg = string | null;
// function abc(obj: arg) {}
// abc("hello");               ☑️
// abc(null);                  ☑️

//* Unions and itersections types:-

//*    | ->  Union
//*    & ->  intersection

// let a: string | number;  // ya to string ya fir number
// let b: string & null;    // null bhi hi sakta hai or string bhi to ye ese degaine nai hota further kuch create k time detail me samjha jayega ye.

// type User = {
//   name: string;
//   email: string;
// };

// type Admin = User & {
//   getDetails(user: string): void;
// };

// function abc(a:Admin){
//   // a.                      // it holds all details of user and a method named getDetails
// }

//* Key differences between type and interfaces:-

// type abc = number;
// type abc = string;

//~ Note -> They don't merged same as interfaces it will throw error.

// type => Type defne karna,union and merger banana iska kaam hota h.
// interface => Object ka shape define karna.

//* Classes in Typescript:-

// class Device {
//   name = 'refrigirator';
//   company = 'LG';
//   price = 12000;
//   color = 'gray';
// }

// let b1 = new Device();
// let b2 = new Device();

//~ Note -> We don't want that ki har device ka data same ho.

//* Class and constructor:-

// class BottleMaker {
//   constructor(
//     public brand: string,
//     public color: string,
//     public price: number,
//     public metal: string,
//   ) {}
// }

// let b1 = new BottleMaker('Milton', 'brassy', 1200, 'brass');
// let b2 = new BottleMaker('Cello', 'transparent', 120, 'plastic');


//
