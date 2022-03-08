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

<<<<<<< HEAD
export const Get = async id => {
	await axios.get(url, config);
>>>>>>> 28e145b32e2810142bcd2e904dcae70939936dd7
=======
export const Get = async (url) => {
	axios.get(url, config)
>>>>>>> 9a44d7766b2528ab383af6be7ce6dd85d4a90765
};

export const Put = (url, data) => {
	axios.put(url, data, config)
};

export const Patch = (url, data) => {
	axios.patch(url, data, config)
};

export const Post = (url, data) => {
	axios.post(url, data, config)
}

export const Delete = (url)=>{
    axios.delete(url, config);
};
