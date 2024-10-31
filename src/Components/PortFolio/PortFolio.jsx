import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "./portfolio.css";
import { Autoplay } from "swiper/modules";
import { FaAirFreshener, FaChrome, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const PortFolio = () => {
  return (
    <div className="portfolio">
      <h2 className="myportFolio">My Projects</h2>
      <p className="portfolio_paragrap">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ipsa
      </p>
      <div className="project__contener">

      <div className="card">
          <div className="background"></div>
          <div className="logo"> 
          <span className="ProjectTitels">Ecommerce</span>
          </div>
          <div className="box box1">
            <span className="icon">
              <a href="https://github.com/Fenetroba/my-Portfolio"><FaGithub style={{color:'black'}}/></a>
            </span>
          </div>
          <div className="box box2">
            <span className="icon">
            <a href="https://www.linkedin.com/in/fenet-roba/"><FaLinkedin style={{color:'black'}}/></a>
            </span>
          </div>
          <div className="box box3">
          <span className="icon">
          <a href="https://www.linkedin.com/in/fenet-roba/"><FaFacebook style={{color:'black'}}/></a>
          </span>
          </div>
        </div>



        <div className="card">
          <div className="background"></div>
          <div className="logo"> 
          <span className="ProjectTitels">Weather</span>
          </div>
          <div className="box box1">
            <span className="icon">
              <a href="https://github.com/Fenetroba/my-Portfolio"><FaGithub style={{color:'black'}} className=""/></a>
            </span>
          </div>
          <div className="box box2">
            <span className="icon">
            <a href="https://www.linkedin.com/in/fenet-roba/"><FaLinkedin style={{color:'black'}} /></a>
            </span>
          </div>
          <div className="box box3">
          <span className="icon">
          <a href="https://www.linkedin.com/in/fenet-roba/"><FaFacebook style={{color:'black'}}/></a>
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
