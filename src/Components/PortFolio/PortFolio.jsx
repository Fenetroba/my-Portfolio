import React from "react";
import { SwiperSlide,Swiper } from "swiper/react";
import 'swiper/css'
import './portfolio.css'
import { Autoplay } from "swiper/modules";
const PortFolio = () => {
  return (
    <div className="portfolio">
      <h2 className="myportFolio">My Portfolio</h2>
      <p className="portfolio_paragrap">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ipsa
       </p>

       <Swiper className="swiper"
       spaceBetween={40}
       slidesPerView={3}
       breakpoints={
        {
            0:{
                slidesPerView:1
            },
        
            738:{
                slidesPerView:2
            },
            1187:{
                slidesPerView:3
            }
          
        }
        }
        loop={true}
        autoplay={{
            delay:2500,
            
        }}
        modules={[Autoplay]}
       >
        <SwiperSlide>
            <div className="card card1">
                <div className="content">
                    <h2>FaceBook Post</h2>
                    <h3>FaceBook</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card card2">
                <div className="content">
                    <h2>Inistagram Post</h2>
                    <h3>Inistagram</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card card3">
                <div className="content">
                    <h2>Twitter Post</h2>
                    <h3>Twitter</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card card4">
                <div className="content">
                    <h2>Telegram Post</h2>
                    <h3>Telegram</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card card5">
                <div className="content">
                    <h2>Telegram Post</h2>
                    <h3>Telegram</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card card6">
                <div className="content">
                    <h2>Telegram Post</h2>
                    <h3>Telegram</h3>
                </div>
            </div>
        </SwiperSlide>
       </Swiper>
    </div>
  );
};

export default PortFolio;
