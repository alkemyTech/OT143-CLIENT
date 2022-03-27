import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from "../../Services/membersService";

export const getMembers = createAsyncThunk('members/getMembers', async () => {
  const request = getAll();
  return request.then(response => response.data.data)
    .catch(error => console.log(error));
});

const initialState = {
  list: [],
  status: null,
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
    [getMembers.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success';
    },
    [getMembers.rejected]: (state, action) => {
      state.status = 'failed';
    }
  }
});

export const { getName, getImage } = membersSlice.actions;

export default membersSlice.reducer;
