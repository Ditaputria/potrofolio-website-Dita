// Mobile Navigation Toggle
const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

mobileToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  mobileToggle.innerHTML = mainNav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu after clicking
    if (mainNav.classList.contains("active")) {
      mainNav.classList.remove("active");
      mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

/*
// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "none";
    header.style.backdropFilter = "blur(11px)";
    header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.3)";
  } else {
    header.style.backgroundColor = "rgba(26, 26, 26, 0.9)";
    header.style.boxShadow = "none";
  }
});
 */