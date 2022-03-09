import axios from 'axios';

const token = window.localStorage.getItem('token');

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

export const Put = (url, data) => {
	axios.put(url, data, config);
};

export const Patch = (url, data) => {
	axios.patch(url, data, config);
};
