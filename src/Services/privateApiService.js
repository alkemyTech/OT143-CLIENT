import axios from 'axios';

const token = window.localStorage.getItem('token');

const getHeaderAuthorization = ()=>{
	headerAuthorization = "Bearer: " + token;

	return token !== null ? headerAuthorization : null;
};

const config = {
	headers: {
		Group: 01, //Aqui va el ID del equipo!!
		Auhtorization: `Bearer ${token}`,
	},
};

export const Get = () => {
	axios
		.get('https://jsonplaceholder.typicode.com/users', config)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};

export const Put = (url, data, id) => {
	axios.put(url, data, config);
};
