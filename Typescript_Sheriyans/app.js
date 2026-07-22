"use strict";
//^ Basic types Typescript termologies for defining:-
Object.defineProperty(exports, "__esModule", { value: true });
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
// Note -> By default a is any so you can give it any datatype you want but why we use Typescript when we use any as a variable declaration then use Javascript so stricktness will removed here and also all the Typescript rules are disabled here.
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
// Note -> Here it follow type narrowing (we have to spacify that if string value is given for the variable then make it uppercase) .
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
// Note -> Not returning anything then write void after the function name but when it return anything then define it's datatype name there.
//* Null:-
// let a: null;
// a = 12;    // error dega ye.
//* Undefined:-
// let a: undefined;
// Note => Undefined means koi value de hi nihi rakhi.
//* Never:-
function abc() {
    while (true) { }
}
abc();
console.log('hello');
//# sourceMappingURL=app.js.map