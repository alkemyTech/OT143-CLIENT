import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ABOUT,
  BACKOFFICE,
  HOME,
  CONTACT,
  TOYS_CAMPAIGN,
  SCHOOL_CAMPAIGN,
} from "./../../config/router/routes";
import { useSelector, useDispatch } from "react-redux";
import { getUser, logOut } from '../../features/auth/authSlice';
import imgLogo from "./../../images/somosMasOrg.png";
import { FaUser } from "react-icons/fa";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import LoginForm from "./../Auth/LoginForm";
import RegisterForm from "./../Auth/RegisterForm";
import Mercadopago from "../Mercadopago/Mercadopago";
import "./HeaderPublic.scss";

const HeaderPublic = () => {
  const { isAdmin: auth } = useSelector(state => state.auth)
  const { token } = useSelector((state) => state.auth);
  const localToken = localStorage.getItem("token");
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

  useEffect(() => {
    if (localToken != null) {
      dispatch(getUser());
    }
    console.log(auth);
  }, [dispatch]);

  const nav = [
    { path: ABOUT, title: "Nosotros" },
    { path: HOME, title: "" },
    { path: CONTACT, title: "Contacto" },
    { path: TOYS_CAMPAIGN, title: "Juguetes" },
    { path: SCHOOL_CAMPAIGN, title: "Escolar" }
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logOut);
    setIsLogged(false);
  };

  const handleShowLoginModal = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
  };
  const handleShowRegisterModal = (e) => {
    e.preventDefault();
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
                  <div key={index}>
                    {e.title === "Juguetes" || e.title === "Escolar" || e.title === "" ? null :
                      auth && auth === 2 && e.title === "Contacto" ? null : (
                        <NavLink
                          to={e.path}
                          className="nav-link me-auto"
                          activeStyle={{ color: "tomato" }}
                        >
                          {e.title}
                        </NavLink>
                      )}
                  </div>
                );
              })}
              <NavDropdown title="Donaciones">
                <Mercadopago />
              </NavDropdown>
              {/* mejorar la logica recorriendo con un filter el array y que devuelva los dos elementos que necesito */}
              <NavDropdown title="Campañas">
                <NavLink className="dropdown-item" activeStyle={{ color: "tomato" }} to={nav[3].path}>
                  {nav[3].title}
                </NavLink>
                <NavLink className="dropdown-item" activeStyle={{ color: "tomato" }} to={nav[4].path} >
                  {nav[4].title}
                </NavLink>
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
                    <RiLogoutBoxLine /> Salir
                  </NavLink>
                  <NavLink to={BACKOFFICE} className="nav-link d-flex align-items-center">
                    <FaUser style={{ fontSize: "1.5rem" }} color="#9AC9FB" className="mx-2" />
                    <span>{user}</span>
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
                    Ingresar
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
