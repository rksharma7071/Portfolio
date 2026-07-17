import './Skills.css'

const Skills = () => {
  const skillsData = [
    { category: "Frontend", items: "React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Redux Toolkit, React Router, Axios" },
    { category: "Backend & API", items: "Node.js, Express.js, RESTful APIs, JWT Authentication, Nodemailer, Postman" },
    { category: "Databases", items: "MongoDB, MySQL, Firebase" },
    { category: "Design & Responsive", items: "Mobile-first design, CSS Grid, Flexbox, Cross-browser compatibility" },
    { category: "Dev Tools", items: "Git, GitHub, VS Code, Vite, Vercel, Render, Netlify" },
    { category: "Languages", items: "JavaScript (ES6+), C++" }
  ];

  return (
    <div className='container skills-container' id='skills'>
      <h1 className='skills-heading'>Technical Skills</h1>
      <div className='skills-grid'>
        {skillsData.map((skill, index) => (
          <div key={index} className='skill-card'>
            <h2>{skill.category}</h2>
            <p>{skill.items}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;