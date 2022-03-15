import React, { useState, useRef, useEffect } from 'react';
import '../../Components/FormStyles.css';
import axios from 'axios';
import GoogleMaps from 'simple-react-google-maps';
import Geocode from 'react-geocode';
import { Loader } from '@googlemaps/js-api-loader';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container } from 'react-bootstrap';
import { isSchema } from 'yup';
import { postContact } from '../../Services/contactsService';
import { warningMsg } from './../Alerts/Alert';

const ContactForm = () => {
	const [latA, setLat] = useState(-34.603683);
	const [lngA, setLng] = useState(-58.381557);

	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const phoneRegex =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const schema = Yup.object().shape({
		name: Yup.string().required('El nombre es requerido'),
		email: Yup.string()
			.required('El email es requerido')
			.matches(emailRegex, 'El email ingresado no es válido'),
		phone: Yup.string()
			.required('El telefono es requerido')
			.matches(phoneRegex, 'El numero ingresado no es válido'),
		message: Yup.string().required('El mensaje es requerido'),
		address: Yup.string().required('Direccion requerida'),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
			address: '',
		},
		validationSchema: schema,
		async onSubmit(values, { resetForm }) {
			console.log(values, 'VALUES');
			const body = {
				name: values.name,
				email: values.email,
				phone: values.phone,
				message: values.message,
				address: values.address,
			};
			try {
				values
					? postContact(body)
					: warningMsg('Vuelva a completar el formulario');
			} catch (error) {
				error ? warningMsg('Internal Server Error') : console.log(error);
			}
		},
	});

	useEffect(() => {
		console.log(latA);
		console.log(lngA);
	}, [latA, lngA]);

	let address = '';
	address = formik.values.address;

	Geocode.setApiKey('AIzaSyAgCWh2UcjCm6s4PvSrlLdqDaInVbsj1hg');
	Geocode.setLanguage('en');
	Geocode.setRegion('ar');
	Geocode.setLocationType('ROOFTOP');
	const handleAddress = e => {
		e.preventDefault();
		Geocode.fromAddress(address).then(
			response => {
				const { lat, lng } = response.results[0].geometry.location;
				setLat(lat);
				setLng(lng);
			},
			error => {
				console.error(error);
			}
		);

		console.log(latA);
		console.log(lngA);
	};

	return (
		<Container>
			<h2 className="title-form">Formulario de contacto</h2>
			<Form className="form-container" onSubmit={formik.handleSubmit}>
				<Form.Group>
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						type="text"
						name="name"
						value={formik.values.name || ''}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div className="mt-1">{formik.errors.name}</div>
					) : null}
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="text"
						name="email"
						value={formik.values.email || ''}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className="mt-1">{formik.errors.email}</div>
					) : null}
				</Form.Group>
				<Form.Group>
					<Form.Label>Teléfono</Form.Label>
					<Form.Control
						type="text"
						name="phone"
						value={formik.values.phone || ''}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.phone && formik.errors.phone ? (
						<div className="mt-1">{formik.errors.phone}</div>
					) : null}
				</Form.Group>
				<Form.Group>
					<Form.Label>Mensaje</Form.Label>
					<Form.Control
						type="text"
						name="message"
						value={formik.values.message || ''}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.message && formik.errors.message ? (
						<div className="mt-1">{formik.errors.message}</div>
					) : null}
				</Form.Group>
				<Form.Group>
					<Form.Label>Direccion</Form.Label>
					<Form.Control
						type="text"
						name="address"
						value={formik.values.address || ''}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<button className="btn btn-primary mt-3" onClick={handleAddress}>
						{' '}
						Confirmar direccion
					</button>
					{formik.touched.address && formik.errors.address ? (
						<div className="mt-1">{formik.errors.address}</div>
					) : null}
				</Form.Group>

				<GoogleMaps
					apiKey={'AIzaSyAgCWh2UcjCm6s4PvSrlLdqDaInVbsj1hg'}
					style={{ height: '400px', width: '100%' }}
					zoom={12}
					center={{ lat: -34.603683, lng: -58.381557 }}
					markers={{ lat: latA, lng: lngA }}
				/>
				<Button type="submit">Enviar</Button>
			</Form>
		</Container>
	);
};

export default ContactForm;
