// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Show More Projects Button
const showMoreBtn = document.getElementById("showMoreBtn");
const hiddenProjects = document.querySelectorAll(".project-card.hidden");
showMoreBtn.addEventListener("click", () => {
  hiddenProjects.forEach((project) => {
    project.classList.toggle("hidden");
  });

  if (showMoreBtn.innerText === "Show More") {
    showMoreBtn.innerText = "Show Less";
  } else {
    showMoreBtn.innerText = "Show More";
  }
});

// FAQ SECTION
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// footer Year Auto Update
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar Active Link Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Reveal Animation on Scroll
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
});
