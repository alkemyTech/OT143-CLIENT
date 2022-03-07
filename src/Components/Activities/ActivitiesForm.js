import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Form, useField } from 'formik';
import { successMsg, warningMsg } from '../Alerts/Alert';
import * as Yup from 'yup';
import '../FormStyles.css';

const TextInput = ({ label, foc, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error alert alert-danger">{meta.error}</div>
			) : null}
		</>
	);
};

const FileInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="file-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error alert alert-danger">{meta.error}</div>
			) : null}
		</>
	);
};

const ActivitiesForm = ({ id }) => {
	const edicion = useSelector(state => state.activities.edit);
	const titulo = useSelector(state => state.activities.title);
	const info = useSelector(state => state.activities.description);
	const imagen = useSelector(state => state.activities.image);

	let timeout = null;
	let data = '';

	const handleEditor = (e, editor) => {
		const desc = editor.getData();
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			data = desc;
		}, 1000);
	};

	const handleReady = editor => {
		editor.setData(info);
	};

	const handeSubmit = editor => {
		editor.setData('');
	};

	const createActivity = async (values, id) => {
		if (edicion !== true) {
			try {
				await axios.post('http://ongapi.alkemy.org/api/activities', {
					id: uuid(),
					name: values.title,
					description: data,
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
				await axios.put(`http://ongapi.alkemy.org/api/activities/${id}`, {
					id: id,
					name: values.title,
					description: data,
					image: values.image,
					user_id: 0,
					category_id: 1,
					created_at: Date(),
				});
				successMsg('Edicion exitosa');
			} catch (err) {
				warningMsg('Edicion fallida');
			}
		}
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="card col-6 offset-3 mt-5 pt-3">
						<Formik
							initialValues={{
								title: titulo,
								image: imagen,
							}}
							validationSchema={Yup.object({
								title: Yup.string().required('Ingresar titulo'),
								image: Yup.mixed()
									.required('Ingresar imagen')
									.test('fileType', 'Unsupported File Format', value => {
										if (value) {
											if (value.includes('png')) {
												return true;
											} else if (value.includes('jpg')) {
												return true;
											} else if (value.includes('jpeg')) {
												return true;
											} else {
												return false;
											}
										}
									}),
							})}
							onSubmit={(values, { setFieldValue }) => {
								createActivity(values);
								setFieldValue('title', '');
								setFieldValue('image', '');
							}}>
							<Form>
								<TextInput
									label="Titulo"
									name="title"
									type="text"
									className="form-control mt-3 mb-3"
								/>
								<div className="mb-3">
									<div className="mb-3">
										<span>Descripción</span>
									</div>

									<CKEditor
										label="Descripción"
										editor={ClassicEditor}
										data=""
										name="description"
										type="text"
										placeholder="Descripción"
										onChange={handleEditor}
										onReady={handleReady}
										onSubmit={handeSubmit}
										className="form-control"
									/>
								</div>

								<FileInput
									label="Imagen"
									name="image"
									type="file"
									placeholder="Imagen"
									accept=".jpg, .jpeg, .png"
									className="form-control mt-3 mb-3"
								/>
								<img src={info} alt="" />
								<button
									type="submit"
									className="form-control btn btn-primary mt-3 mb-3">
									{edicion === false ? 'Submit' : 'Edit'}
								</button>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</>
	);
};

export default ActivitiesForm;
