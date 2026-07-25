//^ Basic types Typescript termologies for defining:-

// import BottleMaker from "./payment";

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

//* Access Modifiers (public,private,protected):-

//* with public key:-

// class BottleMaker {
//   constructor(public name: string) {}
// }

// let b1 = new BottleMaker('Milton');
// b1.name = "huihui"                          // It changed easily without any error.

//* with private key:-

// class BottleMaker {
// constructor(private name: string) {}
// }

// let b1 = new BottleMaker('Milton');
// b1.name = "huihui"                          // It changed easily for output but error showed by Typescript.

//* Changing concept of public & private keyowrds:-

//* Public:-

// class BottleMaker {
//   constructor(public name: string) {
//     this.name = name;
//   }

//   changing(){
//     this.name = "Cello";
//   }
// }

// let b = new BottleMaker("Milton");
// b.changing();

//* Private:-
// class BottleMaker {
//   constructor(private name: string) {
//     this.name = name;
//   }

//   changing(){
//     this.name = "Cello";
//   }
// }

// let b = new BottleMaker("Milton");
// b.changing();

//~ Note -> Both can be changeable even in the method because this method is also inside the BottleMaker class so it will excessable and changeble too but real example is in the extends class in Typescript.

//* Main example of public and private keyword:-

// class BottleMaker {
//   private halua: string = 'halue';
//   constructor(private name: string) {}
// }

// class MetalBottleMaker extends BottleMaker {
//   constructor(name: string) {
//     super(name);
//   }
//   getValue() {
//     console.log(this.name, this.halua);
//   }
// }

// let b1 = new MetalBottleMaker('Chilton');
// b1.getValue();

//~ Note => Both are not excessable because those are in the BottleMaker class and those are private so for extend classes it can't be ised.

//* Main example of protected keyword:-

// class BottleMaker {
// protected name = 'Milton';
// }

// class MetalBottleMaker extends BottleMaker {
// public material = 'Brass';

// getChange() {
// this.name = 'Cello';
// }
// }

// let b1 = new MetalBottleMaker();
// b1.getChange();
// b1.name = "halua";                 // Here it throw error it can't change the name outside it's class and also extended class.

//* Readonly properties:-

// class User {
//   constructor(public readonly name: string) {}
//   getChange() {
//     this.name = 'hellew';         //  If i paste readonly before accessmodifier then it show error in file but code still compile successfully.
//   }
// }

// let u1 = new User('Tarun');
// u1.getChange();

//* Optional properties in classes:-

// class User {
//   constructor(
//     public name: string,
//     public age: number,
//     public gender?: string,        // now it become Optional if given very gud if not then pass
//   ) {}
// }

// let u1 = new User('Tarun', 30, 'male');
// let u2 = new User('Arun', 24);

//* Getter and setter in Typescript:-

// class User {
//   constructor(
//     public _name: string,
//     public _age: number,
//   ) {}
//   get name() {
//     return this._name;
//   }
//   set age(value: number) {
//     this._age = value;
//   }
// }

// let u1 = new User('Tarun', 31);

//* Static members:-

// class shery {
//   static version = 1.0;

//   static getRandomNumber() {
//     return Math.random();
//   }
// }

//* Abstract classes and methods:-

// class CookingEsentials {
//   constructor(
//     protected gas: number,
//     public gasKaName: string,
//   ) {}
// }

// class Sabji extends CookingEsentials {}
// class Cake extends CookingEsentials {}

//^ Functions in Typescript:-

//* function types:-

// function abcd(name: string, age: number, cd: (value: string) => void) {
//   cd('hello');
// }

// abcd('Tarun', 31, (value: string) => {
//   console.log(value);
// });

//* Optional parameter:-

// function abc(name: string, age: number, gender?: string) {
//   console.log(name, age, gender);
// }
// abc('Tarun', 31, 'male');
// abc('Lucbutaq', 22);

//~ Note -> gender is Optional if it is defined very gud if not then pass it as undefined.

