import "./App.css";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import {projects, skills} from "./data.js"
import Contact from "./components/contact/contact";

//import Particle from "./components/intro/Particle";
//import StarField from "starfield-react";

function App() {

  return (
    <div>
      
      <Navbar />
      <Intro />
      <About/>
      <Projects projects={projects}/>
      <Skills skills={skills}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
