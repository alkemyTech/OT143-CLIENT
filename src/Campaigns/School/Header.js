import React from 'react';
import logo from './img/Logotipo-campaña-materiales-escolares.png';
import logo2 from './img/LOGO-SOMOS-MAS.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light navbar-school">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row d-flex  justify-content-center w-100">
            <span className="navbar-brand col-4 col-lg-4 d-flex justify-content-center">
              <img src={logo} alt="" className="logo1" />
            </span>
            <span className="navbar-brand col-3 d-none  d-xxl-flex align-items-center">
              <h1 className="slogan">Juntos en la vuelta al cole</h1>
            </span>
            <span className="navbar-brand d-none d-sm-block col-4 d-sm-flex justify-content-center">
             <Link to='/'><img src={logo2} alt="" className="logo2" /></Link> 
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
