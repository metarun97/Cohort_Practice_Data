let tl = gsap.timeline();


tl.from("h2", {
  y: -20,
  opacity: 0,
  delay: 1,
  duration: 0.3
})

tl.from("h4", {
  y: -20,
  opacity: 0,
  delay: 1,
  duration: 0.3,
  stagger: 0.2
})

tl.from("h1", {
  y: 20,
  opacity: 0,
  delay: 1,
  duration: 0.5,
  scale: 0.2
})
