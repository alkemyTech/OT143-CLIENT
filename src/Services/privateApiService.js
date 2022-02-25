import axios from 'axios';

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

export const Patch = (url, data, id) => {
	axios.patch(url, data, config);
};
