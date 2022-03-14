import { Get, GetAll, Put, Post, Delete} from './privateApiService';

export const getContactId = (id)=>{
    const httpRequest = Get(process.env.REACT_APP_CONTACTS, id);
    return httpRequest.then(response => response.data);
};

export const getContact = ()=>{
    const httpRequest = GetAll(process.env.REACT_APP_CONTACTS);
    return httpRequest.then(response => response.data.data);
};

export const putContact = (data, id)=>{
    const httpRequest = Put(process.env.REACT_APP_CONTACTS + id, data); 
    return httpRequest.then(response => response.data); 
};

export const postContact = (data)=>{
    const httpRequest = Post(process.env.REACT_APP_CONTACTS, data);
    return httpRequest.then(response => response.data);
};

export const deleteContact = id=>{
    const httpRequest = Delete(process.env.REACT_APP_CONTACTS + id);
    return httpRequest.then(response => response);
};