function initNavbar() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector(".top-nav");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    document.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("open");
      });
    });
  }

  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("nav-scrolled", window.scrollY > 40);
    });
  }
}

function loadComponent(id, path, callback) {

  const target = document.getElementById(id);

  if (!target) return;

  fetch(path)
    .then(response => response.text())
    .then(data => {

      target.innerHTML = data;

      if (callback) {
        callback();
      }
    })
    .catch(error => {
      console.error("Component load error:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {

  loadComponent(
    "navbar-container",
    "frontend/components/navbar/navbar.html",
    initNavbar
  );

  loadComponent(
    "hero-container",
    "frontend/components/hero/hero.html"
  );

  loadComponent(
    "trust-container",
    "frontend/components/trust/trust.html"
  );

  loadComponent(
    "features-container",
    "frontend/components/features/features.html"
  );

  loadComponent(
    "pricing-container",
    "frontend/components/pricing/pricing.html"
  );

  loadComponent(
    "footer-container",
    "frontend/components/footer/footer.html"
  );

  initNavbar();
});