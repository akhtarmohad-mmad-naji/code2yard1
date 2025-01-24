// Slideshow functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const texts = document.querySelectorAll('.text');

// Function to show the next slide with animation
function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
