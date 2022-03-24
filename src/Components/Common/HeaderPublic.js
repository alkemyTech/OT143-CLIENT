import React from "react";
import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import imgLogo from "./../../images/somosMasOrg.png";
import {
  ABOUT,
  HOME,
  CONTACT,
  TOYS_CAMPAIGN,
  SCHOOL_CAMPAIGN,
} from "./../../config/router/routes";
import { FaUser } from "react-icons/fa";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import "./HeaderPublic.scss";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./../../features/auth/authSlice";
import RegisterForm from "./../Auth/RegisterForm";
import LoginForm from "./../Auth/LoginForm";
import { BsGearFill } from "react-icons/bs";
import { BACKOFFICE } from './../../config/router/routes'

const HeaderPublic = () => {
  const { token: token } = useSelector((state) => state.auth);
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);

  const nav = [
    { path: ABOUT, title: "Nosotros" },
    { path: HOME, title: "" },
    { path: CONTACT, title: "Contacto" },
    { path: TOYS_CAMPAIGN, title: "JUGETES" },
    { path: SCHOOL_CAMPAIGN, title: "COLEGIOS" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logOut);
    setIsLogged(false);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };
  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <>
      {/* Modals para login y register  */}

      <LoginForm show={showLoginModal} close={handleCloseLoginModal} />

      <RegisterForm show={showRegisterModal} close={handleCloseRegisterModal} />

      <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
        <Container>
          <Link to={HOME}>
            <img
              alt="IMGNAV"
              src={imgLogo}
              width="60%"
              height="50%"
              className="d-inline-block align-top"
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {nav.map((e, index) => {
                return (
                  <>
                    {e.title == "JUGETES" || e.title === "COLEGIOS" ? null : (
                      <NavLink
                        key={index}
                        to={e.path}
                        className="nav-link me-auto"
                        activeStyle={{ color: "tomato" }}
                      >
                        {e.title}
                      </NavLink>
                    )}
                  </>
                );
              })}
              {/* mejorar la logica recorriendo con un filter el array y que devuelva los dos elementos que necesito */}
              <NavDropdown title="Campañas">
                <NavDropdown.Item>
                  <NavLink activeStyle={{ color: "tomato" }} to={nav[3].path}>
                    {nav[3].title}
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink activeStyle={{ color: "tomato" }} to={nav[4].path}>
                    {nav[4].title}
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {isLogged ? (
                <>
                    <NavLink
                     onClick={handleLogout}
                      style={{ background: "#DB5752" }}
                      className="text-decoration-none log-button"
                      to={HOME}
                    >
                      <RiLogoutBoxLine /> Log-out
                    </NavLink>
                  <Nav.Link className="d-flex align-items-center">
                    <FaUser style={{ fontSize: "1.5rem" }} className="mx-2" />
                    <span>{user}</span>
                  </Nav.Link>
                  <NavLink to={BACKOFFICE} className="d-flex align-items-center">
                    <BsGearFill  style={{ fontSize: "1.5rem" }}/>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    style={{ background: "#9AC9FB" }}
                    className="text-decoration-none log-button mx-2"
                    to={HOME}
                    onClick={handleShowLoginModal}
                  >
                    <RiLoginBoxLine />
                    Log-in
                  </NavLink>

                  <NavLink
                    className="text-decoration-none log-button mx-2"
                    to={HOME}
                    onClick={handleShowRegisterModal}
                  >
                    Registrarse
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderPublic;
