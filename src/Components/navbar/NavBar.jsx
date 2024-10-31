import React, { useRef, useState } from "react";
import navbarCss from "./navbar.css";

import {
  FaHome,
  FaInfo,
  FaMoon,
  FaPeopleCarry,
  FaPhone,
  FaProjectDiagram,
  FaServicestack,
  FaSkiing,
  FaSun,
} from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
const NavBar = () => {
  const Menu = useRef();
  

  const darkColore = () => {
    document.querySelector("body").setAttribute("BackGroundColor", "balck");
  };
  const LightColore = () => {
    document.querySelector("body").setAttribute("BackGroundColor", "Light");
  };

  const changeColor = () => {
    let Body = document.querySelector("body").getAttribute("BackGroundColor");
    if (Body === "Light") {
      darkColore();
    } else {
      LightColore();
    }
  };


  const MenuHandler = () => {
    Menu.current.classList.toggle("active");
  };
  const [underline, setunderline] = useState();
  const Navs = useRef();
  
  window.addEventListener("scroll", function () {
    const tope = document.getElementById("toper");

    tope.classList.toggle("TopBackGround", window.scrollY > 0);
  });



  return (
    <div className="navBar__contener" ref={Navs} id="toper">
      <div className="right__side__icon" >
        <h1>FENA</h1>
      </div>
      <ul ref={Menu}>
        <li
          onClick={() => {
            setunderline("Home");
          }}
        >
          <FaHome /> <span>Home</span> {underline === "Home" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("About");
          }}
        >
          <FaInfo /> <span>About Me</span> {underline === "About" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("Projects");
          }}
        >
          <FaProjectDiagram /> <span>Projects</span> {underline === "Projects" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("Contact");
          }}
        >
          <FaPhone /> <span>Contact</span> {underline === "Contact" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("Skils");
          }}
        >
          <FaSkiing /> <span>Skils</span> {underline === "Skils" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("Service");
          }}
        >
          <FaServicestack /> <span>Service</span> {underline === "Service" ? <hr /> : ""}
        </li>
       
      </ul>
      <div className="britness">
        <FaMoon
          style={{ color: "#fff" }}
          className="body__britness"
          onClick={changeColor}
        />
        <RiMenu3Line className="navbar__menu" onClick={MenuHandler} />
      </div>
    </div>
  );
};

export default NavBar;
