import { Get, Post } from './publicApiService';

export const getAll = () => {
  return Get('categories').then(response => response);
}

export const GetCategoriesId = async (id) => {
  try {
    const { data } = await Get('categories', id);
    return data;
  } catch (error) {
    return error;
  }
}

export const create = body => {
  Post('categories', body);
}