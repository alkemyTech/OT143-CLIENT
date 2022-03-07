import axios from "axios";

const { REACT_APP_NEWS_API_ENDPOINT } = process.env;

const getAll = () => {
  const request = axios.get(REACT_APP_NEWS_API_ENDPOINT);
  return request.then(response => response.data.data);
}

const create = body => {
  const request = axios.post(REACT_APP_NEWS_API_ENDPOINT, body);
  return request.then(response => response.data);
}

const update = (body, id) => {
  const request = axios.put(`${REACT_APP_NEWS_API_ENDPOINT}/${id}`, body);
  return request.then(response => response.data);
}

const remove = id => {
  const request = axios.delete(`${REACT_APP_NEWS_API_ENDPOINT}/${id}`);
  return request.then(response => response);
}

export default { getAll, create, update, remove };