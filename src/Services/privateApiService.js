import axios from 'axios';

const getHeaderAuthorization = () => {
	const token = localStorage.getItem('token');
	const headerAuthorization = `Bearer ${token}`;

	return token !== null ? headerAuthorization : null;
};

const config = {
	headers: {
		Authorization: getHeaderAuthorization(),
	},
};

//Servicio privado GET
export const GetPrivateService = (url, id) => {
	axios
		.get(`${url}`+ `${ id ? `/${id}` : null}`, config)
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
