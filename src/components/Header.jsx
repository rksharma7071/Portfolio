import React, { useState } from "react";
import "./Header.css";
import { IoClose } from "react-icons/io5";

function Header() {
  const [headerToggle, setHeaderToggle] = useState(false);
  // console.log(headerToggle);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  return (
    <header>
      <div className="header-logo">RETESH</div>

      <nav className={`nav-menu nav-menu-mobile ${headerToggle ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav className="nav-menu nav-menu-desktop">
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`header-menu ${headerToggle ? "hide" : ""}`}
        onClick={() => setHeaderToggle(true)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {headerToggle ? (
        <div
          className={`header-close ${headerToggle ? "show" : ""}`}
          onClick={() => setHeaderToggle(false)}
        >
          <div>
            <IoClose />
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
