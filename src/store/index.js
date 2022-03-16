import { configureStore } from "@reduxjs/toolkit";
// reducers
import slides from './slices/slides';

export default configureStore({
    reducer: {
        slides
    }
});