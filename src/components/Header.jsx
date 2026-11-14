import React, { useState, useEffect } from "react";
import "./Header.css";
import { IoClose, IoMenu } from "react-icons/io5";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetElement =
      document.getElementById(id) ||
      (id === "overview" ? document.getElementById("about") : null) ||
      (id === "about" ? document.getElementById("overview") : null);

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
    <header className={`apple-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Redesigned Brand Identity */}
        <a
          href="#overview"
          className="header-brand"
          onClick={(e) => scrollToSection(e, "overview")}
          aria-label="Retesh Sharma - Overview"
        >
          <div className="brand-emblem">
            <span className="brand-emblem-glyph">R</span>
            <span className="brand-emblem-dot"></span>
          </div>
          <div className="brand-text-wrap">
            <span className="brand-first">Retesh</span>
            <span className="brand-last">Sharma</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <a
                href="#overview"
                className="nav-item"
                onClick={(e) => scrollToSection(e, "overview")}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="nav-item"
                onClick={(e) => scrollToSection(e, "experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="nav-item"
                onClick={(e) => scrollToSection(e, "skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="nav-item"
                onClick={(e) => scrollToSection(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-item"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Right Action */}
        <div className="header-actions">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-pill"
          >
            <span>Resume</span>
            <span className="resume-icon">↗</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <ul>
            <li>
              <a
                href="#overview"
                onClick={(e) => scrollToSection(e, "overview")}
                className="mobile-nav-item"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, "experience")}
                className="mobile-nav-item"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className="mobile-nav-item"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="mobile-nav-item"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="mobile-nav-item"
              >
                Contact
              </a>
            </li>
            <li className="mobile-action-li">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: "100%", justifyContent: "center" }}
              >
                View Resume ↗
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
