import { Get, GetAll, Put, Post, Patch, Delete } from './privateApiService';

export const getData = id => {
	return Get(`https://ongapi.alkemy.org/api/slides/${id}`);
};

export const getAllData = () => {
	return GetAll(`https://ongapi.alkemy.org/api/slides`);
};

export const putData = (data, id) => {
	return Put(`https://ongapi.alkemy.org/api/slides/${id}`, data);
};

export const patchData = (data, id) => {
	return Patch(`https://ongapi.alkemy.org/api/slides/${id}`, data);
};

export const postData = data => {
	return Post(`https://ongapi.alkemy.org/api/slides`, data);
};

export const deleteData = id => {
	return Delete(`https://ongapi.alkemy.org/api/slides/${id}`);
};
