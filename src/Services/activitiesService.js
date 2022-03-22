import { Get, GetAll, Put, Post, Patch, Delete, GetPrivateService} from './privateApiService';

export const getData = id => {
	return Get(`${process.env.REACT_APP_ACTIVITIES}/${id}`);
};

export const getAllData = () => {
<<<<<<< HEAD
	GetPrivateService('activities');
=======
	return GetAll(`${process.env.REACT_APP_ACTIVITIES}`);
>>>>>>> ec6c680d393974396d647840caecfcbdc46e68d9
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
