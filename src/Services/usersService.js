import axios from 'axios';

const { REACT_APP_USERS_API_ENDPOINT } = process.env;

export const getAll = () => {
	const request = axios.get(REACT_APP_USERS_API_ENDPOINT);
	return request.then(response => response);
};

export const getUser = id => {
	const request = axios.get(`${REACT_APP_USERS_API_ENDPOINT}/${id}`);
	return request.then(response => response);
};

export const create = data => {
	const request = axios.post(REACT_APP_USERS_API_ENDPOINT, data);
	return request.then(response => response);
};

export const update = (id, data) => {
	const request = axios.put(`${REACT_APP_USERS_API_ENDPOINT}/${id}`, data);
	return request.then(response => response);
};

export const remove = id => {
	const request = axios.delete(`${REACT_APP_USERS_API_ENDPOINT}/${id}`);
	return request.then(response => response);
};
