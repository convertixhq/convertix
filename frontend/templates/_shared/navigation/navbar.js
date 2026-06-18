(function () {
  const navbar = document.querySelector("[data-cld-navbar]");
  const toggle = document.querySelector("[data-cld-nav-toggle]");
  const menu = document.querySelector("[data-cld-nav-menu]");

  if (!navbar || !toggle || !menu) return;

  function closeMenu() {
    navbar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  }

  function openMenu() {
    navbar.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
  }

  toggle.addEventListener("click", function () {
    const isOpen = navbar.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
})();