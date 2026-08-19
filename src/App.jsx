import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container" id="main-content">
        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="section-title">Contacto</h2>
          <Contact />
        </section>

        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title">Conocimientos</h2>
          <Skills />
        </section>

        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-title">Proyectos</h2>
          <Projects />
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Agustina Rodriguez — QA Tester</small>
      </footer>
    </div>
  );
}
