import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "./../../images/somosMasOrg.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.scss";
import Sidebar from "./Sidebar";



const HeaderBackoffice = (user) => {
  const [showSidebar, setShowSidebar] = useState(false);
  

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Container className="header-container p-0" fluid>
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
        <Link to="/backoffice"><img className="header-logo ms-2 me-auto" src={logo} /></Link>
      </Container>
      <Sidebar show={showSidebar} close={toggleSidebar} />
      
    </>
  );
};

export default HeaderBackoffice;
