var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x-7 + "px";
  crsr.style.top = dets.y-6 + "px";
  blur.style.left = dets.x - 89-7+ "px";
  blur.style.top = dets.y - 87-6 + "px";
});

var h4all = document.querySelectorAll(".navbtn,.cart,#scroller-in");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid rgb(255, 255, 255)";
    crsr.style.backgroundColor = "#95C11E";
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



