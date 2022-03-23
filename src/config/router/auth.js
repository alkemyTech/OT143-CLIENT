import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';


const token = localStorage.getItem('token');
const headerAuthorization = token != null ? `Bearer ${token}` : null;

const config = {
    headers: {
        Authorization: headerAuthorization,
    },
};

export const getUser = async () => {
    try {
        let res = await axios.get('https://ongapi.alkemy.org/api/auth/me', config)
        let user = await res.data;
    } catch (error) {
        console.log(error)
    }
}

export const AuthUser = ({...props}) => {
    const token = localStorage.getItem('token');

    if (token === null) {
        return <Route {...props} /> 
    } else {
        return <Redirect to="/" />
    }
}

export const AuthAdmin = ({...props}) => {
    const isAdmin = true;

    if(isAdmin === false) {
        return <Route {...props} />
    } else {
        return <Redirect to="/" />
    }
}