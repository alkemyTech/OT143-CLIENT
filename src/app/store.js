import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activitiesReducer from '../features/Activities/activitiesSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		activities: activitiesReducer,
	},
});
