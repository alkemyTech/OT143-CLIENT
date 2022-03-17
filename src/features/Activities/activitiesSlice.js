import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getAllData} from './../../Services/activitiesService'

export const getActivities = createAsyncThunk('activities/getActivites', async ()=>{
			return fetch(getAllData()).then((res)=>res.json());
})
const initialState = {
	list:[],
	status : null,
		title:'',
		description:'',
		image:'',
		edit:false,
		empty :'',
		data_cr:''
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
		emptyField: (state, action) => {
			state.activities = action.payload;
		},
	},
	extraReducers:{
		[getActivities.pending]:(state,action)=>{
			state.status ='loading'
		},
		[getActivities.fulfilled]:(state,{payload})=>{
			state.list=payload
			state.status ='OK'
		},
		[getActivities.rejected]:(state,action)=>{
			state.status="Error"
		}
	}
});

export const { getTitle, getDescription, getImage, emptyField } =
	activitiesSlice.actions;

export default activitiesSlice.reducer;
