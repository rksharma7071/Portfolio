import './Skills.css'
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";


const Skills = () => {
  return (
    <div className='container skills-container' id='skills'>
      <h1 className='skills-heading'>Skills</h1>
      <ul className='skills-container-inner'>
        <li className="react">
          <FaReact />
          <p>React</p>
        </li>
        <li className="javascript">
          <IoLogoJavascript />
          <p>JavaScript</p>
        </li>
        <li className="node">
          <FaNode />
          <p>Node</p>
        </li>
        <li className="redux">
          <SiRedux />
          <p>Redux</p>
        </li>
        <li className="bootstrap">
          <FaBootstrap />
          <p>Bootstrap</p>
        </li>
        <li className="mongodb">
          <SiMongodb />
          <p>MongoDB</p>
        </li>
        <li className="npm">
          <FaNpm />
          <p>NPM</p>
        </li>
        <li className="git">
          <FaGitAlt />
          <p>GIT</p>
        </li>
        <li className="firebase">
          <IoLogoFirebase />
          <p>Firebase</p>
        </li>

      </ul>
    </div>
  )
}

export default Skills;