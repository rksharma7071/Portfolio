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
          <h1 className="profile">MERN Stack Developer</h1>
          <p className="about-me">
            Passionate MERN Stack Developer with 2+ years of professional experience in MongoDB, Express.js, React.js, and Node.js. Specializing in building scalable, secure, and high-performance web applications.
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
          Hi, I’m Retesh Kumar Sharma, a passionate MERN Stack Developer with 2+ years of professional experience
          specializing in building dynamic, scalable, and high-performance web
          applications. I hold a B.Tech in Information Technology and currently
          work as a Software Engineer (React.js) at FirstWire Apps.
        </p>
        <p>
          With hands-on experience in React.js, Node.js, Express.js, MongoDB, Redux Toolkit, and
          REST APIs, I enjoy crafting seamless digital experiences that are both
          visually appealing and functionally robust. My journey includes
          developing scalable UI components, integrating APIs, authentication, and managing
          state efficiently using Redux Toolkit.
        </p>
        <p>
          I’m always eager to learn new technologies and enhance application
          performance. I have solved 250+ coding problems on LeetCode and built multiple
          production-ready MERN Stack applications.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
