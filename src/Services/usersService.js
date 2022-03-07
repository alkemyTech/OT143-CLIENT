import { Get, Put, Post, Delete } from "./privateApiService";

export default getUsers = () => {
  Get("http://ongapi.alkemy.org/api/users");
};

export const postUser = (data) => {
  Post("http://ongapi.alkemy.org/api/users", data);
};

export const getUser = (id) => {
  Get(`http://ongapi.alkemy.org/api/users/${id}`);
};

export const putUser = (id, data) => {
  Put(`http://ongapi.alkemy.org/api/users/${id}`, data);
};

export const deleteUser = (id) => {
  Delete(`http://ongapi.alkemy.org/api/users/${id}`);
};
