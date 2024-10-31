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
  window.addEventListener('scroll', function () {
    // if (window.scrollY > 100) {
    //   Navs.current.className.add("naaaa");
    //   console.log('scrold')
    // }
  });
  return (
    <div className="navBar__contener" ref={Navs}>
      <div className="right__side__icon">
        <h1>FENA</h1>
      </div>
      <ul ref={Menu}>
        <li
          onClick={() => {
            setunderline("Home");
          }}
        >
          <FaHome /> Home {underline === "Home" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("Info");
          }}
        >
          <FaInfo /> About Me {underline === "About" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("Projects");
          }}
        >
          <FaProjectDiagram /> Projects {underline === "Projects" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("Contact");
          }}
        >
          <FaPhone /> Contact {underline === "Contact" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("Skils");
          }}
        >
          <FaSkiing /> Skils {underline === "Skils" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setunderline("Service");
          }}
        >
          <FaServicestack /> Service {underline === "Service" ? <hr /> : ""}
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
