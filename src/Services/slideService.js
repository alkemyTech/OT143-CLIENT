import { Get, GetAll, Put, Post, Patch, Delete } from './privateApiService';

export const getData = (id)=>{
    Get(`http://ongapi.alkemy.org/api/slides/${id}`);
};

export const getAllData = ()=>{
    GetAll(`http://ongapi.alkemy.org/api/slides`);
};

export const putData = (data, id)=>{
    Put(`http://ongapi.alkemy.org/api/slides/${id}`, data);
};

export const patchData = (data, id)=>{
    Patch(`http://ongapi.alkemy.org/api/slides/${id}`, data);
};

export const postData = (data)=>{
    Post(`http://ongapi.alkemy.org/api/slides`, data);
};

export const deleteData = (id)=>{
    Delete(`http://ongapi.alkemy.org/api/slides/${id}`);
};


