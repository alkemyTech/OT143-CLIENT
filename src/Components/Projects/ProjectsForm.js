import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
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

const handleChange = (event, editor) => {
	const data = editor.getData();
};

const handleReady = editor => {
	console.log('Editor is ready to use!', editor);
};

const

const ProjectsForm = () => {
	return (
		<>
			<h1>Subscribe!</h1>
			<Formik
				initialValues={{
					title: '',
					desc: '',
					image: '',
					due_date: '',
				}}
				validationSchema={Yup.object({
					title: Yup.string().required('Required'),
					description: Yup.string().required('Required'),
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
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}>
				<Form>
					<TextInput label="Title" name="title" type="text" />

					<CKEditor
						editor={ClassicEditor}
						data="<p>Hello from CKEditor 5!</p>"
						onReady={handleReady}
						onChange={handleChange}
					/>

					<TextInput label="Date" name="due_date" type="date" />

					<FileInput
						label="Image"
						name="image"
						type="file"
						accept=".jpg, .jpeg, .png"
					/>

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
};
export default ProjectsForm;
