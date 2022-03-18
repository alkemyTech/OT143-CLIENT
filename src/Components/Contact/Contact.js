import React from 'react';
import Title from '../Title/Title';
import {warningMsg} from './../Alerts/Alert';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMapEvents } from 'react-leaflet'
import { Container,Row } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import imgLogo from './../../images/somosMasOrg.png';
import { useHistory } from 'react-router-dom';



const Contact = ({ data }) => {
	const routerHistory = useHistory()
	const iconsCustom = new L.Icon({
		iconUrl:imgLogo,
		iconSize:[40,45],
		shadowSize: [50,64],
		iconAnchor:[20,40],
		popupAnchor:[0,-40]
	});



	//position debe ser sacada del estado de la organizacion. se harcodea hasta tener esa info.
	const positionMarker =[-34.62, -58.51]

	//Si no recibe la posicion no debe renderizarse.(por props o state)
	return (
		<>
				<Title text={'Contacto'} />
				<h2 className='text-center form-control '>Direccion SomosMas</h2>

				<Container >
					{positionMarker ?  
				<Row  className= "align-items-center">

				<MapContainer center={[-34.62, -58.51]} zoom={16} style={{height: '300px'}} >
  				<TileLayer
    				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  				/>
  				<Marker position={positionMarker} icon={iconsCustom}  >
				<Tooltip>
					<span>ONG SomosMas</span>
				</Tooltip>
    			<Popup>
     				Fundacion Somos Mas🏡
    			</Popup>
  				</Marker>

				</MapContainer> 
				
				</Row> : 
					(warningMsg("Error al cargar Mapa"), routerHistory.push('/'))
					}
				</Container>
				
				
		</>
	);
};

export default Contact;