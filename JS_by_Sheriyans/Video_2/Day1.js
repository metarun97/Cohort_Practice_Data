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



