import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  console.log(currentYear);
  return (
    <footer className='container footer-container'>
      <div className='footer-inner-container'>
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
        <div className='footer-copyright'>
          copyright &copy; {currentYear}. <a href='#'>Retesh Kumar Sharma</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;