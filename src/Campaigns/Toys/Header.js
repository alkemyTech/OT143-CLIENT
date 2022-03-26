import React from 'react';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HOME} from './../../config/router/routes'
import './header.css';

const Header = () => {
  return (
    <header>
      <Navbar bg="light">
        <Container className="d-flex justify-content-xl-around">
          <Navbar.Brand> 
            <img src="/images/logotipo-campania-juguetes.png" 
              width="60" 
              height="40" 
              className="logoCampania" 
              alt="Logotipo campaña juguetes"
            />
          </Navbar.Brand>
          <Navbar.Brand> 
            <span className="eslogan">Juguetes por más sonrisas</span> 
          </Navbar.Brand>
          <Link to={HOME}>
          <NavbarBrand> 
            <img src="/images/logo-somos-mas.png"
              width="60"
              heigh="40"
              className="logoSomosMas"
              alt="Logo Somos Mas"
            />
          </NavbarBrand>
          
          </Link> 
        </Container>
      </Navbar>
    </header> 
  );
}

export default Header;