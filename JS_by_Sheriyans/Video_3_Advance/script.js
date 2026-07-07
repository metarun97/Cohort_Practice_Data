//! #####################################################################[JS PART - 3]###############################################################################

//^ Scopes in JS:-
//* Def => Koi bhi variable ki value ko hum kaha kaha excess kr skte hai uske liye scoping use hota h.

//? These are three types:-
//* (1-) Global Scoping:-
// Ese variable ki value poore code me kahi bhi use ki ja skti hai kyuki ye na braces na function kisi me bhi nai likhi gai.

// let a = 10;

//* (2-) Block Scoping:-
// Ese variable ki value { } braces me kahi bhi use ki ja skti hai kyuki vo block scope me bane h.

// {
//   a = 20;
// }

//* (3-) Functional Scoping:-
// Ese variable ki value function(){} function k braces me kahi bhi use ki ja skti hai kyuki vo functional scope me bane h.

// function abc() {
//   let a = 25;
// }


//^ Execution context in JS:-
// * Def => Jab bhi apko sbse pehle function dikhta hai to vo tabhi execution context banata ha iske two phases hote hai.

//? Two phases:-
// & (1-) Memory plase
// Yaha variables ko memory allocate hogi.

// & (2-) Execution plase
// Yaha variables ko execute kia jayega.


//^ Laxical scoping in JS:-
// * Def => JS me Laxical scoping hi use hoti hai isme variable ki physical presence jaha hoti h vaha hi vo usi scope k andar use kia jata skta hai.

// function abc() {
//   let a = 10;
//    function def() {
//     console.log(a);
//   }
//   def();
// };
// abc();


//^ Dynamic scoping in JS:-
// * Def => Kha se call kar rhe ho uspe depend krega ki value kya milegi variable ki hume.

// let a = 12;

// function abc() {
//   console.log(a);
// }

// function def() {
//   let a = 13;          // if JS follow dynamic scoping then it print this a value is 13
//   abc();
// }
// def();

//^ Closures in JS:-

// * Def => Ek function jo return kare ek or function and returning function apne parent function k variable ko excess kr paye closures hota h.

// function abc() {
//   let a = 10;
//   return function () {
//     console.log(a);
//   }
// }


//& Advantage and disadvantages:-
// Private variables banane k liye.
// Global pollution rokne k liye.

//  using the closures:-

// function abc() {
//   let a = 12;
//   return function(){
//     console.log(a);          // use k baad function or uske variables dead ho jate h hume pta h fir kya hua jo fun() pe 12 aya.
//   }
// }

// let fun = abc();
// fun();


// ~Note -> function jab exicute ho jata h to vo or uske andar k variables dead ho jate h but jab bhi closure banta hai to uske function or variables [[environment]] me backlinks bankr save ho jate h isiliye hum unhe excess kr pate hai.

//^ Private counter(Closure related):-

// function privateCounter(){
//   let count = 0;
//   return function(){
//     count++;
//     console.log(count);                      // privateCounter call pe bs backlink bankr value store hogi or variable me save krke calls pe vo values display hongi.
//   }
// }

// let counterRes = privateCounter();           // ye counter alag h alag block (count = 0) se start hoge
// counterRes();                                // 1
// counterRes();                                // 2
// counterRes();                                // 3

// let counterRes2 = privateCounter();          // ye counter alag h alag block (count = 0) se start hoge
// counterRes2();                               // 1
// counterRes2();                               // 2
// counterRes2();                               // 3
// counterRes2();                               // 4


//^ Click clickLimiter(Closure related => encapsulation):-

// function clickLimiter() {
//   let click = 0;                  // private variables bana skte ho ye change nai kr skte hum.
//   return function () {
//     if (click < 5) {
//       click++;
//       console.log(`Clicked: ${click} times`)
//     }else{
//       console.error("Limit exceeded try after some time!")
//     }
//   }
// }
// let resLimitClick = clickLimiter();
// resLimitClick();
// resLimitClick();
// resLimitClick();
// resLimitClick();
// resLimitClick();
// resLimitClick();                 // limit exceeded here because it is 6th time clicked/called.

// ~Note -> Hum poori details inner logic hide kr dete h or excess bahar de dete ho jitna mann h apko dene ka bs.


//^ Project =>  Toaster banana hai:-

// function createToaster(config) {
//   return function (str) {
//     let div = document.createElement("div");
//     div.textContent = str;
//     div.className = "fixed top-5 right-5 bg-slate-500 text-white px-4 py-2 rounded shadow-lg transition-opacity";
//     document.querySelector(".parent").appendChild(div);


//     setTimeout(() => {
//       document.querySelector(".parent").removeChild(div);
//     }, config.duration * 1000);
//   }
// }

// let toaster = createToaster({
//   positionX: "right",
//   positionY: "top",
//   theme: "Dark",
//   duration: 3
// })
// toaster("download done✅");


