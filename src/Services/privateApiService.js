import axios from 'axios';

<<<<<<< HEAD
const token = window.localStorage.getItem('token');
const baseURL = "http://ongapi.alkemy.org/api";
const config = {
	headers: {
		Group: 143, 
		Auhtorization: `Bearer ${token}`,
	},
};

export const Get = (id) => {
	axios
		.get(`${baseURL}/${id}`, config)
		.then(res => console.log(res))
		.catch(err => console.log(err));
=======
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
>>>>>>> 28e145b32e2810142bcd2e904dcae70939936dd7
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

export const Delete = (url, id)=>{
    axios.delete(url, config);
};