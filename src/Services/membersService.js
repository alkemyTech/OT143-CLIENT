import axios from "axios";

const BASE_URL = process.env.REACT_APP_MEMBERS_API_ENDPOINT;

export const getAll = () => {
  const request = axios.get(BASE_URL);
  return request.then(response => response);
};

export const create = body => {
  const request = axios.post(BASE_URL);
  return request.then(response => response.data);
};

export const update = (body, id) => {
  const request = axios.put(`${BASE_URL}/${id}`, body);
  return request.then(response => response.data);
};

export const remove = id => {
  const request = axios.delete(`${BASE_URL}/${id}`);
  return request.then(response => response);
};
