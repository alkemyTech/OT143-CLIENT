import React from 'react';
import Title from '../Title/Title';

const Contact = ({ email, phone, city, address, about }) => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="card col-6 offset-3 d-flex justify-content-center">
						<Title text={'Contacto'} />
						<div>
							<h6>
								{about} | {city} | {address} | {phone} | {email}
							</h6>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
