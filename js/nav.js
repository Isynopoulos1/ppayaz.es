const handleMenuToggle = () => {
  // GET NAV ELEMENT
  const nav = document.getElementById("nav-main")
  // APPLY STYLES
  return nav.style.display === "flex" ? (nav.style.display = "none") : (nav.style.display = "flex")
}

// LAUNCH WHEN LOAD THE PAGE
window.onload = () => {
  // DETECT THE MENU BURGER ICON
  const menuIcon = document.getElementById("nav-mobile")
  menuIcon.addEventListener("click", () => handleMenuToggle())
}
