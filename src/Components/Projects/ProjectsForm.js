import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { Formik, Form, useField } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

const TimeInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
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
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

const ProjectsForm = ({ id }) => {
	const titulo = useSelector(state => state.project.title);
	const info = useSelector(state => state.project.description);
	const imagen = useSelector(state => state.project.image);
	const fecha = useSelector(state => state.project.due_date);
	const edicion = useSelector(state => state.project.edit);

	const dispatch = useDispatch();

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

	const createProject = (values, id) => {
		if (edicion !== true) {
			axios.post('http://ongapi.alkemy.org/api/projects', {
				id: uuid(),
				title: values.title,
				description: data,
				image: values.image,
				due_date: values.due_date,
				created_at: Date(),
			});
		} else {
			axios.put(`http://ongapi.alkemy.org/api/projects/${id}`, {
				id: id,
				title: values.title,
				description: data,
				image: values.image,
				due_date: values.due_date,
				created_at: Date(),
			});
		}
	};

	return (
		<>
			<Formik
				initialValues={{
					title: titulo,
					image: imagen,
					due_date: fecha,
				}}
				validationSchema={Yup.object({
					title: Yup.string().required('Required'),
					due_date: Yup.date().min(new Date(), 'Fecha invalida'),
					image: Yup.mixed()
						.required('Required')
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
				onSubmit={(values, { setSubmitting }) => {
					createProject(values);
				}}>
				<Form>
					<TextInput
						label="Titulo "
						name="title"
						type="text"
						placeholder="Titulo"
					/>

					<CKEditor
						label="Descripción"
						editor={ClassicEditor}
						data=""
						type="text"
						placeholder="Descripción"
						onChange={handleEditor}
						onReady={handleReady}
					/>

					<TimeInput
						label="Fecha "
						name="due_date"
						type="date"
						value={Date()}
					/>

					<FileInput
						label=" Imagen "
						name="image"
						type="file"
						accept=".jpg, .jpeg, .png"
					/>

					<button type="submit">{edicion !== true ? 'Submit' : 'Edit'}</button>
				</Form>
			</Formik>
		</>
	);
};
export default ProjectsForm;
