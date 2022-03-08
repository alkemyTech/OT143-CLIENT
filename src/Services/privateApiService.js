import axios from 'axios';

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
	axios.patch(url, data, config);
};

export const Post = (url, data) => {
	axios.post(url, data, config);
}

export const Delete = (url, id)=>{
    axios.delete(url, config);
};