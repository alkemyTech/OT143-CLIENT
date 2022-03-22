import { Get, GetAll, Put, Post, Patch, Delete } from './privateApiService';

export const getData = id => {
	return Get(`http://ongapi.alkemy.org/api/slides/${id}`);
};

export const getAllData = () => {
	return GetAll(`http://ongapi.alkemy.org/api/slides`);
};

export const putData = (data, id) => {
	return Put(`http://ongapi.alkemy.org/api/slides/${id}`, data);
};

export const patchData = (data, id) => {
	return Patch(`http://ongapi.alkemy.org/api/slides/${id}`, data);
};

export const postData = data => {
	return Post(`http://ongapi.alkemy.org/api/slides`, data);
};

export const deleteData = id => {
	return Delete(`http://ongapi.alkemy.org/api/slides/${id}`);
};
