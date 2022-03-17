import { Get, Put, Post, Delete } from './privateApiService';

export const getUsers = () => {
	Get('https://ongapi.alkemy.org/api/users');
};

export const postUser = data => {
	Post('https://ongapi.alkemy.org/api/users', data);
};

export const GetUser = id => {
	Get(`https://ongapi.alkemy.org/api/users/${id}`);
};

export const putUser = (id, data) => {
	Put(`https://ongapi.alkemy.org/api/users/${id}`, data);
};

export const deleteUser = id => {
	Delete(`https://ongapi.alkemy.org/api/users/${id}`);
};
