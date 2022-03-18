import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authMe } from '../../Services/authService';
import { isAuth, roleMe } from '../../features/auth/authSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				localStorage.getItem('auth') === 'true' ? (
					<Component {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

export default PrivateRoute;
