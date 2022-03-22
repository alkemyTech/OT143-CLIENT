import React, { useEffect, useState } from 'react';
import Loading from '../Common/Loading';
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import './styles.scss';
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import axios from 'axios';

const Carousel = () => {
  const [slides, setSlides] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_SLIDES_ENDPOINT).then((response) => {
      setSlides(response.data.data);
    })
  }, [])

  return (
    <Swiper
      className='swiper'
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
      navigation={true}
      modules={[Navigation, Pagination, Autoplay]}>
      {!slides ? <Loading style={{ height: "600px" }} /> : slides.map((slide, index) => (
        <SwiperSlide className='swiper-slide' key={`slide-${index}`}>
          <img className="img-slide-home" src={slide.image} alt="" />
          <p className="p-slide-home">{slide.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel;