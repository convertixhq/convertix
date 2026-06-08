const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

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

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = Number(counter.dataset.target);
  const prefix = counter.dataset.prefix || "";
  const suffix = counter.dataset.suffix || "";
  let current = 0;

  const increment = Math.max(1, Math.ceil(target / 60));

  const updateCounter = () => {
    current += increment;

    if (current >= target) {
      counter.textContent = `${prefix}${target}${suffix}`;
      return;
    }

    counter.textContent = `${prefix}${current}${suffix}`;
    requestAnimationFrame(updateCounter);
  };

  updateCounter();
});


const nav = document.querySelector(".top-nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }

});
