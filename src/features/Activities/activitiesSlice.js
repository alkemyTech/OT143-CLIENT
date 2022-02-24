import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: '',
	description: '',
	image: '',
	edit: false,
	date_cr: '',
	activities: '',
};

export const activitiesSlice = createSlice({
	name: 'activities',
	initialState,
	reducers: {
		getTitle: (state, action) => {
			state.title = action.payload;
		},
		getDescription: (state, action) => {
			state.description = action.payload;
		},
		getImage: (state, action) => {
			state.image = action.payload;
		},
		getActivities: (state, action) => {
			state.activities = action.payload;
		},
	},
});

export const { getTitle, getDescription, getImage, getActivities } =
	activitiesSlice.actions;

export default activitiesSlice.reducer;
