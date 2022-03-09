import axios from 'axios';

const getHeaderAuthorization = () => {
	const token = localStorage.getItem('token');
	const headerAuthorization = `Bearer ${token}`;

	return token !== null ? headerAuthorization : null;
};

getHeaderAuthorization();

const config = {
	headers: {
		// Group: '143', //Aqui va el ID del equipo!!
		Auhtorization: headerAuthorization,
	},
};

export const GetAll = async url => {
	await axios.get(url, config);
};

export const Get = async url => {
	await axios.get(url, config);
};

export const Put = (url, data) => {
	axios.put(url, data, config);
};

export const Patch = (url, data) => {
	axios.patch(url, data, config);
};

export const Post = (url, data) => {
	axios.post(url, data, config);
};

export const Delete = url => {
	axios.delete(url, config);
};
