import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../images/somosMasOrg.png";
import "./Footer.scss";
import { SiInstagram, SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Footer = () => {

  return (
    <div>
      <Container className="footer-container pt-0 pb-4 px-4 mt-5 " fluid>
        <Row>
          <Col className=" d-flex justify-content-center">
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </Col>
          <Col className="p-3 d-none d-xxl-flex justify-content-center flex-column ">
            <h3>Campañas:</h3>
            <ul>
              <li>
                <Link className="text-decoration-none" to="/">Juguetes</Link>
              </li>
            </ul>
          </Col>
          <Col className=" d-flex justify-content-center align-items-center">
              <SiInstagram className="social-icon" />
              <span className="social-span d-none d-md-inline me-3">
                Instagram
              </span>
              <FaFacebookF className="social-icon" />
              <span className="social-span d-none d-md-inline me-3">
                Facebook
              </span>
                <SiTwitter className="social-icon" />
              <span className="social-span d-none d-md-inline me-3">Twitter</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
