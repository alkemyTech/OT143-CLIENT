import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: localStorage.getItem('token'),
	user: null,
	auth: localStorage.getItem('auth'),
	role: localStorage.getItem('role'),
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		regUser: (state, action) => {
			state.user = action.payload.user;
			state.auth = true;
			state.token = action.payload.token;
		},
		isAuth: (state, action) => {
			state.auth = action.payload;
		},
		logOut: state => {
			state.token = null;
			state.auth = false;
			state.user = null;
		},
		roleMe: (state, action) => {
			state.role = action.payload;
		},
	},
});

export const { regUser, isAuth, logOut, roleMe } = authSlice.actions;

export default authSlice.reducer;
