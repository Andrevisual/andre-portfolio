const githubUser = "uchiha9882-debug";

const projectsContainer = document.getElementById("projectsContainer");
const clickSound = document.getElementById("clickSound");
const scrollSound = document.getElementById("scrollSound");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function playSound(sound, volume = 0.25) {
  if (!sound) return;

  sound.volume = volume;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

document.querySelectorAll("a, button, .skill-card, .project-card").forEach(item => {
  item.addEventListener("click", () => {
    playSound(clickSound, 0.3);
  });
});

let lastScrollSound = 0;

window.addEventListener("scroll", () => {
  const now = Date.now();

  if (now - lastScrollSound > 700) {
    playSound(scrollSound, 0.08);
    lastScrollSound = now;
  }
});

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.volume = 0.22;
    bgMusic.play();
    musicBtn.textContent = "Desativar som";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "Ativar som";
  }
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

  } catch (error) {
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