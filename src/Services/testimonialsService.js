import axios from "axios";

const { REACT_APP_TESTIMONIALS_API_ENDPOINT } = process.env;

const get = () => {
  const request = axios.get("https://ongapi.alkemy.org/api/testimonials");
  return request.then(response => response.data);
}

const create = body => {
  const request = axios.post(REACT_APP_TESTIMONIALS_API_ENDPOINT, body);
  return request.then(response => response.data);
}

const update = (body, id) => {
  const request = axios.put(`${REACT_APP_TESTIMONIALS_API_ENDPOINT}/${id}`, body);
  return request.then(response => response.data);
}

const remove = id => {
  const request = axios.delete(`${REACT_APP_TESTIMONIALS_API_ENDPOINT}/${id}`);
  return request.then(response => response);
}

const testimonialsService = { get, create, update, remove };

export default testimonialsService;