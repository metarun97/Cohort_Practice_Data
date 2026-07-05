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


const toastNotification = (config) => {
  return (str) => {
    const div = document.createElement("div");
    div.textContent = str;
    div.className = `${config.theme === "dark" ? "bg-slate-100 text-black" : "bg-black text-slate-100"} text-sm font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 transform translate-y-0 scale-100`
    document.querySelector(".parent").classList.add = `${config.positionX === "left" ? "left-25" : "right-25"} ${config.positionY === "top" ? "top-5" : "bottom-5"}`
    document.querySelector(".parent").appendChild(div);

    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);

    }, config.duration * 1000);
  }
}


const toast = toastNotification({
  positionX: "left",
  positionY: "top",
  theme: "light",
  duration: 3
})


toast("Successfuly downloaded✅")
























//^ This keyword in JS:-

// Note ->
