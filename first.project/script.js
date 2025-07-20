const videoContEL = document.querySelector(".video-container");
const playBtn = document.querySelector(".play");
const Page3 = document.querySelector(".page3");
const cursorbtn =document.querySelector(".cursor")
 var timeline1=gsap.timeline()

function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();
function navfunc(){
 

  timeline1.from(".list a",{
    y:-200,
    duration:0.3,

  })
  timeline1.from(".nav-part2 i",{
    y:20,
    duration:0.5,
    opacity:0,

  })

}
navfunc()

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
function page1Animation(){
  timeline1.from(".page1 h1", {
  y: 30,
  opacity: 0,
  delay: 0.6,
  duration: 0.5,
  stagger: 0.2,
});
gsap.from(".page1  .video-container", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 0.9,
});
}
page1Animation();
function mousenavEffect(){


Page3.addEventListener("mouseenter",function(){
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
}
mousenavEffect();
function navanimations(){
 gsap.to(".logo svg", {
  y: "-100%",
  scrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    start: "top top",
    end: "top -5%",
    scrub: true,
  },
});

// ✅ Hide .list .new on scroll
gsap.to(".list a", {
  y: "-100%",
  opacity: 0,
  scrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    start: "top top",
    end: "top -5%",
    scrub: true,
  },
});
}
navanimations();
mousepicEffect();


