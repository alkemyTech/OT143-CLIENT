import { createSlice } from '@reduxjs/toolkit';

const tokenStorage = localStorage.getItem('token') 

// GUARDAR TOKEN Y USER EN LOCALSTORAGE

const initialState = {
	token: tokenStorage ? tokenStorage : null,
	user: null,
	auth: null,
	role: null,
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
	},
});

export const { regUser, isAuth, logOut } = authSlice.actions;

export default authSlice.reducer;
