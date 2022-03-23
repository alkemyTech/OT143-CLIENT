import { Get, GetAll, Put, Post, Patch, Delete } from './privateApiService';

<<<<<<< HEAD
export const getData = (id)=>{
    Get(`https://ongapi.alkemy.org/api/slides/${id}`);
||||||| e41dc78
export const getData = (id)=>{
    Get(`http://ongapi.alkemy.org/api/slides/${id}`);
=======
export const getData = id => {
	return Get(`http://ongapi.alkemy.org/api/slides/${id}`);
>>>>>>> a04f55e972b4896d5190102b4d36963970ec0da3
};

<<<<<<< HEAD
export const getAllData = ()=>{
    GetAll(`https://ongapi.alkemy.org/api/slides`);
||||||| e41dc78
export const getAllData = ()=>{
    GetAll(`http://ongapi.alkemy.org/api/slides`);
=======
export const getAllData = () => {
	return GetAll(`http://ongapi.alkemy.org/api/slides`);
>>>>>>> a04f55e972b4896d5190102b4d36963970ec0da3
};

<<<<<<< HEAD
export const putData = (data, id)=>{
    Put(`https://ongapi.alkemy.org/api/slides/${id}`, data);
||||||| e41dc78
export const putData = (data, id)=>{
    Put(`http://ongapi.alkemy.org/api/slides/${id}`, data);
=======
export const putData = (data, id) => {
	return Put(`http://ongapi.alkemy.org/api/slides/${id}`, data);
>>>>>>> a04f55e972b4896d5190102b4d36963970ec0da3
};

<<<<<<< HEAD
export const patchData = (data, id)=>{
    Patch(`https://ongapi.alkemy.org/api/slides/${id}`, data);
||||||| e41dc78
export const patchData = (data, id)=>{
    Patch(`http://ongapi.alkemy.org/api/slides/${id}`, data);
=======
export const patchData = (data, id) => {
	return Patch(`http://ongapi.alkemy.org/api/slides/${id}`, data);
>>>>>>> a04f55e972b4896d5190102b4d36963970ec0da3
};

<<<<<<< HEAD
export const postData = (data)=>{
    Post(`https://ongapi.alkemy.org/api/slides`, data);
||||||| e41dc78
export const postData = (data)=>{
    Post(`http://ongapi.alkemy.org/api/slides`, data);
=======
export const postData = data => {
	return Post(`http://ongapi.alkemy.org/api/slides`, data);
>>>>>>> a04f55e972b4896d5190102b4d36963970ec0da3
};

<<<<<<< HEAD
export const deleteData = (id)=>{
    Delete(`https://ongapi.alkemy.org/api/slides/${id}`);
||||||| e41dc78
export const deleteData = (id)=>{
    Delete(`http://ongapi.alkemy.org/api/slides/${id}`);
=======
export const deleteData = id => {
	return Delete(`http://ongapi.alkemy.org/api/slides/${id}`);
>>>>>>> a04f55e972b4896d5190102b4d36963970ec0da3
};
