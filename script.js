var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x-1 + "px";
  crsr.style.top = dets.y-1 + "px";
  blur.style.left = dets.x - 89-1+ "px";
  blur.style.top = dets.y - 87-1 + "px";
});

document.addEventListener("DOMContentLoaded", function() {
  const modeToggle = document.getElementById("mode-toggle");

  modeToggle.addEventListener("click", function() {
      document.body.classList.toggle("light-mode");
      
      // Toggle button emoji based on mode
      modeToggle.innerText = document.body.classList.contains("light-mode") ? "🌛" : "🌞";
  });
});

var h4all = document.querySelectorAll(".navbtn,.cart,#scroller-in");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.background = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid rgb(255, 255, 255)";
    crsr.style.background = "linear-gradient(to left bottom , #ffffff,#ffffff,#000000)";
  });
});



gsap.to("#nav", {
  backgroundColor: "#f0f8ff  ",   
  // #f0f8ff 
  // opacity:18,
  // duration: 0.5,
  height: "89px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    //  markers:true,
    start: "top -8%",
    end: "top -9%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    //markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
// gsap.from(".card", {
//   //scale:0.8,
//   opacity: 1,
//   duration: 1,
//   stagger:0.4,
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "body",
//     // markers:true,
//     start: "top 70%",
//     end: "top 70%",
//     scrub: 4,
//   },
// });


gsap.from("#card-container h1",{
  y:50,
  scrollTrigger:{
    trigger:"#details1",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"end 50%",
    scrub:2,
  },
});



