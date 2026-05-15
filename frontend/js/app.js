const revealElements = document.querySelectorAll(
  ".hero, .features-card, .pricing-section, .final-card"
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
