var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var h4all = document.querySelectorAll(".navbtn,.cart,#scroller-in");
var currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

//just for fun
document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const searchIcon = document.getElementById("searchIcon");
  const suggestionsList = document.getElementById("suggestions");

  // Function to get all searchable elements on the page
  function getAllSearchableElements() {
      return [...document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, div, span, li, button, a, select, option")];
  }

  function findMatches(searchTerm) {
      const elements = getAllSearchableElements();
      return elements.filter(el => el.innerText.toLowerCase().includes(searchTerm));
  }

  function displaySuggestions() {
      const searchTerm = searchBox.value.trim().toLowerCase();
      suggestionsList.innerHTML = "";
      if (!searchTerm) {
          suggestionsList.style.display = "none";
          return;
      }

      const matches = findMatches(searchTerm);
      matches.forEach(match => {
          const suggestionItem = document.createElement("div");
          suggestionItem.textContent = match.innerText.substring(0, 50) + "..."; // Show part of the text
          suggestionItem.addEventListener("click", function () {
              navigateToElement(match);
          });
          suggestionsList.appendChild(suggestionItem);
      });

      // Add Google Search option
      const googleSearchItem = document.createElement("div");
      googleSearchItem.textContent = ` Search "${searchTerm}" on Google`;
      googleSearchItem.addEventListener("click", function () {
          redirectToGoogle(searchTerm);
      });
      suggestionsList.appendChild(googleSearchItem);

      // Add Gemini Search option
      const geminiSearchItem = document.createElement("div");
      geminiSearchItem.textContent = ` Search "${searchTerm}" on Gemini`;
      geminiSearchItem.addEventListener("click", function () {
          redirectToGemini(searchTerm);
      });
      suggestionsList.appendChild(geminiSearchItem);

      suggestionsList.style.display = "block";
  }

  function navigateToElement(element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function redirectToGoogle(query) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  }

  function redirectToGemini(query) {
    window.open(`https://gemini.google.com/app?q=${encodeURIComponent(query)}`, "_blank");
}

  searchBox.addEventListener("input", displaySuggestions);

  searchBox.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
          event.preventDefault();
          const searchTerm = searchBox.value.trim().toLowerCase();
          const matches = findMatches(searchTerm);
          if (matches.length > 0) {
              navigateToElement(matches[0]);
          } else {
              redirectToGoogle(searchTerm); // Default to Google search if nothing found
          }
          suggestionsList.style.display = "none";
      }
  });

  searchIcon.addEventListener("click", function () {
      const searchTerm = searchBox.value.trim().toLowerCase();
      const matches = findMatches(searchTerm);
      if (matches.length > 0) {
          navigateToElement(matches[0]);
      } else {
          redirectToGoogle(searchTerm);
      }
      suggestionsList.style.display = "none";
  });

  document.addEventListener("click", function (e) {
      if (!searchBox.contains(e.target) && !suggestionsList.contains(e.target)) {
          suggestionsList.style.display = "none";
      }
  });
});
//☝️will remove this at final touch





const texts = [
    "Learn. Grow. Succeed. Anytime, Anywhere!",
    "Skills for the real world!",
    "Courses that shape your future.",
    "Knowledge beyond classrooms, anytime!",
    "Master skills, not just theories.",
    "Your learning, your pace, your way!",
    "Education that fits your life!",
    "Upgrade your skills, upgrade your life!",
    "Learn what truly matters!",
    "Expert-led courses, limitless possibilities!"
];
let textIndex = 0, charIndex = 0, isDeleting = false, timeout;
const typingSpeed = 100, deletingSpeed = 50, delayBetweenTexts = 1500;
const carousel = document.getElementById('courseCarousel');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Cursor movement and effect
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = `${dets.x - 1}px`;
    crsr.style.top = `${dets.y - 1}px`;
    blur.style.left = `${dets.x - 90}px`;
    blur.style.top = `${dets.y - 88}px`;
});

h4all.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        Object.assign(crsr.style, { scale: 3, border: "1px solid #fff", background: "transparent" });
    });
    elem.addEventListener("mouseleave", () => {
        Object.assign(crsr.style, { scale: 1, border: "0px solid #fff", background: "linear-gradient(to left bottom, #ffffff, #ffffff, #000000)" });
    });
});

// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mode-toggle").addEventListener("click", () => document.body.classList.toggle("light-mode"));
});

// Slide Functionality
function updateSlide() {
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}vw)`;
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Video Toggle Function
function showVideo(num) {
    document.querySelectorAll(".left-section video").forEach(video => {
        video.classList.remove("active");
        video.style.display = "none";
    });
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("active"));

    let selectedVideo = document.getElementById(`img${num}`);
    if (selectedVideo) {
        selectedVideo.classList.add("active");
        selectedVideo.style.display = "block";
        selectedVideo.play();
    }
    document.querySelectorAll(".option")[num - 1].classList.add("active");
}

// Typing Effect
function typeEffect() {
    let element = document.querySelector(".typing-text");
    let currentText = texts[textIndex];

    element.innerText = isDeleting ? currentText.substring(0, charIndex--) : currentText.substring(0, charIndex++);

    if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        timeout = setTimeout(typeEffect, delayBetweenTexts);
        return;
    } else if (isDeleting && charIndex === -1) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    timeout = setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}
typeEffect();

// Course Carousel
function updateArrows() {
    leftArrow.style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
    rightArrow.style.display = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth ? 'none' : 'block';
}
rightArrow.onclick = () => carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
leftArrow.onclick = () => carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
carousel.addEventListener('scroll', updateArrows);
updateArrows();



gsap.to("#nav", {
    background: "rgba(255, 255, 255, 0.2)",  
    backdropFilter: "blur(10px)",  
    webkitBackdropFilter: "blur(10px)", 
    height: "70px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
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
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});

gsap.to(".container", {
    filter: "drop-shadow(5px 5px 10px black)",
    scrollTrigger: {
        trigger: ".container",
        start: "top center", 
        end: "bottom center",
        scrub: true, 
    },
});

gsap.from("#card-container h1", {
    y: 300,
    scrollTrigger: {
        trigger: "#details1",
        scroller: "body",
        start: "top 50%",
        end: "end 60%",
        scrub: 2,
    },
});

gsap.to("#name-div h1", {
    transform: "translateX(calc(100% - 250vw - 240px))",
    scrollTrigger: {
        trigger: "#card",
        scroller: "body",
        scrub: 0.7
    }
});

gsap.from("#colon1", {
    y: -70, x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
    }
});

gsap.from("#colon2", {
    y: 70, x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
    }
});