//^ This keyword in JS:-

//~ Note -> This ek special keyword hai ,kyuki jese or keyword ki value or nature same rehta hai this ki value or nature badal jaate hai is baat se ki aap usey use kaha kar rahe ho.

//* Globally value of this keyword:-
// console.log(this);                              // window

//* Funtionally value of this keyword:-
// function abc() {
// console.log(this);                            // window
// }
// abc();


//* In object's method what the  value of this keyword:-

// const obj = {
//   name: "Tarun",
//   age: 30,
//   sayName: function () {
//     console.log(this);                        // while object
//     console.log(this.name);                   // name ageya
//   }
// }
// obj.sayName();

//~ Note -> In method take normal function only if you take arrow function then this will louse his value and  become window .

//* In event handler what the  value of this keyword:-

// document.querySelector("h2").addEventListener("click", function () {
//   console.log(this.style.color = "red");      // vo element jispe event laga h vo hoga this ki vaue event handler me
// })


//* In class what the  value of this keyword:-

// class Abcd {
//   constructor() {
//     console.log("Hey hello");
//     this.a = 10;
//   }
// }
// let val = new Abcd;                            // Abcd {a: 10}      //Class me value blank {} object hoti h.

//^ Manually Binding: Call,Apply and Bind in JS:-

//~ Note -> Function ko call karte waqt ap set kar sakte ho ki uske this ki value kya hogi.

//* Call method in JS:-

// let obj = {
//   name: "Tarun",
// }

// function abc() {
//   console.log(this);
//   console.log(this.name);   // {name: 'Tarun'}
// }

// abc();                      // window
// abc.call();                 // window
// But if i pass object at the time of call the object become this's value.
// abc.call(obj);              // {name: 'Tarun'}

//* Call method with paramenters:-

// let obj = {
//   name: "Tarun",
// }

// function abc(a, b, c) {
//   console.log(this, a, b, c);
//   // console.log(this.name);   // {name: 'Tarun'}
// }

// abc();                      // window
// abc.call();                 // window
// But if i pass object and three paramenters at the time of call the object become this's value.
// abc.call(obj, 1, 2, 3);     // {name: 'Tarun'} 1 2 3


//* Apply method in JS:-

// let obj = {
//   name: "Tarun",
// }

// function abc(a, b, c) {
// console.log(this, a, b, c);
// }

// But if i pass object and a array of number means take only two arguments the time of apply the object become this's value.
// abc.apply(obj, [1, 2, 3]);           // {name: 'Tarun'} 1 2 3

//* Bind method in JS:-

// let obj = {
//   name: "Tarun",
// }

// function abc(a, b, c) {
// console.log(this, a, b, c);
// }

// // But if i pass object and some number as arguments at that time of bind make a copy of that function that stored but not to execute.
// const fnc = abc.bind(obj, 1, 2, 3);     // {name: 'Tarun'} 1 2 3


//^ OOPS (Object Oriented Programming) in JS:-

// & Construnctor function in JS:-

//* Eg-1:-

// function CreateBiscuit(name, price, qty, company, category) {
//   this.name = name;
//   this.price = price;
//   this.qty = qty;
//   this.company = company;
//   this.category = category;
// }

// const biscuit1 = new CreateBiscuit("Oreo", 10, 10, "Cadbury", "Chocolate Biscuits");
// const biscuit2 = new CreateBiscuit("Dary Fantsy", 20, 3, "Parle", "Chocolate filled cakes");

//* Eg-2:-

// function CreatePencil(name, price, color) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = color;
//     document.body.appendChild(h1);
//   }
// }

// const pencil1 = new CreatePencil("Natraj", 10, "black",);
// const pencil2 = new CreatePencil("Doms", 10, "red",);

//^ Prototypes in JS:-

//~ Note -> Agar apka constructor function apne prototype me koi field attach kar leta hai to  us constructor se banne wale sabhi new instances yaani ki objects ke pass vo wala field  automatically attach ho jata h.


// function CreateBat(name, grip, player, nationality) {
//   this.name = name;
//   this.grip = grip;
//   this.player = player;
//   this.nationality = nationality;
//   CreateBat.prototype.write = function (stroke) {
//     let h1 = document.createElement("h1");
//     h1.textContent = stroke;
//     document.body.appendChild(h1);
//   }
// }

// const bat1 = new CreateBat("CEAT", "white", "Rohit Sharma", "Indian");
// const bat2 = new CreateBat("MRF", "white", "Virat Kohli", "Indian");


//^ Classes in JS:-

class CreatePencil {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }

  clear() {
    document.querySelectorAll("h1").forEach((elem) => {
      if (elem.style.color === this.color) {
        elem.remove();
      }
    })
  }

  write(text) {
    const h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
}

const pencil1 = new CreatePencil("B2", "Natraj", 10, "red");
const pencil2 = new CreatePencil("HB", "Doms", 15, "blue");


