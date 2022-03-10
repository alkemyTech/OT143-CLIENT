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
};

export const Put = (url, data, id) => {
	axios.put(url, data, config);
};

export const Patch = (url, data, id) => {
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
>>>>>>> 73bacd4b91a7a2353977158f54b324ec764ae05f
	axios.patch(url, data, config);
};

export const Post = (url, data) => {
	axios.post(url, data, config);
<<<<<<< HEAD
}

export const Delete = (url, id)=>{
    axios.delete(url, config);
};
=======
};

export const Delete = url => {
	axios.delete(url, config);
};
>>>>>>> 73bacd4b91a7a2353977158f54b324ec764ae05f
