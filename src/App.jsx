import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [toggle, setToggle] = useState(false);

  function changeBackgroundMode() {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <>
      <Navbar click={changeBackgroundMode} mode={toggle} />
      <Hero mode={toggle} />
      <About mode={toggle} />
      <Skill mode={toggle} />
      <Projects mode={toggle} />
      <Contact mode={toggle} />
    </>
  );
}

export default App;
