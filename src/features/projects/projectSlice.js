import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: '',
	description: '',
	image: '',
	date: '',
	edit: false,
	empty: '',
};

export const projectSlice = createSlice({
	name: 'project',
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
		getDate: (state, action) => {
			state.date = action.payload;
		},
		emptyField: (state, action) => {
			state.empty = action.payload;
		},
	},
});

export const { getTitle, getDescription, getImage, getDate, emptyField } =
	projectSlice.actions;

export default projectSlice.reducer;