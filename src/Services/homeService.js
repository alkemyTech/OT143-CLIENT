import { Get, GetAll, Put, Post, Patch, Delete } from './privateApiService';

export const getData = (id)=>{
    Get(`http://ongapi.alkemy.org/api/home/${id}`);
};

export const getAllData = ()=>{
    GetAll(`http://ongapi.alkemy.org/api/home`);
};

export const putData = (data, id)=>{
    Put(`http://ongapi.alkemy.org/api/home/${id}`, data);
};

export const patchData = (data, id)=>{
    Patch(`http://ongapi.alkemy.org/api/home/${id}`, data);
};

export const postData = (data)=>{
    Post(`http://ongapi.alkemy.org/api/home`, data);
};

export const deleteData = (id)=>{
    Delete(`http://ongapi.alkemy.org/api/home/${id}`);
};