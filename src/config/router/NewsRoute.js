import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { warningMsg } from '../../Components/Alerts/Alert';

const NewsRoute = ({ component: Component, ...rest }) => {
	if (localStorage.getItem('auth') !== 'true') {
		warningMsg('Tienes que ser usuario valido para registrarte al newsletter');
	}
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

export default NewsRoute;
