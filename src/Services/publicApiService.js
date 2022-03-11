import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = "http://ongapi.alkemy.org/api"
//Guardar en una variable de entorno BaseUrl
export const Get = async (url,id) => {
    try {
        const result  = await  axios.get(`${baseURL}/${url}/${id ? id : ""}`);
        return result; 
    } catch (error) {
        console.log(error)
    }
    
};


export const Post = (url, body) => {
    axios.post(url, body)
    .catch(err=>console.log(err))
}

export default Get

