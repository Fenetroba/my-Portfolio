import React from "react";
import "./about.css";
import about__sider from "../../Components/Asset/backGround.jpg";
import { FaPlus } from "react-icons/fa";
const About = () => {
  return (
    <div className="about__ContenerAll">
      <div className="about__contener">
        <h1>About Me</h1>
       
        <p>
          I am Front end Web Devloper Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Distinctio, praesentium 
        </p>
        <div className="about__mySkill">
          <h2>MY Skill</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum
           
          </p>
          <div className="about__skillwrapper">
            <div className="about__skill">
              <h3>React Js</h3>
              <div className="line"></div>
            </div>
            <div className="about__skill">
              <h3>Jquery</h3>
              <div className="line"></div>
            </div>
            <div className="about__skill">
              <h3>JavaScript</h3>
              <div className="line"></div>
            </div>
            <div className="about__skill">
              <h3>css</h3>
              <div className="line"></div>
            </div>
            <div className="about__skill">
              <h3>Html</h3>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about__image">
        <img src={about__sider} alt="" />
        <div className="about__exp">
        <h2><span>1+</span>   Of Experience</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
