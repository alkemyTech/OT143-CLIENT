import axios from "axios";
import Get from "./publicApiService";

const { REACT_APP_ORGANIZATION_API_ENDPOINT } = process.env;

const get = () => {
  const request = Get('organization');
  return request.then(response => response.data.data);
}

const create = body => {
  const request = axios.post(REACT_APP_ORGANIZATION_API_ENDPOINT, body);
  return request.then(response => response.data);
}

const update = (body, id) => {
  const request = axios.put(`${REACT_APP_ORGANIZATION_API_ENDPOINT}/${id}`, body);
  return request.then(response => response.data);
}

const remove = id => {
  const request = axios.delete(`${REACT_APP_ORGANIZATION_API_ENDPOINT}/${id}`);
  return request.then(response => response);
}

const organizationService = { get, create, update, remove };

export default organizationService;