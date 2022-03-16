import React, { useEffect } from 'react';
import Title from '../Title/Title';
import ContactForm from './ContactForm';
import {warningMsg} from './../Alerts/Alert';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = ({ data }) => {

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
				{/* <MapContainer center={[51.505, -0.09]} zoom={13}>
  				<TileLayer
    				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  				/>
  				<Marker position={[51.505, -0.09]}>
    			<Popup>
     				 A pretty CSS3 popup. <br /> Easily customizable.
    			</Popup>
  				</Marker>
				</MapContainer>  */}
				
		</>
	);
};

export default Contact;