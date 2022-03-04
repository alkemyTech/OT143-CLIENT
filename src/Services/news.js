import axios from "axios";

const BASE_URL = "http://ongapi.alkemy.org/api/news";

const getAll = () => {
 const request = axios.get(BASE_URL);
 return  request.then(response => response.data.data);
}

export default {getAll};