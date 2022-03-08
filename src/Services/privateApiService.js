import axios from 'axios';

const token = window.localStorage.getItem('token');
const baseURL = "http://ongapi.alkemy.org/api";
const config = {
	headers: {
		Group: 143, 
		Auhtorization: `Bearer ${token}`,
	},
};

export const GetPrivateService = (url, id) => {
	axios
		.get(`${baseURL}/${url}/${id ? id : ""}`, config)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};

export const Put = (url, data, id) => {
	axios.put(url, data, config);
};
