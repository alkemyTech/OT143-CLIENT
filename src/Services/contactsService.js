import { Get, GetAll, Put, Post, Delete} from './privateApiService';

export const getContactId = (id)=>{
    Get(`http://ongapi.alkemy.org/api/contacts`, id);
};

export const getContact = ()=>{
    GetAll(`http://ongapi.alkemy.org/api/contacts`);
};

export const putContact = (data, id)=>{
    Put(`http://ongapi.alkemy.org/api/contacts`, data, id);
};

export const postContact = (data)=>{
    Post(`http://ongapi.alkemy.org/api/contacts`, data);
};

export const deleteContact = (id)=>{
    Delete(`http://ongapi.alkemy.org/api/contacts`, id);
};