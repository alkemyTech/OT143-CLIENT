import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { warningMsg } from '../../../Components/Alerts/Alert';

export const slideSlice = createSlice({
    name: 'slides',
    initialState: {
        list: []
    },
    reducers: {
        setSlidesList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setSlidesList } = slideSlice.actions;

export default slideSlice.reducer;

export const fetchAllSlides = () => (dispatch) => {
    axios
        .get("https://ongapi.alkemy.org/api/slides")
        .then((response) => {
            dispatch(setSlidesList(response.data.data));
        })
        .catch((error) => warningMsg(error));
}