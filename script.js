const githubUser = "Andrevisual";

const projectsContainer = document.getElementById("projectsContainer");
const clickSound = document.getElementById("clickSound");
const bgMusic = document.getElementById("bgMusic");
const enterScreen = document.getElementById("enterScreen");
const enterBtn = document.getElementById("enterBtn");
const mainSite = document.getElementById("mainSite");
const scrollFade = document.getElementById("scrollFade");
const spaceParticles = document.getElementById("spaceParticles");

function playSound(sound, volume = 0.25) {
  if (!sound) return;
  sound.volume = volume;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

/* PARTÍCULAS */
function createParticles() {
  const total = 55;

  for (let i = 0; i < total; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    const size = Math.random() * 2 + 1;
    const left = Math.random() * 100;
    const top = Math.random() * 120;
    const duration = Math.random() * 18 + 14;
    const delay = Math.random() * -25;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    spaceParticles.appendChild(particle);
  }
}

createParticles();

/* ENTRADA */
enterBtn.addEventListener("click", () => {
  playSound(clickSound, 0.4);

  bgMusic.volume = 0.18;
  bgMusic.play().catch(() => {});

  enterScreen.classList.add("hide");

  setTimeout(() => {
    mainSite.classList.add("show");
    revealOnScroll();
  }, 360);
});

/* SOM DE CLIQUE */
document.querySelectorAll("a, button").forEach(item => {
  item.addEventListener("click", () => {
    playSound(clickSound, 0.25);
  });
});

/* SCROLL SUAVE COM FADE */
function easeOutQuint(t) {
  return 1 - Math.pow(1 - t, 5);
}

function smoothScrollTo(targetY, duration = 1100) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function animation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuint(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    scrollFade.classList.add("active");

    setTimeout(() => {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      const targetY = target.getBoundingClientRect().top + window.scrollY - navbarHeight + 2;

      smoothScrollTo(targetY, 1150);

      setTimeout(() => {
        scrollFade.classList.remove("active");
      }, 250);
    }, 120);
  });
});

/* EFEITO LEVE */
document.querySelectorAll(".btn, .tools-grid a, .project-card, .skill-card, .content-card").forEach(element => {
  element.addEventListener("mousemove", e => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px) scale(1.01)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
  });
});

/* GITHUB */
async function loadProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos?sort=updated&direction=desc&per_page=6`
    );

    const repos = await response.json();
    projectsContainer.innerHTML = "";

    if (!Array.isArray(repos) || repos.length === 0) {
      projectsContainer.innerHTML = `
        <div class="project-card">
          <h3>Projetos em breve</h3>
          <p>Esta área será preenchida automaticamente quando novos projetos forem publicados no GitHub.</p>
          <a href="https://github.com/${githubUser}" target="_blank">Abrir GitHub</a>
        </div>
      `;
      return;
    }

    repos.forEach(repo => {
      const card = document.createElement("article");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Projeto publicado no GitHub. Em breve terá uma descrição personalizada."}</p>
        <p><strong>Linguagem:</strong> ${repo.language || "Não definida"}</p>
        <a href="${repo.html_url}" target="_blank">Abrir projeto</a>
      `;

      projectsContainer.appendChild(card);
    });

  } catch {
    projectsContainer.innerHTML = `
      <div class="project-card">
        <h3>Projetos em breve</h3>
        <p>Não foi possível carregar os projetos agora.</p>
        <a href="https://github.com/${githubUser}" target="_blank">Abrir GitHub</a>
      </div>
    `;
  }
}

loadProjects();

/* REVEAL */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 95) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();