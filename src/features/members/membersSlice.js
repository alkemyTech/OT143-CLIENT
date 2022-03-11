import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: '',
	email: '',
	image: '',
	rol: '',
	edit: false,
	date_cr: '',
};

export const membersSlice = createSlice({
	name: 'members',
	initialState,
	reducers: {
		getName: (state, action) => {
			state.name = action.payload;
		},
		getEmail: (state, action) => {
			state.email = action.payload;
		},
		getImage: (state, action) => {
			state.image = action.payload;
		},
		getRol: (state, action) => {
			state.rol = action.payload;
		},
	},
});

export const { getName, getEmail, getImage, getRol } = membersSlice.actions;

export default membersSlice.reducer;
