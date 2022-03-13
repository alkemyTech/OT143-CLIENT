import ceciliaMendez from "./../../images/members/Cecilia Mendez.jpeg";
import marcoFernandez from "./../../images/members/Marco Fernandez.jpg";
import mariaGarcia from "./../../images/members/María Garcia.jpg";
import mariaIrola from "./../../images/members/María Irola.jpg";
import maritaGomez from "./../../images/members/Marita Gomez.jpeg";
import miriamRodriguez from "./../../images/members/Miriam Rodriguez.jpg";
import rodrigoFuente from "./../../images/members/Rodrigo Fuente.jpg";
import "./Members.scss";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import { SiFacebook, SiLinkedin } from "react-icons/si";

const Members = () => {
  const members = [
    {
      name: "Cecilia Mendez",
      image: ceciliaMendez,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facebookUrl: "",
      linkedinUrl: "",
    },
    {
      name: "Marco Fernandez",
      image: marcoFernandez,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facebookUrl: "",
      linkedinUrl: "",
    },
    {
      name: "María García",
      image: mariaGarcia,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facebookUrl: "",
      linkedinUrl: "",
    },
    {
      name: "María Irola",
      image: mariaIrola,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facebookUrl: "",
      linkedinUrl: "",
    },
    {
      name: "Marita Gomez",
      image: maritaGomez,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facebookUrl: "",
      linkedinUrl: "",
    },
    {
      name: "Miriam Rodriguez",
      image: miriamRodriguez,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facebookUrl: "",
      linkedinUrl: "",
    },
    {
      name: "Rodrigo Fuente",
      image: rodrigoFuente,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facebookUrl: "",
      linkedinUrl: "",
    },
  ];

  return (
    <Swiper
      className="my-5 px-5 py-5 "
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        835: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
    >
      {members.map((member) => (
        <SwiperSlide className="swiper-slide">
          <div className="member">
            <div>
              <img
                className="member-image"
                src={member.image}
                alt={`Miembro de la organización ${member.name}`}
              />
            </div>
            <span className="member-name mt-4">{member.name}</span>
            <p className="member-description pt-2 px-5">{member.description}</p>
            <div>
              <a className="social-link mx-3" href={member.facebookUrl}>
                <SiFacebook />
              </a>
              <a className="social-link mx-3 " href={member.linkedinUrl}>
                <SiLinkedin />
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Members;
