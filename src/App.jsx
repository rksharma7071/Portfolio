import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
