import React from "react";
import picture from "../Asset/myPhoto.jpg";
import "./header.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaDownLong } from "react-icons/fa6";
import { RiDownload2Fill } from "react-icons/ri";
const Header = () => {
  return (
    <div className="Header__contener__all">
      <div className="heade__contener">
        <img
          src={picture}
          alt="mypicture"
          style={{ width: "200px", height: "200px" }}
        />
        <h1>
          Hi 👋 ,I M <span>Fena Roba</span>
        </h1>
        <p>
          welcome to my portfoli I M <strong>Front End WebDevloper</strong>
          <br />
          Over 1 Year of Professional Experience .
        </p>

        <div className="header__social">
          <span><FaFacebook className="faceBook" /></span>
          <span> <FaInstagram className="inista" /></span>
          <span> <FaTwitter className="twitter" /></span>
          <span>  <FaGithub className="github" /></span>
         <span> <FaLinkedin className="linkedin" /></span>
        
         
        </div>
        <button>
        
          Download CV<RiDownload2Fill style={{color:"gole"}}/> 
        </button>
      </div>
    </div>
  );
};

export default Header;
