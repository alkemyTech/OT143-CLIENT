import React, { useEffect } from 'react';
import Title from '../Title/Title';
import ContactForm from './ContactForm';
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
				<Title text={'Contacto'} />
				<ContactForm />
		</>
	);
};

export default Contact;
