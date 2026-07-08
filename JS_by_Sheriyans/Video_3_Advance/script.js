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

// class CreatePencil {
//   constructor(name, company, price, color) {
//     this.name = name;
//     this.company = company;
//     this.price = price;
//     this.color = color;
//   }

//   clear() {
//     document.querySelectorAll("h1").forEach((elem) => {
//       if (elem.style.color === this.color) {
//         elem.remove();
//       }
//     })
//   }

//   write(text) {
//     const h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
//   }
// }

// const pencil1 = new CreatePencil("B2", "Natraj", 10, "red");
// const pencil2 = new CreatePencil("HB", "Doms", 15, "blue");


//^ Extend and Super in JS:-

// class User {
//   constructor(name, city, username, email, role) {
//     this.name = name;
//     this.city = city;
//     this.username = username;
//     this.email = email;
//     this.role = role;
//   }

//   write(text) {
//     const h1 = document.createElement("h1");
//     h1.textContent = `${this.name} : ${text}`;
//     document.body.appendChild(h1);
//   }
// }


// class Admin extends User {
//   constructor(name, city, username, email, role) {
//     super(name, city, username, email, role)
//     this.role = "Admin"
//   }

//   remove() {
//     document.querySelectorAll("h1").forEach((elem) => {
//       elem.remove()
//     })
//   }
// }

// const user1 = new User("Tarun", "Bulandshahr", "metarun", "metarun@mail.com", "user");
// const user2 = new User("Shweta", "Agra", "meshweta", "meshweta@mail.com", "user");
// const admin = new Admin("Mamta", "BSR Headquater", "memamta", "memamta@mail.com", "admin");

//^ Protypal inheritance VS classical inheritance in  JS:-

//* inheritance concept:-
// classical inheritance - class -> class inherit
// prototypal inheritance - object -> object inherit

// classical inheritance ka example tha jo humne extends padha tha vo ki Admin user ko extend krra tha.

//* Prototypal inheritance example:-

//* Eg1:-
// let coffee = {
//   color: "dark",
//   drink: function () {
//     console.log("ghut ghut gut")
//   }
// }

// let arabiataCoffee = Object.create(coffee);
// // console.log(arabiataCoffee);

// arabiataCoffee.taste = "bitter";
// arabiataCoffee.drink();

//* Eg2:-

//~ Note -> Ek object hai ap chaho to uske saare props/methods ko inherit kara sakte ho doosre object me.

// let obj1 = {};
// let obj2 = Object.create(obj1);

// Note => Obj2 vo saari values hold karta hai jo obj1 me hai.


//^ Callbacks Promises and Async/await in  JS:-

//* Synchronous VS Asynchrolous:-

// Koi bhi code line by line chalta hai Js me uske Synchronous singlethreaded nature ki vajha se but kabhi kabhi esi condtion ajati hai jaha code chalne ka wait krta hai or uske baad ka code chal jaata hao fir time khatam hone pe waited code chal jata hai.


// console.log("Hey1")
// console.log("Hey2")
// setTimeout(() => {
//   console.log("Hey3")
// }, 2000);
// console.log("Hey4")

// Note => Hey1, Hey2, Hey4 chalne k baad 2000 ms means 2 seconds k time khatam hone k baad Hey3 chalge.

// Sync Code => Jo code line by line chale vo sync code.
// Async Code => Esa code jo chale k liye ready ho jaye tab chale to vo code hota h async code.

//* Callback pattern & callback hell:-

// function kuchDerBaadChalunga(fnc) {
//   setTimeout(fnc, Math.floor(Math.random() * 10) * 1000)
// }

// kuchDerBaadChalunga(function () {
//   console.log("hey")
// })

//~ Note -> Agar ap ek function me ek or function bhej rahe ho as a parameter to vo parameter wala function callback function hote hai.


//* Callback hell in JS:-

// function savePostLekeAao(id, cb) {
//   console.log("Saved posts fetching...")
//   setTimeout(() => {
//     cb({ _id: id, savedPosts: [1, 2, 3, 4, 8, 6, 15, 34] })
//   }, 3000);
// }


// function saarePostLekarAao(id, cb) {
//   console.log("Posts fetching...")
//   setTimeout(() => {
//     cb({ _id: id, posts: ["hey", "hello", "gudmorning"] })
//   }, 3000);
// }

