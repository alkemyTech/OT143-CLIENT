import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { warningMsg } from "../../Components/Alerts/Alert";
import { getAll } from "../../Services/usersService";

export const getUsers = createAsyncThunk(
  "users/getUsers", async () => {
    const request = getAll();
    return request.then(response => response.data.data)
      .catch(error => {
        console.log(error);
        warningMsg("Error. No se pudo cargar los usuarios");
      });
  });

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    setUsersList: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading"
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = "success"
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed"
    },
  }
});

export const { setUsersList } = usersSlice.actions;

export default usersSlice.reducer;
