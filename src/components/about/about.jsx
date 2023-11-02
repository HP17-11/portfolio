import {
  faGitAlt,
  faJava,
  faJsSquare,
  faReact,
  faPython,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.scss";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="containeraboutpage">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faJava} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faGithub} color="#008000" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>

          <div className="text-zone">
            <span className="aboutheadingtxt">About me</span>
            <br />
            <br />

            <p>
              I have been in the computer science field for almost 7 years
              including academics & professional experience. During that, I have
              worked on projects utilizing multiple programming languages: C,
              C++, Java, and Python. From that, I have extensive experience with
              Python. Moreover, I am familiar with Django Web Framework used for
              backend development whereas for front-end development, React is my
              cup of tea. 
            </p>
            <br/>
            <p align="LEFT">
              My journey has always been driven by fascination and
              exploration. Currently, a graduate student @ UoW, 
              exploring the field more profoundly with an aspiration of becoming a Data
              Engineer.  
            </p>
            <br/>
            <p>
              All in all, with an objecitve of exploration and aquiration of knowledge, 
              I want to set foot into the corporate world. I am actively seeking a co-op/internship opportunity for summer 2024 to contribute to organizational success while developing new
              skills and gaining real-world experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
