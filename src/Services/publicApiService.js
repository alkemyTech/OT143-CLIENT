import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT;

export const Get = async (entity, id) => {
  try {
    const result = axios.get(`${baseURL}/${entity}${id ? `/${id}` : ""}`);
    return result.then(response => response);
  } catch (error) {
    console.log(error);
  }
};

export const Post = (entity, body) => {
  try {
    axios.post(`${baseURL}/${entity}`, body);
  }
  catch (error) {
    console.log(error);
  }
}

