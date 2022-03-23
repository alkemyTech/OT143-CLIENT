import Countdown from '../Common/Countdown';
import Content from '../Common/Content';
import img1 from './img/toys-campaign-1.jpg';
import img2 from './img/toys-campaign-2.png';

const ContentToys = () => {
  const description = "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad detrabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.";


  return (
    <>
      <Content title="01-04-2022 19:02 hs Cra. 22 ## 80-73, Bogotá, Colombia"
      description={description}
      image1={img1}
      image2={img2}
      >
        <Countdown />
      </Content>

    </>
  );
};

export default ContentToys;
