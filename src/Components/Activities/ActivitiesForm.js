import React from 'react';
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

const handleEditor = (e, editor) => {
	const data = editor.getData();
	console.log({ e, editor, data });
};

const ActivitiesForm = () => {
	return (
		<>
			<Formik
				initialValues={{
					title: '',
					description: '',
					image: '',
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
					console.log(values);
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
					/>
					<FileInput
						label="Imagen"
						name="image"
						type="file"
						placeholder="Imagen"
						accept=".jpg, .jpeg, .png"
					/>
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
};

export default ActivitiesForm;
