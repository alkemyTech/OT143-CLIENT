import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AuthUser = ({ ...props }) => {
  const token = localStorage.getItem('token');

  if (token === null) {
    return <Route {...props} />
  } else {
    return <Redirect to="/" />
  }
}

export const AuthAdmin = ({ ...props }) => {
  const { isAdmin: auth } = useSelector(state => state.auth)

  if (auth && auth === 1) {
    return <Redirect to="/" />
  } else {
    return <Route {...props} />
  }
}