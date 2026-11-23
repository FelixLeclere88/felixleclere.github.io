(() => {
  const saved = localStorage.getItem("portfolio-language");
  let lang = saved || "fr";
  const words = {
    fr: { navProjects:"Projets", navAbout:"À propos", navContact:"Contact", eyebrow:"GAMEPLAY PROGRAMMER • PORTFOLIO", heroTitle:"Des mécaniques pensées<br>pour <em>être jouées.</em>", heroText:"Portfolio de développement gameplay — prototypes, systèmes de jeu et expériences interactives.", viewProjects:"Découvrir les projets", aboutTitle:"À propos", aboutText:"Je suis développeur gameplay, avec une expérience sur Unity et Unreal Engine. Ce portfolio rassemble mes projets et les mécaniques auxquelles j’ai contribué.", skillsTitle:"Compétences", skills:"C# · Unity · Unreal Engine · Blueprints · Gameplay systems", contactTitle:"Travaillons ensemble", contactText:"Intéressé par mon profil ? Contactez-moi pour discuter de gameplay programming, de prototypes ou d’opportunités junior.", email:"Remplace cette adresse par ton e-mail", projectLabel:"Projet", details:"Voir le projet", back:"Retour à l’accueil", features:"Mécaniques et fonctionnalités", projectIntro:"Présentation du projet", footer:"Créé avec passion pour le gameplay.", placeholderNote:"Les textes Lorem Ipsum sont à remplacer dans project-content.js.", flameCard:"Jeu de plateforme 3D et mécaniques de gameplay.", ayoCard:"Jeu de craft.", phantomoraCard:"Prototype expérimental centré sur des tests de mécaniques." },
    en: { navProjects:"Projects", navAbout:"About", navContact:"Contact", eyebrow:"GAMEPLAY PROGRAMMER • PORTFOLIO", heroTitle:"Mechanics designed<br>to be <em>played.</em>", heroText:"Gameplay development portfolio — prototypes, game systems, and interactive experiences.", viewProjects:"Explore projects", aboutTitle:"About", aboutText:"I’m a gameplay developer with experience in Unity and Unreal Engine. This portfolio showcases my projects and the mechanics I contributed to.", skillsTitle:"Skills", skills:"C# · Unity · Unreal Engine · Blueprints · Gameplay systems", contactTitle:"Let’s work together", contactText:"Interested in my profile? Get in touch to discuss gameplay programming, prototypes, or junior opportunities.", email:"Replace this address with your email", projectLabel:"Project", details:"View project", back:"Back to home", features:"Mechanics and features", projectIntro:"Project overview", footer:"Made with a passion for gameplay.", placeholderNote:"Replace the Lorem Ipsum text in project-content.js.", flameCard:"2D platformer.", ayoCard:"Crafting game.", phantomoraCard:"Experimental prototype focused on mechanics testing." }
  };
  function t(key){ return words[lang][key] || key; }
  function setLanguage(next){
    lang = next; localStorage.setItem("portfolio-language", lang);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll("[data-lang-choice]").forEach(el => el.classList.toggle("active", el.dataset.langChoice === lang));
    renderProject();
  }
  function pick(value){ return value && (value[lang] || value.fr || value.en) || ""; }
  function renderProject(){
    const root = document.querySelector("[data-project]");
    if(!root || !window.PORTFOLIO_CONTENT) return;
    const project = window.PORTFOLIO_CONTENT[root.dataset.project];
    if(!project) return;
    document.title = pick(project.title) + " — Portfolio";
    const hero = root.querySelector(".project-hero");
    hero.innerHTML = `<img class="project-cover" src="${project.image}" alt="${pick(project.imageAlt)}"><div class="project-hero-copy"><p class="eyebrow">${t("projectLabel")}</p><h1>${pick(project.title)}</h1><p class="project-subtitle">${pick(project.subtitle)}</p><p class="project-description">${pick(project.description)}</p></div>`;
    const groups = root.querySelector(".project-groups");
    groups.innerHTML = `<h2>${t("features")}</h2>` + project.groups.map(group => `<section class="feature-group"><h3>${pick(group.title)}</h3><div class="feature-grid">${group.features.map(feature => `<article class="feature-card" id="${feature.id}"><div class="video-wrap"><video controls preload="metadata" playsinline aria-label="${pick(feature.title)}"><source src="${feature.video}" type="video/mp4">Your browser does not support embedded MP4 video.</video></div><div class="feature-copy"><h4>${pick(feature.title)}</h4><p>${pick(feature.description)}</p></div></article>`).join("")}</div></section>`).join("");
    root.querySelector(".project-intro-label").textContent = t("projectIntro");
    root.querySelector(".placeholder-note").textContent = t("placeholderNote");
  }
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-lang-choice]").forEach(el => el.addEventListener("click", () => setLanguage(el.dataset.langChoice)));
    document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    setLanguage(lang);
    const menu = document.querySelector(".menu-toggle");
    if(menu) menu.addEventListener("click", () => document.querySelector(".nav-links").classList.toggle("open"));
  });
})();