import { Get, GetAll, Put, Post, Patch, Delete } from './privateApiService';

export const getData = (id)=>{
    Get(`https://ongapi.alkemy.org/api/slides/${id}`);
};

export const getAllData = ()=>{
    GetAll(`https://ongapi.alkemy.org/api/slides`);
};

export const putData = (data, id)=>{
    Put(`https://ongapi.alkemy.org/api/slides/${id}`, data);
};

export const patchData = (data, id)=>{
    Patch(`https://ongapi.alkemy.org/api/slides/${id}`, data);
};

export const postData = (data)=>{
    Post(`https://ongapi.alkemy.org/api/slides`, data);
};

export const deleteData = (id)=>{
    Delete(`https://ongapi.alkemy.org/api/slides/${id}`);
};