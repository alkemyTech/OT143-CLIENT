import { Get } from './publicApiService';
import {
  GetAll,
  Put,
  Post,
  Patch,
  Delete,
  GetPrivateService,
} from './privateApiService';

export const getAll = () => {
  return Get('categories').then(response => response);
};

export const GetCategoriesId = async id => {
  try {
    const { data } = await Get('categories', id);
    return data;
  } catch (error) {
    return error;
  }
};

export const getData = id => {
  return Get(`${process.env.REACT_APP_CATEGORIES_ENDPOINT}/${id}`);
};

export const getAllData = () => {
  return GetAll(process.env.REACT_APP_CATEGORIES_ENDPOINT);
};

export const putData = (data, id) => {
  return Put(`${process.env.REACT_APP_CATEGORIES_ENDPOINT}/${id}`, data);
};

export const postData = data => {
  return Post(`${process.env.REACT_APP_CATEGORIES_ENDPOINT}`, data);
};

export const patchData = (data, id) => {
  return Patch(`${process.env.REACT_APP_CATEGORIES_ENDPOINT}/${id}`, data);
};

export const deleteData = id => {
  return Delete(`${process.env.REACT_APP_CATEGORIES_ENDPOINT}/${id}`);
};
