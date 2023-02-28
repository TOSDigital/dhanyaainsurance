// set the current slide to be the first slide
var currentSlide = 0;

// timer function to switch between slides
function nextSlide() {
  // get all the slides
  var slides = document.querySelectorAll('.slide');

  // hide the current slide
  slides[currentSlide].style.left = '-100%';

  // update the current slide
  currentSlide = (currentSlide + 1) % slides.length;

  // show the next slide
  slides[currentSlide].style.left
}
// timer function to switch between slides
function nextSlide() {
    // get all the slides
    var slides = document.querySelectorAll('.slide');
  
    // hide the current slide
    slides[currentSlide].style.left = '-100%';
  
    // update the current slide
    currentSlide = (currentSlide + 1) % slides.length;
  
    // show the next slide
    slides[currentSlide].style.left = '0';
  }
  
  // start the timer
  setInterval(nextSlide, 3000);
  