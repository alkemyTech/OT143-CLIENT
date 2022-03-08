import React from 'react';
import Title from '../Title/Title';

const Contact = ({ data }) => {
	const city = data.city;
	const address = data.address;
	const phone = data.phone;
	const email = data.email;

	return (
		<>
			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="card col-6 offset-3 pt-3">
						<Title text={'Contacto'} />
						<div className="mt-5">
							<h4 className="d-flex justify-content-center">
<<<<<<< HEAD
						
=======
								{/* <b>{about}</b> */}
>>>>>>> 9a44d7766b2528ab383af6be7ce6dd85d4a90765
							</h4>
							<h4 className="mt-5">
								<b>Ciudad:</b> {city}
							</h4>
							<h4 className="mt-3">
								<b>Direccion:</b> {address}
							</h4>
							<h4 className="mt-3">
								<b>Telefono:</b> {phone}
							</h4>
							<h4 className="mt-3 pb-3">
								<b>Email:</b> {email}
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
