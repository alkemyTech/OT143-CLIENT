import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activitiesReducer from '../features/Activities/activitiesSlice';
import projectReducer from '../features/projects/projectSlice';
import membersReducer from '../features/members/membersSlice';
<<<<<<< HEAD
import authReducer from '../features/auth/authSlice';
=======
import slidesReducer from '../features/Slides/slidesSlice';
>>>>>>> b8b52233d0147c1fcd130f65246d24ab1789d8d1

export default configureStore({
	reducer: {
		counter: counterReducer,
		project: projectReducer,
		activities: activitiesReducer,
		members: membersReducer,
<<<<<<< HEAD
		auth: authReducer,
=======
		slides: slidesReducer,
>>>>>>> b8b52233d0147c1fcd130f65246d24ab1789d8d1
	},
});
