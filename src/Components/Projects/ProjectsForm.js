import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, useField } from 'formik';
import '../FormStyles.css';

const TextInput = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input>. We can use field meta to show an error
	// message if the field is invalid and it has been touched (i.e. visited)
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

const ProjectsForm = () => {
	return (
		<>
			<h1>Subscribe!</h1>
			<Formik
				initialValues={{
					title: '',
					desc: '',
					image: '',
					date: '',
				}}
				validationSchema={Yup.object({
					title: Yup.string().required('Required'),
					description: Yup.string().required('Required'),
					date: Yup.date().min(Date.now()),
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

					<TextInput label="Description" name="desc" type="text" />

					<TextInput label="Description" name="desc" type="text" />

					<TextInput label="Image" name="image" type="file" />

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
};
export default ProjectsForm;
