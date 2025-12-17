let tl = gsap.timeline();
let navIcon = document.querySelector("#nav i");
let menuIcon = document.querySelector("#menu i");

tl.to("#menu", {
  right: 0,
  duration: .5,

})
tl.from("#menu h2", {
  x: 150,
  opacity: 0,
  duration: 0.5,
  stagger: 0.25
})
tl.from("#menu i", {
  opacity: 0,
  duration: 0.6,
  stagger: 0.25
})

tl.pause();

navIcon.addEventListener("click", function () {
  tl.play();
})
menuIcon.addEventListener("click", function () {
  tl.reverse();
})

