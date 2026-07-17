import './Projects.css';

const Projects = () => {
  return (
    <div className='container project-container' id='projects'>
      <h1 className='project-heading'>Projects</h1>
      <ul className='project-container-inner'>
        <li>
          <img src="./vyapaar-setu.png" alt="VyapaarSetu" />
          <h2>VyapaarSetu (Inventory Management)</h2>
          <div className="project-overlay">
            <a href='https://github.com/rksharma7071/VyapaarSetu' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Github</a>
            <a href='https://vyapaar-setu-frontend.vercel.app' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Preview</a>
          </div>
        </li>
        <li>
          <img src="./schoolbook.png" alt="SchoolBook" />
          <h2>SchoolBook (E-Commerce)</h2>
          <div className="project-overlay">
            <a href='https://github.com/rksharma7071/SchoolBook' className='btn btn-primary' target="_blank" rel="noopener noreferrer" >Github</a>
            <a href='https://schoolbook.lol' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Preview</a>
          </div>
        </li>
        <li>
          <img src="./saurabh-s-rental-car-service.png" alt="SchoolBook" />
          <h2>Saurabh's Rental Car Service</h2>
          <div className="project-overlay">
            <a href='https://github.com/rksharma7071/Saurabh-s-Rental-Car-Service' className='btn btn-primary' target="_blank" rel="noopener noreferrer" >Github</a>
            <a href='https://saurabh-s-rental-car-servicej.vercel.app' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Preview</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects;