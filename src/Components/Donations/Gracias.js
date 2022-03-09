import React from 'react';

const texto = 'Gracias por ayudar!';

const Gracias = ({ text }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="card col-6 offset-3 mt-5 pt-3 mb-3 pb-4">
					<h1 className="d-flex justify-content-center">{texto}</h1>
				</div>
			</div>
		</div>
	);
};

export default Gracias;
