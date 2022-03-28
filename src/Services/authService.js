import { Get, Post } from './privateApiService';

const token = localStorage.getItem('token');

const config = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
};

export const postReg = data => {
	return Post('https://ongapi.alkemy.org/api/register', data);
};

export const logIn = data => {
	return Post('https://ongapi.alkemy.org/api/login', data);
};

export const authMe = async () => {
	return await Get('https://ongapi.alkemy.org/api/auth/me', config);
};
