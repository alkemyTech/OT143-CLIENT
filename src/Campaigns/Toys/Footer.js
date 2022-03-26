import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../images/somosMasOrg.png";
import { SiInstagram, SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HOME } from "../../config/router/routes";
import "./footer.scss";

const Footer = () => {

  return (
    <div>
      <Container className="footer footer-container pt-0 pb-4 px-4 mt-5" fluid>
        <Row className="contenido">
          <Col className="logo-container">
              <Link to={HOME}><img className="logo" src={logo} alt="" /></Link>
              <Link to={HOME} className="text-decoration-none ong">Somos más</Link>
          </Col>
          <Col className="campaigns p-3 justify-content-center flex-column">
            <h3>Campañas:</h3>
            <ul>
              <li>
                <Link className="text-decoration-none campaign" to="/">Vuelta a la escuela</Link>
              </li>
              <li>
                <Link className="text-decoration-none campaign" to="/">Juguetes</Link>
              </li>
            </ul>
          </Col>
          <Col className="social-icons d-flex justify-content-center align-items-center">
              <SiInstagram className="social-icon" />
              <span className="social-text me-3">
                Instagram
              </span>
              <FaFacebookF className="social-icon" />
              <span className="social-text me-3">
                Facebook
              </span>
                <SiTwitter className="social-icon" />
              <span className="social-text me-3">Twitter</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
