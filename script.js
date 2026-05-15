const githubUser = "Andrevisual";

const projectsContainer = document.getElementById("projectsContainer");
const clickSound = document.getElementById("clickSound");
const hoverSound = document.getElementById("hoverSound");
const bgMusic = document.getElementById("bgMusic");
const enterScreen = document.getElementById("enterScreen");
const enterBtn = document.getElementById("enterBtn");

function playSound(sound, volume = 0.25) {
  if (!sound) return;
  sound.volume = volume;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

enterBtn.addEventListener("click", () => {
  playSound(clickSound, 0.4);
  bgMusic.volume = 0.18;
  bgMusic.play().catch(() => {});
  enterScreen.classList.add("hide");
});

document.querySelectorAll("a, button, .skill-card, .project-card, .tools-grid span").forEach(item => {
  item.addEventListener("click", () => playSound(clickSound, 0.3));
  item.addEventListener("mouseenter", () => playSound(hoverSound, 0.1));
});

document.querySelectorAll(".btn, .skill-card, .project-card, .tools-grid span").forEach(element => {
  element.addEventListener("mousemove", e => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px) scale(1.04)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
  });
});

async function loadProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos?sort=updated&direction=desc&per_page=8`
    );

    const repos = await response.json();
    projectsContainer.innerHTML = "";

    if (!Array.isArray(repos) || repos.length === 0) {
      projectsContainer.innerHTML = `
        <div class="project-card">
          <h3>Projetos em breve</h3>
          <p>Esta área será preenchida automaticamente quando novos projetos forem publicados no GitHub.</p>
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
      </div>
    `;
  }
}

loadProjects();

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();