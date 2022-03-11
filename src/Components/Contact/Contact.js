import React, { useEffect } from 'react';
import Title from '../Title/Title';
import {warningMsg} from './../Alerts/Alert';

const Contact = ({ data }) => {
	console.log(data)
	// const city = data.city;
	// const address = data.address;
	// const phone = data.phone;
	// const email = data.email;

	//COMENTO DATA PORQUE NO RECIBE DATOS.

	useEffect(()=>{
		try {
			console.log(data)
			//setear la logica y los datos aqui.
		} catch (error) {
			error ? warningMsg("Error al cargar la pagina") :
			console.error(error)
		}
	},[])
	return (
		<>
			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="card col-6 offset-3 pt-3">
						<Title text={'Contacto'} />
						<div className="mt-5">
							<h4 className="d-flex justify-content-center">
								{/* <b>{about}</b> */}
							</h4>
							<h4 className="mt-5">
								<b>Ciudad:</b> 
							</h4>
							<h4 className="mt-3">
								<b>Direccion:</b> 
							</h4>
							<h4 className="mt-3">
								<b>Telefono:</b> 
							</h4>
							<h4 className="mt-3 pb-3">
								<b>Email:</b> 
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;