import React from "react";
import Retesh from "/Retesh.png";
import "../components/AboutMe.css";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function AboutMe() {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-content">
          <h2 className="hi">Hi</h2>
          <h1 className="name">I'm Retesh Kumar Sharma</h1>
          <h1 className="profile">Frontend Developer</h1>
          <p className="about-me">
            Specializing in React, and Tailwind CSS to build responsive and
            dynamic websites. Passionate about crafting clean code and
            delivering great user experiences.
          </p>
          <div className="about-social">
            <a
              href="/Resume.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a href="mailto:rksharma7071@gmail.com" className="email">
              <SiGmail />
            </a>
            <a
              href="https://www.linkedin.com/in/retesh-kumar-sharma/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rksharma7071"
              className="github-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="about-image">
          <img src={Retesh} width={"100%"} />
        </div>
      </div>
      <div className="container about-intro">
        <h1 className="about-who">Who Am I</h1>
        <p>
          Hi, I’m Retesh Kumar Sharma, a passionate Frontend Developer
          specializing in building dynamic, responsive, and user-friendly web
          applications. I hold a B.Tech in Information Technology and currently
          work as a Software Engineer at FirstWire Apps.
        </p>
        <p>
          With hands-on experience in React.js, JavaScript, Tailwind CSS, and
          REST APIs, I enjoy crafting seamless digital experiences that are both
          visually appealing and functionally robust. My journey includes
          developing scalable UI components, integrating APIs, and managing
          state efficiently using React Hooks and Redux.
        </p>
        <p>
          I’m always eager to learn new technologies and enhance web
          performance. When I’m not coding, you’ll find me exploring new design
          trends or sharpening my problem-solving skills — which even earned me
          a top 3 position in a coding hackathon.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
