import React from 'react';
import { putData, postData } from '../../Services/activitiesService';
import { Form, Button, Container } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import { successMsg, warningMsg } from '../Alerts/Alert';
import * as Yup from 'yup';
import '../FormStyles.css';

const schema = Yup.object().shape({
	title: Yup.string()
		.required('El título es requerido')
		.min(4, 'El título debe contener una longitud mínima de 4 caracteres'),
	content: Yup.string().required('El contenido es requerido'),
	image: Yup.mixed().nullable().required('La imagen es requerida'),
});

const errorsStyles = { color: 'red', fontSize: '.875em' };

const ActivitiesForm = props => {
	const activities = props.activities
		? {
				id: props.activities.id,
				title: props.activities.name,
				content: props.activities.content,
				image: props.activities.image,
		  }
		: {
				title: '',
				content: '',
				image: '',
		  };

	const formik = useFormik({
		initialValues: activities,
		validationSchema: schema,
		onSubmit(values, id) {
			if (!props.news) {
				try {
					postData({
						name: values.title,
						content: values.content,
						image: values.image,
						user_id: 0,
						category_id: 1,
						created_at: Date(),
					});
					successMsg('Creacion exitosa');
				} catch (err) {
					warningMsg('Creacion fallida');
				}
			} else {
				try {
					putData(
						{
							name: values.title,
							content: values.content,
							image: values.image,
							user_id: 0,
							category_id: 1,
							created_at: Date(),
						},
						id
					);
					successMsg('Edicion exitosa');
				} catch (err) {
					warningMsg('Edicion fallida');
				}
			}
		},
	});

	const convertToBase64 = file => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = error => {
				reject(error);
			};
		}).then(base64 => {
			return base64;
		});
	};

	const handleImageChange = async event => {
		const base64String = await convertToBase64(event?.target.files[0]);
		formik.setFieldValue('image', base64String);
	};

	return (
		<Container className="mt-3">
			<h2 className="title-form">{`${
				!props.news ? 'Crear' : 'Editar'
			} actividad`}</h2>
			<div className="mt-5">
				<Form className="form" onSubmit={formik.handleSubmit}>
					<Form.Group controlId="title" className="mt-2 mb-3">
						<Form.Label>Título</Form.Label>
						<Form.Control
							type="text"
							name="title"
							value={formik.values.title || ''}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.title && formik.errors.title ? (
							<div className="mt-1" style={errorsStyles}>
								{formik.errors.title}
							</div>
						) : null}
					</Form.Group>

					<Form.Group controlId="content" className="mt-3 mb-3">
						<Form.Label>Descripcion</Form.Label>
						<CKEditor
							placeholder="Contenido"
							editor={ClassicEditor}
							data={formik.values.content || ''}
							name="content"
							type="text"
							onChange={(e, editor) =>
								formik.setFieldValue('content', editor.getData())
							}
						/>
						{formik.touched.content && formik.errors.content ? (
							<div className="mt-1" style={errorsStyles}>
								{formik.errors.content}
							</div>
						) : null}
					</Form.Group>

					<Form.Group controlId="image" className="mt-3 mb-3">
						<Form.Label>Imagen</Form.Label>
						<Form.Control
							name="image"
							type="file"
							accept="image/png, image/jpeg, image/jpg"
							onChange={event => handleImageChange(event)}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.image && formik.errors.image ? (
							<div className="mt-1" style={errorsStyles}>
								{formik.errors.image}
							</div>
						) : null}
					</Form.Group>

					<Button type="submit" className="w-100 mb-2">
						{!props.news ? 'Crear' : 'Editar'}
					</Button>
				</Form>
			</div>
		</Container>
	);
};

export default ActivitiesForm;
