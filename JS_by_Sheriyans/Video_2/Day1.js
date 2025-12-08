//! _____________________________________________________[DOM in JS]_____________________________________________________________________

//^ Selecting the elements in DOM:-

//* Select element by id:-

// let headingOne = document.getElementById("head-one");
// console.log(headingOne);

//~ Note -> Isme element mila kyuki id unique hoti ek element ko ek hi di jati hai.

//* Select element by className:-

// let headTwo = document.getElementsByClassName("head-two");
// console.log(headTwo);

//~ Note -> Isme HTML Collection mila kyuki class unique nai hoti ek se jyada elements ko di ja skti hai.

//* Select element by querySelector:-

// let headThree = document.querySelector("h3");
// let headThree = document.querySelector(".head-three");
// let headThree = document.querySelector("#h3");
// console.log(headThree);

//~ Note -> Isme ye pehla element hi select krta hai agar same tag select krne ko bola hai or id pe # k sath & class k sath . pehle lagakr name leta hai ta select krta hai.

//* Select element by querySelectorAll:-

// let allHeadThree = document.querySelectorAll("h3");
// console.log(allHeadThree);

//~ Note -> Isme NodList mila kyuki h3 kai saare h3 elemts hai jyada elements ko ese hi deta hai querySelectorAll.


//^ Selecting the elements and menipulate the DOM:-


//* innerHTML change krna:-

// let h1 = document.querySelector("#head-one");
// h1.innerHTML = '<i>How are youe!</i>';

//~ Note -> HTML bhi change kr skte hai or text bhi change ya daal skte hai.

//* inneText change krna:-

// let h1 = document.querySelector("#head-one");
// h1.innerText = 'kaise ho mere bhai!';

//~ Note -> textContent sirf visible text ko read/write karta hai or agar element ka text CSS se hidden hai (display:none, visibility:hidden).

//* textContent change krna:-

// let h1 = document.querySelector("#head-one");
// h1.textContent = 'kaise ho mere bhai!';

//~ Note -> Pure element ka text deta hai, chahe visible ho ya hidden,more faster then two of those.

//^ Changing attributes values in DOM:-

//* Set attribute:-

//* Eg1:-

// let anchor = document.querySelector("#anchor");
// console.dir(anchor);
// anchor.setAttribute('href', "https://google.com");

//* Eg2:-

// let img = document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1764867147368-9f162d149840?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D")


//* Get attribute:-

// let anchor = document.querySelector("#anchor");
// console.log(anchor.getAttribute('href'));

//* Remove attribute:-

// let anchor = document.querySelector("#anchor");
// anchor.removeAttribute("href");

//^ Create elements and inject  in DOM:-

//* append and prepend:-

// let h2 = document.createElement("h2");
// h2.textContent = "Hello Everyone";
// document.querySelector("body").append(h2);
// document.querySelector("body").prepend(h2);

//~ Note -> Append jo h vo script k baad element ko DOM ki body me dalega or prepend DOM ki body me pehla element banakr dalega.

//^ Give style to elements in DOM:-

// let h3 = document.querySelector("h3");
// h3.style.color = "red";
// h3.style.backgroundColor = "aqua";

//^ Give style  by adding class in elements  DOM:-
//* classList.add(),classList.remove(),classList.toggle()

// let h3 = document.querySelector("h3");
// h3.classList.add("h2Style");


// let h3 = document.querySelector("h3");
// h3.classList.remove("h2Style");

// let h3 = document.querySelector("h3");
// h3.classList.toggle("h2Style");

//~ Note -> Add add kregi class ko remove remove kregi or toggle agr class hai to dal dega class nai to remove kr dega.

//* Task 1 (Print all the li elements by forEach and for loop):-

// let li = document.querySelectorAll("li");
// li.forEach(function (val) {
//   console.log(val.textContent);
// })

// for (let i = 0; i < li.length; i++) {
//   console.log(li[i].textContent);
// }

//* Task 2 (Give hightlight red color to the even elements of li by forEach method):-

// let li = document.querySelectorAll("ul li:nth-child(2n");
// li.forEach(function(elem){
//   console.log(elem.classList.add("highlight"))
// })

//* Practice Task 1:-

// let inp = document.querySelector("input");
// inp.addEventListener("input", function (dets) {
//   if(dets.data !== null){
//     console.log(dets.data);
//   }
// })

//* Practice Task 2:-

// let select = document.querySelector("select");
// let h3 = document.querySelector(".head3");

// select.addEventListener("change", function (detes) {
// h3.textContent = `${detes.target.value} device selected!`
//   // console.log(detes.target.value);
// })


//* Practice Task 3:-

// let h1 = document.querySelector("h1");

// window.addEventListener('keydown', function (dets) {
//   // console.log(dets);
//   if (dets.key === " ") {
//     h1.textContent = 'SPC';
//   } else {
//     h1.textContent = dets.key;
//   }
//   // console.log(dets.key);
// })

//* Practice Task 4:-

// let btn = document.querySelector("#btn");
// let inpFile = document.querySelector("input");

// btn.addEventListener("click", function () {
//   inpFile.click();
// })

// inpFile.addEventListener("change", function (dets) {
//   const file = dets.target.files[0];
//   if (file) {
//     document.querySelector("h1").textContent = `${file.name} selected✅`
//   }
// })

//* Practice Task 5:-

// let square = document.querySelector(".square");

// square.style.width = "400px";
// square.style.height = "400px";
// square.style.backgroundColor = "red";

// square.addEventListener("mouseover",function(){
//   square.style.backgroundColor = "yellow";
// })
// square.addEventListener("mouseout",function(){
//   square.style.backgroundColor = "red";
// })

//* Practice Task 6:-

// let square = document.querySelector(".square");
// let body = document.querySelector("body");

// square.style.width = "100px";
// square.style.height = "100px";
// square.style.backgroundColor = "red";
// square.style.position = "absolute";
// body.style.position = "relative";
// body.style.overflow = "hidden";


// window.addEventListener("mousemove", function (dets) {
//   // console.log(dets.clientX, dets.clientY);
//   square.style.top = dets.clientY + 'px';
//   square.style.left = dets.clientX + 'px';
// })


// let h1 = document.querySelector("h1");

// window.addEventListener("keyup", function (dets) {
//   if (dets.key === " ") {
//     h1.textContent = "SPC";
//   } else {
//     h1.textContent = dets.key;
//   }
// })
