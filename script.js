* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: auto;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #030303;
  color: #f2f2f2;
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -5;
  background:
    radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08), transparent 18%),
    radial-gradient(circle at 18% 20%, rgba(255,255,255,0.035), transparent 22%),
    radial-gradient(circle at 80% 75%, rgba(255,255,255,0.035), transparent 26%),
    linear-gradient(180deg, #030303, #070707 45%, #020202);
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -4;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 72px 72px;
  opacity: 0.5;
}

/* PARTÍCULAS */

.space-particles {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -2;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: rgba(255,255,255,0.8);
  box-shadow: 0 0 12px rgba(255,255,255,0.75);
  animation: particleMove linear infinite;
}

@keyframes particleMove {
  from {
    transform: translateY(0);
    opacity: 0.1;
  }

  20% {
    opacity: 0.9;
  }

  to {
    transform: translateY(-130vh);
    opacity: 0;
  }
}

/* FADE DO SCROLL */

.scroll-fade {
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: radial-gradient(circle at center, rgba(255,255,255,0.08), rgba(0,0,0,0.9));
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}

.scroll-fade.active {
  opacity: 1;
}

/* TELA INICIAL */

.enter-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background:
    radial-gradient(circle at center, #101010 0%, #070707 46%, #020202 90%);
  transition: opacity 0.8s ease, visibility 0.8s ease;
}

.enter-screen::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  opacity: 0.45;
}

.enter-screen::after {
  content: "";
  position: absolute;
  width: 1600px;
  height: 900px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.08);
  transform: rotate(-9deg);
  pointer-events: none;
}

.intro-stars {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 12% 20%, rgba(255,255,255,0.5) 1px, transparent 2px),
    radial-gradient(circle at 82% 30%, rgba(255,255,255,0.4) 1px, transparent 2px),
    radial-gradient(circle at 35% 74%, rgba(255,255,255,0.35) 1px, transparent 2px),
    radial-gradient(circle at 70% 85%, rgba(255,255,255,0.35) 1px, transparent 2px);
  opacity: 0.7;
}

.enter-screen.hide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.enter-panel {
  position: relative;
  width: min(1320px, 96vw);
  height: min(760px, 90vh);
  display: flex;
  align-items: center;
  justify-content: center;
}

.astro-light {
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  width: 760px;
  height: 360px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 20%, rgba(255,255,255,0.98), rgba(255,255,255,0.13) 20%, transparent 58%);
  filter: blur(1px);
  opacity: 0.95;
}

.astro-light::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 25px;
  transform: translateX(-50%);
  width: 620px;
  height: 210px;
  border-radius: 620px 620px 0 0;
  border: 1px solid rgba(255,255,255,0.12);
  border-bottom: none;
  box-shadow:
    0 -10px 60px rgba(255,255,255,0.12),
    inset 0 15px 40px rgba(255,255,255,0.06);
}

.orbit-line {
  position: absolute;
  width: 1350px;
  height: 520px;
  border: 1px solid rgba(255,255,255,0.075);
  border-radius: 50%;
  pointer-events: none;
}

.orbit-line-1 {
  transform: rotate(-8deg);
}

.orbit-line-2 {
  width: 1180px;
  height: 430px;
  transform: rotate(12deg);
  opacity: 0.55;
}

/* PAINEL CENTRAL */

.center-box {
  position: relative;
  z-index: 5;
  width: min(1040px, 88vw);
  min-height: 410px;
  padding: 42px 44px;
  border-radius: 38px;
  text-align: center;
  background:
    linear-gradient(180deg, rgba(18,18,18,0.94), rgba(5,5,5,0.92));
  border: 1px solid rgba(255,255,255,0.17);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.03) inset,
    0 25px 80px rgba(0,0,0,0.7),
    0 0 42px rgba(255,255,255,0.08);
  backdrop-filter: blur(14px);
  animation: panelEnter 1.15s cubic-bezier(.2,.8,.2,1) both;
}

.center-box::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 38px;
  pointer-events: none;
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,0.04),
    inset 0 -18px 50px rgba(255,255,255,0.025);
}

.center-box::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 55%;
  height: 1px;
  transform: translateX(-50%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent);
  box-shadow: 0 0 24px rgba(255,255,255,0.65);
}

.mini-logo {
  font-size: 2rem;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.85);
  font-weight: 800;
  margin-bottom: 16px;
}

