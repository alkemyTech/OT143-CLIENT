import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSlides = createAsyncThunk('slides/getSlides', async () => {
        return fetch("https://ongapi.alkemy.org/api/slides").then((res) => res.json())
    }
)

export const slideSlice = createSlice({
    name: 'slides',
    initialState: {
        list: [],
        status: null
    },
    extraReducers: {
        [getSlides.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getSlides.fulfilled]: (state, {payload}) => {
            state.list = payload
            state.status = 'success'
        },
        [getSlides.rejecter]: (state, action) => {
            state.status = 'failed'
        }
    }
});

export default slideSlice.reducer;