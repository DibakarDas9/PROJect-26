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
      // modeToggle.innerText = document.body.classList.contains("light-mode") ? "🌞" : "🌛";
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

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function updateSlide() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back after last slide
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back before first slide
    updateSlide();
}
  function showVideo(num) {
    const videos = document.querySelectorAll(".left-section video");
    const options = document.querySelectorAll(".option");

    // Remove 'active' class from all videos & options
    videos.forEach(video => {
      video.classList.remove("active");
      video.style.display = "none"; // Hide all videos
    });
    options.forEach(opt => opt.classList.remove("active"));

    // Select the correct video by ID and add 'active' class
    const selectedVideo = document.getElementById(`img${num}`);
    if (selectedVideo) {
      selectedVideo.classList.add("active");
      selectedVideo.style.display = "block"; // Show selected video
      selectedVideo.play(); // Ensure it plays
    }

    // Add 'active' class to the selected option
    options[num - 1].classList.add("active");
  }




gsap.to("#nav", {
  background: "linear-gradient(to right bottom,#000, #fff, #f0f8ff ) ",     
  // #f0f8ff 
  // opacity:18,
  // duration: 0.5,
  height: "80px",
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
  backgroundColor: "#fff",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    //markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.to(".container", {
  // filter: "brightness(155%)",
  filter: "drop-shadow(5px 5px 10px black)",
  scrollTrigger: {
    trigger: ".container",
    start: "top center", 
    end: "bottom center",
    scrub: true, 
  },
});



// gsap.from(".card", {
//   //scale:0.8,
//   opacity: 1,
//   duration: 1,
//   stagger:0.4,
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "scroller",
//     // markers:true,
//     start: "top 70%",
//     end: "top 70%",
//     scrub: 4,
//   },
// });


gsap.from("#card-container h1",{
  y:300,
  scrollTrigger:{
    trigger:"#details1",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"end 60%",
    scrub:2,
  },
});