.center-box p {
  color: #cfcfcf;
  text-transform: uppercase;
  letter-spacing: 7px;
  font-size: 0.78rem;
  font-weight: 900;
  margin-bottom: 20px;
}

.center-box h1 {
  font-size: clamp(4.2rem, 9vw, 8rem);
  line-height: 0.9;
  letter-spacing: 5px;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255,255,255,0.92);
  margin-bottom: 22px;
  font-weight: 900;
}

.center-box h1 span {
  display: block;
  font-size: clamp(2rem, 5vw, 4.5rem);
  letter-spacing: 12px;
  margin-bottom: 8px;
}

.thin-line {
  width: min(560px, 70%);
  height: 1px;
  margin: 0 auto 18px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
}

.center-box strong {
  display: block;
  color: #d8d8d8;
  margin-bottom: 34px;
  font-size: 1.05rem;
}

.center-box button {
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 999px;
  padding: 17px 34px;
  background: rgba(255,255,255,0.045);
  color: #ffffff;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  min-width: 285px;
  transition: 0.3s ease;
}

.center-box button span {
  margin-left: 16px;
}

.center-box button:hover {
  background: #ffffff;
  color: #050505;
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(255,255,255,0.15);
}

/* LOGOS */

.orbit {
  position: absolute;
  z-index: 6;
  width: 92px;
  height: 92px;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.045);
  border: 1px solid rgba(255,255,255,0.14);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 45px rgba(0,0,0,0.34);
  transition: 0.28s ease;
  animation: orbitFloat 4.5s ease-in-out infinite alternate;
  text-decoration: none;
}

.logo-mark {
  font-weight: 900;
  font-size: 1.45rem;
  line-height: 1;
}

.orbit small {
  max-width: 78px;
  color: rgba(255,255,255,0.7);
  font-size: 0.66rem;
  text-align: center;
  line-height: 1;
  opacity: 0;
  transform: translateY(4px);
  transition: 0.25s ease;
}

.orbit:hover small {
  opacity: 1;
  transform: translateY(0);
}

.orbit:hover {
  transform: translateY(-6px) scale(1.06);
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.28);
}

.blender-mark {
  color: #ff9f1a;
  text-shadow: 0 0 16px rgba(255,159,26,0.45);
}

.ae-mark {
  color: #9b8cff;
  text-shadow: 0 0 16px rgba(155,140,255,0.45);
}

.vscode-mark {
  color: #2f81f7;
  text-shadow: 0 0 16px rgba(47,129,247,0.45);
}

.capcut-mark {
  color: #ffffff;
  text-shadow: 0 0 14px rgba(255,255,255,0.4);
}

.unreal-mark {
  color: #ffffff;
  font-family: Georgia, serif;
  text-shadow: 0 0 14px rgba(255,255,255,0.35);
}

.affinity-mark {
  color: #a259ff;
  text-shadow: 0 0 16px rgba(162,89,255,0.45);
}

.github-mark {
  color: #ffffff;
  font-size: 1.1rem;
  text-shadow: 0 0 14px rgba(255,255,255,0.35);
}

.orbit-1 {
  top: 10%;
  left: 7%;
}

.orbit-2 {
  top: 48%;
  left: 0;
  animation-delay: .4s;
}

.orbit-3 {
  top: 10%;
  right: 7%;
  animation-delay: .7s;
}

.orbit-4 {
  bottom: 12%;
  right: 8%;
  animation-delay: 1s;
}

.orbit-5 {
  top: 48%;
  right: 0;
  animation-delay: 1.3s;
}

.orbit-6 {
  bottom: 12%;
  left: 8%;
  animation-delay: 1.6s;
}

.orbit-7 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 1.9s;
}

/* SITE PRINCIPAL */

.main-site {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 1s ease, transform 1s ease;
}

