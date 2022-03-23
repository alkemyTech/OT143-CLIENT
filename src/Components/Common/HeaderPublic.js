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
import { BsArrowRightCircle, BsFillPersonCheckFill } from "react-icons/bs";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import "./HeaderPublic.scss";
import { useSelector, useDispatch } from "react-redux";
import { regUser, isAuth, logOut } from "./../../features/auth/authSlice";
import RegisterForm from "./../Auth/RegisterForm";
import LoginForm from "./../Auth/LoginForm";
import Modal from "react-bootstrap/Modal";

const HeaderPublic = () => {
  const { token: token} = useSelector((state) => state.auth);
  const user = localStorage.getItem('user')
  const dispatch = useDispatch();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

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

      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
          <LoginForm close={handleCloseLoginModal} />
      </Modal>

      <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
          <RegisterForm close={handleCloseRegisterModal} />
      </Modal>

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
              {token ? (
                <>
                  <Nav.Link onClick={handleLogout}>
                    <NavLink
                      style={{ background: "#DB5752" }}
                      className="text-decoration-none log-button"
                      to="/"
                    >
                      <RiLogoutBoxLine /> Log-out
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link className="d-flex">
                    <BsFillPersonCheckFill />
                    {user}
                  </Nav.Link>
                </>
              ) : (
                <>
                  <NavLink
                    style={{ background: "#9AC9FB" }}
                    className="text-decoration-none log-button mx-2"
                    to="/"
                    onClick={handleShowLoginModal}
                  >
                    <RiLoginBoxLine />
                    Log-in
                  </NavLink>

                  <NavLink
                    className="text-decoration-none log-button mx-2"
                    to="/"
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
