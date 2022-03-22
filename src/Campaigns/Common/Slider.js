import React from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "./Slider.css";

const Slider = ({ slides }) => {
  return (
    <Swiper
      className="swiper"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation, Autoplay]} >
      {
        slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide-campaign" key={`slide-${index}`}>
            <img className="img-slide-campaign" src={slide.image} alt={`Imagen ${index}`} />
            <h5 className="caption d-none d-xl-grid">{slide.caption}</h5>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
export default Slider;