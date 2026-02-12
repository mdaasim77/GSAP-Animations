// gsap.registerPlugin(ScrollTrigger);

gsap.from("#page1 .box", {
  duration: 2,
  //   delay: 1,
  rotate: 360,
});

gsap.from("#page2 .box", {
  duration: 2,
  rotate: 360,
  opacity: 0,
  // delay:1,
  scrollTrigger: {
    trigger: "#page2",
    start: "top 50%",
    end: "top 10%",
    scrub: true,
    toggleActions: "play reverse play reverse", // working on this 
    markers: true,
  },
});

gsap.from("#page3 .box", {
  duration: 2,
  //   delay: 1,
  rotate: 360,
  scrollTrigger: "#page3 .box",
});

// // ====== ================ = =====.    ==== == = = = = = = = =.  =. =new tl code

// var tll = gsap.timeline();

// tll
//   .from("h1", {
//     y: 100,
//     opacity: 0,
//     duration: 2,
//   })
//   .from(
//     "p",
//     {
//       y: 100,
//       opacity: 0,
//       duration: 2,
//     },
//     "-=1.3",
//   )
//   .from(
//     "button",
//     {
//       scale: 0,
//       duration: 1,
//     },
//     "<",
//   );

// =========== =========== ============ ========== =========

// const tl = gsap.timeline();

// tl.add("intro")
//   .from("h1", { y: 100, duration: 1 }, "intro")
//   .from("p", { y: 100, duration: 1 }, "intro+=0.3")
//   .from("button", { scale: 0, duration: 1 }, "intro+=0.5");
