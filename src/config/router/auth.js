import { Route, Redirect } from 'react-router-dom';

const AuthUser = ({...props}) => {
    const logged = localStorage.getItem('token')

    if (logged === null) {
        return <Route {...props} /> 
    } else {
        return <Redirect to="/" />
    }
}

export default AuthUser;