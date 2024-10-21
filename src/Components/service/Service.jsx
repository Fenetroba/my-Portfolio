import React from "react";
import { FaDiscourse, FaServer } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "./Service.css";
import { Tilt } from "react-tilt";
const Service = () => {

    const defaultOption={
        max:10,
        scale:1.0,
        speed:0.06
    }
  return (
    <div className="service">
      <div className="what__des">
        <h1>What I Do</h1>
        <p className="service__what__iDO">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem amet doloribus, hic nesciunt aut optio delectus odit,
          quibusdam reprehenderit saepe quae odio temporibus asperiores id.
          Voluptatum aspernatur reiciendis quisquam quaerat.
        </p>
      </div>
      <div className="service__card">
        <Tilt  options={defaultOption}>
            <div className="service__card__box">
                <div>
                <p>
                    <FaServer />
                </p>
                <h2>Web Devlopment</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                    ab deleniti veritatis aut asperiores
                </p>
                <h3 className="more">
                    learn more <FaArrowRight />
                </h3>
                </div>
            </div>
        </Tilt >
        <Tilt options={defaultOption}>
          <div className="service__card__box">
            <div>
              <p>
                <FaDiscourse />
              </p>
              <h2>Ux/Ui</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                ab deleniti veritatis aut asperiores
              </p>
              <h3 className="more">
                learn more <FaArrowRight />
              </h3>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Service;
