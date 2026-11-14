import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (id === "top" || id === "overview") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 54;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="apple-footer">
      <div className="container">
        {/* Top Disclaimer / Intro Note */}
        <div className="footer-top-note">
          <div className="footer-brand-wrap">
            <div className="brand-emblem">
              <span className="brand-emblem-glyph">R</span>
              <span className="brand-emblem-dot"></span>
            </div>
            <div className="brand-text-wrap">
              <span className="brand-first">Retesh</span>
              <span className="brand-last">Sharma</span>
            </div>
          </div>
          <p className="caption">
            Retesh Kumar Sharma — Software Engineer (React.js) at FirstWire Apps. Specialized in building fast, accessible, and scalable web solutions using the MERN stack.
          </p>
        </div>

        <div className="footer-divider"></div>

        {/* Links Navigation */}
        <div className="footer-links-grid">
          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-list">
              <li><a href="#overview" className="footer-link" onClick={(e) => scrollToSection(e, "overview")}>Overview</a></li>
              <li><a href="#experience" className="footer-link" onClick={(e) => scrollToSection(e, "experience")}>Experience</a></li>
              <li><a href="#skills" className="footer-link" onClick={(e) => scrollToSection(e, "skills")}>Technical Skills</a></li>
              <li><a href="#projects" className="footer-link" onClick={(e) => scrollToSection(e, "projects")}>Featured Projects</a></li>
              <li><a href="#contact" className="footer-link" onClick={(e) => scrollToSection(e, "contact")}>Get In Touch</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Featured Projects</span>
            <ul className="footer-list">
              <li><a href="https://vyapaar-setu-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="footer-link">VyapaarSetu (Inventory) ↗</a></li>
              <li><a href="https://schoolbook.lol" target="_blank" rel="noopener noreferrer" className="footer-link">SchoolBook (E-Commerce) ↗</a></li>
              <li><a href="https://saurabh-s-rental-car-servicej.vercel.app" target="_blank" rel="noopener noreferrer" className="footer-link">Saurabh's Rental Car Service ↗</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Connect</span>
            <ul className="footer-list">
              <li><a href="https://www.linkedin.com/in/reteshkumarsharma/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
              <li><a href="https://github.com/rksharma7071" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a></li>
              <li><a href="mailto:rksharma7071@gmail.com" className="footer-link">Email</a></li>
              <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Resume (PDF)</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-row">
          <p className="caption copyright-text">Copyright &copy; {currentYear} Retesh Kumar Sharma. All rights reserved.</p>
          <div className="footer-legal-links">
            <a
              href="#overview"
              className="footer-legal-link"
              onClick={(e) => scrollToSection(e, "overview")}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
