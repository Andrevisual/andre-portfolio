<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>André Pavan | Portfólio</title>

  <link rel="stylesheet" href="style.css" />

  <style>
    html {
      scroll-behavior: smooth;
    }

    section,
    header {
      scroll-margin-top: 90px;
    }


    .requirements-box {
      margin-top: 18px;
      padding: 16px 18px;
      border: 1px solid rgba(255, 213, 79, 0.28);
      border-radius: 16px;
      background: rgba(255, 213, 79, 0.06);
    }

    .requirements-box h4 {
      margin: 0 0 10px;
      color: #ffd54f;
      font-size: 1rem;
    }

    .requirements-box ul {
      margin: 0;
      padding-left: 18px;
      color: #e8e8e8;
      line-height: 1.65;
    }

    .requirements-note {
      margin-top: 10px;
      color: #bdbdbd;
      font-size: 0.92rem;
    }


    .site-name {
      display: inline-flex;
      align-items: baseline;
      gap: 0.28rem;
      white-space: nowrap;
      line-height: 1;
    }

    .site-name span {
      display: inline-block;
      white-space: nowrap;
    }

    .smartcapital-features {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin: 18px 0 0;
      padding: 0;
      list-style: none;
    }

    .smartcapital-features li {
      border: 1px solid rgba(255, 213, 79, 0.22);
      border-radius: 999px;
      padding: 9px 12px;
      background: rgba(255, 213, 79, 0.07);
      color: #f5f5f5;
      font-size: 0.92rem;
    }

    .highlight-card,
    .content-card,
    .glass-block {
      transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
    }

    .highlight-card:hover,
    .content-card:hover,
    .glass-block:hover {
      transform: translateY(-3px);
      border-color: rgba(255, 213, 79, 0.45);
      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
    }

    .btn {
      transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
    }

    .btn:hover {
      transform: translateY(-2px);
    }

    @media (max-width: 760px) {
      .navbar {
        align-items: center;
        gap: 12px;
      }

      .site-name {
        font-size: 1.05rem;
        letter-spacing: -0.02em;
      }

      .nav-links {
        gap: 8px;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .hero h1,
      .center-box h1 {
        font-size: clamp(2.2rem, 14vw, 4.2rem);
        line-height: 0.95;
        word-break: normal;
        overflow-wrap: normal;
      }

      .smartcapital-features {
        grid-template-columns: 1fr;
      }

      .requirements-box {
        padding: 14px;
      }
    }


    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }
    }
  </style>


  <style>
    /* AJUSTE FINAL — HERO E MOBILE */
    :root {
      --sc-bg: #05070d;
      --sc-card: rgba(10, 12, 18, 0.86);
      --sc-border: rgba(255, 255, 255, 0.12);
      --sc-gold: #ffd84d;
      --sc-gold-2: #d6ad2f;
      --sc-text: #f6f6f6;
      --sc-muted: rgba(255, 255, 255, 0.72);
    }

    body {
      background:
        radial-gradient(circle at 20% 12%, rgba(255, 216, 77, 0.07), transparent 28%),
        radial-gradient(circle at 82% 14%, rgba(90, 160, 255, 0.06), transparent 24%),
        radial-gradient(circle at 50% 92%, rgba(255, 216, 77, 0.08), transparent 26%),
        linear-gradient(180deg, #03050a 0%, #05070d 48%, #02040a 100%) !important;
      color: var(--sc-text);
      overflow-x: hidden;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: -2;
      background-image:
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
      background-size: 54px 54px;
      opacity: 0.18;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.45));
    }

    .enter-screen {
      min-height: 100svh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 52px 28px;
      background:
        radial-gradient(circle at center, rgba(255, 216, 77, 0.08), transparent 34%),
        linear-gradient(180deg, rgba(255,255,255,0.015), rgba(0,0,0,0));
    }

    .enter-panel {
      width: min(1120px, 100%);
      min-height: 610px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 34px;
      border: 1px solid var(--sc-border);
      background:
        linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012)),
        rgba(5, 7, 13, 0.55);
      box-shadow: 0 28px 90px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.05);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    .enter-panel::after {
      content: "";
      position: absolute;
      left: 10%;
      right: 10%;
      bottom: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255,216,77,0.9), transparent);
      box-shadow: 0 0 32px rgba(255,216,77,0.45);
    }

    .center-box {
      width: min(720px, 100%);
      text-align: center;
      padding: 54px 44px 40px;
      border-radius: 32px;
      background:
        radial-gradient(circle at 50% 0%, rgba(255,255,255,0.055), transparent 32%),
        rgba(6, 8, 14, 0.82);
      border: 1px solid rgba(255,255,255,0.11);
      box-shadow: 0 18px 60px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05);
    }

    .center-box p,
    .tag,
    .section-tag {
      color: var(--sc-gold);
      letter-spacing: 0.42em;
      font-weight: 800;
      text-transform: uppercase;
    }

    .center-box h1 {
      margin: 0;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.055em;
      line-height: 0.92;
      font-size: clamp(4.2rem, 8vw, 7.6rem);
      color: transparent;
      -webkit-text-stroke: 2px rgba(255,255,255,0.9);
      text-shadow: none;
    }

    .center-box h1 span {
      display: block;
      font-size: clamp(2.4rem, 4.2vw, 4rem);
      letter-spacing: -0.025em;
      margin-bottom: 10px;
    }

    .thin-line {
      width: min(520px, 100%);
      height: 1px;
      margin: 24px auto 16px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
    }

    .center-box strong {
      display: block;
      margin-bottom: 28px;
      color: rgba(255,255,255,0.92);
      font-size: clamp(1rem, 1.8vw, 1.4rem);
    }

    #enterBtn {
      border-radius: 999px;
      padding: 18px 32px;
      min-width: 310px;
      border: 1px solid rgba(255,255,255,0.12);
      background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
      color: #fff;
      font-weight: 800;
      box-shadow: 0 14px 34px rgba(0,0,0,0.35);
      transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
    }

    #enterBtn:hover {
      transform: translateY(-2px);
      border-color: rgba(255,216,77,0.45);
      box-shadow: 0 18px 48px rgba(0,0,0,0.45);
    }

    #enterBtn span {
      color: var(--sc-gold);
      margin-left: 12px;
    }

    .orbit {
      position: absolute;
      width: 94px;
      min-height: 94px;
      border-radius: 24px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(15, 17, 24, 0.78);
      color: #fff;
      text-decoration: none;
      box-shadow: 0 18px 40px rgba(0,0,0,0.32);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    .orbit-1 { left: -18px; top: 14%; }
    .orbit-2 { left: -110px; top: 50%; transform: translateY(-50%); }
    .orbit-3 { right: -18px; top: 14%; }
    .orbit-4 { right: -18px; bottom: 14%; }
    .orbit-5 { right: -110px; top: 50%; transform: translateY(-50%); }
    .orbit-6 { left: -18px; bottom: 14%; }
    .orbit-7 { left: 50%; top: -46px; transform: translateX(-50%); }

    .navbar {
      position: sticky;
      top: 0;
      z-index: 20;
      background: rgba(4, 6, 11, 0.88);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .site-name {
      display: inline-flex;
      align-items: baseline;
      gap: .3rem;
      white-space: nowrap;
    }

    .site-name span {
      white-space: nowrap;
    }

    .hero {
      min-height: calc(100svh - 78px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px 22px;
    }

    .hero-panel {
      width: min(780px, 100%);
      text-align: center;
      border-radius: 34px;
      padding: 46px 36px;
      background:
        radial-gradient(circle at 50% 0%, rgba(255,216,77,0.075), transparent 32%),
        rgba(8, 10, 16, 0.84);
      border: 1px solid rgba(255,255,255,0.11);
      box-shadow: 0 24px 82px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.04);
    }

    .hero-panel h1 {
      color: transparent;
      -webkit-text-stroke: 1.8px rgba(255,255,255,0.9);
      font-weight: 900;
      letter-spacing: -0.055em;
      line-height: .95;
      font-size: clamp(3.6rem, 7vw, 6.2rem);
      text-transform: uppercase;
      text-shadow: none;
    }

    .hero-description {
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.75;
      color: var(--sc-muted);
    }

    @media (max-width: 900px) {
      .orbit-2,
      .orbit-5 {
        display: none;
      }
    }

    @media (max-width: 760px) {
      body::before {
        background-size: 42px 42px;
        opacity: 0.13;
      }

      .enter-screen {
        min-height: 100svh;
        padding: 28px 14px;
        align-items: center;
      }

      .enter-panel {
        min-height: auto;
        border-radius: 30px;
        padding: 14px;
        background:
          radial-gradient(circle at 50% 0%, rgba(255,216,77,0.08), transparent 34%),
          rgba(7, 9, 15, 0.72);
      }

      .center-box {
        padding: 38px 20px 28px;
        border-radius: 28px;
      }

      .center-box p {
        font-size: .78rem;
        letter-spacing: .22em;
        margin-bottom: 14px;
      }

      /* CELULAR: sem letra vazada/contornada. Fica limpo e profissional. */
      .center-box h1,
      .hero-panel h1 {
        color: #f7f7f7 !important;
        -webkit-text-stroke: 0 !important;
        text-shadow: 0 8px 28px rgba(0,0,0,0.42);
        letter-spacing: -0.045em;
      }

      .center-box h1 {
        font-size: clamp(3.1rem, 16vw, 4.7rem);
        line-height: .94;
      }

      .center-box h1 span {
        font-size: clamp(1.9rem, 9vw, 2.6rem);
        letter-spacing: .02em;
        color: var(--sc-gold);
        margin-bottom: 8px;
      }

      .center-box strong {
        font-size: .98rem;
        line-height: 1.55;
        margin-bottom: 22px;
      }

      #enterBtn {
        width: 100%;
        min-width: 0;
        padding: 17px 18px;
      }

      .orbit {
        display: none;
      }

      .navbar {
        padding: 14px 12px;
      }

      .site-name {
        font-size: 1.65rem !important;
        line-height: 1;
      }

      .nav-links {
        justify-content: center;
        gap: 6px;
      }

      .nav-links a {
        padding: 8px 8px;
        font-size: .92rem;
      }

      .hero {
        min-height: auto;
        padding: 26px 12px;
      }

      .hero-panel {
        border-radius: 28px;
        padding: 32px 20px 26px;
      }

      .tag,
      .section-tag {
        letter-spacing: .20em;
        font-size: .78rem;
      }

      .hero-panel h1 {
        color: var(--sc-gold) !important;
        font-size: clamp(2.8rem, 14vw, 4.1rem);
        line-height: 1;
      }

      .hero-subtitle {
        font-size: 1rem;
        line-height: 1.45;
      }

      .hero-description {
        font-size: .98rem;
        line-height: 1.72;
      }
    }
  </style>

</head>
<body>

  <audio id="clickSound" src="assets/click.mp3" preload="auto"></audio>
  <audio id="bgMusic" src="assets/music.mp3" loop preload="auto"></audio>

  <div id="scrollFade" class="scroll-fade"></div>
  <div id="spaceParticles" class="space-particles"></div>

  <!-- TELA INICIAL -->
  <div id="enterScreen" class="enter-screen">
    <div class="intro-stars"></div>

    <div class="enter-panel">

      <a class="orbit orbit-1" href="https://www.blender.org/" target="_blank" aria-label="Blender">
        <span class="badge badge-orange">Bl</span>
        <small>Blender</small>
      </a>

      <a class="orbit orbit-2" href="https://www.adobe.com/products/aftereffects.html" target="_blank" aria-label="After Effects">
        <span class="badge badge-purple">Ae</span>
        <small>After Effects</small>
      </a>

      <a class="orbit orbit-3" href="https://code.visualstudio.com/" target="_blank" aria-label="VS Code">
        <span class="badge badge-blue">VS</span>
        <small>VS Code</small>
      </a>

      <a class="orbit orbit-4" href="https://www.capcut.com/" target="_blank" aria-label="CapCut">
        <span class="badge badge-white">Cc</span>
        <small>CapCut</small>
      </a>

      <a class="orbit orbit-5" href="https://www.unrealengine.com/" target="_blank" aria-label="Unreal Engine">
        <span class="badge badge-white">U</span>
        <small>Unreal</small>
      </a>

      <a class="orbit orbit-6" href="https://affinity.serif.com/" target="_blank" aria-label="Affinity">
        <span class="badge badge-pink">Af</span>
        <small>Affinity</small>
      </a>

      <a class="orbit orbit-7" href="https://github.com/" target="_blank" aria-label="GitHub">
        <span class="badge badge-white">GH</span>
        <small>GitHub</small>
      </a>

      <div class="center-box">
        <p>PORTFÓLIO GAMER TECH</p>

        <h1>
          <span>CONHEÇA</span>
          ANDRÉ PAVAN
        </h1>

        <div class="thin-line"></div>

        <strong>Motion • 3D • Web • Edição</strong>

        <button id="enterBtn">
          Entrar na experiência
          <span>→</span>
        </button>
      </div>
    </div>
  </div>

  <!-- SITE -->
  <div id="mainSite" class="main-site">

    <nav class="navbar">
      <h2 class="site-name"><span>André</span><span>Pavan</span></h2>

      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>

    <header id="home" class="hero reveal">
      <div class="hero-panel">
        <span class="tag">PORTFÓLIO CRIATIVO</span>

        <h1>André Pavan</h1>

        <p class="hero-subtitle">
          Motion • 3D • Web • Edição
        </p>

        <p class="hero-description">
          Estudante de Ciência da Computação, editor, criador 3D e apaixonado por jogos.
          Aqui você encontra meus trabalhos, ideias e conteúdos organizados de forma clara e profissional.
        </p>

        <div class="buttons">
          <a href="#videos" class="btn primary">Vídeos</a>
          <a href="#smartcapital" class="btn">SmartCapital</a>
          <a href="#posts" class="btn">Posts</a>
        </div>
      </div>
    </header>

    <section id="sobre" class="section reveal">
      <span class="section-tag">Sobre mim</span>

      <h2>Criatividade com visão prática.</h2>

      <div class="glass-block">
        <p>
          Meu nome é André Pavan Sou estudante de Ciência da Computação e venho de experiências
          com pintura, solda, montagem e edição.
        </p>

        <p>
          Hoje meu foco está em desenvolvimento web, motion design, edição de vídeo e criação 3D.
          Meu objetivo é unir tecnologia, estética e experiência visual em projetos modernos.
        </p>
      </div>
    </section>

    <section id="habilidades" class="section reveal">
      <span class="section-tag">Habilidades</span>

      <h2>O que eu faço</h2>

      <div class="skill-cards">
        <article class="skill-card">
          <h3>Desenvolvimento Web</h3>
          <p>
            Criação de páginas modernas, responsivas e organizadas usando HTML, CSS, JavaScript e GitHub.
          </p>
        </article>

        <article class="skill-card">
          <h3>Edição e Motion</h3>
          <p>
            Edição de vídeos, motion design, cortes dinâmicos, animações e efeitos visuais para conteúdo digital.
          </p>
        </article>

        <article class="skill-card">
          <h3>3D e Criatividade</h3>
          <p>
            Criação de cenas, elementos 3D e composições visuais com foco em estética, impacto visual e identidade.
          </p>
        </article>
      </div>

      <h3 class="tools-title">Ferramentas que uso</h3>

      <div class="tools-grid">
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">HTML</a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">CSS</a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">JavaScript</a>
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="https://www.blender.org/" target="_blank">Blender</a>
        <a href="https://www.adobe.com/products/aftereffects.html" target="_blank">After Effects</a>
        <a href="https://www.capcut.com/" target="_blank">CapCut</a>
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        <a href="https://www.unrealengine.com/" target="_blank">Unreal</a>
        <a href="https://affinity.serif.com/" target="_blank">Affinity</a>
      </div>
    </section>

    <section id="videos" class="section reveal">
      <span class="section-tag">Vídeos</span>

      <h2>Destaques em vídeo</h2>

      <div class="content-grid">
        <article class="content-card highlight-card">
          <h3>Motion Design</h3>
          <p>
            Trabalhos com animações, cortes dinâmicos, ritmo visual e composição para conteúdo digital.
          </p>
          <span class="status-badge">Em breve</span>
        </article>

        <article class="content-card">
          <h3>3D no Blender</h3>
          <p>
            Criação de cenas, objetos, testes visuais e composições em 3D com foco em apresentação.
          </p>
          <span class="status-badge">Em breve</span>
        </article>

        <article class="content-card">
          <h3>Edição Criativa</h3>
          <p>
            Vídeos com identidade visual, cortes modernos, efeitos e acabamento profissional.
          </p>
          <span class="status-badge">Em breve</span>
        </article>
      </div>
    </section>

    <section id="smartcapital" class="section reveal">
      <span class="section-tag">Aplicativo Windows</span>

      <h2>SmartCapital 1.0</h2>

      <p class="section-description">
        Primeira versão oficial do meu aplicativo financeiro offline para Windows.
        Feito para quem quer enxergar o dinheiro com clareza: saldos, cartões, dívidas,
        investimentos, recibos e relatórios em um só lugar.
      </p>

      <div class="smartcapital-card highlight-card">
        <div>
          <h3>SmartCapital 1.0 — Controle financeiro completo</h3>
          <p>
            A versão 1.0 traz um painel mais completo, gráficos financeiros, controle de saldos,
            despesas, cartões, limites, relatórios em PDF, recibos, histórico, investimentos,
            proventos e tutorial inicial para começar sem complicação.
          </p>

          <p>
            Ideal para uso pessoal, família, pequenos controles financeiros e organização de dados
            para conferência, imposto de renda ou contabilidade. O app funciona offline, é leve
            e mantém os dados salvos no computador do usuário.
          </p>

          <ul class="smartcapital-features">
            <li>Controle financeiro offline</li>
            <li>Investimentos e proventos</li>
            <li>Relatórios e recibos em PDF</li>
            <li>Gráficos e cartões com limite</li>
          </ul>

          <span class="status-badge">Windows • Offline • Versão 1.0</span>

          <div class="requirements-box">
            <h4>Requisitos mínimos para rodar</h4>
            <ul>
              <li><strong>Sistema:</strong> Windows 10 ou Windows 11, 64 bits.</li>
              <li><strong>Processador Intel:</strong> Core i3 de 3ª geração ou superior; recomendado Core i5 de 3ª geração ou melhor.</li>
              <li><strong>Processador AMD:</strong> Athlon 3000G, Ryzen 3 ou equivalente.</li>
              <li><strong>Memória RAM:</strong> mínimo 4 GB; recomendado 8 GB para uso mais confortável.</li>
              <li><strong>Vídeo:</strong> placa integrada Intel HD, Radeon Vega ou equivalente. Não precisa placa de vídeo dedicada.</li>
              <li><strong>Armazenamento:</strong> cerca de 300 MB livres para o app, assets e relatórios.</li>
            </ul>
            <p class="requirements-note">
              O SmartCapital é leve e funciona offline. Internet só é necessária para recursos opcionais, como buscar cotações de investimentos.
            </p>
          </div>
        </div>

        <div class="download-actions">
          <a
            class="btn primary"
            href="https://github.com/Andrevisual/andre-portfolio/releases/download/v1.00-beta/SmartCapital_v1.0.zip"
          >
            Baixar SmartCapital 1.0
          </a>
          <a class="btn" href="#contato">Falar comigo</a>
        </div>
      </div>
    </section>

    <section id="posts" class="section reveal">
      <span class="section-tag">Posts</span>

      <h2>Posts e ideias</h2>

      <div class="content-grid">
        <article class="content-card">
          <h3>Processo criativo</h3>
          <p>
            Bastidores, conceitos, testes visuais e evolução dos projetos.
          </p>
          <span class="status-badge">Em breve</span>
        </article>

        <article class="content-card highlight-card">
          <h3>Aprendizados</h3>
          <p>
            Estudos sobre design, edição, 3D, tecnologia e desenvolvimento web.
          </p>
          <span class="status-badge">Em breve</span>
        </article>

        <article class="content-card">
          <h3>Atualizações</h3>
          <p>
            Novidades sobre projetos lançados, estudos em andamento e próximos conteúdos.
          </p>
          <span class="status-badge">Em breve</span>
        </article>
      </div>
    </section>

    <section id="contato" class="section contact reveal">
      <span class="section-tag">Contato</span>

      <h2>Vamos conversar?</h2>

      <p>
        Quer falar comigo, ver meu perfil profissional ou acompanhar minha evolução?
        Entre em contato pelo LinkedIn.
      </p>

      <a
        class="btn primary contact-link"
        href="https://www.linkedin.com/in/andrepdesenvolper/"
        target="_blank"
      >
        Entre em contato
      </a>
    </section>

    <footer>
      <p>© 2026 André Pavan — Portfólio criativo.</p>
    </footer>
  </div>

  <script>
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const alvo = document.querySelector(link.getAttribute("href"));
        if (!alvo) return;

        event.preventDefault();
        alvo.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  </script>

  <script src="script.js"></script>
</body>
</html>
