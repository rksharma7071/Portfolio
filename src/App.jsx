import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // If URL contains an existing hash on load, remove it cleanly without page reload
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    // Scroll reveal observer with Apple smooth easing
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Intercept any on-page anchor link clicks to scroll smoothly without updating URL hash
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      // Prevent updating the URL in address bar with #...
      e.preventDefault();

      const targetId = href.replace("#", "");

      // If scrolling to top / overview
      if (targetId === "top" || targetId === "overview") {
        const targetElement = document.getElementById("overview") || document.getElementById("about");
        if (targetElement) {
          const headerOffset = 54;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        return;
      }

      // Look up target element (with aliases)
      let targetElement = document.getElementById(targetId);
      if (!targetElement) {
        if (targetId === "about") targetElement = document.getElementById("overview");
        if (targetId === "overview") targetElement = document.getElementById("about");
      }

      if (targetElement) {
        const headerOffset = 54;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
