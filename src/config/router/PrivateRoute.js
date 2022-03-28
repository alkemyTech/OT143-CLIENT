import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authMe } from '../../Services/authService';
import { isAuth, roleMe } from '../../features/auth/authSlice';
import Loading from '../../Components/Common/Loading';
import { warningMsg } from '../../Components/Alerts/Alert';
import LoginForm from '../../Components/Auth/LoginForm';
const PrivateRoute = ({ component: Component, ...rest }) => {
	const [loading, setLoading] = useState(true);
	const [show,setShow] = useState(true);
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
	const loginClose = ()=>{
		setShow(false)
	}

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
							warningMsg("Debe logearse para ingresar a este sitio"),
							<LoginForm show={show} close={loginClose} /> &&
							<Redirect to='/' />
							//consultar con juan como hacer para llamar al componente loginForm.
							
							
						)
					}
				/>
			)}
		</>
	);
};

export default PrivateRoute;
