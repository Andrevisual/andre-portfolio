const githubUser = "Andrevisual";

const projectsContainer = document.getElementById("projectsContainer");
const clickSound = document.getElementById("clickSound");
const bgMusic = document.getElementById("bgMusic");
const enterScreen = document.getElementById("enterScreen");
const enterBtn = document.getElementById("enterBtn");
const mainSite = document.getElementById("mainSite");

function playSound(sound, volume = 0.25) {
  if (!sound) return;
  sound.volume = volume;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

/* ENTRADA */
enterBtn.addEventListener("click", () => {
  playSound(clickSound, 0.4);

  bgMusic.volume = 0.18;
  bgMusic.play().catch(() => {});

  enterScreen.classList.add("hide");

  setTimeout(() => {
    mainSite.classList.add("show");
    revealOnScroll();
  }, 350);
});

/* SOM DE CLIQUE */
document.querySelectorAll("a, button").forEach(item => {
  item.addEventListener("click", () => {
    playSound(clickSound, 0.25);
  });
});

/* EFEITO LEVE NOS BOTÕES */
document.querySelectorAll(".btn, .tools-grid a, .project-card, .skill-card").forEach(element => {
  element.addEventListener("mousemove", e => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px) scale(1.02)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
  });
});

/* GITHUB */
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

/* REVEAL AO ROLAR */
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