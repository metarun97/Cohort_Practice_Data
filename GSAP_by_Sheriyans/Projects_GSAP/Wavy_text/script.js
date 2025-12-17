function breakText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;
  let h1Arr = h1Text.split("");
  let halfText = Math.floor(h1Arr.length / 2)
  // console.log(halfText)

  let clutter = "";
  h1Arr.forEach(function (elem, idx) {
    if (idx < halfText) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  })
  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .a", {
  opacity: 0,
  y: 50,
  duration: .3,
  delay: .5,
  stagger: 0.15
})

gsap.from("h1 .b", {
  opacity: 0,
  y: 50,
  duration: .3,
  delay: .5,
  stagger: -0.15
})



