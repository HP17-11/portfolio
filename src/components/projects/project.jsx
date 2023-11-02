import React from "react";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-scroll";

const Project = ({ projects }) => {
  return (
    <div className="projectstop2">
      {projects.map((project, index) => (
        <div key={index}>
          <div className="projectcontainer">
            <a href={project.link}>
              <div className="imgclass">
                <img src={project.image} alt="pimage" className="imgclass" />
              </div>
              <div className="projecttitle">
                <h3 className="">{project.title}</h3>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
