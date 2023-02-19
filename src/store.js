import { configureStore } from "@reduxjs/toolkit";
import userSlicer from './slicer/userSlicer';

export const store = configureStore({
    reducer: {
        user: userSlicer
    },
})