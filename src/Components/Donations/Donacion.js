import React from 'react';

const texto = 'Ayudanos con la causa';

const Donacion = ({ text }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="card col-6 offset-3 mt-5 pt-3 mb-3 pb-4">
					{text ? (
						<h1 className="d-flex justify-content-center">{text}</h1>
					) : (
						<h1 className="d-flex justify-content-center">{texto}</h1>
					)}
					<button className="btn btn-primary mt-3 col-4 offset-4">
						Continuar a Mercadopago
					</button>
				</div>
			</div>
		</div>
	);
};

export default Donacion;
