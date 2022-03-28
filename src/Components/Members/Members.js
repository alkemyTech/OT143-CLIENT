/* import ceciliaMendez from "./../../images/members/Cecilia Mendez.jpeg";
import marcoFernandez from "./../../images/members/Marco Fernandez.jpg";
import mariaGarcia from "./../../images/members/María Garcia.jpg";
import mariaIrola from "./../../images/members/María Irola.jpg";
import maritaGomez from "./../../images/members/Marita Gomez.jpeg";
import miriamRodriguez from "./../../images/members/Miriam Rodriguez.jpg";
import rodrigoFuente from "./../../images/members/Rodrigo Fuente.jpg"; */
import "./Members.scss";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { useEffect } from "react";
import Loading from "../Common/Loading";
import { getMembers } from "../../features/members/membersSlice";
import { useDispatch, useSelector } from "react-redux";

const Members = () => {

  /* const members = [
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
  ]; */
  const { list: members, status } = useSelector(state => state.members);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getMembers());
    }
    catch (error) {
      console.log(error);
    }
  }, [dispatch]);

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
      {
        status === "success" ?
          members.map((member, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="member">
                <div>
                  <img
                    className="member-image"
                    src={member.image}
                    alt={`Miembro de la organización ${member.name}`}
                  />
                </div>
                <span className="member-name mt-4">{member.name}</span>
                <p className="member-description pt-2 px-5" dangerouslySetInnerHTML={{ __html: member.description }}></p>
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
          ))
          :
          <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}><Loading /></div>
      }
    </Swiper>
  );
};

export default Members;
