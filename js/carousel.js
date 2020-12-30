// DEFINE DEFAULT SLIDE
let currentSlide = 1
const showSlide = index => {
  const slides = document.getElementsByClassName("carousel-item")
  if (index > slides.length) {
    currentSlide = 1
  }
  if (index < 1) {
    currentSlide = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[currentSlide - 1].style.display = "flex"
}

// BUILD ONCLICK FUNCTIONS
const nextSlide = () => showSlide((currentSlide += 1))
const previousSlide = () => showSlide((currentSlide -= 1))

// MAKE SURE THE FUNCTION IS LOADED ON PAGE LOAD AND ACTIVATE ONCLICK EVENTS
window.onload = () => {
  showSlide(currentSlide)
  document.getElementById("prev").addEventListener("click", () => previousSlide())
  document.getElementById("next").addEventListener("click", () => nextSlide())
}
