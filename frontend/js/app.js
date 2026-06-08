function initNavbar(){
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector(".top-nav");

  if(menuToggle && navLinks){
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("open");
      });
    });
  }

  if(nav){
    window.addEventListener("scroll", () => {
      nav.classList.toggle("nav-scrolled", window.scrollY > 40);
    });
  }
}

function loadComponent(id, path, callback){
  fetch(path)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if(callback) callback();
    });
}

loadComponent("navbar-container", "frontend/components/navbar/navbar.html", initNavbar);
loadComponent("hero-container", "frontend/components/hero/hero.html");
loadComponent("trust-container", "frontend/components/trust/trust.html");
loadComponent("features-container", "frontend/components/features/features.html");
loadComponent("pricing-container", "frontend/components/pricing/pricing.html");
loadComponent("footer-container", "frontend/components/footer/footer.html");