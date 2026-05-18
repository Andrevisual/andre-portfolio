const intro = document.getElementById("intro");
const site = document.getElementById("site");
const enterButton = document.getElementById("enterButton");
const clickSound = document.getElementById("clickSound");
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

function playClick() {
  if (!clickSound) return;

  try {
    clickSound.currentTime = 0;
    clickSound.volume = 0.28;
    clickSound.play().catch(() => {});
  } catch (error) {
    // O navegador pode bloquear som sem interação. Sem problema.
  }
}

function showSite() {
  playClick();

  intro.classList.add("hidden");
  site.classList.remove("hidden");

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    revealVisibleSections();
  });
}

if (enterButton) {
  enterButton.addEventListener("click", showSite);
}

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    playClick();
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetSelector = link.getAttribute("href");
    const target = document.querySelector(targetSelector);

    if (!target) return;

    event.preventDefault();
    playClick();

    if (navMenu) {
      navMenu.classList.remove("open");
    }

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealItems.forEach((item) => observer.observe(item));

function revealVisibleSections() {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      item.classList.add("visible");
    }
  });
}

const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

function updateActiveLink() {
  let currentId = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 140;

    if (window.scrollY >= top) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });

window.addEventListener("load", () => {
  updateActiveLink();
  revealVisibleSections();
});
