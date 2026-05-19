document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");
  const enterButton = document.getElementById("enterButton");

  const clickSound = document.getElementById("clickSound");
  const bgMusic = document.getElementById("bgMusic");

  const menuButton = document.getElementById("menuButton");
  const navMenu = document.getElementById("navMenu");

  const copyPixButton = document.getElementById("copyPixButton");
  const pixKey = document.getElementById("pixKey");

  const VOLUME_REDUZIDO = 0.75;

  const CLICK_VOLUME = 0.25 * VOLUME_REDUZIDO;
  const MUSIC_VOLUME = 0.18 * VOLUME_REDUZIDO;

  let siteAberto = false;

  function playClick() {
    if (!clickSound) return;

    try {
      clickSound.pause();
      clickSound.currentTime = 0;
      clickSound.volume = CLICK_VOLUME;
      clickSound.play().catch(() => {});
    } catch (error) {}
  }

  async function playBackgroundMusic() {
    if (!bgMusic) return;

    try {
      bgMusic.volume = MUSIC_VOLUME;
      bgMusic.loop = true;

      if (bgMusic.paused) {
        await bgMusic.play();
      }
    } catch (error) {
      console.log("Música bloqueada ou não encontrada:", error);
    }
  }

  function revealVisibleSections() {
    document.querySelectorAll(".reveal").forEach((item) => {
      const rect = item.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("visible");
      }
    });
  }

  function updateActiveLink() {
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    let currentId = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 140;

      if (window.scrollY >= top) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentId}`
      );
    });
  }

  function showSite() {
    if (siteAberto) return;

    siteAberto = true;

    playClick();
    playBackgroundMusic();

    if (intro) {
      intro.classList.add("intro-exit");

      setTimeout(() => {
        intro.classList.add("hidden");
      }, 450);
    }

    if (site) {
      site.classList.remove("hidden");

      requestAnimationFrame(() => {
        site.classList.add("site-visible");
      });
    }

    window.scrollTo({
      top: 0,
      behavior: "auto"
    });

    setTimeout(() => {
      revealVisibleSections();
      updateActiveLink();
    }, 80);
  }

  if (enterButton) {
    enterButton.addEventListener("click", showSite);

    enterButton.addEventListener(
      "touchstart",
      () => {
        playBackgroundMusic();
      },
      { once: true }
    );
  }

  document.addEventListener("keydown", (event) => {
    if (!siteAberto && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      showSite();
    }
  });

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

  if ("IntersectionObserver" in window) {
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
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  window.addEventListener(
    "scroll",
    () => {
      updateActiveLink();
    },
    {
      passive: true
    }
  );

  window.addEventListener("load", () => {
    updateActiveLink();
    revealVisibleSections();
  });

  if (copyPixButton && pixKey) {
    copyPixButton.addEventListener("click", async () => {
      const value = pixKey.textContent.trim();

      playClick();

      try {
        await navigator.clipboard.writeText(value);
        copyPixButton.textContent = "Pix copiado!";
      } catch (error) {
        copyPixButton.textContent = "Copie: " + value;
      }

      setTimeout(() => {
        copyPixButton.textContent = "Copiar Pix";
      }, 2200);
    });
  }

  updateActiveLink();
  revealVisibleSections();
});
