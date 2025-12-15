gsap.to("#page2 h1", {
  transform: "translateX(-135%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2.5,
    pin: true
  }
})


//* Note => Scroller ko pinned element k parent pe lagana hoga tab vo cahi chalega sahi animation.
