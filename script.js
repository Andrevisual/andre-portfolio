const enterScreen = document.getElementById("enterScreen");
const mainSite = document.getElementById("mainSite");
const enterBtn = document.getElementById("enterBtn");
const clickSound = document.getElementById("clickSound");
const bgMusic = document.getElementById("bgMusic");
const particlesContainer = document.getElementById("spaceParticles");
const scrollFade = document.getElementById("scrollFade");

let siteAberto = false;

function tocarClick() {
  if (!clickSound) return;

  try {
    clickSound.currentTime = 0;
    clickSound.volume = 0.3;
    clickSound.play().catch(() => {});
  } catch (error) {}
}

function iniciarMusica() {
  if (!bgMusic) return;

  try {
    bgMusic.volume = 0.1;
    bgMusic.play().catch(() => {});
  } catch (error) {}
}

function abrirSite() {
  if (siteAberto) return;

  siteAberto = true;
  tocarClick();
  iniciarMusica();

  if (enterScreen) {
    enterScreen.classList.add("hide");

    setTimeout(() => {
      enterScreen.style.display = "none";

      if (mainSite) {
        mainSite.classList.add("show");
        window.scrollTo({
          top: 0,
          behavior: "instant"
        });
      }
    }, 540);
  }
}

if (enterBtn) {
  enterBtn.addEventListener("click", abrirSite, { once: true });
}

document.addEventListener("keydown", (event) => {
  if (!siteAberto && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    abrirSite();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const alvo = document.querySelector(link.getAttribute("href"));

    if (!alvo) return;

    event.preventDefault();
    tocarClick();

    alvo.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

function criarParticulas() {
  if (!particlesContainer) return;

  const total = window.innerWidth < 760 ? 18 : 36;

  particlesContainer.innerHTML = "";

  for (let i = 0; i < total; i++) {
    const p = document.createElement("span");
    p.className = "particle";

    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 110}%`;
    p.style.opacity = `${0.25 + Math.random() * 0.75}`;
    p.style.animationDuration = `${8 + Math.random() * 12}s`;
    p.style.animationDelay = `${Math.random() * 8}s`;

    particlesContainer.appendChild(p);
  }
}

criarParticulas();

let resizeTimer;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    criarParticulas();
  }, 250);
});

const revelaveis = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revelaveis.forEach((el) => observer.observe(el));
} else {
  revelaveis.forEach((el) => el.classList.add("active"));
}

let fadeTimeout;

window.addEventListener(
  "scroll",
  () => {
    if (!scrollFade) return;

    scrollFade.classList.add("active");

    clearTimeout(fadeTimeout);

    fadeTimeout = setTimeout(() => {
      scrollFade.classList.remove("active");
    }, 160);
  },
  {
    passive: true
  }
);
