import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

const Projects = () => {
  const projectsList = [
    {
      id: "vyapaar-setu",
      title: "VyapaarSetu",
      category: "Full-Stack Web Application",
      tagline: "Enterprise Inventory & Order Management System",
      description:
        "A full-featured MERN platform engineered for tracking warehouse inventories, monitoring real-time stock levels, processing supplier transactions, and generating actionable sales analytics with secure role-based access control.",
      image: "/vyapaar-setu.png",
      github: "https://github.com/rksharma7071/VyapaarSetu",
      live: "https://vyapaar-setu-frontend.vercel.app",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "REST API"]
    },
    {
      id: "schoolbook",
      title: "SchoolBook",
      category: "E-Commerce Platform",
      tagline: "Digital Marketplace for Academic Resources",
      description:
        "A responsive e-commerce web application featuring comprehensive catalog search, category filtering, cart & checkout management, user authentication, and order history tracking.",
      image: "/schoolbook.png",
      github: "https://github.com/rksharma7071/SchoolBook",
      live: "https://schoolbook.lol",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT Auth"]
    },
    {
      id: "saurabh-car-rental",
      title: "Saurabh's Rental Car Service",
      category: "On-Demand Booking Service",
      tagline: "Vehicle Reservation & Fleet Management Platform",
      description:
        "A streamlined vehicle rental web app delivering instant fleet discovery, price calculation, date-based booking workflows, and mobile-optimized responsiveness for on-the-go travelers.",
      image: "/saurabh-s-rental-car-service.png",
      github: "https://github.com/rksharma7071/Saurabh-s-Rental-Car-Service",
      live: "https://saurabh-s-rental-car-servicej.vercel.app",
      tags: ["React.js", "REST APIs", "Fleet Management", "Mobile-First UI", "Vite"]
    }
  ];

  return (
    <section className="section section-muted" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center reveal">
          <span className="eyebrow">Portfolio & Case Studies</span>
          <h2 className="headline-lg">Featured Projects</h2>
          <p className="body-md projects-subtitle">
            Production-ready web applications built from scratch with focus on performance, scalability, and UX.
          </p>
        </div>

        {/* Projects List */}
        <div className="projects-showcase-list">
          {projectsList.map((project, index) => {
            const delayClass = `delay-${index + 1}`;
            return (
              <article
                key={project.id}
                className={`card project-showcase-card reveal ${delayClass}`}
              >
                {/* Product Visual Container */}
                <div className="project-media-frame">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-image-link"
                    aria-label={`View live preview of ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="project-screenshot"
                      loading="lazy"
                    />
                  </a>
                </div>

                {/* Product Details Container */}
                <div className="project-content-container">
                  <div className="project-meta-top">
                    <span className="project-category">{project.category}</span>
                    <h3 className="headline-sm project-title">{project.title}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                  </div>

                  <p className="body-md project-description">
                    {project.description}
                  </p>

                  {/* Tech Chips */}
                  <div className="project-tech-chips">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Apple Buttons */}
                  <div className="project-actions-row">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Live Preview</span>
                      <IoOpenOutline size={16} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <FaGithub size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
