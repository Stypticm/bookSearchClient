import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksStore";

export const store = configureStore({
    reducer: {
        library: booksSlice
    }
})