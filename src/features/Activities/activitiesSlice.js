import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllData } from '../../Services/activitiesService';

export const getActivities = createAsyncThunk('activities/getActivities', async () => {
  const request = getAllData();
  return request.then(response => response.data.data)
    .catch(error => {
      console.log(error);
    });
});

const initialState = {
  list: [],
  status: null,
  title: '',
  description: '',
  image: '',
  edit: false,
  empty: '',
  data_cr: ''
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
  extraReducers: {
    [getActivities.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getActivities.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getActivities.rejected]: (state, action) => {
      state.status = "failed"
    }
  }
});

export const { getTitle, getDescription, getImage, emptyField } =
  activitiesSlice.actions;

export default activitiesSlice.reducer;
