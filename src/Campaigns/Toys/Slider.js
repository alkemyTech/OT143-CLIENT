import React from 'react';
import SliderCommon from "../Common/Slider";
import image1 from "../../images/campaigns/toys/imagen1.jpg";
import image2 from "../../images/campaigns/toys/imagen2.png";

const Slider = () => {
  const slides = [
    { image: image1, caption: "Texto de pie de foto" },
    { image: image2, caption: "Texto de pie de foto" },
    { image: image1, caption: "Texto de pie de foto" }
  ];

  return (
    <SliderCommon slides={slides} />
  );
}

export default Slider;