// function profileLekeAao(username, cb) {
//   console.log("Profile fetching...")
//   setTimeout(() => {
//     cb({ _id: "adsad5asdsa5d", username, email: "huihui@hui.com" });
//   }, 1000);
// }

// profileLekeAao("Tarun", function (data) {
//   console.log(data)
//   saarePostLekarAao(data._id, function (posts) {
//     console.log(posts);
//     savePostLekeAao(data._id, function (data) {
//       console.log(data)
//     })
//   })
// })

//* Promises in JS:-

//~ Note -> Ap ek promise banate ho to vo 2 states me ja sakta h hai ya to vo fullfill hoga ya reject ye to waqt btayega ki vo resolve hoga ya reject but hum dono states k liye code likhte hai.

//* Eg 1:-

// let pr = new Promise(function (res, rej) {
//   setTimeout(() => {
//     const rn = Math.floor(Math.random() * 10 + 1);
//     if (rn > 5) res("Resolved : " +  rn)
//     else rej("Rejected : " + rn)
//   }, 3000)
// })

//   .then
//   ((val) => {
//     console.log(val);
//   })
//   .catch
//   ((val) => {
//     console.log(val);
//   })


//* Async/Await and how to handle try/catch in JS:-

// let pr = new Promise(function (res, rej) {
//   setTimeout(() => {
//     const rn = Math.floor(Math.random() * 10 + 1);
//     if (rn > 5) res("Resolved : " + rn)
//     else rej("Rejected : " + rn)
//   }, 3000)
// })

// async function getPrVal() {
//   try {
//     let val = await pr;
//     console.log(val);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getPrVal();


//^ Fetch and HTTP Basics in  JS:-

// fetch("https://randomuser.me/api/?results=3")
//   .then((rawData) => rawData.json())
//   .then((data) => {
//     console.log(data)
//     data.results.forEach((user) => {
//       const card = document.createElement("div");
//       card.className =
//         "w-80 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 mx-auto mt-50";

//       // Cover
//       const cover = document.createElement("div");
//       cover.className =
//         "h-28 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500";

//       // Profile Container
//       const profileContainer = document.createElement("div");
//       profileContainer.className = "flex justify-center -mt-14";

//       const profileImg = document.createElement("img");
//       profileImg.src = user.picture.large;
//       profileImg.alt = "User";
//       profileImg.className =
//         "w-28 h-28 rounded-full border-4 border-white object-cover";

//       profileContainer.appendChild(profileImg);

//       // Content
//       const content = document.createElement("div");
//       content.className = "text-center px-6 py-5";

//       // Name
//       const name = document.createElement("h2");
//       name.className = "text-2xl font-bold text-gray-800";
//       name.textContent = `${user.name.first} ${user.name.last}`;

//       // Role
//       const role = document.createElement("p");
//       role.className = "text-blue-600 font-medium mt-1";
//       role.textContent = "Frontend Developer";

//       // Description
//       const desc = document.createElement("p");
//       desc.className = "text-gray-500 text-sm mt-3";
//       desc.textContent =
//         "Passionate about React, JavaScript, Tailwind CSS, and creating beautiful user experiences.";

//       // Stats
//       const stats = document.createElement("div");
//       stats.className = "grid grid-cols-3 gap-4 mt-6 text-center";

//       function createStat(number, label) {
//         const box = document.createElement("div");

//         const value = document.createElement("h3");
//         value.className = "text-xl font-bold text-gray-800";
//         value.textContent = number;

//         const text = document.createElement("p");
//         text.className = "text-xs text-gray-500";
//         text.textContent = label;

//         box.append(value, text);
//         return box;
//       }

//       stats.append(
//         createStat("120", "Projects"),
//         createStat("8.5K", "Followers"),
//         createStat("350", "Following")
//       );

//       // Buttons
//       const btnContainer = document.createElement("div");
//       btnContainer.className = "flex gap-3 mt-6";

//       const followBtn = document.createElement("button");
//       followBtn.className =
//         "flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition";
//       followBtn.textContent = "Follow";

//       const messageBtn = document.createElement("button");
//       messageBtn.className =
//         "flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition";
//       messageBtn.textContent = "Message";

//       btnContainer.append(followBtn, messageBtn);

//       // Append content
//       content.append(name, role, desc, stats, btnContainer);

//       // Append all to card
//       card.append(cover, profileContainer, content);

//       // Add card to body (or any container)
//       document.body.appendChild(card);
//     })
//   })
