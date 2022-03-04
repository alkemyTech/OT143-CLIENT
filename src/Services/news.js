import axios from "axios";

const BASE_URL = "http://ongapi.alkemy.org/api/news";

const getAll = () => {
  const request = axios.get(BASE_URL);
  return request.then(response => response.data.data);
}

const create = body => {
  const request = axios.post(BASE_URL, body);
  return request.then(response => response.data);
}

const update = (body, id) => {
  const request = axios.put(`${BASE_URL}/${id}`, body);
  return request.then(response => response.data);
}

const remove = id => {
  const request = axios.delete(`${BASE_URL}/${id}`);
  return request.then(response => response);
}

export default { getAll, create, update, remove };