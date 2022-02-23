import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emptyField } from '../../features/projects/projectSlice';
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
				<div className="error alert alert-danger">{meta.error}</div>
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

const ProjectsForm = ({ id }) => {
	const titulo = useSelector(state => state.project.title);
	const info = useSelector(state => state.project.description);
	const imagen = useSelector(state => state.project.image);
	const fecha = useSelector(state => state.project.due_date);
	const edicion = useSelector(state => state.project.edit);
	const vacio = useSelector(state => state.project.empty);

	let timeout = null;
	let data = '';

	const handleEditor = (e, editor) => {
		const desc = editor.getData();
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			if (desc !== '') {
				dispatch(emptyField(false));
			}
			data = desc;
		}, 1000);
	};

	const handleReady = editor => {
		editor.setData(info);
	};

	const dispatch = useDispatch();

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

	const handleBlur = (e, editor) => {
		if (editor.getData() !== '') {
			dispatch(emptyField(false));
		} else {
			dispatch(emptyField(true));
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
								if (vacio !== true && vacio !== '') {
									createProject(values);
								} else {
									dispatch(emptyField(true));
								}
							}}>
							<Form>
								<TextInput
									label="Titulo "
									name="title"
									type="text"
									placeholder="Titulo"
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
										onBlur={handleBlur}
									/>

									{vacio === true ? (
										<div className="error alert alert-danger mt-3">
											Required
										</div>
									) : null}
								</div>

								<TimeInput
									label="Fecha "
									name="due_date"
									type="date"
									value={fecha}
									className="form-control mt-3 mb-3"
									pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])/(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])/(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
								/>

								<FileInput
									label=" Imagen "
									name="image"
									type="file"
									accept=".jpg, .jpeg, .png"
									className="form-control mt-3 mb-3"
								/>

								<button
									type="submit"
									className="form-control btn btn-primary mt-3 mb-3">
									{edicion !== true ? 'Submit' : 'Edit'}
								</button>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProjectsForm;
