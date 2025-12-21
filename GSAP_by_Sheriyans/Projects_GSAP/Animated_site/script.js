function pageOneAnimation() {
  let tl = gsap.timeline();

  tl.from("nav h1,nav h4,nav button", {
    opacity: 0,
    y: -35,
    delay: 1,
    duration: 1,
    stagger: 0.15
  })

  tl.from(".center-part1 h1", {
    opacity: 0,
    x: -300,
    delay: .75,
    duraton: 5
  })

  tl.from(".center-part1 p", {
    opacity: 0,
    x: -200,
    delay: .50,
    duraton: 5
  })

  tl.from(".center-part1 button", {
    opacity: 0,
    delay: .4,
    duraton: 5
  })

  tl.from(".center-part2 img", {
    opacity: 0,
    duraton: 5,
    x: 200
  }, "-=0.7")

  tl.from("section-part-a, .img", {
    opacity: 0,
    duration: 1,
    y: 30,
    stagger: 0.15
  })

}


function pageTwoAnimation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      scroller: "body",
      markers: true,
      start: "top 50%",
      end: "top 0",
      scrub: 2
    }
  })

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5
  })
  tl2.from(".lefta", {
    x: -300,
    opacity: 0,
    duration: 0.5

  }, "anim1")
  tl2.from(".righta", {
    x: 300,
    opacity: 0,
    duration: 0.5
  }, "anim1")
  tl2.from(".leftb", {
    x: -300,
    opacity: 0,
    duration: 0.5

  }, "anim2")
  tl2.from(".rightb", {
    x: 300,
    opacity: 0,
    duration: 0.5
  }, "anim2")

  tl2.from(".left-text h4,.left-text p,.left-text button", {
    x: -200,
    opacity: 0,
    duration: 1.5,
    stagger: 1
  })
  tl2.from(".right-img img", {
    x: 200,
    opacity: 0,
    duration: 2,
    stagger: 1
  })
}

pageOneAnimation()
pageTwoAnimation()
