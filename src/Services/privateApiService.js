import axios from 'axios';

const getHeaderAuthorization = ()=>{
	const token = localStorage.getItem('token');
	headerAuthorization = "Bearer: " + token;

	return token !== null ? headerAuthorization : null;
};

const config = {
	headers: {
		Group: 01, //Aqui va el ID del equipo!!
		Auhtorization: getHeaderAuthorization(),
	},
};

export const GetAll = async url => {
	await axios.get(url, config);
};

export const Get = async id => {
	await axios.get(url, config);
};

export const Put = (url, data, id) => {
	axios.put(url, data, config);
};

export const Patch = (url, data, id) => {
	axios.patch(url, data, config);
};

export const Post = (url, data) => {
	axios.post(url, data, config);
}

export const Delete = (url)=>{
    axios.delete(url, config);
};