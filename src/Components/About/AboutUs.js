import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import {warningMsg} from './../Alerts/Alert';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import { Container,Row,Col } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import imgLogo from './../../images/somosMasOrg.png';
import { Redirect } from 'react-router-dom';
import organizationService from '../../Services/organization';
import moment from 'moment';
import 'moment/locale/es';

const AboutUs =()=>{
	moment.locale('es');
	const [about,setAbout]=useState()
	useEffect(()=>{
		try  {
		 const cargaData= async () =>{
				const result = await organizationService.get();
				console.log(result)	
				setAbout(result)}


				cargaData();
		} catch (error) {
			console.log(error);
			warningMsg("Eror(500)-Intente Nuevamente")
		}
		
	},[])
	const iconsCustom = new L.Icon({
		iconUrl:imgLogo,
		iconSize:[90,105],
		shadowSize: [50,64],
		iconAnchor:[20,40],
		popupAnchor:[0,-40]
	});
	
    	//position debe ser sacada del estado de la organizacion. se harcodea hasta tener esa info.
	const positionMarker =[-34.62, -58.51]

	//Si no recibe la posicion no debe renderizarse.(por props o state)

    return(<>
        <Title text={about?.name}/>
		<h2 className='text-center'>{about?.welcome_text}</h2>
		<Container>
					<Row className= "" >
					<Col className='justify-content-center'>
					<img  src={about?.logo} alt="NosotrosIMG" />
					</Col>
					</Row>
					
			
			<Row className='justify-content-start'>
				<span>{about?.long_description}</span>
			</Row>
			<Row className='d-flex justify-content-end'>
			<Col>
			<span dangerouslySetInnerHTML={{ __html: about?.short_description }}></span>
			</Col>
			<Col>
			<span>Fundada en : {moment(about?.created_at).format('LL')}</span>
			</Col>
			</Row>
			

		</Container>
        <Container className='my-2'>
            <Row>
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
     				{about?.address}
    			</Popup>
  				</Marker>

				</MapContainer> 
				
				</Row> : 
					(warningMsg("Error al cargar Mapa"), <Redirect to="/"/>)
					}
				
            </Row>
        </Container>
		</>)
}
export default AboutUs;