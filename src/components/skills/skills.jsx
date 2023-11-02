import React from "react";
import "./skills.css";

const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <div id="clients">
        <h1 className="contactpagetitle">Tech Stack</h1>

        <div className="skillsimg">
          {skills.map((skill) => (
            <div key={skill} className="skillimg">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
