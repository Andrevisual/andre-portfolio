const enterScreen = document.getElementById("enterScreen");
const mainSite = document.getElementById("mainSite");
const enterBtn = document.getElementById("enterBtn");
const clickSound = document.getElementById("clickSound");
const bgMusic = document.getElementById("bgMusic");

let abriu = false;

function tocarClick() {
  if (!clickSound) return;

  try {
    clickSound.currentTime = 0;
    clickSound.volume = 0.25;
    clickSound.play().catch(() => {});
  } catch (e) {}
}

function abrirSite() {
  if (abriu) return;
  abriu = true;

  tocarClick();

  if (bgMusic) {
    try {
      bgMusic.volume = 0.08;
      bgMusic.play().catch(() => {});
    } catch (e) {}
  }

  if (enterScreen) {
    enterScreen.classList.add("hide");

    setTimeout(() => {
      enterScreen.style.display = "none";

      if (mainSite) {
        mainSite.classList.add("show");
        window.scrollTo(0, 0);
      }
    }, 450);
  }
}

if (enterBtn) {
  enterBtn.onclick = abrirSite;
}

document.addEventListener("keydown", function (event) {
  if (!abriu && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    abrirSite();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
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
