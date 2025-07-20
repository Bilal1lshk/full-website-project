const videoContEL = document.querySelector(".video-container");
const playBtn = document.querySelector(".play");
const Page3 = document.querySelector(".page3");
const cursorbtn =document.querySelector(".cursor")
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function mousepicEffect() {
  videoContEL.addEventListener("mouseenter", function () {
    gsap.to(playBtn, {
      opacity: 1,
      scale: 1,
    });
  });
  videoContEL.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      opacity: 0,
      scale: 0,
    });
  });
  videoContEL.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
      left: dets.x -20,
      
      top: dets.y - 20,
    });
  });
}
gsap.from(".page1 h1", {
  y: 30,
  opacity: 0,
  delay: 0.6,
  duration: 0.9,
  stagger: 0.2,
});
gsap.from(".page1  .video-container", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 0.9,
});
Page3.addEventListener("mouseenter",function(){
  console.log("entered");
gsap.to(cursorbtn,{
  opacity:0.3,
  zIndex:9,
  
})
})
Page3.addEventListener("mouseleave",function(){
  console.log("leaving");
gsap.to(cursorbtn,{
  opacity:0,
  zIndex:0,
  
})
})
 Page3.addEventListener("mousemove", function (dets) {
    gsap.to(cursorbtn, {
      left: dets.x -50,
      
      top: dets.y - 50,
    });
  });
mousepicEffect();
