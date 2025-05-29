import './Projects.css';

const Projects = () => {
  return (
    <div className='container project-container' id='projects'>
      <h1 className='project-heading'>Projects</h1>
      <ul className='project-container-inner'>
        <li>
          <img src="https://s.tmimgcdn.com/scr/800x500/203100/marketkit-multipurpose-ecommerce-html-website-template_203166-original.jpg" alt="" />
          <h2>Fashion Fusion</h2>
          <div className="project-overlay">
            <a href='#' className='btn btn-primary' >Github</a>
            <a href='#' className='btn btn-primary' >Live Preview</a>
          </div>
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGM-g7lD4zv3Y38foi1bqgb2PAy8vywCrRlA&s" alt="" />
          <h2>BlogSphere</h2>
          <div className="project-overlay">
            <a href='#' className='btn btn-primary' >Github</a>
            <a href='#' className='btn btn-primary' >Live Preview</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects;