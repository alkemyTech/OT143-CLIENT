import axios from 'axios';

const getHeaderAuthorization = () => {
	const token = localStorage.getItem('token');
	const headerAuthorization = `Bearer ${token}`;

	return token !== null ? headerAuthorization : null;
};

//Cuando sea solicitado cambiar la baseURL, por las variables de entorno.

<<<<<<< HEAD
const baseURL = "https://ongapi.alkemy.org/api";
=======
const baseURL = 'http://ongapi.alkemy.org/api';
>>>>>>> ec6c680d393974396d647840caecfcbdc46e68d9
const config = {
	headers: {
		Authorization: getHeaderAuthorization(),
	},
};

//Servicio privado GET
export const GetPrivateService = (url, id) => {
<<<<<<< HEAD
	axios
		.get(`${baseURL}/${url}`+ `${ id ? `/${id}` : ""}`, config)
=======
	axios.get(`${baseURL}/${url}/${id ? id : null}`, config);
>>>>>>> ec6c680d393974396d647840caecfcbdc46e68d9
};

export const GetAll = url => {
	axios.get(url, config);
};

export const Get = url => {
	return axios.get(url, config);
};

export const Put = (url, data) => {
	return axios.put(url, data, config);
};

export const Patch = (url, data) => {
	return axios.patch(url, data, config);
};

export const Post = (url, data) => {
	return axios.post(url, data, config);
};

export const Delete = url => {
	return axios.delete(url, config);
};
