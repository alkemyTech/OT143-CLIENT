import { Route, Redirect } from 'react-router-dom';

const AuthenticatedUserPath = ({...props})=>{
    const registered = localStorage.getItem('token');

    if (registered === null) {
        return <Route {...props}/>
    }else{
        return <Redirect to="/"/>
    }
}

export default AuthenticatedUserPath;