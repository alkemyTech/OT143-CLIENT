import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { HOME } from "../../config/router/routes";
import logo from "./../../images/somosMasOrg.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.scss";
import Sidebar from "./Sidebar";

const HeaderBackoffice = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Container className="header-container sticky-top bg-white p-0" fluid >
        {!showSidebar ? (
          <AiOutlineMenu
            onClick={toggleSidebar}
            className="header-menu-icon mx-4"
          />
        ) : (
          <AiOutlineClose
            onClick={toggleSidebar}
            className="header-menu-icon mx-4"
          />
        )}
        <Link to={HOME}><img className="header-logo ms-2 me-auto" src={logo} alt="Logo de la organización" /></Link>
      </Container>
      <Sidebar show={showSidebar} close={toggleSidebar} />
    </>
  );
};

export default HeaderBackoffice;
