import { Get, GetAll, Put, Post, Delete} from './privateApiService';

export const getContactId = (id)=>{
    const httpRequest = Get(`http://ongapi.alkemy.org/api/contacts`, id);
    return httpRequest.then(response => response.data);
};

export const getContact = ()=>{
    const httpRequest = GetAll(`http://ongapi.alkemy.org/api/contacts`);
    return httpRequest.then(response => response.data.data);
};

export const putContact = (data, id)=>{
    const httpRequest = Put(`http://ongapi.alkemy.org/api/contacts/${id}`, data); 
    return httpRequest.then(response => response.data); 
};

export const postContact = (data)=>{
    const httpRequest = Post(`http://ongapi.alkemy.org/api/contacts`, data);
    return httpRequest.then(response => response.data);
};

export const deleteContact = id=>{
    const httpRequest = Delete(`http://ongapi.alkemy.org/api/contacts/${id}`);
    return httpRequest.then(response => response);
};