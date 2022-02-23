import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
<<<<<<< HEAD
import activitiesReducer from '../features/Activities/activitiesSlice';
=======
import projectReducer from '../features/projects/projectSlice';
>>>>>>> 20070007ed5520b573642012c0542560a52977a7

export default configureStore({
	reducer: {
		counter: counterReducer,
<<<<<<< HEAD
		activities: activitiesReducer,
=======
		project: projectReducer,
>>>>>>> 20070007ed5520b573642012c0542560a52977a7
	},
});
