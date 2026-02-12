gsap.from("#page1 .box", {
  duration: 2,
  //   delay: 1,
  rotate: 360,
});
gsap.from("#page2 .box", {
  duration: 2,
  //   delay: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 .box",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
    markers: true,
  },
});
gsap.from("#page3 .box", {
  duration: 2,
  //   delay: 1,
  rotate: 360,
  scrollTrigger: "#page3 .box",
});