//* Default parameter:-

// function abc(
//   name: string,
//   age: number,
//   gender: string = 'Not to be disclosed',
// ) {
//   console.log(name, age, gender);
// }
// abc('Tarun', 31, 'male');
// abc('Lucbutaq', 22);

//~ Note -> gender is given as defaul value if it is defined very gud it will replace default value but if not then give default value as it is.

//* Rest operator:-

// Eg1:-

// function abc(...arg: number[]) {
//   console.log(arg);
// }
// abc(1, 2, 3, 4);

// Eg2:-

// function friend(...group: string[]) {
//   console.log(group);
// }
// friend('Mohit', 'Hitesh', 'Utkarsh');

//* Spread operator:-

// let arr = [1, 2, 3, 4];
// let arrCopy = [...arr];
// console.log(arrCopy);

//* Function overloading:-

// function abc(a: string): void;
// function abc(a: string, b: number): number;

// function abc(a: any, b?: any) {
//   if (typeof a === 'string' && b === undefined) {
//     console.log('hey');
//   }
//   if (typeof a === 'string' && b === 'number') {
//     return 123;
//   } else throw new Error('something is wrong');
// }

// abc('hello');
// abc('hello', 123);

//* Generic function:-

// function log<T>(a: T) {
//   console.log(a);
// }
// log<number>(12);
// log<string>('tarun');

//* But we don't want to tell the type when we give arguments to the function when call.

// function log<T>(a: T) {
//   console.log(a);
// }
// log(12);
// log('tarun');

//* Generic interfaces:-

// interface Halua<T> {
//   name: string;
//   age: number;
//   key: T;
// }

// function abc(obj: Halua<string>) {}

// abc({ name: 'tarun', age: 31, key: 'asakbad' });

//* Generic classes:-

// class BottleMaker<T> {
//   constructor(public key: T) {}
// }

// let b1 = new BottleMaker<string>('hey');
// let b2 = new BottleMaker<number>(5);
// console.log(b1, b2);

//* Generic hack:-

// function abc<T>(a: T, b: T) {
//   // return 'hey' as T;                  // kuch ese type incertion kar sakte h
//   return <T>'hey';                       // kuch ese type incertion kar sakte h
// }

// abc<string>('hey', 'hello');

//~Note -> Everything in Typescript which is written in singe and double couts isn't a string it is called string literals.

//* import and export in Typescript:-

// import { doPayment, getDetails } from './payment';

// doPayment(12);

// let p1 = new BottleMaker(120);
// let p2 = new BottleMaker(1200);

//^ Type casting and type assertion in Typescript:-

//* Type assertion in TS:-

// let a: any = 12;

// (a as string)                   // a ko as string use kro/ya mano ab ap
// (<string>a)

//* Type casting in TS:-

// let a = Number("12");
// console.log(typeof a);          // number

//* Non null assertion operator:-

// let a: null | undefined | string;

// a = "hey";
// // a!                              // ! lagane se ye value ab na hi null or na  undefined hogi.

//* Type guard and typescript utility guards (type narrowing):-

// function abc(arg: number | string) {
//   if (typeof arg === 'number') return 'number';
//   if (typeof arg === 'string') return 'string';
//   else throw new Error('Pagal hai kya bhai');
// }
// console.log(abc(12));
// console.log(abc('hey'));

//* Instance type narrowing:-

// class TvKaRemote {
//   switcOffTv() {
//     console.log('Switching off the tv');
//   }
// }

// class AcKaRemote {
//   switcOffAc() {
//     console.log('Switching off the ac');
//   }
// }

// let tv = new TvKaRemote();
// let ac = new AcKaRemote();

// function switchcOffKaro(device: TvKaRemote | AcKaRemote) {
//   if (device instanceof TvKaRemote) {
//     device.switcOffTv();
//   }
//   if(device instanceof AcKaRemote){
//     device.switcOffAc();
//   }
// }
