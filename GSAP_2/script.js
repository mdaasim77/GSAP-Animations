// gsap.from("#page1 .box", {
//   duration: 2,
//   //   delay: 1,
//   rotate: 360,
// });
// gsap.from("#page2 .box", {
//   duration: 2,
//   //   delay: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 .box",
//     start: "top 80%",
//     end: "top 30%",
//     scrub: true,
//     markers: true,
//   },
// });
// gsap.from("#page3 .box", {
//   duration: 2,
//   //   delay: 1,
//   rotate: 360,
//   scrollTrigger: "#page3 .box",
// });

// ====== new tl code

var tll = gsap.timeline();

tll
  .from("h1", {
    y: 100,
    opacity: 0,
    duration: 2,
  })
  .from(
    "p",
    {
      y: 100,
      opacity: 0,
      duration: 2,
    },
    "-=1.3",
  )
  .from(
    "button",
    {
      scale: 0,
      duration: 1,
    },
    "<",
  );
