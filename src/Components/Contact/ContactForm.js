import React, { useState, useRef, useEffect } from 'react';
import '../../Components/FormStyles.css';
import axios from 'axios';
import GoogleMaps from 'simple-react-google-maps';
import Geocode from 'react-geocode';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container } from 'react-bootstrap';
import { isSchema } from 'yup';
import { postContact } from '../../Services/contactsService';
import { warningMsg } from './../Alerts/Alert';
import Loading from '../Common/Loading';

const ContactForm = () => {
	const [latA, setLat] = useState(-34.603683);
	const [lngA, setLng] = useState(-58.381557);
	const [click, setClick] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setClick(false);
		}, 1000);
	}, [click]);

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
		calle: Yup.string().required('Calle requerida'),
		numero: Yup.string().required('Numero requerido'),
		provincia: Yup.string().required('Provincia requerida'),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
			calle: '',
			numero: '',
			provincia: '',
		},
		validationSchema: schema,
		async onSubmit(values, { resetForm }) {
			console.log(values, 'VALUES');
			const body = {
				name: values.name,
				email: values.email,
				phone: values.phone,
				message: values.message,
				calle: values.calle,
				numero: values.numero,
				provincia: values.provincia,
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

	Geocode.setApiKey('AIzaSyAgCWh2UcjCm6s4PvSrlLdqDaInVbsj1hg');
	Geocode.setLanguage('en');
	Geocode.setRegion('ar');
	Geocode.setLocationType('ROOFTOP');
	const handleAddress = e => {
		e.preventDefault();

		Geocode.fromAddress(
			`${formik.values.numero}+${formik.values.calle}+${formik.values.provincia}`
		).then(
			response => {
				const { lat, lng } = response.results[0].geometry.location;
				setLat(lat);
				setLng(lng);
				setClick(true);
			},
			error => {
				console.error(error);
			}
		);
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
				<label htmlFor="gmap">Dirección</label>
				<div className="card px-4 py-3" name="gmap">
					<Form.Group>
						<Form.Label>Calle</Form.Label>
						<Form.Control
							type="text"
							name="calle"
							value={formik.values.calle || ''}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="mb-2"
						/>

						{formik.touched.calle && formik.errors.calle ? (
							<div className="mt-1">{formik.errors.calle}</div>
						) : null}
					</Form.Group>
					<Form.Group>
						<Form.Label>Numero</Form.Label>
						<Form.Control
							type="text"
							name="numero"
							value={formik.values.numero || ''}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="mb-2"
						/>

						{formik.touched.numero && formik.errors.numero ? (
							<div className="mt-1">{formik.errors.numero}</div>
						) : null}
					</Form.Group>
					<Form.Group>
						<Form.Label>Provincia</Form.Label>
						<Form.Control
							type="text"
							name="provincia"
							value={formik.values.provincia || ''}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="mb-2"
						/>

						{formik.touched.provincia && formik.errors.provincia ? (
							<div className="mt-1">{formik.errors.provincia}</div>
						) : null}
					</Form.Group>
					<button className="btn btn-primary mt-3 mb-3" onClick={handleAddress}>
						{' '}
						Confirmar direccion
					</button>

					{click === false ? (
						<GoogleMaps
							apiKey={'AIzaSyAgCWh2UcjCm6s4PvSrlLdqDaInVbsj1hg'}
							style={{ height: '400px', width: '100%' }}
							zoom={15}
							center={{ lat: latA, lng: lngA }}
							markers={{ lat: latA, lng: lngA }}
						/>
					) : (
						<Loading />
					)}
				</div>

				<Button type="submit">Enviar</Button>
			</Form>
		</Container>
	);
};

export default ContactForm;
