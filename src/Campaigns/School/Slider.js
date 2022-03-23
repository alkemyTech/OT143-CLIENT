import React from 'react';
import SliderCommon from '../Common/Slider';
import imagen1 from './img/Imágenes-contenido-opción-1.png';
import imagen2 from './img/Imágenes-contenido-opción-2.png';


const Slider = () => {
  
  const slides =[
    {image: imagen1, caption:"Texto School"},
    {image: imagen2, caption:"Texto School"},
    {image: imagen1, caption:"Texto School"}
  ]
  return (
    <SliderCommon  slides={slides}/>
  );
}
 
export default Slider;