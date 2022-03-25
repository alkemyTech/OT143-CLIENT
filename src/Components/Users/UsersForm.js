import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../FormStyles.css';
import { postUser } from '../../Services/usersService';

const UserForm = () => {
	const dispatch = useDispatch();
	const [initialValues, setInitialValues] = useState({
		name: '',
		email: '',
		password: '',
		role_id: '',
	});

	const handleChange = e => {
		if (e.target.name === 'name') {
			setInitialValues({ ...initialValues, name: e.target.value });
		}
		if (e.target.name === 'email') {
			setInitialValues({ ...initialValues, email: e.target.value });
		}
		if (e.target.name === 'password') {
			setInitialValues({ ...initialValues, password: e.target.value });
		}
		if (e.target.name === 'confirmPassword') {
			setInitialValues({ ...initialValues, confirmPassword: e.target.value });
		}
		if (e.target.name === 'roleid') {
			if (e.target.value === '1') {
				setInitialValues({ ...initialValues, role_id: 1 });
			} else if (e.target.value === '2') {
				setInitialValues({ ...initialValues, role_id: 2 });
			}
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (initialValues.password === initialValues.confirmPassword) {
			postUser({
				name: initialValues.name,
				email: initialValues.email,
				email_verified_at: '2022-03-17T16:07:57.300Z',
				password: initialValues.password,
				role_id: initialValues.role_id,
			});
		} else {
			return null;
		}
	};

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<input
				className="input-field"
				type="text"
				name="name"
				value={initialValues.name || ''}
				onChange={handleChange}
				placeholder="Name"></input>
			<input
				className="input-field"
				type="text"
				name="email"
				value={initialValues.email || ''}
				onChange={handleChange}
				placeholder="Email"></input>
			<input
				className="input-field"
				type="text"
				name="password"
				value={initialValues.password || ''}
				onChange={handleChange}
				placeholder="Password"></input>
			<input
				className="input-field"
				type="text"
				name="confirmPassword"
				value={initialValues.confirmPassword || ''}
				onChange={handleChange}
				placeholder="Confirm password"></input>
			<select
				className="input-field"
				value={initialValues.role_id || ''}
				onChange={handleChange}
				name="roleid">
				<option value="" disabled>
					Select the role
				</option>
				<option value="1">Admin</option>
				<option value="2">User</option>
			</select>
			<button className="submit-btn" type="submit">
				Send
			</button>
		</form>
	);
};

export default UserForm;
