let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");


main.addEventListener("mousemove", function (dets) {
  // console.log(dets);
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  })
})

image.addEventListener("mouseenter", function () {
  cursor.textContent = "View more"
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff8a"
  })
})
image.addEventListener("mouseleave", function () {
  cursor.textContent = ""
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff"
  })
})



