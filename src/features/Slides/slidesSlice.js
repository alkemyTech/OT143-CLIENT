import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSlides = createAsyncThunk('slides/getSlides', async () => {
    return fetch("https://ongapi.alkemy.org/api/slides").then((res) => res.json())
}
)

const initialState = {
    list: [],
    status: null,
	title: '',
	description: '',
	image: '',
	edit: false,
	empty: '',
	date_cr: '',
};

export const slidesSlice = createSlice({
	name: 'slides',
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
			state.empty = action.payload;
		},
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

export const { getTitle, getDescription, getImage, emptyField } =
	slidesSlice.actions;

export default slidesSlice.reducer;



