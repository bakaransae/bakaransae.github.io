let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Update the current slide index based on the direction
  currentSlide += direction;

  // Ensure the index wraps around correctly
  if (currentSlide >= totalSlides) {
    currentSlide = 0; // if we're at the end, go back to the first slide
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // if we're at the start, go to the last slide
  }

  // Move the slider container to the correct position
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
