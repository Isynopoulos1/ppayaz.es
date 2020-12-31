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

const handleMenuToggle = () => {
  // GET NAV ELEMENT
  const nav = document.getElementById("nav-main")
  // APPLY STYLES
  return nav.style.display === "flex" ? (nav.style.display = "none") : (nav.style.display = "flex")
}

// BUILD ONCLICK FUNCTIONS
const nextSlide = () => showSlide((currentSlide += 1))
const previousSlide = () => showSlide((currentSlide -= 1))

// MAKE SURE THE FUNCTION IS LOADED ON PAGE LOAD AND ACTIVATE ONCLICK EVENTS
window.onload = () => {
  // DETECT THE MENU BURGER ICON
  const menuIcon = document.getElementById("nav-mobile")
  menuIcon.addEventListener("click", () => handleMenuToggle())

  showSlide(currentSlide)
  document.getElementById("prev").addEventListener("click", () => previousSlide())
  document.getElementById("next").addEventListener("click", () => nextSlide())
}
