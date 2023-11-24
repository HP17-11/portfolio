import React from "react";
import profile from '../../assets/profilenew1.png'

import downloadImg from "../../assets/downloads.png"
import resume from "../../assets/Het_Patel_23-24.pdf";

import './intro.css';

//import {Stars} from '@react-three/drei';

//import starfieldReact from 'https://cdn.skypack.dev/starfield-react';

const Intro = () => {
  return (
    <section id="intro">
      {/* <Stars/> */}
     
     
      <img src={profile} alt="profileimage" className="bg" />
      <div className="introcontent">
      {/* <Particle/> */}
        <span className="hello">Hello there👋,</span> 
        <span className="introtext"><span className="nameintro">Het Here!</span><br/></span>
        <p className="intropara">I'm a Software Developer & Engineer,<br/>and an aspiring Data Engineer.</p>
        <a href={resume} download="Resume_HetPatel" target="_blank">
        <button className="intromenubtn">
          Resume 
          <img src={downloadImg} alt="download" className="desktopmenuicon" />
        </button>
      </a>
      </div>
      
      
    </section>
  );
};

export default Intro;
