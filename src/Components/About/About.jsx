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
        Hi ! I'm Fenet Roba, a Front-End Web Developer who knows HTML, CSS, JavaScript, React.js, and Bootstrap really well. I make websites that work well on any device and are easy for people to use. I love coding and always try to learn new things to get better at what I do.
        </p>
        <div className="about__mySkill">
          <h2>MY Skill</h2>
          <p>
          front-end web developer with a passion for creating dynamic and responsive web applications. My skills include:
           
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
