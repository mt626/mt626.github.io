document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

let currentSlide = 0;

function prevSlide() {
  const slides = document.querySelectorAll(".carousel-item");
  slides[currentSlide].classList.remove("active");
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  const slides = document.querySelectorAll(".carousel-item");
  slides[currentSlide].classList.remove("active");
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  slides[currentSlide].classList.add("active");
}
