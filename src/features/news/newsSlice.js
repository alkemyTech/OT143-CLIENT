import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from '../../Services/news';

export const getNews = createAsyncThunk (
    'news/getNews',
    async () => {
        return getAll();
    }
)

const newsSlice = createSlice({
    name : 'news',
    initialState :{
        list : [],
        status: null,
    } ,
    extraReducers: {
        [getNews.pending] : (state,action) => {
            state.status = 'loading'
        },
        [getNews.fulfilled]: (state, {payload}) => {
            state.list= payload;
            state.status = 'success';
        },
        [getNews.rejected]: (state, action) =>{
            state.status = 'failed'
        }
    }
});


export default newsSlice.reducer;