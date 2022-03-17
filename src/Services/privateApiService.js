import axios from 'axios';

const getHeaderAuthorization = () => {
	const token = localStorage.getItem('token');
	const headerAuthorization = `Bearer ${token}`;

	return token !== null ? headerAuthorization : null;
};

//Cuando sea solicitado cambiar la baseURL, por las variables de entorno.

const baseURL = 'https://ongapi.alkemy.org/api';
const config = {
	headers: {
		Authorization: getHeaderAuthorization(),
	},
};

//Servicio privado GET
export const GetPrivateService = (url, id) => {
	axios.get(`${baseURL}/${url}/${id ? id : null}`, config);
};

export const GetAll = url => {
	axios.get(url, config);
};

export const Get = async url => {
	axios.get(url, config);
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
