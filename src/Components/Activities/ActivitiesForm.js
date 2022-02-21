import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getImage,
	getDescription,
	getTitle,
} from '../../features/Activities/activitiesSlice';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
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

const ActivitiesForm = () => {
	const titulo = useSelector(state => state.activities.title);
	const info = useSelector(state => state.activities.description);
	const imagen = useSelector(state => state.activities.image);
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

	return (
		<>
			<Formik
				initialValues={{
					title: titulo,
					image: imagen,
				}}
				validationSchema={Yup.object({
					title: Yup.string().required('Required'),
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
					dispatch(getTitle(values.title));
					dispatch(getImage(values.image));
					dispatch(getDescription(data));
				}}>
				<Form>
					<TextInput
						label="Titulo"
						name="title"
						type="text"
						placeholder="Titulo"
					/>
					<CKEditor
						label="Descripción"
						editor={ClassicEditor}
						data=""
						name="description"
						type="text"
						placeholder="Descripción"
						onChange={handleEditor}
						onReady={handleReady}
					/>
					<FileInput
						label="Imagen"
						name="image"
						type="file"
						placeholder="Imagen"
						accept=".jpg, .jpeg, .png"
					/>
					<img src={info} alt="" />
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
};

export default ActivitiesForm;
