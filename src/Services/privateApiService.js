import axios from 'axios';

const getHeaderAuthorization = () => {
	const token = localStorage.getItem('token');
	const headerAuthorization = `Bearer ${token}`;

	return token !== null ? headerAuthorization : null;
};

const config = {
	headers: {
		// Group: '143', //Aqui va el ID del equipo!!
		Auhtorization: `Bearer ${token}`,
	},
};

<<<<<<< HEAD
export const GetAll = async url => {
	await axios.get(url, config);
};

export const Get = async url => {
	await axios.get(url, config);
=======
export const GetAll = url => {
	axios.get(url, config);
};

export const Get = async url => {
	axios.get(url, config);
>>>>>>> 20767ae8ccc65396bb7fff1d4daf627883ff75b0
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

<<<<<<< HEAD
export const Delete = (url, id) => {
=======
export const Delete = url => {
>>>>>>> 20767ae8ccc65396bb7fff1d4daf627883ff75b0
	axios.delete(url, config);
};
