import React from "react";
import Retesh from "/Retesh.png";
import "./AboutMe.css";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function AboutMe() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
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
    <>
      {/* Hero / Overview Section */}
      <section className="section hero-section" id="overview">
        {/* Anchor alias for #about */}
        <div id="about" style={{ position: "absolute", top: 0 }}></div>

        <div className="container">
          <div className="hero-split-layout">
            {/* Left Side: Content & Actions */}
            <div className="hero-text-content">
              {/* Eyebrow */}
              <div className="eyebrow-container hero-anim-1">
                <span className="eyebrow">Software Engineer • MERN Stack Developer</span>
              </div>

              {/* Main Headline */}
              <h1 className="headline-display hero-title hero-anim-2">
                Retesh Kumar Sharma
              </h1>

              {/* Subhead */}
              <p className="body-lg hero-subhead hero-anim-3">
                Designing and engineering scalable, high-performance web applications with React, Node.js, and modern cloud technologies.
              </p>

              {/* Call to Actions */}
              <div className="hero-cta-group hero-anim-4">
                <a
                  href="#projects"
                  className="btn-primary"
                  onClick={(e) => scrollToSection(e, "projects")}
                >
                  Explore Projects
                </a>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <IoDocumentTextOutline size={18} />
                  <span>Resume</span>
                </a>
                <a
                  href="#contact"
                  className="btn-tertiary"
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  <span>Get in touch</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Social Quick-Links */}
              <div className="hero-social-chips hero-anim-6">
                <a
                  href="mailto:rksharma7071@gmail.com"
                  className="chip social-chip"
                  aria-label="Email Retesh"
                >
                  <SiGmail size={14} color="#ea4335" />
                  <span>rksharma7071@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/reteshkumarsharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip social-chip"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={14} color="#0077b5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/rksharma7071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip social-chip"
                  aria-label="GitHub profile"
                >
                  <FaGithub size={14} color="#1d1d1f" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Right Side: Image with Shadow */}
            <div className="hero-image-wrapper hero-anim-5">
              <div className="hero-image-container">
                <div className="hero-image-backdrop"></div>
                <img
                  src={Retesh}
                  alt="Retesh Kumar Sharma"
                  className="hero-image-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Metrics Section */}
      <section className="section section-muted highlights-section" id="experience">
        <div className="container">
          <div className="metrics-grid">
            <div className="card metric-card reveal delay-1">
              <div className="metric-number">2+</div>
              <div className="metric-label">Years of Experience</div>
              <p className="metric-desc">Building production web apps in MERN stack</p>
            </div>

            <div className="card metric-card reveal delay-2">
              <div className="metric-number">FirstWire</div>
              <div className="metric-label">Software Engineer</div>
              <p className="metric-desc">React.js specialist delivering client apps</p>
            </div>

            <div className="card metric-card reveal delay-3">
              <div className="metric-number">250+</div>
              <div className="metric-label">LeetCode Solved</div>
              <p className="metric-desc">Data structures & algorithmic problem solving</p>
            </div>

            <div className="card metric-card reveal delay-4">
              <div className="metric-number">B.Tech</div>
              <div className="metric-label">Information Technology</div>
              <p className="metric-desc">Engineering foundational principles</p>
            </div>
          </div>

          {/* Who Am I Narrative */}
          <div className="about-editorial-block reveal">
            <div className="section-header text-center">
              <span className="eyebrow">Profile & Narrative</span>
              <h2 className="headline-md">Engineering with clarity, speed, and craftsmanship.</h2>
            </div>

            <div className="editorial-content">
              <div className="editorial-col">
                <p className="body-md">
                  I am a passionate Software Engineer and MERN Stack Developer with over 2 years of professional experience building dynamic, resilient, and accessible web solutions. Currently, I work at <strong>FirstWire Apps</strong>, where I develop production-grade React interfaces and scalable web application architectures.
                </p>
                <p className="body-md">
                  My technical foundation spans across modern JavaScript (ES6+), React.js, Node.js, Express, MongoDB, and Redux Toolkit. I place extreme importance on clean component modularity, intuitive user experience, predictable state management, and reliable RESTful API communication.
                </p>
              </div>

              <div className="editorial-col">
                <p className="body-md">
                  I take pride in solving complex technical problems with elegant, lightweight code. Having solved <strong>250+ LeetCode problems</strong>, I apply strong algorithmic thinking to optimize client-side bundle size, reduce latency, and ensure cross-platform compatibility.
                </p>
                <p className="body-md">
                  Whether developing full-scale e-commerce platforms, real-time inventory management dashboards, or on-demand booking systems, I believe in creating digital tools that feel frictionless, responsive, and robust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
