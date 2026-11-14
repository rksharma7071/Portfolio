import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsCategories = [
    {
      category: "Frontend Engineering",
      description: "Building responsive, declarative, and accessible user interfaces.",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "Redux Toolkit",
        "React Router",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Axios"
      ]
    },
    {
      category: "Backend & Systems",
      description: "Developing scalable REST services, micro-logic, and authentication.",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Nodemailer",
        "API Architecture",
        "Postman"
      ]
    },
    {
      category: "Data & Storage",
      description: "Schema modeling, transactional consistency, and cloud databases.",
      skills: [
        "MongoDB",
        "Mongoose ODM",
        "MySQL",
        "Firebase",
        "Data Aggregation"
      ]
    },
    {
      category: "UI & Layout Systems",
      description: "Crafting pixel-perfect layouts with mobile-first fluidity.",
      skills: [
        "Mobile-First Design",
        "CSS Grid",
        "Flexbox",
        "Cross-Browser Compatibility",
        "Component Modularity",
        "Design Tokens"
      ]
    },
    {
      category: "DevOps & Deployment",
      description: "Modern build tooling, version control, and cloud continuous delivery.",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Vercel",
        "Render",
        "Netlify",
        "VS Code"
      ]
    },
    {
      category: "Core Languages & Problem Solving",
      description: "Strong algorithmic foundation and robust scripting capabilities.",
      skills: [
        "JavaScript (ES6+)",
        "C++",
        "Data Structures",
        "Algorithms (250+ LeetCode)",
        "Clean Code"
      ]
    }
  ];

  return (
    <section className="section section-surface" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center reveal">
          <span className="eyebrow">Technical Architecture</span>
          <h2 className="headline-lg">Skills & Technologies</h2>
          <p className="body-md skills-subtitle">
            A comprehensive, modern stack optimized for building fast, secure, and production-grade applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsCategories.map((group, index) => {
            const delayClass = `delay-${(index % 6) + 1}`;
            return (
              <div key={index} className={`card skill-card reveal ${delayClass}`}>
                <div className="skill-card-header">
                  <h3 className="skill-category-title">{group.category}</h3>
                  <p className="skill-category-desc">{group.description}</p>
                </div>
                <div className="skill-chips-wrap">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
