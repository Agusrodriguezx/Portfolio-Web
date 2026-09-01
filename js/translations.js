/* translations.js
   Centralized translations (en / es) and runtime application without reload.
   Loads on DOMContentLoaded, applies strings to elements with data-i18n
*/
(function () {
  const translations = {
    en: {
      "hero.title": "QA Engineer | Manual & Automation Testing",

      "header.role": "QA Tester | Manual & Automation",
      "header.status": "Available for new opportunities",

      "summary.title": "Summary",
      "summary.p1": "I am a QA Engineer with training in manual and automated testing for web applications. I combine exploratory and functional testing with automation using Python, Selenium and Pytest, and I am comfortable both documenting Bug Reports in Jira and building test frameworks integrated into CI/CD pipelines. I come from three years in customer service, so clear communication and attention to detail are natural parts of how I work.",

      "skills.automation_title": "Automation & testing",
      "skill.python": "Python",
      "skill.selenium": "Selenium WebDriver",
      "skill.pytest": "Pytest",
      "skill.cypress": "Cypress",
      "skill.behave": "Behave (BDD)",
      "skill.postman": "Postman",

      "skills.qa_practices": "QA practices",
      "skill.manual_testing": "Manual Testing",
      "skill.functional": "Functional & Regression Testing",
      "skill.exploratory": "Exploratory testing",
      "skill.test_design": "Test case design",
      "skill.bug_reports": "Bug Reports",

      "skills.tools_title": "Tools & collaboration",
      "skill.git": "Git / GitHub",
      "skill.github_actions": "GitHub Actions",
      "skill.jira": "Jira",
      "skill.sql": "SQL",
      "skill.scrum": "Scrum / Kanban",

      "projects.title": "Featured projects",

      "project1.title": "Bopp — QA Manual Testing Project",
      "project.status.completed": "✓ Completed",
      "project1.tech": "Jira · Gherkin · Exploratory testing · Kanban",
      "project1.p1": "Exploratory testing on a beta mobile app. I documented 6 structured Jira tickets (context, Acceptance Criteria, QA validation and evidence), organized within a Kanban workflow across Bugs and Improvements. Acceptance Criteria were written in Gherkin syntax with screenshots and recordings as evidence.",
      "project1.metric1": "✓ 6 documented tickets",
      "project1.metric2": "✓ 4 bugs reported",
      "project1.metric3": "✓ 2 user stories",
      "project1.metric4": "✓ Gherkin acceptance criteria",
      "project1.metric5": "✓ Screenshots and visual evidence",
      "project1.metric6": "✓ Full Kanban workflow",

      "project2.title": "Automation framework — Swag Labs",
      "project2.tech": "Python · Selenium WebDriver · Pytest · Behave · GitHub Actions",
      "project2.p1": "Automation framework using Page Object Model (POM) to cover login, inventory and cart. Implemented Data-Driven Testing with CSV/JSON datasets, automated BDD scenarios with Gherkin and Behave, and integrated REST API testing. The CI/CD pipeline in GitHub Actions runs the full suite on every push and generates HTML reports with automatic screenshots on failures.",
      "project2.metric1": "✓ 17 automated scenarios",
      "project2.metric2": "✓ 3 functional modules covered",
      "project2.metric3": "✓ Data-Driven Testing CSV/JSON",
      "project2.metric4": "✓ BDD with Gherkin and Behave",
      "project2.metric5": "✓ CI/CD with GitHub Actions",
      "project2.metric6": "✓ HTML reports with failure screenshots",

      "project3.title": "Cinema Ticket Booking",
      "project.status.inprogress": "⏱ In progress",
      "project3.tech": "Ticket booking app for cinema shows",
      "project3.p1": "Application for reserving and purchasing cinema tickets with an intuitive UI. Currently in development with seat selection, show management and purchase flow.",

      "experience.title": "Experience",
      "exp1.title": "Event activation assistant — Nintendo, Argentina Game Show 2025",
      "exp1.resp": "Guided users through interactive demos, resolving queries with attention to detail.",
      "exp2.title": "Retail employee — \"El Costurero\" haberdashery",
      "exp2.resp": "Provided customer service and managed inventory control using digital tracking tools.",

      "education.title": "Education",
      "edu1.title": "QA Automation — Talento Tech",
      "edu1.desc": "Automation with Python, Selenium WebDriver and Pytest. POM, REST API testing and BDD with Behave. Git, GitHub Actions and CI/CD practices.",
      "edu2.title": "QA Manual & Automation Testing Certification — UTN",
      "edu2.desc": "Scholarship by Fundación Empujar. Test design and execution, Bug Reports, functional/exploratory/regression testing and intro to automation.",
      "edu2.title": "Employability & Soft Skills Program — Fundación Empujar",


      "contact.title": "Contact",
      "contact.location": "Buenos Aires, Argentina",
      "contact.connect_title": "Connect with me",
      "languages.title": "Languages",
      "languages.english": "English",
      "languages.spanish": "Spanish",
      "contact.download_cv": "Download Resume",
      "contact.send_email": "Send email",

      "footer.copy": "© {year} — Agustina Rodríguez — QA Tester."
    },

    es: {
      "hero.title": "QA Engineer | Manual & Automation Testing",

      "header.role": "QA Tester — Manual & Automatizada",
      "header.status": "Disponible para nuevas oportunidades",

      "summary.title": "Resumen",
      "summary.p1": "Soy QA Tester con formación en testing manual y automatizado de aplicaciones web. Combino pruebas exploratorias y funcionales con automatización en Python, Selenium y Pytest, y trabajo cómoda tanto documentando Bug Reports en Jira como armando frameworks de testing con integración continua. Vengo de tres años en atención al cliente, así que la comunicación clara y la atención al detalle son parte natural de cómo trabajo.",

      "skills.automation_title": "Automatización y testing",
      "skill.python": "Python",
      "skill.selenium": "Selenium WebDriver",
      "skill.pytest": "Pytest",
      "skill.cypress": "Cypress",
      "skill.behave": "Behave (BDD)",
      "skill.postman": "Postman",

      "skills.qa_practices": "Prácticas de QA",
      "skill.manual_testing": "Testing manual",
      "skill.functional": "Funcional / Regresión",
      "skill.exploratory": "Testing exploratorio",
      "skill.test_design": "Diseño de casos de prueba",
      "skill.bug_reports": "Reporte de bugs",

      "skills.tools_title": "Herramientas y colaboración",
      "skill.git": "Git / GitHub",
      "skill.github_actions": "GitHub Actions",
      "skill.jira": "Jira",
      "skill.sql": "SQL",
      "skill.scrum": "Scrum / Kanban",

      "projects.title": "Proyectos destacados",

      "project1.title": "Bopp — QA Manual Testing Project",
      "project.status.completed": "✓ Completado",
      "project1.tech": "Jira · Gherkin · Testing exploratorio · Kanban",
      "project1.p1": "Testing exploratorio sobre una aplicación móvil en fase beta. Documenté 6 tickets estructurados en Jira (contexto, Acceptance Criteria, validación de QA y evidencia), organizados dentro de un flujo Kanban entre Bugs y Mejoras. Los criterios de aceptación los redacté en sintaxis Gherkin, con capturas de pantalla y grabaciones como evidencia de cada incidencia.",
      "project1.metric1": "✓ 6 tickets documentados",
      "project1.metric2": "✓ 4 bugs reportados",
      "project1.metric3": "✓ 2 historias de usuario",
      "project1.metric4": "✓ Criterios de aceptación en Gherkin",
      "project1.metric5": "✓ Capturas y evidencia visual",
      "project1.metric6": "✓ Flujo Kanban completo",

      "project2.title": "Framework de automatización — Swag Labs",
      "project2.tech": "Python · Selenium WebDriver · Pytest · Behave · GitHub Actions",
      "project2.p1": "Framework de automatización con Page Object Model (POM) para cubrir login, inventario y carrito de compras. Implementé Data-Driven Testing con datasets en CSV/JSON, automatizé escenarios BDD con Gherkin y Behave, e integré testing de APIs REST. El pipeline de CI/CD en GitHub Actions corre la suite completa en cada push y genera reportes HTML con capturas automáticas ante fallos.",
      "project2.metric1": "✓ 17 escenarios automatizados",
      "project2.metric2": "✓ 3 módulos funcionales cubiertos",
      "project2.metric3": "✓ Data-Driven Testing CSV/JSON",
      "project2.metric4": "✓ BDD con Gherkin y Behave",
      "project2.metric5": "✓ CI/CD con GitHub Actions",
      "project2.metric6": "✓ Reportes HTML con capturas de fallos",

      "project3.title": "Cinema Ticket Booking",
      "project.status.inprogress": "⏱ En progreso",
      "project3.tech": "App de reserva de tickets para funciones de cine",
      "project3.p1": "Aplicación para la reserva y compra de tickets de cine con interfaz intuitiva. Actualmente en desarrollo con funcionalidades de selección de asientos, gestión de funciones y compra.",

      "experience.title": "Experiencia",
      "exp1.title": "Asistente en evento de activación — Nintendo, Argentina Game Show 2025",
      "exp1.resp": "Guiar a los usuarios a través de demos interactivas, resolviendo consultas con atención al detalle.",
      "exp2.title": "Empleada de comercio minorista — Mercería y lencería \"El Costurero\"",
      "exp2.resp": "Brindar servicio al cliente y gestionar el control de inventario con herramientas de seguimiento digital.",

      "education.title": "Educación",
      "edu1.title": "Automatización QA — Talento Tech",
      "edu1.desc": "Automatización con Python, Selenium WebDriver y Pytest. POM, testing de APIs REST y BDD con Behave. Git, GitHub Actions y prácticas CI/CD.",
      "edu2.title": "Certificación en QA Manual y Automation — UTN",
      "edu2.desc": "Beca otorgada por Fundación Empujar. Diseño y ejecución de pruebas manuales, reporte de bugs, testing funcional/exploratorio/regresión, e introducción a QA Automation.",
      "edu2.title": "Programa de Empleabilidad y Habilidades Blandas — Fundación Empujar",

      "contact.title": "Contacto",
      "contact.location": "Buenos Aires, Argentina",
      "contact.connect_title": "Conecta conmigo",
      "languages.title": "Idiomas",
      "languages.english": "Inglés",
      "languages.spanish": "Español",
      "contact.download_cv": "Descargar CV",
      "contact.send_email": "Enviar email",

      "footer.copy": "© {year} — Todos los derechos reservados."
    }
  };

  // storage key and default language
  const STORAGE_KEY = "siteLang";
  const DEFAULT = (navigator.language && navigator.language.toLowerCase().startsWith("es")) ? "es" : "en";

  function getSavedLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT;
  }

  function saveLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function formatString(template, vars) {
    return template.replace(/\{(\w+)\}/g, function (m, k) {
      return (vars && vars[k] !== undefined) ? vars[k] : m;
    });
  }

  function applyTranslations(lang) {
    const map = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const attr = el.getAttribute("data-i18n-attr");
      let text = map[key];
      if (text === undefined) return;
      text = formatString(text, { year: new Date().getFullYear() });
      if (attr) {
        el.setAttribute(attr, text);
      } else {
        el.textContent = text;
      }
    });

    saveLang(lang);
    updateSelectorUI(lang);
    try { document.documentElement.lang = (lang === 'es') ? 'es' : 'en'; } catch (e) {}
  }

  function updateSelectorUI(lang) {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      const is = (btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", is ? "true" : "false");
    });
  }

  function initLangSelector() {
    const container = document.getElementById("lang-selector");
    if (!container) return;
    container.addEventListener("click", function (ev) {
      const btn = ev.target.closest(".lang-btn");
      if (!btn) return;
      const lang = btn.dataset.lang;
      if (!lang) return;
      applyTranslations(lang);
    });

    container.addEventListener("keydown", function (ev) {
      const btn = ev.target.closest(".lang-btn");
      if (!btn) return;
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        btn.click();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangSelector();
    const lang = getSavedLang();
    applyTranslations(lang);
  });

  window.__siteTranslations = { translations, applyTranslations };
})();
