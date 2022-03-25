import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authMe } from '../../Services/authService';
import { isAuth, roleMe } from '../../features/auth/authSlice';
import Loading from '../../Components/Common/Loading';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const authS = useSelector(state => state.auth.auth);
	const roleS = useSelector(state => state.auth.role);
	useEffect(() => {
		authMe()
			.then(res => {
				dispatch(roleMe(res.data.data.user.role_id));
				dispatch(isAuth(res.data.success));
				setLoading(false);
			})
			.catch(res => setLoading(false));
	}, []);

	return (
		<>
			{loading === true ? (
				<div className="d-flex justify-content-center align-items-center" style={{height:"300px"}}>
					<Loading />
				</div>
			) : (
				<Route
					{...rest}
					render={props =>
						authS === true && roleS === 1 ? (
							<Component {...props} />
						) : (
							<Redirect to="/" />
						)
					}
				/>
			)}
		</>
	);
};

export default PrivateRoute;
