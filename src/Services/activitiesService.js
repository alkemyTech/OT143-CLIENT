import { Get, GetAll, Put, Post, Patch, Delete, GetPrivateService} from './privateApiService';

export const getData = id => {
	return Get(`${process.env.REACT_APP_ACTIVITIES}/${id}`);
};

export const getAllData = () => {
	return GetAll(process.env.REACT_APP_ACTIVITIES);
};

export const putData = (data, id) => {
	return Put(`${process.env.REACT_APP_ACTIVITIES}/${id}`, data);
};

export const postData = data => {
	return Post(`${process.env.REACT_APP_ACTIVITIES}`, data);
};

export const patchData = (data, id) => {
	return Patch(`${process.env.REACT_APP_ACTIVITIES}/${id}`, data);
};

export const deleteData = id => {
	return Delete(`${process.env.REACT_APP_ACTIVITIES}/${id}`);
};
