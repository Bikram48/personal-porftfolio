import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
    </>
  );
}

export default App;