.main-site.show {
  opacity: 1;
  transform: translateY(0);
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 82px;
  padding: 0 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(5, 5, 5, 0.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  z-index: 50;
}

.navbar h2 {
  color: #ffffff;
  font-size: 1.4rem;
}

.navbar h2 span {
  color: #cccccc;
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  color: #d7d7d7;
  text-decoration: none;
  transition: 0.25s;
}

.nav-links a:hover {
  color: #ffffff;
}

.hero {
  min-height: 100vh;
  padding: 140px 8% 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-astro {
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  width: 850px;
  height: 420px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 18%, rgba(255,255,255,0.9), rgba(255,255,255,0.08) 20%, transparent 56%);
  opacity: 0.75;
}

.hero-panel {
  position: relative;
  width: min(1040px, 92vw);
  min-height: 430px;
  padding: 52px 38px;
  border-radius: 42px;
  background:
    linear-gradient(180deg, rgba(18,18,18,0.94), rgba(5,5,5,0.92));
  border: 1px solid rgba(255,255,255,0.16);
  box-shadow:
    0 30px 80px rgba(0,0,0,0.6),
    0 0 24px rgba(255,255,255,0.06);
  text-align: center;
  backdrop-filter: blur(10px);
}

.tag,
.section-tag {
  color: #bdbdbd;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 900;
  font-size: 0.78rem;
}

.hero-panel h1 {
  margin: 18px 0 16px;
  font-size: clamp(4rem, 9vw, 7.4rem);
  line-height: 0.92;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255,255,255,0.92);
  letter-spacing: 5px;
}

.hero-subtitle {
  color: #e6e6e6;
  font-weight: 700;
  margin-bottom: 22px;
  font-size: 1.05rem;
}

.hero-description {
  color: #cfcfcf;
  line-height: 1.7;
  max-width: 760px;
  margin: 0 auto;
  font-size: 1.05rem;
}

.buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 34px;
}

.btn {
  position: relative;
  display: inline-block;
  border: 1px solid rgba(255,255,255,0.16);
  background: rgba(255,255,255,0.04);
  color: #ffffff;
  padding: 15px 28px;
  border-radius: 18px;
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
  overflow: hidden;
  transition: 0.25s ease;
}

.btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.16), transparent);
  transform: translateX(-120%);
  transition: 0.5s;
}

.btn:hover::before {
  transform: translateX(120%);
}

.btn:hover {
  color: #050505;
  background: #ffffff;
  border-color: transparent;
}

.btn.primary {
  background: #ffffff;
  color: #050505;
  border: none;
}

/* SEÇÕES */

.section {
  padding: 95px 8%;
}

.section h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  margin: 14px 0 22px;
}

.section p {
  color: #c8c8c8;
  line-height: 1.7;
  font-size: 1.04rem;
}

.glass-block,
.skill-card,
.project-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 28px;
  padding: 28px;
  box-shadow: 0 14px 40px rgba(0,0,0,0.26);
}

.glass-block p + p {
  margin-top: 16px;
}

.skill-cards,
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  margin-top: 34px;
}

.skill-card,
.project-card {
  transition: 0.25s ease;
}

.skill-card:hover,
.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255,255,255,0.18);
}

.skill-card h3,
.project-card h3 {
  margin-bottom: 12px;
  color: #ffffff;
}

.tools-title {
  margin: 50px 0 20px;
  color: #ffffff;
}

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tools-grid a {
  padding: 12px 18px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.10);
  color: #f0f0f0;
  font-weight: 800;
  text-decoration: none;
  transition: 0.25s;
}

.tools-grid a:hover {
  background: #ffffff;
  color: #050505;
}

.project-card a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 900;
}

.contact {
  text-align: center;
}

.contact p {
  max-width: 760px;
  margin: 0 auto 28px;
}

.contact-link {
  margin-top: 10px;
}

footer {
  text-align: center;
  padding: 28px;
  color: #9b9b9b;
  border-top: 1px solid rgba(255,255,255,0.08);
}

/* REVEAL */

.reveal {
  opacity: 0;
  transform: translateY(35px);
  transition: 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* ANIMAÇÕES */

@keyframes orbitFloat {
  from {
    margin-top: 0;
  }

  to {
    margin-top: -18px;
  }
}

@keyframes panelEnter {
  from {
    opacity: 0;
    transform: translateY(35px) scale(0.98);
    filter: blur(6px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* RESPONSIVO */

@media (max-width: 950px) {
  .nav-links {
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .navbar {
    height: auto;
    padding: 18px 8%;
    flex-direction: column;
    gap: 14px;
  }

  .center-box,
  .hero-panel {
    padding: 34px 22px;
    min-height: auto;
  }

  .center-box h1 {
    font-size: clamp(3.2rem, 15vw, 5.5rem);
  }

  .orbit {
    display: none;
  }

  .orbit-line {
    display: none;
  }

  .astro-light,
  .hero-astro {
    width: 440px;
    height: 240px;
  }

  .center-box button {
    min-width: auto;
    width: 100%;
  }
}