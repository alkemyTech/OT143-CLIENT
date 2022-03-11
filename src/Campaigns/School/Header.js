import React from 'react';
import logo from './Logotipo-campaña-materiales-escolares.png';
import logo2 from './LOGO-SOMOS-MAS.png';
import './Header.css';

const Header = () => {
	return (
		<div>
			<nav class="navbar navbar-light bg-light">
				<div class="container-fluid d-flex justify-content-center">
					<div className="row d-flex  justify-content-center w-100">
						<span class="navbar-brand col-4 col-lg-4 d-flex  justify-content-center  ms-3">
							<img src={logo} alt="" className="logo1" />
						</span>
						<span class="navbar-brand col-3 d-none  d-xxl-flex align-items-center">
							<h1 className="slogan">Juntos en la vuelta al cole</h1>
						</span>
						<span class="navbar-brand d-none d-sm-block col-4 d-sm-flex justify-content-center">
							<img src={logo2} alt="" className="logo2" />
						</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
