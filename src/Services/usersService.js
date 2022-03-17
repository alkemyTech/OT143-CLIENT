import { Get, Put, Post, Delete } from "./privateApiService";

const { REACT_APP_USERS_API_ENDPOINT } = process.env;

export const getUsers = () => {
  Get(REACT_APP_USERS_API_ENDPOINT);
};

export const postUser = (data) => {
  Post(REACT_APP_USERS_API_ENDPOINT, data);
};

export const GetUser = (id) => {
  Get(`${REACT_APP_USERS_API_ENDPOINT}/${id}`);
};

export const putUser = (id, data) => {
  Put(`${REACT_APP_USERS_API_ENDPOINT}/${id}`, data);
};

export const deleteUser = (id) => {
  Delete(`${REACT_APP_USERS_API_ENDPOINT}/${id}`);
};
