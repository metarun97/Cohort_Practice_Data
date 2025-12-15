
let initialPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  console.log(dets.x);
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 1.5,
    ease: "elastic.out(1,0.1)"
  })
})


string.addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 1.5,
    ease: "elastic.out(1,0.1)"
  })
})
