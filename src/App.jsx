import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
