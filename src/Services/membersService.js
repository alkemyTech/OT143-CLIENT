import axios from "axios";

export const getAll = () => {
  const request = axios.get(process.env.REACT_APP_MEMBERS_API_ENDPOINT);
  return request.then(response => response.data.data);
};

export const create = body => {
  const request = axios.post(process.env.REACT_APP_MEMBERS_API_ENDPOINT, body);
  return request.then(response => response.data);
};

export const update = (body, id) => {
  const request = axios.put(`${process.env.REACT_APP_MEMBERS_API_ENDPOINT}/${id}`, body);
  return request.then(response => response.data);
};

export const remove = id => {
  const request = axios.delete(`${process.env.REACT_APP_MEMBERS_API_ENDPOINT}/${id}`);
  return request.then(response => response);
};
