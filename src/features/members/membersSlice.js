import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { warningMsg } from '../../Components/Alerts/Alert';

export const getMembers = createAsyncThunk('members/getMembers', async () => {
	return fetch('https://ongapi.alkemy.org/api/members')
	.then((res) => res.json())
	.catch((error) => {
		console.log(error);
		warningMsg('Ha ocurrido un problema, error en los datos');
	});
})
const initialState = {
	list: [],
	status : null,
	name: '',
	image: ''
};

export const membersSlice = createSlice({
	name: 'members',
	initialState,
	reducers: {
		getName: (state, action) => {
			state.name = action.payload;
		},
		getImage: (state, action) => {
			state.image = action.payload;
		},
	},
	extraReducers: {
		[getMembers.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getMembers.fulfilled]: (state, {payload}) => {
			state.list = payload
			state.status = 'success';
		},
		[getMembers.rejected]:(state, action) => {
			state.status= 'failed';
		}
	}
});

export const { getName, getImage } = membersSlice.actions;

export default membersSlice.reducer;
