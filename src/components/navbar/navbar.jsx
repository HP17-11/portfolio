import React from "react";
import "./navbar.css";
import newLogo from "../../assets/h2.png";
import { Link } from "react-scroll";
import downloadImg from "../../assets/downloads.png"
import resume from "../../assets/Het_Patel.pdf";

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenulistlogo">

      <img src={newLogo} alt="logo" className="logo" />
      </Link>
      <div className="desktopmenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenulistitem">Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-10} duration={500} className="desktopmenulistitem">About</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-20} duration={500} className="desktopmenulistitem">Projects</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Skills</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Contact</Link>

        {/* <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Contact</Link> */}

      </div>

      <a href={resume} download="Resume_HetPatel" target="_blank">
        <button className="desktopmenubtn">
          Resume 
          <img src={downloadImg} alt="download" className="desktopmenuicon" />
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
