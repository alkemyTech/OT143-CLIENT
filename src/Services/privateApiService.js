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
//Servicio privado GET
export const GetPrivateService = (url, id) => {
	axios
		.get(`${baseURL}/${url}/${id ? id : ""}`, config)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};

export const Put = (url, data, id) => {
	axios.put(url, data, config);
=======
const getHeaderAuthorization = ()=>{
	const token = localStorage.getItem('token');
	const headerAuthorization = `Bearer ${token}`;

	return token !== null ? headerAuthorization : null;
};

const config = {
	headers: {
		// Group: "143", //Aqui va el ID del equipo!!
		Authorization: getHeaderAuthorization(),
	},
};

export const GetAll =  url => {
    axios.get(url, config);
};

export const Get = async url => {
	axios.get(url, config);
};

export const Put = (url, data) => {
	axios.put(url, data, config);
};

export const Patch = (url, data) => {
	axios.patch(url, data, config);
};

export const Post = (url, data) => {
	axios.post(url, data, config);
};

export const Delete = url => {
	axios.delete(url, config);
>>>>>>> 73bacd4b91a7a2353977158f54b324ec764ae05f
};
