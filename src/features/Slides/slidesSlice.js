import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: '',
	description: '',
	image: '',
	edit: false,
	empty: '',
	date_cr: '',
};

export const slidesSlice = createSlice({
	name: 'slides',
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
		emptyField: (state, action) => {
			state.empty = action.payload;
		},
	},
});

export const { getTitle, getDescription, getImage, emptyField } =
	slidesSlice.actions;

export default slidesSlice.reducer;
