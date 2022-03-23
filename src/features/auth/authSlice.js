import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const headerAuthorization = token != null ? `Bearer ${token}` : null;

const config = {
    headers: {
        Authorization: headerAuthorization,
    },
};

export const getUser = createAsyncThunk('user/getUser', async () => {
	return fetch('https://ongapi.alkemy.org/api/auth/me', config).then((res) => res.json())
})

const initialState = {
	isAdmin: null,
	status: null,
	token: localStorage.getItem('token'),
	user: null,
	auth: null
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
	extraReducers: {
		[getUser.pending]: (state, action) => {
			state.status = 'loading'
		},
		[getUser.fulfilled]: (state, {payload}) => {
			state.isAdmin = payload.data.user.role_id
			state.status = 'success'
		},
		[getUser.rejecter]: (state, action) => {
			state.status = 'failed'
		}
	}
});

export const { regUser, isAuth, logOut } = authSlice.actions;

export default authSlice.reducer;
