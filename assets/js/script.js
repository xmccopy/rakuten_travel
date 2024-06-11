let slideIndex = 0;
let slideIndex1 = 0
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  slideIndex1++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  slideIndex1--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  slideIndex1= n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let slides1 = document.querySelectorAll(".mySlides1");
  let dots = document.querySelectorAll(".dots");

  if ((slideIndex > slides.length - 1) && (slideIndex1 > slides1.length - 1)) {
    slideIndex = 0;
    slideIndex1 = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
    slideIndex = slides1.length - 1;
  }
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides1.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  slides[slideIndex].style.display = "block";
  slides1[slideIndex1].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
  dots[slideIndex1].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec