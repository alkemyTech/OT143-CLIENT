import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
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

const SelectRole = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error alert alert-danger">{meta.error}</div>
			) : null}
		</div>
	);
};

const MembersForm = ({ id }) => {
	const email = useSelector(state => state.members.email);
	const nombre = useSelector(state => state.members.name);
	const rol = useSelector(state => state.members.rol);
	const imagen = useSelector(state => state.members.image);
	const edicion = useSelector(state => state.members.edit);

	let data = '';

	const createMember = async (values, id) => {
		if (edicion !== true) {
			try {
				await axios.post('http://ongapi.alkemy.org/api/members', {
					id: uuid(),
					name: values.name,
					// email: values.email,
					image: values.image,
					// password: values.password,
					facebookUrl: '',
					linkedinUrl: '',
					description: values.rol,
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
				await axios.put(`http://ongapi.alkemy.org/api/members/${id}`, {
					id: id,
					name: values.name,
					email: values.email,
					image: values.image,
					password: values.password,
					rol: values.rol,
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
								name: nombre,
								email: email,
								image: imagen,
								rol: rol,
								password: '',
							}}
							validationSchema={Yup.object({
								name: Yup.string().required('Ingresar nombre'),
								email: Yup.string()
									.email('Ingresar email valido')
									.required('Ingresar email'),
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
								rol: Yup.string()
									.oneOf(['user', 'admin'], 'Invalid Job Type')
									.required('Ingresar rol'),
								password: Yup.string()
									.min(8, 'Minimo 8 caracteres')
									.required('Ingresar password'),
							})}
							onSubmit={(values, { setFieldValue }) => {
								createMember(values);
								// setFieldValue('title', '');
								// setFieldValue('image', '');
							}}>
							<Form>
								<TextInput
									label="Nombre"
									name="name"
									type="text"
									className="form-control mt-3 mb-3"
								/>

								<TextInput
									label="Email"
									name="email"
									type="email"
									className="form-control mt-3 mb-3"
								/>

								<FileInput
									label="Imagen"
									name="image"
									type="file"
									placeholder="Imagen"
									accept=".jpg, .jpeg, .png"
									className="form-control mt-3 mb-3"
								/>

								<SelectRole
									label="Rol"
									name="rol"
									className="form-control mt-3 mb-3">
									<option value="">Seleccione un rol</option>
									<option value="user">Usuario</option>
									<option value="admin">Administrador</option>
								</SelectRole>

								<TextInput
									label="Password"
									name="password"
									type="password"
									className="form-control mt-3 mb-3"
								/>

								{/* <img src={info} alt="" /> */}
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

export default MembersForm;
