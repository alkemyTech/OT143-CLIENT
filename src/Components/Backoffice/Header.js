import { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "./../../images/somosMasOrg.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.scss";

const HeaderBackoffice = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () =>{
      setSidebar(prev => !prev)
  }

  return (
    <Container className="header-container" fluid>
      <img className="header-logo ms-2 me-auto" src={logo} />
      {!sidebar ? (
        <AiOutlineMenu
          onClick={toggleSidebar}
          className="header-menu-icon me-4"
        />
      ) : (
        <AiOutlineClose
          onClick={toggleSidebar}
          className="header-menu-icon me-4"
        />
      )}
    </Container>
  );
};

export default HeaderBackoffice;
