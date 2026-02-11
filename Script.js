console.log("Aasim is here !");

gsap.to("#box", {
  x: 1000,
  duration: 3,
  delay: 1,
  marginTop: "10px",
  borderRadius: "50%",
});

gsap.from("h1", {
  duration: 1,
  delay: 1,
  y: 100,
  opacity: 0, // using gsap.from so its running opacity 0 to 1
  stagger: 0.4,
});

gsap.to("p",{
    duration:4,
    x:"1070",
    // delay:1,
    repeat:-1,  // repeat -1 is used to repeat item infinite times
    yoyo:true // yoyo property can used to get bounce the item
})

gsap.to("#ball",{
    y:[200,0],
    x:[400,800],
    duration:2,
    repeat:-1,
    yoyo:true


})
