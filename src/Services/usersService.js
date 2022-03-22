import { Get, Put, Post, Delete } from './privateApiService';

export const getUsers = () => {
	return Get('http://ongapi.alkemy.org/api/users');
};

export const postUser = data => {
	return Post('http://ongapi.alkemy.org/api/users', data);
};

export const GetUser = id => {
	return Get(`http://ongapi.alkemy.org/api/users/${id}`);
};

export const putUser = (id, data) => {
	return Put(`http://ongapi.alkemy.org/api/users/${id}`, data);
};

export const deleteUser = id => {
	return Delete(`http://ongapi.alkemy.org/api/users/${id}`);
};
