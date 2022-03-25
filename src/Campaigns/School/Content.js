import React from "react";
import img1 from "../../images/campaigns/school/school-campaign-1.png";
import img2 from "../../images/campaigns/school/school-campaign-2.png";
import CommonContent from "../Common/Content";
import Countdown from "../Common/Countdown";

const title = "01-04-2022 19:02 hs Cra. 22 ## 80-73, Bogotá, Colombia";
const description = "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad detrabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.";

const Content = () => {
  return (
    <CommonContent title={title} description={description} image1={img1} image2={img2}>
      <Countdown />
    </CommonContent>
  );
};

export default Content;