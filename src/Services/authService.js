import { Post } from './privateApiService';

export const postReg = data => {
	return Post('https://ongapi.alkemy.org/api/register', data);
};

export const postIn = data => {
	return Post('https://ongapi.alkemy.org/api/login', data);
};
