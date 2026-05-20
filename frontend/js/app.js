const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
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
