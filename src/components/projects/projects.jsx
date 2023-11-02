import React from 'react'
import './projects.css';
import Project from './project';

const Projects = ({projects}) => {
  return (
    <section id="projects">
    <div className="skillstag">
          <h2 className="projectstitle">Projects</h2>
          <span></span>
       <div className="projectstop">
         <Project projects={projects}/>
      </div> 
  </div>
  </section> 
  )
}

export default Projects;