//^ Accertion in TS:-

// let response: any = '42';

// let numericLength: number = (response as string).length;

//* Forcefull type accertion.

// type Book = {
// name: string;
// writer: string;
// };

// let bookString = "{'name':'One thing','writer':'Gary W. Keller & Jay Papasan'}";
// let bookObject = JSON.parse(bookString) as Book;

// console.log(bookObject.name);
// console.log(bookObject.writer);

// const inputElement = document.getElementById('username') as HTMLInputElement;

// let value: any;

// value = 12;
// value = 'hello';
// value = [1, 2, 3];
// value.toUpperCase();

// let newValue: unknown;

// newValue = 12;
// newValue = 'hello';
// newValue = [1, 2, 3];
// newValue.toUpperCase();

//* type guards se hum unknown ko handle kr sakte hia.

// let newValue: unknown;

// newValue = 12;
// newValue = 'hello';
// newValue = [1, 2, 3];

// if (newValue === 'string') {
//   newValue.toUpperCase();
// }

//* type guards used in try and catch block.

// try {
// Your code without error
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   }
//   console.log('Error', error);
// }

//* More strict check for unknown.

// let data:unknown = "chai or code";
// let strData:string = data;               // yaha ye nahi manega ki value string hi hogi
// let strData:string = data as string;     // yaha ye nahi manega ki value string hi hogi to ye as string bhi lega data k liye

//* never uses in TS

// type Role = 'admin' | 'user' | 'superadmin';

// function redirectByRole(role: Role): void {
//   if (role === 'admin') {
//     console.log('Redirect to admin dashboard!');
//     return;
//   }
//   if (role === 'user') {
//     console.log('Redirect to user dashboard!');
//     return;
//   }
//   role;
// }

//* never return anything.

// function neverReturn(): never {
//   while (true) {}
// }

//* Infinite loop hi hote hain hamare servers hamesha run hote rehte hai request aaye to response bhej dete h bss.
