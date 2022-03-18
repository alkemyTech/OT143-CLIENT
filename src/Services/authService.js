import { Post } from './privateApiService';

export const postReg = data => {
	return Post('https://ongapi.alkemy.org/api/register', data);
};

export const logIn = data => {
	return Post('https://ongapi.alkemy.org/api/login', data);
};
