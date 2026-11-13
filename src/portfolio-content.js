export const portfolioMarkup = `<div class="led-progress" aria-hidden="true"></div>
<div class="wrap">
  <header class="top">
    <a class="brand" href="#inicio" aria-label="Gabriel Lima — início">Gabriel Lima</a>
    <nav class="nav-links" aria-label="Principal">
      <a href="#projetos"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18M8 5V3h8v2"/></svg>Projetos</a>
      <a href="#habilidades"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/></svg>Habilidades</a>
      <a href="#sobre"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>Sobre</a>
      <a href="https://github.com/GabrielSL1" target="_blank" rel="noopener"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 15 3a13 13 0 0 0-6 0C6.5 1.2 5.3 1.5 5.3 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 9 18v4"/></svg>GitHub</a>
      <a class="whatsapp" href="https://wa.me/5535991135568" target="_blank" rel="noopener noreferrer" aria-label="Entrar em contato pelo WhatsApp"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.8a8.5 8.5 0 1 1 16.3-3.7Z"/><path d="M8.8 8.2c.2-.5.5-.5.8-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.4.7 1.1 1.4 1.8 1.8.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.4-1-.2-2.2-.8-3.4-1.9-1.3-1.2-2-2.6-2.2-3.5-.2-.8.2-1.6.6-2Z"/></svg>WhatsApp</a>
    </nav>
  </header>

  <main id="inicio" tabindex="-1">
    <section class="hero hero-modern" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title">Desenvolvo <span class="hero-typewriter" data-typewriter>sistemas web</span> completos.</h1>
        <p>Sou Gabriel Lima, estudante de Análise e Desenvolvimento de Sistemas em Santa Rita do Sapucaí, MG. Vim da eletrônica e hoje desenvolvo projetos web, da interface à integração com dados.</p>
        <div class="btns">
          <a class="btn primary" href="#projetos"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18M8 5V3h8v2"/></svg>Ver projetos</a>
          <a class="btn hero-secondary" href="https://github.com/GabrielSL1" target="_blank" rel="noopener"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 15 3a13 13 0 0 0-6 0C6.5 1.2 5.3 1.5 5.3 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 9 18v4"/></svg>Abrir meu GitHub</a>
        </div>
      </div>
      <div class="hero-visual" aria-label="Ilustração animada de um ambiente de desenvolvimento" role="img">
        <div class="float-card terminal-card">
          <div class="terminal-head"><span></span><span></span><span></span><b>gabriel.dev</b></div>
          <div class="terminal-content">
            <code><em>const</em> <span class="terminal-variable">developer</span> = {</code>
            <code class="indent"><span class="terminal-property">name</span>: <strong>'Gabriel Lima'</strong>,</code>
            <code class="indent"><span class="terminal-property">stack</span>: <strong>'Full Stack'</strong>,</code>
            <code class="indent"><span class="terminal-property">passion</span>: <strong>'Build & create'</strong></code>
            <code>};</code>
            <div class="terminal-cursor"></div>
          </div>
        </div>
        <div class="hero-stack">
          <div class="tech-card react-card"><span class="tech-mark">⚛</span><small>React</small></div>
          <div class="tech-card node-card"><span class="node-mark">JS</span><small>Node.js</small></div>
        </div>
      </div>
    </section>

<section id="projetos" class="projects-section" aria-labelledby="projects-title">
      <h2 id="projects-title">Meus projetos</h2>
      <p class="projects-intro">Conheça o FlowPDF, uma aplicação para organizar documentos. O site e o código estão disponíveis para explorar.</p>
      <div class="projects-showcase">
        <article class="project-card">
          <div class="project-media" data-project-demo></div>
          <div class="project-card-body">
            <h3>FlowPDF</h3>
            <p class="project-lead">Organize seus PDFs e encontre o que precisa.</p>
            <p>Aplicação web para organizar PDFs em pastas e subpastas. A IA analisa os documentos e sugere tags e palavras-chave para facilitar a busca.</p>
            <ul class="tags"><li>Node.js</li><li>Aplicação web</li><li>IA integrada</li></ul>
            <div class="links"><a href="https://final-blue-eight.vercel.app/login" target="_blank" rel="noopener">Abrir site <span aria-hidden="true">↗</span></a><a href="https://github.com/GabrielSL1/FlowPDF" target="_blank" rel="noopener">GitHub <span aria-hidden="true">↗</span></a></div>
          </div>
        </article>
      </div>
    </section>

    <section id="habilidades" class="skills-section" aria-labelledby="skills-title">
      <h2 id="skills-title">Minhas habilidades</h2>
      <p class="skills-intro">Tecnologias e ferramentas que utilizo para construir aplicações web, desde a interface até a API e a integração com dados.</p>
      <div class="skills-grid">
        <article class="skill-group">
          <h3><span class="skill-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg></span>Front-end</h3>
          <p class="skill-caption">Interfaces, componentes e interação.</p>
          <ul class="skill-pills"><li>HTML</li><li>CSS</li><li>JavaScript</li><li>TypeScript</li><li>React / Next.js</li><li>TailwindCSS</li></ul>
          <details class="skill-detail">
            <summary aria-label="Como utilizo front-end">Como utilizo <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></summary>
            <p>Transformo interfaces em páginas responsivas, organizando a estrutura, os estilos e as interações em componentes reutilizáveis.</p>
          </details>
        </article>
        <article class="skill-group">
          <h3><span class="skill-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 4 7v5c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V7l-8-4Z"/><path d="m9 12 2 2 4-4"/></svg></span>Back-end</h3>
          <p class="skill-caption">A lógica por trás da interface.</p>
          <ul class="skill-pills"><li>Node.js</li><li>NestJS</li><li>Python</li><li>APIs REST</li></ul>
          <details class="skill-detail">
            <summary aria-label="Como utilizo back-end">Como utilizo <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></summary>
            <p>Conecto a interface às regras da aplicação com APIs REST e ferramentas do ecossistema Node.js. Também estudo Python para ampliar minha base.</p>
          </details>
        </article>
        <article class="skill-group">
          <h3><span class="skill-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg></span>Dados e ORM</h3>
          <p class="skill-caption">Estrutura, relações e persistência.</p>
          <ul class="skill-pills"><li>Prisma</li><li>Modelagem de dados</li><li>Integração com banco de dados</li></ul>
          <details class="skill-detail">
            <summary aria-label="Como utilizo dados e ORM">Como utilizo <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></summary>
            <p>Organizo os dados e suas relações para integrar a aplicação ao banco, utilizando ferramentas como Prisma nas consultas e na persistência.</p>
          </details>
        </article>
        <article class="skill-group">
          <h3><span class="skill-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16"/></svg></span>Desenvolvimento</h3>
          <p class="skill-caption">Organização e evolução do código.</p>
          <ul class="skill-pills"><li>Git</li><li>GitHub</li><li>TypeScript</li><li>Componentização</li></ul>
          <details class="skill-detail">
            <summary aria-label="Como utilizo ferramentas de desenvolvimento">Como utilizo <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></summary>
            <p>Versiono as mudanças com Git e GitHub e separo o código em componentes. Uso TypeScript para tornar as estruturas de dados mais claras.</p>
          </details>
        </article>
        <article class="skill-group">
          <h3><span class="skill-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 9h4M7 12h7"/></svg></span>Aplicações web</h3>
          <p class="skill-caption">As ferramentas em projetos reais.</p>
          <ul class="skill-pills"><li>Interfaces responsivas</li><li>E-commerce</li><li>Integração com IA</li><li>Organização de PDFs</li></ul>
          <details class="skill-detail">
            <summary aria-label="Como utilizo conhecimentos de aplicações web">Como utilizo <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></summary>
            <p>No <a class="skill-project-link" href="#projetos">FlowPDF</a>, reúno interface, organização de documentos e integração com IA para classificar PDFs e facilitar a busca.</p>
          </details>
        </article>
        <article class="skill-group">
          <h3><span class="skill-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/></svg></span>Outros conhecimentos</h3>
          <p class="skill-caption">Minha base para resolver problemas.</p>
          <ul class="skill-pills"><li>Eletrônica</li><li>Resolução de problemas</li><li>Visão full stack</li></ul>
          <details class="skill-detail">
            <summary aria-label="Como utilizo outros conhecimentos">Como utilizo <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></summary>
            <p>Trago da formação em eletrônica o hábito de investigar como as coisas funcionam: divido problemas em partes, testo alternativas e ajusto a solução.</p>
          </details>
        </article>
      </div>
    </section>

        <section id="sobre">
      <h2>Sobre mim</h2>
      <div class="about">
        <div class="about-photo-wrap">
          <div class="about-monogram" role="img" aria-label="Monograma GL, espaço reservado para uma foto real">GL<span>Desenvolvimento de software</span></div>
        </div>
        <div>
          <p>Sou Gabriel Lima, graduando em Análise e Desenvolvimento de Sistemas, com conclusão prevista para o final de 2026. Minha trajetória começou na eletrônica, e o interesse por entender como as coisas funcionam me levou ao desenvolvimento de software.</p>
          <p>Desenvolvo projetos acadêmicos e pessoais para colocar os estudos em prática. Trabalho com JavaScript, React e desenvolvimento web, e também estudo Python. No FlowPDF, exploro a organização de documentos em uma aplicação web com integração de IA.</p>
          <p>Gosto de dividir um problema em partes, testar alternativas e entender o que precisa ser ajustado. Esse processo me ajuda a aprender novas ferramentas e a tomar decisões com mais clareza a cada projeto.</p>
          <p>Busco uma oportunidade na área de tecnologia para aprender com uma equipe, contribuir com projetos reais e ampliar minha experiência no desenvolvimento de sistemas.</p>
          <dl>
            <dt>Análise e Desenvolvimento de Sistemas</dt>
            <dd>UNICV · conclusão prevista para o final de 2026</dd>
            <dt>Técnico em Eletrônica</dt>
            <dd>SENAI, concluído</dd>
          </dl>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <span>© 2026 Gabriel da Silva Lima</span>
    <nav class="footer-links" aria-label="Links do rodapé">
      <a href="#habilidades">✦ Habilidades</a>
      <a href="#projetos"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18M8 5V3h8v2"/></svg>Projetos</a>
      <a href="#sobre"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>Sobre</a>
      <a href="https://github.com/GabrielSL1" target="_blank" rel="noopener"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 15 3a13 13 0 0 0-6 0C6.5 1.2 5.3 1.5 5.3 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 9 18v4"/></svg>GitHub</a>
      <a class="whatsapp" href="https://wa.me/5535991135568" target="_blank" rel="noopener noreferrer"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.8a8.5 8.5 0 1 1 16.3-3.7Z"/><path d="M8.8 8.2c.2-.5.5-.5.8-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.4.7 1.1 1.4 1.8 1.8.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.4-1-.2-2.2-.8-3.4-1.9-1.3-1.2-2-2.6-2.2-3.5-.2-.8.2-1.6.6-2Z"/></svg>WhatsApp</a>
    </nav>
  </footer>
</div>`;
