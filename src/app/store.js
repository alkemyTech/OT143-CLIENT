import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activitiesReducer from '../features/Activities/activitiesSlice';
import projectReducer from '../features/projects/projectSlice';
import membersReducer from '../features/members/membersSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		project: projectReducer,
		activities: activitiesReducer,
		members: membersReducer,
	},
});
